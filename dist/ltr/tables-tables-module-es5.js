(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"], {
    /***/
    "PRlH":
    /*!*************************************************!*\
      !*** ./src/app/tables/tables-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: TablesRoutingModule */

    /***/
    function PRlH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function () {
        return TablesRoutingModule;
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


      var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic-table/basic-table.component */
      "us77");
      /* harmony import */


      var _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ngx-datatable/ngx-datatable.component */
      "p95r");
      /* harmony import */


      var _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./material-table/material-table.component */
      "vEQH");

      var routes = [{
        path: '',
        redirectTo: 'basic-tables',
        pathMatch: 'full'
      }, {
        path: 'basic-tables',
        component: _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_2__["BasicTableComponent"]
      }, {
        path: 'material-tables',
        component: _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__["MaterialTableComponent"]
      }, {
        path: 'ngx-datatable',
        component: _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableComponent"]
      }];

      var TablesRoutingModule = function TablesRoutingModule() {
        _classCallCheck(this, TablesRoutingModule);
      };

      TablesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TablesRoutingModule
      });
      TablesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TablesRoutingModule_Factory(t) {
          return new (t || TablesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TablesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TablesRoutingModule, [{
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
    "lDzL":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js ***!
      \**********************************************************************************************/

    /*! exports provided: ClickType, ColumnChangesService, ColumnMode, ContextmenuType, DataTableBodyCellComponent, DataTableBodyComponent, DataTableBodyRowComponent, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableFooterComponent, DataTableFooterTemplateDirective, DataTableHeaderCellComponent, DataTableHeaderComponent, DataTablePagerComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DataTableSummaryRowComponent, DatatableComponent, DatatableFooterDirective, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, DimensionsHelper, DraggableDirective, Keys, LongPressDirective, NgxDatatableModule, OrderableDirective, ProgressBarComponent, ResizeableDirective, RowHeightCache, ScrollbarHelper, ScrollerComponent, SelectionType, SortDirection, SortType, VisibilityDirective, adjustColumnWidths, camelCase, columnGroupWidths, columnTotalWidth, columnsByPin, columnsByPinArr, columnsTotalWidth, deCamelCase, deepValueGetter, elementsFromPoint, emptyStringGetter, forceFillColumnWidths, getTotalFlexGrow, getVendorPrefixedName, getterForProp, groupRowsByParents, id, isNullOrUndefined, nextSortDir, numericIndexGetter, optionalGetterForProp, orderByComparator, selectRows, selectRowsBetween, setColumnDefaults, shallowValueGetter, sortRows, throttle, throttleable, translateTemplates, translateXY, ɵ0 */

    /***/
    function lDzL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClickType", function () {
        return ClickType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColumnChangesService", function () {
        return ColumnChangesService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColumnMode", function () {
        return ColumnMode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContextmenuType", function () {
        return ContextmenuType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableBodyCellComponent", function () {
        return DataTableBodyCellComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableBodyComponent", function () {
        return DataTableBodyComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableBodyRowComponent", function () {
        return DataTableBodyRowComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableColumnCellDirective", function () {
        return DataTableColumnCellDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableColumnCellTreeToggle", function () {
        return DataTableColumnCellTreeToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableColumnDirective", function () {
        return DataTableColumnDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableColumnHeaderDirective", function () {
        return DataTableColumnHeaderDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableFooterComponent", function () {
        return DataTableFooterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableFooterTemplateDirective", function () {
        return DataTableFooterTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableHeaderCellComponent", function () {
        return DataTableHeaderCellComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableHeaderComponent", function () {
        return DataTableHeaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTablePagerComponent", function () {
        return DataTablePagerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableRowWrapperComponent", function () {
        return DataTableRowWrapperComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableSelectionComponent", function () {
        return DataTableSelectionComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableSummaryRowComponent", function () {
        return DataTableSummaryRowComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableComponent", function () {
        return DatatableComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableFooterDirective", function () {
        return DatatableFooterDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderDirective", function () {
        return DatatableGroupHeaderDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderTemplateDirective", function () {
        return DatatableGroupHeaderTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableRowDetailDirective", function () {
        return DatatableRowDetailDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableRowDetailTemplateDirective", function () {
        return DatatableRowDetailTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DimensionsHelper", function () {
        return DimensionsHelper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DraggableDirective", function () {
        return DraggableDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Keys", function () {
        return Keys;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LongPressDirective", function () {
        return LongPressDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDatatableModule", function () {
        return NgxDatatableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderableDirective", function () {
        return OrderableDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
        return ProgressBarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResizeableDirective", function () {
        return ResizeableDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RowHeightCache", function () {
        return RowHeightCache;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollbarHelper", function () {
        return ScrollbarHelper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function () {
        return ScrollerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectionType", function () {
        return SelectionType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SortDirection", function () {
        return SortDirection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SortType", function () {
        return SortType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function () {
        return VisibilityDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "adjustColumnWidths", function () {
        return adjustColumnWidths;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "camelCase", function () {
        return camelCase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "columnGroupWidths", function () {
        return columnGroupWidths;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "columnTotalWidth", function () {
        return columnTotalWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "columnsByPin", function () {
        return columnsByPin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "columnsByPinArr", function () {
        return columnsByPinArr;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "columnsTotalWidth", function () {
        return columnsTotalWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deCamelCase", function () {
        return deCamelCase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deepValueGetter", function () {
        return deepValueGetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "elementsFromPoint", function () {
        return elementsFromPoint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "emptyStringGetter", function () {
        return emptyStringGetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "forceFillColumnWidths", function () {
        return forceFillColumnWidths;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTotalFlexGrow", function () {
        return getTotalFlexGrow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getVendorPrefixedName", function () {
        return getVendorPrefixedName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getterForProp", function () {
        return getterForProp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "groupRowsByParents", function () {
        return groupRowsByParents;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "id", function () {
        return id;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function () {
        return isNullOrUndefined;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "nextSortDir", function () {
        return nextSortDir;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "numericIndexGetter", function () {
        return numericIndexGetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "optionalGetterForProp", function () {
        return optionalGetterForProp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "orderByComparator", function () {
        return orderByComparator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectRows", function () {
        return selectRows;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectRowsBetween", function () {
        return selectRowsBetween;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setColumnDefaults", function () {
        return setColumnDefaults;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "shallowValueGetter", function () {
        return shallowValueGetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortRows", function () {
        return sortRows;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throttle", function () {
        return throttle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throttleable", function () {
        return throttleable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "translateTemplates", function () {
        return translateTemplates;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "translateXY", function () {
        return translateXY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Gets the width of the scrollbar.  Nesc for windows
       * http://stackoverflow.com/a/13382873/888165
       */


      var _c0 = ["*"];

      function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-progress");
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-summary-row", 9);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-body-row", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r12.onTreeAction(group_r7);
          })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return _r1.onActivate($event, ctx_r15.indexes.first + i_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isSelected", _r1.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7 && group_r7.treeStatus);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-body-row", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var i_r20 = ctx.index;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return _r1.onActivate($event, i_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r19 = ctx.$implicit;

          var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isSelected", _r1.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
        }

        if (rf & 2) {
          var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r7.value)("ngForTrackBy", ctx_r11.rowTrackingFn);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r25.rowContextmenu.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7 && group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7 && group_r7[i_r8]));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r10);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-summary-row", 16);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-scroller", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.onBodyScroll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
        }
      }

      function DataTableBodyComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 17);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r3.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-header-cell", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var column_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r4.onColumnResized($event, column_r3);
          })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r6.onLongPressStart($event);
          })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7.onLongPressEnd($event);
          })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r8.onSort($event);
          })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r9.select.emit($event);
          })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r10.columnContextmenu.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("sortUnsetIcon", ctx_r2.sortUnsetIcon)("allRowsSelected", ctx_r2.allRowsSelected);
        }
      }

      function DataTableHeaderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 19, "datatable-header-cell", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var colGroup_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("datatable-row-" + colGroup_r1.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
        }
      }

      function DatatableComponent_datatable_header_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-header", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.onColumnSort($event);
          })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.onColumnResize($event);
          })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.onColumnReorder($event);
          })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.onHeaderSelect($event);
          })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.onColumnContextmenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 15, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("sortUnsetIcon", ctx_r0.cssClasses.sortUnset)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
        }
      }

      function DatatableComponent_datatable_footer_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-footer", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.onFooterPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
        }
      }

      function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) {}

      function DataTableHeaderCellComponent_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
        }
      }

      function DataTableHeaderCellComponent_label_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.select.emit(!ctx_r5.allRowsSelected);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r1.allRowsSelected);
        }
      }

      function DataTableHeaderCellComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.onSort();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) {}

      function DataTableHeaderCellComponent_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
        }
      }

      function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) {}

      var _c1 = function _c1(a0, a1, a2, a3, a4) {
        return {
          rowCount: a0,
          pageSize: a1,
          selectedCount: a2,
          curPage: a3,
          offset: a4
        };
      };

      function DataTableFooterComponent_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c1, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
        }
      }

      function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
        }
      }

      function DataTableFooterComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
        }
      }

      function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-pager", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.page.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "selected-count": a0
        };
      };

      function DataTablePagerComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var pg_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.selectPage(pg_r1.number);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pg_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", pg_r1.number === ctx_r0.page);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "page " + pg_r1.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pg_r1.text, " ");
        }
      }

      function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-body-cell", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ii_r5 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r6.onActivate($event, ii_r5);
          })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r8.onTreeAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
        }
      }

      function DataTableBodyRowComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var colGroup_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r1.type, " datatable-row-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
        }
      }

      function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) {}

      function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
        }
      }

      function DataTableRowWrapperComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.getGroupHeaderStyle());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
        }
      }

      function DataTableRowWrapperComponent_ng_content_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
        }
      }

      function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) {}

      function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
        }
      }

      function DataTableRowWrapperComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r2.detailRowHeight, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
        }
      }

      var _c3 = ["cellTemplate"];

      function DataTableBodyCellComponent_label_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.onCheckboxChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.isSelected);
        }
      }

      function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 11);
        }
      }

      function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 12);
        }
      }

      function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 13);
        }
      }

      function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r11.onTreeAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r6.treeStatus === "disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "collapsed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
        }
      }

      function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}

      var _c4 = function _c4(a0) {
        return {
          cellContext: a0
        };
      };

      function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c4, ctx_r7.cellContext));
        }
      }

      function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, undefined, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.column.treeToggleTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.column.treeToggleTemplate);
        }
      }

      function DataTableBodyCellComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 15);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) {}

      function DataTableBodyCellComponent_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
        }
      }

      function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-body-row", 1);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", -1);
        }
      }

      var ScrollbarHelper = /*#__PURE__*/function () {
        function ScrollbarHelper(document) {
          _classCallCheck(this, ScrollbarHelper);

          this.document = document;
          this.width = this.getWidth();
        }

        _createClass(ScrollbarHelper, [{
          key: "getWidth",
          value: function getWidth() {
            var outer = this.document.createElement('div');
            outer.style.visibility = 'hidden';
            outer.style.width = '100px';
            outer.style.msOverflowStyle = 'scrollbar';
            this.document.body.appendChild(outer);
            var widthNoScroll = outer.offsetWidth;
            outer.style.overflow = 'scroll';
            var inner = this.document.createElement('div');
            inner.style.width = '100%';
            outer.appendChild(inner);
            var widthWithScroll = inner.offsetWidth;
            outer.parentNode.removeChild(outer);
            return widthNoScroll - widthWithScroll;
          }
        }]);

        return ScrollbarHelper;
      }();

      ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) {
        return new (t || ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      ScrollbarHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ScrollbarHelper,
        factory: function factory(t) {
          return ScrollbarHelper.ɵfac(t);
        }
      });

      ScrollbarHelper.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      };

      ScrollbarHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], ScrollbarHelper);
      /**
       * Gets the width of the scrollbar.  Nesc for windows
       * http://stackoverflow.com/a/13382873/888165
       */

      var DimensionsHelper = /*#__PURE__*/function () {
        function DimensionsHelper() {
          _classCallCheck(this, DimensionsHelper);
        }

        _createClass(DimensionsHelper, [{
          key: "getDimensions",
          value: function getDimensions(element) {
            return element.getBoundingClientRect();
          }
        }]);

        return DimensionsHelper;
      }();

      DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) {
        return new (t || DimensionsHelper)();
      };

      DimensionsHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DimensionsHelper,
        factory: function factory(t) {
          return DimensionsHelper.ɵfac(t);
        }
      });
      /**
       * service to make DatatableComponent aware of changes to
       * input bindings of DataTableColumnDirective
       */

      var ColumnChangesService = /*#__PURE__*/function () {
        function ColumnChangesService() {
          _classCallCheck(this, ColumnChangesService);

          this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(ColumnChangesService, [{
          key: "onInputChange",
          value: function onInputChange() {
            this.columnInputChanges.next();
          }
        }, {
          key: "columnInputChanges$",
          get: function get() {
            return this.columnInputChanges.asObservable();
          }
        }]);

        return ColumnChangesService;
      }();

      ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) {
        return new (t || ColumnChangesService)();
      };

      ColumnChangesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ColumnChangesService,
        factory: function factory(t) {
          return ColumnChangesService.ɵfac(t);
        }
      });

      var DataTableFooterTemplateDirective = function DataTableFooterTemplateDirective(template) {
        _classCallCheck(this, DataTableFooterTemplateDirective);

        this.template = template;
      };

      DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) {
        return new (t || DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
      };

      DataTableFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DataTableFooterTemplateDirective,
        selectors: [["", "ngx-datatable-footer-template", ""]]
      });

      DataTableFooterTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      };
      /**
       * Visibility Observer Directive
       *
       * Usage:
       *
       * 		<div
       * 			visibilityObserver
       * 			(visible)="onVisible($event)">
       * 		</div>
       *
       */


      var VisibilityDirective = /*#__PURE__*/function () {
        function VisibilityDirective(element, zone) {
          _classCallCheck(this, VisibilityDirective);

          this.element = element;
          this.zone = zone;
          this.isVisible = false;
          this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(VisibilityDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.runCheck();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearTimeout(this.timeout);
          }
        }, {
          key: "onVisibilityChange",
          value: function onVisibilityChange() {
            var _this = this;

            // trigger zone recalc for columns
            this.zone.run(function () {
              _this.isVisible = true;

              _this.visible.emit(true);
            });
          }
        }, {
          key: "runCheck",
          value: function runCheck() {
            var _this2 = this;

            var check = function check() {
              // https://davidwalsh.name/offsetheight-visibility
              var _this2$element$native = _this2.element.nativeElement,
                  offsetHeight = _this2$element$native.offsetHeight,
                  offsetWidth = _this2$element$native.offsetWidth;

              if (offsetHeight && offsetWidth) {
                clearTimeout(_this2.timeout);

                _this2.onVisibilityChange();
              } else {
                clearTimeout(_this2.timeout);

                _this2.zone.runOutsideAngular(function () {
                  _this2.timeout = setTimeout(function () {
                    return check();
                  }, 50);
                });
              }
            };

            this.timeout = setTimeout(function () {
              return check();
            });
          }
        }]);

        return VisibilityDirective;
      }();

      VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) {
        return new (t || VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      VisibilityDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: VisibilityDirective,
        selectors: [["", "visibilityObserver", ""]],
        hostVars: 2,
        hostBindings: function VisibilityDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("visible", ctx.isVisible);
          }
        },
        outputs: {
          visible: "visible"
        }
      });

      VisibilityDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.visible')], VisibilityDirective.prototype, "isVisible", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], VisibilityDirective.prototype, "visible", void 0);
      /**
       * Draggable Directive for Angular2
       *
       * Inspiration:
       *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
       *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
       *
       */

      var DraggableDirective = /*#__PURE__*/function () {
        function DraggableDirective(element) {
          _classCallCheck(this, DraggableDirective);

          this.dragX = true;
          this.dragY = true;
          this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.isDragging = false;
          this.element = element.nativeElement;
        }

        _createClass(DraggableDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
              this.onMousedown(changes['dragEventTarget'].currentValue);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroySubscription();
          }
        }, {
          key: "onMouseup",
          value: function onMouseup(event) {
            if (!this.isDragging) return;
            this.isDragging = false;
            this.element.classList.remove('dragging');

            if (this.subscription) {
              this._destroySubscription();

              this.dragEnd.emit({
                event: event,
                element: this.element,
                model: this.dragModel
              });
            }
          }
        }, {
          key: "onMousedown",
          value: function onMousedown(event) {
            var _this3 = this;

            // we only want to drag the inner header text
            var isDragElm = event.target.classList.contains('draggable');

            if (isDragElm && (this.dragX || this.dragY)) {
              event.preventDefault();
              this.isDragging = true;
              var mouseDownPos = {
                x: event.clientX,
                y: event.clientY
              };
              var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup');
              this.subscription = mouseup.subscribe(function (ev) {
                return _this3.onMouseup(ev);
              });
              var mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseup)).subscribe(function (ev) {
                return _this3.move(ev, mouseDownPos);
              });
              this.subscription.add(mouseMoveSub);
              this.dragStart.emit({
                event: event,
                element: this.element,
                model: this.dragModel
              });
            }
          }
        }, {
          key: "move",
          value: function move(event, mouseDownPos) {
            if (!this.isDragging) return;
            var x = event.clientX - mouseDownPos.x;
            var y = event.clientY - mouseDownPos.y;
            if (this.dragX) this.element.style.left = "".concat(x, "px");
            if (this.dragY) this.element.style.top = "".concat(y, "px");
            this.element.classList.add('dragging');
            this.dragging.emit({
              event: event,
              element: this.element,
              model: this.dragModel
            });
          }
        }, {
          key: "_destroySubscription",
          value: function _destroySubscription() {
            if (this.subscription) {
              this.subscription.unsubscribe();
              this.subscription = undefined;
            }
          }
        }]);

        return DraggableDirective;
      }();

      DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
        return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DraggableDirective,
        selectors: [["", "draggable", ""]],
        inputs: {
          dragX: "dragX",
          dragY: "dragY",
          dragEventTarget: "dragEventTarget",
          dragModel: "dragModel"
        },
        outputs: {
          dragStart: "dragStart",
          dragging: "dragging",
          dragEnd: "dragEnd"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      DraggableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DraggableDirective.prototype, "dragEventTarget", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DraggableDirective.prototype, "dragModel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DraggableDirective.prototype, "dragX", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DraggableDirective.prototype, "dragY", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DraggableDirective.prototype, "dragStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DraggableDirective.prototype, "dragging", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DraggableDirective.prototype, "dragEnd", void 0);

      var ResizeableDirective = /*#__PURE__*/function () {
        function ResizeableDirective(element, renderer) {
          _classCallCheck(this, ResizeableDirective);

          this.renderer = renderer;
          this.resizeEnabled = true;
          this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.resizing = false;
          this.element = element.nativeElement;
        }

        _createClass(ResizeableDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var renderer2 = this.renderer;
            this.resizeHandle = renderer2.createElement('span');

            if (this.resizeEnabled) {
              renderer2.addClass(this.resizeHandle, 'resize-handle');
            } else {
              renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
            }

            renderer2.appendChild(this.element, this.resizeHandle);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroySubscription();

            if (this.renderer.destroyNode) {
              this.renderer.destroyNode(this.resizeHandle);
            } else if (this.resizeHandle) {
              this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
            }
          }
        }, {
          key: "onMouseup",
          value: function onMouseup() {
            this.resizing = false;

            if (this.subscription && !this.subscription.closed) {
              this._destroySubscription();

              this.resize.emit(this.element.clientWidth);
            }
          }
        }, {
          key: "onMousedown",
          value: function onMousedown(event) {
            var _this4 = this;

            var isHandle = event.target.classList.contains('resize-handle');
            var initialWidth = this.element.clientWidth;
            var mouseDownScreenX = event.screenX;

            if (isHandle) {
              event.stopPropagation();
              this.resizing = true;
              var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup');
              this.subscription = mouseup.subscribe(function (ev) {
                return _this4.onMouseup();
              });
              var mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseup)).subscribe(function (e) {
                return _this4.move(e, initialWidth, mouseDownScreenX);
              });
              this.subscription.add(mouseMoveSub);
            }
          }
        }, {
          key: "move",
          value: function move(event, initialWidth, mouseDownScreenX) {
            var movementX = event.screenX - mouseDownScreenX;
            var newWidth = initialWidth + movementX;
            var overMinWidth = !this.minWidth || newWidth >= this.minWidth;
            var underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;

            if (overMinWidth && underMaxWidth) {
              this.element.style.width = "".concat(newWidth, "px");
            }
          }
        }, {
          key: "_destroySubscription",
          value: function _destroySubscription() {
            if (this.subscription) {
              this.subscription.unsubscribe();
              this.subscription = undefined;
            }
          }
        }]);

        return ResizeableDirective;
      }();

      ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) {
        return new (t || ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
      };

      ResizeableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: ResizeableDirective,
        selectors: [["", "resizeable", ""]],
        hostVars: 2,
        hostBindings: function ResizeableDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) {
              return ctx.onMousedown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
          }
        },
        inputs: {
          resizeEnabled: "resizeEnabled",
          minWidth: "minWidth",
          maxWidth: "maxWidth"
        },
        outputs: {
          resize: "resize"
        }
      });

      ResizeableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResizeableDirective.prototype, "resizeEnabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResizeableDirective.prototype, "minWidth", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResizeableDirective.prototype, "maxWidth", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ResizeableDirective.prototype, "resize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])], ResizeableDirective.prototype, "onMousedown", null);

      var OrderableDirective = /*#__PURE__*/function () {
        function OrderableDirective(differs, document) {
          _classCallCheck(this, OrderableDirective);

          this.document = document;
          this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.differ = differs.find({}).create();
        }

        _createClass(OrderableDirective, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            // HACK: Investigate Better Way
            this.updateSubscriptions();
            this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.draggables.forEach(function (d) {
              d.dragStart.unsubscribe();
              d.dragging.unsubscribe();
              d.dragEnd.unsubscribe();
            });
          }
        }, {
          key: "updateSubscriptions",
          value: function updateSubscriptions() {
            var _this5 = this;

            var diffs = this.differ.diff(this.createMapDiffs());

            if (diffs) {
              var subscribe = function subscribe(_ref) {
                var currentValue = _ref.currentValue,
                    previousValue = _ref.previousValue;
                unsubscribe({
                  previousValue: previousValue
                });

                if (currentValue) {
                  currentValue.dragStart.subscribe(_this5.onDragStart.bind(_this5));
                  currentValue.dragging.subscribe(_this5.onDragging.bind(_this5));
                  currentValue.dragEnd.subscribe(_this5.onDragEnd.bind(_this5));
                }
              };

              var unsubscribe = function unsubscribe(_ref2) {
                var previousValue = _ref2.previousValue;

                if (previousValue) {
                  previousValue.dragStart.unsubscribe();
                  previousValue.dragging.unsubscribe();
                  previousValue.dragEnd.unsubscribe();
                }
              };

              diffs.forEachAddedItem(subscribe); // diffs.forEachChangedItem(subscribe.bind(this));

              diffs.forEachRemovedItem(unsubscribe);
            }
          }
        }, {
          key: "onDragStart",
          value: function onDragStart() {
            this.positions = {};
            var i = 0;

            var _iterator = _createForOfIteratorHelper(this.draggables.toArray()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var dragger = _step.value;
                var elm = dragger.element;
                var left = parseInt(elm.offsetLeft.toString(), 0);
                this.positions[dragger.dragModel.prop] = {
                  left: left,
                  right: left + parseInt(elm.offsetWidth.toString(), 0),
                  index: i++,
                  element: elm
                };
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "onDragging",
          value: function onDragging(_ref3) {
            var element = _ref3.element,
                model = _ref3.model,
                event = _ref3.event;
            var prevPos = this.positions[model.prop];
            var target = this.isTarget(model, event);

            if (target) {
              if (this.lastDraggingIndex !== target.i) {
                this.targetChanged.emit({
                  prevIndex: this.lastDraggingIndex,
                  newIndex: target.i,
                  initialIndex: prevPos.index
                });
                this.lastDraggingIndex = target.i;
              }
            } else if (this.lastDraggingIndex !== prevPos.index) {
              this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: prevPos.index
              });
              this.lastDraggingIndex = prevPos.index;
            }
          }
        }, {
          key: "onDragEnd",
          value: function onDragEnd(_ref4) {
            var element = _ref4.element,
                model = _ref4.model,
                event = _ref4.event;
            var prevPos = this.positions[model.prop];
            var target = this.isTarget(model, event);

            if (target) {
              this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model: model
              });
            }

            this.lastDraggingIndex = undefined;
            element.style.left = 'auto';
          }
        }, {
          key: "isTarget",
          value: function isTarget(model, event) {
            var _this6 = this;

            var i = 0;
            var x = event.x || event.clientX;
            var y = event.y || event.clientY;
            var targets = this.document.elementsFromPoint(x, y);

            var _loop = function _loop(prop) {
              // current column position which throws event.
              var pos = _this6.positions[prop]; // since we drag the inner span, we need to find it in the elements at the cursor

              if (model.prop !== prop && targets.find(function (el) {
                return el === pos.element;
              })) {
                return {
                  v: {
                    pos: pos,
                    i: i
                  }
                };
              }

              i++;
            };

            for (var prop in this.positions) {
              var _ret = _loop(prop);

              if (typeof _ret === "object") return _ret.v;
            }
          }
        }, {
          key: "createMapDiffs",
          value: function createMapDiffs() {
            return this.draggables.toArray().reduce(function (acc, curr) {
              acc[curr.dragModel.$$id] = curr;
              return acc;
            }, {});
          }
        }]);

        return OrderableDirective;
      }();

      OrderableDirective.ɵfac = function OrderableDirective_Factory(t) {
        return new (t || OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      OrderableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: OrderableDirective,
        selectors: [["", "orderable", ""]],
        contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DraggableDirective, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
          }
        },
        outputs: {
          reorder: "reorder",
          targetChanged: "targetChanged"
        }
      });

      OrderableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], OrderableDirective.prototype, "reorder", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], OrderableDirective.prototype, "targetChanged", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(DraggableDirective, {
        descendants: true
      })], OrderableDirective.prototype, "draggables", void 0);
      OrderableDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], OrderableDirective);

      var LongPressDirective = /*#__PURE__*/function () {
        function LongPressDirective() {
          _classCallCheck(this, LongPressDirective);

          this.pressEnabled = true;
          this.duration = 500;
          this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.mouseX = 0;
          this.mouseY = 0;
        }

        _createClass(LongPressDirective, [{
          key: "onMouseDown",
          value: function onMouseDown(event) {
            var _this7 = this;

            // don't do right/middle clicks
            if (event.which !== 1 || !this.pressEnabled) return; // don't start drag if its on resize handle

            var target = event.target;
            if (target.classList.contains('resize-handle')) return;
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
            this.pressing = true;
            this.isLongPressing = false;
            var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe(function (ev) {
              return _this7.onMouseup();
            });
            this.timeout = setTimeout(function () {
              _this7.isLongPressing = true;

              _this7.longPressStart.emit({
                event: event,
                model: _this7.pressModel
              });

              _this7.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseup)).subscribe(function (mouseEvent) {
                return _this7.onMouseMove(mouseEvent);
              }));

              _this7.loop(event);
            }, this.duration);
            this.loop(event);
          }
        }, {
          key: "onMouseMove",
          value: function onMouseMove(event) {
            if (this.pressing && !this.isLongPressing) {
              var xThres = Math.abs(event.clientX - this.mouseX) > 10;
              var yThres = Math.abs(event.clientY - this.mouseY) > 10;

              if (xThres || yThres) {
                this.endPress();
              }
            }
          }
        }, {
          key: "loop",
          value: function loop(event) {
            var _this8 = this;

            if (this.isLongPressing) {
              this.timeout = setTimeout(function () {
                _this8.longPressing.emit({
                  event: event,
                  model: _this8.pressModel
                });

                _this8.loop(event);
              }, 50);
            }
          }
        }, {
          key: "endPress",
          value: function endPress() {
            clearTimeout(this.timeout);
            this.isLongPressing = false;
            this.pressing = false;

            this._destroySubscription();

            this.longPressEnd.emit({
              model: this.pressModel
            });
          }
        }, {
          key: "onMouseup",
          value: function onMouseup() {
            this.endPress();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroySubscription();
          }
        }, {
          key: "_destroySubscription",
          value: function _destroySubscription() {
            if (this.subscription) {
              this.subscription.unsubscribe();
              this.subscription = undefined;
            }
          }
        }, {
          key: "press",
          get: function get() {
            return this.pressing;
          }
        }, {
          key: "isLongPress",
          get: function get() {
            return this.isLongPressing;
          }
        }]);

        return LongPressDirective;
      }();

      LongPressDirective.ɵfac = function LongPressDirective_Factory(t) {
        return new (t || LongPressDirective)();
      };

      LongPressDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: LongPressDirective,
        selectors: [["", "long-press", ""]],
        hostVars: 4,
        hostBindings: function LongPressDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) {
              return ctx.onMouseDown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
          }
        },
        inputs: {
          pressEnabled: "pressEnabled",
          duration: "duration",
          pressModel: "pressModel"
        },
        outputs: {
          longPressStart: "longPressStart",
          longPressing: "longPressing",
          longPressEnd: "longPressEnd"
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LongPressDirective.prototype, "pressEnabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LongPressDirective.prototype, "pressModel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LongPressDirective.prototype, "duration", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LongPressDirective.prototype, "longPressStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LongPressDirective.prototype, "longPressing", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LongPressDirective.prototype, "longPressEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.press')], LongPressDirective.prototype, "press", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.longpress')], LongPressDirective.prototype, "isLongPress", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])], LongPressDirective.prototype, "onMouseDown", null);

      var ScrollerComponent = /*#__PURE__*/function () {
        function ScrollerComponent(ngZone, element, renderer) {
          _classCallCheck(this, ScrollerComponent);

          this.ngZone = ngZone;
          this.renderer = renderer;
          this.scrollbarV = false;
          this.scrollbarH = false;
          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.scrollYPos = 0;
          this.scrollXPos = 0;
          this.prevScrollYPos = 0;
          this.prevScrollXPos = 0;
          this._scrollEventListener = null;
          this.element = element.nativeElement;
        }

        _createClass(ScrollerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // manual bind so we don't always listen
            if (this.scrollbarV || this.scrollbarH) {
              var renderer = this.renderer;
              this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
              this._scrollEventListener = this.onScrolled.bind(this);
              this.parentElement.addEventListener('scroll', this._scrollEventListener);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._scrollEventListener) {
              this.parentElement.removeEventListener('scroll', this._scrollEventListener);
              this._scrollEventListener = null;
            }
          }
        }, {
          key: "setOffset",
          value: function setOffset(offsetY) {
            if (this.parentElement) {
              this.parentElement.scrollTop = offsetY;
            }
          }
        }, {
          key: "onScrolled",
          value: function onScrolled(event) {
            var _this9 = this;

            var dom = event.currentTarget;
            requestAnimationFrame(function () {
              _this9.scrollYPos = dom.scrollTop;
              _this9.scrollXPos = dom.scrollLeft;

              _this9.updateOffset();
            });
          }
        }, {
          key: "updateOffset",
          value: function updateOffset() {
            var direction;

            if (this.scrollYPos < this.prevScrollYPos) {
              direction = 'down';
            } else if (this.scrollYPos > this.prevScrollYPos) {
              direction = 'up';
            }

            this.scroll.emit({
              direction: direction,
              scrollYPos: this.scrollYPos,
              scrollXPos: this.scrollXPos
            });
            this.prevScrollYPos = this.scrollYPos;
            this.prevScrollXPos = this.scrollXPos;
          }
        }]);

        return ScrollerComponent;
      }();

      ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) {
        return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
      };

      ScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ScrollerComponent,
        selectors: [["datatable-scroller"]],
        hostAttrs: [1, "datatable-scroll"],
        hostVars: 4,
        hostBindings: function ScrollerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
          }
        },
        inputs: {
          scrollbarV: "scrollbarV",
          scrollbarH: "scrollbarH",
          scrollHeight: "scrollHeight",
          scrollWidth: "scrollWidth"
        },
        outputs: {
          scroll: "scroll"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function ScrollerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      ScrollerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScrollerComponent.prototype, "scrollbarV", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScrollerComponent.prototype, "scrollbarH", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height.px'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScrollerComponent.prototype, "scrollHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width.px'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScrollerComponent.prototype, "scrollWidth", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ScrollerComponent.prototype, "scroll", void 0);

      var DatatableGroupHeaderTemplateDirective = function DatatableGroupHeaderTemplateDirective(template) {
        _classCallCheck(this, DatatableGroupHeaderTemplateDirective);

        this.template = template;
      };

      DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) {
        return new (t || DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
      };

      DatatableGroupHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DatatableGroupHeaderTemplateDirective,
        selectors: [["", "ngx-datatable-group-header-template", ""]]
      });

      DatatableGroupHeaderTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      };

      var DatatableGroupHeaderDirective = /*#__PURE__*/function () {
        function DatatableGroupHeaderDirective() {
          _classCallCheck(this, DatatableGroupHeaderDirective);

          /**
           * Row height is required when virtual scroll is enabled.
           */
          this.rowHeight = 0;
          /**
           * Track toggling of group visibility
           */

          this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(DatatableGroupHeaderDirective, [{
          key: "toggleExpandGroup",

          /**
           * Toggle the expansion of a group
           */
          value: function toggleExpandGroup(group) {
            this.toggle.emit({
              type: 'group',
              value: group
            });
          }
          /**
           * Expand all groups
           */

        }, {
          key: "expandAllGroups",
          value: function expandAllGroups() {
            this.toggle.emit({
              type: 'all',
              value: true
            });
          }
          /**
           * Collapse all groups
           */

        }, {
          key: "collapseAllGroups",
          value: function collapseAllGroups() {
            this.toggle.emit({
              type: 'all',
              value: false
            });
          }
        }, {
          key: "template",
          get: function get() {
            return this._templateInput || this._templateQuery;
          }
        }]);

        return DatatableGroupHeaderDirective;
      }();

      DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) {
        return new (t || DatatableGroupHeaderDirective)();
      };

      DatatableGroupHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DatatableGroupHeaderDirective,
        selectors: [["ngx-datatable-group-header"]],
        contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DatatableGroupHeaderTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
          }
        },
        inputs: {
          rowHeight: "rowHeight",
          _templateInput: ["template", "_templateInput"]
        },
        outputs: {
          toggle: "toggle"
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableGroupHeaderDirective.prototype, "rowHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('template')], DatatableGroupHeaderDirective.prototype, "_templateInput", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableGroupHeaderTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
        "static": true
      })], DatatableGroupHeaderDirective.prototype, "_templateQuery", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableGroupHeaderDirective.prototype, "toggle", void 0);
      /**
       * Always returns the empty string ''
       */

      function emptyStringGetter() {
        return '';
      }
      /**
       * Returns the appropriate getter function for this kind of prop.
       * If prop == null, returns the emptyStringGetter.
       */


      function getterForProp(prop) {
        if (prop == null) {
          return emptyStringGetter;
        }

        if (typeof prop === 'number') {
          return numericIndexGetter;
        } else {
          // deep or simple
          if (prop.indexOf('.') !== -1) {
            return deepValueGetter;
          } else {
            return shallowValueGetter;
          }
        }
      }
      /**
       * Returns the value at this numeric index.
       * @param row array of values
       * @param index numeric index
       * @returns any or '' if invalid index
       */


      function numericIndexGetter(row, index) {
        if (row == null) {
          return '';
        } // mimic behavior of deepValueGetter


        if (!row || index == null) {
          return row;
        }

        var value = row[index];

        if (value == null) {
          return '';
        }

        return value;
      }
      /**
       * Returns the value of a field.
       * (more efficient than deepValueGetter)
       * @param obj object containing the field
       * @param fieldName field name string
       */


      function shallowValueGetter(obj, fieldName) {
        if (obj == null) {
          return '';
        }

        if (!obj || !fieldName) {
          return obj;
        }

        var value = obj[fieldName];

        if (value == null) {
          return '';
        }

        return value;
      }
      /**
       * Returns a deep object given a string. zoo['animal.type']
       */


      function deepValueGetter(obj, path) {
        if (obj == null) {
          return '';
        }

        if (!obj || !path) {
          return obj;
        } // check if path matches a root-level field
        // { "a.b.c": 123 }


        var current = obj[path];

        if (current !== undefined) {
          return current;
        }

        current = obj;
        var split = path.split('.');

        if (split.length) {
          for (var i = 0; i < split.length; i++) {
            current = current[split[i]]; // if found undefined, return empty string

            if (current === undefined || current === null) {
              return '';
            }
          }
        }

        return current;
      }

      function optionalGetterForProp(prop) {
        return prop && function (row) {
          return getterForProp(prop)(row, prop);
        };
      }
      /**
       * This functions rearrange items by their parents
       * Also sets the level value to each of the items
       *
       * Note: Expecting each item has a property called parentId
       * Note: This algorithm will fail if a list has two or more items with same ID
       * NOTE: This algorithm will fail if there is a deadlock of relationship
       *
       * For example,
       *
       * Input
       *
       * id -> parent
       * 1  -> 0
       * 2  -> 0
       * 3  -> 1
       * 4  -> 1
       * 5  -> 2
       * 7  -> 8
       * 6  -> 3
       *
       *
       * Output
       * id -> level
       * 1      -> 0
       * --3    -> 1
       * ----6  -> 2
       * --4    -> 1
       * 2      -> 0
       * --5    -> 1
       * 7     -> 8
       *
       *
       * @param rows
       *
       */


      function groupRowsByParents(rows, from, to) {
        if (from && to) {
          var nodeById = {};
          var l = rows.length;
          var node = null;
          nodeById[0] = new TreeNode(); // that's the root node

          var uniqIDs = rows.reduce(function (arr, item) {
            var toValue = to(item);

            if (arr.indexOf(toValue) === -1) {
              arr.push(toValue);
            }

            return arr;
          }, []);

          for (var i = 0; i < l; i++) {
            // make TreeNode objects for each item
            nodeById[to(rows[i])] = new TreeNode(rows[i]);
          }

          for (var _i = 0; _i < l; _i++) {
            // link all TreeNode objects
            node = nodeById[to(rows[_i])];
            var parent = 0;
            var fromValue = from(node.row);

            if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
              parent = fromValue;
            }

            node.parent = nodeById[parent];
            node.row['level'] = node.parent.row['level'] + 1;
            node.parent.children.push(node);
          }

          var resolvedRows = [];
          nodeById[0].flatten(function () {
            resolvedRows = [].concat(_toConsumableArray(resolvedRows), [this.row]);
          }, true);
          return resolvedRows;
        } else {
          return rows;
        }
      }

      var TreeNode = /*#__PURE__*/function () {
        function TreeNode() {
          var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          _classCallCheck(this, TreeNode);

          if (!row) {
            row = {
              level: -1,
              treeStatus: 'expanded'
            };
          }

          this.row = row;
          this.parent = null;
          this.children = [];
        }

        _createClass(TreeNode, [{
          key: "flatten",
          value: function flatten(f, recursive) {
            if (this.row['treeStatus'] === 'expanded') {
              for (var i = 0, l = this.children.length; i < l; i++) {
                var child = this.children[i];
                f.apply(child, Array.prototype.slice.call(arguments, 2));
                if (recursive) child.flatten.apply(child, arguments);
              }
            }
          }
        }]);

        return TreeNode;
      }();
      /**
       * Converts strings from something to camel case
       * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
       */


      function camelCase(str) {
        // Replace special characters with a space
        str = str.replace(/[^a-zA-Z0-9 ]/g, ' '); // put a space before an uppercase letter

        str = str.replace(/([a-z](?=[A-Z]))/g, '$1 '); // Lower case first character and some other stuff

        str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase(); // uppercase characters preceded by a space or number

        str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
          return b.trim() + c.toUpperCase();
        });
        return str;
      }
      /**
       * Converts strings from camel case to words
       * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
       */


      function deCamelCase(str) {
        return str.replace(/([A-Z])/g, function (match) {
          return " ".concat(match);
        }).replace(/^./, function (match) {
          return match.toUpperCase();
        });
      }
      /**
       * Creates a unique object id.
       * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
       */


      function id() {
        return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
      }
      /**
       * Sets the column defaults
       */


      function setColumnDefaults(columns) {
        if (!columns) return; // Only one column should hold the tree view
        // Thus if multiple columns are provided with
        // isTreeColumn as true we take only the first one

        var treeColumnFound = false;

        var _iterator2 = _createForOfIteratorHelper(columns),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var column = _step2.value;

            if (!column.$$id) {
              column.$$id = id();
            } // prop can be numeric; zero is valid not a missing prop
            // translate name => prop


            if (isNullOrUndefined(column.prop) && column.name) {
              column.prop = camelCase(column.name);
            }

            if (!column.$$valueGetter) {
              column.$$valueGetter = getterForProp(column.prop);
            } // format props if no name passed


            if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
              column.name = deCamelCase(String(column.prop));
            }

            if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
              column.name = ''; // Fixes IE and Edge displaying `null`
            }

            if (!column.hasOwnProperty('resizeable')) {
              column.resizeable = true;
            }

            if (!column.hasOwnProperty('sortable')) {
              column.sortable = true;
            }

            if (!column.hasOwnProperty('draggable')) {
              column.draggable = true;
            }

            if (!column.hasOwnProperty('canAutoResize')) {
              column.canAutoResize = true;
            }

            if (!column.hasOwnProperty('width')) {
              column.width = 150;
            }

            if (!column.hasOwnProperty('isTreeColumn')) {
              column.isTreeColumn = false;
            } else {
              if (column.isTreeColumn && !treeColumnFound) {
                // If the first column with isTreeColumn is true found
                // we mark that treeCoulmn is found
                treeColumnFound = true;
              } else {
                // After that isTreeColumn property for any other column
                // will be set as false
                column.isTreeColumn = false;
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      function isNullOrUndefined(value) {
        return value === null || value === undefined;
      }
      /**
       * Translates templates definitions to objects
       */


      function translateTemplates(templates) {
        var result = [];

        var _iterator3 = _createForOfIteratorHelper(templates),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var temp = _step3.value;
            var col = {};
            var props = Object.getOwnPropertyNames(temp);

            var _iterator4 = _createForOfIteratorHelper(props),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var prop = _step4.value;
                col[prop] = temp[prop];
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            if (temp.headerTemplate) {
              col.headerTemplate = temp.headerTemplate;
            }

            if (temp.cellTemplate) {
              col.cellTemplate = temp.cellTemplate;
            }

            if (temp.summaryFunc) {
              col.summaryFunc = temp.summaryFunc;
            }

            if (temp.summaryTemplate) {
              col.summaryTemplate = temp.summaryTemplate;
            }

            result.push(col);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return result;
      }

      var ColumnMode;

      (function (ColumnMode) {
        ColumnMode["standard"] = "standard";
        ColumnMode["flex"] = "flex";
        ColumnMode["force"] = "force";
      })(ColumnMode || (ColumnMode = {}));

      var SelectionType;

      (function (SelectionType) {
        SelectionType["single"] = "single";
        SelectionType["multi"] = "multi";
        SelectionType["multiClick"] = "multiClick";
        SelectionType["cell"] = "cell";
        SelectionType["checkbox"] = "checkbox";
      })(SelectionType || (SelectionType = {}));

      var SortType;

      (function (SortType) {
        SortType["single"] = "single";
        SortType["multi"] = "multi";
      })(SortType || (SortType = {}));

      var ContextmenuType;

      (function (ContextmenuType) {
        ContextmenuType["header"] = "header";
        ContextmenuType["body"] = "body";
      })(ContextmenuType || (ContextmenuType = {}));

      var DataTableColumnHeaderDirective = function DataTableColumnHeaderDirective(template) {
        _classCallCheck(this, DataTableColumnHeaderDirective);

        this.template = template;
      };

      DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) {
        return new (t || DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
      };

      DataTableColumnHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DataTableColumnHeaderDirective,
        selectors: [["", "ngx-datatable-header-template", ""]]
      });

      DataTableColumnHeaderDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      };

      var DataTableColumnCellDirective = function DataTableColumnCellDirective(template) {
        _classCallCheck(this, DataTableColumnCellDirective);

        this.template = template;
      };

      DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) {
        return new (t || DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
      };

      DataTableColumnCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DataTableColumnCellDirective,
        selectors: [["", "ngx-datatable-cell-template", ""]]
      });

      DataTableColumnCellDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      };

      var DataTableColumnCellTreeToggle = function DataTableColumnCellTreeToggle(template) {
        _classCallCheck(this, DataTableColumnCellTreeToggle);

        this.template = template;
      };

      DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) {
        return new (t || DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
      };

      DataTableColumnCellTreeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DataTableColumnCellTreeToggle,
        selectors: [["", "ngx-datatable-tree-toggle", ""]]
      });

      DataTableColumnCellTreeToggle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      };

      var DataTableColumnDirective = /*#__PURE__*/function () {
        function DataTableColumnDirective(columnChangesService) {
          _classCallCheck(this, DataTableColumnDirective);

          this.columnChangesService = columnChangesService;
          this.isFirstChange = true;
        }

        _createClass(DataTableColumnDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.isFirstChange) {
              this.isFirstChange = false;
            } else {
              this.columnChangesService.onInputChange();
            }
          }
        }, {
          key: "cellTemplate",
          get: function get() {
            return this._cellTemplateInput || this._cellTemplateQuery;
          }
        }, {
          key: "headerTemplate",
          get: function get() {
            return this._headerTemplateInput || this._headerTemplateQuery;
          }
        }, {
          key: "treeToggleTemplate",
          get: function get() {
            return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
          }
        }]);

        return DataTableColumnDirective;
      }();

      DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) {
        return new (t || DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ColumnChangesService));
      };

      DataTableColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DataTableColumnDirective,
        selectors: [["ngx-datatable-column"]],
        contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnHeaderDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellTreeToggle, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
          }
        },
        inputs: {
          name: "name",
          prop: "prop",
          frozenLeft: "frozenLeft",
          frozenRight: "frozenRight",
          flexGrow: "flexGrow",
          resizeable: "resizeable",
          comparator: "comparator",
          pipe: "pipe",
          sortable: "sortable",
          draggable: "draggable",
          canAutoResize: "canAutoResize",
          minWidth: "minWidth",
          width: "width",
          maxWidth: "maxWidth",
          checkboxable: "checkboxable",
          headerCheckboxable: "headerCheckboxable",
          headerClass: "headerClass",
          cellClass: "cellClass",
          isTreeColumn: "isTreeColumn",
          treeLevelIndent: "treeLevelIndent",
          summaryFunc: "summaryFunc",
          summaryTemplate: "summaryTemplate",
          _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"],
          _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"],
          _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      DataTableColumnDirective.ctorParameters = function () {
        return [{
          type: ColumnChangesService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "name", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "prop", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "frozenLeft", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "frozenRight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "flexGrow", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "resizeable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "comparator", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "pipe", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "sortable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "draggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "canAutoResize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "minWidth", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "width", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "maxWidth", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "checkboxable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "headerCheckboxable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "headerClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "cellClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "isTreeColumn", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "treeLevelIndent", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "summaryFunc", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableColumnDirective.prototype, "summaryTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cellTemplate')], DataTableColumnDirective.prototype, "_cellTemplateInput", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DataTableColumnCellDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
        "static": true
      })], DataTableColumnDirective.prototype, "_cellTemplateQuery", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('headerTemplate')], DataTableColumnDirective.prototype, "_headerTemplateInput", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DataTableColumnHeaderDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
        "static": true
      })], DataTableColumnDirective.prototype, "_headerTemplateQuery", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('treeToggleTemplate')], DataTableColumnDirective.prototype, "_treeToggleTemplateInput", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DataTableColumnCellTreeToggle, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
        "static": true
      })], DataTableColumnDirective.prototype, "_treeToggleTemplateQuery", void 0);

      var DatatableRowDetailTemplateDirective = function DatatableRowDetailTemplateDirective(template) {
        _classCallCheck(this, DatatableRowDetailTemplateDirective);

        this.template = template;
      };

      DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) {
        return new (t || DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
      };

      DatatableRowDetailTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DatatableRowDetailTemplateDirective,
        selectors: [["", "ngx-datatable-row-detail-template", ""]]
      });

      DatatableRowDetailTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      };

      var DatatableRowDetailDirective = /*#__PURE__*/function () {
        function DatatableRowDetailDirective() {
          _classCallCheck(this, DatatableRowDetailDirective);

          /**
           * The detail row height is required especially
           * when virtual scroll is enabled.
           */
          this.rowHeight = 0;
          /**
           * Row detail row visbility was toggled.
           */

          this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(DatatableRowDetailDirective, [{
          key: "toggleExpandRow",

          /**
           * Toggle the expansion of the row
           */
          value: function toggleExpandRow(row) {
            this.toggle.emit({
              type: 'row',
              value: row
            });
          }
          /**
           * API method to expand all the rows.
           */

        }, {
          key: "expandAllRows",
          value: function expandAllRows() {
            this.toggle.emit({
              type: 'all',
              value: true
            });
          }
          /**
           * API method to collapse all the rows.
           */

        }, {
          key: "collapseAllRows",
          value: function collapseAllRows() {
            this.toggle.emit({
              type: 'all',
              value: false
            });
          }
        }, {
          key: "template",
          get: function get() {
            return this._templateInput || this._templateQuery;
          }
        }]);

        return DatatableRowDetailDirective;
      }();

      DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) {
        return new (t || DatatableRowDetailDirective)();
      };

      DatatableRowDetailDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DatatableRowDetailDirective,
        selectors: [["ngx-datatable-row-detail"]],
        contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DatatableRowDetailTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
          }
        },
        inputs: {
          rowHeight: "rowHeight",
          _templateInput: ["template", "_templateInput"]
        },
        outputs: {
          toggle: "toggle"
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableRowDetailDirective.prototype, "rowHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('template')], DatatableRowDetailDirective.prototype, "_templateInput", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableRowDetailTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
        "static": true
      })], DatatableRowDetailDirective.prototype, "_templateQuery", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableRowDetailDirective.prototype, "toggle", void 0);

      var DatatableFooterDirective = /*#__PURE__*/function () {
        function DatatableFooterDirective() {
          _classCallCheck(this, DatatableFooterDirective);
        }

        _createClass(DatatableFooterDirective, [{
          key: "template",
          get: function get() {
            return this._templateInput || this._templateQuery;
          }
        }]);

        return DatatableFooterDirective;
      }();

      DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) {
        return new (t || DatatableFooterDirective)();
      };

      DatatableFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DatatableFooterDirective,
        selectors: [["ngx-datatable-footer"]],
        contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DataTableFooterTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
          }
        },
        inputs: {
          footerHeight: "footerHeight",
          totalMessage: "totalMessage",
          selectedMessage: "selectedMessage",
          pagerLeftArrowIcon: "pagerLeftArrowIcon",
          pagerRightArrowIcon: "pagerRightArrowIcon",
          pagerPreviousIcon: "pagerPreviousIcon",
          pagerNextIcon: "pagerNextIcon",
          _templateInput: ["template", "_templateInput"]
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "footerHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "totalMessage", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "selectedMessage", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "pagerLeftArrowIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "pagerRightArrowIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "pagerPreviousIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableFooterDirective.prototype, "pagerNextIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('template')], DatatableFooterDirective.prototype, "_templateInput", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DataTableFooterTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      })], DatatableFooterDirective.prototype, "_templateQuery", void 0);
      /**
       * Returns the columns by pin.
       */

      function columnsByPin(cols) {
        var ret = {
          left: [],
          center: [],
          right: []
        };

        if (cols) {
          var _iterator5 = _createForOfIteratorHelper(cols),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var col = _step5.value;

              if (col.frozenLeft) {
                ret.left.push(col);
              } else if (col.frozenRight) {
                ret.right.push(col);
              } else {
                ret.center.push(col);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }

        return ret;
      }
      /**
       * Returns the widths of all group sets of a column
       */


      function columnGroupWidths(groups, all) {
        return {
          left: columnTotalWidth(groups.left),
          center: columnTotalWidth(groups.center),
          right: columnTotalWidth(groups.right),
          total: Math.floor(columnTotalWidth(all))
        };
      }
      /**
       * Calculates the total width of all columns and their groups
       */


      function columnTotalWidth(columns, prop) {
        var totalWidth = 0;

        if (columns) {
          var _iterator6 = _createForOfIteratorHelper(columns),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var c = _step6.value;
              var has = prop && c[prop];
              var width = has ? c[prop] : c.width;
              totalWidth = totalWidth + parseFloat(width);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }

        return totalWidth;
      }
      /**
       * Calculates the total width of all columns and their groups
       */


      function columnsTotalWidth(columns, prop) {
        var totalWidth = 0;

        var _iterator7 = _createForOfIteratorHelper(columns),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var column = _step7.value;
            var has = prop && column[prop];
            totalWidth = totalWidth + (has ? column[prop] : column.width);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        return totalWidth;
      }

      function columnsByPinArr(val) {
        var colsByPinArr = [];
        var colsByPin = columnsByPin(val);
        colsByPinArr.push({
          type: 'left',
          columns: colsByPin['left']
        });
        colsByPinArr.push({
          type: 'center',
          columns: colsByPin['center']
        });
        colsByPinArr.push({
          type: 'right',
          columns: colsByPin['right']
        });
        return colsByPinArr;
      }
      /**
       * This object contains the cache of the various row heights that are present inside
       * the data table.   Its based on Fenwick tree data structure that helps with
       * querying sums that have time complexity of log n.
       *
       * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
       * https://github.com/mikolalysenko/fenwick-tree
       *
       */


      var RowHeightCache = /*#__PURE__*/function () {
        function RowHeightCache() {
          _classCallCheck(this, RowHeightCache);

          /**
           * Tree Array stores the cumulative information of the row heights to perform efficient
           * range queries and updates.  Currently the tree is initialized to the base row
           * height instead of the detail row height.
           */
          this.treeArray = [];
        }
        /**
         * Clear the Tree array.
         */


        _createClass(RowHeightCache, [{
          key: "clearCache",
          value: function clearCache() {
            this.treeArray = [];
          }
          /**
           * Initialize the Fenwick tree with row Heights.
           *
           * @param rows The array of rows which contain the expanded status.
           * @param rowHeight The row height.
           * @param detailRowHeight The detail row height.
           */

        }, {
          key: "initCache",
          value: function initCache(details) {
            var rows = details.rows,
                rowHeight = details.rowHeight,
                detailRowHeight = details.detailRowHeight,
                externalVirtual = details.externalVirtual,
                rowCount = details.rowCount,
                rowIndexes = details.rowIndexes,
                rowExpansions = details.rowExpansions;
            var isFn = typeof rowHeight === 'function';
            var isDetailFn = typeof detailRowHeight === 'function';

            if (!isFn && isNaN(rowHeight)) {
              throw new Error("Row Height cache initialization failed. Please ensure that 'rowHeight' is a\n        valid number or function value: (".concat(rowHeight, ") when 'scrollbarV' is enabled."));
            } // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.


            if (!isDetailFn && isNaN(detailRowHeight)) {
              throw new Error("Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a\n        valid number or function value: (".concat(detailRowHeight, ") when 'scrollbarV' is enabled."));
            }

            var n = externalVirtual ? rowCount : rows.length;
            this.treeArray = new Array(n);

            for (var i = 0; i < n; ++i) {
              this.treeArray[i] = 0;
            }

            for (var _i2 = 0; _i2 < n; ++_i2) {
              var row = rows[_i2];
              var currentRowHeight = rowHeight;

              if (isFn) {
                currentRowHeight = rowHeight(row);
              } // Add the detail row height to the already expanded rows.
              // This is useful for the table that goes through a filter or sort.


              var expanded = rowExpansions.has(row);

              if (row && expanded) {
                if (isDetailFn) {
                  var index = rowIndexes.get(row);
                  currentRowHeight += detailRowHeight(row, index);
                } else {
                  currentRowHeight += detailRowHeight;
                }
              }

              this.update(_i2, currentRowHeight);
            }
          }
          /**
           * Given the ScrollY position i.e. sum, provide the rowIndex
           * that is present in the current view port.  Below handles edge cases.
           */

        }, {
          key: "getRowIndex",
          value: function getRowIndex(scrollY) {
            if (scrollY === 0) return 0;
            return this.calcRowIndex(scrollY);
          }
          /**
           * When a row is expanded or rowHeight is changed, update the height.  This can
           * be utilized in future when Angular Data table supports dynamic row heights.
           */

        }, {
          key: "update",
          value: function update(atRowIndex, byRowHeight) {
            if (!this.treeArray.length) {
              throw new Error("Update at index ".concat(atRowIndex, " with value ").concat(byRowHeight, " failed:\n        Row Height cache not initialized."));
            }

            var n = this.treeArray.length;
            atRowIndex |= 0;

            while (atRowIndex < n) {
              this.treeArray[atRowIndex] += byRowHeight;
              atRowIndex |= atRowIndex + 1;
            }
          }
          /**
           * Range Sum query from 1 to the rowIndex
           */

        }, {
          key: "query",
          value: function query(atIndex) {
            if (!this.treeArray.length) {
              throw new Error("query at index ".concat(atIndex, " failed: Fenwick tree array not initialized."));
            }

            var sum = 0;
            atIndex |= 0;

            while (atIndex >= 0) {
              sum += this.treeArray[atIndex];
              atIndex = (atIndex & atIndex + 1) - 1;
            }

            return sum;
          }
          /**
           * Find the total height between 2 row indexes
           */

        }, {
          key: "queryBetween",
          value: function queryBetween(atIndexA, atIndexB) {
            return this.query(atIndexB) - this.query(atIndexA - 1);
          }
          /**
           * Given the ScrollY position i.e. sum, provide the rowIndex
           * that is present in the current view port.
           */

        }, {
          key: "calcRowIndex",
          value: function calcRowIndex(sum) {
            if (!this.treeArray.length) return 0;
            var pos = -1;
            var dataLength = this.treeArray.length; // Get the highest bit for the block size.

            var highestBit = Math.pow(2, dataLength.toString(2).length - 1);

            for (var blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
              var nextPos = pos + blockSize;

              if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
              }
            }

            return pos + 1;
          }
        }]);

        return RowHeightCache;
      }();

      var cache = {};
      var testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;

      var ɵ0 = function ɵ0() {
        var styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
        var match = typeof styles !== 'undefined' ? Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) : null;
        var pre = match !== null ? match[1] : undefined; // tslint:disable-next-line: tsr-detect-non-literal-regexp

        var dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
        return dom ? {
          dom: dom,
          lowercase: pre,
          css: "-".concat(pre, "-"),
          js: pre[0].toUpperCase() + pre.substr(1)
        } : undefined;
      }; // Get Prefix
      // http://davidwalsh.name/vendor-prefix


      var prefix = ɵ0();

      function getVendorPrefixedName(property) {
        var name = camelCase(property);

        if (!cache[name]) {
          if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
          } else if (testStyle[property] !== undefined) {
            cache[name] = property;
          }
        }

        return cache[name];
      } // browser detection and prefixing tools


      var transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
      var backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
      var hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
      var hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
      var ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
      var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);

      function translateXY(styles, x, y) {
        if (typeof transform !== 'undefined' && hasCSSTransforms) {
          if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = "translate3d(".concat(x, "px, ").concat(y, "px, 0)");
            styles[backfaceVisibility] = 'hidden';
          } else {
            styles[camelCase(transform)] = "translate(".concat(x, "px, ").concat(y, "px)");
          }
        } else {
          styles.top = "".concat(y, "px");
          styles.left = "".concat(x, "px");
        }
      }

      var DataTableBodyComponent = /*#__PURE__*/function () {
        /**
         * Creates an instance of DataTableBodyComponent.
         */
        function DataTableBodyComponent(cd) {
          var _this10 = this;

          _classCallCheck(this, DataTableBodyComponent);

          this.cd = cd;
          this.selected = [];
          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
          this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.rowHeightsCache = new RowHeightCache();
          this.temp = [];
          this.offsetY = 0;
          this.indexes = {};
          this.rowIndexes = new WeakMap();
          this.rowExpansions = [];
          /**
           * Get the height of the detail row.
           */

          this.getDetailRowHeight = function (row, index) {
            if (!_this10.rowDetail) {
              return 0;
            }

            var rowHeight = _this10.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
          }; // declare fn here so we can get access to the `this` property


          this.rowTrackingFn = function (index, row) {
            var idx = _this10.getRowIndex(row);

            if (_this10.trackByProp) {
              return row[_this10.trackByProp];
            } else {
              return idx;
            }
          };
        }

        _createClass(DataTableBodyComponent, [{
          key: "ngOnInit",

          /**
           * Called after the constructor, initializing input properties
           */
          value: function ngOnInit() {
            var _this11 = this;

            if (this.rowDetail) {
              this.listener = this.rowDetail.toggle.subscribe(function (_ref5) {
                var type = _ref5.type,
                    value = _ref5.value;

                if (type === 'row') {
                  _this11.toggleRowExpansion(value);
                }

                if (type === 'all') {
                  _this11.toggleAllRows(value);
                } // Refresh rows after toggle
                // Fixes #883


                _this11.updateIndexes();

                _this11.updateRows();

                _this11.cd.markForCheck();
              });
            }

            if (this.groupHeader) {
              this.listener = this.groupHeader.toggle.subscribe(function (_ref6) {
                var type = _ref6.type,
                    value = _ref6.value;

                if (type === 'group') {
                  _this11.toggleRowExpansion(value);
                }

                if (type === 'all') {
                  _this11.toggleAllRows(value);
                } // Refresh rows after toggle
                // Fixes #883


                _this11.updateIndexes();

                _this11.updateRows();

                _this11.cd.markForCheck();
              });
            }
          }
          /**
           * Called once, before the instance is destroyed.
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.rowDetail || this.groupHeader) {
              this.listener.unsubscribe();
            }
          }
          /**
           * Updates the Y offset given a new offset.
           */

        }, {
          key: "updateOffsetY",
          value: function updateOffsetY(offset) {
            // scroller is missing on empty table
            if (!this.scroller) {
              return;
            }

            if (this.scrollbarV && this.virtualization && offset) {
              // First get the row Index that we need to move to.
              var rowIndex = this.pageSize * offset;
              offset = this.rowHeightsCache.query(rowIndex - 1);
            } else if (this.scrollbarV && !this.virtualization) {
              offset = 0;
            }

            this.scroller.setOffset(offset || 0);
          }
          /**
           * Body was scrolled, this is mainly useful for
           * when a user is server-side pagination via virtual scroll.
           */

        }, {
          key: "onBodyScroll",
          value: function onBodyScroll(event) {
            var scrollYPos = event.scrollYPos;
            var scrollXPos = event.scrollXPos; // if scroll change, trigger update
            // this is mainly used for header cell positions

            if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
              this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
              });
            }

            this.offsetY = scrollYPos;
            this.offsetX = scrollXPos;
            this.updateIndexes();
            this.updatePage(event.direction);
            this.updateRows();
          }
          /**
           * Updates the page given a direction.
           */

        }, {
          key: "updatePage",
          value: function updatePage(direction) {
            var offset = this.indexes.first / this.pageSize;

            if (direction === 'up') {
              offset = Math.ceil(offset);
            } else if (direction === 'down') {
              offset = Math.floor(offset);
            }

            if (direction !== undefined && !isNaN(offset)) {
              this.page.emit({
                offset: offset
              });
            }
          }
          /**
           * Updates the rows in the view port
           */

        }, {
          key: "updateRows",
          value: function updateRows() {
            var _this12 = this;

            var _this$indexes = this.indexes,
                first = _this$indexes.first,
                last = _this$indexes.last;
            var rowIndex = first;
            var idx = 0;
            var temp = []; // if grouprowsby has been specified treat row paging
            // parameters as group paging parameters ie if limit 10 has been
            // specified treat it as 10 groups rather than 10 rows

            if (this.groupedRows) {
              var maxRowsPerGroup = 3; // if there is only one group set the maximum number of
              // rows per group the same as the total number of rows

              if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
              }

              while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                var group = this.groupedRows[rowIndex];
                this.rowIndexes.set(group, rowIndex);

                if (group.value) {
                  // add indexes for each group item
                  group.value.forEach(function (g, i) {
                    var _idx = "".concat(rowIndex, "-").concat(i);

                    _this12.rowIndexes.set(g, _idx);
                  });
                }

                temp[idx] = group;
                idx++; // Group index in this context

                rowIndex++;
              }
            } else {
              while (rowIndex < last && rowIndex < this.rowCount) {
                var row = this.rows[rowIndex];

                if (row) {
                  // add indexes for each row
                  this.rowIndexes.set(row, rowIndex);
                  temp[idx] = row;
                }

                idx++;
                rowIndex++;
              }
            }

            this.temp = temp;
          }
          /**
           * Get the row height
           */

        }, {
          key: "getRowHeight",
          value: function getRowHeight(row) {
            // if its a function return it
            if (typeof this.rowHeight === 'function') {
              return this.rowHeight(row);
            }

            return this.rowHeight;
          }
          /**
           * @param group the group with all rows
           */

        }, {
          key: "getGroupHeight",
          value: function getGroupHeight(group) {
            var rowHeight = 0;

            if (group.value) {
              for (var index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
              }
            }

            return rowHeight;
          }
          /**
           * Calculate row height based on the expanded state of the row.
           */

        }, {
          key: "getRowAndDetailHeight",
          value: function getRowAndDetailHeight(row) {
            var rowHeight = this.getRowHeight(row);
            var expanded = this.getRowExpanded(row); // Adding detail row height if its expanded.

            if (expanded) {
              rowHeight += this.getDetailRowHeight(row);
            }

            return rowHeight;
          }
          /**
           * Calculates the styles for the row so that the rows can be moved in 2D space
           * during virtual scroll inside the DOM.   In the below case the Y position is
           * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
           * 100 px then following styles are generated:
           *
           * transform: translate3d(0px, 0px, 0px);    ->  row0
           * transform: translate3d(0px, 30px, 0px);   ->  row1
           * transform: translate3d(0px, 130px, 0px);  ->  row2
           *
           * Row heights have to be calculated based on the row heights cache as we wont
           * be able to determine which row is of what height before hand.  In the above
           * case the positionY of the translate3d for row2 would be the sum of all the
           * heights of the rows before it (i.e. row0 and row1).
           *
           * @param rows the row that needs to be placed in the 2D space.
           * @returns the CSS3 style to be applied
           *
           * @memberOf DataTableBodyComponent
           */

        }, {
          key: "getRowsStyles",
          value: function getRowsStyles(rows) {
            var styles = {}; // only add styles for the group if there is a group

            if (this.groupedRows) {
              styles.width = this.columnGroupWidths.total;
            }

            if (this.scrollbarV && this.virtualization) {
              var idx = 0;

              if (this.groupedRows) {
                // Get the latest row rowindex in a group
                var row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
              } else {
                idx = this.getRowIndex(rows);
              } // const pos = idx * rowHeight;
              // The position of this row would be the sum of all row heights
              // until the previous row position.


              var pos = this.rowHeightsCache.query(idx - 1);
              translateXY(styles, 0, pos);
            }

            return styles;
          }
          /**
           * Calculate bottom summary row offset for scrollbar mode.
           * For more information about cache and offset calculation
           * see description for `getRowsStyles` method
           *
           * @returns the CSS3 style to be applied
           *
           * @memberOf DataTableBodyComponent
           */

        }, {
          key: "getBottomSummaryRowStyles",
          value: function getBottomSummaryRowStyles() {
            if (!this.scrollbarV || !this.rows || !this.rows.length) {
              return null;
            }

            var styles = {
              position: 'absolute'
            };
            var pos = this.rowHeightsCache.query(this.rows.length - 1);
            translateXY(styles, 0, pos);
            return styles;
          }
          /**
           * Hides the loading indicator
           */

        }, {
          key: "hideIndicator",
          value: function hideIndicator() {
            var _this13 = this;

            setTimeout(function () {
              return _this13.loadingIndicator = false;
            }, 500);
          }
          /**
           * Updates the index of the rows in the viewport
           */

        }, {
          key: "updateIndexes",
          value: function updateIndexes() {
            var first = 0;
            var last = 0;

            if (this.scrollbarV) {
              if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                var height = parseInt(this.bodyHeight, 0);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
              } else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
              }
            } else {
              // The server is handling paging and will pass an array that begins with the
              // element at a specified offset.  first should always be 0 with external paging.
              if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
              }

              last = Math.min(first + this.pageSize, this.rowCount);
            }

            this.indexes = {
              first: first,
              last: last
            };
          }
          /**
           * Refreshes the full Row Height cache.  Should be used
           * when the entire row array state has changed.
           */

        }, {
          key: "refreshRowHeightCache",
          value: function refreshRowHeightCache() {
            if (!this.scrollbarV || this.scrollbarV && !this.virtualization) {
              return;
            } // clear the previous row height cache if already present.
            // this is useful during sorts, filters where the state of the
            // rows array is changed.


            this.rowHeightsCache.clearCache(); // Initialize the tree only if there are rows inside the tree.

            if (this.rows && this.rows.length) {
              var rowExpansions = new Set();

              var _iterator8 = _createForOfIteratorHelper(this.rows),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var row = _step8.value;

                  if (this.getRowExpanded(row)) {
                    rowExpansions.add(row);
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions: rowExpansions
              });
            }
          }
          /**
           * Gets the index for the view port
           */

        }, {
          key: "getAdjustedViewPortIndex",
          value: function getAdjustedViewPortIndex() {
            // Capture the row index of the first row that is visible on the viewport.
            // If the scroll bar is just below the row which is highlighted then make that as the
            // first index.
            var viewPortFirstRowIndex = this.indexes.first;

            if (this.scrollbarV && this.virtualization) {
              var offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
              return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
            }

            return viewPortFirstRowIndex;
          }
          /**
           * Toggle the Expansion of the row i.e. if the row is expanded then it will
           * collapse and vice versa.   Note that the expanded status is stored as
           * a part of the row object itself as we have to preserve the expanded row
           * status in case of sorting and filtering of the row set.
           */

        }, {
          key: "toggleRowExpansion",
          value: function toggleRowExpansion(row) {
            // Capture the row index of the first row that is visible on the viewport.
            var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
            var rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
            var expanded = rowExpandedIdx > -1; // If the detailRowHeight is auto --> only in case of non-virtualized scroll

            if (this.scrollbarV && this.virtualization) {
              var detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1); // const idx = this.rowIndexes.get(row) || 0;

              var idx = this.getRowIndex(row);
              this.rowHeightsCache.update(idx, detailRowHeight);
            } // Update the toggled row and update thive nevere heights in the cache.


            if (expanded) {
              this.rowExpansions.splice(rowExpandedIdx, 1);
            } else {
              this.rowExpansions.push(row);
            }

            this.detailToggle.emit({
              rows: [row],
              currentIndex: viewPortFirstRowIndex
            });
          }
          /**
           * Expand/Collapse all the rows no matter what their state is.
           */

        }, {
          key: "toggleAllRows",
          value: function toggleAllRows(expanded) {
            // clear prev expansions
            this.rowExpansions = []; // Capture the row index of the first row that is visible on the viewport.

            var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();

            if (expanded) {
              var _iterator9 = _createForOfIteratorHelper(this.rows),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var row = _step9.value;
                  this.rowExpansions.push(row);
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }

            if (this.scrollbarV) {
              // Refresh the full row heights cache since every row was affected.
              this.recalcLayout();
            } // Emit all rows that have been expanded.


            this.detailToggle.emit({
              rows: this.rows,
              currentIndex: viewPortFirstRowIndex
            });
          }
          /**
           * Recalculates the table
           */

        }, {
          key: "recalcLayout",
          value: function recalcLayout() {
            this.refreshRowHeightCache();
            this.updateIndexes();
            this.updateRows();
          }
          /**
           * Tracks the column
           */

        }, {
          key: "columnTrackingFn",
          value: function columnTrackingFn(index, column) {
            return column.$$id;
          }
          /**
           * Gets the row pinning group styles
           */

        }, {
          key: "stylesByGroup",
          value: function stylesByGroup(group) {
            var widths = this.columnGroupWidths;
            var offsetX = this.offsetX;
            var styles = {
              width: "".concat(widths[group], "px")
            };

            if (group === 'left') {
              translateXY(styles, offsetX, 0);
            } else if (group === 'right') {
              var bodyWidth = parseInt(this.innerWidth + '', 0);
              var totalDiff = widths.total - bodyWidth;
              var offsetDiff = totalDiff - offsetX;
              var offset = offsetDiff * -1;
              translateXY(styles, offset, 0);
            }

            return styles;
          }
          /**
           * Returns if the row was expanded and set default row expansion when row expansion is empty
           */

        }, {
          key: "getRowExpanded",
          value: function getRowExpanded(row) {
            if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
              var _iterator10 = _createForOfIteratorHelper(this.groupedRows),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var group = _step10.value;
                  this.rowExpansions.push(group);
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }

            return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
          }
        }, {
          key: "getRowExpandedIdx",
          value: function getRowExpandedIdx(row, expanded) {
            var _this14 = this;

            if (!expanded || !expanded.length) return -1;
            var rowId = this.rowIdentity(row);
            return expanded.findIndex(function (r) {
              var id = _this14.rowIdentity(r);

              return id === rowId;
            });
          }
          /**
           * Gets the row index given a row
           */

        }, {
          key: "getRowIndex",
          value: function getRowIndex(row) {
            return this.rowIndexes.get(row) || 0;
          }
        }, {
          key: "onTreeAction",
          value: function onTreeAction(row) {
            this.treeAction.emit({
              row: row
            });
          }
        }, {
          key: "pageSize",
          set: function set(val) {
            this._pageSize = val;
            this.recalcLayout();
          },
          get: function get() {
            return this._pageSize;
          }
        }, {
          key: "rows",
          set: function set(val) {
            this._rows = val;
            this.recalcLayout();
          },
          get: function get() {
            return this._rows;
          }
        }, {
          key: "columns",
          set: function set(val) {
            this._columns = val;
            var colsByPin = columnsByPin(val);
            this.columnGroupWidths = columnGroupWidths(colsByPin, val);
          },
          get: function get() {
            return this._columns;
          }
        }, {
          key: "offset",
          set: function set(val) {
            this._offset = val;
            if (!this.scrollbarV || this.scrollbarV && !this.virtualization) this.recalcLayout();
          },
          get: function get() {
            return this._offset;
          }
        }, {
          key: "rowCount",
          set: function set(val) {
            this._rowCount = val;
            this.recalcLayout();
          },
          get: function get() {
            return this._rowCount;
          }
        }, {
          key: "bodyWidth",
          get: function get() {
            if (this.scrollbarH) {
              return this.innerWidth + 'px';
            } else {
              return '100%';
            }
          }
        }, {
          key: "bodyHeight",
          set: function set(val) {
            if (this.scrollbarV) {
              this._bodyHeight = val + 'px';
            } else {
              this._bodyHeight = 'auto';
            }

            this.recalcLayout();
          },
          get: function get() {
            return this._bodyHeight;
          }
          /**
           * Returns if selection is enabled.
           */

        }, {
          key: "selectEnabled",
          get: function get() {
            return !!this.selectionType;
          }
          /**
           * Property that would calculate the height of scroll bar
           * based on the row heights cache for virtual scroll and virtualization. Other scenarios
           * calculate scroll height automatically (as height will be undefined).
           */

        }, {
          key: "scrollHeight",
          get: function get() {
            if (this.scrollbarV && this.virtualization && this.rowCount) {
              return this.rowHeightsCache.query(this.rowCount - 1);
            } // avoid TS7030: Not all code paths return a value.


            return undefined;
          }
        }]);

        return DataTableBodyComponent;
      }();

      DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) {
        return new (t || DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      DataTableBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DataTableBodyComponent,
        selectors: [["datatable-body"]],
        viewQuery: function DataTableBodyComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ScrollerComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
          }
        },
        hostAttrs: [1, "datatable-body"],
        hostVars: 4,
        hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
          }
        },
        inputs: {
          selected: "selected",
          pageSize: "pageSize",
          rows: "rows",
          columns: "columns",
          offset: "offset",
          rowCount: "rowCount",
          bodyHeight: "bodyHeight",
          offsetX: "offsetX",
          loadingIndicator: "loadingIndicator",
          scrollbarV: "scrollbarV",
          scrollbarH: "scrollbarH",
          externalPaging: "externalPaging",
          rowHeight: "rowHeight",
          emptyMessage: "emptyMessage",
          selectionType: "selectionType",
          rowIdentity: "rowIdentity",
          rowDetail: "rowDetail",
          groupHeader: "groupHeader",
          selectCheck: "selectCheck",
          displayCheck: "displayCheck",
          trackByProp: "trackByProp",
          rowClass: "rowClass",
          groupedRows: "groupedRows",
          groupExpansionDefault: "groupExpansionDefault",
          innerWidth: "innerWidth",
          groupRowsBy: "groupRowsBy",
          virtualization: "virtualization",
          summaryRow: "summaryRow",
          summaryPosition: "summaryPosition",
          summaryHeight: "summaryHeight"
        },
        outputs: {
          scroll: "scroll",
          page: "page",
          activate: "activate",
          select: "select",
          detailToggle: "detailToggle",
          rowContextmenu: "rowContextmenu",
          treeAction: "treeAction"
        },
        decls: 5,
        vars: 9,
        consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]],
        template: function DataTableBodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "datatable-selection", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) {
              return ctx.select.emit($event);
            })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) {
              return ctx.activate.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DataTableSelectionComponent, ProgressBarComponent, ScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], DataTableSummaryRowComponent, DataTableRowWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], DataTableBodyRowComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      DataTableBodyComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "scrollbarV", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "scrollbarH", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "loadingIndicator", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "externalPaging", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "rowHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "offsetX", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "emptyMessage", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "selectionType", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "selected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "rowIdentity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "rowDetail", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "groupHeader", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "selectCheck", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "displayCheck", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "trackByProp", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "rowClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "groupedRows", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "groupExpansionDefault", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "innerWidth", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "groupRowsBy", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "virtualization", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "summaryRow", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "summaryPosition", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "summaryHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "pageSize", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "rows", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "columns", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "offset", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyComponent.prototype, "rowCount", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')], DataTableBodyComponent.prototype, "bodyWidth", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')], DataTableBodyComponent.prototype, "bodyHeight", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "scroll", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "page", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "activate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "select", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "detailToggle", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "rowContextmenu", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyComponent.prototype, "treeAction", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ScrollerComponent)], DataTableBodyComponent.prototype, "scroller", void 0);

      var DataTableHeaderComponent = /*#__PURE__*/function () {
        function DataTableHeaderComponent(cd) {
          _classCallCheck(this, DataTableHeaderComponent);

          this.cd = cd;
          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
          this._columnGroupWidths = {
            total: 100
          };
          this._styleByGroup = {
            left: {},
            center: {},
            right: {}
          };
          this.destroyed = false;
        }

        _createClass(DataTableHeaderComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed = true;
          }
        }, {
          key: "onLongPressStart",
          value: function onLongPressStart(_ref7) {
            var event = _ref7.event,
                model = _ref7.model;
            model.dragging = true;
            this.dragEventTarget = event;
          }
        }, {
          key: "onLongPressEnd",
          value: function onLongPressEnd(_ref8) {
            var _this15 = this;

            var event = _ref8.event,
                model = _ref8.model;
            this.dragEventTarget = event; // delay resetting so sort can be
            // prevented if we were dragging

            setTimeout(function () {
              // datatable component creates copies from columns on reorder
              // set dragging to false on new objects
              var column = _this15._columns.find(function (c) {
                return c.$$id === model.$$id;
              });

              if (column) {
                column.dragging = false;
              }
            }, 5);
          }
        }, {
          key: "trackByGroups",
          value: function trackByGroups(index, colGroup) {
            return colGroup.type;
          }
        }, {
          key: "columnTrackingFn",
          value: function columnTrackingFn(index, column) {
            return column.$$id;
          }
        }, {
          key: "onColumnResized",
          value: function onColumnResized(width, column) {
            if (width <= column.minWidth) {
              width = column.minWidth;
            } else if (width >= column.maxWidth) {
              width = column.maxWidth;
            }

            this.resize.emit({
              column: column,
              prevValue: column.width,
              newValue: width
            });
          }
        }, {
          key: "onColumnReordered",
          value: function onColumnReordered(_ref9) {
            var prevIndex = _ref9.prevIndex,
                newIndex = _ref9.newIndex,
                model = _ref9.model;
            var column = this.getColumn(newIndex);
            column.isTarget = false;
            column.targetMarkerContext = undefined;
            this.reorder.emit({
              column: model,
              prevValue: prevIndex,
              newValue: newIndex
            });
          }
        }, {
          key: "onTargetChanged",
          value: function onTargetChanged(_ref10) {
            var prevIndex = _ref10.prevIndex,
                newIndex = _ref10.newIndex,
                initialIndex = _ref10.initialIndex;

            if (prevIndex || prevIndex === 0) {
              var oldColumn = this.getColumn(prevIndex);
              oldColumn.isTarget = false;
              oldColumn.targetMarkerContext = undefined;
            }

            if (newIndex || newIndex === 0) {
              var newColumn = this.getColumn(newIndex);
              newColumn.isTarget = true;

              if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                  "class": 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
              }
            }
          }
        }, {
          key: "getColumn",
          value: function getColumn(index) {
            var leftColumnCount = this._columnsByPin[0].columns.length;

            if (index < leftColumnCount) {
              return this._columnsByPin[0].columns[index];
            }

            var centerColumnCount = this._columnsByPin[1].columns.length;

            if (index < leftColumnCount + centerColumnCount) {
              return this._columnsByPin[1].columns[index - leftColumnCount];
            }

            return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
          }
        }, {
          key: "onSort",
          value: function onSort(_ref11) {
            var column = _ref11.column,
                prevValue = _ref11.prevValue,
                newValue = _ref11.newValue;

            // if we are dragging don't sort!
            if (column.dragging) {
              return;
            }

            var sorts = this.calcNewSorts(column, prevValue, newValue);
            this.sort.emit({
              sorts: sorts,
              column: column,
              prevValue: prevValue,
              newValue: newValue
            });
          }
        }, {
          key: "calcNewSorts",
          value: function calcNewSorts(column, prevValue, newValue) {
            var idx = 0;

            if (!this.sorts) {
              this.sorts = [];
            }

            var sorts = this.sorts.map(function (s, i) {
              s = Object.assign({}, s);

              if (s.prop === column.prop) {
                idx = i;
              }

              return s;
            });

            if (newValue === undefined) {
              sorts.splice(idx, 1);
            } else if (prevValue) {
              sorts[idx].dir = newValue;
            } else {
              if (this.sortType === SortType.single) {
                sorts.splice(0, this.sorts.length);
              }

              sorts.push({
                dir: newValue,
                prop: column.prop
              });
            }

            return sorts;
          }
        }, {
          key: "setStylesByGroup",
          value: function setStylesByGroup() {
            this._styleByGroup.left = this.calcStylesByGroup('left');
            this._styleByGroup.center = this.calcStylesByGroup('center');
            this._styleByGroup.right = this.calcStylesByGroup('right');

            if (!this.destroyed) {
              this.cd.detectChanges();
            }
          }
        }, {
          key: "calcStylesByGroup",
          value: function calcStylesByGroup(group) {
            var widths = this._columnGroupWidths;
            var offsetX = this.offsetX;
            var styles = {
              width: "".concat(widths[group], "px")
            };

            if (group === 'center') {
              translateXY(styles, offsetX * -1, 0);
            } else if (group === 'right') {
              var totalDiff = widths.total - this.innerWidth;
              var offset = totalDiff * -1;
              translateXY(styles, offset, 0);
            }

            return styles;
          }
        }, {
          key: "innerWidth",
          set: function set(val) {
            var _this16 = this;

            this._innerWidth = val;
            setTimeout(function () {
              if (_this16._columns) {
                var colByPin = columnsByPin(_this16._columns);
                _this16._columnGroupWidths = columnGroupWidths(colByPin, _this16._columns);

                _this16.setStylesByGroup();
              }
            });
          },
          get: function get() {
            return this._innerWidth;
          }
        }, {
          key: "headerHeight",
          set: function set(val) {
            if (val !== 'auto') {
              this._headerHeight = "".concat(val, "px");
            } else {
              this._headerHeight = val;
            }
          },
          get: function get() {
            return this._headerHeight;
          }
        }, {
          key: "columns",
          set: function set(val) {
            var _this17 = this;

            this._columns = val;
            var colsByPin = columnsByPin(val);
            this._columnsByPin = columnsByPinArr(val);
            setTimeout(function () {
              _this17._columnGroupWidths = columnGroupWidths(colsByPin, val);

              _this17.setStylesByGroup();
            });
          },
          get: function get() {
            return this._columns;
          }
        }, {
          key: "offsetX",
          set: function set(val) {
            this._offsetX = val;
            this.setStylesByGroup();
          },
          get: function get() {
            return this._offsetX;
          }
        }, {
          key: "headerWidth",
          get: function get() {
            if (this.scrollbarH) {
              return this.innerWidth + 'px';
            }

            return '100%';
          }
        }]);

        return DataTableHeaderComponent;
      }();

      DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) {
        return new (t || DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      DataTableHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DataTableHeaderComponent,
        selectors: [["datatable-header"]],
        hostAttrs: [1, "datatable-header"],
        hostVars: 4,
        hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
          }
        },
        inputs: {
          innerWidth: "innerWidth",
          headerHeight: "headerHeight",
          columns: "columns",
          offsetX: "offsetX",
          sorts: "sorts",
          sortAscendingIcon: "sortAscendingIcon",
          sortDescendingIcon: "sortDescendingIcon",
          sortUnsetIcon: "sortUnsetIcon",
          scrollbarH: "scrollbarH",
          dealsWithGroup: "dealsWithGroup",
          targetMarkerTemplate: "targetMarkerTemplate",
          sortType: "sortType",
          allRowsSelected: "allRowsSelected",
          selectionType: "selectionType",
          reorderable: "reorderable"
        },
        outputs: {
          sort: "sort",
          reorder: "reorder",
          resize: "resize",
          select: "select",
          columnContextmenu: "columnContextmenu"
        },
        decls: 2,
        vars: 4,
        consts: [["orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]],
        template: function DataTableHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) {
              return ctx.onColumnReordered($event);
            })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) {
              return ctx.onTargetChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
          }
        },
        directives: function directives() {
          return [OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], DataTableHeaderCellComponent, ResizeableDirective, LongPressDirective, DraggableDirective];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      DataTableHeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "sortAscendingIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "sortDescendingIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "sortUnsetIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "scrollbarH", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "dealsWithGroup", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "targetMarkerTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "innerWidth", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "sorts", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "sortType", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "allRowsSelected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "selectionType", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "reorderable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "headerHeight", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "columns", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderComponent.prototype, "offsetX", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderComponent.prototype, "sort", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderComponent.prototype, "reorder", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderComponent.prototype, "resize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderComponent.prototype, "select", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderComponent.prototype, "columnContextmenu", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')], DataTableHeaderComponent.prototype, "headerWidth", null);
      /**
       * Throttle a function
       */

      function throttle(func, wait, options) {
        options = options || {};
        var context;
        var args;
        var result;
        var timeout = null;
        var previous = 0;

        function later() {
          previous = options.leading === false ? 0 : +new Date();
          timeout = null;
          result = func.apply(context, args);
        }

        return function () {
          var now = +new Date();

          if (!previous && options.leading === false) {
            previous = now;
          }

          var remaining = wait - (now - previous);
          context = this;
          args = arguments;

          if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
          }

          return result;
        };
      }
      /**
       * Throttle decorator
       *
       *  class MyClass {
       *    throttleable(10)
       *    myFn() { ... }
       *  }
       */


      function throttleable(duration, options) {
        return function innerDecorator(target, key, descriptor) {
          return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
              Object.defineProperty(this, key, {
                configurable: true,
                enumerable: descriptor.enumerable,
                value: throttle(descriptor.value, duration, options)
              });
              return this[key];
            }
          };
        };
      }
      /**
       * Calculates the Total Flex Grow
       */


      function getTotalFlexGrow(columns) {
        var totalFlexGrow = 0;

        var _iterator11 = _createForOfIteratorHelper(columns),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var c = _step11.value;
            totalFlexGrow += c.flexGrow || 0;
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        return totalFlexGrow;
      }
      /**
       * Adjusts the column widths.
       * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
       */


      function adjustColumnWidths(allColumns, expectedWidth) {
        var columnsWidth = columnsTotalWidth(allColumns);
        var totalFlexGrow = getTotalFlexGrow(allColumns);
        var colsByGroup = columnsByPin(allColumns);

        if (columnsWidth !== expectedWidth) {
          scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
        }
      }
      /**
       * Resizes columns based on the flexGrow property, while respecting manually set widths
       */


      function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
        // calculate total width and flexgrow points for coulumns that can be resized
        for (var attr in colsByGroup) {
          var _iterator12 = _createForOfIteratorHelper(colsByGroup[attr]),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var column = _step12.value;

              if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
              } else {
                column.width = 0;
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }

        var hasMinWidth = {};
        var remainingWidth = maxWidth; // resize columns until no width is left to be distributed

        do {
          var widthPerFlexPoint = remainingWidth / totalFlexGrow;
          remainingWidth = 0;

          for (var _attr in colsByGroup) {
            var _iterator13 = _createForOfIteratorHelper(colsByGroup[_attr]),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _column = _step13.value;

                // if the column can be resize and it hasn't reached its minimum width yet
                if (_column.canAutoResize && !hasMinWidth[_column.prop]) {
                  var newWidth = _column.width + _column.flexGrow * widthPerFlexPoint;

                  if (_column.minWidth !== undefined && newWidth < _column.minWidth) {
                    remainingWidth += newWidth - _column.minWidth;
                    _column.width = _column.minWidth;
                    hasMinWidth[_column.prop] = true;
                  } else {
                    _column.width = newWidth;
                  }
                }
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }
        } while (remainingWidth !== 0);
      }
      /**
       * Forces the width of the columns to
       * distribute equally but overflowing when necessary
       *
       * Rules:
       *
       *  - If combined withs are less than the total width of the grid,
       *    proportion the widths given the min / max / normal widths to fill the width.
       *
       *  - If the combined widths, exceed the total width of the grid,
       *    use the standard widths.
       *
       *  - If a column is resized, it should always use that width
       *
       *  - The proportional widths should never fall below min size if specified.
       *
       *  - If the grid starts off small but then becomes greater than the size ( + / - )
       *    the width should use the original width; not the newly proportioned widths.
       */


      function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed) {
        var defaultColWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 300;
        var columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(function (c) {
          return c.canAutoResize !== false;
        });

        var _iterator14 = _createForOfIteratorHelper(columnsToResize),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _column2 = _step14.value;

            if (!_column2.$$oldWidth) {
              _column2.$$oldWidth = _column2.width;
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }

        var additionWidthPerColumn = 0;
        var exceedsWindow = false;
        var contentWidth = getContentWidth(allColumns, defaultColWidth);
        var remainingWidth = expectedWidth - contentWidth;
        var columnsProcessed = [];
        var remainingWidthLimit = 1; // when to stop
        // This loop takes care of the

        do {
          additionWidthPerColumn = remainingWidth / columnsToResize.length;
          exceedsWindow = contentWidth >= expectedWidth;

          var _iterator15 = _createForOfIteratorHelper(columnsToResize),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var column = _step15.value;

              if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
              } else {
                var newSize = (column.width || defaultColWidth) + additionWidthPerColumn;

                if (column.minWidth && newSize < column.minWidth) {
                  column.width = column.minWidth;
                  columnsProcessed.push(column);
                } else if (column.maxWidth && newSize > column.maxWidth) {
                  column.width = column.maxWidth;
                  columnsProcessed.push(column);
                } else {
                  column.width = newSize;
                }
              }

              column.width = Math.max(0, column.width);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }

          contentWidth = getContentWidth(allColumns);
          remainingWidth = expectedWidth - contentWidth;
          removeProcessedColumns(columnsToResize, columnsProcessed);
        } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
      }
      /**
       * Remove the processed columns from the current active columns.
       */


      function removeProcessedColumns(columnsToResize, columnsProcessed) {
        var _iterator16 = _createForOfIteratorHelper(columnsProcessed),
            _step16;

        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var column = _step16.value;
            var index = columnsToResize.indexOf(column);
            columnsToResize.splice(index, 1);
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
      }
      /**
       * Gets the width of the columns
       */


      function getContentWidth(allColumns) {
        var defaultColWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
        var contentWidth = 0;

        var _iterator17 = _createForOfIteratorHelper(allColumns),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var column = _step17.value;
            contentWidth += column.width || defaultColWidth;
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }

        return contentWidth;
      }

      var SortDirection;

      (function (SortDirection) {
        SortDirection["asc"] = "asc";
        SortDirection["desc"] = "desc";
      })(SortDirection || (SortDirection = {}));
      /**
       * Gets the next sort direction
       */


      function nextSortDir(sortType, current) {
        if (sortType === SortType.single) {
          if (current === SortDirection.asc) {
            return SortDirection.desc;
          } else {
            return SortDirection.asc;
          }
        } else {
          if (!current) {
            return SortDirection.asc;
          } else if (current === SortDirection.asc) {
            return SortDirection.desc;
          } else if (current === SortDirection.desc) {
            return undefined;
          } // avoid TS7030: Not all code paths return a value.


          return undefined;
        }
      }
      /**
       * Adapted from fueld-ui on 6/216
       * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
       */


      function orderByComparator(a, b) {
        if (a === null || typeof a === 'undefined') a = 0;
        if (b === null || typeof b === 'undefined') b = 0;

        if (a instanceof Date && b instanceof Date) {
          if (a < b) return -1;
          if (a > b) return 1;
        } else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
          // Convert to string in case of a=0 or b=0
          a = String(a);
          b = String(b); // Isn't a number so lowercase the string to properly compare

          if (a.toLowerCase() < b.toLowerCase()) return -1;
          if (a.toLowerCase() > b.toLowerCase()) return 1;
        } else {
          // Parse strings as numbers to compare properly
          if (parseFloat(a) < parseFloat(b)) return -1;
          if (parseFloat(a) > parseFloat(b)) return 1;
        } // equal each other


        return 0;
      }
      /**
       * creates a shallow copy of the `rows` input and returns the sorted copy. this function
       * does not sort the `rows` argument in place
       */


      function sortRows(rows, columns, dirs) {
        if (!rows) return [];
        if (!dirs || !dirs.length || !columns) return _toConsumableArray(rows);
        /**
         * record the row ordering of results from prior sort operations (if applicable)
         * this is necessary to guarantee stable sorting behavior
         */

        var rowToIndexMap = new Map();
        rows.forEach(function (row, index) {
          return rowToIndexMap.set(row, index);
        });

        var temp = _toConsumableArray(rows);

        var cols = columns.reduce(function (obj, col) {
          if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
          }

          return obj;
        }, {}); // cache valueGetter and compareFn so that they
        // do not need to be looked-up in the sort function body

        var cachedDirs = dirs.map(function (dir) {
          var prop = dir.prop;
          return {
            prop: prop,
            dir: dir.dir,
            valueGetter: getterForProp(prop),
            compareFn: cols[prop] || orderByComparator
          };
        });
        return temp.sort(function (rowA, rowB) {
          var _iterator18 = _createForOfIteratorHelper(cachedDirs),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var cachedDir = _step18.value;
              // Get property and valuegetters for column to be sorted
              var prop = cachedDir.prop,
                  valueGetter = cachedDir.valueGetter; // Get A and B cell values from rows based on properties of the columns

              var propA = valueGetter(rowA, prop);
              var propB = valueGetter(rowB, prop); // Compare function gets five parameters:
              // Two cell values to be compared as propA and propB
              // Two rows corresponding to the cells as rowA and rowB
              // Direction of the sort for this column as SortDirection
              // Compare can be a standard JS comparison function (a,b) => -1|0|1
              // as additional parameters are silently ignored. The whole row and sort
              // direction enable more complex sort logic.

              var comparison = cachedDir.dir !== SortDirection.desc ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir) : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir); // Don't return 0 yet in case of needing to sort by next property

              if (comparison !== 0) return comparison;
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB))) return 0;
          /**
           * all else being equal, preserve original order of the rows (stable sort)
           */

          return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
        });
      }

      var DatatableComponent = /*#__PURE__*/function () {
        function DatatableComponent(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
          var _this18 = this;

          _classCallCheck(this, DatatableComponent);

          this.scrollbarHelper = scrollbarHelper;
          this.dimensionsHelper = dimensionsHelper;
          this.cd = cd;
          this.columnChangesService = columnChangesService;
          this.configuration = configuration;
          /**
           * List of row objects that should be
           * represented as selected in the grid.
           * Default value: `[]`
           */

          this.selected = [];
          /**
           * Enable vertical scrollbars
           */

          this.scrollbarV = false;
          /**
           * Enable horz scrollbars
           */

          this.scrollbarH = false;
          /**
           * The row height; which is necessary
           * to calculate the height for the lazy rendering.
           */

          this.rowHeight = 30;
          /**
           * Type of column width distribution formula.
           * Example: flex, force, standard
           */

          this.columnMode = ColumnMode.standard;
          /**
           * The minimum header height in pixels.
           * Pass a falsey for no header
           */

          this.headerHeight = 30;
          /**
           * The minimum footer height in pixels.
           * Pass falsey for no footer
           */

          this.footerHeight = 0;
          /**
           * If the table should use external paging
           * otherwise its assumed that all data is preloaded.
           */

          this.externalPaging = false;
          /**
           * If the table should use external sorting or
           * the built-in basic sorting.
           */

          this.externalSorting = false;
          /**
           * Show the linear loading bar.
           * Default value: `false`
           */

          this.loadingIndicator = false;
          /**
           * Enable/Disable ability to re-order columns
           * by dragging them.
           */

          this.reorderable = true;
          /**
           * Swap columns on re-order columns or
           * move them.
           */

          this.swapColumns = true;
          /**
           * The type of sorting
           */

          this.sortType = SortType.single;
          /**
           * Array of sorted columns by property and type.
           * Default value: `[]`
           */

          this.sorts = [];
          /**
           * Css class overrides
           */

          this.cssClasses = {
            sortAscending: 'datatable-icon-up',
            sortDescending: 'datatable-icon-down',
            sortUnset: 'datatable-icon-sort-unset',
            pagerLeftArrow: 'datatable-icon-left',
            pagerRightArrow: 'datatable-icon-right',
            pagerPrevious: 'datatable-icon-prev',
            pagerNext: 'datatable-icon-skip'
          };
          /**
           * Message overrides for localization
           *
           * emptyMessage     [default] = 'No data to display'
           * totalMessage     [default] = 'total'
           * selectedMessage  [default] = 'selected'
           */

          this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total',
            // Footer selected message
            selectedMessage: 'selected'
          };
          /**
           * A boolean you can use to set the detault behaviour of rows and groups
           * whether they will start expanded or not. If ommited the default is NOT expanded.
           *
           */

          this.groupExpansionDefault = false;
          /**
           * Property to which you can use for determining select all
           * rows on current page or not.
           *
           * @memberOf DatatableComponent
           */

          this.selectAllRowsOnPage = false;
          /**
           * A flag for row virtualization on / off
           */

          this.virtualization = true;
          /**
           * A flag for switching summary row on / off
           */

          this.summaryRow = false;
          /**
           * A height of summary row
           */

          this.summaryHeight = 30;
          /**
           * A property holds a summary row position: top/bottom
           */

          this.summaryPosition = 'top';
          /**
           * Body was scrolled typically in a `scrollbarV:true` scenario.
           */

          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * A cell or row was focused via keyboard or mouse click.
           */

          this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * A cell or row was selected.
           */

          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Column sort was invoked.
           */

          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * The table was paged either triggered by the pager or the body scroll.
           */

          this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Columns were re-ordered.
           */

          this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Column was resized.
           */

          this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * The context menu was invoked on the table.
           * type indicates whether the header or the body was clicked.
           * content contains either the column or the row that was clicked.
           */

          this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
          /**
           * A row was expanded ot collapsed for tree
           */

          this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.rowCount = 0;
          this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
          this._count = 0;
          this._offset = 0;
          this._subscriptions = [];
          /**
           * This will be used when displaying or selecting rows.
           * when tracking/comparing them, we'll use the value of this fn,
           *
           * (`fn(x) === fn(y)` instead of `x === y`)
           */

          this.rowIdentity = function (x) {
            if (_this18._groupRowsBy) {
              // each group in groupedRows are stored as {key, value: [rows]},
              // where key is the groupRowsBy index
              return x.key;
            } else {
              return x;
            }
          }; // get ref to elm for measuring


          this.element = element.nativeElement;
          this.rowDiffer = differs.find({}).create(); // apply global settings from Module.forRoot

          if (this.configuration && this.configuration.messages) {
            this.messages = Object.assign({}, this.configuration.messages);
          }
        }
        /**
         * Rows that are displayed in the table.
         */


        _createClass(DatatableComponent, [{
          key: "ngOnInit",

          /**
           * Lifecycle hook that is called after data-bound
           * properties of a directive are initialized.
           */
          value: function ngOnInit() {
            // need to call this immediatly to size
            // if the table is hidden the visibility
            // listener will invoke this itself upon show
            this.recalculate();
          }
          /**
           * Lifecycle hook that is called after a component's
           * view has been fully initialized.
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this19 = this;

            if (!this.externalSorting) {
              this.sortInternalRows();
            } // this has to be done to prevent the change detection
            // tree from freaking out because we are readjusting


            if (typeof requestAnimationFrame === 'undefined') {
              return;
            }

            requestAnimationFrame(function () {
              _this19.recalculate(); // emit page for virtual server-side kickoff


              if (_this19.externalPaging && _this19.scrollbarV) {
                _this19.page.emit({
                  count: _this19.count,
                  pageSize: _this19.pageSize,
                  limit: _this19.limit,
                  offset: 0
                });
              }
            });
          }
          /**
           * Lifecycle hook that is called after a component's
           * content has been fully initialized.
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this20 = this;

            this.columnTemplates.changes.subscribe(function (v) {
              return _this20.translateColumns(v);
            });
            this.listenForColumnInputChanges();
          }
          /**
           * Translates the templates to the column objects
           */

        }, {
          key: "translateColumns",
          value: function translateColumns(val) {
            if (val) {
              var arr = val.toArray();

              if (arr.length) {
                this._internalColumns = translateTemplates(arr);
                setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
                this.sortInternalRows();
                this.cd.markForCheck();
              }
            }
          }
          /**
           * Creates a map with the data grouped by the user choice of grouping index
           *
           * @param originalArray the original array passed via parameter
           * @param groupByIndex  the index of the column to group the data by
           */

        }, {
          key: "groupArrayBy",
          value: function groupArrayBy(originalArray, groupBy) {
            // create a map to hold groups with their corresponding results
            var map = new Map();
            var i = 0;
            originalArray.forEach(function (item) {
              var key = item[groupBy];

              if (!map.has(key)) {
                map.set(key, [item]);
              } else {
                map.get(key).push(item);
              }

              i++;
            });

            var addGroup = function addGroup(key, value) {
              return {
                key: key,
                value: value
              };
            }; // convert map back to a simple array of objects


            return Array.from(map, function (x) {
              return addGroup(x[0], x[1]);
            });
          }
          /*
           * Lifecycle hook that is called when Angular dirty checks a directive.
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.rowDiffer.diff(this.rows)) {
              if (!this.externalSorting) {
                this.sortInternalRows();
              } else {
                this._internalRows = _toConsumableArray(this.rows);
              } // auto group by parent on new update


              this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
              this.recalculatePages();
              this.cd.markForCheck();
            }
          }
          /**
           * Recalc's the sizes of the grid.
           *
           * Updated automatically on changes to:
           *
           *  - Columns
           *  - Rows
           *  - Paging related
           *
           * Also can be manually invoked or upon window resize.
           */

        }, {
          key: "recalculate",
          value: function recalculate() {
            this.recalculateDims();
            this.recalculateColumns();
            this.cd.markForCheck();
          }
          /**
           * Window resize handler to update sizes.
           */

        }, {
          key: "onWindowResize",
          value: function onWindowResize() {
            this.recalculate();
          }
          /**
           * Recalulcates the column widths based on column width
           * distribution mode and scrollbar offsets.
           */

        }, {
          key: "recalculateColumns",
          value: function recalculateColumns() {
            var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._internalColumns;
            var forceIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
            var allowBleed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.scrollbarH;
            if (!columns) return undefined;
            var width = this._innerWidth;

            if (this.scrollbarV) {
              width = width - this.scrollbarHelper.width;
            }

            if (this.columnMode === ColumnMode.force) {
              forceFillColumnWidths(columns, width, forceIdx, allowBleed);
            } else if (this.columnMode === ColumnMode.flex) {
              adjustColumnWidths(columns, width);
            }

            return columns;
          }
          /**
           * Recalculates the dimensions of the table size.
           * Internally calls the page size and row count calcs too.
           *
           */

        }, {
          key: "recalculateDims",
          value: function recalculateDims() {
            var dims = this.dimensionsHelper.getDimensions(this.element);
            this._innerWidth = Math.floor(dims.width);

            if (this.scrollbarV) {
              var height = dims.height;
              if (this.headerHeight) height = height - this.headerHeight;
              if (this.footerHeight) height = height - this.footerHeight;
              this.bodyHeight = height;
            }

            this.recalculatePages();
          }
          /**
           * Recalculates the pages after a update.
           */

        }, {
          key: "recalculatePages",
          value: function recalculatePages() {
            this.pageSize = this.calcPageSize();
            this.rowCount = this.calcRowCount();
          }
          /**
           * Body triggered a page event.
           */

        }, {
          key: "onBodyPage",
          value: function onBodyPage(_ref12) {
            var offset = _ref12.offset;

            // Avoid pagination caming from body events like scroll when the table
            // has no virtualization and the external paging is enable.
            // This means, let's the developer handle pagination by my him(her) self
            if (this.externalPaging && !this.virtualization) {
              return;
            }

            this.offset = offset;
            this.page.emit({
              count: this.count,
              pageSize: this.pageSize,
              limit: this.limit,
              offset: this.offset
            });
          }
          /**
           * The body triggered a scroll event.
           */

        }, {
          key: "onBodyScroll",
          value: function onBodyScroll(event) {
            this._offsetX.next(event.offsetX);

            this.scroll.emit(event);
            this.cd.detectChanges();
          }
          /**
           * The footer triggered a page event.
           */

        }, {
          key: "onFooterPage",
          value: function onFooterPage(event) {
            this.offset = event.page - 1;
            this.bodyComponent.updateOffsetY(this.offset);
            this.page.emit({
              count: this.count,
              pageSize: this.pageSize,
              limit: this.limit,
              offset: this.offset
            });

            if (this.selectAllRowsOnPage) {
              this.selected = [];
              this.select.emit({
                selected: this.selected
              });
            }
          }
          /**
           * Recalculates the sizes of the page
           */

        }, {
          key: "calcPageSize",
          value: function calcPageSize() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.rows;

            // Keep the page size constant even if the row has been expanded.
            // This is because an expanded row is still considered to be a child of
            // the original row.  Hence calculation would use rowHeight only.
            if (this.scrollbarV && this.virtualization) {
              var size = Math.ceil(this.bodyHeight / this.rowHeight);
              return Math.max(size, 0);
            } // if limit is passed, we are paging


            if (this.limit !== undefined) {
              return this.limit;
            } // otherwise use row length


            if (val) {
              return val.length;
            } // other empty :(


            return 0;
          }
          /**
           * Calculates the row count.
           */

        }, {
          key: "calcRowCount",
          value: function calcRowCount() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.rows;

            if (!this.externalPaging) {
              if (!val) return 0;

              if (this.groupedRows) {
                return this.groupedRows.length;
              } else if (this.treeFromRelation != null && this.treeToRelation != null) {
                return this._internalRows.length;
              } else {
                return val.length;
              }
            }

            return this.count;
          }
          /**
           * The header triggered a contextmenu event.
           */

        }, {
          key: "onColumnContextmenu",
          value: function onColumnContextmenu(_ref13) {
            var event = _ref13.event,
                column = _ref13.column;
            this.tableContextmenu.emit({
              event: event,
              type: ContextmenuType.header,
              content: column
            });
          }
          /**
           * The body triggered a contextmenu event.
           */

        }, {
          key: "onRowContextmenu",
          value: function onRowContextmenu(_ref14) {
            var event = _ref14.event,
                row = _ref14.row;
            this.tableContextmenu.emit({
              event: event,
              type: ContextmenuType.body,
              content: row
            });
          }
          /**
           * The header triggered a column resize event.
           */

        }, {
          key: "onColumnResize",
          value: function onColumnResize(_ref15) {
            var column = _ref15.column,
                newValue = _ref15.newValue;

            /* Safari/iOS 10.2 workaround */
            if (column === undefined) {
              return;
            }

            var idx;

            var cols = this._internalColumns.map(function (c, i) {
              c = Object.assign({}, c);

              if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue; // set this so we can force the column
                // width distribution to be to this value

                c.$$oldWidth = newValue;
              }

              return c;
            });

            this.recalculateColumns(cols, idx);
            this._internalColumns = cols;
            this.resize.emit({
              column: column,
              newValue: newValue
            });
          }
          /**
           * The header triggered a column re-order event.
           */

        }, {
          key: "onColumnReorder",
          value: function onColumnReorder(_ref16) {
            var column = _ref16.column,
                newValue = _ref16.newValue,
                prevValue = _ref16.prevValue;

            var cols = this._internalColumns.map(function (c) {
              return Object.assign({}, c);
            });

            if (this.swapColumns) {
              var prevCol = cols[newValue];
              cols[newValue] = column;
              cols[prevValue] = prevCol;
            } else {
              if (newValue > prevValue) {
                var movedCol = cols[prevValue];

                for (var i = prevValue; i < newValue; i++) {
                  cols[i] = cols[i + 1];
                }

                cols[newValue] = movedCol;
              } else {
                var _movedCol = cols[prevValue];

                for (var _i3 = prevValue; _i3 > newValue; _i3--) {
                  cols[_i3] = cols[_i3 - 1];
                }

                cols[newValue] = _movedCol;
              }
            }

            this._internalColumns = cols;
            this.reorder.emit({
              column: column,
              newValue: newValue,
              prevValue: prevValue
            });
          }
          /**
           * The header triggered a column sort event.
           */

        }, {
          key: "onColumnSort",
          value: function onColumnSort(event) {
            // clean selected rows
            if (this.selectAllRowsOnPage) {
              this.selected = [];
              this.select.emit({
                selected: this.selected
              });
            }

            this.sorts = event.sorts; // this could be optimized better since it will resort
            // the rows again on the 'push' detection...

            if (this.externalSorting === false) {
              // don't use normal setter so we don't resort
              this.sortInternalRows();
            } // auto group by parent on new update


            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation)); // Always go to first page when sorting to see the newly sorted data

            this.offset = 0;
            this.bodyComponent.updateOffsetY(this.offset);
            this.sort.emit(event);
          }
          /**
           * Toggle all row selection
           */

        }, {
          key: "onHeaderSelect",
          value: function onHeaderSelect(event) {
            if (this.bodyComponent && this.selectAllRowsOnPage) {
              // before we splice, chk if we currently have all selected
              var first = this.bodyComponent.indexes.first;
              var last = this.bodyComponent.indexes.last;
              var allSelected = this.selected.length === last - first; // remove all existing either way

              this.selected = []; // do the opposite here

              if (!allSelected) {
                var _this$selected;

                (_this$selected = this.selected).push.apply(_this$selected, _toConsumableArray(this._internalRows.slice(first, last)));
              }
            } else {
              // before we splice, chk if we currently have all selected
              var _allSelected = this.selected.length === this.rows.length; // remove all existing either way


              this.selected = []; // do the opposite here

              if (!_allSelected) {
                var _this$selected2;

                (_this$selected2 = this.selected).push.apply(_this$selected2, _toConsumableArray(this.rows));
              }
            }

            this.select.emit({
              selected: this.selected
            });
          }
          /**
           * A row was selected from body
           */

        }, {
          key: "onBodySelect",
          value: function onBodySelect(event) {
            this.select.emit(event);
          }
          /**
           * A row was expanded or collapsed for tree
           */

        }, {
          key: "onTreeAction",
          value: function onTreeAction(event) {
            var _this21 = this;

            var row = event.row; // TODO: For duplicated items this will not work

            var rowIndex = this._rows.findIndex(function (r) {
              return r[_this21.treeToRelation] === event.row[_this21.treeToRelation];
            });

            this.treeAction.emit({
              row: row,
              rowIndex: rowIndex
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._subscriptions.forEach(function (subscription) {
              return subscription.unsubscribe();
            });
          }
          /**
           * listen for changes to input bindings of all DataTableColumnDirective and
           * trigger the columnTemplates.changes observable to emit
           */

        }, {
          key: "listenForColumnInputChanges",
          value: function listenForColumnInputChanges() {
            var _this22 = this;

            this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(function () {
              if (_this22.columnTemplates) {
                _this22.columnTemplates.notifyOnChanges();
              }
            }));
          }
        }, {
          key: "sortInternalRows",
          value: function sortInternalRows() {
            this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
          }
        }, {
          key: "rows",
          set: function set(val) {
            this._rows = val;

            if (val) {
              this._internalRows = _toConsumableArray(val);
            } // auto sort on new updates


            if (!this.externalSorting) {
              this.sortInternalRows();
            } // auto group by parent on new update


            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation)); // recalculate sizes/etc

            this.recalculate();

            if (this._rows && this._groupRowsBy) {
              // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
              this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }

            this.cd.markForCheck();
          }
          /**
           * Gets the rows.
           */
          ,
          get: function get() {
            return this._rows;
          }
          /**
           * This attribute allows the user to set the name of the column to group the data with
           */

        }, {
          key: "groupRowsBy",
          set: function set(val) {
            if (val) {
              this._groupRowsBy = val;

              if (this._rows && this._groupRowsBy) {
                // cretes a new array with the data grouped
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
              }
            }
          },
          get: function get() {
            return this._groupRowsBy;
          }
          /**
           * Columns to be displayed.
           */

        }, {
          key: "columns",
          set: function set(val) {
            if (val) {
              this._internalColumns = _toConsumableArray(val);
              setColumnDefaults(this._internalColumns);
              this.recalculateColumns();
            }

            this._columns = val;
          }
          /**
           * Get the columns.
           */
          ,
          get: function get() {
            return this._columns;
          }
          /**
           * The page size to be shown.
           * Default value: `undefined`
           */

        }, {
          key: "limit",
          set: function set(val) {
            this._limit = val; // recalculate sizes/etc

            this.recalculate();
          }
          /**
           * Gets the limit.
           */
          ,
          get: function get() {
            return this._limit;
          }
          /**
           * The total count of all rows.
           * Default value: `0`
           */

        }, {
          key: "count",
          set: function set(val) {
            this._count = val; // recalculate sizes/etc

            this.recalculate();
          }
          /**
           * Gets the count.
           */
          ,
          get: function get() {
            return this._count;
          }
          /**
           * The current offset ( page - 1 ) shown.
           * Default value: `0`
           */

        }, {
          key: "offset",
          set: function set(val) {
            this._offset = val;
          },
          get: function get() {
            return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
          }
          /**
           * CSS class applied if the header height if fixed height.
           */

        }, {
          key: "isFixedHeader",
          get: function get() {
            var headerHeight = this.headerHeight;
            return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
          }
          /**
           * CSS class applied to the root element if
           * the row heights are fixed heights.
           */

        }, {
          key: "isFixedRow",
          get: function get() {
            return this.rowHeight !== 'auto';
          }
          /**
           * CSS class applied to root element if
           * vertical scrolling is enabled.
           */

        }, {
          key: "isVertScroll",
          get: function get() {
            return this.scrollbarV;
          }
          /**
           * CSS class applied to root element if
           * virtualization is enabled.
           */

        }, {
          key: "isVirtualized",
          get: function get() {
            return this.virtualization;
          }
          /**
           * CSS class applied to the root element
           * if the horziontal scrolling is enabled.
           */

        }, {
          key: "isHorScroll",
          get: function get() {
            return this.scrollbarH;
          }
          /**
           * CSS class applied to root element is selectable.
           */

        }, {
          key: "isSelectable",
          get: function get() {
            return this.selectionType !== undefined;
          }
          /**
           * CSS class applied to root is checkbox selection.
           */

        }, {
          key: "isCheckboxSelection",
          get: function get() {
            return this.selectionType === SelectionType.checkbox;
          }
          /**
           * CSS class applied to root if cell selection.
           */

        }, {
          key: "isCellSelection",
          get: function get() {
            return this.selectionType === SelectionType.cell;
          }
          /**
           * CSS class applied to root if single select.
           */

        }, {
          key: "isSingleSelection",
          get: function get() {
            return this.selectionType === SelectionType.single;
          }
          /**
           * CSS class added to root element if mulit select
           */

        }, {
          key: "isMultiSelection",
          get: function get() {
            return this.selectionType === SelectionType.multi;
          }
          /**
           * CSS class added to root element if mulit click select
           */

        }, {
          key: "isMultiClickSelection",
          get: function get() {
            return this.selectionType === SelectionType.multiClick;
          }
          /**
           * Column templates gathered from `ContentChildren`
           * if described in your markup.
           */

        }, {
          key: "columnTemplates",
          set: function set(val) {
            this._columnTemplates = val;
            this.translateColumns(val);
          }
          /**
           * Returns the column templates.
           */
          ,
          get: function get() {
            return this._columnTemplates;
          }
          /**
           * Returns if all rows are selected.
           */

        }, {
          key: "allRowsSelected",
          get: function get() {
            var allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;

            if (this.bodyComponent && this.selectAllRowsOnPage) {
              var indexes = this.bodyComponent.indexes;
              var rowsOnPage = indexes.last - indexes.first;
              allRowsSelected = this.selected.length === rowsOnPage;
            }

            return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
          }
        }]);

        return DatatableComponent;
      }();

      DatatableComponent.ɵfac = function DatatableComponent_Factory(t) {
        return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]('configuration', 8));
      };

      DatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatatableComponent,
        selectors: [["ngx-datatable"]],
        contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailDirective, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderDirective, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DatatableFooterDirective, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DataTableColumnDirective, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
          }
        },
        viewQuery: function DatatableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](DataTableBodyComponent, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](DataTableHeaderComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
          }
        },
        hostAttrs: [1, "ngx-datatable"],
        hostVars: 22,
        hostBindings: function DatatableComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() {
              return ctx.onWindowResize();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
          }
        },
        inputs: {
          selected: "selected",
          scrollbarV: "scrollbarV",
          scrollbarH: "scrollbarH",
          rowHeight: "rowHeight",
          columnMode: "columnMode",
          headerHeight: "headerHeight",
          footerHeight: "footerHeight",
          externalPaging: "externalPaging",
          externalSorting: "externalSorting",
          loadingIndicator: "loadingIndicator",
          reorderable: "reorderable",
          swapColumns: "swapColumns",
          sortType: "sortType",
          sorts: "sorts",
          cssClasses: "cssClasses",
          messages: "messages",
          groupExpansionDefault: "groupExpansionDefault",
          selectAllRowsOnPage: "selectAllRowsOnPage",
          virtualization: "virtualization",
          summaryRow: "summaryRow",
          summaryHeight: "summaryHeight",
          summaryPosition: "summaryPosition",
          rowIdentity: "rowIdentity",
          rows: "rows",
          groupedRows: "groupedRows",
          groupRowsBy: "groupRowsBy",
          columns: "columns",
          limit: "limit",
          count: "count",
          offset: "offset",
          targetMarkerTemplate: "targetMarkerTemplate",
          selectionType: "selectionType",
          rowClass: "rowClass",
          selectCheck: "selectCheck",
          displayCheck: "displayCheck",
          trackByProp: "trackByProp",
          treeFromRelation: "treeFromRelation",
          treeToRelation: "treeToRelation"
        },
        outputs: {
          scroll: "scroll",
          activate: "activate",
          select: "select",
          sort: "sort",
          page: "page",
          reorder: "reorder",
          resize: "resize",
          tableContextmenu: "tableContextmenu",
          treeAction: "treeAction"
        },
        decls: 5,
        vars: 34,
        consts: [["visibilityObserver", "", 3, "visible"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], [3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]],
        template: function DatatableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() {
              return ctx.recalculate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 17, "datatable-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "datatable-body", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) {
              return ctx.onBodyPage($event);
            })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) {
              return ctx.activate.emit($event);
            })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) {
              return ctx.onRowContextmenu($event);
            })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) {
              return ctx.onBodySelect($event);
            })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) {
              return ctx.onBodyScroll($event);
            })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) {
              return ctx.onTreeAction($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.headerHeight);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footerHeight);
          }
        },
        directives: function directives() {
          return [VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DataTableBodyComponent, DataTableHeaderComponent, DataTableFooterComponent];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]];
        },
        styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"],
        encapsulation: 2,
        changeDetection: 0
      });

      DatatableComponent.ctorParameters = function () {
        return [{
          type: ScrollbarHelper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: DimensionsHelper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
        }, {
          type: ColumnChangesService
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: ['configuration']
          }]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "targetMarkerTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "rows", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "groupRowsBy", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "groupedRows", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "columns", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "selected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "scrollbarV", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "scrollbarH", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "rowHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "columnMode", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "headerHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "footerHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "externalPaging", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "externalSorting", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "limit", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "count", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "offset", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "loadingIndicator", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "selectionType", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "reorderable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "swapColumns", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "sortType", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "sorts", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "cssClasses", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "messages", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "rowClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "selectCheck", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "displayCheck", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "groupExpansionDefault", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "trackByProp", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "selectAllRowsOnPage", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "virtualization", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "treeFromRelation", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "treeToRelation", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "summaryRow", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "summaryHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "summaryPosition", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "scroll", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "activate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "select", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "sort", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "page", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "reorder", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "resize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "tableContextmenu", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatatableComponent.prototype, "treeAction", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.fixed-header')], DatatableComponent.prototype, "isFixedHeader", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.fixed-row')], DatatableComponent.prototype, "isFixedRow", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.scroll-vertical')], DatatableComponent.prototype, "isVertScroll", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.virtualized')], DatatableComponent.prototype, "isVirtualized", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.scroll-horz')], DatatableComponent.prototype, "isHorScroll", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.selectable')], DatatableComponent.prototype, "isSelectable", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.checkbox-selection')], DatatableComponent.prototype, "isCheckboxSelection", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.cell-selection')], DatatableComponent.prototype, "isCellSelection", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.single-selection')], DatatableComponent.prototype, "isSingleSelection", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.multi-selection')], DatatableComponent.prototype, "isMultiSelection", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.multi-click-selection')], DatatableComponent.prototype, "isMultiClickSelection", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(DataTableColumnDirective)], DatatableComponent.prototype, "columnTemplates", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableRowDetailDirective)], DatatableComponent.prototype, "rowDetail", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableGroupHeaderDirective)], DatatableComponent.prototype, "groupHeader", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableFooterDirective)], DatatableComponent.prototype, "footer", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(DataTableBodyComponent)], DatatableComponent.prototype, "bodyComponent", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(DataTableHeaderComponent)], DatatableComponent.prototype, "headerComponent", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatatableComponent.prototype, "rowIdentity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'), throttleable(5)], DatatableComponent.prototype, "onWindowResize", null);
      DatatableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('configuration'))], DatatableComponent);

      var DataTableHeaderCellComponent = /*#__PURE__*/function () {
        function DataTableHeaderCellComponent(cd) {
          _classCallCheck(this, DataTableHeaderCellComponent);

          this.cd = cd;
          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
          this.sortFn = this.onSort.bind(this);
          this.selectFn = this.select.emit.bind(this.select);
          this.cellContext = {
            column: this.column,
            sortDir: this.sortDir,
            sortFn: this.sortFn,
            allRowsSelected: this.allRowsSelected,
            selectFn: this.selectFn
          };
        }

        _createClass(DataTableHeaderCellComponent, [{
          key: "onContextmenu",
          value: function onContextmenu($event) {
            this.columnContextmenu.emit({
              event: $event,
              column: this.column
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sortClass = this.calcSortClass(this.sortDir);
          }
        }, {
          key: "calcSortDir",
          value: function calcSortDir(sorts) {
            var _this23 = this;

            if (sorts && this.column) {
              var sort = sorts.find(function (s) {
                return s.prop === _this23.column.prop;
              });
              if (sort) return sort.dir;
            }
          }
        }, {
          key: "onSort",
          value: function onSort() {
            if (!this.column.sortable) return;
            var newValue = nextSortDir(this.sortType, this.sortDir);
            this.sort.emit({
              column: this.column,
              prevValue: this.sortDir,
              newValue: newValue
            });
          }
        }, {
          key: "calcSortClass",
          value: function calcSortClass(sortDir) {
            if (!this.cellContext.column.sortable) return;

            if (sortDir === SortDirection.asc) {
              return "sort-btn sort-asc ".concat(this.sortAscendingIcon);
            } else if (sortDir === SortDirection.desc) {
              return "sort-btn sort-desc ".concat(this.sortDescendingIcon);
            } else {
              return "sort-btn ".concat(this.sortUnsetIcon);
            }
          }
        }, {
          key: "allRowsSelected",
          set: function set(value) {
            this._allRowsSelected = value;
            this.cellContext.allRowsSelected = value;
          },
          get: function get() {
            return this._allRowsSelected;
          }
        }, {
          key: "column",
          set: function set(column) {
            this._column = column;
            this.cellContext.column = column;
            this.cd.markForCheck();
          },
          get: function get() {
            return this._column;
          }
        }, {
          key: "sorts",
          set: function set(val) {
            this._sorts = val;
            this.sortDir = this.calcSortDir(val);
            this.cellContext.sortDir = this.sortDir;
            this.sortClass = this.calcSortClass(this.sortDir);
            this.cd.markForCheck();
          },
          get: function get() {
            return this._sorts;
          }
        }, {
          key: "columnCssClasses",
          get: function get() {
            var cls = 'datatable-header-cell';
            if (this.column.sortable) cls += ' sortable';
            if (this.column.resizeable) cls += ' resizeable';

            if (this.column.headerClass) {
              if (typeof this.column.headerClass === 'string') {
                cls += ' ' + this.column.headerClass;
              } else if (typeof this.column.headerClass === 'function') {
                var res = this.column.headerClass({
                  column: this.column
                });

                if (typeof res === 'string') {
                  cls += res;
                } else if (typeof res === 'object') {
                  var keys = Object.keys(res);

                  for (var _i4 = 0, _keys = keys; _i4 < _keys.length; _i4++) {
                    var k = _keys[_i4];
                    if (res[k] === true) cls += " ".concat(k);
                  }
                }
              }
            }

            var sortDir = this.sortDir;

            if (sortDir) {
              cls += " sort-active sort-".concat(sortDir);
            }

            return cls;
          }
        }, {
          key: "name",
          get: function get() {
            // guaranteed to have a value by setColumnDefaults() in column-helper.ts
            return this.column.headerTemplate === undefined ? this.column.name : undefined;
          }
        }, {
          key: "minWidth",
          get: function get() {
            return this.column.minWidth;
          }
        }, {
          key: "maxWidth",
          get: function get() {
            return this.column.maxWidth;
          }
        }, {
          key: "width",
          get: function get() {
            return this.column.width;
          }
        }, {
          key: "isCheckboxable",
          get: function get() {
            return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
          }
        }]);

        return DataTableHeaderCellComponent;
      }();

      DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) {
        return new (t || DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      DataTableHeaderCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DataTableHeaderCellComponent,
        selectors: [["datatable-header-cell"]],
        hostAttrs: [1, "datatable-header-cell"],
        hostVars: 11,
        hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) {
              return ctx.onContextmenu($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.columnCssClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px")("height", ctx.headerHeight, "px");
          }
        },
        inputs: {
          allRowsSelected: "allRowsSelected",
          column: "column",
          sorts: "sorts",
          sortType: "sortType",
          sortAscendingIcon: "sortAscendingIcon",
          sortDescendingIcon: "sortDescendingIcon",
          sortUnsetIcon: "sortUnsetIcon",
          isTarget: "isTarget",
          targetMarkerTemplate: "targetMarkerTemplate",
          targetMarkerContext: "targetMarkerContext",
          selectionType: "selectionType",
          headerHeight: "headerHeight"
        },
        outputs: {
          sort: "sort",
          select: "select",
          columnContextmenu: "columnContextmenu"
        },
        decls: 6,
        vars: 6,
        consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]],
        template: function DataTableHeaderCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, undefined, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableHeaderCellComponent_4_Template, 1, 2, undefined, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() {
              return ctx.onSort();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTarget);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sortClass);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });

      DataTableHeaderCellComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "sortType", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "sortAscendingIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "sortDescendingIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "sortUnsetIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "isTarget", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "targetMarkerTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "targetMarkerContext", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "allRowsSelected", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "selectionType", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "column", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height.px'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "headerHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableHeaderCellComponent.prototype, "sorts", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderCellComponent.prototype, "sort", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderCellComponent.prototype, "select", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableHeaderCellComponent.prototype, "columnContextmenu", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], DataTableHeaderCellComponent.prototype, "columnCssClasses", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.title')], DataTableHeaderCellComponent.prototype, "name", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.minWidth.px')], DataTableHeaderCellComponent.prototype, "minWidth", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.maxWidth.px')], DataTableHeaderCellComponent.prototype, "maxWidth", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width.px')], DataTableHeaderCellComponent.prototype, "width", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('contextmenu', ['$event'])], DataTableHeaderCellComponent.prototype, "onContextmenu", null);

      var DataTableFooterComponent = /*#__PURE__*/function () {
        function DataTableFooterComponent() {
          _classCallCheck(this, DataTableFooterComponent);

          this.selectedCount = 0;
          this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(DataTableFooterComponent, [{
          key: "isVisible",
          get: function get() {
            return this.rowCount / this.pageSize > 1;
          }
        }, {
          key: "curPage",
          get: function get() {
            return this.offset + 1;
          }
        }]);

        return DataTableFooterComponent;
      }();

      DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) {
        return new (t || DataTableFooterComponent)();
      };

      DataTableFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DataTableFooterComponent,
        selectors: [["datatable-footer"]],
        hostAttrs: [1, "datatable-footer"],
        inputs: {
          selectedCount: "selectedCount",
          footerHeight: "footerHeight",
          rowCount: "rowCount",
          pageSize: "pageSize",
          offset: "offset",
          pagerLeftArrowIcon: "pagerLeftArrowIcon",
          pagerRightArrowIcon: "pagerRightArrowIcon",
          pagerPreviousIcon: "pagerPreviousIcon",
          pagerNextIcon: "pagerNextIcon",
          totalMessage: "totalMessage",
          footerTemplate: "footerTemplate",
          selectedMessage: "selectedMessage"
        },
        outputs: {
          page: "page"
        },
        decls: 4,
        vars: 8,
        consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]],
        template: function DataTableFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, undefined, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, ctx.selectedMessage));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], DataTablePagerComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "footerHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "rowCount", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "pageSize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "offset", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "pagerLeftArrowIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "pagerRightArrowIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "pagerPreviousIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "pagerNextIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "totalMessage", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "footerTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "selectedCount", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableFooterComponent.prototype, "selectedMessage", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableFooterComponent.prototype, "page", void 0);

      var DataTablePagerComponent = /*#__PURE__*/function () {
        function DataTablePagerComponent() {
          _classCallCheck(this, DataTablePagerComponent);

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._count = 0;
          this._page = 1;
          this._size = 0;
        }

        _createClass(DataTablePagerComponent, [{
          key: "canPrevious",
          value: function canPrevious() {
            return this.page > 1;
          }
        }, {
          key: "canNext",
          value: function canNext() {
            return this.page < this.totalPages;
          }
        }, {
          key: "prevPage",
          value: function prevPage() {
            this.selectPage(this.page - 1);
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            this.selectPage(this.page + 1);
          }
        }, {
          key: "selectPage",
          value: function selectPage(page) {
            if (page > 0 && page <= this.totalPages && page !== this.page) {
              this.page = page;
              this.change.emit({
                page: page
              });
            }
          }
        }, {
          key: "calcPages",
          value: function calcPages(page) {
            var pages = [];
            var startPage = 1;
            var endPage = this.totalPages;
            var maxSize = 5;
            var isMaxSized = maxSize < this.totalPages;
            page = page || this.page;

            if (isMaxSized) {
              startPage = page - Math.floor(maxSize / 2);
              endPage = page + Math.floor(maxSize / 2);

              if (startPage < 1) {
                startPage = 1;
                endPage = Math.min(startPage + maxSize - 1, this.totalPages);
              } else if (endPage > this.totalPages) {
                startPage = Math.max(this.totalPages - maxSize + 1, 1);
                endPage = this.totalPages;
              }
            }

            for (var num = startPage; num <= endPage; num++) {
              pages.push({
                number: num,
                text: num
              });
            }

            return pages;
          }
        }, {
          key: "size",
          set: function set(val) {
            this._size = val;
            this.pages = this.calcPages();
          },
          get: function get() {
            return this._size;
          }
        }, {
          key: "count",
          set: function set(val) {
            this._count = val;
            this.pages = this.calcPages();
          },
          get: function get() {
            return this._count;
          }
        }, {
          key: "page",
          set: function set(val) {
            this._page = val;
            this.pages = this.calcPages();
          },
          get: function get() {
            return this._page;
          }
        }, {
          key: "totalPages",
          get: function get() {
            var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
            return Math.max(count || 0, 1);
          }
        }]);

        return DataTablePagerComponent;
      }();

      DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) {
        return new (t || DataTablePagerComponent)();
      };

      DataTablePagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DataTablePagerComponent,
        selectors: [["datatable-pager"]],
        hostAttrs: [1, "datatable-pager"],
        inputs: {
          size: "size",
          count: "count",
          page: "page",
          pagerLeftArrowIcon: "pagerLeftArrowIcon",
          pagerRightArrowIcon: "pagerRightArrowIcon",
          pagerPreviousIcon: "pagerPreviousIcon",
          pagerNextIcon: "pagerNextIcon"
        },
        outputs: {
          change: "change"
        },
        decls: 14,
        vars: 21,
        consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]],
        template: function DataTablePagerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() {
              return ctx.selectPage(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() {
              return ctx.prevPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() {
              return ctx.nextPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() {
              return ctx.selectPage(ctx.totalPages);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canPrevious());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerPreviousIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canPrevious());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pages);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canNext());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerRightArrowIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canNext());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerNextIcon);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        encapsulation: 2,
        changeDetection: 0
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "pagerLeftArrowIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "pagerRightArrowIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "pagerPreviousIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "pagerNextIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "size", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "count", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTablePagerComponent.prototype, "page", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTablePagerComponent.prototype, "change", void 0);

      var ProgressBarComponent = function ProgressBarComponent() {
        _classCallCheck(this, ProgressBarComponent);
      };

      ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
        return new (t || ProgressBarComponent)();
      };

      ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProgressBarComponent,
        selectors: [["datatable-progress"]],
        decls: 3,
        vars: 0,
        consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]],
        template: function ProgressBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
      var Keys;

      (function (Keys) {
        Keys[Keys["up"] = 38] = "up";
        Keys[Keys["down"] = 40] = "down";
        Keys[Keys["return"] = 13] = "return";
        Keys[Keys["escape"] = 27] = "escape";
        Keys[Keys["left"] = 37] = "left";
        Keys[Keys["right"] = 39] = "right";
      })(Keys || (Keys = {}));

      var DataTableBodyRowComponent = /*#__PURE__*/function () {
        function DataTableBodyRowComponent(differs, scrollbarHelper, cd, element) {
          _classCallCheck(this, DataTableBodyRowComponent);

          this.differs = differs;
          this.scrollbarHelper = scrollbarHelper;
          this.cd = cd;
          this.treeStatus = 'collapsed';
          this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._groupStyles = {
            left: {},
            center: {},
            right: {}
          };
          this._element = element.nativeElement;
          this._rowDiffer = differs.find({}).create();
        }

        _createClass(DataTableBodyRowComponent, [{
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._rowDiffer.diff(this.row)) {
              this.cd.markForCheck();
            }
          }
        }, {
          key: "trackByGroups",
          value: function trackByGroups(index, colGroup) {
            return colGroup.type;
          }
        }, {
          key: "columnTrackingFn",
          value: function columnTrackingFn(index, column) {
            return column.$$id;
          }
        }, {
          key: "buildStylesByGroup",
          value: function buildStylesByGroup() {
            this._groupStyles.left = this.calcStylesByGroup('left');
            this._groupStyles.center = this.calcStylesByGroup('center');
            this._groupStyles.right = this.calcStylesByGroup('right');
            this.cd.markForCheck();
          }
        }, {
          key: "calcStylesByGroup",
          value: function calcStylesByGroup(group) {
            var widths = this._columnGroupWidths;
            var offsetX = this.offsetX;
            var styles = {
              width: "".concat(widths[group], "px")
            };

            if (group === 'left') {
              translateXY(styles, offsetX, 0);
            } else if (group === 'right') {
              var bodyWidth = parseInt(this.innerWidth + '', 0);
              var totalDiff = widths.total - bodyWidth;
              var offsetDiff = totalDiff - offsetX;
              var offset = (offsetDiff + this.scrollbarHelper.width) * -1;
              translateXY(styles, offset, 0);
            }

            return styles;
          }
        }, {
          key: "onActivate",
          value: function onActivate(event, index) {
            event.cellIndex = index;
            event.rowElement = this._element;
            this.activate.emit(event);
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            var keyCode = event.keyCode;
            var isTargetRow = event.target === this._element;
            var isAction = keyCode === Keys["return"] || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;

            if (isAction && isTargetRow) {
              event.preventDefault();
              event.stopPropagation();
              this.activate.emit({
                type: 'keydown',
                event: event,
                row: this.row,
                rowElement: this._element
              });
            }
          }
        }, {
          key: "onMouseenter",
          value: function onMouseenter(event) {
            this.activate.emit({
              type: 'mouseenter',
              event: event,
              row: this.row,
              rowElement: this._element
            });
          }
        }, {
          key: "recalculateColumns",
          value: function recalculateColumns() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.columns;
            this._columns = val;
            var colsByPin = columnsByPin(this._columns);
            this._columnsByPin = columnsByPinArr(this._columns);
            this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
          }
        }, {
          key: "onTreeAction",
          value: function onTreeAction() {
            this.treeAction.emit();
          }
        }, {
          key: "columns",
          set: function set(val) {
            this._columns = val;
            this.recalculateColumns(val);
            this.buildStylesByGroup();
          },
          get: function get() {
            return this._columns;
          }
        }, {
          key: "innerWidth",
          set: function set(val) {
            if (this._columns) {
              var colByPin = columnsByPin(this._columns);
              this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
            }

            this._innerWidth = val;
            this.recalculateColumns();
            this.buildStylesByGroup();
          },
          get: function get() {
            return this._innerWidth;
          }
        }, {
          key: "offsetX",
          set: function set(val) {
            this._offsetX = val;
            this.buildStylesByGroup();
          },
          get: function get() {
            return this._offsetX;
          }
        }, {
          key: "cssClass",
          get: function get() {
            var cls = 'datatable-body-row';

            if (this.isSelected) {
              cls += ' active';
            }

            if (this.rowIndex % 2 !== 0) {
              cls += ' datatable-row-odd';
            }

            if (this.rowIndex % 2 === 0) {
              cls += ' datatable-row-even';
            }

            if (this.rowClass) {
              var res = this.rowClass(this.row);

              if (typeof res === 'string') {
                cls += " ".concat(res);
              } else if (typeof res === 'object') {
                var keys = Object.keys(res);

                for (var _i5 = 0, _keys2 = keys; _i5 < _keys2.length; _i5++) {
                  var k = _keys2[_i5];

                  if (res[k] === true) {
                    cls += " ".concat(k);
                  }
                }
              }
            }

            return cls;
          }
        }, {
          key: "columnsTotalWidths",
          get: function get() {
            return this._columnGroupWidths.total;
          }
        }]);

        return DataTableBodyRowComponent;
      }();

      DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) {
        return new (t || DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      DataTableBodyRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DataTableBodyRowComponent,
        selectors: [["datatable-body-row"]],
        hostVars: 6,
        hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) {
              return ctx.onMouseenter($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.cssClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.columnsTotalWidths, "px")("height", ctx.rowHeight, "px");
          }
        },
        inputs: {
          treeStatus: "treeStatus",
          columns: "columns",
          innerWidth: "innerWidth",
          offsetX: "offsetX",
          expanded: "expanded",
          rowClass: "rowClass",
          row: "row",
          group: "group",
          isSelected: "isSelected",
          rowIndex: "rowIndex",
          displayCheck: "displayCheck",
          rowHeight: "rowHeight"
        },
        outputs: {
          activate: "activate",
          treeAction: "treeAction"
        },
        decls: 1,
        vars: 2,
        consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]],
        template: function DataTableBodyRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], DataTableBodyCellComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      DataTableBodyRowComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
        }, {
          type: ScrollbarHelper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "columns", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "innerWidth", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "expanded", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "rowClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "row", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "group", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "isSelected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "rowIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "displayCheck", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "treeStatus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "offsetX", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], DataTableBodyRowComponent.prototype, "cssClass", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height.px'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyRowComponent.prototype, "rowHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width.px')], DataTableBodyRowComponent.prototype, "columnsTotalWidths", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyRowComponent.prototype, "activate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyRowComponent.prototype, "treeAction", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])], DataTableBodyRowComponent.prototype, "onKeyDown", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter', ['$event'])], DataTableBodyRowComponent.prototype, "onMouseenter", null);
      DataTableBodyRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())], DataTableBodyRowComponent);

      var DataTableRowWrapperComponent = /*#__PURE__*/function () {
        function DataTableRowWrapperComponent(cd, differs) {
          _classCallCheck(this, DataTableRowWrapperComponent);

          this.cd = cd;
          this.differs = differs;
          this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
          this.groupContext = {
            group: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
          };
          this.rowContext = {
            row: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
          };
          this._expanded = false;
          this.rowDiffer = differs.find({}).create();
        }

        _createClass(DataTableRowWrapperComponent, [{
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.rowDiffer.diff(this.row)) {
              this.rowContext.row = this.row;
              this.groupContext.group = this.row;
              this.cd.markForCheck();
            }
          }
        }, {
          key: "onContextmenu",
          value: function onContextmenu($event) {
            this.rowContextmenu.emit({
              event: $event,
              row: this.row
            });
          }
        }, {
          key: "getGroupHeaderStyle",
          value: function getGroupHeaderStyle() {
            var styles = {};
            styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
            styles['backface-visibility'] = 'hidden';
            styles['width'] = this.innerWidth;
            return styles;
          }
        }, {
          key: "rowIndex",
          set: function set(val) {
            this._rowIndex = val;
            this.rowContext.rowIndex = val;
            this.groupContext.rowIndex = val;
            this.cd.markForCheck();
          },
          get: function get() {
            return this._rowIndex;
          }
        }, {
          key: "expanded",
          set: function set(val) {
            this._expanded = val;
            this.groupContext.expanded = val;
            this.rowContext.expanded = val;
            this.cd.markForCheck();
          },
          get: function get() {
            return this._expanded;
          }
        }]);

        return DataTableRowWrapperComponent;
      }();

      DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) {
        return new (t || DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]));
      };

      DataTableRowWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DataTableRowWrapperComponent,
        selectors: [["datatable-row-wrapper"]],
        hostAttrs: [1, "datatable-row-wrapper"],
        hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) {
              return ctx.onContextmenu($event);
            });
          }
        },
        inputs: {
          rowIndex: "rowIndex",
          expanded: "expanded",
          innerWidth: "innerWidth",
          rowDetail: "rowDetail",
          groupHeader: "groupHeader",
          offsetX: "offsetX",
          detailRowHeight: "detailRowHeight",
          row: "row",
          groupedRows: "groupedRows"
        },
        outputs: {
          rowContextmenu: "rowContextmenu"
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 3,
        consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]],
        template: function DataTableRowWrapperComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableRowWrapperComponent_ng_content_1_Template, 1, 0, "ng-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });

      DataTableRowWrapperComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "innerWidth", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "rowDetail", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "groupHeader", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "offsetX", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "detailRowHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "row", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "groupedRows", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableRowWrapperComponent.prototype, "rowContextmenu", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "rowIndex", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableRowWrapperComponent.prototype, "expanded", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('contextmenu', ['$event'])], DataTableRowWrapperComponent.prototype, "onContextmenu", null);

      var DataTableBodyCellComponent = /*#__PURE__*/function () {
        function DataTableBodyCellComponent(element, cd) {
          _classCallCheck(this, DataTableBodyCellComponent);

          this.cd = cd;
          this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.isFocused = false;
          this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
          this.activateFn = this.activate.emit.bind(this.activate);
          this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex,
            treeStatus: this.treeStatus,
            onTreeAction: this.onTreeAction.bind(this)
          };
          this._element = element.nativeElement;
        }

        _createClass(DataTableBodyCellComponent, [{
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.checkValueUpdates();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.cellTemplate) {
              this.cellTemplate.clear();
            }
          }
        }, {
          key: "checkValueUpdates",
          value: function checkValueUpdates() {
            var value = '';

            if (!this.row || !this.column) {
              value = '';
            } else {
              var val = this.column.$$valueGetter(this.row, this.column.prop);
              var userPipe = this.column.pipe;

              if (userPipe) {
                value = userPipe.transform(val);
              } else if (value !== undefined) {
                value = val;
              }
            }

            if (this.value !== value) {
              this.value = value;
              this.cellContext.value = value;
              this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
              this.cd.markForCheck();
            }
          }
        }, {
          key: "onFocus",
          value: function onFocus() {
            this.isFocused = true;
          }
        }, {
          key: "onBlur",
          value: function onBlur() {
            this.isFocused = false;
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            this.activate.emit({
              type: 'click',
              event: event,
              row: this.row,
              group: this.group,
              rowHeight: this.rowHeight,
              column: this.column,
              value: this.value,
              cellElement: this._element
            });
          }
        }, {
          key: "onDblClick",
          value: function onDblClick(event) {
            this.activate.emit({
              type: 'dblclick',
              event: event,
              row: this.row,
              group: this.group,
              rowHeight: this.rowHeight,
              column: this.column,
              value: this.value,
              cellElement: this._element
            });
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            var keyCode = event.keyCode;
            var isTargetCell = event.target === this._element;
            var isAction = keyCode === Keys["return"] || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;

            if (isAction && isTargetCell) {
              event.preventDefault();
              event.stopPropagation();
              this.activate.emit({
                type: 'keydown',
                event: event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
              });
            }
          }
        }, {
          key: "onCheckboxChange",
          value: function onCheckboxChange(event) {
            this.activate.emit({
              type: 'checkbox',
              event: event,
              row: this.row,
              group: this.group,
              rowHeight: this.rowHeight,
              column: this.column,
              value: this.value,
              cellElement: this._element,
              treeStatus: 'collapsed'
            });
          }
        }, {
          key: "calcSortDir",
          value: function calcSortDir(sorts) {
            var _this24 = this;

            if (!sorts) {
              return;
            }

            var sort = sorts.find(function (s) {
              return s.prop === _this24.column.prop;
            });

            if (sort) {
              return sort.dir;
            }
          }
        }, {
          key: "stripHtml",
          value: function stripHtml(html) {
            if (!html.replace) {
              return html;
            }

            return html.replace(/<\/?[^>]+(>|$)/g, '');
          }
        }, {
          key: "onTreeAction",
          value: function onTreeAction() {
            this.treeAction.emit(this.row);
          }
        }, {
          key: "calcLeftMargin",
          value: function calcLeftMargin(column, row) {
            var levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
            return column.isTreeColumn ? row.level * levelIndent : 0;
          }
        }, {
          key: "group",
          set: function set(group) {
            this._group = group;
            this.cellContext.group = group;
            this.checkValueUpdates();
            this.cd.markForCheck();
          },
          get: function get() {
            return this._group;
          }
        }, {
          key: "rowHeight",
          set: function set(val) {
            this._rowHeight = val;
            this.cellContext.rowHeight = val;
            this.checkValueUpdates();
            this.cd.markForCheck();
          },
          get: function get() {
            return this._rowHeight;
          }
        }, {
          key: "isSelected",
          set: function set(val) {
            this._isSelected = val;
            this.cellContext.isSelected = val;
            this.cd.markForCheck();
          },
          get: function get() {
            return this._isSelected;
          }
        }, {
          key: "expanded",
          set: function set(val) {
            this._expanded = val;
            this.cellContext.expanded = val;
            this.cd.markForCheck();
          },
          get: function get() {
            return this._expanded;
          }
        }, {
          key: "rowIndex",
          set: function set(val) {
            this._rowIndex = val;
            this.cellContext.rowIndex = val;
            this.checkValueUpdates();
            this.cd.markForCheck();
          },
          get: function get() {
            return this._rowIndex;
          }
        }, {
          key: "column",
          set: function set(column) {
            this._column = column;
            this.cellContext.column = column;
            this.checkValueUpdates();
            this.cd.markForCheck();
          },
          get: function get() {
            return this._column;
          }
        }, {
          key: "row",
          set: function set(row) {
            this._row = row;
            this.cellContext.row = row;
            this.checkValueUpdates();
            this.cd.markForCheck();
          },
          get: function get() {
            return this._row;
          }
        }, {
          key: "sorts",
          set: function set(val) {
            this._sorts = val;
            this.calcSortDir = this.calcSortDir(val);
          },
          get: function get() {
            return this._sorts;
          }
        }, {
          key: "treeStatus",
          set: function set(status) {
            if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
              this._treeStatus = 'collapsed';
            } else {
              this._treeStatus = status;
            }

            this.cellContext.treeStatus = this._treeStatus;
            this.checkValueUpdates();
            this.cd.markForCheck();
          },
          get: function get() {
            return this._treeStatus;
          }
        }, {
          key: "columnCssClasses",
          get: function get() {
            var cls = 'datatable-body-cell';

            if (this.column.cellClass) {
              if (typeof this.column.cellClass === 'string') {
                cls += ' ' + this.column.cellClass;
              } else if (typeof this.column.cellClass === 'function') {
                var res = this.column.cellClass({
                  row: this.row,
                  group: this.group,
                  column: this.column,
                  value: this.value,
                  rowHeight: this.rowHeight
                });

                if (typeof res === 'string') {
                  cls += ' ' + res;
                } else if (typeof res === 'object') {
                  var keys = Object.keys(res);

                  for (var _i6 = 0, _keys3 = keys; _i6 < _keys3.length; _i6++) {
                    var k = _keys3[_i6];

                    if (res[k] === true) {
                      cls += " ".concat(k);
                    }
                  }
                }
              }
            }

            if (!this.sortDir) {
              cls += ' sort-active';
            }

            if (this.isFocused) {
              cls += ' active';
            }

            if (this.sortDir === SortDirection.asc) {
              cls += ' sort-asc';
            }

            if (this.sortDir === SortDirection.desc) {
              cls += ' sort-desc';
            }

            return cls;
          }
        }, {
          key: "width",
          get: function get() {
            return this.column.width;
          }
        }, {
          key: "minWidth",
          get: function get() {
            return this.column.minWidth;
          }
        }, {
          key: "maxWidth",
          get: function get() {
            return this.column.maxWidth;
          }
        }, {
          key: "height",
          get: function get() {
            var height = this.rowHeight;

            if (isNaN(height)) {
              return height;
            }

            return height + 'px';
          }
        }]);

        return DataTableBodyCellComponent;
      }();

      DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) {
        return new (t || DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      DataTableBodyCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DataTableBodyCellComponent,
        selectors: [["datatable-body-cell"]],
        viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
          }
        },
        hostVars: 10,
        hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() {
              return ctx.onFocus();
            })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() {
              return ctx.onBlur();
            })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) {
              return ctx.onDblClick($event);
            })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.columnCssClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
          }
        },
        inputs: {
          group: "group",
          rowHeight: "rowHeight",
          isSelected: "isSelected",
          expanded: "expanded",
          rowIndex: "rowIndex",
          column: "column",
          row: "row",
          sorts: "sorts",
          treeStatus: "treeStatus",
          displayCheck: "displayCheck"
        },
        outputs: {
          activate: "activate",
          treeAction: "treeAction"
        },
        decls: 5,
        vars: 6,
        consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]],
        template: function DataTableBodyCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableBodyCellComponent_4_Template, 2, 2, undefined, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });

      DataTableBodyCellComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "displayCheck", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "group", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "rowHeight", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "isSelected", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "expanded", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "rowIndex", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "column", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "row", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "sorts", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableBodyCellComponent.prototype, "treeStatus", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyCellComponent.prototype, "activate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableBodyCellComponent.prototype, "treeAction", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cellTemplate', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
        "static": true
      })], DataTableBodyCellComponent.prototype, "cellTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], DataTableBodyCellComponent.prototype, "columnCssClasses", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width.px')], DataTableBodyCellComponent.prototype, "width", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.minWidth.px')], DataTableBodyCellComponent.prototype, "minWidth", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.maxWidth.px')], DataTableBodyCellComponent.prototype, "maxWidth", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')], DataTableBodyCellComponent.prototype, "height", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus')], DataTableBodyCellComponent.prototype, "onFocus", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur')], DataTableBodyCellComponent.prototype, "onBlur", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])], DataTableBodyCellComponent.prototype, "onClick", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dblclick', ['$event'])], DataTableBodyCellComponent.prototype, "onDblClick", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])], DataTableBodyCellComponent.prototype, "onKeyDown", null);

      function selectRows(selected, row, comparefn) {
        var selectedIndex = comparefn(row, selected);

        if (selectedIndex > -1) {
          selected.splice(selectedIndex, 1);
        } else {
          selected.push(row);
        }

        return selected;
      }

      function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
        var reverse = index < prevIndex;

        for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          var greater = i >= prevIndex && i <= index;
          var lesser = i <= prevIndex && i >= index;
          var range = {
            start: 0,
            end: 0
          };

          if (reverse) {
            range = {
              start: index,
              end: prevIndex
            };
          } else {
            range = {
              start: prevIndex,
              end: index + 1
            };
          }

          if (reverse && lesser || !reverse && greater) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
              selected.push(row);
            }
          }
        }

        return selected;
      }

      var DataTableSelectionComponent = /*#__PURE__*/function () {
        function DataTableSelectionComponent() {
          _classCallCheck(this, DataTableSelectionComponent);

          this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(DataTableSelectionComponent, [{
          key: "selectRow",
          value: function selectRow(event, index, row) {
            var _this$selected3;

            if (!this.selectEnabled) return;
            var chkbox = this.selectionType === SelectionType.checkbox;
            var multi = this.selectionType === SelectionType.multi;
            var multiClick = this.selectionType === SelectionType.multiClick;
            var selected = [];

            if (multi || chkbox || multiClick) {
              if (event.shiftKey) {
                selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
              } else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = selectRows(_toConsumableArray(this.selected), row, this.getRowSelectedIdx.bind(this));
              } else {
                selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
              }
            } else {
              selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
            }

            if (typeof this.selectCheck === 'function') {
              selected = selected.filter(this.selectCheck.bind(this));
            }

            this.selected.splice(0, this.selected.length);

            (_this$selected3 = this.selected).push.apply(_this$selected3, _toConsumableArray(selected));

            this.prevIndex = index;
            this.select.emit({
              selected: selected
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(model, index) {
            var type = model.type,
                event = model.event,
                row = model.row;
            var chkbox = this.selectionType === SelectionType.checkbox;
            var select = !chkbox && (type === 'click' || type === 'dblclick') || chkbox && type === 'checkbox';

            if (select) {
              this.selectRow(event, index, row);
            } else if (type === 'keydown') {
              if (event.keyCode === Keys["return"]) {
                this.selectRow(event, index, row);
              } else {
                this.onKeyboardFocus(model);
              }
            }

            this.activate.emit(model);
          }
        }, {
          key: "onKeyboardFocus",
          value: function onKeyboardFocus(model) {
            var keyCode = model.event.keyCode;
            var shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;

            if (shouldFocus) {
              var isCellSelection = this.selectionType === SelectionType.cell;

              if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
              } else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
              }
            }
          }
        }, {
          key: "focusRow",
          value: function focusRow(rowElement, keyCode) {
            var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) nextRowElement.focus();
          }
        }, {
          key: "getPrevNextRow",
          value: function getPrevNextRow(rowElement, keyCode) {
            var parentElement = rowElement.parentElement;

            if (parentElement) {
              var focusElement;

              if (keyCode === Keys.up) {
                focusElement = parentElement.previousElementSibling;
              } else if (keyCode === Keys.down) {
                focusElement = parentElement.nextElementSibling;
              }

              if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
              }
            }
          }
        }, {
          key: "focusCell",
          value: function focusCell(cellElement, rowElement, keyCode, cellIndex) {
            var nextCellElement;

            if (keyCode === Keys.left) {
              nextCellElement = cellElement.previousElementSibling;
            } else if (keyCode === Keys.right) {
              nextCellElement = cellElement.nextElementSibling;
            } else if (keyCode === Keys.up || keyCode === Keys.down) {
              var nextRowElement = this.getPrevNextRow(rowElement, keyCode);

              if (nextRowElement) {
                var children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length) nextCellElement = children[cellIndex];
              }
            }

            if (nextCellElement) nextCellElement.focus();
          }
        }, {
          key: "getRowSelected",
          value: function getRowSelected(row) {
            return this.getRowSelectedIdx(row, this.selected) > -1;
          }
        }, {
          key: "getRowSelectedIdx",
          value: function getRowSelectedIdx(row, selected) {
            var _this25 = this;

            if (!selected || !selected.length) return -1;
            var rowId = this.rowIdentity(row);
            return selected.findIndex(function (r) {
              var id = _this25.rowIdentity(r);

              return id === rowId;
            });
          }
        }]);

        return DataTableSelectionComponent;
      }();

      DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) {
        return new (t || DataTableSelectionComponent)();
      };

      DataTableSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DataTableSelectionComponent,
        selectors: [["datatable-selection"]],
        inputs: {
          rows: "rows",
          selected: "selected",
          selectEnabled: "selectEnabled",
          selectionType: "selectionType",
          rowIdentity: "rowIdentity",
          selectCheck: "selectCheck"
        },
        outputs: {
          activate: "activate",
          select: "select"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function DataTableSelectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSelectionComponent.prototype, "rows", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSelectionComponent.prototype, "selected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSelectionComponent.prototype, "selectEnabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSelectionComponent.prototype, "selectionType", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSelectionComponent.prototype, "rowIdentity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSelectionComponent.prototype, "selectCheck", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableSelectionComponent.prototype, "activate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableSelectionComponent.prototype, "select", void 0);

      function defaultSumFunc(cells) {
        var cellsWithValues = cells.filter(function (cell) {
          return !!cell;
        });

        if (!cellsWithValues.length) {
          return null;
        }

        if (cellsWithValues.some(function (cell) {
          return typeof cell !== 'number';
        })) {
          return null;
        }

        return cellsWithValues.reduce(function (res, cell) {
          return res + cell;
        });
      }

      function noopSumFunc(cells) {
        return null;
      }

      var DataTableSummaryRowComponent = /*#__PURE__*/function () {
        function DataTableSummaryRowComponent() {
          _classCallCheck(this, DataTableSummaryRowComponent);

          this.summaryRow = {};
        }

        _createClass(DataTableSummaryRowComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (!this.columns || !this.rows) {
              return;
            }

            this.updateInternalColumns();
            this.updateValues();
          }
        }, {
          key: "updateInternalColumns",
          value: function updateInternalColumns() {
            this._internalColumns = this.columns.map(function (col) {
              return Object.assign(Object.assign({}, col), {
                cellTemplate: col.summaryTemplate
              });
            });
          }
        }, {
          key: "updateValues",
          value: function updateValues() {
            var _this26 = this;

            this.summaryRow = {};
            this.columns.filter(function (col) {
              return !col.summaryTemplate;
            }).forEach(function (col) {
              var cellsFromSingleColumn = _this26.rows.map(function (row) {
                return row[col.prop];
              });

              var sumFunc = _this26.getSummaryFunction(col);

              _this26.summaryRow[col.prop] = col.pipe ? col.pipe.transform(sumFunc(cellsFromSingleColumn)) : sumFunc(cellsFromSingleColumn);
            });
          }
        }, {
          key: "getSummaryFunction",
          value: function getSummaryFunction(column) {
            if (column.summaryFunc === undefined) {
              return defaultSumFunc;
            } else if (column.summaryFunc === null) {
              return noopSumFunc;
            } else {
              return column.summaryFunc;
            }
          }
        }]);

        return DataTableSummaryRowComponent;
      }();

      DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) {
        return new (t || DataTableSummaryRowComponent)();
      };

      DataTableSummaryRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DataTableSummaryRowComponent,
        selectors: [["datatable-summary-row"]],
        hostAttrs: [1, "datatable-summary-row"],
        inputs: {
          rows: "rows",
          columns: "columns",
          rowHeight: "rowHeight",
          offsetX: "offsetX",
          innerWidth: "innerWidth"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]],
        template: function DataTableSummaryRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DataTableBodyRowComponent],
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSummaryRowComponent.prototype, "rows", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSummaryRowComponent.prototype, "columns", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSummaryRowComponent.prototype, "rowHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSummaryRowComponent.prototype, "offsetX", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableSummaryRowComponent.prototype, "innerWidth", void 0);
      var NgxDatatableModule_1;

      var NgxDatatableModule = NgxDatatableModule_1 = /*#__PURE__*/function () {
        function NgxDatatableModule() {
          _classCallCheck(this, NgxDatatableModule);
        }

        _createClass(NgxDatatableModule, null, [{
          key: "forRoot",

          /**
           * Configure global configuration via INgxDatatableConfig
           * @param configuration
           */
          value: function forRoot(configuration) {
            return {
              ngModule: NgxDatatableModule_1,
              providers: [{
                provide: 'configuration',
                useValue: configuration
              }]
            };
          }
        }]);

        return NgxDatatableModule;
      }();

      NgxDatatableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: NgxDatatableModule
      });
      NgxDatatableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function NgxDatatableModule_Factory(t) {
          return new (t || NgxDatatableModule)();
        },
        providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollbarHelper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DimensionsHelper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ColumnChangesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableFooterTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ngx-datatable-footer-template]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisibilityDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[visibilityObserver]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.visible']
          }],
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DraggableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[draggable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, {
          dragX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          dragY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dragEventTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          dragModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResizeableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[resizeable]',
            host: {
              '[class.resizeable]': 'resizeEnabled'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }];
        }, {
          resizeEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['mousedown', ['$event']]
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[orderable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, {
          reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          targetChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          draggables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [DraggableDirective, {
              descendants: true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LongPressDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[long-press]'
          }]
        }], function () {
          return [];
        }, {
          pressEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          duration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          longPressStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          longPressing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          longPressEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          press: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.press']
          }],
          isLongPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.longpress']
          }],
          onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['mousedown', ['$event']]
          }],
          pressModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datatable-scroller',
            template: " <ng-content></ng-content> ",
            host: {
              "class": 'datatable-scroll'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }];
        }, {
          scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          scrollHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height.px']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scrollWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.width.px']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableGroupHeaderTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ngx-datatable-group-header-template]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableGroupHeaderDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'ngx-datatable-group-header'
          }]
        }], function () {
          return [];
        }, {
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['template']
          }],
          _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DatatableGroupHeaderTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
              "static": true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableColumnHeaderDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ngx-datatable-header-template]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableColumnCellDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ngx-datatable-cell-template]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableColumnCellTreeToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ngx-datatable-tree-toggle]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableColumnDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'ngx-datatable-column'
          }]
        }], function () {
          return [{
            type: ColumnChangesService
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          prop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          frozenLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          frozenRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          flexGrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          resizeable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          comparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          canAutoResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          checkboxable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          headerCheckboxable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          headerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cellClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          isTreeColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          treeLevelIndent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          summaryFunc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          summaryTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _cellTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cellTemplate']
          }],
          _cellTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DataTableColumnCellDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
              "static": true
            }]
          }],
          _headerTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['headerTemplate']
          }],
          _headerTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DataTableColumnHeaderDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
              "static": true
            }]
          }],
          _treeToggleTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['treeToggleTemplate']
          }],
          _treeToggleTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DataTableColumnCellTreeToggle, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
              "static": true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableRowDetailTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ngx-datatable-row-detail-template]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableRowDetailDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'ngx-datatable-row-detail'
          }]
        }], function () {
          return [];
        }, {
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['template']
          }],
          _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DatatableRowDetailTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
              "static": true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableFooterDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'ngx-datatable-footer'
          }]
        }], null, {
          footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          totalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['template']
          }],
          _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DataTableFooterTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableBodyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datatable-body',
            template: "\n    <datatable-progress *ngIf=\"loadingIndicator\"> </datatable-progress>\n    <datatable-selection\n      #selector\n      [selected]=\"selected\"\n      [rows]=\"rows\"\n      [selectCheck]=\"selectCheck\"\n      [selectEnabled]=\"selectEnabled\"\n      [selectionType]=\"selectionType\"\n      [rowIdentity]=\"rowIdentity\"\n      (select)=\"select.emit($event)\"\n      (activate)=\"activate.emit($event)\"\n    >\n      <datatable-scroller\n        *ngIf=\"rows?.length\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [scrollHeight]=\"scrollHeight\"\n        [scrollWidth]=\"columnGroupWidths?.total\"\n        (scroll)=\"onBodyScroll($event)\"\n      >\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'top'\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\"\n        >\n        </datatable-summary-row>\n        <datatable-row-wrapper\n          [groupedRows]=\"groupedRows\"\n          *ngFor=\"let group of temp; let i = index; trackBy: rowTrackingFn\"\n          [innerWidth]=\"innerWidth\"\n          [ngStyle]=\"getRowsStyles(group)\"\n          [rowDetail]=\"rowDetail\"\n          [groupHeader]=\"groupHeader\"\n          [offsetX]=\"offsetX\"\n          [detailRowHeight]=\"getDetailRowHeight(group && group[i], i)\"\n          [row]=\"group\"\n          [expanded]=\"getRowExpanded(group)\"\n          [rowIndex]=\"getRowIndex(group && group[i])\"\n          (rowContextmenu)=\"rowContextmenu.emit($event)\"\n        >\n          <datatable-body-row\n            *ngIf=\"!groupedRows; else groupedRowsTemplate\"\n            tabindex=\"-1\"\n            [isSelected]=\"selector.getRowSelected(group)\"\n            [innerWidth]=\"innerWidth\"\n            [offsetX]=\"offsetX\"\n            [columns]=\"columns\"\n            [rowHeight]=\"getRowHeight(group)\"\n            [row]=\"group\"\n            [rowIndex]=\"getRowIndex(group)\"\n            [expanded]=\"getRowExpanded(group)\"\n            [rowClass]=\"rowClass\"\n            [displayCheck]=\"displayCheck\"\n            [treeStatus]=\"group && group.treeStatus\"\n            (treeAction)=\"onTreeAction(group)\"\n            (activate)=\"selector.onActivate($event, indexes.first + i)\"\n          >\n          </datatable-body-row>\n          <ng-template #groupedRowsTemplate>\n            <datatable-body-row\n              *ngFor=\"let row of group.value; let i = index; trackBy: rowTrackingFn\"\n              tabindex=\"-1\"\n              [isSelected]=\"selector.getRowSelected(row)\"\n              [innerWidth]=\"innerWidth\"\n              [offsetX]=\"offsetX\"\n              [columns]=\"columns\"\n              [rowHeight]=\"getRowHeight(row)\"\n              [row]=\"row\"\n              [group]=\"group.value\"\n              [rowIndex]=\"getRowIndex(row)\"\n              [expanded]=\"getRowExpanded(row)\"\n              [rowClass]=\"rowClass\"\n              (activate)=\"selector.onActivate($event, i)\"\n            >\n            </datatable-body-row>\n          </ng-template>\n        </datatable-row-wrapper>\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'bottom'\"\n          [ngStyle]=\"getBottomSummaryRowStyles()\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\"\n        >\n        </datatable-summary-row>\n      </datatable-scroller>\n      <div class=\"empty-row\" *ngIf=\"!rows?.length && !loadingIndicator\" [innerHTML]=\"emptyMessage\"></div>\n    </datatable-selection>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
              "class": 'datatable-body'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          detailToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          rowContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          bodyWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.width']
          }],
          bodyHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height']
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          loadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          externalPaging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          emptyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          trackByProp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          groupExpansionDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          groupRowsBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          virtualization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          summaryRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          summaryPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          summaryHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scroller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ScrollerComponent]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datatable-header',
            template: "\n    <div\n      orderable\n      (reorder)=\"onColumnReordered($event)\"\n      (targetChanged)=\"onTargetChanged($event)\"\n      [style.width.px]=\"_columnGroupWidths.total\"\n      class=\"datatable-header-inner\"\n    >\n      <div\n        *ngFor=\"let colGroup of _columnsByPin; trackBy: trackByGroups\"\n        [class]=\"'datatable-row-' + colGroup.type\"\n        [ngStyle]=\"_styleByGroup[colGroup.type]\"\n      >\n        <datatable-header-cell\n          *ngFor=\"let column of colGroup.columns; trackBy: columnTrackingFn\"\n          resizeable\n          [resizeEnabled]=\"column.resizeable\"\n          (resize)=\"onColumnResized($event, column)\"\n          long-press\n          [pressModel]=\"column\"\n          [pressEnabled]=\"reorderable && column.draggable\"\n          (longPressStart)=\"onLongPressStart($event)\"\n          (longPressEnd)=\"onLongPressEnd($event)\"\n          draggable\n          [dragX]=\"reorderable && column.draggable && column.dragging\"\n          [dragY]=\"false\"\n          [dragModel]=\"column\"\n          [dragEventTarget]=\"dragEventTarget\"\n          [headerHeight]=\"headerHeight\"\n          [isTarget]=\"column.isTarget\"\n          [targetMarkerTemplate]=\"targetMarkerTemplate\"\n          [targetMarkerContext]=\"column.targetMarkerContext\"\n          [column]=\"column\"\n          [sortType]=\"sortType\"\n          [sorts]=\"sorts\"\n          [selectionType]=\"selectionType\"\n          [sortAscendingIcon]=\"sortAscendingIcon\"\n          [sortDescendingIcon]=\"sortDescendingIcon\"\n          [sortUnsetIcon]=\"sortUnsetIcon\"\n          [allRowsSelected]=\"allRowsSelected\"\n          (sort)=\"onSort($event)\"\n          (select)=\"select.emit($event)\"\n          (columnContextmenu)=\"columnContextmenu.emit($event)\"\n        >\n        </datatable-header-cell>\n      </div>\n    </div>\n  ",
            host: {
              "class": 'datatable-header'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          columnContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          headerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.width']
          }],
          sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sortAscendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sortDescendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sortUnsetIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          dealsWithGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          allRowsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          reorderable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ngx-datatable',
            template: "<div visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [sortUnsetIcon]=\"cssClasses.sortUnset\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            host: {
              "class": 'ngx-datatable'
            },
            styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"]
          }]
        }], function () {
          return [{
            type: ScrollbarHelper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }]
          }, {
            type: DimensionsHelper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
          }, {
            type: ColumnChangesService
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: ['configuration']
            }]
          }];
        }, {
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          columnMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          externalPaging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          externalSorting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          loadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          reorderable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          swapColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          messages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          groupExpansionDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectAllRowsOnPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          virtualization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          summaryRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          summaryHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          summaryPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          tableContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          groupRowsBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          limit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          isFixedHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.fixed-header']
          }],
          isFixedRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.fixed-row']
          }],
          isVertScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.scroll-vertical']
          }],
          isVirtualized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.virtualized']
          }],
          isHorScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.scroll-horz']
          }],
          isSelectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.selectable']
          }],
          isCheckboxSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.checkbox-selection']
          }],
          isCellSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.cell-selection']
          }],
          isSingleSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.single-selection']
          }],
          isMultiSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.multi-selection']
          }],
          isMultiClickSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.multi-click-selection']
          }],
          columnTemplates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [DataTableColumnDirective]
          }],

          /**
           * Window resize handler to update sizes.
           */
          onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize']
          }],
          targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          trackByProp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          treeFromRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          treeToRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DatatableRowDetailDirective]
          }],
          groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DatatableGroupHeaderDirective]
          }],
          footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DatatableFooterDirective]
          }],
          bodyComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [DataTableBodyComponent]
          }],
          headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [DataTableHeaderComponent]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableHeaderCellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datatable-header-cell',
            template: "\n    <div class=\"datatable-header-cell-template-wrap\">\n      <ng-template\n        *ngIf=\"isTarget\"\n        [ngTemplateOutlet]=\"targetMarkerTemplate\"\n        [ngTemplateOutletContext]=\"targetMarkerContext\"\n      >\n      </ng-template>\n      <label *ngIf=\"isCheckboxable\" class=\"datatable-checkbox\">\n        <input type=\"checkbox\" [checked]=\"allRowsSelected\" (change)=\"select.emit(!allRowsSelected)\" />\n      </label>\n      <span *ngIf=\"!column.headerTemplate\" class=\"datatable-header-cell-wrapper\">\n        <span class=\"datatable-header-cell-label draggable\" (click)=\"onSort()\" [innerHTML]=\"name\"> </span>\n      </span>\n      <ng-template\n        *ngIf=\"column.headerTemplate\"\n        [ngTemplateOutlet]=\"column.headerTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\"\n      >\n      </ng-template>\n      <span (click)=\"onSort()\" [class]=\"sortClass\"> </span>\n    </div>\n  ",
            host: {
              "class": 'datatable-header-cell'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          columnContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          allRowsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          columnCssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.title']
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.minWidth.px']
          }],
          maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.maxWidth.px']
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.width.px']
          }],
          onContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['contextmenu', ['$event']]
          }],
          sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sortAscendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sortDescendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sortUnsetIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          isTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          targetMarkerContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height.px']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableFooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datatable-footer',
            template: "\n    <div\n      class=\"datatable-footer-inner\"\n      [ngClass]=\"{ 'selected-count': selectedMessage }\"\n      [style.height.px]=\"footerHeight\"\n    >\n      <ng-template\n        *ngIf=\"footerTemplate\"\n        [ngTemplateOutlet]=\"footerTemplate.template\"\n        [ngTemplateOutletContext]=\"{\n          rowCount: rowCount,\n          pageSize: pageSize,\n          selectedCount: selectedCount,\n          curPage: curPage,\n          offset: offset\n        }\"\n      >\n      </ng-template>\n      <div class=\"page-count\" *ngIf=\"!footerTemplate\">\n        <span *ngIf=\"selectedMessage\"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>\n        {{ rowCount?.toLocaleString() }} {{ totalMessage }}\n      </div>\n      <datatable-pager\n        *ngIf=\"!footerTemplate\"\n        [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\"\n        [pagerRightArrowIcon]=\"pagerRightArrowIcon\"\n        [pagerPreviousIcon]=\"pagerPreviousIcon\"\n        [pagerNextIcon]=\"pagerNextIcon\"\n        [page]=\"curPage\"\n        [size]=\"pageSize\"\n        [count]=\"rowCount\"\n        [hidden]=\"!isVisible\"\n        (change)=\"page.emit($event)\"\n      >\n      </datatable-pager>\n    </div>\n  ",
            host: {
              "class": 'datatable-footer'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [];
        }, {
          selectedCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          totalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTablePagerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datatable-pager',
            template: "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"!canPrevious()\">\n        <a role=\"button\" aria-label=\"go to first page\" href=\"javascript:void(0)\" (click)=\"selectPage(1)\">\n          <i class=\"{{ pagerPreviousIcon }}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canPrevious()\">\n        <a role=\"button\" aria-label=\"go to previous page\" href=\"javascript:void(0)\" (click)=\"prevPage()\">\n          <i class=\"{{ pagerLeftArrowIcon }}\"></i>\n        </a>\n      </li>\n      <li\n        role=\"button\"\n        [attr.aria-label]=\"'page ' + pg.number\"\n        class=\"pages\"\n        *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.number === page\"\n      >\n        <a href=\"javascript:void(0)\" (click)=\"selectPage(pg.number)\">\n          {{ pg.text }}\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a role=\"button\" aria-label=\"go to next page\" href=\"javascript:void(0)\" (click)=\"nextPage()\">\n          <i class=\"{{ pagerRightArrowIcon }}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a role=\"button\" aria-label=\"go to last page\" href=\"javascript:void(0)\" (click)=\"selectPage(totalPages)\">\n          <i class=\"{{ pagerNextIcon }}\"></i>\n        </a>\n      </li>\n    </ul>\n  ",
            host: {
              "class": 'datatable-pager'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datatable-progress',
            template: "\n    <div class=\"progress-linear\" role=\"progressbar\">\n      <div class=\"container\">\n        <div class=\"bar\"></div>\n      </div>\n    </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableBodyRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datatable-body-row',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div\n      *ngFor=\"let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups\"\n      class=\"datatable-row-{{ colGroup.type }} datatable-row-group\"\n      [ngStyle]=\"_groupStyles[colGroup.type]\"\n    >\n      <datatable-body-cell\n        *ngFor=\"let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn\"\n        tabindex=\"-1\"\n        [row]=\"row\"\n        [group]=\"group\"\n        [expanded]=\"expanded\"\n        [isSelected]=\"isSelected\"\n        [rowIndex]=\"rowIndex\"\n        [column]=\"column\"\n        [rowHeight]=\"rowHeight\"\n        [displayCheck]=\"displayCheck\"\n        [treeStatus]=\"treeStatus\"\n        (activate)=\"onActivate($event, ii)\"\n        (treeAction)=\"onTreeAction()\"\n      >\n      </datatable-body-cell>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
          }, {
            type: ScrollbarHelper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, {
          treeStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cssClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
          }],
          columnsTotalWidths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.width.px']
          }],
          onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keydown', ['$event']]
          }],
          onMouseenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['mouseenter', ['$event']]
          }],
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height.px']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableRowWrapperComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datatable-row-wrapper',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div *ngIf=\"groupHeader && groupHeader.template\" class=\"datatable-group-header\" [ngStyle]=\"getGroupHeaderStyle()\">\n      <ng-template\n        *ngIf=\"groupHeader && groupHeader.template\"\n        [ngTemplateOutlet]=\"groupHeader.template\"\n        [ngTemplateOutletContext]=\"groupContext\"\n      >\n      </ng-template>\n    </div>\n    <ng-content *ngIf=\"(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template\">\n    </ng-content>\n    <div\n      *ngIf=\"rowDetail && rowDetail.template && expanded\"\n      [style.height.px]=\"detailRowHeight\"\n      class=\"datatable-row-detail\"\n    >\n      <ng-template\n        *ngIf=\"rowDetail && rowDetail.template\"\n        [ngTemplateOutlet]=\"rowDetail.template\"\n        [ngTemplateOutletContext]=\"rowContext\"\n      >\n      </ng-template>\n    </div>\n  ",
            host: {
              "class": 'datatable-row-wrapper'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]
          }];
        }, {
          rowContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['contextmenu', ['$event']]
          }],
          innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          detailRowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableBodyCellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datatable-body-cell',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div class=\"datatable-body-cell-label\" [style.margin-left.px]=\"calcLeftMargin(column, row)\">\n      <label\n        *ngIf=\"column.checkboxable && (!displayCheck || displayCheck(row, column, value))\"\n        class=\"datatable-checkbox\"\n      >\n        <input type=\"checkbox\" [checked]=\"isSelected\" (click)=\"onCheckboxChange($event)\" />\n      </label>\n      <ng-container *ngIf=\"column.isTreeColumn\">\n        <button\n          *ngIf=\"!column.treeToggleTemplate\"\n          class=\"datatable-tree-button\"\n          [disabled]=\"treeStatus === 'disabled'\"\n          (click)=\"onTreeAction()\"\n        >\n          <span>\n            <i *ngIf=\"treeStatus === 'loading'\" class=\"icon datatable-icon-collapse\"></i>\n            <i *ngIf=\"treeStatus === 'collapsed'\" class=\"icon datatable-icon-up\"></i>\n            <i *ngIf=\"treeStatus === 'expanded' || treeStatus === 'disabled'\" class=\"icon datatable-icon-down\"></i>\n          </span>\n        </button>\n        <ng-template\n          *ngIf=\"column.treeToggleTemplate\"\n          [ngTemplateOutlet]=\"column.treeToggleTemplate\"\n          [ngTemplateOutletContext]=\"{ cellContext: cellContext }\"\n        >\n        </ng-template>\n      </ng-container>\n\n      <span *ngIf=\"!column.cellTemplate\" [title]=\"sanitizedValue\" [innerHTML]=\"value\"> </span>\n      <ng-template\n        #cellTemplate\n        *ngIf=\"column.cellTemplate\"\n        [ngTemplateOutlet]=\"column.cellTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\"\n      >\n      </ng-template>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          treeStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          columnCssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.width.px']
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.minWidth.px']
          }],
          maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.maxWidth.px']
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height']
          }],
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['focus']
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['blur']
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
          }],
          onDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['dblclick', ['$event']]
          }],
          onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keydown', ['$event']]
          }],
          displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cellTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['cellTemplate', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
              "static": true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableSelectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datatable-selection',
            template: " <ng-content></ng-content> ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [];
        }, {
          activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableSummaryRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datatable-summary-row',
            template: "\n    <datatable-body-row\n      *ngIf=\"summaryRow && _internalColumns\"\n      tabindex=\"-1\"\n      [innerWidth]=\"innerWidth\"\n      [offsetX]=\"offsetX\"\n      [columns]=\"_internalColumns\"\n      [rowHeight]=\"rowHeight\"\n      [row]=\"summaryRow\"\n      [rowIndex]=\"-1\"\n    >\n    </datatable-body-row>\n  ",
            host: {
              "class": 'datatable-summary-row'
            }
          }]
        }], function () {
          return [];
        }, {
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxDatatableModule, {
          declarations: function declarations() {
            return [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDatatableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
            declarations: [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent],
            exports: [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective]
          }]
        }], null, null);
      })();

      var ClickType;

      (function (ClickType) {
        ClickType["single"] = "single";
        ClickType["double"] = "double";
      })(ClickType || (ClickType = {}));

      if (typeof document !== 'undefined' && !document.elementsFromPoint) {
        document.elementsFromPoint = elementsFromPoint;
      }
      /*tslint:disable*/

      /**
       * Polyfill for `elementsFromPoint`
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
       * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
       * https://gist.github.com/oslego/7265412
       */


      function elementsFromPoint(x, y) {
        var elements = [];
        var previousPointerEvents = [];
        var current; // TODO: window.getComputedStyle should be used with inferred type (Element)

        var i;
        var d; //if (document === undefined) return elements;
        // get all elements via elementFromPoint, and remove them from hit-testing in order

        while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
          // push the element and its current style
          elements.push(current);
          previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
          }); // add "pointer-events: none", to get to the underlying element

          current.style.setProperty('pointer-events', 'none', 'important');
        } // restore the previous pointer-events values


        for (i = previousPointerEvents.length; d = previousPointerEvents[--i];) {
          elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
        } // return our results


        return elements;
      }
      /*tslint:enable*/

      /*
       * Public API Surface of ngx-datatable
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=swimlane-ngx-datatable.js.map

      /***/

    },

    /***/
    "p95r":
    /*!*****************************************************************!*\
      !*** ./src/app/tables/ngx-datatable/ngx-datatable.component.ts ***!
      \*****************************************************************/

    /*! exports provided: NgxDatatableComponent */

    /***/
    function p95r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDatatableComponent", function () {
        return NgxDatatableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["roleTemplate"];

      function NgxDatatableComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r9 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", value_r9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function NgxDatatableComponent_ng_template_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_ng_template_40_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var row_r12 = ctx.row;
            var rowIndex_r13 = ctx.rowIndex;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

            return ctx_r14.editRow(row_r12, rowIndex_r13, _r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "mode_edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_ng_template_40_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var row_r12 = ctx.row;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.deleteRow(row_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxDatatableComponent_ng_template_41_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxDatatableComponent_ng_template_41_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxDatatableComponent_ng_template_41_mat_option_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gender_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gender_r22.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gender_r22.value, " ");
        }
      }

      function NgxDatatableComponent_ng_template_41_mat_error_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxDatatableComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " New User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_ng_template_41_Template_button_click_7_listener() {
            var modal_r17 = ctx.$implicit;
            return modal_r17.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NgxDatatableComponent_ng_template_41_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.onAddRowSave(ctx_r24.register);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NgxDatatableComponent_ng_template_41_mat_error_25_Template, 2, 0, "mat-error", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NgxDatatableComponent_ng_template_41_mat_error_41_Template, 2, 0, "mat-error", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-select", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, NgxDatatableComponent_ng_template_41_mat_option_47_Template, 2, 2, "mat-option", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, NgxDatatableComponent_ng_template_41_mat_error_56_Template, 2, 0, "mat-error", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "textarea", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.newUserImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.register);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.register.get("firstName").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.register.get("phone").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.genders);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.register.get("email").hasError("required") || ctx_r4.register.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r4.register.valid);
        }
      }

      function NgxDatatableComponent_ng_template_43_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxDatatableComponent_ng_template_43_mat_error_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxDatatableComponent_ng_template_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_ng_template_43_Template_button_click_7_listener() {
            var modal_r26 = ctx.$implicit;
            return modal_r26.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NgxDatatableComponent_ng_template_43_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.onEditSave(ctx_r30.editForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NgxDatatableComponent_ng_template_43_mat_error_23_Template, 2, 0, "mat-error", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, NgxDatatableComponent_ng_template_43_mat_error_39_Template, 2, 0, "mat-error", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "textarea", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_ng_template_43_Template_button_click_50_listener() {
            var modal_r26 = ctx.$implicit;
            return modal_r26.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.selectedRowData == null ? null : ctx_r6.selectedRowData.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r6.selectedRowData == null ? null : ctx_r6.selectedRowData.firstName, " ", ctx_r6.selectedRowData == null ? null : ctx_r6.selectedRowData.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.editForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.editForm.get("firstName").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.register.get("phone").hasError("required"));
        }
      }

      var NgxDatatableComponent = /*#__PURE__*/function () {
        function NgxDatatableComponent(fb, _snackBar, modalService) {
          _classCallCheck(this, NgxDatatableComponent);

          this.fb = fb;
          this._snackBar = _snackBar;
          this.modalService = modalService;
          this.rows = [];
          this.newUserImg = 'assets/images/user/user1.jpg';
          this.data = [];
          this.filteredData = [];
          this.columns = [{
            name: 'First Name'
          }, {
            name: 'Last Name'
          }, {
            name: 'Gender'
          }, {
            name: 'Phone'
          }, {
            name: 'Email'
          }, {
            name: 'Address'
          }];
          this.genders = [{
            id: '1',
            value: 'Male'
          }, {
            id: '2',
            value: 'Female'
          }];
          this.foods = [{
            value: 'steak-0',
            viewValue: 'Steak'
          }, {
            value: 'pizza-1',
            viewValue: 'Pizza'
          }, {
            value: 'tacos-2',
            viewValue: 'Tacos'
          }]; // Table 2

          this.tb2columns = [{
            name: 'First Name'
          }, {
            name: 'Last Name'
          }, {
            name: 'Address'
          }];
          this.tb2data = [];
          this.tb2filteredData = [];
          this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          });
        }

        _createClass(NgxDatatableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            this.fetch(function (data) {
              _this27.data = data;
              _this27.filteredData = data;
            }); // Table 2

            this.tb2fetch(function (data) {
              _this27.tb2data = data;
              _this27.tb2filteredData = data;
            });
            this.register = this.fb.group({
              id: [''],
              img: [''],
              firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]+')]],
              lastName: [''],
              phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
              address: ['']
            });
          }
        }, {
          key: "fetch",
          value: function fetch(cb) {
            var req = new XMLHttpRequest();
            req.open('GET', 'assets/data/adv-tbl-data.json');

            req.onload = function () {
              var data = JSON.parse(req.response);
              cb(data);
            };

            req.send();
          } // Table 2

        }, {
          key: "tb2fetch",
          value: function tb2fetch(cb) {
            var req = new XMLHttpRequest();
            req.open('GET', 'assets/data/ngx-data.json');

            req.onload = function () {
              var data = JSON.parse(req.response);
              cb(data);
            };

            req.send();
          } // Table 2

        }, {
          key: "tb2filterDatatable",
          value: function tb2filterDatatable(event) {
            // get the value of the key pressed and make it lowercase
            var val = event.target.value.toLowerCase(); // get the amount of columns in the table

            var colsAmt = this.tb2columns.length; // get the key names of each column in the dataset

            var keys = Object.keys(this.tb2filteredData[0]); // assign filtered matches to the active datatable

            this.tb2data = this.tb2filteredData.filter(function (item) {
              // iterate through each row's column data
              for (var i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
                  // found match, return true to add to result set
                  return true;
                }
              }
            }); // whenever the filter changes, always go back to the first page

            this.table2.offset = 0;
          }
        }, {
          key: "editRow",
          value: function editRow(row, rowIndex, content) {
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            });
            this.editForm.setValue({
              id: row.id,
              firstName: row.firstName,
              lastName: row.lastName,
              phone: row.phone,
              email: row.email,
              address: row.address,
              img: row.img
            });
            this.selectedRowData = row;
          }
        }, {
          key: "addRow",
          value: function addRow(content) {
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            });
            this.register.patchValue({
              id: this.getId(10, 100),
              img: this.newUserImg
            });
          }
        }, {
          key: "deleteRow",
          value: function deleteRow(row) {
            this.data = this.arrayRemove(this.data, row.id);
            this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
          }
        }, {
          key: "arrayRemove",
          value: function arrayRemove(array, id) {
            return array.filter(function (element) {
              return element.id != id;
            });
          }
        }, {
          key: "onEditSave",
          value: function onEditSave(form) {
            var _this28 = this;

            this.data = this.data.filter(function (value, key) {
              if (value.id == form.value.id) {
                value.firstName = form.value.firstName;
                value.lastName = form.value.lastName;
                value.phone = form.value.phone;
                value.gender = form.value.gender;
                value.email = form.value.email;
                value.address = form.value.address;
              }

              _this28.modalService.dismissAll();

              return true;
            });
            this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
          }
        }, {
          key: "onAddRowSave",
          value: function onAddRowSave(form) {
            this.data.push(form.value);
            this.data = _toConsumableArray(this.data); // console.log(this.data);

            form.reset();
            this.modalService.dismissAll();
            this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
          }
        }, {
          key: "filterDatatable",
          value: function filterDatatable(event) {
            // get the value of the key pressed and make it lowercase
            var val = event.target.value.toLowerCase(); // get the amount of columns in the table

            var colsAmt = this.columns.length; // get the key names of each column in the dataset

            var keys = Object.keys(this.filteredData[0]); // assign filtered matches to the active datatable

            this.data = this.filteredData.filter(function (item) {
              // iterate through each row's column data
              for (var i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
                  // found match, return true to add to result set
                  return true;
                }
              }
            }); // whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          }
        }, {
          key: "getId",
          value: function getId(min, max) {
            // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message) {
            this._snackBar.open(message, '', {
              duration: 2000,
              verticalPosition: 'bottom',
              horizontalPosition: 'right',
              panelClass: ['bg-red']
            });
          }
        }, {
          key: "showNotification",
          value: function showNotification(colorName, text, placementFrom, placementAlign) {
            this._snackBar.open(text, '', {
              duration: 2000,
              verticalPosition: placementFrom,
              horizontalPosition: placementAlign,
              panelClass: colorName
            });
          }
        }]);

        return NgxDatatableComponent;
      }();

      NgxDatatableComponent.ɵfac = function NgxDatatableComponent_Factory(t) {
        return new (t || NgxDatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]));
      };

      NgxDatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxDatatableComponent,
        selectors: [["app-ngx-datatable"]],
        viewQuery: function NgxDatatableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.roleTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
          }
        },
        decls: 60,
        vars: 24,
        consts: [[1, "content"], [1, "container-fluid"], [1, "alert", "alert-info"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0", "mb-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "Image", "sortable", "false", "prop", "img", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "First Name", 3, "width"], ["name", "Last Name", 3, "width"], ["name", "Gender", 3, "width"], ["name", "Phone", 3, "width"], ["name", "Email", 3, "width"], ["name", "Address", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["addRecord", ""], ["editRecord", ""], [1, "header"], ["appearance", "fill"], ["matInput", "", 3, "keyup"], ["table2", ""], [1, "table-img", "padding-0"], ["width", "40", 3, "src"], [1, "btn", "tblActnBtn", "h-auto", 3, "click"], [1, "material-icons"], [1, "modal-header", "editRowModal"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-header"], ["alt", "avatar", 3, "src"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", 3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], ["formControlName", "img", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "firstName", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "lastName"], ["matInput", "", "formControlName", "phone", "required", ""], ["formControlName", "gender", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "address"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", 3, "disabled"], ["type", "button", "mat-button", "", "data-dismiss", "modal"], [3, "value"], [3, "formGroup", "ngSubmit"], [1, "modal-footer"], [1, "button-demo"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["mat-button", "", "type", "button", 3, "click"]],
        template: function NgxDatatableComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Advance table component is develop using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ngx-datatable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " angular plugin. Main features of this table is search record in table, add new record, edit record, delete record, sorting data by ascending and descending, pagination, and many more. You have just replace table static json data with your dynamic json data comes from your api. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Advance Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NgxDatatableComponent_Template_input_keyup_22_listener($event) {
              return ctx.filterDatatable($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_Template_button_click_26_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

              return ctx.addRow(_r3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngx-datatable", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NgxDatatableComponent_ng_template_32_Template, 2, 1, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "ngx-datatable-column", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ngx-datatable-column", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "ngx-datatable-column", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "ngx-datatable-column", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ngx-datatable-column", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, NgxDatatableComponent_ng_template_40_Template, 7, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NgxDatatableComponent_ng_template_41_Template, 69, 7, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, NgxDatatableComponent_ng_template_43_Template, 52, 6, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "ngx Simple Example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Search Here...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NgxDatatableComponent_Template_input_keyup_57_listener($event) {
              return ctx.tb2filterDatatable($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "ngx-datatable", 20, 36);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.tb2data)("columns", ctx.tb2columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnCellDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9uZ3gtZGF0YXRhYmxlL25neC1kYXRhdGFibGUuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDatatableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ngx-datatable',
            templateUrl: './ngx-datatable.component.html',
            styleUrls: ['./ngx-datatable.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
          }];
        }, {
          roleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['roleTemplate', {
              "static": true
            }]
          }],
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], {
              "static": false
            }]
          }],
          table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "us77":
    /*!*************************************************************!*\
      !*** ./src/app/tables/basic-table/basic-table.component.ts ***!
      \*************************************************************/

    /*! exports provided: BasicTableComponent */

    /***/
    function us77(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicTableComponent", function () {
        return BasicTableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BasicTableComponent = /*#__PURE__*/function () {
        function BasicTableComponent() {
          _classCallCheck(this, BasicTableComponent);
        }

        _createClass(BasicTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BasicTableComponent;
      }();

      BasicTableComponent.ɵfac = function BasicTableComponent_Factory(t) {
        return new (t || BasicTableComponent)();
      };

      BasicTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BasicTableComponent,
        selectors: [["app-basic-table"]],
        decls: 402,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body", "table-responsive"], [1, "table"], ["scope", "row"], [1, "table", "table-striped"], [1, "table", "table-bordered"], [1, "table", "table-hover"], [1, "table", "table-condensed"], [1, "bg-light-blue"], [1, "l-bg-green"], [1, "l-bg-orange"], [1, "l-bg-cyan"], [1, "l-bg-purple"]],
        template: function BasicTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Normal Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Normal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Basic Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Striped Rows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "table", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Bordered Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Hover Rows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "table", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Condensed Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Colorful Rows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "tr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "tr", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "tr", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "@lakitkat");

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
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9iYXNpYy10YWJsZS9iYXNpYy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-basic-table',
            templateUrl: './basic-table.component.html',
            styleUrls: ['./basic-table.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vEQH":
    /*!*******************************************************************!*\
      !*** ./src/app/tables/material-table/material-table.component.ts ***!
      \*******************************************************************/

    /*! exports provided: MaterialTableComponent */

    /***/
    function vEQH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialTableComponent", function () {
        return MaterialTableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function MaterialTableComponent_th_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r48.no, " ");
        }
      }

      function MaterialTableComponent_th_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r49.name, " ");
        }
      }

      function MaterialTableComponent_th_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r50.gender, " ");
        }
      }

      function MaterialTableComponent_th_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r51 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r51.email, " ");
        }
      }

      function MaterialTableComponent_th_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r52 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r52.address, " ");
        }
      }

      function MaterialTableComponent_th_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r53.mobile, " ");
        }
      }

      function MaterialTableComponent_th_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Salary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r54 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r54.salary, " ");
        }
      }

      function MaterialTableComponent_tr_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
        }
      }

      function MaterialTableComponent_tr_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
        }
      }

      function MaterialTableComponent_th_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r56.no, " ");
        }
      }

      function MaterialTableComponent_th_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r57.name, " ");
        }
      }

      function MaterialTableComponent_th_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r58.gender, " ");
        }
      }

      function MaterialTableComponent_th_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r59.email, " ");
        }
      }

      function MaterialTableComponent_th_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r60 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r60.address, " ");
        }
      }

      function MaterialTableComponent_th_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r61 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r61.mobile, " ");
        }
      }

      function MaterialTableComponent_th_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Salary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r62.salary, " ");
        }
      }

      function MaterialTableComponent_tr_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
        }
      }

      function MaterialTableComponent_tr_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
        }
      }

      function MaterialTableComponent_th_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r64 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r64.no, " ");
        }
      }

      function MaterialTableComponent_th_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r65 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r65.name, " ");
        }
      }

      function MaterialTableComponent_th_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r66 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r66.gender, " ");
        }
      }

      function MaterialTableComponent_th_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_104_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r67 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r67.email, " ");
        }
      }

      function MaterialTableComponent_th_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_107_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r68 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r68.address, " ");
        }
      }

      function MaterialTableComponent_th_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r69 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r69.mobile, " ");
        }
      }

      function MaterialTableComponent_th_112_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Salary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_113_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r70 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r70.salary, " ");
        }
      }

      function MaterialTableComponent_tr_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
        }
      }

      function MaterialTableComponent_tr_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var ELEMENT_DATA = [{
        no: 1,
        name: 'John Doe',
        gender: 'male',
        email: 'test@example.com',
        address: '729 S. Paris Hill St',
        mobile: 1234567890,
        salary: 120000
      }, {
        no: 2,
        name: 'Sarah Smith',
        gender: 'female',
        email: 'test@example.com',
        address: '9003 Lake Street Hinesville',
        mobile: 1234567890,
        salary: 170000
      }, {
        no: 3,
        name: 'Airi Satou',
        gender: 'male',
        email: 'test@example.com',
        address: '848 Old Durham Street Piedmont',
        mobile: 1234567890,
        salary: 150000
      }, {
        no: 4,
        name: 'Angelica Ramos',
        gender: 'male',
        email: 'test@example.com',
        address: '8008 Anderson Drive Titusville',
        mobile: 1234567890,
        salary: 190000
      }, {
        no: 5,
        name: 'Ashton Cox',
        gender: 'female',
        email: 'test@example.com',
        address: '620 East Ave. Dundalk',
        mobile: 1234567890,
        salary: 140000
      }, {
        no: 6,
        name: 'Cara Stevens',
        gender: 'male',
        email: 'test@example.com',
        address: '9641 Delaware Street Camp Hill',
        mobile: 1234567890,
        salary: 220000
      }, {
        no: 7,
        name: 'Jens Brincker',
        gender: 'male',
        email: 'test@example.com',
        address: '83 Pennsylvania Road',
        mobile: 1234567890,
        salary: 170000
      }, {
        no: 8,
        name: 'Mark Hay',
        gender: 'female',
        email: 'test@example.com',
        address: '786 Lake Forest Rd. Biloxi',
        mobile: 1234567890,
        salary: 320000
      }, {
        no: 9,
        name: 'Anthony Davie',
        gender: 'male',
        email: 'test@example.com',
        address: '226 Heritage Dr. Durham',
        mobile: 1234567890,
        salary: 620000
      }, {
        no: 10,
        name: 'Sue Woodger',
        gender: 'male',
        email: 'test@example.com',
        address: '7 SE. Pumpkin Hill Lane',
        mobile: 1234567890,
        salary: 110000
      }];

      var MaterialTableComponent = /*#__PURE__*/function () {
        function MaterialTableComponent() {
          _classCallCheck(this, MaterialTableComponent);

          this.displayedColumns = ['no', 'name', 'gender', 'email', 'address', 'mobile', 'salary'];
          this.dataSource = ELEMENT_DATA;
          this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
          this.dataSource3 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        }

        _createClass(MaterialTableComponent, [{
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource3.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataSource2.paginator = this.paginator;
          }
        }]);

        return MaterialTableComponent;
      }();

      MaterialTableComponent.ɵfac = function MaterialTableComponent_Factory(t) {
        return new (t || MaterialTableComponent)();
      };

      MaterialTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MaterialTableComponent,
        selectors: [["app-material-table"]],
        viewQuery: function MaterialTableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 116,
        vars: 11,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body", "table-responsive"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "no"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "gender"], ["matColumnDef", "email"], ["matColumnDef", "address"], ["matColumnDef", "mobile"], ["matColumnDef", "salary"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
        template: function MaterialTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Material Tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Material Tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Basic Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MaterialTableComponent_th_27_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MaterialTableComponent_td_28_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MaterialTableComponent_th_30_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MaterialTableComponent_td_31_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MaterialTableComponent_th_33_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MaterialTableComponent_td_34_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MaterialTableComponent_th_36_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MaterialTableComponent_td_37_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MaterialTableComponent_th_39_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MaterialTableComponent_td_40_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MaterialTableComponent_th_42_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, MaterialTableComponent_td_43_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, MaterialTableComponent_th_45_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, MaterialTableComponent_td_46_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MaterialTableComponent_tr_47_Template, 1, 0, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MaterialTableComponent_tr_48_Template, 1, 0, "tr", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Pagination Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, MaterialTableComponent_th_58_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, MaterialTableComponent_td_59_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, MaterialTableComponent_th_61_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, MaterialTableComponent_td_62_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, MaterialTableComponent_th_64_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, MaterialTableComponent_td_65_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](66, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, MaterialTableComponent_th_67_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, MaterialTableComponent_td_68_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](69, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, MaterialTableComponent_th_70_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, MaterialTableComponent_td_71_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](72, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, MaterialTableComponent_th_73_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, MaterialTableComponent_td_74_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](75, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, MaterialTableComponent_th_76_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, MaterialTableComponent_td_77_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, MaterialTableComponent_tr_78_Template, 1, 0, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, MaterialTableComponent_tr_79_Template, 1, 0, "tr", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "mat-paginator", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Filter Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-form-field", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function MaterialTableComponent_Template_input_keyup_91_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](93, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, MaterialTableComponent_th_94_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, MaterialTableComponent_td_95_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](96, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, MaterialTableComponent_th_97_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, MaterialTableComponent_td_98_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](99, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, MaterialTableComponent_th_100_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, MaterialTableComponent_td_101_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](102, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, MaterialTableComponent_th_103_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, MaterialTableComponent_td_104_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](105, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, MaterialTableComponent_th_106_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, MaterialTableComponent_td_107_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](108, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, MaterialTableComponent_th_109_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, MaterialTableComponent_td_110_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](111, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, MaterialTableComponent_th_112_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, MaterialTableComponent_td_113_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, MaterialTableComponent_tr_114_Template, 1, 0, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, MaterialTableComponent_tr_115_Template, 1, 0, "tr", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9tYXRlcmlhbC10YWJsZS9tYXRlcmlhbC10YWJsZS5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-material-table',
            templateUrl: './material-table.component.html',
            styleUrls: ['./material-table.component.sass']
          }]
        }], function () {
          return [];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "w7GV":
    /*!*****************************************!*\
      !*** ./src/app/tables/tables.module.ts ***!
      \*****************************************/

    /*! exports provided: TablesModule */

    /***/
    function w7GV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
        return TablesModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tables-routing.module */
      "PRlH");
      /* harmony import */


      var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./basic-table/basic-table.component */
      "us77");
      /* harmony import */


      var _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ngx-datatable/ngx-datatable.component */
      "p95r");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./material-table/material-table.component */
      "vEQH");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");

      var TablesModule = function TablesModule() {
        _classCallCheck(this, TablesModule);
      };

      TablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TablesModule
      });
      TablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TablesModule_Factory(t) {
          return new (t || TablesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TablesModule, {
          declarations: [_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_4__["BasicTableComponent"], _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableComponent"], _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__["MaterialTableComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TablesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_4__["BasicTableComponent"], _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableComponent"], _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__["MaterialTableComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=tables-tables-module-es5.js.map