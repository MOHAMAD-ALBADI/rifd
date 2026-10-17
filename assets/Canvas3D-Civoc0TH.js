import{r as ve,g as Fv,j as pe}from"./motion-xIeqVS9P.js";import{A as _o}from"./main-BHduAV1g.js";import"./RifdApp-BJiYZdIh.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="169",$x={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},eS={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bv=0,Wd=1,zv=2,tS=3,kv=0,nh=1,xa=2,wi=3,hr=0,Bn=1,zi=2,ur=0,xs=1,hu=2,Xd=3,Yd=4,Hv=5,Fr=100,Vv=101,Gv=102,Wv=103,Xv=104,Yv=200,qv=201,jv=202,Zv=203,fu=204,du=205,Jv=206,Kv=207,Qv=208,$v=209,e_=210,t_=211,n_=212,i_=213,r_=214,pu=0,mu=1,gu=2,As=3,vu=4,_u=5,yu=6,xu=7,Qa=0,s_=1,o_=2,Gi=0,a_=1,l_=2,c_=3,hp=4,u_=5,h_=6,f_=7,qd="attached",d_="detached",ih=300,fr=301,zr=302,Pa=303,Ia=304,Io=306,La=1e3,mi=1001,Da=1002,dn=1003,fp=1004,nS=1004,yo=1005,iS=1005,nn=1006,Sa=1007,rS=1007,Hi=1008,sS=1008,Ai=1009,dp=1010,pp=1011,To=1012,rh=1013,dr=1014,Yn=1015,Lo=1016,sh=1017,oh=1018,Ts=1020,mp=35902,gp=1021,vp=1022,Pn=1023,_p=1024,yp=1025,Ss=1026,bs=1027,ah=1028,$a=1029,xp=1030,lh=1031,oS=1032,ch=1033,Ma=33776,wa=33777,Ea=33778,Aa=33779,Su=35840,Mu=35841,wu=35842,Eu=35843,Au=36196,Tu=37492,bu=37496,Cu=37808,Ru=37809,Pu=37810,Iu=37811,Lu=37812,Du=37813,Uu=37814,Nu=37815,Ou=37816,Fu=37817,Bu=37818,zu=37819,ku=37820,Hu=37821,Ta=36492,Vu=36494,Gu=36495,Sp=36283,Wu=36284,Xu=36285,Yu=36286,p_=2200,m_=2201,g_=2202,Ua=2300,qu=2301,au=2302,gs=2400,vs=2401,Na=2402,uh=2500,Mp=2501,aS=0,lS=1,cS=2,v_=3200,__=3201,uS=3202,hS=3203,Vr=0,y_=1,ar="",ti="srgb",mr="srgb-linear",hh="display-p3",el="display-p3-linear",Oa="linear",zt="srgb",Fa="rec709",Ba="p3",fS=0,ds=7680,dS=7681,pS=7682,mS=7683,gS=34055,vS=34056,_S=5386,yS=512,xS=513,SS=514,MS=515,wS=516,ES=517,AS=518,jd=519,x_=512,S_=513,M_=514,wp=515,w_=516,E_=517,A_=518,T_=519,za=35044,TS=35048,bS=35040,CS=35045,RS=35049,PS=35041,IS=35046,LS=35050,DS=35042,US="100",Zd="300 es",Vi=2e3,ka=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Og=1234567;const Ms=Math.PI/180,bo=180/Math.PI;function ii(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function Zt(r,e,t){return Math.max(e,Math.min(t,r))}function Ep(r,e){return(r%e+e)%e}function NS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function OS(r,e,t){return r!==e?(t-r)/(e-r):0}function ba(r,e,t){return(1-t)*r+t*e}function FS(r,e,t,n){return ba(r,e,1-Math.exp(-t*n))}function BS(r,e=1){return e-Math.abs(Ep(r,e*2)-e)}function zS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function kS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function HS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function VS(r,e){return r+Math.random()*(e-r)}function GS(r){return r*(.5-Math.random())}function WS(r){r!==void 0&&(Og=r);let e=Og+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function XS(r){return r*Ms}function YS(r){return r*bo}function qS(r){return(r&r-1)===0&&r!==0}function jS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ZS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function JS(r,e,t,n,i){const s=Math.cos,a=Math.sin,c=s(t/2),u=a(t/2),h=s((e+n)/2),f=a((e+n)/2),p=s((e-n)/2),m=a((e-n)/2),v=s((n-e)/2),y=a((n-e)/2);switch(i){case"XYX":r.set(c*f,u*p,u*m,c*h);break;case"YZY":r.set(u*m,c*f,u*p,c*h);break;case"ZXZ":r.set(u*p,u*m,c*f,c*h);break;case"XZX":r.set(c*f,u*y,u*v,c*h);break;case"YXY":r.set(u*v,c*f,u*y,c*h);break;case"ZYZ":r.set(u*y,u*v,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const b_={DEG2RAD:Ms,RAD2DEG:bo,generateUUID:ii,clamp:Zt,euclideanModulo:Ep,mapLinear:NS,inverseLerp:OS,lerp:ba,damp:FS,pingpong:BS,smoothstep:zS,smootherstep:kS,randInt:HS,randFloat:VS,randFloatSpread:GS,seededRandom:WS,degToRad:XS,radToDeg:YS,isPowerOfTwo:qS,ceilPowerOfTwo:jS,floorPowerOfTwo:ZS,setQuaternionFromProperEuler:JS,normalize:pt,denormalize:Fn};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,n,i,s,a,c,u,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h)}set(e,t,n,i,s,a,c,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[3],u=n[6],h=n[1],f=n[4],p=n[7],m=n[2],v=n[5],y=n[8],M=i[0],x=i[3],_=i[6],E=i[1],w=i[4],T=i[7],F=i[2],P=i[5],L=i[8];return s[0]=a*M+c*E+u*F,s[3]=a*x+c*w+u*P,s[6]=a*_+c*T+u*L,s[1]=h*M+f*E+p*F,s[4]=h*x+f*w+p*P,s[7]=h*_+f*T+p*L,s[2]=m*M+v*E+y*F,s[5]=m*x+v*w+y*P,s[8]=m*_+v*T+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*a*f-t*c*h-n*s*f+n*c*u+i*s*h-i*a*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=f*a-c*h,m=c*u-f*s,v=h*s-a*u,y=t*p+n*m+i*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=p*M,e[1]=(i*h-f*n)*M,e[2]=(c*n-i*a)*M,e[3]=m*M,e[4]=(f*t-i*u)*M,e[5]=(i*s-c*t)*M,e[6]=v*M,e[7]=(n*u-h*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*a+h*c)+a+e,-i*h,i*u,-i*(-h*a+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Vf.makeScale(e,t)),this}rotate(e){return this.premultiply(Vf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vf=new dt;function C_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const KS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function xo(r,e){return new KS[r](e)}function Ha(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function R_(){const r=Ha("canvas");return r.style.display="block",r}const Fg={};function lu(r){r in Fg||(Fg[r]=!0,console.warn(r))}function QS(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function $S(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function eM(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Bg=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zg=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),na={[mr]:{transfer:Oa,primaries:Fa,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[ti]:{transfer:zt,primaries:Fa,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[el]:{transfer:Oa,primaries:Ba,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(zg),fromReference:r=>r.applyMatrix3(Bg)},[hh]:{transfer:zt,primaries:Ba,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(zg),fromReference:r=>r.applyMatrix3(Bg).convertLinearToSRGB()}},tM=new Set([mr,el]),Dt={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!tM.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=na[e].toReference,i=na[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return na[r].primaries},getTransfer:function(r){return r===ar?Oa:na[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(na[e].luminanceCoefficients)}};function Ao(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gf(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Zs;class P_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=Ha("canvas")),Zs.width=e.width,Zs.height=e.height;const n=Zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ha("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ao(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ao(t[n]/255)*255):t[n]=Ao(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nM=0;class _s{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,c=i.length;a<c;a++)i[a].isDataTexture?s.push(Wf(i[a].image)):s.push(Wf(i[a]))}else s=Wf(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?P_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iM=0;class Yt extends Yi{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=mi,i=mi,s=nn,a=Hi,c=Pn,u=Ai,h=Yt.DEFAULT_ANISOTROPY,f=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=ii(),this.name="",this.source=new _s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case La:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case La:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=ih;Yt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,i=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],p=u[8],m=u[1],v=u[5],y=u[9],M=u[2],x=u[6],_=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-M)<.01&&Math.abs(y-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+M)<.1&&Math.abs(y+x)<.1&&Math.abs(h+v+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,T=(v+1)/2,F=(_+1)/2,P=(f+m)/4,L=(p+M)/4,B=(y+x)/4;return w>T&&w>F?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=P/n,s=L/n):T>F?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=P/i,s=B/i):F<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(F),n=L/s,i=B/s),this.set(n,i,s,t),this}let E=Math.sqrt((x-y)*(x-y)+(p-M)*(p-M)+(m-f)*(m-f));return Math.abs(E)<.001&&(E=1),this.x=(x-y)/E,this.y=(p-M)/E,this.z=(m-f)/E,this.w=Math.acos((h+v+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I_ extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _s(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends I_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fh extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rM extends Ti{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new fh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Ap extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sM extends Ti{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ap(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class zn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,c){let u=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3];const m=s[a+0],v=s[a+1],y=s[a+2],M=s[a+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=v,e[t+2]=y,e[t+3]=M;return}if(p!==M||u!==m||h!==v||f!==y){let x=1-c;const _=u*m+h*v+f*y+p*M,E=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const F=Math.sqrt(w),P=Math.atan2(F,_*E);x=Math.sin(x*P)/F,c=Math.sin(c*P)/F}const T=c*E;if(u=u*x+m*T,h=h*x+v*T,f=f*x+y*T,p=p*x+M*T,x===1-c){const F=1/Math.sqrt(u*u+h*h+f*f+p*p);u*=F,h*=F,f*=F,p*=F}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,a){const c=n[i],u=n[i+1],h=n[i+2],f=n[i+3],p=s[a],m=s[a+1],v=s[a+2],y=s[a+3];return e[t]=c*y+f*p+u*v-h*m,e[t+1]=u*y+f*m+h*p-c*v,e[t+2]=h*y+f*v+c*m-u*p,e[t+3]=f*y-c*p-u*m-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),m=u(n/2),v=u(i/2),y=u(s/2);switch(a){case"XYZ":this._x=m*f*p+h*v*y,this._y=h*v*p-m*f*y,this._z=h*f*y+m*v*p,this._w=h*f*p-m*v*y;break;case"YXZ":this._x=m*f*p+h*v*y,this._y=h*v*p-m*f*y,this._z=h*f*y-m*v*p,this._w=h*f*p+m*v*y;break;case"ZXY":this._x=m*f*p-h*v*y,this._y=h*v*p+m*f*y,this._z=h*f*y+m*v*p,this._w=h*f*p-m*v*y;break;case"ZYX":this._x=m*f*p-h*v*y,this._y=h*v*p+m*f*y,this._z=h*f*y-m*v*p,this._w=h*f*p+m*v*y;break;case"YZX":this._x=m*f*p+h*v*y,this._y=h*v*p+m*f*y,this._z=h*f*y-m*v*p,this._w=h*f*p-m*v*y;break;case"XZY":this._x=m*f*p-h*v*y,this._y=h*v*p-m*f*y,this._z=h*f*y+m*v*p,this._w=h*f*p+m*v*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],c=t[5],u=t[9],h=t[2],f=t[6],p=t[10],m=n+c+p;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(f-u)*v,this._y=(s-h)*v,this._z=(a-i)*v}else if(n>c&&n>p){const v=2*Math.sqrt(1+n-c-p);this._w=(f-u)/v,this._x=.25*v,this._y=(i+a)/v,this._z=(s+h)/v}else if(c>p){const v=2*Math.sqrt(1+c-n-p);this._w=(s-h)/v,this._x=(i+a)/v,this._y=.25*v,this._z=(u+f)/v}else{const v=2*Math.sqrt(1+p-n-c);this._w=(a-i)/v,this._x=(s+h)/v,this._y=(u+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+a*c+i*h-s*u,this._y=i*f+a*u+s*c-n*h,this._z=s*f+a*h+n*u-i*c,this._w=a*f-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let c=a*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const v=1-t;return this._w=v*a+t*this._w,this._x=v*n+t*this._x,this._y=v*i+t*this._y,this._z=v*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),f=Math.atan2(h,c),p=Math.sin((1-t)*f)/h,m=Math.sin(t*f)/h;return this._w=a*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,c=e.z,u=e.w,h=2*(a*i-c*n),f=2*(c*t-s*i),p=2*(s*n-a*t);return this.x=t+u*h+a*p-c*f,this.y=n+u*f+c*h-s*p,this.z=i+u*p+s*f-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*a-n*u,this.z=n*c-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xf.copy(this).projectOnVector(e),this.sub(Xf)}reflect(e){return this.sub(Xf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xf=new D,kg=new zn;class pn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,xi):xi.fromBufferAttribute(s,a),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hc.copy(n.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),fc.subVectors(this.max,ia),Js.subVectors(e.a,ia),Ks.subVectors(e.b,ia),Qs.subVectors(e.c,ia),br.subVectors(Ks,Js),Cr.subVectors(Qs,Ks),ts.subVectors(Js,Qs);let t=[0,-br.z,br.y,0,-Cr.z,Cr.y,0,-ts.z,ts.y,br.z,0,-br.x,Cr.z,0,-Cr.x,ts.z,0,-ts.x,-br.y,br.x,0,-Cr.y,Cr.x,0,-ts.y,ts.x,0];return!Yf(t,Js,Ks,Qs,fc)||(t=[1,0,0,0,1,0,0,0,1],!Yf(t,Js,Ks,Qs,fc))?!1:(dc.crossVectors(br,Cr),t=[dc.x,dc.y,dc.z],Yf(t,Js,Ks,Qs,fc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tr=[new D,new D,new D,new D,new D,new D,new D,new D],xi=new D,hc=new pn,Js=new D,Ks=new D,Qs=new D,br=new D,Cr=new D,ts=new D,ia=new D,fc=new D,dc=new D,ns=new D;function Yf(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ns.fromArray(r,s);const c=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),u=e.dot(ns),h=t.dot(ns),f=n.dot(ns);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const oM=new pn,ra=new D,qf=new D;class mn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const t=ra.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ra,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(qf)),this.expandByPoint(ra.copy(e.center).sub(qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nr=new D,jf=new D,pc=new D,Rr=new D,Zf=new D,mc=new D,Jf=new D;class Do{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jf.copy(e).add(t).multiplyScalar(.5),pc.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(jf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(pc),c=Rr.dot(this.direction),u=-Rr.dot(pc),h=Rr.lengthSq(),f=Math.abs(1-a*a);let p,m,v,y;if(f>0)if(p=a*u-c,m=a*c-u,y=s*f,p>=0)if(m>=-y)if(m<=y){const M=1/f;p*=M,m*=M,v=p*(p+a*m+2*c)+m*(a*p+m+2*u)+h}else m=s,p=Math.max(0,-(a*m+c)),v=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(a*m+c)),v=-p*p+m*(m+2*u)+h;else m<=-y?(p=Math.max(0,-(-a*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),v=-p*p+m*(m+2*u)+h):m<=y?(p=0,m=Math.min(Math.max(-s,-u),s),v=m*(m+2*u)+h):(p=Math.max(0,-(a*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),v=-p*p+m*(m+2*u)+h);else m=a>0?-s:s,p=Math.max(0,-(a*m+c)),v=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(jf).addScaledVector(pc,m),v}intersectSphere(e,t){nr.subVectors(e.center,this.origin);const n=nr.dot(this.direction),i=nr.dot(nr)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),c=n-a,u=n+a;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,c,u;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),f>=0?(s=(e.min.y-m.y)*f,a=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,a=(e.min.y-m.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,n,i,s){Zf.subVectors(t,e),mc.subVectors(n,e),Jf.crossVectors(Zf,mc);let a=this.direction.dot(Jf),c;if(a>0){if(i)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Rr.subVectors(this.origin,e);const u=c*this.direction.dot(mc.crossVectors(Rr,mc));if(u<0)return null;const h=c*this.direction.dot(Zf.cross(Rr));if(h<0||u+h>a)return null;const f=-c*Rr.dot(Jf);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,s,a,c,u,h,f,p,m,v,y,M,x){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h,f,p,m,v,y,M,x)}set(e,t,n,i,s,a,c,u,h,f,p,m,v,y,M,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=c,_[13]=u,_[2]=h,_[6]=f,_[10]=p,_[14]=m,_[3]=v,_[7]=y,_[11]=M,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$s.setFromMatrixColumn(e,0).length(),s=1/$s.setFromMatrixColumn(e,1).length(),a=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*f,v=a*p,y=c*f,M=c*p;t[0]=u*f,t[4]=-u*p,t[8]=h,t[1]=v+y*h,t[5]=m-M*h,t[9]=-c*u,t[2]=M-m*h,t[6]=y+v*h,t[10]=a*u}else if(e.order==="YXZ"){const m=u*f,v=u*p,y=h*f,M=h*p;t[0]=m+M*c,t[4]=y*c-v,t[8]=a*h,t[1]=a*p,t[5]=a*f,t[9]=-c,t[2]=v*c-y,t[6]=M+m*c,t[10]=a*u}else if(e.order==="ZXY"){const m=u*f,v=u*p,y=h*f,M=h*p;t[0]=m-M*c,t[4]=-a*p,t[8]=y+v*c,t[1]=v+y*c,t[5]=a*f,t[9]=M-m*c,t[2]=-a*h,t[6]=c,t[10]=a*u}else if(e.order==="ZYX"){const m=a*f,v=a*p,y=c*f,M=c*p;t[0]=u*f,t[4]=y*h-v,t[8]=m*h+M,t[1]=u*p,t[5]=M*h+m,t[9]=v*h-y,t[2]=-h,t[6]=c*u,t[10]=a*u}else if(e.order==="YZX"){const m=a*u,v=a*h,y=c*u,M=c*h;t[0]=u*f,t[4]=M-m*p,t[8]=y*p+v,t[1]=p,t[5]=a*f,t[9]=-c*f,t[2]=-h*f,t[6]=v*p+y,t[10]=m-M*p}else if(e.order==="XZY"){const m=a*u,v=a*h,y=c*u,M=c*h;t[0]=u*f,t[4]=-p,t[8]=h*f,t[1]=m*p+M,t[5]=a*f,t[9]=v*p-y,t[2]=y*p-v,t[6]=c*f,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aM,e,lM)}lookAt(e,t,n){const i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Pr.crossVectors(n,$n),Pr.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Pr.crossVectors(n,$n)),Pr.normalize(),gc.crossVectors($n,Pr),i[0]=Pr.x,i[4]=gc.x,i[8]=$n.x,i[1]=Pr.y,i[5]=gc.y,i[9]=$n.y,i[2]=Pr.z,i[6]=gc.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[4],u=n[8],h=n[12],f=n[1],p=n[5],m=n[9],v=n[13],y=n[2],M=n[6],x=n[10],_=n[14],E=n[3],w=n[7],T=n[11],F=n[15],P=i[0],L=i[4],B=i[8],Y=i[12],b=i[1],C=i[5],W=i[9],q=i[13],K=i[2],le=i[6],j=i[10],ge=i[14],z=i[3],se=i[7],te=i[11],ce=i[15];return s[0]=a*P+c*b+u*K+h*z,s[4]=a*L+c*C+u*le+h*se,s[8]=a*B+c*W+u*j+h*te,s[12]=a*Y+c*q+u*ge+h*ce,s[1]=f*P+p*b+m*K+v*z,s[5]=f*L+p*C+m*le+v*se,s[9]=f*B+p*W+m*j+v*te,s[13]=f*Y+p*q+m*ge+v*ce,s[2]=y*P+M*b+x*K+_*z,s[6]=y*L+M*C+x*le+_*se,s[10]=y*B+M*W+x*j+_*te,s[14]=y*Y+M*q+x*ge+_*ce,s[3]=E*P+w*b+T*K+F*z,s[7]=E*L+w*C+T*le+F*se,s[11]=E*B+w*W+T*j+F*te,s[15]=E*Y+w*q+T*ge+F*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],c=e[5],u=e[9],h=e[13],f=e[2],p=e[6],m=e[10],v=e[14],y=e[3],M=e[7],x=e[11],_=e[15];return y*(+s*u*p-i*h*p-s*c*m+n*h*m+i*c*v-n*u*v)+M*(+t*u*v-t*h*m+s*a*m-i*a*v+i*h*f-s*u*f)+x*(+t*h*p-t*c*v-s*a*p+n*a*v+s*c*f-n*h*f)+_*(-i*c*f-t*u*p+t*c*m+i*a*p-n*a*m+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=e[9],m=e[10],v=e[11],y=e[12],M=e[13],x=e[14],_=e[15],E=p*x*h-M*m*h+M*u*v-c*x*v-p*u*_+c*m*_,w=y*m*h-f*x*h-y*u*v+a*x*v+f*u*_-a*m*_,T=f*M*h-y*p*h+y*c*v-a*M*v-f*c*_+a*p*_,F=y*p*u-f*M*u-y*c*m+a*M*m+f*c*x-a*p*x,P=t*E+n*w+i*T+s*F;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=E*L,e[1]=(M*m*s-p*x*s-M*i*v+n*x*v+p*i*_-n*m*_)*L,e[2]=(c*x*s-M*u*s+M*i*h-n*x*h-c*i*_+n*u*_)*L,e[3]=(p*u*s-c*m*s-p*i*h+n*m*h+c*i*v-n*u*v)*L,e[4]=w*L,e[5]=(f*x*s-y*m*s+y*i*v-t*x*v-f*i*_+t*m*_)*L,e[6]=(y*u*s-a*x*s-y*i*h+t*x*h+a*i*_-t*u*_)*L,e[7]=(a*m*s-f*u*s+f*i*h-t*m*h-a*i*v+t*u*v)*L,e[8]=T*L,e[9]=(y*p*s-f*M*s-y*n*v+t*M*v+f*n*_-t*p*_)*L,e[10]=(a*M*s-y*c*s+y*n*h-t*M*h-a*n*_+t*c*_)*L,e[11]=(f*c*s-a*p*s-f*n*h+t*p*h+a*n*v-t*c*v)*L,e[12]=F*L,e[13]=(f*M*i-y*p*i+y*n*m-t*M*m-f*n*x+t*p*x)*L,e[14]=(y*c*i-a*M*i-y*n*u+t*M*u+a*n*x-t*c*x)*L,e[15]=(a*p*i-f*c*i+f*n*u-t*p*u-a*n*m+t*c*m)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,c=e.y,u=e.z,h=s*a,f=s*c;return this.set(h*a+n,h*c-i*u,h*u+i*c,0,h*c+i*u,f*c+n,f*u-i*a,0,h*u-i*c,f*u+i*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,c=t._z,u=t._w,h=s+s,f=a+a,p=c+c,m=s*h,v=s*f,y=s*p,M=a*f,x=a*p,_=c*p,E=u*h,w=u*f,T=u*p,F=n.x,P=n.y,L=n.z;return i[0]=(1-(M+_))*F,i[1]=(v+T)*F,i[2]=(y-w)*F,i[3]=0,i[4]=(v-T)*P,i[5]=(1-(m+_))*P,i[6]=(x+E)*P,i[7]=0,i[8]=(y+w)*L,i[9]=(x-E)*L,i[10]=(1-(m+M))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=$s.set(i[0],i[1],i[2]).length();const a=$s.set(i[4],i[5],i[6]).length(),c=$s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Si.copy(this);const h=1/s,f=1/a,p=1/c;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=f,Si.elements[5]*=f,Si.elements[6]*=f,Si.elements[8]*=p,Si.elements[9]*=p,Si.elements[10]*=p,t.setFromRotationMatrix(Si),n.x=s,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,a,c=Vi){const u=this.elements,h=2*s/(t-e),f=2*s/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i);let v,y;if(c===Vi)v=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(c===ka)v=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,a,c=Vi){const u=this.elements,h=1/(t-e),f=1/(n-i),p=1/(a-s),m=(t+e)*h,v=(n+i)*f;let y,M;if(c===Vi)y=(a+s)*p,M=-2*p;else if(c===ka)y=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-v,u[2]=0,u[6]=0,u[10]=M,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $s=new D,Si=new tt,aM=new D(0,0,0),lM=new D(1,1,1),Pr=new D,gc=new D,$n=new D,Hg=new tt,Vg=new zn;class ri{constructor(e=0,t=0,n=0,i=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],c=i[8],u=i[1],h=i[5],f=i[9],p=i[2],m=i[6],v=i[10];switch(t){case"XYZ":this._y=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vg.setFromEuler(this),this.setFromQuaternion(Vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class ws{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cM=0;const Gg=new D,eo=new zn,ir=new tt,vc=new D,sa=new D,uM=new D,hM=new zn,Wg=new D(1,0,0),Xg=new D(0,1,0),Yg=new D(0,0,1),qg={type:"added"},fM={type:"removed"},to={type:"childadded",child:null},Kf={type:"childremoved",child:null};class Ct extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new D,t=new ri,n=new zn,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new dt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(Wg,e)}rotateY(e){return this.rotateOnAxis(Xg,e)}rotateZ(e){return this.rotateOnAxis(Yg,e)}translateOnAxis(e,t){return Gg.copy(e).applyQuaternion(this.quaternion),this.position.add(Gg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wg,e)}translateY(e){return this.translateOnAxis(Xg,e)}translateZ(e){return this.translateOnAxis(Yg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vc.copy(e):vc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(sa,vc,this.up):ir.lookAt(vc,sa,this.up),this.quaternion.setFromRotationMatrix(ir),i&&(ir.extractRotation(i.matrixWorld),eo.setFromRotationMatrix(ir),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qg),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fM),Kf.child=e,this.dispatchEvent(Kf),Kf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qg),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,uM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,hM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=a(e.geometries),u=a(e.materials),h=a(e.textures),f=a(e.images),p=a(e.shapes),m=a(e.skeletons),v=a(e.animations),y=a(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),v.length>0&&(n.animations=v),y.length>0&&(n.nodes=y)}return n.object=i,n;function a(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ct.DEFAULT_UP=new D(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new D,rr=new D,Qf=new D,sr=new D,no=new D,io=new D,jg=new D,$f=new D,ed=new D,td=new D,nd=new xt,id=new xt,rd=new xt;class Xn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mi.subVectors(e,t),i.cross(Mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Mi.subVectors(i,t),rr.subVectors(n,t),Qf.subVectors(e,t);const a=Mi.dot(Mi),c=Mi.dot(rr),u=Mi.dot(Qf),h=rr.dot(rr),f=rr.dot(Qf),p=a*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,v=(h*u-c*f)*m,y=(a*f-c*u)*m;return s.set(1-v-y,y,v)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,n,i,s,a,c,u){return this.getBarycoord(e,t,n,i,sr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,sr.x),u.addScaledVector(a,sr.y),u.addScaledVector(c,sr.z),u)}static getInterpolatedAttribute(e,t,n,i,s,a){return nd.setScalar(0),id.setScalar(0),rd.setScalar(0),nd.fromBufferAttribute(e,t),id.fromBufferAttribute(e,n),rd.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(nd,s.x),a.addScaledVector(id,s.y),a.addScaledVector(rd,s.z),a}static isFrontFacing(e,t,n,i){return Mi.subVectors(n,t),rr.subVectors(e,t),Mi.cross(rr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Mi.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,c;no.subVectors(i,n),io.subVectors(s,n),$f.subVectors(e,n);const u=no.dot($f),h=io.dot($f);if(u<=0&&h<=0)return t.copy(n);ed.subVectors(e,i);const f=no.dot(ed),p=io.dot(ed);if(f>=0&&p<=f)return t.copy(i);const m=u*p-f*h;if(m<=0&&u>=0&&f<=0)return a=u/(u-f),t.copy(n).addScaledVector(no,a);td.subVectors(e,s);const v=no.dot(td),y=io.dot(td);if(y>=0&&v<=y)return t.copy(s);const M=v*h-u*y;if(M<=0&&h>=0&&y<=0)return c=h/(h-y),t.copy(n).addScaledVector(io,c);const x=f*y-v*p;if(x<=0&&p-f>=0&&v-y>=0)return jg.subVectors(s,i),c=(p-f)/(p-f+(v-y)),t.copy(i).addScaledVector(jg,c);const _=1/(x+M+m);return a=M*_,c=m*_,t.copy(n).addScaledVector(no,a).addScaledVector(io,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const L_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},_c={h:0,s:0,l:0};function sd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Dt.workingColorSpace){if(e=Ep(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=sd(a,s,e+1/3),this.g=sd(a,s,e),this.b=sd(a,s,e-1/3)}return Dt.toWorkingColorSpace(this,i),this}setStyle(e,t=ti){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],c=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const n=L_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}copyLinearToSRGB(e){return this.r=Gf(e.r),this.g=Gf(e.g),this.b=Gf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Dt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(Zt(Cn.r*255,0,255))*65536+Math.round(Zt(Cn.g*255,0,255))*256+Math.round(Zt(Cn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(Cn.copy(this),t);const n=Cn.r,i=Cn.g,s=Cn.b,a=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const f=(c+a)/2;if(c===a)u=0,h=0;else{const p=a-c;switch(h=f<=.5?p/(a+c):p/(2-a-c),a){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ti){Dt.fromWorkingColorSpace(Cn.copy(this),e);const t=Cn.r,n=Cn.g,i=Cn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(_c);const n=ba(Ir.h,_c.h,t),i=ba(Ir.s,_c.s,t),s=ba(Ir.l,_c.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new De;De.NAMES=L_;let dM=0;class Sn extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=xs,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fu,this.blendDst=du,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==hr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fu&&(n.blendSrc=this.blendSrc),this.blendDst!==du&&(n.blendDst=this.blendDst),this.blendEquation!==Fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const c in s){const u=s[c];delete u.metadata,a.push(u)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gr extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lr=pM();function pM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,f=0;for(;!(h&8388608);)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[u]=h|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)a[u]=u<<23;a[31]=1199570944,a[32]=2147483648;for(let u=33;u<63;++u)a[u]=2147483648+(u-32<<23);a[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:c}}function Wn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Zt(r,-65504,65504),lr.floatView[0]=r;const e=lr.uint32View[0],t=e>>23&511;return lr.baseTable[t]+((e&8388607)>>lr.shiftTable[t])}function _a(r){const e=r>>10;return lr.uint32View[0]=lr.mantissaTable[lr.offsetTable[e]+(r&1023)]+lr.exponentTable[e],lr.floatView[0]}const mM={toHalfFloat:Wn,fromHalfFloat:_a},tn=new D,yc=new fe;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=za,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yc.fromBufferAttribute(this,t),yc.applyMatrix3(e),this.setXY(t,yc.x,yc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==za&&(e.usage=this.usage),e}}class gM extends Ft{constructor(e,t,n){super(new Int8Array(e),t,n)}}class vM extends Ft{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class _M extends Ft{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class yM extends Ft{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Tp extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xM extends Ft{constructor(e,t,n){super(new Int32Array(e),t,n)}}class bp extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class SM extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=_a(this.array[e*this.itemSize]);return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=Wn(t),this}getY(e){let t=_a(this.array[e*this.itemSize+1]);return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=Wn(t),this}getZ(e){let t=_a(this.array[e*this.itemSize+2]);return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=Wn(t),this}getW(e){let t=_a(this.array[e*this.itemSize+3]);return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=Wn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this.array[e+2]=Wn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this.array[e+2]=Wn(i),this.array[e+3]=Wn(s),this}}class Xe extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let MM=0;const pi=new tt,od=new Ct,ro=new D,ei=new pn,oa=new pn,hn=new D;class gt extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C_(e)?bp:Tp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return od.lookAt(e),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];oa.setFromBufferAttribute(c),this.morphTargetsRelative?(hn.addVectors(ei.min,oa.min),ei.expandByPoint(hn),hn.addVectors(ei.max,oa.max),ei.expandByPoint(hn)):(ei.expandByPoint(oa.min),ei.expandByPoint(oa.max))}ei.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)hn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)hn.fromBufferAttribute(c,h),u&&(ro.fromBufferAttribute(e,h),hn.add(ro)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),c=[],u=[];for(let B=0;B<n.count;B++)c[B]=new D,u[B]=new D;const h=new D,f=new D,p=new D,m=new fe,v=new fe,y=new fe,M=new D,x=new D;function _(B,Y,b){h.fromBufferAttribute(n,B),f.fromBufferAttribute(n,Y),p.fromBufferAttribute(n,b),m.fromBufferAttribute(s,B),v.fromBufferAttribute(s,Y),y.fromBufferAttribute(s,b),f.sub(h),p.sub(h),v.sub(m),y.sub(m);const C=1/(v.x*y.y-y.x*v.y);isFinite(C)&&(M.copy(f).multiplyScalar(y.y).addScaledVector(p,-v.y).multiplyScalar(C),x.copy(p).multiplyScalar(v.x).addScaledVector(f,-y.x).multiplyScalar(C),c[B].add(M),c[Y].add(M),c[b].add(M),u[B].add(x),u[Y].add(x),u[b].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let B=0,Y=E.length;B<Y;++B){const b=E[B],C=b.start,W=b.count;for(let q=C,K=C+W;q<K;q+=3)_(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const w=new D,T=new D,F=new D,P=new D;function L(B){F.fromBufferAttribute(i,B),P.copy(F);const Y=c[B];w.copy(Y),w.sub(F.multiplyScalar(F.dot(Y))).normalize(),T.crossVectors(P,Y);const C=T.dot(u[B])<0?-1:1;a.setXYZW(B,w.x,w.y,w.z,C)}for(let B=0,Y=E.length;B<Y;++B){const b=E[B],C=b.start,W=b.count;for(let q=C,K=C+W;q<K;q+=3)L(e.getX(q+0)),L(e.getX(q+1)),L(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,v=n.count;m<v;m++)n.setXYZ(m,0,0,0);const i=new D,s=new D,a=new D,c=new D,u=new D,h=new D,f=new D,p=new D;if(e)for(let m=0,v=e.count;m<v;m+=3){const y=e.getX(m+0),M=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,y),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,x),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),c.add(f),u.add(f),h.add(f),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,v=t.count;m<v;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,p=c.normalized,m=new h.constructor(u.length*f);let v=0,y=0;for(let M=0,x=u.length;M<x;M++){c.isInterleavedBufferAttribute?v=u[M]*c.data.stride+c.offset:v=u[M]*f;for(let _=0;_<f;_++)m[y++]=h[v++]}return new Ft(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const m=h[f],v=e(m,n);u.push(v)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let p=0,m=h.length;p<m;p++){const v=h[p];f.push(v.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let m=0,v=p.length;m<v;m++)f.push(p[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,f=a.length;h<f;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zg=new tt,is=new Do,xc=new mn,Jg=new D,Sc=new D,Mc=new D,wc=new D,ad=new D,Ec=new D,Kg=new D,Ac=new D;class Qt extends Ct{constructor(e=new gt,t=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){Ec.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],p=s[u];f!==0&&(ad.fromBufferAttribute(p,e),a?Ec.addScaledVector(ad,f):Ec.addScaledVector(ad.sub(t),f))}t.add(Ec)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xc.copy(n.boundingSphere),xc.applyMatrix4(s),is.copy(e.ray).recast(e.near),!(xc.containsPoint(is.origin)===!1&&(is.intersectSphere(xc,Jg)===null||is.origin.distanceToSquared(Jg)>(e.far-e.near)**2))&&(Zg.copy(s).invert(),is.copy(e.ray).applyMatrix4(Zg),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,v=s.drawRange;if(c!==null)if(Array.isArray(a))for(let y=0,M=m.length;y<M;y++){const x=m[y],_=a[x.materialIndex],E=Math.max(x.start,v.start),w=Math.min(c.count,Math.min(x.start+x.count,v.start+v.count));for(let T=E,F=w;T<F;T+=3){const P=c.getX(T),L=c.getX(T+1),B=c.getX(T+2);i=Tc(this,_,e,n,h,f,p,P,L,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,v.start),M=Math.min(c.count,v.start+v.count);for(let x=y,_=M;x<_;x+=3){const E=c.getX(x),w=c.getX(x+1),T=c.getX(x+2);i=Tc(this,a,e,n,h,f,p,E,w,T),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(a))for(let y=0,M=m.length;y<M;y++){const x=m[y],_=a[x.materialIndex],E=Math.max(x.start,v.start),w=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let T=E,F=w;T<F;T+=3){const P=T,L=T+1,B=T+2;i=Tc(this,_,e,n,h,f,p,P,L,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,v.start),M=Math.min(u.count,v.start+v.count);for(let x=y,_=M;x<_;x+=3){const E=x,w=x+1,T=x+2;i=Tc(this,a,e,n,h,f,p,E,w,T),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function wM(r,e,t,n,i,s,a,c){let u;if(e.side===Bn?u=n.intersectTriangle(a,s,i,!0,c):u=n.intersectTriangle(i,s,a,e.side===hr,c),u===null)return null;Ac.copy(c),Ac.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Ac);return h<t.near||h>t.far?null:{distance:h,point:Ac.clone(),object:r}}function Tc(r,e,t,n,i,s,a,c,u,h){r.getVertexPosition(c,Sc),r.getVertexPosition(u,Mc),r.getVertexPosition(h,wc);const f=wM(r,e,t,n,Sc,Mc,wc,Kg);if(f){const p=new D;Xn.getBarycoord(Kg,Sc,Mc,wc,p),i&&(f.uv=Xn.getInterpolatedAttribute(i,c,u,h,p,new fe)),s&&(f.uv1=Xn.getInterpolatedAttribute(s,c,u,h,p,new fe)),a&&(f.normal=Xn.getInterpolatedAttribute(a,c,u,h,p,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:c,b:u,c:h,normal:new D,materialIndex:0};Xn.getNormal(Sc,Mc,wc,m.normal),f.face=m,f.barycoord=p}return f}class Ps extends gt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const c=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const u=[],h=[],f=[],p=[];let m=0,v=0;y("z","y","x",-1,-1,n,t,e,a,s,0),y("z","y","x",1,-1,n,t,-e,a,s,1),y("x","z","y",1,1,e,n,t,i,a,2),y("x","z","y",1,-1,e,n,-t,i,a,3),y("x","y","z",1,-1,e,t,n,i,s,4),y("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Xe(h,3)),this.setAttribute("normal",new Xe(f,3)),this.setAttribute("uv",new Xe(p,2));function y(M,x,_,E,w,T,F,P,L,B,Y){const b=T/L,C=F/B,W=T/2,q=F/2,K=P/2,le=L+1,j=B+1;let ge=0,z=0;const se=new D;for(let te=0;te<j;te++){const ce=te*C-q;for(let ze=0;ze<le;ze++){const Ye=ze*b-W;se[M]=Ye*E,se[x]=ce*w,se[_]=K,h.push(se.x,se.y,se.z),se[M]=0,se[x]=0,se[_]=P>0?1:-1,f.push(se.x,se.y,se.z),p.push(ze/L),p.push(1-te/B),ge+=1}}for(let te=0;te<B;te++)for(let ce=0;ce<L;ce++){const ze=m+ce+le*te,Ye=m+ce+le*(te+1),ne=m+(ce+1)+le*(te+1),me=m+(ce+1)+le*te;u.push(ze,Ye,me),u.push(Ye,ne,me),z+=6}c.addGroup(v,z,Y),v+=z,m+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function On(r){const e={};for(let t=0;t<r.length;t++){const n=Co(r[t]);for(const i in n)e[i]=n[i]}return e}function EM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function D_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const ju={clone:Co,merge:On};var AM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=EM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tl extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new D,Qg=new fe,$g=new fe;class fn extends tl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,Qg,$g),t.subVectors($g,Qg)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/u,t-=a.offsetY*n/h,i*=a.width/u,n*=a.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,oo=1;class U_ extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn(so,oo,e,t);i.layers=this.layers,this.add(i);const s=new fn(so,oo,e,t);s.layers=this.layers,this.add(s);const a=new fn(so,oo,e,t);a.layers=this.layers,this.add(a);const c=new fn(so,oo,e,t);c.layers=this.layers,this.add(c);const u=new fn(so,oo,e,t);u.layers=this.layers,this.add(u);const h=new fn(so,oo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,c,u]=t;for(const h of t)this.remove(h);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,u,h,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(p,m,v),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class nl extends Yt{constructor(e,t,n,i,s,a,c,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,n,i,s,a,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N_ extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new nl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ps(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:ur});s.uniforms.tEquirect.value=t;const a=new Qt(i,s),c=t.minFilter;return t.minFilter===Hi&&(t.minFilter=nn),new U_(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const ld=new D,bM=new D,CM=new dt;class Nr{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ld.subVectors(n,t).cross(bM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ld),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||CM.getNormalMatrix(e),i=this.coplanarPoint(ld).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new mn,bc=new D;class il{constructor(e=new Nr,t=new Nr,n=new Nr,i=new Nr,s=new Nr,a=new Nr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi){const n=this.planes,i=e.elements,s=i[0],a=i[1],c=i[2],u=i[3],h=i[4],f=i[5],p=i[6],m=i[7],v=i[8],y=i[9],M=i[10],x=i[11],_=i[12],E=i[13],w=i[14],T=i[15];if(n[0].setComponents(u-s,m-h,x-v,T-_).normalize(),n[1].setComponents(u+s,m+h,x+v,T+_).normalize(),n[2].setComponents(u+a,m+f,x+y,T+E).normalize(),n[3].setComponents(u-a,m-f,x-y,T-E).normalize(),n[4].setComponents(u-c,m-p,x-M,T-w).normalize(),t===Vi)n[5].setComponents(u+c,m+p,x+M,T+w).normalize();else if(t===ka)n[5].setComponents(c,p,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(bc.x=i.normal.x>0?e.max.x:e.min.x,bc.y=i.normal.y>0?e.max.y:e.min.y,bc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O_(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function RM(r){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,p=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=r.SHORT;else if(h instanceof Uint32Array)v=r.UNSIGNED_INT;else if(h instanceof Int32Array)v=r.INT;else if(h instanceof Int8Array)v=r.BYTE;else if(h instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const f=u.array,p=u.updateRanges;if(r.bindBuffer(h,c),p.length===0)r.bufferSubData(h,0,f);else{p.sort((v,y)=>v.start-y.start);let m=0;for(let v=1;v<p.length;v++){const y=p[m],M=p[v];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++m,p[m]=M)}p.length=m+1;for(let v=0,y=p.length;v<y;v++){const M=p[v];r.bufferSubData(h,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function a(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:a}}class Uo extends gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,f=u+1,p=e/c,m=t/u,v=[],y=[],M=[],x=[];for(let _=0;_<f;_++){const E=_*m-a;for(let w=0;w<h;w++){const T=w*p-s;y.push(T,-E,0),M.push(0,0,1),x.push(w/c),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let E=0;E<c;E++){const w=E+h*_,T=E+h*(_+1),F=E+1+h*(_+1),P=E+1+h*_;v.push(w,T,P),v.push(T,F,P)}this.setIndex(v),this.setAttribute("position",new Xe(y,3)),this.setAttribute("normal",new Xe(M,3)),this.setAttribute("uv",new Xe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var PM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,GM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,e1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o1="gl_FragColor = linearToOutputTexel( gl_FragColor );",a1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,M1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,w1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,I1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_w=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ww=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ew=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ow=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ww=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:PM,alphahash_pars_fragment:IM,alphamap_fragment:LM,alphamap_pars_fragment:DM,alphatest_fragment:UM,alphatest_pars_fragment:NM,aomap_fragment:OM,aomap_pars_fragment:FM,batching_pars_vertex:BM,batching_vertex:zM,begin_vertex:kM,beginnormal_vertex:HM,bsdfs:VM,iridescence_fragment:GM,bumpmap_pars_fragment:WM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:YM,clipping_planes_pars_vertex:qM,clipping_planes_vertex:jM,color_fragment:ZM,color_pars_fragment:JM,color_pars_vertex:KM,color_vertex:QM,common:$M,cube_uv_reflection_fragment:e1,defaultnormal_vertex:t1,displacementmap_pars_vertex:n1,displacementmap_vertex:i1,emissivemap_fragment:r1,emissivemap_pars_fragment:s1,colorspace_fragment:o1,colorspace_pars_fragment:a1,envmap_fragment:l1,envmap_common_pars_fragment:c1,envmap_pars_fragment:u1,envmap_pars_vertex:h1,envmap_physical_pars_fragment:M1,envmap_vertex:f1,fog_vertex:d1,fog_pars_vertex:p1,fog_fragment:m1,fog_pars_fragment:g1,gradientmap_pars_fragment:v1,lightmap_pars_fragment:_1,lights_lambert_fragment:y1,lights_lambert_pars_fragment:x1,lights_pars_begin:S1,lights_toon_fragment:w1,lights_toon_pars_fragment:E1,lights_phong_fragment:A1,lights_phong_pars_fragment:T1,lights_physical_fragment:b1,lights_physical_pars_fragment:C1,lights_fragment_begin:R1,lights_fragment_maps:P1,lights_fragment_end:I1,logdepthbuf_fragment:L1,logdepthbuf_pars_fragment:D1,logdepthbuf_pars_vertex:U1,logdepthbuf_vertex:N1,map_fragment:O1,map_pars_fragment:F1,map_particle_fragment:B1,map_particle_pars_fragment:z1,metalnessmap_fragment:k1,metalnessmap_pars_fragment:H1,morphinstance_vertex:V1,morphcolor_vertex:G1,morphnormal_vertex:W1,morphtarget_pars_vertex:X1,morphtarget_vertex:Y1,normal_fragment_begin:q1,normal_fragment_maps:j1,normal_pars_fragment:Z1,normal_pars_vertex:J1,normal_vertex:K1,normalmap_pars_fragment:Q1,clearcoat_normal_fragment_begin:$1,clearcoat_normal_fragment_maps:ew,clearcoat_pars_fragment:tw,iridescence_pars_fragment:nw,opaque_fragment:iw,packing:rw,premultiplied_alpha_fragment:sw,project_vertex:ow,dithering_fragment:aw,dithering_pars_fragment:lw,roughnessmap_fragment:cw,roughnessmap_pars_fragment:uw,shadowmap_pars_fragment:hw,shadowmap_pars_vertex:fw,shadowmap_vertex:dw,shadowmask_pars_fragment:pw,skinbase_vertex:mw,skinning_pars_vertex:gw,skinning_vertex:vw,skinnormal_vertex:_w,specularmap_fragment:yw,specularmap_pars_fragment:xw,tonemapping_fragment:Sw,tonemapping_pars_fragment:Mw,transmission_fragment:ww,transmission_pars_fragment:Ew,uv_pars_fragment:Aw,uv_pars_vertex:Tw,uv_vertex:bw,worldpos_vertex:Cw,background_vert:Rw,background_frag:Pw,backgroundCube_vert:Iw,backgroundCube_frag:Lw,cube_vert:Dw,cube_frag:Uw,depth_vert:Nw,depth_frag:Ow,distanceRGBA_vert:Fw,distanceRGBA_frag:Bw,equirect_vert:zw,equirect_frag:kw,linedashed_vert:Hw,linedashed_frag:Vw,meshbasic_vert:Gw,meshbasic_frag:Ww,meshlambert_vert:Xw,meshlambert_frag:Yw,meshmatcap_vert:qw,meshmatcap_frag:jw,meshnormal_vert:Zw,meshnormal_frag:Jw,meshphong_vert:Kw,meshphong_frag:Qw,meshphysical_vert:$w,meshphysical_frag:eE,meshtoon_vert:tE,meshtoon_frag:nE,points_vert:iE,points_frag:rE,shadow_vert:sE,shadow_frag:oE,sprite_vert:aE,sprite_frag:lE},Te={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ei={basic:{uniforms:On([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:On([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new De(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:On([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:On([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:On([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new De(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:On([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:On([Te.points,Te.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:On([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:On([Te.common,Te.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:On([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:On([Te.sprite,Te.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:On([Te.common,Te.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:On([Te.lights,Te.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ei.physical={uniforms:On([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Cc={r:0,b:0,g:0},ss=new ri,cE=new tt;function uE(r,e,t,n,i,s,a){const c=new De(0);let u=s===!0?0:1,h,f,p=null,m=0,v=null;function y(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function M(E){let w=!1;const T=y(E);T===null?_(c,u):T&&T.isColor&&(_(T,1),w=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(E,w){const T=y(w);T&&(T.isCubeTexture||T.mapping===Io)?(f===void 0&&(f=new Qt(new Ps(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Co(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(F,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),ss.copy(w.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),f.material.uniforms.envMap.value=T,f.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(cE.makeRotationFromEuler(ss)),f.material.toneMapped=Dt.getTransfer(T.colorSpace)!==zt,(p!==T||m!==T.version||v!==r.toneMapping)&&(f.material.needsUpdate=!0,p=T,m=T.version,v=r.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Qt(new Uo(2,2),new gi({name:"BackgroundMaterial",uniforms:Co(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Dt.getTransfer(T.colorSpace)!==zt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||m!==T.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,p=T,m=T.version,v=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function _(E,w){E.getRGB(Cc,D_(r)),n.buffers.color.setClear(Cc.r,Cc.g,Cc.b,w,a)}return{getClearColor:function(){return c},setClearColor:function(E,w=1){c.set(E),u=w,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(E){u=E,_(c,u)},render:M,addToRenderList:x}}function hE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,a=!1;function c(b,C,W,q,K){let le=!1;const j=p(q,W,C);s!==j&&(s=j,h(s.object)),le=v(b,q,W,K),le&&y(b,q,W,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(le||a)&&(a=!1,T(b,C,W,q),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function u(){return r.createVertexArray()}function h(b){return r.bindVertexArray(b)}function f(b){return r.deleteVertexArray(b)}function p(b,C,W){const q=W.wireframe===!0;let K=n[b.id];K===void 0&&(K={},n[b.id]=K);let le=K[C.id];le===void 0&&(le={},K[C.id]=le);let j=le[q];return j===void 0&&(j=m(u()),le[q]=j),j}function m(b){const C=[],W=[],q=[];for(let K=0;K<t;K++)C[K]=0,W[K]=0,q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:W,attributeDivisors:q,object:b,attributes:{},index:null}}function v(b,C,W,q){const K=s.attributes,le=C.attributes;let j=0;const ge=W.getAttributes();for(const z in ge)if(ge[z].location>=0){const te=K[z];let ce=le[z];if(ce===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),te===void 0||te.attribute!==ce||ce&&te.data!==ce.data)return!0;j++}return s.attributesNum!==j||s.index!==q}function y(b,C,W,q){const K={},le=C.attributes;let j=0;const ge=W.getAttributes();for(const z in ge)if(ge[z].location>=0){let te=le[z];te===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(te=b.instanceColor));const ce={};ce.attribute=te,te&&te.data&&(ce.data=te.data),K[z]=ce,j++}s.attributes=K,s.attributesNum=j,s.index=q}function M(){const b=s.newAttributes;for(let C=0,W=b.length;C<W;C++)b[C]=0}function x(b){_(b,0)}function _(b,C){const W=s.newAttributes,q=s.enabledAttributes,K=s.attributeDivisors;W[b]=1,q[b]===0&&(r.enableVertexAttribArray(b),q[b]=1),K[b]!==C&&(r.vertexAttribDivisor(b,C),K[b]=C)}function E(){const b=s.newAttributes,C=s.enabledAttributes;for(let W=0,q=C.length;W<q;W++)C[W]!==b[W]&&(r.disableVertexAttribArray(W),C[W]=0)}function w(b,C,W,q,K,le,j){j===!0?r.vertexAttribIPointer(b,C,W,K,le):r.vertexAttribPointer(b,C,W,q,K,le)}function T(b,C,W,q){M();const K=q.attributes,le=W.getAttributes(),j=C.defaultAttributeValues;for(const ge in le){const z=le[ge];if(z.location>=0){let se=K[ge];if(se===void 0&&(ge==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),ge==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){const te=se.normalized,ce=se.itemSize,ze=e.get(se);if(ze===void 0)continue;const Ye=ze.buffer,ne=ze.type,me=ze.bytesPerElement,Ce=ne===r.INT||ne===r.UNSIGNED_INT||se.gpuType===rh;if(se.isInterleavedBufferAttribute){const Me=se.data,st=Me.stride,$e=se.offset;if(Me.isInstancedInterleavedBuffer){for(let ot=0;ot<z.locationSize;ot++)_(z.location+ot,Me.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ot=0;ot<z.locationSize;ot++)x(z.location+ot);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let ot=0;ot<z.locationSize;ot++)w(z.location+ot,ce/z.locationSize,ne,te,st*me,($e+ce/z.locationSize*ot)*me,Ce)}else{if(se.isInstancedBufferAttribute){for(let Me=0;Me<z.locationSize;Me++)_(z.location+Me,se.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Me=0;Me<z.locationSize;Me++)x(z.location+Me);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let Me=0;Me<z.locationSize;Me++)w(z.location+Me,ce/z.locationSize,ne,te,ce*me,ce/z.locationSize*Me*me,Ce)}}else if(j!==void 0){const te=j[ge];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(z.location,te);break;case 3:r.vertexAttrib3fv(z.location,te);break;case 4:r.vertexAttrib4fv(z.location,te);break;default:r.vertexAttrib1fv(z.location,te)}}}}E()}function F(){B();for(const b in n){const C=n[b];for(const W in C){const q=C[W];for(const K in q)f(q[K].object),delete q[K];delete C[W]}delete n[b]}}function P(b){if(n[b.id]===void 0)return;const C=n[b.id];for(const W in C){const q=C[W];for(const K in q)f(q[K].object),delete q[K];delete C[W]}delete n[b.id]}function L(b){for(const C in n){const W=n[C];if(W[b.id]===void 0)continue;const q=W[b.id];for(const K in q)f(q[K].object),delete q[K];delete W[b.id]}}function B(){Y(),a=!0,s!==i&&(s=i,h(s.object))}function Y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:B,resetDefaultState:Y,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:x,disableUnusedAttributes:E}}function fE(r,e,t){let n;function i(h){n=h}function s(h,f){r.drawArrays(n,h,f),t.update(f,n,1)}function a(h,f,p){p!==0&&(r.drawArraysInstanced(n,h,f,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,p);let v=0;for(let y=0;y<p;y++)v+=f[y];t.update(v,n,1)}function u(h,f,p,m){if(p===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<h.length;y++)a(h[y],f[y],m[y]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,f,0,m,0,p);let y=0;for(let M=0;M<p;M++)y+=f[M];for(let M=0;M<m.length;M++)t.update(y,n,m[M])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function dE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){return!(L!==Pn&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(L){const B=L===Lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ai&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Yn&&!B)}function u(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(m===!0){const L=e.get("EXT_clip_control");L.clipControlEXT(L.LOWER_LEFT_EXT,L.ZERO_TO_ONE_EXT)}const v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=y>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:m,maxTextures:v,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:T,vertexTextures:F,maxSamples:P}}function pE(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Nr,c=new dt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const v=p.length!==0||m||n!==0||i;return i=m,n=p.length,v},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,v){const y=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,_=r.get(p);if(!i||y===null||y.length===0||s&&!x)s?f(null):h();else{const E=s?0:n,w=E*4;let T=_.clippingState||null;u.value=T,T=f(y,m,w,v);for(let F=0;F!==w;++F)T[F]=t[F];_.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,v,y){const M=p!==null?p.length:0;let x=null;if(M!==0){if(x=u.value,y!==!0||x===null){const _=v+M*4,E=m.matrixWorldInverse;c.getNormalMatrix(E),(x===null||x.length<_)&&(x=new Float32Array(_));for(let w=0,T=v;w!==M;++w,T+=4)a.copy(p[w]).applyMatrix4(E,c),a.normal.toArray(x,T),x[T+3]=a.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function mE(r){let e=new WeakMap;function t(a,c){return c===Pa?a.mapping=fr:c===Ia&&(a.mapping=zr),a}function n(a){if(a&&a.isTexture){const c=a.mapping;if(c===Pa||c===Ia)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=new N_(u.height);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const c=a.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class rl extends tl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const So=4,e0=[.125,.215,.35,.446,.526,.582],ms=20,cd=new rl,t0=new De;let ud=null,hd=0,fd=0,dd=!1;const ps=(1+Math.sqrt(5))/2,ao=1/ps,n0=[new D(-ps,ao,0),new D(ps,ao,0),new D(-ao,0,ps),new D(ao,0,ps),new D(0,ps,-ao),new D(0,ps,ao),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ud=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,hd,fd),this._renderer.xr.enabled=dd,e.scissorTest=!1,Rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Lo,format:Pn,colorSpace:mr,depthBuffer:!1},i=i0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i0(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gE(s)),this._blurMaterial=vE(s,e,t)}return i}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,cd)}_sceneToCubeUV(e,t,n,i){const c=new fn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(t0),f.toneMapping=Gi,f.autoClear=!1;const v=new Gr({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),y=new Qt(new Ps,v);let M=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,M=!0):(v.color.copy(t0),M=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(c.up.set(0,u[_],0),c.lookAt(h[_],0,0)):E===1?(c.up.set(0,0,u[_]),c.lookAt(0,h[_],0)):(c.up.set(0,u[_],0),c.lookAt(0,0,h[_]));const w=this._cubeSize;Rc(i,E*w,_>2?w:0,w,w),f.setRenderTarget(i),M&&f.render(y,c),f.render(e,c)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fr||e.mapping===zr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=s0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r0());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Rc(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,cd)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=n0[(i-s-1)%n0.length];this._blur(e,s-1,s,a,c)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,c){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Qt(this._lodPlanes[i],h),m=h.uniforms,v=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*ms-1),M=s/y,x=isFinite(s)?1+Math.floor(f*M):ms;x>ms&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ms}`);const _=[];let E=0;for(let L=0;L<ms;++L){const B=L/M,Y=Math.exp(-B*B/2);_.push(Y),L===0?E+=Y:L<x&&(E+=2*Y)}for(let L=0;L<_.length;L++)_[L]=_[L]/E;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=a==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:w}=this;m.dTheta.value=y,m.mipInt.value=w-n;const T=this._sizeLods[i],F=3*T*(i>w-So?i-w+So:0),P=4*(this._cubeSize-T);Rc(t,F,P,3*T,2*T),u.setRenderTarget(t),u.render(p,cd)}}function gE(r){const e=[],t=[],n=[];let i=r;const s=r-So+1+e0.length;for(let a=0;a<s;a++){const c=Math.pow(2,i);t.push(c);let u=1/c;a>r-So?u=e0[a-r+So-1]:a===0&&(u=0),n.push(u);const h=1/(c-2),f=-h,p=1+h,m=[f,f,p,f,p,p,f,f,p,p,f,p],v=6,y=6,M=3,x=2,_=1,E=new Float32Array(M*y*v),w=new Float32Array(x*y*v),T=new Float32Array(_*y*v);for(let P=0;P<v;P++){const L=P%3*2/3-1,B=P>2?0:-1,Y=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];E.set(Y,M*y*P),w.set(m,x*y*P);const b=[P,P,P,P,P,P];T.set(b,_*y*P)}const F=new gt;F.setAttribute("position",new Ft(E,M)),F.setAttribute("uv",new Ft(w,x)),F.setAttribute("faceIndex",new Ft(T,_)),e.push(F),i>So&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function i0(r,e,t){const n=new Ti(r,e,t);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function vE(r,e,t){const n=new Float32Array(ms),i=new D(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function r0(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function s0(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Cp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _E(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===Pa||u===Ia,f=u===fr||u===zr;if(h||f){let p=e.get(c);const m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new Jd(r)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const v=c.image;return h&&v&&v.height>0||f&&v&&i(v)?(t===null&&(t=new Jd(r)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",s),p.texture):null}}}return c}function i(c){let u=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function yE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&lu("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xE(r,e,t,n){const i={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const M=m.morphAttributes[y];for(let x=0,_=M.length;x<_;x++)e.remove(M[x])}m.removeEventListener("dispose",a),delete i[m.id];const v=s.get(m);v&&(e.remove(v),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const y in m)e.update(m[y],r.ARRAY_BUFFER);const v=p.morphAttributes;for(const y in v){const M=v[y];for(let x=0,_=M.length;x<_;x++)e.update(M[x],r.ARRAY_BUFFER)}}function h(p){const m=[],v=p.index,y=p.attributes.position;let M=0;if(v!==null){const E=v.array;M=v.version;for(let w=0,T=E.length;w<T;w+=3){const F=E[w+0],P=E[w+1],L=E[w+2];m.push(F,P,P,L,L,F)}}else if(y!==void 0){const E=y.array;M=y.version;for(let w=0,T=E.length/3-1;w<T;w+=3){const F=w+0,P=w+1,L=w+2;m.push(F,P,P,L,L,F)}}else return;const x=new(C_(m)?bp:Tp)(m,1);x.version=M;const _=s.get(p);_&&e.remove(_),s.set(p,x)}function f(p){const m=s.get(p);if(m){const v=p.index;v!==null&&m.version<v.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:f}}function SE(r,e,t){let n;function i(m){n=m}let s,a;function c(m){s=m.type,a=m.bytesPerElement}function u(m,v){r.drawElements(n,v,s,m*a),t.update(v,n,1)}function h(m,v,y){y!==0&&(r.drawElementsInstanced(n,v,s,m*a,y),t.update(v,n,y))}function f(m,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,s,m,0,y);let x=0;for(let _=0;_<y;_++)x+=v[_];t.update(x,n,1)}function p(m,v,y,M){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<m.length;_++)h(m[_]/a,v[_],M[_]);else{x.multiDrawElementsInstancedWEBGL(n,v,0,s,m,0,M,0,y);let _=0;for(let E=0;E<y;E++)_+=v[E];for(let E=0;E<M.length;E++)t.update(_,n,M[E])}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function ME(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,c){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function wE(r,e,t){const n=new WeakMap,i=new xt;function s(a,c,u){const h=a.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let Y=function(){L.dispose(),n.delete(c),c.removeEventListener("dispose",Y)};m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let w=0;v===!0&&(w=1),y===!0&&(w=2),M===!0&&(w=3);let T=c.attributes.position.count*w,F=1;T>e.maxTextureSize&&(F=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*F*4*p),L=new fh(P,T,F,p);L.type=Yn,L.needsUpdate=!0;const B=w*4;for(let b=0;b<p;b++){const C=x[b],W=_[b],q=E[b],K=T*F*4*b;for(let le=0;le<C.count;le++){const j=le*B;v===!0&&(i.fromBufferAttribute(C,le),P[K+j+0]=i.x,P[K+j+1]=i.y,P[K+j+2]=i.z,P[K+j+3]=0),y===!0&&(i.fromBufferAttribute(W,le),P[K+j+4]=i.x,P[K+j+5]=i.y,P[K+j+6]=i.z,P[K+j+7]=0),M===!0&&(i.fromBufferAttribute(q,le),P[K+j+8]=i.x,P[K+j+9]=i.y,P[K+j+10]=i.z,P[K+j+11]=q.itemSize===4?i.w:1)}}m={count:p,texture:L,size:new fe(T,F)},n.set(c,m),c.addEventListener("dispose",Y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let v=0;for(let M=0;M<h.length;M++)v+=h[M];const y=c.morphTargetsRelative?1:1-v;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function EE(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,p=e.get(u,f);if(i.get(p)!==h&&(e.update(p),i.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return p}function a(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class Rp extends Yt{constructor(e,t,n,i,s,a,c,u,h,f=Ss){if(f!==Ss&&f!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ss&&(n=dr),n===void 0&&f===bs&&(n=Ts),super(null,i,s,a,c,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:dn,this.minFilter=u!==void 0?u:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const F_=new Yt,o0=new Rp(1,1),B_=new fh,z_=new Ap,k_=new nl,a0=[],l0=[],c0=new Float32Array(16),u0=new Float32Array(9),h0=new Float32Array(4);function No(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=a0[i];if(s===void 0&&(s=new Float32Array(i),a0[i]=s),e!==0){n.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,r[a].toArray(s,c)}return s}function on(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function an(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function dh(r,e){let t=l0[e];t===void 0&&(t=new Int32Array(e),l0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function AE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function TE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}function bE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}function CE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}function RE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;h0.set(n),r.uniformMatrix2fv(this.addr,!1,h0),an(t,n)}}function PE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;u0.set(n),r.uniformMatrix3fv(this.addr,!1,u0),an(t,n)}}function IE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;c0.set(n),r.uniformMatrix4fv(this.addr,!1,c0),an(t,n)}}function LE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function DE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}function UE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}function NE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}function OE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function FE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}function BE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}function zE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}function kE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(o0.compareFunction=wp,s=o0):s=F_,t.setTexture2D(e||s,i)}function HE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||z_,i)}function VE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||k_,i)}function GE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||B_,i)}function WE(r){switch(r){case 5126:return AE;case 35664:return TE;case 35665:return bE;case 35666:return CE;case 35674:return RE;case 35675:return PE;case 35676:return IE;case 5124:case 35670:return LE;case 35667:case 35671:return DE;case 35668:case 35672:return UE;case 35669:case 35673:return NE;case 5125:return OE;case 36294:return FE;case 36295:return BE;case 36296:return zE;case 35678:case 36198:case 36298:case 36306:case 35682:return kE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return VE;case 36289:case 36303:case 36311:case 36292:return GE}}function XE(r,e){r.uniform1fv(this.addr,e)}function YE(r,e){const t=No(e,this.size,2);r.uniform2fv(this.addr,t)}function qE(r,e){const t=No(e,this.size,3);r.uniform3fv(this.addr,t)}function jE(r,e){const t=No(e,this.size,4);r.uniform4fv(this.addr,t)}function ZE(r,e){const t=No(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function JE(r,e){const t=No(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function KE(r,e){const t=No(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function QE(r,e){r.uniform1iv(this.addr,e)}function $E(r,e){r.uniform2iv(this.addr,e)}function eA(r,e){r.uniform3iv(this.addr,e)}function tA(r,e){r.uniform4iv(this.addr,e)}function nA(r,e){r.uniform1uiv(this.addr,e)}function iA(r,e){r.uniform2uiv(this.addr,e)}function rA(r,e){r.uniform3uiv(this.addr,e)}function sA(r,e){r.uniform4uiv(this.addr,e)}function oA(r,e,t){const n=this.cache,i=e.length,s=dh(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||F_,s[a])}function aA(r,e,t){const n=this.cache,i=e.length,s=dh(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||z_,s[a])}function lA(r,e,t){const n=this.cache,i=e.length,s=dh(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||k_,s[a])}function cA(r,e,t){const n=this.cache,i=e.length,s=dh(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||B_,s[a])}function uA(r){switch(r){case 5126:return XE;case 35664:return YE;case 35665:return qE;case 35666:return jE;case 35674:return ZE;case 35675:return JE;case 35676:return KE;case 5124:case 35670:return QE;case 35667:case 35671:return $E;case 35668:case 35672:return eA;case 35669:case 35673:return tA;case 5125:return nA;case 36294:return iA;case 36295:return rA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}class hA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=WE(t.type)}}class fA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uA(t.type)}}class dA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const pd=/(\w+)(\])?(\[|\.)?/g;function f0(r,e){r.seq.push(e),r.map[e.id]=e}function pA(r,e,t){const n=r.name,i=n.length;for(pd.lastIndex=0;;){const s=pd.exec(n),a=pd.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&a+2===i){f0(t,h===void 0?new hA(c,r,e):new fA(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new dA(c),f0(t,p)),t=p}}}class cu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);pA(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function d0(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const mA=37297;let gA=0;function vA(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}function _A(r){const e=Dt.getPrimaries(Dt.workingColorSpace),t=Dt.getPrimaries(r);let n;switch(e===t?n="":e===Ba&&t===Fa?n="LinearDisplayP3ToLinearSRGB":e===Fa&&t===Ba&&(n="LinearSRGBToLinearDisplayP3"),r){case mr:case el:return[n,"LinearTransferOETF"];case ti:case hh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function p0(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+vA(r.getShaderSource(e),a)}else return i}function yA(r,e){const t=_A(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xA(r,e){let t;switch(e){case a_:t="Linear";break;case l_:t="Reinhard";break;case c_:t="Cineon";break;case hp:t="ACESFilmic";break;case h_:t="AgX";break;case f_:t="Neutral";break;case u_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pc=new D;function SA(){Dt.getLuminanceCoefficients(Pc);const r=Pc.x.toFixed(4),e=Pc.y.toFixed(4),t=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function wA(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function EA(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:c}}return t}function ya(r){return r!==""}function m0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function g0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(r){return r.replace(AA,bA)}const TA=new Map;function bA(r,e){let t=mt[e];if(t===void 0){const n=TA.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kd(t)}const CA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v0(r){return r.replace(CA,RA)}function RA(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function _0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===xa?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function IA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fr:case zr:e="ENVMAP_TYPE_CUBE";break;case Io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function DA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qa:e="ENVMAP_BLENDING_MULTIPLY";break;case s_:e="ENVMAP_BLENDING_MIX";break;case o_:e="ENVMAP_BLENDING_ADD";break}return e}function UA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function NA(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const u=PA(t),h=IA(t),f=LA(t),p=DA(t),m=UA(t),v=MA(t),y=wA(s),M=i.createProgram();let x,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ya).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ya).join(`
`),_.length>0&&(_+=`
`)):(x=[_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),_=[_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Gi?xA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,yA("linearToOutputTexel",t.outputColorSpace),SA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=Kd(a),a=m0(a,t),a=g0(a,t),c=Kd(c),c=m0(c,t),c=g0(c,t),a=v0(a),c=v0(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=E+x+a,T=E+_+c,F=d0(i,i.VERTEX_SHADER,w),P=d0(i,i.FRAGMENT_SHADER,T);i.attachShader(M,F),i.attachShader(M,P),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function L(C){if(r.debug.checkShaderErrors){const W=i.getProgramInfoLog(M).trim(),q=i.getShaderInfoLog(F).trim(),K=i.getShaderInfoLog(P).trim();let le=!0,j=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(le=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,M,F,P);else{const ge=p0(i,F,"vertex"),z=p0(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+ge+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(q===""||K==="")&&(j=!1);j&&(C.diagnostics={runnable:le,programLog:W,vertexShader:{log:q,prefix:x},fragmentShader:{log:K,prefix:_}})}i.deleteShader(F),i.deleteShader(P),B=new cu(i,M),Y=EA(i,M)}let B;this.getUniforms=function(){return B===void 0&&L(this),B};let Y;this.getAttributes=function(){return Y===void 0&&L(this),Y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(M,mA)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gA++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=P,this}let OA=0;class FA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new BA(e),t.set(e,n)),n}}class BA{constructor(e){this.id=OA++,this.code=e,this.usedTimes=0}}function zA(r,e,t,n,i,s,a){const c=new ws,u=new FA,h=new Set,f=[],p=i.logarithmicDepthBuffer,m=i.reverseDepthBuffer,v=i.vertexTextures;let y=i.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return h.add(b),b===0?"uv":`uv${b}`}function _(b,C,W,q,K){const le=q.fog,j=K.geometry,ge=b.isMeshStandardMaterial?q.environment:null,z=(b.isMeshStandardMaterial?t:e).get(b.envMap||ge),se=z&&z.mapping===Io?z.image.height:null,te=M[b.type];b.precision!==null&&(y=i.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const ce=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ze=ce!==void 0?ce.length:0;let Ye=0;j.morphAttributes.position!==void 0&&(Ye=1),j.morphAttributes.normal!==void 0&&(Ye=2),j.morphAttributes.color!==void 0&&(Ye=3);let ne,me,Ce,Me;if(te){const gn=Ei[te];ne=gn.vertexShader,me=gn.fragmentShader}else ne=b.vertexShader,me=b.fragmentShader,u.update(b),Ce=u.getVertexShaderID(b),Me=u.getFragmentShaderID(b);const st=r.getRenderTarget(),$e=K.isInstancedMesh===!0,ot=K.isBatchedMesh===!0,it=!!b.map,he=!!b.matcap,N=!!z,Ee=!!b.aoMap,we=!!b.lightMap,_e=!!b.bumpMap,Ae=!!b.normalMap,Je=!!b.displacementMap,Ue=!!b.emissiveMap,U=!!b.metalnessMap,R=!!b.roughnessMap,Z=b.anisotropy>0,oe=b.clearcoat>0,ue=b.dispersion>0,ae=b.iridescence>0,qe=b.sheen>0,be=b.transmission>0,Fe=Z&&!!b.anisotropyMap,St=oe&&!!b.clearcoatMap,ye=oe&&!!b.clearcoatNormalMap,Be=oe&&!!b.clearcoatRoughnessMap,at=ae&&!!b.iridescenceMap,lt=ae&&!!b.iridescenceThicknessMap,ke=qe&&!!b.sheenColorMap,Mt=qe&&!!b.sheenRoughnessMap,ut=!!b.specularMap,Nt=!!b.specularColorMap,H=!!b.specularIntensityMap,Ne=be&&!!b.transmissionMap,ie=be&&!!b.thicknessMap,de=!!b.gradientMap,Ie=!!b.alphaMap,Oe=b.alphaTest>0,wt=!!b.alphaHash,Gt=!!b.extensions;let Mn=Gi;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Mn=r.toneMapping);const Et={shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:ne,fragmentShader:me,defines:b.defines,customVertexShaderID:Ce,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:ot,batchingColor:ot&&K._colorsTexture!==null,instancing:$e,instancingColor:$e&&K.instanceColor!==null,instancingMorph:$e&&K.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:mr,alphaToCoverage:!!b.alphaToCoverage,map:it,matcap:he,envMap:N,envMapMode:N&&z.mapping,envMapCubeUVHeight:se,aoMap:Ee,lightMap:we,bumpMap:_e,normalMap:Ae,displacementMap:v&&Je,emissiveMap:Ue,normalMapObjectSpace:Ae&&b.normalMapType===y_,normalMapTangentSpace:Ae&&b.normalMapType===Vr,metalnessMap:U,roughnessMap:R,anisotropy:Z,anisotropyMap:Fe,clearcoat:oe,clearcoatMap:St,clearcoatNormalMap:ye,clearcoatRoughnessMap:Be,dispersion:ue,iridescence:ae,iridescenceMap:at,iridescenceThicknessMap:lt,sheen:qe,sheenColorMap:ke,sheenRoughnessMap:Mt,specularMap:ut,specularColorMap:Nt,specularIntensityMap:H,transmission:be,transmissionMap:Ne,thicknessMap:ie,gradientMap:de,opaque:b.transparent===!1&&b.blending===xs&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Oe,alphaHash:wt,combine:b.combine,mapUv:it&&x(b.map.channel),aoMapUv:Ee&&x(b.aoMap.channel),lightMapUv:we&&x(b.lightMap.channel),bumpMapUv:_e&&x(b.bumpMap.channel),normalMapUv:Ae&&x(b.normalMap.channel),displacementMapUv:Je&&x(b.displacementMap.channel),emissiveMapUv:Ue&&x(b.emissiveMap.channel),metalnessMapUv:U&&x(b.metalnessMap.channel),roughnessMapUv:R&&x(b.roughnessMap.channel),anisotropyMapUv:Fe&&x(b.anisotropyMap.channel),clearcoatMapUv:St&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ye&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(b.sheenRoughnessMap.channel),specularMapUv:ut&&x(b.specularMap.channel),specularColorMapUv:Nt&&x(b.specularColorMap.channel),specularIntensityMapUv:H&&x(b.specularIntensityMap.channel),transmissionMapUv:Ne&&x(b.transmissionMap.channel),thicknessMapUv:ie&&x(b.thicknessMap.channel),alphaMapUv:Ie&&x(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ae||Z),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!j.attributes.uv&&(it||Ie),fog:!!le,useFog:b.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:m,skinning:K.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:Ye,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:Mn,decodeVideoTexture:it&&b.map.isVideoTexture===!0&&Dt.getTransfer(b.map.colorSpace)===zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zi,flipSided:b.side===Bn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Gt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&b.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=h.has(1),Et.vertexUv2s=h.has(2),Et.vertexUv3s=h.has(3),h.clear(),Et}function E(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const W in b.defines)C.push(W),C.push(b.defines[W]);return b.isRawShaderMaterial===!1&&(w(C,b),T(C,b),C.push(r.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function w(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function T(b,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),b.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.alphaToCoverage&&c.enable(20),b.push(c.mask)}function F(b){const C=M[b.type];let W;if(C){const q=Ei[C];W=ju.clone(q.uniforms)}else W=b.uniforms;return W}function P(b,C){let W;for(let q=0,K=f.length;q<K;q++){const le=f[q];if(le.cacheKey===C){W=le,++W.usedTimes;break}}return W===void 0&&(W=new NA(r,C,b,s),f.push(W)),W}function L(b){if(--b.usedTimes===0){const C=f.indexOf(b);f[C]=f[f.length-1],f.pop(),b.destroy()}}function B(b){u.remove(b)}function Y(){u.dispose()}return{getParameters:_,getProgramCacheKey:E,getUniforms:F,acquireProgram:P,releaseProgram:L,releaseShaderCache:B,programs:f,dispose:Y}}function kA(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let c=r.get(a);return c===void 0&&(c={},r.set(a,c)),c}function n(a){r.delete(a)}function i(a,c,u){r.get(a)[c]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function HA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function y0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function x0(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(p,m,v,y,M,x){let _=r[e];return _===void 0?(_={id:p.id,object:p,geometry:m,material:v,groupOrder:y,renderOrder:p.renderOrder,z:M,group:x},r[e]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=v,_.groupOrder=y,_.renderOrder=p.renderOrder,_.z=M,_.group=x),e++,_}function c(p,m,v,y,M,x){const _=a(p,m,v,y,M,x);v.transmission>0?n.push(_):v.transparent===!0?i.push(_):t.push(_)}function u(p,m,v,y,M,x){const _=a(p,m,v,y,M,x);v.transmission>0?n.unshift(_):v.transparent===!0?i.unshift(_):t.unshift(_)}function h(p,m){t.length>1&&t.sort(p||HA),n.length>1&&n.sort(m||y0),i.length>1&&i.sort(m||y0)}function f(){for(let p=e,m=r.length;p<m;p++){const v=r[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:f,sort:h}}function VA(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new x0,r.set(n,[a])):i>=s.length?(a=new x0,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function GA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new De};break;case"SpotLight":t={position:new D,direction:new D,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function WA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let XA=0;function YA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function qA(r){const e=new GA,t=WA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const i=new D,s=new tt,a=new tt;function c(h){let f=0,p=0,m=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let v=0,y=0,M=0,x=0,_=0,E=0,w=0,T=0,F=0,P=0,L=0;h.sort(YA);for(let Y=0,b=h.length;Y<b;Y++){const C=h[Y],W=C.color,q=C.intensity,K=C.distance,le=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=W.r*q,p+=W.g*q,m+=W.b*q;else if(C.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(C.sh.coefficients[j],q);L++}else if(C.isDirectionalLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ge=C.shadow,z=t.get(C);z.shadowIntensity=ge.intensity,z.shadowBias=ge.bias,z.shadowNormalBias=ge.normalBias,z.shadowRadius=ge.radius,z.shadowMapSize=ge.mapSize,n.directionalShadow[v]=z,n.directionalShadowMap[v]=le,n.directionalShadowMatrix[v]=C.shadow.matrix,E++}n.directional[v]=j,v++}else if(C.isSpotLight){const j=e.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(W).multiplyScalar(q),j.distance=K,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,n.spot[M]=j;const ge=C.shadow;if(C.map&&(n.spotLightMap[F]=C.map,F++,ge.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[M]=ge.matrix,C.castShadow){const z=t.get(C);z.shadowIntensity=ge.intensity,z.shadowBias=ge.bias,z.shadowNormalBias=ge.normalBias,z.shadowRadius=ge.radius,z.shadowMapSize=ge.mapSize,n.spotShadow[M]=z,n.spotShadowMap[M]=le,T++}M++}else if(C.isRectAreaLight){const j=e.get(C);j.color.copy(W).multiplyScalar(q),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),n.rectArea[x]=j,x++}else if(C.isPointLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){const ge=C.shadow,z=t.get(C);z.shadowIntensity=ge.intensity,z.shadowBias=ge.bias,z.shadowNormalBias=ge.normalBias,z.shadowRadius=ge.radius,z.shadowMapSize=ge.mapSize,z.shadowCameraNear=ge.camera.near,z.shadowCameraFar=ge.camera.far,n.pointShadow[y]=z,n.pointShadowMap[y]=le,n.pointShadowMatrix[y]=C.shadow.matrix,w++}n.point[y]=j,y++}else if(C.isHemisphereLight){const j=e.get(C);j.skyColor.copy(C.color).multiplyScalar(q),j.groundColor.copy(C.groundColor).multiplyScalar(q),n.hemi[_]=j,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const B=n.hash;(B.directionalLength!==v||B.pointLength!==y||B.spotLength!==M||B.rectAreaLength!==x||B.hemiLength!==_||B.numDirectionalShadows!==E||B.numPointShadows!==w||B.numSpotShadows!==T||B.numSpotMaps!==F||B.numLightProbes!==L)&&(n.directional.length=v,n.spot.length=M,n.rectArea.length=x,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=T+F-P,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,B.directionalLength=v,B.pointLength=y,B.spotLength=M,B.rectAreaLength=x,B.hemiLength=_,B.numDirectionalShadows=E,B.numPointShadows=w,B.numSpotShadows=T,B.numSpotMaps=F,B.numLightProbes=L,n.version=XA++)}function u(h,f){let p=0,m=0,v=0,y=0,M=0;const x=f.matrixWorldInverse;for(let _=0,E=h.length;_<E;_++){const w=h[_];if(w.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(x),p++}else if(w.isSpotLight){const T=n.spot[v];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(x),v++}else if(w.isRectAreaLight){const T=n.rectArea[y];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),a.identity(),s.copy(w.matrixWorld),s.premultiply(x),a.extractRotation(s),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),m++}else if(w.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(x),M++}}}return{setup:c,setupView:u,state:n}}function S0(r){const e=new qA(r),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a}}function jA(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let c;return a===void 0?(c=new S0(r),e.set(i,[c])):s>=a.length?(c=new S0(r),a.push(c)):c=a[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class Pp extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=v_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ip extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KA(r,e,t){let n=new il;const i=new fe,s=new fe,a=new xt,c=new Pp({depthPacking:__}),u=new Ip,h={},f=t.maxTextureSize,p={[hr]:Bn,[Bn]:hr,[zi]:zi},m=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:ZA,fragmentShader:JA}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const y=new gt;y.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qt(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let _=this.type;this.render=function(P,L,B){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const Y=r.getRenderTarget(),b=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),W=r.state;W.setBlending(ur),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const q=_!==wi&&this.type===wi,K=_===wi&&this.type!==wi;for(let le=0,j=P.length;le<j;le++){const ge=P[le],z=ge.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const se=z.getFrameExtents();if(i.multiply(se),s.copy(z.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/se.x),i.x=s.x*se.x,z.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/se.y),i.y=s.y*se.y,z.mapSize.y=s.y)),z.map===null||q===!0||K===!0){const ce=this.type!==wi?{minFilter:dn,magFilter:dn}:{};z.map!==null&&z.map.dispose(),z.map=new Ti(i.x,i.y,ce),z.map.texture.name=ge.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const te=z.getViewportCount();for(let ce=0;ce<te;ce++){const ze=z.getViewport(ce);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),W.viewport(a),z.updateMatrices(ge,ce),n=z.getFrustum(),T(L,B,z.camera,ge,this.type)}z.isPointLightShadow!==!0&&this.type===wi&&E(z,B),z.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(Y,b,C)};function E(P,L){const B=e.update(M);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,v.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ti(i.x,i.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(L,null,B,m,M,null),v.uniforms.shadow_pass.value=P.mapPass.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(L,null,B,v,M,null)}function w(P,L,B,Y){let b=null;const C=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)b=C;else if(b=B.isPointLight===!0?u:c,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const W=b.uuid,q=L.uuid;let K=h[W];K===void 0&&(K={},h[W]=K);let le=K[q];le===void 0&&(le=b.clone(),K[q]=le,L.addEventListener("dispose",F)),b=le}if(b.visible=L.visible,b.wireframe=L.wireframe,Y===wi?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:p[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,B.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const W=r.properties.get(b);W.light=B}return b}function T(P,L,B,Y,b){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===wi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const q=e.update(P),K=P.material;if(Array.isArray(K)){const le=q.groups;for(let j=0,ge=le.length;j<ge;j++){const z=le[j],se=K[z.materialIndex];if(se&&se.visible){const te=w(P,se,Y,b);P.onBeforeShadow(r,P,L,B,q,te,z),r.renderBufferDirect(B,null,q,te,P,z),P.onAfterShadow(r,P,L,B,q,te,z)}}}else if(K.visible){const le=w(P,K,Y,b);P.onBeforeShadow(r,P,L,B,q,le,null),r.renderBufferDirect(B,null,q,le,P,null),P.onAfterShadow(r,P,L,B,q,le,null)}}const W=P.children;for(let q=0,K=W.length;q<K;q++)T(W[q],L,B,Y,b)}function F(P){P.target.removeEventListener("dispose",F);for(const B in h){const Y=h[B],b=P.target.uuid;b in Y&&(Y[b].dispose(),delete Y[b])}}}const QA={[pu]:mu,[gu]:yu,[vu]:xu,[As]:_u,[mu]:pu,[yu]:gu,[xu]:vu,[_u]:As};function $A(r){function e(){let H=!1;const Ne=new xt;let ie=null;const de=new xt(0,0,0,0);return{setMask:function(Ie){ie!==Ie&&!H&&(r.colorMask(Ie,Ie,Ie,Ie),ie=Ie)},setLocked:function(Ie){H=Ie},setClear:function(Ie,Oe,wt,Gt,Mn){Mn===!0&&(Ie*=Gt,Oe*=Gt,wt*=Gt),Ne.set(Ie,Oe,wt,Gt),de.equals(Ne)===!1&&(r.clearColor(Ie,Oe,wt,Gt),de.copy(Ne))},reset:function(){H=!1,ie=null,de.set(-1,0,0,0)}}}function t(){let H=!1,Ne=!1,ie=null,de=null,Ie=null;return{setReversed:function(Oe){Ne=Oe},setTest:function(Oe){Oe?Ce(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(Oe){ie!==Oe&&!H&&(r.depthMask(Oe),ie=Oe)},setFunc:function(Oe){if(Ne&&(Oe=QA[Oe]),de!==Oe){switch(Oe){case pu:r.depthFunc(r.NEVER);break;case mu:r.depthFunc(r.ALWAYS);break;case gu:r.depthFunc(r.LESS);break;case As:r.depthFunc(r.LEQUAL);break;case vu:r.depthFunc(r.EQUAL);break;case _u:r.depthFunc(r.GEQUAL);break;case yu:r.depthFunc(r.GREATER);break;case xu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=Oe}},setLocked:function(Oe){H=Oe},setClear:function(Oe){Ie!==Oe&&(r.clearDepth(Oe),Ie=Oe)},reset:function(){H=!1,ie=null,de=null,Ie=null}}}function n(){let H=!1,Ne=null,ie=null,de=null,Ie=null,Oe=null,wt=null,Gt=null,Mn=null;return{setTest:function(Et){H||(Et?Ce(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Et){Ne!==Et&&!H&&(r.stencilMask(Et),Ne=Et)},setFunc:function(Et,gn,si){(ie!==Et||de!==gn||Ie!==si)&&(r.stencilFunc(Et,gn,si),ie=Et,de=gn,Ie=si)},setOp:function(Et,gn,si){(Oe!==Et||wt!==gn||Gt!==si)&&(r.stencilOp(Et,gn,si),Oe=Et,wt=gn,Gt=si)},setLocked:function(Et){H=Et},setClear:function(Et){Mn!==Et&&(r.clearStencil(Et),Mn=Et)},reset:function(){H=!1,Ne=null,ie=null,de=null,Ie=null,Oe=null,wt=null,Gt=null,Mn=null}}}const i=new e,s=new t,a=new n,c=new WeakMap,u=new WeakMap;let h={},f={},p=new WeakMap,m=[],v=null,y=!1,M=null,x=null,_=null,E=null,w=null,T=null,F=null,P=new De(0,0,0),L=0,B=!1,Y=null,b=null,C=null,W=null,q=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,j=0;const ge=r.getParameter(r.VERSION);ge.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ge)[1]),le=j>=1):ge.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),le=j>=2);let z=null,se={};const te=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),ze=new xt().fromArray(te),Ye=new xt().fromArray(ce);function ne(H,Ne,ie,de){const Ie=new Uint8Array(4),Oe=r.createTexture();r.bindTexture(H,Oe),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let wt=0;wt<ie;wt++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Ne+wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Oe}const me={};me[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Ce(r.DEPTH_TEST),s.setFunc(As),we(!1),_e(Wd),Ce(r.CULL_FACE),N(ur);function Ce(H){h[H]!==!0&&(r.enable(H),h[H]=!0)}function Me(H){h[H]!==!1&&(r.disable(H),h[H]=!1)}function st(H,Ne){return f[H]!==Ne?(r.bindFramebuffer(H,Ne),f[H]=Ne,H===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Ne),H===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function $e(H,Ne){let ie=m,de=!1;if(H){ie=p.get(Ne),ie===void 0&&(ie=[],p.set(Ne,ie));const Ie=H.textures;if(ie.length!==Ie.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let Oe=0,wt=Ie.length;Oe<wt;Oe++)ie[Oe]=r.COLOR_ATTACHMENT0+Oe;ie.length=Ie.length,de=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,de=!0);de&&r.drawBuffers(ie)}function ot(H){return v!==H?(r.useProgram(H),v=H,!0):!1}const it={[Fr]:r.FUNC_ADD,[Vv]:r.FUNC_SUBTRACT,[Gv]:r.FUNC_REVERSE_SUBTRACT};it[Wv]=r.MIN,it[Xv]=r.MAX;const he={[Yv]:r.ZERO,[qv]:r.ONE,[jv]:r.SRC_COLOR,[fu]:r.SRC_ALPHA,[e_]:r.SRC_ALPHA_SATURATE,[Qv]:r.DST_COLOR,[Jv]:r.DST_ALPHA,[Zv]:r.ONE_MINUS_SRC_COLOR,[du]:r.ONE_MINUS_SRC_ALPHA,[$v]:r.ONE_MINUS_DST_COLOR,[Kv]:r.ONE_MINUS_DST_ALPHA,[t_]:r.CONSTANT_COLOR,[n_]:r.ONE_MINUS_CONSTANT_COLOR,[i_]:r.CONSTANT_ALPHA,[r_]:r.ONE_MINUS_CONSTANT_ALPHA};function N(H,Ne,ie,de,Ie,Oe,wt,Gt,Mn,Et){if(H===ur){y===!0&&(Me(r.BLEND),y=!1);return}if(y===!1&&(Ce(r.BLEND),y=!0),H!==Hv){if(H!==M||Et!==B){if((x!==Fr||w!==Fr)&&(r.blendEquation(r.FUNC_ADD),x=Fr,w=Fr),Et)switch(H){case xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hu:r.blendFunc(r.ONE,r.ONE);break;case Xd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,E=null,T=null,F=null,P.set(0,0,0),L=0,M=H,B=Et}return}Ie=Ie||Ne,Oe=Oe||ie,wt=wt||de,(Ne!==x||Ie!==w)&&(r.blendEquationSeparate(it[Ne],it[Ie]),x=Ne,w=Ie),(ie!==_||de!==E||Oe!==T||wt!==F)&&(r.blendFuncSeparate(he[ie],he[de],he[Oe],he[wt]),_=ie,E=de,T=Oe,F=wt),(Gt.equals(P)===!1||Mn!==L)&&(r.blendColor(Gt.r,Gt.g,Gt.b,Mn),P.copy(Gt),L=Mn),M=H,B=!1}function Ee(H,Ne){H.side===zi?Me(r.CULL_FACE):Ce(r.CULL_FACE);let ie=H.side===Bn;Ne&&(ie=!ie),we(ie),H.blending===xs&&H.transparent===!1?N(ur):N(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),i.setMask(H.colorWrite);const de=H.stencilWrite;a.setTest(de),de&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Je(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function we(H){Y!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),Y=H)}function _e(H){H!==Bv?(Ce(r.CULL_FACE),H!==b&&(H===Wd?r.cullFace(r.BACK):H===zv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),b=H}function Ae(H){H!==C&&(le&&r.lineWidth(H),C=H)}function Je(H,Ne,ie){H?(Ce(r.POLYGON_OFFSET_FILL),(W!==Ne||q!==ie)&&(r.polygonOffset(Ne,ie),W=Ne,q=ie)):Me(r.POLYGON_OFFSET_FILL)}function Ue(H){H?Ce(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function U(H){H===void 0&&(H=r.TEXTURE0+K-1),z!==H&&(r.activeTexture(H),z=H)}function R(H,Ne,ie){ie===void 0&&(z===null?ie=r.TEXTURE0+K-1:ie=z);let de=se[ie];de===void 0&&(de={type:void 0,texture:void 0},se[ie]=de),(de.type!==H||de.texture!==Ne)&&(z!==ie&&(r.activeTexture(ie),z=ie),r.bindTexture(H,Ne||me[H]),de.type=H,de.texture=Ne)}function Z(){const H=se[z];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function oe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{r.compressedTexImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{r.texSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{r.texSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function St(){try{r.texStorage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{r.texStorage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{r.texImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{r.texImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(H){ze.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),ze.copy(H))}function ke(H){Ye.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Ye.copy(H))}function Mt(H,Ne){let ie=u.get(Ne);ie===void 0&&(ie=new WeakMap,u.set(Ne,ie));let de=ie.get(H);de===void 0&&(de=r.getUniformBlockIndex(Ne,H.name),ie.set(H,de))}function ut(H,Ne){const de=u.get(Ne).get(H);c.get(Ne)!==de&&(r.uniformBlockBinding(Ne,de,H.__bindingPointIndex),c.set(Ne,de))}function Nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},z=null,se={},f={},p=new WeakMap,m=[],v=null,y=!1,M=null,x=null,_=null,E=null,w=null,T=null,F=null,P=new De(0,0,0),L=0,B=!1,Y=null,b=null,C=null,W=null,q=null,ze.set(0,0,r.canvas.width,r.canvas.height),Ye.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:Ce,disable:Me,bindFramebuffer:st,drawBuffers:$e,useProgram:ot,setBlending:N,setMaterial:Ee,setFlipSided:we,setCullFace:_e,setLineWidth:Ae,setPolygonOffset:Je,setScissorTest:Ue,activeTexture:U,bindTexture:R,unbindTexture:Z,compressedTexImage2D:oe,compressedTexImage3D:ue,texImage2D:Be,texImage3D:at,updateUBOMapping:Mt,uniformBlockBinding:ut,texStorage2D:St,texStorage3D:ye,texSubImage2D:ae,texSubImage3D:qe,compressedTexSubImage2D:be,compressedTexSubImage3D:Fe,scissor:lt,viewport:ke,reset:Nt}}function eT(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function tT(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function nT(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Qd(r,e,t,n){const i=iT(n);switch(t){case gp:return r*e;case _p:return r*e;case yp:return r*e*2;case ah:return r*e/i.components*i.byteLength;case $a:return r*e/i.components*i.byteLength;case xp:return r*e*2/i.components*i.byteLength;case lh:return r*e*2/i.components*i.byteLength;case vp:return r*e*3/i.components*i.byteLength;case Pn:return r*e*4/i.components*i.byteLength;case ch:return r*e*4/i.components*i.byteLength;case Ma:case wa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ea:case Aa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mu:case Eu:return Math.max(r,16)*Math.max(e,8)/4;case Su:case wu:return Math.max(r,8)*Math.max(e,8)/2;case Au:case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Du:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Nu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ou:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case zu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ku:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ta:case Vu:case Gu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sp:case Wu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Xu:case Yu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iT(r){switch(r){case Ai:case dp:return{byteLength:1,components:1};case To:case pp:case Lo:return{byteLength:2,components:1};case sh:case oh:return{byteLength:2,components:4};case dr:case rh:case Yn:return{byteLength:4,components:1};case mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}const rT={contain:eT,cover:tT,fill:nT,getByteLength:Qd};function sT(r,e,t,n,i,s,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new fe,f=new WeakMap;let p;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,R){return v?new OffscreenCanvas(U,R):Ha("canvas")}function M(U,R,Z){let oe=1;const ue=Ue(U);if((ue.width>Z||ue.height>Z)&&(oe=Z/Math.max(ue.width,ue.height)),oe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ae=Math.floor(oe*ue.width),qe=Math.floor(oe*ue.height);p===void 0&&(p=y(ae,qe));const be=R?y(ae,qe):p;return be.width=ae,be.height=qe,be.getContext("2d").drawImage(U,0,0,ae,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ae+"x"+qe+")."),be}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),U;return U}function x(U){return U.generateMipmaps&&U.minFilter!==dn&&U.minFilter!==nn}function _(U){r.generateMipmap(U)}function E(U,R,Z,oe,ue=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ae=R;if(R===r.RED&&(Z===r.FLOAT&&(ae=r.R32F),Z===r.HALF_FLOAT&&(ae=r.R16F),Z===r.UNSIGNED_BYTE&&(ae=r.R8)),R===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ae=r.R8UI),Z===r.UNSIGNED_SHORT&&(ae=r.R16UI),Z===r.UNSIGNED_INT&&(ae=r.R32UI),Z===r.BYTE&&(ae=r.R8I),Z===r.SHORT&&(ae=r.R16I),Z===r.INT&&(ae=r.R32I)),R===r.RG&&(Z===r.FLOAT&&(ae=r.RG32F),Z===r.HALF_FLOAT&&(ae=r.RG16F),Z===r.UNSIGNED_BYTE&&(ae=r.RG8)),R===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ae=r.RG8UI),Z===r.UNSIGNED_SHORT&&(ae=r.RG16UI),Z===r.UNSIGNED_INT&&(ae=r.RG32UI),Z===r.BYTE&&(ae=r.RG8I),Z===r.SHORT&&(ae=r.RG16I),Z===r.INT&&(ae=r.RG32I)),R===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),Z===r.UNSIGNED_INT&&(ae=r.RGB32UI),Z===r.BYTE&&(ae=r.RGB8I),Z===r.SHORT&&(ae=r.RGB16I),Z===r.INT&&(ae=r.RGB32I)),R===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),Z===r.UNSIGNED_INT&&(ae=r.RGBA32UI),Z===r.BYTE&&(ae=r.RGBA8I),Z===r.SHORT&&(ae=r.RGBA16I),Z===r.INT&&(ae=r.RGBA32I)),R===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),R===r.RGBA){const qe=ue?Oa:Dt.getTransfer(oe);Z===r.FLOAT&&(ae=r.RGBA32F),Z===r.HALF_FLOAT&&(ae=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(ae=qe===zt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function w(U,R){let Z;return U?R===null||R===dr||R===Ts?Z=r.DEPTH24_STENCIL8:R===Yn?Z=r.DEPTH32F_STENCIL8:R===To&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===dr||R===Ts?Z=r.DEPTH_COMPONENT24:R===Yn?Z=r.DEPTH_COMPONENT32F:R===To&&(Z=r.DEPTH_COMPONENT16),Z}function T(U,R){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==dn&&U.minFilter!==nn?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function F(U){const R=U.target;R.removeEventListener("dispose",F),L(R),R.isVideoTexture&&f.delete(R)}function P(U){const R=U.target;R.removeEventListener("dispose",P),Y(R)}function L(U){const R=n.get(U);if(R.__webglInit===void 0)return;const Z=U.source,oe=m.get(Z);if(oe){const ue=oe[R.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&B(U),Object.keys(oe).length===0&&m.delete(Z)}n.remove(U)}function B(U){const R=n.get(U);r.deleteTexture(R.__webglTexture);const Z=U.source,oe=m.get(Z);delete oe[R.__cacheKey],a.memory.textures--}function Y(U){const R=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(R.__webglFramebuffer[oe]))for(let ue=0;ue<R.__webglFramebuffer[oe].length;ue++)r.deleteFramebuffer(R.__webglFramebuffer[oe][ue]);else r.deleteFramebuffer(R.__webglFramebuffer[oe]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[oe])}else{if(Array.isArray(R.__webglFramebuffer))for(let oe=0;oe<R.__webglFramebuffer.length;oe++)r.deleteFramebuffer(R.__webglFramebuffer[oe]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let oe=0;oe<R.__webglColorRenderbuffer.length;oe++)R.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[oe]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Z=U.textures;for(let oe=0,ue=Z.length;oe<ue;oe++){const ae=n.get(Z[oe]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(Z[oe])}n.remove(U)}let b=0;function C(){b=0}function W(){const U=b;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),b+=1,U}function q(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function K(U,R){const Z=n.get(U);if(U.isVideoTexture&&Ae(U),U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){const oe=U.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(Z,U,R);return}}t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+R)}function le(U,R){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){Ye(Z,U,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+R)}function j(U,R){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){Ye(Z,U,R);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+R)}function ge(U,R){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){ne(Z,U,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+R)}const z={[La]:r.REPEAT,[mi]:r.CLAMP_TO_EDGE,[Da]:r.MIRRORED_REPEAT},se={[dn]:r.NEAREST,[fp]:r.NEAREST_MIPMAP_NEAREST,[yo]:r.NEAREST_MIPMAP_LINEAR,[nn]:r.LINEAR,[Sa]:r.LINEAR_MIPMAP_NEAREST,[Hi]:r.LINEAR_MIPMAP_LINEAR},te={[x_]:r.NEVER,[T_]:r.ALWAYS,[S_]:r.LESS,[wp]:r.LEQUAL,[M_]:r.EQUAL,[A_]:r.GEQUAL,[w_]:r.GREATER,[E_]:r.NOTEQUAL};function ce(U,R){if(R.type===Yn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===nn||R.magFilter===Sa||R.magFilter===yo||R.magFilter===Hi||R.minFilter===nn||R.minFilter===Sa||R.minFilter===yo||R.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,z[R.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,z[R.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,z[R.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,se[R.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,se[R.minFilter]),R.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,te[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===dn||R.minFilter!==yo&&R.minFilter!==Hi||R.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ze(U,R){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",F));const oe=R.source;let ue=m.get(oe);ue===void 0&&(ue={},m.set(oe,ue));const ae=q(R);if(ae!==U.__cacheKey){ue[ae]===void 0&&(ue[ae]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ue[ae].usedTimes++;const qe=ue[U.__cacheKey];qe!==void 0&&(ue[U.__cacheKey].usedTimes--,qe.usedTimes===0&&B(R)),U.__cacheKey=ae,U.__webglTexture=ue[ae].texture}return Z}function Ye(U,R,Z){let oe=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(oe=r.TEXTURE_3D);const ue=ze(U,R),ae=R.source;t.bindTexture(oe,U.__webglTexture,r.TEXTURE0+Z);const qe=n.get(ae);if(ae.version!==qe.__version||ue===!0){t.activeTexture(r.TEXTURE0+Z);const be=Dt.getPrimaries(Dt.workingColorSpace),Fe=R.colorSpace===ar?null:Dt.getPrimaries(R.colorSpace),St=R.colorSpace===ar||be===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let ye=M(R.image,!1,i.maxTextureSize);ye=Je(R,ye);const Be=s.convert(R.format,R.colorSpace),at=s.convert(R.type);let lt=E(R.internalFormat,Be,at,R.colorSpace,R.isVideoTexture);ce(oe,R);let ke;const Mt=R.mipmaps,ut=R.isVideoTexture!==!0,Nt=qe.__version===void 0||ue===!0,H=ae.dataReady,Ne=T(R,ye);if(R.isDepthTexture)lt=w(R.format===bs,R.type),Nt&&(ut?t.texStorage2D(r.TEXTURE_2D,1,lt,ye.width,ye.height):t.texImage2D(r.TEXTURE_2D,0,lt,ye.width,ye.height,0,Be,at,null));else if(R.isDataTexture)if(Mt.length>0){ut&&Nt&&t.texStorage2D(r.TEXTURE_2D,Ne,lt,Mt[0].width,Mt[0].height);for(let ie=0,de=Mt.length;ie<de;ie++)ke=Mt[ie],ut?H&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ke.width,ke.height,Be,at,ke.data):t.texImage2D(r.TEXTURE_2D,ie,lt,ke.width,ke.height,0,Be,at,ke.data);R.generateMipmaps=!1}else ut?(Nt&&t.texStorage2D(r.TEXTURE_2D,Ne,lt,ye.width,ye.height),H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye.width,ye.height,Be,at,ye.data)):t.texImage2D(r.TEXTURE_2D,0,lt,ye.width,ye.height,0,Be,at,ye.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ut&&Nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,lt,Mt[0].width,Mt[0].height,ye.depth);for(let ie=0,de=Mt.length;ie<de;ie++)if(ke=Mt[ie],R.format!==Pn)if(Be!==null)if(ut){if(H)if(R.layerUpdates.size>0){const Ie=Qd(ke.width,ke.height,R.format,R.type);for(const Oe of R.layerUpdates){const wt=ke.data.subarray(Oe*Ie/ke.data.BYTES_PER_ELEMENT,(Oe+1)*Ie/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,Oe,ke.width,ke.height,1,Be,wt,0,0)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,ye.depth,Be,ke.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,lt,ke.width,ke.height,ye.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?H&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,ye.depth,Be,at,ke.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,lt,ke.width,ke.height,ye.depth,0,Be,at,ke.data)}else{ut&&Nt&&t.texStorage2D(r.TEXTURE_2D,Ne,lt,Mt[0].width,Mt[0].height);for(let ie=0,de=Mt.length;ie<de;ie++)ke=Mt[ie],R.format!==Pn?Be!==null?ut?H&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,ke.width,ke.height,Be,ke.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,lt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?H&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ke.width,ke.height,Be,at,ke.data):t.texImage2D(r.TEXTURE_2D,ie,lt,ke.width,ke.height,0,Be,at,ke.data)}else if(R.isDataArrayTexture)if(ut){if(Nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,lt,ye.width,ye.height,ye.depth),H)if(R.layerUpdates.size>0){const ie=Qd(ye.width,ye.height,R.format,R.type);for(const de of R.layerUpdates){const Ie=ye.data.subarray(de*ie/ye.data.BYTES_PER_ELEMENT,(de+1)*ie/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,de,ye.width,ye.height,1,Be,at,Ie)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Be,at,ye.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,lt,ye.width,ye.height,ye.depth,0,Be,at,ye.data);else if(R.isData3DTexture)ut?(Nt&&t.texStorage3D(r.TEXTURE_3D,Ne,lt,ye.width,ye.height,ye.depth),H&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Be,at,ye.data)):t.texImage3D(r.TEXTURE_3D,0,lt,ye.width,ye.height,ye.depth,0,Be,at,ye.data);else if(R.isFramebufferTexture){if(Nt)if(ut)t.texStorage2D(r.TEXTURE_2D,Ne,lt,ye.width,ye.height);else{let ie=ye.width,de=ye.height;for(let Ie=0;Ie<Ne;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,lt,ie,de,0,Be,at,null),ie>>=1,de>>=1}}else if(Mt.length>0){if(ut&&Nt){const ie=Ue(Mt[0]);t.texStorage2D(r.TEXTURE_2D,Ne,lt,ie.width,ie.height)}for(let ie=0,de=Mt.length;ie<de;ie++)ke=Mt[ie],ut?H&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Be,at,ke):t.texImage2D(r.TEXTURE_2D,ie,lt,Be,at,ke);R.generateMipmaps=!1}else if(ut){if(Nt){const ie=Ue(ye);t.texStorage2D(r.TEXTURE_2D,Ne,lt,ie.width,ie.height)}H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,at,ye)}else t.texImage2D(r.TEXTURE_2D,0,lt,Be,at,ye);x(R)&&_(oe),qe.__version=ae.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function ne(U,R,Z){if(R.image.length!==6)return;const oe=ze(U,R),ue=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+Z);const ae=n.get(ue);if(ue.version!==ae.__version||oe===!0){t.activeTexture(r.TEXTURE0+Z);const qe=Dt.getPrimaries(Dt.workingColorSpace),be=R.colorSpace===ar?null:Dt.getPrimaries(R.colorSpace),Fe=R.colorSpace===ar||qe===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const St=R.isCompressedTexture||R.image[0].isCompressedTexture,ye=R.image[0]&&R.image[0].isDataTexture,Be=[];for(let de=0;de<6;de++)!St&&!ye?Be[de]=M(R.image[de],!0,i.maxCubemapSize):Be[de]=ye?R.image[de].image:R.image[de],Be[de]=Je(R,Be[de]);const at=Be[0],lt=s.convert(R.format,R.colorSpace),ke=s.convert(R.type),Mt=E(R.internalFormat,lt,ke,R.colorSpace),ut=R.isVideoTexture!==!0,Nt=ae.__version===void 0||oe===!0,H=ue.dataReady;let Ne=T(R,at);ce(r.TEXTURE_CUBE_MAP,R);let ie;if(St){ut&&Nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,Mt,at.width,at.height);for(let de=0;de<6;de++){ie=Be[de].mipmaps;for(let Ie=0;Ie<ie.length;Ie++){const Oe=ie[Ie];R.format!==Pn?lt!==null?ut?H&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,Oe.width,Oe.height,lt,Oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,Mt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,Oe.width,Oe.height,lt,ke,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,Mt,Oe.width,Oe.height,0,lt,ke,Oe.data)}}}else{if(ie=R.mipmaps,ut&&Nt){ie.length>0&&Ne++;const de=Ue(Be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,Mt,de.width,de.height)}for(let de=0;de<6;de++)if(ye){ut?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Be[de].width,Be[de].height,lt,ke,Be[de].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Mt,Be[de].width,Be[de].height,0,lt,ke,Be[de].data);for(let Ie=0;Ie<ie.length;Ie++){const wt=ie[Ie].image[de].image;ut?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,wt.width,wt.height,lt,ke,wt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,Mt,wt.width,wt.height,0,lt,ke,wt.data)}}else{ut?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,lt,ke,Be[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Mt,lt,ke,Be[de]);for(let Ie=0;Ie<ie.length;Ie++){const Oe=ie[Ie];ut?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,lt,ke,Oe.image[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,Mt,lt,ke,Oe.image[de])}}}x(R)&&_(r.TEXTURE_CUBE_MAP),ae.__version=ue.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function me(U,R,Z,oe,ue,ae){const qe=s.convert(Z.format,Z.colorSpace),be=s.convert(Z.type),Fe=E(Z.internalFormat,qe,be,Z.colorSpace);if(!n.get(R).__hasExternalTextures){const ye=Math.max(1,R.width>>ae),Be=Math.max(1,R.height>>ae);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?t.texImage3D(ue,ae,Fe,ye,Be,R.depth,0,qe,be,null):t.texImage2D(ue,ae,Fe,ye,Be,0,qe,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),_e(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,ue,n.get(Z).__webglTexture,0,we(R)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,ue,n.get(Z).__webglTexture,ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(U,R,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,U),R.depthBuffer){const oe=R.depthTexture,ue=oe&&oe.isDepthTexture?oe.type:null,ae=w(R.stencilBuffer,ue),qe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=we(R);_e(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,ae,R.width,R.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ae,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,ae,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qe,r.RENDERBUFFER,U)}else{const oe=R.textures;for(let ue=0;ue<oe.length;ue++){const ae=oe[ue],qe=s.convert(ae.format,ae.colorSpace),be=s.convert(ae.type),Fe=E(ae.internalFormat,qe,be,ae.colorSpace),St=we(R);Z&&_e(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,Fe,R.width,R.height):_e(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,Fe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),K(R.depthTexture,0);const oe=n.get(R.depthTexture).__webglTexture,ue=we(R);if(R.depthTexture.format===Ss)_e(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(R.depthTexture.format===bs)_e(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function st(U){const R=n.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const oe=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),oe){const ue=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,oe.removeEventListener("dispose",ue)};oe.addEventListener("dispose",ue),R.__depthDisposeCallback=ue}R.__boundDepthTexture=oe}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Me(R.__webglFramebuffer,U)}else if(Z){R.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[oe]),R.__webglDepthbuffer[oe]===void 0)R.__webglDepthbuffer[oe]=r.createRenderbuffer(),Ce(R.__webglDepthbuffer[oe],U,!1);else{const ue=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=R.__webglDepthbuffer[oe];r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),Ce(R.__webglDepthbuffer,U,!1);else{const oe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,ue)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(U,R,Z){const oe=n.get(U);R!==void 0&&me(oe.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&st(U)}function ot(U){const R=U.texture,Z=n.get(U),oe=n.get(R);U.addEventListener("dispose",P);const ue=U.textures,ae=U.isWebGLCubeRenderTarget===!0,qe=ue.length>1;if(qe||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=R.version,a.memory.textures++),ae){Z.__webglFramebuffer=[];for(let be=0;be<6;be++)if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer[be]=[];for(let Fe=0;Fe<R.mipmaps.length;Fe++)Z.__webglFramebuffer[be][Fe]=r.createFramebuffer()}else Z.__webglFramebuffer[be]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer=[];for(let be=0;be<R.mipmaps.length;be++)Z.__webglFramebuffer[be]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(qe)for(let be=0,Fe=ue.length;be<Fe;be++){const St=n.get(ue[be]);St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture(),a.memory.textures++)}if(U.samples>0&&_e(U)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let be=0;be<ue.length;be++){const Fe=ue[be];Z.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[be]);const St=s.convert(Fe.format,Fe.colorSpace),ye=s.convert(Fe.type),Be=E(Fe.internalFormat,St,ye,Fe.colorSpace,U.isXRRenderTarget===!0),at=we(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,at,Be,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,Z.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(Z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),ce(r.TEXTURE_CUBE_MAP,R);for(let be=0;be<6;be++)if(R.mipmaps&&R.mipmaps.length>0)for(let Fe=0;Fe<R.mipmaps.length;Fe++)me(Z.__webglFramebuffer[be][Fe],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe);else me(Z.__webglFramebuffer[be],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);x(R)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let be=0,Fe=ue.length;be<Fe;be++){const St=ue[be],ye=n.get(St);t.bindTexture(r.TEXTURE_2D,ye.__webglTexture),ce(r.TEXTURE_2D,St),me(Z.__webglFramebuffer,U,St,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),x(St)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(be=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,oe.__webglTexture),ce(be,R),R.mipmaps&&R.mipmaps.length>0)for(let Fe=0;Fe<R.mipmaps.length;Fe++)me(Z.__webglFramebuffer[Fe],U,R,r.COLOR_ATTACHMENT0,be,Fe);else me(Z.__webglFramebuffer,U,R,r.COLOR_ATTACHMENT0,be,0);x(R)&&_(be),t.unbindTexture()}U.depthBuffer&&st(U)}function it(U){const R=U.textures;for(let Z=0,oe=R.length;Z<oe;Z++){const ue=R[Z];if(x(ue)){const ae=U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,qe=n.get(ue).__webglTexture;t.bindTexture(ae,qe),_(ae),t.unbindTexture()}}}const he=[],N=[];function Ee(U){if(U.samples>0){if(_e(U)===!1){const R=U.textures,Z=U.width,oe=U.height;let ue=r.COLOR_BUFFER_BIT;const ae=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qe=n.get(U),be=R.length>1;if(be)for(let Fe=0;Fe<R.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Fe=0;Fe<R.length;Fe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qe.__webglColorRenderbuffer[Fe]);const St=n.get(R[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,Z,oe,0,0,Z,oe,ue,r.NEAREST),u===!0&&(he.length=0,N.length=0,he.push(r.COLOR_ATTACHMENT0+Fe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(he.push(ae),N.push(ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Fe=0;Fe<R.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,qe.__webglColorRenderbuffer[Fe]);const St=n.get(R[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,St,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&u){const R=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function we(U){return Math.min(i.maxSamples,U.samples)}function _e(U){const R=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ae(U){const R=a.render.frame;f.get(U)!==R&&(f.set(U,R),U.update())}function Je(U,R){const Z=U.colorSpace,oe=U.format,ue=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==mr&&Z!==ar&&(Dt.getTransfer(Z)===zt?(oe!==Pn||ue!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),R}function Ue(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=C,this.setTexture2D=K,this.setTexture2DArray=le,this.setTexture3D=j,this.setTextureCube=ge,this.rebindTextures=$e,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=me,this.useMultisampledRTT=_e}function H_(r,e){function t(n,i=ar){let s;const a=Dt.getTransfer(i);if(n===Ai)return r.UNSIGNED_BYTE;if(n===sh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===oh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===mp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===dp)return r.BYTE;if(n===pp)return r.SHORT;if(n===To)return r.UNSIGNED_SHORT;if(n===rh)return r.INT;if(n===dr)return r.UNSIGNED_INT;if(n===Yn)return r.FLOAT;if(n===Lo)return r.HALF_FLOAT;if(n===gp)return r.ALPHA;if(n===vp)return r.RGB;if(n===Pn)return r.RGBA;if(n===_p)return r.LUMINANCE;if(n===yp)return r.LUMINANCE_ALPHA;if(n===Ss)return r.DEPTH_COMPONENT;if(n===bs)return r.DEPTH_STENCIL;if(n===ah)return r.RED;if(n===$a)return r.RED_INTEGER;if(n===xp)return r.RG;if(n===lh)return r.RG_INTEGER;if(n===ch)return r.RGBA_INTEGER;if(n===Ma||n===wa||n===Ea||n===Aa)if(a===zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Su||n===Mu||n===wu||n===Eu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Su)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Au||n===Tu||n===bu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Au||n===Tu)return a===zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===bu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cu||n===Ru||n===Pu||n===Iu||n===Lu||n===Du||n===Uu||n===Nu||n===Ou||n===Fu||n===Bu||n===zu||n===ku||n===Hu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Cu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ru)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Iu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Du)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ou)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ku)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===Vu||n===Gu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ta)return a===zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sp||n===Wu||n===Xu||n===Yu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ta)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class V_ extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mo extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oT={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),_=this._getHandJoint(h,M);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=f.position.distanceTo(p.position),v=.02,y=.005;h.inputState.pinching&&m>v+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=v-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(oT)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const aT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Yt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gi({vertexShader:aT,fragmentShader:lT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Uo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uT extends Yi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,c="local-floor",u=1,h=null,f=null,p=null,m=null,v=null,y=null;const M=new cT,x=t.getContextAttributes();let _=null,E=null;const w=[],T=[],F=new fe;let P=null;const L=new fn;L.layers.enable(1),L.viewport=new xt;const B=new fn;B.layers.enable(2),B.viewport=new xt;const Y=[L,B],b=new V_;b.layers.enable(1),b.layers.enable(2);let C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=w[ne];return me===void 0&&(me=new md,w[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=w[ne];return me===void 0&&(me=new md,w[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=w[ne];return me===void 0&&(me=new md,w[ne]=me),me.getHandSpace()};function q(ne){const me=T.indexOf(ne.inputSource);if(me===-1)return;const Ce=w[me];Ce!==void 0&&(Ce.update(ne.inputSource,ne.frame,h||a),Ce.dispatchEvent({type:ne.type,data:ne.inputSource}))}function K(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",le);for(let ne=0;ne<w.length;ne++){const me=T[ne];me!==null&&(T[ne]=null,w[ne].disconnect(me))}C=null,W=null,M.reset(),e.setRenderTarget(_),v=null,m=null,p=null,i=null,E=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){c=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",K),i.addEventListener("inputsourceschange",le),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(F),i.renderState.layers===void 0){const me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),E=new Ti(v.framebufferWidth,v.framebufferHeight,{format:Pn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let me=null,Ce=null,Me=null;x.depth&&(Me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=x.stencil?bs:Ss,Ce=x.stencil?Ts:dr);const st={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};p=new XRWebGLBinding(i,t),m=p.createProjectionLayer(st),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new Ti(m.textureWidth,m.textureHeight,{format:Pn,type:Ai,depthTexture:new Rp(m.textureWidth,m.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await i.requestReferenceSpace(c),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function le(ne){for(let me=0;me<ne.removed.length;me++){const Ce=ne.removed[me],Me=T.indexOf(Ce);Me>=0&&(T[Me]=null,w[Me].disconnect(Ce))}for(let me=0;me<ne.added.length;me++){const Ce=ne.added[me];let Me=T.indexOf(Ce);if(Me===-1){for(let $e=0;$e<w.length;$e++)if($e>=T.length){T.push(Ce),Me=$e;break}else if(T[$e]===null){T[$e]=Ce,Me=$e;break}if(Me===-1)break}const st=w[Me];st&&st.connect(Ce)}}const j=new D,ge=new D;function z(ne,me,Ce){j.setFromMatrixPosition(me.matrixWorld),ge.setFromMatrixPosition(Ce.matrixWorld);const Me=j.distanceTo(ge),st=me.projectionMatrix.elements,$e=Ce.projectionMatrix.elements,ot=st[14]/(st[10]-1),it=st[14]/(st[10]+1),he=(st[9]+1)/st[5],N=(st[9]-1)/st[5],Ee=(st[8]-1)/st[0],we=($e[8]+1)/$e[0],_e=ot*Ee,Ae=ot*we,Je=Me/(-Ee+we),Ue=Je*-Ee;if(me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ue),ne.translateZ(Je),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),st[10]===-1)ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const U=ot+Je,R=it+Je,Z=_e-Ue,oe=Ae+(Me-Ue),ue=he*it/R*U,ae=N*it/R*U;ne.projectionMatrix.makePerspective(Z,oe,ue,ae,U,R),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function se(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let me=ne.near,Ce=ne.far;M.texture!==null&&(M.depthNear>0&&(me=M.depthNear),M.depthFar>0&&(Ce=M.depthFar)),b.near=B.near=L.near=me,b.far=B.far=L.far=Ce,(C!==b.near||W!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,W=b.far);const Me=ne.parent,st=b.cameras;se(b,Me);for(let $e=0;$e<st.length;$e++)se(st[$e],Me);st.length===2?z(b,L,B):b.projectionMatrix.copy(L.projectionMatrix),te(ne,b,Me)};function te(ne,me,Ce){Ce===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(Ce.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=bo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(m===null&&v===null))return u},this.setFoveation=function(ne){u=ne,m!==null&&(m.fixedFoveation=ne),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let ce=null;function ze(ne,me){if(f=me.getViewerPose(h||a),y=me,f!==null){const Ce=f.views;v!==null&&(e.setRenderTargetFramebuffer(E,v.framebuffer),e.setRenderTarget(E));let Me=!1;Ce.length!==b.cameras.length&&(b.cameras.length=0,Me=!0);for(let $e=0;$e<Ce.length;$e++){const ot=Ce[$e];let it=null;if(v!==null)it=v.getViewport(ot);else{const N=p.getViewSubImage(m,ot);it=N.viewport,$e===0&&(e.setRenderTargetTextures(E,N.colorTexture,m.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(E))}let he=Y[$e];he===void 0&&(he=new fn,he.layers.enable($e),he.viewport=new xt,Y[$e]=he),he.matrix.fromArray(ot.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ot.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(it.x,it.y,it.width,it.height),$e===0&&(b.matrix.copy(he.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Me===!0&&b.cameras.push(he)}const st=i.enabledFeatures;if(st&&st.includes("depth-sensing")){const $e=p.getDepthInformation(Ce[0]);$e&&$e.isValid&&$e.texture&&M.init(e,$e,i.renderState)}}for(let Ce=0;Ce<w.length;Ce++){const Me=T[Ce],st=w[Ce];Me!==null&&st!==void 0&&st.update(Me,me,h||a)}ce&&ce(ne,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),y=null}const Ye=new O_;Ye.setAnimationLoop(ze),this.setAnimationLoop=function(ne){ce=ne},this.dispose=function(){}}}const os=new ri,hT=new tt;function fT(r,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,D_(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function i(x,_,E,w,T){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),p(x,_)):_.isMeshPhongMaterial?(s(x,_),f(x,_)):_.isMeshStandardMaterial?(s(x,_),m(x,_),_.isMeshPhysicalMaterial&&v(x,_,T)):_.isMeshMatcapMaterial?(s(x,_),y(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),M(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?u(x,_,E,w):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Bn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Bn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const E=e.get(_),w=E.envMap,T=E.envMapRotation;w&&(x.envMap.value=w,os.copy(T),os.x*=-1,os.y*=-1,os.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),x.envMapRotation.value.setFromMatrix4(hT.makeRotationFromEuler(os)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,E,w){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*E,x.scale.value=w*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function v(x,_,E){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,_){_.matcap&&(x.matcap.value=_.matcap)}function M(x,_){const E=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dT(r,e,t,n){let i={},s={},a=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,w){const T=w.program;n.uniformBlockBinding(E,T)}function h(E,w){let T=i[E.id];T===void 0&&(y(E),T=f(E),i[E.id]=T,E.addEventListener("dispose",x));const F=w.program;n.updateUBOMapping(E,F);const P=e.render.frame;s[E.id]!==P&&(m(E),s[E.id]=P)}function f(E){const w=p();E.__bindingPointIndex=w;const T=r.createBuffer(),F=E.__size,P=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,F,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,T),T}function p(){for(let E=0;E<c;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const w=i[E.id],T=E.uniforms,F=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let P=0,L=T.length;P<L;P++){const B=Array.isArray(T[P])?T[P]:[T[P]];for(let Y=0,b=B.length;Y<b;Y++){const C=B[Y];if(v(C,P,Y,F)===!0){const W=C.__offset,q=Array.isArray(C.value)?C.value:[C.value];let K=0;for(let le=0;le<q.length;le++){const j=q[le],ge=M(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,W+K,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,K),K+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(E,w,T,F){const P=E.value,L=w+"_"+T;if(F[L]===void 0)return typeof P=="number"||typeof P=="boolean"?F[L]=P:F[L]=P.clone(),!0;{const B=F[L];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return F[L]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function y(E){const w=E.uniforms;let T=0;const F=16;for(let L=0,B=w.length;L<B;L++){const Y=Array.isArray(w[L])?w[L]:[w[L]];for(let b=0,C=Y.length;b<C;b++){const W=Y[b],q=Array.isArray(W.value)?W.value:[W.value];for(let K=0,le=q.length;K<le;K++){const j=q[K],ge=M(j),z=T%F,se=z%ge.boundary,te=z+se;T+=se,te!==0&&F-te<ge.storage&&(T+=F-te),W.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=ge.storage}}}const P=T%F;return P>0&&(T+=F-P),E.__size=T,E.__cache={},this}function M(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function x(E){const w=E.target;w.removeEventListener("dispose",x);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:u,update:h,dispose:_}}class G_{constructor(e={}){const{canvas:t=R_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),y=new Int32Array(4);let M=null,x=null;const _=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=Gi,this.toneMappingExposure=1;const w=this;let T=!1,F=0,P=0,L=null,B=-1,Y=null;const b=new xt,C=new xt;let W=null;const q=new De(0);let K=0,le=t.width,j=t.height,ge=1,z=null,se=null;const te=new xt(0,0,le,j),ce=new xt(0,0,le,j);let ze=!1;const Ye=new il;let ne=!1,me=!1;const Ce=new tt,Me=new tt,st=new D,$e=new xt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function he(){return L===null?ge:1}let N=n;function Ee(I,V){return t.getContext(I,V)}try{const I={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ka}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),N===null){const V="webgl2";if(N=Ee(V,I),N===null)throw Ee(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let we,_e,Ae,Je,Ue,U,R,Z,oe,ue,ae,qe,be,Fe,St,ye,Be,at,lt,ke,Mt,ut,Nt,H;function Ne(){we=new yE(N),we.init(),ut=new H_(N,we),_e=new dE(N,we,e,ut),Ae=new $A(N),_e.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),Je=new ME(N),Ue=new kA,U=new sT(N,we,Ae,Ue,_e,ut,Je),R=new mE(w),Z=new _E(w),oe=new RM(N),Nt=new hE(N,oe),ue=new xE(N,oe,Je,Nt),ae=new EE(N,ue,oe,Je),lt=new wE(N,_e,U),ye=new pE(Ue),qe=new zA(w,R,Z,we,_e,Nt,ye),be=new fT(w,Ue),Fe=new VA,St=new jA(we),at=new uE(w,R,Z,Ae,ae,m,u),Be=new KA(w,ae,_e),H=new dT(N,Je,_e,Ae),ke=new fE(N,we,Je),Mt=new SE(N,we,Je),Je.programs=qe.programs,w.capabilities=_e,w.extensions=we,w.properties=Ue,w.renderLists=Fe,w.shadowMap=Be,w.state=Ae,w.info=Je}Ne();const ie=new uT(w,N);this.xr=ie,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const I=we.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=we.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(I){I!==void 0&&(ge=I,this.setSize(le,j,!1))},this.getSize=function(I){return I.set(le,j)},this.setSize=function(I,V,Q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=I,j=V,t.width=Math.floor(I*ge),t.height=Math.floor(V*ge),Q===!0&&(t.style.width=I+"px",t.style.height=V+"px"),this.setViewport(0,0,I,V)},this.getDrawingBufferSize=function(I){return I.set(le*ge,j*ge).floor()},this.setDrawingBufferSize=function(I,V,Q){le=I,j=V,ge=Q,t.width=Math.floor(I*Q),t.height=Math.floor(V*Q),this.setViewport(0,0,I,V)},this.getCurrentViewport=function(I){return I.copy(b)},this.getViewport=function(I){return I.copy(te)},this.setViewport=function(I,V,Q,$){I.isVector4?te.set(I.x,I.y,I.z,I.w):te.set(I,V,Q,$),Ae.viewport(b.copy(te).multiplyScalar(ge).round())},this.getScissor=function(I){return I.copy(ce)},this.setScissor=function(I,V,Q,$){I.isVector4?ce.set(I.x,I.y,I.z,I.w):ce.set(I,V,Q,$),Ae.scissor(C.copy(ce).multiplyScalar(ge).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(I){Ae.setScissorTest(ze=I)},this.setOpaqueSort=function(I){z=I},this.setTransparentSort=function(I){se=I},this.getClearColor=function(I){return I.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(I=!0,V=!0,Q=!0){let $=0;if(I){let X=!1;if(L!==null){const Se=L.texture.format;X=Se===ch||Se===lh||Se===$a}if(X){const Se=L.texture.type,Le=Se===Ai||Se===dr||Se===To||Se===Ts||Se===sh||Se===oh,He=at.getClearColor(),Ve=at.getClearAlpha(),nt=He.r,rt=He.g,je=He.b;Le?(v[0]=nt,v[1]=rt,v[2]=je,v[3]=Ve,N.clearBufferuiv(N.COLOR,0,v)):(y[0]=nt,y[1]=rt,y[2]=je,y[3]=Ve,N.clearBufferiv(N.COLOR,0,y))}else $|=N.COLOR_BUFFER_BIT}V&&($|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Fe.dispose(),St.dispose(),Ue.dispose(),R.dispose(),Z.dispose(),ae.dispose(),Nt.dispose(),H.dispose(),qe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",fl),ie.removeEventListener("sessionend",dl),ji.stop()};function de(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const I=Je.autoReset,V=Be.enabled,Q=Be.autoUpdate,$=Be.needsUpdate,X=Be.type;Ne(),Je.autoReset=I,Be.enabled=V,Be.autoUpdate=Q,Be.needsUpdate=$,Be.type=X}function Oe(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function wt(I){const V=I.target;V.removeEventListener("dispose",wt),Gt(V)}function Gt(I){Mn(I),Ue.remove(I)}function Mn(I){const V=Ue.get(I).programs;V!==void 0&&(V.forEach(function(Q){qe.releaseProgram(Q)}),I.isShaderMaterial&&qe.releaseShaderCache(I))}this.renderBufferDirect=function(I,V,Q,$,X,Se){V===null&&(V=ot);const Le=X.isMesh&&X.matrixWorld.determinant()<0,He=Dh(I,V,Q,$,X);Ae.setMaterial($,Le);let Ve=Q.index,nt=1;if($.wireframe===!0){if(Ve=ue.getWireframeAttribute(Q),Ve===void 0)return;nt=2}const rt=Q.drawRange,je=Q.attributes.position;let Tt=rt.start*nt,Rt=(rt.start+rt.count)*nt;Se!==null&&(Tt=Math.max(Tt,Se.start*nt),Rt=Math.min(Rt,(Se.start+Se.count)*nt)),Ve!==null?(Tt=Math.max(Tt,0),Rt=Math.min(Rt,Ve.count)):je!=null&&(Tt=Math.max(Tt,0),Rt=Math.min(Rt,je.count));const Ut=Rt-Tt;if(Ut<0||Ut===1/0)return;Nt.setup(X,$,He,Q,Ve);let _t,Ke=ke;if(Ve!==null&&(_t=oe.get(Ve),Ke=Mt,Ke.setIndex(_t)),X.isMesh)$.wireframe===!0?(Ae.setLineWidth($.wireframeLinewidth*he()),Ke.setMode(N.LINES)):Ke.setMode(N.TRIANGLES);else if(X.isLine){let We=$.linewidth;We===void 0&&(We=1),Ae.setLineWidth(We*he()),X.isLineSegments?Ke.setMode(N.LINES):X.isLineLoop?Ke.setMode(N.LINE_LOOP):Ke.setMode(N.LINE_STRIP)}else X.isPoints?Ke.setMode(N.POINTS):X.isSprite&&Ke.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ke.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))Ke.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const We=X._multiDrawStarts,At=X._multiDrawCounts,ct=X._multiDrawCount,rn=Ve?oe.get(Ve).bytesPerElement:1,jn=Ue.get($).currentProgram.getUniforms();for(let Ot=0;Ot<ct;Ot++)jn.setValue(N,"_gl_DrawID",Ot),Ke.render(We[Ot]/rn,At[Ot])}else if(X.isInstancedMesh)Ke.renderInstances(Tt,Ut,X.count);else if(Q.isInstancedBufferGeometry){const We=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,At=Math.min(Q.instanceCount,We);Ke.renderInstances(Tt,Ut,At)}else Ke.render(Tt,Ut)};function Et(I,V,Q){I.transparent===!0&&I.side===zi&&I.forceSinglePass===!1?(I.side=Bn,I.needsUpdate=!0,Os(I,V,Q),I.side=hr,I.needsUpdate=!0,Os(I,V,Q),I.side=zi):Os(I,V,Q)}this.compile=function(I,V,Q=null){Q===null&&(Q=I),x=St.get(Q),x.init(V),E.push(x),Q.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),I!==Q&&I.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const $=new Set;return I.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Se=X.material;if(Se)if(Array.isArray(Se))for(let Le=0;Le<Se.length;Le++){const He=Se[Le];Et(He,Q,X),$.add(He)}else Et(Se,Q,X),$.add(Se)}),E.pop(),x=null,$},this.compileAsync=function(I,V,Q=null){const $=this.compile(I,V,Q);return new Promise(X=>{function Se(){if($.forEach(function(Le){Ue.get(Le).currentProgram.isReady()&&$.delete(Le)}),$.size===0){X(I);return}setTimeout(Se,10)}we.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let gn=null;function si(I){gn&&gn(I)}function fl(){ji.stop()}function dl(){ji.start()}const ji=new O_;ji.setAnimationLoop(si),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(I){gn=I,ie.setAnimationLoop(I),I===null?ji.stop():ji.start()},ie.addEventListener("sessionstart",fl),ie.addEventListener("sessionend",dl),this.render=function(I,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(V),V=ie.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,V,L),x=St.get(I,E.length),x.init(V),E.push(x),Me.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ye.setFromProjectionMatrix(Me),me=this.localClippingEnabled,ne=ye.init(this.clippingPlanes,me),M=Fe.get(I,_.length),M.init(),_.push(M),ie.enabled===!0&&ie.isPresenting===!0){const Se=w.xr.getDepthSensingMesh();Se!==null&&Us(Se,V,-1/0,w.sortObjects)}Us(I,V,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(z,se),it=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,it&&at.addToRenderList(M,I),this.info.render.frame++,ne===!0&&ye.beginShadows();const Q=x.state.shadowsArray;Be.render(Q,I,V),ne===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=M.opaque,X=M.transmissive;if(x.setupLights(),V.isArrayCamera){const Se=V.cameras;if(X.length>0)for(let Le=0,He=Se.length;Le<He;Le++){const Ve=Se[Le];pl($,X,I,Ve)}it&&at.render(I);for(let Le=0,He=Se.length;Le<He;Le++){const Ve=Se[Le];Ns(M,I,Ve,Ve.viewport)}}else X.length>0&&pl($,X,I,V),it&&at.render(I),Ns(M,I,V);L!==null&&(U.updateMultisampleRenderTarget(L),U.updateRenderTargetMipmap(L)),I.isScene===!0&&I.onAfterRender(w,I,V),Nt.resetDefaultState(),B=-1,Y=null,E.pop(),E.length>0?(x=E[E.length-1],ne===!0&&ye.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,_.pop(),_.length>0?M=_[_.length-1]:M=null};function Us(I,V,Q,$){if(I.visible===!1)return;if(I.layers.test(V.layers)){if(I.isGroup)Q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(V);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Ye.intersectsSprite(I)){$&&$e.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Me);const Le=ae.update(I),He=I.material;He.visible&&M.push(I,Le,He,Q,$e.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Ye.intersectsObject(I))){const Le=ae.update(I),He=I.material;if($&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),$e.copy(I.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),$e.copy(Le.boundingSphere.center)),$e.applyMatrix4(I.matrixWorld).applyMatrix4(Me)),Array.isArray(He)){const Ve=Le.groups;for(let nt=0,rt=Ve.length;nt<rt;nt++){const je=Ve[nt],Tt=He[je.materialIndex];Tt&&Tt.visible&&M.push(I,Le,Tt,Q,$e.z,je)}}else He.visible&&M.push(I,Le,He,Q,$e.z,null)}}const Se=I.children;for(let Le=0,He=Se.length;Le<He;Le++)Us(Se[Le],V,Q,$)}function Ns(I,V,Q,$){const X=I.opaque,Se=I.transmissive,Le=I.transparent;x.setupLightsView(Q),ne===!0&&ye.setGlobalState(w.clippingPlanes,Q),$&&Ae.viewport(b.copy($)),X.length>0&&Ri(X,V,Q),Se.length>0&&Ri(Se,V,Q),Le.length>0&&Ri(Le,V,Q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function pl(I,V,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[$.id]===void 0&&(x.state.transmissionRenderTarget[$.id]=new Ti(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?Lo:Ai,minFilter:Hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Se=x.state.transmissionRenderTarget[$.id],Le=$.viewport||b;Se.setSize(Le.z,Le.w);const He=w.getRenderTarget();w.setRenderTarget(Se),w.getClearColor(q),K=w.getClearAlpha(),K<1&&w.setClearColor(16777215,.5),w.clear(),it&&at.render(Q);const Ve=w.toneMapping;w.toneMapping=Gi;const nt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),x.setupLightsView($),ne===!0&&ye.setGlobalState(w.clippingPlanes,$),Ri(I,Q,$),U.updateMultisampleRenderTarget(Se),U.updateRenderTargetMipmap(Se),we.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let je=0,Tt=V.length;je<Tt;je++){const Rt=V[je],Ut=Rt.object,_t=Rt.geometry,Ke=Rt.material,We=Rt.group;if(Ke.side===zi&&Ut.layers.test($.layers)){const At=Ke.side;Ke.side=Bn,Ke.needsUpdate=!0,ml(Ut,Q,$,_t,Ke,We),Ke.side=At,Ke.needsUpdate=!0,rt=!0}}rt===!0&&(U.updateMultisampleRenderTarget(Se),U.updateRenderTargetMipmap(Se))}w.setRenderTarget(He),w.setClearColor(q,K),nt!==void 0&&($.viewport=nt),w.toneMapping=Ve}function Ri(I,V,Q){const $=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Se=I.length;X<Se;X++){const Le=I[X],He=Le.object,Ve=Le.geometry,nt=$===null?Le.material:$,rt=Le.group;He.layers.test(Q.layers)&&ml(He,V,Q,Ve,nt,rt)}}function ml(I,V,Q,$,X,Se){I.onBeforeRender(w,V,Q,$,X,Se),I.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),X.onBeforeRender(w,V,Q,$,I,Se),X.transparent===!0&&X.side===zi&&X.forceSinglePass===!1?(X.side=Bn,X.needsUpdate=!0,w.renderBufferDirect(Q,V,$,X,I,Se),X.side=hr,X.needsUpdate=!0,w.renderBufferDirect(Q,V,$,X,I,Se),X.side=zi):w.renderBufferDirect(Q,V,$,X,I,Se),I.onAfterRender(w,V,Q,$,X,Se)}function Os(I,V,Q){V.isScene!==!0&&(V=ot);const $=Ue.get(I),X=x.state.lights,Se=x.state.shadowsArray,Le=X.state.version,He=qe.getParameters(I,X.state,Se,V,Q),Ve=qe.getProgramCacheKey(He);let nt=$.programs;$.environment=I.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(I.isMeshStandardMaterial?Z:R).get(I.envMap||$.environment),$.envMapRotation=$.environment!==null&&I.envMap===null?V.environmentRotation:I.envMapRotation,nt===void 0&&(I.addEventListener("dispose",wt),nt=new Map,$.programs=nt);let rt=nt.get(Ve);if(rt!==void 0){if($.currentProgram===rt&&$.lightsStateVersion===Le)return vl(I,He),rt}else He.uniforms=qe.getUniforms(I),I.onBeforeCompile(He,w),rt=qe.acquireProgram(He,Ve),nt.set(Ve,rt),$.uniforms=He.uniforms;const je=$.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(je.clippingPlanes=ye.uniform),vl(I,He),$.needsLights=Nh(I),$.lightsStateVersion=Le,$.needsLights&&(je.ambientLightColor.value=X.state.ambient,je.lightProbe.value=X.state.probe,je.directionalLights.value=X.state.directional,je.directionalLightShadows.value=X.state.directionalShadow,je.spotLights.value=X.state.spot,je.spotLightShadows.value=X.state.spotShadow,je.rectAreaLights.value=X.state.rectArea,je.ltc_1.value=X.state.rectAreaLTC1,je.ltc_2.value=X.state.rectAreaLTC2,je.pointLights.value=X.state.point,je.pointLightShadows.value=X.state.pointShadow,je.hemisphereLights.value=X.state.hemi,je.directionalShadowMap.value=X.state.directionalShadowMap,je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,je.spotShadowMap.value=X.state.spotShadowMap,je.spotLightMatrix.value=X.state.spotLightMatrix,je.spotLightMap.value=X.state.spotLightMap,je.pointShadowMap.value=X.state.pointShadowMap,je.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=rt,$.uniformsList=null,rt}function gl(I){if(I.uniformsList===null){const V=I.currentProgram.getUniforms();I.uniformsList=cu.seqWithValue(V.seq,I.uniforms)}return I.uniformsList}function vl(I,V){const Q=Ue.get(I);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Dh(I,V,Q,$,X){V.isScene!==!0&&(V=ot),U.resetTextureUnits();const Se=V.fog,Le=$.isMeshStandardMaterial?V.environment:null,He=L===null?w.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:mr,Ve=($.isMeshStandardMaterial?Z:R).get($.envMap||Le),nt=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,rt=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),je=!!Q.morphAttributes.position,Tt=!!Q.morphAttributes.normal,Rt=!!Q.morphAttributes.color;let Ut=Gi;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ut=w.toneMapping);const _t=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ke=_t!==void 0?_t.length:0,We=Ue.get($),At=x.state.lights;if(ne===!0&&(me===!0||I!==Y)){const In=I===Y&&$.id===B;ye.setState($,I,In)}let ct=!1;$.version===We.__version?(We.needsLights&&We.lightsStateVersion!==At.state.version||We.outputColorSpace!==He||X.isBatchedMesh&&We.batching===!1||!X.isBatchedMesh&&We.batching===!0||X.isBatchedMesh&&We.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&We.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&We.instancing===!1||!X.isInstancedMesh&&We.instancing===!0||X.isSkinnedMesh&&We.skinning===!1||!X.isSkinnedMesh&&We.skinning===!0||X.isInstancedMesh&&We.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&We.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&We.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&We.instancingMorph===!1&&X.morphTexture!==null||We.envMap!==Ve||$.fog===!0&&We.fog!==Se||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ye.numPlanes||We.numIntersection!==ye.numIntersection)||We.vertexAlphas!==nt||We.vertexTangents!==rt||We.morphTargets!==je||We.morphNormals!==Tt||We.morphColors!==Rt||We.toneMapping!==Ut||We.morphTargetsCount!==Ke)&&(ct=!0):(ct=!0,We.__version=$.version);let rn=We.currentProgram;ct===!0&&(rn=Os($,V,X));let jn=!1,Ot=!1,vr=!1;const Ht=rn.getUniforms(),vi=We.uniforms;if(Ae.useProgram(rn.program)&&(jn=!0,Ot=!0,vr=!0),$.id!==B&&(B=$.id,Ot=!0),jn||Y!==I){_e.reverseDepthBuffer?(Ce.copy(I.projectionMatrix),$S(Ce),eM(Ce),Ht.setValue(N,"projectionMatrix",Ce)):Ht.setValue(N,"projectionMatrix",I.projectionMatrix),Ht.setValue(N,"viewMatrix",I.matrixWorldInverse);const In=Ht.map.cameraPosition;In!==void 0&&In.setValue(N,st.setFromMatrixPosition(I.matrixWorld)),_e.logarithmicDepthBuffer&&Ht.setValue(N,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ht.setValue(N,"isOrthographic",I.isOrthographicCamera===!0),Y!==I&&(Y=I,Ot=!0,vr=!0)}if(X.isSkinnedMesh){Ht.setOptional(N,X,"bindMatrix"),Ht.setOptional(N,X,"bindMatrixInverse");const In=X.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Ht.setValue(N,"boneTexture",In.boneTexture,U))}X.isBatchedMesh&&(Ht.setOptional(N,X,"batchingTexture"),Ht.setValue(N,"batchingTexture",X._matricesTexture,U),Ht.setOptional(N,X,"batchingIdTexture"),Ht.setValue(N,"batchingIdTexture",X._indirectTexture,U),Ht.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&Ht.setValue(N,"batchingColorTexture",X._colorsTexture,U));const _r=Q.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&lt.update(X,Q,rn),(Ot||We.receiveShadow!==X.receiveShadow)&&(We.receiveShadow=X.receiveShadow,Ht.setValue(N,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(vi.envMap.value=Ve,vi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(vi.envMapIntensity.value=V.environmentIntensity),Ot&&(Ht.setValue(N,"toneMappingExposure",w.toneMappingExposure),We.needsLights&&Uh(vi,vr),Se&&$.fog===!0&&be.refreshFogUniforms(vi,Se),be.refreshMaterialUniforms(vi,$,ge,j,x.state.transmissionRenderTarget[I.id]),cu.upload(N,gl(We),vi,U)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(cu.upload(N,gl(We),vi,U),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ht.setValue(N,"center",X.center),Ht.setValue(N,"modelViewMatrix",X.modelViewMatrix),Ht.setValue(N,"normalMatrix",X.normalMatrix),Ht.setValue(N,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const In=$.uniformsGroups;for(let Ln=0,Oh=In.length;Ln<Oh;Ln++){const _l=In[Ln];H.update(_l,rn),H.bind(_l,rn)}}return rn}function Uh(I,V){I.ambientLightColor.needsUpdate=V,I.lightProbe.needsUpdate=V,I.directionalLights.needsUpdate=V,I.directionalLightShadows.needsUpdate=V,I.pointLights.needsUpdate=V,I.pointLightShadows.needsUpdate=V,I.spotLights.needsUpdate=V,I.spotLightShadows.needsUpdate=V,I.rectAreaLights.needsUpdate=V,I.hemisphereLights.needsUpdate=V}function Nh(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,V,Q){Ue.get(I.texture).__webglTexture=V,Ue.get(I.depthTexture).__webglTexture=Q;const $=Ue.get(I);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Q===void 0,$.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,V){const Q=Ue.get(I);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(I,V=0,Q=0){L=I,F=V,P=Q;let $=!0,X=null,Se=!1,Le=!1;if(I){const Ve=Ue.get(I);if(Ve.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(Ve.__webglFramebuffer===void 0)U.setupRenderTarget(I);else if(Ve.__hasExternalTextures)U.rebindTextures(I,Ue.get(I.texture).__webglTexture,Ue.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const je=I.depthTexture;if(Ve.__boundDepthTexture!==je){if(je!==null&&Ue.has(je)&&(I.width!==je.image.width||I.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(I)}}const nt=I.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Le=!0);const rt=Ue.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(rt[V])?X=rt[V][Q]:X=rt[V],Se=!0):I.samples>0&&U.useMultisampledRTT(I)===!1?X=Ue.get(I).__webglMultisampledFramebuffer:Array.isArray(rt)?X=rt[Q]:X=rt,b.copy(I.viewport),C.copy(I.scissor),W=I.scissorTest}else b.copy(te).multiplyScalar(ge).floor(),C.copy(ce).multiplyScalar(ge).floor(),W=ze;if(Ae.bindFramebuffer(N.FRAMEBUFFER,X)&&$&&Ae.drawBuffers(I,X),Ae.viewport(b),Ae.scissor(C),Ae.setScissorTest(W),Se){const Ve=Ue.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ve.__webglTexture,Q)}else if(Le){const Ve=Ue.get(I.texture),nt=V||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ve.__webglTexture,Q||0,nt)}B=-1},this.readRenderTargetPixels=function(I,V,Q,$,X,Se,Le){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ue.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Le!==void 0&&(He=He[Le]),He){Ae.bindFramebuffer(N.FRAMEBUFFER,He);try{const Ve=I.texture,nt=Ve.format,rt=Ve.type;if(!_e.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=I.width-$&&Q>=0&&Q<=I.height-X&&N.readPixels(V,Q,$,X,ut.convert(nt),ut.convert(rt),Se)}finally{const Ve=L!==null?Ue.get(L).__webglFramebuffer:null;Ae.bindFramebuffer(N.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(I,V,Q,$,X,Se,Le){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Ue.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Le!==void 0&&(He=He[Le]),He){const Ve=I.texture,nt=Ve.format,rt=Ve.type;if(!_e.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=I.width-$&&Q>=0&&Q<=I.height-X){Ae.bindFramebuffer(N.FRAMEBUFFER,He);const je=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,je),N.bufferData(N.PIXEL_PACK_BUFFER,Se.byteLength,N.STREAM_READ),N.readPixels(V,Q,$,X,ut.convert(nt),ut.convert(rt),0);const Tt=L!==null?Ue.get(L).__webglFramebuffer:null;Ae.bindFramebuffer(N.FRAMEBUFFER,Tt);const Rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await QS(N,Rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,je),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Se),N.deleteBuffer(je),N.deleteSync(Rt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,V=null,Q=0){I.isTexture!==!0&&(lu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,I=arguments[1]);const $=Math.pow(2,-Q),X=Math.floor(I.image.width*$),Se=Math.floor(I.image.height*$),Le=V!==null?V.x:0,He=V!==null?V.y:0;U.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,Q,0,0,Le,He,X,Se),Ae.unbindTexture()},this.copyTextureToTexture=function(I,V,Q=null,$=null,X=0){I.isTexture!==!0&&(lu("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,I=arguments[1],V=arguments[2],X=arguments[3]||0,Q=null);let Se,Le,He,Ve,nt,rt;Q!==null?(Se=Q.max.x-Q.min.x,Le=Q.max.y-Q.min.y,He=Q.min.x,Ve=Q.min.y):(Se=I.image.width,Le=I.image.height,He=0,Ve=0),$!==null?(nt=$.x,rt=$.y):(nt=0,rt=0);const je=ut.convert(V.format),Tt=ut.convert(V.type);U.setTexture2D(V,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const Rt=N.getParameter(N.UNPACK_ROW_LENGTH),Ut=N.getParameter(N.UNPACK_IMAGE_HEIGHT),_t=N.getParameter(N.UNPACK_SKIP_PIXELS),Ke=N.getParameter(N.UNPACK_SKIP_ROWS),We=N.getParameter(N.UNPACK_SKIP_IMAGES),At=I.isCompressedTexture?I.mipmaps[X]:I.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,At.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,At.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,He),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,X,nt,rt,Se,Le,je,Tt,At.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,X,nt,rt,At.width,At.height,je,At.data):N.texSubImage2D(N.TEXTURE_2D,X,nt,rt,Se,Le,je,Tt,At),N.pixelStorei(N.UNPACK_ROW_LENGTH,Rt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ut),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_t),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,We),X===0&&V.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(I,V,Q=null,$=null,X=0){I.isTexture!==!0&&(lu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,$=arguments[1]||null,I=arguments[2],V=arguments[3],X=arguments[4]||0);let Se,Le,He,Ve,nt,rt,je,Tt,Rt;const Ut=I.isCompressedTexture?I.mipmaps[X]:I.image;Q!==null?(Se=Q.max.x-Q.min.x,Le=Q.max.y-Q.min.y,He=Q.max.z-Q.min.z,Ve=Q.min.x,nt=Q.min.y,rt=Q.min.z):(Se=Ut.width,Le=Ut.height,He=Ut.depth,Ve=0,nt=0,rt=0),$!==null?(je=$.x,Tt=$.y,Rt=$.z):(je=0,Tt=0,Rt=0);const _t=ut.convert(V.format),Ke=ut.convert(V.type);let We;if(V.isData3DTexture)U.setTexture3D(V,0),We=N.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)U.setTexture2DArray(V,0),We=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const At=N.getParameter(N.UNPACK_ROW_LENGTH),ct=N.getParameter(N.UNPACK_IMAGE_HEIGHT),rn=N.getParameter(N.UNPACK_SKIP_PIXELS),jn=N.getParameter(N.UNPACK_SKIP_ROWS),Ot=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ut.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ut.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,nt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,rt),I.isDataTexture||I.isData3DTexture?N.texSubImage3D(We,X,je,Tt,Rt,Se,Le,He,_t,Ke,Ut.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(We,X,je,Tt,Rt,Se,Le,He,_t,Ut.data):N.texSubImage3D(We,X,je,Tt,Rt,Se,Le,He,_t,Ke,Ut),N.pixelStorei(N.UNPACK_ROW_LENGTH,At),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct),N.pixelStorei(N.UNPACK_SKIP_PIXELS,rn),N.pixelStorei(N.UNPACK_SKIP_ROWS,jn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ot),X===0&&V.generateMipmaps&&N.generateMipmap(We),Ae.unbindTexture()},this.initRenderTarget=function(I){Ue.get(I).__webglFramebuffer===void 0&&U.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?U.setTextureCube(I,0):I.isData3DTexture?U.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?U.setTexture2DArray(I,0):U.setTexture2D(I,0),Ae.unbindTexture()},this.resetState=function(){F=0,P=0,L=null,Ae.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hh?"display-p3":"srgb",t.unpackColorSpace=Dt.workingColorSpace===el?"display-p3":"srgb"}}class ph{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new ph(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new mh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zu extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=za,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new D;class ni{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ni(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lp extends Sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let lo;const aa=new D,co=new D,uo=new D,ho=new fe,la=new fe,W_=new tt,Ic=new D,ca=new D,Lc=new D,M0=new fe,gd=new fe,w0=new fe;class X_ extends Ct{constructor(e=new Lp){if(super(),this.isSprite=!0,this.type="Sprite",lo===void 0){lo=new gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gh(t,5);lo.setIndex([0,1,2,0,2,3]),lo.setAttribute("position",new ni(n,3,0,!1)),lo.setAttribute("uv",new ni(n,2,3,!1))}this.geometry=lo,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),co.setFromMatrixScale(this.matrixWorld),W_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),uo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&co.multiplyScalar(-uo.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Dc(Ic.set(-.5,-.5,0),uo,a,co,i,s),Dc(ca.set(.5,-.5,0),uo,a,co,i,s),Dc(Lc.set(.5,.5,0),uo,a,co,i,s),M0.set(0,0),gd.set(1,0),w0.set(1,1);let c=e.ray.intersectTriangle(Ic,ca,Lc,!1,aa);if(c===null&&(Dc(ca.set(-.5,.5,0),uo,a,co,i,s),gd.set(0,1),c=e.ray.intersectTriangle(Ic,Lc,ca,!1,aa),c===null))return;const u=e.ray.origin.distanceTo(aa);u<e.near||u>e.far||t.push({distance:u,point:aa.clone(),uv:Xn.getInterpolation(aa,Ic,ca,Lc,M0,gd,w0,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Dc(r,e,t,n,i,s){ho.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(la.x=s*ho.x-i*ho.y,la.y=i*ho.x+s*ho.y):la.copy(ho),r.copy(e),r.x+=la.x,r.y+=la.y,r.applyMatrix4(W_)}const Uc=new D,E0=new D;class Y_ extends Ct{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Uc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Uc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Uc.setFromMatrixPosition(e.matrixWorld),E0.setFromMatrixPosition(this.matrixWorld);const n=Uc.distanceTo(E0)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const A0=new D,T0=new xt,b0=new xt,pT=new D,C0=new tt,Nc=new D,vd=new mn,R0=new tt,_d=new Do;class q_ extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qd,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nc),this.boundingBox.expandByPoint(Nc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nc),this.boundingSphere.expandByPoint(Nc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vd.copy(this.boundingSphere),vd.applyMatrix4(i),e.ray.intersectsSphere(vd)!==!1&&(R0.copy(i).invert(),_d.copy(e.ray).applyMatrix4(R0),!(this.boundingBox!==null&&_d.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_d)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===d_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;T0.fromBufferAttribute(i.attributes.skinIndex,e),b0.fromBufferAttribute(i.attributes.skinWeight,e),A0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=b0.getComponent(s);if(a!==0){const c=T0.getComponent(s);C0.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(pT.copy(A0).applyMatrix4(C0),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Dp extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wi extends Yt{constructor(e=null,t=1,n=1,i,s,a,c,u,h=dn,f=dn,p,m){super(null,a,c,u,h,f,i,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const P0=new tt,mT=new tt;class vh{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const c=e[s]?e[s].matrixWorld:mT;P0.multiplyMatrices(c,t[s]),P0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new vh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Wi(t,e,e,Pn,Yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Dp),this.bones.push(a),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Ro extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fo=new tt,I0=new tt,Oc=[],L0=new pn,gT=new tt,ua=new Qt,ha=new mn;class j_ extends Qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ro(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fo),L0.copy(e.boundingBox).applyMatrix4(fo),this.boundingBox.union(L0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fo),ha.copy(e.boundingSphere).applyMatrix4(fo),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[a+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),e.ray.intersectsSphere(ha)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,fo),I0.multiplyMatrices(n,fo),ua.matrixWorld=I0,ua.raycast(e,Oc);for(let a=0,c=Oc.length;a<c;a++){const u=Oc[a];u.instanceId=s,u.object=this,t.push(u)}Oc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ro(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wi(new Float32Array(i*this.count),i,this.count,ah,Yn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const c=this.geometry.morphTargetsRelative?1:1-a,u=i*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function vT(r,e){return r.z-e.z}function _T(r,e){return e.z-r.z}class yT{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,s=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const a=i[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const Dr=new tt,yd=new tt,xT=new tt,ST=new De(1,1,1),D0=new tt,xd=new il,Fc=new pn,as=new mn,fa=new D,U0=new D,MT=new D,Sd=new yT,Rn=new Qt,Bc=[];function wT(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class Z_ extends Qt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new gt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Wi(t,e,e,Pn,Yn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Wi(t,e,e,$a,dr);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Wi(t,e,e,Pn,Yn);n.colorSpace=Dt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:c,itemSize:u,normalized:h}=a,f=new c.constructor(n*u),p=new Ft(f,u,h);t.setAttribute(s,p)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Ft(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Dr),this.getBoundingBoxAt(s,Fc).applyMatrix4(Dr),e.union(Fc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Dr),this.getBoundingSphereAt(s,as).applyMatrix4(Dr),e.union(as)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(i=this._availableInstanceIds.pop(),this._drawInfo[i]=n):(i=this._drawInfo.length,this._drawInfo.push(n));const s=this._matricesTexture,a=s.image.data;xT.toArray(a,i*16),s.needsUpdate=!0;const c=this._colorsTexture;return c&&(ST.toArray(c.image.data,i*4),c.needsUpdate=!0),i}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,c=this._drawRanges,u=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),f=h!==null;if(f&&(n===-1?i.indexCount=h.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const p=this._geometryCount;return this._geometryCount++,a.push(i),c.push({start:f?i.indexStart:i.vertexStart,count:-1}),u.push({boxInitialized:!1,box:new pn,sphereInitialized:!1,sphere:new mn}),this.setGeometryAt(p,e),p}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),c=this._reservedRanges[e];if(i&&a.count>c.indexCount||t.attributes.position.count>c.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.vertexCount;for(const v in n.attributes){const y=t.getAttribute(v),M=n.getAttribute(v);wT(y,M,u);const x=y.itemSize;for(let _=y.count,E=h;_<E;_++){const w=u+_;for(let T=0;T<x;T++)M.setComponent(w,T,0)}M.needsUpdate=!0,M.addUpdateRange(u*x,h*x)}if(i){const v=c.indexStart;for(let y=0;y<a.count;y++)s.setX(v+y,u+a.getX(y));for(let y=a.count,M=c.indexCount;y<M;y++)s.setX(v+y,u);s.needsUpdate=!0,s.addUpdateRange(v,c.indexCount)}const f=this._bounds[e];t.boundingBox!==null?(f.box.copy(t.boundingBox),f.boxInitialized=!0):f.boxInitialized=!1,t.boundingSphere!==null?(f.sphere.copy(t.boundingSphere),f.sphereInitialized=!0):f.sphereInitialized=!1;const p=this._drawRanges[e],m=t.getAttribute("position");return p.count=i?a.count:m.count,this._visibilityChanged=!0,e}deleteInstance(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,s=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const a=s.index,c=s.attributes.position,u=this._drawRanges[e];for(let h=u.start,f=u.start+u.count;h<f;h++){let p=h;a&&(p=a.getX(p)),i.expandByPoint(fa.fromBufferAttribute(c,p))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,s=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,Fc),Fc.getCenter(i.center);const a=s.index,c=s.attributes.position,u=this._drawRanges[e];let h=0;for(let f=u.start,p=u.start+u.count;f<p;f++){let m=f;a&&(m=a.getX(m)),fa.fromBufferAttribute(c,m),h=Math.max(h,i.center.distanceToSquared(fa))}i.radius=Math.sqrt(h),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||t<0||t>=this._geometryCount?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._drawRanges[e];return t.start=n.start,t.count=n.count,t}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,s=this.matrixWorld,a=this.geometry;Rn.material=this.material,Rn.geometry.index=a.index,Rn.geometry.attributes=a.attributes,Rn.geometry.boundingBox===null&&(Rn.geometry.boundingBox=new pn),Rn.geometry.boundingSphere===null&&(Rn.geometry.boundingSphere=new mn);for(let c=0,u=n.length;c<u;c++){if(!n[c].visible||!n[c].active)continue;const h=n[c].geometryIndex,f=i[h];Rn.geometry.setDrawRange(f.start,f.count),this.getMatrixAt(c,Rn.matrixWorld).premultiply(s),this.getBoundingBoxAt(h,Rn.geometry.boundingBox),this.getBoundingSphereAt(h,Rn.geometry.boundingSphere),Rn.raycast(e,Bc);for(let p=0,m=Bc.length;p<m;p++){const v=Bc[p];v.object=this,v.batchId=c,t.push(v)}Bc.length=0}Rn.material=null,Rn.geometry.index=null,Rn.geometry.attributes={},Rn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),c=a===null?1:a.array.BYTES_PER_ELEMENT,u=this._drawInfo,h=this._multiDrawStarts,f=this._multiDrawCounts,p=this._drawRanges,m=this.perObjectFrustumCulled,v=this._indirectTexture,y=v.image.data;m&&(D0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),xd.setFromProjectionMatrix(D0,e.coordinateSystem));let M=0;if(this.sortObjects){yd.copy(this.matrixWorld).invert(),fa.setFromMatrixPosition(n.matrixWorld).applyMatrix4(yd),U0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(yd);for(let E=0,w=u.length;E<w;E++)if(u[E].visible&&u[E].active){const T=u[E].geometryIndex;this.getMatrixAt(E,Dr),this.getBoundingSphereAt(T,as).applyMatrix4(Dr);let F=!1;if(m&&(F=!xd.intersectsSphere(as)),!F){const P=MT.subVectors(as.center,fa).dot(U0);Sd.push(p[T],P,E)}}const x=Sd.list,_=this.customSort;_===null?x.sort(s.transparent?_T:vT):_.call(this,x,n);for(let E=0,w=x.length;E<w;E++){const T=x[E];h[M]=T.start*c,f[M]=T.count,y[M]=T.index,M++}Sd.reset()}else for(let x=0,_=u.length;x<_;x++)if(u[x].visible&&u[x].active){const E=u[x].geometryIndex;let w=!1;if(m&&(this.getMatrixAt(x,Dr),this.getBoundingSphereAt(E,as).applyMatrix4(Dr),w=!xd.intersectsSphere(as)),!w){const T=p[E];h[M]=T.start*c,f[M]=T.count,y[M]=x,M++}}v.needsUpdate=!0,this._multiDrawCount=M,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,a){this.onBeforeRender(e,null,i,s,a)}}class kn extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ju=new D,Ku=new D,N0=new tt,da=new Do,zc=new mn,Md=new D,O0=new D;let kr=class extends Ct{constructor(e=new gt,t=new kn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ju.fromBufferAttribute(t,i-1),Ku.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ju.distanceTo(Ku);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zc.copy(n.boundingSphere),zc.applyMatrix4(i),zc.radius+=s,e.ray.intersectsSphere(zc)===!1)return;N0.copy(i).invert(),da.copy(e.ray).applyMatrix4(N0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const v=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let M=v,x=y-1;M<x;M+=h){const _=f.getX(M),E=f.getX(M+1),w=kc(this,e,da,u,_,E);w&&t.push(w)}if(this.isLineLoop){const M=f.getX(y-1),x=f.getX(v),_=kc(this,e,da,u,M,x);_&&t.push(_)}}else{const v=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let M=v,x=y-1;M<x;M+=h){const _=kc(this,e,da,u,M,M+1);_&&t.push(_)}if(this.isLineLoop){const M=kc(this,e,da,u,y-1,v);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function kc(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(Ju.fromBufferAttribute(a,i),Ku.fromBufferAttribute(a,s),t.distanceSqToSegment(Ju,Ku,Md,O0)>n)return;Md.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(Md);if(!(u<e.near||u>e.far))return{distance:u,point:O0.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const F0=new D,B0=new D;class qi extends kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)F0.fromBufferAttribute(t,i),B0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+F0.distanceTo(B0);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class J_ extends kr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Up extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const z0=new tt,$d=new Do,Hc=new mn,Vc=new D;class K_ extends Ct{constructor(e=new gt,t=new Up){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hc.copy(n.boundingSphere),Hc.applyMatrix4(i),Hc.radius+=s,e.ray.intersectsSphere(Hc)===!1)return;z0.copy(i).invert(),$d.copy(e.ray).applyMatrix4(z0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let y=m,M=v;y<M;y++){const x=h.getX(y);Vc.fromBufferAttribute(p,x),k0(Vc,x,u,i,e,t,this)}}else{const m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let y=m,M=v;y<M;y++)Vc.fromBufferAttribute(p,y),k0(Vc,y,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function k0(r,e,t,n,i,s,a){const c=$d.distanceSqToPoint(r);if(c<t){const u=new D;$d.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ET extends Yt{constructor(e,t,n,i,s,a,c,u,h){super(e,t,n,i,s,a,c,u,h),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:nn,this.magFilter=s!==void 0?s:nn,this.generateMipmaps=!1;const f=this;function p(){f.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class AT extends Yt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=dn,this.minFilter=dn,this.generateMipmaps=!1,this.needsUpdate=!0}}class _h extends Yt{constructor(e,t,n,i,s,a,c,u,h,f,p,m){super(null,a,c,u,h,f,i,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class TT extends _h{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=mi,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bT extends _h{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,fr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Q_ extends Yt{constructor(e,t,n,i,s,a,c,u,h){super(e,t,n,i,s,a,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-a,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===a)return i/(s-1);const f=n[i],m=n[i+1]-f,v=(a-f)/m;return(i+v)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),c=this.getPoint(s),u=t||(a.isVector2?new fe:new D);return u.copy(c).sub(a).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],s=[],a=[],c=new D,u=new tt;for(let v=0;v<=e;v++){const y=v/e;i[v]=this.getTangentAt(y,new D)}s[0]=new D,a[0]=new D;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),a[0].crossVectors(i[0],s[0]);for(let v=1;v<=e;v++){if(s[v]=s[v-1].clone(),a[v]=a[v-1].clone(),c.crossVectors(i[v-1],i[v]),c.length()>Number.EPSILON){c.normalize();const y=Math.acos(Zt(i[v-1].dot(i[v]),-1,1));s[v].applyMatrix4(u.makeRotationAxis(c,y))}a[v].crossVectors(i[v],s[v])}if(t===!0){let v=Math.acos(Zt(s[0].dot(s[e]),-1,1));v/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(v=-v);for(let y=1;y<=e;y++)s[y].applyMatrix4(u.makeRotationAxis(i[y],v*y)),a[y].crossVectors(i[y],s[y])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yh extends bi{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new fe){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,v=h-this.aY;u=m*f-v*p+this.aX,h=m*p+v*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $_ extends yh{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Np(){let r=0,e=0,t=0,n=0;function i(s,a,c,u){r=s,e=c,t=-3*s+3*a-2*c-u,n=2*s-2*a+c+u}return{initCatmullRom:function(s,a,c,u,h){i(a,c,h*(c-s),h*(u-a))},initNonuniformCatmullRom:function(s,a,c,u,h,f,p){let m=(a-s)/h-(c-s)/(h+f)+(c-a)/f,v=(c-a)/f-(u-a)/(f+p)+(u-c)/p;m*=f,v*=f,i(a,c,m,v)},calc:function(s){const a=s*s,c=a*s;return r+e*s+t*a+n*c}}}const Gc=new D,wd=new Np,Ed=new Np,Ad=new Np;class ey extends bi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let c=Math.floor(a),u=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,f;this.closed||c>0?h=i[(c-1)%s]:(Gc.subVectors(i[0],i[1]).add(i[0]),h=Gc);const p=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?f=i[(c+2)%s]:(Gc.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=Gc),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(p),v),M=Math.pow(p.distanceToSquared(m),v),x=Math.pow(m.distanceToSquared(f),v);M<1e-4&&(M=1),y<1e-4&&(y=M),x<1e-4&&(x=M),wd.initNonuniformCatmullRom(h.x,p.x,m.x,f.x,y,M,x),Ed.initNonuniformCatmullRom(h.y,p.y,m.y,f.y,y,M,x),Ad.initNonuniformCatmullRom(h.z,p.z,m.z,f.z,y,M,x)}else this.curveType==="catmullrom"&&(wd.initCatmullRom(h.x,p.x,m.x,f.x,this.tension),Ed.initCatmullRom(h.y,p.y,m.y,f.y,this.tension),Ad.initCatmullRom(h.z,p.z,m.z,f.z,this.tension));return n.set(wd.calc(u),Ed.calc(u),Ad.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function H0(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+a)*u+(-3*t+3*n-2*s-a)*c+s*r+t}function CT(r,e){const t=1-r;return t*t*e}function RT(r,e){return 2*(1-r)*r*e}function PT(r,e){return r*r*e}function Ca(r,e,t,n){return CT(r,e)+RT(r,t)+PT(r,n)}function IT(r,e){const t=1-r;return t*t*t*e}function LT(r,e){const t=1-r;return 3*t*t*r*e}function DT(r,e){return 3*(1-r)*r*r*e}function UT(r,e){return r*r*r*e}function Ra(r,e,t,n,i){return IT(r,e)+LT(r,t)+DT(r,n)+UT(r,i)}class Op extends bi{constructor(e=new fe,t=new fe,n=new fe,i=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new fe){const n=t,i=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(Ra(e,i.x,s.x,a.x,c.x),Ra(e,i.y,s.y,a.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ty extends bi{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(Ra(e,i.x,s.x,a.x,c.x),Ra(e,i.y,s.y,a.y,c.y),Ra(e,i.z,s.z,a.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fp extends bi{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ny extends bi{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bp extends bi{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ca(e,i.x,s.x,a.x),Ca(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zp extends bi{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ca(e,i.x,s.x,a.x),Ca(e,i.y,s.y,a.y),Ca(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kp extends bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),c=s-a,u=i[a===0?a:a-1],h=i[a],f=i[a>i.length-2?i.length-1:a+1],p=i[a>i.length-3?i.length-1:a+2];return n.set(H0(c,u.x,h.x,f.x,p.x),H0(c,u.y,h.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new fe().fromArray(i))}return this}}var Qu=Object.freeze({__proto__:null,ArcCurve:$_,CatmullRomCurve3:ey,CubicBezierCurve:Op,CubicBezierCurve3:ty,EllipseCurve:yh,LineCurve:Fp,LineCurve3:ny,QuadraticBezierCurve:Bp,QuadraticBezierCurve3:zp,SplineCurve:kp});class iy extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-a/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],c=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,u=a.getPoints(c);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Qu[i.type]().fromJSON(i))}return this}}class Va extends iy{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fp(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Bp(this.currentPoint.clone(),new fe(e,t),new fe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const c=new Op(this.currentPoint.clone(),new fe(e,t),new fe(n,i),new fe(s,a));return this.curves.push(c),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new kp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,c,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,s,a,c,u),this}absellipse(e,t,n,i,s,a,c,u){const h=new yh(e,t,n,i,s,a,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class sl extends gt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Zt(i,0,Math.PI*2);const s=[],a=[],c=[],u=[],h=[],f=1/t,p=new D,m=new fe,v=new D,y=new D,M=new D;let x=0,_=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,v.x=_*1,v.y=-x,v.z=_*0,M.copy(v),v.normalize(),u.push(v.x,v.y,v.z);break;case e.length-1:u.push(M.x,M.y,M.z);break;default:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,v.x=_*1,v.y=-x,v.z=_*0,y.copy(v),v.x+=M.x,v.y+=M.y,v.z+=M.z,v.normalize(),u.push(v.x,v.y,v.z),M.copy(y)}for(let E=0;E<=t;E++){const w=n+E*f*i,T=Math.sin(w),F=Math.cos(w);for(let P=0;P<=e.length-1;P++){p.x=e[P].x*T,p.y=e[P].y,p.z=e[P].x*F,a.push(p.x,p.y,p.z),m.x=E/t,m.y=P/(e.length-1),c.push(m.x,m.y);const L=u[3*P+0]*T,B=u[3*P+1],Y=u[3*P+0]*F;h.push(L,B,Y)}}for(let E=0;E<t;E++)for(let w=0;w<e.length-1;w++){const T=w+E*e.length,F=T,P=T+e.length,L=T+e.length+1,B=T+1;s.push(F,P,B),s.push(L,B,P)}this.setIndex(s),this.setAttribute("position",new Xe(a,3)),this.setAttribute("uv",new Xe(c,2)),this.setAttribute("normal",new Xe(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.points,e.segments,e.phiStart,e.phiLength)}}class xh extends sl{constructor(e=1,t=1,n=4,i=8){const s=new Va;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new xh(e.radius,e.length,e.capSegments,e.radialSegments)}}class Sh extends gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],c=[],u=[],h=new D,f=new fe;a.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const v=n+p/t*i;h.x=e*Math.cos(v),h.y=e*Math.sin(v),a.push(h.x,h.y,h.z),c.push(0,0,1),f.x=(a[m]/e+1)/2,f.y=(a[m+1]/e+1)/2,u.push(f.x,f.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Oo extends gt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],m=[],v=[];let y=0;const M=[],x=n/2;let _=0;E(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(m,3)),this.setAttribute("uv",new Xe(v,2));function E(){const T=new D,F=new D;let P=0;const L=(t-e)/n;for(let B=0;B<=s;B++){const Y=[],b=B/s,C=b*(t-e)+e;for(let W=0;W<=i;W++){const q=W/i,K=q*u+c,le=Math.sin(K),j=Math.cos(K);F.x=C*le,F.y=-b*n+x,F.z=C*j,p.push(F.x,F.y,F.z),T.set(le,L,j).normalize(),m.push(T.x,T.y,T.z),v.push(q,1-b),Y.push(y++)}M.push(Y)}for(let B=0;B<i;B++)for(let Y=0;Y<s;Y++){const b=M[Y][B],C=M[Y+1][B],W=M[Y+1][B+1],q=M[Y][B+1];e>0&&(f.push(b,C,q),P+=3),t>0&&(f.push(C,W,q),P+=3)}h.addGroup(_,P,0),_+=P}function w(T){const F=y,P=new fe,L=new D;let B=0;const Y=T===!0?e:t,b=T===!0?1:-1;for(let W=1;W<=i;W++)p.push(0,x*b,0),m.push(0,b,0),v.push(.5,.5),y++;const C=y;for(let W=0;W<=i;W++){const K=W/i*u+c,le=Math.cos(K),j=Math.sin(K);L.x=Y*j,L.y=x*b,L.z=Y*le,p.push(L.x,L.y,L.z),m.push(0,b,0),P.x=le*.5+.5,P.y=j*.5*b+.5,v.push(P.x,P.y),y++}for(let W=0;W<i;W++){const q=F+W,K=C+W;T===!0?f.push(K,K+1,q):f.push(K+1,K,q),B+=3}h.addGroup(_,B,T===!0?1:2),_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mh extends Oo{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,c=Math.PI*2){super(0,e,t,n,i,s,a,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:c}}static fromJSON(e){return new Mh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wr extends gt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];c(i),h(n),f(),this.setAttribute("position",new Xe(s,3)),this.setAttribute("normal",new Xe(s.slice(),3)),this.setAttribute("uv",new Xe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const w=new D,T=new D,F=new D;for(let P=0;P<t.length;P+=3)v(t[P+0],w),v(t[P+1],T),v(t[P+2],F),u(w,T,F,E)}function u(E,w,T,F){const P=F+1,L=[];for(let B=0;B<=P;B++){L[B]=[];const Y=E.clone().lerp(T,B/P),b=w.clone().lerp(T,B/P),C=P-B;for(let W=0;W<=C;W++)W===0&&B===P?L[B][W]=Y:L[B][W]=Y.clone().lerp(b,W/C)}for(let B=0;B<P;B++)for(let Y=0;Y<2*(P-B)-1;Y++){const b=Math.floor(Y/2);Y%2===0?(m(L[B][b+1]),m(L[B+1][b]),m(L[B][b])):(m(L[B][b+1]),m(L[B+1][b+1]),m(L[B+1][b]))}}function h(E){const w=new D;for(let T=0;T<s.length;T+=3)w.x=s[T+0],w.y=s[T+1],w.z=s[T+2],w.normalize().multiplyScalar(E),s[T+0]=w.x,s[T+1]=w.y,s[T+2]=w.z}function f(){const E=new D;for(let w=0;w<s.length;w+=3){E.x=s[w+0],E.y=s[w+1],E.z=s[w+2];const T=x(E)/2/Math.PI+.5,F=_(E)/Math.PI+.5;a.push(T,1-F)}y(),p()}function p(){for(let E=0;E<a.length;E+=6){const w=a[E+0],T=a[E+2],F=a[E+4],P=Math.max(w,T,F),L=Math.min(w,T,F);P>.9&&L<.1&&(w<.2&&(a[E+0]+=1),T<.2&&(a[E+2]+=1),F<.2&&(a[E+4]+=1))}}function m(E){s.push(E.x,E.y,E.z)}function v(E,w){const T=E*3;w.x=e[T+0],w.y=e[T+1],w.z=e[T+2]}function y(){const E=new D,w=new D,T=new D,F=new D,P=new fe,L=new fe,B=new fe;for(let Y=0,b=0;Y<s.length;Y+=9,b+=6){E.set(s[Y+0],s[Y+1],s[Y+2]),w.set(s[Y+3],s[Y+4],s[Y+5]),T.set(s[Y+6],s[Y+7],s[Y+8]),P.set(a[b+0],a[b+1]),L.set(a[b+2],a[b+3]),B.set(a[b+4],a[b+5]),F.copy(E).add(w).add(T).divideScalar(3);const C=x(F);M(P,b+0,E,C),M(L,b+2,w,C),M(B,b+4,T,C)}}function M(E,w,T,F){F<0&&E.x===1&&(a[w]=E.x-1),T.x===0&&T.z===0&&(a[w]=F/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.vertices,e.indices,e.radius,e.details)}}class wh extends Wr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wh(e.radius,e.detail)}}const Wc=new D,Xc=new D,Td=new D,Yc=new Xn;class ry extends gt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Ms*t),a=e.getIndex(),c=e.getAttribute("position"),u=a?a.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),m={},v=[];for(let y=0;y<u;y+=3){a?(h[0]=a.getX(y),h[1]=a.getX(y+1),h[2]=a.getX(y+2)):(h[0]=y,h[1]=y+1,h[2]=y+2);const{a:M,b:x,c:_}=Yc;if(M.fromBufferAttribute(c,h[0]),x.fromBufferAttribute(c,h[1]),_.fromBufferAttribute(c,h[2]),Yc.getNormal(Td),p[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,p[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,p[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let E=0;E<3;E++){const w=(E+1)%3,T=p[E],F=p[w],P=Yc[f[E]],L=Yc[f[w]],B=`${T}_${F}`,Y=`${F}_${T}`;Y in m&&m[Y]?(Td.dot(m[Y].normal)<=s&&(v.push(P.x,P.y,P.z),v.push(L.x,L.y,L.z)),m[Y]=null):B in m||(m[B]={index0:h[E],index1:h[w],normal:Td.clone()})}}for(const y in m)if(m[y]){const{index0:M,index1:x}=m[y];Wc.fromBufferAttribute(c,M),Xc.fromBufferAttribute(c,x),v.push(Wc.x,Wc.y,Wc.z),v.push(Xc.x,Xc.y,Xc.z)}this.setAttribute("position",new Xe(v,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Br extends Va{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Va().fromJSON(i))}return this}}const NT={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=sy(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let c,u,h,f,p,m,v;if(n&&(s=kT(r,e,s,t)),r.length>80*t){c=h=r[0],u=f=r[1];for(let y=t;y<i;y+=t)p=r[y],m=r[y+1],p<c&&(c=p),m<u&&(u=m),p>h&&(h=p),m>f&&(f=m);v=Math.max(h-c,f-u),v=v!==0?32767/v:0}return Ga(s,a,t,c,u,v,0),a}};function sy(r,e,t,n,i){let s,a;if(i===KT(r,e,t,n)>0)for(s=e;s<t;s+=n)a=V0(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=V0(s,r[s],r[s+1],a);return a&&Eh(a,a.next)&&(Xa(a),a=a.next),a}function Cs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Eh(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Xa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ga(r,e,t,n,i,s,a){if(!r)return;!a&&s&&XT(r,n,i,s);let c=r,u,h;for(;r.prev!==r.next;){if(u=r.prev,h=r.next,s?FT(r,n,i,s):OT(r)){e.push(u.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),Xa(r),r=h.next,c=h.next;continue}if(r=h,r===c){a?a===1?(r=BT(Cs(r),e,t),Ga(r,e,t,n,i,s,2)):a===2&&zT(r,e,t,n,i,s):Ga(Cs(r),e,t,n,i,s,1);break}}}function OT(r){const e=r.prev,t=r,n=r.next;if(Xt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,c=e.y,u=t.y,h=n.y,f=i<s?i<a?i:a:s<a?s:a,p=c<u?c<h?c:h:u<h?u:h,m=i>s?i>a?i:a:s>a?s:a,v=c>u?c>h?c:h:u>h?u:h;let y=n.next;for(;y!==e;){if(y.x>=f&&y.x<=m&&y.y>=p&&y.y<=v&&wo(i,c,s,u,a,h,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function FT(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Xt(i,s,a)>=0)return!1;const c=i.x,u=s.x,h=a.x,f=i.y,p=s.y,m=a.y,v=c<u?c<h?c:h:u<h?u:h,y=f<p?f<m?f:m:p<m?p:m,M=c>u?c>h?c:h:u>h?u:h,x=f>p?f>m?f:m:p>m?p:m,_=ep(v,y,e,t,n),E=ep(M,x,e,t,n);let w=r.prevZ,T=r.nextZ;for(;w&&w.z>=_&&T&&T.z<=E;){if(w.x>=v&&w.x<=M&&w.y>=y&&w.y<=x&&w!==i&&w!==a&&wo(c,f,u,p,h,m,w.x,w.y)&&Xt(w.prev,w,w.next)>=0||(w=w.prevZ,T.x>=v&&T.x<=M&&T.y>=y&&T.y<=x&&T!==i&&T!==a&&wo(c,f,u,p,h,m,T.x,T.y)&&Xt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;w&&w.z>=_;){if(w.x>=v&&w.x<=M&&w.y>=y&&w.y<=x&&w!==i&&w!==a&&wo(c,f,u,p,h,m,w.x,w.y)&&Xt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;T&&T.z<=E;){if(T.x>=v&&T.x<=M&&T.y>=y&&T.y<=x&&T!==i&&T!==a&&wo(c,f,u,p,h,m,T.x,T.y)&&Xt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function BT(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Eh(i,s)&&oy(i,n,n.next,s)&&Wa(i,s)&&Wa(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Xa(n),Xa(n.next),n=r=s),n=n.next}while(n!==r);return Cs(n)}function zT(r,e,t,n,i,s){let a=r;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&jT(a,c)){let u=ay(a,c);a=Cs(a,a.next),u=Cs(u,u.next),Ga(a,e,t,n,i,s,0),Ga(u,e,t,n,i,s,0);return}c=c.next}a=a.next}while(a!==r)}function kT(r,e,t,n){const i=[];let s,a,c,u,h;for(s=0,a=e.length;s<a;s++)c=e[s]*n,u=s<a-1?e[s+1]*n:r.length,h=sy(r,c,u,n,!1),h===h.next&&(h.steiner=!0),i.push(qT(h));for(i.sort(HT),s=0;s<i.length;s++)t=VT(i[s],t);return t}function HT(r,e){return r.x-e.x}function VT(r,e){const t=GT(r,e);if(!t)return e;const n=ay(t,r);return Cs(n,n.next),Cs(t,t.next)}function GT(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const m=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,i=t.x<t.next.x?t:t.next,m===s))return i}t=t.next}while(t!==e);if(!i)return null;const c=i,u=i.x,h=i.y;let f=1/0,p;t=i;do s>=t.x&&t.x>=u&&s!==t.x&&wo(a<h?s:n,a,u,h,a<h?n:s,a,t.x,t.y)&&(p=Math.abs(a-t.y)/(s-t.x),Wa(t,r)&&(p<f||p===f&&(t.x>i.x||t.x===i.x&&WT(i,t)))&&(i=t,f=p)),t=t.next;while(t!==c);return i}function WT(r,e){return Xt(r.prev,r,e.prev)<0&&Xt(e.next,r,r.next)<0}function XT(r,e,t,n){let i=r;do i.z===0&&(i.z=ep(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,YT(i)}function YT(r){let e,t,n,i,s,a,c,u,h=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,c=0,e=0;e<h&&(c++,n=n.nextZ,!!n);e++);for(u=h;c>0||u>0&&n;)c!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,c--):(i=n,n=n.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,h*=2}while(a>1);return r}function ep(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function qT(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function wo(r,e,t,n,i,s,a,c){return(i-a)*(e-c)>=(r-a)*(s-c)&&(r-a)*(n-c)>=(t-a)*(e-c)&&(t-a)*(s-c)>=(i-a)*(n-c)}function jT(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!ZT(r,e)&&(Wa(r,e)&&Wa(e,r)&&JT(r,e)&&(Xt(r.prev,r,e.prev)||Xt(r,e.prev,e))||Eh(r,e)&&Xt(r.prev,r,r.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Eh(r,e){return r.x===e.x&&r.y===e.y}function oy(r,e,t,n){const i=jc(Xt(r,e,t)),s=jc(Xt(r,e,n)),a=jc(Xt(t,n,r)),c=jc(Xt(t,n,e));return!!(i!==s&&a!==c||i===0&&qc(r,t,e)||s===0&&qc(r,n,e)||a===0&&qc(t,r,n)||c===0&&qc(t,e,n))}function qc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function jc(r){return r>0?1:r<0?-1:0}function ZT(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&oy(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Wa(r,e){return Xt(r.prev,r,r.next)<0?Xt(r,e,r.next)>=0&&Xt(r,r.prev,e)>=0:Xt(r,e,r.prev)<0||Xt(r,r.next,e)<0}function JT(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function ay(r,e){const t=new tp(r.i,r.x,r.y),n=new tp(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function V0(r,e,t,n){const i=new tp(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function tp(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function KT(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Xi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Xi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];G0(e),W0(n,e);let a=e.length;t.forEach(G0);for(let u=0;u<t.length;u++)i.push(a),a+=t[u].length,W0(n,t[u]);const c=NT.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function G0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function W0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Ah extends gt{constructor(e=new Br([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];a(h)}this.setAttribute("position",new Xe(i,3)),this.setAttribute("uv",new Xe(s,2)),this.computeVertexNormals();function a(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,v=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:v-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:QT;let w,T=!1,F,P,L,B;_&&(w=_.getSpacedPoints(f),T=!0,m=!1,F=_.computeFrenetFrames(f,!1),P=new D,L=new D,B=new D),m||(x=0,v=0,y=0,M=0);const Y=c.extractPoints(h);let b=Y.shape;const C=Y.holes;if(!Xi.isClockWise(b)){b=b.reverse();for(let he=0,N=C.length;he<N;he++){const Ee=C[he];Xi.isClockWise(Ee)&&(C[he]=Ee.reverse())}}const q=Xi.triangulateShape(b,C),K=b;for(let he=0,N=C.length;he<N;he++){const Ee=C[he];b=b.concat(Ee)}function le(he,N,Ee){return N||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(N,Ee)}const j=b.length,ge=q.length;function z(he,N,Ee){let we,_e,Ae;const Je=he.x-N.x,Ue=he.y-N.y,U=Ee.x-he.x,R=Ee.y-he.y,Z=Je*Je+Ue*Ue,oe=Je*R-Ue*U;if(Math.abs(oe)>Number.EPSILON){const ue=Math.sqrt(Z),ae=Math.sqrt(U*U+R*R),qe=N.x-Ue/ue,be=N.y+Je/ue,Fe=Ee.x-R/ae,St=Ee.y+U/ae,ye=((Fe-qe)*R-(St-be)*U)/(Je*R-Ue*U);we=qe+Je*ye-he.x,_e=be+Ue*ye-he.y;const Be=we*we+_e*_e;if(Be<=2)return new fe(we,_e);Ae=Math.sqrt(Be/2)}else{let ue=!1;Je>Number.EPSILON?U>Number.EPSILON&&(ue=!0):Je<-Number.EPSILON?U<-Number.EPSILON&&(ue=!0):Math.sign(Ue)===Math.sign(R)&&(ue=!0),ue?(we=-Ue,_e=Je,Ae=Math.sqrt(Z)):(we=Je,_e=Ue,Ae=Math.sqrt(Z/2))}return new fe(we/Ae,_e/Ae)}const se=[];for(let he=0,N=K.length,Ee=N-1,we=he+1;he<N;he++,Ee++,we++)Ee===N&&(Ee=0),we===N&&(we=0),se[he]=z(K[he],K[Ee],K[we]);const te=[];let ce,ze=se.concat();for(let he=0,N=C.length;he<N;he++){const Ee=C[he];ce=[];for(let we=0,_e=Ee.length,Ae=_e-1,Je=we+1;we<_e;we++,Ae++,Je++)Ae===_e&&(Ae=0),Je===_e&&(Je=0),ce[we]=z(Ee[we],Ee[Ae],Ee[Je]);te.push(ce),ze=ze.concat(ce)}for(let he=0;he<x;he++){const N=he/x,Ee=v*Math.cos(N*Math.PI/2),we=y*Math.sin(N*Math.PI/2)+M;for(let _e=0,Ae=K.length;_e<Ae;_e++){const Je=le(K[_e],se[_e],we);Me(Je.x,Je.y,-Ee)}for(let _e=0,Ae=C.length;_e<Ae;_e++){const Je=C[_e];ce=te[_e];for(let Ue=0,U=Je.length;Ue<U;Ue++){const R=le(Je[Ue],ce[Ue],we);Me(R.x,R.y,-Ee)}}}const Ye=y+M;for(let he=0;he<j;he++){const N=m?le(b[he],ze[he],Ye):b[he];T?(L.copy(F.normals[0]).multiplyScalar(N.x),P.copy(F.binormals[0]).multiplyScalar(N.y),B.copy(w[0]).add(L).add(P),Me(B.x,B.y,B.z)):Me(N.x,N.y,0)}for(let he=1;he<=f;he++)for(let N=0;N<j;N++){const Ee=m?le(b[N],ze[N],Ye):b[N];T?(L.copy(F.normals[he]).multiplyScalar(Ee.x),P.copy(F.binormals[he]).multiplyScalar(Ee.y),B.copy(w[he]).add(L).add(P),Me(B.x,B.y,B.z)):Me(Ee.x,Ee.y,p/f*he)}for(let he=x-1;he>=0;he--){const N=he/x,Ee=v*Math.cos(N*Math.PI/2),we=y*Math.sin(N*Math.PI/2)+M;for(let _e=0,Ae=K.length;_e<Ae;_e++){const Je=le(K[_e],se[_e],we);Me(Je.x,Je.y,p+Ee)}for(let _e=0,Ae=C.length;_e<Ae;_e++){const Je=C[_e];ce=te[_e];for(let Ue=0,U=Je.length;Ue<U;Ue++){const R=le(Je[Ue],ce[Ue],we);T?Me(R.x,R.y+w[f-1].y,w[f-1].x+Ee):Me(R.x,R.y,p+Ee)}}}ne(),me();function ne(){const he=i.length/3;if(m){let N=0,Ee=j*N;for(let we=0;we<ge;we++){const _e=q[we];st(_e[2]+Ee,_e[1]+Ee,_e[0]+Ee)}N=f+x*2,Ee=j*N;for(let we=0;we<ge;we++){const _e=q[we];st(_e[0]+Ee,_e[1]+Ee,_e[2]+Ee)}}else{for(let N=0;N<ge;N++){const Ee=q[N];st(Ee[2],Ee[1],Ee[0])}for(let N=0;N<ge;N++){const Ee=q[N];st(Ee[0]+j*f,Ee[1]+j*f,Ee[2]+j*f)}}n.addGroup(he,i.length/3-he,0)}function me(){const he=i.length/3;let N=0;Ce(K,N),N+=K.length;for(let Ee=0,we=C.length;Ee<we;Ee++){const _e=C[Ee];Ce(_e,N),N+=_e.length}n.addGroup(he,i.length/3-he,1)}function Ce(he,N){let Ee=he.length;for(;--Ee>=0;){const we=Ee;let _e=Ee-1;_e<0&&(_e=he.length-1);for(let Ae=0,Je=f+x*2;Ae<Je;Ae++){const Ue=j*Ae,U=j*(Ae+1),R=N+we+Ue,Z=N+_e+Ue,oe=N+_e+U,ue=N+we+U;$e(R,Z,oe,ue)}}}function Me(he,N,Ee){u.push(he),u.push(N),u.push(Ee)}function st(he,N,Ee){ot(he),ot(N),ot(Ee);const we=i.length/3,_e=E.generateTopUV(n,i,we-3,we-2,we-1);it(_e[0]),it(_e[1]),it(_e[2])}function $e(he,N,Ee,we){ot(he),ot(N),ot(we),ot(N),ot(Ee),ot(we);const _e=i.length/3,Ae=E.generateSideWallUV(n,i,_e-6,_e-3,_e-2,_e-1);it(Ae[0]),it(Ae[1]),it(Ae[3]),it(Ae[1]),it(Ae[2]),it(Ae[3])}function ot(he){i.push(u[he*3+0]),i.push(u[he*3+1]),i.push(u[he*3+2])}function it(he){s.push(he.x),s.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $T(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Qu[i.type]().fromJSON(i)),new Ah(n,e.options)}}const QT={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],f=e[i*3+1];return[new fe(s,a),new fe(c,u),new fe(h,f)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],p=e[n*3+2],m=e[i*3],v=e[i*3+1],y=e[i*3+2],M=e[s*3],x=e[s*3+1],_=e[s*3+2];return Math.abs(c-f)<Math.abs(a-h)?[new fe(a,1-u),new fe(h,1-p),new fe(m,1-y),new fe(M,1-_)]:[new fe(c,1-u),new fe(f,1-p),new fe(v,1-y),new fe(x,1-_)]}};function $T(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Th extends Wr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Th(e.radius,e.detail)}}class ol extends Wr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ol(e.radius,e.detail)}}class bh extends gt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],f=[];let p=e;const m=(t-e)/i,v=new D,y=new fe;for(let M=0;M<=i;M++){for(let x=0;x<=n;x++){const _=s+x/n*a;v.x=p*Math.cos(_),v.y=p*Math.sin(_),u.push(v.x,v.y,v.z),h.push(0,0,1),y.x=(v.x/t+1)/2,y.y=(v.y/t+1)/2,f.push(y.x,y.y)}p+=m}for(let M=0;M<i;M++){const x=M*(n+1);for(let _=0;_<n;_++){const E=_+x,w=E,T=E+n+1,F=E+n+2,P=E+1;c.push(w,T,P),c.push(T,F,P)}}this.setIndex(c),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class al extends gt{constructor(e=new Br([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(c,u,f),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new Xe(i,3)),this.setAttribute("normal",new Xe(s,3)),this.setAttribute("uv",new Xe(a,2));function h(f){const p=i.length/3,m=f.extractPoints(t);let v=m.shape;const y=m.holes;Xi.isClockWise(v)===!1&&(v=v.reverse());for(let x=0,_=y.length;x<_;x++){const E=y[x];Xi.isClockWise(E)===!0&&(y[x]=E.reverse())}const M=Xi.triangulateShape(v,y);for(let x=0,_=y.length;x<_;x++){const E=y[x];v=v.concat(E)}for(let x=0,_=v.length;x<_;x++){const E=v[x];i.push(E.x,E.y,0),s.push(0,0,1),a.push(E.x,E.y)}for(let x=0,_=M.length;x<_;x++){const E=M[x],w=E[0]+p,T=E[1]+p,F=E[2]+p;n.push(w,T,F),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return eb(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new al(n,e.curveSegments)}}function eb(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class ll extends gt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+c,Math.PI);let h=0;const f=[],p=new D,m=new D,v=[],y=[],M=[],x=[];for(let _=0;_<=n;_++){const E=[],w=_/n;let T=0;_===0&&a===0?T=.5/t:_===n&&u===Math.PI&&(T=-.5/t);for(let F=0;F<=t;F++){const P=F/t;p.x=-e*Math.cos(i+P*s)*Math.sin(a+w*c),p.y=e*Math.cos(a+w*c),p.z=e*Math.sin(i+P*s)*Math.sin(a+w*c),y.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),x.push(P+T,1-w),E.push(h++)}f.push(E)}for(let _=0;_<n;_++)for(let E=0;E<t;E++){const w=f[_][E+1],T=f[_][E],F=f[_+1][E],P=f[_+1][E+1];(_!==0||a>0)&&v.push(w,T,P),(_!==n-1||u<Math.PI)&&v.push(T,F,P)}this.setIndex(v),this.setAttribute("position",new Xe(y,3)),this.setAttribute("normal",new Xe(M,3)),this.setAttribute("uv",new Xe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ch extends Wr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ch(e.radius,e.detail)}}class Rh extends gt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],u=[],h=[],f=new D,p=new D,m=new D;for(let v=0;v<=n;v++)for(let y=0;y<=i;y++){const M=y/i*s,x=v/n*Math.PI*2;p.x=(e+t*Math.cos(x))*Math.cos(M),p.y=(e+t*Math.cos(x))*Math.sin(M),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),h.push(y/i),h.push(v/n)}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){const M=(i+1)*v+y-1,x=(i+1)*(v-1)+y-1,_=(i+1)*(v-1)+y,E=(i+1)*v+y;a.push(M,x,E),a.push(x,_,E)}this.setIndex(a),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ph extends gt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],f=[],p=new D,m=new D,v=new D,y=new D,M=new D,x=new D,_=new D;for(let w=0;w<=n;++w){const T=w/n*s*Math.PI*2;E(T,s,a,e,v),E(T+.01,s,a,e,y),x.subVectors(y,v),_.addVectors(y,v),M.crossVectors(x,_),_.crossVectors(M,x),M.normalize(),_.normalize();for(let F=0;F<=i;++F){const P=F/i*Math.PI*2,L=-t*Math.cos(P),B=t*Math.sin(P);p.x=v.x+(L*_.x+B*M.x),p.y=v.y+(L*_.y+B*M.y),p.z=v.z+(L*_.z+B*M.z),u.push(p.x,p.y,p.z),m.subVectors(p,v).normalize(),h.push(m.x,m.y,m.z),f.push(w/n),f.push(F/i)}}for(let w=1;w<=n;w++)for(let T=1;T<=i;T++){const F=(i+1)*(w-1)+(T-1),P=(i+1)*w+(T-1),L=(i+1)*w+T,B=(i+1)*(w-1)+T;c.push(F,P,B),c.push(P,L,B)}this.setIndex(c),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(f,2));function E(w,T,F,P,L){const B=Math.cos(w),Y=Math.sin(w),b=F/T*w,C=Math.cos(b);L.x=P*(2+C)*.5*B,L.y=P*(2+C)*Y*.5,L.z=P*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ph(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ih extends gt{constructor(e=new zp(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const c=new D,u=new D,h=new fe;let f=new D;const p=[],m=[],v=[],y=[];M(),this.setIndex(y),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(m,3)),this.setAttribute("uv",new Xe(v,2));function M(){for(let w=0;w<t;w++)x(w);x(s===!1?t:0),E(),_()}function x(w){f=e.getPointAt(w/t,f);const T=a.normals[w],F=a.binormals[w];for(let P=0;P<=i;P++){const L=P/i*Math.PI*2,B=Math.sin(L),Y=-Math.cos(L);u.x=Y*T.x+B*F.x,u.y=Y*T.y+B*F.y,u.z=Y*T.z+B*F.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=f.x+n*u.x,c.y=f.y+n*u.y,c.z=f.z+n*u.z,p.push(c.x,c.y,c.z)}}function _(){for(let w=1;w<=t;w++)for(let T=1;T<=i;T++){const F=(i+1)*(w-1)+(T-1),P=(i+1)*w+(T-1),L=(i+1)*w+T,B=(i+1)*(w-1)+T;y.push(F,P,B),y.push(P,L,B)}}function E(){for(let w=0;w<=t;w++)for(let T=0;T<=i;T++)h.x=w/t,h.y=T/i,v.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ih(new Qu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Hp extends gt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,s=new D;if(e.index!==null){const a=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,f=u.length;h<f;++h){const p=u[h],m=p.start,v=p.count;for(let y=m,M=m+v;y<M;y+=3)for(let x=0;x<3;x++){const _=c.getX(y+x),E=c.getX(y+(x+1)%3);i.fromBufferAttribute(a,_),s.fromBufferAttribute(a,E),X0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let c=0,u=a.count/3;c<u;c++)for(let h=0;h<3;h++){const f=3*c+h,p=3*c+(h+1)%3;i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,p),X0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Xe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function X0(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Y0=Object.freeze({__proto__:null,BoxGeometry:Ps,CapsuleGeometry:xh,CircleGeometry:Sh,ConeGeometry:Mh,CylinderGeometry:Oo,DodecahedronGeometry:wh,EdgesGeometry:ry,ExtrudeGeometry:Ah,IcosahedronGeometry:Th,LatheGeometry:sl,OctahedronGeometry:ol,PlaneGeometry:Uo,PolyhedronGeometry:Wr,RingGeometry:bh,ShapeGeometry:al,SphereGeometry:ll,TetrahedronGeometry:Ch,TorusGeometry:Rh,TorusKnotGeometry:Ph,TubeGeometry:Ih,WireframeGeometry:Hp});class ly extends Sn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new De(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class cy extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vp extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uy extends Vp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hy extends Sn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fy extends Sn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new De(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class dy extends Sn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class py extends Sn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class my extends Sn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new De(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gy extends kn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ys(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function vy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function _y(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function np(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[a++]=r[c+u]}return i}function Gp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function tb(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],f=h.getValueSize(),p=[],m=[];for(let v=0;v<h.times.length;++v){const y=h.times[v]*i;if(!(y<t||y>=n)){p.push(h.times[v]);for(let M=0;M<f;++M)m.push(h.values[v*f+M])}}p.length!==0&&(h.times=ys(p,h.times.constructor),h.values=ys(m,h.values.constructor),a.push(h))}s.tracks=a;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function nb(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const c=t.tracks[a],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(_){return _.name===c.name&&_.ValueTypeName===u});if(h===void 0)continue;let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=0;const v=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=v/3);const y=c.times.length-1;let M;if(s<=c.times[0]){const _=f,E=p-f;M=c.values.slice(_,E)}else if(s>=c.times[y]){const _=y*p+f,E=_+p-f;M=c.values.slice(_,E)}else{const _=c.createInterpolant(),E=f,w=p-f;_.evaluate(s),M=_.resultBuffer.slice(E,w)}u==="quaternion"&&new zn().fromArray(M).normalize().conjugate().toArray(M);const x=h.times.length;for(let _=0;_<x;++_){const E=_*v+m;if(u==="quaternion")zn.multiplyQuaternionsFlat(h.values,E,M,0,h.values,E);else{const w=v-m*2;for(let T=0;T<w;++T)h.values[E+T]-=M[T]}}}return r.blendMode=Mp,r}const ib={convertArray:ys,isTypedArray:vy,getKeyframeOrder:_y,sortedArray:np,flattenJSON:Gp,subclip:tb,makeClipAdditive:nb};class cl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const c=n+a>>>1;e<t[c]?a=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yy extends cl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gs,endingEnd:gs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,c=i[s],u=i[a];if(c===void 0)switch(this.getSettings_().endingStart){case vs:s=e,c=2*t-n;break;case Na:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case vs:a=e,u=2*n-t;break;case Na:a=1,u=n+i[1]-i[0];break;default:a=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,v=this._weightNext,y=(n-t)/(i-t),M=y*y,x=M*y,_=-m*x+2*m*M-m*y,E=(1+m)*x+(-1.5-2*m)*M+(-.5+m)*y+1,w=(-1-v)*x+(1.5+v)*M+.5*y,T=v*x-v*M;for(let F=0;F!==c;++F)s[F]=_*a[f+F]+E*a[h+F]+w*a[u+F]+T*a[p+F];return s}}class Wp extends cl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(i-t),p=1-f;for(let m=0;m!==c;++m)s[m]=a[h+m]*p+a[u+m]*f;return s}}class xy extends cl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ci{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ys(t,this.TimeBufferType),this.values=ys(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ys(e.times,Array),values:ys(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case qu:t=this.InterpolantFactoryMethodLinear;break;case au:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return qu;case this.InterpolantFactoryMethodSmooth:return au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const c=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*c,a*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(a!==null&&a>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,a),e=!1;break}a=u}if(i!==void 0&&vy(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===au,s=e.length-1;let a=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)u=!0;else{const p=c*n,m=p-n,v=p+n;for(let y=0;y!==n;++y){const M=t[p+y];if(M!==t[m+y]||M!==t[v+y]){u=!0;break}}}if(u){if(c!==a){e[a]=e[c];const p=c*n,m=a*n;for(let v=0;v!==n;++v)t[m+v]=t[p+v]}++a}}if(s>0){e[a]=e[s];for(let c=s*n,u=a*n,h=0;h!==n;++h)t[u+h]=t[c+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=qu;class Is extends Ci{constructor(e,t,n){super(e,t,n)}}Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Ua;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class Xp extends Ci{}Xp.prototype.ValueTypeName="color";class Ya extends Ci{}Ya.prototype.ValueTypeName="number";class Sy extends cl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)zn.slerpFlat(s,0,a,h-c,a,h,u);return s}}class ul extends Ci{InterpolantFactoryMethodLinear(e){return new Sy(this.times,this.values,this.getValueSize(),e)}}ul.prototype.ValueTypeName="quaternion";ul.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Ci{constructor(e,t,n){super(e,t,n)}}Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Ua;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class qa extends Ci{}qa.prototype.ValueTypeName="vector";class ja{constructor(e="",t=-1,n=[],i=uh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ii(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,c=n.length;a!==c;++a)t.push(sb(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Ci.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=_y(u);u=np(u,1,f),h=np(h,1,f),!i&&u[0]===0&&(u.push(s),h.push(h[0])),a.push(new Ya(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const a=[];for(const c in i)a.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,v,y,M){if(v.length!==0){const x=[],_=[];Gp(v,x,_,y),x.length!==0&&M.push(new p(m,x,_))}},i=[],s=e.name||"default",a=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const v={};let y;for(y=0;y<m.length;y++)if(m[y].morphTargets)for(let M=0;M<m[y].morphTargets.length;M++)v[m[y].morphTargets[M]]=-1;for(const M in v){const x=[],_=[];for(let E=0;E!==m[y].morphTargets.length;++E){const w=m[y];x.push(w.time),_.push(w.morphTarget===M?1:0)}i.push(new Ya(".morphTargetInfluence["+M+"]",x,_))}u=v.length*a}else{const v=".bones["+t[p].name+"]";n(qa,v+".position",m,"pos",i),n(ul,v+".quaternion",m,"rot",i),n(qa,v+".scale",m,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function rb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ya;case"vector":case"vector2":case"vector3":case"vector4":return qa;case"color":return Xp;case"quaternion":return ul;case"bool":case"boolean":return Is;case"string":return Ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function sb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rb(r.type);if(r.times===void 0){const t=[],n=[];Gp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const cr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Yp{constructor(e,t,n){const i=this;let s=!1,a=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,c),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,c),a===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=h.length;p<m;p+=2){const v=h[p],y=h[p+1];if(v.global&&(v.lastIndex=0),v.test(f))return y}return null}}}const My=new Yp;class qn{constructor(e){this.manager=e!==void 0?e:My,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qn.DEFAULT_MATERIAL_NAME="__DEFAULT";const or={};class ob extends Error{constructor(e,t){super(e),this.response=t}}class pr extends qn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=cr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(or[e]!==void 0){or[e].push({onLoad:t,onProgress:n,onError:i});return}or[e]=[],or[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=or[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=m?parseInt(m):0,y=v!==0;let M=0;const x=new ReadableStream({start(_){E();function E(){p.read().then(({done:w,value:T})=>{if(w)_.close();else{M+=T.byteLength;const F=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:v});for(let P=0,L=f.length;P<L;P++){const B=f[P];B.onProgress&&B.onProgress(F)}_.enqueue(T),E()}},w=>{_.error(w)})}}});return new Response(x)}else throw new ob(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,v=new TextDecoder(m);return h.arrayBuffer().then(y=>v.decode(y))}}}).then(h=>{cr.add(e,h);const f=or[e];delete or[e];for(let p=0,m=f.length;p<m;p++){const v=f[p];v.onLoad&&v.onLoad(h)}}).catch(h=>{const f=or[e];if(f===void 0)throw this.manager.itemError(e),h;delete or[e];for(let p=0,m=f.length;p<m;p++){const v=f[p];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ab extends qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new pr(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=ja.parse(e[n]);t.push(i)}return t}}class lb extends qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],c=new _h,u=new pr(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function f(p){u.load(e[p],function(m){const v=s.parse(m,!0);a[p]={width:v.width,height:v.height,format:v.format,mipmaps:v.mipmaps},h+=1,h===6&&(v.mipmapCount===1&&(c.minFilter=nn),c.image=a,c.format=v.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)f(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const v=m.mipmaps.length/m.mipmapCount;for(let y=0;y<v;y++){a[y]={mipmaps:[]};for(let M=0;M<m.mipmapCount;M++)a[y].mipmaps.push(m.mipmaps[y*m.mipmapCount+M]),a[y].format=m.format,a[y].width=m.width,a[y].height=m.height}c.image=a}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=nn),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}class Za extends qn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=cr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const c=Ha("img");function u(){f(),cr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class cb extends qn{constructor(e){super(e)}load(e,t,n,i){const s=new nl;s.colorSpace=ti;const a=new Za(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let c=0;function u(h){a.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class ub extends qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Wi,c=new pr(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(f){if(i!==void 0)i(f);else{console.error(f);return}}h.image!==void 0?a.image=h.image:h.data!==void 0&&(a.image.width=h.width,a.image.height=h.height,a.image.data=h.data),a.wrapS=h.wrapS!==void 0?h.wrapS:mi,a.wrapT=h.wrapT!==void 0?h.wrapT:mi,a.magFilter=h.magFilter!==void 0?h.magFilter:nn,a.minFilter=h.minFilter!==void 0?h.minFilter:nn,a.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(a.colorSpace=h.colorSpace),h.flipY!==void 0&&(a.flipY=h.flipY),h.format!==void 0&&(a.format=h.format),h.type!==void 0&&(a.type=h.type),h.mipmaps!==void 0&&(a.mipmaps=h.mipmaps,a.minFilter=Hi),h.mipmapCount===1&&(a.minFilter=nn),h.generateMipmaps!==void 0&&(a.generateMipmaps=h.generateMipmaps),a.needsUpdate=!0,t&&t(a,h)},n,i),a}}class hb extends qn{constructor(e){super(e)}load(e,t,n,i){const s=new Yt,a=new Za(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Xr extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class wy extends Xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bd=new tt,q0=new D,j0=new D;class qp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;q0.setFromMatrixPosition(e.matrixWorld),t.position.copy(q0),j0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(j0),t.updateMatrixWorld(),bd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fb extends qp{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ey extends Xr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new fb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Z0=new tt,pa=new D,Cd=new D;class db extends qp{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),pa.setFromMatrixPosition(e.matrixWorld),n.position.copy(pa),Cd.copy(n.position),Cd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cd),n.updateMatrixWorld(),i.makeTranslation(-pa.x,-pa.y,-pa.z),Z0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Z0)}}class Ay extends Xr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new db}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pb extends qp{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ty extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new pb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class by extends Xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cy extends Xr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Ry{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Py extends Xr{constructor(e=new Ry,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Lh extends qn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new pr(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new De().setHex(a.value);break;case"v2":i.uniforms[s].value=new fe().fromArray(a.value);break;case"v3":i.uniforms[s].value=new D().fromArray(a.value);break;case"v4":i.uniforms[s].value=new xt().fromArray(a.value);break;case"m3":i.uniforms[s].value=new dt().fromArray(a.value);break;case"m4":i.uniforms[s].value=new tt().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new fe().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Lh.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:ly,SpriteMaterial:Lp,RawShaderMaterial:cy,ShaderMaterial:gi,PointsMaterial:Up,MeshPhysicalMaterial:uy,MeshStandardMaterial:Vp,MeshPhongMaterial:hy,MeshToonMaterial:fy,MeshNormalMaterial:dy,MeshLambertMaterial:py,MeshDepthMaterial:Pp,MeshDistanceMaterial:Ip,MeshBasicMaterial:Gr,MeshMatcapMaterial:my,LineDashedMaterial:gy,LineBasicMaterial:kn,Material:Sn};return new t[e]}}class ip{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class jp extends gt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Iy extends qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new pr(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(v,y){if(t[y]!==void 0)return t[y];const x=v.interleavedBuffers[y],_=s(v,x.buffer),E=xo(x.type,_),w=new gh(E,x.stride);return w.uuid=x.uuid,t[y]=w,w}function s(v,y){if(n[y]!==void 0)return n[y];const x=v.arrayBuffers[y],_=new Uint32Array(x).buffer;return n[y]=_,_}const a=e.isInstancedBufferGeometry?new jp:new gt,c=e.data.index;if(c!==void 0){const v=xo(c.type,c.array);a.setIndex(new Ft(v,1))}const u=e.data.attributes;for(const v in u){const y=u[v];let M;if(y.isInterleavedBufferAttribute){const x=i(e.data,y.data);M=new ni(x,y.itemSize,y.offset,y.normalized)}else{const x=xo(y.type,y.array),_=y.isInstancedBufferAttribute?Ro:Ft;M=new _(x,y.itemSize,y.normalized)}y.name!==void 0&&(M.name=y.name),y.usage!==void 0&&M.setUsage(y.usage),a.setAttribute(v,M)}const h=e.data.morphAttributes;if(h)for(const v in h){const y=h[v],M=[];for(let x=0,_=y.length;x<_;x++){const E=y[x];let w;if(E.isInterleavedBufferAttribute){const T=i(e.data,E.data);w=new ni(T,E.itemSize,E.offset,E.normalized)}else{const T=xo(E.type,E.array);w=new Ft(T,E.itemSize,E.normalized)}E.name!==void 0&&(w.name=E.name),M.push(w)}a.morphAttributes[v]=M}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let v=0,y=p.length;v!==y;++v){const M=p[v];a.addGroup(M.start,M.count,M.materialIndex)}const m=e.data.boundingSphere;if(m!==void 0){const v=new D;m.center!==void 0&&v.fromArray(m.center),a.boundingSphere=new mn(v,m.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class mb extends qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?ip.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const c=new pr(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){i!==void 0&&i(p),console.error("THREE:ObjectLoader: Can't parse "+e+".",p.message);return}const f=h.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?ip.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new pr(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),c=JSON.parse(a),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,a),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),f=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,f),this.bindLightTargets(h),t!==void 0){let p=!1;for(const m in a)if(a[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,a),u=this.parseObject(e.object,i,c,a,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),this.bindLightTargets(u),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Br().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=new vh().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Iy;for(let s=0,a=e.length;s<a;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in Y0?c=Y0[u.type].fromJSON(u,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Lh;s.setTextures(t);for(let a=0,c=e.length;a<c;a++){const u=e[a];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=ja.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return a(f)}else return u.data?{data:xo(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new Yp(t);s=new Za(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,f=e.length;h<f;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const v=[];for(let y=0,M=m.length;y<M;y++){const x=m[y],_=c(x);_!==null&&(_ instanceof HTMLImageElement?v.push(_):v.push(new Wi(_.data,_.width,_.height)))}i[p.uuid]=new _s(v)}else{const v=c(p.url);i[p.uuid]=new _s(v)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const c=a,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return a.data?{data:xo(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Za(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,c=e.length;a<c;a++){const u=e[a],h=u.url;if(Array.isArray(h)){const f=[];for(let p=0,m=h.length;p<m;p++){const v=h[p],y=await s(v);y!==null&&(y instanceof HTMLImageElement?f.push(y):f.push(new Wi(y.data,y.width,y.height)))}n[u.uuid]=new _s(f)}else{const f=await s(u.url);n[u.uuid]=new _s(f)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=e[s];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let f;Array.isArray(h)?(f=new nl,h.length===6&&(f.needsUpdate=!0)):(h&&h.data?f=new Wi:f=new Yt,h&&(f.needsUpdate=!0)),f.source=u,f.uuid=c.uuid,c.name!==void 0&&(f.name=c.name),c.mapping!==void 0&&(f.mapping=n(c.mapping,gb)),c.channel!==void 0&&(f.channel=c.channel),c.offset!==void 0&&f.offset.fromArray(c.offset),c.repeat!==void 0&&f.repeat.fromArray(c.repeat),c.center!==void 0&&f.center.fromArray(c.center),c.rotation!==void 0&&(f.rotation=c.rotation),c.wrap!==void 0&&(f.wrapS=n(c.wrap[0],J0),f.wrapT=n(c.wrap[1],J0)),c.format!==void 0&&(f.format=c.format),c.internalFormat!==void 0&&(f.internalFormat=c.internalFormat),c.type!==void 0&&(f.type=c.type),c.colorSpace!==void 0&&(f.colorSpace=c.colorSpace),c.minFilter!==void 0&&(f.minFilter=n(c.minFilter,K0)),c.magFilter!==void 0&&(f.magFilter=n(c.magFilter,K0)),c.anisotropy!==void 0&&(f.anisotropy=c.anisotropy),c.flipY!==void 0&&(f.flipY=c.flipY),c.generateMipmaps!==void 0&&(f.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(f.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(f.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(f.compareFunction=c.compareFunction),c.userData!==void 0&&(f.userData=c.userData),i[c.uuid]=f}return i}parseObject(e,t,n,i,s){let a;function c(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const v=[];for(let y=0,M=m.length;y<M;y++){const x=m[y];n[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),v.push(n[x])}return v}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",m),i[m]}let f,p;switch(e.type){case"Scene":a=new Zu,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new De(e.background):a.background=h(e.background)),e.environment!==void 0&&(a.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new mh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new ph(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new fn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new rl(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new by(e.color,e.intensity);break;case"DirectionalLight":a=new Ty(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Ay(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Cy(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Ey(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new wy(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Py().fromJSON(e);break;case"SkinnedMesh":f=c(e.geometry),p=u(e.material),a=new q_(f,p),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":f=c(e.geometry),p=u(e.material),a=new Qt(f,p);break;case"InstancedMesh":f=c(e.geometry),p=u(e.material);const m=e.count,v=e.instanceMatrix,y=e.instanceColor;a=new j_(f,p,m),a.instanceMatrix=new Ro(new Float32Array(v.array),16),y!==void 0&&(a.instanceColor=new Ro(new Float32Array(y.array),y.itemSize));break;case"BatchedMesh":f=c(e.geometry),p=u(e.material),a=new Z_(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),a.geometry=f,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(M=>{const x=new pn;x.min.fromArray(M.boxMin),x.max.fromArray(M.boxMax);const _=new mn;return _.radius=M.sphereRadius,_.center.fromArray(M.sphereCenter),{boxInitialized:M.boxInitialized,box:x,sphereInitialized:M.sphereInitialized,sphere:_}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=h(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=h(e.colorsTexture.uuid));break;case"LOD":a=new Y_;break;case"Line":a=new kr(c(e.geometry),u(e.material));break;case"LineLoop":a=new J_(c(e.geometry),u(e.material));break;case"LineSegments":a=new qi(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":a=new K_(c(e.geometry),u(e.material));break;case"Sprite":a=new X_(u(e.material));break;case"Group":a=new Mo;break;case"Bone":a=new Dp;break;default:a=new Ct}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let v=0;v<m.length;v++)a.add(this.parseObject(m[v],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let v=0;v<m.length;v++){const y=m[v];a.animations.push(s[y])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const m=e.levels;for(let v=0;v<m.length;v++){const y=m[v],M=a.getObjectByProperty("uuid",y.object);M!==void 0&&a.addLevel(M,y.distance,y.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new Ct}})}}const gb={UVMapping:ih,CubeReflectionMapping:fr,CubeRefractionMapping:zr,EquirectangularReflectionMapping:Pa,EquirectangularRefractionMapping:Ia,CubeUVReflectionMapping:Io},J0={RepeatWrapping:La,ClampToEdgeWrapping:mi,MirroredRepeatWrapping:Da},K0={NearestFilter:dn,NearestMipmapNearestFilter:fp,NearestMipmapLinearFilter:yo,LinearFilter:nn,LinearMipmapNearestFilter:Sa,LinearMipmapLinearFilter:Hi};class vb extends qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=cr.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return cr.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),cr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});cr.add(e,u),s.manager.itemStart(e)}}let Zc;class Zp{static getContext(){return Zc===void 0&&(Zc=new(window.AudioContext||window.webkitAudioContext)),Zc}static setContext(e){Zc=e}}class _b extends qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new pr(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(u){try{const h=u.slice(0);Zp.getContext().decodeAudioData(h,function(p){t(p)}).catch(c)}catch(h){c(h)}},n,i);function c(u){i?i(u):console.error(u),s.manager.itemError(e)}}}const Q0=new tt,$0=new tt,ls=new tt;class yb{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new fn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new fn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ls.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(Ms*t.fov*.5)/t.zoom;let c,u;$0.elements[12]=-i,Q0.elements[12]=i,c=-a*t.aspect+s,u=a*t.aspect+s,ls.elements[0]=2*t.near/(u-c),ls.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(ls),c=-a*t.aspect-s,u=a*t.aspect-s,ls.elements[0]=2*t.near/(u-c),ls.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(ls)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply($0),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Q0)}}class Jp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ev(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ev();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ev(){return performance.now()}const cs=new D,tv=new zn,xb=new D,us=new D;class Sb extends Ct{constructor(){super(),this.type="AudioListener",this.context=Zp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Jp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(cs,tv,xb),us.set(0,0,-1).applyQuaternion(tv),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(cs.x,i),t.positionY.linearRampToValueAtTime(cs.y,i),t.positionZ.linearRampToValueAtTime(cs.z,i),t.forwardX.linearRampToValueAtTime(us.x,i),t.forwardY.linearRampToValueAtTime(us.y,i),t.forwardZ.linearRampToValueAtTime(us.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(cs.x,cs.y,cs.z),t.setOrientation(us.x,us.y,us.z,n.x,n.y,n.z)}}class Ly extends Ct{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const hs=new D,nv=new zn,Mb=new D,fs=new D;class wb extends Ly{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(hs,nv,Mb),fs.set(0,0,1).applyQuaternion(nv);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(hs.x,n),t.positionY.linearRampToValueAtTime(hs.y,n),t.positionZ.linearRampToValueAtTime(hs.z,n),t.orientationX.linearRampToValueAtTime(fs.x,n),t.orientationY.linearRampToValueAtTime(fs.y,n),t.orientationZ.linearRampToValueAtTime(fs.z,n)}else t.setPosition(hs.x,hs.y,hs.z),t.setOrientation(fs.x,fs.y,fs.z)}}class Eb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Dy{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let c=0;c!==i;++c)n[s+c]=n[c];a=t}else{a+=t;const c=t/a;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){zn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;zn.multiplyQuaternionsFlat(e,a,e,t,e,n),zn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*a+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]+e[n+a]*i}}}const Kp="\\[\\]\\.:\\/",Ab=new RegExp("["+Kp+"]","g"),Qp="[^"+Kp+"]",Tb="[^"+Kp.replace("\\.","")+"]",bb=/((?:WC+[\/:])*)/.source.replace("WC",Qp),Cb=/(WCOD+)?/.source.replace("WCOD",Tb),Rb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qp),Pb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qp),Ib=new RegExp("^"+bb+Cb+Rb+Pb+"$"),Lb=["material","materials","bones","map"];class Db{constructor(e,t,n){const i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ab,"")}static parseTrackName(e){const t=Ib.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Lb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const c=s[a];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=Db;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ub{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ii(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let f=0,p=arguments.length;f!==p;++f){const m=arguments[f],v=m.uuid;let y=t[v];if(y===void 0){y=u++,t[v]=y,e.push(m);for(let M=0,x=a;M!==x;++M)s[M].push(new bt(m,n[M],i[M]))}else if(y<h){c=e[y];const M=--h,x=e[M];t[x.uuid]=y,e[y]=x,t[v]=M,e[M]=m;for(let _=0,E=a;_!==E;++_){const w=s[_],T=w[M];let F=w[y];w[y]=T,F===void 0&&(F=new bt(m,n[_],i[_])),w[M]=F}}else e[y]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,c=arguments.length;a!==c;++a){const u=arguments[a],h=u.uuid,f=t[h];if(f!==void 0&&f>=s){const p=s++,m=e[p];t[m.uuid]=f,e[f]=m,t[h]=p,e[p]=u;for(let v=0,y=i;v!==y;++v){const M=n[v],x=M[p],_=M[f];M[f]=x,M[p]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],f=h.uuid,p=t[f];if(p!==void 0)if(delete t[f],p<s){const m=--s,v=e[m],y=--a,M=e[y];t[v.uuid]=p,e[p]=v,t[M.uuid]=m,e[m]=M,e.pop();for(let x=0,_=i;x!==_;++x){const E=n[x],w=E[m],T=E[y];E[p]=w,E[m]=T,E.pop()}}else{const m=--a,v=e[m];m>0&&(t[v.uuid]=p),e[p]=v,e.pop();for(let y=0,M=i;y!==M;++y){const x=n[y];x[p]=x[m],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,f=this.nCachedObjects_,p=new Array(h);i=s.length,n[e]=i,a.push(e),c.push(t),s.push(p);for(let m=f,v=u.length;m!==v;++m){const y=u[m];p[m]=new bt(y,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,c=a.length-1,u=a[c],h=e[c];t[h]=n,a[n]=u,a.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class Uy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,c=new Array(a),u={endingStart:gs,endingEnd:gs};for(let h=0;h!==a;++h){const f=s[h].createInterpolant(null);c[h]=f,f.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=m_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,c=i/s;e.warp(1,a,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const a=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Mp:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(a),h[f].accumulateAdditive(c);break;case uh:default:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(a),h[f].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===g_;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===p_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=vs,i.endingEnd=vs):(e?i.endingStart=this.zeroSlopeAtStart?vs:gs:i.endingStart=Na,t?i.endingEnd=this.zeroSlopeAtEnd?vs:gs:i.endingEnd=Na)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const Nb=new Float32Array(1);class Ob extends Yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let p=0;p!==s;++p){const m=i[p],v=m.name;let y=f[v];if(y!==void 0)++y.referenceCount,a[p]=y;else{if(y=a[p],y!==void 0){y._cacheIndex===null&&(++y.referenceCount,this._addInactiveBinding(y,u,v));continue}const M=t&&t._propertyBindings[p].binding.parsedPath;y=new Dy(bt.create(n,v,M),m.ValueTypeName,m.getValueSize()),++y.referenceCount,this._addInactiveBinding(y,u,v),a[p]=y}c[p].resultBuffer=y.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const c=a.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,c=a[s],u=c.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,c=a[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Wp(new Float32Array(2),new Float32Array(2),1,Nb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?ja.findByName(i,e):e;const c=a!==null?a.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(a!==null?n=a.blendMode:n=uh),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const f=new Uy(this,a,t,n);return this._bindAction(f,h),this._addInactiveAction(f,c,s),f}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ja.findByName(n,e):e,a=s?s.uuid:e,c=this._actionsByClip[a];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,a);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let c=0,u=a.length;c!==u;++c){const h=a[c];this._deactivateAction(h);const f=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=f,t[f]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const c=n[a].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const c=s[a];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class $p{constructor(e){this.value=e}clone(){return new $p(this.value.clone===void 0?this.value:this.value.clone())}}let Fb=0;class Bb extends Yi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Fb++}),this.name="",this.usage=za,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class $u extends gh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class zb{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const iv=new tt;class Ny{constructor(e,t,n=0,i=1/0){this.ray=new Do(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return iv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iv),this}intersectObject(e,t=!0,n=[]){return rp(e,this,n,t),n.sort(rv),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)rp(e[i],this,n,t);return n.sort(rv),n}}function rv(r,e){return r.distance-e.distance}function rp(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,c=s.length;a<c;a++)rp(s[a],e,t,!0)}}class kb{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hb{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class em{constructor(e,t,n,i){em.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const sv=new fe;class Vb{constructor(e=new fe(1/0,1/0),t=new fe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sv.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sv).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ov=new D,Jc=new D;class Oy{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ov.subVectors(e,this.start),Jc.subVectors(this.end,this.start);const n=Jc.dot(Jc);let s=Jc.dot(ov)/n;return t&&(s=Zt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const av=new D;class Gb extends Ct{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new gt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,c=1,u=32;a<u;a++,c++){const h=a/u*Math.PI*2,f=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(f),Math.sin(f),1)}n.setAttribute("position",new Xe(i,3));const s=new kn({fog:!1,toneMapped:!1});this.cone=new qi(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),av.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(av),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Ur=new D,Kc=new tt,Rd=new tt;class Wb extends qi{constructor(e){const t=Fy(e),n=new gt,i=[],s=[],a=new De(0,0,1),c=new De(0,1,0);for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(c.r,c.g,c.b))}n.setAttribute("position",new Xe(i,3)),n.setAttribute("color",new Xe(s,3));const u=new kn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Rd.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(Kc.multiplyMatrices(Rd,c.matrixWorld),Ur.setFromMatrixPosition(Kc),i.setXYZ(a,Ur.x,Ur.y,Ur.z),Kc.multiplyMatrices(Rd,c.parent.matrixWorld),Ur.setFromMatrixPosition(Kc),i.setXYZ(a+1,Ur.x,Ur.y,Ur.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Fy(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Fy(r.children[t]));return e}class Xb extends Qt{constructor(e,t,n){const i=new ll(t,4,2),s=new Gr({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Yb=new D,lv=new De,cv=new De;class qb extends Ct{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new ol(t);i.rotateY(Math.PI*.5),this.material=new Gr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new Ft(a,3)),this.add(new Qt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");lv.copy(this.light.color),cv.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?lv:cv;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Yb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class jb extends qi{constructor(e=10,t=10,n=4473924,i=8947848){n=new De(n),i=new De(i);const s=t/2,a=e/t,c=e/2,u=[],h=[];for(let m=0,v=0,y=-c;m<=t;m++,y+=a){u.push(-c,0,y,c,0,y),u.push(y,0,-c,y,0,c);const M=m===s?n:i;M.toArray(h,v),v+=3,M.toArray(h,v),v+=3,M.toArray(h,v),v+=3,M.toArray(h,v),v+=3}const f=new gt;f.setAttribute("position",new Xe(u,3)),f.setAttribute("color",new Xe(h,3));const p=new kn({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zb extends qi{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new De(s),a=new De(a);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),v=Math.sin(m)*e,y=Math.cos(m)*e;c.push(0,0,0),c.push(v,0,y);const M=p&1?s:a;u.push(M.r,M.g,M.b),u.push(M.r,M.g,M.b)}for(let p=0;p<n;p++){const m=p&1?s:a,v=e-e/n*p;for(let y=0;y<i;y++){let M=y/i*(Math.PI*2),x=Math.sin(M)*v,_=Math.cos(M)*v;c.push(x,0,_),u.push(m.r,m.g,m.b),M=(y+1)/i*(Math.PI*2),x=Math.sin(M)*v,_=Math.cos(M)*v,c.push(x,0,_),u.push(m.r,m.g,m.b)}}const h=new gt;h.setAttribute("position",new Xe(c,3)),h.setAttribute("color",new Xe(u,3));const f=new kn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const uv=new D,Qc=new D,hv=new D;class Jb extends Ct{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new gt;i.setAttribute("position",new Xe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new kn({fog:!1,toneMapped:!1});this.lightPlane=new kr(i,s),this.add(this.lightPlane),i=new gt,i.setAttribute("position",new Xe([0,0,0,0,0,1],3)),this.targetLine=new kr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),uv.setFromMatrixPosition(this.light.matrixWorld),Qc.setFromMatrixPosition(this.light.target.matrixWorld),hv.subVectors(Qc,uv),this.lightPlane.lookAt(Qc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Qc),this.targetLine.scale.z=hv.length()}}const $c=new D,jt=new tl;class Kb extends qi{constructor(e){const t=new gt,n=new kn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(y,M){u(y),u(M)}function u(y){i.push(0,0,0),s.push(0,0,0),a[y]===void 0&&(a[y]=[]),a[y].push(i.length/3-1)}t.setAttribute("position",new Xe(i,3)),t.setAttribute("color",new Xe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const h=new De(16755200),f=new De(16711680),p=new De(43775),m=new De(16777215),v=new De(3355443);this.setColors(h,f,p,m,v)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;jt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Kt("c",t,e,jt,0,0,-1),Kt("t",t,e,jt,0,0,1),Kt("n1",t,e,jt,-n,-i,-1),Kt("n2",t,e,jt,n,-i,-1),Kt("n3",t,e,jt,-n,i,-1),Kt("n4",t,e,jt,n,i,-1),Kt("f1",t,e,jt,-n,-i,1),Kt("f2",t,e,jt,n,-i,1),Kt("f3",t,e,jt,-n,i,1),Kt("f4",t,e,jt,n,i,1),Kt("u1",t,e,jt,n*.7,i*1.1,-1),Kt("u2",t,e,jt,-n*.7,i*1.1,-1),Kt("u3",t,e,jt,0,i*2,-1),Kt("cf1",t,e,jt,-n,0,1),Kt("cf2",t,e,jt,n,0,1),Kt("cf3",t,e,jt,0,-i,1),Kt("cf4",t,e,jt,0,i,1),Kt("cn1",t,e,jt,-n,0,-1),Kt("cn2",t,e,jt,n,0,-1),Kt("cn3",t,e,jt,0,-i,-1),Kt("cn4",t,e,jt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Kt(r,e,t,n,i,s,a){$c.set(i,s,a).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],$c.x,$c.y,$c.z)}}const eu=new pn;class Qb extends qi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new gt;s.setIndex(new Ft(n,1)),s.setAttribute("position",new Ft(i,3)),super(s,new kn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&eu.setFromObject(this.object),eu.isEmpty())return;const t=eu.min,n=eu.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class $b extends qi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new gt;s.setIndex(new Ft(n,1)),s.setAttribute("position",new Xe(i,3)),super(s,new kn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class eC extends kr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new gt;a.setAttribute("position",new Xe(s,3)),a.computeBoundingSphere(),super(a,new kn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new gt;u.setAttribute("position",new Xe(c,3)),u.computeBoundingSphere(),this.add(new Qt(u,new Gr({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const fv=new D;let tu,Pd;class tC extends Ct{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",tu===void 0&&(tu=new gt,tu.setAttribute("position",new Xe([0,0,0,0,1,0],3)),Pd=new Oo(0,.5,1,5,1),Pd.translate(0,-.5,0)),this.position.copy(t),this.line=new kr(tu,new kn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Qt(Pd,new Gr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{fv.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(fv,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class nC extends qi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new gt;i.setAttribute("position",new Xe(t,3)),i.setAttribute("color",new Xe(n,3));const s=new kn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new De,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class iC{constructor(){this.type="ShapePath",this.color=new De,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Va,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const E=[];for(let w=0,T=_.length;w<T;w++){const F=_[w],P=new Br;P.curves=F.curves,E.push(P)}return E}function n(_,E){const w=E.length;let T=!1;for(let F=w-1,P=0;P<w;F=P++){let L=E[F],B=E[P],Y=B.x-L.x,b=B.y-L.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(L=E[P],Y=-Y,B=E[F],b=-b),_.y<L.y||_.y>B.y)continue;if(_.y===L.y){if(_.x===L.x)return!0}else{const C=b*(_.x-L.x)-Y*(_.y-L.y);if(C===0)return!0;if(C<0)continue;T=!T}}else{if(_.y!==L.y)continue;if(B.x<=_.x&&_.x<=L.x||L.x<=_.x&&_.x<=B.x)return!0}}return T}const i=Xi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,c,u;const h=[];if(s.length===1)return c=s[0],u=new Br,u.curves=c.curves,h.push(u),h;let f=!i(s[0].getPoints());f=e?!f:f;const p=[],m=[];let v=[],y=0,M;m[y]=void 0,v[y]=[];for(let _=0,E=s.length;_<E;_++)c=s[_],M=c.getPoints(),a=i(M),a=e?!a:a,a?(!f&&m[y]&&y++,m[y]={s:new Br,p:M},m[y].s.curves=c.curves,f&&y++,v[y]=[]):v[y].push({h:c,p:M[0]});if(!m[0])return t(s);if(m.length>1){let _=!1,E=0;for(let w=0,T=m.length;w<T;w++)p[w]=[];for(let w=0,T=m.length;w<T;w++){const F=v[w];for(let P=0;P<F.length;P++){const L=F[P];let B=!0;for(let Y=0;Y<m.length;Y++)n(L.p,m[Y].p)&&(w!==Y&&E++,B?(B=!1,p[Y].push(L)):_=!0);B&&p[w].push(L)}}E>0&&_===!1&&(v=p)}let x;for(let _=0,E=m.length;_<E;_++){u=m[_].s,h.push(u),x=v[_];for(let w=0,T=x.length;w<T;w++)u.holes.push(x[w].h)}return h}}class rC extends Yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class sC extends Ti{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);const oC=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:hp,AddEquation:Fr,AddOperation:o_,AdditiveAnimationBlendMode:Mp,AdditiveBlending:hu,AgXToneMapping:h_,AlphaFormat:gp,AlwaysCompare:T_,AlwaysDepth:mu,AlwaysStencilFunc:jd,AmbientLight:by,AnimationAction:Uy,AnimationClip:ja,AnimationLoader:ab,AnimationMixer:Ob,AnimationObjectGroup:Ub,AnimationUtils:ib,ArcCurve:$_,ArrayCamera:V_,ArrowHelper:tC,AttachedBindMode:qd,Audio:Ly,AudioAnalyser:Eb,AudioContext:Zp,AudioListener:Sb,AudioLoader:_b,AxesHelper:nC,BackSide:Bn,BasicDepthPacking:v_,BasicShadowMap:kv,BatchedMesh:Z_,Bone:Dp,BooleanKeyframeTrack:Is,Box2:Vb,Box3:pn,Box3Helper:$b,BoxGeometry:Ps,BoxHelper:Qb,BufferAttribute:Ft,BufferGeometry:gt,BufferGeometryLoader:Iy,ByteType:dp,Cache:cr,Camera:tl,CameraHelper:Kb,CanvasTexture:Q_,CapsuleGeometry:xh,CatmullRomCurve3:ey,CineonToneMapping:c_,CircleGeometry:Sh,ClampToEdgeWrapping:mi,Clock:Jp,Color:De,ColorKeyframeTrack:Xp,ColorManagement:Dt,CompressedArrayTexture:TT,CompressedCubeTexture:bT,CompressedTexture:_h,CompressedTextureLoader:lb,ConeGeometry:Mh,ConstantAlphaFactor:i_,ConstantColorFactor:t_,Controls:rC,CubeCamera:U_,CubeReflectionMapping:fr,CubeRefractionMapping:zr,CubeTexture:nl,CubeTextureLoader:cb,CubeUVReflectionMapping:Io,CubicBezierCurve:Op,CubicBezierCurve3:ty,CubicInterpolant:yy,CullFaceBack:Wd,CullFaceFront:zv,CullFaceFrontBack:tS,CullFaceNone:Bv,Curve:bi,CurvePath:iy,CustomBlending:Hv,CustomToneMapping:u_,CylinderGeometry:Oo,Cylindrical:Hb,Data3DTexture:Ap,DataArrayTexture:fh,DataTexture:Wi,DataTextureLoader:ub,DataUtils:mM,DecrementStencilOp:mS,DecrementWrapStencilOp:vS,DefaultLoadingManager:My,DepthFormat:Ss,DepthStencilFormat:bs,DepthTexture:Rp,DetachedBindMode:d_,DirectionalLight:Ty,DirectionalLightHelper:Jb,DiscreteInterpolant:xy,DisplayP3ColorSpace:hh,DodecahedronGeometry:wh,DoubleSide:zi,DstAlphaFactor:Jv,DstColorFactor:Qv,DynamicCopyUsage:LS,DynamicDrawUsage:TS,DynamicReadUsage:RS,EdgesGeometry:ry,EllipseCurve:yh,EqualCompare:M_,EqualDepth:vu,EqualStencilFunc:SS,EquirectangularReflectionMapping:Pa,EquirectangularRefractionMapping:Ia,Euler:ri,EventDispatcher:Yi,ExtrudeGeometry:Ah,FileLoader:pr,Float16BufferAttribute:SM,Float32BufferAttribute:Xe,FloatType:Yn,Fog:mh,FogExp2:ph,FramebufferTexture:AT,FrontSide:hr,Frustum:il,GLBufferAttribute:zb,GLSL1:US,GLSL3:Zd,GreaterCompare:w_,GreaterDepth:yu,GreaterEqualCompare:A_,GreaterEqualDepth:_u,GreaterEqualStencilFunc:AS,GreaterStencilFunc:wS,GridHelper:jb,Group:Mo,HalfFloatType:Lo,HemisphereLight:wy,HemisphereLightHelper:qb,IcosahedronGeometry:Th,ImageBitmapLoader:vb,ImageLoader:Za,ImageUtils:P_,IncrementStencilOp:pS,IncrementWrapStencilOp:gS,InstancedBufferAttribute:Ro,InstancedBufferGeometry:jp,InstancedInterleavedBuffer:$u,InstancedMesh:j_,Int16BufferAttribute:yM,Int32BufferAttribute:xM,Int8BufferAttribute:gM,IntType:rh,InterleavedBuffer:gh,InterleavedBufferAttribute:ni,Interpolant:cl,InterpolateDiscrete:Ua,InterpolateLinear:qu,InterpolateSmooth:au,InvertStencilOp:_S,KeepStencilOp:ds,KeyframeTrack:Ci,LOD:Y_,LatheGeometry:sl,Layers:ws,LessCompare:S_,LessDepth:gu,LessEqualCompare:wp,LessEqualDepth:As,LessEqualStencilFunc:MS,LessStencilFunc:xS,Light:Xr,LightProbe:Py,Line:kr,Line3:Oy,LineBasicMaterial:kn,LineCurve:Fp,LineCurve3:ny,LineDashedMaterial:gy,LineLoop:J_,LineSegments:qi,LinearDisplayP3ColorSpace:el,LinearFilter:nn,LinearInterpolant:Wp,LinearMipMapLinearFilter:sS,LinearMipMapNearestFilter:rS,LinearMipmapLinearFilter:Hi,LinearMipmapNearestFilter:Sa,LinearSRGBColorSpace:mr,LinearToneMapping:a_,LinearTransfer:Oa,Loader:qn,LoaderUtils:ip,LoadingManager:Yp,LoopOnce:p_,LoopPingPong:g_,LoopRepeat:m_,LuminanceAlphaFormat:yp,LuminanceFormat:_p,MOUSE:$x,Material:Sn,MaterialLoader:Lh,MathUtils:b_,Matrix2:em,Matrix3:dt,Matrix4:tt,MaxEquation:Xv,Mesh:Qt,MeshBasicMaterial:Gr,MeshDepthMaterial:Pp,MeshDistanceMaterial:Ip,MeshLambertMaterial:py,MeshMatcapMaterial:my,MeshNormalMaterial:dy,MeshPhongMaterial:hy,MeshPhysicalMaterial:uy,MeshStandardMaterial:Vp,MeshToonMaterial:fy,MinEquation:Wv,MirroredRepeatWrapping:Da,MixOperation:s_,MultiplyBlending:Yd,MultiplyOperation:Qa,NearestFilter:dn,NearestMipMapLinearFilter:iS,NearestMipMapNearestFilter:nS,NearestMipmapLinearFilter:yo,NearestMipmapNearestFilter:fp,NeutralToneMapping:f_,NeverCompare:x_,NeverDepth:pu,NeverStencilFunc:yS,NoBlending:ur,NoColorSpace:ar,NoToneMapping:Gi,NormalAnimationBlendMode:uh,NormalBlending:xs,NotEqualCompare:E_,NotEqualDepth:xu,NotEqualStencilFunc:ES,NumberKeyframeTrack:Ya,Object3D:Ct,ObjectLoader:mb,ObjectSpaceNormalMap:y_,OctahedronGeometry:ol,OneFactor:qv,OneMinusConstantAlphaFactor:r_,OneMinusConstantColorFactor:n_,OneMinusDstAlphaFactor:Kv,OneMinusDstColorFactor:$v,OneMinusSrcAlphaFactor:du,OneMinusSrcColorFactor:Zv,OrthographicCamera:rl,P3Primaries:Ba,PCFShadowMap:nh,PCFSoftShadowMap:xa,PMREMGenerator:Jd,Path:Va,PerspectiveCamera:fn,Plane:Nr,PlaneGeometry:Uo,PlaneHelper:eC,PointLight:Ay,PointLightHelper:Xb,Points:K_,PointsMaterial:Up,PolarGridHelper:Zb,PolyhedronGeometry:Wr,PositionalAudio:wb,PropertyBinding:bt,PropertyMixer:Dy,QuadraticBezierCurve:Bp,QuadraticBezierCurve3:zp,Quaternion:zn,QuaternionKeyframeTrack:ul,QuaternionLinearInterpolant:Sy,RED_GREEN_RGTC2_Format:Xu,RED_RGTC1_Format:Sp,REVISION:Ka,RGBADepthPacking:__,RGBAFormat:Pn,RGBAIntegerFormat:ch,RGBA_ASTC_10x10_Format:zu,RGBA_ASTC_10x5_Format:Ou,RGBA_ASTC_10x6_Format:Fu,RGBA_ASTC_10x8_Format:Bu,RGBA_ASTC_12x10_Format:ku,RGBA_ASTC_12x12_Format:Hu,RGBA_ASTC_4x4_Format:Cu,RGBA_ASTC_5x4_Format:Ru,RGBA_ASTC_5x5_Format:Pu,RGBA_ASTC_6x5_Format:Iu,RGBA_ASTC_6x6_Format:Lu,RGBA_ASTC_8x5_Format:Du,RGBA_ASTC_8x6_Format:Uu,RGBA_ASTC_8x8_Format:Nu,RGBA_BPTC_Format:Ta,RGBA_ETC2_EAC_Format:bu,RGBA_PVRTC_2BPPV1_Format:Eu,RGBA_PVRTC_4BPPV1_Format:wu,RGBA_S3TC_DXT1_Format:wa,RGBA_S3TC_DXT3_Format:Ea,RGBA_S3TC_DXT5_Format:Aa,RGBDepthPacking:uS,RGBFormat:vp,RGBIntegerFormat:oS,RGB_BPTC_SIGNED_Format:Vu,RGB_BPTC_UNSIGNED_Format:Gu,RGB_ETC1_Format:Au,RGB_ETC2_Format:Tu,RGB_PVRTC_2BPPV1_Format:Mu,RGB_PVRTC_4BPPV1_Format:Su,RGB_S3TC_DXT1_Format:Ma,RGDepthPacking:hS,RGFormat:xp,RGIntegerFormat:lh,RawShaderMaterial:cy,Ray:Do,Raycaster:Ny,Rec709Primaries:Fa,RectAreaLight:Cy,RedFormat:ah,RedIntegerFormat:$a,ReinhardToneMapping:l_,RenderTarget:I_,RepeatWrapping:La,ReplaceStencilOp:dS,ReverseSubtractEquation:Gv,RingGeometry:bh,SIGNED_RED_GREEN_RGTC2_Format:Yu,SIGNED_RED_RGTC1_Format:Wu,SRGBColorSpace:ti,SRGBTransfer:zt,Scene:Zu,ShaderChunk:mt,ShaderLib:Ei,ShaderMaterial:gi,ShadowMaterial:ly,Shape:Br,ShapeGeometry:al,ShapePath:iC,ShapeUtils:Xi,ShortType:pp,Skeleton:vh,SkeletonHelper:Wb,SkinnedMesh:q_,Source:_s,Sphere:mn,SphereGeometry:ll,Spherical:kb,SphericalHarmonics3:Ry,SplineCurve:kp,SpotLight:Ey,SpotLightHelper:Gb,Sprite:X_,SpriteMaterial:Lp,SrcAlphaFactor:fu,SrcAlphaSaturateFactor:e_,SrcColorFactor:jv,StaticCopyUsage:IS,StaticDrawUsage:za,StaticReadUsage:CS,StereoCamera:yb,StreamCopyUsage:DS,StreamDrawUsage:bS,StreamReadUsage:PS,StringKeyframeTrack:Ls,SubtractEquation:Vv,SubtractiveBlending:Xd,TOUCH:eS,TangentSpaceNormalMap:Vr,TetrahedronGeometry:Ch,Texture:Yt,TextureLoader:hb,TextureUtils:rT,TorusGeometry:Rh,TorusKnotGeometry:Ph,Triangle:Xn,TriangleFanDrawMode:cS,TriangleStripDrawMode:lS,TrianglesDrawMode:aS,TubeGeometry:Ih,UVMapping:ih,Uint16BufferAttribute:Tp,Uint32BufferAttribute:bp,Uint8BufferAttribute:vM,Uint8ClampedBufferAttribute:_M,Uniform:$p,UniformsGroup:Bb,UniformsLib:Te,UniformsUtils:ju,UnsignedByteType:Ai,UnsignedInt248Type:Ts,UnsignedInt5999Type:mp,UnsignedIntType:dr,UnsignedShort4444Type:sh,UnsignedShort5551Type:oh,UnsignedShortType:To,VSMShadowMap:wi,Vector2:fe,Vector3:D,Vector4:xt,VectorKeyframeTrack:qa,VideoTexture:ET,WebGL3DRenderTarget:sM,WebGLArrayRenderTarget:rM,WebGLCoordinateSystem:Vi,WebGLCubeRenderTarget:N_,WebGLMultipleRenderTargets:sC,WebGLRenderTarget:Ti,WebGLRenderer:G_,WebGLUtils:H_,WebGPUCoordinateSystem:ka,WireframeGeometry:Hp,WrapAroundEnding:Na,ZeroCurvatureEnding:gs,ZeroFactor:Yv,ZeroSlopeEnding:vs,ZeroStencilOp:fS,createCanvasElement:R_},Symbol.toStringTag,{value:"Module"}));var By={exports:{}},Ds={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Ds.ConcurrentRoot=1;Ds.ContinuousEventPriority=4;Ds.DefaultEventPriority=16;Ds.DiscreteEventPriority=1;Ds.IdleEventPriority=536870912;Ds.LegacyRoot=0;By.exports=Ds;var Eo=By.exports;function aC(r){let e;const t=new Set,n=(h,f)=>{const p=typeof h=="function"?h(e):h;if(p!==e){const m=e;e=f?p:Object.assign({},e,p),t.forEach(v=>v(e,m))}},i=()=>e,s=(h,f=i,p=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let m=f(e);function v(){const y=f(e);if(!p(m,y)){const M=m;h(m=y,M)}}return t.add(v),()=>t.delete(v)},u={setState:n,getState:i,subscribe:(h,f,p)=>f||p?s(h,f,p):(t.add(h),()=>t.delete(h)),destroy:()=>t.clear()};return e=r(n,i,u),u}const lC=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),dv=lC?ve.useEffect:ve.useLayoutEffect;function cC(r){const e=typeof r=="function"?aC(r):r,t=(n=e.getState,i=Object.is)=>{const[,s]=ve.useReducer(x=>x+1,0),a=e.getState(),c=ve.useRef(a),u=ve.useRef(n),h=ve.useRef(i),f=ve.useRef(!1),p=ve.useRef();p.current===void 0&&(p.current=n(a));let m,v=!1;(c.current!==a||u.current!==n||h.current!==i||f.current)&&(m=n(a),v=!i(p.current,m)),dv(()=>{v&&(p.current=m),c.current=a,u.current=n,h.current=i,f.current=!1});const y=ve.useRef(a);dv(()=>{const x=()=>{try{const E=e.getState(),w=u.current(E);h.current(p.current,w)||(c.current=E,p.current=w,s())}catch{f.current=!0,s()}},_=e.subscribe(x);return e.getState()!==y.current&&x(),_},[]);const M=v?m:p.current;return ve.useDebugValue(M),M};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[t,e];return{next(){const i=n.length<=0;return{value:n.shift(),done:i}}}},t}var zy={exports:{}},ky={exports:{}},Hy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function e(z,se){var te=z.length;z.push(se);e:for(;0<te;){var ce=te-1>>>1,ze=z[ce];if(0<i(ze,se))z[ce]=se,z[te]=ze,te=ce;else break e}}function t(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var se=z[0],te=z.pop();if(te!==se){z[0]=te;e:for(var ce=0,ze=z.length,Ye=ze>>>1;ce<Ye;){var ne=2*(ce+1)-1,me=z[ne],Ce=ne+1,Me=z[Ce];if(0>i(me,te))Ce<ze&&0>i(Me,me)?(z[ce]=Me,z[Ce]=te,ce=Ce):(z[ce]=me,z[ne]=te,ce=ne);else if(Ce<ze&&0>i(Me,te))z[ce]=Me,z[Ce]=te,ce=Ce;else break e}}return se}function i(z,se){var te=z.sortIndex-se.sortIndex;return te!==0?te:z.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();r.unstable_now=function(){return a.now()-c}}var u=[],h=[],f=1,p=null,m=3,v=!1,y=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var se=t(h);se!==null;){if(se.callback===null)n(h);else if(se.startTime<=z)n(h),se.sortIndex=se.expirationTime,e(u,se);else break;se=t(h)}}function T(z){if(M=!1,w(z),!y)if(t(u)!==null)y=!0,j(F);else{var se=t(h);se!==null&&ge(T,se.startTime-z)}}function F(z,se){y=!1,M&&(M=!1,_(B),B=-1),v=!0;var te=m;try{for(w(se),p=t(u);p!==null&&(!(p.expirationTime>se)||z&&!C());){var ce=p.callback;if(typeof ce=="function"){p.callback=null,m=p.priorityLevel;var ze=ce(p.expirationTime<=se);se=r.unstable_now(),typeof ze=="function"?p.callback=ze:p===t(u)&&n(u),w(se)}else n(u);p=t(u)}if(p!==null)var Ye=!0;else{var ne=t(h);ne!==null&&ge(T,ne.startTime-se),Ye=!1}return Ye}finally{p=null,m=te,v=!1}}var P=!1,L=null,B=-1,Y=5,b=-1;function C(){return!(r.unstable_now()-b<Y)}function W(){if(L!==null){var z=r.unstable_now();b=z;var se=!0;try{se=L(!0,z)}finally{se?q():(P=!1,L=null)}}else P=!1}var q;if(typeof E=="function")q=function(){E(W)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,le=K.port2;K.port1.onmessage=W,q=function(){le.postMessage(null)}}else q=function(){x(W,0)};function j(z){L=z,P||(P=!0,q())}function ge(z,se){B=x(function(){z(r.unstable_now())},se)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){y||v||(y=!0,j(F))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(z){switch(m){case 1:case 2:case 3:var se=3;break;default:se=m}var te=m;m=se;try{return z()}finally{m=te}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,se){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=m;m=z;try{return se()}finally{m=te}},r.unstable_scheduleCallback=function(z,se,te){var ce=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ce+te:ce):te=ce,z){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=te+ze,z={id:f++,callback:se,priorityLevel:z,startTime:te,expirationTime:ze,sortIndex:-1},te>ce?(z.sortIndex=te,e(h,z),t(u)===null&&z===t(h)&&(M?(_(B),B=-1):M=!0,ge(T,te-ce))):(z.sortIndex=ze,e(u,z),y||v||(y=!0,j(F))),z},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(z){var se=m;return function(){var te=m;m=se;try{return z.apply(this,arguments)}finally{m=te}}}})(Hy);ky.exports=Hy;var sp=ky.exports;/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uC=function(e){var t={},n=ve,i=sp,s=Object.assign;function a(o){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+o,d=1;d<arguments.length;d++)l+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+o+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),y=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),F=Symbol.iterator;function P(o){return o===null||typeof o!="object"?null:(o=F&&o[F]||o["@@iterator"],typeof o=="function"?o:null)}function L(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case f:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case x:return"Suspense";case _:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case y:return(o.displayName||"Context")+".Consumer";case v:return(o._context.displayName||"Context")+".Provider";case M:var l=o.render;return o=o.displayName,o||(o=l.displayName||l.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case E:return l=o.displayName||null,l!==null?l:L(o.type)||"Memo";case w:l=o._payload,o=o._init;try{return L(o(l))}catch{}}return null}function B(o){var l=o.type;switch(o.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=l.render,o=o.displayName||o.name||"",l.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return L(l);case 8:return l===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function Y(o){var l=o,d=o;if(o.alternate)for(;l.return;)l=l.return;else{o=l;do l=o,l.flags&4098&&(d=l.return),o=l.return;while(o)}return l.tag===3?d:null}function b(o){if(Y(o)!==o)throw Error(a(188))}function C(o){var l=o.alternate;if(!l){if(l=Y(o),l===null)throw Error(a(188));return l!==o?null:o}for(var d=o,g=l;;){var S=d.return;if(S===null)break;var A=S.alternate;if(A===null){if(g=S.return,g!==null){d=g;continue}break}if(S.child===A.child){for(A=S.child;A;){if(A===d)return b(S),o;if(A===g)return b(S),l;A=A.sibling}throw Error(a(188))}if(d.return!==g.return)d=S,g=A;else{for(var O=!1,k=S.child;k;){if(k===d){O=!0,d=S,g=A;break}if(k===g){O=!0,g=S,d=A;break}k=k.sibling}if(!O){for(k=A.child;k;){if(k===d){O=!0,d=A,g=S;break}if(k===g){O=!0,g=A,d=S;break}k=k.sibling}if(!O)throw Error(a(189))}}if(d.alternate!==g)throw Error(a(190))}if(d.tag!==3)throw Error(a(188));return d.stateNode.current===d?o:l}function W(o){return o=C(o),o!==null?q(o):null}function q(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var l=q(o);if(l!==null)return l;o=o.sibling}return null}function K(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){if(o.tag!==4){var l=K(o);if(l!==null)return l}o=o.sibling}return null}var le=Array.isArray,j=e.getPublicInstance,ge=e.getRootHostContext,z=e.getChildHostContext,se=e.prepareForCommit,te=e.resetAfterCommit,ce=e.createInstance,ze=e.appendInitialChild,Ye=e.finalizeInitialChildren,ne=e.prepareUpdate,me=e.shouldSetTextContent,Ce=e.createTextInstance,Me=e.scheduleTimeout,st=e.cancelTimeout,$e=e.noTimeout,ot=e.isPrimaryRenderer,it=e.supportsMutation,he=e.supportsPersistence,N=e.supportsHydration,Ee=e.getInstanceFromNode,we=e.preparePortalMount,_e=e.getCurrentEventPriority,Ae=e.detachDeletedInstance,Je=e.supportsMicrotasks,Ue=e.scheduleMicrotask,U=e.supportsTestSelectors,R=e.findFiberRoot,Z=e.getBoundingRect,oe=e.getTextContent,ue=e.isHiddenSubtree,ae=e.matchAccessibilityRole,qe=e.setFocusIfFocusable,be=e.setupIntersectionObserver,Fe=e.appendChild,St=e.appendChildToContainer,ye=e.commitTextUpdate,Be=e.commitMount,at=e.commitUpdate,lt=e.insertBefore,ke=e.insertInContainerBefore,Mt=e.removeChild,ut=e.removeChildFromContainer,Nt=e.resetTextContent,H=e.hideInstance,Ne=e.hideTextInstance,ie=e.unhideInstance,de=e.unhideTextInstance,Ie=e.clearContainer,Oe=e.cloneInstance,wt=e.createContainerChildSet,Gt=e.appendChildToContainerChildSet,Mn=e.finalizeContainerChildren,Et=e.replaceContainerChildren,gn=e.cloneHiddenInstance,si=e.cloneHiddenTextInstance,fl=e.canHydrateInstance,dl=e.canHydrateTextInstance,ji=e.canHydrateSuspenseInstance,Us=e.isSuspenseInstancePending,Ns=e.isSuspenseInstanceFallback,pl=e.registerSuspenseInstanceRetry,Ri=e.getNextHydratableSibling,ml=e.getFirstHydratableChild,Os=e.getFirstHydratableChildWithinContainer,gl=e.getFirstHydratableChildWithinSuspenseInstance,vl=e.hydrateInstance,Dh=e.hydrateTextInstance,Uh=e.hydrateSuspenseInstance,Nh=e.getNextHydratableInstanceAfterSuspenseInstance,I=e.commitHydratedContainer,V=e.commitHydratedSuspenseInstance,Q=e.clearSuspenseBoundary,$=e.clearSuspenseBoundaryFromContainer,X=e.shouldDeleteUnhydratedTailInstances,Se=e.didNotMatchHydratedContainerTextInstance,Le=e.didNotMatchHydratedTextInstance,He;function Ve(o){if(He===void 0)try{throw Error()}catch(d){var l=d.stack.trim().match(/\n( *(at )?)/);He=l&&l[1]||""}return`
`+He+o}var nt=!1;function rt(o,l){if(!o||nt)return"";nt=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(xe){var g=xe}Reflect.construct(o,[],l)}else{try{l.call()}catch(xe){g=xe}o.call(l.prototype)}else{try{throw Error()}catch(xe){g=xe}o()}}catch(xe){if(xe&&g&&typeof xe.stack=="string"){for(var S=xe.stack.split(`
`),A=g.stack.split(`
`),O=S.length-1,k=A.length-1;1<=O&&0<=k&&S[O]!==A[k];)k--;for(;1<=O&&0<=k;O--,k--)if(S[O]!==A[k]){if(O!==1||k!==1)do if(O--,k--,0>k||S[O]!==A[k]){var re=`
`+S[O].replace(" at new "," at ");return o.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",o.displayName)),re}while(1<=O&&0<=k);break}}}finally{nt=!1,Error.prepareStackTrace=d}return(o=o?o.displayName||o.name:"")?Ve(o):""}var je=Object.prototype.hasOwnProperty,Tt=[],Rt=-1;function Ut(o){return{current:o}}function _t(o){0>Rt||(o.current=Tt[Rt],Tt[Rt]=null,Rt--)}function Ke(o,l){Rt++,Tt[Rt]=o.current,o.current=l}var We={},At=Ut(We),ct=Ut(!1),rn=We;function jn(o,l){var d=o.type.contextTypes;if(!d)return We;var g=o.stateNode;if(g&&g.__reactInternalMemoizedUnmaskedChildContext===l)return g.__reactInternalMemoizedMaskedChildContext;var S={},A;for(A in d)S[A]=l[A];return g&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=l,o.__reactInternalMemoizedMaskedChildContext=S),S}function Ot(o){return o=o.childContextTypes,o!=null}function vr(){_t(ct),_t(At)}function Ht(o,l,d){if(At.current!==We)throw Error(a(168));Ke(At,l),Ke(ct,d)}function vi(o,l,d){var g=o.stateNode;if(l=l.childContextTypes,typeof g.getChildContext!="function")return d;g=g.getChildContext();for(var S in g)if(!(S in l))throw Error(a(108,B(o)||"Unknown",S));return s({},d,g)}function _r(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||We,rn=At.current,Ke(At,o),Ke(ct,ct.current),!0}function In(o,l,d){var g=o.stateNode;if(!g)throw Error(a(169));d?(o=vi(o,l,rn),g.__reactInternalMemoizedMergedChildContext=o,_t(ct),_t(At),Ke(At,o)):_t(ct),Ke(ct,d)}var Ln=Math.clz32?Math.clz32:ux,Oh=Math.log,_l=Math.LN2;function ux(o){return o>>>=0,o===0?32:31-(Oh(o)/_l|0)|0}var yl=64,xl=4194304;function Fo(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function Sl(o,l){var d=o.pendingLanes;if(d===0)return 0;var g=0,S=o.suspendedLanes,A=o.pingedLanes,O=d&268435455;if(O!==0){var k=O&~S;k!==0?g=Fo(k):(A&=O,A!==0&&(g=Fo(A)))}else O=d&~S,O!==0?g=Fo(O):A!==0&&(g=Fo(A));if(g===0)return 0;if(l!==0&&l!==g&&!(l&S)&&(S=g&-g,A=l&-l,S>=A||S===16&&(A&4194240)!==0))return l;if(g&4&&(g|=d&16),l=o.entangledLanes,l!==0)for(o=o.entanglements,l&=g;0<l;)d=31-Ln(l),S=1<<d,g|=o[d],l&=~S;return g}function hx(o,l){switch(o){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fx(o,l){for(var d=o.suspendedLanes,g=o.pingedLanes,S=o.expirationTimes,A=o.pendingLanes;0<A;){var O=31-Ln(A),k=1<<O,re=S[O];re===-1?(!(k&d)||k&g)&&(S[O]=hx(k,l)):re<=l&&(o.expiredLanes|=k),A&=~k}}function Fh(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Bh(o){for(var l=[],d=0;31>d;d++)l.push(o);return l}function Bo(o,l,d){o.pendingLanes|=l,l!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,l=31-Ln(l),o[l]=d}function dx(o,l){var d=o.pendingLanes&~l;o.pendingLanes=l,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=l,o.mutableReadLanes&=l,o.entangledLanes&=l,l=o.entanglements;var g=o.eventTimes;for(o=o.expirationTimes;0<d;){var S=31-Ln(d),A=1<<S;l[S]=0,g[S]=-1,o[S]=-1,d&=~A}}function zh(o,l){var d=o.entangledLanes|=l;for(o=o.entanglements;d;){var g=31-Ln(d),S=1<<g;S&l|o[g]&l&&(o[g]|=l),d&=~S}}var Pt=0;function sm(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var kh=i.unstable_scheduleCallback,om=i.unstable_cancelCallback,px=i.unstable_shouldYield,mx=i.unstable_requestPaint,ln=i.unstable_now,Hh=i.unstable_ImmediatePriority,gx=i.unstable_UserBlockingPriority,Vh=i.unstable_NormalPriority,vx=i.unstable_IdlePriority,Ml=null,Pi=null;function _x(o){if(Pi&&typeof Pi.onCommitFiberRoot=="function")try{Pi.onCommitFiberRoot(Ml,o,void 0,(o.current.flags&128)===128)}catch{}}function yx(o,l){return o===l&&(o!==0||1/o===1/l)||o!==o&&l!==l}var Ii=typeof Object.is=="function"?Object.is:yx,Zi=null,wl=!1,Gh=!1;function am(o){Zi===null?Zi=[o]:Zi.push(o)}function xx(o){wl=!0,am(o)}function Li(){if(!Gh&&Zi!==null){Gh=!0;var o=0,l=Pt;try{var d=Zi;for(Pt=1;o<d.length;o++){var g=d[o];do g=g(!0);while(g!==null)}Zi=null,wl=!1}catch(S){throw Zi!==null&&(Zi=Zi.slice(o+1)),kh(Hh,Li),S}finally{Pt=l,Gh=!1}}return null}var Sx=c.ReactCurrentBatchConfig;function El(o,l){if(Ii(o,l))return!0;if(typeof o!="object"||o===null||typeof l!="object"||l===null)return!1;var d=Object.keys(o),g=Object.keys(l);if(d.length!==g.length)return!1;for(g=0;g<d.length;g++){var S=d[g];if(!je.call(l,S)||!Ii(o[S],l[S]))return!1}return!0}function Mx(o){switch(o.tag){case 5:return Ve(o.type);case 16:return Ve("Lazy");case 13:return Ve("Suspense");case 19:return Ve("SuspenseList");case 0:case 2:case 15:return o=rt(o.type,!1),o;case 11:return o=rt(o.type.render,!1),o;case 1:return o=rt(o.type,!0),o;default:return""}}function _i(o,l){if(o&&o.defaultProps){l=s({},l),o=o.defaultProps;for(var d in o)l[d]===void 0&&(l[d]=o[d]);return l}return l}var Al=Ut(null),Tl=null,Fs=null,Wh=null;function Xh(){Wh=Fs=Tl=null}function lm(o,l,d){ot?(Ke(Al,l._currentValue),l._currentValue=d):(Ke(Al,l._currentValue2),l._currentValue2=d)}function Yh(o){var l=Al.current;_t(Al),ot?o._currentValue=l:o._currentValue2=l}function qh(o,l,d){for(;o!==null;){var g=o.alternate;if((o.childLanes&l)!==l?(o.childLanes|=l,g!==null&&(g.childLanes|=l)):g!==null&&(g.childLanes&l)!==l&&(g.childLanes|=l),o===d)break;o=o.return}}function Bs(o,l){Tl=o,Wh=Fs=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&l&&(Kn=!0),o.firstContext=null)}function oi(o){var l=ot?o._currentValue:o._currentValue2;if(Wh!==o)if(o={context:o,memoizedValue:l,next:null},Fs===null){if(Tl===null)throw Error(a(308));Fs=o,Tl.dependencies={lanes:0,firstContext:o}}else Fs=Fs.next=o;return l}var Di=null,yr=!1;function jh(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cm(o,l){o=o.updateQueue,l.updateQueue===o&&(l.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Ji(o,l){return{eventTime:o,lane:l,tag:0,payload:null,callback:null,next:null}}function xr(o,l){var d=o.updateQueue;d!==null&&(d=d.shared,$t!==null&&o.mode&1&&!(yt&2)?(o=d.interleaved,o===null?(l.next=l,Di===null?Di=[d]:Di.push(d)):(l.next=o.next,o.next=l),d.interleaved=l):(o=d.pending,o===null?l.next=l:(l.next=o.next,o.next=l),d.pending=l))}function bl(o,l,d){if(l=l.updateQueue,l!==null&&(l=l.shared,(d&4194240)!==0)){var g=l.lanes;g&=o.pendingLanes,d|=g,l.lanes=d,zh(o,d)}}function um(o,l){var d=o.updateQueue,g=o.alternate;if(g!==null&&(g=g.updateQueue,d===g)){var S=null,A=null;if(d=d.firstBaseUpdate,d!==null){do{var O={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};A===null?S=A=O:A=A.next=O,d=d.next}while(d!==null);A===null?S=A=l:A=A.next=l}else S=A=l;d={baseState:g.baseState,firstBaseUpdate:S,lastBaseUpdate:A,shared:g.shared,effects:g.effects},o.updateQueue=d;return}o=d.lastBaseUpdate,o===null?d.firstBaseUpdate=l:o.next=l,d.lastBaseUpdate=l}function Cl(o,l,d,g){var S=o.updateQueue;yr=!1;var A=S.firstBaseUpdate,O=S.lastBaseUpdate,k=S.shared.pending;if(k!==null){S.shared.pending=null;var re=k,xe=re.next;re.next=null,O===null?A=xe:O.next=xe,O=re;var Ge=o.alternate;Ge!==null&&(Ge=Ge.updateQueue,k=Ge.lastBaseUpdate,k!==O&&(k===null?Ge.firstBaseUpdate=xe:k.next=xe,Ge.lastBaseUpdate=re))}if(A!==null){var ht=S.baseState;O=0,Ge=xe=re=null,k=A;do{var et=k.lane,Bt=k.eventTime;if((g&et)===et){Ge!==null&&(Ge=Ge.next={eventTime:Bt,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Qe=o,Tn=k;switch(et=l,Bt=d,Tn.tag){case 1:if(Qe=Tn.payload,typeof Qe=="function"){ht=Qe.call(Bt,ht,et);break e}ht=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=Tn.payload,et=typeof Qe=="function"?Qe.call(Bt,ht,et):Qe,et==null)break e;ht=s({},ht,et);break e;case 2:yr=!0}}k.callback!==null&&k.lane!==0&&(o.flags|=64,et=S.effects,et===null?S.effects=[k]:et.push(k))}else Bt={eventTime:Bt,lane:et,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Ge===null?(xe=Ge=Bt,re=ht):Ge=Ge.next=Bt,O|=et;if(k=k.next,k===null){if(k=S.shared.pending,k===null)break;et=k,k=et.next,et.next=null,S.lastBaseUpdate=et,S.shared.pending=null}}while(!0);if(Ge===null&&(re=ht),S.baseState=re,S.firstBaseUpdate=xe,S.lastBaseUpdate=Ge,l=S.shared.interleaved,l!==null){S=l;do O|=S.lane,S=S.next;while(S!==l)}else A===null&&(S.shared.lanes=0);qs|=O,o.lanes=O,o.memoizedState=ht}}function hm(o,l,d){if(o=l.effects,l.effects=null,o!==null)for(l=0;l<o.length;l++){var g=o[l],S=g.callback;if(S!==null){if(g.callback=null,g=d,typeof S!="function")throw Error(a(191,S));S.call(g)}}}var fm=new n.Component().refs;function Zh(o,l,d,g){l=o.memoizedState,d=d(g,l),d=d==null?l:s({},l,d),o.memoizedState=d,o.lanes===0&&(o.updateQueue.baseState=d)}var Rl={isMounted:function(o){return(o=o._reactInternals)?Y(o)===o:!1},enqueueSetState:function(o,l,d){o=o._reactInternals;var g=Un(),S=wr(o),A=Ji(g,S);A.payload=l,d!=null&&(A.callback=d),xr(o,A),l=hi(o,S,g),l!==null&&bl(l,o,S)},enqueueReplaceState:function(o,l,d){o=o._reactInternals;var g=Un(),S=wr(o),A=Ji(g,S);A.tag=1,A.payload=l,d!=null&&(A.callback=d),xr(o,A),l=hi(o,S,g),l!==null&&bl(l,o,S)},enqueueForceUpdate:function(o,l){o=o._reactInternals;var d=Un(),g=wr(o),S=Ji(d,g);S.tag=2,l!=null&&(S.callback=l),xr(o,S),l=hi(o,g,d),l!==null&&bl(l,o,g)}};function dm(o,l,d,g,S,A,O){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(g,A,O):l.prototype&&l.prototype.isPureReactComponent?!El(d,g)||!El(S,A):!0}function pm(o,l,d){var g=!1,S=We,A=l.contextType;return typeof A=="object"&&A!==null?A=oi(A):(S=Ot(l)?rn:At.current,g=l.contextTypes,A=(g=g!=null)?jn(o,S):We),l=new l(d,A),o.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Rl,o.stateNode=l,l._reactInternals=o,g&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=S,o.__reactInternalMemoizedMaskedChildContext=A),l}function mm(o,l,d,g){o=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(d,g),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(d,g),l.state!==o&&Rl.enqueueReplaceState(l,l.state,null)}function Jh(o,l,d,g){var S=o.stateNode;S.props=d,S.state=o.memoizedState,S.refs=fm,jh(o);var A=l.contextType;typeof A=="object"&&A!==null?S.context=oi(A):(A=Ot(l)?rn:At.current,S.context=jn(o,A)),S.state=o.memoizedState,A=l.getDerivedStateFromProps,typeof A=="function"&&(Zh(o,l,A,d),S.state=o.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(l=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),l!==S.state&&Rl.enqueueReplaceState(S,S.state,null),Cl(o,d,S,g),S.state=o.memoizedState),typeof S.componentDidMount=="function"&&(o.flags|=4194308)}var zs=[],ks=0,Pl=null,Il=0,ai=[],li=0,Yr=null,Ki=1,Qi="";function qr(o,l){zs[ks++]=Il,zs[ks++]=Pl,Pl=o,Il=l}function gm(o,l,d){ai[li++]=Ki,ai[li++]=Qi,ai[li++]=Yr,Yr=o;var g=Ki;o=Qi;var S=32-Ln(g)-1;g&=~(1<<S),d+=1;var A=32-Ln(l)+S;if(30<A){var O=S-S%5;A=(g&(1<<O)-1).toString(32),g>>=O,S-=O,Ki=1<<32-Ln(l)+S|d<<S|g,Qi=A+o}else Ki=1<<A|d<<S|g,Qi=o}function Kh(o){o.return!==null&&(qr(o,1),gm(o,1,0))}function Qh(o){for(;o===Pl;)Pl=zs[--ks],zs[ks]=null,Il=zs[--ks],zs[ks]=null;for(;o===Yr;)Yr=ai[--li],ai[li]=null,Qi=ai[--li],ai[li]=null,Ki=ai[--li],ai[li]=null}var Zn=null,Jn=null,Vt=!1,zo=!1,yi=null;function vm(o,l){var d=fi(5,null,null,0);d.elementType="DELETED",d.stateNode=l,d.return=o,l=o.deletions,l===null?(o.deletions=[d],o.flags|=16):l.push(d)}function _m(o,l){switch(o.tag){case 5:return l=fl(l,o.type,o.pendingProps),l!==null?(o.stateNode=l,Zn=o,Jn=ml(l),!0):!1;case 6:return l=dl(l,o.pendingProps),l!==null?(o.stateNode=l,Zn=o,Jn=null,!0):!1;case 13:if(l=ji(l),l!==null){var d=Yr!==null?{id:Ki,overflow:Qi}:null;return o.memoizedState={dehydrated:l,treeContext:d,retryLane:1073741824},d=fi(18,null,null,0),d.stateNode=l,d.return=o,o.child=d,Zn=o,Jn=null,!0}return!1;default:return!1}}function $h(o){return(o.mode&1)!==0&&(o.flags&128)===0}function ef(o){if(Vt){var l=Jn;if(l){var d=l;if(!_m(o,l)){if($h(o))throw Error(a(418));l=Ri(d);var g=Zn;l&&_m(o,l)?vm(g,d):(o.flags=o.flags&-4097|2,Vt=!1,Zn=o)}}else{if($h(o))throw Error(a(418));o.flags=o.flags&-4097|2,Vt=!1,Zn=o}}}function ym(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;Zn=o}function ko(o){if(!N||o!==Zn)return!1;if(!Vt)return ym(o),Vt=!0,!1;if(o.tag!==3&&(o.tag!==5||X(o.type)&&!me(o.type,o.memoizedProps))){var l=Jn;if(l){if($h(o)){for(o=Jn;o;)o=Ri(o);throw Error(a(418))}for(;l;)vm(o,l),l=Ri(l)}}if(ym(o),o.tag===13){if(!N)throw Error(a(316));if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));Jn=Nh(o)}else Jn=Zn?Ri(o.stateNode):null;return!0}function Hs(){N&&(Jn=Zn=null,zo=Vt=!1)}function tf(o){yi===null?yi=[o]:yi.push(o)}function Ho(o,l,d){if(o=d.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(a(309));var g=d.stateNode}if(!g)throw Error(a(147,o));var S=g,A=""+o;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===A?l.ref:(l=function(O){var k=S.refs;k===fm&&(k=S.refs={}),O===null?delete k[A]:k[A]=O},l._stringRef=A,l)}if(typeof o!="string")throw Error(a(284));if(!d._owner)throw Error(a(290,o))}return o}function Ll(o,l){throw o=Object.prototype.toString.call(l),Error(a(31,o==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":o))}function xm(o){var l=o._init;return l(o._payload)}function Sm(o){function l(J,G){if(o){var ee=J.deletions;ee===null?(J.deletions=[G],J.flags|=16):ee.push(G)}}function d(J,G){if(!o)return null;for(;G!==null;)l(J,G),G=G.sibling;return null}function g(J,G){for(J=new Map;G!==null;)G.key!==null?J.set(G.key,G):J.set(G.index,G),G=G.sibling;return J}function S(J,G){return J=Ar(J,G),J.index=0,J.sibling=null,J}function A(J,G,ee){return J.index=ee,o?(ee=J.alternate,ee!==null?(ee=ee.index,ee<G?(J.flags|=2,G):ee):(J.flags|=2,G)):(J.flags|=1048576,G)}function O(J){return o&&J.alternate===null&&(J.flags|=2),J}function k(J,G,ee,Pe){return G===null||G.tag!==6?(G=zf(ee,J.mode,Pe),G.return=J,G):(G=S(G,ee),G.return=J,G)}function re(J,G,ee,Pe){var Ze=ee.type;return Ze===f?Ge(J,G,ee.props.children,Pe,ee.key):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===w&&xm(Ze)===G.type)?(Pe=S(G,ee.props),Pe.ref=Ho(J,G,ee),Pe.return=J,Pe):(Pe=cc(ee.type,ee.key,ee.props,null,J.mode,Pe),Pe.ref=Ho(J,G,ee),Pe.return=J,Pe)}function xe(J,G,ee,Pe){return G===null||G.tag!==4||G.stateNode.containerInfo!==ee.containerInfo||G.stateNode.implementation!==ee.implementation?(G=kf(ee,J.mode,Pe),G.return=J,G):(G=S(G,ee.children||[]),G.return=J,G)}function Ge(J,G,ee,Pe,Ze){return G===null||G.tag!==7?(G=es(ee,J.mode,Pe,Ze),G.return=J,G):(G=S(G,ee),G.return=J,G)}function ht(J,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number")return G=zf(""+G,J.mode,ee),G.return=J,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case u:return ee=cc(G.type,G.key,G.props,null,J.mode,ee),ee.ref=Ho(J,null,G),ee.return=J,ee;case h:return G=kf(G,J.mode,ee),G.return=J,G;case w:var Pe=G._init;return ht(J,Pe(G._payload),ee)}if(le(G)||P(G))return G=es(G,J.mode,ee,null),G.return=J,G;Ll(J,G)}return null}function et(J,G,ee,Pe){var Ze=G!==null?G.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ze!==null?null:k(J,G,""+ee,Pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return ee.key===Ze?re(J,G,ee,Pe):null;case h:return ee.key===Ze?xe(J,G,ee,Pe):null;case w:return Ze=ee._init,et(J,G,Ze(ee._payload),Pe)}if(le(ee)||P(ee))return Ze!==null?null:Ge(J,G,ee,Pe,null);Ll(J,ee)}return null}function Bt(J,G,ee,Pe,Ze){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return J=J.get(ee)||null,k(G,J,""+Pe,Ze);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case u:return J=J.get(Pe.key===null?ee:Pe.key)||null,re(G,J,Pe,Ze);case h:return J=J.get(Pe.key===null?ee:Pe.key)||null,xe(G,J,Pe,Ze);case w:var vt=Pe._init;return Bt(J,G,ee,vt(Pe._payload),Ze)}if(le(Pe)||P(Pe))return J=J.get(ee)||null,Ge(G,J,Pe,Ze,null);Ll(G,Pe)}return null}function Qe(J,G,ee,Pe){for(var Ze=null,vt=null,ft=G,It=G=0,un=null;ft!==null&&It<ee.length;It++){ft.index>It?(un=ft,ft=null):un=ft.sibling;var Lt=et(J,ft,ee[It],Pe);if(Lt===null){ft===null&&(ft=un);break}o&&ft&&Lt.alternate===null&&l(J,ft),G=A(Lt,G,It),vt===null?Ze=Lt:vt.sibling=Lt,vt=Lt,ft=un}if(It===ee.length)return d(J,ft),Vt&&qr(J,It),Ze;if(ft===null){for(;It<ee.length;It++)ft=ht(J,ee[It],Pe),ft!==null&&(G=A(ft,G,It),vt===null?Ze=ft:vt.sibling=ft,vt=ft);return Vt&&qr(J,It),Ze}for(ft=g(J,ft);It<ee.length;It++)un=Bt(ft,J,It,ee[It],Pe),un!==null&&(o&&un.alternate!==null&&ft.delete(un.key===null?It:un.key),G=A(un,G,It),vt===null?Ze=un:vt.sibling=un,vt=un);return o&&ft.forEach(function(Tr){return l(J,Tr)}),Vt&&qr(J,It),Ze}function Tn(J,G,ee,Pe){var Ze=P(ee);if(typeof Ze!="function")throw Error(a(150));if(ee=Ze.call(ee),ee==null)throw Error(a(151));for(var vt=Ze=null,ft=G,It=G=0,un=null,Lt=ee.next();ft!==null&&!Lt.done;It++,Lt=ee.next()){ft.index>It?(un=ft,ft=null):un=ft.sibling;var Tr=et(J,ft,Lt.value,Pe);if(Tr===null){ft===null&&(ft=un);break}o&&ft&&Tr.alternate===null&&l(J,ft),G=A(Tr,G,It),vt===null?Ze=Tr:vt.sibling=Tr,vt=Tr,ft=un}if(Lt.done)return d(J,ft),Vt&&qr(J,It),Ze;if(ft===null){for(;!Lt.done;It++,Lt=ee.next())Lt=ht(J,Lt.value,Pe),Lt!==null&&(G=A(Lt,G,It),vt===null?Ze=Lt:vt.sibling=Lt,vt=Lt);return Vt&&qr(J,It),Ze}for(ft=g(J,ft);!Lt.done;It++,Lt=ee.next())Lt=Bt(ft,J,It,Lt.value,Pe),Lt!==null&&(o&&Lt.alternate!==null&&ft.delete(Lt.key===null?It:Lt.key),G=A(Lt,G,It),vt===null?Ze=Lt:vt.sibling=Lt,vt=Lt);return o&&ft.forEach(function(Qx){return l(J,Qx)}),Vt&&qr(J,It),Ze}function di(J,G,ee,Pe){if(typeof ee=="object"&&ee!==null&&ee.type===f&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:e:{for(var Ze=ee.key,vt=G;vt!==null;){if(vt.key===Ze){if(Ze=ee.type,Ze===f){if(vt.tag===7){d(J,vt.sibling),G=S(vt,ee.props.children),G.return=J,J=G;break e}}else if(vt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===w&&xm(Ze)===vt.type){d(J,vt.sibling),G=S(vt,ee.props),G.ref=Ho(J,vt,ee),G.return=J,J=G;break e}d(J,vt);break}else l(J,vt);vt=vt.sibling}ee.type===f?(G=es(ee.props.children,J.mode,Pe,ee.key),G.return=J,J=G):(Pe=cc(ee.type,ee.key,ee.props,null,J.mode,Pe),Pe.ref=Ho(J,G,ee),Pe.return=J,J=Pe)}return O(J);case h:e:{for(vt=ee.key;G!==null;){if(G.key===vt)if(G.tag===4&&G.stateNode.containerInfo===ee.containerInfo&&G.stateNode.implementation===ee.implementation){d(J,G.sibling),G=S(G,ee.children||[]),G.return=J,J=G;break e}else{d(J,G);break}else l(J,G);G=G.sibling}G=kf(ee,J.mode,Pe),G.return=J,J=G}return O(J);case w:return vt=ee._init,di(J,G,vt(ee._payload),Pe)}if(le(ee))return Qe(J,G,ee,Pe);if(P(ee))return Tn(J,G,ee,Pe);Ll(J,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,G!==null&&G.tag===6?(d(J,G.sibling),G=S(G,ee),G.return=J,J=G):(d(J,G),G=zf(ee,J.mode,Pe),G.return=J,J=G),O(J)):d(J,G)}return di}var Vs=Sm(!0),Mm=Sm(!1),Vo={},ci=Ut(Vo),Go=Ut(Vo),Gs=Ut(Vo);function Ui(o){if(o===Vo)throw Error(a(174));return o}function nf(o,l){Ke(Gs,l),Ke(Go,o),Ke(ci,Vo),o=ge(l),_t(ci),Ke(ci,o)}function Ws(){_t(ci),_t(Go),_t(Gs)}function wm(o){var l=Ui(Gs.current),d=Ui(ci.current);l=z(d,o.type,l),d!==l&&(Ke(Go,o),Ke(ci,l))}function rf(o){Go.current===o&&(_t(ci),_t(Go))}var Wt=Ut(0);function Dl(o){for(var l=o;l!==null;){if(l.tag===13){var d=l.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||Us(d)||Ns(d)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var sf=[];function of(){for(var o=0;o<sf.length;o++){var l=sf[o];ot?l._workInProgressVersionPrimary=null:l._workInProgressVersionSecondary=null}sf.length=0}var Ul=c.ReactCurrentDispatcher,ui=c.ReactCurrentBatchConfig,Xs=0,qt=null,wn=null,cn=null,Nl=!1,Wo=!1,Xo=0,wx=0;function En(){throw Error(a(321))}function af(o,l){if(l===null)return!1;for(var d=0;d<l.length&&d<o.length;d++)if(!Ii(o[d],l[d]))return!1;return!0}function lf(o,l,d,g,S,A){if(Xs=A,qt=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Ul.current=o===null||o.memoizedState===null?bx:Cx,o=d(g,S),Wo){A=0;do{if(Wo=!1,Xo=0,25<=A)throw Error(a(301));A+=1,cn=wn=null,l.updateQueue=null,Ul.current=Rx,o=d(g,S)}while(Wo)}if(Ul.current=kl,l=wn!==null&&wn.next!==null,Xs=0,cn=wn=qt=null,Nl=!1,l)throw Error(a(300));return o}function cf(){var o=Xo!==0;return Xo=0,o}function $i(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?qt.memoizedState=cn=o:cn=cn.next=o,cn}function Ni(){if(wn===null){var o=qt.alternate;o=o!==null?o.memoizedState:null}else o=wn.next;var l=cn===null?qt.memoizedState:cn.next;if(l!==null)cn=l,wn=o;else{if(o===null)throw Error(a(310));wn=o,o={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},cn===null?qt.memoizedState=cn=o:cn=cn.next=o}return cn}function jr(o,l){return typeof l=="function"?l(o):l}function Ol(o){var l=Ni(),d=l.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=o;var g=wn,S=g.baseQueue,A=d.pending;if(A!==null){if(S!==null){var O=S.next;S.next=A.next,A.next=O}g.baseQueue=S=A,d.pending=null}if(S!==null){A=S.next,g=g.baseState;var k=O=null,re=null,xe=A;do{var Ge=xe.lane;if((Xs&Ge)===Ge)re!==null&&(re=re.next={lane:0,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null}),g=xe.hasEagerState?xe.eagerState:o(g,xe.action);else{var ht={lane:Ge,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null};re===null?(k=re=ht,O=g):re=re.next=ht,qt.lanes|=Ge,qs|=Ge}xe=xe.next}while(xe!==null&&xe!==A);re===null?O=g:re.next=k,Ii(g,l.memoizedState)||(Kn=!0),l.memoizedState=g,l.baseState=O,l.baseQueue=re,d.lastRenderedState=g}if(o=d.interleaved,o!==null){S=o;do A=S.lane,qt.lanes|=A,qs|=A,S=S.next;while(S!==o)}else S===null&&(d.lanes=0);return[l.memoizedState,d.dispatch]}function Fl(o){var l=Ni(),d=l.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=o;var g=d.dispatch,S=d.pending,A=l.memoizedState;if(S!==null){d.pending=null;var O=S=S.next;do A=o(A,O.action),O=O.next;while(O!==S);Ii(A,l.memoizedState)||(Kn=!0),l.memoizedState=A,l.baseQueue===null&&(l.baseState=A),d.lastRenderedState=A}return[A,g]}function Em(){}function Am(o,l){var d=qt,g=Ni(),S=l(),A=!Ii(g.memoizedState,S);if(A&&(g.memoizedState=S,Kn=!0),g=g.queue,qo(Cm.bind(null,d,g,o),[o]),g.getSnapshot!==l||A||cn!==null&&cn.memoizedState.tag&1){if(d.flags|=2048,Yo(9,bm.bind(null,d,g,S,l),void 0,null),$t===null)throw Error(a(349));Xs&30||Tm(d,l,S)}return S}function Tm(o,l,d){o.flags|=16384,o={getSnapshot:l,value:d},l=qt.updateQueue,l===null?(l={lastEffect:null,stores:null},qt.updateQueue=l,l.stores=[o]):(d=l.stores,d===null?l.stores=[o]:d.push(o))}function bm(o,l,d,g){l.value=d,l.getSnapshot=g,Rm(l)&&hi(o,1,-1)}function Cm(o,l,d){return d(function(){Rm(l)&&hi(o,1,-1)})}function Rm(o){var l=o.getSnapshot;o=o.value;try{var d=l();return!Ii(o,d)}catch{return!0}}function uf(o){var l=$i();return typeof o=="function"&&(o=o()),l.memoizedState=l.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:o},l.queue=o,o=o.dispatch=Tx.bind(null,qt,o),[l.memoizedState,o]}function Yo(o,l,d,g){return o={tag:o,create:l,destroy:d,deps:g,next:null},l=qt.updateQueue,l===null?(l={lastEffect:null,stores:null},qt.updateQueue=l,l.lastEffect=o.next=o):(d=l.lastEffect,d===null?l.lastEffect=o.next=o:(g=d.next,d.next=o,o.next=g,l.lastEffect=o)),o}function Pm(){return Ni().memoizedState}function Bl(o,l,d,g){var S=$i();qt.flags|=o,S.memoizedState=Yo(1|l,d,void 0,g===void 0?null:g)}function zl(o,l,d,g){var S=Ni();g=g===void 0?null:g;var A=void 0;if(wn!==null){var O=wn.memoizedState;if(A=O.destroy,g!==null&&af(g,O.deps)){S.memoizedState=Yo(l,d,A,g);return}}qt.flags|=o,S.memoizedState=Yo(1|l,d,A,g)}function hf(o,l){return Bl(8390656,8,o,l)}function qo(o,l){return zl(2048,8,o,l)}function Im(o,l){return zl(4,2,o,l)}function Lm(o,l){return zl(4,4,o,l)}function Dm(o,l){if(typeof l=="function")return o=o(),l(o),function(){l(null)};if(l!=null)return o=o(),l.current=o,function(){l.current=null}}function Um(o,l,d){return d=d!=null?d.concat([o]):null,zl(4,4,Dm.bind(null,l,o),d)}function ff(){}function Nm(o,l){var d=Ni();l=l===void 0?null:l;var g=d.memoizedState;return g!==null&&l!==null&&af(l,g[1])?g[0]:(d.memoizedState=[o,l],o)}function Om(o,l){var d=Ni();l=l===void 0?null:l;var g=d.memoizedState;return g!==null&&l!==null&&af(l,g[1])?g[0]:(o=o(),d.memoizedState=[o,l],o)}function Ex(o,l){var d=Pt;Pt=d!==0&&4>d?d:4,o(!0);var g=ui.transition;ui.transition={};try{o(!1),l()}finally{Pt=d,ui.transition=g}}function Fm(){return Ni().memoizedState}function Ax(o,l,d){var g=wr(o);d={lane:g,action:d,hasEagerState:!1,eagerState:null,next:null},Bm(o)?zm(l,d):(km(o,l,d),d=Un(),o=hi(o,g,d),o!==null&&Hm(o,l,g))}function Tx(o,l,d){var g=wr(o),S={lane:g,action:d,hasEagerState:!1,eagerState:null,next:null};if(Bm(o))zm(l,S);else{km(o,l,S);var A=o.alternate;if(o.lanes===0&&(A===null||A.lanes===0)&&(A=l.lastRenderedReducer,A!==null))try{var O=l.lastRenderedState,k=A(O,d);if(S.hasEagerState=!0,S.eagerState=k,Ii(k,O))return}catch{}finally{}d=Un(),o=hi(o,g,d),o!==null&&Hm(o,l,g)}}function Bm(o){var l=o.alternate;return o===qt||l!==null&&l===qt}function zm(o,l){Wo=Nl=!0;var d=o.pending;d===null?l.next=l:(l.next=d.next,d.next=l),o.pending=l}function km(o,l,d){$t!==null&&o.mode&1&&!(yt&2)?(o=l.interleaved,o===null?(d.next=d,Di===null?Di=[l]:Di.push(l)):(d.next=o.next,o.next=d),l.interleaved=d):(o=l.pending,o===null?d.next=d:(d.next=o.next,o.next=d),l.pending=d)}function Hm(o,l,d){if(d&4194240){var g=l.lanes;g&=o.pendingLanes,d|=g,l.lanes=d,zh(o,d)}}var kl={readContext:oi,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},bx={readContext:oi,useCallback:function(o,l){return $i().memoizedState=[o,l===void 0?null:l],o},useContext:oi,useEffect:hf,useImperativeHandle:function(o,l,d){return d=d!=null?d.concat([o]):null,Bl(4194308,4,Dm.bind(null,l,o),d)},useLayoutEffect:function(o,l){return Bl(4194308,4,o,l)},useInsertionEffect:function(o,l){return Bl(4,2,o,l)},useMemo:function(o,l){var d=$i();return l=l===void 0?null:l,o=o(),d.memoizedState=[o,l],o},useReducer:function(o,l,d){var g=$i();return l=d!==void 0?d(l):l,g.memoizedState=g.baseState=l,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:l},g.queue=o,o=o.dispatch=Ax.bind(null,qt,o),[g.memoizedState,o]},useRef:function(o){var l=$i();return o={current:o},l.memoizedState=o},useState:uf,useDebugValue:ff,useDeferredValue:function(o){var l=uf(o),d=l[0],g=l[1];return hf(function(){var S=ui.transition;ui.transition={};try{g(o)}finally{ui.transition=S}},[o]),d},useTransition:function(){var o=uf(!1),l=o[0];return o=Ex.bind(null,o[1]),$i().memoizedState=o,[l,o]},useMutableSource:function(){},useSyncExternalStore:function(o,l,d){var g=qt,S=$i();if(Vt){if(d===void 0)throw Error(a(407));d=d()}else{if(d=l(),$t===null)throw Error(a(349));Xs&30||Tm(g,l,d)}S.memoizedState=d;var A={value:d,getSnapshot:l};return S.queue=A,hf(Cm.bind(null,g,A,o),[o]),g.flags|=2048,Yo(9,bm.bind(null,g,A,d,l),void 0,null),d},useId:function(){var o=$i(),l=$t.identifierPrefix;if(Vt){var d=Qi,g=Ki;d=(g&~(1<<32-Ln(g)-1)).toString(32)+d,l=":"+l+"R"+d,d=Xo++,0<d&&(l+="H"+d.toString(32)),l+=":"}else d=wx++,l=":"+l+"r"+d.toString(32)+":";return o.memoizedState=l},unstable_isNewReconciler:!1},Cx={readContext:oi,useCallback:Nm,useContext:oi,useEffect:qo,useImperativeHandle:Um,useInsertionEffect:Im,useLayoutEffect:Lm,useMemo:Om,useReducer:Ol,useRef:Pm,useState:function(){return Ol(jr)},useDebugValue:ff,useDeferredValue:function(o){var l=Ol(jr),d=l[0],g=l[1];return qo(function(){var S=ui.transition;ui.transition={};try{g(o)}finally{ui.transition=S}},[o]),d},useTransition:function(){var o=Ol(jr)[0],l=Ni().memoizedState;return[o,l]},useMutableSource:Em,useSyncExternalStore:Am,useId:Fm,unstable_isNewReconciler:!1},Rx={readContext:oi,useCallback:Nm,useContext:oi,useEffect:qo,useImperativeHandle:Um,useInsertionEffect:Im,useLayoutEffect:Lm,useMemo:Om,useReducer:Fl,useRef:Pm,useState:function(){return Fl(jr)},useDebugValue:ff,useDeferredValue:function(o){var l=Fl(jr),d=l[0],g=l[1];return qo(function(){var S=ui.transition;ui.transition={};try{g(o)}finally{ui.transition=S}},[o]),d},useTransition:function(){var o=Fl(jr)[0],l=Ni().memoizedState;return[o,l]},useMutableSource:Em,useSyncExternalStore:Am,useId:Fm,unstable_isNewReconciler:!1};function df(o,l){try{var d="",g=l;do d+=Mx(g),g=g.return;while(g);var S=d}catch(A){S=`
Error generating stack: `+A.message+`
`+A.stack}return{value:o,source:l,stack:S}}function pf(o,l){try{console.error(l.value)}catch(d){setTimeout(function(){throw d})}}var Px=typeof WeakMap=="function"?WeakMap:Map;function Vm(o,l,d){d=Ji(-1,d),d.tag=3,d.payload={element:null};var g=l.value;return d.callback=function(){nc||(nc=!0,Lf=g),pf(o,l)},d}function Gm(o,l,d){d=Ji(-1,d),d.tag=3;var g=o.type.getDerivedStateFromError;if(typeof g=="function"){var S=l.value;d.payload=function(){return g(S)},d.callback=function(){pf(o,l)}}var A=o.stateNode;return A!==null&&typeof A.componentDidCatch=="function"&&(d.callback=function(){pf(o,l),typeof g!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var O=l.stack;this.componentDidCatch(l.value,{componentStack:O!==null?O:""})}),d}function Wm(o,l,d){var g=o.pingCache;if(g===null){g=o.pingCache=new Px;var S=new Set;g.set(l,S)}else S=g.get(l),S===void 0&&(S=new Set,g.set(l,S));S.has(d)||(S.add(d),o=Wx.bind(null,o,l,d),l.then(o,o))}function Xm(o){do{var l;if((l=o.tag===13)&&(l=o.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return o;o=o.return}while(o!==null);return null}function Ym(o,l,d,g,S){return o.mode&1?(o.flags|=65536,o.lanes=S,o):(o===l?o.flags|=65536:(o.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(l=Ji(-1,1),l.tag=2,xr(d,l))),d.lanes|=1),o)}function Oi(o){o.flags|=4}function qm(o,l){if(o!==null&&o.child===l.child)return!0;if(l.flags&16)return!1;for(o=l.child;o!==null;){if(o.flags&12854||o.subtreeFlags&12854)return!1;o=o.sibling}return!0}var jo,Zo,Hl,Vl;if(it)jo=function(o,l){for(var d=l.child;d!==null;){if(d.tag===5||d.tag===6)ze(o,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===l)break;for(;d.sibling===null;){if(d.return===null||d.return===l)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},Zo=function(){},Hl=function(o,l,d,g,S){if(o=o.memoizedProps,o!==g){var A=l.stateNode,O=Ui(ci.current);d=ne(A,d,o,g,S,O),(l.updateQueue=d)&&Oi(l)}},Vl=function(o,l,d,g){d!==g&&Oi(l)};else if(he){jo=function(o,l,d,g){for(var S=l.child;S!==null;){if(S.tag===5){var A=S.stateNode;d&&g&&(A=gn(A,S.type,S.memoizedProps,S)),ze(o,A)}else if(S.tag===6)A=S.stateNode,d&&g&&(A=si(A,S.memoizedProps,S)),ze(o,A);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)A=S.child,A!==null&&(A.return=S),jo(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};var jm=function(o,l,d,g){for(var S=l.child;S!==null;){if(S.tag===5){var A=S.stateNode;d&&g&&(A=gn(A,S.type,S.memoizedProps,S)),Gt(o,A)}else if(S.tag===6)A=S.stateNode,d&&g&&(A=si(A,S.memoizedProps,S)),Gt(o,A);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)A=S.child,A!==null&&(A.return=S),jm(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};Zo=function(o,l){var d=l.stateNode;if(!qm(o,l)){o=d.containerInfo;var g=wt(o);jm(g,l,!1,!1),d.pendingChildren=g,Oi(l),Mn(o,g)}},Hl=function(o,l,d,g,S){var A=o.stateNode,O=o.memoizedProps;if((o=qm(o,l))&&O===g)l.stateNode=A;else{var k=l.stateNode,re=Ui(ci.current),xe=null;O!==g&&(xe=ne(k,d,O,g,S,re)),o&&xe===null?l.stateNode=A:(A=Oe(A,xe,d,O,g,l,o,k),Ye(A,d,g,S,re)&&Oi(l),l.stateNode=A,o?Oi(l):jo(A,l,!1,!1))}},Vl=function(o,l,d,g){d!==g?(o=Ui(Gs.current),d=Ui(ci.current),l.stateNode=Ce(g,o,d,l),Oi(l)):l.stateNode=o.stateNode}}else Zo=function(){},Hl=function(){},Vl=function(){};function Jo(o,l){if(!Vt)switch(o.tailMode){case"hidden":l=o.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?o.tail=null:d.sibling=null;break;case"collapsed":d=o.tail;for(var g=null;d!==null;)d.alternate!==null&&(g=d),d=d.sibling;g===null?l||o.tail===null?o.tail=null:o.tail.sibling=null:g.sibling=null}}function An(o){var l=o.alternate!==null&&o.alternate.child===o.child,d=0,g=0;if(l)for(var S=o.child;S!==null;)d|=S.lanes|S.childLanes,g|=S.subtreeFlags&14680064,g|=S.flags&14680064,S.return=o,S=S.sibling;else for(S=o.child;S!==null;)d|=S.lanes|S.childLanes,g|=S.subtreeFlags,g|=S.flags,S.return=o,S=S.sibling;return o.subtreeFlags|=g,o.childLanes=d,l}function Ix(o,l,d){var g=l.pendingProps;switch(Qh(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(l),null;case 1:return Ot(l.type)&&vr(),An(l),null;case 3:return g=l.stateNode,Ws(),_t(ct),_t(At),of(),g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null),(o===null||o.child===null)&&(ko(l)?Oi(l):o===null||o.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,yi!==null&&(Nf(yi),yi=null))),Zo(o,l),An(l),null;case 5:rf(l),d=Ui(Gs.current);var S=l.type;if(o!==null&&l.stateNode!=null)Hl(o,l,S,g,d),o.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!g){if(l.stateNode===null)throw Error(a(166));return An(l),null}if(o=Ui(ci.current),ko(l)){if(!N)throw Error(a(175));o=vl(l.stateNode,l.type,l.memoizedProps,d,o,l,!zo),l.updateQueue=o,o!==null&&Oi(l)}else{var A=ce(S,g,d,o,l);jo(A,l,!1,!1),l.stateNode=A,Ye(A,S,g,d,o)&&Oi(l)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return An(l),null;case 6:if(o&&l.stateNode!=null)Vl(o,l,o.memoizedProps,g);else{if(typeof g!="string"&&l.stateNode===null)throw Error(a(166));if(o=Ui(Gs.current),d=Ui(ci.current),ko(l)){if(!N)throw Error(a(176));if(o=l.stateNode,g=l.memoizedProps,(d=Dh(o,g,l,!zo))&&(S=Zn,S!==null))switch(A=(S.mode&1)!==0,S.tag){case 3:Se(S.stateNode.containerInfo,o,g,A);break;case 5:Le(S.type,S.memoizedProps,S.stateNode,o,g,A)}d&&Oi(l)}else l.stateNode=Ce(g,o,d,l)}return An(l),null;case 13:if(_t(Wt),g=l.memoizedState,Vt&&Jn!==null&&l.mode&1&&!(l.flags&128)){for(o=Jn;o;)o=Ri(o);return Hs(),l.flags|=98560,l}if(g!==null&&g.dehydrated!==null){if(g=ko(l),o===null){if(!g)throw Error(a(318));if(!N)throw Error(a(344));if(o=l.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));Uh(o,l)}else Hs(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;return An(l),null}return yi!==null&&(Nf(yi),yi=null),l.flags&128?(l.lanes=d,l):(g=g!==null,d=!1,o===null?ko(l):d=o.memoizedState!==null,g&&!d&&(l.child.flags|=8192,l.mode&1&&(o===null||Wt.current&1?sn===0&&(sn=3):Ff())),l.updateQueue!==null&&(l.flags|=4),An(l),null);case 4:return Ws(),Zo(o,l),o===null&&we(l.stateNode.containerInfo),An(l),null;case 10:return Yh(l.type._context),An(l),null;case 17:return Ot(l.type)&&vr(),An(l),null;case 19:if(_t(Wt),S=l.memoizedState,S===null)return An(l),null;if(g=(l.flags&128)!==0,A=S.rendering,A===null)if(g)Jo(S,!1);else{if(sn!==0||o!==null&&o.flags&128)for(o=l.child;o!==null;){if(A=Dl(o),A!==null){for(l.flags|=128,Jo(S,!1),o=A.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),l.subtreeFlags=0,o=d,g=l.child;g!==null;)d=g,S=o,d.flags&=14680066,A=d.alternate,A===null?(d.childLanes=0,d.lanes=S,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=A.childLanes,d.lanes=A.lanes,d.child=A.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=A.memoizedProps,d.memoizedState=A.memoizedState,d.updateQueue=A.updateQueue,d.type=A.type,S=A.dependencies,d.dependencies=S===null?null:{lanes:S.lanes,firstContext:S.firstContext}),g=g.sibling;return Ke(Wt,Wt.current&1|2),l.child}o=o.sibling}S.tail!==null&&ln()>If&&(l.flags|=128,g=!0,Jo(S,!1),l.lanes=4194304)}else{if(!g)if(o=Dl(A),o!==null){if(l.flags|=128,g=!0,o=o.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),Jo(S,!0),S.tail===null&&S.tailMode==="hidden"&&!A.alternate&&!Vt)return An(l),null}else 2*ln()-S.renderingStartTime>If&&d!==1073741824&&(l.flags|=128,g=!0,Jo(S,!1),l.lanes=4194304);S.isBackwards?(A.sibling=l.child,l.child=A):(o=S.last,o!==null?o.sibling=A:l.child=A,S.last=A)}return S.tail!==null?(l=S.tail,S.rendering=l,S.tail=l.sibling,S.renderingStartTime=ln(),l.sibling=null,o=Wt.current,Ke(Wt,g?o&1|2:o&1),l):(An(l),null);case 22:case 23:return Of(),g=l.memoizedState!==null,o!==null&&o.memoizedState!==null!==g&&(l.flags|=8192),g&&l.mode&1?Qn&1073741824&&(An(l),it&&l.subtreeFlags&6&&(l.flags|=8192)):An(l),null;case 24:return null;case 25:return null}throw Error(a(156,l.tag))}var Lx=c.ReactCurrentOwner,Kn=!1;function Dn(o,l,d,g){l.child=o===null?Mm(l,null,d,g):Vs(l,o.child,d,g)}function Zm(o,l,d,g,S){d=d.render;var A=l.ref;return Bs(l,S),g=lf(o,l,d,g,A,S),d=cf(),o!==null&&!Kn?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,er(o,l,S)):(Vt&&d&&Kh(l),l.flags|=1,Dn(o,l,g,S),l.child)}function Jm(o,l,d,g,S){if(o===null){var A=d.type;return typeof A=="function"&&!Bf(A)&&A.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(l.tag=15,l.type=A,Km(o,l,A,g,S)):(o=cc(d.type,null,g,l,l.mode,S),o.ref=l.ref,o.return=l,l.child=o)}if(A=o.child,!(o.lanes&S)){var O=A.memoizedProps;if(d=d.compare,d=d!==null?d:El,d(O,g)&&o.ref===l.ref)return er(o,l,S)}return l.flags|=1,o=Ar(A,g),o.ref=l.ref,o.return=l,l.child=o}function Km(o,l,d,g,S){if(o!==null&&El(o.memoizedProps,g)&&o.ref===l.ref)if(Kn=!1,(o.lanes&S)!==0)o.flags&131072&&(Kn=!0);else return l.lanes=o.lanes,er(o,l,S);return mf(o,l,d,g,S)}function Qm(o,l,d){var g=l.pendingProps,S=g.children,A=o!==null?o.memoizedState:null;if(g.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null},Ke(Ys,Qn),Qn|=d;else if(d&1073741824)l.memoizedState={baseLanes:0,cachePool:null},g=A!==null?A.baseLanes:d,Ke(Ys,Qn),Qn|=g;else return o=A!==null?A.baseLanes|d:d,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:o,cachePool:null},l.updateQueue=null,Ke(Ys,Qn),Qn|=o,null;else A!==null?(g=A.baseLanes|d,l.memoizedState=null):g=d,Ke(Ys,Qn),Qn|=g;return Dn(o,l,S,d),l.child}function $m(o,l){var d=l.ref;(o===null&&d!==null||o!==null&&o.ref!==d)&&(l.flags|=512,l.flags|=2097152)}function mf(o,l,d,g,S){var A=Ot(d)?rn:At.current;return A=jn(l,A),Bs(l,S),d=lf(o,l,d,g,A,S),g=cf(),o!==null&&!Kn?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,er(o,l,S)):(Vt&&g&&Kh(l),l.flags|=1,Dn(o,l,d,S),l.child)}function eg(o,l,d,g,S){if(Ot(d)){var A=!0;_r(l)}else A=!1;if(Bs(l,S),l.stateNode===null)o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),pm(l,d,g),Jh(l,d,g,S),g=!0;else if(o===null){var O=l.stateNode,k=l.memoizedProps;O.props=k;var re=O.context,xe=d.contextType;typeof xe=="object"&&xe!==null?xe=oi(xe):(xe=Ot(d)?rn:At.current,xe=jn(l,xe));var Ge=d.getDerivedStateFromProps,ht=typeof Ge=="function"||typeof O.getSnapshotBeforeUpdate=="function";ht||typeof O.UNSAFE_componentWillReceiveProps!="function"&&typeof O.componentWillReceiveProps!="function"||(k!==g||re!==xe)&&mm(l,O,g,xe),yr=!1;var et=l.memoizedState;O.state=et,Cl(l,g,O,S),re=l.memoizedState,k!==g||et!==re||ct.current||yr?(typeof Ge=="function"&&(Zh(l,d,Ge,g),re=l.memoizedState),(k=yr||dm(l,d,k,g,et,re,xe))?(ht||typeof O.UNSAFE_componentWillMount!="function"&&typeof O.componentWillMount!="function"||(typeof O.componentWillMount=="function"&&O.componentWillMount(),typeof O.UNSAFE_componentWillMount=="function"&&O.UNSAFE_componentWillMount()),typeof O.componentDidMount=="function"&&(l.flags|=4194308)):(typeof O.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=g,l.memoizedState=re),O.props=g,O.state=re,O.context=xe,g=k):(typeof O.componentDidMount=="function"&&(l.flags|=4194308),g=!1)}else{O=l.stateNode,cm(o,l),k=l.memoizedProps,xe=l.type===l.elementType?k:_i(l.type,k),O.props=xe,ht=l.pendingProps,et=O.context,re=d.contextType,typeof re=="object"&&re!==null?re=oi(re):(re=Ot(d)?rn:At.current,re=jn(l,re));var Bt=d.getDerivedStateFromProps;(Ge=typeof Bt=="function"||typeof O.getSnapshotBeforeUpdate=="function")||typeof O.UNSAFE_componentWillReceiveProps!="function"&&typeof O.componentWillReceiveProps!="function"||(k!==ht||et!==re)&&mm(l,O,g,re),yr=!1,et=l.memoizedState,O.state=et,Cl(l,g,O,S);var Qe=l.memoizedState;k!==ht||et!==Qe||ct.current||yr?(typeof Bt=="function"&&(Zh(l,d,Bt,g),Qe=l.memoizedState),(xe=yr||dm(l,d,xe,g,et,Qe,re)||!1)?(Ge||typeof O.UNSAFE_componentWillUpdate!="function"&&typeof O.componentWillUpdate!="function"||(typeof O.componentWillUpdate=="function"&&O.componentWillUpdate(g,Qe,re),typeof O.UNSAFE_componentWillUpdate=="function"&&O.UNSAFE_componentWillUpdate(g,Qe,re)),typeof O.componentDidUpdate=="function"&&(l.flags|=4),typeof O.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof O.componentDidUpdate!="function"||k===o.memoizedProps&&et===o.memoizedState||(l.flags|=4),typeof O.getSnapshotBeforeUpdate!="function"||k===o.memoizedProps&&et===o.memoizedState||(l.flags|=1024),l.memoizedProps=g,l.memoizedState=Qe),O.props=g,O.state=Qe,O.context=re,g=xe):(typeof O.componentDidUpdate!="function"||k===o.memoizedProps&&et===o.memoizedState||(l.flags|=4),typeof O.getSnapshotBeforeUpdate!="function"||k===o.memoizedProps&&et===o.memoizedState||(l.flags|=1024),g=!1)}return gf(o,l,d,g,A,S)}function gf(o,l,d,g,S,A){$m(o,l);var O=(l.flags&128)!==0;if(!g&&!O)return S&&In(l,d,!1),er(o,l,A);g=l.stateNode,Lx.current=l;var k=O&&typeof d.getDerivedStateFromError!="function"?null:g.render();return l.flags|=1,o!==null&&O?(l.child=Vs(l,o.child,null,A),l.child=Vs(l,null,k,A)):Dn(o,l,k,A),l.memoizedState=g.state,S&&In(l,d,!0),l.child}function tg(o){var l=o.stateNode;l.pendingContext?Ht(o,l.pendingContext,l.pendingContext!==l.context):l.context&&Ht(o,l.context,!1),nf(o,l.containerInfo)}function ng(o,l,d,g,S){return Hs(),tf(S),l.flags|=256,Dn(o,l,d,g),l.child}var Gl={dehydrated:null,treeContext:null,retryLane:0};function Wl(o){return{baseLanes:o,cachePool:null}}function ig(o,l,d){var g=l.pendingProps,S=Wt.current,A=!1,O=(l.flags&128)!==0,k;if((k=O)||(k=o!==null&&o.memoizedState===null?!1:(S&2)!==0),k?(A=!0,l.flags&=-129):(o===null||o.memoizedState!==null)&&(S|=1),Ke(Wt,S&1),o===null)return ef(l),o=l.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(l.mode&1?Ns(o)?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(S=g.children,o=g.fallback,A?(g=l.mode,A=l.child,S={mode:"hidden",children:S},!(g&1)&&A!==null?(A.childLanes=0,A.pendingProps=S):A=uc(S,g,0,null),o=es(o,g,d,null),A.return=l,o.return=l,A.sibling=o,l.child=A,l.child.memoizedState=Wl(d),l.memoizedState=Gl,o):vf(l,S));if(S=o.memoizedState,S!==null){if(k=S.dehydrated,k!==null){if(O)return l.flags&256?(l.flags&=-257,Xl(o,l,d,Error(a(422)))):l.memoizedState!==null?(l.child=o.child,l.flags|=128,null):(A=g.fallback,S=l.mode,g=uc({mode:"visible",children:g.children},S,0,null),A=es(A,S,d,null),A.flags|=2,g.return=l,A.return=l,g.sibling=A,l.child=g,l.mode&1&&Vs(l,o.child,null,d),l.child.memoizedState=Wl(d),l.memoizedState=Gl,A);if(!(l.mode&1))l=Xl(o,l,d,null);else if(Ns(k))l=Xl(o,l,d,Error(a(419)));else if(g=(d&o.childLanes)!==0,Kn||g){if(g=$t,g!==null){switch(d&-d){case 4:A=2;break;case 16:A=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:A=32;break;case 536870912:A=268435456;break;default:A=0}g=A&(g.suspendedLanes|d)?0:A,g!==0&&g!==S.retryLane&&(S.retryLane=g,hi(o,g,-1))}Ff(),l=Xl(o,l,d,Error(a(421)))}else Us(k)?(l.flags|=128,l.child=o.child,l=Xx.bind(null,o),pl(k,l),l=null):(d=S.treeContext,N&&(Jn=gl(k),Zn=l,Vt=!0,yi=null,zo=!1,d!==null&&(ai[li++]=Ki,ai[li++]=Qi,ai[li++]=Yr,Ki=d.id,Qi=d.overflow,Yr=l)),l=vf(l,l.pendingProps.children),l.flags|=4096);return l}return A?(g=sg(o,l,g.children,g.fallback,d),A=l.child,S=o.child.memoizedState,A.memoizedState=S===null?Wl(d):{baseLanes:S.baseLanes|d,cachePool:null},A.childLanes=o.childLanes&~d,l.memoizedState=Gl,g):(d=rg(o,l,g.children,d),l.memoizedState=null,d)}return A?(g=sg(o,l,g.children,g.fallback,d),A=l.child,S=o.child.memoizedState,A.memoizedState=S===null?Wl(d):{baseLanes:S.baseLanes|d,cachePool:null},A.childLanes=o.childLanes&~d,l.memoizedState=Gl,g):(d=rg(o,l,g.children,d),l.memoizedState=null,d)}function vf(o,l){return l=uc({mode:"visible",children:l},o.mode,0,null),l.return=o,o.child=l}function rg(o,l,d,g){var S=o.child;return o=S.sibling,d=Ar(S,{mode:"visible",children:d}),!(l.mode&1)&&(d.lanes=g),d.return=l,d.sibling=null,o!==null&&(g=l.deletions,g===null?(l.deletions=[o],l.flags|=16):g.push(o)),l.child=d}function sg(o,l,d,g,S){var A=l.mode;o=o.child;var O=o.sibling,k={mode:"hidden",children:d};return!(A&1)&&l.child!==o?(d=l.child,d.childLanes=0,d.pendingProps=k,l.deletions=null):(d=Ar(o,k),d.subtreeFlags=o.subtreeFlags&14680064),O!==null?g=Ar(O,g):(g=es(g,A,S,null),g.flags|=2),g.return=l,d.return=l,d.sibling=g,l.child=d,g}function Xl(o,l,d,g){return g!==null&&tf(g),Vs(l,o.child,null,d),o=vf(l,l.pendingProps.children),o.flags|=2,l.memoizedState=null,o}function og(o,l,d){o.lanes|=l;var g=o.alternate;g!==null&&(g.lanes|=l),qh(o.return,l,d)}function _f(o,l,d,g,S){var A=o.memoizedState;A===null?o.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:g,tail:d,tailMode:S}:(A.isBackwards=l,A.rendering=null,A.renderingStartTime=0,A.last=g,A.tail=d,A.tailMode=S)}function ag(o,l,d){var g=l.pendingProps,S=g.revealOrder,A=g.tail;if(Dn(o,l,g.children,d),g=Wt.current,g&2)g=g&1|2,l.flags|=128;else{if(o!==null&&o.flags&128)e:for(o=l.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&og(o,d,l);else if(o.tag===19)og(o,d,l);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===l)break e;for(;o.sibling===null;){if(o.return===null||o.return===l)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}g&=1}if(Ke(Wt,g),!(l.mode&1))l.memoizedState=null;else switch(S){case"forwards":for(d=l.child,S=null;d!==null;)o=d.alternate,o!==null&&Dl(o)===null&&(S=d),d=d.sibling;d=S,d===null?(S=l.child,l.child=null):(S=d.sibling,d.sibling=null),_f(l,!1,S,d,A);break;case"backwards":for(d=null,S=l.child,l.child=null;S!==null;){if(o=S.alternate,o!==null&&Dl(o)===null){l.child=S;break}o=S.sibling,S.sibling=d,d=S,S=o}_f(l,!0,d,null,A);break;case"together":_f(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function er(o,l,d){if(o!==null&&(l.dependencies=o.dependencies),qs|=l.lanes,!(d&l.childLanes))return null;if(o!==null&&l.child!==o.child)throw Error(a(153));if(l.child!==null){for(o=l.child,d=Ar(o,o.pendingProps),l.child=d,d.return=l;o.sibling!==null;)o=o.sibling,d=d.sibling=Ar(o,o.pendingProps),d.return=l;d.sibling=null}return l.child}function Dx(o,l,d){switch(l.tag){case 3:tg(l),Hs();break;case 5:wm(l);break;case 1:Ot(l.type)&&_r(l);break;case 4:nf(l,l.stateNode.containerInfo);break;case 10:lm(l,l.type._context,l.memoizedProps.value);break;case 13:var g=l.memoizedState;if(g!==null)return g.dehydrated!==null?(Ke(Wt,Wt.current&1),l.flags|=128,null):d&l.child.childLanes?ig(o,l,d):(Ke(Wt,Wt.current&1),o=er(o,l,d),o!==null?o.sibling:null);Ke(Wt,Wt.current&1);break;case 19:if(g=(d&l.childLanes)!==0,o.flags&128){if(g)return ag(o,l,d);l.flags|=128}var S=l.memoizedState;if(S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),Ke(Wt,Wt.current),g)break;return null;case 22:case 23:return l.lanes=0,Qm(o,l,d)}return er(o,l,d)}function Ux(o,l){switch(Qh(l),l.tag){case 1:return Ot(l.type)&&vr(),o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 3:return Ws(),_t(ct),_t(At),of(),o=l.flags,o&65536&&!(o&128)?(l.flags=o&-65537|128,l):null;case 5:return rf(l),null;case 13:if(_t(Wt),o=l.memoizedState,o!==null&&o.dehydrated!==null){if(l.alternate===null)throw Error(a(340));Hs()}return o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 19:return _t(Wt),null;case 4:return Ws(),null;case 10:return Yh(l.type._context),null;case 22:case 23:return Of(),null;case 24:return null;default:return null}}var Yl=!1,Zr=!1,Nx=typeof WeakSet=="function"?WeakSet:Set,Re=null;function ql(o,l){var d=o.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(g){Gn(o,l,g)}else d.current=null}function yf(o,l,d){try{d()}catch(g){Gn(o,l,g)}}var lg=!1;function Ox(o,l){for(se(o.containerInfo),Re=l;Re!==null;)if(o=Re,l=o.child,(o.subtreeFlags&1028)!==0&&l!==null)l.return=o,Re=l;else for(;Re!==null;){o=Re;try{var d=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var g=d.memoizedProps,S=d.memoizedState,A=o.stateNode,O=A.getSnapshotBeforeUpdate(o.elementType===o.type?g:_i(o.type,g),S);A.__reactInternalSnapshotBeforeUpdate=O}break;case 3:it&&Ie(o.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(k){Gn(o,o.return,k)}if(l=o.sibling,l!==null){l.return=o.return,Re=l;break}Re=o.return}return d=lg,lg=!1,d}function Jr(o,l,d){var g=l.updateQueue;if(g=g!==null?g.lastEffect:null,g!==null){var S=g=g.next;do{if((S.tag&o)===o){var A=S.destroy;S.destroy=void 0,A!==void 0&&yf(l,d,A)}S=S.next}while(S!==g)}}function Ko(o,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&o)===o){var g=d.create;d.destroy=g()}d=d.next}while(d!==l)}}function xf(o){var l=o.ref;if(l!==null){var d=o.stateNode;switch(o.tag){case 5:o=j(d);break;default:o=d}typeof l=="function"?l(o):l.current=o}}function cg(o,l,d){if(Pi&&typeof Pi.onCommitFiberUnmount=="function")try{Pi.onCommitFiberUnmount(Ml,l)}catch{}switch(l.tag){case 0:case 11:case 14:case 15:if(o=l.updateQueue,o!==null&&(o=o.lastEffect,o!==null)){var g=o=o.next;do{var S=g,A=S.destroy;S=S.tag,A!==void 0&&(S&2||S&4)&&yf(l,d,A),g=g.next}while(g!==o)}break;case 1:if(ql(l,d),o=l.stateNode,typeof o.componentWillUnmount=="function")try{o.props=l.memoizedProps,o.state=l.memoizedState,o.componentWillUnmount()}catch(O){Gn(l,d,O)}break;case 5:ql(l,d);break;case 4:it?mg(o,l,d):he&&he&&(l=l.stateNode.containerInfo,d=wt(l),Et(l,d))}}function ug(o,l,d){for(var g=l;;)if(cg(o,g,d),g.child===null||it&&g.tag===4){if(g===l)break;for(;g.sibling===null;){if(g.return===null||g.return===l)return;g=g.return}g.sibling.return=g.return,g=g.sibling}else g.child.return=g,g=g.child}function hg(o){var l=o.alternate;l!==null&&(o.alternate=null,hg(l)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(l=o.stateNode,l!==null&&Ae(l)),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function fg(o){return o.tag===5||o.tag===3||o.tag===4}function dg(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||fg(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function pg(o){if(it){e:{for(var l=o.return;l!==null;){if(fg(l))break e;l=l.return}throw Error(a(160))}var d=l;switch(d.tag){case 5:l=d.stateNode,d.flags&32&&(Nt(l),d.flags&=-33),d=dg(o),Mf(o,d,l);break;case 3:case 4:l=d.stateNode.containerInfo,d=dg(o),Sf(o,d,l);break;default:throw Error(a(161))}}}function Sf(o,l,d){var g=o.tag;if(g===5||g===6)o=o.stateNode,l?ke(d,o,l):St(d,o);else if(g!==4&&(o=o.child,o!==null))for(Sf(o,l,d),o=o.sibling;o!==null;)Sf(o,l,d),o=o.sibling}function Mf(o,l,d){var g=o.tag;if(g===5||g===6)o=o.stateNode,l?lt(d,o,l):Fe(d,o);else if(g!==4&&(o=o.child,o!==null))for(Mf(o,l,d),o=o.sibling;o!==null;)Mf(o,l,d),o=o.sibling}function mg(o,l,d){for(var g=l,S=!1,A,O;;){if(!S){S=g.return;e:for(;;){if(S===null)throw Error(a(160));switch(A=S.stateNode,S.tag){case 5:O=!1;break e;case 3:A=A.containerInfo,O=!0;break e;case 4:A=A.containerInfo,O=!0;break e}S=S.return}S=!0}if(g.tag===5||g.tag===6)ug(o,g,d),O?ut(A,g.stateNode):Mt(A,g.stateNode);else if(g.tag===18)O?$(A,g.stateNode):Q(A,g.stateNode);else if(g.tag===4){if(g.child!==null){A=g.stateNode.containerInfo,O=!0,g.child.return=g,g=g.child;continue}}else if(cg(o,g,d),g.child!==null){g.child.return=g,g=g.child;continue}if(g===l)break;for(;g.sibling===null;){if(g.return===null||g.return===l)return;g=g.return,g.tag===4&&(S=!1)}g.sibling.return=g.return,g=g.sibling}}function wf(o,l){if(it){switch(l.tag){case 0:case 11:case 14:case 15:Jr(3,l,l.return),Ko(3,l),Jr(5,l,l.return);return;case 1:return;case 5:var d=l.stateNode;if(d!=null){var g=l.memoizedProps;o=o!==null?o.memoizedProps:g;var S=l.type,A=l.updateQueue;l.updateQueue=null,A!==null&&at(d,A,S,o,g,l)}return;case 6:if(l.stateNode===null)throw Error(a(162));d=l.memoizedProps,ye(l.stateNode,o!==null?o.memoizedProps:d,d);return;case 3:N&&o!==null&&o.memoizedState.isDehydrated&&I(l.stateNode.containerInfo);return;case 12:return;case 13:jl(l);return;case 19:jl(l);return;case 17:return}throw Error(a(163))}switch(l.tag){case 0:case 11:case 14:case 15:Jr(3,l,l.return),Ko(3,l),Jr(5,l,l.return);return;case 12:return;case 13:jl(l);return;case 19:jl(l);return;case 3:N&&o!==null&&o.memoizedState.isDehydrated&&I(l.stateNode.containerInfo);break;case 22:case 23:return}e:if(he){switch(l.tag){case 1:case 5:case 6:break e;case 3:case 4:l=l.stateNode,Et(l.containerInfo,l.pendingChildren);break e}throw Error(a(163))}}function jl(o){var l=o.updateQueue;if(l!==null){o.updateQueue=null;var d=o.stateNode;d===null&&(d=o.stateNode=new Nx),l.forEach(function(g){var S=Yx.bind(null,o,g);d.has(g)||(d.add(g),g.then(S,S))})}}function Fx(o,l){for(Re=l;Re!==null;){l=Re;var d=l.deletions;if(d!==null)for(var g=0;g<d.length;g++){var S=d[g];try{var A=o;it?mg(A,S,l):ug(A,S,l);var O=S.alternate;O!==null&&(O.return=null),S.return=null}catch(Ze){Gn(S,l,Ze)}}if(d=l.child,l.subtreeFlags&12854&&d!==null)d.return=l,Re=d;else for(;Re!==null;){l=Re;try{var k=l.flags;if(k&32&&it&&Nt(l.stateNode),k&512){var re=l.alternate;if(re!==null){var xe=re.ref;xe!==null&&(typeof xe=="function"?xe(null):xe.current=null)}}if(k&8192)switch(l.tag){case 13:if(l.memoizedState!==null){var Ge=l.alternate;(Ge===null||Ge.memoizedState===null)&&(Pf=ln())}break;case 22:var ht=l.memoizedState!==null,et=l.alternate,Bt=et!==null&&et.memoizedState!==null;if(d=l,it){e:if(g=d,S=ht,A=null,it)for(var Qe=g;;){if(Qe.tag===5){if(A===null){A=Qe;var Tn=Qe.stateNode;S?H(Tn):ie(Qe.stateNode,Qe.memoizedProps)}}else if(Qe.tag===6){if(A===null){var di=Qe.stateNode;S?Ne(di):de(di,Qe.memoizedProps)}}else if((Qe.tag!==22&&Qe.tag!==23||Qe.memoizedState===null||Qe===g)&&Qe.child!==null){Qe.child.return=Qe,Qe=Qe.child;continue}if(Qe===g)break;for(;Qe.sibling===null;){if(Qe.return===null||Qe.return===g)break e;A===Qe&&(A=null),Qe=Qe.return}A===Qe&&(A=null),Qe.sibling.return=Qe.return,Qe=Qe.sibling}}if(ht&&!Bt&&d.mode&1){Re=d;for(var J=d.child;J!==null;){for(d=Re=J;Re!==null;){g=Re;var G=g.child;switch(g.tag){case 0:case 11:case 14:case 15:Jr(4,g,g.return);break;case 1:ql(g,g.return);var ee=g.stateNode;if(typeof ee.componentWillUnmount=="function"){var Pe=g.return;try{ee.props=g.memoizedProps,ee.state=g.memoizedState,ee.componentWillUnmount()}catch(Ze){Gn(g,Pe,Ze)}}break;case 5:ql(g,g.return);break;case 22:if(g.memoizedState!==null){_g(d);continue}}G!==null?(G.return=g,Re=G):_g(d)}J=J.sibling}}}switch(k&4102){case 2:pg(l),l.flags&=-3;break;case 6:pg(l),l.flags&=-3,wf(l.alternate,l);break;case 4096:l.flags&=-4097;break;case 4100:l.flags&=-4097,wf(l.alternate,l);break;case 4:wf(l.alternate,l)}}catch(Ze){Gn(l,l.return,Ze)}if(d=l.sibling,d!==null){d.return=l.return,Re=d;break}Re=l.return}}}function Bx(o,l,d){Re=o,gg(o)}function gg(o,l,d){for(var g=(o.mode&1)!==0;Re!==null;){var S=Re,A=S.child;if(S.tag===22&&g){var O=S.memoizedState!==null||Yl;if(!O){var k=S.alternate,re=k!==null&&k.memoizedState!==null||Zr;k=Yl;var xe=Zr;if(Yl=O,(Zr=re)&&!xe)for(Re=S;Re!==null;)O=Re,re=O.child,O.tag===22&&O.memoizedState!==null?yg(S):re!==null?(re.return=O,Re=re):yg(S);for(;A!==null;)Re=A,gg(A),A=A.sibling;Re=S,Yl=k,Zr=xe}vg(o)}else S.subtreeFlags&8772&&A!==null?(A.return=S,Re=A):vg(o)}}function vg(o){for(;Re!==null;){var l=Re;if(l.flags&8772){var d=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:Zr||Ko(5,l);break;case 1:var g=l.stateNode;if(l.flags&4&&!Zr)if(d===null)g.componentDidMount();else{var S=l.elementType===l.type?d.memoizedProps:_i(l.type,d.memoizedProps);g.componentDidUpdate(S,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}var A=l.updateQueue;A!==null&&hm(l,A,g);break;case 3:var O=l.updateQueue;if(O!==null){if(d=null,l.child!==null)switch(l.child.tag){case 5:d=j(l.child.stateNode);break;case 1:d=l.child.stateNode}hm(l,O,d)}break;case 5:var k=l.stateNode;d===null&&l.flags&4&&Be(k,l.type,l.memoizedProps,l);break;case 6:break;case 4:break;case 12:break;case 13:if(N&&l.memoizedState===null){var re=l.alternate;if(re!==null){var xe=re.memoizedState;if(xe!==null){var Ge=xe.dehydrated;Ge!==null&&V(Ge)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(a(163))}Zr||l.flags&512&&xf(l)}catch(ht){Gn(l,l.return,ht)}}if(l===o){Re=null;break}if(d=l.sibling,d!==null){d.return=l.return,Re=d;break}Re=l.return}}function _g(o){for(;Re!==null;){var l=Re;if(l===o){Re=null;break}var d=l.sibling;if(d!==null){d.return=l.return,Re=d;break}Re=l.return}}function yg(o){for(;Re!==null;){var l=Re;try{switch(l.tag){case 0:case 11:case 15:var d=l.return;try{Ko(4,l)}catch(re){Gn(l,d,re)}break;case 1:var g=l.stateNode;if(typeof g.componentDidMount=="function"){var S=l.return;try{g.componentDidMount()}catch(re){Gn(l,S,re)}}var A=l.return;try{xf(l)}catch(re){Gn(l,A,re)}break;case 5:var O=l.return;try{xf(l)}catch(re){Gn(l,O,re)}}}catch(re){Gn(l,l.return,re)}if(l===o){Re=null;break}var k=l.sibling;if(k!==null){k.return=l.return,Re=k;break}Re=l.return}}var Zl=0,Jl=1,Kl=2,Ql=3,$l=4;if(typeof Symbol=="function"&&Symbol.for){var Qo=Symbol.for;Zl=Qo("selector.component"),Jl=Qo("selector.has_pseudo_class"),Kl=Qo("selector.role"),Ql=Qo("selector.test_id"),$l=Qo("selector.text")}function Ef(o){var l=Ee(o);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(a(364));return l}if(o=R(o),o===null)throw Error(a(362));return o.stateNode.current}function Af(o,l){switch(l.$$typeof){case Zl:if(o.type===l.value)return!0;break;case Jl:e:{l=l.value,o=[o,0];for(var d=0;d<o.length;){var g=o[d++],S=o[d++],A=l[S];if(g.tag!==5||!ue(g)){for(;A!=null&&Af(g,A);)S++,A=l[S];if(S===l.length){l=!0;break e}else for(g=g.child;g!==null;)o.push(g,S),g=g.sibling}}l=!1}return l;case Kl:if(o.tag===5&&ae(o.stateNode,l.value))return!0;break;case $l:if((o.tag===5||o.tag===6)&&(o=oe(o),o!==null&&0<=o.indexOf(l.value)))return!0;break;case Ql:if(o.tag===5&&(o=o.memoizedProps["data-testname"],typeof o=="string"&&o.toLowerCase()===l.value.toLowerCase()))return!0;break;default:throw Error(a(365))}return!1}function Tf(o){switch(o.$$typeof){case Zl:return"<"+(L(o.value)||"Unknown")+">";case Jl:return":has("+(Tf(o)||"")+")";case Kl:return'[role="'+o.value+'"]';case $l:return'"'+o.value+'"';case Ql:return'[data-testname="'+o.value+'"]';default:throw Error(a(365))}}function xg(o,l){var d=[];o=[o,0];for(var g=0;g<o.length;){var S=o[g++],A=o[g++],O=l[A];if(S.tag!==5||!ue(S)){for(;O!=null&&Af(S,O);)A++,O=l[A];if(A===l.length)d.push(S);else for(S=S.child;S!==null;)o.push(S,A),S=S.sibling}}return d}function bf(o,l){if(!U)throw Error(a(363));o=Ef(o),o=xg(o,l),l=[],o=Array.from(o);for(var d=0;d<o.length;){var g=o[d++];if(g.tag===5)ue(g)||l.push(g.stateNode);else for(g=g.child;g!==null;)o.push(g),g=g.sibling}return l}var zx=Math.ceil,ec=c.ReactCurrentDispatcher,Cf=c.ReactCurrentOwner,Jt=c.ReactCurrentBatchConfig,yt=0,$t=null,en=null,vn=0,Qn=0,Ys=Ut(0),sn=0,$o=null,qs=0,tc=0,Rf=0,ea=null,Hn=null,Pf=0,If=1/0;function js(){If=ln()+500}var nc=!1,Lf=null,Sr=null,ic=!1,Mr=null,rc=0,ta=0,Df=null,sc=-1,oc=0;function Un(){return yt&6?ln():sc!==-1?sc:sc=ln()}function wr(o){return o.mode&1?yt&2&&vn!==0?vn&-vn:Sx.transition!==null?(oc===0&&(o=yl,yl<<=1,!(yl&4194240)&&(yl=64),oc=o),oc):(o=Pt,o!==0?o:_e()):1}function hi(o,l,d){if(50<ta)throw ta=0,Df=null,Error(a(185));var g=ac(o,l);return g===null?null:(Bo(g,l,d),(!(yt&2)||g!==$t)&&(g===$t&&(!(yt&2)&&(tc|=l),sn===4&&Er(g,vn)),Vn(g,d),l===1&&yt===0&&!(o.mode&1)&&(js(),wl&&Li())),g)}function ac(o,l){o.lanes|=l;var d=o.alternate;for(d!==null&&(d.lanes|=l),d=o,o=o.return;o!==null;)o.childLanes|=l,d=o.alternate,d!==null&&(d.childLanes|=l),d=o,o=o.return;return d.tag===3?d.stateNode:null}function Vn(o,l){var d=o.callbackNode;fx(o,l);var g=Sl(o,o===$t?vn:0);if(g===0)d!==null&&om(d),o.callbackNode=null,o.callbackPriority=0;else if(l=g&-g,o.callbackPriority!==l){if(d!=null&&om(d),l===1)o.tag===0?xx(Mg.bind(null,o)):am(Mg.bind(null,o)),Je?Ue(function(){yt===0&&Li()}):kh(Hh,Li),d=null;else{switch(sm(g)){case 1:d=Hh;break;case 4:d=gx;break;case 16:d=Vh;break;case 536870912:d=vx;break;default:d=Vh}d=Ig(d,Sg.bind(null,o))}o.callbackPriority=l,o.callbackNode=d}}function Sg(o,l){if(sc=-1,oc=0,yt&6)throw Error(a(327));var d=o.callbackNode;if($r()&&o.callbackNode!==d)return null;var g=Sl(o,o===$t?vn:0);if(g===0)return null;if(g&30||g&o.expiredLanes||l)l=lc(o,g);else{l=g;var S=yt;yt|=2;var A=Ag();($t!==o||vn!==l)&&(js(),Kr(o,l));do try{Vx();break}catch(k){Eg(o,k)}while(!0);Xh(),ec.current=A,yt=S,en!==null?l=0:($t=null,vn=0,l=sn)}if(l!==0){if(l===2&&(S=Fh(o),S!==0&&(g=S,l=Uf(o,S))),l===1)throw d=$o,Kr(o,0),Er(o,g),Vn(o,ln()),d;if(l===6)Er(o,g);else{if(S=o.current.alternate,!(g&30)&&!kx(S)&&(l=lc(o,g),l===2&&(A=Fh(o),A!==0&&(g=A,l=Uf(o,A))),l===1))throw d=$o,Kr(o,0),Er(o,g),Vn(o,ln()),d;switch(o.finishedWork=S,o.finishedLanes=g,l){case 0:case 1:throw Error(a(345));case 2:Qr(o,Hn);break;case 3:if(Er(o,g),(g&130023424)===g&&(l=Pf+500-ln(),10<l)){if(Sl(o,0)!==0)break;if(S=o.suspendedLanes,(S&g)!==g){Un(),o.pingedLanes|=o.suspendedLanes&S;break}o.timeoutHandle=Me(Qr.bind(null,o,Hn),l);break}Qr(o,Hn);break;case 4:if(Er(o,g),(g&4194240)===g)break;for(l=o.eventTimes,S=-1;0<g;){var O=31-Ln(g);A=1<<O,O=l[O],O>S&&(S=O),g&=~A}if(g=S,g=ln()-g,g=(120>g?120:480>g?480:1080>g?1080:1920>g?1920:3e3>g?3e3:4320>g?4320:1960*zx(g/1960))-g,10<g){o.timeoutHandle=Me(Qr.bind(null,o,Hn),g);break}Qr(o,Hn);break;case 5:Qr(o,Hn);break;default:throw Error(a(329))}}}return Vn(o,ln()),o.callbackNode===d?Sg.bind(null,o):null}function Uf(o,l){var d=ea;return o.current.memoizedState.isDehydrated&&(Kr(o,l).flags|=256),o=lc(o,l),o!==2&&(l=Hn,Hn=d,l!==null&&Nf(l)),o}function Nf(o){Hn===null?Hn=o:Hn.push.apply(Hn,o)}function kx(o){for(var l=o;;){if(l.flags&16384){var d=l.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var g=0;g<d.length;g++){var S=d[g],A=S.getSnapshot;S=S.value;try{if(!Ii(A(),S))return!1}catch{return!1}}}if(d=l.child,l.subtreeFlags&16384&&d!==null)d.return=l,l=d;else{if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Er(o,l){for(l&=~Rf,l&=~tc,o.suspendedLanes|=l,o.pingedLanes&=~l,o=o.expirationTimes;0<l;){var d=31-Ln(l),g=1<<d;o[d]=-1,l&=~g}}function Mg(o){if(yt&6)throw Error(a(327));$r();var l=Sl(o,0);if(!(l&1))return Vn(o,ln()),null;var d=lc(o,l);if(o.tag!==0&&d===2){var g=Fh(o);g!==0&&(l=g,d=Uf(o,g))}if(d===1)throw d=$o,Kr(o,0),Er(o,l),Vn(o,ln()),d;if(d===6)throw Error(a(345));return o.finishedWork=o.current.alternate,o.finishedLanes=l,Qr(o,Hn),Vn(o,ln()),null}function wg(o){Mr!==null&&Mr.tag===0&&!(yt&6)&&$r();var l=yt;yt|=1;var d=Jt.transition,g=Pt;try{if(Jt.transition=null,Pt=1,o)return o()}finally{Pt=g,Jt.transition=d,yt=l,!(yt&6)&&Li()}}function Of(){Qn=Ys.current,_t(Ys)}function Kr(o,l){o.finishedWork=null,o.finishedLanes=0;var d=o.timeoutHandle;if(d!==$e&&(o.timeoutHandle=$e,st(d)),en!==null)for(d=en.return;d!==null;){var g=d;switch(Qh(g),g.tag){case 1:g=g.type.childContextTypes,g!=null&&vr();break;case 3:Ws(),_t(ct),_t(At),of();break;case 5:rf(g);break;case 4:Ws();break;case 13:_t(Wt);break;case 19:_t(Wt);break;case 10:Yh(g.type._context);break;case 22:case 23:Of()}d=d.return}if($t=o,en=o=Ar(o.current,null),vn=Qn=l,sn=0,$o=null,Rf=tc=qs=0,Hn=ea=null,Di!==null){for(l=0;l<Di.length;l++)if(d=Di[l],g=d.interleaved,g!==null){d.interleaved=null;var S=g.next,A=d.pending;if(A!==null){var O=A.next;A.next=S,g.next=O}d.pending=g}Di=null}return o}function Eg(o,l){do{var d=en;try{if(Xh(),Ul.current=kl,Nl){for(var g=qt.memoizedState;g!==null;){var S=g.queue;S!==null&&(S.pending=null),g=g.next}Nl=!1}if(Xs=0,cn=wn=qt=null,Wo=!1,Xo=0,Cf.current=null,d===null||d.return===null){sn=1,$o=l,en=null;break}e:{var A=o,O=d.return,k=d,re=l;if(l=vn,k.flags|=32768,re!==null&&typeof re=="object"&&typeof re.then=="function"){var xe=re,Ge=k,ht=Ge.tag;if(!(Ge.mode&1)&&(ht===0||ht===11||ht===15)){var et=Ge.alternate;et?(Ge.updateQueue=et.updateQueue,Ge.memoizedState=et.memoizedState,Ge.lanes=et.lanes):(Ge.updateQueue=null,Ge.memoizedState=null)}var Bt=Xm(O);if(Bt!==null){Bt.flags&=-257,Ym(Bt,O,k,A,l),Bt.mode&1&&Wm(A,xe,l),l=Bt,re=xe;var Qe=l.updateQueue;if(Qe===null){var Tn=new Set;Tn.add(re),l.updateQueue=Tn}else Qe.add(re);break e}else{if(!(l&1)){Wm(A,xe,l),Ff();break e}re=Error(a(426))}}else if(Vt&&k.mode&1){var di=Xm(O);if(di!==null){!(di.flags&65536)&&(di.flags|=256),Ym(di,O,k,A,l),tf(re);break e}}A=re,sn!==4&&(sn=2),ea===null?ea=[A]:ea.push(A),re=df(re,k),k=O;do{switch(k.tag){case 3:k.flags|=65536,l&=-l,k.lanes|=l;var J=Vm(k,re,l);um(k,J);break e;case 1:A=re;var G=k.type,ee=k.stateNode;if(!(k.flags&128)&&(typeof G.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Sr===null||!Sr.has(ee)))){k.flags|=65536,l&=-l,k.lanes|=l;var Pe=Gm(k,A,l);um(k,Pe);break e}}k=k.return}while(k!==null)}bg(d)}catch(Ze){l=Ze,en===d&&d!==null&&(en=d=d.return);continue}break}while(!0)}function Ag(){var o=ec.current;return ec.current=kl,o===null?kl:o}function Ff(){(sn===0||sn===3||sn===2)&&(sn=4),$t===null||!(qs&268435455)&&!(tc&268435455)||Er($t,vn)}function lc(o,l){var d=yt;yt|=2;var g=Ag();$t===o&&vn===l||Kr(o,l);do try{Hx();break}catch(S){Eg(o,S)}while(!0);if(Xh(),yt=d,ec.current=g,en!==null)throw Error(a(261));return $t=null,vn=0,sn}function Hx(){for(;en!==null;)Tg(en)}function Vx(){for(;en!==null&&!px();)Tg(en)}function Tg(o){var l=Pg(o.alternate,o,Qn);o.memoizedProps=o.pendingProps,l===null?bg(o):en=l,Cf.current=null}function bg(o){var l=o;do{var d=l.alternate;if(o=l.return,l.flags&32768){if(d=Ux(d,l),d!==null){d.flags&=32767,en=d;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{sn=6,en=null;return}}else if(d=Ix(d,l,Qn),d!==null){en=d;return}if(l=l.sibling,l!==null){en=l;return}en=l=o}while(l!==null);sn===0&&(sn=5)}function Qr(o,l){var d=Pt,g=Jt.transition;try{Jt.transition=null,Pt=1,Gx(o,l,d)}finally{Jt.transition=g,Pt=d}return null}function Gx(o,l,d){do $r();while(Mr!==null);if(yt&6)throw Error(a(327));var g=o.finishedWork,S=o.finishedLanes;if(g===null)return null;if(o.finishedWork=null,o.finishedLanes=0,g===o.current)throw Error(a(177));o.callbackNode=null,o.callbackPriority=0;var A=g.lanes|g.childLanes;if(dx(o,A),o===$t&&(en=$t=null,vn=0),!(g.subtreeFlags&2064)&&!(g.flags&2064)||ic||(ic=!0,Ig(Vh,function(){return $r(),null})),A=(g.flags&15990)!==0,g.subtreeFlags&15990||A){A=Jt.transition,Jt.transition=null;var O=Pt;Pt=1;var k=yt;yt|=4,Cf.current=null,Ox(o,g),Fx(o,g),te(o.containerInfo),o.current=g,Bx(g),mx(),yt=k,Pt=O,Jt.transition=A}else o.current=g;if(ic&&(ic=!1,Mr=o,rc=S),A=o.pendingLanes,A===0&&(Sr=null),_x(g.stateNode),Vn(o,ln()),l!==null)for(d=o.onRecoverableError,g=0;g<l.length;g++)d(l[g]);if(nc)throw nc=!1,o=Lf,Lf=null,o;return rc&1&&o.tag!==0&&$r(),A=o.pendingLanes,A&1?o===Df?ta++:(ta=0,Df=o):ta=0,Li(),null}function $r(){if(Mr!==null){var o=sm(rc),l=Jt.transition,d=Pt;try{if(Jt.transition=null,Pt=16>o?16:o,Mr===null)var g=!1;else{if(o=Mr,Mr=null,rc=0,yt&6)throw Error(a(331));var S=yt;for(yt|=4,Re=o.current;Re!==null;){var A=Re,O=A.child;if(Re.flags&16){var k=A.deletions;if(k!==null){for(var re=0;re<k.length;re++){var xe=k[re];for(Re=xe;Re!==null;){var Ge=Re;switch(Ge.tag){case 0:case 11:case 15:Jr(8,Ge,A)}var ht=Ge.child;if(ht!==null)ht.return=Ge,Re=ht;else for(;Re!==null;){Ge=Re;var et=Ge.sibling,Bt=Ge.return;if(hg(Ge),Ge===xe){Re=null;break}if(et!==null){et.return=Bt,Re=et;break}Re=Bt}}}var Qe=A.alternate;if(Qe!==null){var Tn=Qe.child;if(Tn!==null){Qe.child=null;do{var di=Tn.sibling;Tn.sibling=null,Tn=di}while(Tn!==null)}}Re=A}}if(A.subtreeFlags&2064&&O!==null)O.return=A,Re=O;else e:for(;Re!==null;){if(A=Re,A.flags&2048)switch(A.tag){case 0:case 11:case 15:Jr(9,A,A.return)}var J=A.sibling;if(J!==null){J.return=A.return,Re=J;break e}Re=A.return}}var G=o.current;for(Re=G;Re!==null;){O=Re;var ee=O.child;if(O.subtreeFlags&2064&&ee!==null)ee.return=O,Re=ee;else e:for(O=G;Re!==null;){if(k=Re,k.flags&2048)try{switch(k.tag){case 0:case 11:case 15:Ko(9,k)}}catch(Ze){Gn(k,k.return,Ze)}if(k===O){Re=null;break e}var Pe=k.sibling;if(Pe!==null){Pe.return=k.return,Re=Pe;break e}Re=k.return}}if(yt=S,Li(),Pi&&typeof Pi.onPostCommitFiberRoot=="function")try{Pi.onPostCommitFiberRoot(Ml,o)}catch{}g=!0}return g}finally{Pt=d,Jt.transition=l}}return!1}function Cg(o,l,d){l=df(d,l),l=Vm(o,l,1),xr(o,l),l=Un(),o=ac(o,1),o!==null&&(Bo(o,1,l),Vn(o,l))}function Gn(o,l,d){if(o.tag===3)Cg(o,o,d);else for(;l!==null;){if(l.tag===3){Cg(l,o,d);break}else if(l.tag===1){var g=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof g.componentDidCatch=="function"&&(Sr===null||!Sr.has(g))){o=df(d,o),o=Gm(l,o,1),xr(l,o),o=Un(),l=ac(l,1),l!==null&&(Bo(l,1,o),Vn(l,o));break}}l=l.return}}function Wx(o,l,d){var g=o.pingCache;g!==null&&g.delete(l),l=Un(),o.pingedLanes|=o.suspendedLanes&d,$t===o&&(vn&d)===d&&(sn===4||sn===3&&(vn&130023424)===vn&&500>ln()-Pf?Kr(o,0):Rf|=d),Vn(o,l)}function Rg(o,l){l===0&&(o.mode&1?(l=xl,xl<<=1,!(xl&130023424)&&(xl=4194304)):l=1);var d=Un();o=ac(o,l),o!==null&&(Bo(o,l,d),Vn(o,d))}function Xx(o){var l=o.memoizedState,d=0;l!==null&&(d=l.retryLane),Rg(o,d)}function Yx(o,l){var d=0;switch(o.tag){case 13:var g=o.stateNode,S=o.memoizedState;S!==null&&(d=S.retryLane);break;case 19:g=o.stateNode;break;default:throw Error(a(314))}g!==null&&g.delete(l),Rg(o,d)}var Pg;Pg=function(o,l,d){if(o!==null)if(o.memoizedProps!==l.pendingProps||ct.current)Kn=!0;else{if(!(o.lanes&d)&&!(l.flags&128))return Kn=!1,Dx(o,l,d);Kn=!!(o.flags&131072)}else Kn=!1,Vt&&l.flags&1048576&&gm(l,Il,l.index);switch(l.lanes=0,l.tag){case 2:var g=l.type;o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps;var S=jn(l,At.current);Bs(l,d),S=lf(null,l,g,o,S,d);var A=cf();return l.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,Ot(g)?(A=!0,_r(l)):A=!1,l.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,jh(l),S.updater=Rl,l.stateNode=S,S._reactInternals=l,Jh(l,g,o,d),l=gf(null,l,g,!0,A,d)):(l.tag=0,Vt&&A&&Kh(l),Dn(null,l,S,d),l=l.child),l;case 16:g=l.elementType;e:{switch(o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps,S=g._init,g=S(g._payload),l.type=g,S=l.tag=jx(g),o=_i(g,o),S){case 0:l=mf(null,l,g,o,d);break e;case 1:l=eg(null,l,g,o,d);break e;case 11:l=Zm(null,l,g,o,d);break e;case 14:l=Jm(null,l,g,_i(g.type,o),d);break e}throw Error(a(306,g,""))}return l;case 0:return g=l.type,S=l.pendingProps,S=l.elementType===g?S:_i(g,S),mf(o,l,g,S,d);case 1:return g=l.type,S=l.pendingProps,S=l.elementType===g?S:_i(g,S),eg(o,l,g,S,d);case 3:e:{if(tg(l),o===null)throw Error(a(387));g=l.pendingProps,A=l.memoizedState,S=A.element,cm(o,l),Cl(l,g,null,d);var O=l.memoizedState;if(g=O.element,N&&A.isDehydrated)if(A={element:g,isDehydrated:!1,cache:O.cache,transitions:O.transitions},l.updateQueue.baseState=A,l.memoizedState=A,l.flags&256){S=Error(a(423)),l=ng(o,l,g,d,S);break e}else if(g!==S){S=Error(a(424)),l=ng(o,l,g,d,S);break e}else for(N&&(Jn=Os(l.stateNode.containerInfo),Zn=l,Vt=!0,yi=null,zo=!1),d=Mm(l,null,g,d),l.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Hs(),g===S){l=er(o,l,d);break e}Dn(o,l,g,d)}l=l.child}return l;case 5:return wm(l),o===null&&ef(l),g=l.type,S=l.pendingProps,A=o!==null?o.memoizedProps:null,O=S.children,me(g,S)?O=null:A!==null&&me(g,A)&&(l.flags|=32),$m(o,l),Dn(o,l,O,d),l.child;case 6:return o===null&&ef(l),null;case 13:return ig(o,l,d);case 4:return nf(l,l.stateNode.containerInfo),g=l.pendingProps,o===null?l.child=Vs(l,null,g,d):Dn(o,l,g,d),l.child;case 11:return g=l.type,S=l.pendingProps,S=l.elementType===g?S:_i(g,S),Zm(o,l,g,S,d);case 7:return Dn(o,l,l.pendingProps,d),l.child;case 8:return Dn(o,l,l.pendingProps.children,d),l.child;case 12:return Dn(o,l,l.pendingProps.children,d),l.child;case 10:e:{if(g=l.type._context,S=l.pendingProps,A=l.memoizedProps,O=S.value,lm(l,g,O),A!==null)if(Ii(A.value,O)){if(A.children===S.children&&!ct.current){l=er(o,l,d);break e}}else for(A=l.child,A!==null&&(A.return=l);A!==null;){var k=A.dependencies;if(k!==null){O=A.child;for(var re=k.firstContext;re!==null;){if(re.context===g){if(A.tag===1){re=Ji(-1,d&-d),re.tag=2;var xe=A.updateQueue;if(xe!==null){xe=xe.shared;var Ge=xe.pending;Ge===null?re.next=re:(re.next=Ge.next,Ge.next=re),xe.pending=re}}A.lanes|=d,re=A.alternate,re!==null&&(re.lanes|=d),qh(A.return,d,l),k.lanes|=d;break}re=re.next}}else if(A.tag===10)O=A.type===l.type?null:A.child;else if(A.tag===18){if(O=A.return,O===null)throw Error(a(341));O.lanes|=d,k=O.alternate,k!==null&&(k.lanes|=d),qh(O,d,l),O=A.sibling}else O=A.child;if(O!==null)O.return=A;else for(O=A;O!==null;){if(O===l){O=null;break}if(A=O.sibling,A!==null){A.return=O.return,O=A;break}O=O.return}A=O}Dn(o,l,S.children,d),l=l.child}return l;case 9:return S=l.type,g=l.pendingProps.children,Bs(l,d),S=oi(S),g=g(S),l.flags|=1,Dn(o,l,g,d),l.child;case 14:return g=l.type,S=_i(g,l.pendingProps),S=_i(g.type,S),Jm(o,l,g,S,d);case 15:return Km(o,l,l.type,l.pendingProps,d);case 17:return g=l.type,S=l.pendingProps,S=l.elementType===g?S:_i(g,S),o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),l.tag=1,Ot(g)?(o=!0,_r(l)):o=!1,Bs(l,d),pm(l,g,S),Jh(l,g,S,d),gf(null,l,g,!0,o,d);case 19:return ag(o,l,d);case 22:return Qm(o,l,d)}throw Error(a(156,l.tag))};function Ig(o,l){return kh(o,l)}function qx(o,l,d,g){this.tag=o,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=g,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(o,l,d,g){return new qx(o,l,d,g)}function Bf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function jx(o){if(typeof o=="function")return Bf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===M)return 11;if(o===E)return 14}return 2}function Ar(o,l){var d=o.alternate;return d===null?(d=fi(o.tag,l,o.key,o.mode),d.elementType=o.elementType,d.type=o.type,d.stateNode=o.stateNode,d.alternate=o,o.alternate=d):(d.pendingProps=l,d.type=o.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=o.flags&14680064,d.childLanes=o.childLanes,d.lanes=o.lanes,d.child=o.child,d.memoizedProps=o.memoizedProps,d.memoizedState=o.memoizedState,d.updateQueue=o.updateQueue,l=o.dependencies,d.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},d.sibling=o.sibling,d.index=o.index,d.ref=o.ref,d}function cc(o,l,d,g,S,A){var O=2;if(g=o,typeof o=="function")Bf(o)&&(O=1);else if(typeof o=="string")O=5;else e:switch(o){case f:return es(d.children,S,A,l);case p:O=8,S|=8;break;case m:return o=fi(12,d,l,S|2),o.elementType=m,o.lanes=A,o;case x:return o=fi(13,d,l,S),o.elementType=x,o.lanes=A,o;case _:return o=fi(19,d,l,S),o.elementType=_,o.lanes=A,o;case T:return uc(d,S,A,l);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case v:O=10;break e;case y:O=9;break e;case M:O=11;break e;case E:O=14;break e;case w:O=16,g=null;break e}throw Error(a(130,o==null?o:typeof o,""))}return l=fi(O,d,l,S),l.elementType=o,l.type=g,l.lanes=A,l}function es(o,l,d,g){return o=fi(7,o,g,l),o.lanes=d,o}function uc(o,l,d,g){return o=fi(22,o,g,l),o.elementType=T,o.lanes=d,o.stateNode={},o}function zf(o,l,d){return o=fi(6,o,null,l),o.lanes=d,o}function kf(o,l,d){return l=fi(4,o.children!==null?o.children:[],o.key,l),l.lanes=d,l.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},l}function Zx(o,l,d,g,S){this.tag=l,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=$e,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bh(0),this.expirationTimes=Bh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bh(0),this.identifierPrefix=g,this.onRecoverableError=S,N&&(this.mutableSourceEagerHydrationData=null)}function Lg(o,l,d,g,S,A,O,k,re){return o=new Zx(o,l,d,k,re),l===1?(l=1,A===!0&&(l|=8)):l=0,A=fi(3,null,null,l),o.current=A,A.stateNode=o,A.memoizedState={element:g,isDehydrated:d,cache:null,transitions:null},jh(A),o}function Dg(o){if(!o)return We;o=o._reactInternals;e:{if(Y(o)!==o||o.tag!==1)throw Error(a(170));var l=o;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(Ot(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(a(171))}if(o.tag===1){var d=o.type;if(Ot(d))return vi(o,d,l)}return l}function Ug(o){var l=o._reactInternals;if(l===void 0)throw typeof o.render=="function"?Error(a(188)):(o=Object.keys(o).join(","),Error(a(268,o)));return o=W(l),o===null?null:o.stateNode}function Ng(o,l){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var d=o.retryLane;o.retryLane=d!==0&&d<l?d:l}}function Hf(o,l){Ng(o,l),(o=o.alternate)&&Ng(o,l)}function Jx(o){return o=W(o),o===null?null:o.stateNode}function Kx(){return null}return t.attemptContinuousHydration=function(o){if(o.tag===13){var l=Un();hi(o,134217728,l),Hf(o,134217728)}},t.attemptHydrationAtCurrentPriority=function(o){if(o.tag===13){var l=Un(),d=wr(o);hi(o,d,l),Hf(o,d)}},t.attemptSynchronousHydration=function(o){switch(o.tag){case 3:var l=o.stateNode;if(l.current.memoizedState.isDehydrated){var d=Fo(l.pendingLanes);d!==0&&(zh(l,d|1),Vn(l,ln()),!(yt&6)&&(js(),Li()))}break;case 13:var g=Un();wg(function(){return hi(o,1,g)}),Hf(o,1)}},t.batchedUpdates=function(o,l){var d=yt;yt|=1;try{return o(l)}finally{yt=d,yt===0&&(js(),wl&&Li())}},t.createComponentSelector=function(o){return{$$typeof:Zl,value:o}},t.createContainer=function(o,l,d,g,S,A,O){return Lg(o,l,!1,null,d,g,S,A,O)},t.createHasPseudoClassSelector=function(o){return{$$typeof:Jl,value:o}},t.createHydrationContainer=function(o,l,d,g,S,A,O,k,re){return o=Lg(d,g,!0,o,S,A,O,k,re),o.context=Dg(null),d=o.current,g=Un(),S=wr(d),A=Ji(g,S),A.callback=l??null,xr(d,A),o.current.lanes=S,Bo(o,S,g),Vn(o,g),o},t.createPortal=function(o,l,d){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:g==null?null:""+g,children:o,containerInfo:l,implementation:d}},t.createRoleSelector=function(o){return{$$typeof:Kl,value:o}},t.createTestNameSelector=function(o){return{$$typeof:Ql,value:o}},t.createTextSelector=function(o){return{$$typeof:$l,value:o}},t.deferredUpdates=function(o){var l=Pt,d=Jt.transition;try{return Jt.transition=null,Pt=16,o()}finally{Pt=l,Jt.transition=d}},t.discreteUpdates=function(o,l,d,g,S){var A=Pt,O=Jt.transition;try{return Jt.transition=null,Pt=1,o(l,d,g,S)}finally{Pt=A,Jt.transition=O,yt===0&&js()}},t.findAllNodes=bf,t.findBoundingRects=function(o,l){if(!U)throw Error(a(363));l=bf(o,l),o=[];for(var d=0;d<l.length;d++)o.push(Z(l[d]));for(l=o.length-1;0<l;l--){d=o[l];for(var g=d.x,S=g+d.width,A=d.y,O=A+d.height,k=l-1;0<=k;k--)if(l!==k){var re=o[k],xe=re.x,Ge=xe+re.width,ht=re.y,et=ht+re.height;if(g>=xe&&A>=ht&&S<=Ge&&O<=et){o.splice(l,1);break}else if(g!==xe||d.width!==re.width||et<A||ht>O){if(!(A!==ht||d.height!==re.height||Ge<g||xe>S)){xe>g&&(re.width+=xe-g,re.x=g),Ge<S&&(re.width=S-xe),o.splice(l,1);break}}else{ht>A&&(re.height+=ht-A,re.y=A),et<O&&(re.height=O-ht),o.splice(l,1);break}}}return o},t.findHostInstance=Ug,t.findHostInstanceWithNoPortals=function(o){return o=C(o),o=o!==null?K(o):null,o===null?null:o.stateNode},t.findHostInstanceWithWarning=function(o){return Ug(o)},t.flushControlled=function(o){var l=yt;yt|=1;var d=Jt.transition,g=Pt;try{Jt.transition=null,Pt=1,o()}finally{Pt=g,Jt.transition=d,yt=l,yt===0&&(js(),Li())}},t.flushPassiveEffects=$r,t.flushSync=wg,t.focusWithin=function(o,l){if(!U)throw Error(a(363));for(o=Ef(o),l=xg(o,l),l=Array.from(l),o=0;o<l.length;){var d=l[o++];if(!ue(d)){if(d.tag===5&&qe(d.stateNode))return!0;for(d=d.child;d!==null;)l.push(d),d=d.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Pt},t.getFindAllNodesFailureDescription=function(o,l){if(!U)throw Error(a(363));var d=0,g=[];o=[Ef(o),0];for(var S=0;S<o.length;){var A=o[S++],O=o[S++],k=l[O];if((A.tag!==5||!ue(A))&&(Af(A,k)&&(g.push(Tf(k)),O++,O>d&&(d=O)),O<l.length))for(A=A.child;A!==null;)o.push(A,O),A=A.sibling}if(d<l.length){for(o=[];d<l.length;d++)o.push(Tf(l[d]));return`findAllNodes was able to match part of the selector:
  `+(g.join(" > ")+`

No matching component was found for:
  `)+o.join(" > ")}return null},t.getPublicRootInstance=function(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return j(o.child.stateNode);default:return o.child.stateNode}},t.injectIntoDevTools=function(o){if(o={bundleType:o.bundleType,version:o.version,rendererPackageName:o.rendererPackageName,rendererConfig:o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:Jx,findFiberByHostInstance:o.findFiberByHostInstance||Kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")o=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)o=!0;else{try{Ml=l.inject(o),Pi=l}catch{}o=!!l.checkDCE}}return o},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(o,l,d,g){if(!U)throw Error(a(363));o=bf(o,l);var S=be(o,d,g).disconnect;return{disconnect:function(){S()}}},t.registerMutableSourceForHydration=function(o,l){var d=l._getVersion;d=d(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,d]:o.mutableSourceEagerHydrationData.push(l,d)},t.runWithPriority=function(o,l){var d=Pt;try{return Pt=o,l()}finally{Pt=d}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(o,l,d,g){var S=l.current,A=Un(),O=wr(S);return d=Dg(d),l.context===null?l.context=d:l.pendingContext=d,l=Ji(A,O),l.payload={element:o},g=g===void 0?null:g,g!==null&&(l.callback=g),xr(S,l),o=hi(S,O,A),o!==null&&bl(o,S,O),O},t};zy.exports=uC;var hC=zy.exports;const fC=Fv(hC),tm={},dC=r=>void Object.assign(tm,r);function pC(r,e){function t(f,{args:p=[],attach:m,...v},y){let M=`${f[0].toUpperCase()}${f.slice(1)}`,x;if(f==="primitive"){if(v.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const _=v.object;x=go(_,{type:f,root:y,attach:m,primitive:!0})}else{const _=tm[M];if(!_)throw new Error(`R3F: ${M} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");x=go(new _(...p),{type:f,root:y,attach:m,memoizedProps:{args:p}})}return x.__r3f.attach===void 0&&(x instanceof gt?x.__r3f.attach="geometry":x instanceof Sn&&(x.__r3f.attach="material")),M!=="inject"&&Dd(x,v),x}function n(f,p){let m=!1;if(p){var v,y;(v=p.__r3f)!=null&&v.attach?Ld(f,p,p.__r3f.attach):p.isObject3D&&f.isObject3D&&(f.add(p),m=!0),m||(y=f.__r3f)==null||y.objects.push(p),p.__r3f||go(p,{}),p.__r3f.parent=f,ap(p),vo(p)}}function i(f,p,m){let v=!1;if(p){var y,M;if((y=p.__r3f)!=null&&y.attach)Ld(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){p.parent=f,p.dispatchEvent({type:"added"}),f.dispatchEvent({type:"childadded",child:p});const x=f.children.filter(E=>E!==p),_=x.indexOf(m);f.children=[...x.slice(0,_),p,...x.slice(_)],v=!0}v||(M=f.__r3f)==null||M.objects.push(p),p.__r3f||go(p,{}),p.__r3f.parent=f,ap(p),vo(p)}}function s(f,p,m=!1){f&&[...f].forEach(v=>a(p,v,m))}function a(f,p,m){if(p){var v,y,M;if(p.__r3f&&(p.__r3f.parent=null),(v=f.__r3f)!=null&&v.objects&&(f.__r3f.objects=f.__r3f.objects.filter(T=>T!==p)),(y=p.__r3f)!=null&&y.attach)_v(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){var x;f.remove(p),(x=p.__r3f)!=null&&x.root&&SC(uu(p),p)}const E=(M=p.__r3f)==null?void 0:M.primitive,w=!E&&(m===void 0?p.dispose!==null:m);if(!E){var _;s((_=p.__r3f)==null?void 0:_.objects,p,w),s(p.children,p,w)}if(delete p.__r3f,w&&p.dispose&&p.type!=="Scene"){const T=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?sp.unstable_scheduleCallback(sp.unstable_IdlePriority,T):T()}vo(f)}}function c(f,p,m,v){var y;const M=(y=f.__r3f)==null?void 0:y.parent;if(!M)return;const x=t(p,m,f.__r3f.root);if(f.children){for(const _ of f.children)_.__r3f&&n(x,_);f.children=f.children.filter(_=>!_.__r3f)}f.__r3f.objects.forEach(_=>n(x,_)),f.__r3f.objects=[],f.__r3f.autoRemovedBeforeAppend||a(M,f),x.parent&&(x.__r3f.autoRemovedBeforeAppend=!0),n(M,x),x.raycast&&x.__r3f.eventCount&&uu(x).getState().internal.interaction.push(x),[v,v.alternate].forEach(_=>{_!==null&&(_.stateNode=x,_.ref&&(typeof _.ref=="function"?_.ref(x):_.ref.current=x))})}const u=()=>{};return{reconciler:fC({createInstance:t,removeChild:a,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(f,p)=>{if(!p)return;const m=f.getState().scene;m.__r3f&&(m.__r3f.root=f,n(m,p))},removeChildFromContainer:(f,p)=>{p&&a(f.getState().scene,p)},insertInContainerBefore:(f,p,m)=>{if(!p||!m)return;const v=f.getState().scene;v.__r3f&&i(v,p,m)},getRootHostContext:()=>null,getChildHostContext:f=>f,finalizeInitialChildren(f){var p;return!!((p=f?.__r3f)!=null?p:{}).handlers},prepareUpdate(f,p,m,v){var y;if(((y=f?.__r3f)!=null?y:{}).primitive&&v.object&&v.object!==f)return[!0];{const{args:x=[],children:_,...E}=v,{args:w=[],children:T,...F}=m;if(!Array.isArray(x))throw new Error("R3F: the args prop must be an array!");if(x.some((L,B)=>L!==w[B]))return[!0];const P=jy(f,E,F,!0);return P.changes.length?[!1,P]:null}},commitUpdate(f,[p,m],v,y,M,x){p?c(f,v,M,x):Dd(f,m)},commitMount(f,p,m,v){var y;const M=(y=f.__r3f)!=null?y:{};f.raycast&&M.handlers&&M.eventCount&&uu(f).getState().internal.interaction.push(f)},getPublicInstance:f=>f,prepareForCommit:()=>null,preparePortalMount:f=>go(f.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(f){var p;const{attach:m,parent:v}=(p=f.__r3f)!=null?p:{};m&&v&&_v(v,f,m),f.isObject3D&&(f.visible=!1),vo(f)},unhideInstance(f,p){var m;const{attach:v,parent:y}=(m=f.__r3f)!=null?m:{};v&&y&&Ld(y,f,v),(f.isObject3D&&p.visible==null||p.visible)&&(f.visible=!0),vo(f)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():Eo.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&kt.fun(performance.now)?performance.now:kt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:kt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:kt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:Dd}}var pv,mv;const Id=r=>"colorSpace"in r||"outputColorSpace"in r,Vy=()=>{var r;return(r=tm.ColorManagement)!=null?r:null},Gy=r=>r&&r.isOrthographicCamera,mC=r=>r&&r.hasOwnProperty("current"),hl=typeof window<"u"&&((pv=window.document)!=null&&pv.createElement||((mv=window.navigator)==null?void 0:mv.product)==="ReactNative")?ve.useLayoutEffect:ve.useEffect;function Wy(r){const e=ve.useRef(r);return hl(()=>void(e.current=r),[r]),e}function gC({set:r}){return hl(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}class Xy extends ve.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}Xy.getDerivedStateFromError=()=>({error:!0});const Yy="__default",gv=new Map,vC=r=>r&&!!r.memoized&&!!r.changes;function qy(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const ma=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function uu(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const kt={obj:r=>r===Object(r)&&!kt.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(kt.str(r)||kt.num(r)||kt.boo(r))return r===e;const s=kt.obj(r);if(s&&n==="reference")return r===e;const a=kt.arr(r);if(a&&t==="reference")return r===e;if((a||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!kt.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if(kt.und(c)){if(a&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function _C(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function go(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function op(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,a)=>s[a],r),{target:t,key:i}}else return{target:t,key:e}}const vv=/-\d+$/;function Ld(r,e,t){if(kt.str(t)){if(vv.test(t)){const s=t.replace(vv,""),{target:a,key:c}=op(r,s);Array.isArray(a[c])||(a[c]=[])}const{target:n,key:i}=op(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function _v(r,e,t){var n,i;if(kt.str(t)){const{target:s,key:a}=op(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[a]:s[a]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function jy(r,{children:e,key:t,ref:n,...i},{children:s,key:a,ref:c,...u}={},h=!1){const f=r.__r3f,p=Object.entries(i),m=[];if(h){const y=Object.keys(u);for(let M=0;M<y.length;M++)i.hasOwnProperty(y[M])||p.unshift([y[M],Yy+"remove"])}p.forEach(([y,M])=>{var x;if((x=r.__r3f)!=null&&x.primitive&&y==="object"||kt.equ(M,u[y]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(y))return m.push([y,M,!0,[]]);let _=[];y.includes("-")&&(_=y.split("-")),m.push([y,M,!1,_]);for(const E in i){const w=i[E];E.startsWith(`${y}-`)&&m.push([E,w,!1,E.split("-")])}});const v={...i};return f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.args&&(v.args=f.memoizedProps.args),f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.attach&&(v.attach=f.memoizedProps.attach),{memoized:v,changes:m}}function Dd(r,e){var t;const n=r.__r3f,i=n?.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:a,changes:c}=vC(e)?e:jy(r,e),u=n?.eventCount;r.__r3f&&(r.__r3f.memoizedProps=a);for(let f=0;f<c.length;f++){let[p,m,v,y]=c[f];if(Id(r)){const E="srgb",w="srgb-linear";p==="encoding"?(p="colorSpace",m=m===3001?E:w):p==="outputEncoding"&&(p="outputColorSpace",m=m===3001?E:w)}let M=r,x=M[p];if(y.length&&(x=y.reduce((_,E)=>_[E],r),!(x&&x.set))){const[_,...E]=y.reverse();M=E.reverse().reduce((w,T)=>w[T],r),p=_}if(m===Yy+"remove")if(M.constructor){let _=gv.get(M.constructor);_||(_=new M.constructor,gv.set(M.constructor,_)),m=_[p]}else m=0;if(v&&n)m?n.handlers[p]=m:delete n.handlers[p],n.eventCount=Object.keys(n.handlers).length;else if(x&&x.set&&(x.copy||x instanceof ws)){if(Array.isArray(m))x.fromArray?x.fromArray(m):x.set(...m);else if(x.copy&&m&&m.constructor&&x.constructor===m.constructor)x.copy(m);else if(m!==void 0){const _=x instanceof De;!_&&x.setScalar?x.setScalar(m):x instanceof ws&&m instanceof ws?x.mask=m.mask:x.set(m),!Vy()&&s&&!s.linear&&_&&x.convertSRGBToLinear()}}else if(M[p]=m,M[p]instanceof Yt&&M[p].format===Pn&&M[p].type===Ai&&s){const _=M[p];Id(_)&&Id(s.gl)?_.colorSpace=s.gl.outputColorSpace:_.encoding=s.gl.outputEncoding}vo(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const f=uu(r).getState().internal,p=f.interaction.indexOf(r);p>-1&&f.interaction.splice(p,1),n.eventCount&&f.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&ap(r),r}function vo(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function ap(r){r.onUpdate==null||r.onUpdate(r)}function yC(r,e){r.manual||(Gy(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function nu(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function xC(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return Eo.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Eo.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Eo.ContinuousEventPriority;default:return Eo.DefaultEventPriority}}function Zy(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function SC(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{Zy(t.capturedMap,e,n,i)})}function MC(r){function e(u){const{internal:h}=r.getState(),f=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(f*f+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(f=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+f]}))}function n(u,h){const f=r.getState(),p=new Set,m=[],v=h?h(f.internal.interaction):f.internal.interaction;for(let _=0;_<v.length;_++){const E=ma(v[_]);E&&(E.raycaster.camera=void 0)}f.previousRoot||f.events.compute==null||f.events.compute(u,f);function y(_){const E=ma(_);if(!E||!E.events.enabled||E.raycaster.camera===null)return[];if(E.raycaster.camera===void 0){var w;E.events.compute==null||E.events.compute(u,E,(w=E.previousRoot)==null?void 0:w.getState()),E.raycaster.camera===void 0&&(E.raycaster.camera=null)}return E.raycaster.camera?E.raycaster.intersectObject(_,!0):[]}let M=v.flatMap(y).sort((_,E)=>{const w=ma(_.object),T=ma(E.object);return!w||!T?_.distance-E.distance:T.events.priority-w.events.priority||_.distance-E.distance}).filter(_=>{const E=nu(_);return p.has(E)?!1:(p.add(E),!0)});f.events.filter&&(M=f.events.filter(M,f));for(const _ of M){let E=_.object;for(;E;){var x;(x=E.__r3f)!=null&&x.eventCount&&m.push({..._,eventObject:E}),E=E.parent}}if("pointerId"in u&&f.internal.capturedMap.has(u.pointerId))for(let _ of f.internal.capturedMap.get(u.pointerId).values())p.has(nu(_.intersection))||m.push(_.intersection);return m}function i(u,h,f,p){const m=r.getState();if(u.length){const v={stopped:!1};for(const y of u){const M=ma(y.object)||m,{raycaster:x,pointer:_,camera:E,internal:w}=M,T=new D(_.x,_.y,0).unproject(E),F=b=>{var C,W;return(C=(W=w.capturedMap.get(b))==null?void 0:W.has(y.eventObject))!=null?C:!1},P=b=>{const C={intersection:y,target:h.target};w.capturedMap.has(b)?w.capturedMap.get(b).set(y.eventObject,C):w.capturedMap.set(b,new Map([[y.eventObject,C]])),h.target.setPointerCapture(b)},L=b=>{const C=w.capturedMap.get(b);C&&Zy(w.capturedMap,y.eventObject,C,b)};let B={};for(let b in h){let C=h[b];typeof C!="function"&&(B[b]=C)}let Y={...y,...B,pointer:_,intersections:u,stopped:v.stopped,delta:f,unprojectedPoint:T,ray:x.ray,camera:E,stopPropagation(){const b="pointerId"in h&&w.capturedMap.get(h.pointerId);if((!b||b.has(y.eventObject))&&(Y.stopped=v.stopped=!0,w.hovered.size&&Array.from(w.hovered.values()).find(C=>C.eventObject===y.eventObject))){const C=u.slice(0,u.indexOf(y));s([...C,y])}},target:{hasPointerCapture:F,setPointerCapture:P,releasePointerCapture:L},currentTarget:{hasPointerCapture:F,setPointerCapture:P,releasePointerCapture:L},nativeEvent:h};if(p(Y),v.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const f of h.hovered.values())if(!u.length||!u.find(p=>p.object===f.object&&p.index===f.index&&p.instanceId===f.instanceId)){const m=f.eventObject.__r3f,v=m?.handlers;if(h.hovered.delete(nu(f)),m!=null&&m.eventCount){const y={...f,intersections:u};v.onPointerOut==null||v.onPointerOut(y),v.onPointerLeave==null||v.onPointerLeave(y)}}}function a(u,h){for(let f=0;f<h.length;f++){const p=h[f].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:f}=r.getState();"pointerId"in h&&f.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{f.capturedMap.has(h.pointerId)&&(f.capturedMap.delete(h.pointerId),s([]))})}}return function(f){const{onPointerMissed:p,internal:m}=r.getState();m.lastEvent.current=f;const v=u==="onPointerMove",y=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",x=n(f,v?t:void 0),_=y?e(f):0;u==="onPointerDown"&&(m.initialClick=[f.offsetX,f.offsetY],m.initialHits=x.map(w=>w.eventObject)),y&&!x.length&&_<=2&&(a(f,m.interaction),p&&p(f)),v&&s(x);function E(w){const T=w.eventObject,F=T.__r3f,P=F?.handlers;if(F!=null&&F.eventCount)if(v){if(P.onPointerOver||P.onPointerEnter||P.onPointerOut||P.onPointerLeave){const L=nu(w),B=m.hovered.get(L);B?B.stopped&&w.stopPropagation():(m.hovered.set(L,w),P.onPointerOver==null||P.onPointerOver(w),P.onPointerEnter==null||P.onPointerEnter(w))}P.onPointerMove==null||P.onPointerMove(w)}else{const L=P[u];L?(!y||m.initialHits.includes(T))&&(a(f,m.interaction.filter(B=>!m.initialHits.includes(B))),L(w)):y&&m.initialHits.includes(T)&&a(f,m.interaction.filter(B=>!m.initialHits.includes(B)))}}i(x,f,_,E)}}return{handlePointer:c}}const Jy=r=>!!(r!=null&&r.render),Ky=ve.createContext(null),wC=(r,e)=>{const t=cC((c,u)=>{const h=new D,f=new D,p=new D;function m(_=u().camera,E=f,w=u().size){const{width:T,height:F,top:P,left:L}=w,B=T/F;E instanceof D?p.copy(E):p.set(...E);const Y=_.getWorldPosition(h).distanceTo(p);if(Gy(_))return{width:T/_.zoom,height:F/_.zoom,top:P,left:L,factor:1,distance:Y,aspect:B};{const b=_.fov*Math.PI/180,C=2*Math.tan(b/2)*Y,W=C*(T/F);return{width:W,height:C,top:P,left:L,factor:T/W,distance:Y,aspect:B}}}let v;const y=_=>c(E=>({performance:{...E.performance,current:_}})),M=new fe;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(_=1)=>r(u(),_),advance:(_,E)=>e(_,E,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Jp,pointer:M,mouse:M,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const _=u();v&&clearTimeout(v),_.performance.current!==_.performance.min&&y(_.performance.min),v=setTimeout(()=>y(u().performance.max),_.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:_=>c(E=>({...E,events:{...E.events,..._}})),setSize:(_,E,w,T,F)=>{const P=u().camera,L={width:_,height:E,top:T||0,left:F||0,updateStyle:w};c(B=>({size:L,viewport:{...B.viewport,...m(P,f,L)}}))},setDpr:_=>c(E=>{const w=qy(_);return{viewport:{...E.viewport,dpr:w,initialDpr:E.viewport.initialDpr||w}}}),setFrameloop:(_="always")=>{const E=u().clock;E.stop(),E.elapsedTime=0,_!=="never"&&(E.start(),E.elapsedTime=0),c(()=>({frameloop:_}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:ve.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(_,E,w)=>{const T=u().internal;return T.priority=T.priority+(E>0?1:0),T.subscribers.push({ref:_,priority:E,store:w}),T.subscribers=T.subscribers.sort((F,P)=>F.priority-P.priority),()=>{const F=u().internal;F!=null&&F.subscribers&&(F.priority=F.priority-(E>0?1:0),F.subscribers=F.subscribers.filter(P=>P.ref!==_))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,a=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:f,set:p}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,yC(c,u),f.setPixelRatio(h.dpr);const v=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&f.domElement instanceof HTMLCanvasElement;f.setSize(u.width,u.height,v)}c!==a&&(a=c,p(v=>({viewport:{...v.viewport,...v.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};let iu,EC=new Set,AC=new Set,TC=new Set;function Ud(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function ga(r,e){switch(r){case"before":return Ud(EC,e);case"after":return Ud(AC,e);case"tail":return Ud(TC,e)}}let Nd,Od;function Fd(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),Nd=e.internal.subscribers,iu=0;iu<Nd.length;iu++)Od=Nd[iu],Od.ref.current(Od.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function bC(r){let e=!1,t=!1,n,i,s;function a(h){i=requestAnimationFrame(a),e=!0,n=0,ga("before",h),t=!0;for(const p of r.values()){var f;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((f=s.gl.xr)!=null&&f.isPresenting)&&(n+=Fd(h,s))}if(t=!1,ga("after",h),n===0)return ga("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,f=1){var p;if(!h)return r.forEach(m=>c(m.store.getState(),f));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(f>1?h.internal.frames=Math.min(60,h.internal.frames+f):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(a)))}function u(h,f=!0,p,m){if(f&&ga("before",h),p)Fd(h,p,m);else for(const v of r.values())Fd(h,v.store.getState());f&&ga("after",h)}return{loop:a,invalidate:c,advance:u}}function Qy(){const r=ve.useContext(Ky);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function $y(r=t=>t,e){return Qy()(r,e)}function gr(r,e=0){const t=Qy(),n=t.getState().internal.subscribe,i=Wy(r);return hl(()=>n(i,e,t),[e,n,t]),null}const Po=new Map,{invalidate:yv,advance:xv}=bC(Po),{reconciler:eh,applyProps:po}=pC(Po,xC),mo={objects:"shallow",strict:!1},CC=(r,e)=>{const t=typeof r=="function"?r(e):r;return Jy(t)?t:new G_({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function RC(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:a,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:a,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:a}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:a,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function PC(r){const e=Po.get(r),t=e?.fiber,n=e?.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||wC(yv,xv),a=t||eh.createContainer(s,Eo.ConcurrentRoot,null,!1,null,"",i,null);e||Po.set(r,{fiber:a,store:s});let c,u=!1,h;return{configure(f={}){let{gl:p,size:m,scene:v,events:y,onCreated:M,shadows:x=!1,linear:_=!1,flat:E=!1,legacy:w=!1,orthographic:T=!1,frameloop:F="always",dpr:P=[1,2],performance:L,raycaster:B,camera:Y,onPointerMissed:b}=f,C=s.getState(),W=C.gl;C.gl||C.set({gl:W=CC(p,r)});let q=C.raycaster;q||C.set({raycaster:q=new Ny});const{params:K,...le}=B||{};if(kt.equ(le,q,mo)||po(q,{...le}),kt.equ(K,q.params,mo)||po(q,{params:{...q.params,...K}}),!C.camera||C.camera===h&&!kt.equ(h,Y,mo)){h=Y;const te=Y instanceof tl,ce=te?Y:T?new rl(0,0,0,0,.1,1e3):new fn(75,0,.1,1e3);te||(ce.position.z=5,Y&&(po(ce,Y),("aspect"in Y||"left"in Y||"right"in Y||"bottom"in Y||"top"in Y)&&(ce.manual=!0,ce.updateProjectionMatrix())),!C.camera&&!(Y!=null&&Y.rotation)&&ce.lookAt(0,0,0)),C.set({camera:ce}),q.camera=ce}if(!C.scene){let te;v instanceof Zu?te=v:(te=new Zu,v&&po(te,v)),C.set({scene:go(te)})}if(!C.xr){var j;const te=(Ye,ne)=>{const me=s.getState();me.frameloop!=="never"&&xv(Ye,!0,me,ne)},ce=()=>{const Ye=s.getState();Ye.gl.xr.enabled=Ye.gl.xr.isPresenting,Ye.gl.xr.setAnimationLoop(Ye.gl.xr.isPresenting?te:null),Ye.gl.xr.isPresenting||yv(Ye)},ze={connect(){const Ye=s.getState().gl;Ye.xr.addEventListener("sessionstart",ce),Ye.xr.addEventListener("sessionend",ce)},disconnect(){const Ye=s.getState().gl;Ye.xr.removeEventListener("sessionstart",ce),Ye.xr.removeEventListener("sessionend",ce)}};typeof((j=W.xr)==null?void 0:j.addEventListener)=="function"&&ze.connect(),C.set({xr:ze})}if(W.shadowMap){const te=W.shadowMap.enabled,ce=W.shadowMap.type;if(W.shadowMap.enabled=!!x,kt.boo(x))W.shadowMap.type=xa;else if(kt.str(x)){var ge;const ze={basic:kv,percentage:nh,soft:xa,variance:wi};W.shadowMap.type=(ge=ze[x])!=null?ge:xa}else kt.obj(x)&&Object.assign(W.shadowMap,x);(te!==W.shadowMap.enabled||ce!==W.shadowMap.type)&&(W.shadowMap.needsUpdate=!0)}const z=Vy();z&&("enabled"in z?z.enabled=!w:"legacyMode"in z&&(z.legacyMode=w)),u||po(W,{outputEncoding:_?3e3:3001,toneMapping:E?Gi:hp}),C.legacy!==w&&C.set(()=>({legacy:w})),C.linear!==_&&C.set(()=>({linear:_})),C.flat!==E&&C.set(()=>({flat:E})),p&&!kt.fun(p)&&!Jy(p)&&!kt.equ(p,W,mo)&&po(W,p),y&&!C.events.handlers&&C.set({events:y(s)});const se=RC(r,m);return kt.equ(se,C.size,mo)||C.setSize(se.width,se.height,se.updateStyle,se.top,se.left),P&&C.viewport.dpr!==qy(P)&&C.setDpr(P),C.frameloop!==F&&C.setFrameloop(F),C.onPointerMissed||C.set({onPointerMissed:b}),L&&!kt.equ(L,C.performance,mo)&&C.set(te=>({performance:{...te.performance,...L}})),c=M,u=!0,this},render(f){return u||this.configure(),eh.updateContainer(pe.jsx(IC,{store:s,children:f,onCreated:c,rootElement:r}),a,null,()=>{}),s},unmount(){ex(r)}}}function IC({store:r,children:e,onCreated:t,rootElement:n}){return hl(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),pe.jsx(Ky.Provider,{value:r,children:e})}function ex(r,e){const t=Po.get(r),n=t?.fiber;if(n){const i=t?.store.getState();i&&(i.internal.active=!1),eh.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,a,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(a=s.renderLists)==null||a.dispose==null||a.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),_C(i),Po.delete(r)}catch{}},500)})}}eh.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:ve.version});const Bd={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function LC(r){const{handlePointer:e}=MC(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(Bd).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(a=>({events:{...a.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([a,c])=>{const[u,h]=Bd[a];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,a])=>{if(n&&n.connected instanceof HTMLElement){const[c]=Bd[s];n.connected.removeEventListener(c,a)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function lp(r,e,t){var n,i,s,a,c;e==null&&(e=100);function u(){var f=Date.now()-a;f<e&&f>=0?n=setTimeout(u,e-f):(n=null,t||(c=r.apply(s,i),s=i=null))}var h=function(){s=this,i=arguments,a=Date.now();var f=t&&!n;return n||(n=setTimeout(u,e)),f&&(c=r.apply(s,i),s=i=null),c};return h.clear=function(){n&&(clearTimeout(n),n=null)},h.flush=function(){n&&(c=r.apply(s,i),s=i=null,clearTimeout(n),n=null)},h}lp.debounce=lp;var DC=lp;const Sv=Fv(DC);var UC=Object.defineProperty,NC=Object.defineProperties,OC=Object.getOwnPropertyDescriptors,Mv=Object.getOwnPropertySymbols,FC=Object.prototype.hasOwnProperty,BC=Object.prototype.propertyIsEnumerable,wv=(r,e,t)=>e in r?UC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ev=(r,e)=>{for(var t in e||(e={}))FC.call(e,t)&&wv(r,t,e[t]);if(Mv)for(var t of Mv(e))BC.call(e,t)&&wv(r,t,e[t]);return r},zC=(r,e)=>NC(r,OC(e)),Av,Tv;typeof window<"u"&&((Av=window.document)!=null&&Av.createElement||((Tv=window.navigator)==null?void 0:Tv.product)==="ReactNative")?ve.useLayoutEffect:ve.useEffect;function tx(r,e,t){if(!r)return;if(t(r)===!0)return r;let n=r.child;for(;n;){const i=tx(n,e,t);if(i)return i;n=n.sibling}}function nx(r){try{return Object.defineProperties(r,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return r}}const bv=console.error;console.error=function(){const r=[...arguments].join("");if(r?.startsWith("Warning:")&&r.includes("useContext")){console.error=bv;return}return bv.apply(this,arguments)};const nm=nx(ve.createContext(null));class ix extends ve.Component{render(){return ve.createElement(nm.Provider,{value:this._reactInternals},this.props.children)}}function kC(){const r=ve.useContext(nm);if(r===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=ve.useId();return ve.useMemo(()=>{for(const n of[r,r?.alternate]){if(!n)continue;const i=tx(n,!1,s=>{let a=s.memoizedState;for(;a;){if(a.memoizedState===e)return!0;a=a.next}});if(i)return i}},[r,e])}function HC(){const r=kC(),[e]=ve.useState(()=>new Map);e.clear();let t=r;for(;t;){if(t.type&&typeof t.type=="object"){const i=t.type._context===void 0&&t.type.Provider===t.type?t.type:t.type._context;i&&i!==nm&&!e.has(i)&&e.set(i,ve.useContext(nx(i)))}t=t.return}return e}function VC(){const r=HC();return ve.useMemo(()=>Array.from(r.keys()).reduce((e,t)=>n=>ve.createElement(e,null,ve.createElement(t.Provider,zC(Ev({},n),{value:r.get(t)}))),e=>ve.createElement(ix,Ev({},e))),[r])}function GC({debounce:r,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||typeof window<"u"&&window.ResizeObserver,[s,a]=ve.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0});if(!i)return s.width=1280,s.height=800,[()=>{},s,()=>{}];const c=ve.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s,orientationHandler:null}),u=r?typeof r=="number"?r:r.scroll:null,h=r?typeof r=="number"?r:r.resize:null,f=ve.useRef(!1);ve.useEffect(()=>(f.current=!0,()=>void(f.current=!1)));const[p,m,v]=ve.useMemo(()=>{const _=()=>{if(!c.current.element)return;const{left:E,top:w,width:T,height:F,bottom:P,right:L,x:B,y:Y}=c.current.element.getBoundingClientRect(),b={left:E,top:w,width:T,height:F,bottom:P,right:L,x:B,y:Y};c.current.element instanceof HTMLElement&&n&&(b.height=c.current.element.offsetHeight,b.width=c.current.element.offsetWidth),Object.freeze(b),f.current&&!qC(c.current.lastBounds,b)&&a(c.current.lastBounds=b)};return[_,h?Sv(_,h):_,u?Sv(_,u):_]},[a,n,u,h]);function y(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(_=>_.removeEventListener("scroll",v,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function M(){var _;c.current.element&&(c.current.resizeObserver=new i(m),(_=c.current.resizeObserver)==null||_.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(E=>E.addEventListener("scroll",v,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{v()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const x=_=>{!_||_===c.current.element||(y(),c.current.element=_,c.current.scrollContainers=rx(_),M())};return XC(v,!!e),WC(m),ve.useEffect(()=>{y(),M()},[e,v,m]),ve.useEffect(()=>y,[]),[x,s,p]}function WC(r){ve.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function XC(r,e){ve.useEffect(()=>{if(e){const t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function rx(r){const e=[];if(!r||r===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...rx(r.parentElement)]}const YC=["x","y","top","bottom","left","right","width","height"],qC=(r,e)=>YC.every(t=>r[t]===e[t]),jC=ve.forwardRef(function({children:e,fallback:t,resize:n,style:i,gl:s,events:a=LC,eventSource:c,eventPrefix:u,shadows:h,linear:f,flat:p,legacy:m,orthographic:v,frameloop:y,dpr:M,performance:x,raycaster:_,camera:E,scene:w,onPointerMissed:T,onCreated:F,...P},L){ve.useMemo(()=>dC(oC),[]);const B=VC(),[Y,b]=GC({scroll:!0,debounce:{scroll:50,resize:0},...n}),C=ve.useRef(null),W=ve.useRef(null);ve.useImperativeHandle(L,()=>C.current);const q=Wy(T),[K,le]=ve.useState(!1),[j,ge]=ve.useState(!1);if(K)throw K;if(j)throw j;const z=ve.useRef(null);hl(()=>{const te=C.current;b.width>0&&b.height>0&&te&&(z.current||(z.current=PC(te)),z.current.configure({gl:s,events:a,shadows:h,linear:f,flat:p,legacy:m,orthographic:v,frameloop:y,dpr:M,performance:x,raycaster:_,camera:E,scene:w,size:b,onPointerMissed:(...ce)=>q.current==null?void 0:q.current(...ce),onCreated:ce=>{ce.events.connect==null||ce.events.connect(c?mC(c)?c.current:c:W.current),u&&ce.setEvents({compute:(ze,Ye)=>{const ne=ze[u+"X"],me=ze[u+"Y"];Ye.pointer.set(ne/Ye.size.width*2-1,-(me/Ye.size.height)*2+1),Ye.raycaster.setFromCamera(Ye.pointer,Ye.camera)}}),F?.(ce)}}),z.current.render(pe.jsx(B,{children:pe.jsx(Xy,{set:ge,children:pe.jsx(ve.Suspense,{fallback:pe.jsx(gC,{set:le}),children:e})})})))}),ve.useEffect(()=>{const te=C.current;if(te)return()=>ex(te)},[]);const se=c?"none":"auto";return pe.jsx("div",{ref:W,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:se,...i},...P,children:pe.jsx("div",{ref:Y,style:{width:"100%",height:"100%"},children:pe.jsx("canvas",{ref:C,style:{display:"block"},children:t})})})}),ZC=ve.forwardRef(function(e,t){return pe.jsx(ix,{children:pe.jsx(jC,{...e,ref:t})})});function Ja(){return Ja=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Ja.apply(null,arguments)}const sx=parseInt(Ka.replace(/\D+/g,"")),ox=sx>=125?"uv1":"uv2",Cv=new pn,ru=new D;class im extends jp{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Xe(e,3)),this.setAttribute("uv",new Xe(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new $u(t,6,1);return this.setAttribute("instanceStart",new ni(n,3,0)),this.setAttribute("instanceEnd",new ni(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new $u(n,t*2,1);return this.setAttribute("instanceColorStart",new ni(i,t,0)),this.setAttribute("instanceColorEnd",new ni(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Hp(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Cv.setFromBufferAttribute(t),this.boundingBox.union(Cv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)ru.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ru)),ru.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ru));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class ax extends im{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){const n=e.length-t,i=new Float32Array(2*n);if(t===3)for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];else for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5],i[2*s+6]=e[s+6],i[2*s+7]=e[s+7];return super.setColors(i,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class rm extends gi{constructor(e){super({type:"LineMaterial",uniforms:ju.clone(ju.merge([Te.common,Te.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new fe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${sx>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const zd=new xt,Rv=new D,Pv=new D,_n=new xt,yn=new xt,Fi=new xt,kd=new D,Hd=new tt,xn=new Oy,Iv=new D,su=new pn,ou=new mn,Bi=new xt;let ki,Es;function Lv(r,e,t){return Bi.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),Bi.multiplyScalar(1/Bi.w),Bi.x=Es/t.width,Bi.y=Es/t.height,Bi.applyMatrix4(r.projectionMatrixInverse),Bi.multiplyScalar(1/Bi.w),Math.abs(Math.max(Bi.x,Bi.y))}function JC(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,i.count);for(let c=0,u=a;c<u;c++){xn.start.fromBufferAttribute(i,c),xn.end.fromBufferAttribute(s,c),xn.applyMatrix4(t);const h=new D,f=new D;ki.distanceSqToSegment(xn.start,xn.end,f,h),f.distanceTo(h)<Es*.5&&e.push({point:f,pointOnLine:h,distance:ki.origin.distanceTo(f),object:r,face:null,faceIndex:c,uv:null,[ox]:null})}}function KC(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,a=r.matrixWorld,c=r.geometry,u=c.attributes.instanceStart,h=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),p=-e.near;ki.at(1,Fi),Fi.w=1,Fi.applyMatrix4(e.matrixWorldInverse),Fi.applyMatrix4(n),Fi.multiplyScalar(1/Fi.w),Fi.x*=s.x/2,Fi.y*=s.y/2,Fi.z=0,kd.copy(Fi),Hd.multiplyMatrices(e.matrixWorldInverse,a);for(let m=0,v=f;m<v;m++){if(_n.fromBufferAttribute(u,m),yn.fromBufferAttribute(h,m),_n.w=1,yn.w=1,_n.applyMatrix4(Hd),yn.applyMatrix4(Hd),_n.z>p&&yn.z>p)continue;if(_n.z>p){const w=_n.z-yn.z,T=(_n.z-p)/w;_n.lerp(yn,T)}else if(yn.z>p){const w=yn.z-_n.z,T=(yn.z-p)/w;yn.lerp(_n,T)}_n.applyMatrix4(n),yn.applyMatrix4(n),_n.multiplyScalar(1/_n.w),yn.multiplyScalar(1/yn.w),_n.x*=s.x/2,_n.y*=s.y/2,yn.x*=s.x/2,yn.y*=s.y/2,xn.start.copy(_n),xn.start.z=0,xn.end.copy(yn),xn.end.z=0;const M=xn.closestPointToPointParameter(kd,!0);xn.at(M,Iv);const x=b_.lerp(_n.z,yn.z,M),_=x>=-1&&x<=1,E=kd.distanceTo(Iv)<Es*.5;if(_&&E){xn.start.fromBufferAttribute(u,m),xn.end.fromBufferAttribute(h,m),xn.start.applyMatrix4(a),xn.end.applyMatrix4(a);const w=new D,T=new D;ki.distanceSqToSegment(xn.start,xn.end,T,w),t.push({point:T,pointOnLine:w,distance:ki.origin.distanceTo(T),object:r,face:null,faceIndex:m,uv:null,[ox]:null})}}}class lx extends Qt{constructor(e=new im,t=new rm({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let a=0,c=0,u=t.count;a<u;a++,c+=2)Rv.fromBufferAttribute(t,a),Pv.fromBufferAttribute(n,a),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+Rv.distanceTo(Pv);const s=new $u(i,2,1);return e.setAttribute("instanceDistanceStart",new ni(s,1,0)),e.setAttribute("instanceDistanceEnd",new ni(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ki=e.ray;const a=this.matrixWorld,c=this.geometry,u=this.material;Es=u.linewidth+s,c.boundingSphere===null&&c.computeBoundingSphere(),ou.copy(c.boundingSphere).applyMatrix4(a);let h;if(n)h=Es*.5;else{const p=Math.max(i.near,ou.distanceToPoint(ki.origin));h=Lv(i,p,u.resolution)}if(ou.radius+=h,ki.intersectsSphere(ou)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),su.copy(c.boundingBox).applyMatrix4(a);let f;if(n)f=Es*.5;else{const p=Math.max(i.near,su.distanceToPoint(ki.origin));f=Lv(i,p,u.resolution)}su.expandByScalar(f),ki.intersectsBox(su)!==!1&&(n?JC(this,t):KC(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(zd),this.material.uniforms.resolution.value.set(zd.z,zd.w))}}class QC extends lx{constructor(e=new ax,t=new rm({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const $C=ve.forwardRef(function({children:e,follow:t=!0,lockX:n=!1,lockY:i=!1,lockZ:s=!1,...a},c){const u=ve.useRef(null),h=ve.useRef(null),f=new zn;return gr(({camera:p})=>{if(!t||!h.current)return;const m=h.current.rotation.clone();h.current.updateMatrix(),h.current.updateWorldMatrix(!1,!1),h.current.getWorldQuaternion(f),p.getWorldQuaternion(u.current.quaternion).premultiply(f.invert()),n&&(h.current.rotation.x=m.x),i&&(h.current.rotation.y=m.y),s&&(h.current.rotation.z=m.z)}),ve.useImperativeHandle(c,()=>h.current,[]),ve.createElement("group",Ja({ref:h},a),ve.createElement("group",{ref:u},e))}),Rs=ve.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:i,lineWidth:s,segments:a,dashed:c,...u},h){var f,p;const m=$y(_=>_.size),v=ve.useMemo(()=>a?new lx:new QC,[a]),[y]=ve.useState(()=>new rm),M=(n==null||(f=n[0])==null?void 0:f.length)===4?4:3,x=ve.useMemo(()=>{const _=a?new im:new ax,E=e.map(w=>{const T=Array.isArray(w);return w instanceof D||w instanceof xt?[w.x,w.y,w.z]:w instanceof fe?[w.x,w.y,0]:T&&w.length===3?[w[0],w[1],w[2]]:T&&w.length===2?[w[0],w[1],0]:w});if(_.setPositions(E.flat()),n){t=16777215;const w=n.map(T=>T instanceof De?T.toArray():T);_.setColors(w.flat(),M)}return _},[e,a,n,M]);return ve.useLayoutEffect(()=>{v.computeLineDistances()},[e,v]),ve.useLayoutEffect(()=>{c?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[c,y]),ve.useEffect(()=>()=>{x.dispose(),y.dispose()},[x]),ve.createElement("primitive",Ja({object:v,ref:h},u),ve.createElement("primitive",{object:x,attach:"geometry"}),ve.createElement("primitive",Ja({object:y,attach:"material",color:t,vertexColors:!!n,resolution:[m.width,m.height],linewidth:(p=i??s)!==null&&p!==void 0?p:1,dashed:c,transparent:M===4},u)))});let va=null;function eR(){if(va)return va;const r=document.createElement("canvas");r.width=r.height=128;const e=r.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.75)"),t.addColorStop(.45,"rgba(255,255,255,0.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),va=new Q_(r),va.colorSpace=ti,va}function Hr({color:r="#14D1C8",scale:e=1,opacity:t=1,position:n}){const i=ve.useMemo(eR,[]);return pe.jsx("sprite",{position:n,scale:[e,e,e],children:pe.jsx("spriteMaterial",{map:i,color:r,transparent:!0,opacity:t,depthWrite:!1,blending:hu})})}function tR(r=.5,e=.09){return ve.useMemo(()=>{const t=new Br;for(let n=0;n<8;n++){const i=n%2===0?r:e,s=n/8*Math.PI*2+Math.PI/2,a=Math.cos(s)*i,c=Math.sin(s)*i;n===0?t.moveTo(a,c):t.lineTo(a,c)}return t.closePath(),new al(t)},[r,e])}const cp=r=>()=>(r=r*16807%2147483647,(r-1)/2147483646),Dv=7,Uv=["#14D1C8","#3B82F6","#93BBFB","#6FE8E1"];function up(r,e,t,n=new D){const i=Math.PI*t,s=Math.cos(i)*r,a=Math.sin(i)*r*.92;return n.set(s*Math.cos(e),a,s*Math.sin(e))}function nR({radius:r,rotY:e,speed:t,offset:n,color:i}){const s=ve.useRef(null),a=ve.useMemo(()=>new D,[]);return gr(({clock:c})=>{const u=(c.elapsedTime*t+n)%1;up(r,e,u,a),s.current?.position.copy(a);const h=Math.sin(u*Math.PI);s.current?.scale.setScalar(.35+h*.45)}),pe.jsxs("group",{ref:s,children:[pe.jsx(Hr,{color:i,scale:.55,opacity:.95}),pe.jsxs("mesh",{children:[pe.jsx("sphereGeometry",{args:[.028,10,10]}),pe.jsx("meshBasicMaterial",{color:"#ffffff"})]})]})}function iR({reduced:r=!1}){const e=ve.useRef(null),t=ve.useRef(null),n=tR(.34,.06),{camera:i,pointer:s}=$y(),a=ve.useMemo(()=>{const u=cp(7);return Array.from({length:Dv},(h,f)=>{const p=f/Dv*Math.PI,m=2.15+f%3*.32,v=Array.from({length:64},(M,x)=>up(m,p,x/63)),y=Array.from({length:5},()=>{const M=.08+u()*.84;return{p:up(m,p,M),c:Uv[Math.floor(u()*Uv.length)],s:.03+u()*.035}});return{rotY:p,radius:m,pts:v,nodes:y,speed:.07+u()*.06,offset:u()}})},[]),c=ve.useMemo(()=>{const u=cp(31),h=260,f=new Float32Array(h*3);for(let p=0;p<h;p++){const m=3+u()*5,v=u()*Math.PI*2;f[p*3]=Math.cos(v)*m,f[p*3+1]=u()*4.5-.6,f[p*3+2]=Math.sin(v)*m-1}return f},[]);return gr(({clock:u},h)=>{!r&&e.current&&(e.current.rotation.y+=h*.06);const f=.6+s.x*.5,p=1.7+s.y*.3;if(i.position.x+=(f-i.position.x)*.04,i.position.y+=(p-i.position.y)*.04,i.lookAt(0,1.2,0),t.current){const m=1+Math.sin(u.elapsedTime*1.6)*.08;t.current.scale.setScalar(m)}}),pe.jsxs(pe.Fragment,{children:[pe.jsx("fog",{attach:"fog",args:["#030b1a",6,13]}),pe.jsxs("group",{ref:e,position:[0,0,0],children:[a.map((u,h)=>pe.jsxs("group",{children:[pe.jsx(Rs,{points:u.pts,color:h%2?"#3B82F6":"#14D1C8",lineWidth:1.1,transparent:!0,opacity:.42}),u.nodes.map((f,p)=>pe.jsxs("group",{position:f.p,children:[pe.jsxs("mesh",{children:[pe.jsx("sphereGeometry",{args:[f.s,12,12]}),pe.jsx("meshBasicMaterial",{color:f.c})]}),pe.jsx(Hr,{color:f.c,scale:f.s*9,opacity:.6})]},p)),pe.jsx(nR,{radius:u.radius,rotY:u.rotY,speed:r?0:u.speed,offset:u.offset,color:h%2?"#5E9AF8":"#14D1C8"})]},h)),[1.2,2.2,3.2].map((u,h)=>pe.jsxs("mesh",{"rotation-x":-Math.PI/2,"position-y":.001,children:[pe.jsx("ringGeometry",{args:[u,u+.008,128]}),pe.jsx("meshBasicMaterial",{color:"#93BBFB",transparent:!0,opacity:.16-h*.04})]},u))]}),pe.jsxs("group",{position:[0,2.62,0],children:[pe.jsx($C,{children:pe.jsx("mesh",{ref:t,geometry:n,children:pe.jsx("meshBasicMaterial",{color:"#6FE8E1"})})}),pe.jsx(Hr,{color:"#14D1C8",scale:1.9,opacity:.75})]}),pe.jsxs("points",{children:[pe.jsx("bufferGeometry",{children:pe.jsx("bufferAttribute",{attach:"attributes-position",args:[c,3]})}),pe.jsx("pointsMaterial",{size:.018,color:"#93BBFB",transparent:!0,opacity:.5,sizeAttenuation:!0,depthWrite:!1})]})]})}const Or=[{color:"#3B82F6",apart:new D(2.5,.65,0),joined:new D(1.6,.35,0)},{color:"#14D1C8",apart:new D(-2.5,.45,0),joined:new D(-1.6,.35,0)},{color:"#93BBFB",apart:new D(0,-1.55,-.6),joined:new D(0,-1.25,0)}];function Vd({idx:r,connected:e,reduced:t}){const n=ve.useRef(null),i=Or[r],{nodes:s,links:a}=ve.useMemo(()=>{const c=cp(11+r*13),u=Array.from({length:13},()=>{const f=c()*Math.PI*2,p=Math.acos(2*c()-1),m=.25+c()*.6;return new D(Math.sin(p)*Math.cos(f)*m,Math.sin(p)*Math.sin(f)*m*.8,Math.cos(p)*m*.6)}),h=[];return u.forEach((f,p)=>u.forEach((m,v)=>{v>p&&f.distanceTo(m)<.52&&h.push([f,m])})),{nodes:u,links:h}},[r]);return gr(({clock:c})=>{const u=n.current;if(!u)return;const h=c.elapsedTime,f=e?i.joined:i.apart,p=e||t?0:Math.sin(h*.5+r*2)*.12;u.position.lerp(new D(f.x*(1+p*.3),f.y+p,f.z),.04),t||(u.rotation.y=Math.sin(h*.25+r)*.5)}),pe.jsxs("group",{ref:n,position:i.apart,children:[a.map(([c,u],h)=>pe.jsx(Rs,{points:[c,u],color:i.color,lineWidth:1,transparent:!0,opacity:.35},h)),s.map((c,u)=>pe.jsxs("group",{position:c,children:[pe.jsxs("mesh",{children:[pe.jsx("sphereGeometry",{args:[u===0?.085:.045,14,14]}),pe.jsx("meshBasicMaterial",{color:u===0?"#ffffff":i.color})]}),pe.jsx(Hr,{color:i.color,scale:u===0?.9:.4,opacity:.55})]},u))]})}function Gd({from:r,to:e,color:t,connected:n,phase:i}){ve.useRef(null),ve.useMemo(()=>r.clone().lerp(e,.5),[r,e]);const s=ve.useMemo(()=>[r.clone().lerp(e,.18),r.clone().lerp(e,.42)],[r,e]),a=ve.useMemo(()=>[r.clone().lerp(e,.58),r.clone().lerp(e,.82)],[r,e]),c=ve.useRef(null),u=ve.useRef(null);return gr(({clock:h})=>{const f=n?0:.25+Math.abs(Math.sin(h.elapsedTime*1.3+i))*.35;[c.current,u.current].forEach(p=>{p?.material&&(p.material.opacity+=(f-p.material.opacity)*.1)})}),pe.jsxs(pe.Fragment,{children:[pe.jsx(Rs,{ref:c,points:s,color:t,lineWidth:1.4,dashed:!0,dashSize:.06,gapSize:.06,transparent:!0,opacity:.4}),pe.jsx(Rs,{ref:u,points:a,color:t,lineWidth:1.4,dashed:!0,dashSize:.06,gapSize:.06,transparent:!0,opacity:.4})]})}function rR({connected:r}){const e=ve.useRef(null),t=ve.useRef([]);return gr(({clock:n})=>{const i=e.current;if(!i)return;const s=r?1:.001;i.scale.lerp(new D(s,s,s),.06),i.rotation.y=n.elapsedTime*.4,t.current.forEach(a=>{a?.material&&(a.material.opacity+=((r?.8:0)-a.material.opacity)*.06)})}),pe.jsxs(pe.Fragment,{children:[pe.jsxs("group",{ref:e,position:[0,.15,0],scale:.001,children:[pe.jsxs("mesh",{children:[pe.jsx("icosahedronGeometry",{args:[.38,1]}),pe.jsx("meshBasicMaterial",{color:"#14D1C8",wireframe:!0,transparent:!0,opacity:.7})]}),pe.jsxs("mesh",{children:[pe.jsx("sphereGeometry",{args:[.16,24,24]}),pe.jsx("meshBasicMaterial",{color:"#ffffff"})]}),pe.jsx(Hr,{color:"#14D1C8",scale:2.2,opacity:.8})]}),Or.map((n,i)=>pe.jsx(Rs,{ref:s=>t.current[i]=s,points:[[0,.15,0],n.joined.toArray()],color:n.color,lineWidth:2,transparent:!0,opacity:0},i))]})}function sR({connected:r=!1,reduced:e=!1}){return pe.jsxs(pe.Fragment,{children:[pe.jsx(Vd,{idx:0,connected:r,reduced:e}),pe.jsx(Vd,{idx:1,connected:r,reduced:e}),pe.jsx(Vd,{idx:2,connected:r,reduced:e}),pe.jsx(Gd,{from:Or[0].apart,to:Or[1].apart,color:"#93BBFB",connected:r,phase:0}),pe.jsx(Gd,{from:Or[1].apart,to:Or[2].apart,color:"#93BBFB",connected:r,phase:1.4}),pe.jsx(Gd,{from:Or[2].apart,to:Or[0].apart,color:"#93BBFB",connected:r,phase:2.6}),pe.jsx(rR,{connected:r})]})}const th=2.15,Nv=-.42;function cx(r){const e=Math.PI/2-r/_o.length*Math.PI*2;return new D(Math.cos(e)*th,Math.sin(e)*th,0)}function oR({i:r,active:e,done:t,onSelect:n}){const i=ve.useRef(null),[s,a]=ve.useState(!1),c=ve.useMemo(()=>cx(r),[r]),u=_o[r].color;return gr(({clock:h})=>{const f=i.current;if(!f)return;const p=e?1.55+Math.sin(h.elapsedTime*3)*.06:s?1.2:1;f.scale.lerp(new D(p,p,p),.12)}),pe.jsxs("group",{ref:i,position:c,onClick:h=>{h.stopPropagation(),n?.(r)},onPointerOver:h=>{h.stopPropagation(),a(!0),document.body.style.cursor="pointer"},onPointerOut:()=>{a(!1),document.body.style.cursor=""},children:[pe.jsxs("mesh",{children:[pe.jsx("sphereGeometry",{args:[.36,20,20]}),pe.jsx("meshBasicMaterial",{transparent:!0,opacity:0,depthWrite:!1})]}),pe.jsxs("mesh",{children:[pe.jsx("torusGeometry",{args:[.2,.014,8,48]}),pe.jsx("meshBasicMaterial",{color:e||t?u:"#3d5a87"})]}),pe.jsxs("mesh",{children:[pe.jsx("sphereGeometry",{args:[.1,18,18]}),pe.jsx("meshBasicMaterial",{color:e?"#ffffff":t?u:"#24406b"})]}),pe.jsx(Hr,{color:u,scale:e?1.5:t?.7:.35,opacity:e?.95:.5})]})}function Ov({from:r,to:e,color:t,k:n}){const i=ve.useRef(null),s=ve.useRef(null);return gr(({clock:a})=>{s.current===null&&(s.current=a.elapsedTime);const c=Math.min(1,(a.elapsedTime-s.current)/.9),u=1-Math.pow(1-c,3);i.current?.position.lerpVectors(r,e,u),i.current&&(i.current.visible=c<1)}),pe.jsx("group",{ref:i,children:pe.jsx(Hr,{color:t,scale:.8})},n)}function aR({active:r,onSelect:e,reduced:t=!1}){const n=ve.useRef(null),i=ve.useRef(null),s=ve.useRef(r),[a,c]=ve.useState(0),[u,h]=ve.useState(r);s.current!==r&&(h(s.current),s.current=r,c(v=>v+1));const f=ve.useMemo(()=>Array.from({length:97},(v,y)=>{const M=y/96*Math.PI*2;return new D(Math.cos(M)*th,Math.sin(M)*th,0)}),[]),p=ve.useMemo(()=>_o.map((v,y)=>cx(y)),[]),m=ve.useMemo(()=>new D(0,0,0),[]);return gr(({clock:v,pointer:y})=>{n.current&&(n.current.rotation.x=Nv+y.y*.12,n.current.rotation.y=t?0:Math.sin(v.elapsedTime*.3)*.18+y.x*.15),i.current&&!t&&(i.current.rotation.y+=.004,i.current.rotation.x+=.002)}),pe.jsxs("group",{ref:n,"rotation-x":Nv,children:[pe.jsx(Rs,{points:f,color:"#3B82F6",lineWidth:1.2,transparent:!0,opacity:.35}),p.map((v,y)=>pe.jsx(Rs,{points:[m,v],color:y===r?_o[y].color:"#1f3a66",lineWidth:y===r?2.2:1,transparent:!0,opacity:y===r?.95:.5},y)),pe.jsxs("mesh",{ref:i,children:[pe.jsx("icosahedronGeometry",{args:[.62,1]}),pe.jsx("meshBasicMaterial",{color:"#14D1C8",wireframe:!0,transparent:!0,opacity:.55})]}),pe.jsxs("mesh",{children:[pe.jsx("sphereGeometry",{args:[.24,28,28]}),pe.jsx("meshBasicMaterial",{color:"#e9fffd"})]}),pe.jsx(Hr,{color:"#14D1C8",scale:2.6,opacity:.7}),_o.map((v,y)=>pe.jsx(oR,{i:y,active:y===r,done:y<r,onSelect:e},y)),a>0&&pe.jsxs(pe.Fragment,{children:[pe.jsx(Ov,{k:a,from:p[u],to:p[r],color:_o[r].color},`a${a}`),pe.jsx(Ov,{k:a,from:p[r],to:m,color:"#ffffff"},`b${a}`)]})]})}const lR={cover:{position:[.6,1.7,6.4],fov:42},problem:{position:[0,0,6.2],fov:45},agents:{position:[0,0,6.6],fov:42}};function dR({scene:r,active:e,reduced:t,props:n}){return pe.jsxs(ZC,{dpr:[1,1.75],camera:lR[r],resize:{offsetSize:!0},frameloop:e?"always":"never",gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},style:{position:"absolute",inset:0},children:[r==="cover"&&pe.jsx(iR,{reduced:t}),r==="problem"&&pe.jsx(sR,{connected:!!n.connected,reduced:t}),r==="agents"&&pe.jsx(aR,{active:n.active??0,onSelect:n.onSelect,reduced:t})]})}export{dR as default};
