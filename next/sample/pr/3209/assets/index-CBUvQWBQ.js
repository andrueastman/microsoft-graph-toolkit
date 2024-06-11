import{m as g,t as x,cA as S,F as k,cB as H,_ as i,b as s,o as p,c3 as I,D as w,n as u,bu as v,bv as A,bw as L,bs as O,aE as E,bt as M,cC as _,x as h,y as f,bz as b,C as r,J as N,I as z,cu as R,cD as D,E as B,G as m,N as q,cE as G,cF as P,cG as j,cH as J,bC as y,cI as K,bD as U,L as Q,cJ as W,cK as V,bP as X,bO as Y,P as F,Q as o,cL as Z,cb as ee,cc as $,cd as te,ce as ae,cf as oe}from"./App-Ofsx7rcY.js";import{_ as ie}from"./index-BTg_gX7d.js";const le=(t,a)=>g`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,c)=>e.keypressHandler(c.event)}"
        @click="${(e,c)=>e.clickHandler(c.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${a.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${a.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${x("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class se extends k{}class re extends S(se){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class d extends re{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=a=>{if(!this.readOnly)switch(a.key){case H:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=a=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}i([s({attribute:"readonly",mode:"boolean"})],d.prototype,"readOnly",void 0);i([p],d.prototype,"defaultSlottedNodes",void 0);i([p],d.prototype,"indeterminate",void 0);class ne extends k{}class de extends I(ne){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const ce={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let l=class extends de{constructor(){super(...arguments),this.type=ce.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&w.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};i([s({attribute:"readonly",mode:"boolean"})],l.prototype,"readOnly",void 0);i([s({mode:"boolean"})],l.prototype,"autofocus",void 0);i([s],l.prototype,"placeholder",void 0);i([s],l.prototype,"type",void 0);i([s],l.prototype,"list",void 0);i([s({converter:u})],l.prototype,"maxlength",void 0);i([s({converter:u})],l.prototype,"minlength",void 0);i([s],l.prototype,"pattern",void 0);i([s({converter:u})],l.prototype,"size",void 0);i([s({mode:"boolean"})],l.prototype,"spellcheck",void 0);i([p],l.prototype,"defaultSlottedNodes",void 0);class C{}v(C,A);v(l,L,C);const he=(t,a)=>g`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${x({property:"defaultSlottedNodes",filter:_})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${O(t,a)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${E("control")}
            />
            ${M(t,a)}
        </div>
    </template>
`,pe=(t,a)=>h`
    ${f("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${b} / 2 + ${r}) * 1px);
      height: calc((${b} / 2 + ${r}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${N} * 1px);
      border: calc(${z} * 1px) solid ${R};
      background: ${D};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${B}
      color: ${m};
      ${""} padding-inline-start: calc(${r} * 2px + 2px);
      margin-inline-end: calc(${r} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${m};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${q};
    }

    :host(:not(.disabled):hover) .control {
      background: ${G};
      border-color: ${P};
    }

    :host(:not(.disabled):active) .control {
      background: ${j};
      border-color: ${J};
    }

    :host(:${y}) .control {
      background: ${K};
      ${U}
    }

    :host(.checked) .control {
      background: ${Q};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${W};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${V};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${X};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Y};
    }
  `.withBehaviors(F(h`
        .control {
          border-color: ${o.FieldText};
          background: ${o.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${o.Highlight};
          background: ${o.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${o.FieldText};
        }
        :host(:${y}) .control {
          forced-color-adjust: none;
          outline-color: ${o.FieldText};
          background: ${o.Field};
          border-color: ${o.Highlight};
        }
        :host(.checked) .control {
          background: ${o.Highlight};
          border-color: ${o.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${o.HighlightText};
          border-color: ${o.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${o.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${o.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${o.GrayText};
          background: ${o.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${o.GrayText};
        }
      `)),$e=d.compose({baseName:"checkbox",template:le,styles:pe,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),n=".root",ue=(t,a)=>h`
    ${f("inline-block")}

    ${Z(t,a,n)}

    ${ee()}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${r} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors($("outline",te(t,a,n)),$("filled",ae(t,a,n)),F(oe(t,a,n)));class T extends l{appearanceChanged(a,e){a!==e&&(this.classList.add(e),this.classList.remove(a))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}ie([s],T.prototype,"appearance",void 0);const ge=T.compose({baseName:"text-field",baseClass:l,template:he,styles:ue,shadowOptions:{delegatesFocus:!0}});export{$e as a,ge as f};
