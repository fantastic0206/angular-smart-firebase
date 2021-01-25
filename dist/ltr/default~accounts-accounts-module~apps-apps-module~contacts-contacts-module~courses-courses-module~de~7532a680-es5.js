(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"], {
    /***/
    "/t3+":
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js ***!
      \*************************************************************************/

    /*! exports provided: MatToolbar, MatToolbarModule, MatToolbarRow, throwToolbarMixedModesError */

    /***/
    function t3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatToolbar", function () {
        return MatToolbar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatToolbarModule", function () {
        return MatToolbarModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatToolbarRow", function () {
        return MatToolbarRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwToolbarMixedModesError", function () {
        return throwToolbarMixedModesError;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatToolbar.

      /** @docs-private */


      var _c0 = ["*", [["mat-toolbar-row"]]];
      var _c1 = ["*", "mat-toolbar-row"];

      var MatToolbarBase = function MatToolbarBase(_elementRef) {
        _classCallCheck(this, MatToolbarBase);

        this._elementRef = _elementRef;
      };

      var _MatToolbarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatToolbarBase);

      var MatToolbarRow = function MatToolbarRow() {
        _classCallCheck(this, MatToolbarRow);
      };

      MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) {
        return new (t || MatToolbarRow)();
      };

      MatToolbarRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatToolbarRow,
        selectors: [["mat-toolbar-row"]],
        hostAttrs: [1, "mat-toolbar-row"],
        exportAs: ["matToolbarRow"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-toolbar-row',
            exportAs: 'matToolbarRow',
            host: {
              'class': 'mat-toolbar-row'
            }
          }]
        }], null, null);
      })();

      var MatToolbar = /*#__PURE__*/function (_MatToolbarMixinBase2) {
        _inherits(MatToolbar, _MatToolbarMixinBase2);

        var _super = _createSuper(MatToolbar);

        function MatToolbar(elementRef, _platform, document) {
          var _this;

          _classCallCheck(this, MatToolbar);

          _this = _super.call(this, elementRef);
          _this._platform = _platform; // TODO: make the document a required param when doing breaking changes.

          _this._document = document;
          return _this;
        }

        _createClass(MatToolbar, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            if (this._platform.isBrowser) {
              this._checkToolbarMixedModes();

              this._toolbarRows.changes.subscribe(function () {
                return _this2._checkToolbarMixedModes();
              });
            }
          }
          /**
           * Throws an exception when developers are attempting to combine the different toolbar row modes.
           */

        }, {
          key: "_checkToolbarMixedModes",
          value: function _checkToolbarMixedModes() {
            var _this3 = this;

            if (this._toolbarRows.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              // Check if there are any other DOM nodes that can display content but aren't inside of
              // a <mat-toolbar-row> element.
              var isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(function (node) {
                return !(node.classList && node.classList.contains('mat-toolbar-row'));
              }).filter(function (node) {
                return node.nodeType !== (_this3._document ? _this3._document.COMMENT_NODE : 8);
              }).some(function (node) {
                return !!(node.textContent && node.textContent.trim());
              });

              if (isCombinedUsage) {
                throwToolbarMixedModesError();
              }
            }
          }
        }]);

        return MatToolbar;
      }(_MatToolbarMixinBase);

      MatToolbar.ɵfac = function MatToolbar_Factory(t) {
        return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      MatToolbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatToolbar,
        selectors: [["mat-toolbar"]],
        contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
          }
        },
        hostAttrs: [1, "mat-toolbar"],
        hostVars: 4,
        hostBindings: function MatToolbar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matToolbar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 2,
        vars: 0,
        template: function MatToolbar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
          }
        },
        styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatToolbar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      MatToolbar.propDecorators = {
        _toolbarRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatToolbarRow, {
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-toolbar',
            exportAs: 'matToolbar',
            template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
            inputs: ['color'],
            host: {
              'class': 'mat-toolbar',
              '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
              '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, {
          _toolbarRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatToolbarRow, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * Throws an exception when attempting to combine the different toolbar row modes.
       * @docs-private
       */


      function throwToolbarMixedModesError() {
        throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatToolbarModule = function MatToolbarModule() {
        _classCallCheck(this, MatToolbarModule);
      };

      MatToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatToolbarModule
      });
      MatToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatToolbarModule_Factory(t) {
          return new (t || MatToolbarModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatToolbarModule, {
          declarations: function declarations() {
            return [MatToolbar, MatToolbarRow];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            declarations: [MatToolbar, MatToolbarRow]
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
      //# sourceMappingURL=toolbar.js.map

      /***/

    },

    /***/
    "7ZcW":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/ngx-material-file-input/__ivy_ngcc__/fesm2015/ngx-material-file-input.js ***!
      \***********************************************************************************************/

    /*! exports provided: ByteFormatPipe, FileInput, FileInputComponent, FileInputConfig, FileValidator, MaterialFileInputModule, NGX_MAT_FILE_INPUT_CONFIG, ɵa, ɵb */

    /***/
    function ZcW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ByteFormatPipe", function () {
        return ByteFormatPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileInput", function () {
        return FileInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileInputComponent", function () {
        return FileInputComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileInputConfig", function () {
        return FileInputConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileValidator", function () {
        return FileValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialFileInputModule", function () {
        return MaterialFileInputModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NGX_MAT_FILE_INPUT_CONFIG", function () {
        return NGX_MAT_FILE_INPUT_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return FileInputBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return FileInputMixinBase;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /**
       * Optional token to provide custom configuration to the module
       */


      var NGX_MAT_FILE_INPUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ngx-mat-file-input.config');
      /**
       * Provide additional configuration to dynamically customize the module injection
       */

      var FileInputConfig = function FileInputConfig() {
        _classCallCheck(this, FileInputConfig);
      };
      /**
       * The files to be uploaded
       */


      var FileInput = /*#__PURE__*/function () {
        function FileInput(_files) {
          var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ', ';

          _classCallCheck(this, FileInput);

          this._files = _files;
          this.delimiter = delimiter;
          this._fileNames = (this._files || []).map(function (f) {
            return f.name;
          }).join(delimiter);
        }

        _createClass(FileInput, [{
          key: "files",
          get: function get() {
            return this._files || [];
          }
        }, {
          key: "fileNames",
          get: function get() {
            return this._fileNames;
          }
        }]);

        return FileInput;
      }(); // Boilerplate for applying mixins to FileInput

      /** @docs-private */


      var FileInputBase = function FileInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        _classCallCheck(this, FileInputBase);

        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };
      /**
       * Allows to use a custom ErrorStateMatcher with the file-input component
       */


      var FileInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinErrorState"])(FileInputBase);
      var FileInputComponent_1;

      var FileInputComponent = FileInputComponent_1 = /*#__PURE__*/function (_FileInputMixinBase) {
        _inherits(FileInputComponent, _FileInputMixinBase);

        var _super2 = _createSuper(FileInputComponent);

        /**
         * @see https://angular.io/api/forms/ControlValueAccessor
         */
        function FileInputComponent(fm, _elementRef, _renderer, _defaultErrorStateMatcher, ngControl, _parentForm, _parentFormGroup) {
          var _this4;

          _classCallCheck(this, FileInputComponent);

          _this4 = _super2.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this4.fm = fm;
          _this4._elementRef = _elementRef;
          _this4._renderer = _renderer;
          _this4._defaultErrorStateMatcher = _defaultErrorStateMatcher;
          _this4.ngControl = ngControl;
          _this4._parentForm = _parentForm;
          _this4._parentFormGroup = _parentFormGroup;
          _this4.focused = false;
          _this4.controlType = 'file-input';
          _this4.autofilled = false;
          _this4._required = false;
          _this4.accept = null;
          _this4.id = "ngx-mat-file-input-".concat(FileInputComponent_1.nextId++);
          _this4.describedBy = '';

          _this4._onChange = function (_) {};

          _this4._onTouched = function () {};

          if (_this4.ngControl != null) {
            _this4.ngControl.valueAccessor = _assertThisInitialized(_this4);
          }

          fm.monitor(_elementRef.nativeElement, true).subscribe(function (origin) {
            _this4.focused = !!origin;

            _this4.stateChanges.next();
          });
          return _this4;
        }

        _createClass(FileInputComponent, [{
          key: "setDescribedByIds",
          value: function setDescribedByIds(ids) {
            this.describedBy = ids.join(' ');
          }
        }, {
          key: "onContainerClick",
          value: function onContainerClick(event) {
            if (event.target.tagName.toLowerCase() !== 'input' && !this.disabled) {
              this._elementRef.nativeElement.querySelector('input').focus();

              this.focused = true;
              this.open();
            }
          }
        }, {
          key: "writeValue",
          value: function writeValue(obj) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', obj instanceof FileInput ? obj.files : null);
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
          /**
           * Remove all files from the file input component
           * @param [event] optional event that may have triggered the clear action
           */

        }, {
          key: "clear",
          value: function clear(event) {
            if (event) {
              event.preventDefault();
              event.stopPropagation();
            }

            this.value = new FileInput([]);
            this._elementRef.nativeElement.querySelector('input').value = null;

            this._onChange(this.value);
          }
        }, {
          key: "change",
          value: function change(event) {
            var fileList = event.target.files;
            var fileArray = [];

            if (fileList) {
              for (var i = 0; i < fileList.length; i++) {
                fileArray.push(fileList[i]);
              }
            }

            this.value = new FileInput(fileArray);

            this._onChange(this.value);
          }
        }, {
          key: "blur",
          value: function blur() {
            this.focused = false;

            this._onTouched();
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(this.multiple);
          }
        }, {
          key: "open",
          value: function open() {
            if (!this.disabled) {
              this._elementRef.nativeElement.querySelector('input').click();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.complete();
            this.fm.stopMonitoring(this._elementRef.nativeElement);
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();
            }
          }
        }, {
          key: "value",
          get: function get() {
            return this.empty ? null : new FileInput(this._elementRef.nativeElement.value || []);
          },
          set: function set(fileInput) {
            if (fileInput) {
              this.writeValue(fileInput);
              this.stateChanges.next();
            }
          }
        }, {
          key: "placeholder",
          get: function get() {
            return this._placeholder;
          },
          set: function set(plh) {
            this._placeholder = plh;
            this.stateChanges.next();
          }
          /**
           * Whether the current input has files
           */

        }, {
          key: "empty",
          get: function get() {
            return !this._elementRef.nativeElement.value || this._elementRef.nativeElement.value.length === 0;
          }
        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return this.focused || !this.empty || this.valuePlaceholder !== undefined;
          }
        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(req) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(req);
            this.stateChanges.next();
          }
        }, {
          key: "isDisabled",
          get: function get() {
            return this.disabled;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._elementRef.nativeElement.disabled;
          },
          set: function set(dis) {
            this.setDisabledState(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(dis));
            this.stateChanges.next();
          }
        }, {
          key: "fileNames",
          get: function get() {
            return this.value ? this.value.fileNames : this.valuePlaceholder;
          }
        }]);

        return FileInputComponent;
      }(FileInputMixinBase);

      FileInputComponent.ɵfac = function FileInputComponent_Factory(t) {
        return new (t || FileInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], 8));
      };

      FileInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FileInputComponent,
        selectors: [["ngx-mat-file-input"]],
        hostVars: 6,
        hostBindings: function FileInputComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileInputComponent_change_HostBindingHandler($event) {
              return ctx.change($event);
            })("focusout", function FileInputComponent_focusout_HostBindingHandler() {
              return ctx.blur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-describedby", ctx.describedBy);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-form-field-should-float", ctx.shouldLabelFloat)("file-input-disabled", ctx.isDisabled);
          }
        },
        inputs: {
          autofilled: "autofilled",
          accept: "accept",
          value: "value",
          placeholder: "placeholder",
          required: "required",
          disabled: "disabled",
          multiple: "multiple",
          valuePlaceholder: "valuePlaceholder",
          errorStateMatcher: "errorStateMatcher"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"],
          useExisting: FileInputComponent_1
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 4,
        consts: [["type", "file"], ["input", ""], [1, "filename", 3, "title"]],
        template: function FileInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("multiple", ctx.multiple ? "" : null)("accept", ctx.accept);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.fileNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fileNames);
          }
        },
        styles: ["[_nghost-%COMP%]{display:inline-block;width:100%}[_nghost-%COMP%]:not(.file-input-disabled){cursor:pointer}input[_ngcontent-%COMP%]{width:0;height:0;opacity:0;overflow:hidden;position:absolute;z-index:-1}.filename[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;overflow:hidden;width:100%}"]
      });
      FileInputComponent.nextId = 0;

      FileInputComponent.ctorParameters = function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "autofilled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "valuePlaceholder", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "multiple", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "accept", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "errorStateMatcher", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])()], FileInputComponent.prototype, "id", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.aria-describedby')], FileInputComponent.prototype, "describedBy", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "value", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "placeholder", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mat-form-field-should-float')], FileInputComponent.prototype, "shouldLabelFloat", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "required", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.file-input-disabled')], FileInputComponent.prototype, "isDisabled", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "disabled", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('change', ['$event'])], FileInputComponent.prototype, "change", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focusout')], FileInputComponent.prototype, "blur", null);
      FileInputComponent = FileInputComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())], FileInputComponent);

      var ByteFormatPipe = /*#__PURE__*/function () {
        function ByteFormatPipe(config) {
          _classCallCheck(this, ByteFormatPipe);

          this.config = config;
          this.unit = config ? config.sizeUnit : 'Byte';
        }

        _createClass(ByteFormatPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (parseInt(value, 10) >= 0) {
              value = this.formatBytes(+value, +args);
            }

            return value;
          }
        }, {
          key: "formatBytes",
          value: function formatBytes(bytes, decimals) {
            if (bytes === 0) {
              return '0 ' + this.unit;
            }

            var B = this.unit.charAt(0);
            var k = 1024;
            var dm = decimals || 2;
            var sizes = [this.unit, 'K' + B, 'M' + B, 'G' + B, 'T' + B, 'P' + B, 'E' + B, 'Z' + B, 'Y' + B];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
          }
        }]);

        return ByteFormatPipe;
      }();

      ByteFormatPipe.ɵfac = function ByteFormatPipe_Factory(t) {
        return new (t || ByteFormatPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NGX_MAT_FILE_INPUT_CONFIG, 8));
      };

      ByteFormatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "byteFormat",
        type: ByteFormatPipe,
        pure: true
      });

      ByteFormatPipe.ctorParameters = function () {
        return [{
          type: FileInputConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NGX_MAT_FILE_INPUT_CONFIG]
          }]
        }];
      };

      ByteFormatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(NGX_MAT_FILE_INPUT_CONFIG))], ByteFormatPipe);

      var MaterialFileInputModule = function MaterialFileInputModule() {
        _classCallCheck(this, MaterialFileInputModule);
      };

      MaterialFileInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MaterialFileInputModule
      });
      MaterialFileInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MaterialFileInputModule_Factory(t) {
          return new (t || MaterialFileInputModule)();
        },
        providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileInputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'ngx-mat-file-input',
            template: "<input #input type=\"file\" [attr.multiple]=\"multiple? '' : null\" [attr.accept]=\"accept\">\n<span class=\"filename\" [title]=\"fileNames\">{{ fileNames }}</span>\n",
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"],
              useExisting: FileInputComponent_1
            }],
            styles: [":host{display:inline-block;width:100%}:host:not(.file-input-disabled){cursor:pointer}input{width:0;height:0;opacity:0;overflow:hidden;position:absolute;z-index:-1}.filename{display:inline-block;text-overflow:ellipsis;overflow:hidden;width:100%}"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          autofilled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"]
          }],
          describedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-describedby']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          shouldLabelFloat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.mat-form-field-should-float']
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.file-input-disabled']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['change', ['$event']]
          }],
          blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focusout']
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          valuePlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ByteFormatPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'byteFormat'
          }]
        }], function () {
          return [{
            type: FileInputConfig,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NGX_MAT_FILE_INPUT_CONFIG]
            }]
          }];
        }, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialFileInputModule, {
          declarations: [FileInputComponent, ByteFormatPipe],
          exports: [FileInputComponent, ByteFormatPipe]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialFileInputModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [FileInputComponent, ByteFormatPipe],
            providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]],
            exports: [FileInputComponent, ByteFormatPipe]
          }]
        }], null, null);
      })();

      var FileValidator;

      (function (FileValidator) {
        /**
         * Function to control content of files
         *
         * @param bytes max number of bytes allowed
         *
         * @returns
         */
        function maxContentSize(bytes) {
          return function (control) {
            var size = control && control.value ? control.value.files.map(function (f) {
              return f.size;
            }).reduce(function (acc, i) {
              return acc + i;
            }, 0) : 0;
            var condition = bytes >= size;
            return condition ? null : {
              maxContentSize: {
                actualSize: size,
                maxSize: bytes
              }
            };
          };
        }

        FileValidator.maxContentSize = maxContentSize;
      })(FileValidator || (FileValidator = {}));
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-material-file-input.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680-es5.js.map