!function(){var t=document.createElement("style");t.innerHTML=".force-page[data-v-10ae0508]{width:100%;height:100%;position:relative}.force-page .force-tip[data-v-10ae0508]{line-height:20px;width:100px;position:absolute;color:#fff}.force-page .force-tip li[data-v-10ae0508]{background:cadetblue;cursor:pointer}\n",document.head.appendChild(t),System.register(["./index-legacy.6cbdf188.js"],(function(t){"use strict";var e,n,a,r,i,s,o,d,u,c;return{setters:[function(t){e=t.n,n=t.b,a=t.c,r=t.m,i=t.d,s=t.o,o=t.e,d=t.s,u=t.f,c=t.z}],execute:function(){var l={},f=e({name:"force-3",data:function(){return{isShowTip:!1,point:null,nodesData:null,linksData:null,nodes:null,texts:null,links:null,simulation:null}},mounted:function(){this.drawForce()},methods:{drawForce:function(){var t=this,e=[{name:"桂林",id:0},{name:"广州",id:1},{name:"厦门",id:2},{name:"杭州",id:3},{name:"上海",id:4},{name:"青岛",id:5},{name:"天津",id:6}];this.nodesData=e;var u=[{source:1,target:0},{source:0,target:1},{source:0,target:2},{source:0,target:3},{source:1,target:4},{source:1,target:5},{source:1,target:6}];this.linksData=u;var c=n(e).force("link",a(u).id((function(t){return t.id}))).force("charge",r().strength(-2e3)).force("center",i(400,300)).on("tick",this.ticked.bind(this));this.simulation=c;var l=s(o),f=d(".force-page").append("svg").attr("id","chart").attr("width",800).attr("height",600).call(this.zoom()).append("g").attr("class","gWapper").attr("cursor","pointer"),h=f.append("g").selectAll("line").data(u).enter().append("line").attr("stroke","blue").attr("stroke-width",1).attr("marker-end","url(#arrow)");this.links=h,f.append("defs").append("marker").attr("id","arrow").attr("markerWidth",20).attr("markerHeight",20).attr("refX",8).attr("refY",8).attr("orient","auto").append("path").attr("fill","red").attr("d","M0 0 L8 8 L0 16Z");var p=f.append("g").selectAll("circle").data(e).enter().append("circle").attr("r",20).attr("opacity",.5).attr("fill",(function(t,e){return l(e)})).call(this.drag).on("contextmenu ",(function(e,n){e.preventDefault(),t.isShowTip=!0,t.point={left:e.offsetX,top:e.offsetY,data:n}}));this.nodes=p;var g=f.append("g").selectAll("text").data(e).enter().append("text").attr("text-anchor","middle").attr("dy","0.3em").text((function(t){return t.name})).call(this.drag);this.texts=g},addNode:function(){for(var t=this,e=function(){var e=a[n];-1===t.nodesData.findIndex((function(t){return t.id===e.id}))&&(t.nodesData.push(e),!0)},n=0,a=[{name:"河北",id:7},{name:"青岛",id:5}];n<a.length;n++)e();for(var r=function(){var e=s[i],n=t.linksData.findIndex((function(t){return t.source.id===e.source&&t.target.id===e.target})),a=t.linksData.findIndex((function(t){return t.source.id===e.target&&t.target.id===e.source}));-1===n&&(t.linksData.push(e),!0),a>-1&&(e.isReverse=!0,t.linksData.push(e),!0)},i=0,s=[{source:7,target:0},{source:5,target:1}];i<s.length;i++)r();this.update("add")},delNode:function(){var t=this,e=this.nodesData.findIndex((function(e){return e.id===t.point.data.id}));this.nodesData.splice(e,1),this.linksData.forEach((function(e,n){e.source.id!==t.point.data.id&&e.target.id!==t.point.data.id||t.linksData.splice(n,1)})),this.isShowTip=!1,this.update("del")},update:function(t){var e=this,n=s(o);"add"===t?(this.nodes=this.nodes.data(this.nodesData,(function(t){return t.name})).enter().append("circle").merge(this.nodes),this.texts=this.texts.data(this.nodesData,(function(t){return t.name})).enter().append("text").merge(this.texts),this.links=this.links.data(this.linksData,(function(t){return t.source.name+"-"+t.target.name})).enter().append("line").merge(this.links)):"del"===t&&(this.nodes=this.nodes.data(this.nodesData,(function(t){return t.name})).exit().remove("circle").merge(this.nodes),this.texts=this.texts.data(this.nodesData,(function(t){return t.name})).exit().remove("text").merge(this.texts),this.links=this.links.data(this.linksData,(function(t){return t.source.name+"-"+t.target.name})).exit().remove("line").merge(this.links)),this.nodes.attr("r",20).attr("opacity",.5).attr("fill",(function(t,e){return n(e)})).call(u().on("start",this.dragstart).on("drag",this.dragged).on("end",this.dragend)).on("contextmenu ",(function(t,n){t.preventDefault(),e.isShowTip=!0,e.point={left:t.offsetX,top:t.offsetY,data:n}})),this.texts=this.texts.attr("text-anchor","middle").attr("dy","0.3em").text((function(t){return t.name})).call(u().on("start",this.dragstart).on("drag",this.dragged).on("end",this.dragend)),this.links=this.links.attr("stroke",(function(t){return t.isReverse?"none":"blue"})).attr("stroke-width",1).attr("marker-end","url(#arrow)"),this.simulation.nodes(this.nodesData),this.simulation.force("link").links(this.linksData),this.simulation.alpha(1).restart()},ticked:function(){this.links.attr("x1",(function(t){return t.source.x})).attr("y1",(function(t){return t.source.y})).attr("x2",(function(t){return t.target.x})).attr("y2",(function(t){return t.target.y})),this.nodes.attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})),this.texts.attr("x",(function(t){return t.x})).attr("y",(function(t){return t.y})),this.simulation.alpha()<.2&&(this.nodes.attr("cx",(function(t){return t.fx=t.x,t.x})).attr("cy",(function(t){return t.fy=t.y,t.y})),this.simulation.stop())},drag:function(t){return u().on("start",(function(e,n){e.active||t.alphaTarget(.3).restart(),n.fx=n.x,n.fy=n.y})).on("drag",(function(t,e){e.fx=t.x,e.fy=t.y})).on("end",(function(e,n){e.active||t.alphaTarget(0),n.fx=null,n.fy=null}))},zoom:function(){return c().scaleExtent([1,10]).on("zoom",(function(t){d(".gWapper").attr("transform",t.transform)}))}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"force-page"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowTip,expression:"isShowTip"}],staticClass:"force-tip",style:{top:(t.point&&t.point.top)+"px",left:(t.point&&t.point.left)+"px"}},[n("ul",[n("li",{on:{click:function(e){return t.delNode()}}},[t._v("删除节点")])])]),n("el-button",{on:{click:function(e){return t.addNode()}}},[t._v("增加节点")])],1)}),[],!1,h,"10ae0508",null,null);function h(t){for(var e in l)this[e]=l[e]}t("default",function(){return f.exports}())}}}))}();