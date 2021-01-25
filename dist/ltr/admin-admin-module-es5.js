(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
    /***/
    "0Em7":
    /*!***********************************************!*\
      !*** ./src/app/admin/admin-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AdminRoutingModule */

    /***/
    function Em7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
        return AdminRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-dashboard-module */
          [__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~7d697d47"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~email-email-module~forms-forms-module~studen~c7798cec"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~student-student-module~teacher-teacher-modul~13a53a71"), __webpack_require__.e("default~dashboard-dashboard-module~student-student-module~ui-ui-module~widget-widget-module"), __webpack_require__.e("default~dashboard-dashboard-module~student-student-module"), __webpack_require__.e("default~dashboard-dashboard-module~teacher-teacher-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard/dashboard.module */
          "pBKm")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'teachers',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | teachers-teachers-module */
          [__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("teachers-teachers-module")]).then(__webpack_require__.bind(null,
          /*! ./teachers/teachers.module */
          "IXc+")).then(function (m) {
            return m.TeachersModule;
          });
        }
      }, {
        path: 'students',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | students-students-module */
          [__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("students-students-module")]).then(__webpack_require__.bind(null,
          /*! ./students/students.module */
          "q7aF")).then(function (m) {
            return m.StudentsModule;
          });
        }
      }, {
        path: 'courses',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | courses-courses-module */
          [__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("courses-courses-module")]).then(__webpack_require__.bind(null,
          /*! ./courses/courses.module */
          "r4O8")).then(function (m) {
            return m.CoursesModule;
          });
        }
      }, {
        path: 'library',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | library-library-module */
          [__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~apps-apps-module~contacts-contacts-module~departments-departments-module~forms-forms-module~~53d2be0d"), __webpack_require__.e("library-library-module")]).then(__webpack_require__.bind(null,
          /*! ./library/library.module */
          "Fql4")).then(function (m) {
            return m.LibraryModule;
          });
        }
      }, {
        path: 'departments',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | departments-departments-module */
          [__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~apps-apps-module~contacts-contacts-module~departments-departments-module~forms-forms-module~~53d2be0d"), __webpack_require__.e("departments-departments-module")]).then(__webpack_require__.bind(null,
          /*! ./departments/departments.module */
          "OXOu")).then(function (m) {
            return m.DepartmentsModule;
          });
        }
      }, {
        path: 'staff',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | staff-staff-module */
          [__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("staff-staff-module")]).then(__webpack_require__.bind(null,
          /*! ./staff/staff.module */
          "bejo")).then(function (m) {
            return m.StaffModule;
          });
        }
      }, {
        path: 'holidays',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | holidays-holidays-module */
          [__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("holidays-holidays-module")]).then(__webpack_require__.bind(null,
          /*! ./holidays/holidays.module */
          "R6cz")).then(function (m) {
            return m.HolidaysModule;
          });
        }
      }, {
        path: 'fees',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | fees-fees-module */
          [__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~contacts-contacts-module~fees-fees-module~forms-fo~1ce6c176"), __webpack_require__.e("fees-fees-module")]).then(__webpack_require__.bind(null,
          /*! ./fees/fees.module */
          "y0OQ")).then(function (m) {
            return m.FeesModule;
          });
        }
      }];

      var AdminRoutingModule = function AdminRoutingModule() {
        _classCallCheck(this, AdminRoutingModule);
      };

      AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AdminRoutingModule
      });
      AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AdminRoutingModule_Factory(t) {
          return new (t || AdminRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "jkDv":
    /*!***************************************!*\
      !*** ./src/app/admin/admin.module.ts ***!
      \***************************************/

    /*! exports provided: AdminModule */

    /***/
    function jkDv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
        return AdminModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-routing.module */
      "0Em7");

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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=admin-admin-module-es5.js.map