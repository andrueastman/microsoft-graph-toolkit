import{a1 as x,X as _,Y as y,aJ as R,aK as T,aN as O,bT as j,a0 as d}from"./App-Dw62dsYP.js";import{g as S}from"./graph.files-CHH2_R5W.js";import{b as w,a as $,p as E}from"./index-C4G5kBsZ.js";var u=function(t,e,i,o){var a=arguments.length,n=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(l=t[s])&&(n=(a<3?l(n):a>3?l(e,i,n):l(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n},c=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)},L=function(t,e,i,o){function a(n){return n instanceof i?n:new i(function(l){l(n)})}return new(i||(i=Promise))(function(n,l){function s(p){try{v(o.next(p))}catch(m){l(m)}}function f(p){try{v(o.throw(p))}catch(m){l(m)}}function v(p){p.done?n(p.value):a(p.value).then(s,f)}v((o=o.apply(t,e||[])).next())})};const b=t=>Array.isArray(t==null?void 0:t.value),I=["json","image"],D=t=>typeof t=="string"&&I.includes(t),N=(t,e="json")=>D(t)?t:e,V=t=>t||R.config.response.invalidationPeriod||R.config.defaultInvalidationPeriod,P=()=>R.config.response.isEnabled&&R.config.isEnabled,J=()=>x("get",h);class h extends _{constructor(){super(...arguments),this.scopes=[],this.version="v1.0",this.type="json",this.maxPages=3,this.pollingRate=0,this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.isPolling=!1,this.isRefreshing=!1,this.renderLoading=()=>{const e=this.renderTemplate("loading",null);return b(this.response)?this.renderValueContentWithDefaultTemplate(y`${this.response.value.map(i=>this.renderTemplate("value",i,i.id))} ${e} `):e},this.renderContent=()=>{if(this.hasTemplate("value")&&b(this.response)){const e=b(this.response)?y`
          ${this.response.value.map(i=>this.renderTemplate("value",i,i.id))}
        `:this.renderTemplate("value",this.response);return this.renderValueContentWithDefaultTemplate(e)}else return this.response?this.renderTemplate("default",this.response)||y``:this.hasTemplate("no-data")?this.renderTemplate("no-data",null):y``}}refresh(e=!1){this.isRefreshing=!0,e&&this.clearState(),this._task.run()}clearState(){this.response=null}args(){return[this.providerState,this.resource,this.scopes,this.version,this.pollingRate,this.type,this.maxPages,this.cacheEnabled,this.cacheInvalidationPeriod]}renderValueContentWithDefaultTemplate(e){var i,o;if(this.hasTemplate("default")){const a=this.renderTemplate("default",this.response);return((o=(i=this.templates.value)===null||i===void 0?void 0:i.templateOrder)!==null&&o!==void 0?o:999)>this.templates.default.templateOrder?y`
          ${a}${e}
        `:y`
          ${e}${a}
        `}else return e}loadState(){var e,i,o;return L(this,void 0,void 0,function*(){const a=w.globalProvider;if(this.error=null,!(!a||a.state!==$.SignedIn)){if(this.resource){try{let n;const l=`${this.version}${this.resource}`;let s=null;if(this.shouldRetrieveCache()){n=R.getCache(T.get,T.get.stores.responses);const f=P()?yield n.getValue(l):null;f&&V(this.cacheInvalidationPeriod)>Date.now()-f.timeCached&&(s=JSON.parse(f.response))}if(!s){let f=this.resource,v=!1;!((e=this.response)===null||e===void 0)&&e["@odata.deltaLink"]?(f=this.response["@odata.deltaLink"],v=!0):v=new URL(f,"https://graph.microsoft.com").pathname.endsWith("delta");const p=a.graph.forComponent(this);let m=p.api(f).version(this.version);if(!((i=this.scopes)===null||i===void 0)&&i.length&&(m=m.middlewareOptions(E(this.scopes))),this.type==="json"){if(s=yield m.get(),v&&b(this.response)&&b(s)){const g=s.value;s.value=this.response.value.concat(g)}if(!this.isPolling&&!O(this.response,s)&&(this.response=s),b(s)&&s["@odata.nextLink"]){let g=1,r=s;for(;(g<this.maxPages||this.maxPages<=0||v&&this.pollingRate)&&(r!=null&&r["@odata.nextLink"]);){g++;const C=r["@odata.nextLink"].split(this.version)[1];r=yield p.api(C).version(this.version).get(),!((o=r==null?void 0:r.value)===null||o===void 0)&&o.length&&(r.value=s.value.concat(r.value),s=r,this.isPolling||(this.response=s))}}}else{if(this.resource.indexOf("/photo/$value")===-1&&this.resource.indexOf("/thumbnails/")===-1)throw new Error("Only /photo/$value and /thumbnails/ endpoints support the image type");let g;if(this.resource.indexOf("/photo/$value")>-1){const r=this.resource.replace("/photo/$value",""),C=yield j(p,r,this.scopes);C&&(g=C.photo)}else if(this.resource.indexOf("/thumbnails/")>-1){const r=yield S(p,this.resource,this.scopes);r&&(g=r.thumbnail)}g&&(s={image:g})}this.shouldUpdateCache()&&s&&(n=R.getCache(T.get,T.get.stores.responses),yield n.putValue(l,{response:JSON.stringify(s)}))}O(this.response,s)||(this.response=s)}catch(n){this.error=n}this.response&&(this.error=null,this.pollingRate&&setTimeout(()=>{this.isPolling=!0,this.loadState().finally(()=>{this.isPolling=!1})},this.pollingRate))}else this.response=null;this.isRefreshing=!1,this.fireCustomEvent("dataChange",{response:this.response,error:this.error},!0,!1,!0)}})}shouldRetrieveCache(){return P()&&this.cacheEnabled&&!(this.isRefreshing||this.isPolling)}shouldUpdateCache(){return P()&&this.cacheEnabled}}u([d({attribute:"resource",reflect:!0,type:String}),c("design:type",String)],h.prototype,"resource",void 0);u([d({attribute:"scopes",converter:(t,e)=>t?t.toLowerCase().split(","):null,reflect:!0}),c("design:type",Array)],h.prototype,"scopes",void 0);u([d({attribute:"version",reflect:!0,type:String}),c("design:type",Object)],h.prototype,"version",void 0);u([d({attribute:"type",reflect:!0,type:String,converter:t=>N(t,"json")}),c("design:type",String)],h.prototype,"type",void 0);u([d({attribute:"max-pages",reflect:!0,type:Number}),c("design:type",Object)],h.prototype,"maxPages",void 0);u([d({attribute:"polling-rate",reflect:!0,type:Number}),c("design:type",Object)],h.prototype,"pollingRate",void 0);u([d({attribute:"cache-enabled",reflect:!0,type:Boolean}),c("design:type",Object)],h.prototype,"cacheEnabled",void 0);u([d({attribute:"cache-invalidation-period",type:Number}),c("design:type",Object)],h.prototype,"cacheInvalidationPeriod",void 0);u([d({attribute:!1}),c("design:type",Object)],h.prototype,"response",void 0);u([d({attribute:!1}),c("design:type",Object)],h.prototype,"error",void 0);export{J as r};
