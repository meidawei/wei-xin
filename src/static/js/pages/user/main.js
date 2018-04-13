global.webpackJsonp([2],{

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_50f8889d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(84);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(74)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-50f8889d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_50f8889d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\user\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50f8889d", Component.options)
  } else {
    hotAPI.reload("data-v-50f8889d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(32);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '我的'
  }
});

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__counter_store_js__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    console.log('created');
    wx.setStorage({
      key: "key",
      data: "value",
      success: function success() {
        console.log("缓存成功！");
      }
    });
    wx.login({
      success: function success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          });
        } else {
          console.log('登录失败！' + res.errMsg);
        }
      }
    });
  },
  mounted: function mounted() {
    console.log(__WEBPACK_IMPORTED_MODULE_0__counter_store_js__["a" /* default */].getters.allPay);
  },
  data: function data() {
    return {
      name: 'user'
    };
  },

  computed: {
    goodsData: function goodsData() {
      return __WEBPACK_IMPORTED_MODULE_0__counter_store_js__["a" /* default */].state.shopping;
    },
    showPay: function showPay() {
      return __WEBPACK_IMPORTED_MODULE_0__counter_store_js__["a" /* default */].getters.allPay;
    }
  }
});

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "user-info"
  }, [_c('div', [_vm._v("用户信息")]), _vm._v(" "), _c('div', [_vm._v("购买金额:" + _vm._s(_vm.showPay))]), _vm._v(" "), _c('div', [_vm._v("送货地址")]), _vm._v(" "), _c('div', [_vm._v("支付")])]), _vm._v(" "), _c('div', {
    staticClass: "sp-car"
  }, [_c('h3', [_vm._v("购物车")]), _vm._v(" "), _c('div', {
    staticClass: "msg",
    class: {
      active: !_vm.goodsData.length
    }
  }, [_vm._v("购物车为空！")]), _vm._v(" "), _vm._l((_vm.goodsData), function(item, index) {
    return _c('div', {
      key: item.key,
      staticClass: "item"
    }, [_vm._v("\n      商品名：" + _vm._s(item.name)), _c('br'), _vm._v("\n      商品单价：" + _vm._s(item.price)), _c('br'), _vm._v("\n      商品数量：" + _vm._s(item.number) + "\n    ")], 1)
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-50f8889d", esExports)
  }
}

/***/ })

},[36]);
//# sourceMappingURL=main.js.map