C Parameters used for time-marching
      REAL IMPFAC, DT, DTFAC, UD8COR, TD8COR
      COMMON/TMAR1/ IMPFAC, DT, DTFAC, UD8COR(0:N1MAX), TD8COR(0:N1MAX)
C
      REAL USDRAG, URLXLV, VVISC, TRLXLV, TMNLV
      COMMON/CDAMP/ USDRAG, URLXLV(L1MAX), VVISC(L1MAX-1),
     1              TRLXLV(L1MAX), TMNLV(0:N1MAX,L1MAX)
