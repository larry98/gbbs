cc_library(
  name = "Connectivity",
  hdrs = ["Connectivity.h"],
  deps = [
  "//gbbs:gbbs",
  "//benchmarks/Connectivity:common",
  ]
)

cc_binary(
  name = "Connectivity_main",
  srcs = ["Connectivity.cc"],
  deps = [":Connectivity"]
)

package(
  default_visibility = ["//visibility:public"],
)
