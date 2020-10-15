ROOTDIR = $(strip $(shell git rev-parse --show-cdup))

include ../makefile.variables

OBJDIR = ../bin/pbbslib/

ALL_PRE = alloc get_time memory_size parallel scheduler time_operations utilities
ALL= $(addprefix $(OBJDIR), $(addsuffix .o, $(ALL_PRE))) \
     $(addprefix $(OBJDIR), $(addsuffix .decheck.o, $(ALL_PRE))) \
	 $(addprefix $(OBJDIR), $(addsuffix .a, $(ALL_PRE))) \
	 $(addprefix $(OBJDIR), $(addsuffix .decheck.a, $(ALL_PRE)))

all: $(ALL)

$(OBJDIR)time_operations.o : time_operations.cc $(addprefix $(OBJDIR), get_time.o utilities.o)
	$(CC) $(CFLAGS) $(PFLAGS) -c $< -o $@

$(OBJDIR)utilities.o : utilities.cc $(addprefix $(OBJDIR), parallel.o)
	$(CC) $(CFLAGS) $(PFLAGS) -c $< -o $@

$(OBJDIR)alloc.o : alloc.cc $(addprefix $(OBJDIR), memory_size.o parallel.o)
	$(CC) $(CFLAGS) $(PFLAGS) -c $< -o $@

$(OBJDIR)%.o : %.cc
	$(CC) $(CFLAGS) $(PFLAGS) -c $< -o $@

$(OBJDIR)time_operations.decheck.bc : time_operations.cc $(addprefix $(OBJDIR), get_time.decheck.o utilities.decheck.o)
	$(LLVM_CC) $(CFLAGS) -O0 $(PFLAGS) -DDECHECK $(DECHECK_INCLUDE) -c -emit-llvm $< -o $@

$(OBJDIR)utilities.decheck.bc : utilities.cc $(addprefix $(OBJDIR), parallel.decheck.o)
	$(LLVM_CC) $(CFLAGS) -O0 $(PFLAGS) -DDECHECK $(DECHECK_INCLUDE) -c -emit-llvm $< -o $@

$(OBJDIR)alloc.decheck.bc : alloc.cc $(addprefix $(OBJDIR), memory_size.decheck.o parallel.decheck.o)
	$(LLVM_CC) $(CFLAGS) -O0 $(PFLAGS) -DDECHECK $(DECHECK_INCLUDE) -c -emit-llvm $< -o $@

$(OBJDIR)%.decheck.bc : %.cc
	$(LLVM_CC) $(CFLAGS) -O0 $(PFLAGS) -DDECHECK $(DECHECK_INCLUDE) -c -emit-llvm $< -o $@

$(OBJDIR)%.decheck.o : $(OBJDIR)%.decheck.bc
	$(LLVM_OPT) -load $(DECHECK_PASS) -decheck -O3 < $< | $(LLVM_LLC) --filetype=obj -o $@

$(OBJDIR)%.a : $(OBJDIR)%.o
	ar -rcs $@ $<

.PHONY : clean

clean :
	rm -f *.o $(ALL)
