#   File:       geology.make
#   Target:     geology
#   Sources:    aabw.f
#               advdif.f
#               advstr.f
#               atmos.f
#               biosrc.f
#               bwsrc.f
#               cco2.f
#               gasses.f
#               geolog.f
#               oemain.f
#               oeout.f
#               oestart.f
#               ssink.f
#               theory.f
#               upwell.f
#   Created:    Sunday, August 11, 1991 22:41:48


OBJECTS = �
		aabw.f.o �
		advdif.f.o �
		advstr.f.o �
		atmos.f.o �
		biosrc.f.o �
		bwsrc.f.o �
		cco2.f.o �
		gasses.f.o �
		geolog.f.o �
		oemain.f.o �
		oeout.f.o �
		oestart.f.o �
		ssink.f.o �
		theory.f.o �
		upwell.f.o

FFLAGS =  -O -z -U -N11 -N8 -ss 100000 -mf -N13 -ad 4 -c

geology �� geology.make
	Duplicate -r -y "{FLibraries}F77mrwe.o" geology

geology �� geology.make {OBJECTS}
	Link -f -srt -w -t APPL -c rmg3 �
		{OBJECTS} �
		"{Libraries}"Runtime.o �
		"{Libraries}"Interface.o �
		"{FLibraries}"F77mrwe.o �
		"{FLibraries}"frt0.o �
		"{FLibraries}"f77io.o �
		"{FLibraries}"f77math.o �
		-o geology
aabw.f.o � geology.make aabw.f
	 F77 {FFLAGS} aabw.f
advdif.f.o � geology.make advdif.f
	 F77 {FFLAGS} advdif.f
advstr.f.o � geology.make advstr.f
	 F77 {FFLAGS} advstr.f
atmos.f.o � geology.make atmos.f
	 F77 {FFLAGS} atmos.f
biosrc.f.o � geology.make biosrc.f
	 F77 {FFLAGS} biosrc.f
bwsrc.f.o � geology.make bwsrc.f
	 F77 {FFLAGS} bwsrc.f
cco2.f.o � geology.make cco2.f
	 F77 {FFLAGS} cco2.f
gasses.f.o � geology.make gasses.f
	 F77 {FFLAGS} gasses.f
geolog.f.o � geology.make geolog.f
	 F77 {FFLAGS} geolog.f
oemain.f.o � geology.make oemain.f
	 F77 {FFLAGS} oemain.f
oeout.f.o � geology.make oeout.f
	 F77 {FFLAGS} oeout.f
oestart.f.o � geology.make oestart.f
	 F77 {FFLAGS} oestart.f
ssink.f.o � geology.make ssink.f
	 F77 {FFLAGS} ssink.f
theory.f.o � geology.make theory.f
	 F77 {FFLAGS} theory.f
upwell.f.o � geology.make upwell.f
	 F77 {FFLAGS} upwell.f
