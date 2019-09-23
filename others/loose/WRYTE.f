C-----------------------------------------------------------------------
      SUBROUTINE WRYTE(LU,LC,C)
C$$$  SUBPROGRAM DOCUMENTATION BLOCK
C
C SUBPROGRAM:    WRYTE       WRITE DATA OUT BY BYTES
C   PRGMMR: IREDELL          ORG: W/NMC23     DATE: 92-10-31
C
C ABSTRACT: EFFICIENTLY WRITE UNFORMATTED A CHARACETER ARRAY.
C
C PROGRAM HISTORY LOG:
C   91-10-31  MARK IREDELL
C LAST MODIFIED 9 November 1994
C
C USAGE:    CALL WRYTE(LU,LC,C)
C
C   INPUT ARGUMENT LIST:
C     LU       - INTEGER UNIT TO WHICH TO WRITE
C     LC       - INTEGER NUMBER OF CHARACTERS OR BYTES TO WRITE
C     C        - CHARACETER (LC) DATA TO WRITE
C
C ATTRIBUTES:
C   LANGUAGE: CRAY FORTRAN
C
C$$$
      CHARACTER C(LC)
C - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      WRITE(LU) C
C - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      RETURN
      END
