(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{464:function(module,exports,__webpack_require__){__webpack_require__(465),__webpack_require__(832),__webpack_require__(830),module.exports=__webpack_require__(831)},511:function(module,exports){},832:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var esm=__webpack_require__(458),dist_esm=__webpack_require__(8),theming_dist_esm=__webpack_require__(1),theme=Object(theming_dist_esm.d)({base:"light",colorSecondary:"#0360B9",textColor:"#1A1A1A",textInverseColor:"rgba(255,255,255,0.9)",barTextColor:"#717171",brandTitle:"Microsoft Graph Toolkit Playground",brandUrl:"https://aka.ms/mgt"});esm.a.setConfig({enableShortcuts:!1,theme:theme}),esm.a.register("microsoft/graph-toolkit",(function(storybookAPI){storybookAPI.on(dist_esm.STORIES_CONFIGURED,(function(kind,story){"/story/*"===storybookAPI.getUrlState().path&&storybookAPI.selectStory("mgt-login","login")})),storybookAPI.on(dist_esm.STORY_MISSING,(function(kind,story){storybookAPI.selectStory("mgt-login","login")}))}))}},[[464,3,4]]]);