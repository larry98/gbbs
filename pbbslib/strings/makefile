ROOTDIR = $(strip $(shell git rev-parse --show-cdup))

include ../../makefile.variables

ALL= ../../bin/pbbslib/strings/string_basics.o \
     ../../bin/pbbslib/strings/string_basics.decheck.o \
	 ../../bin/pbbslib/strings/string_basics.a \
	 ../../bin/pbbslib/strings/string_basics.decheck.a

all: $(ALL)

../../bin/pbbslib/strings/string_basics.o : string_basics.cc
	$(CC) $(CFLAGS) $(PFLAGS) -c $< -o $@

../../bin/pbbslib/strings/string_basics.a : ../../bin/pbbslib/strings/string_basics.o
	ar -rcs $@ $<

../../bin/pbbslib/strings/string_basics.decheck.bc : string_basics.cc
	$(LLVM_CC) $(CFLAGS) -O0 $(PFLAGS) -DDECHECK $(DECHECK_INCLUDE) -c -emit-llvm $< -o $@

../../bin/pbbslib/strings/%.decheck.o : ../../bin/pbbslib/strings/%.decheck.bc
	$(LLVM_OPT) -load $(DECHECK_PASS) -decheck -O3 < $< | $(LLVM_LLC) --filetype=obj -o $@

../../bin/pbbslib/strings/%.decheck.a : ../../bin/pbbslib/strings/%.decheck.o
	ar -rcs $@ $<

.PHONY : clean

clean :
	rm -f *.o $(ALL)
