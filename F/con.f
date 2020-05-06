      SUBROUTINE CON(JFM,JRSN)
C     Albert Lunde
C     MEAN SEA LEVEL PRESSURE(MILLIBARS) NO LONGER 1000. 7/17/80
C     INITIALIZES CONSTANTS IN /CONST,ZCONST,CFCOM,THCOM, AND NOTE/.
C     READS IN VALUES FOR LAND FRACTION AND SNOWFALL RATES FROM 
C       FOUR DEGREE GRID.
C     /MIXCOM/ ADDED TO CON 10/29/83. BG
C     INITIALIZE HERE RATHER THAN IN DONE.
      COMMON /MIXCOM/CMIX 
      COMMON W(46,50) 
      COMMON /CFCOM/NCG,NSC 
C     WSPACE REMOVED 8/24/83.  USED TO BE USED TO INTERPOLATE TO
C       DESIRED SPACING GRID.  DATA IS NOW ALREADY ON THAT GRID.
      COMMON/ZCONST/Z1,Z2,DZ,DZI,PPSKZ1,PPSKZ2,GEE,SIPERMB,RGEE 
C     INSERT FOR ZEROING PT IN COMMON MAY 4 81................... 
      COMMON/CONST/ 
     1M,MM,MP,MPP,N,
     2DELPHI,DELT,PI,AEARTH,CA, 
     3CP,CO,CD,P00,P0,
     4SIGMA1,SIGMA2,XKAPPA,SIG,XLC, 
     5XLF,RHOW,RHOS,DIFF,XKS, 
     6XKI,XIMIN,SC, 
     7ITMAX,XLAM,XLS,PWLF,
     8PWLS,CDPW,CDCP,CDLC,CDLS, 
     9PWPS,XKSKI,RSEA,SGKP1,SGKP2,
     1ZSGKPA,ZSGKPB,CLRE,SQ1,SQ2
C 
      COMMON/THCOM/THCR(10) 
      COMMON/NOTE/NT(3) 
      DATA NT/3*0/
C 
C     DATA STATEMENTS TO SET UP CONST 
C     DELPHI * (M+1) = PI 
C     MM = M - 1,MP = M + 1,MPP = M + 2 
C     N    NUMBER OF STEPS IN A YEAR
      DATA NCG,NSC/60,1/
      DATA
     2PI,AEARTH,CA/ 
C     PI
     1 3.1415926535898, 
C     RADIUS OF EARTH IN METERS 
     2 6.4E6, 
C     HEAT CAPACITY PER UNIT AREA AND AT
C     CONSTANT PRESSURE OF 1/2 THE ATMOSPHERIC MASS IN (JOULES/M*M*DEGC)
     3 5.1063E6/
      DATA
     3CP,CD,P00/
C     HEAT CAPACITY OF AIR AT CONSTANT
C     PRESSURE IN (JOULES/KG*DEGC)
     1 1.0045E3,
C     CO = CP/2 * G    (G = ACCELERATION OF GRAVITY)
C     IN(WATT*SEC/M*M*DEGC*MILLIBARS) 
C     BECAUSE CO IS USED WITH  PRESSURE IN MILLIBARS
C     CO INITIALIZED BELOW 4/27/81
C     DRAG COEFFICENT (KG/M*M*SEC)
     3 6.0185E-3, 
C     1000 MILLIBAR PRESSURE
     4 1000./ 
      DATA
     4SIGMA1,SIGMA2,XKAPPA,SIG,XLC/ 
     1 0.25,0.75, 
C     KAPPA = 2/7 
     2 0.28571428571429,
C     STEFAN-BOLTZMAN CONST (WATTS/M*M*DEG**4)
     3 5.6697E-8, 
C     LATENT HEAT OF CONDENSATION (JOULES/KG) 
     4 2.4904E6/
      DATA
     5XLF,RHOW,RHOS,DIFF,XKS/ 
C     LATENT HEAT OF FUSION (JOULES/KG) 
     1 3.3358E5,
C     DENSITY OF WATER (KG/M**3)
     2 1000., 
C     DENSITY OF SNOW (KG/M**3) 
     3 400.,
C     DIFFUSION COEFFICIENT (M*M/SEC) 
     4 3.4E6 ,
C     THERMAL CONDUCTIVITY OF SNOW (JOULES/M*DEGC)
     5 4.1855E-1/ 
      DATA
     6XKI,XIMIN,SC/ 
C     THERMAL CONDUCTIVITY OF ICE  (JOULES/M*DEGC)
     1 2.09275, 
C     MINIMUM ICE THICKNESS IMIN (METERS) 
     2 1.7E-2,
C     SOLAR CONSTANT (WATTS/M*M)  (NEW VALUE=2.05 LY/MIN )
     3 1367./ 
C     MAX NO. OF ITERATIONS FOR SOLVING 
C     IMPLICIT EQUATIONS
      DATA ITMAX/10/
C     UNIT CONVERSION JOULES/CALORIE
      DATA CLRE/4.1855/ 
C 
C     COMPUTE CLUSTERS OF CONSTANTS 
C     CMIX IS THE HEAT CAPACITY OF THE MIXED LAYER IN (JOULES/
C       M*DEGC)  4000LY/DEGC
C     CURRENTLY USING A 120 METER MIXED LAYER.
      CMIX=4.1855E6*120 
      MP=45 
      N=NCG 
      MPP=MP+1
      M=MP-1
      MM=M-1
C     TIME STEP IN SEC=(1 YEAR/N) 
      DELT = (31556900./N)
C     DELTA PHI IN RADIANS
      DELPHI = PI/MP
C     SET PRESSURE AT MEAN SEA LEVEL. 
C     CONSTANT ON SHORT TIME SCALE
C     MAY VARY ON LONG TIME SCALE 
C     SET P0=P00 TO START OUT 
C     MEAN SEA LEVEL PRESSURE(MILLIBARS) NO LONGER 1000. 7/17/80
C     SET P0=1000 TO CHECK FOR INCONSIS. 9/28/81
      P0 = 1000.
C     PARMETER FOR CRANK-NICKELSON SCHEME 
      XLAM=DIFF* DELT/(AEARTH * DELPHI)**2
C     LATENT HEAT OF SUBLIMATION
      XLS = XLF + XLC 
C     COMMON/ZCONST/INITIALIZED IN REVISED CON 4/27/81
      Z1=ALOG(SIGMA1) 
      Z2=ALOG(SIGMA2) 
      DZ=Z1-Z2
      DZI=1./DZ 
      PPSKZ1=(SIGMA1*(P0/P00))**XKAPPA*DZI
      PPSKZ2=(SIGMA2*(P0/P00))**XKAPPA*DZI
C     ACCELERATION OF GRAVITY (METERS/SEC)
      GEE=9.8 
C     CONVERSION FACTOR BETWEEN SI AND MILLIBAR PRESSURE UNITS
      SIPERMB=1.E2
C     NOTE R=XKAPPA*CP (R IS GAS LAW CONSTANT)
      RGEE=XKAPPA*CP/GEE
C     IN /CONST/
      CO=SIPERMB*(CP/(2.*GEE))
C     MISC CLUSTERS OF CONSTANTS
C     APPEARING IN ICE/SNOW EQUATIONS 
      PWLF = RHOW * XLF 
      PWLS = RHOW * XLS 
      CDPW = CD/RHOW
      CDCP = CD * CP
      CDLC = CD * XLC 
      CDLS = CD * XLS 
      PWPS = RHOW/RHOS
      XKSKI = XKS/XKI 
      RSEA = (P0/P00)**XKAPPA 
      SGKP1 = SIGMA1**XKAPPA
      SGKP2 = SIGMA2**XKAPPA
      ZSGKPA = (Z1 * SGKP2)/(Z1 - Z2) 
      ZSGKPB = -(Z2 * SGKP1)/(Z1 - Z2)
      SQ1 = (P00/SIGMA1)**XKAPPA/CO 
      SQ2 = (P00/SIGMA2)**XKAPPA/CO 
C 
C     READ IN FIELDS OF CONSTANTS 
C     READ IN TABULAR APPROXIMATION TO THHAT-CRITICAL (DEG C).
      READ (*,3,END=9500)(THCR(I),I=1,10) 
 3    FORMAT(BZ,9X,E9.0)
C     READ IN LAND FRACTION AND SNOWFALL RATES
C     FROM 4 DEGREE GRID SPACING DATA.  8/17/83 
 9500 READ (*,*,END=988) (W(I,JFM),I=1,46)
 988  READ (*,*,END=989) (W(I,JRSN),I=1,46) 
 989  RETURN
      END
