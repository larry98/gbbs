ROOTDIR = $(strip $(shell git rev-parse --show-cdup))

include ../../makefile.variables

INCLUDE_DIRS = -I../../

OBJDIR = ../../bin/gbbs/encodings/

ALL_PRE = byte byte_pd_amortized
ALL= $(addprefix $(OBJDIR), $(addsuffix .o, $(ALL_PRE))) \
     $(addprefix $(OBJDIR), $(addsuffix .decheck.o, $(ALL_PRE))) \
     $(addprefix $(OBJDIR), $(addsuffix .a, $(ALL_PRE))) \
     $(addprefix $(OBJDIR), $(addsuffix .decheck.a, $(ALL_PRE)))

all: $(ALL)

$(OBJDIR)byte.o : byte.cc
	$(CC) $(INCLUDE_DIRS) $(CFLAGS) $(PFLAGS) -c $< -o $@

$(OBJDIR)byte_pd_amortized.o : byte_pd_amortized.cc
	$(CC) $(INCLUDE_DIRS) $(CFLAGS) $(PFLAGS) -c $< -o $@

$(OBJDIR)byte.decheck.bc : byte.cc
	$(LLVM_CC) $(INCLUDE_DIRS) $(CFLAGS) -O0 $(PFLAGS) -DDECHECK $(DECHECK_INCLUDE) -c -emit-llvm $< -o $@

$(OBJDIR)byte_pd_amortized.decheck.bc : byte_pd_amortized.cc
	$(LLVM_CC) $(INCLUDE_DIRS) $(CFLAGS) -O0 $(PFLAGS) -DDECHECK $(DECHECK_INCLUDE) -c -emit-llvm $< -o $@

$(OBJDIR)%.decheck.o : $(OBJDIR)%.decheck.bc
	$(LLVM_OPT) -load $(DECHECK_PASS) -decheck -O3 < $< | $(LLVM_LLC) --filetype=obj -o $@

$(OBJDIR)%.a : $(OBJDIR)%.o
	ar -rcs $@ $<

.PHONY : clean

clean :
	rm -f *.o $(ALL)
