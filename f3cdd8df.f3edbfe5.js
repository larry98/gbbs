(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{141:function(a,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return b})),t.d(e,"rightToc",(function(){return p})),t.d(e,"default",(function(){return O}));var n=t(1),s=t(6),m=(t(0),t(145)),c={id:"definitions",title:"Definitions",description:"Definitions used in specifying GBBS Benchmarks",permalink:"/docs/benchmarks/definitions"},b={id:"benchmarks/definitions",title:"Definitions",description:"Definitions used in specifying GBBS Benchmarks",source:"@site/docs/benchmarks/definitions.md",permalink:"/gbbs/docs/benchmarks/definitions",sidebar:"docs",previous:{title:"Overview",permalink:"/gbbs/docs/benchmarks/overview"},next:{title:"BFS",permalink:"/gbbs/docs/benchmarks/sssp/breadth_first_search"}},p=[],r={rightToc:p};function O(a){var e=a.components,t=Object(s.a)(a,["components"]);return Object(m.b)("wrapper",Object(n.a)({},r,t,{components:e,mdxType:"MDXLayout"}),Object(m.b)("p",null,"Here we specify the definitions of objects and terms used in our\nbenchmark specifications."),Object(m.b)("h4",{id:"unweighted-graphs"},"Unweighted Graphs"),Object(m.b)("p",null,"We consider both undirected (symmetric) and directed (asymmetric)\ngraphs in GBBS. We refer to graphs as ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"G"),Object(m.b)("mo",{parentName:"mrow"},"="),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"V"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"E"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"G=(V,E)")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"G"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"V"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.05764em"}}),"E"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"))))),", where ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"V")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"V")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"V")))))," is a set of\nvertices, and ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"E")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"E")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.05764em"}}),"E")))))," is a set of edges. Each edge consists of a pair of\nvertices ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"v"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"(u,v)")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.03588em"}}),"v"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"))))),"."),Object(m.b)("p",null,"When not specified, we assume that the underlying graph is ",Object(m.b)("em",{parentName:"p"},"directed"),".\nThe concrete formats supported by GBBS for unweighted graphs can be\nfound in the ",Object(m.b)("a",Object(n.a)({parentName:"p"},{href:"formats"}),"formats page")),Object(m.b)("h4",{id:"weighted-graphs"},"Weighted Graphs"),Object(m.b)("p",null,"We also consider weighted graphs in GBBS, which we refer to as\n",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"G"),Object(m.b)("mo",{parentName:"mrow"},"="),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"V"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"E"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"w"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"G=(V,E,w)")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"G"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.22222em"}}),"V"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.05764em"}}),"E"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.02691em"}}),"w"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")")))))," where ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"w")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"w")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.02691em"}}),"w")))))," is a weighted function ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"w"),Object(m.b)("mo",{parentName:"mrow"},":"),Object(m.b)("mi",{parentName:"mrow"},"E"),Object(m.b)("mo",{parentName:"mrow"},"\u21a6"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"script"}),"R")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"w : E \\mapsto \\mathcal{R}")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.02691em"}}),"w"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),":"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.69433em",verticalAlign:"-0.011em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.05764em"}}),"E"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"\u21a6"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathcal"}),"R")))))),". We refer to the weight of a ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"v"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"(u,v)")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.03588em"}}),"v"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")")))))," edge as ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"w"),Object(m.b)("mrow",{parentName:"msub"},Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mi",{parentName:"mrow"},"v")))),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"w_{uv}")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.58056em",verticalAlign:"-0.15em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.02691em"}}),"w"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.151392em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"-0.02691em",marginRight:"0.05em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault mtight"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault mtight",style:{marginRight:"0.03588em"}}),"v"))))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(m.b)("span",{parentName:"span"}))))))))))," The\nbenchmarks always specify the range, ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"script"}),"R")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\mathcal{R}")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathcal"}),"R"))))))," of the weight\nfunction, unless the algorithm is oblivious to it."),Object(m.b)("h4",{id:"distances"},"Distances"),Object(m.b)("p",null,"We use ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mrow",{parentName:"msub"},Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"sans-serif"}),"d"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"sans-serif"}),"i"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"sans-serif"}),"s"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"sans-serif"}),"t")),Object(m.b)("mi",{parentName:"msub"},"G")),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"u"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"v"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\mathsf{dist}_{G}(u,v)")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathsf"}),"d"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathsf"}),"i"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathsf"}),"s"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathsf"}),"t")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.32833099999999993em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginRight:"0.05em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault mtight"}),"G"))))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.03588em"}}),"v"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")")))))," to refer to the shortest path distance\nbetween ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"u")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"u")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"u")))))," and ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"v")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"v")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.03588em"}}),"v")))))," in the graph ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"G")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"G")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"G"))))),"."),Object(m.b)("p",null,"We use ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mrow",{parentName:"mrow"},Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"sans-serif"}),"d"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"sans-serif"}),"i"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"sans-serif"}),"a"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"sans-serif"}),"m")),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"G"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\mathsf{diam}(G)")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathsf"}),"d"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathsf"}),"i"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathsf"}),"a"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathsf"}),"m")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"G"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")")))))," to refer to the diameter of the graph, or the\nlongest shortest path distance in ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"G")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"G")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"G")))))," between any vertex ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"s")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"s")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"s")))))," and any\nvertex ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"v")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"v")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.03588em"}}),"v")))))," reachable from ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"s")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"s")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"s"))))),"."),Object(m.b)("h4",{id:"mapping"},"Mapping"),Object(m.b)("p",null,"Many of our benchmarks return ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"\u03b1")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\alpha")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.0037em"}}),"\u03b1"))))),"-mapping, which are objects that\nprovide access to ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"\u03b1")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\alpha")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.0037em"}}),"\u03b1"))))),"'s over a specified input domain. For\nexample, an ",Object(m.b)("inlineCode",{parentName:"p"},"int"),"-mapping for the domain ",Object(m.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(m.b)("mn",{parentName:"mrow"},"0"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"n"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"[0, n)")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"0"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"n"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")")))))," can be represented"),Object(m.b)("ul",null,Object(m.b)("li",{parentName:"ul"},"using an array of ",Object(m.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"n")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"n")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathdefault"}),"n")))))," ",Object(m.b)("inlineCode",{parentName:"li"},"int"),"s, or"),Object(m.b)("li",{parentName:"ul"},"using a function from the domain to an ",Object(m.b)("inlineCode",{parentName:"li"},"int")," (implicitly represented).")),Object(m.b)("p",null,"The only requirement is that the returned object implements an array\noperator, and can be accessed at every index in the domain."))}O.isMDXComponent=!0},145:function(a,e,t){"use strict";t.d(e,"a",(function(){return j})),t.d(e,"b",(function(){return l}));var n=t(0),s=t.n(n);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function c(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function b(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var r=s.a.createContext({}),O=function(a){var e=s.a.useContext(r),t=e;return a&&(t="function"==typeof a?a(e):b({},e,{},a)),t},j=function(a){var e=O(a.components);return s.a.createElement(r.Provider,{value:e},a.children)},i={inlineCode:"code",wrapper:function(a){var e=a.children;return s.a.createElement(s.a.Fragment,{},e)}},N=Object(n.forwardRef)((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,c=a.parentName,r=p(a,["components","mdxType","originalType","parentName"]),j=O(t),N=n,l=j["".concat(c,".").concat(N)]||j[N]||i[N]||m;return t?s.a.createElement(l,b({ref:e},r,{components:t})):s.a.createElement(l,b({ref:e},r))}));function l(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,c=new Array(m);c[0]=N;var b={};for(var p in e)hasOwnProperty.call(e,p)&&(b[p]=e[p]);b.originalType=a,b.mdxType="string"==typeof a?a:n,c[1]=b;for(var r=2;r<m;r++)c[r]=t[r];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,t)}N.displayName="MDXCreateElement"}}]);