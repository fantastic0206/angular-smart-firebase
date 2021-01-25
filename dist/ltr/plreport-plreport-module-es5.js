(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plreport-plreport-module"], {
    /***/
    "4Jsn":
    /*!*****************************************************!*\
      !*** ./src/app/plreport/plreport-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: PlreportRoutingModule */

    /***/
    function Jsn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlreportRoutingModule", function () {
        return PlreportRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _all_plreport_all_plreport_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./all-plreport/all-plreport.component */
      "7aSK");

      var routes = [{
        path: '',
        component: _all_plreport_all_plreport_component__WEBPACK_IMPORTED_MODULE_2__["AllPlreportComponent"]
      }];

      var PlreportRoutingModule = function PlreportRoutingModule() {
        _classCallCheck(this, PlreportRoutingModule);
      };

      PlreportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PlreportRoutingModule
      });
      PlreportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PlreportRoutingModule_Factory(t) {
          return new (t || PlreportRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlreportRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlreportRoutingModule, [{
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
    "7aSK":
    /*!*****************************************************************!*\
      !*** ./src/app/plreport/all-plreport/all-plreport.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AllPlreportComponent, ExampleDataSource */

    /***/
    function aSK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllPlreportComponent", function () {
        return AllPlreportComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function () {
        return ExampleDataSource;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _teachers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./teachers.service */
      "ZaiI");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./dialogs/form-dialog/form-dialog.component */
      "ihK0");
      /* harmony import */


      var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dialogs/delete/delete.component */
      "MC82");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L"); // import { DeleteDialogComponent } from './dialogs/delete/delete.component';


      var _c0 = ["chart"];
      var _c1 = ["filter"];

      function AllPlreportComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "list_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Table View ");
        }
      }

      function AllPlreportComponent_mat_header_cell_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllPlreportComponent_mat_header_cell_50_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return $event ? ctx_r34.masterToggle() : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r3.selection.hasValue() && ctx_r3.isAllSelected())("indeterminate", ctx_r3.selection.hasValue() && !ctx_r3.isAllSelected())("ngClass", "tbl-checkbox");
        }
      }

      function AllPlreportComponent_mat_cell_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPlreportComponent_mat_cell_51_Template_mat_checkbox_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            return $event.stopPropagation();
          })("change", function AllPlreportComponent_mat_cell_51_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var row_r36 = ctx.$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return $event ? ctx_r39.selection.toggle(row_r36) : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r36 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4.selection.isSelected(row_r36))("ngClass", "tbl-checkbox");
        }
      }

      function AllPlreportComponent_mat_header_cell_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllPlreportComponent_mat_cell_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r40.id);
        }
      }

      function AllPlreportComponent_mat_header_cell_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " S.NO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-5");
        }
      }

      function AllPlreportComponent_mat_cell_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AllPlreportComponent_mat_cell_57_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var row_r41 = ctx.$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.onContextMenu($event, row_r41);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r41.sno, " ");
        }
      }

      function AllPlreportComponent_mat_header_cell_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllPlreportComponent_mat_cell_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AllPlreportComponent_mat_cell_60_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var row_r44 = ctx.$implicit;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.onContextMenu($event, row_r44);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r44 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r44.date, " ");
        }
      }

      function AllPlreportComponent_mat_header_cell_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Script Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllPlreportComponent_mat_cell_63_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AllPlreportComponent_mat_cell_63_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var row_r47 = ctx.$implicit;

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r48.onContextMenu($event, row_r47);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r47.scriptType, "");
        }
      }

      function AllPlreportComponent_mat_header_cell_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Script Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllPlreportComponent_mat_cell_66_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AllPlreportComponent_mat_cell_66_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var row_r50 = ctx.$implicit;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r51.onContextMenu($event, row_r50);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r50.scriptName, " ");
        }
      }

      function AllPlreportComponent_mat_header_cell_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Position Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllPlreportComponent_mat_cell_69_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AllPlreportComponent_mat_cell_69_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var row_r53 = ctx.$implicit;

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r54.onContextMenu($event, row_r53);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r53.positionType, " ");
        }
      }

      function AllPlreportComponent_mat_header_cell_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Holding Period ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllPlreportComponent_mat_cell_72_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AllPlreportComponent_mat_cell_72_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

            var row_r56 = ctx.$implicit;

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r57.onContextMenu($event, row_r56);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r56.holdingPeriod, " ");
        }
      }

      function AllPlreportComponent_mat_header_cell_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Profit/Loss ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllPlreportComponent_mat_cell_75_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AllPlreportComponent_mat_cell_75_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var row_r59 = ctx.$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r60.onContextMenu($event, row_r59);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r59.profitLoss, " ");
        }
      }

      function AllPlreportComponent_mat_header_cell_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Account Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllPlreportComponent_mat_cell_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AllPlreportComponent_mat_cell_78_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var row_r62 = ctx.$implicit;

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r63.onContextMenu($event, row_r62);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r62.accountName, "");
        }
      }

      function AllPlreportComponent_mat_header_cell_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllPlreportComponent_mat_cell_81_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPlreportComponent_mat_cell_81_Template_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

            return $event.stopPropagation();
          })("click", function AllPlreportComponent_mat_cell_81_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

            var row_r65 = ctx.$implicit;

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r69.editCall(row_r65);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPlreportComponent_mat_cell_81_Template_button_click_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

            return $event.stopPropagation();
          })("click", function AllPlreportComponent_mat_cell_81_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

            var row_r65 = ctx.$implicit;

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r71.deleteItem(row_r65);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllPlreportComponent_mat_header_row_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function AllPlreportComponent_mat_row_83_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-row", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPlreportComponent_mat_row_83_Template_mat_row_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

            var row_r72 = ctx.$implicit;

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r73.editCall(row_r72);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", "pointer");
        }
      }

      function AllPlreportComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 40);
        }
      }

      function AllPlreportComponent_ng_template_88_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPlreportComponent_ng_template_88_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r76.addNew();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPlreportComponent_ng_template_88_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var item_r75 = ctx.item;

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r78.editCall(item_r75);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPlreportComponent_ng_template_88_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var item_r75 = ctx.item;

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r79.deleteItem(item_r75);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPlreportComponent_ng_template_88_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r80.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Refresh Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "no_encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Disable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "list_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Nested Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r30);
        }
      }

      function AllPlreportComponent_div_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No results ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r31.dataSource.renderedData.length == 0 ? "" : "none");
        }
      }

      function AllPlreportComponent_ng_template_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "grid_on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Chart View ");
        }
      }

      var _c2 = function _c2() {
        return [5, 10, 25, 100];
      };

      var AllPlreportComponent = /*#__PURE__*/function () {
        function AllPlreportComponent(httpClient, dialog, teachersService, snackBar) {
          _classCallCheck(this, AllPlreportComponent);

          this.httpClient = httpClient;
          this.dialog = dialog;
          this.teachersService = teachersService;
          this.snackBar = snackBar;
          this.displayedColumns = ['select', 'sno', 'date', 'scriptType', 'scriptName', 'positionType', 'holdingPeriod', 'profitLoss', 'accountName', 'actions'];
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
          this.contextMenuPosition = {
            x: '0px',
            y: '0px'
          };
        }

        _createClass(AllPlreportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
            this.chart1();
            this.chart2();
          }
        }, {
          key: "chart1",
          value: function chart1() {
            this.barChartOptions1 = {
              series: [{
                name: 'Investment',
                data: [150000, 0, 0, 10000, 0]
              }],
              chart: {
                height: 320,
                type: 'bar',
                toolbar: {
                  show: false
                },
                foreColor: '#9aa0ac'
              },
              plotOptions: {
                bar: {
                  dataLabels: {
                    position: 'top'
                  }
                }
              },
              dataLabels: {
                enabled: false,
                formatter: function formatter(val) {
                  return val + '%';
                },
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ['#9aa0ac']
                }
              },
              xaxis: {
                categories: ['1-Jan', '2-Jan', '3-Jan', '4-Jan', '5-Jan'],
                position: 'bottom',
                labels: {
                  offsetY: 0
                },
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                },
                crosshairs: {
                  fill: {
                    type: 'gradient',
                    gradient: {
                      colorFrom: '#D8E3F0',
                      colorTo: '#BED1E6',
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5
                    }
                  }
                },
                tooltip: {
                  enabled: true,
                  offsetY: -35
                }
              },
              fill: {
                type: 'gradient',
                colors: ['#4F86F8', '#4F86F8'],
                gradient: {
                  shade: 'light',
                  type: 'horizontal',
                  shadeIntensity: 0.25,
                  gradientToColors: undefined,
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [50, 0, 100, 100]
                }
              },
              yaxis: {
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                },
                labels: {
                  show: true,
                  formatter: function formatter(val) {
                    return val + '';
                  }
                }
              }
            };
          }
        }, {
          key: "chart2",
          value: function chart2() {
            this.barChartOptions2 = {
              series: [{
                name: 'Investment',
                data: [150000, 30000, 50000, 70000]
              }],
              chart: {
                height: 320,
                type: 'bar',
                toolbar: {
                  show: false
                },
                foreColor: '#9aa0ac'
              },
              plotOptions: {
                bar: {
                  dataLabels: {
                    position: 'top'
                  }
                }
              },
              dataLabels: {
                enabled: false,
                formatter: function formatter(val) {
                  return val + '%';
                },
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ['#9aa0ac']
                }
              },
              xaxis: {
                categories: ['Gowtham', 'Divya', 'Besedin', 'Musthafa'],
                position: 'bottom',
                labels: {
                  offsetY: 0
                },
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                },
                crosshairs: {
                  fill: {
                    type: 'gradient',
                    gradient: {
                      colorFrom: '#D8E3F0',
                      colorTo: '#BED1E6',
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5
                    }
                  }
                },
                tooltip: {
                  enabled: true,
                  offsetY: -35
                }
              },
              fill: {
                type: 'gradient',
                colors: ['#4F86F8', '#4F86F8'],
                gradient: {
                  shade: 'light',
                  type: 'horizontal',
                  shadeIntensity: 0.25,
                  gradientToColors: undefined,
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [50, 0, 100, 100]
                }
              },
              yaxis: {
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                },
                labels: {
                  show: true,
                  formatter: function formatter(val) {
                    return val + '';
                  }
                }
              }
            };
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.loadData();
          }
        }, {
          key: "addNew",
          value: function addNew() {
            var _this = this;

            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FormDialogComponent"], {
              data: {
                teachers: this.teachers,
                action: 'add'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataServicex
                _this.exampleDatabase.dataChange.value.unshift(_this.teachersService.getDialogData());

                _this.refreshTable();

                _this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "editCall",
          value: function editCall(row) {
            var _this2 = this;

            this.id = row.id;
            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FormDialogComponent"], {
              data: {
                teachers: row,
                action: 'edit'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                var foundIndex = _this2.exampleDatabase.dataChange.value.findIndex(function (x) {
                  return x.id === _this2.id;
                }); // Then you update that record using data from dialogData (values you enetered)


                _this2.exampleDatabase.dataChange.value[foundIndex] = _this2.teachersService.getDialogData(); // And lastly refresh table

                _this2.refreshTable();

                _this2.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this3 = this;

            this.id = row.id;
            var dialogRef = this.dialog.open(_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_11__["DeleteDialogComponent"], {
              data: row
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                var foundIndex = _this3.exampleDatabase.dataChange.value.findIndex(function (x) {
                  return x.id === _this3.id;
                }); // for delete we use splice in order to remove single object from DataService


                _this3.exampleDatabase.dataChange.value.splice(foundIndex, 1);

                _this3.refreshTable();

                _this3.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.paginator._changePageSize(this.paginator.pageSize);
          }
          /** Whether the number of selected elements matches the total number of rows. */

        }, {
          key: "isAllSelected",
          value: function isAllSelected() {
            var numSelected = this.selection.selected.length;
            var numRows = this.dataSource.renderedData.length;
            return numSelected === numRows;
          }
          /** Selects all rows if they are not all selected; otherwise clear selection. */

        }, {
          key: "masterToggle",
          value: function masterToggle() {
            var _this4 = this;

            this.isAllSelected() ? this.selection.clear() : this.dataSource.renderedData.forEach(function (row) {
              return _this4.selection.select(row);
            });
          }
        }, {
          key: "removeSelectedRows",
          value: function removeSelectedRows() {
            var _this5 = this;

            var totalSelect = this.selection.selected.length;
            this.selection.selected.forEach(function (item) {
              var index = _this5.dataSource.renderedData.findIndex(function (d) {
                return d === item;
              }); // console.log(this.dataSource.renderedData.findIndex((d) => d === item));


              _this5.exampleDatabase.dataChange.value.splice(index, 1);

              _this5.refreshTable();

              _this5.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
            });
            this.showNotification('snackbar-danger', totalSelect + ' Record Delete Successfully...!!!', 'bottom', 'center');
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this6 = this;

            this.exampleDatabase = new _teachers_service__WEBPACK_IMPORTED_MODULE_1__["TeachersService"](this.httpClient);
            this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.filter.nativeElement, 'keyup').subscribe(function () {
              if (!_this6.dataSource) {
                return;
              }

              _this6.dataSource.filter = _this6.filter.nativeElement.value;
            });
          }
        }, {
          key: "showNotification",
          value: function showNotification(colorName, text, placementFrom, placementAlign) {
            this.snackBar.open(text, '', {
              duration: 2000,
              verticalPosition: placementFrom,
              horizontalPosition: placementAlign,
              panelClass: colorName
            });
          } // context menu

        }, {
          key: "onContextMenu",
          value: function onContextMenu(event, item) {
            event.preventDefault();
            this.contextMenuPosition.x = event.clientX + 'px';
            this.contextMenuPosition.y = event.clientY + 'px';
            this.contextMenu.menuData = {
              item: item
            };
            this.contextMenu.menu.focusFirstItem('mouse');
            this.contextMenu.openMenu();
          }
        }]);

        return AllPlreportComponent;
      }();

      AllPlreportComponent.ɵfac = function AllPlreportComponent_Factory(t) {
        return new (t || AllPlreportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_teachers_service__WEBPACK_IMPORTED_MODULE_1__["TeachersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
      };

      AllPlreportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AllPlreportComponent,
        selectors: [["app-all-plreport"]],
        viewQuery: function AllPlreportComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
          }
        },
        decls: 127,
        vars: 30,
        consts: [[1, "content", 2, "margin-top", "10px"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "active", 2, "color", "#444444", "padding", "3px 0"], [1, "col-md-12"], ["mat-tab-label", ""], [1, "mt-5"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "icon-button-demo", "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "col-white", 2, "font-size", "16px", "padding", "3px"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "sno"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img tbl-col-width-per-5", 3, "contextmenu", 4, "matCellDef"], ["matColumnDef", "date"], [3, "contextmenu", 4, "matCellDef"], ["matColumnDef", "scriptType"], ["matColumnDef", "scriptName"], ["matColumnDef", "positionType"], ["matColumnDef", "holdingPeriod"], ["matColumnDef", "profitLoss"], ["matColumnDef", "accountName"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["contextMenu", "matMenu"], ["matMenuContent", ""], ["nestedmenu", "matMenu"], ["mat-menu-item", ""], ["class", "no-results", 3, "display", 4, "ngIf"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "header"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "fill"], [1, "material-icons-two-tone", "pr-3"], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 1, "table-img", "tbl-col-width-per-5", 3, "contextmenu"], [3, "contextmenu"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "click"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "disabled", ""], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "no-results"]],
        template: function AllPlreportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "P & L Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "P & L Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AllPlreportComponent_ng_template_18_Template, 3, 0, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPlreportComponent_Template_button_click_36_listener() {
              return ctx.removeSelectedRows();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPlreportComponent_Template_button_click_43_listener() {
              return ctx.addNew();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-table", 35, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AllPlreportComponent_mat_header_cell_50_Template, 2, 4, "mat-header-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AllPlreportComponent_mat_cell_51_Template, 2, 3, "mat-cell", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AllPlreportComponent_mat_header_cell_53_Template, 2, 0, "mat-header-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AllPlreportComponent_mat_cell_54_Template, 2, 1, "mat-cell", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](55, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AllPlreportComponent_mat_header_cell_56_Template, 2, 1, "mat-header-cell", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AllPlreportComponent_mat_cell_57_Template, 2, 1, "mat-cell", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](58, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AllPlreportComponent_mat_header_cell_59_Template, 2, 0, "mat-header-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AllPlreportComponent_mat_cell_60_Template, 2, 1, "mat-cell", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](61, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, AllPlreportComponent_mat_header_cell_62_Template, 2, 0, "mat-header-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AllPlreportComponent_mat_cell_63_Template, 2, 1, "mat-cell", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](64, 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AllPlreportComponent_mat_header_cell_65_Template, 2, 0, "mat-header-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AllPlreportComponent_mat_cell_66_Template, 2, 1, "mat-cell", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](67, 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, AllPlreportComponent_mat_header_cell_68_Template, 2, 0, "mat-header-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AllPlreportComponent_mat_cell_69_Template, 2, 1, "mat-cell", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](70, 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, AllPlreportComponent_mat_header_cell_71_Template, 2, 0, "mat-header-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AllPlreportComponent_mat_cell_72_Template, 2, 1, "mat-cell", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](73, 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AllPlreportComponent_mat_header_cell_74_Template, 2, 0, "mat-header-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AllPlreportComponent_mat_cell_75_Template, 2, 1, "mat-cell", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](76, 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, AllPlreportComponent_mat_header_cell_77_Template, 2, 0, "mat-header-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, AllPlreportComponent_mat_cell_78_Template, 2, 1, "mat-cell", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](79, 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, AllPlreportComponent_mat_header_cell_80_Template, 2, 0, "mat-header-cell", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, AllPlreportComponent_mat_cell_81_Template, 7, 0, "mat-cell", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, AllPlreportComponent_mat_header_row_82_Template, 1, 0, "mat-header-row", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, AllPlreportComponent_mat_row_83_Template, 1, 2, "mat-row", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, AllPlreportComponent_div_84_Template, 2, 1, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-menu", null, 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, AllPlreportComponent_ng_template_88_Template, 30, 1, "ng-template", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-menu", null, 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "mail_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "call");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Item 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, AllPlreportComponent_div_106_Template, 2, 2, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "mat-paginator", 66, 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, AllPlreportComponent_ng_template_110_Template, 3, 0, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Day Wise Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "apx-chart", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Account Wise Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "apx-chart", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.selection.hasValue());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exampleDatabase.isTblLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.exampleDatabase.isTblLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.barChartOptions1.series)("chart", ctx.barChartOptions1.chart)("dataLabels", ctx.barChartOptions1.dataLabels)("plotOptions", ctx.barChartOptions1.plotOptions)("yaxis", ctx.barChartOptions1.yaxis)("xaxis", ctx.barChartOptions1.xaxis)("fill", ctx.barChartOptions1.fill);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.barChartOptions2.series)("chart", ctx.barChartOptions2.chart)("dataLabels", ctx.barChartOptions2.dataLabels)("plotOptions", ctx.barChartOptions2.plotOptions)("yaxis", ctx.barChartOptions2.yaxis)("xaxis", ctx.barChartOptions2.xaxis)("fill", ctx.barChartOptions2.fill);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuContent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__["ChartComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCell"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRow"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinner"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BscmVwb3J0L2FsbC1wbHJlcG9ydC9hbGwtcGxyZXBvcnQuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllPlreportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-all-plreport',
            templateUrl: './all-plreport.component.html',
            styleUrls: ['./all-plreport.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: _teachers_service__WEBPACK_IMPORTED_MODULE_1__["TeachersService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }];
        }, {
          chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart']
          }],
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
              "static": true
            }]
          }],
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['filter', {
              "static": true
            }]
          }],
          contextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"]]
          }]
        });
      })();

      var ExampleDataSource = /*#__PURE__*/function (_angular_cdk_collecti) {
        _inherits(ExampleDataSource, _angular_cdk_collecti);

        var _super = _createSuper(ExampleDataSource);

        function ExampleDataSource(exampleDatabase, paginator, _sort) {
          var _this7;

          _classCallCheck(this, ExampleDataSource);

          _this7 = _super.call(this);
          _this7.exampleDatabase = exampleDatabase;
          _this7.paginator = paginator;
          _this7._sort = _sort;
          _this7.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
          _this7.filteredData = [];
          _this7.renderedData = []; // Reset to the first page when the user changes the filter.

          _this7.filterChange.subscribe(function () {
            return _this7.paginator.pageIndex = 0;
          });

          return _this7;
        }

        _createClass(ExampleDataSource, [{
          key: "connect",

          /** Connect function called by the table to retrieve one stream containing the data to render. */
          value: function connect() {
            var _this8 = this;

            // Listen for any changes in the base data, sorting, filtering, or pagination
            var displayDataChanges = [this.exampleDatabase.dataChange, this._sort.sortChange, this.filterChange, this.paginator.page];
            this.exampleDatabase.getAllTeacherss();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"]).apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function () {
              // Filter data
              _this8.filteredData = _this8.exampleDatabase.data.slice().filter(function (teachers) {
                var searchStr = (teachers.date + teachers.scriptType + teachers.scriptName + teachers.positionType + teachers.holdingPeriod + teachers.profitLoss + teachers.accountName).toLowerCase();
                return searchStr.indexOf(_this8.filter.toLowerCase()) !== -1;
              }); // Sort filtered data

              var sortedData = _this8.sortData(_this8.filteredData.slice()); // Grab the page's slice of the filtered sorted data.


              var startIndex = _this8.paginator.pageIndex * _this8.paginator.pageSize;
              _this8.renderedData = sortedData.splice(startIndex, _this8.paginator.pageSize);
              return _this8.renderedData;
            }));
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
          /** Returns a sorted copy of the database data. */

        }, {
          key: "sortData",
          value: function sortData(data) {
            var _this9 = this;

            if (!this._sort.active || this._sort.direction === '') {
              return data;
            }

            return data.sort(function (a, b) {
              var propertyA = '';
              var propertyB = '';

              switch (_this9._sort.active) {
                case 'id':
                  var _ref = [a.id, b.id];
                  propertyA = _ref[0];
                  propertyB = _ref[1];
                  break;

                case 'date':
                  var _ref2 = [a.date, b.date];
                  propertyA = _ref2[0];
                  propertyB = _ref2[1];
                  break;

                case 'scriptType':
                  var _ref3 = [a.scriptType, b.scriptType];
                  propertyA = _ref3[0];
                  propertyB = _ref3[1];
                  break;

                case 'scriptName':
                  var _ref4 = [a.scriptName, b.scriptName];
                  propertyA = _ref4[0];
                  propertyB = _ref4[1];
                  break;

                case 'positionType':
                  var _ref5 = [a.positionType, b.positionType];
                  propertyA = _ref5[0];
                  propertyB = _ref5[1];
                  break;

                case 'holdingPeriod':
                  var _ref6 = [a.holdingPeriod, b.holdingPeriod];
                  propertyA = _ref6[0];
                  propertyB = _ref6[1];
                  break;

                case 'profitLoss':
                  var _ref7 = [a.profitLoss, b.profitLoss];
                  propertyA = _ref7[0];
                  propertyB = _ref7[1];
                  break;

                case 'accountName':
                  var _ref8 = [a.accountName, b.accountName];
                  propertyA = _ref8[0];
                  propertyB = _ref8[1];
                  break;
              }

              var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
              var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
              return (valueA < valueB ? -1 : 1) * (_this9._sort.direction === 'asc' ? 1 : -1);
            });
          }
        }, {
          key: "filter",
          get: function get() {
            return this.filterChange.value;
          },
          set: function set(filter) {
            this.filterChange.next(filter);
          }
        }]);

        return ExampleDataSource;
      }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["DataSource"]);
      /***/

    },

    /***/
    "MC82":
    /*!**************************************************************************!*\
      !*** ./src/app/plreport/all-plreport/dialogs/delete/delete.component.ts ***!
      \**************************************************************************/

    /*! exports provided: DeleteDialogComponent */

    /***/
    function MC82(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function () {
        return DeleteDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _teachers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../teachers.service */
      "ZaiI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var DeleteDialogComponent = /*#__PURE__*/function () {
        function DeleteDialogComponent(dialogRef, data, teachersService) {
          _classCallCheck(this, DeleteDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.teachersService = teachersService;
        }

        _createClass(DeleteDialogComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            this.teachersService.deleteTeachers(this.data.id);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DeleteDialogComponent;
      }();

      DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) {
        return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_teachers_service__WEBPACK_IMPORTED_MODULE_2__["TeachersService"]));
      };

      DeleteDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeleteDialogComponent,
        selectors: [["app-delete"]],
        decls: 20,
        vars: 3,
        consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "clearfix"], [1, "font-weight-bold"], ["mat-dialog-actions", "", 1, "mb-1"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", "click"], ["mat-flat-button", "", "tabindex", "-1", 3, "click"]],
        template: function DeleteDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Script Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Account Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_16_listener() {
              return ctx.confirmDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_18_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.scriptName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.accountName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 1);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BscmVwb3J0L2FsbC1wbHJlcG9ydC9kaWFsb2dzL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete',
            templateUrl: './delete.component.html',
            styleUrls: ['./delete.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _teachers_service__WEBPACK_IMPORTED_MODULE_2__["TeachersService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZaiI":
    /*!***********************************************************!*\
      !*** ./src/app/plreport/all-plreport/teachers.service.ts ***!
      \***********************************************************/

    /*! exports provided: TeachersService */

    /***/
    function ZaiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeachersService", function () {
        return TeachersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var TeachersService = /*#__PURE__*/function () {
        function TeachersService(httpClient) {
          _classCallCheck(this, TeachersService);

          this.httpClient = httpClient;
          this.API_URL = 'assets/data/teachers.json';
          this.isTblLoading = true;
          this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        }

        _createClass(TeachersService, [{
          key: "getDialogData",
          value: function getDialogData() {
            return this.dialogData;
          }
          /** CRUD METHODS */

        }, {
          key: "getAllTeacherss",
          value: function getAllTeacherss() {
            var _this10 = this;

            this.httpClient.get(this.API_URL).subscribe(function (data) {
              _this10.isTblLoading = false;

              _this10.dataChange.next(data);
            }, function (error) {
              _this10.isTblLoading = false;
              console.log(error.name + ' ' + error.message);
            });
          }
        }, {
          key: "addTeachers",
          value: function addTeachers(teachers) {
            this.dialogData = teachers;
            /*  this.httpClient.post(this.API_URL, teachers).subscribe(data => {
              this.dialogData = teachers;
              },
              (err: HttpErrorResponse) => {
             // error code here
            });*/
          }
        }, {
          key: "updateTeachers",
          value: function updateTeachers(teachers) {
            this.dialogData = teachers;
            /* this.httpClient.put(this.API_URL + teachers.id, teachers).subscribe(data => {
              this.dialogData = teachers;
            },
            (err: HttpErrorResponse) => {
              // error code here
            }
            );*/
          }
        }, {
          key: "deleteTeachers",
          value: function deleteTeachers(id) {
            console.log(id);
            /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
              console.log(id);
              },
              (err: HttpErrorResponse) => {
                 // error code here
              }
            );*/
          }
        }, {
          key: "data",
          get: function get() {
            return this.dataChange.value;
          }
        }]);

        return TeachersService;
      }();

      TeachersService.ɵfac = function TeachersService_Factory(t) {
        return new (t || TeachersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      TeachersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TeachersService,
        factory: TeachersService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeachersService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ggZm":
    /*!*********************************************************!*\
      !*** ./src/app/plreport/all-plreport/teachers.model.ts ***!
      \*********************************************************/

    /*! exports provided: Teachers */

    /***/
    function ggZm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Teachers", function () {
        return Teachers;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var Teachers = /*#__PURE__*/function () {
        function Teachers(teachers) {
          _classCallCheck(this, Teachers);

          {
            this.id = teachers.id || this.getRandomID();
            this.sno = teachers.sno || '';
            this.date = teachers.date || Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
            this.scriptType = teachers.scriptType || '';
            this.scriptName = teachers.scriptName || ''; // this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';

            this.positionType = teachers.positionType || '';
            this.holdingPeriod = teachers.holdingPeriod || '';
            this.profitLoss = teachers.profitLoss || '';
            this.accountName = teachers.accountName || '';
          }
        }

        _createClass(Teachers, [{
          key: "getRandomID",
          value: function getRandomID() {
            var S4 = function S4() {
              return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
            };

            return S4() + S4();
          }
        }]);

        return Teachers;
      }();
      /***/

    },

    /***/
    "ihK0":
    /*!************************************************************************************!*\
      !*** ./src/app/plreport/all-plreport/dialogs/form-dialog/form-dialog.component.ts ***!
      \************************************************************************************/

    /*! exports provided: FormDialogComponent */

    /***/
    function ihK0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormDialogComponent", function () {
        return FormDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _teachers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../teachers.service */
      "ZaiI");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _teachers_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../teachers.model */
      "ggZm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function FormDialogComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sno is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Script Type is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Script Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Position Type is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Holding Period is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Profit/Loss is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Account Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var FormDialogComponent = /*#__PURE__*/function () {
        function FormDialogComponent(dialogRef, data, teachersService, fb) {
          _classCallCheck(this, FormDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.teachersService = teachersService;
          this.fb = fb;
          this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]); // Set the defaults

          this.action = data.action;

          if (this.action === 'edit') {
            this.dialogTitle = data.teachers.scriptName;
            this.teachers = data.teachers;
          } else {
            this.dialogTitle = 'New P&LReport';
            this.teachers = new _teachers_model__WEBPACK_IMPORTED_MODULE_4__["Teachers"]({});
          }

          this.proForm = this.createContactForm();
        }

        _createClass(FormDialogComponent, [{
          key: "getErrorMessage",
          value: function getErrorMessage() {
            return this.formControl.hasError('required') ? 'Required field' : this.formControl.hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "createContactForm",
          value: function createContactForm() {
            return this.fb.group({
              id: [this.teachers.id],
              sno: [this.teachers.sno],
              // email: [
              //   this.teachers.email,
              //   [Validators.required, Validators.email, Validators.minLength(5)],
              // ],
              date: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.teachers.date, 'yyyy-MM-dd', 'en'), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              scriptType: [this.teachers.scriptType],
              scriptName: [this.teachers.scriptName],
              positionType: [this.teachers.positionType],
              holdingPeriod: [this.teachers.holdingPeriod],
              profitLoss: [this.teachers.profitLoss],
              accountName: [this.teachers.accountName]
            });
          }
        }, {
          key: "submit",
          value: function submit() {// emppty stuff
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "confirmAdd",
          value: function confirmAdd() {
            this.teachersService.addTeachers(this.proForm.getRawValue());
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FormDialogComponent;
      }();

      FormDialogComponent.ɵfac = function FormDialogComponent_Factory(t) {
        return new (t || FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_teachers_service__WEBPACK_IMPORTED_MODULE_2__["TeachersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      FormDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormDialogComponent,
        selectors: [["app-form-dialog"]],
        decls: 106,
        vars: 27,
        consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "sno", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["formControlName", "scriptType", "required", ""], [3, "value"], ["formControlName", "scriptName", "required", ""], ["formControlName", "positionType", "required", ""], ["matInput", "", "formControlName", "holdingPeriod", "required", ""], ["matInput", "", "formControlName", "profitLoss", "required", ""], ["matInput", "", "formControlName", "accountName", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]],
        template: function FormDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_7_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormDialogComponent_Template_form_ngSubmit_11_listener() {
              return ctx.submit;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "S.NO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "note");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FormDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-datepicker-toggle", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-datepicker", null, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FormDialogComponent_mat_error_29_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Script Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Holdings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Futures ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Options ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, FormDialogComponent_mat_error_42_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Script Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Holdings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Futures ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Options ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, FormDialogComponent_mat_error_54_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Position Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Buy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Sell ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Long ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Short ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Call ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Put ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, FormDialogComponent_mat_error_73_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Holding Period");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "note");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, FormDialogComponent_mat_error_81_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Profit/Loss");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "note");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, FormDialogComponent_mat_error_90_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Account Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, FormDialogComponent_mat_error_98_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_102_listener() {
              return ctx.confirmAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_104_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.proForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proForm.get("sno"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proForm.get("date"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Holdings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Futures");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proForm.get("status"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Holdings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Futures");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proForm.get("scriptName"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Buy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Sell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Long");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Short");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Call");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Put");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proForm.get("scriptName"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proForm.get("holdingPeriod"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proForm.get("profitLoss"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proForm.get("accountName"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.submit)("disabled", !ctx.proForm.valid)("mat-dialog-close", 1);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BscmVwb3J0L2FsbC1wbHJlcG9ydC9kaWFsb2dzL2Zvcm0tZGlhbG9nL2Zvcm0tZGlhbG9nLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-form-dialog',
            templateUrl: './form-dialog.component.html',
            styleUrls: ['./form-dialog.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _teachers_service__WEBPACK_IMPORTED_MODULE_2__["TeachersService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jofC":
    /*!*********************************************!*\
      !*** ./src/app/plreport/plreport.module.ts ***!
      \*********************************************/

    /*! exports provided: PlreportModule */

    /***/
    function jofC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlreportModule", function () {
        return PlreportModule;
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


      var _plreport_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./plreport-routing.module */
      "4Jsn");
      /* harmony import */


      var _all_plreport_all_plreport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./all-plreport/all-plreport.component */
      "7aSK");
      /* harmony import */


      var _all_plreport_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./all-plreport/dialogs/delete/delete.component */
      "MC82");
      /* harmony import */


      var _all_plreport_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./all-plreport/dialogs/form-dialog/form-dialog.component */
      "ihK0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-material-file-input */
      "7ZcW");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _all_plreport_teachers_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./all-plreport/teachers.service */
      "ZaiI");
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ngx-echarts */
      "DKVz");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");

      var PlreportModule = function PlreportModule() {
        _classCallCheck(this, PlreportModule);
      };

      PlreportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PlreportModule
      });
      PlreportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PlreportModule_Factory(t) {
          return new (t || PlreportModule)();
        },
        providers: [_all_plreport_teachers_service__WEBPACK_IMPORTED_MODULE_24__["TeachersService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _plreport_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlreportRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_20__["MaterialFileInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_25__["NgxEchartsModule"].forRoot({
          echarts: function echarts() {
            return __webpack_require__.e(
            /*! import() | echarts */
            "echarts").then(__webpack_require__.t.bind(null,
            /*! echarts */
            "MT78", 7));
          }
        }), ng_apexcharts__WEBPACK_IMPORTED_MODULE_26__["NgApexchartsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlreportModule, {
          declarations: [_all_plreport_all_plreport_component__WEBPACK_IMPORTED_MODULE_3__["AllPlreportComponent"], _all_plreport_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_4__["DeleteDialogComponent"], _all_plreport_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FormDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _plreport_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlreportRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_20__["MaterialFileInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_25__["NgxEchartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_26__["NgApexchartsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlreportModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_all_plreport_all_plreport_component__WEBPACK_IMPORTED_MODULE_3__["AllPlreportComponent"], _all_plreport_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_4__["DeleteDialogComponent"], _all_plreport_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FormDialogComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _plreport_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlreportRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_20__["MaterialFileInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_25__["NgxEchartsModule"].forRoot({
              echarts: function echarts() {
                return __webpack_require__.e(
                /*! import() | echarts */
                "echarts").then(__webpack_require__.t.bind(null,
                /*! echarts */
                "MT78", 7));
              }
            }), ng_apexcharts__WEBPACK_IMPORTED_MODULE_26__["NgApexchartsModule"]],
            providers: [_all_plreport_teachers_service__WEBPACK_IMPORTED_MODULE_24__["TeachersService"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=plreport-plreport-module-es5.js.map