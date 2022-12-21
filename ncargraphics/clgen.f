c                       array,     low,hi, cinc,nlv nmx,lvlsarray size,flag
c                                                      of 
c                                                      lvls
c     CALL CLGEN       (Z,MX,NX,NY,GL,HA,    GP,NLA,NLM,CL,  NCL,ICNST) 
c-----------------------------------------------------------------------
      SUBROUTINE CLGEN (Z,MX,NX,NNY,CCLO,CHI,CINC,NLA,NLM,CL,NCL,ICNST) 
      SAVE
      DIMENSION       CL(NLM)    ,Z(MX,NNY) 
      COMMON /CONRE1/ IOFFP      ,SPVAL 
      COMMON/savci/i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,
     1    i14,i15,cmin,cint
       write(6,601)
  601   format(1h ,' welcome to  CLGEN')
C 
C CLGEN PUTS THE VALUES OF THE CONTOUR LEVELS IN CL.
C VARIABLE NAMES MATCH THOSE IN CONREC, WITH THE FOLLOWING ADDITIONS. 
C         NCL     -NUMBER OF CONTOUR LEVELS PUT IN CL.
C         ICNST   -FLAG TO TELL CONREC IF A CONSTANT FIELD WAS DETECTED.
C                 .ICNST=0 MEANS NON-CONSTANT FIELD.
C                 .ICNST NON-ZERO MEANS CONSTANT FIELD. 
C 
C TO PRODUCE NON-UNIFORM CONTOUR LEVEL SPACING, REPLACE THE CODE IN THIS
C SUBROUTINE WITH CODE TO PRODUCE WHATEVER SPACING IS DESIRED.
C 
      ICNST = 0 
      NY = NNY
      CLO = CCLO
      GLO = CLO 
      HA = CHI
      FANC = CINC 
      CRAT = NLA
      IF (HA-GLO) 101,102,111 
  101 GLO = HA
      HA = CLO
      GO TO 111 
  102 IF (GLO .NE. 0.) GO TO 120
      GLO = Z(1,1)
      HA = Z(1,1) 
      IF (IOFFP .EQ. 0) GO TO 107 
      write(6,6106)
 6106  format(1h ,'start loop 106') 
c
      DO 106 J=1,NY 
         DO 105 I=1,NX
            IF (Z(I,J) .EQ. SPVAL) GO TO 105
            GLO = Z(I,J)
            HA = Z(I,J) 
            DO 104 JJ=J,NY
               DO 103 II=1,NX 
                  IF (Z(II,JJ) .EQ. SPVAL) GO TO 103
                  GLO = AMIN1(Z(II,JJ),GLO) 
                  HA = AMAX1(Z(II,JJ),HA) 
  103          CONTINUE 
  104       CONTINUE
            GO TO 110 
  105    CONTINUE 
  106 CONTINUE
c
       write(6,6017)
 6017  format(1h ,' end loop 106') 
      GO TO 110 
  107 DO 109 J=1,NY 
         DO 108 I=1,NX
            GLO = AMIN1(Z(I,J),GLO) 
            HA = AMAX1(Z(I,J),HA) 
  108    CONTINUE 
  109 CONTINUE
  110 IF (GLO .GE. HA) GO TO 119
  111 IF (FANC) 112,113,114 
  112 CRAT = AMAX1(1.,-FANC)
  113 FANC = (HA-GLO)/CRAT
      P = 10.**(IFIX(ALOG10(FANC)+5000.)-5000)
      FANC = AINT(FANC/P)*P 
  114 IF (CHI-CLO) 116,115,116
  115 GLO = AINT(GLO/FANC)*FANC 
      HA = AINT(HA/FANC)*FANC*(1.+SIGN(1.E-6,HA)) 
  116 DO 117 K=1,NLM
         CC = GLO+FLOAT(K-1)*FANC 
         IF (CC .GT. HA) GO TO 118
         KK = K 
         CL(K) = CC 
  117 CONTINUE
      write(6,6117)
 6117 format(1h ,' stmt 117')
  118 NCL = KK
      CCLO = CL(1)
      CHI = CL(NCL) 
      CINC = FANC 
       write(6,602)
  602   format(1h ,' return from   CLGEN')
      RETURN
  119 ICNST = 1 
      NCL = 1 
      CCLO = GLO
       write(6,602)
      RETURN
  120 CL(1) = GLO 
      NCL = 1 
       write(6,602)
      RETURN
      END 
