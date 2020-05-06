       SUBROUTINE IMP(ITMAX,EP1,EP2,X0,F,X,P1,P2,P3,P4,P5)
C      SOLVES IMPLICIT EQUATIONS
C      OF THE FORM 0. = F(X,P1,P2,P3,P4,P5) 
C      USING NEWTONS METHOD 
C      Albert Lunde  1985
       
       IMPLICIT none
       INTEGER itmax
       REAL ep1, ep2, x0
       REAL x, xl, p1, p2, p3, p4, p5
       REAL df, f, fa, fb
       INTEGER i, nt

       EXTERNAL F 
       COMMON/NOTE/NT(3)
C      ITMAX IS MAX. ITERATIONS, EP1 IS USED TO FIND
C      DERIVATIVE, EP2 IS CONVERVENCE TEST
       X = X0 
       DO 10 I=1,ITMAX
       FB = F(X,P1,P2,P3,P4,P5) 
       IF (FB.EQ.0.)  RETURN
       FA = F(X + EP1,P1,P2,P3,P4,P5) 
       DF = (FA - FB)/EP1 
       XL = X 
       IF (DF.EQ.0) GO TO 20
       X=X-FB/DF
       IF (ABS(X-XL).LE.EP2) RETURN 
 10    CONTINUE 
 20    CONTINUE 
       NT(3)=NT(3)+1
       RETURN 
       END
