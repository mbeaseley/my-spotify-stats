function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/admin/components/login/login.component.ts");
    /* harmony import */


    var Shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! Shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/admin/components/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'dashboard',
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
    }];

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), Shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
        declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], Shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), Shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/components/dashboard/dashboard.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/components/dashboard/dashboard.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppAdminComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/classes/user */
    "./src/app/shared/classes/user.ts");
    /* harmony import */


    var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(storageService, userService) {
        _classCallCheck(this, DashboardComponent);

        this.storageService = storageService;
        this.userService = userService;
        this.user = new src_app_shared_classes_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
      }
      /**
       * gets tokens from url
       * @param locationHash - location hash key
       */


      _createClass(DashboardComponent, [{
        key: "getAccessTokenFromUrl",
        value: function getAccessTokenFromUrl(locationHash) {
          return locationHash.split('').slice(14).slice(0, -34).join('');
        }
        /**
         * On init
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userService.getUser().then(function (user) {
            return _this.user = user;
          });

          if (document.location.href.indexOf('#') > -1) {
            var accessToken = this.getAccessTokenFromUrl(location.hash);
            this.storageService.setLocalStorageItem('access-token', accessToken);
            document.location.href = '/dashboard';
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 20,
      vars: 1,
      consts: [[1, "dashboard"], [1, "dashboard__content-box"], [1, "dashboard__grid"], ["routerLink", "/top-tracks", 1, "dashboard__grid-item"], [1, "dashboard__grid-item-header"], [1, "dashboard__grid-item-description"], ["routerLink", "/top-artists", 1, "dashboard__grid-item"], ["routerLink", "/recently-played", 1, "dashboard__grid-item"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Top Tracks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " View your most listened tracks and switch between 3 different time periods. Your data is updated approximately everyday. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Top Artists");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " View your most listened Artists and switch between 3 different time periods. Your data is updated approximately everyday. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Recently Played");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Check out your recently played tracks with timestamps. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx.user.name, "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: [".dashboard__grid-item[_ngcontent-%COMP%]    > .dashboard__grid-item-description[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.dashboard__grid-item[_ngcontent-%COMP%]    > .dashboard__grid-item-header[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  min-height: 84vh;\n  max-width: 1000px;\n  margin: 80px auto 40px;\n}\n\n.dashboard__content-box[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n\n.dashboard__content-box[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n@media (max-width: 766px) {\n  .dashboard__content-box[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n\n.dashboard__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 12px;\n}\n\n@media (max-width: 766px) {\n  .dashboard__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.dashboard__grid-item[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background: #1db954;\n  color: #fff;\n  padding: 16px;\n  height: 200px;\n  text-decoration: none;\n}\n\n.dashboard__grid-item[_ngcontent-%COMP%]:hover {\n  background: #38e775;\n}\n\n.dashboard__grid-item[_ngcontent-%COMP%]    > .dashboard__grid-item-header[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\n\n@media (max-width: 766px) {\n  .dashboard__grid-item[_ngcontent-%COMP%]    > .dashboard__grid-item-header[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n\n.dashboard__grid-item[_ngcontent-%COMP%]    > .dashboard__grid-item-description[_ngcontent-%COMP%] {\n  min-height: 72px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fdHlwb2dyYXBoeS5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWljaGFlbGJlYXNlbGV5L0RvY3VtZW50cy93b3Jrc3BhY2UvcGVyc29uYWwvbXktc3BvdGlmeS1zdGF0cy9zcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fc3BhY2luZy5zY3NzIiwiL1VzZXJzL21pY2hhZWxiZWFzZWxleS9Eb2N1bWVudHMvd29ya3NwYWNlL3BlcnNvbmFsL215LXNwb3RpZnktc3RhdHMvc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FDQ0o7O0FERUE7RUFDSSx3SUFBQTtBQ0NKOztBQ0pBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FET0Y7O0FDTEU7RUFDRSxZQ0hJO0FGVVI7O0FDTEk7RUFDRSxlQUFBO0FET047O0FDTE07RUFIRjtJQUlJLGVBQUE7RURRTjtBQUNGOztBQ0pFO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0NkTztBRm9CWDs7QUNKSTtFQUxGO0lBTUksMEJBQUE7RURPSjtBQUNGOztBQ0pFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLG1CRXhCSTtFRnlCSixXRWpDSTtFRmtDSixhQzVCTTtFRDZCTixhQUFBO0VBQ0EscUJBQUE7QURNSjs7QUNKSTtFQUNFLG1CRTlCUTtBSG9DZDs7QUNISTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtBRElOOztBQ0ZNO0VBTEY7SUFNSSxlQUFBO0VES047QUFDRjs7QUNGSTtFQUVFLGdCQUFBO0FER04iLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlYmFzZSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcbn1cblxuJWhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cbiRmb250LXNpemUtLWxhcmdlOiAyMXB4O1xuJGZvbnQtc2l6ZTogMThweDtcbiRmb250LXNpemUtLW1lZGl1bTogMTZweDtcbiRmb250LXNpemUtLXNtYWxsOiAxNHB4O1xuJGZvbnQtc2l6ZS0tZXh0cmEtc21hbGw6IDEycHg7XG5cbiRmb250LXdlaWdodDogNDAwOyAvLyBub3JtYWxcbiRmb250LXdlaWdodC0tbWVkaXVtOiA1MDA7IC8vIG1lZGl1bVxuJGZvbnQtd2VpZ2h0LS1ib2xkOiA3MDA7IC8vIGJvbGQiLCIuZGFzaGJvYXJkX19ncmlkLWl0ZW0gPiAuZGFzaGJvYXJkX19ncmlkLWl0ZW0tZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmRhc2hib2FyZF9fZ3JpZC1pdGVtID4gLmRhc2hib2FyZF9fZ3JpZC1pdGVtLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5kYXNoYm9hcmQge1xuICBtaW4taGVpZ2h0OiA4NHZoO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbn1cbi5kYXNoYm9hcmRfX2NvbnRlbnQtYm94IHtcbiAgbWFyZ2luOiAyNHB4O1xufVxuLmRhc2hib2FyZF9fY29udGVudC1ib3ggPiBoMSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkge1xuICAuZGFzaGJvYXJkX19jb250ZW50LWJveCA+IGgxIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbn1cbi5kYXNoYm9hcmRfX2dyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBncmlkLWdhcDogMTJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkge1xuICAuZGFzaGJvYXJkX19ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuLmRhc2hib2FyZF9fZ3JpZC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjMWRiOTU0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmRhc2hib2FyZF9fZ3JpZC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzM4ZTc3NTtcbn1cbi5kYXNoYm9hcmRfX2dyaWQtaXRlbSA+IC5kYXNoYm9hcmRfX2dyaWQtaXRlbS1oZWFkZXIge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY2cHgpIHtcbiAgLmRhc2hib2FyZF9fZ3JpZC1pdGVtID4gLmRhc2hib2FyZF9fZ3JpZC1pdGVtLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG59XG4uZGFzaGJvYXJkX19ncmlkLWl0ZW0gPiAuZGFzaGJvYXJkX19ncmlkLWl0ZW0tZGVzY3JpcHRpb24ge1xuICBtaW4taGVpZ2h0OiA3MnB4O1xufSIsIkBpbXBvcnQgJ192YXJpYWJsZXMnO1xuXG4uZGFzaGJvYXJkIHtcbiAgbWluLWhlaWdodDogODR2aDtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogODBweCBhdXRvIDQwcHg7XG5cbiAgJl9fY29udGVudC1ib3gge1xuICAgIG1hcmdpbjogJHNwYWNlO1xuXG4gICAgJiA+IGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbC1icmVha3BvaW50KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC1nYXA6ICRzcGFjZS1zbTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwtYnJlYWtwb2ludCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICB9XG5cbiAgJl9fZ3JpZC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQ6ICRncmVlbjtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIHBhZGRpbmc6ICRzcGFjZS1tO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQtZ3JlZW47XG4gICAgfVxuXG4gICAgJiA+ICYtaGVhZGVyIHtcbiAgICAgIEBleHRlbmQgJWhlYWRpbmc7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsLWJyZWFrcG9pbnQpIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICYgPiAmLWRlc2NyaXB0aW9uIHtcbiAgICAgIEBleHRlbmQgJWJhc2U7XG4gICAgICBtaW4taGVpZ2h0OiA3MnB4O1xuICAgIH1cbiAgfVxufSIsIiRzcGFjZS14eGw6IDU2cHg7XG4kc3BhY2UteGw6IDQ4cHg7XG4kc3BhY2UtbDogNDBweDtcbiRzcGFjZS1tbDogMzJweDtcblxuJHNwYWNlOiAyNHB4O1xuXG4kc3BhY2UtbTogMTZweDtcbiRzcGFjZS1zbTogMTJweDtcbiRzcGFjZS1zOiA4cHg7XG4kc3BhY2UteHM6IDRweDtcbiRzcGFjZS14eHM6IDJweDtcbiIsIi8vIEJsYWNrL3doaXRlIHNjYWxlXG4kd2hpdGU6ICNmZmY7XG4kZ3JleTE6ICNiNGI0YjQ7XG4kZ3JleTI6ICM0MjQyNDI7XG4kZ3JleTM6ICM2MzYzNjM7XG4kZ3JleTQ6ICMxYjFiMWI7XG4kYmxhY2s6ICMwMDA7XG5cbi8vIGNvbG9yc1xuJGdyZWVuOiAjMWRiOTU0O1xuJGxpZ2h0LWdyZWVuOiAjMzhlNzc1O1xuXG4kcmVkOiAjY2MwMDAwOyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
        }, {
          type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/components/login/login.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/admin/components/login/login.component.ts ***!
    \***********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAdminComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var Environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! Environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var Shared_services_authorise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! Shared/services/authorise.service */
    "./src/app/shared/services/authorise.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(auth) {
        _classCallCheck(this, LoginComponent);

        this.auth = auth;
        this.logo = "".concat(Environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].route, "assets/img/spotifytool.png");
      }
      /**
       * on click
       */


      _createClass(LoginComponent, [{
        key: "onClick",
        value: function onClick() {
          window.location.href = this.auth.logIn();
        }
        /**
         * On onit
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Shared_services_authorise_service__WEBPACK_IMPORTED_MODULE_2__["AuthoriseService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 7,
      vars: 1,
      consts: [[1, "login"], [1, "login__container"], [1, "login__logo", 3, "src"], [1, "login__cta", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in with your Spotify account to gain access to many useful tools for your music needs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_5_listener($event) {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".login[_ngcontent-%COMP%] {\n  background-color: #000;\n  width: 100vw;\n  height: 97vh;\n}\n.login__container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  max-width: 500px;\n  padding: 20px;\n  border: 1px solid #fff;\n  color: #fff;\n  text-align: center;\n}\n.login__logo[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 200px;\n  padding: 10px;\n}\n.login__cta[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 999rem;\n  padding: 10px 30px;\n  background-color: #1db954;\n  border: none;\n  color: #fff;\n  font-size: 14px;\n  outline: none;\n  margin: 10px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.login__cta[_ngcontent-%COMP%]:hover {\n  background-color: #38e775;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fY29sb3JzLnNjc3MiLCJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkNHTTtFREZOLFlBQUE7RUFDQSxZQUFBO0FFREY7QUZHRTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdDZEk7RURlSixrQkFBQTtBRURKO0FGSUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBRUZKO0FGS0U7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNwQkk7RURxQkosWUFBQTtFQUNBLFdDOUJJO0VEK0JKLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRUhKO0FGS0k7RUFDRSx5QkM3QlE7QUMwQmQiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX3ZhcmlhYmxlcyc7XG5cbi5sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDk3dmg7XG5cbiAgJl9fY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmX19sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4OyBcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgJl9fY3RhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cmVtO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmVlbjtcbiAgICB9XG4gIH1cbn0iLCIvLyBCbGFjay93aGl0ZSBzY2FsZVxuJHdoaXRlOiAjZmZmO1xuJGdyZXkxOiAjYjRiNGI0O1xuJGdyZXkyOiAjNDI0MjQyO1xuJGdyZXkzOiAjNjM2MzYzO1xuJGdyZXk0OiAjMWIxYjFiO1xuJGJsYWNrOiAjMDAwO1xuXG4vLyBjb2xvcnNcbiRncmVlbjogIzFkYjk1NDtcbiRsaWdodC1ncmVlbjogIzM4ZTc3NTtcblxuJHJlZDogI2NjMDAwMDsiLCIubG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogOTd2aDtcbn1cbi5sb2dpbl9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbl9fbG9nbyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmxvZ2luX19jdGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXJlbTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRiOTU0O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubG9naW5fX2N0YTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGU3NzU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: Shared_services_authorise_service__WEBPACK_IMPORTED_MODULE_2__["AuthoriseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/user-model.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/models/user-model.service.ts ***!
    \*****************************************************/

  /*! exports provided: UserModelService */

  /***/
  function srcAppSharedModelsUserModelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModelService", function () {
      return UserModelService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../classes/user */
    "./src/app/shared/classes/user.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserModelService =
    /*#__PURE__*/
    function () {
      function UserModelService(storageService, http) {
        _classCallCheck(this, UserModelService);

        this.storageService = storageService;
        this.http = http;
        this.spotifyUrl = 'https://api.spotify.com/v1/me';
      }

      _createClass(UserModelService, [{
        key: "fromPayload",
        value: function fromPayload(response) {
          var user = new _classes_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
          user.id = response.id;
          user.name = response.display_name;
          user.email = response.email;
          user.image = response.images[0].url;
          user.country = response.country;
          user.followers = response.total;
          user.uri = response.uri;
          return user;
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this2 = this;

          return this.http.get("".concat(this.spotifyUrl), {
            headers: {
              Authorization: "Bearer " + this.storageService.getLocalStorageItem()
            }
          }).toPromise().then(function (res) {
            return _this2.fromPayload(res);
          });
        }
      }]);

      return UserModelService;
    }();

    UserModelService.ɵfac = function UserModelService_Factory(t) {
      return new (t || UserModelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    UserModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserModelService,
      factory: UserModelService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/user.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/user.service.ts ***!
    \*************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_user_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/user-model.service */
    "./src/app/shared/models/user-model.service.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(userModel) {
        _classCallCheck(this, UserService);

        this.userModel = userModel;
      }

      _createClass(UserService, [{
        key: "getUser",
        value: function getUser() {
          return this.userModel.getUser();
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_models_user_model_service__WEBPACK_IMPORTED_MODULE_1__["UserModelService"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _models_user_model_service__WEBPACK_IMPORTED_MODULE_1__["UserModelService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map