(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-picture-control"] = factory(require("vue"));
	else
		root["vue-picture-control"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 620:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/pictureControl.vue?vue&type=template&id=a333d8d8&scoped=true

const _withScopeId = n => (_pushScopeId("data-v-a333d8d8"), n = n(), _popScopeId(), n);
const _hoisted_1 = {
  id: "pictureControl"
};
const _hoisted_2 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    id: "imgBox",
    onMousewheel: _cache[0] || (_cache[0] = $event => $options.scaleImg($event))
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("img", {
    id: "img",
    border: "0",
    src: $props.imgSrc
  }, null, 8, _hoisted_2)], 32)]);
}
;// CONCATENATED MODULE: ./src/components/pictureControl.vue?vue&type=template&id=a333d8d8&scoped=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/pictureControl.vue?vue&type=script&lang=js
/* harmony default export */ var pictureControlvue_type_script_lang_js = ({
  name: 'pictureControl',
  props: {
    imgSrc: String
  },
  data() {
    return {
      zoomVal: 1,
      left: 0,
      top: 0,
      currentX: 0,
      currentY: 0,
      flag: false
    };
  },
  watch: {},
  mounted() {
    // if(!this.imgSrc){
    //   this.imgSrc = require('./img/test01.jpg')
    // }
    this.startDrag(document.getElementById('imgBox'), document.getElementById('img'));
  },
  methods: {
    getCss(o, key) {
      return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
    },
    scaleImg(event) {
      var ele = event.currentTarget;
      var o = ele.getElementsByTagName('img')[0];
      console.log(event.wheelDelta);
      this.zoomVal += event.wheelDelta / 1200;
      if (this.zoomVal >= 0.2) {
        o.style.transform = 'translateX(-50%) scale(' + this.zoomVal + ')';
      } else {
        this.zoomVal = 0.2;
        o.style.transform = 'translateX(-50%) scale(' + this.zoomVal + ')';
        return false;
      }
    },
    startDrag(container, target, callback) {
      if (this.getCss(target, 'left') !== 'auto') {
        this.left = this.getCss(target, 'left');
      }
      if (this.getCss(target, 'top') !== 'auto') {
        this.top = this.getCss(target, 'top');
      }
      var _this = this;
      //o是移动对象
      container.onmousedown = function (event) {
        _this.flag = true;
        if (!event) {
          event = window.event;
          //防止IE文字选中
          container.onselectstart = function () {
            return false;
          };
        }
        var e = event;
        _this.currentX = e.clientX;
        _this.currentY = e.clientY;
      };
      document.onmouseup = function () {
        _this.flag = false;
        if (_this.getCss(target, 'left') !== 'auto') {
          _this.left = _this.getCss(target, 'left');
        }
        if (_this.getCss(target, 'top') !== 'auto') {
          _this.top = _this.getCss(target, 'top');
        }
      };
      document.onmousemove = function (event) {
        var e = event ? event : window.event;
        if (_this.flag) {
          var nowX = e.clientX,
            nowY = e.clientY;
          var disX = nowX - _this.currentX,
            disY = nowY - _this.currentY;
          target.style.left = parseInt(_this.left) + disX + 'px';
          target.style.top = parseInt(_this.top) + disY + 'px';
          if (typeof callback == 'function') {
            callback((parseInt(_this.left) || 0) + disX, (parseInt(_this.top) || 0) + disY);
          }
          if (event.preventDefault) {
            event.preventDefault();
          }
          return false;
        }
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/components/pictureControl.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-74.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-74.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-74.use[2]!./node_modules/_less-loader@11.1.3@less-loader/dist/cjs.js??clonedRuleSet-74.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/pictureControl.vue?vue&type=style&index=0&id=a333d8d8&scoped=true&lang=less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/pictureControl.vue?vue&type=style&index=0&id=a333d8d8&scoped=true&lang=less

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(620);
;// CONCATENATED MODULE: ./src/components/pictureControl.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(pictureControlvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-a333d8d8"]])

/* harmony default export */ var pictureControl = (__exports__);
;// CONCATENATED MODULE: ./src/components/index.js

let install = Vue => {
  if (install.installed) return;
  install.installed;
  console.log(pictureControl);
  Vue.component('pictureControl', pictureControl);
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var components = ({
  install
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (components);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-picture-control.umd.js.map