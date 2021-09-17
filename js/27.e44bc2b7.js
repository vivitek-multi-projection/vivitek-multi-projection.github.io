"use strict";(self["webpackChunkmps"]=self["webpackChunkmps"]||[]).push([[27],{2934:(e,t,o)=>{o.d(t,{OO:()=>s,jT:()=>i});const s={m:1,cm:100,mm:1e3,inch:39.3700787,feet:3.2808399},i={plane:0,curved:1,sphere:2,halfSphere:3,partialSphere:4}},6027:(e,t,o)=>{o.r(t),o.d(t,{default:()=>le});var s=o(3673);const i=(0,s.HX)("data-v-64ce601e");(0,s.dD)("data-v-64ce601e");const r={class:"fit",id:"threeView"};(0,s.Cn)();const n=i(((e,t,o,n,a,l)=>{const c=(0,s.up)("ProjectorDetail"),h=(0,s.up)("q-resize-observer"),d=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(d,{class:"flex flex-center","style-fn":l.stylePage},{default:i((()=>[(0,s.Wm)("div",r,[(0,s.Wm)(c),(0,s.Wm)(h,{onResize:l.resizeCanvas,debounce:"100"},null,8,["onResize"])])])),_:1},8,["style-fn"])}));var a=o(2323),l=o(8880);const c=(0,s.HX)("data-v-cd626e84");(0,s.dD)("data-v-cd626e84");const h={class:"absolute absolute-bottom-left detail-wrapper"},d={class:"row"},m={class:"col-5"},_={class:"row items-center no-wrap"},u={class:"col"},p={class:"text-subtitle2"},S={key:0},j={class:"col-auto"},f={class:"q-gutter-sm row"},b=(0,s.Wm)("div",{class:"text-subtitle2"}," X: ",-1),P={class:"text-subtitle2"},v=(0,s.Wm)("div",{class:"text-subtitle2"}," Y: ",-1),w={class:"text-subtitle2"},E=(0,s.Wm)("div",{class:"text-subtitle2"}," Z: ",-1),g={class:"text-subtitle2"},y={class:"text-subtitle2"},T={class:"text-subtitle2"},R={class:"text-subtitle2"},z={class:"col-7"},x={class:"q-pa-none"},C={key:0,style:{color:"#2196f3"}},L={key:1};(0,s.Cn)();const D=c(((e,t,o,i,r,n)=>{const D=(0,s.up)("q-btn"),O=(0,s.up)("q-card-section"),B=(0,s.up)("q-checkbox"),A=(0,s.up)("q-input"),M=(0,s.up)("q-td"),I=(0,s.up)("q-table"),$=(0,s.up)("q-card");return(0,s.wy)(((0,s.wg)(),(0,s.j4)("div",h,[n.selectedProjector?((0,s.wg)(),(0,s.j4)($,{key:0,class:"fit"},{default:c((()=>[(0,s.Wm)("div",d,[(0,s.Wm)("div",m,[(0,s.Wm)(O,{class:"q-pa-none q-pl-md q-pr-xs"},{default:c((()=>[(0,s.Wm)("div",_,[(0,s.Wm)("div",u,[(0,s.Wm)("div",p,[(0,s.Wm)("span",null,(0,a.zw)(`${n.selectedProjector.customName}(${n.selectedProjector.modelName})`),1),n.selectedProjector.lensName?((0,s.wg)(),(0,s.j4)("span",S,(0,a.zw)(`  &&  ${n.selectedProjector.lensName}`),1)):(0,s.kq)("",!0)])]),(0,s.Wm)("div",j,[(0,s.Wm)(D,{color:"grey-7",round:"",flat:"",icon:"arrow_drop_down",onClick:t[1]||(t[1]=e=>n.showProjectorDetail=!1)})])])])),_:1}),(0,s.Wm)(O,{class:"q-pa-none q-pl-md q-pr-xs",style:{height:"200px",overflow:"auto"}},{default:c((()=>[(0,s.Wm)("div",f,[(0,s.Wm)(A,{"model-value":n.selectedProjector.x,"onUpdate:modelValue":n.setX,suffix:n.unitLabel,title:`${n.selectedProjector.x}${n.unitLabel}`,dense:"",color:e.$q.dark.isActive?"primary":"positive",type:"number",step:"0.1",style:{width:"350px"}},{prepend:c((()=>[(0,s.Wm)(B,{modelValue:r.applyAllX,"onUpdate:modelValue":t[2]||(t[2]=e=>r.applyAllX=e),class:"text-subtitle2","left-label":"",label:"Apply Selection"},null,8,["modelValue"]),b])),_:1},8,["model-value","onUpdate:modelValue","suffix","title","color"]),(0,s.Wm)(A,{"model-value":n.selectedProjector.rotateX,"onUpdate:modelValue":n.setRotateX,title:`${n.selectedProjector.rotateX}°`,dense:"",color:e.$q.dark.isActive?"primary":"positive",type:"number",step:"2",min:"-180",max:"180",suffix:"°",style:{width:"185px"}},{prepend:c((()=>[(0,s.Wm)("div",P,(0,a.zw)(e.$t("rotateX"))+": ",1)])),_:1},8,["model-value","onUpdate:modelValue","title","color"]),(0,s.Wm)(A,{"model-value":n.selectedProjector.y,"onUpdate:modelValue":n.setY,suffix:n.unitLabel,title:`${n.selectedProjector.y}${n.unitLabel}`,dense:"",color:e.$q.dark.isActive?"primary":"positive",type:"number",step:"0.1",style:{width:"350px"}},{prepend:c((()=>[(0,s.Wm)(B,{modelValue:r.applyAllY,"onUpdate:modelValue":t[3]||(t[3]=e=>r.applyAllY=e),class:"text-subtitle2","left-label":"",label:"Apply Selection"},null,8,["modelValue"]),v])),_:1},8,["model-value","onUpdate:modelValue","suffix","title","color"]),(0,s.Wm)(A,{"model-value":n.selectedProjector.rotateY,"onUpdate:modelValue":n.setRotateY,title:`${n.selectedProjector.rotateY}°`,dense:"",color:e.$q.dark.isActive?"primary":"positive",type:"number",step:"2",min:"-180",max:"180",suffix:"°",style:{width:"185px"}},{prepend:c((()=>[(0,s.Wm)("div",w,(0,a.zw)(e.$t("rotateY"))+": ",1)])),_:1},8,["model-value","onUpdate:modelValue","title","color"]),(0,s.Wm)(A,{"model-value":n.selectedProjector.z,"onUpdate:modelValue":n.setZ,title:`${n.selectedProjector.z}${n.unitLabel}`,dense:"",color:e.$q.dark.isActive?"primary":"positive",type:"number",step:"0.1",suffix:n.unitLabel,style:{width:"350px"}},{prepend:c((()=>[(0,s.Wm)(B,{modelValue:r.applyAllZ,"onUpdate:modelValue":t[4]||(t[4]=e=>r.applyAllZ=e),class:"text-subtitle2","left-label":"",label:"Apply Selection"},null,8,["modelValue"]),E])),_:1},8,["model-value","onUpdate:modelValue","title","color","suffix"]),(0,s.Wm)(A,{"model-value":n.selectedProjector.rotateZ,"onUpdate:modelValue":n.setRotateZ,title:`${n.selectedProjector.rotateZ}°`,dense:"",color:e.$q.dark.isActive?"primary":"positive",type:"number",step:"2",min:"-180",max:"180",suffix:"°",style:{width:"185px"}},{prepend:c((()=>[(0,s.Wm)("div",g,(0,a.zw)(e.$t("rotateZ"))+": ",1)])),_:1},8,["model-value","onUpdate:modelValue","title","color"]),(0,s.Wm)(A,{disable:0===n.selectedProjector.lensShiftHMin&&0===n.selectedProjector.lensShiftHMax,"model-value":n.selectedProjector.lensShiftH,"onUpdate:modelValue":n.setLensShiftH,title:`${n.selectedProjector.lensShiftH}%`,dense:"",color:e.$q.dark.isActive?"primary":"positive",type:"number",min:n.selectedProjector.lensShiftHMin,max:n.selectedProjector.lensShiftHMax,step:"1",suffix:"%",style:{width:"185px"}},{prepend:c((()=>[(0,s.Wm)("div",y,(0,a.zw)(e.$t("lensShiftH"))+": ",1)])),_:1},8,["disable","model-value","onUpdate:modelValue","title","color","min","max"]),(0,s.Wm)(A,{disable:0===n.selectedProjector.lensShiftHMin&&0===n.selectedProjector.lensShiftHMax,"model-value":n.selectedProjector.lensShiftV,"onUpdate:modelValue":n.setLensShiftV,title:`${n.selectedProjector.lensShiftV}%`,dense:"",color:e.$q.dark.isActive?"primary":"positive",type:"number",min:n.selectedProjector.lensShiftVMin,max:n.selectedProjector.lensShiftVMax,step:"1",suffix:"%",style:{width:"185px"}},{prepend:c((()=>[(0,s.Wm)("div",T,(0,a.zw)(e.$t("lensShiftV"))+": ",1)])),_:1},8,["disable","model-value","onUpdate:modelValue","title","color","min","max"]),(0,s.Wm)(A,{disable:n.selectedProjector.throwRatioMin===n.selectedProjector.throwRatio&&n.selectedProjector.throwRatioMax===n.selectedProjector.throwRatio,"model-value":n.selectedProjector.throwRatio,"onUpdate:modelValue":n.setThrowRatio,title:`${n.selectedProjector.throwRatio}`,dense:"",color:e.$q.dark.isActive?"primary":"positive",type:"number",min:n.selectedProjector.throwRatioMin,max:n.selectedProjector.throwRatioMax,step:"0.1",style:{width:"185px"}},{prepend:c((()=>[(0,s.Wm)("div",R,(0,a.zw)(e.$t("throwRatio"))+": ",1)])),_:1},8,["disable","model-value","onUpdate:modelValue","title","color","min","max"])])])),_:1})]),(0,s.Wm)("div",z,[(0,s.Wm)("div",x,[(0,s.Wm)(I,{onRowClick:n.clickRow,selected:r.selectedRow,"onUpdate:selected":t[5]||(t[5]=e=>r.selectedRow=e),rows:n.projectors,columns:n.columns,"row-key":"uId",class:"my-sticky-header-table",selection:"multiple",pagination:{rowsPerPage:100},"hide-bottom":"",dense:"",flat:"",bordered:"",square:""},{"body-cell":c((e=>[(0,s.Wm)(M,{props:e},{default:c((()=>[e.row.uId===n.selectedProjector.uId?((0,s.wg)(),(0,s.j4)("span",C,(0,a.zw)(e.value),1)):((0,s.wg)(),(0,s.j4)("span",L,(0,a.zw)(e.value),1))])),_:2},1032,["props"])])),_:1},8,["onRowClick","selected","rows","columns"])])])])])),_:1})):(0,s.kq)("",!0)],512)),[[l.F8,n.showProjectorDetail]])}));var O=o(515),B=o.n(O),A=o(7874);const M={name:"Projector-Detail",data(){return{selectedRow:[],applyAllX:!1,applyAllY:!1,applyAllZ:!1}},computed:{unitLabel(){return this.$store.state.common.unitLabel},columns(){return[{name:"customName",required:!0,label:"customName",field:"customName",align:"left"},{name:"modelName",required:!0,label:"modelName",field:"modelName",align:"left"},{name:"lensName",required:!0,label:"lensName",field:"lensName",align:"left",format:e=>`${e||"fixed"}`},{name:"x",required:!0,label:`x(${this.unitLabel})`,field:"x",align:"left",format:e=>Number(e).toFixed(2)},{name:"y",required:!0,label:`y(${this.unitLabel})`,field:"y",align:"left",format:e=>Number(e).toFixed(2)},{name:"z",required:!0,label:`z(${this.unitLabel})`,field:"z",align:"left",format:e=>Number(e).toFixed(2)},{name:"rotateX",required:!0,label:"rotateX(°)",field:"rotateX",align:"left"},{name:"rotateY",required:!0,label:"rotateY(°)",field:"rotateY",align:"left"},{name:"rotateZ",required:!0,label:"rotateZ(°)",field:"rotateZ",align:"left"},{name:"throwRatio",required:!0,label:"throwRatio",field:"throwRatio",align:"left"},{name:"lensShiftH",required:!0,label:"lensShiftH(%)",field:"lensShiftH",align:"left"},{name:"lensShiftV",required:!0,label:"lensShiftV(%)",field:"lensShiftV",align:"left"}]},projectors(){return this.$store.state.projector.projectors},showProjectorDetail:{get(){return this.$store.state.common.showProjectorDetail},set(e){this.SET_SHOW_PROJECTOR_DETAIL(e)}},selectedProjector(){return this.$store.getters["projector/selectedProjector"]}},methods:B()(B()(B()({},(0,A.OI)("common",["SET_SHOW_PROJECTOR_DETAIL"])),(0,A.OI)("projector",["SET_SELECTED_PROJECTOR_X","SET_SELECTED_PROJECTOR_Y","SET_SELECTED_PROJECTOR_Z","SET_SELECTED_PROJECTOR_ROTATE_X","SET_SELECTED_PROJECTOR_ROTATE_Y","SET_SELECTED_PROJECTOR_ROTATE_Z","SET_SELECTED_PROJECTOR_LENS_SHIFT_H","SET_SELECTED_PROJECTOR_LENS_SHIFT_V","SET_SELECTED_PROJECTOR_THROW_RATIO","SET_SELECTED_PROJECTOR_UID"])),{},{setX(e){const t=this.selectedProjector.uId;this.applyAllX&&this.selectedRow.forEach((t=>{this.SET_SELECTED_PROJECTOR_UID(t.uId),this.SET_SELECTED_PROJECTOR_X(+e),this.$bus.emit("setProjector",t)})),this.SET_SELECTED_PROJECTOR_UID(t),this.SET_SELECTED_PROJECTOR_X(+e),this.setProjector()},setY(e){this.SET_SELECTED_PROJECTOR_Y(+e),this.setProjector()},setZ(e){this.SET_SELECTED_PROJECTOR_Z(+e),this.setProjector()},setRotateX(e){this.SET_SELECTED_PROJECTOR_ROTATE_X(+e),this.setProjector()},setRotateY(e){this.SET_SELECTED_PROJECTOR_ROTATE_Y(+e),this.setProjector()},setRotateZ(e){this.SET_SELECTED_PROJECTOR_ROTATE_Z(+e),this.setProjector()},setLensShiftH(e){this.SET_SELECTED_PROJECTOR_LENS_SHIFT_H(+e),this.setProjector()},setLensShiftV(e){this.SET_SELECTED_PROJECTOR_LENS_SHIFT_V(+e),this.setProjector()},setThrowRatio(e){this.SET_SELECTED_PROJECTOR_THROW_RATIO(+e),this.setProjector()},setProjector(){this.$bus.emit("setProjector",this.selectedProjector)},clickRow(e,t,o){this.SET_SELECTED_PROJECTOR_UID(t.uId),this.$bus.emit("setProjector",t)}})};var I=o(151),$=o(5589),W=o(8240),V=o(4842),k=o(1420),q=o(6429),J=o(3884),H=o(7518),U=o.n(H);M.render=D,M.__scopeId="data-v-cd626e84";const Z=M;U()(M,"components",{QCard:I.Z,QCardSection:$.Z,QBtn:W.Z,QInput:V.Z,QCheckbox:k.Z,QTable:q.Z,QTd:J.Z});var X=o(4241),Y=(o(71),o(979),o(1118),o(2396),o(5691)),N=o(2483),F=o(7742),K=o(5810),Q=o(3991),G=o(5389),ee=o(9058),te=o(2934);class oe{constructor(){this._renderer=null,this._dom=null,this._camera=null,this._scene=null,this._light=null,this._raycaster=new Q.iMs,this._mouse=new Q.FM8,this._hotProjectorUid="",this._projectors=[],this._textures={},this._texture={wall:null,floor:null},this._room={material:{front:null,back:null,left:null,right:null,top:null,bottom:null},geometrys:{front:null,back:null,left:null,right:null,top:null,bottom:null},objects:{front:null,back:null,left:null,right:null,top:null,bottom:null}},this._roomSize={width:0,height:0,depth:0,widthDraw:0,heightDraw:0,depthDraw:0,ratio:10},this._screenType=te.jT.plane,this._screen={material:null,geometry:null,object:null},this._planeScreen={diagonal:0,aspectRatio:0},this._curvedScreen={diagonal:0,aspectRatio:0,radius:0,radialSegments:3,isSmooth:!0},this._sphereScreen={radius:0,phiStart:0,phiLength:100},this._halfSphereScreen={radius:0},this._partialSphereScreen={radius:0,startAngle:0,endAngle:0},this._controls=null}_initRenderer(e){this._renderer=new Q.CP7,this._dom=document.querySelector(e),this._dom.appendChild(this._renderer.domElement);const t=this._dom.getBoundingClientRect();this._renderer.setSize(t.width,t.height+20),this._initCamera(t),this._dom.addEventListener("mousemove",(e=>{this._onMouseMove(e)}),!1),this._dom.addEventListener("mousedown",(()=>{this._onMouseDown()}),!1)}onWindowResize(){const e=this._dom.getBoundingClientRect();this._camera.aspect=e.width/e.height,this._camera.updateProjectionMatrix(),this._renderer.setSize(e.width,e.height)}_onMouseMove(e){const t=this._dom.getBoundingClientRect();this._mouse.x=e.offsetX/t.width*2-1,this._mouse.y=-e.offsetY/t.height*2+1}_onMouseDown(){this._hotProjectorUid&&(X.default.commit("projector/SET_SELECTED_PROJECTOR_UID",this._hotProjectorUid),this._setTransformControl(this._hotProjectorUid),this._createAllBoundLine())}_setTransformControl(e){const t=this._projectors.find((t=>t.name===e));this._transformControl.object!==t&&this._transformControl.attach(t)}_initCamera(e){this._camera=new Q.cPb(40,e.width/e.height,.1,1e3),this._camera.position.set(24,50,-200),this._camera.lookAt(0,0,0)}_initScene(){this._scene=new Q.xsS,this._initLight(),this.setTheme()}_initLight(){this._roomSize.depth=X.default.state.room.depth,this._roomSize.depthDraw=this._roomSize.depth*this._roomSize.ratio,this._light?this._light.position.set(0,0,this._roomSize.depthDraw/2):(this._light=new Q.cek(16777215,1.2,0,2),this._light.position.set(0,0,this._roomSize.depthDraw/2),this._scene.add(this._light))}_initControls(){this._controls=new Y.z(this._camera,this._renderer.domElement),this._controls.addEventListener("change",(()=>{}))}_initTransformControl(){this._transformControl=new N.Ys(this._camera,this._renderer.domElement),this._transformControl.size=.5,this._transformControl.addEventListener("dragging-changed",(e=>{this._controls.enabled=!e.value}));let e=0;this._transformControl.addEventListener("change",(t=>{e++,e%2===0&&this._transformControl.object&&(X.default.commit("projector/SET_SELECTED_PROJECTOR_X",this._transformControl.object.position.x/this._roomSize.ratio),X.default.commit("projector/SET_SELECTED_PROJECTOR_Y",this._transformControl.object.position.y/this._roomSize.ratio),X.default.commit("projector/SET_SELECTED_PROJECTOR_Z",this._transformControl.object.position.z/this._roomSize.ratio),this._createBoundLine(this._transformControl.object.name))})),this._scene.add(this._transformControl)}_render(){this._raycaster.setFromCamera(this._mouse,this._camera),this._hotProjectorUid=null,this._projectors.forEach((e=>{const t=this._raycaster.intersectObjects(e.children);t.length>0?e.children.forEach((t=>{t.material.emissive.setHex(255),this._hotProjectorUid=e.name})):e.children.forEach((e=>{e.material.emissive.setHex(0)}))})),this._renderer.render(this._scene,this._camera)}setTheme(){this._scene.background=ee.Z.isActive?new Q.Ilk(1250327):new Q.Ilk(16776427)}animate(){requestAnimationFrame((()=>{this.animate()})),this._render()}_initTexture(){const e=new Q.dpR,t=new Promise(((t,o)=>{e.load("texture/wall.jfif",(e=>{const o=new Q.YBo({map:e,side:Q.Wl3,emissive:16711422,emissiveIntensity:.2});this._room.material.front=o,this._room.material.back=o,this._room.material.left=o,this._room.material.right=o,this._room.material.top=o,t(e)}),null,(e=>{o(e)}))})),o=new Promise(((t,o)=>{e.load("texture/floor.jfif",(e=>{const o=new Q.YBo({map:e,side:Q.Wl3,emissive:16711422,emissiveIntensity:.2});this._room.material.bottom=o,t(e)}),null,(e=>{o(e)}))})),s=new Promise(((t,o)=>{e.load("texture/screen2.jpg",(e=>{const o=new Q.vBJ({map:e,side:Q.ehD,transparent:!0,opacity:.8});this._screen.material=o,t(e)}),null,(e=>{o(e)}))}));return Promise.all([t,o,s])}_loadTexture(e,t){const o=new Q.dpR;return new Promise(((s,i)=>{if(t){const t=document.createElement("video");t.src=e,t.style.width="0px",t.autoplay=!0,t.muted=!0,t.loop=!0,t.controls=!0;const o=document.getElementById("textureVideo");o.appendChild(t);const i=new Q.fO1(t);s(i)}else o.load(e,(e=>{s(e)}),null,(e=>{i(e)}))}))}_initRoom(){this._roomSize.width=X.default.state.room.width,this._roomSize.height=X.default.state.room.height,this._roomSize.depth=X.default.state.room.depth,this._roomSize.widthDraw=this._roomSize.width*this._roomSize.ratio,this._roomSize.heightDraw=this._roomSize.height*this._roomSize.ratio,this._roomSize.depthDraw=this._roomSize.depth*this._roomSize.ratio,this._room&&(Object.values(this._room.geometrys).forEach((e=>{e&&e.dispose()})),Object.values(this._room.objects).forEach((e=>{e&&this._scene.remove(e)}))),this._room.geometrys.front=new Q._12(this._roomSize.widthDraw,this._roomSize.heightDraw),this._room.objects.front=new Q.Kj0(this._room.geometrys.front,this._room.material.front),this._room.objects.front.position.z=this._roomSize.depthDraw,this._room.objects.front.rotateY(1*Math.PI),this._scene.add(this._room.objects.front),this._room.geometrys.back=new Q._12(this._roomSize.widthDraw,this._roomSize.heightDraw),this._room.objects.back=new Q.Kj0(this._room.geometrys.back,this._room.material.back),this._scene.add(this._room.objects.back),this._room.geometrys.top=new Q._12(this._roomSize.widthDraw,this._roomSize.depthDraw),this._room.objects.top=new Q.Kj0(this._room.geometrys.top,this._room.material.top),this._room.objects.top.position.z=this._roomSize.depthDraw/2,this._room.objects.top.position.y=this._roomSize.heightDraw/2,this._room.objects.top.rotateX(.5*Math.PI),this._scene.add(this._room.objects.top),this._room.geometrys.bottom=new Q._12(this._roomSize.widthDraw,this._roomSize.depthDraw),this._room.objects.bottom=new Q.Kj0(this._room.geometrys.bottom,this._room.material.bottom),this._room.objects.bottom.position.z=this._roomSize.depthDraw/2,this._room.objects.bottom.position.y=-this._roomSize.heightDraw/2,this._room.objects.bottom.rotateX(-.5*Math.PI),this._scene.add(this._room.objects.bottom),this._room.geometrys.left=new Q._12(this._roomSize.depthDraw,this._roomSize.heightDraw),this._room.objects.left=new Q.Kj0(this._room.geometrys.left,this._room.material.left),this._room.objects.left.position.z=this._roomSize.depthDraw/2,this._room.objects.left.position.x=this._roomSize.widthDraw/2,this._room.objects.left.rotateY(-.5*Math.PI),this._scene.add(this._room.objects.left),this._room.geometrys.right=new Q._12(this._roomSize.depthDraw,this._roomSize.heightDraw),this._room.objects.right=new Q.Kj0(this._room.geometrys.right,this._room.material.right),this._room.objects.right.position.z=this._roomSize.depthDraw/2,this._room.objects.right.position.x=-this._roomSize.widthDraw/2,this._room.objects.right.rotateY(.5*Math.PI),this._scene.add(this._room.objects.right)}_initScreen(){this._screen.geometry&&this._screen.geometry.dispose(),this._screen.object&&this._scene.remove(this._screen.object),this._screenType===te.jT.plane&&this._createPlaneScreen(),this._screenType===te.jT.curved&&this._createCurveScreen(),this._screenType===te.jT.sphere&&this._createSphereScreen(),this.adjustScreenPosition()}adjustScreenPosition(){const e=this._screen.geometry.attributes.position.array,t=this._screen.geometry.attributes.position.count;let o=0,s=0,i=0,r=0,n=0;for(let a=0;a<t;a++){const[t,l,c]=[e[3*a],e[3*a+1],e[3*a+2]];t<o&&(o=t),t>s&&(s=t),l<i&&(i=l),l>r&&(r=l),c>n&&(n=c)}this._screen.object.position.x=this._roomSize.widthDraw/2-s-(o- -this._roomSize.widthDraw/2),this._screen.object.position.y=this._roomSize.heightDraw/2-r-(i- -this._roomSize.heightDraw/2),this._screen.object.position.z=this._roomSize.depthDraw-n-.5*this._roomSize.ratio,this._screen.object.position.x=0,this._screen.object.position.y=0,this._screen.object.position.z=this._roomSize.depthDraw-n-1*this._roomSize.ratio,X.default.commit("screen/SET_X",this._screen.object.position.x/this._roomSize.ratio),X.default.commit("screen/SET_Y",this._screen.object.position.y/this._roomSize.ratio),X.default.commit("screen/SET_Z",this._screen.object.position.z/this._roomSize.ratio),X.default.commit("screen/SET_ROTATE_X",this._screen.object.rotation.x/Math.PI*180),X.default.commit("screen/SET_ROTATE_Y",this._screen.object.rotation.y/Math.PI*180),X.default.commit("screen/SET_ROTATE_Z",this._screen.object.rotation.z/Math.PI*180)}_createPlaneScreen(){this._planeScreen.diagonal=X.default.state.screen.plane.diagonal,this._planeScreen.aspectRatio=X.default.state.screen.plane.aspectRatio,0===this._planeScreen.aspectRatio&&(this._planeScreen.aspectRatio=X.default.state.screen.plane.width/X.default.state.screen.plane.height);const e=this._planeScreen.diagonal/te.OO.inch,t=Math.atan(this._planeScreen.aspectRatio),o=e*Math.sin(t),s=o/this._planeScreen.aspectRatio;this._screen.geometry=new Q._12(o*this._roomSize.ratio,s*this._roomSize.ratio),this._screen.object=new Q.Kj0(this._screen.geometry,this._screen.material),this._scene.add(this._screen.object)}_createCurveScreen(){this._curvedScreen.diagonal=X.default.state.screen.curved.diagonal,this._curvedScreen.aspectRatio=X.default.state.screen.curved.aspectRatio,this._curvedScreen.radius=X.default.state.screen.curved.radius*this._roomSize.ratio,this._curvedScreen.radialSegments=X.default.state.screen.curved.radialSegments,this._curvedScreen.isSmooth=X.default.state.screen.curved.isSmooth,0===this._curvedScreen.aspectRatio&&(this._curvedScreen.aspectRatio=X.default.state.screen.curved.width/X.default.state.screen.curved.height);const e=this._curvedScreen.diagonal/te.OO.inch,t=Math.atan(this._curvedScreen.aspectRatio),o=e*Math.sin(t),s=o/this._curvedScreen.aspectRatio,i=o*this._roomSize.ratio/this._curvedScreen.radius;this._screen.geometry=new Q.fHI(this._curvedScreen.radius,this._curvedScreen.radius,s*this._roomSize.ratio,this._curvedScreen.isSmooth?128:this._curvedScreen.radialSegments,1,!0,-i/2,i),this._screen.object=new Q.Kj0(this._screen.geometry,this._screen.material),this._scene.add(this._screen.object)}_createSphereScreen(){this._sphereScreen.radius=X.default.state.screen.sphere.radius*this._roomSize.ratio,this._sphereScreen.phiStart=X.default.state.screen.sphere.phiStart/180*Math.PI,this._sphereScreen.phiLength=X.default.state.screen.sphere.phiLength/180*Math.PI,this._sphereScreen.thetaStart=X.default.state.screen.sphere.thetaStart/180*Math.PI,this._sphereScreen.thetaLength=(1-X.default.state.screen.sphere.thetaEnd/180-X.default.state.screen.sphere.thetaStart/180)*Math.PI,this._screen.geometry=new Q.xo$(this._sphereScreen.radius,16,16,this._sphereScreen.phiStart,this._sphereScreen.phiLength,this._sphereScreen.thetaStart,this._sphereScreen.thetaLength),this._screen.object=new Q.Kj0(this._screen.geometry,this._screen.material),this._scene.add(this._screen.object)}_addProjecotr(e){const t=new K.v,o=new F.L,s=new Promise(((s,i)=>{t.load("models/H7T_Laset7.mtl",(t=>{o.setMaterials(t),o.load("models/H7T_Laset7.obj",(t=>{t.children.forEach((e=>{e.geometry.computeBoundingBox(),e.geometry.center()})),t.name=e,t.position.z=this._roomSize.depthDraw/2,this._scene.add(t),this._transformControl.attach(t),s(t)}),void 0,(e=>{i(e)}))}),void 0,(e=>{i(e)}))}));return s}_disposeBoundLine(e){var t,o,s,i,r,n,a,l,c,h,d,m,_,u,p,S,j,f,b,P,v,w,E,g,y,T,R,z,x,C,L,D,O,B,A,M;const I=this._projectors.find((t=>t.name===e));(null===(t=I.lightBoundLT)||void 0===t?void 0:t.geometry)&&(null===(o=I.lightBoundLT)||void 0===o||o.geometry.dispose()),(null===(s=I.lightBoundLT)||void 0===s?void 0:s.object)&&this._scene.remove(null===(i=I.lightBoundLT)||void 0===i?void 0:i.object),(null===(r=I.lightBoundRT)||void 0===r?void 0:r.geometry)&&(null===(n=I.lightBoundRT)||void 0===n||n.geometry.dispose()),(null===(a=I.lightBoundRT)||void 0===a?void 0:a.object)&&this._scene.remove(null===(l=I.lightBoundRT)||void 0===l?void 0:l.object),(null===(c=I.lightBoundLB)||void 0===c?void 0:c.geometry)&&(null===(h=I.lightBoundLB)||void 0===h||h.geometry.dispose()),(null===(d=I.lightBoundLB)||void 0===d?void 0:d.object)&&this._scene.remove(null===(m=I.lightBoundLB)||void 0===m?void 0:m.object),(null===(_=I.lightBoundRB)||void 0===_?void 0:_.geometry)&&(null===(u=I.lightBoundRB)||void 0===u||u.geometry.dispose()),(null===(p=I.lightBoundRB)||void 0===p?void 0:p.object)&&this._scene.remove(null===(S=I.lightBoundRB)||void 0===S?void 0:S.object),(null===(j=I.screenBoundL)||void 0===j?void 0:j.geometry)&&(null===(f=I.screenBoundL)||void 0===f||f.geometry.dispose()),(null===(b=I.screenBoundL)||void 0===b?void 0:b.object)&&this._scene.remove(null===(P=I.screenBoundL)||void 0===P?void 0:P.object),(null===(v=I.screenBoundR)||void 0===v?void 0:v.geometry)&&(null===(w=I.screenBoundR)||void 0===w||w.geometry.dispose()),(null===(E=I.screenBoundR)||void 0===E?void 0:E.object)&&this._scene.remove(null===(g=I.screenBoundR)||void 0===g?void 0:g.object),(null===(y=I.screenBoundT)||void 0===y?void 0:y.geometry)&&(null===(T=I.screenBoundT)||void 0===T||T.geometry.dispose()),(null===(R=I.screenBoundT)||void 0===R?void 0:R.object)&&this._scene.remove(null===(z=I.screenBoundT)||void 0===z?void 0:z.object),(null===(x=I.screenBoundB)||void 0===x?void 0:x.geometry)&&(null===(C=I.screenBoundB)||void 0===C||C.geometry.dispose()),(null===(L=I.screenBoundB)||void 0===L?void 0:L.object)&&this._scene.remove(null===(D=I.screenBoundB)||void 0===D?void 0:D.object),(null===(O=I.screenPlane)||void 0===O?void 0:O.geometry)&&(null===(B=I.screenPlane)||void 0===B||B.geometry.dispose()),(null===(A=I.screenPlane)||void 0===A?void 0:A.object)&&this._scene.remove(null===(M=I.screenPlane)||void 0===M?void 0:M.object)}_createBoundLine(e){const t=this._projectors.find((t=>t.name===e)),o=X.default.state.projector.projectors.find((t=>t.uId===e)),s=X.default.state.projector.selectedProjectorUid===e;if(!t||!o)return;this._disposeBoundLine(e);const i=1/o.throwRatio/o.aspectRatio/2,r=1+(2*o.lensShiftV+o.offset)/100,n=180*Math.atan(i*r)/Math.PI,a=1-(2*o.lensShiftV+o.offset)/100,l=180*Math.atan(i*a)/Math.PI,c=1/o.throwRatio/2,h=1+2*o.lensShiftH/100,d=180*Math.atan(c*h)/Math.PI,m=1-2*o.lensShiftH/100,_=180*Math.atan(c*m)/Math.PI,u=new Q.Pa4;u.set(Math.tan(_*Math.PI/180),Math.tan(n*Math.PI/180),1);const p=u.clone();this._applayDirectionRotation(u,t);const S=new Q.Pa4;S.set(-Math.tan(d*Math.PI/180),Math.tan(n*Math.PI/180),1),this._applayDirectionRotation(S,t);const j=new Q.Pa4;j.set(Math.tan(_*Math.PI/180),-Math.tan(l*Math.PI/180),1);const f=j.clone();this._applayDirectionRotation(j,t);const b=new Q.Pa4;b.set(-Math.tan(d*Math.PI/180),-Math.tan(l*Math.PI/180),1);const P=b.clone();this._applayDirectionRotation(b,t),t.lightBoundLT=this._createRayLine(t.position,u,s),t.lightBoundRT=this._createRayLine(t.position,S,s),t.lightBoundLB=this._createRayLine(t.position,j,s),t.lightBoundRB=this._createRayLine(t.position,b,s),t.screenPlane=this._createScreenPlane(t.position,p,f,P,t,o)}_applayDirectionRotation(e,t){const o=new Q.Pa4(1,0,0),s=new Q.Pa4(0,1,0),i=new Q.Pa4(0,0,1);e.applyAxisAngle(o,t.rotation.x),e.applyAxisAngle(s,t.rotation.y),e.applyAxisAngle(i,t.rotation.z)}_createScreenBoundLine(e,t,o,s,i,r){const n=this._calcDivideCutPoints(e,t,o,s,i),a={geometry:null,object:null};a.geometry=new G.VJ,a.geometry.setPoints(n);const l=new G.r7({color:15689814,lineWidth:.4,transparent:!r,opacity:.6});return a.object=new Q.Kj0(a.geometry,l),this._scene.add(a.object),a}_createScreenPlane(e,t,o,s,i,r){const n=30,a=[],l=[],c=[],h=[],d=(t.y-o.y)/n;for(let j=0;j<=n;j++){const t=o.clone();t.y+=d*j;const r=s.clone();r.y+=d*j,h[j]=this._calcDivideCutPoints(e,t,r,"x",i)}for(let j=0;j<h.length;j++)for(let e=0;e<h[j].length;e++)if(h[j+1]&&h[j][e+1]){a.push(h[j][e].x),a.push(h[j][e].y),a.push(h[j][e].z),a.push(h[j+1][e].x),a.push(h[j+1][e].y),a.push(h[j+1][e].z),a.push(h[j+1][e+1].x),a.push(h[j+1][e+1].y),a.push(h[j+1][e+1].z),c.push(e/n),c.push(j/n),c.push(e/n),c.push((j+1)/n),c.push((e+1)/n),c.push((j+1)/n),a.push(h[j][e].x),a.push(h[j][e].y),a.push(h[j][e].z),a.push(h[j+1][e+1].x),a.push(h[j+1][e+1].y),a.push(h[j+1][e+1].z),a.push(h[j][e+1].x),a.push(h[j][e+1].y),a.push(h[j][e+1].z),c.push(e/n),c.push(j/n),c.push((e+1)/n),c.push((j+1)/n),c.push((e+1)/n),c.push(j/n);for(let e=0;e<6;e++)l.push(0),l.push(0),l.push(1)}const m={geometry:null,object:null};m.geometry=new Q.u9r;const _=new Float32Array(a),u=new Float32Array(l),p=new Float32Array(c);m.geometry.setAttribute("position",new Q.TlE(_,3)),m.geometry.setAttribute("normal",new Q.TlE(u,3)),m.geometry.setAttribute("uv",new Q.TlE(p,2));const S=new Q.vBJ({side:Q.ehD,transparent:!0,opacity:.75,color:16776415});return S.map=this._textures[r.texture],m.object=new Q.Kj0(m.geometry,S),this._scene.add(m.object),m}_calcDivideCutPoints(e,t,o,s,i){const r=[],n=30,a=new Q.Pa4(1,0,0),l=new Q.Pa4(0,1,0),c=new Q.Pa4(0,0,1),h=(t[s]-o[s])/n;for(let d=0;d<=n;d++){const o=t.clone();o[s]-=h*d,o.applyAxisAngle(a,i.rotation.x),o.applyAxisAngle(l,i.rotation.y),o.applyAxisAngle(c,i.rotation.z);const n=this._calcHitPoint(e,o);r.push(n)}return r}_createRayLine(e,t,o){const s=this._calcHitPoint(e,t),i=[e,s],r={geometry:null,object:null};r.geometry=new G.VJ,r.geometry.setPoints(i);const n=new G.r7({color:5263438,lineWidth:o?.5:.2,transparent:!o,opacity:.5});return r.object=new Q.Kj0(r.geometry,n),this._scene.add(r.object),r}_createAllBoundLine(){this._projectors.forEach((e=>{this._createBoundLine(e.name)}))}_calcHitPoint(e,t){const o=t.normalize(),s=new Q.iMs(e,o),i=[this._room.objects.back,this._room.objects.front,this._room.objects.left,this._room.objects.right,this._room.objects.top,this._room.objects.bottom,this._screen.object],r=s.intersectObjects(i);return 0===r.length?null:(r[0].point.x-=o.x,r[0].point.y-=o.y,r[0].point.z-=o.z,r[0].point)}}class se extends oe{constructor(e){super(),this._init(e)}_init(e){this._initRenderer(e),this._initScene(),this._initControls(),this._initTransformControl(),this._initTexture().then((()=>{this._initRoom(),this._initScreen()})),this.setTheme()}setScreen(e){this._screenType=e,this._initScreen(),this._screen.object.updateMatrixWorld(),this._createAllBoundLine()}setRoomSize(){this._initRoom(),this._initLight()}setScreenPosition(){this._screen.object.position.x=X.default.state.screen.x*this._roomSize.ratio,this._screen.object.position.y=X.default.state.screen.y*this._roomSize.ratio,this._screen.object.position.z=X.default.state.screen.z*this._roomSize.ratio,this._screen.object.rotation.x=X.default.state.screen.rotateX/180*Math.PI,this._screen.object.rotation.y=X.default.state.screen.rotateY/180*Math.PI,this._screen.object.rotation.z=X.default.state.screen.rotateZ/180*Math.PI,this._screen.object.updateMatrixWorld(),this._createAllBoundLine()}addProjector(e){this._addProjecotr(e).then((e=>{this._projectors.push(e),X.default.commit("projector/SET_SELECTED_PROJECTOR_X",e.position.x/this._roomSize.ratio),X.default.commit("projector/SET_SELECTED_PROJECTOR_Y",e.position.y/this._roomSize.ratio),X.default.commit("projector/SET_SELECTED_PROJECTOR_Z",e.position.z/this._roomSize.ratio),this._createAllBoundLine()}))}setProjector(e){this._setTransformControl(e.uId);const t=this._projectors.find((t=>t.name===e.uId));t.position.x=e.x*this._roomSize.ratio,t.position.y=e.y*this._roomSize.ratio,t.position.z=e.z*this._roomSize.ratio,t.rotation.x=e.rotateX/180*Math.PI,t.rotation.y=e.rotateY/180*Math.PI,t.rotation.z=e.rotateZ/180*Math.PI,this._createAllBoundLine()}deleteProjector(e){const t=this._projectors.find((t=>t.name===e));this._transformControl.object===t&&this._transformControl.detach(),this._disposeBoundLine(e),this._scene.remove(t)}setProjectorTexture({patternSrc:e,isVideo:t}){X.default.commit("projector/SET_SELECTED_PROJECTOR_TEXTURE",e),!this._textures[e]&&e?this._loadTexture(e,t).then((t=>{this._textures[e]=t,this._createAllBoundLine()})):this._createAllBoundLine()}}let ie=null;const re={name:"PageIndex",components:{ProjectorDetail:Z},created(){this.$bus.on("setScreen",this.setScreen),this.$bus.on("setScreenPosition",this.setScreenPosition),this.$bus.on("autoAdjustScreenPosition",this.autoAdjustScreenPosition),this.$bus.on("setRoomSize",this.setRoomSize),this.$bus.on("addProjector",this.addProjector),this.$bus.on("setProjector",this.setProjector),this.$bus.on("deleteProjector",this.deleteProjector),this.$bus.on("setProjectorTexture",this.setProjectorTexture)},beforeUnmount(){this.$bus.off("setScreen",this.setScreen),this.$bus.off("setScreenPosition",this.setScreenPosition),this.$bus.off("autoAdjustScreenPosition",this.autoAdjustScreenPosition),this.$bus.off("setRoomSize",this.setRoomSize),this.$bus.off("addProjector",this.addProjector),this.$bus.off("setProjector",this.setProjector),this.$bus.off("deleteProjector",this.deleteProjector),this.$bus.off("setProjectorTexture",this.setProjectorTexture)},mounted(){ie=new se("#threeView"),ie.animate()},data(){return{view:null}},methods:{stylePage(e,t){return{height:t-e+"px"}},resizeCanvas(){ie.onWindowResize()},setRoomSize(){ie.setRoomSize()},setScreen(e){ie.setScreen(e)},setScreenPosition(){ie.setScreenPosition()},autoAdjustScreenPosition(){ie.adjustScreenPosition()},addProjector(e){ie.addProjector(e)},setProjector(e){ie.setProjector(e)},deleteProjector(e){ie.deleteProjector(e)},setProjectorTexture(e){ie.setProjectorTexture(e)}}};var ne=o(4379),ae=o(5151);re.render=n,re.__scopeId="data-v-64ce601e";const le=re;U()(re,"components",{QPage:ne.Z,QResizeObserver:ae.Z})}}]);