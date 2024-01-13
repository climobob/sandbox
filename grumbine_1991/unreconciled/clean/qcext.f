      SUBROUTINE QCEXT(QCS, QCD, H, NX, NY, TSTEP, LOY,
     1  XMIN, XMAX, YMIN, YMAX, QFMAX, QFREF, QM,
     2  STRSPR, STRSUM, STRFLL, STRWIN, DCADT, DELT   )
C     HIGH FORCING SPECIFICATION CHANGED TO A RECTANGLE 12-19-88, BG.
C     FORCING FOR CHEMICALS, TAKEN FROM QSEXT.F OF 1-24-89.
      INTEGER NX, NY, TSTEP
      REAL QCS(NX, NY), QCD(NX, NY), H(NX, NY)
      INTEGER I, J, T
      INTEGER XMIN, XMAX, YMIN, YMAX
      REAL QFMAX, QFREF, QM
      REAL DCADT, DELT
      INTEGER STRSPR, STRSUM, STRFLL, STRWIN, LOY
C     START OF SPRING, SUMMER, FALL, WINTER, AND LENGTH OF THE YEAR
      REAL PI, TIME
      PARAMETER (PI = 3.141592654)
      T = MOD(TSTEP,LOY)
      IF ((T .GE. STRWIN) .AND. (T .LT. STRSPR)) THEN
C     WINTERTIME
CD      PRINT *,'WINTER'
        DO 1000 J = 1, NY
          DO 1010 I = 1, NX
            IF ((I .GE. XMIN .AND. I .LE. XMAX) .AND.
     1          (J .GE. YMIN .AND. J .LE. YMAX) ) THEN
C             IN POLYNYA AREA
              QCS(I,J) = DCADT*DELT*FLOAT(TSTEP)
              QCD(I,J) = DCADT*DELT*FLOAT(TSTEP)
             ELSE
              QCS(I,J) = 0.0
              QCD(I,J) = 0.0
            ENDIF
 1010     CONTINUE
 1000   CONTINUE
       ELSE
        DO 1100 J = 1, NY
          DO 1110 I = 1, NX
            QCS(I,J) = DCADT*DELT*FLOAT(TSTEP)
            QCD(I,J) = DCADT*DELT*FLOAT(TSTEP)
 1110     CONTINUE
 1100   CONTINUE
      ENDIF
      RETURN
      END
