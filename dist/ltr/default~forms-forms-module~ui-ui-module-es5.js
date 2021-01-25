(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~forms-forms-module~ui-ui-module"], {
    /***/
    "/1cH":
    /*!******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js ***!
      \******************************************************************************/

    /*! exports provided: AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocomplete, MatAutocompleteModule, MatAutocompleteOrigin, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, _MatAutocompleteBase, _MatAutocompleteOriginBase, _MatAutocompleteTriggerBase, getMatAutocompleteMissingPanelError */

    /***/
    function cH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function () {
        return AUTOCOMPLETE_OPTION_HEIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function () {
        return AUTOCOMPLETE_PANEL_HEIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function () {
        return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function () {
        return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function () {
        return MAT_AUTOCOMPLETE_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function () {
        return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
        return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function () {
        return MAT_AUTOCOMPLETE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function () {
        return MatAutocomplete;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function () {
        return MatAutocompleteModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function () {
        return MatAutocompleteOrigin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function () {
        return MatAutocompleteSelectedEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function () {
        return MatAutocompleteTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatAutocompleteBase", function () {
        return _MatAutocompleteBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatAutocompleteOriginBase", function () {
        return _MatAutocompleteOriginBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatAutocompleteTriggerBase", function () {
        return _MatAutocompleteTriggerBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function () {
        return getMatAutocompleteMissingPanelError;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Autocomplete IDs need to be unique across components, so this counter exists outside of
       * the component definition.
       */


      var _c0 = ["panel"];

      function MatAutocomplete_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);
        }
      }

      var _c1 = ["*"];
      var _uniqueAutocompleteIdCounter = 0;
      /** Event object that is emitted when an autocomplete option is selected. */

      var MatAutocompleteSelectedEvent = function MatAutocompleteSelectedEvent(
      /** Reference to the autocomplete panel that emitted the event. */
      source,
      /** Option that was selected. */
      option) {
        _classCallCheck(this, MatAutocompleteSelectedEvent);

        this.source = source;
        this.option = option;
      }; // Boilerplate for applying mixins to MatAutocomplete.

      /** @docs-private */


      var MatAutocompleteBase = function MatAutocompleteBase() {
        _classCallCheck(this, MatAutocompleteBase);
      };

      var _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(MatAutocompleteBase);
      /** Injection token to be used to override the default options for `mat-autocomplete`. */


      var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-default-options', {
        providedIn: 'root',
        factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
        return {
          autoActiveFirstOption: false
        };
      }
      /** Base class with all of the `MatAutocomplete` functionality. */


      var _MatAutocompleteBase = /*#__PURE__*/function (_MatAutocompleteMixin) {
        _inherits(_MatAutocompleteBase, _MatAutocompleteMixin);

        var _super = _createSuper(_MatAutocompleteBase);

        function _MatAutocompleteBase(_changeDetectorRef, _elementRef, defaults) {
          var _this;

          _classCallCheck(this, _MatAutocompleteBase);

          _this = _super.call(this);
          _this._changeDetectorRef = _changeDetectorRef;
          _this._elementRef = _elementRef;
          _this._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /** Whether the autocomplete panel should be visible, depending on option length. */

          _this.showPanel = false;
          _this._isOpen = false;
          /** Function that maps an option's control value to its display value in the trigger. */

          _this.displayWith = null;
          /** Event that is emitted whenever an option from the list is selected. */

          _this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Event that is emitted when the autocomplete panel is opened. */

          _this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Event that is emitted when the autocomplete panel is closed. */

          _this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Emits whenever an option is activated using the keyboard. */

          _this.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          _this._classList = {};
          /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */

          _this.id = "mat-autocomplete-".concat(_uniqueAutocompleteIdCounter++);
          _this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
          return _this;
        }
        /** Whether the autocomplete panel is open. */


        _createClass(_MatAutocompleteBase, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this2 = this;

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["ActiveDescendantKeyManager"](this.options).withWrap();
            this._activeOptionChanges = this._keyManager.change.subscribe(function (index) {
              _this2.optionActivated.emit({
                source: _this2,
                option: _this2.options.toArray()[index] || null
              });
            }); // Set the initial visibility state.

            this._setVisibility();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._activeOptionChanges.unsubscribe();
          }
          /**
           * Sets the panel scrollTop. This allows us to manually scroll to display options
           * above or below the fold, as they are not actually being focused when active.
           */

        }, {
          key: "_setScrollTop",
          value: function _setScrollTop(scrollTop) {
            if (this.panel) {
              this.panel.nativeElement.scrollTop = scrollTop;
            }
          }
          /** Returns the panel's scrollTop. */

        }, {
          key: "_getScrollTop",
          value: function _getScrollTop() {
            return this.panel ? this.panel.nativeElement.scrollTop : 0;
          }
          /** Panel should hide itself when the option list is empty. */

        }, {
          key: "_setVisibility",
          value: function _setVisibility() {
            this.showPanel = !!this.options.length;

            this._setVisibilityClasses(this._classList);

            this._changeDetectorRef.markForCheck();
          }
          /** Emits the `select` event. */

        }, {
          key: "_emitSelectEvent",
          value: function _emitSelectEvent(option) {
            var event = new MatAutocompleteSelectedEvent(this, option);
            this.optionSelected.emit(event);
          }
          /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */

        }, {
          key: "_setVisibilityClasses",
          value: function _setVisibilityClasses(classList) {
            classList[this._visibleClass] = this.showPanel;
            classList[this._hiddenClass] = !this.showPanel;
          }
        }, {
          key: "isOpen",
          get: function get() {
            return this._isOpen && this.showPanel;
          }
          /**
           * Whether the first option should be highlighted when the autocomplete panel is opened.
           * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
           */

        }, {
          key: "autoActiveFirstOption",
          get: function get() {
            return this._autoActiveFirstOption;
          },
          set: function set(value) {
            this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /**
           * Takes classes set on the host mat-autocomplete element and applies them to the panel
           * inside the overlay container to allow for easy styling.
           */

        }, {
          key: "classList",
          set: function set(value) {
            if (value && value.length) {
              this._classList = value.split(' ').reduce(function (classList, className) {
                classList[className.trim()] = true;
                return classList;
              }, {});
            } else {
              this._classList = {};
            }

            this._setVisibilityClasses(this._classList);

            this._elementRef.nativeElement.className = '';
          }
        }]);

        return _MatAutocompleteBase;
      }(_MatAutocompleteMixinBase);

      _MatAutocompleteBase.ɵfac = function _MatAutocompleteBase_Factory(t) {
        return new (t || _MatAutocompleteBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS));
      };

      _MatAutocompleteBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatAutocompleteBase,
        viewQuery: function _MatAutocompleteBase_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
          }
        },
        inputs: {
          displayWith: "displayWith",
          autoActiveFirstOption: "autoActiveFirstOption",
          classList: ["class", "classList"],
          panelWidth: "panelWidth"
        },
        outputs: {
          optionSelected: "optionSelected",
          opened: "opened",
          closed: "closed",
          optionActivated: "optionActivated"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      _MatAutocompleteBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
          }]
        }];
      };

      _MatAutocompleteBase.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
            "static": true
          }]
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['panel']
        }],
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        autoActiveFirstOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        panelWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        optionSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        optionActivated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        classList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['class']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatAutocompleteBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          optionSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          optionActivated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          autoActiveFirstOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['class']
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
              "static": true
            }]
          }],
          panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['panel']
          }],
          panelWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      var MatAutocomplete = /*#__PURE__*/function (_MatAutocompleteBase2) {
        _inherits(MatAutocomplete, _MatAutocompleteBase2);

        var _super2 = _createSuper(MatAutocomplete);

        function MatAutocomplete() {
          var _this3;

          _classCallCheck(this, MatAutocomplete);

          _this3 = _super2.apply(this, arguments);
          _this3._visibleClass = 'mat-autocomplete-visible';
          _this3._hiddenClass = 'mat-autocomplete-hidden';
          return _this3;
        }

        return MatAutocomplete;
      }(_MatAutocompleteBase);

      MatAutocomplete.ɵfac = function MatAutocomplete_Factory(t) {
        return ɵMatAutocomplete_BaseFactory(t || MatAutocomplete);
      };

      MatAutocomplete.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatAutocomplete,
        selectors: [["mat-autocomplete"]],
        contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
          }
        },
        hostAttrs: [1, "mat-autocomplete"],
        inputs: {
          disableRipple: "disableRipple"
        },
        exportAs: ["matAutocomplete"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
          useExisting: MatAutocomplete
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]],
        template: function MatAutocomplete_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatAutocomplete_ng_template_0_Template, 3, 2, "ng-template");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
      MatAutocomplete.propDecorators = {
        optionGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], {
            descendants: true
          }]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
            descendants: true
          }]
        }]
      };

      var ɵMatAutocomplete_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatAutocomplete);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocomplete, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-autocomplete',
            template: "<ng-template>\n  <div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            exportAs: 'matAutocomplete',
            inputs: ['disableRipple'],
            host: {
              'class': 'mat-autocomplete'
            },
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
              useExisting: MatAutocomplete
            }],
            styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"]
          }]
        }], null, {
          optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], {
              descendants: true
            }]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Base class containing all of the functionality for `MatAutocompleteOrigin`. */


      var _MatAutocompleteOriginBase = function _MatAutocompleteOriginBase(
      /** Reference to the element on which the directive is applied. */
      elementRef) {
        _classCallCheck(this, _MatAutocompleteOriginBase);

        this.elementRef = elementRef;
      };

      _MatAutocompleteOriginBase.ɵfac = function _MatAutocompleteOriginBase_Factory(t) {
        return new (t || _MatAutocompleteOriginBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      _MatAutocompleteOriginBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatAutocompleteOriginBase
      });

      _MatAutocompleteOriginBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatAutocompleteOriginBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Directive applied to an element to make it usable
       * as a connection point for an autocomplete panel.
       */


      var MatAutocompleteOrigin = /*#__PURE__*/function (_MatAutocompleteOrigi) {
        _inherits(MatAutocompleteOrigin, _MatAutocompleteOrigi);

        var _super3 = _createSuper(MatAutocompleteOrigin);

        function MatAutocompleteOrigin() {
          _classCallCheck(this, MatAutocompleteOrigin);

          return _super3.apply(this, arguments);
        }

        return MatAutocompleteOrigin;
      }(_MatAutocompleteOriginBase);

      MatAutocompleteOrigin.ɵfac = function MatAutocompleteOrigin_Factory(t) {
        return ɵMatAutocompleteOrigin_BaseFactory(t || MatAutocompleteOrigin);
      };

      MatAutocompleteOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatAutocompleteOrigin,
        selectors: [["", "matAutocompleteOrigin", ""]],
        exportAs: ["matAutocompleteOrigin"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatAutocompleteOrigin_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatAutocompleteOrigin);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteOrigin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matAutocompleteOrigin]',
            exportAs: 'matAutocompleteOrigin'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The following style constants are necessary to save here in order
       * to properly calculate the scrollTop of the panel. Because we are not
       * actually focusing the active item, scroll must be handled manually.
       */

      /**
       * The height of each autocomplete option.
       * @deprecated No longer being used. To be removed.
       * @breaking-change 11.0.0
       */


      var AUTOCOMPLETE_OPTION_HEIGHT = 48;
      /**
       * The total height of the autocomplete panel.
       * @deprecated No longer being used. To be removed.
       * @breaking-change 11.0.0
       */

      var AUTOCOMPLETE_PANEL_HEIGHT = 256;
      /** Injection token that determines the scroll handling while the autocomplete panel is open. */

      var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-scroll-strategy');
      /** @docs-private */

      function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
        useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
      };
      /**
       * Provider that allows the autocomplete to register as a ControlValueAccessor.
       * @docs-private
       */

      var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
          return MatAutocompleteTrigger;
        }),
        multi: true
      };
      /**
       * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
       * @docs-private
       */

      function getMatAutocompleteMissingPanelError() {
        return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
      }
      /** Base class with all of the `MatAutocompleteTrigger` functionality. */


      var _MatAutocompleteTriggerBase = /*#__PURE__*/function () {
        function _MatAutocompleteTriggerBase(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler) {
          var _this4 = this;

          _classCallCheck(this, _MatAutocompleteTriggerBase);

          this._element = _element;
          this._overlay = _overlay;
          this._viewContainerRef = _viewContainerRef;
          this._zone = _zone;
          this._changeDetectorRef = _changeDetectorRef;
          this._dir = _dir;
          this._formField = _formField;
          this._document = _document;
          this._viewportRuler = _viewportRuler;
          this._componentDestroyed = false;
          this._autocompleteDisabled = false;
          /** Whether or not the label state is being overridden. */

          this._manuallyFloatingLabel = false;
          /** Subscription to viewport size changes. */

          this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /**
           * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
           * closed autocomplete from being reopened if the user switches to another browser tab and then
           * comes back.
           */

          this._canOpenOnNextFocus = true;
          /** Stream of keyboard events that can close the panel. */

          this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /**
           * Event handler for when the window is blurred. Needs to be an
           * arrow function in order to preserve the context.
           */

          this._windowBlurHandler = function () {
            // If the user blurred the window while the autocomplete is focused, it means that it'll be
            // refocused when they come back. In this case we want to skip the first focus event, if the
            // pane was closed, in order to avoid reopening it unintentionally.
            _this4._canOpenOnNextFocus = _this4._document.activeElement !== _this4._element.nativeElement || _this4.panelOpen;
          };
          /** `View -> model callback called when value changes` */


          this._onChange = function () {};
          /** `View -> model callback called when autocomplete has been touched` */


          this._onTouched = function () {};
          /**
           * Position of the autocomplete panel relative to the trigger element. A position of `auto`
           * will render the panel underneath the trigger if there is enough space for it to fit in
           * the viewport, otherwise the panel will be shown above it. If the position is set to
           * `above` or `below`, the panel will always be shown above or below the trigger. no matter
           * whether it fits completely in the viewport.
           */


          this.position = 'auto';
          /**
           * `autocomplete` attribute to be set on the input element.
           * @docs-private
           */

          this.autocompleteAttribute = 'off';
          this._overlayAttached = false;
          /** Stream of autocomplete option selections. */

          this.optionSelections = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () {
            if (_this4.autocomplete && _this4.autocomplete.options) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(_this4.autocomplete.options.map(function (option) {
                return option.onSelectionChange;
              })));
            } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
            // Return a stream that we'll replace with the real one once everything is in place.


            return _this4._zone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(function () {
              return _this4.optionSelections;
            }));
          });
          this._scrollStrategy = scrollStrategy;
        }
        /**
         * Whether the autocomplete is disabled. When disabled, the element will
         * act as a regular input and the user won't be able to open the panel.
         */


        _createClass(_MatAutocompleteTriggerBase, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this5 = this;

            var window = this._getWindow();

            if (typeof window !== 'undefined') {
              this._zone.runOutsideAngular(function () {
                return window.addEventListener('blur', _this5._windowBlurHandler);
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['position'] && this._positionStrategy) {
              this._setStrategyPositions(this._positionStrategy);

              if (this.panelOpen) {
                this._overlayRef.updatePosition();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var window = this._getWindow();

            if (typeof window !== 'undefined') {
              window.removeEventListener('blur', this._windowBlurHandler);
            }

            this._viewportSubscription.unsubscribe();

            this._componentDestroyed = true;

            this._destroyPanel();

            this._closeKeyEventStream.complete();
          }
          /** Whether or not the autocomplete panel is open. */

        }, {
          key: "openPanel",

          /** Opens the autocomplete suggestion panel. */
          value: function openPanel() {
            this._attachOverlay();

            this._floatLabel();
          }
          /** Closes the autocomplete suggestion panel. */

        }, {
          key: "closePanel",
          value: function closePanel() {
            this._resetLabel();

            if (!this._overlayAttached) {
              return;
            }

            if (this.panelOpen) {
              // Only emit if the panel was visible.
              this.autocomplete.closed.emit();
            }

            this.autocomplete._isOpen = this._overlayAttached = false;

            if (this._overlayRef && this._overlayRef.hasAttached()) {
              this._overlayRef.detach();

              this._closingActionsSubscription.unsubscribe();
            } // Note that in some cases this can end up being called after the component is destroyed.
            // Add a check to ensure that we don't try to run change detection on a destroyed view.


            if (!this._componentDestroyed) {
              // We need to trigger change detection manually, because
              // `fromEvent` doesn't seem to do it at the proper time.
              // This ensures that the label is reset when the
              // user clicks outside.
              this._changeDetectorRef.detectChanges();
            }
          }
          /**
           * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
           * within the viewport.
           */

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            if (this._overlayAttached) {
              this._overlayRef.updatePosition();
            }
          }
          /**
           * A stream of actions that should close the autocomplete panel, including
           * when an option is selected, on blur, and when TAB is pressed.
           */

        }, {
          key: "_getOutsideClickStream",

          /** Stream of clicks outside of the autocomplete panel. */
          value: function _getOutsideClickStream() {
            var _this6 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'click'), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'touchend')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (event) {
              // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
              // fall back to check the first element in the path of the click event.
              var clickTarget = _this6._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] : event.target;
              var formField = _this6._formField ? _this6._formField._elementRef.nativeElement : null;
              var customOrigin = _this6.connectedTo ? _this6.connectedTo.elementRef.nativeElement : null;
              return _this6._overlayAttached && clickTarget !== _this6._element.nativeElement && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!_this6._overlayRef && !_this6._overlayRef.overlayElement.contains(clickTarget);
            }));
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            var _this7 = this;

            Promise.resolve(null).then(function () {
              return _this7._setTriggerValue(value);
            });
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._element.nativeElement.disabled = isDisabled;
          }
        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            var keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
            // in line with other browsers. By default, pressing escape on IE will cause it to revert
            // the input value to the one that it had on focus, however it won't dispatch any events
            // which means that the model value will be out of sync with the view.

            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
              event.preventDefault();
            }

            if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ENTER"] && this.panelOpen) {
              this.activeOption._selectViaInteraction();

              this._resetActiveItem();

              event.preventDefault();
            } else if (this.autocomplete) {
              var prevActiveItem = this.autocomplete._keyManager.activeItem;
              var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["DOWN_ARROW"];

              if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["TAB"]) {
                this.autocomplete._keyManager.onKeydown(event);
              } else if (isArrowKey && this._canOpen()) {
                this.openPanel();
              }

              if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
                this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
              }
            }
          }
        }, {
          key: "_handleInput",
          value: function _handleInput(event) {
            var target = event.target;
            var value = target.value; // Based on `NumberValueAccessor` from forms.

            if (target.type === 'number') {
              value = value == '' ? null : parseFloat(value);
            } // If the input has a placeholder, IE will fire the `input` event on page load,
            // focus and blur, in addition to when the user actually changed the value. To
            // filter out all of the extra events, we save the value on focus and between
            // `input` events, and we check whether it changed.
            // See: https://connect.microsoft.com/IE/feedback/details/885747/


            if (this._previousValue !== value) {
              this._previousValue = value;

              this._onChange(value);

              if (this._canOpen() && this._document.activeElement === event.target) {
                this.openPanel();
              }
            }
          }
        }, {
          key: "_handleFocus",
          value: function _handleFocus() {
            if (!this._canOpenOnNextFocus) {
              this._canOpenOnNextFocus = true;
            } else if (this._canOpen()) {
              this._previousValue = this._element.nativeElement.value;

              this._attachOverlay();

              this._floatLabel(true);
            }
          }
          /**
           * In "auto" mode, the label will animate down as soon as focus is lost.
           * This causes the value to jump when selecting an option with the mouse.
           * This method manually floats the label until the panel can be closed.
           * @param shouldAnimate Whether the label should be animated when it is floated.
           */

        }, {
          key: "_floatLabel",
          value: function _floatLabel() {
            var shouldAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this._formField && this._formField.floatLabel === 'auto') {
              if (shouldAnimate) {
                this._formField._animateAndLockLabel();
              } else {
                this._formField.floatLabel = 'always';
              }

              this._manuallyFloatingLabel = true;
            }
          }
          /** If the label has been manually elevated, return it to its normal state. */

        }, {
          key: "_resetLabel",
          value: function _resetLabel() {
            if (this._manuallyFloatingLabel) {
              this._formField.floatLabel = 'auto';
              this._manuallyFloatingLabel = false;
            }
          }
          /**
           * This method listens to a stream of panel closing actions and resets the
           * stream every time the option list changes.
           */

        }, {
          key: "_subscribeToClosingActions",
          value: function _subscribeToClosingActions() {
            var _this8 = this;

            var firstStable = this._zone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1));

            var optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(function () {
              return _this8._positionStrategy.reapplyLastPosition();
            }), // Defer emitting to the stream until the next tick, because changing
            // bindings in here will cause "changed after checked" errors.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(0)); // When the zone is stable initially, and when the option list changes...

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
            // that were created, and flatten it so our stream only emits closing events...
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(function () {
              var wasOpen = _this8.panelOpen;

              _this8._resetActiveItem();

              _this8.autocomplete._setVisibility();

              if (_this8.panelOpen) {
                _this8._overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
                // event, because we may not have emitted it when the panel was attached. This
                // can happen if the users opens the panel and there are no options, but the
                // options come in slightly later or as a result of the value changing.


                if (wasOpen !== _this8.panelOpen) {
                  _this8.autocomplete.opened.emit();
                }
              }

              return _this8.panelClosingActions;
            }), // when the first closing event occurs...
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)) // set the value, close the panel, and complete.
            .subscribe(function (event) {
              return _this8._setValueAndClose(event);
            });
          }
          /** Destroys the autocomplete suggestion panel. */

        }, {
          key: "_destroyPanel",
          value: function _destroyPanel() {
            if (this._overlayRef) {
              this.closePanel();

              this._overlayRef.dispose();

              this._overlayRef = null;
            }
          }
        }, {
          key: "_setTriggerValue",
          value: function _setTriggerValue(value) {
            var toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
            // The display value can also be the number zero and shouldn't fall back to an empty string.

            var inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
            // through change detection.

            if (this._formField) {
              this._formField._control.value = inputValue;
            } else {
              this._element.nativeElement.value = inputValue;
            }

            this._previousValue = inputValue;
          }
          /**
           * This method closes the panel, and if a value is specified, also sets the associated
           * control to that value. It will also mark the control as dirty if this interaction
           * stemmed from the user.
           */

        }, {
          key: "_setValueAndClose",
          value: function _setValueAndClose(event) {
            if (event && event.source) {
              this._clearPreviousSelectedOption(event.source);

              this._setTriggerValue(event.source.value);

              this._onChange(event.source.value);

              this._element.nativeElement.focus();

              this.autocomplete._emitSelectEvent(event.source);
            }

            this.closePanel();
          }
          /**
           * Clear any previous selected option and emit a selection change event for this option
           */

        }, {
          key: "_clearPreviousSelectedOption",
          value: function _clearPreviousSelectedOption(skip) {
            this.autocomplete.options.forEach(function (option) {
              if (option !== skip && option.selected) {
                option.deselect();
              }
            });
          }
        }, {
          key: "_attachOverlay",
          value: function _attachOverlay() {
            var _this9 = this;

            if (!this.autocomplete && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatAutocompleteMissingPanelError();
            } // We want to resolve this once, as late as possible so that we can be
            // sure that the element has been moved into its final place in the DOM.


            if (this._isInsideShadowRoot == null) {
              this._isInsideShadowRoot = !!Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["_getShadowRoot"])(this._element.nativeElement);
            }

            var overlayRef = this._overlayRef;

            if (!overlayRef) {
              this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef);
              overlayRef = this._overlay.create(this._getOverlayConfig());
              this._overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
              // the overlay event targeting provided by the CDK overlay.

              overlayRef.keydownEvents().subscribe(function (event) {
                // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
                // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event) || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"] && Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event, 'altKey')) {
                  _this9._resetActiveItem();

                  _this9._closeKeyEventStream.next(); // We need to stop propagation, otherwise the event will eventually
                  // reach the input itself and cause the overlay to be reopened.


                  event.stopPropagation();
                  event.preventDefault();
                }
              });
              this._viewportSubscription = this._viewportRuler.change().subscribe(function () {
                if (_this9.panelOpen && overlayRef) {
                  overlayRef.updateSize({
                    width: _this9._getPanelWidth()
                  });
                }
              });
            } else {
              // Update the trigger, panel width and direction, in case anything has changed.
              this._positionStrategy.setOrigin(this._getConnectedElement());

              overlayRef.updateSize({
                width: this._getPanelWidth()
              });
            }

            if (overlayRef && !overlayRef.hasAttached()) {
              overlayRef.attach(this._portal);
              this._closingActionsSubscription = this._subscribeToClosingActions();
            }

            var wasOpen = this.panelOpen;

            this.autocomplete._setVisibility();

            this.autocomplete._isOpen = this._overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
            // autocomplete won't be shown if there are no options.

            if (this.panelOpen && wasOpen !== this.panelOpen) {
              this.autocomplete.opened.emit();
            }
          }
        }, {
          key: "_getOverlayConfig",
          value: function _getOverlayConfig() {
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayConfig"]({
              positionStrategy: this._getOverlayPosition(),
              scrollStrategy: this._scrollStrategy(),
              width: this._getPanelWidth(),
              direction: this._dir
            });
          }
        }, {
          key: "_getOverlayPosition",
          value: function _getOverlayPosition() {
            var strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);

            this._setStrategyPositions(strategy);

            this._positionStrategy = strategy;
            return strategy;
          }
          /** Sets the positions on a position strategy based on the directive's input state. */

        }, {
          key: "_setStrategyPositions",
          value: function _setStrategyPositions(positionStrategy) {
            // Note that we provide horizontal fallback positions, even though by default the dropdown
            // width matches the input, because consumers can override the width. See #18854.
            var belowPositions = [{
              originX: 'start',
              originY: 'bottom',
              overlayX: 'start',
              overlayY: 'top'
            }, {
              originX: 'end',
              originY: 'bottom',
              overlayX: 'end',
              overlayY: 'top'
            }]; // The overlay edge connected to the trigger should have squared corners, while
            // the opposite end has rounded corners. We apply a CSS class to swap the
            // border-radius based on the overlay position.

            var panelClass = this._aboveClass;
            var abovePositions = [{
              originX: 'start',
              originY: 'top',
              overlayX: 'start',
              overlayY: 'bottom',
              panelClass: panelClass
            }, {
              originX: 'end',
              originY: 'top',
              overlayX: 'end',
              overlayY: 'bottom',
              panelClass: panelClass
            }];
            var positions;

            if (this.position === 'above') {
              positions = abovePositions;
            } else if (this.position === 'below') {
              positions = belowPositions;
            } else {
              positions = [].concat(belowPositions, abovePositions);
            }

            positionStrategy.withPositions(positions);
          }
        }, {
          key: "_getConnectedElement",
          value: function _getConnectedElement() {
            if (this.connectedTo) {
              return this.connectedTo.elementRef;
            }

            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
          }
        }, {
          key: "_getPanelWidth",
          value: function _getPanelWidth() {
            return this.autocomplete.panelWidth || this._getHostWidth();
          }
          /** Returns the width of the input element, so the panel width can match it. */

        }, {
          key: "_getHostWidth",
          value: function _getHostWidth() {
            return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
          }
          /**
           * Resets the active item to -1 so arrow events will activate the
           * correct options, or to 0 if the consumer opted into it.
           */

        }, {
          key: "_resetActiveItem",
          value: function _resetActiveItem() {
            this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
          }
          /** Determines whether the panel can be opened. */

        }, {
          key: "_canOpen",
          value: function _canOpen() {
            var element = this._element.nativeElement;
            return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var _a;

            return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
          }
          /** Scrolls to a particular option in the list. */

        }, {
          key: "_scrollToOption",
          value: function _scrollToOption(index) {
            // Given that we are not actually focusing active options, we must manually adjust scroll
            // to reveal options below the fold. First, we find the offset of the option from the top
            // of the panel. If that offset is below the fold, the new scrollTop will be the offset -
            // the panel height + the option height, so the active option will be just visible at the
            // bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
            // will become the offset. If that offset is visible within the panel already, the scrollTop is
            // not adjusted.
            var autocomplete = this.autocomplete;
            var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(index, autocomplete.options, autocomplete.optionGroups);

            if (index === 0 && labelCount === 1) {
              // If we've got one group label before the option and we're at the top option,
              // scroll the list to the top. This is better UX than scrolling the list to the
              // top of the option, because it allows the user to read the top group's label.
              autocomplete._setScrollTop(0);
            } else {
              var option = autocomplete.options.toArray()[index];

              if (option) {
                var element = option._getHostElement();

                var newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);

                autocomplete._setScrollTop(newScrollPosition);
              }
            }
          }
        }, {
          key: "autocompleteDisabled",
          get: function get() {
            return this._autocompleteDisabled;
          },
          set: function set(value) {
            this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "panelOpen",
          get: function get() {
            return this._overlayAttached && this.autocomplete.showPanel;
          }
        }, {
          key: "panelClosingActions",
          get: function get() {
            var _this10 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function () {
              return _this10._overlayAttached;
            })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function () {
              return _this10._overlayAttached;
            })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])()).pipe( // Normalize the output so we return a consistent type.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (event) {
              return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionSelectionChange"] ? event : null;
            }));
          }
          /** The currently active option, coerced to MatOption type. */

        }, {
          key: "activeOption",
          get: function get() {
            if (this.autocomplete && this.autocomplete._keyManager) {
              return this.autocomplete._keyManager.activeItem;
            }

            return null;
          }
        }]);

        return _MatAutocompleteTriggerBase;
      }();

      _MatAutocompleteTriggerBase.ɵfac = function _MatAutocompleteTriggerBase_Factory(t) {
        return new (t || _MatAutocompleteTriggerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"], 9), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]));
      };

      _MatAutocompleteTriggerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatAutocompleteTriggerBase,
        inputs: {
          position: ["matAutocompletePosition", "position"],
          autocompleteAttribute: ["autocomplete", "autocompleteAttribute"],
          autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"],
          autocomplete: ["matAutocomplete", "autocomplete"],
          connectedTo: ["matAutocompleteConnectedTo", "connectedTo"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });

      _MatAutocompleteTriggerBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"]]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
        }];
      };

      _MatAutocompleteTriggerBase.propDecorators = {
        autocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocomplete']
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompletePosition']
        }],
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompleteConnectedTo']
        }],
        autocompleteAttribute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['autocomplete']
        }],
        autocompleteDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompleteDisabled']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatAutocompleteTriggerBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"]]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
          }];
        }, {
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocompletePosition']
          }],
          autocompleteAttribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['autocomplete']
          }],
          autocompleteDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocompleteDisabled']
          }],
          autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocomplete']
          }],
          connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocompleteConnectedTo']
          }]
        });
      })();

      var MatAutocompleteTrigger = /*#__PURE__*/function (_MatAutocompleteTrigg) {
        _inherits(MatAutocompleteTrigger, _MatAutocompleteTrigg);

        var _super4 = _createSuper(MatAutocompleteTrigger);

        function MatAutocompleteTrigger() {
          var _this11;

          _classCallCheck(this, MatAutocompleteTrigger);

          _this11 = _super4.apply(this, arguments);
          _this11._aboveClass = 'mat-autocomplete-panel-above';
          return _this11;
        }

        return MatAutocompleteTrigger;
      }(_MatAutocompleteTriggerBase);

      MatAutocompleteTrigger.ɵfac = function MatAutocompleteTrigger_Factory(t) {
        return ɵMatAutocompleteTrigger_BaseFactory(t || MatAutocompleteTrigger);
      };

      MatAutocompleteTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatAutocompleteTrigger,
        selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
        hostAttrs: [1, "mat-autocomplete-trigger"],
        hostVars: 7,
        hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
              return ctx._handleFocus();
            })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
              return ctx._onTouched();
            })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
              return ctx._handleInput($event);
            })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", !ctx.autocompleteDisabled);
          }
        },
        exportAs: ["matAutocompleteTrigger"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatAutocompleteTrigger_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatAutocompleteTrigger);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: "input[matAutocomplete], textarea[matAutocomplete]",
            host: {
              'class': 'mat-autocomplete-trigger',
              '[attr.autocomplete]': 'autocompleteAttribute',
              '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
              '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
              '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
              '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
              '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
              '[attr.aria-haspopup]': '!autocompleteDisabled',
              // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
              // a little earlier. This avoids issues where IE delays the focusing of the input.
              '(focusin)': '_handleFocus()',
              '(blur)': '_onTouched()',
              '(input)': '_handleInput($event)',
              '(keydown)': '_handleKeydown($event)'
            },
            exportAs: 'matAutocompleteTrigger',
            providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatAutocompleteModule = function MatAutocompleteModule() {
        _classCallCheck(this, MatAutocompleteModule);
      };

      MatAutocompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatAutocompleteModule
      });
      MatAutocompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatAutocompleteModule_Factory(t) {
          return new (t || MatAutocompleteModule)();
        },
        providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatAutocompleteModule, {
          declarations: function declarations() {
            return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin];
          },
          imports: function imports() {
            return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]];
          },
          exports: function exports() {
            return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
            exports: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
            providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=autocomplete.js.map

      /***/

    },

    /***/
    "5RNC":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js ***!
      \************************************************************************/

    /*! exports provided: MAT_SLIDER_VALUE_ACCESSOR, MatSlider, MatSliderChange, MatSliderModule */

    /***/
    function RNC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function () {
        return MAT_SLIDER_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlider", function () {
        return MatSlider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSliderChange", function () {
        return MatSliderChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSliderModule", function () {
        return MatSliderModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _c0 = ["sliderWrapper"];
      var activeEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["normalizePassiveListenerOptions"])({
        passive: false
      });
      /**
       * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
       * the default separation we chose.
       */

      var MIN_AUTO_TICK_SEPARATION = 30;
      /** The thumb gap size for a disabled slider. */

      var DISABLED_THUMB_GAP = 7;
      /** The thumb gap size for a non-active slider at its minimum value. */

      var MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
      /** The thumb gap size for an active slider at its minimum value. */

      var MIN_VALUE_ACTIVE_THUMB_GAP = 10;
      /**
       * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
       * This allows it to support [(ngModel)] and [formControl].
       * @docs-private
       */

      var MAT_SLIDER_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSlider;
        }),
        multi: true
      };
      /** A simple change event emitted by the MatSlider component. */

      var MatSliderChange = function MatSliderChange() {
        _classCallCheck(this, MatSliderChange);
      }; // Boilerplate for applying mixins to MatSlider.

      /** @docs-private */


      var MatSliderBase = function MatSliderBase(_elementRef) {
        _classCallCheck(this, MatSliderBase);

        this._elementRef = _elementRef;
      };

      var _MatSliderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSliderBase), 'accent'));
      /**
       * Allows users to select from a range of values by moving the slider thumb. It is similar in
       * behavior to the native `<input type="range">` element.
       */


      var MatSlider = /*#__PURE__*/function (_MatSliderMixinBase2) {
        _inherits(MatSlider, _MatSliderMixinBase2);

        var _super5 = _createSuper(MatSlider);

        function MatSlider(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _ngZone, _document, _animationMode) {
          var _this12;

          _classCallCheck(this, MatSlider);

          _this12 = _super5.call(this, elementRef);
          _this12._focusMonitor = _focusMonitor;
          _this12._changeDetectorRef = _changeDetectorRef;
          _this12._dir = _dir;
          _this12._ngZone = _ngZone;
          _this12._animationMode = _animationMode;
          _this12._invert = false;
          _this12._max = 100;
          _this12._min = 0;
          _this12._step = 1;
          _this12._thumbLabel = false;
          _this12._tickInterval = 0;
          _this12._value = null;
          _this12._vertical = false;
          /** Event emitted when the slider value has changed. */

          _this12.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the slider thumb moves. */

          _this12.input = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Emits when the raw value of the slider changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * @docs-private
           */

          _this12.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** onTouch function registered via registerOnTouch (ControlValueAccessor). */

          _this12.onTouched = function () {};

          _this12._percent = 0;
          /**
           * Whether or not the thumb is sliding.
           * Used to determine if there should be a transition for the thumb and fill track.
           */

          _this12._isSliding = false;
          /**
           * Whether or not the slider is active (clicked or sliding).
           * Used to shrink and grow the thumb as according to the Material Design spec.
           */

          _this12._isActive = false;
          /** The size of a tick interval as a percentage of the size of the track. */

          _this12._tickIntervalPercent = 0;
          /** The dimensions of the slider. */

          _this12._sliderDimensions = null;

          _this12._controlValueAccessorChangeFn = function () {};
          /** Subscription to the Directionality change EventEmitter. */


          _this12._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
          /** Called when the user has put their pointer down on the slider. */

          _this12._pointerDown = function (event) {
            // Don't do anything if the slider is disabled or the
            // user is using anything other than the main mouse button.
            if (_this12.disabled || _this12._isSliding || !isTouchEvent(event) && event.button !== 0) {
              return;
            }

            _this12._ngZone.run(function () {
              var oldValue = _this12.value;
              var pointerPosition = getPointerPositionOnPage(event);
              _this12._isSliding = true;
              _this12._lastPointerEvent = event;
              event.preventDefault();

              _this12._focusHostElement();

              _this12._onMouseenter(); // Simulate mouseenter in case this is a mobile device.


              _this12._bindGlobalEvents(event);

              _this12._focusHostElement();

              _this12._updateValueFromPosition(pointerPosition);

              _this12._valueOnSlideStart = oldValue; // Emit a change and input event if the value changed.

              if (oldValue != _this12.value) {
                _this12._emitInputEvent();
              }
            });
          };
          /**
           * Called when the user has moved their pointer after
           * starting to drag. Bound on the document level.
           */


          _this12._pointerMove = function (event) {
            if (_this12._isSliding) {
              // Prevent the slide from selecting anything else.
              event.preventDefault();
              var oldValue = _this12.value;
              _this12._lastPointerEvent = event;

              _this12._updateValueFromPosition(getPointerPositionOnPage(event)); // Native range elements always emit `input` events when the value changed while sliding.


              if (oldValue != _this12.value) {
                _this12._emitInputEvent();
              }
            }
          };
          /** Called when the user has lifted their pointer. Bound on the document level. */


          _this12._pointerUp = function (event) {
            if (_this12._isSliding) {
              event.preventDefault();

              _this12._removeGlobalEvents();

              _this12._isSliding = false;

              if (_this12._valueOnSlideStart != _this12.value && !_this12.disabled) {
                _this12._emitChangeEvent();
              }

              _this12._valueOnSlideStart = _this12._lastPointerEvent = null;
            }
          };
          /** Called when the window has lost focus. */


          _this12._windowBlur = function () {
            // If the window is blurred while dragging we need to stop dragging because the
            // browser won't dispatch the `mouseup` and `touchend` events anymore.
            if (_this12._lastPointerEvent) {
              _this12._pointerUp(_this12._lastPointerEvent);
            }
          };

          _this12._document = _document;
          _this12.tabIndex = parseInt(tabIndex) || 0;

          _ngZone.runOutsideAngular(function () {
            var element = elementRef.nativeElement;
            element.addEventListener('mousedown', _this12._pointerDown, activeEventOptions);
            element.addEventListener('touchstart', _this12._pointerDown, activeEventOptions);
          });

          return _this12;
        }
        /** Whether the slider is inverted. */


        _createClass(MatSlider, [{
          key: "focus",

          /** set focus to the host element */
          value: function focus(options) {
            this._focusHostElement(options);
          }
          /** blur the host element */

        }, {
          key: "blur",
          value: function blur() {
            this._blurHostElement();
          }
          /** The percentage of the slider that coincides with the value. */

        }, {
          key: "_shouldInvertAxis",

          /**
           * Whether the axis of the slider is inverted.
           * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
           */
          value: function _shouldInvertAxis() {
            // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
            // top. However from a y-axis standpoint this is inverted.
            return this.vertical ? !this.invert : this.invert;
          }
          /** Whether the slider is at its minimum value. */

        }, {
          key: "_isMinValue",
          value: function _isMinValue() {
            return this.percent === 0;
          }
          /**
           * The amount of space to leave between the slider thumb and the track fill & track background
           * elements.
           */

        }, {
          key: "_getThumbGap",
          value: function _getThumbGap() {
            if (this.disabled) {
              return DISABLED_THUMB_GAP;
            }

            if (this._isMinValue() && !this.thumbLabel) {
              return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
            }

            return 0;
          }
          /** CSS styles for the track background element. */

        }, {
          key: "_getTrackBackgroundStyles",
          value: function _getTrackBackgroundStyles() {
            var axis = this.vertical ? 'Y' : 'X';
            var scale = this.vertical ? "1, ".concat(1 - this.percent, ", 1") : "".concat(1 - this.percent, ", 1, 1");
            var sign = this._shouldInvertMouseCoords() ? '-' : '';
            return {
              // scale3d avoids some rendering issues in Chrome. See #12071.
              transform: "translate".concat(axis, "(").concat(sign).concat(this._getThumbGap(), "px) scale3d(").concat(scale, ")")
            };
          }
          /** CSS styles for the track fill element. */

        }, {
          key: "_getTrackFillStyles",
          value: function _getTrackFillStyles() {
            var percent = this.percent;
            var axis = this.vertical ? 'Y' : 'X';
            var scale = this.vertical ? "1, ".concat(percent, ", 1") : "".concat(percent, ", 1, 1");
            var sign = this._shouldInvertMouseCoords() ? '' : '-';
            return {
              // scale3d avoids some rendering issues in Chrome. See #12071.
              transform: "translate".concat(axis, "(").concat(sign).concat(this._getThumbGap(), "px) scale3d(").concat(scale, ")"),
              // iOS Safari has a bug where it won't re-render elements which start of as `scale(0)` until
              // something forces a style recalculation on it. Since we'll end up with `scale(0)` when
              // the value of the slider is 0, we can easily get into this situation. We force a
              // recalculation by changing the element's `display` when it goes from 0 to any other value.
              display: percent === 0 ? 'none' : ''
            };
          }
          /** CSS styles for the ticks container element. */

        }, {
          key: "_getTicksContainerStyles",
          value: function _getTicksContainerStyles() {
            var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the ticks container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.

            var sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
            var offset = this._tickIntervalPercent / 2 * 100;
            return {
              'transform': "translate".concat(axis, "(").concat(sign).concat(offset, "%)")
            };
          }
          /** CSS styles for the ticks element. */

        }, {
          key: "_getTicksStyles",
          value: function _getTicksStyles() {
            var tickSize = this._tickIntervalPercent * 100;
            var backgroundSize = this.vertical ? "2px ".concat(tickSize, "%") : "".concat(tickSize, "% 2px");
            var axis = this.vertical ? 'Y' : 'X'; // Depending on the direction we pushed the ticks container, push the ticks the opposite
            // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
            // ticks 180 degrees so we're really cutting off the end edge abd not the start.

            var sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
            var rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
            var styles = {
              'backgroundSize': backgroundSize,
              // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
              'transform': "translateZ(0) translate".concat(axis, "(").concat(sign).concat(tickSize / 2, "%)").concat(rotate)
            };

            if (this._isMinValue() && this._getThumbGap()) {
              var shouldInvertAxis = this._shouldInvertAxis();

              var side;

              if (this.vertical) {
                side = shouldInvertAxis ? 'Bottom' : 'Top';
              } else {
                side = shouldInvertAxis ? 'Right' : 'Left';
              }

              styles["padding".concat(side)] = "".concat(this._getThumbGap(), "px");
            }

            return styles;
          }
        }, {
          key: "_getThumbContainerStyles",
          value: function _getThumbContainerStyles() {
            var shouldInvertAxis = this._shouldInvertAxis();

            var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the thumb container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.

            var invertOffset = this._getDirection() == 'rtl' && !this.vertical ? !shouldInvertAxis : shouldInvertAxis;
            var offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
            return {
              'transform': "translate".concat(axis, "(-").concat(offset, "%)")
            };
          }
          /**
           * Whether mouse events should be converted to a slider position by calculating their distance
           * from the right or bottom edge of the slider as opposed to the top or left.
           */

        }, {
          key: "_shouldInvertMouseCoords",
          value: function _shouldInvertMouseCoords() {
            var shouldInvertAxis = this._shouldInvertAxis();

            return this._getDirection() == 'rtl' && !this.vertical ? !shouldInvertAxis : shouldInvertAxis;
          }
          /** The language direction for this slider element. */

        }, {
          key: "_getDirection",
          value: function _getDirection() {
            return this._dir && this._dir.value == 'rtl' ? 'rtl' : 'ltr';
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this13 = this;

            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (origin) {
              _this13._isActive = !!origin && origin !== 'keyboard';

              _this13._changeDetectorRef.detectChanges();
            });

            if (this._dir) {
              this._dirChangeSubscription = this._dir.change.subscribe(function () {
                _this13._changeDetectorRef.markForCheck();
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var element = this._elementRef.nativeElement;
            element.removeEventListener('mousedown', this._pointerDown, activeEventOptions);
            element.removeEventListener('touchstart', this._pointerDown, activeEventOptions);
            this._lastPointerEvent = null;

            this._removeGlobalEvents();

            this._focusMonitor.stopMonitoring(this._elementRef);

            this._dirChangeSubscription.unsubscribe();
          }
        }, {
          key: "_onMouseenter",
          value: function _onMouseenter() {
            if (this.disabled) {
              return;
            } // We save the dimensions of the slider here so we can use them to update the spacing of the
            // ticks and determine where on the slider click and slide events happen.


            this._sliderDimensions = this._getSliderDimensions();

            this._updateTickIntervalPercent();
          }
        }, {
          key: "_onFocus",
          value: function _onFocus() {
            // We save the dimensions of the slider here so we can use them to update the spacing of the
            // ticks and determine where on the slider click and slide events happen.
            this._sliderDimensions = this._getSliderDimensions();

            this._updateTickIntervalPercent();
          }
        }, {
          key: "_onBlur",
          value: function _onBlur() {
            this.onTouched();
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            if (this.disabled || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
              return;
            }

            var oldValue = this.value;

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_UP"]:
                this._increment(10);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_DOWN"]:
                this._increment(-10);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]:
                this.value = this.max;
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"]:
                this.value = this.min;
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"]:
                // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
                // inverted slider the thumb moves in that direction. However for a blind user, nothing
                // about the slider indicates that it is inverted. They will expect left to be decrement,
                // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
                // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
                // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
                // sighted users, therefore we do not swap the meaning.
                this._increment(this._getDirection() == 'rtl' ? 1 : -1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"]:
                this._increment(1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"]:
                // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
                this._increment(this._getDirection() == 'rtl' ? -1 : 1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"]:
                this._increment(-1);

                break;

              default:
                // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
                // it.
                return;
            }

            if (oldValue != this.value) {
              this._emitInputEvent();

              this._emitChangeEvent();
            }

            this._isSliding = true;
            event.preventDefault();
          }
        }, {
          key: "_onKeyup",
          value: function _onKeyup() {
            this._isSliding = false;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            return this._document.defaultView || window;
          }
          /**
           * Binds our global move and end events. They're bound at the document level and only while
           * dragging so that the user doesn't have to keep their pointer exactly over the slider
           * as they're swiping across the screen.
           */

        }, {
          key: "_bindGlobalEvents",
          value: function _bindGlobalEvents(triggerEvent) {
            // Note that we bind the events to the `document`, because it allows us to capture
            // drag cancel events where the user's pointer is outside the browser window.
            var document = this._document;
            var isTouch = isTouchEvent(triggerEvent);
            var moveEventName = isTouch ? 'touchmove' : 'mousemove';
            var endEventName = isTouch ? 'touchend' : 'mouseup';
            document.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
            document.addEventListener(endEventName, this._pointerUp, activeEventOptions);

            if (isTouch) {
              document.addEventListener('touchcancel', this._pointerUp, activeEventOptions);
            }

            var window = this._getWindow();

            if (typeof window !== 'undefined' && window) {
              window.addEventListener('blur', this._windowBlur);
            }
          }
          /** Removes any global event listeners that we may have added. */

        }, {
          key: "_removeGlobalEvents",
          value: function _removeGlobalEvents() {
            var document = this._document;
            document.removeEventListener('mousemove', this._pointerMove, activeEventOptions);
            document.removeEventListener('mouseup', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchmove', this._pointerMove, activeEventOptions);
            document.removeEventListener('touchend', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchcancel', this._pointerUp, activeEventOptions);

            var window = this._getWindow();

            if (typeof window !== 'undefined' && window) {
              window.removeEventListener('blur', this._windowBlur);
            }
          }
          /** Increments the slider by the given number of steps (negative number decrements). */

        }, {
          key: "_increment",
          value: function _increment(numSteps) {
            this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
          }
          /** Calculate the new value from the new physical location. The value will always be snapped. */

        }, {
          key: "_updateValueFromPosition",
          value: function _updateValueFromPosition(pos) {
            if (!this._sliderDimensions) {
              return;
            }

            var offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
            var size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            var posComponent = this.vertical ? pos.y : pos.x; // The exact value is calculated from the event and used to find the closest snap value.

            var percent = this._clamp((posComponent - offset) / size);

            if (this._shouldInvertMouseCoords()) {
              percent = 1 - percent;
            } // Since the steps may not divide cleanly into the max value, if the user
            // slid to 0 or 100 percent, we jump to the min/max value. This approach
            // is slightly more intuitive than using `Math.ceil` below, because it
            // follows the user's pointer closer.


            if (percent === 0) {
              this.value = this.min;
            } else if (percent === 1) {
              this.value = this.max;
            } else {
              var exactValue = this._calculateValue(percent); // This calculation finds the closest step by finding the closest
              // whole number divisible by the step relative to the min.


              var closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min; // The value needs to snap to the min and max.

              this.value = this._clamp(closestValue, this.min, this.max);
            }
          }
          /** Emits a change event if the current value is different from the last emitted value. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            this._controlValueAccessorChangeFn(this.value);

            this.valueChange.emit(this.value);
            this.change.emit(this._createChangeEvent());
          }
          /** Emits an input event when the current value is different from the last emitted value. */

        }, {
          key: "_emitInputEvent",
          value: function _emitInputEvent() {
            this.input.emit(this._createChangeEvent());
          }
          /** Updates the amount of space between ticks as a percentage of the width of the slider. */

        }, {
          key: "_updateTickIntervalPercent",
          value: function _updateTickIntervalPercent() {
            if (!this.tickInterval || !this._sliderDimensions) {
              return;
            }

            if (this.tickInterval == 'auto') {
              var trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
              var pixelsPerStep = trackSize * this.step / (this.max - this.min);
              var stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
              var pixelsPerTick = stepsPerTick * this.step;
              this._tickIntervalPercent = pixelsPerTick / trackSize;
            } else {
              this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
            }
          }
          /** Creates a slider change object from the specified value. */

        }, {
          key: "_createChangeEvent",
          value: function _createChangeEvent() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
            var event = new MatSliderChange();
            event.source = this;
            event.value = value;
            return event;
          }
          /** Calculates the percentage of the slider that a value is. */

        }, {
          key: "_calculatePercentage",
          value: function _calculatePercentage(value) {
            return ((value || 0) - this.min) / (this.max - this.min);
          }
          /** Calculates the value a percentage of the slider corresponds to. */

        }, {
          key: "_calculateValue",
          value: function _calculateValue(percentage) {
            return this.min + percentage * (this.max - this.min);
          }
          /** Return a number between two numbers. */

        }, {
          key: "_clamp",
          value: function _clamp(value) {
            var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            return Math.max(min, Math.min(value, max));
          }
          /**
           * Get the bounding client rect of the slider track element.
           * The track is used rather than the native element to ignore the extra space that the thumb can
           * take up.
           */

        }, {
          key: "_getSliderDimensions",
          value: function _getSliderDimensions() {
            return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
          }
          /**
           * Focuses the native element.
           * Currently only used to allow a blur event to fire but will be used with keyboard input later.
           */

        }, {
          key: "_focusHostElement",
          value: function _focusHostElement(options) {
            this._elementRef.nativeElement.focus(options);
          }
          /** Blurs the native element. */

        }, {
          key: "_blurHostElement",
          value: function _blurHostElement() {
            this._elementRef.nativeElement.blur();
          }
          /**
           * Sets the model value. Implemented as part of ControlValueAccessor.
           * @param value
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
          }
          /**
           * Registers a callback to be triggered when the value has changed.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._controlValueAccessorChangeFn = fn;
          }
          /**
           * Registers a callback to be triggered when the component is touched.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets whether the component should be disabled.
           * Implemented as part of ControlValueAccessor.
           * @param isDisabled
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "invert",
          get: function get() {
            return this._invert;
          },
          set: function set(value) {
            this._invert = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** The maximum value that the slider can have. */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(v) {
            this._max = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._max);
            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
          /** The minimum value that the slider can have. */

        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(v) {
            this._min = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._min); // If the value wasn't explicitly set by the user, set it to the min.

            if (this._value === null) {
              this.value = this._min;
            }

            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
          /** The values at which the thumb will snap. */

        }, {
          key: "step",
          get: function get() {
            return this._step;
          },
          set: function set(v) {
            this._step = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._step);

            if (this._step % 1 !== 0) {
              this._roundToDecimal = this._step.toString().split('.').pop().length;
            } // Since this could modify the label, we need to notify the change detection.


            this._changeDetectorRef.markForCheck();
          }
          /** Whether or not to show the thumb label. */

        }, {
          key: "thumbLabel",
          get: function get() {
            return this._thumbLabel;
          },
          set: function set(value) {
            this._thumbLabel = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /**
           * How often to show ticks. Relative to the step so that a tick always appears on a step.
           * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
           */

        }, {
          key: "tickInterval",
          get: function get() {
            return this._tickInterval;
          },
          set: function set(value) {
            if (value === 'auto') {
              this._tickInterval = 'auto';
            } else if (typeof value === 'number' || typeof value === 'string') {
              this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, this._tickInterval);
            } else {
              this._tickInterval = 0;
            }
          }
          /** Value of the slider. */

        }, {
          key: "value",
          get: function get() {
            // If the value needs to be read and it is still uninitialized, initialize it to the min.
            if (this._value === null) {
              this.value = this._min;
            }

            return this._value;
          },
          set: function set(v) {
            if (v !== this._value) {
              var value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v); // While incrementing by a decimal we can end up with values like 33.300000000000004.
              // Truncate it to ensure that it matches the label and to make it easier to work with.

              if (this._roundToDecimal) {
                value = parseFloat(value.toFixed(this._roundToDecimal));
              }

              this._value = value;
              this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Whether the slider is vertical. */

        }, {
          key: "vertical",
          get: function get() {
            return this._vertical;
          },
          set: function set(value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** The value to be used for display purposes. */

        }, {
          key: "displayValue",
          get: function get() {
            if (this.displayWith) {
              // Value is never null but since setters and getters cannot have
              // different types, the value getter is also typed to return null.
              return this.displayWith(this.value);
            } // Note that this could be improved further by rounding something like 0.999 to 1 or
            // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
            // every change detection cycle.


            if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
              return this.value.toFixed(this._roundToDecimal);
            }

            return this.value || 0;
          }
        }, {
          key: "percent",
          get: function get() {
            return this._clamp(this._percent);
          }
        }]);

        return MatSlider;
      }(_MatSliderMixinBase);

      MatSlider.ɵfac = function MatSlider_Factory(t) {
        return new (t || MatSlider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatSlider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatSlider,
        selectors: [["mat-slider"]],
        viewQuery: function MatSlider_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._sliderWrapper = _t.first);
          }
        },
        hostAttrs: ["role", "slider", 1, "mat-slider", "mat-focus-indicator"],
        hostVars: 28,
        hostBindings: function MatSlider_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatSlider_focus_HostBindingHandler() {
              return ctx._onFocus();
            })("blur", function MatSlider_blur_HostBindingHandler() {
              return ctx._onBlur();
            })("keydown", function MatSlider_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("keyup", function MatSlider_keyup_HostBindingHandler() {
              return ctx._onKeyup();
            })("mouseenter", function MatSlider_mouseenter_HostBindingHandler() {
              return ctx._onMouseenter();
            })("selectstart", function MatSlider_selectstart_HostBindingHandler($event) {
              return $event.preventDefault();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-disabled", ctx.disabled)("aria-valuemax", ctx.max)("aria-valuemin", ctx.min)("aria-valuenow", ctx.value)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slider-disabled", ctx.disabled)("mat-slider-has-ticks", ctx.tickInterval)("mat-slider-horizontal", !ctx.vertical)("mat-slider-axis-inverted", ctx._shouldInvertAxis())("mat-slider-invert-mouse-coords", ctx._shouldInvertMouseCoords())("mat-slider-sliding", ctx._isSliding)("mat-slider-thumb-label-showing", ctx.thumbLabel)("mat-slider-vertical", ctx.vertical)("mat-slider-min-value", ctx._isMinValue())("mat-slider-hide-last-tick", ctx.disabled || ctx._isMinValue() && ctx._getThumbGap() && ctx._shouldInvertAxis())("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          disabled: "disabled",
          color: "color",
          tabIndex: "tabIndex",
          invert: "invert",
          max: "max",
          min: "min",
          value: "value",
          step: "step",
          thumbLabel: "thumbLabel",
          tickInterval: "tickInterval",
          vertical: "vertical",
          displayWith: "displayWith"
        },
        outputs: {
          change: "change",
          input: "input",
          valueChange: "valueChange"
        },
        exportAs: ["matSlider"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 13,
        vars: 6,
        consts: [[1, "mat-slider-wrapper"], ["sliderWrapper", ""], [1, "mat-slider-track-wrapper"], [1, "mat-slider-track-background", 3, "ngStyle"], [1, "mat-slider-track-fill", 3, "ngStyle"], [1, "mat-slider-ticks-container", 3, "ngStyle"], [1, "mat-slider-ticks", 3, "ngStyle"], [1, "mat-slider-thumb-container", 3, "ngStyle"], [1, "mat-slider-focus-ring"], [1, "mat-slider-thumb"], [1, "mat-slider-thumb-label"], [1, "mat-slider-thumb-label-text"]],
        template: function MatSlider_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTrackBackgroundStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTrackFillStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTicksContainerStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTicksStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getThumbContainerStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.displayValue);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"]],
        styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatSlider.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatSlider.propDecorators = {
        invert: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        step: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        thumbLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tickInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _sliderWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['sliderWrapper']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-slider',
            exportAs: 'matSlider',
            providers: [MAT_SLIDER_VALUE_ACCESSOR],
            host: {
              '(focus)': '_onFocus()',
              '(blur)': '_onBlur()',
              '(keydown)': '_onKeydown($event)',
              '(keyup)': '_onKeyup()',
              '(mouseenter)': '_onMouseenter()',
              // On Safari starting to slide temporarily triggers text selection mode which
              // show the wrong cursor. We prevent it by stopping the `selectstart` event.
              '(selectstart)': '$event.preventDefault()',
              'class': 'mat-slider mat-focus-indicator',
              'role': 'slider',
              '[tabIndex]': 'tabIndex',
              '[attr.aria-disabled]': 'disabled',
              '[attr.aria-valuemax]': 'max',
              '[attr.aria-valuemin]': 'min',
              '[attr.aria-valuenow]': 'value',
              '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
              '[class.mat-slider-disabled]': 'disabled',
              '[class.mat-slider-has-ticks]': 'tickInterval',
              '[class.mat-slider-horizontal]': '!vertical',
              '[class.mat-slider-axis-inverted]': '_shouldInvertAxis()',
              // Class binding which is only used by the test harness as there is no other
              // way for the harness to detect if mouse coordinates need to be inverted.
              '[class.mat-slider-invert-mouse-coords]': '_shouldInvertMouseCoords()',
              '[class.mat-slider-sliding]': '_isSliding',
              '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
              '[class.mat-slider-vertical]': 'vertical',
              '[class.mat-slider-min-value]': '_isMinValue()',
              '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue() && _getThumbGap() && _shouldInvertAxis()',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <div class=\"mat-slider-track-background\" [ngStyle]=\"_getTrackBackgroundStyles()\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_getTrackFillStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_getTicksContainerStyles()\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_getTicksStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_getThumbContainerStyles()\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\n    </div>\n  </div>\n</div>\n",
            inputs: ['disabled', 'color', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          invert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          thumbLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          tickInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _sliderWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['sliderWrapper']
          }]
        });
      })();
      /** Returns whether an event is a touch event. */


      function isTouchEvent(event) {
        // This function is called for every pixel that the user has dragged so we need it to be
        // as fast as possible. Since we only bind mouse events and touch events, we can assume
        // that if the event's name starts with `t`, it's a touch event.
        return event.type[0] === 't';
      }
      /** Gets the coordinates of a touch or mouse event relative to the viewport. */


      function getPointerPositionOnPage(event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        var point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
        return {
          x: point.clientX,
          y: point.clientY
        };
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatSliderModule = function MatSliderModule() {
        _classCallCheck(this, MatSliderModule);
      };

      MatSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatSliderModule
      });
      MatSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatSliderModule_Factory(t) {
          return new (t || MatSliderModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSliderModule, {
          declarations: function declarations() {
            return [MatSlider];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSliderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatSlider]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=slider.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~forms-forms-module~ui-ui-module-es5.js.map