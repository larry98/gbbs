ROOTDIR = $(strip $(shell git rev-parse --show-cdup))

include ../makefile.variables

INCLUDE_DIRS = -I../

OBJDIR = ../bin/gbbs/

ALL_PRE = benchmark bridge edge_map_blocked graph_io io parse_command_line undirected_edge union_find vertex_subset
ALL= $(addprefix $(OBJDIR), $(addsuffix .o, $(ALL_PRE))) \
	 $(addprefix $(OBJDIR), $(addsuffix .decheck.o, $(ALL_PRE))) \
	 $(addprefix $(OBJDIR), $(addsuffix .a, $(ALL_PRE))) \
	 $(addprefix $(OBJDIR), $(addsuffix .decheck.a, $(ALL_PRE)))

all: $(ALL)

$(OBJDIR)edge_map_blocked.o : edge_map_blocked.cc $(addprefix $(OBJDIR), bridge.o)
	$(CC) $(INCLUDE_DIRS) $(CFLAGS) $(PFLAGS) -c $< -o $@

$(OBJDIR)graph_io.o : graph_io.cc $(addprefix $(OBJDIR), io.o)
	$(CC) $(INCLUDE_DIRS) $(CFLAGS) $(PFLAGS) -c $< -o $@

$(OBJDIR)%.o : %.cc
	$(CC) $(INCLUDE_DIRS) $(CFLAGS) $(PFLAGS) -c $< -o $@

$(OBJDIR)edge_map_blocked.decheck.bc : edge_map_blocked.cc $(addprefix $(OBJDIR), bridge.decheck.o)
	$(LLVM_CC) $(INCLUDE_DIRS) $(CFLAGS) $(PFLAGS) -DDECHECK $(DECHECK_INCLUDE) -c -emit-llvm $< -o $@

$(OBJDIR)graph_io.decheck.bc : graph_io.cc $(addprefix $(OBJDIR), io.decheck.o)
	$(LLVM_CC) $(INCLUDE_DIRS) $(CFLAGS) $(PFLAGS) -DDECHECK $(DECHECK_INCLUDE) -c -emit-llvm $< -o $@

$(OBJDIR)%.decheck.bc : %.cc
	$(LLVM_CC) $(INCLUDE_DIRS) $(CFLAGS) $(PFLAGS) -DDECHECK $(DECHECK_INCLUDE) -c -emit-llvm $< -o $@

$(OBJDIR)%.decheck.o : $(OBJDIR)%.decheck.bc
	$(LLVM_OPT) -load $(DECHECK_PASS) -decheck -O3 < $< | $(LLVM_LLC) --filetype=obj -o $@

$(OBJDIR)%.a : $(OBJDIR)%.o
	ar -rcs $@ $<

.PHONY : clean

clean :
	rm -f *.o $(ALL)
