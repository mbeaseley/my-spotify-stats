(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | admin-admin-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "./src/app/admin/admin.module.ts"))
            .then(m => m.AdminModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | content-content-module */[__webpack_require__.e("common"), __webpack_require__.e("content-content-module")]).then(__webpack_require__.bind(null, /*! ./content/content.module */ "./src/app/content/content.module.ts"))
            .then(m => m.ContentModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var Environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/nav/nav.component */ "./src/app/shared/components/nav/nav.component.ts");
/* harmony import */ var _shared_components_error_handle_error_handle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/error-handle/error-handle.component */ "./src/app/shared/components/error-handle/error-handle.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");







class AppComponent {
    constructor(router) {
        this.router = router;
        this.loading = true;
    }
    ngOnInit() {
        this.router.events.subscribe(() => {
            this.showNav = (window.location.pathname !== Environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].route);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[1, "app"], [3, "show"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-error-handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.showNav);
    } }, directives: [_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _shared_components_error_handle_error_handle_component__WEBPACK_IMPORTED_MODULE_4__["ErrorHandleComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".app[_ngcontent-%COMP%]   app-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ192YXJpYWJsZXMnO1xuXG4uYXBwIHtcbiAgYXBwLWZvb3RlciB7XG4gICAgJiA+IGRpdiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG59XG4iLCIuYXBwIGFwcC1mb290ZXIgPiBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var Shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Shared/shared.module */ "./src/app/shared/shared.module.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            Shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        Shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    Shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/classes/error.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/classes/error.ts ***!
  \*****************************************/
/*! exports provided: Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
class Error {
    constructor(title, message) {
        this.title = title;
        this.message = message;
    }
}


/***/ }),

/***/ "./src/app/shared/components/error-handle/error-handle.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/error-handle/error-handle.component.ts ***!
  \**************************************************************************/
/*! exports provided: ErrorHandleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandleComponent", function() { return ErrorHandleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/error.service */ "./src/app/shared/services/error.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ErrorHandleComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.title);
} }
function ErrorHandleComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.message);
} }
function ErrorHandleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ErrorHandleComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ErrorHandleComponent_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.message);
} }
class ErrorHandleComponent {
    constructor(errorService) {
        this.errorService = errorService;
    }
    ngOnInit() {
        this.subscription = this.errorService.update$.subscribe(error => {
            this.title = error.title;
            this.message = error.message;
        });
    }
    /**
     * on destroy
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ErrorHandleComponent.ɵfac = function ErrorHandleComponent_Factory(t) { return new (t || ErrorHandleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorService"])); };
ErrorHandleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorHandleComponent, selectors: [["app-error-handle"]], decls: 1, vars: 1, consts: [["class", "error-handle", 4, "ngIf"], [1, "error-handle"], ["class", "error-handle__title", 4, "ngIf"], ["class", "error-handle__message", 4, "ngIf"], [1, "error-handle__title"], [1, "error-handle__message"]], template: function ErrorHandleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ErrorHandleComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title || ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".error-handle__message[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.error-handle__title[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n@-webkit-keyframes slideup {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n  }\n}\n\n@keyframes slideup {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n  }\n}\n\n.error-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n  background: #1b1b1b;\n  border-bottom: 4px solid #cc0000;\n  -webkit-animation-name: slideup;\n          animation-name: slideup;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.error-handle__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding: 24px 0 12px;\n}\n\n.error-handle__message[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fdHlwb2dyYXBoeS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lcnJvci1oYW5kbGUvZXJyb3ItaGFuZGxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21pY2hhZWxiZWFzZWxleS9Eb2N1bWVudHMvd29ya3NwYWNlL3BlcnNvbmFsL215LXNwb3RpZnktc3RhdHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lcnJvci1oYW5kbGUvZXJyb3ItaGFuZGxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21pY2hhZWxiZWFzZWxleS9Eb2N1bWVudHMvd29ya3NwYWNlL3BlcnNvbmFsL215LXNwb3RpZnktc3RhdHMvc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzL19jb2xvcnMuc2NzcyIsIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fc3BhY2luZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7QUNDSjs7QURFQTtFQUNJLHdJQUFBO0FDQ0o7O0FDSkE7RUFDRTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RURPRjtFQ0xBO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFRE9GO0FBQ0Y7O0FDYkE7RUFDRTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RURPRjtFQ0xBO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFRE9GO0FBQ0Y7O0FDSkE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkNYTTtFRFlOLGdDQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBRE1GOztBQ0hFO0VBRUUsZ0JGVmdCO0VFV2hCLG9CQUFBO0FESUo7O0FDREU7RUFFRSxnQkZqQmtCO0VFa0JsQixvQkU1Qkk7QUg4QlIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lcnJvci1oYW5kbGUvZXJyb3ItaGFuZGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWJhc2Uge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXG59XG5cbiVoZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4kZm9udC1zaXplLS1sYXJnZTogMjFweDtcbiRmb250LXNpemU6IDE4cHg7XG4kZm9udC1zaXplLS1tZWRpdW06IDE2cHg7XG4kZm9udC1zaXplLS1zbWFsbDogMTRweDtcbiRmb250LXNpemUtLWV4dHJhLXNtYWxsOiAxMnB4O1xuXG4kZm9udC13ZWlnaHQ6IDQwMDsgLy8gbm9ybWFsXG4kZm9udC13ZWlnaHQtLW1lZGl1bTogNTAwOyAvLyBtZWRpdW1cbiRmb250LXdlaWdodC0tYm9sZDogNzAwOyAvLyBib2xkIiwiLmVycm9yLWhhbmRsZV9fbWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uZXJyb3ItaGFuZGxlX190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGV1cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxufVxuLmVycm9yLWhhbmRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzFiMWIxYjtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNjYzAwMDA7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZXVwO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZGVsYXk6IDVzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi5lcnJvci1oYW5kbGVfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMjRweCAwIDEycHg7XG59XG4uZXJyb3ItaGFuZGxlX19tZXNzYWdlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59IiwiQGltcG9ydCAnX3ZhcmlhYmxlcyc7XG5cbkBrZXlmcmFtZXMgc2xpZGV1cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxufVxuXG4uZXJyb3ItaGFuZGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAkZ3JleTQ7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAkcmVkO1xuICBhbmltYXRpb24tbmFtZTogc2xpZGV1cDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA1cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG5cblxuICAmX190aXRsZSB7XG4gICAgQGV4dGVuZCAlaGVhZGluZztcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LS1ib2xkO1xuICAgIHBhZGRpbmc6ICRzcGFjZSAwICRzcGFjZS1zbTtcbiAgfVxuXG4gICZfX21lc3NhZ2Uge1xuICAgIEBleHRlbmQgJWJhc2U7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC0tbWVkaXVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAkc3BhY2U7XG4gIH1cbn1cbiIsIi8vIEJsYWNrL3doaXRlIHNjYWxlXG4kd2hpdGU6ICNmZmY7XG4kZ3JleTE6ICNiNGI0YjQ7XG4kZ3JleTI6ICM0MjQyNDI7XG4kZ3JleTM6ICM2MzYzNjM7XG4kZ3JleTQ6ICMxYjFiMWI7XG4kYmxhY2s6ICMwMDA7XG5cbi8vIGNvbG9yc1xuJGdyZWVuOiAjMWRiOTU0O1xuJGxpZ2h0LWdyZWVuOiAjMzhlNzc1O1xuXG4kcmVkOiAjY2MwMDAwOyIsIiRzcGFjZS14eGw6IDU2cHg7XG4kc3BhY2UteGw6IDQ4cHg7XG4kc3BhY2UtbDogNDBweDtcbiRzcGFjZS1tbDogMzJweDtcblxuJHNwYWNlOiAyNHB4O1xuXG4kc3BhY2UtbTogMTZweDtcbiRzcGFjZS1zbTogMTJweDtcbiRzcGFjZS1zOiA4cHg7XG4kc3BhY2UteHM6IDRweDtcbiRzcGFjZS14eHM6IDJweDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-handle',
                templateUrl: './error-handle.component.html',
                styleUrls: ['./error-handle.component.scss']
            }]
    }], function () { return [{ type: _services_error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



class FooterComponent {
    constructor() {
    }
    /**
     * On init
     */
    ngOnInit() {
        this.year = dayjs__WEBPACK_IMPORTED_MODULE_1__().year();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 1, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Copyright: Michael Beaseley");
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  left: 0;\n  right: 0;\n  padding: 8px 0 8px 0;\n  text-align: center;\n  font-size: 12px;\n  background-color: #1b1b1b;\n  border-top: 1px solid #fff;\n}\n.footer[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fdHlwb2dyYXBoeS5zY3NzIiwiL1VzZXJzL21pY2hhZWxiZWFzZWxleS9Eb2N1bWVudHMvd29ya3NwYWNlL3BlcnNvbmFsL215LXNwb3RpZnktc3RhdHMvc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVDR3VCO0VERnZCLHlCRUxNO0VGTU4sMEJBQUE7QUdERjtBSEdFO0VBQ0ksU0FBQTtBR0ROIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ192YXJpYWJsZXMnO1xuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6ICRzcGFjZS1zIDAgJHNwYWNlLXMgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6ICRmb250LXNpemUtLWV4dHJhLXNtYWxsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkd2hpdGU7XG5cbiAgJiA+IHAge1xuICAgICAgbWFyZ2luOiAwO1xuICB9XG59IiwiJWJhc2Uge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXG59XG5cbiVoZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4kZm9udC1zaXplLS1sYXJnZTogMjFweDtcbiRmb250LXNpemU6IDE4cHg7XG4kZm9udC1zaXplLS1tZWRpdW06IDE2cHg7XG4kZm9udC1zaXplLS1zbWFsbDogMTRweDtcbiRmb250LXNpemUtLWV4dHJhLXNtYWxsOiAxMnB4O1xuXG4kZm9udC13ZWlnaHQ6IDQwMDsgLy8gbm9ybWFsXG4kZm9udC13ZWlnaHQtLW1lZGl1bTogNTAwOyAvLyBtZWRpdW1cbiRmb250LXdlaWdodC0tYm9sZDogNzAwOyAvLyBib2xkIiwiLy8gQmxhY2svd2hpdGUgc2NhbGVcbiR3aGl0ZTogI2ZmZjtcbiRncmV5MTogI2I0YjRiNDtcbiRncmV5MjogIzQyNDI0MjtcbiRncmV5MzogIzYzNjM2MztcbiRncmV5NDogIzFiMWIxYjtcbiRibGFjazogIzAwMDtcblxuLy8gY29sb3JzXG4kZ3JlZW46ICMxZGI5NTQ7XG4kbGlnaHQtZ3JlZW46ICMzOGU3NzU7XG5cbiRyZWQ6ICNjYzAwMDA7IiwiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiA4cHggMCA4cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjFiMWI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xufVxuLmZvb3RlciA+IHAge1xuICBtYXJnaW46IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/loading-spinner/loading-spinner.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.component.ts ***!
  \********************************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function LoadingSpinnerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.message);
} }
const _c0 = function (a0) { return { "show-fullscreen": a0 }; };
class LoadingSpinnerComponent {
    constructor() {
        this.fullscreen = false;
    }
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], inputs: { message: "message", fullscreen: "fullscreen" }, decls: 3, vars: 4, consts: [[1, "loading-spinner", 3, "ngClass"], [1, "loading-spinner__loader"], ["class", "loading-spinner__message", 4, "ngIf"], [1, "loading-spinner__message"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoadingSpinnerComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.fullscreen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.loading-spinner.show-fullscreen[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n.loading-spinner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  background-color: #000;\n  opacity: 0.7;\n}\n.loading-spinner__loader[_ngcontent-%COMP%] {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #1db954;\n  width: 7em;\n  height: 7em;\n  z-index: inherit;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRTtJQUFLLCtCQUFBO1lBQUEsdUJBQUE7RUNBTDtFRENBO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ0VQO0FBQ0Y7QURMQTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ0FMO0VEQ0E7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDRVA7QUFDRjtBREFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDRUY7QURBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDRUo7QURDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JFekJJO0VGMEJKLFlBQUE7QUNDSjtBREVFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdfdmFyaWFibGVzJztcblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICYuc2hvdy1mdWxsc2NyZWVuIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAmX19sb2FkZXIge1xuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICRncmVlbjtcbiAgICB3aWR0aDogN2VtO1xuICAgIGhlaWdodDogN2VtO1xuICAgIHotaW5kZXg6IGluaGVyaXQ7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxufSIsIkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4ubG9hZGluZy1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxvYWRpbmctc3Bpbm5lci5zaG93LWZ1bGxzY3JlZW4ge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ubG9hZGluZy1zcGlubmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC43O1xufVxuLmxvYWRpbmctc3Bpbm5lcl9fbG9hZGVyIHtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMWRiOTU0O1xuICB3aWR0aDogN2VtO1xuICBoZWlnaHQ6IDdlbTtcbiAgei1pbmRleDogaW5oZXJpdDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn0iLCIvLyBCbGFjay93aGl0ZSBzY2FsZVxuJHdoaXRlOiAjZmZmO1xuJGdyZXkxOiAjYjRiNGI0O1xuJGdyZXkyOiAjNDI0MjQyO1xuJGdyZXkzOiAjNjM2MzYzO1xuJGdyZXk0OiAjMWIxYjFiO1xuJGJsYWNrOiAjMDAwO1xuXG4vLyBjb2xvcnNcbiRncmVlbjogIzFkYjk1NDtcbiRsaWdodC1ncmVlbjogIzM4ZTc3NTtcblxuJHJlZDogI2NjMDAwMDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-spinner',
                templateUrl: './loading-spinner.component.html',
                styleUrls: ['./loading-spinner.component.scss']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/nav/nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/nav/nav.component.ts ***!
  \********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var Environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_authorise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authorise.service */ "./src/app/shared/services/authorise.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function NavComponent_div_0_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_0_button_6_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.onMenuShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.menu, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Spotify Stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavComponent_div_0_button_6_Template, 2, 1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Top Tracks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Top Artists");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Recently Played");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_0_Template_a_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onLogOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.showMenu ? "nav__navbar-items--show" : "nav__navbar-items--hide");
} }
class NavComponent {
    constructor(auth) {
        this.auth = auth;
        this.logo = `${Environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].route}assets/img/spotifytool.png`;
        this.menu = `${Environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].route}assets/img/menu.svg`;
    }
    /**
     * removes token and takes user back to login
     */
    onLogOut() {
        this.auth.logOut();
    }
    /**
     * show drop down menu on mobile
     */
    onMenuShow() {
        this.showMenu = !this.showMenu ? true : false;
    }
    /**
     * host listening for window resize based on width to change between mobile and desktop navs
     */
    onResize() {
        var _a, _b;
        this.visible = ((_a = window) === null || _a === void 0 ? void 0 : _a.innerWidth) < 767 ? true : false;
        this.showMenu = ((_b = window) === null || _b === void 0 ? void 0 : _b.innerWidth) < 767 ? false : true;
    }
    /**
     * On init
     */
    ngOnInit() {
        this.onResize();
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authorise_service__WEBPACK_IMPORTED_MODULE_2__["AuthoriseService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], hostBindings: function NavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NavComponent_resize_HostBindingHandler($event) { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { show: "show" }, decls: 1, vars: 1, consts: [["class", "nav", 4, "ngIf"], [1, "nav"], [1, "nav__navbar"], ["routerLink", "dashboard", 1, "nav__logo"], ["width", "30", "height", "30", "alt", "", 3, "src"], ["class", "nav__collapse", "type", "button", 3, "click", 4, "ngIf"], [1, "nav__navbar-items", 3, "ngClass"], ["routerLink", "top-tracks", "routerLinkActive", "active", 1, "nav__navbar-item"], ["routerLink", "top-artists", "routerLinkActive", "active", 1, "nav__navbar-item"], ["routerLink", "recently-played", "routerLinkActive", "active", 1, "nav__navbar-item"], [1, "nav__navbar-item", "nav__navbar-item--end", 3, "click"], ["type", "button", 1, "nav__collapse", 3, "click"], [3, "src"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavComponent_div_0_Template, 16, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: [".nav__navbar-item[_ngcontent-%COMP%], .nav__logo[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: #1b1b1b;\n  border-bottom: 1px solid #fff;\n}\n\n.nav__navbar[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 12px 24px;\n}\n\n.nav__logo[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #fff;\n  text-decoration: none;\n  margin-right: 16px;\n}\n\n.nav__collapse[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 12px 24px;\n  background-color: unset;\n  border-color: unset;\n  border-style: unset;\n  -webkit-border-image: unset;\n       -o-border-image: unset;\n          border-image: unset;\n  cursor: pointer;\n}\n\n.nav__collapse[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.nav__collapse[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n@media (max-width: 766px) {\n  .nav__navbar-items[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 58px;\n    left: 0;\n    width: 100vw;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    background-color: #1b1b1b;\n    text-align: center;\n  }\n  .nav__navbar-items--hide[_ngcontent-%COMP%] {\n    height: 0;\n    -webkit-transition: height 0.5s;\n    transition: height 0.5s;\n  }\n  .nav__navbar-items--hide[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    -webkit-transition: visibility 0s;\n    transition: visibility 0s;\n    visibility: hidden;\n  }\n  .nav__navbar-items--show[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    height: 160px;\n    -webkit-transition: height 0.5s;\n    transition: height 0.5s;\n    border-bottom: 1px solid #fff;\n  }\n  .nav__navbar-items--show[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    -webkit-transition: visibility 0s;\n    transition: visibility 0s;\n    -webkit-transition-delay: 0.4s;\n            transition-delay: 0.4s;\n    visibility: visible;\n  }\n}\n\n.nav__navbar-item[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 18px;\n  color: #b4b4b4;\n  text-decoration: none;\n  padding: 0 12px;\n}\n\n@media (max-width: 766px) {\n  .nav__navbar-item[_ngcontent-%COMP%] {\n    padding: 8px 24px;\n  }\n}\n\n.nav__navbar-item--end[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  cursor: pointer;\n}\n\n@media (max-width: 766px) {\n  .nav__navbar-item--end[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n.nav__navbar-item.active[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.nav__navbar-item.active[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  bottom: -4px;\n  height: 2px;\n  width: 50%;\n  background: #1db954;\n}\n\n@media (max-width: 766px) {\n  .nav__navbar-item.active[_ngcontent-%COMP%]:before {\n    content: unset;\n  }\n}\n\n.nav__navbar-item[_ngcontent-%COMP%]:focus, .nav__navbar-item[_ngcontent-%COMP%]:focus-within {\n  outline: none;\n}\n\n.nav__navbar-item[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fdHlwb2dyYXBoeS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21pY2hhZWxiZWFzZWxleS9Eb2N1bWVudHMvd29ya3NwYWNlL3BlcnNvbmFsL215LXNwb3RpZnktc3RhdHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21pY2hhZWxiZWFzZWxleS9Eb2N1bWVudHMvd29ya3NwYWNlL3BlcnNvbmFsL215LXNwb3RpZnktc3RhdHMvc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzL19jb2xvcnMuc2NzcyIsIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fc3BhY2luZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksd0lBQUE7QUNISjs7QUNBQTtFQUNFO0lBQ0UsVUFBQTtFREdGO0VDQUE7SUFDRSxVQUFBO0VERUY7QUFDRjs7QUNUQTtFQUNFO0lBQ0UsVUFBQTtFREdGO0VDQUE7SUFDRSxVQUFBO0VERUY7QUFDRjs7QUNDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQ1hNO0VEWU4sNkJBQUE7QURDRjs7QUNDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBRENKOztBQ0VFO0VBRUUsZUZsQlE7RUVtQlIsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdDN0JJO0VEOEJKLHFCQUFBO0VBQ0Esa0JFekJNO0FId0JWOztBQ0lFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7T0FBQSxzQkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBREZKOztBQ0lJO0VBQ0UsYUFBQTtBREZOOztBQ0tJO0VBQ0UsV0FBQTtBREhOOztBQ1FJO0VBREY7SUFFSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQzFERTtJRDJERixrQkFBQTtFRExKO0VDT0k7SUFDRSxTQUFBO0lBQ0EsK0JBQUE7SUFBQSx1QkFBQTtFRExOO0VDT007SUFDRSxpQ0FBQTtJQUFBLHlCQUFBO0lBQ0Esa0JBQUE7RURMUjtFQ1NJO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsYUFBQTtJQUNBLCtCQUFBO0lBQUEsdUJBQUE7SUFDQSw2QkFBQTtFRFBOO0VDU007SUFDRSxpQ0FBQTtJQUFBLHlCQUFBO0lBQ0EsOEJBQUE7WUFBQSxzQkFBQTtJQUNBLG1CQUFBO0VEUFI7QUFDRjs7QUNZRTtFQUVFLGtCQUFBO0VBQ0EsZUZyRlE7RUVzRlIsY0M3Rkk7RUQ4RkoscUJBQUE7RUFDQSxlQUFBO0FEWEo7O0FDYUk7RUFSRjtJQVNJLGlCQUFBO0VEVko7QUFDRjs7QUNZSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QURWTjs7QUNZTTtFQUxGO0lBTUksa0JBQUE7RURUTjtBQUNGOztBQ1lJO0VBQ0UsV0NqSEU7QUZ1R1I7O0FDWU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkNqSEE7QUZ1R1I7O0FDWVE7RUFSRjtJQVNJLGNBQUE7RURUUjtBQUNGOztBQ2FJO0VBRUUsYUFBQTtBRFpOOztBQ2VJO0VBQ0UsV0N2SUU7QUYwSFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWJhc2Uge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXG59XG5cbiVoZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4kZm9udC1zaXplLS1sYXJnZTogMjFweDtcbiRmb250LXNpemU6IDE4cHg7XG4kZm9udC1zaXplLS1tZWRpdW06IDE2cHg7XG4kZm9udC1zaXplLS1zbWFsbDogMTRweDtcbiRmb250LXNpemUtLWV4dHJhLXNtYWxsOiAxMnB4O1xuXG4kZm9udC13ZWlnaHQ6IDQwMDsgLy8gbm9ybWFsXG4kZm9udC13ZWlnaHQtLW1lZGl1bTogNTAwOyAvLyBtZWRpdW1cbiRmb250LXdlaWdodC0tYm9sZDogNzAwOyAvLyBib2xkIiwiLm5hdl9fbmF2YmFyLWl0ZW0sIC5uYXZfX2xvZ28ge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjFiMWI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xufVxuLm5hdl9fbmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xufVxuLm5hdl9fbG9nbyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLm5hdl9fY29sbGFwc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIGJvcmRlci1jb2xvcjogdW5zZXQ7XG4gIGJvcmRlci1zdHlsZTogdW5zZXQ7XG4gIGJvcmRlci1pbWFnZTogdW5zZXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZfX2NvbGxhcHNlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uYXZfX2NvbGxhcHNlID4gaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY2cHgpIHtcbiAgLm5hdl9fbmF2YmFyLWl0ZW1zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1OHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubmF2X19uYXZiYXItaXRlbXMtLWhpZGUge1xuICAgIGhlaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcbiAgfVxuICAubmF2X19uYXZiYXItaXRlbXMtLWhpZGUgPiBhIHtcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAubmF2X19uYXZiYXItaXRlbXMtLXNob3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgfVxuICAubmF2X19uYXZiYXItaXRlbXMtLXNob3cgPiBhIHtcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuLm5hdl9fbmF2YmFyLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNiNGI0YjQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2NnB4KSB7XG4gIC5uYXZfX25hdmJhci1pdGVtIHtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgfVxufVxuLm5hdl9fbmF2YmFyLWl0ZW0tLWVuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkge1xuICAubmF2X19uYXZiYXItaXRlbS0tZW5kIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbi5uYXZfX25hdmJhci1pdGVtLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5hdl9fbmF2YmFyLWl0ZW0uYWN0aXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkge1xuICAubmF2X19uYXZiYXItaXRlbS5hY3RpdmU6YmVmb3JlIHtcbiAgICBjb250ZW50OiB1bnNldDtcbiAgfVxufVxuLm5hdl9fbmF2YmFyLWl0ZW06Zm9jdXMsIC5uYXZfX25hdmJhci1pdGVtOmZvY3VzLXdpdGhpbiB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubmF2X19uYXZiYXItaXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufSIsIkBpbXBvcnQgJ192YXJpYWJsZXMnO1xuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4ubmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkd2hpdGU7XG5cbiAgJl9fbmF2YmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogJHNwYWNlLXNtICRzcGFjZTtcbiAgfVxuXG4gICZfX2xvZ28ge1xuICAgIEBleHRlbmQgJWhlYWRpbmc7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6ICRzcGFjZS1tO1xuICB9XG5cbiAgJl9fY29sbGFwc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMTJweCAkc3BhY2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gICAgYm9yZGVyLWNvbG9yOiB1bnNldDtcbiAgICBib3JkZXItc3R5bGU6IHVuc2V0O1xuICAgIGJvcmRlci1pbWFnZTogdW5zZXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICYgPiBpbWcge1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgfVxuICB9XG5cbiAgJl9fbmF2YmFyLWl0ZW1zIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsLWJyZWFrcG9pbnQpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNThweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5NDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgJi0taGlkZSB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IC41cztcblxuICAgICAgICAmID4gYSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcztcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi0tc2hvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAuNXM7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkd2hpdGU7XG5cbiAgICAgICAgJiA+IGEge1xuICAgICAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fbmF2YmFyLWl0ZW0ge1xuICAgIEBleHRlbmQgJWhlYWRpbmc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBjb2xvcjogJGdyZXkxO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwICRzcGFjZS1zbTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwtYnJlYWtwb2ludCkge1xuICAgICAgcGFkZGluZzogJHNwYWNlLXMgJHNwYWNlO1xuICAgIH1cblxuICAgICYtLWVuZCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbC1icmVha3BvaW50KSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtNHB4O1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogJGdyZWVuO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwtYnJlYWtwb2ludCkge1xuICAgICAgICAgIGNvbnRlbnQ6IHVuc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpmb2N1cyxcbiAgICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gIH1cbn0iLCIvLyBCbGFjay93aGl0ZSBzY2FsZVxuJHdoaXRlOiAjZmZmO1xuJGdyZXkxOiAjYjRiNGI0O1xuJGdyZXkyOiAjNDI0MjQyO1xuJGdyZXkzOiAjNjM2MzYzO1xuJGdyZXk0OiAjMWIxYjFiO1xuJGJsYWNrOiAjMDAwO1xuXG4vLyBjb2xvcnNcbiRncmVlbjogIzFkYjk1NDtcbiRsaWdodC1ncmVlbjogIzM4ZTc3NTtcblxuJHJlZDogI2NjMDAwMDsiLCIkc3BhY2UteHhsOiA1NnB4O1xuJHNwYWNlLXhsOiA0OHB4O1xuJHNwYWNlLWw6IDQwcHg7XG4kc3BhY2UtbWw6IDMycHg7XG5cbiRzcGFjZTogMjRweDtcblxuJHNwYWNlLW06IDE2cHg7XG4kc3BhY2Utc206IDEycHg7XG4kc3BhY2UtczogOHB4O1xuJHNwYWNlLXhzOiA0cHg7XG4kc3BhY2UteHhzOiAycHg7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return [{ type: _services_authorise_service__WEBPACK_IMPORTED_MODULE_2__["AuthoriseService"] }]; }, { show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', []]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/models/authorise-model.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/models/authorise-model.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthoriseModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthoriseModelService", function() { return AuthoriseModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthoriseModelService {
    constructor() {
        this.scopes = [
            'user-read-private',
            'user-read-email',
            'playlist-read-private',
            'playlist-modify-public',
            'playlist-modify-private',
            'user-library-read',
            'user-library-modify',
            'user-follow-read',
            'user-follow-modify',
            'user-top-read',
            'user-read-recently-played'
        ];
        this.authEndpoint = 'https://accounts.spotify.com/authorize';
        this.clientId = 'c4e731729dd1416cb79d243310c9e4e5';
        this.redirectUri = `${location.href}dashboard`;
    }
    /**
     * returns string for url call
     */
    logIn() {
        return this.authEndpoint + '?client_id=' + this.clientId + '&redirect_uri='
            + encodeURIComponent(this.redirectUri) + '&scope='
            + encodeURIComponent(this.scopes.join('%20'))
            + '&response_type=token';
    }
}
AuthoriseModelService.ɵfac = function AuthoriseModelService_Factory(t) { return new (t || AuthoriseModelService)(); };
AuthoriseModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthoriseModelService, factory: AuthoriseModelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthoriseModelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/join-array.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/join-array.pipe.ts ***!
  \*************************************************/
/*! exports provided: JoinArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinArrayPipe", function() { return JoinArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class JoinArrayPipe {
    transform(artists) {
        if (!artists) {
            return '';
        }
        const artistNames = artists.map(artist => {
            return artist.artistName;
        });
        return artistNames.join(', ');
    }
}
JoinArrayPipe.ɵfac = function JoinArrayPipe_Factory(t) { return new (t || JoinArrayPipe)(); };
JoinArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "joinArray", type: JoinArrayPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinArrayPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'joinArray'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/locale-date.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/locale-date.pipe.ts ***!
  \**************************************************/
/*! exports provided: LocaleDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleDatePipe", function() { return LocaleDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



class LocaleDatePipe {
    transform(dateObject, format) {
        return dayjs__WEBPACK_IMPORTED_MODULE_1__(dateObject).format(format);
    }
}
LocaleDatePipe.ɵfac = function LocaleDatePipe_Factory(t) { return new (t || LocaleDatePipe)(); };
LocaleDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "localeDate", type: LocaleDatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocaleDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'localeDate'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/authorise.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/authorise.service.ts ***!
  \******************************************************/
/*! exports provided: AuthoriseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthoriseService", function() { return AuthoriseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_authorise_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/authorise-model.service */ "./src/app/shared/models/authorise-model.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ "./src/app/shared/services/storage.service.ts");




class AuthoriseService {
    constructor(authModelService, storageService) {
        this.authModelService = authModelService;
        this.storageService = storageService;
    }
    /**
     * log out by removing access token and location of user to login
     */
    logOut() {
        this.storageService.removeLocalStorageItem('access-token');
        window.location.href = '/';
    }
    /**
     * log in user
     */
    logIn() {
        return this.authModelService.logIn();
    }
}
AuthoriseService.ɵfac = function AuthoriseService_Factory(t) { return new (t || AuthoriseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_models_authorise_model_service__WEBPACK_IMPORTED_MODULE_1__["AuthoriseModelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"])); };
AuthoriseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthoriseService, factory: AuthoriseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthoriseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _models_authorise_model_service__WEBPACK_IMPORTED_MODULE_1__["AuthoriseModelService"] }, { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/error.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/error.service.ts ***!
  \**************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _classes_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/error */ "./src/app/shared/classes/error.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class ErrorService {
    constructor(router) {
        this.router = router;
        this.updateError = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _classes_error__WEBPACK_IMPORTED_MODULE_2__["Error"]());
        this.update$ = this.updateError.asObservable();
    }
    updateErrorObject(error) {
        this.updateError.next(error);
    }
    callError(route, error) {
        this.updateErrorObject(error);
        this.router.navigate([route]);
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StorageService {
    constructor() {
        this.isAccessSet = false;
    }
    /**
     * set local storage item
     * @param itemName - item key
     * @param token - token key
     */
    setLocalStorageItem(itemName, token) {
        this.isAccessSet = true;
        localStorage.setItem(itemName, token);
    }
    /**
     * gets local storage value
     * @param tokenName - token key
     */
    getLocalStorageItem(tokenName) {
        return localStorage.getItem(`${tokenName || 'access-token'}`);
    }
    removeLocalStorageItem(tokenName) {
        localStorage.removeItem(tokenName);
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/shared/components/nav/nav.component.ts");
/* harmony import */ var _pipes_join_array_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/join-array.pipe */ "./src/app/shared/pipes/join-array.pipe.ts");
/* harmony import */ var _pipes_locale_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/locale-date.pipe */ "./src/app/shared/pipes/locale-date.pipe.ts");
/* harmony import */ var _components_error_handle_error_handle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/error-handle/error-handle.component */ "./src/app/shared/components/error-handle/error-handle.component.ts");
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/loading-spinner/loading-spinner.component */ "./src/app/shared/components/loading-spinner/loading-spinner.component.ts");










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
        _pipes_join_array_pipe__WEBPACK_IMPORTED_MODULE_5__["JoinArrayPipe"],
        _pipes_locale_date_pipe__WEBPACK_IMPORTED_MODULE_6__["LocaleDatePipe"],
        _components_error_handle_error_handle_component__WEBPACK_IMPORTED_MODULE_7__["ErrorHandleComponent"],
        _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
        _components_error_handle_error_handle_component__WEBPACK_IMPORTED_MODULE_7__["ErrorHandleComponent"],
        _pipes_join_array_pipe__WEBPACK_IMPORTED_MODULE_5__["JoinArrayPipe"],
        _pipes_locale_date_pipe__WEBPACK_IMPORTED_MODULE_6__["LocaleDatePipe"],
        _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                    _pipes_join_array_pipe__WEBPACK_IMPORTED_MODULE_5__["JoinArrayPipe"],
                    _pipes_locale_date_pipe__WEBPACK_IMPORTED_MODULE_6__["LocaleDatePipe"],
                    _components_error_handle_error_handle_component__WEBPACK_IMPORTED_MODULE_7__["ErrorHandleComponent"],
                    _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                ],
                exports: [
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                    _components_error_handle_error_handle_component__WEBPACK_IMPORTED_MODULE_7__["ErrorHandleComponent"],
                    _pipes_join_array_pipe__WEBPACK_IMPORTED_MODULE_5__["JoinArrayPipe"],
                    _pipes_locale_date_pipe__WEBPACK_IMPORTED_MODULE_6__["LocaleDatePipe"],
                    _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"]
                ],
                entryComponents: [
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                    _components_error_handle_error_handle_component__WEBPACK_IMPORTED_MODULE_7__["ErrorHandleComponent"],
                    _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    route: '/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michaelbeaseley/Documents/workspace/personal/my-spotify-stats/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map