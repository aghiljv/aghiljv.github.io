__NUXT_JSONP__("/blog/The Perils of Ray-Tracing Performance Marketing and Peak Ray Flow", (function(a,b,c,d,e,f,g,h,i,j){return {data:[{blog:{name:f,titleImage:"170820\u002FrtPerilsTitle",briefdesc:g,postDate:"August 17, 2020",toc:[{depth:2,text:h}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Ray tracing is arguably the most significant change to the real-time graphics\n  pipeline in the last decade. It gives developers new tools in the box of\n  tricks they use to carefully persuade today’s GPUs to draw immersive,\n  realistic, high-quality scenes at high performance.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Within the last couple of years, products have hit the high-end PC market that\n  support Microsoft’s DirectX Ray Tracing (DXR) specification. A number of\n  high-profile games that use DXR showcase the potential of the technology.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  The great folks at Khronos have also recently released their view of ray\n  tracing as it applies to Vulkan. The resulting API will feel familiar to\n  students of DXR, giving developers another ray-tracing API to target and a\n  means to expand over time to platforms that aren't Windows.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  However, at the time of writing, all of the public implementations come from a\n  single vendor, Nvidia. Consequently, developers have a rather narrow view of\n  what makes an accelerated ray-tracing implementation based on DXR or Vulkan\n  ray tracing tick.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  That's no fault of Nvidia, the graphics giant taking advantage of their\n  ability to strong arm their view of ray tracing into DirectX and therefore\n  robustly influence the resulting capabilities in Vulkan. Any other vendor in\n  Nvidia's position would do the same, and the company's ability to productize\n  the output of its incredible research team is second to none.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  However, if that's how a new graphics capability comes into being, driven\n  almost completely by a single vendor in the beginning, resulting in a narrow\n  spectrum of implementations with limited market share, developers need to be\n  careful as that landscape of implementations broadens over time.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Multiple Design Paths"}]},{type:a,value:j},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  That's especially true when it comes to a largely black box feature like ray\n  tracing. What do we mean by black box? For any given hardware and software\n  specification in the semiconductor world, and that isn't limited to GPUs,\n  there's a huge design space you can explore to implement it.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  There's no one way to build a CPU for example, leading to a wide range of\n  practical instruction set architectures (ISAs) that can all run roughly the\n  same software. GPUs enjoy an even wider range of potential implementations\n  from different vendors because there's no standard ISA from which the industry\n  designs its implementations.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  GPU vendors take advantage of that to innovate more rapidly under the hood\n  compared to CPUs. That’s because the combination of hardware and software at\n  work can more readily hide what's under the hood doing the work at the silicon\n  level.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  So, when Nvidia proposed what became DXR to Microsoft, when specifying the\n  programming model and API that developers need to target to perform ray\n  tracing in their renderer, they left certain parts of it almost completely\n  undefined.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  That lack of guidance in parts of the specification is completely on purpose.\n  Why? It allows the underlying implementation of that bit of the specification\n  to be entirely specific to a given GPU and its driver. In fact, parts of DXR\n  and Vulkan ray tracing don't even need to run on the GPU at all!\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  And therein lies the rub: because of that, unlike almost every other feature\n  ever added to the real-time graphics pipeline in GPU history, ray tracing will\n  be very difficult for developers to target in a uniform way.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  That's further complicated by the fact that ray tracing is also bifurcating\n  from the developer's point of view, too, with a simpler model having emerged\n  from the full ray pipelines first specified. This allows for easier\n  implementation of some specific effects, particularly ray-traced shadows.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Advice for Developers"}]},{type:a,value:j},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  So, with two ray-tracing programming models for developers to target and still\n  only one generation of shipping accelerators to try it out on, and with key\n  parts of DXR and Vulkan ray tracing specified as completely\n  implementation-dependent, what should developers be aware of as things develop\n  in the ray-tracing acceleration space?\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  As a company developing ray-tracing acceleration for its future GPUs, where\n  our solution will have microarchitectural performance characteristics that are\n  necessarily different—and better by far, we hope—to those implementations from\n  other vendors, we have some simple advice.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  First, avoid any marketing claims about ray-tracing performance since there's\n  no standard way to describe it. The black box nature of the ray-tracing\n  specifications makes it almost impossible to do so anyway. Let's pick on one\n  of the most impressive GPUs ever made to push home the point: Nvidia's TU102\n  in GeForce RTX 2080 Ti form. It's a competing product so I shouldn't really\n  say this, but woof, it's one heck of a GPU.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Nvidia says there's a peak ray flow of 10 Grays\u002Fsec in that product, which is\n  an incredibly impressive headline number. Sadly, though, it doesn't actually\n  say anything concrete that you can understand as a consumer, developer, or\n  anyone else interested in the technology and how it works.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Does it only measure miss-only rate with empty rays, or is it measuring\n  real-world usable ray flow on rays with a proper payload? It's a marketing\n  number, so it's definitely a lot closer to the former than the latter,\n  unfortunately. It also doesn't tell you anything about the location of the\n  performance cliffs. Nor does it tell you how ray-tracing throughput degrades\n  with complexity of ray, hierarchy, or any of the other moving parts of the\n  ray-tracing system, and how it's all integrated with the rest of the rendering\n  workload.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  As a result, you're left with testing and measuring as your only realistic way\n  to determine what's possible with a given level of ray-tracing performance in\n  a GPU. That’s because Nvidia's 10 Grays\u002Fsec won't mean the same thing as the\n  same number quoted by Imagination, or any of the other vendors that will try\n  their hand at useful DXR or Vulkan ray-tracing acceleration for that matter.\n  It won't even mean the same thing generationally for Nvidia!\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Lastly, does that mean the graphics market now has a need for public software\n  that tests meaningful peak microarchitectural ray flow to expose\n  implementation-specific details, along with some measures of real-world\n  performance in idiomatic game-like settings? Absolutely, and we'd love to talk\n  to anyone who wants to tackle that problem, since it's a big missing piece of\n  the puzzle.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  "}]},{type:b,tag:"h2",props:{},children:[{type:a,value:h}]},{type:a,value:c},{type:b,tag:e,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Disclaimer : The views and opinions expressed in the text belong solely to the\n  author, and not necessarily to the author's employer, organisation, committee\n  or other group or individual.\n"}]}]},dir:"\u002Fblogs",path:"\u002Fblogs\u002FThe Perils of Ray-Tracing Performance Marketing and Peak Ray Flow",extension:".md",slug:f,createdAt:"2020-09-10T14:42:18.571Z",updatedAt:"2020-09-27T12:17:00.031Z"},title:f,description:g,ogImage:"\u002Fimg\u002Fblog\u002F170820\u002FrtPerilsTitle.jpg",params:{slug:f}}],fetch:[],mutations:[["pageTitle\u002Fset","BLOG"]]}}("text","element","\n","br","p","The Perils of Ray-Tracing Performance Marketing and Peak Ray Flow","There are certain perils for ray tracing among most of the advances it provides.","\n    Real-time graphics has entered a new era with the advent of ray tracing,\n    which delivers more realistic scenes than ever before. But all current\n    implementations centre around one vendor—and that raises issues, especially\n    when the competitive field expands.\n  ","b"," ")));