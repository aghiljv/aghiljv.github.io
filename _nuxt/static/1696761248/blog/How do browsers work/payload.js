__NUXT_JSONP__("/blog/How do browsers work", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return {data:[{blog:{slug:m,name:m,titleImage:"121020\u002Ftitle",briefdesc:n,postDate:"October 11, 2020",blogNumber:28,toc:[],body:{type:"root",children:[{type:b,tag:f,props:{},children:[{type:a,value:"\n  Without the modern browsers, the internet will be pretty much a boring place.\n  You just enter an address and the browser will take care of everything. Ever\n  wondered what is going on behind the scene?\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Here is a high-level view of what happens."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"1. Resource Gathering."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{srcSet:["\u002Fimg\u002Fblog\u002F121020\u002Fresources.webp"],type:j},children:[]},{type:a,value:e},{type:b,tag:k,props:{style:l,src:"\u002Fimg\u002Fblog\u002F121020\u002Fresources.jpg",alt:"Resources"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"\n  When you provide an address to the browser, provided you have the access\n  rights to the said address, the browser will start resource gathering. The\n  resources will include everything from HTML, CSS, JS, images, etc. Simply put,\n  the browser will gather everything that needs to be displayed.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"2. Parse HTML and create DOM tree."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{srcSet:["\u002Fimg\u002Fblog\u002F121020\u002FdomTree.webp"],type:j},children:[]},{type:a,value:e},{type:b,tag:k,props:{style:l,src:"\u002Fimg\u002Fblog\u002F121020\u002FdomTree.jpg",alt:"DOM tree"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"\n  As you know, HTML works in the DOM (Document Object Model). As you can see in\n  the image above, there is a root html element. Then, head and body. Then there\n  are more and more nested tags inside both and it goes on and on. The browser\n  will create this DOM from the html resource that was gathered in step 1. DOM\n  is regulated by W3 and well documented. Even if the one(s) who wrote the code\n  for got to close some tags, the browser will still go ahead with rectifying\n  those small mistakes and displaying the page.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"3. Create Render Tree from DOM tree."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{srcSet:["\u002Fimg\u002Fblog\u002F121020\u002FrenderTree.webp"],type:j},children:[]},{type:a,value:e},{type:b,tag:k,props:{style:l,src:"\u002Fimg\u002Fblog\u002F121020\u002FrenderTree.jpg",alt:"Render tree"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"\n  In this step, the browser applies styles to the objects in the DOM tree and\n  creates a render tree. The CSS files gathered will be made use of to do this\n  action. The CSS file(s) will contain the styling for all the elements in the\n  DOM tree. One major difference between the DOM tree and render tree would be,\n  the render tree would only contain the elements that are to be displayed in\n  the browser. So, if a DOM object has its styling as “display:none;”, it will\n  not be present in the render tree.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"4. Layout."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{srcSet:["\u002Fimg\u002Fblog\u002F121020\u002Flayout.webp"],type:j},children:[]},{type:a,value:e},{type:b,tag:k,props:{style:l,src:"\u002Fimg\u002Fblog\u002F121020\u002Flayout.jpg",alt:"Layout"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"\n  All the HTML elements can be considered as boxes. The CSS box model is\n  essentially a box that wraps around every HTML element consisting of margins,\n  borders, padding and the actual content. All of these will be applied to the\n  elements in the previous step. But even after that, the browser needs to\n  “size” and “position” these elements. In this step the browser does that and\n  forces the DOM and render tree to be rebuilt.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"5. Painting."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{srcSet:["\u002Fimg\u002Fblog\u002F121020\u002Fpainting.webp"],type:j},children:[]},{type:a,value:e},{type:b,tag:k,props:{style:l,src:"\u002Fimg\u002Fblog\u002F121020\u002Fpainting.jpg",alt:"Painting"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"\n  Now, the browser knows which elements are to be displayed and their computed\n  styles and geometry. In this final step, this information is then converted to\n  actual pixels on the screen with the help of the operating system and graphics\n  engine of the device. The z-coordinate or z-index in CSS terms are also\n  finalized in this step. The previous step will determine the position I the\n  x-y plane. This step is also called rasterization.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"\n  These are just the steps involved in loading and showing the page for the\n  first time. These steps are undergone every time you load a new page. There is\n  obviously a lot more. The JS files are responsible for adding interactivity\n  and behavior to the page.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"\n  Disclaimer : The views and opinions expressed in the article belong solely to the\n  author, and not necessarily to the author's employer, organisation, committee\n  or other group or individual.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]}]},dir:"\u002Fblogs",path:"\u002Fblogs\u002FHow do browsers work",extension:".md",createdAt:o,updatedAt:o},title:m,description:n,ogImage:"\u002Fimg\u002Fblog\u002F121020\u002Ftitle.jpg",params:{slug:m}}],fetch:{},mutations:[["pageTitle\u002Fset","BLOG"]]}}("text","element","\n","br","\n  ","p","b","picture","source","image\u002Fwebp","img","height: 100%; width: 100%; object-fit: contain","How do browsers work","How does a typical browser loads and displays a webpage.","2023-10-08T10:32:54.093Z")));