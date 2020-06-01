(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),i=(n(0),n(145)),l={id:"install",title:"Install and Compile"},o={id:"install",title:"Install and Compile",description:"## Requirements",source:"@site/docs/install.md",permalink:"/gbbs/docs/install",sidebar:"docs",previous:{title:"Introduction",permalink:"/gbbs/docs/introduction"},next:{title:"Running Benchmarks",permalink:"/gbbs/docs/run"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Compiling the Benchmarks",id:"compiling-the-benchmarks",children:[]},{value:"Cleaning the Build",id:"cleaning-the-build",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("h4",{id:"system-and-compiler-requirements"},"System and Compiler Requirements"),Object(i.b)("p",null,"GBBS should work on Linux, Mac, and Windows machines, although primary\ndevelopment and testing is done on Linux. The only requirement is a\nrelatively recent C++ compiler with C++17 support. Specifically, we\nrecommend:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"g++ >= 7.4.0 with pthread support (using our custom scheduler)")),Object(i.b)("p",null,"If you would like to use Cilk for scheduling, you need:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"g++ >= 7.4.0 with support for Cilk Plus")),Object(i.b)("p",null,"You should also be able to use GBBS in conjunction with a version of\nLLVM supporting C++17 that has support for Cilk linguistic features,\nwhich can be found ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://cilk.mit.edu/"}),"here"),"."),Object(i.b)("h4",{id:"build-system-requirements"},"Build System Requirements"),Object(i.b)("p",null,"We support two methods for building our code:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.bazel.build/versions/master/install.html"}),"Bazel"),". This is the primary build method that we use."),Object(i.b)("li",{parentName:"ul"},"Make. ")),Object(i.b)("p",null,"Note that Make is a secondary method for building and tinkering with\nGBBS that we support for users who do not wish to install Bazel.\nHowever, all of our performance numbers are collected through binaries\nbuilt by Bazel, and so Bazel should be used if using the benchmarks in\na performance-critical setting."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Please download our repository from our\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.github.com/ldhulipala/gbbs"}),"github"),"."),Object(i.b)("p",null,"Note that if you are contributing to the repo and check out the repo\nthorugh ssh, you can save yourself some nuisance re-typing your github\npassword every push by using\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://kb.iu.edu/d/aeww"}),"ssh-agent + ssh-add"),"."),Object(i.b)("h2",{id:"compiling-the-benchmarks"},"Compiling the Benchmarks"),Object(i.b)("h4",{id:"using-bazel"},"Using Bazel"),Object(i.b)("p",null,"You can build the benchmarks as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# For Bazel:\n$ bazel build //...  # compiles all benchmarks\n")),Object(i.b)("p",null,"Note that our bazel configuration file builds optimized binaries using\nthe",Object(i.b)("inlineCode",{parentName:"p"},"-c opt")," mode by default. You can build a debug binary by\nexplicitly supplying the ",Object(i.b)("inlineCode",{parentName:"p"},"-c dbg")," option to bazel."),Object(i.b)("h4",{id:"using-make"},"Using Make:"),Object(i.b)("p",null,"First set the appropriate environment variables, e.g., first run\n",Object(i.b)("inlineCode",{parentName:"p"},"export CILK=1")," to compile with Cilk Plus.\nAfter that, build using ",Object(i.b)("inlineCode",{parentName:"p"},"make"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ cd benchmarks/BFS/NonDeterministicBFS  # go to a benchmark\n$ make -j  # build the benchmark with all threads\n")),Object(i.b)("h2",{id:"cleaning-the-build"},"Cleaning the Build"),Object(i.b)("p",null,"The following commands cleans the directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# For Bazel:\n$ bazel clean  # removes all executables\n\n# For Make:\n$ make clean  # removes executables for the current directory\n")))}s.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(m,o({ref:t},u,{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);