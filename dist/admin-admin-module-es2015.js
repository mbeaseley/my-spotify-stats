(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/admin/components/login/login.component.ts");
/* harmony import */ var Shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/admin/components/dashboard/dashboard.component.ts");








const routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] }
];
class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            Shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], Shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                    _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    Shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/components/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var Shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class DashboardComponent {
    constructor(storageService) {
        this.storageService = storageService;
    }
    /**
     * gets tokens from url
     * @param locationHash - location hash key
     */
    getAccessTokenFromUrl(locationHash) {
        return locationHash.split('').slice(14).slice(0, -34).join('');
    }
    /**
     * On init
     */
    ngOnInit() {
        if (document.location.href.indexOf('#') > -1) {
            const accessToken = this.getAccessTokenFromUrl(location.hash);
            this.storageService.setLocalStorageItem('access-token', accessToken);
            document.location.href = '/dashboard';
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 8, vars: 0, consts: [[1, "dashboard"], [1, "dashboard__content-box"], ["routerLink", "/top-tracks"], ["routerLink", "/top-artists"], ["routerLink", "/recently-played"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Top Tracks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Top Artists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Recently Played");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".dashboard[_ngcontent-%COMP%] {\n  min-height: 84vh;\n  max-width: 1000px;\n  margin: 80px auto 40px;\n}\n.dashboard__content-box[_ngcontent-%COMP%] {\n  background-color: #1b1b1b;\n  border: 1px solid #fff;\n  min-height: 200px;\n}\n.dashboard__content-box[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 999rem;\n  padding: 10px 30px;\n  background-color: #1db954;\n  border: none;\n  color: #fff;\n  font-size: 14px;\n  outline: none;\n  margin: 10px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.dashboard__content-box[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background-color: #38e775;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWljaGFlbGJlYXNlbGV5L0RvY3VtZW50cy93b3Jrc3BhY2UvcGVyc29uYWwvbXktc3BvdGlmeS1zdGF0cy9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDREY7QURHRTtFQUNFLHlCRUhJO0VGSUosc0JBQUE7RUFDQSxpQkFBQTtBQ0RKO0FER0k7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVQRTtFRlFGLFlBQUE7RUFDQSxXRWpCRTtFRmtCRixlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNETjtBREdNO0VBQ0UseUJFaEJNO0FEZWQiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdfdmFyaWFibGVzJztcblxuLmRhc2hib2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDg0dmg7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDgwcHggYXV0byA0MHB4O1xuXG4gICZfX2NvbnRlbnQtYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuXG4gICAgJiA+IGEgIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXJlbTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZWVuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi5kYXNoYm9hcmQge1xuICBtaW4taGVpZ2h0OiA4NHZoO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbn1cbi5kYXNoYm9hcmRfX2NvbnRlbnQtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIxYjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG4uZGFzaGJvYXJkX19jb250ZW50LWJveCA+IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXJlbTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRiOTU0O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZGFzaGJvYXJkX19jb250ZW50LWJveCA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhlNzc1O1xufSIsIi8vIEJsYWNrL3doaXRlIHNjYWxlXG4kd2hpdGU6ICNmZmY7XG4kZ3JleTE6ICNiNGI0YjQ7XG4kZ3JleTI6ICM0MjQyNDI7XG4kZ3JleTM6ICM2MzYzNjM7XG4kZ3JleTQ6ICMxYjFiMWI7XG4kYmxhY2s6ICMwMDA7XG5cbi8vIGNvbG9yc1xuJGdyZWVuOiAjMWRiOTU0O1xuJGxpZ2h0LWdyZWVuOiAjMzhlNzc1OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: Shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/components/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var Shared_services_authorise_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/services/authorise.service */ "./src/app/shared/services/authorise.service.ts");



class LoginComponent {
    constructor(auth) {
        this.auth = auth;
    }
    /**
     * on click
     */
    onClick() {
        window.location.href = this.auth.signIn();
    }
    /**
     * On onit
     */
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Shared_services_authorise_service__WEBPACK_IMPORTED_MODULE_1__["AuthoriseService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 7, vars: 0, consts: [[1, "login"], [1, "login__container"], ["src", "/assets/img/spotifytool.png", 1, "login__logo"], [1, "login__cta", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in with your Spotify account to gain access to many useful tools for your music needs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_5_listener($event) { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".login[_ngcontent-%COMP%] {\n  background-color: #000;\n  width: 100vw;\n  height: 97vh;\n}\n.login__container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  max-width: 500px;\n  padding: 20px;\n  border: 1px solid #fff;\n  color: #fff;\n  text-align: center;\n}\n.login__logo[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 200px;\n  padding: 10px;\n}\n.login__cta[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 999rem;\n  padding: 10px 30px;\n  background-color: #1db954;\n  border: none;\n  color: #fff;\n  font-size: 14px;\n  outline: none;\n  margin: 10px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.login__cta[_ngcontent-%COMP%]:hover {\n  background-color: #38e775;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fY29sb3JzLnNjc3MiLCJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkNHTTtFREZOLFlBQUE7RUFDQSxZQUFBO0FFREY7QUZHRTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdDZEk7RURlSixrQkFBQTtBRURKO0FGSUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBRUZKO0FGS0U7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNwQkk7RURxQkosWUFBQTtFQUNBLFdDOUJJO0VEK0JKLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRUhKO0FGS0k7RUFDRSx5QkM3QlE7QUMwQmQiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX3ZhcmlhYmxlcyc7XG5cbi5sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDk3dmg7XG5cbiAgJl9fY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmX19sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4OyBcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgJl9fY3RhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cmVtO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmVlbjtcbiAgICB9XG4gIH1cbn0iLCIvLyBCbGFjay93aGl0ZSBzY2FsZVxuJHdoaXRlOiAjZmZmO1xuJGdyZXkxOiAjYjRiNGI0O1xuJGdyZXkyOiAjNDI0MjQyO1xuJGdyZXkzOiAjNjM2MzYzO1xuJGdyZXk0OiAjMWIxYjFiO1xuJGJsYWNrOiAjMDAwO1xuXG4vLyBjb2xvcnNcbiRncmVlbjogIzFkYjk1NDtcbiRsaWdodC1ncmVlbjogIzM4ZTc3NTsiLCIubG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogOTd2aDtcbn1cbi5sb2dpbl9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbl9fbG9nbyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmxvZ2luX19jdGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXJlbTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRiOTU0O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubG9naW5fX2N0YTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGU3NzU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: Shared_services_authorise_service__WEBPACK_IMPORTED_MODULE_1__["AuthoriseService"] }]; }, null); })();


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
    signIn() {
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
/* harmony import */ var Shared_models_authorise_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/models/authorise-model.service */ "./src/app/shared/models/authorise-model.service.ts");



class AuthoriseService {
    constructor(authModelService) {
        this.authModelService = authModelService;
    }
    signIn() {
        return this.authModelService.signIn();
    }
}
AuthoriseService.ɵfac = function AuthoriseService_Factory(t) { return new (t || AuthoriseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Shared_models_authorise_model_service__WEBPACK_IMPORTED_MODULE_1__["AuthoriseModelService"])); };
AuthoriseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthoriseService, factory: AuthoriseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthoriseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Shared_models_authorise_model_service__WEBPACK_IMPORTED_MODULE_1__["AuthoriseModelService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map