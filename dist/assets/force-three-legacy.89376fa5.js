!function(){var t=document.createElement("style");t.innerHTML=".force-page[data-v-00c3d131]{width:100%;height:100%;position:relative}.force-page .force-tip[data-v-00c3d131]{line-height:20px;width:100px;position:absolute;color:#fff}.force-page .force-tip li[data-v-00c3d131]{background:cadetblue;cursor:pointer}\n",document.head.appendChild(t),System.register(["./index-legacy.6cbdf188.js"],(function(t){"use strict";var e,r,a,n,i,o,c,u,s,l;return{setters:[function(t){e=t.n,r=t.b,a=t.c,n=t.m,i=t.d,o=t.o,c=t.e,u=t.s,s=t.f,l=t.z}],execute:function(){var p={},d=e({name:"force-3",data:function(){return{point:null,nodesData:null,linksData:null,nodes:null,texts:null,linksText:null,links:null,simulation:null}},mounted:function(){this.drawForce()},methods:{drawForce:function(){var t=[{name:"桂林",id:0},{name:"广州",id:1},{name:"厦门",id:2},{name:"杭州",id:3},{name:"上海",id:4},{name:"青岛",id:5},{name:"天津",id:6}];this.nodesData=t;var e=[{source:0,target:1,relationship:"直达1",linkNum:1},{source:1,target:0,relationship:"直达2",linkNum:2},{source:0,target:2,relationship:"直达3",linkNum:0},{source:0,target:3,relationship:"直达4",linkNum:0},{source:1,target:4,relationship:"直达5",linkNum:0},{source:1,target:5,relationship:"直达6",linkNum:1},{source:5,target:1,relationship:"直达61",linkNum:2},{source:1,target:6,relationship:"直达7",linkNum:0}];this.linksData=e;var l=r(t).force("link",a(e).id((function(t){return t.id})).distance(100)).force("charge",n().strength(-2e3)).force("center",i(400,300)).on("tick",this.ticked.bind(this));this.simulation=l;var p=o(c),d=u(".force-page").append("svg").attr("id","chart").attr("width",800).attr("height",600).call(this.zoom()).append("g").attr("class","gWapper").attr("cursor","pointer"),h=d.append("g").selectAll("path").data(e).enter().append("path").attr("id",(function(t,e){return"force-page;"+t.source.name+";"+t.target.name+";"+e})).attr("marker-end","url(#arrow)").attr("stroke",(function(t,e){return"black"})).attr("stroke-width",1).attr("fill-opacity",0);this.links=h,d.append("defs").append("marker").attr("id","arrow").attr("markerWidth",8).attr("markerHeight",8).attr("refX",8).attr("refY",8).attr("orient","auto").append("path").attr("fill","red").attr("d","M0 0 L8 8 L0 16Z");var f=d.append("g").selectAll("circle").data(t).enter().append("circle").attr("r",30).attr("opacity",.5).attr("fill",(function(t,e){return p(e)})).call(s().on("start",(function(t,e){t.active||l.alphaTarget(.3).restart();e.fx=e.x,e.fy=e.y})).on("drag",(function(t,e){e.fx=t.x,e.fy=t.y})).on("end",(function(t,e){t.active||l.alphaTarget(0);e.fx=null,e.fy=null})));this.nodes=f;var g=d.append("g").selectAll("text").data(e).enter().append("text").attr("dy","5").append("textPath").attr("startOffset","30%").attr("xlink:href",(function(t,e){return"#force-page;"+t.source.name+";"+t.target.name+";"+e})).text((function(t){return t.relationship})).attr("id",(function(t,e){return"force-page;"+t.relationship+";"+e}));this.linksText=g;var m=d.append("g").selectAll("text").data(t).enter().append("text").attr("text-anchor","middle").attr("pointer-event","none").text((function(t){return t.name}));this.texts=m},ticked:function(){this.links.attr("d",(function(t){var e=(t.source.x-t.target.x)/Math.sqrt(Math.pow(t.source.x-t.target.x,2)+Math.pow(t.source.y-t.target.y,2)),r=(t.source.y-t.target.y)/Math.sqrt(Math.pow(t.source.x-t.target.x,2)+Math.pow(t.source.y-t.target.y,2));if(!e&&!r)return"";t.path=[],t.path[0]=t.source.x-30*e,t.path[1]=t.source.y-30*r,t.path[2]=t.target.x+30*e,t.path[3]=t.target.y+30*r;var a=175/t.linkNum;return 0===t.linkNum?"M ".concat(t.path[0],",").concat(t.path[1]," L ").concat(t.path[2],",").concat(t.path[3]):"M"+t.path[0]+","+t.path[1]+"A"+a+","+a+" 0 0,1 "+t.path[2]+","+t.path[3]})),this.nodes.attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})),this.linksText.attr("x",(function(t){return(t.source.x+t.target.x)/2})).attr("y",(function(t){return(t.source.y+t.target.y)/2})),this.texts.attr("x",(function(t){return t.x})).attr("y",(function(t){return t.y})),this.simulation.alpha()<.2&&(this.nodes.attr("cx",(function(t){return t.fx=t.x,t.x})).attr("cy",(function(t){return t.fy=t.y,t.y})),this.simulation.stop())},zoom:function(){return l().scaleExtent([.1,10]).on("zoom",(function(t){u(".gWapper").attr("transform",t.transform)}))}}},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"force-page"})}),[],!1,h,"00c3d131",null,null);function h(t){for(var e in p)this[e]=p[e]}t("default",function(){return d.exports}())}}}))}();