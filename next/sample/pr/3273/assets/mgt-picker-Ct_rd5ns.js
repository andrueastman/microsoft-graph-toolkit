import{W as u,Z as f,a1 as g,X as m,a6 as h,a7 as y,Y as b,a0 as l,a8 as v}from"./App-BE0BzlDr.js";import{r as k}from"./mgt-get-BgD8SVux.js";import{f as x,a as C}from"./index-Qb5filCn.js";const S={comboboxPlaceholder:"Select an item"},P=[u`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{--max-height:var(--picker-max-height, 380px);font-family:var(--default-font-family)}:host .picker{background-color:var(--picker-background-color,transparent)}:host fluent-combobox::part(selected-value)::placeholder{color:var(--picker-text-color,var(--input-filled-placeholder-rest))}:host fluent-combobox::part(selected-value):hover::placeholder{color:var(--picker-text-color-hover,var(--secondary-text-hover-color))}[dir=rtl] .picker{direction:rtl}
`];var s=function(c,e,t,o){var i=arguments.length,r=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(c,e,t,o);else for(var p=c.length-1;p>=0;p--)(d=c[p])&&(r=(i<3?d(r):i>3?d(e,t,r):d(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r},a=function(c,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(c,e)};const E=()=>{f(C,x),k(),g("picker",n)};class n extends m{get strings(){return S}static get styles(){return P}constructor(){super(),this.version="v1.0",this.maxPages=3,this.scopes=[],this.cacheEnabled=!1,this.cacheInvalidationPeriod=0,this.renderLoading=()=>this.response?this.renderContent():this.renderTemplate("loading",null),this.renderContent=()=>{var e;const t=this.error?this.error:null;return t&&this.hasTemplate("error")?this.renderTemplate("error",{error:t},"error"):this.hasTemplate("no-data")?this.renderTemplate("no-data",null):((e=this.response)===null||e===void 0?void 0:e.length)>0?this.renderPicker():this.renderGet()},this.handleComboboxKeydown=e=>{let t,o;const i=e.key,d=e.target.querySelector(".selected");d&&(t=d.getAttribute("value")),i==="Enter"&&t&&(o=this.response.filter(p=>p.id===t).pop(),this.fireCustomEvent("selectionChanged",o,!0,!1,!0))},this.placeholder=this.strings.comboboxPlaceholder,this.entityType=null,this.keyName=null}refresh(e=!1){e&&this.clearState(),this._task.run()}clearState(){this.response=null,this.error=null}renderPicker(){return h`
      <fluent-combobox
        @keydown=${this.handleComboboxKeydown}
        current-value=${y(this.selectedValue)}
        part="picker"
        class="picker"
        id="combobox"
        autocomplete="list"
        placeholder=${this.placeholder}>
          ${this.response.map(e=>b`
            <fluent-option value=${e.id} @click=${t=>this.handleClick(t,e)}> ${this.getNestedPropertyValue(e,this.keyName)} </fluent-option>`)}
      </fluent-combobox>
     `}getNestedPropertyValue(e,t){const o=t.split(".");let i=e;for(const r of o)if(i=i[r],i===void 0)return console.warn(`mgt-picker: Key '${r}' is undefined.`),"";return i}renderGet(){return h`
      <mgt-get
        class="mgt-get"
        resource=${this.resource}
        version=${this.version}
        .scopes=${this.scopes}
        max-pages=${this.maxPages}
        ?cache-enabled=${this.cacheEnabled}
        ?cache-invalidation-period=${this.cacheInvalidationPeriod}>
      </mgt-get>`}firstUpdated(e){super.firstUpdated(e);const t=this.renderRoot;t?t.addEventListener("dataChange",o=>this.handleDataChange(o)):console.error("🦒: mgt-picker component requires a renderRoot. Something has gone horribly wrong.")}handleDataChange(e){const t=e.detail.response.value,o=e.detail.error?e.detail.error:null;this.response=t,this.error=o}handleClick(e,t){this.fireCustomEvent("selectionChanged",t,!0,!1,!0)}}s([l({attribute:"resource",type:String}),a("design:type",String)],n.prototype,"resource",void 0);s([l({attribute:"version",type:String}),a("design:type",Object)],n.prototype,"version",void 0);s([l({attribute:"max-pages",type:Number}),a("design:type",Object)],n.prototype,"maxPages",void 0);s([l({attribute:"placeholder",type:String}),a("design:type",String)],n.prototype,"placeholder",void 0);s([l({attribute:"key-name",type:String}),a("design:type",String)],n.prototype,"keyName",void 0);s([l({attribute:"entity-type",type:String}),a("design:type",String)],n.prototype,"entityType",void 0);s([l({attribute:"scopes",converter:c=>c?c.toLowerCase().split(","):null}),a("design:type",Array)],n.prototype,"scopes",void 0);s([l({attribute:"cache-enabled",type:Boolean}),a("design:type",Object)],n.prototype,"cacheEnabled",void 0);s([l({attribute:"cache-invalidation-period",type:Number}),a("design:type",Object)],n.prototype,"cacheInvalidationPeriod",void 0);s([l({attribute:"selected-value",type:String}),a("design:type",String)],n.prototype,"selectedValue",void 0);s([v(),a("design:type",Array)],n.prototype,"response",void 0);export{E as r};
