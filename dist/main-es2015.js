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
/* harmony import */ var _shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/nav/nav.component */ "./src/app/shared/components/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'my-spotify-stats';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".app[_ngcontent-%COMP%]   app-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ192YXJpYWJsZXMnO1xuXG4uYXBwIHtcbiAgYXBwLWZvb3RlciB7XG4gICAgJiA+IGRpdiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG59XG4iLCIuYXBwIGFwcC1mb290ZXIgPiBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  left: 0;\n  right: 0;\n  padding: 8px 0 8px 0;\n  text-align: center;\n  font-size: 12px;\n  background-color: #1b1b1b;\n  border-top: 1px solid #fff;\n}\n.footer[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fdHlwb2dyYXBoeS5zY3NzIiwiL1VzZXJzL21pY2hhZWxiZWFzZWxleS9Eb2N1bWVudHMvd29ya3NwYWNlL3BlcnNvbmFsL215LXNwb3RpZnktc3RhdHMvc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVDR3VCO0VERnZCLHlCRUxNO0VGTU4sMEJBQUE7QUdERjtBSEdFO0VBQ0ksU0FBQTtBR0ROIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ192YXJpYWJsZXMnO1xuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6ICRzcGFjZS1zIDAgJHNwYWNlLXMgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6ICRmb250LXNpemUtLWV4dHJhLXNtYWxsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkd2hpdGU7XG5cbiAgJiA+IHAge1xuICAgICAgbWFyZ2luOiAwO1xuICB9XG59IiwiJWJhc2Uge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXG59XG5cbiVoZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4kZm9udC1zaXplLS1sYXJnZTogMjFweDtcbiRmb250LXNpemU6IDE4cHg7XG4kZm9udC1zaXplLS1tZWRpdW06IDE2cHg7XG4kZm9udC1zaXplLS1zbWFsbDogMTRweDtcbiRmb250LXNpemUtLWV4dHJhLXNtYWxsOiAxMnB4O1xuXG4kZm9udC13ZWlnaHQ6IDQwMDsgLy8gbm9ybWFsXG4kZm9udC13ZWlnaHQtLW1lZGl1bTogNTAwOyAvLyBtZWRpdW1cbiRmb250LXdlaWdodC0tYm9sZDogNzAwOyAvLyBib2xkIiwiLy8gQmxhY2svd2hpdGUgc2NhbGVcbiR3aGl0ZTogI2ZmZjtcbiRncmV5MTogI2I0YjRiNDtcbiRncmV5MjogIzQyNDI0MjtcbiRncmV5MzogIzYzNjM2MztcbiRncmV5NDogIzFiMWIxYjtcbiRibGFjazogIzAwMDtcblxuLy8gY29sb3JzXG4kZ3JlZW46ICMxZGI5NTQ7XG4kbGlnaHQtZ3JlZW46ICMzOGU3NzU7IiwiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiA4cHggMCA4cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjFiMWI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xufVxuLmZvb3RlciA+IHAge1xuICBtYXJnaW46IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function NavComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_button_6_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onMenuShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavComponent {
    constructor() {
    }
    onLogOut() {
        console.log('LOG OUT');
    }
    onMenuShow() {
        this.showMenu = !this.showMenu ? true : false;
        console.log('showMenu', this.showMenu);
    }
    onResize() {
        var _a, _b;
        this.visible = ((_a = window) === null || _a === void 0 ? void 0 : _a.innerWidth) < 767 ? true : false;
        this.showMenu = ((_b = window) === null || _b === void 0 ? void 0 : _b.innerWidth) < 767 ? false : true;
    }
    ngOnInit() {
        this.onResize();
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], hostBindings: function NavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NavComponent_resize_HostBindingHandler($event) { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 16, vars: 2, consts: [[1, "nav"], [1, "nav__navbar"], ["routerLink", "dashboard", 1, "nav__logo"], ["src", "/assets/img/spotifytool.png", "width", "30", "height", "30", "alt", ""], ["class", "nav__collapse", "type", "button", 3, "click", 4, "ngIf"], [1, "nav__navbar-items", 3, "ngClass"], ["routerLink", "top-tracks", "routerLinkActive", "active", 1, "nav__navbar-item"], ["routerLink", "top-artists", "routerLinkActive", "active", 1, "nav__navbar-item"], ["routerLink", "recently-played", "routerLinkActive", "active", 1, "nav__navbar-item"], [1, "nav__navbar-item", "nav__navbar-item--end", 3, "click"], ["type", "button", 1, "nav__collapse", 3, "click"], ["src", "/assets/img/menu.svg"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Spotify Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Top Tracks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Top Artists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Recently Played");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_14_listener($event) { return ctx.onLogOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showMenu ? "nav__navbar-items--show" : "nav__navbar-items--hide");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".nav__navbar-item[_ngcontent-%COMP%], .nav__logo[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: #1b1b1b;\n  border-bottom: 1px solid #fff;\n}\n\n.nav__navbar[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 12px 24px;\n}\n\n.nav__logo[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #fff;\n  text-decoration: none;\n  margin-right: 16px;\n}\n\n.nav__collapse[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 12px 24px;\n  background-color: unset;\n  border-color: unset;\n  border-style: unset;\n  -webkit-border-image: unset;\n       -o-border-image: unset;\n          border-image: unset;\n  cursor: pointer;\n}\n\n.nav__collapse[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.nav__collapse[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n@media (max-width: 767px) {\n  .nav__navbar-items[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 58px;\n    left: 0;\n    width: 100vw;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    background-color: #1b1b1b;\n    text-align: center;\n  }\n  .nav__navbar-items--hide[_ngcontent-%COMP%] {\n    height: 0;\n    -webkit-transition: height 0.5s;\n    transition: height 0.5s;\n  }\n  .nav__navbar-items--hide[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    -webkit-transition: visibility 0s;\n    transition: visibility 0s;\n    visibility: hidden;\n  }\n  .nav__navbar-items--show[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    height: 160px;\n    -webkit-transition: height 0.5s;\n    transition: height 0.5s;\n    border-bottom: 1px solid #fff;\n  }\n  .nav__navbar-items--show[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    -webkit-transition: visibility 0s;\n    transition: visibility 0s;\n    -webkit-transition-delay: 0.4s;\n            transition-delay: 0.4s;\n    visibility: visible;\n  }\n}\n\n.nav__navbar-item[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 18px;\n  color: #b4b4b4;\n  text-decoration: none;\n  padding: 0 12px;\n}\n\n@media (max-width: 767px) {\n  .nav__navbar-item[_ngcontent-%COMP%] {\n    padding: 8px 24px;\n  }\n}\n\n.nav__navbar-item--end[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  cursor: pointer;\n}\n\n@media (max-width: 767px) {\n  .nav__navbar-item--end[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n.nav__navbar-item.active[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.nav__navbar-item.active[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  bottom: -4px;\n  height: 2px;\n  width: 50%;\n  background: #1db954;\n}\n\n@media (max-width: 767px) {\n  .nav__navbar-item.active[_ngcontent-%COMP%]:before {\n    content: unset;\n  }\n}\n\n.nav__navbar-item[_ngcontent-%COMP%]:focus, .nav__navbar-item[_ngcontent-%COMP%]:focus-within {\n  outline: none;\n}\n\n.nav__navbar-item[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fdHlwb2dyYXBoeS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21pY2hhZWxiZWFzZWxleS9Eb2N1bWVudHMvd29ya3NwYWNlL3BlcnNvbmFsL215LXNwb3RpZnktc3RhdHMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21pY2hhZWxiZWFzZWxleS9Eb2N1bWVudHMvd29ya3NwYWNlL3BlcnNvbmFsL215LXNwb3RpZnktc3RhdHMvc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzL19jb2xvcnMuc2NzcyIsIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fc3BhY2luZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksd0lBQUE7QUNISjs7QUNBQTtFQUNFO0lBQ0UsVUFBQTtFREdGO0VDQUE7SUFDRSxVQUFBO0VERUY7QUFDRjs7QUNUQTtFQUNFO0lBQ0UsVUFBQTtFREdGO0VDQUE7SUFDRSxVQUFBO0VERUY7QUFDRjs7QUNDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQ1hNO0VEWU4sNkJBQUE7QURDRjs7QUNDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBRENKOztBQ0VFO0VBRUUsZUZsQlE7RUVtQlIsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdDN0JJO0VEOEJKLHFCQUFBO0VBQ0Esa0JFekJNO0FId0JWOztBQ0lFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7T0FBQSxzQkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBREZKOztBQ0lJO0VBQ0UsYUFBQTtBREZOOztBQ0tJO0VBQ0UsV0FBQTtBREhOOztBQ1FJO0VBREY7SUFFSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQzFERTtJRDJERixrQkFBQTtFRExKO0VDT0k7SUFDRSxTQUFBO0lBQ0EsK0JBQUE7SUFBQSx1QkFBQTtFRExOO0VDT007SUFDRSxpQ0FBQTtJQUFBLHlCQUFBO0lBQ0Esa0JBQUE7RURMUjtFQ1NJO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsYUFBQTtJQUNBLCtCQUFBO0lBQUEsdUJBQUE7SUFDQSw2QkFBQTtFRFBOO0VDU007SUFDRSxpQ0FBQTtJQUFBLHlCQUFBO0lBQ0EsOEJBQUE7WUFBQSxzQkFBQTtJQUNBLG1CQUFBO0VEUFI7QUFDRjs7QUNZRTtFQUVFLGtCQUFBO0VBQ0EsZUZyRlE7RUVzRlIsY0M3Rkk7RUQ4RkoscUJBQUE7RUFDQSxlQUFBO0FEWEo7O0FDYUk7RUFSRjtJQVNJLGlCQUFBO0VEVko7QUFDRjs7QUNZSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QURWTjs7QUNZTTtFQUxGO0lBTUksa0JBQUE7RURUTjtBQUNGOztBQ1lJO0VBQ0UsV0NqSEU7QUZ1R1I7O0FDWU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkNqSEE7QUZ1R1I7O0FDWVE7RUFSRjtJQVNJLGNBQUE7RURUUjtBQUNGOztBQ2FJO0VBRUUsYUFBQTtBRFpOOztBQ2VJO0VBQ0UsV0N2SUU7QUYwSFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWJhc2Uge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXG59XG5cbiVoZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4kZm9udC1zaXplLS1sYXJnZTogMjFweDtcbiRmb250LXNpemU6IDE4cHg7XG4kZm9udC1zaXplLS1tZWRpdW06IDE2cHg7XG4kZm9udC1zaXplLS1zbWFsbDogMTRweDtcbiRmb250LXNpemUtLWV4dHJhLXNtYWxsOiAxMnB4O1xuXG4kZm9udC13ZWlnaHQ6IDQwMDsgLy8gbm9ybWFsXG4kZm9udC13ZWlnaHQtLW1lZGl1bTogNTAwOyAvLyBtZWRpdW1cbiRmb250LXdlaWdodC0tYm9sZDogNzAwOyAvLyBib2xkIiwiLm5hdl9fbmF2YmFyLWl0ZW0sIC5uYXZfX2xvZ28ge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjFiMWI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xufVxuLm5hdl9fbmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xufVxuLm5hdl9fbG9nbyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLm5hdl9fY29sbGFwc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIGJvcmRlci1jb2xvcjogdW5zZXQ7XG4gIGJvcmRlci1zdHlsZTogdW5zZXQ7XG4gIGJvcmRlci1pbWFnZTogdW5zZXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZfX2NvbGxhcHNlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uYXZfX2NvbGxhcHNlID4gaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5hdl9fbmF2YmFyLWl0ZW1zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1OHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubmF2X19uYXZiYXItaXRlbXMtLWhpZGUge1xuICAgIGhlaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcbiAgfVxuICAubmF2X19uYXZiYXItaXRlbXMtLWhpZGUgPiBhIHtcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAubmF2X19uYXZiYXItaXRlbXMtLXNob3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgfVxuICAubmF2X19uYXZiYXItaXRlbXMtLXNob3cgPiBhIHtcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuLm5hdl9fbmF2YmFyLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNiNGI0YjQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5uYXZfX25hdmJhci1pdGVtIHtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgfVxufVxuLm5hdl9fbmF2YmFyLWl0ZW0tLWVuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubmF2X19uYXZiYXItaXRlbS0tZW5kIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbi5uYXZfX25hdmJhci1pdGVtLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5hdl9fbmF2YmFyLWl0ZW0uYWN0aXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubmF2X19uYXZiYXItaXRlbS5hY3RpdmU6YmVmb3JlIHtcbiAgICBjb250ZW50OiB1bnNldDtcbiAgfVxufVxuLm5hdl9fbmF2YmFyLWl0ZW06Zm9jdXMsIC5uYXZfX25hdmJhci1pdGVtOmZvY3VzLXdpdGhpbiB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubmF2X19uYXZiYXItaXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufSIsIkBpbXBvcnQgJ192YXJpYWJsZXMnO1xuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4ubmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkd2hpdGU7XG5cbiAgJl9fbmF2YmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogJHNwYWNlLXNtICRzcGFjZTtcbiAgfVxuXG4gICZfX2xvZ28ge1xuICAgIEBleHRlbmQgJWhlYWRpbmc7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6ICRzcGFjZS1tO1xuICB9XG5cbiAgJl9fY29sbGFwc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMTJweCAkc3BhY2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gICAgYm9yZGVyLWNvbG9yOiB1bnNldDtcbiAgICBib3JkZXItc3R5bGU6IHVuc2V0O1xuICAgIGJvcmRlci1pbWFnZTogdW5zZXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICYgPiBpbWcge1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgfVxuICB9XG5cbiAgJl9fbmF2YmFyLWl0ZW1zIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsLWJyZWFrcG9pbnQpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNThweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5NDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgJi0taGlkZSB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IC41cztcblxuICAgICAgICAmID4gYSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcztcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi0tc2hvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAuNXM7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkd2hpdGU7XG5cbiAgICAgICAgJiA+IGEge1xuICAgICAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fbmF2YmFyLWl0ZW0ge1xuICAgIEBleHRlbmQgJWhlYWRpbmc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBjb2xvcjogJGdyZXkxO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwICRzcGFjZS1zbTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwtYnJlYWtwb2ludCkge1xuICAgICAgcGFkZGluZzogJHNwYWNlLXMgJHNwYWNlO1xuICAgIH1cblxuICAgICYtLWVuZCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbC1icmVha3BvaW50KSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtNHB4O1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogJGdyZWVuO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwtYnJlYWtwb2ludCkge1xuICAgICAgICAgIGNvbnRlbnQ6IHVuc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpmb2N1cyxcbiAgICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gIH1cbn0iLCIvLyBCbGFjay93aGl0ZSBzY2FsZVxuJHdoaXRlOiAjZmZmO1xuJGdyZXkxOiAjYjRiNGI0O1xuJGdyZXkyOiAjNDI0MjQyO1xuJGdyZXkzOiAjNjM2MzYzO1xuJGdyZXk0OiAjMWIxYjFiO1xuJGJsYWNrOiAjMDAwO1xuXG4vLyBjb2xvcnNcbiRncmVlbjogIzFkYjk1NDtcbiRsaWdodC1ncmVlbjogIzM4ZTc3NTsiLCIkc3BhY2UteHhsOiA1NnB4O1xuJHNwYWNlLXhsOiA0OHB4O1xuJHNwYWNlLWw6IDQwcHg7XG4kc3BhY2UtbWw6IDMycHg7XG5cbiRzcGFjZTogMjRweDtcblxuJHNwYWNlLW06IDE2cHg7XG4kc3BhY2Utc206IDEycHg7XG4kc3BhY2UtczogOHB4O1xuJHNwYWNlLXhzOiA0cHg7XG4kc3BhY2UteHhzOiAycHg7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return []; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', []]
        }] }); })();


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
        _pipes_locale_date_pipe__WEBPACK_IMPORTED_MODULE_6__["LocaleDatePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
        _pipes_join_array_pipe__WEBPACK_IMPORTED_MODULE_5__["JoinArrayPipe"],
        _pipes_locale_date_pipe__WEBPACK_IMPORTED_MODULE_6__["LocaleDatePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                    _pipes_join_array_pipe__WEBPACK_IMPORTED_MODULE_5__["JoinArrayPipe"],
                    _pipes_locale_date_pipe__WEBPACK_IMPORTED_MODULE_6__["LocaleDatePipe"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                ],
                exports: [
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                    _pipes_join_array_pipe__WEBPACK_IMPORTED_MODULE_5__["JoinArrayPipe"],
                    _pipes_locale_date_pipe__WEBPACK_IMPORTED_MODULE_6__["LocaleDatePipe"]
                ],
                entryComponents: [
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"]
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
    production: false
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