(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2(subClass, superClass); }

  function _setPrototypeOf2(o, p) { _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf2(o, p); }

  function _createSuper2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct2(); return function _createSuperInternal() { var Super = _getPrototypeOf2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn2(this, result); }; }

  function _possibleConstructorReturn2(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized2(self); }

  function _assertThisInitialized2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf2(o) { _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf2(o); }

  function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-ui-module"], {
    /***/
    "2ChS":
    /*!******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js ***!
      \******************************************************************************/

    /*! exports provided: MAT_BOTTOM_SHEET_DATA, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheet, MatBottomSheetConfig, MatBottomSheetContainer, MatBottomSheetModule, MatBottomSheetRef, matBottomSheetAnimations */

    /***/
    function ChS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DATA", function () {
        return MAT_BOTTOM_SHEET_DATA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DEFAULT_OPTIONS", function () {
        return MAT_BOTTOM_SHEET_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatBottomSheet", function () {
        return MatBottomSheet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatBottomSheetConfig", function () {
        return MatBottomSheetConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatBottomSheetContainer", function () {
        return MatBottomSheetContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatBottomSheetModule", function () {
        return MatBottomSheetModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatBottomSheetRef", function () {
        return MatBottomSheetRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matBottomSheetAnimations", function () {
        return matBottomSheetAnimations;
      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to access the data that was passed in to a bottom sheet. */


      function MatBottomSheetContainer_ng_template_0_Template(rf, ctx) {}

      var MAT_BOTTOM_SHEET_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatBottomSheetData');
      /**
       * Configuration used when opening a bottom sheet.
       */

      var MatBottomSheetConfig = function MatBottomSheetConfig() {
        _classCallCheck2(this, MatBottomSheetConfig);

        /** Data being injected into the child component. */
        this.data = null;
        /** Whether the bottom sheet has a backdrop. */

        this.hasBackdrop = true;
        /** Whether the user can use escape or clicking outside to close the bottom sheet. */

        this.disableClose = false;
        /** Aria label to assign to the bottom sheet element. */

        this.ariaLabel = null;
        /**
         * Whether the bottom sheet should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */

        this.closeOnNavigation = true; // Note that this is disabled by default, because while the a11y recommendations are to focus
        // the first focusable element, doing so prevents screen readers from reading out the
        // rest of the bottom sheet content.

        /** Whether the bottom sheet should focus the first focusable element on open. */

        this.autoFocus = false;
        /**
         * Whether the bottom sheet should restore focus to the
         * previously-focused element, after it's closed.
         */

        this.restoreFocus = true;
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Animations used by the Material bottom sheet. */


      var matBottomSheetAnimations = {
        /** Animation that shows and hides a bottom sheet. */
        bottomSheetState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(100%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(0%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('visible => void, visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("".concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationDurations"].COMPLEX, " ").concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationCurves"].ACCELERATION_CURVE))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("".concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationDurations"].EXITING, " ").concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationCurves"].DECELERATION_CURVE)))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(crisbeto): consolidate some logic between this, MatDialog and MatSnackBar

      /**
       * Internal component that wraps user-provided bottom sheet content.
       * @docs-private
       */

      var MatBottomSheetContainer = /*#__PURE__*/function (_angular_cdk_portal__) {
        _inherits2(MatBottomSheetContainer, _angular_cdk_portal__);

        var _super2 = _createSuper2(MatBottomSheetContainer);

        function MatBottomSheetContainer(_elementRef, _changeDetectorRef, _focusTrapFactory, breakpointObserver, document,
        /** The bottom sheet configuration. */
        bottomSheetConfig) {
          var _this2;

          _classCallCheck2(this, MatBottomSheetContainer);

          _this2 = _super2.call(this);
          _this2._elementRef = _elementRef;
          _this2._changeDetectorRef = _changeDetectorRef;
          _this2._focusTrapFactory = _focusTrapFactory;
          _this2.bottomSheetConfig = bottomSheetConfig;
          /** The state of the bottom sheet animations. */

          _this2._animationState = 'void';
          /** Emits whenever the state of the animation changes. */

          _this2._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Element that was focused before the bottom sheet was opened. */

          _this2._elementFocusedBeforeOpened = null;
          /**
           * Attaches a DOM portal to the bottom sheet container.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this2.attachDomPortal = function (portal) {
            _this2._validatePortalAttached();

            _this2._setPanelClass();

            _this2._savePreviouslyFocusedElement();

            return _this2._portalOutlet.attachDomPortal(portal);
          };

          _this2._document = document;
          _this2._breakpointSubscription = breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge]).subscribe(function () {
            _this2._toggleClass('mat-bottom-sheet-container-medium', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium));

            _this2._toggleClass('mat-bottom-sheet-container-large', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large));

            _this2._toggleClass('mat-bottom-sheet-container-xlarge', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge));
          });
          return _this2;
        }
        /** Attach a component portal as content to this bottom sheet container. */


        _createClass2(MatBottomSheetContainer, [{
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            this._validatePortalAttached();

            this._setPanelClass();

            this._savePreviouslyFocusedElement();

            return this._portalOutlet.attachComponentPortal(portal);
          }
          /** Attach a template portal as content to this bottom sheet container. */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            this._validatePortalAttached();

            this._setPanelClass();

            this._savePreviouslyFocusedElement();

            return this._portalOutlet.attachTemplatePortal(portal);
          }
          /** Begin animation of bottom sheet entrance into view. */

        }, {
          key: "enter",
          value: function enter() {
            if (!this._destroyed) {
              this._animationState = 'visible';

              this._changeDetectorRef.detectChanges();
            }
          }
          /** Begin animation of the bottom sheet exiting from view. */

        }, {
          key: "exit",
          value: function exit() {
            if (!this._destroyed) {
              this._animationState = 'hidden';

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._breakpointSubscription.unsubscribe();

            this._destroyed = true;
          }
        }, {
          key: "_onAnimationDone",
          value: function _onAnimationDone(event) {
            if (event.toState === 'hidden') {
              this._restoreFocus();
            } else if (event.toState === 'visible') {
              this._trapFocus();
            }

            this._animationStateChanged.emit(event);
          }
        }, {
          key: "_onAnimationStart",
          value: function _onAnimationStart(event) {
            this._animationStateChanged.emit(event);
          }
        }, {
          key: "_toggleClass",
          value: function _toggleClass(cssClass, add) {
            var classList = this._elementRef.nativeElement.classList;
            add ? classList.add(cssClass) : classList.remove(cssClass);
          }
        }, {
          key: "_validatePortalAttached",
          value: function _validatePortalAttached() {
            if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('Attempting to attach bottom sheet content after content is already attached');
            }
          }
        }, {
          key: "_setPanelClass",
          value: function _setPanelClass() {
            var element = this._elementRef.nativeElement;
            var panelClass = this.bottomSheetConfig.panelClass;

            if (Array.isArray(panelClass)) {
              // Note that we can't use a spread here, because IE doesn't support multiple arguments.
              panelClass.forEach(function (cssClass) {
                return element.classList.add(cssClass);
              });
            } else if (panelClass) {
              element.classList.add(panelClass);
            }
          }
          /** Moves the focus inside the focus trap. */

        }, {
          key: "_trapFocus",
          value: function _trapFocus() {
            var element = this._elementRef.nativeElement;

            if (!this._focusTrap) {
              this._focusTrap = this._focusTrapFactory.create(element);
            }

            if (this.bottomSheetConfig.autoFocus) {
              this._focusTrap.focusInitialElementWhenReady();
            } else {
              var activeElement = this._document.activeElement; // Otherwise ensure that focus is on the container. It's possible that a different
              // component tried to move focus while the open animation was running. See:
              // https://github.com/angular/components/issues/16215. Note that we only want to do this
              // if the focus isn't inside the bottom sheet already, because it's possible that the
              // consumer turned off `autoFocus` in order to move focus themselves.

              if (activeElement !== element && !element.contains(activeElement)) {
                element.focus();
              }
            }
          }
          /** Restores focus to the element that was focused before the bottom sheet was opened. */

        }, {
          key: "_restoreFocus",
          value: function _restoreFocus() {
            var toFocus = this._elementFocusedBeforeOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

            if (this.bottomSheetConfig.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
              var activeElement = this._document.activeElement;
              var element = this._elementRef.nativeElement; // Make sure that focus is still inside the bottom sheet or is on the body (usually because a
              // non-focusable element like the backdrop was clicked) before moving it. It's possible that
              // the consumer moved it themselves before the animation was done, in which case we shouldn't
              // do anything.

              if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
                toFocus.focus();
              }
            }

            if (this._focusTrap) {
              this._focusTrap.destroy();
            }
          }
          /** Saves a reference to the element that was focused before the bottom sheet was opened. */

        }, {
          key: "_savePreviouslyFocusedElement",
          value: function _savePreviouslyFocusedElement() {
            var _this3 = this;

            this._elementFocusedBeforeOpened = this._document.activeElement; // The `focus` method isn't available during server-side rendering.

            if (this._elementRef.nativeElement.focus) {
              Promise.resolve().then(function () {
                return _this3._elementRef.nativeElement.focus();
              });
            }
          }
        }]);

        return MatBottomSheetContainer;
      }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"]);

      MatBottomSheetContainer.ɵfac = function MatBottomSheetContainer_Factory(t) {
        return new (t || MatBottomSheetContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatBottomSheetConfig));
      };

      MatBottomSheetContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatBottomSheetContainer,
        selectors: [["mat-bottom-sheet-container"]],
        viewQuery: function MatBottomSheetContainer_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
          }
        },
        hostAttrs: ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "mat-bottom-sheet-container"],
        hostVars: 2,
        hostBindings: function MatBottomSheetContainer_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostListener"]("@state.start", function MatBottomSheetContainer_animation_state_start_HostBindingHandler($event) {
              return ctx._onAnimationStart($event);
            })("@state.done", function MatBottomSheetContainer_animation_state_done_HostBindingHandler($event) {
              return ctx._onAnimationDone($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.bottomSheetConfig == null ? null : ctx.bottomSheetConfig.ariaLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@state", ctx._animationState);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkPortalOutlet", ""]],
        template: function MatBottomSheetContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatBottomSheetContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
        styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"],
        encapsulation: 2,
        data: {
          animation: [matBottomSheetAnimations.bottomSheetState]
        },
        changeDetection: 0
      });

      MatBottomSheetContainer.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
          }]
        }, {
          type: MatBottomSheetConfig
        }];
      };

      MatBottomSheetContainer.propDecorators = {
        _portalOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBottomSheetContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-bottom-sheet-container',
            template: "<ng-template cdkPortalOutlet></ng-template>\r\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            animations: [matBottomSheetAnimations.bottomSheetState],
            host: {
              'class': 'mat-bottom-sheet-container',
              'tabindex': '-1',
              'role': 'dialog',
              'aria-modal': 'true',
              '[attr.aria-label]': 'bottomSheetConfig?.ariaLabel',
              '[@state]': '_animationState',
              '(@state.start)': '_onAnimationStart($event)',
              '(@state.done)': '_onAnimationDone($event)'
            },
            styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
            }]
          }, {
            type: MatBottomSheetConfig
          }];
        }, {
          _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
              "static": true
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


      var MatBottomSheetModule = function MatBottomSheetModule() {
        _classCallCheck2(this, MatBottomSheetModule);
      };

      MatBottomSheetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatBottomSheetModule
      });
      MatBottomSheetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatBottomSheetModule_Factory(t) {
          return new (t || MatBottomSheetModule)();
        },
        imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatBottomSheetModule, {
          declarations: function declarations() {
            return [MatBottomSheetContainer];
          },
          imports: function imports() {
            return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]];
          },
          exports: function exports() {
            return [MatBottomSheetContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBottomSheetModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]],
            exports: [MatBottomSheetContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            declarations: [MatBottomSheetContainer],
            entryComponents: [MatBottomSheetContainer]
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
       * Reference to a bottom sheet dispatched from the bottom sheet service.
       */


      var MatBottomSheetRef = /*#__PURE__*/function () {
        function MatBottomSheetRef(containerInstance, _overlayRef, // @breaking-change 8.0.0 `_location` parameter to be removed.
        _location) {
          var _this4 = this;

          _classCallCheck2(this, MatBottomSheetRef);

          this._overlayRef = _overlayRef;
          /** Subject for notifying the user that the bottom sheet has been dismissed. */

          this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Subject for notifying the user that the bottom sheet has opened and appeared. */

          this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          this.containerInstance = containerInstance;
          this.disableClose = containerInstance.bottomSheetConfig.disableClose; // Emit when opening animation completes

          containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
            return event.phaseName === 'done' && event.toState === 'visible';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function () {
            _this4._afterOpened.next();

            _this4._afterOpened.complete();
          }); // Dispose overlay when closing animation is complete


          containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
            return event.phaseName === 'done' && event.toState === 'hidden';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function () {
            clearTimeout(_this4._closeFallbackTimeout);

            _overlayRef.dispose();
          });

          _overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function () {
            _this4._afterDismissed.next(_this4._result);

            _this4._afterDismissed.complete();
          });

          Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(_overlayRef.backdropClick(), _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"];
          }))).subscribe(function (event) {
            if (!_this4.disableClose && (event.type !== 'keydown' || !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event))) {
              event.preventDefault();

              _this4.dismiss();
            }
          });
        }
        /**
         * Dismisses the bottom sheet.
         * @param result Data to be passed back to the bottom sheet opener.
         */


        _createClass2(MatBottomSheetRef, [{
          key: "dismiss",
          value: function dismiss(result) {
            var _this5 = this;

            if (!this._afterDismissed.closed) {
              // Transition the backdrop in parallel to the bottom sheet.
              this.containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
                return event.phaseName === 'start';
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function (event) {
                // The logic that disposes of the overlay depends on the exit animation completing, however
                // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
                // timeout which will clean everything up if the animation hasn't fired within the specified
                // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
                // vast majority of cases the timeout will have been cleared before it has fired.
                _this5._closeFallbackTimeout = setTimeout(function () {
                  _this5._overlayRef.dispose();
                }, event.totalTime + 100);

                _this5._overlayRef.detachBackdrop();
              });

              this._result = result;
              this.containerInstance.exit();
            }
          }
          /** Gets an observable that is notified when the bottom sheet is finished closing. */

        }, {
          key: "afterDismissed",
          value: function afterDismissed() {
            return this._afterDismissed;
          }
          /** Gets an observable that is notified when the bottom sheet has opened and appeared. */

        }, {
          key: "afterOpened",
          value: function afterOpened() {
            return this._afterOpened;
          }
          /**
           * Gets an observable that emits when the overlay's backdrop has been clicked.
           */

        }, {
          key: "backdropClick",
          value: function backdropClick() {
            return this._overlayRef.backdropClick();
          }
          /**
           * Gets an observable that emits when keydown events are targeted on the overlay.
           */

        }, {
          key: "keydownEvents",
          value: function keydownEvents() {
            return this._overlayRef.keydownEvents();
          }
        }]);

        return MatBottomSheetRef;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to specify default bottom sheet options. */


      var MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-bottom-sheet-default-options');
      /**
       * Service to trigger Material Design bottom sheets.
       */

      var MatBottomSheet = /*#__PURE__*/function () {
        function MatBottomSheet(_overlay, _injector, _parentBottomSheet, _location, _defaultOptions) {
          _classCallCheck2(this, MatBottomSheet);

          this._overlay = _overlay;
          this._injector = _injector;
          this._parentBottomSheet = _parentBottomSheet;
          this._location = _location;
          this._defaultOptions = _defaultOptions;
          this._bottomSheetRefAtThisLevel = null;
        }
        /** Reference to the currently opened bottom sheet. */


        _createClass2(MatBottomSheet, [{
          key: "open",
          value: function open(componentOrTemplateRef, config) {
            var _this6 = this;

            var _config = _applyConfigDefaults(this._defaultOptions || new MatBottomSheetConfig(), config);

            var overlayRef = this._createOverlay(_config);

            var container = this._attachContainer(overlayRef, _config);

            var ref = new MatBottomSheetRef(container, overlayRef, this._location);

            if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
              container.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, null, {
                $implicit: _config.data,
                bottomSheetRef: ref
              }));
            } else {
              var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, undefined, this._createInjector(_config, ref));
              var contentRef = container.attachComponentPortal(portal);
              ref.instance = contentRef.instance;
            } // When the bottom sheet is dismissed, clear the reference to it.


            ref.afterDismissed().subscribe(function () {
              // Clear the bottom sheet ref if it hasn't already been replaced by a newer one.
              if (_this6._openedBottomSheetRef == ref) {
                _this6._openedBottomSheetRef = null;
              }
            });

            if (this._openedBottomSheetRef) {
              // If a bottom sheet is already in view, dismiss it and enter the
              // new bottom sheet after exit animation is complete.
              this._openedBottomSheetRef.afterDismissed().subscribe(function () {
                return ref.containerInstance.enter();
              });

              this._openedBottomSheetRef.dismiss();
            } else {
              // If no bottom sheet is in view, enter the new bottom sheet.
              ref.containerInstance.enter();
            }

            this._openedBottomSheetRef = ref;
            return ref;
          }
          /**
           * Dismisses the currently-visible bottom sheet.
           * @param result Data to pass to the bottom sheet instance.
           */

        }, {
          key: "dismiss",
          value: function dismiss(result) {
            if (this._openedBottomSheetRef) {
              this._openedBottomSheetRef.dismiss(result);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._bottomSheetRefAtThisLevel) {
              this._bottomSheetRefAtThisLevel.dismiss();
            }
          }
          /**
           * Attaches the bottom sheet container component to the overlay.
           */

        }, {
          key: "_attachContainer",
          value: function _attachContainer(overlayRef, config) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;

            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
              parent: userInjector || this._injector,
              providers: [{
                provide: MatBottomSheetConfig,
                useValue: config
              }]
            });

            var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](MatBottomSheetContainer, config.viewContainerRef, injector);
            var containerRef = overlayRef.attach(containerPortal);
            return containerRef.instance;
          }
          /**
           * Creates a new overlay and places it in the correct location.
           * @param config The user-specified bottom sheet config.
           */

        }, {
          key: "_createOverlay",
          value: function _createOverlay(config) {
            var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
              direction: config.direction,
              hasBackdrop: config.hasBackdrop,
              disposeOnNavigation: config.closeOnNavigation,
              maxWidth: '100%',
              scrollStrategy: config.scrollStrategy || this._overlay.scrollStrategies.block(),
              positionStrategy: this._overlay.position().global().centerHorizontally().bottom('0')
            });

            if (config.backdropClass) {
              overlayConfig.backdropClass = config.backdropClass;
            }

            return this._overlay.create(overlayConfig);
          }
          /**
           * Creates an injector to be used inside of a bottom sheet component.
           * @param config Config that was used to create the bottom sheet.
           * @param bottomSheetRef Reference to the bottom sheet.
           */

        }, {
          key: "_createInjector",
          value: function _createInjector(config, bottomSheetRef) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
            var providers = [{
              provide: MatBottomSheetRef,
              useValue: bottomSheetRef
            }, {
              provide: MAT_BOTTOM_SHEET_DATA,
              useValue: config.data
            }];

            if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], null))) {
              providers.push({
                provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
                useValue: {
                  value: config.direction,
                  change: Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])()
                }
              });
            }

            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
              parent: userInjector || this._injector,
              providers: providers
            });
          }
        }, {
          key: "_openedBottomSheetRef",
          get: function get() {
            var parent = this._parentBottomSheet;
            return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
          },
          set: function set(value) {
            if (this._parentBottomSheet) {
              this._parentBottomSheet._openedBottomSheetRef = value;
            } else {
              this._bottomSheetRefAtThisLevel = value;
            }
          }
        }]);

        return MatBottomSheet;
      }();

      MatBottomSheet.ɵfac = function MatBottomSheet_Factory(t) {
        return new (t || MatBottomSheet)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatBottomSheet, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8));
      };

      MatBottomSheet.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
        factory: function MatBottomSheet_Factory() {
          return new MatBottomSheet(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(MatBottomSheet, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8));
        },
        token: MatBottomSheet,
        providedIn: MatBottomSheetModule
      });

      MatBottomSheet.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
        }, {
          type: MatBottomSheet,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
          }]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: MatBottomSheetConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBottomSheet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: MatBottomSheetModule
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
          }, {
            type: MatBottomSheet,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
            }]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: MatBottomSheetConfig,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * Applies default options to the bottom sheet config.
       * @param defaults Object containing the default values to which to fall back.
       * @param config The configuration to which the defaults will be applied.
       * @returns The new configuration object with defaults applied.
       */


      function _applyConfigDefaults(defaults, config) {
        return Object.assign(Object.assign({}, defaults), config);
      }
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
      //# sourceMappingURL=bottom-sheet.js.map

      /***/

    },

    /***/
    "4Wg2":
    /*!*******************************************************!*\
      !*** ./src/app/ui/typography/typography.component.ts ***!
      \*******************************************************/

    /*! exports provided: TypographyComponent */

    /***/
    function Wg2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyComponent", function () {
        return TypographyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var TypographyComponent = /*#__PURE__*/function () {
        function TypographyComponent() {
          _classCallCheck2(this, TypographyComponent);
        }

        _createClass2(TypographyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TypographyComponent;
      }();

      TypographyComponent.ɵfac = function TypographyComponent_Factory(t) {
        return new (t || TypographyComponent)();
      };

      TypographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TypographyComponent,
        selectors: [["app-typography"]],
        decls: 278,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [1, "m-b-30"], [1, "m-t-10", "m-b-30"], [1, "m-t-15", "m-b-30"], [1, "m-t-15"], [1, "col-lg-2", "col-md-2", "col-sm-6", "col-xs-6"], [1, "col-pink"], [1, "col-cyan"], [1, "col-teal"], [1, "col-orange"], [1, "col-blue-grey"], [1, "font-bold"], [1, "font-bold", "col-pink"], [1, "font-bold", "col-cyan"], [1, "font-bold", "col-teal"], [1, "font-bold", "col-orange"], [1, "font-bold", "col-blue-grey"], [1, "font-italic"], [1, "font-italic", "col-pink"], [1, "font-italic", "col-cyan"], [1, "font-italic", "col-teal"], [1, "font-italic", "col-orange"], [1, "font-italic", "col-blue-grey"], [1, "font-underline"], [1, "font-underline", "col-pink"], [1, "font-underline", "col-cyan"], [1, "font-underline", "col-teal"], [1, "font-underline", "col-orange"], [1, "font-underline", "col-blue-grey"], [1, "font-line-through"], [1, "font-line-through", "col-pink"], [1, "font-line-through", "col-cyan"], [1, "font-line-through", "col-teal"], [1, "font-line-through", "col-orange"], [1, "font-line-through", "col-blue-grey"], [1, "font-overline"], [1, "font-overline", "col-pink"], [1, "font-overline", "col-cyan"], [1, "font-overline", "col-teal"], [1, "font-overline", "col-orange"], [1, "font-overline", "col-blue-grey"], [1, "m-b-25"], ["title", "Source Title"], [1, "blockquote-reverse"], [1, "col-lg-4", "col-md-4", "col-sm-12", "col-xs-12"], [1, "list-unstyled"]],
        template: function TypographyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Typography");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Typography");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "h1. MyAdmin Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "h2. MyAdmin Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "h3. MyAdmin Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "h4. MyAdmin Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "h5. MyAdmin Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "h6. MyAdmin Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Text Styles ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "You can use classes which names are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ".font-bold, .font-italic, .font-underline, .font-line-through, .font-overline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Normal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Default text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Text pink color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Text cyan color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Text teal color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Text orange color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Text blue grey color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Bold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Default text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Text pink color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Text cyan color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Text teal color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Text orange color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Text blue grey color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Italic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Default text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Text pink color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Text cyan color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Text teal color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Text orange color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Text blue grey color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Underline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Default text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Text pink color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Text cyan color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Text teal color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Text orange color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Text blue grey color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Line Through");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Default text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Text pink color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Text cyan color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Text teal color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Text orange color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Text blue grey color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Overline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Default text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Text pink color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Text cyan color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Text teal color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Text orange color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Text blue grey color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Blockquotes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "blockquote", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "blockquote");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Someone famous in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "cite", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Source Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "blockquote", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Someone famous in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "cite", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Source Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Unordered List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Lorem ipsum dolor sit amet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Consectetur adipiscing elit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Integer molestie lorem at massa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Facilisis in pretium nisl aliquet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Nulla volutpat aliquam velit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Phasellus iaculis neque");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Purus sodales ultricies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Vestibulum laoreet porttitor sem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Ac tristique libero volutpat at");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Faucibus porta lacus fringilla vel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Aenean sit amet erat nunc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Eget porttitor lorem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Ordered List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Lorem ipsum dolor sit amet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Consectetur adipiscing elit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Integer molestie lorem at massa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Facilisis in pretium nisl aliquet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " Nulla volutpat aliquam velit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Phasellus iaculis neque");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Purus sodales ultricies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Vestibulum laoreet porttitor sem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Ac tristique libero volutpat at");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Faucibus porta lacus fringilla vel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Aenean sit amet erat nunc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Eget porttitor lorem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Unstyled List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "ul", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Lorem ipsum dolor sit amet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Consectetur adipiscing elit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Integer molestie lorem at massa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Facilisis in pretium nisl aliquet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " Nulla volutpat aliquam velit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Phasellus iaculis neque");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Purus sodales ultricies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Vestibulum laoreet porttitor sem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Ac tristique libero volutpat at");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Faucibus porta lacus fringilla vel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Aenean sit amet erat nunc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Eget porttitor lorem");

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypographyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-typography',
            templateUrl: './typography.component.html',
            styleUrls: ['./typography.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "7qrV":
    /*!***********************************************************!*\
      !*** ./src/app/ui/bottom-sheet/bottom-sheet.component.ts ***!
      \***********************************************************/

    /*! exports provided: BottomSheetComponent, BottomSheetOverviewExampleSheet */

    /***/
    function qrV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BottomSheetComponent", function () {
        return BottomSheetComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewExampleSheet", function () {
        return BottomSheetOverviewExampleSheet;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var BottomSheetComponent = /*#__PURE__*/function () {
        function BottomSheetComponent(_bottomSheet) {
          _classCallCheck2(this, BottomSheetComponent);

          this._bottomSheet = _bottomSheet;
        }

        _createClass2(BottomSheetComponent, [{
          key: "openBottomSheet",
          value: function openBottomSheet() {
            this._bottomSheet.open(BottomSheetOverviewExampleSheet);
          }
        }]);

        return BottomSheetComponent;
      }();

      BottomSheetComponent.ɵfac = function BottomSheetComponent_Factory(t) {
        return new (t || BottomSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"]));
      };

      BottomSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BottomSheetComponent,
        selectors: [["app-bottom-sheet"]],
        decls: 29,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-12"], [1, "card"], [1, "header"], [1, "body"], ["mat-raised-button", "", 3, "click"]],
        template: function BottomSheetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bottom Sheet");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Bottom Sheet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Bottom Sheet Overview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "You have received a file called \"cat-picture.jpeg\".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BottomSheetComponent_Template_button_click_27_listener() {
              return ctx.openBottomSheet();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Open file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomSheetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bottom-sheet',
            templateUrl: './bottom-sheet.component.html',
            styleUrls: ['./bottom-sheet.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"]
          }];
        }, null);
      })();

      var BottomSheetOverviewExampleSheet = /*#__PURE__*/function () {
        function BottomSheetOverviewExampleSheet(_bottomSheetRef) {
          _classCallCheck2(this, BottomSheetOverviewExampleSheet);

          this._bottomSheetRef = _bottomSheetRef;
        }

        _createClass2(BottomSheetOverviewExampleSheet, [{
          key: "openLink",
          value: function openLink(event) {
            this._bottomSheetRef.dismiss();

            event.preventDefault();
          }
        }]);

        return BottomSheetOverviewExampleSheet;
      }();

      BottomSheetOverviewExampleSheet.ɵfac = function BottomSheetOverviewExampleSheet_Factory(t) {
        return new (t || BottomSheetOverviewExampleSheet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]));
      };

      BottomSheetOverviewExampleSheet.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BottomSheetOverviewExampleSheet,
        selectors: [["bottom-sheet-overview-example-sheet"]],
        decls: 21,
        vars: 0,
        consts: [["href", "https://keep.google.com/", "mat-list-item", "", 3, "click"], ["mat-line", ""], ["href", "https://docs.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://plus.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://hangouts.google.com/", "mat-list-item", "", 3, "click"]],
        template: function BottomSheetOverviewExampleSheet_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BottomSheetOverviewExampleSheet_Template_a_click_1_listener($event) {
              return ctx.openLink($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Google Keep");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add to a note");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BottomSheetOverviewExampleSheet_Template_a_click_6_listener($event) {
              return ctx.openLink($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Google Docs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Embed in a document");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BottomSheetOverviewExampleSheet_Template_a_click_11_listener($event) {
              return ctx.openLink($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Google Plus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Share with your friends");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BottomSheetOverviewExampleSheet_Template_a_click_16_listener($event) {
              return ctx.openLink($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Google Hangouts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Show to your coworkers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatLine"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomSheetOverviewExampleSheet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'bottom-sheet-overview-example-sheet',
            templateUrl: 'bottom-sheet-overview-example-sheet.html'
          }]
        }], function () {
          return [{
            type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8Qvw":
    /*!*********************************************!*\
      !*** ./src/app/ui/chips/chips.component.ts ***!
      \*********************************************/

    /*! exports provided: ChipsComponent */

    /***/
    function Qvw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChipsComponent", function () {
        return ChipsComponent;
      });
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["fruitInput"];
      var _c1 = ["auto"];

      function ChipsComponent_mat_chip_44_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ChipsComponent_mat_chip_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function ChipsComponent_mat_chip_44_Template_mat_chip_removed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var fruit_r6 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.remove(fruit_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChipsComponent_mat_chip_44_mat_icon_2_Template, 2, 0, "mat-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fruit_r6 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fruit_r6, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.removable);
        }
      }

      function ChipsComponent_mat_option_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fruit_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", fruit_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fruit_r10, " ");
        }
      }

      function ChipsComponent_mat_chip_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chip_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", chip_r11.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", chip_r11.name, " ");
        }
      }

      var ChipsComponent = /*#__PURE__*/function () {
        function ChipsComponent() {
          var _this7 = this;

          _classCallCheck2(this, ChipsComponent);

          this.visible = true;
          this.selectable = true;
          this.removable = true;
          this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
          this.fruitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.fruits = ['Lemon'];
          this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
          this.availableColors = [{
            name: 'none',
            color: undefined
          }, {
            name: 'Primary',
            color: 'primary'
          }, {
            name: 'Accent',
            color: 'accent'
          }, {
            name: 'Warn',
            color: 'warn'
          }];
          this.filteredFruits = this.fruitCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fruit) {
            return fruit ? _this7._filter(fruit) : _this7.allFruits.slice();
          }));
        }

        _createClass2(ChipsComponent, [{
          key: "add",
          value: function add(event) {
            var input = event.input;
            var value = event.value; // Add our fruit

            if ((value || '').trim()) {
              this.fruits.push(value.trim());
            } // Reset the input value


            if (input) {
              input.value = '';
            }

            this.fruitCtrl.setValue(null);
          }
        }, {
          key: "remove",
          value: function remove(fruit) {
            var index = this.fruits.indexOf(fruit);

            if (index >= 0) {
              this.fruits.splice(index, 1);
            }
          }
        }, {
          key: "selected",
          value: function selected(event) {
            this.fruits.push(event.option.viewValue);
            this.fruitInput.nativeElement.value = '';
            this.fruitCtrl.setValue(null);
          }
        }, {
          key: "_filter",
          value: function _filter(value) {
            var filterValue = value.toLowerCase();
            return this.allFruits.filter(function (fruit) {
              return fruit.toLowerCase().indexOf(filterValue) === 0;
            });
          }
        }]);

        return ChipsComponent;
      }();

      ChipsComponent.ɵfac = function ChipsComponent_Factory(t) {
        return new (t || ChipsComponent)();
      };

      ChipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ChipsComponent,
        selectors: [["app-chips"]],
        viewQuery: function ChipsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fruitInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
          }
        },
        decls: 60,
        vars: 9,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-12"], [1, "card"], [1, "header"], [1, "body"], ["aria-label", "Fish selection"], ["color", "primary", "selected", ""], ["color", "accent", "selected", ""], [1, "example-chip-list", "example-full-width"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["fruitInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Color selection", 1, "mat-chip-list-stacked"], ["class", "w-25", "selected", "", 3, "color", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"], ["selected", "", 1, "w-25", 3, "color"]],
        template: function ChipsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Chips");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Chips");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Basic chips");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-chip-list", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "One fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Two fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-chip", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Primary fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-chip", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Accent fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Chips Autocomplete");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-chip-list", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ChipsComponent_mat_chip_44_Template, 3, 4, "mat-chip", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function ChipsComponent_Template_input_matChipInputTokenEnd_45_listener($event) {
              return ctx.add($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-autocomplete", 27, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function ChipsComponent_Template_mat_autocomplete_optionSelected_47_listener($event) {
              return ctx.selected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ChipsComponent_mat_option_49_Template, 2, 2, "mat-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Stacked chips");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-chip-list", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, ChipsComponent_mat_chip_59_Template, 2, 2, "mat-chip", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fruits);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.fruitCtrl)("matAutocomplete", _r3)("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 7, ctx.filteredFruits));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.availableColors);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipRemove"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2NoaXBzL2NoaXBzLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChipsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-chips',
            templateUrl: './chips.component.html',
            styleUrls: ['./chips.component.sass']
          }]
        }], function () {
          return [];
        }, {
          fruitInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['fruitInput', {
              "static": true
            }]
          }],
          matAutocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['auto', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "9ia5":
    /*!***********************************************!*\
      !*** ./src/app/ui/alerts/alerts.component.ts ***!
      \***********************************************/

    /*! exports provided: AlertsComponent */

    /***/
    function ia5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertsComponent", function () {
        return AlertsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AlertsComponent = /*#__PURE__*/function () {
        function AlertsComponent() {
          _classCallCheck2(this, AlertsComponent);
        }

        _createClass2(AlertsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AlertsComponent;
      }();

      AlertsComponent.ɵfac = function AlertsComponent_Factory(t) {
        return new (t || AlertsComponent)();
      };

      AlertsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlertsComponent,
        selectors: [["app-alerts"]],
        decls: 119,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [1, "alert", "alert-success"], [1, "alert", "alert-info"], [1, "alert", "alert-warning"], [1, "alert", "alert-danger"], [1, "alert", "alert-primary"], [1, "alert", "alert-dark"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-info", "alert-dismissible"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible"], ["role", "alert", 1, "alert", "alert-dark", "alert-dismissible"], ["href", "#", "onClick", "return false;", 1, "alert-link"]],
        template: function AlertsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Alerts");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Alerts");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Basic Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Well done!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " You successfully read this important alert message. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Heads up!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " This alert needs your attention, but it's not super important. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Warning!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Better check yourself, you're not looking too good. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Oh snap!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Change a few things up and try submitting again. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Oh snap!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Change a few things up and try submitting again. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Oh snap!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Lorem ipsum dolor sit amet, id fugit tollit pro, ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Dismissible");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Lorem ipsum dolor sit amet, id fugit tollit pro, illud nostrud aliquando ad est, quo esse dolorum id ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Lorem ipsum dolor sit amet, id fugit tollit pro, illud nostrud aliquando ad est, quo esse dolorum id ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Lorem ipsum dolor sit amet, id fugit tollit pro, illud nostrud aliquando ad est, quo esse dolorum id ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Lorem ipsum dolor sit amet, id fugit tollit pro, illud nostrud aliquando ad est, quo esse dolorum id ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Links");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " In Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Well done!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " You successfully read ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "this important alert message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Heads up!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " This ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "alert needs your attention");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, ", but it's not super important. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Warning!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Better check yourself, you're ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "not looking too good");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Oh snap!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Change a few things up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " and try submitting again. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Lorem ipsum dolor sit amet, id fugit tollit pro, illud nostrud aliquando ad est, quo esse dolorum id ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "alert link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, ". ");

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FsZXJ0cy9hbGVydHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-alerts',
            templateUrl: './alerts.component.html',
            styleUrls: ['./alerts.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "A5z7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js ***!
      \***********************************************************************/

    /*! exports provided: MAT_CHIPS_DEFAULT_OPTIONS, MAT_CHIP_AVATAR, MAT_CHIP_REMOVE, MAT_CHIP_TRAILING_ICON, MatChip, MatChipAvatar, MatChipInput, MatChipList, MatChipListChange, MatChipRemove, MatChipSelectionChange, MatChipTrailingIcon, MatChipsModule, ɵ0 */

    /***/
    function A5z7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function () {
        return MAT_CHIPS_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIP_AVATAR", function () {
        return MAT_CHIP_AVATAR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIP_REMOVE", function () {
        return MAT_CHIP_REMOVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIP_TRAILING_ICON", function () {
        return MAT_CHIP_TRAILING_ICON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChip", function () {
        return MatChip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function () {
        return MatChipAvatar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipInput", function () {
        return MatChipInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipList", function () {
        return MatChipList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipListChange", function () {
        return MatChipListChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipRemove", function () {
        return MatChipRemove;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function () {
        return MatChipSelectionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function () {
        return MatChipTrailingIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipsModule", function () {
        return MatChipsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Event object emitted by MatChip when selected or deselected. */


      var _c0 = ["*"];

      var MatChipSelectionChange = function MatChipSelectionChange(
      /** Reference to the chip that emitted the event. */
      source,
      /** Whether the chip that emitted the event is selected. */
      selected) {
        var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _classCallCheck2(this, MatChipSelectionChange);

        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
      };
      /**
       * Injection token that can be used to reference instances of `MatChipRemove`. It serves as
       * alternative token to the actual `MatChipRemove` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_CHIP_REMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipRemove');
      /**
       * Injection token that can be used to reference instances of `MatChipAvatar`. It serves as
       * alternative token to the actual `MatChipAvatar` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_CHIP_AVATAR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipAvatar');
      /**
       * Injection token that can be used to reference instances of `MatChipTrailingIcon`. It serves as
       * alternative token to the actual `MatChipTrailingIcon` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_CHIP_TRAILING_ICON = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipTrailingIcon'); // Boilerplate for applying mixins to MatChip.

      /** @docs-private */

      var MatChipBase = function MatChipBase(_elementRef) {
        _classCallCheck2(this, MatChipBase);

        this._elementRef = _elementRef;
      };

      var _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatChipBase), 'primary'), -1);
      /**
       * Dummy directive to add CSS class to chip avatar.
       * @docs-private
       */


      var MatChipAvatar = function MatChipAvatar() {
        _classCallCheck2(this, MatChipAvatar);
      };

      MatChipAvatar.ɵfac = function MatChipAvatar_Factory(t) {
        return new (t || MatChipAvatar)();
      };

      MatChipAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipAvatar,
        selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
        hostAttrs: [1, "mat-chip-avatar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: MAT_CHIP_AVATAR,
          useExisting: MatChipAvatar
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipAvatar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'mat-chip-avatar, [matChipAvatar]',
            host: {
              'class': 'mat-chip-avatar'
            },
            providers: [{
              provide: MAT_CHIP_AVATAR,
              useExisting: MatChipAvatar
            }]
          }]
        }], null, null);
      })();
      /**
       * Dummy directive to add CSS class to chip trailing icon.
       * @docs-private
       */


      var MatChipTrailingIcon = function MatChipTrailingIcon() {
        _classCallCheck2(this, MatChipTrailingIcon);
      };

      MatChipTrailingIcon.ɵfac = function MatChipTrailingIcon_Factory(t) {
        return new (t || MatChipTrailingIcon)();
      };

      MatChipTrailingIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipTrailingIcon,
        selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
        hostAttrs: [1, "mat-chip-trailing-icon"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: MAT_CHIP_TRAILING_ICON,
          useExisting: MatChipTrailingIcon
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipTrailingIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
            host: {
              'class': 'mat-chip-trailing-icon'
            },
            providers: [{
              provide: MAT_CHIP_TRAILING_ICON,
              useExisting: MatChipTrailingIcon
            }]
          }]
        }], null, null);
      })();
      /**
       * Material design styled Chip component. Used inside the MatChipList component.
       */


      var MatChip = /*#__PURE__*/function (_MatChipMixinBase2) {
        _inherits2(MatChip, _MatChipMixinBase2);

        var _super3 = _createSuper2(MatChip);

        function MatChip(_elementRef, _ngZone, platform, globalRippleOptions, // @breaking-change 8.0.0 `animationMode` parameter to become required.
        animationMode, // @breaking-change 9.0.0 `_changeDetectorRef` parameter to become required.
        _changeDetectorRef, tabIndex, // @breaking-change 11.0.0 `_document` parameter to become required.
        _document) {
          var _this8;

          _classCallCheck2(this, MatChip);

          _this8 = _super3.call(this, _elementRef);
          _this8._elementRef = _elementRef;
          _this8._ngZone = _ngZone;
          _this8._changeDetectorRef = _changeDetectorRef;
          /** Whether the chip has focus. */

          _this8._hasFocus = false;
          /** Whether the chip list is selectable */

          _this8.chipListSelectable = true;
          /** Whether the chip list is in multi-selection mode. */

          _this8._chipListMultiple = false;
          /** Whether the chip list as a whole is disabled. */

          _this8._chipListDisabled = false;
          _this8._selected = false;
          _this8._selectable = true;
          _this8._disabled = false;
          _this8._removable = true;
          /** Emits when the chip is focused. */

          _this8._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Emits when the chip is blured. */

          _this8._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Emitted when the chip is selected or deselected. */

          _this8.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emitted when the chip is destroyed. */

          _this8.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emitted when a chip is to be removed. */

          _this8.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          _this8._addHostClassName(); // Dynamically create the ripple target, append it within the chip, and use it as the
          // chip's ripple target. Adding the class '.mat-chip-ripple' ensures that it will have
          // the proper styles.


          _this8._chipRippleTarget = (_document || document).createElement('div');

          _this8._chipRippleTarget.classList.add('mat-chip-ripple');

          _this8._elementRef.nativeElement.appendChild(_this8._chipRippleTarget);

          _this8._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["RippleRenderer"](_assertThisInitialized2(_this8), _ngZone, _this8._chipRippleTarget, platform);

          _this8._chipRipple.setupTriggerEvents(_elementRef);

          _this8.rippleConfig = globalRippleOptions || {};
          _this8._animationsDisabled = animationMode === 'NoopAnimations';
          _this8.tabIndex = tabIndex != null ? parseInt(tabIndex) || -1 : -1;
          return _this8;
        }
        /**
         * Whether ripples are disabled on interaction
         * @docs-private
         */


        _createClass2(MatChip, [{
          key: "_addHostClassName",
          value: function _addHostClassName() {
            var basicChipAttrName = 'mat-basic-chip';
            var element = this._elementRef.nativeElement;

            if (element.hasAttribute(basicChipAttrName) || element.tagName.toLowerCase() === basicChipAttrName) {
              element.classList.add(basicChipAttrName);
              return;
            } else {
              element.classList.add('mat-standard-chip');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed.emit({
              chip: this
            });

            this._chipRipple._removeTriggerEvents();
          }
          /** Selects the chip. */

        }, {
          key: "select",
          value: function select() {
            if (!this._selected) {
              this._selected = true;

              this._dispatchSelectionChange();

              this._markForCheck();
            }
          }
          /** Deselects the chip. */

        }, {
          key: "deselect",
          value: function deselect() {
            if (this._selected) {
              this._selected = false;

              this._dispatchSelectionChange();

              this._markForCheck();
            }
          }
          /** Select this chip and emit selected event */

        }, {
          key: "selectViaInteraction",
          value: function selectViaInteraction() {
            if (!this._selected) {
              this._selected = true;

              this._dispatchSelectionChange(true);

              this._markForCheck();
            }
          }
          /** Toggles the current selected state of this chip. */

        }, {
          key: "toggleSelected",
          value: function toggleSelected() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this._selected = !this.selected;

            this._dispatchSelectionChange(isUserInput);

            this._markForCheck();

            return this.selected;
          }
          /** Allows for programmatic focusing of the chip. */

        }, {
          key: "focus",
          value: function focus() {
            if (!this._hasFocus) {
              this._elementRef.nativeElement.focus();

              this._onFocus.next({
                chip: this
              });
            }

            this._hasFocus = true;
          }
          /**
           * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
           * BACKSPACE keys are pressed.
           *
           * Informs any listeners of the removal request. Does not remove the chip from the DOM.
           */

        }, {
          key: "remove",
          value: function remove() {
            if (this.removable) {
              this.removed.emit({
                chip: this
              });
            }
          }
          /** Handles click events on the chip. */

        }, {
          key: "_handleClick",
          value: function _handleClick(event) {
            if (this.disabled) {
              event.preventDefault();
            } else {
              event.stopPropagation();
            }
          }
          /** Handle custom key presses. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if (this.disabled) {
              return;
            }

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DELETE"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"]:
                // If we are removable, remove the focused chip
                this.remove(); // Always prevent so page navigation does not occur

                event.preventDefault();
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["SPACE"]:
                // If we are selectable, toggle the focused chip
                if (this.selectable) {
                  this.toggleSelected(true);
                } // Always prevent space from scrolling the page since the list has focus


                event.preventDefault();
                break;
            }
          }
        }, {
          key: "_blur",
          value: function _blur() {
            var _this9 = this;

            // When animations are enabled, Angular may end up removing the chip from the DOM a little
            // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
            // that moves focus not the next item. To work around the issue, we defer marking the chip
            // as not focused until the next time the zone stabilizes.
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function () {
              _this9._ngZone.run(function () {
                _this9._hasFocus = false;

                _this9._onBlur.next({
                  chip: _this9
                });
              });
            });
          }
        }, {
          key: "_dispatchSelectionChange",
          value: function _dispatchSelectionChange() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.selectionChange.emit({
              source: this,
              isUserInput: isUserInput,
              selected: this._selected
            });
          }
        }, {
          key: "_markForCheck",
          value: function _markForCheck() {
            // @breaking-change 9.0.0 Remove this method once the _changeDetectorRef is a required param.
            if (this._changeDetectorRef) {
              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "rippleDisabled",
          get: function get() {
            return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
          }
          /** Whether the chip is selected. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            var coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (coercedValue !== this._selected) {
              this._selected = coercedValue;

              this._dispatchSelectionChange();
            }
          }
          /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */

        }, {
          key: "value",
          get: function get() {
            return this._value !== undefined ? this._value : this._elementRef.nativeElement.textContent;
          },
          set: function set(value) {
            this._value = value;
          }
          /**
           * Whether or not the chip is selectable. When a chip is not selectable,
           * changes to its selected state are always ignored. By default a chip is
           * selectable, and it becomes non-selectable if its parent chip list is
           * not selectable.
           */

        }, {
          key: "selectable",
          get: function get() {
            return this._selectable && this.chipListSelectable;
          },
          set: function set(value) {
            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** Whether the chip is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._chipListDisabled || this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /**
           * Determines whether or not the chip displays the remove styling and emits (removed) events.
           */

        }, {
          key: "removable",
          get: function get() {
            return this._removable;
          },
          set: function set(value) {
            this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** The ARIA selected applied to the chip. */

        }, {
          key: "ariaSelected",
          get: function get() {
            // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
            // it adds noise to NVDA users where "not selected" will be read out for each chip.
            return this.selectable && (this._chipListMultiple || this.selected) ? this.selected.toString() : null;
          }
        }]);

        return MatChip;
      }(_MatChipMixinBase);

      MatChip.ɵfac = function MatChip_Factory(t) {
        return new (t || MatChip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      MatChip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChip,
        selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
        contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_AVATAR, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_TRAILING_ICON, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_REMOVE, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
          }
        },
        hostAttrs: ["role", "option", 1, "mat-chip", "mat-focus-indicator"],
        hostVars: 14,
        hostBindings: function MatChip_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChip_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            })("keydown", function MatChip_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("focus", function MatChip_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function MatChip_blur_HostBindingHandler() {
              return ctx._blur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
          }
        },
        inputs: {
          color: "color",
          disableRipple: "disableRipple",
          tabIndex: "tabIndex",
          selected: "selected",
          value: "value",
          selectable: "selectable",
          disabled: "disabled",
          removable: "removable"
        },
        outputs: {
          selectionChange: "selectionChange",
          destroyed: "destroyed",
          removed: "removed"
        },
        exportAs: ["matChip"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });

      MatChip.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };

      MatChip.propDecorators = {
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MAT_CHIP_AVATAR]
        }],
        trailingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MAT_CHIP_TRAILING_ICON]
        }],
        removeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MAT_CHIP_REMOVE]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        removable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        removed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChip, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
            inputs: ['color', 'disableRipple', 'tabIndex'],
            exportAs: 'matChip',
            host: {
              'class': 'mat-chip mat-focus-indicator',
              '[attr.tabindex]': 'disabled ? null : tabIndex',
              'role': 'option',
              '[class.mat-chip-selected]': 'selected',
              '[class.mat-chip-with-avatar]': 'avatar',
              '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
              '[class.mat-chip-disabled]': 'disabled',
              '[class._mat-animation-noopable]': '_animationsDisabled',
              '[attr.disabled]': 'disabled || null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-selected]': 'ariaSelected',
              '(click)': '_handleClick($event)',
              '(keydown)': '_handleKeydown($event)',
              '(focus)': 'focus()',
              '(blur)': '_blur()'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, {
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_AVATAR]
          }],
          trailingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_TRAILING_ICON]
          }],
          removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_REMOVE]
          }]
        });
      })();
      /**
       * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
       * available at https://material.io/icons/#ic_cancel.
       *
       * Example:
       *
       *     `<mat-chip>
       *       <mat-icon matChipRemove>cancel</mat-icon>
       *     </mat-chip>`
       *
       * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
       * styles to properly center the icon within the chip.
       */


      var MatChipRemove = /*#__PURE__*/function () {
        function MatChipRemove(_parentChip, // @breaking-change 11.0.0 `elementRef` parameter to be made required.
        elementRef) {
          _classCallCheck2(this, MatChipRemove);

          this._parentChip = _parentChip; // @breaking-change 11.0.0 Remove null check for `elementRef`.

          if (elementRef && elementRef.nativeElement.nodeName === 'BUTTON') {
            elementRef.nativeElement.setAttribute('type', 'button');
          }
        }
        /** Calls the parent chip's public `remove()` method if applicable. */


        _createClass2(MatChipRemove, [{
          key: "_handleClick",
          value: function _handleClick(event) {
            var parentChip = this._parentChip;

            if (parentChip.removable && !parentChip.disabled) {
              parentChip.remove();
            } // We need to stop event propagation because otherwise the event will bubble up to the
            // form field and cause the `onContainerClick` method to be invoked. This method would then
            // reset the focused chip that has been focused after chip removal. Usually the parent
            // the parent click listener of the `MatChip` would prevent propagation, but it can happen
            // that the chip is being removed before the event bubbles up.


            event.stopPropagation();
          }
        }]);

        return MatChipRemove;
      }();

      MatChipRemove.ɵfac = function MatChipRemove_Factory(t) {
        return new (t || MatChipRemove)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatChip), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      MatChipRemove.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipRemove,
        selectors: [["", "matChipRemove", ""]],
        hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"],
        hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChipRemove_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: MAT_CHIP_REMOVE,
          useExisting: MatChipRemove
        }])]
      });

      MatChipRemove.ctorParameters = function () {
        return [{
          type: MatChip
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipRemove, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[matChipRemove]',
            host: {
              'class': 'mat-chip-remove mat-chip-trailing-icon',
              '(click)': '_handleClick($event)'
            },
            providers: [{
              provide: MAT_CHIP_REMOVE,
              useExisting: MatChipRemove
            }]
          }]
        }], function () {
          return [{
            type: MatChip
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token to be used to override the default options for the chips module. */


      var MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-chips-default-options');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatChipList.

      /** @docs-private */

      var MatChipListBase = function MatChipListBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
      /** @docs-private */
      ngControl) {
        _classCallCheck2(this, MatChipListBase);

        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };

      var _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinErrorState"])(MatChipListBase); // Increasing integer for generating unique ids for chip-list components.


      var nextUniqueId = 0;
      /** Change event object that is emitted when the chip list value has changed. */

      var MatChipListChange = function MatChipListChange(
      /** Chip list that emitted the event. */
      source,
      /** Value of the chip list when the event was emitted. */
      value) {
        _classCallCheck2(this, MatChipListChange);

        this.source = source;
        this.value = value;
      };
      /**
       * A material design chips component (named ChipList for its similarity to the List component).
       */


      var MatChipList = /*#__PURE__*/function (_MatChipListMixinBase2) {
        _inherits2(MatChipList, _MatChipListMixinBase2);

        var _super4 = _createSuper2(MatChipList);

        function MatChipList(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher,
        /** @docs-private */
        ngControl) {
          var _this10;

          _classCallCheck2(this, MatChipList);

          _this10 = _super4.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this10._elementRef = _elementRef;
          _this10._changeDetectorRef = _changeDetectorRef;
          _this10._dir = _dir;
          _this10.ngControl = ngControl;
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this10.controlType = 'mat-chip-list';
          /**
           * When a chip is destroyed, we store the index of the destroyed chip until the chips
           * query list notifies about the update. This is necessary because we cannot determine an
           * appropriate chip that should receive focus until the array of chips updated completely.
           */

          _this10._lastDestroyedChipIndex = null;
          /** Subject that emits when the component has been destroyed. */

          _this10._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Uid of the chip list */

          _this10._uid = "mat-chip-list-".concat(nextUniqueId++);
          /** Tab index for the chip list. */

          _this10._tabIndex = 0;
          /**
           * User defined tab index.
           * When it is not null, use user defined tab index. Otherwise use _tabIndex
           */

          _this10._userTabIndex = null;
          /** Function when touched */

          _this10._onTouched = function () {};
          /** Function when changed */


          _this10._onChange = function () {};

          _this10._multiple = false;

          _this10._compareWith = function (o1, o2) {
            return o1 === o2;
          };

          _this10._required = false;
          _this10._disabled = false;
          /** Orientation of the chip list. */

          _this10.ariaOrientation = 'horizontal';
          _this10._selectable = true;
          /** Event emitted when the selected chip list value has been changed by the user. */

          _this10.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Event that emits whenever the raw value of the chip-list changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * @docs-private
           */

          _this10.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          if (_this10.ngControl) {
            _this10.ngControl.valueAccessor = _assertThisInitialized2(_this10);
          }

          return _this10;
        }
        /** The array of selected chips inside chip list. */


        _createClass2(MatChipList, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this11 = this;

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusKeyManager"](this.chips).withWrap().withVerticalOrientation().withHomeAndEnd().withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function (dir) {
                return _this11._keyManager.withHorizontalOrientation(dir);
              });
            }

            this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this11._allowFocusEscape();
            }); // When the list changes, re-subscribe


            this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function () {
              if (_this11.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then(function () {
                  _this11._syncChipsState();
                });
              }

              _this11._resetChips(); // Reset chips selected/deselected status


              _this11._initializeSelection(); // Check to see if we need to update our tab index


              _this11._updateTabIndex(); // Check to see if we have a destroyed chip and need to refocus


              _this11._updateFocusForDestroyedChips();

              _this11.stateChanges.next();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](this.multiple, undefined, false);
            this.stateChanges.next();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();

              if (this.ngControl.disabled !== this._disabled) {
                this.disabled = !!this.ngControl.disabled;
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();

            this.stateChanges.complete();

            this._dropSubscriptions();
          }
          /** Associates an HTML input element with this chip list. */

        }, {
          key: "registerInput",
          value: function registerInput(inputElement) {
            this._chipInput = inputElement; // We use this attribute to match the chip list to its input in test harnesses.
            // Set the attribute directly here to avoid "changed after checked" errors.

            this._elementRef.nativeElement.setAttribute('data-mat-chip-input', inputElement.id);
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "setDescribedByIds",
          value: function setDescribedByIds(ids) {
            this._ariaDescribedby = ids.join(' ');
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (this.chips) {
              this._setSelectionByValue(value, false);
            }
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
            this.disabled = isDisabled;
            this.stateChanges.next();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick(event) {
            if (!this._originatesFromChip(event)) {
              this.focus();
            }
          }
          /**
           * Focuses the first non-disabled chip in this chip list, or the associated input when there
           * are no eligible chips.
           */

        }, {
          key: "focus",
          value: function focus(options) {
            if (this.disabled) {
              return;
            } // TODO: ARIA says this should focus the first `selected` chip if any are selected.
            // Focus on first element if there's no chipInput inside chip-list


            if (this._chipInput && this._chipInput.focused) {// do nothing
            } else if (this.chips.length > 0) {
              this._keyManager.setFirstItemActive();

              this.stateChanges.next();
            } else {
              this._focusInput(options);

              this.stateChanges.next();
            }
          }
          /** Attempt to focus an input if we have one. */

        }, {
          key: "_focusInput",
          value: function _focusInput(options) {
            if (this._chipInput) {
              this._chipInput.focus(options);
            }
          }
          /**
           * Pass events to the keyboard manager. Available here for tests.
           */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            var target = event.target; // If they are on an empty input and hit backspace, focus the last chip

            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"] && this._isInputEmpty(target)) {
              this._keyManager.setLastItemActive();

              event.preventDefault();
            } else if (target && target.classList.contains('mat-chip')) {
              this._keyManager.onKeydown(event);

              this.stateChanges.next();
            }
          }
          /**
           * Check the tab index as you should not be allowed to focus an empty list.
           */

        }, {
          key: "_updateTabIndex",
          value: function _updateTabIndex() {
            // If we have 0 chips, we should not allow keyboard focus
            this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
          }
          /**
           * If the amount of chips changed, we need to update the
           * key manager state and focus the next closest chip.
           */

        }, {
          key: "_updateFocusForDestroyedChips",
          value: function _updateFocusForDestroyedChips() {
            // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
            if (this._lastDestroyedChipIndex != null) {
              if (this.chips.length) {
                var newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);

                this._keyManager.setActiveItem(newChipIndex);
              } else {
                this.focus();
              }
            }

            this._lastDestroyedChipIndex = null;
          }
          /**
           * Utility to ensure all indexes are valid.
           *
           * @param index The index to be checked.
           * @returns True if the index is valid for our list of chips.
           */

        }, {
          key: "_isValidIndex",
          value: function _isValidIndex(index) {
            return index >= 0 && index < this.chips.length;
          }
        }, {
          key: "_isInputEmpty",
          value: function _isInputEmpty(element) {
            if (element && element.nodeName.toLowerCase() === 'input') {
              var input = element;
              return !input.value;
            }

            return false;
          }
        }, {
          key: "_setSelectionByValue",
          value: function _setSelectionByValue(value) {
            var _this12 = this;

            var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this._clearSelection();

            this.chips.forEach(function (chip) {
              return chip.deselect();
            });

            if (Array.isArray(value)) {
              value.forEach(function (currentValue) {
                return _this12._selectValue(currentValue, isUserInput);
              });

              this._sortValues();
            } else {
              var correspondingChip = this._selectValue(value, isUserInput); // Shift focus to the active item. Note that we shouldn't do this in multiple
              // mode, because we don't know what chip the user interacted with last.


              if (correspondingChip) {
                if (isUserInput) {
                  this._keyManager.setActiveItem(correspondingChip);
                }
              }
            }
          }
          /**
           * Finds and selects the chip based on its value.
           * @returns Chip that has the corresponding value.
           */

        }, {
          key: "_selectValue",
          value: function _selectValue(value) {
            var _this13 = this;

            var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var correspondingChip = this.chips.find(function (chip) {
              return chip.value != null && _this13._compareWith(chip.value, value);
            });

            if (correspondingChip) {
              isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();

              this._selectionModel.select(correspondingChip);
            }

            return correspondingChip;
          }
        }, {
          key: "_initializeSelection",
          value: function _initializeSelection() {
            var _this14 = this;

            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            Promise.resolve().then(function () {
              if (_this14.ngControl || _this14._value) {
                _this14._setSelectionByValue(_this14.ngControl ? _this14.ngControl.value : _this14._value, false);

                _this14.stateChanges.next();
              }
            });
          }
          /**
           * Deselects every chip in the list.
           * @param skip Chip that should not be deselected.
           */

        }, {
          key: "_clearSelection",
          value: function _clearSelection(skip) {
            this._selectionModel.clear();

            this.chips.forEach(function (chip) {
              if (chip !== skip) {
                chip.deselect();
              }
            });
            this.stateChanges.next();
          }
          /**
           * Sorts the model values, ensuring that they keep the same
           * order that they have in the panel.
           */

        }, {
          key: "_sortValues",
          value: function _sortValues() {
            var _this15 = this;

            if (this._multiple) {
              this._selectionModel.clear();

              this.chips.forEach(function (chip) {
                if (chip.selected) {
                  _this15._selectionModel.select(chip);
                }
              });
              this.stateChanges.next();
            }
          }
          /** Emits change event to set the model value. */

        }, {
          key: "_propagateChanges",
          value: function _propagateChanges(fallbackValue) {
            var valueToEmit = null;

            if (Array.isArray(this.selected)) {
              valueToEmit = this.selected.map(function (chip) {
                return chip.value;
              });
            } else {
              valueToEmit = this.selected ? this.selected.value : fallbackValue;
            }

            this._value = valueToEmit;
            this.change.emit(new MatChipListChange(this, valueToEmit));
            this.valueChange.emit(valueToEmit);

            this._onChange(valueToEmit);

            this._changeDetectorRef.markForCheck();
          }
          /** When blurred, mark the field as touched when focus moved outside the chip list. */

        }, {
          key: "_blur",
          value: function _blur() {
            var _this16 = this;

            if (!this._hasFocusedChip()) {
              this._keyManager.setActiveItem(-1);
            }

            if (!this.disabled) {
              if (this._chipInput) {
                // If there's a chip input, we should check whether the focus moved to chip input.
                // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                // to chip input, do nothing.
                // Timeout is needed to wait for the focus() event trigger on chip input.
                setTimeout(function () {
                  if (!_this16.focused) {
                    _this16._markAsTouched();
                  }
                });
              } else {
                // If there's no chip input, then mark the field as touched.
                this._markAsTouched();
              }
            }
          }
          /** Mark the field as touched */

        }, {
          key: "_markAsTouched",
          value: function _markAsTouched() {
            this._onTouched();

            this._changeDetectorRef.markForCheck();

            this.stateChanges.next();
          }
          /**
           * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
           * user to tab out of it. This prevents the list from capturing focus and redirecting
           * it back to the first chip, creating a focus trap, if it user tries to tab away.
           */

        }, {
          key: "_allowFocusEscape",
          value: function _allowFocusEscape() {
            var _this17 = this;

            if (this._tabIndex !== -1) {
              this._tabIndex = -1;
              setTimeout(function () {
                _this17._tabIndex = _this17._userTabIndex || 0;

                _this17._changeDetectorRef.markForCheck();
              });
            }
          }
        }, {
          key: "_resetChips",
          value: function _resetChips() {
            this._dropSubscriptions();

            this._listenToChipsFocus();

            this._listenToChipsSelection();

            this._listenToChipsRemoved();
          }
        }, {
          key: "_dropSubscriptions",
          value: function _dropSubscriptions() {
            if (this._chipFocusSubscription) {
              this._chipFocusSubscription.unsubscribe();

              this._chipFocusSubscription = null;
            }

            if (this._chipBlurSubscription) {
              this._chipBlurSubscription.unsubscribe();

              this._chipBlurSubscription = null;
            }

            if (this._chipSelectionSubscription) {
              this._chipSelectionSubscription.unsubscribe();

              this._chipSelectionSubscription = null;
            }

            if (this._chipRemoveSubscription) {
              this._chipRemoveSubscription.unsubscribe();

              this._chipRemoveSubscription = null;
            }
          }
          /** Listens to user-generated selection events on each chip. */

        }, {
          key: "_listenToChipsSelection",
          value: function _listenToChipsSelection() {
            var _this18 = this;

            this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(function (event) {
              event.source.selected ? _this18._selectionModel.select(event.source) : _this18._selectionModel.deselect(event.source); // For single selection chip list, make sure the deselected value is unselected.

              if (!_this18.multiple) {
                _this18.chips.forEach(function (chip) {
                  if (!_this18._selectionModel.isSelected(chip) && chip.selected) {
                    chip.deselect();
                  }
                });
              }

              if (event.isUserInput) {
                _this18._propagateChanges();
              }
            });
          }
          /** Listens to user-generated selection events on each chip. */

        }, {
          key: "_listenToChipsFocus",
          value: function _listenToChipsFocus() {
            var _this19 = this;

            this._chipFocusSubscription = this.chipFocusChanges.subscribe(function (event) {
              var chipIndex = _this19.chips.toArray().indexOf(event.chip);

              if (_this19._isValidIndex(chipIndex)) {
                _this19._keyManager.updateActiveItem(chipIndex);
              }

              _this19.stateChanges.next();
            });
            this._chipBlurSubscription = this.chipBlurChanges.subscribe(function () {
              _this19._blur();

              _this19.stateChanges.next();
            });
          }
        }, {
          key: "_listenToChipsRemoved",
          value: function _listenToChipsRemoved() {
            var _this20 = this;

            this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(function (event) {
              var chip = event.chip;

              var chipIndex = _this20.chips.toArray().indexOf(event.chip); // In case the chip that will be removed is currently focused, we temporarily store
              // the index in order to be able to determine an appropriate sibling chip that will
              // receive focus.


              if (_this20._isValidIndex(chipIndex) && chip._hasFocus) {
                _this20._lastDestroyedChipIndex = chipIndex;
              }
            });
          }
          /** Checks whether an event comes from inside a chip element. */

        }, {
          key: "_originatesFromChip",
          value: function _originatesFromChip(event) {
            var currentElement = event.target;

            while (currentElement && currentElement !== this._elementRef.nativeElement) {
              if (currentElement.classList.contains('mat-chip')) {
                return true;
              }

              currentElement = currentElement.parentElement;
            }

            return false;
          }
          /** Checks whether any of the chips is focused. */

        }, {
          key: "_hasFocusedChip",
          value: function _hasFocusedChip() {
            return this.chips && this.chips.some(function (chip) {
              return chip._hasFocus;
            });
          }
          /** Syncs the list's state with the individual chips. */

        }, {
          key: "_syncChipsState",
          value: function _syncChipsState() {
            var _this21 = this;

            if (this.chips) {
              this.chips.forEach(function (chip) {
                chip._chipListDisabled = _this21._disabled;
                chip._chipListMultiple = _this21.multiple;
              });
            }
          }
        }, {
          key: "selected",
          get: function get() {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
          }
          /** The ARIA role applied to the chip list. */

        }, {
          key: "role",
          get: function get() {
            return this.empty ? null : 'listbox';
          }
          /** Whether the user should be allowed to select multiple chips. */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            this._syncChipsState();
          }
          /**
           * A function to compare the option values with the selected values. The first argument
           * is a value from an option. The second is a value from the selection. A boolean
           * should be returned.
           */

        }, {
          key: "compareWith",
          get: function get() {
            return this._compareWith;
          },
          set: function set(fn) {
            this._compareWith = fn;

            if (this._selectionModel) {
              // A different comparator means the selection could change.
              this._initializeSelection();
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
            this.writeValue(value);
            this._value = value;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "id",
          get: function get() {
            return this._chipInput ? this._chipInput.id : this._uid;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "placeholder",
          get: function get() {
            return this._chipInput ? this._chipInput.placeholder : this._placeholder;
          },
          set: function set(value) {
            this._placeholder = value;
            this.stateChanges.next();
          }
          /** Whether any chips or the matChipInput inside of this chip-list has focus. */

        }, {
          key: "focused",
          get: function get() {
            return this._chipInput && this._chipInput.focused || this._hasFocusedChip();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "empty",
          get: function get() {
            return (!this._chipInput || this._chipInput.empty) && (!this.chips || this.chips.length === 0);
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return !this.empty || this.focused;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.ngControl ? !!this.ngControl.disabled : this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            this._syncChipsState();
          }
          /**
           * Whether or not this chip list is selectable. When a chip list is not selectable,
           * the selected states for all the chips inside the chip list are always ignored.
           */

        }, {
          key: "selectable",
          get: function get() {
            return this._selectable;
          },
          set: function set(value) {
            var _this22 = this;

            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (this.chips) {
              this.chips.forEach(function (chip) {
                return chip.chipListSelectable = _this22._selectable;
              });
            }
          }
        }, {
          key: "tabIndex",
          set: function set(value) {
            this._userTabIndex = value;
            this._tabIndex = value;
          }
          /** Combined stream of all of the child chips' selection change events. */

        }, {
          key: "chipSelectionChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip.selectionChange;
            })));
          }
          /** Combined stream of all of the child chips' focus change events. */

        }, {
          key: "chipFocusChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip._onFocus;
            })));
          }
          /** Combined stream of all of the child chips' blur change events. */

        }, {
          key: "chipBlurChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip._onBlur;
            })));
          }
          /** Combined stream of all of the child chips' remove change events. */

        }, {
          key: "chipRemoveChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip.destroyed;
            })));
          }
        }]);

        return MatChipList;
      }(_MatChipListMixinBase);

      MatChipList.ɵfac = function MatChipList_Factory(t) {
        return new (t || MatChipList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], 10));
      };

      MatChipList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatChipList,
        selectors: [["mat-chip-list"]],
        contentQueries: function MatChipList_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChip, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chips = _t);
          }
        },
        hostAttrs: [1, "mat-chip-list"],
        hostVars: 15,
        hostBindings: function MatChipList_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatChipList_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function MatChipList_blur_HostBindingHandler() {
              return ctx._blur();
            })("keydown", function MatChipList_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx._uid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-list-disabled", ctx.disabled)("mat-chip-list-invalid", ctx.errorState)("mat-chip-list-required", ctx.required);
          }
        },
        inputs: {
          ariaOrientation: ["aria-orientation", "ariaOrientation"],
          multiple: "multiple",
          compareWith: "compareWith",
          value: "value",
          required: "required",
          placeholder: "placeholder",
          disabled: "disabled",
          selectable: "selectable",
          tabIndex: "tabIndex",
          errorStateMatcher: "errorStateMatcher"
        },
        outputs: {
          change: "change",
          valueChange: "valueChange"
        },
        exportAs: ["matChipList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
          useExisting: MatChipList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-chip-list-wrapper"]],
        template: function MatChipList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatChipList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }];
      };

      MatChipList.propDecorators = {
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaOrientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-orientation']
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        chips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatChip, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-chip-list',
            template: "<div class=\"mat-chip-list-wrapper\"><ng-content></ng-content></div>",
            exportAs: 'matChipList',
            host: {
              '[attr.tabindex]': 'disabled ? null : _tabIndex',
              '[attr.aria-describedby]': '_ariaDescribedby || null',
              '[attr.aria-required]': 'role ? required : null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-invalid]': 'errorState',
              '[attr.aria-multiselectable]': 'multiple',
              '[attr.role]': 'role',
              '[class.mat-chip-list-disabled]': 'disabled',
              '[class.mat-chip-list-invalid]': 'errorState',
              '[class.mat-chip-list-required]': 'required',
              '[attr.aria-orientation]': 'ariaOrientation',
              'class': 'mat-chip-list',
              '(focus)': 'focus()',
              '(blur)': '_blur()',
              '(keydown)': '_keydown($event)',
              '[id]': '_uid'
            },
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
              useExisting: MatChipList
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }]
          }];
        }, {
          ariaOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-orientation']
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          chips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [MatChip, {
              // We need to use `descendants: true`, because Ivy will no longer match
              // indirect descendants if it's left as false.
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
      // Increasing integer for generating unique ids.


      var nextUniqueId$1 = 0;
      /**
       * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
       * May be placed inside or outside of an `<mat-chip-list>`.
       */

      var MatChipInput = /*#__PURE__*/function () {
        function MatChipInput(_elementRef, _defaultOptions) {
          _classCallCheck2(this, MatChipInput);

          this._elementRef = _elementRef;
          this._defaultOptions = _defaultOptions;
          /** Whether the control is focused. */

          this.focused = false;
          this._addOnBlur = false;
          /**
           * The list of key codes that will trigger a chipEnd event.
           *
           * Defaults to `[ENTER]`.
           */

          this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
          /** Emitted when a chip is to be added. */

          this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** The input's placeholder text. */

          this.placeholder = '';
          /** Unique id for the input. */

          this.id = "mat-chip-list-input-".concat(nextUniqueId$1++);
          this._disabled = false;
          this._inputElement = this._elementRef.nativeElement;
        }
        /** Register input for chip list */


        _createClass2(MatChipInput, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._chipList.stateChanges.next();
          }
          /** Utility method to make host definition/tests more clear. */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            // Allow the user's focus to escape when they're tabbing forward. Note that we don't
            // want to do this when going backwards, because focus should go back to the first chip.
            if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event, 'shiftKey')) {
              this._chipList._allowFocusEscape();
            }

            this._emitChipEnd(event);
          }
          /** Checks to see if the blur should emit the (chipEnd) event. */

        }, {
          key: "_blur",
          value: function _blur() {
            if (this.addOnBlur) {
              this._emitChipEnd();
            }

            this.focused = false; // Blur the chip list if it is not focused

            if (!this._chipList.focused) {
              this._chipList._blur();
            }

            this._chipList.stateChanges.next();
          }
        }, {
          key: "_focus",
          value: function _focus() {
            this.focused = true;

            this._chipList.stateChanges.next();
          }
          /** Checks to see if the (chipEnd) event needs to be emitted. */

        }, {
          key: "_emitChipEnd",
          value: function _emitChipEnd(event) {
            if (!this._inputElement.value && !!event) {
              this._chipList._keydown(event);
            }

            if (!event || this._isSeparatorKey(event)) {
              this.chipEnd.emit({
                input: this._inputElement,
                value: this._inputElement.value
              });

              if (event) {
                event.preventDefault();
              }
            }
          }
        }, {
          key: "_onInput",
          value: function _onInput() {
            // Let chip list know whenever the value changes.
            this._chipList.stateChanges.next();
          }
          /** Focuses the input. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._inputElement.focus(options);
          }
          /** Checks whether a keycode is one of the configured separators. */

        }, {
          key: "_isSeparatorKey",
          value: function _isSeparatorKey(event) {
            return !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
          }
        }, {
          key: "chipList",
          set: function set(value) {
            if (value) {
              this._chipList = value;

              this._chipList.registerInput(this);
            }
          }
          /**
           * Whether or not the chipEnd event will be emitted when the input is blurred.
           */

        }, {
          key: "addOnBlur",
          get: function get() {
            return this._addOnBlur;
          },
          set: function set(value) {
            this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** Whether the input is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this._chipList && this._chipList.disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** Whether the input is empty. */

        }, {
          key: "empty",
          get: function get() {
            return !this._inputElement.value;
          }
        }]);

        return MatChipInput;
      }();

      MatChipInput.ɵfac = function MatChipInput_Factory(t) {
        return new (t || MatChipInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_CHIPS_DEFAULT_OPTIONS));
      };

      MatChipInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipInput,
        selectors: [["input", "matChipInputFor", ""]],
        hostAttrs: [1, "mat-chip-input", "mat-input-element"],
        hostVars: 5,
        hostBindings: function MatChipInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            })("blur", function MatChipInput_blur_HostBindingHandler() {
              return ctx._blur();
            })("focus", function MatChipInput_focus_HostBindingHandler() {
              return ctx._focus();
            })("input", function MatChipInput_input_HostBindingHandler() {
              return ctx._onInput();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
          }
        },
        inputs: {
          separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
          placeholder: "placeholder",
          id: "id",
          chipList: ["matChipInputFor", "chipList"],
          addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"],
          disabled: "disabled"
        },
        outputs: {
          chipEnd: "matChipInputTokenEnd"
        },
        exportAs: ["matChipInput", "matChipInputFor"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      MatChipInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_CHIPS_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatChipInput.propDecorators = {
        chipList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputFor']
        }],
        addOnBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputAddOnBlur']
        }],
        separatorKeyCodes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputSeparatorKeyCodes']
        }],
        chipEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['matChipInputTokenEnd']
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'input[matChipInputFor]',
            exportAs: 'matChipInput, matChipInputFor',
            host: {
              'class': 'mat-chip-input mat-input-element',
              '(keydown)': '_keydown($event)',
              '(blur)': '_blur()',
              '(focus)': '_focus()',
              '(input)': '_onInput()',
              '[id]': 'id',
              '[attr.disabled]': 'disabled || null',
              '[attr.placeholder]': 'placeholder || null',
              '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
              '[attr.aria-required]': '_chipList && _chipList.required || null'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_CHIPS_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          separatorKeyCodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputSeparatorKeyCodes']
          }],
          chipEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['matChipInputTokenEnd']
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          chipList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputFor']
          }],
          addOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputAddOnBlur']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
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


      var CHIP_DECLARATIONS = [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
      var ɵ0 = {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]]
      };

      var MatChipsModule = function MatChipsModule() {
        _classCallCheck2(this, MatChipsModule);
      };

      MatChipsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatChipsModule
      });
      MatChipsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatChipsModule_Factory(t) {
          return new (t || MatChipsModule)();
        },
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
          provide: MAT_CHIPS_DEFAULT_OPTIONS,
          useValue: ɵ0
        }]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatChipsModule, {
          declarations: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon],
          exports: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: CHIP_DECLARATIONS,
            declarations: CHIP_DECLARATIONS,
            providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
              provide: MAT_CHIPS_DEFAULT_OPTIONS,
              useValue: ɵ0
            }]
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
      //# sourceMappingURL=chips.js.map

      /***/

    },

    /***/
    "H0+f":
    /*!*******************************************************!*\
      !*** ./src/app/ui/list-group/list-group.component.ts ***!
      \*******************************************************/

    /*! exports provided: ListGroupComponent */

    /***/
    function H0F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListGroupComponent", function () {
        return ListGroupComponent;
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


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ListGroupComponent_mat_list_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var shoe_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", shoe_r2, " ");
        }
      }

      var ListGroupComponent = /*#__PURE__*/function () {
        function ListGroupComponent() {
          _classCallCheck2(this, ListGroupComponent);

          this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        }

        _createClass2(ListGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ListGroupComponent;
      }();

      ListGroupComponent.ɵfac = function ListGroupComponent_Factory(t) {
        return new (t || ListGroupComponent)();
      };

      ListGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListGroupComponent,
        selectors: [["app-list-group"]],
        decls: 227,
        vars: 2,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], ["role", "list"], ["role", "listitem"], ["shoes", ""], [4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12"], [1, "list-group"], [1, "list-group-item"], [1, "badge", "bg-pink"], [1, "badge", "bg-cyan"], [1, "badge", "bg-teal"], [1, "badge", "bg-orange"], [1, "badge", "bg-purple"], ["href", "#", "onClick", "return false;", 1, "list-group-item", "active"], ["href", "#", "onClick", "return false;", 1, "list-group-item"], ["type", "button", 1, "list-group-item"], ["href", "#", "onClick", "return false;", 1, "list-group-item", "disabled"], [1, "list-group-item", "list-group-item-success"], [1, "list-group-item", "list-group-item-info"], [1, "list-group-item", "list-group-item-warning"], [1, "list-group-item", "list-group-item-danger"], ["href", "#", "onClick", "return false;", 1, "list-group-item", "list-group-item-success"], ["href", "#", "onClick", "return false;", 1, "list-group-item", "list-group-item-info"], ["href", "#", "onClick", "return false;", 1, "list-group-item", "list-group-item-warning"], ["href", "#", "onClick", "return false;", 1, "list-group-item", "list-group-item-danger"], [1, "list-group-item", "list-group-bg-pink"], [1, "list-group-item", "list-group-bg-cyan"], [1, "list-group-item", "list-group-bg-teal"], [1, "list-group-item", "list-group-bg-orange"], ["href", "#", "onClick", "return false;", 1, "list-group-item", "list-group-bg-pink"], ["href", "#", "onClick", "return false;", 1, "list-group-item", "list-group-bg-cyan"], ["href", "#", "onClick", "return false;", 1, "list-group-item", "list-group-bg-teal"], ["href", "#", "onClick", "return false;", 1, "list-group-item", "list-group-bg-orange"], [1, "list-group-item-heading"], [1, "list-group-item-text"]],
        template: function ListGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "List Group");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "List Group");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Basic list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-list", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-list-item", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-list-item", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-list-item", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Item 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "List with selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-selection-list", null, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ListGroupComponent_mat_list_option_41_Template, 2, 1, "mat-list-option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Basic Examples");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Cras justo odio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Dapibus ac facilisis in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Morbi leo risus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Porta ac consectetur ac");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Vestibulum at eros");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Badges");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Cras justo odio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "14 new");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Dapibus ac facilisis in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "99 read");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Morbi leo risus ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "99+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Porta ac consectetur ac ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "21");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Vestibulum at eros ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Linked Items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Cras justo odio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Dapibus ac facilisis in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Morbi leo risus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Porta ac consectetur ac");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Vestibulum at eros");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Button Items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Cras justo odio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Dapibus ac facilisis in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Morbi leo risus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Porta ac consectetur ac");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Vestibulum at eros");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Disabled Items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Cras justo odio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Dapibus ac facilisis in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Morbi leo risus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Porta ac consectetur ac");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Vestibulum at eros");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Contextual Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Dapibus ac facilisis in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Cras sit amet nibh libero");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Porta ac consectetur ac");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Vestibulum at eros");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Contextual Classes With Linked Items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Dapibus ac facilisis in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Cras sit amet nibh libero");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Porta ac consectetur ac");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Vestibulum at eros");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Colorful Items With Material Design Colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Dapibus ac facilisis in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Cras sit amet nibh libero");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Porta ac consectetur ac");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Vestibulum at eros");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Custom Content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Dapibus ac facilisis in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Cras sit amet nibh libero");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Porta ac consectetur ac");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Vestibulum at eros");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Contextual Classes With Linked Items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "h4", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "List group item heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius. Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren sadipscing mel. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h4", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "List group item heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius. Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren sadipscing mel. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h4", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "List group item heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius. Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren sadipscing mel. ");

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
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typesOfShoes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Options selected: ", _r0.selectedOptions.selected.length, " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xpc3QtZ3JvdXAvbGlzdC1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListGroupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-group',
            templateUrl: './list-group.component.html',
            styleUrls: ['./list-group.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "H46g":
    /*!*******************************************************!*\
      !*** ./src/app/ui/preloaders/preloaders.component.ts ***!
      \*******************************************************/

    /*! exports provided: PreloadersComponent */

    /***/
    function H46g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreloadersComponent", function () {
        return PreloadersComponent;
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


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var PreloadersComponent = /*#__PURE__*/function () {
        function PreloadersComponent() {
          _classCallCheck2(this, PreloadersComponent);
        }

        _createClass2(PreloadersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PreloadersComponent;
      }();

      PreloadersComponent.ɵfac = function PreloadersComponent_Factory(t) {
        return new (t || PreloadersComponent)();
      };

      PreloadersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PreloadersComponent,
        selectors: [["app-preloaders"]],
        decls: 192,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [1, "demo-preloader"], [1, "preloader", "pl-size-xl"], [1, "spinner-layer"], [1, "circle-clipper", "left"], [1, "circle"], [1, "circle-clipper", "right"], [1, "preloader", "pl-size-l"], [1, "spinner-layer", "pl-orange"], [1, "preloader"], [1, "spinner-layer", "pl-teal"], [1, "preloader", "pl-size-sm"], [1, "spinner-layer", "pl-purple"], [1, "preloader", "pl-size-xs"], [1, "spinner-layer", "pl-red-grey"], [1, "spinner-layer", "pl-red"], [1, "spinner-layer", "pl-pink"], [1, "spinner-layer", "pl-deep-purple"], [1, "spinner-layer", "pl-indigo"], [1, "spinner-layer", "pl-light-blue"], [1, "spinner-layer", "pl-cyan"], [1, "spinner-layer", "pl-green"], [1, "spinner-layer", "pl-light-green"], [1, "spinner-layer", "pl-lime"], [1, "spinner-layer", "pl-yellow"], [1, "spinner-layer", "pl-amber"], [1, "spinner-layer", "pl-deep-orange"], [1, "spinner-layer", "pl-brown"], [1, "spinner-layer", "pl-grey"], [1, "spinner-layer", "pl-black"]],
        template: function PreloadersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Preloaders");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Preloaders");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Material Preloaders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Preloaders Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Preloaders With Colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "div", 23);

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
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3ByZWxvYWRlcnMvcHJlbG9hZGVycy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreloadersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-preloaders',
            templateUrl: './preloaders.component.html',
            styleUrls: ['./preloaders.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ItKU":
    /*!***********************************************!*\
      !*** ./src/app/ui/labels/labels.component.ts ***!
      \***********************************************/

    /*! exports provided: LabelsComponent */

    /***/
    function ItKU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LabelsComponent", function () {
        return LabelsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LabelsComponent = /*#__PURE__*/function () {
        function LabelsComponent() {
          _classCallCheck2(this, LabelsComponent);
        }

        _createClass2(LabelsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LabelsComponent;
      }();

      LabelsComponent.ɵfac = function LabelsComponent_Factory(t) {
        return new (t || LabelsComponent)();
      };

      LabelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LabelsComponent,
        selectors: [["app-labels"]],
        decls: 109,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [1, "label", "label-default"], [1, "label", "label-primary"], [1, "label", "label-success"], [1, "label", "label-info"], [1, "label", "label-warning"], [1, "label", "label-danger"], [1, "m-b-20"], [1, "label", "bg-red", "m-b-10"], [1, "label", "bg-pink", "m-b-10"], [1, "label", "bg-purple", "m-b-10"], [1, "label", "bg-deep-purple", "m-b-10"], [1, "label", "bg-indigo", "m-b-10"], [1, "label", "bg-blue", "m-b-10"], [1, "label", "bg-light-blue", "m-b-10"], [1, "label", "bg-cyan", "m-b-10"], [1, "label", "bg-teal", "m-b-10"], [1, "label", "bg-green", "m-b-10"], [1, "label", "bg-light-green", "m-b-10"], [1, "label", "bg-lime", "m-b-10"], [1, "label", "bg-yellow", "m-b-10"], [1, "label", "bg-amber", "m-b-10"], [1, "label", "bg-orange", "m-b-10"], [1, "label", "bg-deep-orange", "m-b-10"], [1, "label", "bg-brown", "m-b-10"], [1, "label", "bg-grey", "m-b-10"], [1, "label", "bg-blue-grey", "m-b-10"], [1, "label", "bg-black", "m-b-10"]],
        template: function LabelsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Labels");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Labels");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Example heading ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Example heading ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Example heading ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Example heading ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Example heading ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h6", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Example heading ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Labels With Material Design Colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Red");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Pink");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Purple");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Deep Purple");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Indigo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Blue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Light Blue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Cyan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Teal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Green");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Light Green");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Lime");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Yellow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Amber");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Orange");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Deep Orange");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Brown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Grey");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Blue Grey");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Black");

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xhYmVscy9sYWJlbHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabelsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-labels',
            templateUrl: './labels.component.html',
            styleUrls: ['./labels.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "KMo+":
    /*!***************************************************************!*\
      !*** ./src/app/ui/helper-classes/helper-classes.component.ts ***!
      \***************************************************************/

    /*! exports provided: HelperClassesComponent */

    /***/
    function KMo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelperClassesComponent", function () {
        return HelperClassesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HelperClassesComponent = /*#__PURE__*/function () {
        function HelperClassesComponent() {
          _classCallCheck2(this, HelperClassesComponent);
        }

        _createClass2(HelperClassesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HelperClassesComponent;
      }();

      HelperClassesComponent.ɵfac = function HelperClassesComponent_Factory(t) {
        return new (t || HelperClassesComponent)();
      };

      HelperClassesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HelperClassesComponent,
        selectors: [["app-helper-classes"]],
        decls: 491,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [1, "col-lg-2", "col-md-2", "col-sm-6", "col-xs-6"], [1, "col-pink"], [1, "col-cyan"], [1, "col-teal"], [1, "col-orange"], [1, "col-blue-grey"], [1, "font-bold"], [1, "font-bold", "col-pink"], [1, "font-bold", "col-cyan"], [1, "font-bold", "col-teal"], [1, "font-bold", "col-orange"], [1, "font-bold", "col-blue-grey"], [1, "font-italic"], [1, "font-italic", "col-pink"], [1, "font-italic", "col-cyan"], [1, "font-italic", "col-teal"], [1, "font-italic", "col-orange"], [1, "font-italic", "col-blue-grey"], [1, "font-underline"], [1, "font-underline", "col-pink"], [1, "font-underline", "col-cyan"], [1, "font-underline", "col-teal"], [1, "font-underline", "col-orange"], [1, "font-underline", "col-blue-grey"], [1, "font-line-through"], [1, "font-line-through", "col-pink"], [1, "font-line-through", "col-cyan"], [1, "font-line-through", "col-teal"], [1, "font-line-through", "col-orange"], [1, "font-line-through", "col-blue-grey"], [1, "font-overline"], [1, "font-overline", "col-pink"], [1, "font-overline", "col-cyan"], [1, "font-overline", "col-teal"], [1, "font-overline", "col-orange"], [1, "font-overline", "col-blue-grey"], [1, "col-md-2"], [1, "font-6"], [1, "font-10"], [1, "font-12"], [1, "font-15"], [1, "font-20"], [1, "font-24"], [1, "font-32"], [1, "font-40"], [1, "font-42"], [1, "font-45"], [1, "font-48"], [1, "font-50"], [1, "col-md-3"], [1, "align-left"], [1, "align-center"], [1, "align-right"], [1, "align-justify"], [1, "col-red", "font-bold"], [1, "m-t-25"]],
        template: function HelperClassesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Helper Classes");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Helper");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Text Styles ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "You can use classes which names are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ".font-bold, .font-italic, .font-underline, .font-line-through, .font-overline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Normal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Default text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Text pink color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Text cyan color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Text teal color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Text orange color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Text blue grey color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Bold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Default text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Text pink color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Text cyan color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Text teal color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Text orange color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Text blue grey color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Italic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Default text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Text pink color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Text cyan color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Text teal color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Text orange color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Text blue grey color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Underline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Default text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Text pink color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Text cyan color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Text teal color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Text orange color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Text blue grey color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Line Through");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Default text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Text pink color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Text cyan color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Text teal color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Text orange color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Text blue grey color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Overline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Default text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Text pink color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Text cyan color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Text teal color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Text orange color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Text blue grey color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Font Sizes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "You can use the classes which samples are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, ".font-6, .font-10, .font-24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " The number of can use between 6 - 50px which are near the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, ".font-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "font-6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "font-10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "font-12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "font-15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "font-20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "font-24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "font-32");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "font-40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "font-42");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "font-45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "font-48");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "font-50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Text Aligns ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "You can use classes which names are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, ".align-left, .align-center, .align-right, .align-justify");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Align Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Align Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Align Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Align Justify");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Margin And Spacing Space ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "You can use classes which names are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, ".m-t-10, .m-t--10, .m-r-5, .p-t-10, .p-b-5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Margins");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "argin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "T");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "op ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, ".m-t-10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "argin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "T");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "op ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, ".m-t-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "argin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "T");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "op ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "-10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, ".m-t--10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "argin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "eft ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "35");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, ".m-l-35");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "argin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "eft ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, ".m-l-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "argin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "eft ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "-35");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, ".m-l--35");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "argin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "ottom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, ".m-b-15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "argin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "ottom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, ".m-b-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "argin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "ottom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "-20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, ".m-b--20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "argin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "R");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "ight ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, ".m-r-30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "argin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "R");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "ight ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, ".m-r-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "argin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "R");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "ight ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "-30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, ".m-r--30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "ALL M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "argin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, ".margin-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "p", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Paddings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "P");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "adding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "T");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "op ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, ".p-t-10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "P");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "adding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "T");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "op ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, ".p-t-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "P");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "adding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "eft ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "35");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, ".p-l-35");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "P");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "adding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "eft ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, ".p-l-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "P");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "adding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "ottom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, ".p-b-15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "P");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "adding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "ottom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, ".p-b-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "P");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "adding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "R");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "ight ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, ".p-r-30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "P");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "adding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "R");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "ight ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, ".p-r-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "ALL P");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "adding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "px \u2192 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, ".padding-0");

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2hlbHBlci1jbGFzc2VzL2hlbHBlci1jbGFzc2VzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelperClassesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-helper-classes',
            templateUrl: './helper-classes.component.html',
            styleUrls: ['./helper-classes.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "MMyP":
    /*!****************************************************!*\
      !*** ./src/app/ui/modal/simpleDialog.component.ts ***!
      \****************************************************/

    /*! exports provided: SimpleDialogComponent */

    /***/
    function MMyP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimpleDialogComponent", function () {
        return SimpleDialogComponent;
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var SimpleDialogComponent = /*#__PURE__*/function () {
        function SimpleDialogComponent(dialogRef) {
          _classCallCheck2(this, SimpleDialogComponent);

          this.dialogRef = dialogRef;
        }

        _createClass2(SimpleDialogComponent, [{
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return SimpleDialogComponent;
      }();

      SimpleDialogComponent.ɵfac = function SimpleDialogComponent_Factory(t) {
        return new (t || SimpleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      SimpleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SimpleDialogComponent,
        selectors: [["ng-component"]],
        decls: 8,
        vars: 0,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"]],
        template: function SimpleDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello There");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This Is a Simple Dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleDialogComponent_Template_button_click_6_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            template: "\n    <h1 mat-dialog-title>Hello There</h1>\n    <div mat-dialog-content>\n      <p>This Is a Simple Dialog</p>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"close()\">Close</button>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MWcE":
    /*!***********************************************************!*\
      !*** ./src/app/ui/media-object/media-object.component.ts ***!
      \***********************************************************/

    /*! exports provided: MediaObjectComponent */

    /***/
    function MWcE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaObjectComponent", function () {
        return MediaObjectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var MediaObjectComponent = /*#__PURE__*/function () {
        function MediaObjectComponent() {
          _classCallCheck2(this, MediaObjectComponent);
        }

        _createClass2(MediaObjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MediaObjectComponent;
      }();

      MediaObjectComponent.ɵfac = function MediaObjectComponent_Factory(t) {
        return new (t || MediaObjectComponent)();
      };

      MediaObjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MediaObjectComponent,
        selectors: [["app-media-object"]],
        decls: 109,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [1, "media"], [1, "media-left"], ["src", "assets/images/media.png", "alt", "", "width", "64", "height", "64", 1, "media-object"], [1, "media-body"], [1, "media-heading"], ["href", "#"], [1, "media-right"], ["data-example-id", "media-alignment", 1, "bs-example"], [1, "media-left", "media-middle"], [1, "media-left", "media-bottom"]],
        template: function MediaObjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Media Object");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Media Object");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Default Media");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Media heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Media heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Nested media heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Media heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Media heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Media Alignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Top aligned media");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Middle aligned media");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Bottom aligned media");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ");

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL21lZGlhLW9iamVjdC9tZWRpYS1vYmplY3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaObjectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-media-object',
            templateUrl: './media-object.component.html',
            styleUrls: ['./media-object.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "PSD3":
    /*!**********************************************************!*\
      !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function PSD3(module, exports, __webpack_require__) {
      /*!
      * sweetalert2 v10.13.0
      * Released under the MIT License.
      */
      (function (global, factory) {
        true ? module.exports = factory() : undefined;
      })(this, function () {
        'use strict';

        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _extends() {
          _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];

              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }

            return target;
          };

          return _extends.apply(this, arguments);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;

          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }

        function _construct(Parent, args, Class) {
          if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct;
          } else {
            _construct = function _construct(Parent, args, Class) {
              var a = [null];
              a.push.apply(a, args);
              var Constructor = Function.bind.apply(Parent, a);
              var instance = new Constructor();
              if (Class) _setPrototypeOf(instance, Class.prototype);
              return instance;
            };
          }

          return _construct.apply(null, arguments);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();

          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
                result;

            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;

              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }

            return _possibleConstructorReturn(this, result);
          };
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }

          return object;
        }

        function _get(target, property, receiver) {
          if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);

              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);

              if (desc.get) {
                return desc.get.call(receiver);
              }

              return desc.value;
            };
          }

          return _get(target, property, receiver || target);
        }

        var consolePrefix = 'SweetAlert2:';
        /**
         * Filter the unique values into a new array
         * @param arr
         */

        var uniqueArray = function uniqueArray(arr) {
          var result = [];

          for (var i = 0; i < arr.length; i++) {
            if (result.indexOf(arr[i]) === -1) {
              result.push(arr[i]);
            }
          }

          return result;
        };
        /**
         * Capitalize the first letter of a string
         * @param str
         */


        var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        };
        /**
         * Returns the array of object values (Object.values isn't supported in IE11)
         * @param obj
         */


        var objectValues = function objectValues(obj) {
          return Object.keys(obj).map(function (key) {
            return obj[key];
          });
        };
        /**
         * Convert NodeList to Array
         * @param nodeList
         */


        var toArray = function toArray(nodeList) {
          return Array.prototype.slice.call(nodeList);
        };
        /**
         * Standardise console warnings
         * @param message
         */


        var warn = function warn(message) {
          console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
        };
        /**
         * Standardise console errors
         * @param message
         */


        var error = function error(message) {
          console.error("".concat(consolePrefix, " ").concat(message));
        };
        /**
         * Private global state for `warnOnce`
         * @type {Array}
         * @private
         */


        var previousWarnOnceMessages = [];
        /**
         * Show a console warning, but only if it hasn't already been shown
         * @param message
         */

        var warnOnce = function warnOnce(message) {
          if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
            previousWarnOnceMessages.push(message);
            warn(message);
          }
        };
        /**
         * Show a one-time console warning about deprecated params/methods
         */


        var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
          warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
        };
        /**
         * If `arg` is a function, call it (with no arguments or context) and return the result.
         * Otherwise, just pass the value through
         * @param arg
         */


        var callIfFunction = function callIfFunction(arg) {
          return typeof arg === 'function' ? arg() : arg;
        };

        var hasToPromiseFn = function hasToPromiseFn(arg) {
          return arg && typeof arg.toPromise === 'function';
        };

        var asPromise = function asPromise(arg) {
          return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
        };

        var isPromise = function isPromise(arg) {
          return arg && Promise.resolve(arg) === arg;
        };

        var DismissReason = Object.freeze({
          cancel: 'cancel',
          backdrop: 'backdrop',
          close: 'close',
          esc: 'esc',
          timer: 'timer'
        });

        var isJqueryElement = function isJqueryElement(elem) {
          return _typeof(elem) === 'object' && elem.jquery;
        };

        var isElement = function isElement(elem) {
          return elem instanceof Element || isJqueryElement(elem);
        };

        var argsToParams = function argsToParams(args) {
          var params = {};

          if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
            _extends(params, args[0]);
          } else {
            ['title', 'html', 'icon'].forEach(function (name, index) {
              var arg = args[index];

              if (typeof arg === 'string' || isElement(arg)) {
                params[name] = arg;
              } else if (arg !== undefined) {
                error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
              }
            });
          }

          return params;
        };

        var swalPrefix = 'swal2-';

        var prefix = function prefix(items) {
          var result = {};

          for (var i in items) {
            result[items[i]] = swalPrefix + items[i];
          }

          return result;
        };

        var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
        var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

        var getContainer = function getContainer() {
          return document.body.querySelector(".".concat(swalClasses.container));
        };

        var elementBySelector = function elementBySelector(selectorString) {
          var container = getContainer();
          return container ? container.querySelector(selectorString) : null;
        };

        var elementByClass = function elementByClass(className) {
          return elementBySelector(".".concat(className));
        };

        var getPopup = function getPopup() {
          return elementByClass(swalClasses.popup);
        };

        var getIcons = function getIcons() {
          var popup = getPopup();
          return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
        };

        var getIcon = function getIcon() {
          var visibleIcon = getIcons().filter(function (icon) {
            return isVisible(icon);
          });
          return visibleIcon.length ? visibleIcon[0] : null;
        };

        var getTitle = function getTitle() {
          return elementByClass(swalClasses.title);
        };

        var getContent = function getContent() {
          return elementByClass(swalClasses.content);
        };

        var getHtmlContainer = function getHtmlContainer() {
          return elementByClass(swalClasses['html-container']);
        };

        var getImage = function getImage() {
          return elementByClass(swalClasses.image);
        };

        var getProgressSteps = function getProgressSteps() {
          return elementByClass(swalClasses['progress-steps']);
        };

        var getValidationMessage = function getValidationMessage() {
          return elementByClass(swalClasses['validation-message']);
        };

        var getConfirmButton = function getConfirmButton() {
          return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
        };

        var getDenyButton = function getDenyButton() {
          return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
        };

        var getInputLabel = function getInputLabel() {
          return elementByClass(swalClasses['input-label']);
        };

        var getLoader = function getLoader() {
          return elementBySelector(".".concat(swalClasses.loader));
        };

        var getCancelButton = function getCancelButton() {
          return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
        };

        var getActions = function getActions() {
          return elementByClass(swalClasses.actions);
        };

        var getHeader = function getHeader() {
          return elementByClass(swalClasses.header);
        };

        var getFooter = function getFooter() {
          return elementByClass(swalClasses.footer);
        };

        var getTimerProgressBar = function getTimerProgressBar() {
          return elementByClass(swalClasses['timer-progress-bar']);
        };

        var getCloseButton = function getCloseButton() {
          return elementByClass(swalClasses.close);
        }; // https://github.com/jkup/focusable/blob/master/index.js


        var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";

        var getFocusableElements = function getFocusableElements() {
          var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
          .sort(function (a, b) {
            a = parseInt(a.getAttribute('tabindex'));
            b = parseInt(b.getAttribute('tabindex'));

            if (a > b) {
              return 1;
            } else if (a < b) {
              return -1;
            }

            return 0;
          });
          var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
            return el.getAttribute('tabindex') !== '-1';
          });
          return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
            return isVisible(el);
          });
        };

        var isModal = function isModal() {
          return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
        };

        var isToast = function isToast() {
          return document.body.classList.contains(swalClasses['toast-shown']);
        };

        var isLoading = function isLoading() {
          return getPopup().hasAttribute('data-loading');
        };

        var states = {
          previousBodyPadding: null
        };

        var setInnerHtml = function setInnerHtml(elem, html) {
          // #1926
          elem.textContent = '';

          if (html) {
            var parser = new DOMParser();
            var parsed = parser.parseFromString(html, "text/html");
            toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
              elem.appendChild(child);
            });
            toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
              elem.appendChild(child);
            });
          }
        };

        var hasClass = function hasClass(elem, className) {
          if (!className) {
            return false;
          }

          var classList = className.split(/\s+/);

          for (var i = 0; i < classList.length; i++) {
            if (!elem.classList.contains(classList[i])) {
              return false;
            }
          }

          return true;
        };

        var removeCustomClasses = function removeCustomClasses(elem, params) {
          toArray(elem.classList).forEach(function (className) {
            if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
              elem.classList.remove(className);
            }
          });
        };

        var applyCustomClass = function applyCustomClass(elem, params, className) {
          removeCustomClasses(elem, params);

          if (params.customClass && params.customClass[className]) {
            if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
              return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
            }

            addClass(elem, params.customClass[className]);
          }
        };

        function getInput(content, inputType) {
          if (!inputType) {
            return null;
          }

          switch (inputType) {
            case 'select':
            case 'textarea':
            case 'file':
              return getChildByClass(content, swalClasses[inputType]);

            case 'checkbox':
              return content.querySelector(".".concat(swalClasses.checkbox, " input"));

            case 'radio':
              return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

            case 'range':
              return content.querySelector(".".concat(swalClasses.range, " input"));

            default:
              return getChildByClass(content, swalClasses.input);
          }
        }

        var focusInput = function focusInput(input) {
          input.focus(); // place cursor at end of text in text input

          if (input.type !== 'file') {
            // http://stackoverflow.com/a/2345915
            var val = input.value;
            input.value = '';
            input.value = val;
          }
        };

        var toggleClass = function toggleClass(target, classList, condition) {
          if (!target || !classList) {
            return;
          }

          if (typeof classList === 'string') {
            classList = classList.split(/\s+/).filter(Boolean);
          }

          classList.forEach(function (className) {
            if (target.forEach) {
              target.forEach(function (elem) {
                condition ? elem.classList.add(className) : elem.classList.remove(className);
              });
            } else {
              condition ? target.classList.add(className) : target.classList.remove(className);
            }
          });
        };

        var addClass = function addClass(target, classList) {
          toggleClass(target, classList, true);
        };

        var removeClass = function removeClass(target, classList) {
          toggleClass(target, classList, false);
        };

        var getChildByClass = function getChildByClass(elem, className) {
          for (var i = 0; i < elem.childNodes.length; i++) {
            if (hasClass(elem.childNodes[i], className)) {
              return elem.childNodes[i];
            }
          }
        };

        var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
          if (value === "".concat(parseInt(value))) {
            value = parseInt(value);
          }

          if (value || parseInt(value) === 0) {
            elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
          } else {
            elem.style.removeProperty(property);
          }
        };

        var show = function show(elem) {
          var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
          elem.style.display = display;
        };

        var hide = function hide(elem) {
          elem.style.display = 'none';
        };

        var setStyle = function setStyle(parent, selector, property, value) {
          var el = parent.querySelector(selector);

          if (el) {
            el.style[property] = value;
          }
        };

        var toggle = function toggle(elem, condition, display) {
          condition ? show(elem, display) : hide(elem);
        }; // borrowed from jquery $(elem).is(':visible') implementation


        var isVisible = function isVisible(elem) {
          return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
        };

        var allButtonsAreHidden = function allButtonsAreHidden() {
          return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
        };

        var isScrollable = function isScrollable(elem) {
          return !!(elem.scrollHeight > elem.clientHeight);
        }; // borrowed from https://stackoverflow.com/a/46352119


        var hasCssAnimation = function hasCssAnimation(elem) {
          var style = window.getComputedStyle(elem);
          var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
          var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
          return animDuration > 0 || transDuration > 0;
        };

        var contains = function contains(haystack, needle) {
          if (typeof haystack.contains === 'function') {
            return haystack.contains(needle);
          }
        };

        var animateTimerProgressBar = function animateTimerProgressBar(timer) {
          var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var timerProgressBar = getTimerProgressBar();

          if (isVisible(timerProgressBar)) {
            if (reset) {
              timerProgressBar.style.transition = 'none';
              timerProgressBar.style.width = '100%';
            }

            setTimeout(function () {
              timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
              timerProgressBar.style.width = '0%';
            }, 10);
          }
        };

        var stopTimerProgressBar = function stopTimerProgressBar() {
          var timerProgressBar = getTimerProgressBar();
          var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          timerProgressBar.style.removeProperty('transition');
          timerProgressBar.style.width = '100%';
          var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
          timerProgressBar.style.removeProperty('transition');
          timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
        }; // Detect Node env


        var isNodeEnv = function isNodeEnv() {
          return typeof window === 'undefined' || typeof document === 'undefined';
        };

        var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

        var resetOldContainer = function resetOldContainer() {
          var oldContainer = getContainer();

          if (!oldContainer) {
            return false;
          }

          oldContainer.parentNode.removeChild(oldContainer);
          removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
          return true;
        };

        var oldInputVal; // IE11 workaround, see #1109 for details

        var resetValidationMessage = function resetValidationMessage(e) {
          if (Swal.isVisible() && oldInputVal !== e.target.value) {
            Swal.resetValidationMessage();
          }

          oldInputVal = e.target.value;
        };

        var addInputChangeListeners = function addInputChangeListeners() {
          var content = getContent();
          var input = getChildByClass(content, swalClasses.input);
          var file = getChildByClass(content, swalClasses.file);
          var range = content.querySelector(".".concat(swalClasses.range, " input"));
          var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
          var select = getChildByClass(content, swalClasses.select);
          var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
          var textarea = getChildByClass(content, swalClasses.textarea);
          input.oninput = resetValidationMessage;
          file.onchange = resetValidationMessage;
          select.onchange = resetValidationMessage;
          checkbox.onchange = resetValidationMessage;
          textarea.oninput = resetValidationMessage;

          range.oninput = function (e) {
            resetValidationMessage(e);
            rangeOutput.value = range.value;
          };

          range.onchange = function (e) {
            resetValidationMessage(e);
            range.nextSibling.value = range.value;
          };
        };

        var getTarget = function getTarget(target) {
          return typeof target === 'string' ? document.querySelector(target) : target;
        };

        var setupAccessibility = function setupAccessibility(params) {
          var popup = getPopup();
          popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
          popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

          if (!params.toast) {
            popup.setAttribute('aria-modal', 'true');
          }
        };

        var setupRTL = function setupRTL(targetElement) {
          if (window.getComputedStyle(targetElement).direction === 'rtl') {
            addClass(getContainer(), swalClasses.rtl);
          }
        };
        /*
         * Add modal + backdrop to DOM
         */


        var init = function init(params) {
          // Clean up the old popup container if it exists
          var oldContainerExisted = resetOldContainer();
          /* istanbul ignore if */

          if (isNodeEnv()) {
            error('SweetAlert2 requires document to initialize');
            return;
          }

          var container = document.createElement('div');
          container.className = swalClasses.container;

          if (oldContainerExisted) {
            addClass(container, swalClasses['no-transition']);
          }

          setInnerHtml(container, sweetHTML);
          var targetElement = getTarget(params.target);
          targetElement.appendChild(container);
          setupAccessibility(params);
          setupRTL(targetElement);
          addInputChangeListeners();
        };

        var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
          // DOM element
          if (param instanceof HTMLElement) {
            target.appendChild(param); // Object
          } else if (_typeof(param) === 'object') {
            handleObject(param, target); // Plain string
          } else if (param) {
            setInnerHtml(target, param);
          }
        };

        var handleObject = function handleObject(param, target) {
          // JQuery element(s)
          if (param.jquery) {
            handleJqueryElem(target, param); // For other objects use their string representation
          } else {
            setInnerHtml(target, param.toString());
          }
        };

        var handleJqueryElem = function handleJqueryElem(target, elem) {
          target.textContent = '';

          if (0 in elem) {
            for (var i = 0; (i in elem); i++) {
              target.appendChild(elem[i].cloneNode(true));
            }
          } else {
            target.appendChild(elem.cloneNode(true));
          }
        };

        var animationEndEvent = function () {
          // Prevent run in Node env

          /* istanbul ignore if */
          if (isNodeEnv()) {
            return false;
          }

          var testEl = document.createElement('div');
          var transEndEventNames = {
            WebkitAnimation: 'webkitAnimationEnd',
            OAnimation: 'oAnimationEnd oanimationend',
            animation: 'animationend'
          };

          for (var i in transEndEventNames) {
            if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
              return transEndEventNames[i];
            }
          }

          return false;
        }(); // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js


        var measureScrollbar = function measureScrollbar() {
          var scrollDiv = document.createElement('div');
          scrollDiv.className = swalClasses['scrollbar-measure'];
          document.body.appendChild(scrollDiv);
          var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        };

        var renderActions = function renderActions(instance, params) {
          var actions = getActions();
          var loader = getLoader();
          var confirmButton = getConfirmButton();
          var denyButton = getDenyButton();
          var cancelButton = getCancelButton(); // Actions (buttons) wrapper

          if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
            hide(actions);
          } // Custom class


          applyCustomClass(actions, params, 'actions'); // Render buttons

          renderButton(confirmButton, 'confirm', params);
          renderButton(denyButton, 'deny', params);
          renderButton(cancelButton, 'cancel', params);
          handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

          if (params.reverseButtons) {
            actions.insertBefore(cancelButton, loader);
            actions.insertBefore(denyButton, loader);
            actions.insertBefore(confirmButton, loader);
          } // Loader


          setInnerHtml(loader, params.loaderHtml);
          applyCustomClass(loader, params, 'loader');
        };

        function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
          if (!params.buttonsStyling) {
            return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
          }

          addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

          if (params.confirmButtonColor) {
            confirmButton.style.backgroundColor = params.confirmButtonColor;
          }

          if (params.denyButtonColor) {
            denyButton.style.backgroundColor = params.denyButtonColor;
          }

          if (params.cancelButtonColor) {
            cancelButton.style.backgroundColor = params.cancelButtonColor;
          }
        }

        function renderButton(button, buttonType, params) {
          toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
          setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

          button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
          // Add buttons custom classes

          button.className = swalClasses[buttonType];
          applyCustomClass(button, params, "".concat(buttonType, "Button"));
          addClass(button, params["".concat(buttonType, "ButtonClass")]);
        }

        function handleBackdropParam(container, backdrop) {
          if (typeof backdrop === 'string') {
            container.style.background = backdrop;
          } else if (!backdrop) {
            addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
          }
        }

        function handlePositionParam(container, position) {
          if (position in swalClasses) {
            addClass(container, swalClasses[position]);
          } else {
            warn('The "position" parameter is not valid, defaulting to "center"');
            addClass(container, swalClasses.center);
          }
        }

        function handleGrowParam(container, grow) {
          if (grow && typeof grow === 'string') {
            var growClass = "grow-".concat(grow);

            if (growClass in swalClasses) {
              addClass(container, swalClasses[growClass]);
            }
          }
        }

        var renderContainer = function renderContainer(instance, params) {
          var container = getContainer();

          if (!container) {
            return;
          }

          handleBackdropParam(container, params.backdrop);

          if (!params.backdrop && params.allowOutsideClick) {
            warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
          }

          handlePositionParam(container, params.position);
          handleGrowParam(container, params.grow); // Custom class

          applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

          var queueStep = document.body.getAttribute('data-swal2-queue-step');

          if (queueStep) {
            container.setAttribute('data-queue-step', queueStep);
            document.body.removeAttribute('data-swal2-queue-step');
          }
        };
        /**
         * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
         * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
         * This is the approach that Babel will probably take to implement private methods/fields
         *   https://github.com/tc39/proposal-private-methods
         *   https://github.com/babel/babel/pull/7555
         * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
         *   then we can use that language feature.
         */


        var privateProps = {
          promise: new WeakMap(),
          innerParams: new WeakMap(),
          domCache: new WeakMap()
        };
        var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

        var renderInput = function renderInput(instance, params) {
          var content = getContent();
          var innerParams = privateProps.innerParams.get(instance);
          var rerender = !innerParams || params.input !== innerParams.input;
          inputTypes.forEach(function (inputType) {
            var inputClass = swalClasses[inputType];
            var inputContainer = getChildByClass(content, inputClass); // set attributes

            setAttributes(inputType, params.inputAttributes); // set class

            inputContainer.className = inputClass;

            if (rerender) {
              hide(inputContainer);
            }
          });

          if (params.input) {
            if (rerender) {
              showInput(params);
            } // set custom class


            setCustomClass(params);
          }
        };

        var showInput = function showInput(params) {
          if (!renderInputType[params.input]) {
            return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
          }

          var inputContainer = getInputContainer(params.input);
          var input = renderInputType[params.input](inputContainer, params);
          show(input); // input autofocus

          setTimeout(function () {
            focusInput(input);
          });
        };

        var removeAttributes = function removeAttributes(input) {
          for (var i = 0; i < input.attributes.length; i++) {
            var attrName = input.attributes[i].name;

            if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
              input.removeAttribute(attrName);
            }
          }
        };

        var setAttributes = function setAttributes(inputType, inputAttributes) {
          var input = getInput(getContent(), inputType);

          if (!input) {
            return;
          }

          removeAttributes(input);

          for (var attr in inputAttributes) {
            // Do not set a placeholder for <input type="range">
            // it'll crash Edge, #1298
            if (inputType === 'range' && attr === 'placeholder') {
              continue;
            }

            input.setAttribute(attr, inputAttributes[attr]);
          }
        };

        var setCustomClass = function setCustomClass(params) {
          var inputContainer = getInputContainer(params.input);

          if (params.customClass) {
            addClass(inputContainer, params.customClass.input);
          }
        };

        var setInputPlaceholder = function setInputPlaceholder(input, params) {
          if (!input.placeholder || params.inputPlaceholder) {
            input.placeholder = params.inputPlaceholder;
          }
        };

        var setInputLabel = function setInputLabel(input, prependTo, params) {
          if (params.inputLabel) {
            input.id = swalClasses.input;
            var label = document.createElement('label');
            var labelClass = swalClasses['input-label'];
            label.setAttribute('for', input.id);
            label.className = labelClass;
            addClass(label, params.customClass.inputLabel);
            label.innerText = params.inputLabel;
            prependTo.insertAdjacentElement('beforebegin', label);
          }
        };

        var getInputContainer = function getInputContainer(inputType) {
          var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
          return getChildByClass(getContent(), inputClass);
        };

        var renderInputType = {};

        renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
          if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
            input.value = params.inputValue;
          } else if (!isPromise(params.inputValue)) {
            warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
          }

          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          input.type = params.input;
          return input;
        };

        renderInputType.file = function (input, params) {
          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          return input;
        };

        renderInputType.range = function (range, params) {
          var rangeInput = range.querySelector('input');
          var rangeOutput = range.querySelector('output');
          rangeInput.value = params.inputValue;
          rangeInput.type = params.input;
          rangeOutput.value = params.inputValue;
          setInputLabel(rangeInput, range, params);
          return range;
        };

        renderInputType.select = function (select, params) {
          select.textContent = '';

          if (params.inputPlaceholder) {
            var placeholder = document.createElement('option');
            setInnerHtml(placeholder, params.inputPlaceholder);
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }

          setInputLabel(select, select, params);
          return select;
        };

        renderInputType.radio = function (radio) {
          radio.textContent = '';
          return radio;
        };

        renderInputType.checkbox = function (checkboxContainer, params) {
          var checkbox = getInput(getContent(), 'checkbox');
          checkbox.value = 1;
          checkbox.id = swalClasses.checkbox;
          checkbox.checked = Boolean(params.inputValue);
          var label = checkboxContainer.querySelector('span');
          setInnerHtml(label, params.inputPlaceholder);
          return checkboxContainer;
        };

        renderInputType.textarea = function (textarea, params) {
          textarea.value = params.inputValue;
          setInputPlaceholder(textarea, params);
          setInputLabel(textarea, textarea, params);

          var getPadding = function getPadding(el) {
            return parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight);
          };

          if ('MutationObserver' in window) {
            // #1699
            var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

            var outputsize = function outputsize() {
              var contentWidth = textarea.offsetWidth + getPadding(getPopup()) + getPadding(getContent());

              if (contentWidth > initialPopupWidth) {
                getPopup().style.width = "".concat(contentWidth, "px");
              } else {
                getPopup().style.width = null;
              }
            };

            new MutationObserver(outputsize).observe(textarea, {
              attributes: true,
              attributeFilter: ['style']
            });
          }

          return textarea;
        };

        var renderContent = function renderContent(instance, params) {
          var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

          if (params.html) {
            parseHtmlToContainer(params.html, content);
            show(content, 'block'); // Content as plain text
          } else if (params.text) {
            content.textContent = params.text;
            show(content, 'block'); // No content
          } else {
            hide(content);
          }

          renderInput(instance, params); // Custom class

          applyCustomClass(getContent(), params, 'content');
        };

        var renderFooter = function renderFooter(instance, params) {
          var footer = getFooter();
          toggle(footer, params.footer);

          if (params.footer) {
            parseHtmlToContainer(params.footer, footer);
          } // Custom class


          applyCustomClass(footer, params, 'footer');
        };

        var renderCloseButton = function renderCloseButton(instance, params) {
          var closeButton = getCloseButton();
          setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

          applyCustomClass(closeButton, params, 'closeButton');
          toggle(closeButton, params.showCloseButton);
          closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
        };

        var renderIcon = function renderIcon(instance, params) {
          var innerParams = privateProps.innerParams.get(instance); // if the given icon already rendered, apply the styling without re-rendering the icon

          if (innerParams && params.icon === innerParams.icon && getIcon()) {
            applyStyles(getIcon(), params);
            return;
          }

          hideAllIcons();

          if (!params.icon) {
            return;
          }

          if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
            var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
            show(icon); // Custom or default content

            setContent(icon, params);
            applyStyles(icon, params); // Animate icon

            addClass(icon, params.showClass.icon);
          } else {
            error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
          }
        };

        var hideAllIcons = function hideAllIcons() {
          var icons = getIcons();

          for (var i = 0; i < icons.length; i++) {
            hide(icons[i]);
          }
        };

        var applyStyles = function applyStyles(icon, params) {
          // Icon color
          setColor(icon, params); // Success icon background color

          adjustSuccessIconBackgoundColor(); // Custom class

          applyCustomClass(icon, params, 'icon');
        }; // Adjust success icon background color to match the popup background color


        var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
          var popup = getPopup();
          var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
          var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

          for (var i = 0; i < successIconParts.length; i++) {
            successIconParts[i].style.backgroundColor = popupBackgroundColor;
          }
        };

        var setContent = function setContent(icon, params) {
          icon.textContent = '';

          if (params.iconHtml) {
            setInnerHtml(icon, iconContent(params.iconHtml));
          } else if (params.icon === 'success') {
            setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
          } else if (params.icon === 'error') {
            setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
          } else {
            var defaultIconHtml = {
              question: '?',
              warning: '!',
              info: 'i'
            };
            setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
          }
        };

        var setColor = function setColor(icon, params) {
          if (!params.iconColor) {
            return;
          }

          icon.style.color = params.iconColor;
          icon.style.borderColor = params.iconColor;

          for (var _i = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i < _arr.length; _i++) {
            var sel = _arr[_i];
            setStyle(icon, sel, 'backgroundColor', params.iconColor);
          }

          setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
        };

        var iconContent = function iconContent(content) {
          return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
        };

        var renderImage = function renderImage(instance, params) {
          var image = getImage();

          if (!params.imageUrl) {
            return hide(image);
          }

          show(image, ''); // Src, alt

          image.setAttribute('src', params.imageUrl);
          image.setAttribute('alt', params.imageAlt); // Width, height

          applyNumericalStyle(image, 'width', params.imageWidth);
          applyNumericalStyle(image, 'height', params.imageHeight); // Class

          image.className = swalClasses.image;
          applyCustomClass(image, params, 'image');
        };

        var currentSteps = [];
        /*
         * Global function for chaining sweetAlert popups
         */

        var queue = function queue(steps) {
          var Swal = this;
          currentSteps = steps;

          var resetAndResolve = function resetAndResolve(resolve, value) {
            currentSteps = [];
            resolve(value);
          };

          var queueResult = [];
          return new Promise(function (resolve) {
            (function step(i, callback) {
              if (i < currentSteps.length) {
                document.body.setAttribute('data-swal2-queue-step', i);
                Swal.fire(currentSteps[i]).then(function (result) {
                  if (typeof result.value !== 'undefined') {
                    queueResult.push(result.value);
                    step(i + 1, callback);
                  } else {
                    resetAndResolve(resolve, {
                      dismiss: result.dismiss
                    });
                  }
                });
              } else {
                resetAndResolve(resolve, {
                  value: queueResult
                });
              }
            })(0);
          });
        };
        /*
         * Global function for getting the index of current popup in queue
         */


        var getQueueStep = function getQueueStep() {
          return getContainer() && getContainer().getAttribute('data-queue-step');
        };
        /*
         * Global function for inserting a popup to the queue
         */


        var insertQueueStep = function insertQueueStep(step, index) {
          if (index && index < currentSteps.length) {
            return currentSteps.splice(index, 0, step);
          }

          return currentSteps.push(step);
        };
        /*
         * Global function for deleting a popup from the queue
         */


        var deleteQueueStep = function deleteQueueStep(index) {
          if (typeof currentSteps[index] !== 'undefined') {
            currentSteps.splice(index, 1);
          }
        };

        var createStepElement = function createStepElement(step) {
          var stepEl = document.createElement('li');
          addClass(stepEl, swalClasses['progress-step']);
          setInnerHtml(stepEl, step);
          return stepEl;
        };

        var createLineElement = function createLineElement(params) {
          var lineEl = document.createElement('li');
          addClass(lineEl, swalClasses['progress-step-line']);

          if (params.progressStepsDistance) {
            lineEl.style.width = params.progressStepsDistance;
          }

          return lineEl;
        };

        var renderProgressSteps = function renderProgressSteps(instance, params) {
          var progressStepsContainer = getProgressSteps();

          if (!params.progressSteps || params.progressSteps.length === 0) {
            return hide(progressStepsContainer);
          }

          show(progressStepsContainer);
          progressStepsContainer.textContent = '';
          var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

          if (currentProgressStep >= params.progressSteps.length) {
            warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
          }

          params.progressSteps.forEach(function (step, index) {
            var stepEl = createStepElement(step);
            progressStepsContainer.appendChild(stepEl);

            if (index === currentProgressStep) {
              addClass(stepEl, swalClasses['active-progress-step']);
            }

            if (index !== params.progressSteps.length - 1) {
              var lineEl = createLineElement(params);
              progressStepsContainer.appendChild(lineEl);
            }
          });
        };

        var renderTitle = function renderTitle(instance, params) {
          var title = getTitle();
          toggle(title, params.title || params.titleText);

          if (params.title) {
            parseHtmlToContainer(params.title, title);
          }

          if (params.titleText) {
            title.innerText = params.titleText;
          } // Custom class


          applyCustomClass(title, params, 'title');
        };

        var renderHeader = function renderHeader(instance, params) {
          var header = getHeader(); // Custom class

          applyCustomClass(header, params, 'header'); // Progress steps

          renderProgressSteps(instance, params); // Icon

          renderIcon(instance, params); // Image

          renderImage(instance, params); // Title

          renderTitle(instance, params); // Close button

          renderCloseButton(instance, params);
        };

        var renderPopup = function renderPopup(instance, params) {
          var popup = getPopup(); // Width

          applyNumericalStyle(popup, 'width', params.width); // Padding

          applyNumericalStyle(popup, 'padding', params.padding); // Background

          if (params.background) {
            popup.style.background = params.background;
          } // Classes


          addClasses(popup, params);
        };

        var addClasses = function addClasses(popup, params) {
          // Default Class + showClass when updating Swal.update({})
          popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

          if (params.toast) {
            addClass([document.documentElement, document.body], swalClasses['toast-shown']);
            addClass(popup, swalClasses.toast);
          } else {
            addClass(popup, swalClasses.modal);
          } // Custom class


          applyCustomClass(popup, params, 'popup');

          if (typeof params.customClass === 'string') {
            addClass(popup, params.customClass);
          } // Icon class (#1842)


          if (params.icon) {
            addClass(popup, swalClasses["icon-".concat(params.icon)]);
          }
        };

        var render = function render(instance, params) {
          renderPopup(instance, params);
          renderContainer(instance, params);
          renderHeader(instance, params);
          renderContent(instance, params);
          renderActions(instance, params);
          renderFooter(instance, params);

          if (typeof params.didRender === 'function') {
            params.didRender(getPopup());
          } else if (typeof params.onRender === 'function') {
            params.onRender(getPopup()); // @deprecated
          }
        };
        /*
         * Global function to determine if SweetAlert2 popup is shown
         */


        var isVisible$1 = function isVisible$$1() {
          return isVisible(getPopup());
        };
        /*
         * Global function to click 'Confirm' button
         */


        var clickConfirm = function clickConfirm() {
          return getConfirmButton() && getConfirmButton().click();
        };
        /*
         * Global function to click 'Deny' button
         */


        var clickDeny = function clickDeny() {
          return getDenyButton() && getDenyButton().click();
        };
        /*
         * Global function to click 'Cancel' button
         */


        var clickCancel = function clickCancel() {
          return getCancelButton() && getCancelButton().click();
        };

        function fire() {
          var Swal = this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _construct(Swal, args);
        }
        /**
         * Returns an extended version of `Swal` containing `params` as defaults.
         * Useful for reusing Swal configuration.
         *
         * For example:
         *
         * Before:
         * const textPromptOptions = { input: 'text', showCancelButton: true }
         * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
         * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
         *
         * After:
         * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
         * const {value: firstName} = await TextPrompt('What is your first name?')
         * const {value: lastName} = await TextPrompt('What is your last name?')
         *
         * @param mixinParams
         */


        function mixin(mixinParams) {
          var MixinSwal = /*#__PURE__*/function (_this) {
            _inherits(MixinSwal, _this);

            var _super = _createSuper(MixinSwal);

            function MixinSwal() {
              _classCallCheck(this, MixinSwal);

              return _super.apply(this, arguments);
            }

            _createClass(MixinSwal, [{
              key: "_main",
              value: function _main(params, prevMixinParams) {
                return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, _extends({}, prevMixinParams, mixinParams));
              }
            }]);

            return MixinSwal;
          }(this);

          return MixinSwal;
        }
        /**
         * Shows loader (spinner), this is useful with AJAX requests.
         * By default the loader be shown instead of the "Confirm" button.
         */


        var showLoading = function showLoading(buttonToReplace) {
          var popup = getPopup();

          if (!popup) {
            Swal.fire();
          }

          popup = getPopup();
          var actions = getActions();
          var loader = getLoader();

          if (!buttonToReplace && isVisible(getConfirmButton())) {
            buttonToReplace = getConfirmButton();
          }

          show(actions);

          if (buttonToReplace) {
            hide(buttonToReplace);
            loader.setAttribute('data-button-to-replace', buttonToReplace.className);
          }

          loader.parentNode.insertBefore(loader, buttonToReplace);
          addClass([popup, actions], swalClasses.loading);
          show(loader);
          popup.setAttribute('data-loading', true);
          popup.setAttribute('aria-busy', true);
          popup.focus();
        };

        var RESTORE_FOCUS_TIMEOUT = 100;
        var globalState = {};

        var focusPreviousActiveElement = function focusPreviousActiveElement() {
          if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
            globalState.previousActiveElement.focus();
            globalState.previousActiveElement = null;
          } else if (document.body) {
            document.body.focus();
          }
        }; // Restore previous active (focused) element


        var restoreActiveElement = function restoreActiveElement() {
          return new Promise(function (resolve) {
            var x = window.scrollX;
            var y = window.scrollY;
            globalState.restoreFocusTimeout = setTimeout(function () {
              focusPreviousActiveElement();
              resolve();
            }, RESTORE_FOCUS_TIMEOUT); // issues/900

            /* istanbul ignore if */

            if (typeof x !== 'undefined' && typeof y !== 'undefined') {
              // IE doesn't have scrollX/scrollY support
              window.scrollTo(x, y);
            }
          });
        };
        /**
         * If `timer` parameter is set, returns number of milliseconds of timer remained.
         * Otherwise, returns undefined.
         */


        var getTimerLeft = function getTimerLeft() {
          return globalState.timeout && globalState.timeout.getTimerLeft();
        };
        /**
         * Stop timer. Returns number of milliseconds of timer remained.
         * If `timer` parameter isn't set, returns undefined.
         */


        var stopTimer = function stopTimer() {
          if (globalState.timeout) {
            stopTimerProgressBar();
            return globalState.timeout.stop();
          }
        };
        /**
         * Resume timer. Returns number of milliseconds of timer remained.
         * If `timer` parameter isn't set, returns undefined.
         */


        var resumeTimer = function resumeTimer() {
          if (globalState.timeout) {
            var remaining = globalState.timeout.start();
            animateTimerProgressBar(remaining);
            return remaining;
          }
        };
        /**
         * Resume timer. Returns number of milliseconds of timer remained.
         * If `timer` parameter isn't set, returns undefined.
         */


        var toggleTimer = function toggleTimer() {
          var timer = globalState.timeout;
          return timer && (timer.running ? stopTimer() : resumeTimer());
        };
        /**
         * Increase timer. Returns number of milliseconds of an updated timer.
         * If `timer` parameter isn't set, returns undefined.
         */


        var increaseTimer = function increaseTimer(n) {
          if (globalState.timeout) {
            var remaining = globalState.timeout.increase(n);
            animateTimerProgressBar(remaining, true);
            return remaining;
          }
        };
        /**
         * Check if timer is running. Returns true if timer is running
         * or false if timer is paused or stopped.
         * If `timer` parameter isn't set, returns undefined
         */


        var isTimerRunning = function isTimerRunning() {
          return globalState.timeout && globalState.timeout.isRunning();
        };

        var bodyClickListenerAdded = false;
        var clickHandlers = {};

        function bindClickHandler() {
          var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
          clickHandlers[attr] = this;

          if (!bodyClickListenerAdded) {
            document.body.addEventListener('click', bodyClickListener);
            bodyClickListenerAdded = true;
          }
        }

        var bodyClickListener = function bodyClickListener(event) {
          // 1. using .parentNode instead of event.path because of better support by old browsers https://stackoverflow.com/a/39245638
          // 2. using .parentNode instead of .parentElement because of IE11 + SVG https://stackoverflow.com/a/36270354
          for (var el = event.target; el && el !== document; el = el.parentNode) {
            for (var attr in clickHandlers) {
              var template = el.getAttribute(attr);

              if (template) {
                clickHandlers[attr].fire({
                  template: template
                });
                return;
              }
            }
          }
        };

        var defaultParams = {
          title: '',
          titleText: '',
          text: '',
          html: '',
          footer: '',
          icon: undefined,
          iconColor: undefined,
          iconHtml: undefined,
          template: undefined,
          toast: false,
          animation: true,
          showClass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'swal2-icon-show'
          },
          hideClass: {
            popup: 'swal2-hide',
            backdrop: 'swal2-backdrop-hide',
            icon: 'swal2-icon-hide'
          },
          customClass: {},
          target: 'body',
          backdrop: true,
          heightAuto: true,
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
          stopKeydownPropagation: true,
          keydownListenerCapture: false,
          showConfirmButton: true,
          showDenyButton: false,
          showCancelButton: false,
          preConfirm: undefined,
          preDeny: undefined,
          confirmButtonText: 'OK',
          confirmButtonAriaLabel: '',
          confirmButtonColor: undefined,
          denyButtonText: 'No',
          denyButtonAriaLabel: '',
          denyButtonColor: undefined,
          cancelButtonText: 'Cancel',
          cancelButtonAriaLabel: '',
          cancelButtonColor: undefined,
          buttonsStyling: true,
          reverseButtons: false,
          focusConfirm: true,
          focusDeny: false,
          focusCancel: false,
          showCloseButton: false,
          closeButtonHtml: '&times;',
          closeButtonAriaLabel: 'Close this dialog',
          loaderHtml: '',
          showLoaderOnConfirm: false,
          imageUrl: undefined,
          imageWidth: undefined,
          imageHeight: undefined,
          imageAlt: '',
          timer: undefined,
          timerProgressBar: false,
          width: undefined,
          padding: undefined,
          background: undefined,
          input: undefined,
          inputPlaceholder: '',
          inputLabel: '',
          inputValue: '',
          inputOptions: {},
          inputAutoTrim: true,
          inputAttributes: {},
          inputValidator: undefined,
          returnInputValueOnDeny: false,
          validationMessage: undefined,
          grow: false,
          position: 'center',
          progressSteps: [],
          currentProgressStep: undefined,
          progressStepsDistance: undefined,
          onBeforeOpen: undefined,
          onOpen: undefined,
          willOpen: undefined,
          didOpen: undefined,
          onRender: undefined,
          didRender: undefined,
          onClose: undefined,
          onAfterClose: undefined,
          willClose: undefined,
          didClose: undefined,
          onDestroy: undefined,
          didDestroy: undefined,
          scrollbarPadding: true
        };
        var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
        var deprecatedParams = {
          animation: 'showClass" and "hideClass',
          onBeforeOpen: 'willOpen',
          onOpen: 'didOpen',
          onRender: 'didRender',
          onClose: 'willClose',
          onAfterClose: 'didClose',
          onDestroy: 'didDestroy'
        };
        var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
        /**
         * Is valid parameter
         * @param {String} paramName
         */

        var isValidParameter = function isValidParameter(paramName) {
          return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
        };
        /**
         * Is valid parameter for Swal.update() method
         * @param {String} paramName
         */


        var isUpdatableParameter = function isUpdatableParameter(paramName) {
          return updatableParams.indexOf(paramName) !== -1;
        };
        /**
         * Is deprecated parameter
         * @param {String} paramName
         */


        var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
          return deprecatedParams[paramName];
        };

        var checkIfParamIsValid = function checkIfParamIsValid(param) {
          if (!isValidParameter(param)) {
            warn("Unknown parameter \"".concat(param, "\""));
          }
        };

        var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
          if (toastIncompatibleParams.indexOf(param) !== -1) {
            warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
          }
        };

        var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
          if (isDeprecatedParameter(param)) {
            warnAboutDeprecation(param, isDeprecatedParameter(param));
          }
        };
        /**
         * Show relevant warnings for given params
         *
         * @param params
         */


        var showWarningsForParams = function showWarningsForParams(params) {
          for (var param in params) {
            checkIfParamIsValid(param);

            if (params.toast) {
              checkIfToastParamIsValid(param);
            }

            checkIfParamIsDeprecated(param);
          }
        };

        var staticMethods = /*#__PURE__*/Object.freeze({
          isValidParameter: isValidParameter,
          isUpdatableParameter: isUpdatableParameter,
          isDeprecatedParameter: isDeprecatedParameter,
          argsToParams: argsToParams,
          isVisible: isVisible$1,
          clickConfirm: clickConfirm,
          clickDeny: clickDeny,
          clickCancel: clickCancel,
          getContainer: getContainer,
          getPopup: getPopup,
          getTitle: getTitle,
          getContent: getContent,
          getHtmlContainer: getHtmlContainer,
          getImage: getImage,
          getIcon: getIcon,
          getIcons: getIcons,
          getInputLabel: getInputLabel,
          getCloseButton: getCloseButton,
          getActions: getActions,
          getConfirmButton: getConfirmButton,
          getDenyButton: getDenyButton,
          getCancelButton: getCancelButton,
          getLoader: getLoader,
          getHeader: getHeader,
          getFooter: getFooter,
          getTimerProgressBar: getTimerProgressBar,
          getFocusableElements: getFocusableElements,
          getValidationMessage: getValidationMessage,
          isLoading: isLoading,
          fire: fire,
          mixin: mixin,
          queue: queue,
          getQueueStep: getQueueStep,
          insertQueueStep: insertQueueStep,
          deleteQueueStep: deleteQueueStep,
          showLoading: showLoading,
          enableLoading: showLoading,
          getTimerLeft: getTimerLeft,
          stopTimer: stopTimer,
          resumeTimer: resumeTimer,
          toggleTimer: toggleTimer,
          increaseTimer: increaseTimer,
          isTimerRunning: isTimerRunning,
          bindClickHandler: bindClickHandler
        });
        /**
         * Hides loader and shows back the button which was hidden by .showLoading()
         */

        function hideLoading() {
          // do nothing if popup is closed
          var innerParams = privateProps.innerParams.get(this);

          if (!innerParams) {
            return;
          }

          var domCache = privateProps.domCache.get(this);
          hide(domCache.loader);
          var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

          if (buttonToReplace.length) {
            show(buttonToReplace[0], 'inline-block');
          } else if (allButtonsAreHidden()) {
            hide(domCache.actions);
          }

          removeClass([domCache.popup, domCache.actions], swalClasses.loading);
          domCache.popup.removeAttribute('aria-busy');
          domCache.popup.removeAttribute('data-loading');
          domCache.confirmButton.disabled = false;
          domCache.denyButton.disabled = false;
          domCache.cancelButton.disabled = false;
        }

        function getInput$1(instance) {
          var innerParams = privateProps.innerParams.get(instance || this);
          var domCache = privateProps.domCache.get(instance || this);

          if (!domCache) {
            return null;
          }

          return getInput(domCache.content, innerParams.input);
        }

        var fixScrollbar = function fixScrollbar() {
          // for queues, do not do this more than once
          if (states.previousBodyPadding !== null) {
            return;
          } // if the body has overflow


          if (document.body.scrollHeight > window.innerHeight) {
            // add padding so the content doesn't shift after removal of scrollbar
            states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
            document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
          }
        };

        var undoScrollbar = function undoScrollbar() {
          if (states.previousBodyPadding !== null) {
            document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
            states.previousBodyPadding = null;
          }
        };
        /* istanbul ignore file */


        var iOSfix = function iOSfix() {
          var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

          if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
            var offset = document.body.scrollTop;
            document.body.style.top = "".concat(offset * -1, "px");
            addClass(document.body, swalClasses.iosfix);
            lockBodyScroll();
            addBottomPaddingForTallPopups(); // #1948
          }
        };

        var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
          var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

          if (safari) {
            var bottomPanelHeight = 44;

            if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
              getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
            }
          }
        };

        var lockBodyScroll = function lockBodyScroll() {
          // #1246
          var container = getContainer();
          var preventTouchMove;

          container.ontouchstart = function (e) {
            preventTouchMove = shouldPreventTouchMove(e);
          };

          container.ontouchmove = function (e) {
            if (preventTouchMove) {
              e.preventDefault();
              e.stopPropagation();
            }
          };
        };

        var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
          var target = event.target;
          var container = getContainer();

          if (isStylys(event) || isZoom(event)) {
            return false;
          }

          if (target === container) {
            return true;
          }

          if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
          !(isScrollable(getContent()) && // #1944
          getContent().contains(target))) {
            return true;
          }

          return false;
        };

        var isStylys = function isStylys(event) {
          // #1786
          return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
        };

        var isZoom = function isZoom(event) {
          // #1891
          return event.touches && event.touches.length > 1;
        };

        var undoIOSfix = function undoIOSfix() {
          if (hasClass(document.body, swalClasses.iosfix)) {
            var offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = '';
            document.body.scrollTop = offset * -1;
          }
        };
        /* istanbul ignore file */


        var isIE11 = function isIE11() {
          return !!window.MSInputMethodContext && !!document.documentMode;
        }; // Fix IE11 centering sweetalert2/issues/933


        var fixVerticalPositionIE = function fixVerticalPositionIE() {
          var container = getContainer();
          var popup = getPopup();
          container.style.removeProperty('align-items');

          if (popup.offsetTop < 0) {
            container.style.alignItems = 'flex-start';
          }
        };

        var IEfix = function IEfix() {
          if (typeof window !== 'undefined' && isIE11()) {
            fixVerticalPositionIE();
            window.addEventListener('resize', fixVerticalPositionIE);
          }
        };

        var undoIEfix = function undoIEfix() {
          if (typeof window !== 'undefined' && isIE11()) {
            window.removeEventListener('resize', fixVerticalPositionIE);
          }
        }; // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
        // elements not within the active modal dialog will not be surfaced if a user opens a screen
        // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.


        var setAriaHidden = function setAriaHidden() {
          var bodyChildren = toArray(document.body.children);
          bodyChildren.forEach(function (el) {
            if (el === getContainer() || contains(el, getContainer())) {
              return;
            }

            if (el.hasAttribute('aria-hidden')) {
              el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
            }

            el.setAttribute('aria-hidden', 'true');
          });
        };

        var unsetAriaHidden = function unsetAriaHidden() {
          var bodyChildren = toArray(document.body.children);
          bodyChildren.forEach(function (el) {
            if (el.hasAttribute('data-previous-aria-hidden')) {
              el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
              el.removeAttribute('data-previous-aria-hidden');
            } else {
              el.removeAttribute('aria-hidden');
            }
          });
        };
        /**
         * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
         * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
         * This is the approach that Babel will probably take to implement private methods/fields
         *   https://github.com/tc39/proposal-private-methods
         *   https://github.com/babel/babel/pull/7555
         * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
         *   then we can use that language feature.
         */


        var privateMethods = {
          swalPromiseResolve: new WeakMap()
        };
        /*
         * Instance method to close sweetAlert
         */

        function removePopupAndResetState(instance, container, isToast$$1, didClose) {
          if (isToast$$1) {
            triggerDidCloseAndDispose(instance, didClose);
          } else {
            restoreActiveElement().then(function () {
              return triggerDidCloseAndDispose(instance, didClose);
            });
            globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
              capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
          }

          if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
            container.parentNode.removeChild(container);
          }

          if (isModal()) {
            undoScrollbar();
            undoIOSfix();
            undoIEfix();
            unsetAriaHidden();
          }

          removeBodyClasses();
        }

        function removeBodyClasses() {
          removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
        }

        function close(resolveValue) {
          var popup = getPopup();

          if (!popup) {
            return;
          }

          resolveValue = prepareResolveValue(resolveValue);
          var innerParams = privateProps.innerParams.get(this);

          if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
            return;
          }

          var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
          removeClass(popup, innerParams.showClass.popup);
          addClass(popup, innerParams.hideClass.popup);
          var backdrop = getContainer();
          removeClass(backdrop, innerParams.showClass.backdrop);
          addClass(backdrop, innerParams.hideClass.backdrop);
          handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

          swalPromiseResolve(resolveValue);
        }

        var prepareResolveValue = function prepareResolveValue(resolveValue) {
          // When user calls Swal.close()
          if (typeof resolveValue === 'undefined') {
            return {
              isConfirmed: false,
              isDenied: false,
              isDismissed: true
            };
          }

          return _extends({
            isConfirmed: false,
            isDenied: false,
            isDismissed: false
          }, resolveValue);
        };

        var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
          var container = getContainer(); // If animation is supported, animate

          var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
          var onClose = innerParams.onClose,
              onAfterClose = innerParams.onAfterClose,
              willClose = innerParams.willClose,
              didClose = innerParams.didClose;
          runDidClose(popup, willClose, onClose);

          if (animationIsSupported) {
            animatePopup(instance, popup, container, didClose || onAfterClose);
          } else {
            // Otherwise, remove immediately
            removePopupAndResetState(instance, container, isToast(), didClose || onAfterClose);
          }
        };

        var runDidClose = function runDidClose(popup, willClose, onClose) {
          if (willClose !== null && typeof willClose === 'function') {
            willClose(popup);
          } else if (onClose !== null && typeof onClose === 'function') {
            onClose(popup); // @deprecated
          }
        };

        var animatePopup = function animatePopup(instance, popup, container, didClose) {
          globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), didClose);
          popup.addEventListener(animationEndEvent, function (e) {
            if (e.target === popup) {
              globalState.swalCloseEventFinishedCallback();
              delete globalState.swalCloseEventFinishedCallback;
            }
          });
        };

        var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
          setTimeout(function () {
            if (typeof didClose === 'function') {
              didClose();
            }

            instance._destroy();
          });
        };

        function setButtonsDisabled(instance, buttons, disabled) {
          var domCache = privateProps.domCache.get(instance);
          buttons.forEach(function (button) {
            domCache[button].disabled = disabled;
          });
        }

        function setInputDisabled(input, disabled) {
          if (!input) {
            return false;
          }

          if (input.type === 'radio') {
            var radiosContainer = input.parentNode.parentNode;
            var radios = radiosContainer.querySelectorAll('input');

            for (var i = 0; i < radios.length; i++) {
              radios[i].disabled = disabled;
            }
          } else {
            input.disabled = disabled;
          }
        }

        function enableButtons() {
          setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
        }

        function disableButtons() {
          setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
        }

        function enableInput() {
          return setInputDisabled(this.getInput(), false);
        }

        function disableInput() {
          return setInputDisabled(this.getInput(), true);
        }

        function showValidationMessage(error) {
          var domCache = privateProps.domCache.get(this);
          var params = privateProps.innerParams.get(this);
          setInnerHtml(domCache.validationMessage, error);
          domCache.validationMessage.className = swalClasses['validation-message'];

          if (params.customClass && params.customClass.validationMessage) {
            addClass(domCache.validationMessage, params.customClass.validationMessage);
          }

          show(domCache.validationMessage);
          var input = this.getInput();

          if (input) {
            input.setAttribute('aria-invalid', true);
            input.setAttribute('aria-describedBy', swalClasses['validation-message']);
            focusInput(input);
            addClass(input, swalClasses.inputerror);
          }
        } // Hide block with validation message


        function resetValidationMessage$1() {
          var domCache = privateProps.domCache.get(this);

          if (domCache.validationMessage) {
            hide(domCache.validationMessage);
          }

          var input = this.getInput();

          if (input) {
            input.removeAttribute('aria-invalid');
            input.removeAttribute('aria-describedBy');
            removeClass(input, swalClasses.inputerror);
          }
        }

        function getProgressSteps$1() {
          var domCache = privateProps.domCache.get(this);
          return domCache.progressSteps;
        }

        var Timer = /*#__PURE__*/function () {
          function Timer(callback, delay) {
            _classCallCheck(this, Timer);

            this.callback = callback;
            this.remaining = delay;
            this.running = false;
            this.start();
          }

          _createClass(Timer, [{
            key: "start",
            value: function start() {
              if (!this.running) {
                this.running = true;
                this.started = new Date();
                this.id = setTimeout(this.callback, this.remaining);
              }

              return this.remaining;
            }
          }, {
            key: "stop",
            value: function stop() {
              if (this.running) {
                this.running = false;
                clearTimeout(this.id);
                this.remaining -= new Date() - this.started;
              }

              return this.remaining;
            }
          }, {
            key: "increase",
            value: function increase(n) {
              var running = this.running;

              if (running) {
                this.stop();
              }

              this.remaining += n;

              if (running) {
                this.start();
              }

              return this.remaining;
            }
          }, {
            key: "getTimerLeft",
            value: function getTimerLeft() {
              if (this.running) {
                this.stop();
                this.start();
              }

              return this.remaining;
            }
          }, {
            key: "isRunning",
            value: function isRunning() {
              return this.running;
            }
          }]);

          return Timer;
        }();

        var defaultInputValidators = {
          email: function email(string, validationMessage) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
          },
          url: function url(string, validationMessage) {
            // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
          }
        };

        function setDefaultInputValidators(params) {
          // Use default `inputValidator` for supported input types if not provided
          if (!params.inputValidator) {
            Object.keys(defaultInputValidators).forEach(function (key) {
              if (params.input === key) {
                params.inputValidator = defaultInputValidators[key];
              }
            });
          }
        }

        function validateCustomTargetElement(params) {
          // Determine if the custom target element is valid
          if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
            warn('Target parameter is not valid, defaulting to "body"');
            params.target = 'body';
          }
        }
        /**
         * Set type, text and actions on popup
         *
         * @param params
         * @returns {boolean}
         */


        function setParameters(params) {
          setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

          if (params.showLoaderOnConfirm && !params.preConfirm) {
            warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
          } // params.animation will be actually used in renderPopup.js
          // but in case when params.animation is a function, we need to call that function
          // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
          // inside the params.animation function


          params.animation = callIfFunction(params.animation);
          validateCustomTargetElement(params); // Replace newlines with <br> in title

          if (typeof params.title === 'string') {
            params.title = params.title.split('\n').join('<br />');
          }

          init(params);
        }

        var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

        var getTemplateParams = function getTemplateParams(params) {
          var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

          if (!template) {
            return {};
          }

          var templateContent = template.content || template; // IE11

          showWarningsForElements(templateContent);

          var result = _extends(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));

          return result;
        };

        var getSwalParams = function getSwalParams(templateContent) {
          var result = {};
          toArray(templateContent.querySelectorAll('swal-param')).forEach(function (param) {
            showWarningsForAttributes(param, ['name', 'value']);
            var paramName = param.getAttribute('name');
            var value = param.getAttribute('value');

            if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
              value = false;
            }

            if (_typeof(defaultParams[paramName]) === 'object') {
              value = JSON.parse(value);
            }

            result[paramName] = value;
          });
          return result;
        };

        var getSwalButtons = function getSwalButtons(templateContent) {
          var result = {};
          toArray(templateContent.querySelectorAll('swal-button')).forEach(function (button) {
            showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
            var type = button.getAttribute('type');
            result["".concat(type, "ButtonText")] = button.innerHTML;
            result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

            if (button.hasAttribute('color')) {
              result["".concat(type, "ButtonColor")] = button.getAttribute('color');
            }

            if (button.hasAttribute('aria-label')) {
              result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
            }
          });
          return result;
        };

        var getSwalImage = function getSwalImage(templateContent) {
          var result = {};
          var image = templateContent.querySelector('swal-image');

          if (image) {
            showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

            if (image.hasAttribute('src')) {
              result.imageUrl = image.getAttribute('src');
            }

            if (image.hasAttribute('width')) {
              result.imageWidth = image.getAttribute('width');
            }

            if (image.hasAttribute('height')) {
              result.imageHeight = image.getAttribute('height');
            }

            if (image.hasAttribute('alt')) {
              result.imageAlt = image.getAttribute('alt');
            }
          }

          return result;
        };

        var getSwalIcon = function getSwalIcon(templateContent) {
          var result = {};
          var icon = templateContent.querySelector('swal-icon');

          if (icon) {
            showWarningsForAttributes(icon, ['type', 'color']);

            if (icon.hasAttribute('type')) {
              result.icon = icon.getAttribute('type');
            }

            if (icon.hasAttribute('color')) {
              result.iconColor = icon.getAttribute('color');
            }

            result.iconHtml = icon.innerHTML;
          }

          return result;
        };

        var getSwalInput = function getSwalInput(templateContent) {
          var result = {};
          var input = templateContent.querySelector('swal-input');

          if (input) {
            showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
            result.input = input.getAttribute('type') || 'text';

            if (input.hasAttribute('label')) {
              result.inputLabel = input.getAttribute('label');
            }

            if (input.hasAttribute('placeholder')) {
              result.inputPlaceholder = input.getAttribute('placeholder');
            }

            if (input.hasAttribute('value')) {
              result.inputValue = input.getAttribute('value');
            }
          }

          var inputOptions = templateContent.querySelectorAll('swal-input-option');

          if (inputOptions.length) {
            result.inputOptions = {};
            toArray(inputOptions).forEach(function (option) {
              showWarningsForAttributes(option, ['value']);
              var optionValue = option.getAttribute('value');
              var optionName = option.innerHTML;
              result.inputOptions[optionValue] = optionName;
            });
          }

          return result;
        };

        var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
          var result = {};

          for (var i in paramNames) {
            var paramName = paramNames[i];
            var tag = templateContent.querySelector(paramName);

            if (tag) {
              showWarningsForAttributes(tag, []);
              result[paramName.replace(/^swal-/, '')] = tag.innerHTML;
            }
          }

          return result;
        };

        var showWarningsForElements = function showWarningsForElements(template) {
          var allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
          toArray(template.querySelectorAll('*')).forEach(function (el) {
            var tagName = el.tagName.toLowerCase();

            if (allowedElements.indexOf(tagName) === -1) {
              warn("Unrecognized element <".concat(tagName, ">"));
            }
          });
        };

        var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
          toArray(el.attributes).forEach(function (attribute) {
            if (allowedAttributes.indexOf(attribute.name) === -1) {
              warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
            }
          });
        };

        var SHOW_CLASS_TIMEOUT = 10;
        /**
         * Open popup, add necessary classes and styles, fix scrollbar
         *
         * @param params
         */

        var openPopup = function openPopup(params) {
          var container = getContainer();
          var popup = getPopup();

          if (typeof params.willOpen === 'function') {
            params.willOpen(popup);
          } else if (typeof params.onBeforeOpen === 'function') {
            params.onBeforeOpen(popup); // @deprecated
          }

          var bodyStyles = window.getComputedStyle(document.body);
          var initialBodyOverflow = bodyStyles.overflowY;
          addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

          setTimeout(function () {
            setScrollingVisibility(container, popup);
          }, SHOW_CLASS_TIMEOUT);

          if (isModal()) {
            fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
            setAriaHidden();
          }

          if (!isToast() && !globalState.previousActiveElement) {
            globalState.previousActiveElement = document.activeElement;
          }

          runDidOpen(popup, params);
          removeClass(container, swalClasses['no-transition']);
        };

        var runDidOpen = function runDidOpen(popup, params) {
          if (typeof params.didOpen === 'function') {
            setTimeout(function () {
              return params.didOpen(popup);
            });
          } else if (typeof params.onOpen === 'function') {
            setTimeout(function () {
              return params.onOpen(popup);
            }); // @deprecated
          }
        };

        var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
          var popup = getPopup();

          if (event.target !== popup) {
            return;
          }

          var container = getContainer();
          popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
          container.style.overflowY = 'auto';
        };

        var setScrollingVisibility = function setScrollingVisibility(container, popup) {
          if (animationEndEvent && hasCssAnimation(popup)) {
            container.style.overflowY = 'hidden';
            popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
          } else {
            container.style.overflowY = 'auto';
          }
        };

        var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
          iOSfix();
          IEfix();

          if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
            fixScrollbar();
          } // sweetalert2/issues/1247


          setTimeout(function () {
            container.scrollTop = 0;
          });
        };

        var addClasses$1 = function addClasses(container, popup, params) {
          addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

          popup.style.setProperty('opacity', '0', 'important');
          show(popup);
          setTimeout(function () {
            // Animate popup right after showing it
            addClass(popup, params.showClass.popup); // and remove the opacity workaround

            popup.style.removeProperty('opacity');
          }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

          addClass([document.documentElement, document.body], swalClasses.shown);

          if (params.heightAuto && params.backdrop && !params.toast) {
            addClass([document.documentElement, document.body], swalClasses['height-auto']);
          }
        };

        var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
          if (params.input === 'select' || params.input === 'radio') {
            handleInputOptions(instance, params);
          } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
            handleInputValue(instance, params);
          }
        };

        var getInputValue = function getInputValue(instance, innerParams) {
          var input = instance.getInput();

          if (!input) {
            return null;
          }

          switch (innerParams.input) {
            case 'checkbox':
              return getCheckboxValue(input);

            case 'radio':
              return getRadioValue(input);

            case 'file':
              return getFileValue(input);

            default:
              return innerParams.inputAutoTrim ? input.value.trim() : input.value;
          }
        };

        var getCheckboxValue = function getCheckboxValue(input) {
          return input.checked ? 1 : 0;
        };

        var getRadioValue = function getRadioValue(input) {
          return input.checked ? input.value : null;
        };

        var getFileValue = function getFileValue(input) {
          return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
        };

        var handleInputOptions = function handleInputOptions(instance, params) {
          var content = getContent();

          var processInputOptions = function processInputOptions(inputOptions) {
            return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
          };

          if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
            showLoading();
            asPromise(params.inputOptions).then(function (inputOptions) {
              instance.hideLoading();
              processInputOptions(inputOptions);
            });
          } else if (_typeof(params.inputOptions) === 'object') {
            processInputOptions(params.inputOptions);
          } else {
            error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
          }
        };

        var handleInputValue = function handleInputValue(instance, params) {
          var input = instance.getInput();
          hide(input);
          asPromise(params.inputValue).then(function (inputValue) {
            input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
            show(input);
            input.focus();
            instance.hideLoading();
          })["catch"](function (err) {
            error("Error in inputValue promise: ".concat(err));
            input.value = '';
            show(input);
            input.focus();
            instance.hideLoading();
          });
        };

        var populateInputOptions = {
          select: function select(content, inputOptions, params) {
            var select = getChildByClass(content, swalClasses.select);

            var renderOption = function renderOption(parent, optionLabel, optionValue) {
              var option = document.createElement('option');
              option.value = optionValue;
              setInnerHtml(option, optionLabel);
              option.selected = isSelected(optionValue, params.inputValue);
              parent.appendChild(option);
            };

            inputOptions.forEach(function (inputOption) {
              var optionValue = inputOption[0];
              var optionLabel = inputOption[1]; // <optgroup> spec:
              // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
              // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
              // check whether this is a <optgroup>

              if (Array.isArray(optionLabel)) {
                // if it is an array, then it is an <optgroup>
                var optgroup = document.createElement('optgroup');
                optgroup.label = optionValue;
                optgroup.disabled = false; // not configurable for now

                select.appendChild(optgroup);
                optionLabel.forEach(function (o) {
                  return renderOption(optgroup, o[1], o[0]);
                });
              } else {
                // case of <option>
                renderOption(select, optionLabel, optionValue);
              }
            });
            select.focus();
          },
          radio: function radio(content, inputOptions, params) {
            var radio = getChildByClass(content, swalClasses.radio);
            inputOptions.forEach(function (inputOption) {
              var radioValue = inputOption[0];
              var radioLabel = inputOption[1];
              var radioInput = document.createElement('input');
              var radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;

              if (isSelected(radioValue, params.inputValue)) {
                radioInput.checked = true;
              }

              var label = document.createElement('span');
              setInnerHtml(label, radioLabel);
              label.className = swalClasses.label;
              radioLabelElement.appendChild(radioInput);
              radioLabelElement.appendChild(label);
              radio.appendChild(radioLabelElement);
            });
            var radios = radio.querySelectorAll('input');

            if (radios.length) {
              radios[0].focus();
            }
          }
        };
        /**
         * Converts `inputOptions` into an array of `[value, label]`s
         * @param inputOptions
         */

        var formatInputOptions = function formatInputOptions(inputOptions) {
          var result = [];

          if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
            inputOptions.forEach(function (value, key) {
              var valueFormatted = value;

              if (_typeof(valueFormatted) === 'object') {
                // case of <optgroup>
                valueFormatted = formatInputOptions(valueFormatted);
              }

              result.push([key, valueFormatted]);
            });
          } else {
            Object.keys(inputOptions).forEach(function (key) {
              var valueFormatted = inputOptions[key];

              if (_typeof(valueFormatted) === 'object') {
                // case of <optgroup>
                valueFormatted = formatInputOptions(valueFormatted);
              }

              result.push([key, valueFormatted]);
            });
          }

          return result;
        };

        var isSelected = function isSelected(optionValue, inputValue) {
          return inputValue && inputValue.toString() === optionValue.toString();
        };

        var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
          instance.disableButtons();

          if (innerParams.input) {
            handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
          } else {
            confirm(instance, innerParams, true);
          }
        };

        var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
          instance.disableButtons();

          if (innerParams.returnInputValueOnDeny) {
            handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
          } else {
            deny(instance, innerParams, false);
          }
        };

        var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
          instance.disableButtons();
          dismissWith(DismissReason.cancel);
        };

        var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type
        /* type is either 'confirm' or 'deny' */
        ) {
          var inputValue = getInputValue(instance, innerParams);

          if (innerParams.inputValidator) {
            handleInputValidator(instance, innerParams, inputValue);
          } else if (!instance.getInput().checkValidity()) {
            instance.enableButtons();
            instance.showValidationMessage(innerParams.validationMessage);
          } else if (type === 'deny') {
            deny(instance, innerParams, inputValue);
          } else {
            confirm(instance, innerParams, inputValue);
          }
        };

        var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue) {
          instance.disableInput();
          var validationPromise = Promise.resolve().then(function () {
            return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
          });
          validationPromise.then(function (validationMessage) {
            instance.enableButtons();
            instance.enableInput();

            if (validationMessage) {
              instance.showValidationMessage(validationMessage);
            } else {
              confirm(instance, innerParams, inputValue);
            }
          });
        };

        var deny = function deny(instance, innerParams, value) {
          if (innerParams.preDeny) {
            var preDenyPromise = Promise.resolve().then(function () {
              return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
            });
            preDenyPromise.then(function (preDenyValue) {
              if (preDenyValue === false) {
                instance.hideLoading();
              } else {
                instance.closePopup({
                  isDenied: true,
                  value: typeof preDenyValue === 'undefined' ? value : preDenyValue
                });
              }
            });
          } else {
            instance.closePopup({
              isDenied: true,
              value: value
            });
          }
        };

        var succeedWith = function succeedWith(instance, value) {
          instance.closePopup({
            isConfirmed: true,
            value: value
          });
        };

        var confirm = function confirm(instance, innerParams, value) {
          if (innerParams.showLoaderOnConfirm) {
            showLoading(); // TODO: make showLoading an *instance* method
          }

          if (innerParams.preConfirm) {
            instance.resetValidationMessage();
            var preConfirmPromise = Promise.resolve().then(function () {
              return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
            });
            preConfirmPromise.then(function (preConfirmValue) {
              if (isVisible(getValidationMessage()) || preConfirmValue === false) {
                instance.hideLoading();
              } else {
                succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
              }
            });
          } else {
            succeedWith(instance, value);
          }
        };

        var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
          if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
            globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
              capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
          }

          if (!innerParams.toast) {
            globalState.keydownHandler = function (e) {
              return keydownHandler(instance, e, dismissWith);
            };

            globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
            globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
            globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
              capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = true;
          }
        }; // Focus handling


        var setFocus = function setFocus(innerParams, index, increment) {
          var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

          if (focusableElements.length) {
            index = index + increment; // rollover to first item

            if (index === focusableElements.length) {
              index = 0; // go to last item
            } else if (index === -1) {
              index = focusableElements.length - 1;
            }

            return focusableElements[index].focus();
          } // no visible focusable elements, focus the popup


          getPopup().focus();
        };

        var arrowKeysNextButton = ['ArrowRight', 'ArrowDown', 'Right', 'Down' // IE11
        ];
        var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp', 'Left', 'Up' // IE11
        ];
        var escKeys = ['Escape', 'Esc' // IE11
        ];

        var keydownHandler = function keydownHandler(instance, e, dismissWith) {
          var innerParams = privateProps.innerParams.get(instance);

          if (innerParams.stopKeydownPropagation) {
            e.stopPropagation();
          } // ENTER


          if (e.key === 'Enter') {
            handleEnter(instance, e, innerParams); // TAB
          } else if (e.key === 'Tab') {
            handleTab(e, innerParams); // ARROWS - switch focus between buttons
          } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) {
            handleArrows(e.key); // ESC
          } else if (escKeys.indexOf(e.key) !== -1) {
            handleEsc(e, innerParams, dismissWith);
          }
        };

        var handleEnter = function handleEnter(instance, e, innerParams) {
          // #720 #721
          if (e.isComposing) {
            return;
          }

          if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
            if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
              return; // do not submit
            }

            clickConfirm();
            e.preventDefault();
          }
        };

        var handleTab = function handleTab(e, innerParams) {
          var targetElement = e.target;
          var focusableElements = getFocusableElements();
          var btnIndex = -1;

          for (var i = 0; i < focusableElements.length; i++) {
            if (targetElement === focusableElements[i]) {
              btnIndex = i;
              break;
            }
          }

          if (!e.shiftKey) {
            // Cycle to the next button
            setFocus(innerParams, btnIndex, 1);
          } else {
            // Cycle to the prev button
            setFocus(innerParams, btnIndex, -1);
          }

          e.stopPropagation();
          e.preventDefault();
        };

        var handleArrows = function handleArrows(key) {
          var confirmButton = getConfirmButton();
          var denyButton = getDenyButton();
          var cancelButton = getCancelButton();

          if (!([confirmButton, denyButton, cancelButton].indexOf(document.activeElement) !== -1)) {
            return;
          }

          var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
          var buttonToFocus = document.activeElement[sibling];

          if (buttonToFocus) {
            buttonToFocus.focus();
          }
        };

        var handleEsc = function handleEsc(e, innerParams, dismissWith) {
          if (callIfFunction(innerParams.allowEscapeKey)) {
            e.preventDefault();
            dismissWith(DismissReason.esc);
          }
        };

        var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
          var innerParams = privateProps.innerParams.get(instance);

          if (innerParams.toast) {
            handleToastClick(instance, domCache, dismissWith);
          } else {
            // Ignore click events that had mousedown on the popup but mouseup on the container
            // This can happen when the user drags a slider
            handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

            handleContainerMousedown(domCache);
            handleModalClick(instance, domCache, dismissWith);
          }
        };

        var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
          // Closing toast by internal click
          domCache.popup.onclick = function () {
            var innerParams = privateProps.innerParams.get(instance);

            if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
              return;
            }

            dismissWith(DismissReason.close);
          };
        };

        var ignoreOutsideClick = false;

        var handleModalMousedown = function handleModalMousedown(domCache) {
          domCache.popup.onmousedown = function () {
            domCache.container.onmouseup = function (e) {
              domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
              // have any other direct children aside of the popup

              if (e.target === domCache.container) {
                ignoreOutsideClick = true;
              }
            };
          };
        };

        var handleContainerMousedown = function handleContainerMousedown(domCache) {
          domCache.container.onmousedown = function () {
            domCache.popup.onmouseup = function (e) {
              domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

              if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
                ignoreOutsideClick = true;
              }
            };
          };
        };

        var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
          domCache.container.onclick = function (e) {
            var innerParams = privateProps.innerParams.get(instance);

            if (ignoreOutsideClick) {
              ignoreOutsideClick = false;
              return;
            }

            if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
              dismissWith(DismissReason.backdrop);
            }
          };
        };

        function _main(userParams) {
          var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          showWarningsForParams(_extends({}, mixinParams, userParams));

          if (globalState.currentInstance) {
            globalState.currentInstance._destroy();
          }

          globalState.currentInstance = this;
          var innerParams = prepareParams(userParams, mixinParams);
          setParameters(innerParams);
          Object.freeze(innerParams); // clear the previous timer

          if (globalState.timeout) {
            globalState.timeout.stop();
            delete globalState.timeout;
          } // clear the restore focus timeout


          clearTimeout(globalState.restoreFocusTimeout);
          var domCache = populateDomCache(this);
          render(this, innerParams);
          privateProps.innerParams.set(this, innerParams);
          return swalPromise(this, domCache, innerParams);
        }

        var prepareParams = function prepareParams(userParams, mixinParams) {
          var templateParams = getTemplateParams(userParams);

          var showClass = _extends({}, defaultParams.showClass, mixinParams.showClass, templateParams.showClass, userParams.showClass);

          var hideClass = _extends({}, defaultParams.hideClass, mixinParams.hideClass, templateParams.hideClass, userParams.hideClass);

          var params = _extends({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131


          params.showClass = showClass;
          params.hideClass = hideClass; // @deprecated

          if (userParams.animation === false) {
            params.showClass = {
              popup: 'swal2-noanimation',
              backdrop: 'swal2-noanimation'
            };
            params.hideClass = {};
          }

          return params;
        };

        var swalPromise = function swalPromise(instance, domCache, innerParams) {
          return new Promise(function (resolve) {
            // functions to handle all closings/dismissals
            var dismissWith = function dismissWith(dismiss) {
              instance.closePopup({
                isDismissed: true,
                dismiss: dismiss
              });
            };

            privateMethods.swalPromiseResolve.set(instance, resolve);

            domCache.confirmButton.onclick = function () {
              return handleConfirmButtonClick(instance, innerParams);
            };

            domCache.denyButton.onclick = function () {
              return handleDenyButtonClick(instance, innerParams);
            };

            domCache.cancelButton.onclick = function () {
              return handleCancelButtonClick(instance, dismissWith);
            };

            domCache.closeButton.onclick = function () {
              return dismissWith(DismissReason.close);
            };

            handlePopupClick(instance, domCache, dismissWith);
            addKeydownHandler(instance, globalState, innerParams, dismissWith);

            if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
              addClass(document.body, swalClasses['toast-column']);
            } else {
              removeClass(document.body, swalClasses['toast-column']);
            }

            handleInputOptionsAndValue(instance, innerParams);
            openPopup(innerParams);
            setupTimer(globalState, innerParams, dismissWith);
            initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

            setTimeout(function () {
              domCache.container.scrollTop = 0;
            });
          });
        };

        var populateDomCache = function populateDomCache(instance) {
          var domCache = {
            popup: getPopup(),
            container: getContainer(),
            content: getContent(),
            actions: getActions(),
            confirmButton: getConfirmButton(),
            denyButton: getDenyButton(),
            cancelButton: getCancelButton(),
            loader: getLoader(),
            closeButton: getCloseButton(),
            validationMessage: getValidationMessage(),
            progressSteps: getProgressSteps()
          };
          privateProps.domCache.set(instance, domCache);
          return domCache;
        };

        var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
          var timerProgressBar = getTimerProgressBar();
          hide(timerProgressBar);

          if (innerParams.timer) {
            globalState$$1.timeout = new Timer(function () {
              dismissWith('timer');
              delete globalState$$1.timeout;
            }, innerParams.timer);

            if (innerParams.timerProgressBar) {
              show(timerProgressBar);
              setTimeout(function () {
                if (globalState$$1.timeout && globalState$$1.timeout.running) {
                  // timer can be already stopped or unset at this point
                  animateTimerProgressBar(innerParams.timer);
                }
              });
            }
          }
        };

        var initFocus = function initFocus(domCache, innerParams) {
          if (innerParams.toast) {
            return;
          }

          if (!callIfFunction(innerParams.allowEnterKey)) {
            return blurActiveElement();
          }

          if (!focusButton(domCache, innerParams)) {
            setFocus(innerParams, -1, 1);
          }
        };

        var focusButton = function focusButton(domCache, innerParams) {
          if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
            domCache.denyButton.focus();
            return true;
          }

          if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
            domCache.cancelButton.focus();
            return true;
          }

          if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
            domCache.confirmButton.focus();
            return true;
          }

          return false;
        };

        var blurActiveElement = function blurActiveElement() {
          if (document.activeElement && typeof document.activeElement.blur === 'function') {
            document.activeElement.blur();
          }
        };
        /**
         * Updates popup parameters.
         */


        function update(params) {
          var popup = getPopup();
          var innerParams = privateProps.innerParams.get(this);

          if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
            return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
          }

          var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

          Object.keys(params).forEach(function (param) {
            if (Swal.isUpdatableParameter(param)) {
              validUpdatableParams[param] = params[param];
            } else {
              warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
            }
          });

          var updatedParams = _extends({}, innerParams, validUpdatableParams);

          render(this, updatedParams);
          privateProps.innerParams.set(this, updatedParams);
          Object.defineProperties(this, {
            params: {
              value: _extends({}, this.params, params),
              writable: false,
              enumerable: true
            }
          });
        }

        function _destroy() {
          var domCache = privateProps.domCache.get(this);
          var innerParams = privateProps.innerParams.get(this);

          if (!innerParams) {
            return; // This instance has already been destroyed
          } // Check if there is another Swal closing


          if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
          } // Check if there is a swal disposal defer timer


          if (globalState.deferDisposalTimer) {
            clearTimeout(globalState.deferDisposalTimer);
            delete globalState.deferDisposalTimer;
          }

          runDidDestroy(innerParams);
          disposeSwal(this);
        }

        var runDidDestroy = function runDidDestroy(innerParams) {
          if (typeof innerParams.didDestroy === 'function') {
            innerParams.didDestroy();
          } else if (typeof innerParams.onDestroy === 'function') {
            innerParams.onDestroy(); // @deprecated
          }
        };

        var disposeSwal = function disposeSwal(instance) {
          // Unset this.params so GC will dispose it (#1569)
          delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

          delete globalState.keydownHandler;
          delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

          unsetWeakMaps(privateProps);
          unsetWeakMaps(privateMethods);
        };

        var unsetWeakMaps = function unsetWeakMaps(obj) {
          for (var i in obj) {
            obj[i] = new WeakMap();
          }
        };

        var instanceMethods = /*#__PURE__*/Object.freeze({
          hideLoading: hideLoading,
          disableLoading: hideLoading,
          getInput: getInput$1,
          close: close,
          closePopup: close,
          closeModal: close,
          closeToast: close,
          enableButtons: enableButtons,
          disableButtons: disableButtons,
          enableInput: enableInput,
          disableInput: disableInput,
          showValidationMessage: showValidationMessage,
          resetValidationMessage: resetValidationMessage$1,
          getProgressSteps: getProgressSteps$1,
          _main: _main,
          update: update,
          _destroy: _destroy
        });
        var currentInstance;

        var SweetAlert = /*#__PURE__*/function () {
          function SweetAlert() {
            _classCallCheck(this, SweetAlert); // Prevent run in Node env


            if (typeof window === 'undefined') {
              return;
            } // Check for the existence of Promise


            if (typeof Promise === 'undefined') {
              error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
            }

            currentInstance = this;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var outerParams = Object.freeze(this.constructor.argsToParams(args));
            Object.defineProperties(this, {
              params: {
                value: outerParams,
                writable: false,
                enumerable: true,
                configurable: true
              }
            });

            var promise = this._main(this.params);

            privateProps.promise.set(this, promise);
          } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


          _createClass(SweetAlert, [{
            key: "then",
            value: function then(onFulfilled) {
              var promise = privateProps.promise.get(this);
              return promise.then(onFulfilled);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              var promise = privateProps.promise.get(this);
              return promise["finally"](onFinally);
            }
          }]);

          return SweetAlert;
        }(); // Assign instance methods from src/instanceMethods/*.js to prototype


        _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


        _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


        Object.keys(instanceMethods).forEach(function (key) {
          SweetAlert[key] = function () {
            if (currentInstance) {
              var _currentInstance;

              return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
            }
          };
        });
        SweetAlert.DismissReason = DismissReason;
        SweetAlert.version = '10.13.0';
        var Swal = SweetAlert;
        Swal["default"] = Swal;
        return Swal;
      });

      if (typeof this !== 'undefined' && this.Sweetalert2) {
        this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
      }

      "undefined" != typeof document && function (e, t) {
        var n = e.createElement("style");
        if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
          n.innerHTML = t;
        } catch (e) {
          n.innerText = t;
        }
      }(document, ".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.125em .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#2778c4;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#d14529;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#757575;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{display:none;align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");
      /***/
    },

    /***/
    "Swaq":
    /*!*********************************************!*\
      !*** ./src/app/ui/badge/badge.component.ts ***!
      \*********************************************/

    /*! exports provided: BadgeComponent */

    /***/
    function Swaq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BadgeComponent", function () {
        return BadgeComponent;
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


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var BadgeComponent = /*#__PURE__*/function () {
        function BadgeComponent() {
          _classCallCheck2(this, BadgeComponent);
        }

        _createClass2(BadgeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BadgeComponent;
      }();

      BadgeComponent.ɵfac = function BadgeComponent_Factory(t) {
        return new (t || BadgeComponent)();
      };

      BadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BadgeComponent,
        selectors: [["app-badge"]],
        decls: 178,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [1, "card-body"], ["matBadge", "4", "matBadgeOverlap", "false"], ["mat-raised-button", "", "color", "primary", "matBadge", "8", "matBadgePosition", "before", "matBadgeColor", "accent"], ["matBadge", "15", "matBadgeColor", "warn"], [1, "cdk-visually-hidden"], [1, "col-xs-6", "col-sm-6", "col-md-3", "col-lg-3"], ["type", "button", 1, "btn", "btn-success", "btn-lg", "btn-block", "waves-effect"], [1, "badge"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "btn-block", "waves-effect"], ["type", "button", 1, "btn", "btn-danger", "btn-lg", "btn-block", "waves-effect"], ["type", "button", 1, "btn", "btn-warning", "btn-lg", "btn-block", "waves-effect"], ["type", "button", 1, "btn", "bg-green", "btn-lg", "btn-block", "waves-effect"], ["type", "button", 1, "btn", "bg-blue", "btn-lg", "btn-block", "waves-effect"], ["type", "button", 1, "btn", "bg-red", "btn-lg", "btn-block", "waves-effect"], ["type", "button", 1, "btn", "bg-orange", "btn-lg", "btn-block", "waves-effect"], ["type", "button", 1, "btn", "bg-pink", "btn-lg", "btn-block", "waves-effect"], ["type", "button", 1, "btn", "bg-cyan", "btn-lg", "btn-block", "waves-effect"], ["type", "button", 1, "btn", "bg-teal", "btn-lg", "btn-block", "waves-effect"], ["type", "button", 1, "btn", "bg-purple", "btn-lg", "btn-block", "waves-effect"], [1, "badge", "col-red"], [1, "badge", "col-purple"], [1, "badge", "col-green"], [1, "badge", "col-indigo"], [1, "badge", "col-orange"], [1, "badge", "col-cyan"], [1, "badge", "col-brown"], [1, "badge", "col-deep-orange"], [1, "list-group"], ["href", "#", "onClick", "return false;", 1, "list-group-item"], [1, "badge", "bg-pink"], [1, "badge", "bg-cyan"], [1, "badge", "bg-teal"], [1, "badge", "bg-orange"], [1, "badge", "bg-purple"]],
        template: function BadgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Badges");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Badges");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Material Badges");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Text with a badge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Button with a badge on the left ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Action ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Icon with a badge ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Example with a home icon with overlaid badge showing the number 15 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Button Examples");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "SUCCESS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "PRIMARY ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "10+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "DANGER ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "WARNING ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Button Examples With Material Design Colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "GREEN ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "BLUE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "10+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "RED ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "ORANGE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "PINK ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "14");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "CYAN ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "99+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "TEAL ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "26");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "PURPLE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "47");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Outline Badges Example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Badge Red");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Badge Purple");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Badge Green");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Badge Indigo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Badge Orange");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Badge Cyan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Badge Brown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Badge Deep Orange");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "List Example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "14 New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Cras justo odio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "99 Unread");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Dapibus ac facilisis in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "99+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Morbi leo risus ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "21");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Porta ac consectetur ac ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Vestibulum at eros ");

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
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadge"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2JhZGdlL2JhZGdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BadgeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-badge',
            templateUrl: './badge.component.html',
            styleUrls: ['./badge.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "TU8p":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js ***!
      \***********************************************************************/

    /*! exports provided: MatBadge, MatBadgeModule */

    /***/
    function TU8p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatBadge", function () {
        return MatBadge;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function () {
        return MatBadgeModule;
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


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextId = 0; // Boilerplate for applying mixins to MatBadge.

      /** @docs-private */

      var MatBadgeBase = function MatBadgeBase() {
        _classCallCheck2(this, MatBadgeBase);
      };

      var _MatBadgeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisabled"])(MatBadgeBase);
      /** Directive to display a text badge. */


      var MatBadge = /*#__PURE__*/function (_MatBadgeMixinBase2) {
        _inherits2(MatBadge, _MatBadgeMixinBase2);

        var _super5 = _createSuper2(MatBadge);

        function MatBadge(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
          var _this23;

          _classCallCheck2(this, MatBadge);

          _this23 = _super5.call(this);
          _this23._ngZone = _ngZone;
          _this23._elementRef = _elementRef;
          _this23._ariaDescriber = _ariaDescriber;
          _this23._renderer = _renderer;
          _this23._animationMode = _animationMode;
          /** Whether the badge has any content. */

          _this23._hasContent = false;
          _this23._color = 'primary';
          _this23._overlap = true;
          /**
           * Position the badge should reside.
           * Accepts any combination of 'above'|'below' and 'before'|'after'
           */

          _this23.position = 'above after';
          /** Size of the badge. Can be 'small', 'medium', or 'large'. */

          _this23.size = 'medium';
          /** Unique id for the badge */

          _this23._id = nextId++;

          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            var nativeElement = _elementRef.nativeElement;

            if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
              throw Error('matBadge must be attached to an element node.');
            }
          }

          return _this23;
        }
        /** The color of the badge. Can be `primary`, `accent`, or `warn`. */


        _createClass2(MatBadge, [{
          key: "isAbove",

          /** Whether the badge is above the host or not */
          value: function isAbove() {
            return this.position.indexOf('below') === -1;
          }
          /** Whether the badge is after the host or not */

        }, {
          key: "isAfter",
          value: function isAfter() {
            return this.position.indexOf('before') === -1;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var contentChange = changes['content'];

            if (contentChange) {
              var value = contentChange.currentValue;
              this._hasContent = value != null && "".concat(value).trim().length > 0;

              this._updateTextContent();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var badgeElement = this._badgeElement;

            if (badgeElement) {
              if (this.description) {
                this._ariaDescriber.removeDescription(badgeElement, this.description);
              } // When creating a badge through the Renderer, Angular will keep it in an index.
              // We have to destroy it ourselves, otherwise it'll be retained in memory.


              if (this._renderer.destroyNode) {
                this._renderer.destroyNode(badgeElement);
              }
            }
          }
          /**
           * Gets the element into which the badge's content is being rendered.
           * Undefined if the element hasn't been created (e.g. if the badge doesn't have content).
           */

        }, {
          key: "getBadgeElement",
          value: function getBadgeElement() {
            return this._badgeElement;
          }
          /** Injects a span element into the DOM with the content. */

        }, {
          key: "_updateTextContent",
          value: function _updateTextContent() {
            if (!this._badgeElement) {
              this._badgeElement = this._createBadgeElement();
            } else {
              this._badgeElement.textContent = this._stringifyContent();
            }

            return this._badgeElement;
          }
          /** Creates the badge element */

        }, {
          key: "_createBadgeElement",
          value: function _createBadgeElement() {
            var badgeElement = this._renderer.createElement('span');

            var activeClass = 'mat-badge-active';
            var contentClass = 'mat-badge-content'; // Clear any existing badges which may have persisted from a server-side render.

            this._clearExistingBadges(contentClass);

            badgeElement.setAttribute('id', "mat-badge-content-".concat(this._id));
            badgeElement.classList.add(contentClass);
            badgeElement.textContent = this._stringifyContent();

            if (this._animationMode === 'NoopAnimations') {
              badgeElement.classList.add('_mat-animation-noopable');
            }

            if (this.description) {
              badgeElement.setAttribute('aria-label', this.description);
            }

            this._elementRef.nativeElement.appendChild(badgeElement); // animate in after insertion


            if (typeof requestAnimationFrame === 'function' && this._animationMode !== 'NoopAnimations') {
              this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                  badgeElement.classList.add(activeClass);
                });
              });
            } else {
              badgeElement.classList.add(activeClass);
            }

            return badgeElement;
          }
          /** Sets the aria-label property on the element */

        }, {
          key: "_updateHostAriaDescription",
          value: function _updateHostAriaDescription(newDescription, oldDescription) {
            // ensure content available before setting label
            var content = this._updateTextContent();

            if (oldDescription) {
              this._ariaDescriber.removeDescription(content, oldDescription);
            }

            if (newDescription) {
              this._ariaDescriber.describe(content, newDescription);
            }
          }
          /** Adds css theme class given the color to the component host */

        }, {
          key: "_setColor",
          value: function _setColor(colorPalette) {
            if (colorPalette !== this._color) {
              var classList = this._elementRef.nativeElement.classList;

              if (this._color) {
                classList.remove("mat-badge-".concat(this._color));
              }

              if (colorPalette) {
                classList.add("mat-badge-".concat(colorPalette));
              }
            }
          }
          /** Clears any existing badges that might be left over from server-side rendering. */

        }, {
          key: "_clearExistingBadges",
          value: function _clearExistingBadges(cssClass) {
            var element = this._elementRef.nativeElement;
            var childCount = element.children.length; // Use a reverse while, because we'll be removing elements from the list as we're iterating.

            while (childCount--) {
              var currentChild = element.children[childCount];

              if (currentChild.classList.contains(cssClass)) {
                element.removeChild(currentChild);
              }
            }
          }
          /** Gets the string representation of the badge content. */

        }, {
          key: "_stringifyContent",
          value: function _stringifyContent() {
            // Convert null and undefined to an empty string which is consistent
            // with how Angular handles them in inside template interpolations.
            var content = this.content;
            return content == null ? '' : "".concat(content);
          }
        }, {
          key: "color",
          get: function get() {
            return this._color;
          },
          set: function set(value) {
            this._setColor(value);

            this._color = value;
          }
          /** Whether the badge should overlap its contents or not */

        }, {
          key: "overlap",
          get: function get() {
            return this._overlap;
          },
          set: function set(val) {
            this._overlap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val);
          }
          /** Message used to describe the decorated element via aria-describedby */

        }, {
          key: "description",
          get: function get() {
            return this._description;
          },
          set: function set(newDescription) {
            if (newDescription !== this._description) {
              var badgeElement = this._badgeElement;

              this._updateHostAriaDescription(newDescription, this._description);

              this._description = newDescription;

              if (badgeElement) {
                newDescription ? badgeElement.setAttribute('aria-label', newDescription) : badgeElement.removeAttribute('aria-label');
              }
            }
          }
          /** Whether the badge is hidden. */

        }, {
          key: "hidden",
          get: function get() {
            return this._hidden;
          },
          set: function set(val) {
            this._hidden = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val);
          }
        }]);

        return MatBadge;
      }(_MatBadgeMixinBase);

      MatBadge.ɵfac = function MatBadge_Factory(t) {
        return new (t || MatBadge)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatBadge.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatBadge,
        selectors: [["", "matBadge", ""]],
        hostAttrs: [1, "mat-badge"],
        hostVars: 20,
        hostBindings: function MatBadge_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx._hasContent)("mat-badge-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: ["matBadgeDisabled", "disabled"],
          position: ["matBadgePosition", "position"],
          size: ["matBadgeSize", "size"],
          color: ["matBadgeColor", "color"],
          overlap: ["matBadgeOverlap", "overlap"],
          description: ["matBadgeDescription", "description"],
          hidden: ["matBadgeHidden", "hidden"],
          content: ["matBadge", "content"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      MatBadge.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatBadge.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeColor']
        }],
        overlap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeOverlap']
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgePosition']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadge']
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeDescription']
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeSize']
        }],
        hidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeHidden']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatBadge, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matBadge]',
            inputs: ['disabled: matBadgeDisabled'],
            host: {
              'class': 'mat-badge',
              '[class.mat-badge-overlap]': 'overlap',
              '[class.mat-badge-above]': 'isAbove()',
              '[class.mat-badge-below]': '!isAbove()',
              '[class.mat-badge-before]': '!isAfter()',
              '[class.mat-badge-after]': 'isAfter()',
              '[class.mat-badge-small]': 'size === "small"',
              '[class.mat-badge-medium]': 'size === "medium"',
              '[class.mat-badge-large]': 'size === "large"',
              '[class.mat-badge-hidden]': 'hidden || !_hasContent',
              '[class.mat-badge-disabled]': 'disabled'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgePosition']
          }],
          size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeSize']
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeColor']
          }],
          overlap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeOverlap']
          }],
          description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeDescription']
          }],
          hidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeHidden']
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadge']
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


      var MatBadgeModule = function MatBadgeModule() {
        _classCallCheck2(this, MatBadgeModule);
      };

      MatBadgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatBadgeModule
      });
      MatBadgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatBadgeModule_Factory(t) {
          return new (t || MatBadgeModule)();
        },
        imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatBadgeModule, {
          declarations: function declarations() {
            return [MatBadge];
          },
          imports: function imports() {
            return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatBadgeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            declarations: [MatBadge]
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
      //# sourceMappingURL=badge.js.map

      /***/

    },

    /***/
    "VfXF":
    /*!*****************************************************************!*\
      !*** ./src/app/ui/expansion-panel/expansion-panel.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ExpansionPanelComponent */

    /***/
    function VfXF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponent", function () {
        return ExpansionPanelComponent;
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


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");

      var ExpansionPanelComponent = /*#__PURE__*/function () {
        function ExpansionPanelComponent() {
          _classCallCheck2(this, ExpansionPanelComponent);

          this.panelOpenState = false;
          this.step = 0;
        }

        _createClass2(ExpansionPanelComponent, [{
          key: "setStep",
          value: function setStep(index) {
            this.step = index;
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.step++;
          }
        }, {
          key: "prevStep",
          value: function prevStep() {
            this.step--;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExpansionPanelComponent;
      }();

      ExpansionPanelComponent.ɵfac = function ExpansionPanelComponent_Factory(t) {
        return new (t || ExpansionPanelComponent)();
      };

      ExpansionPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExpansionPanelComponent,
        selectors: [["app-expansion-panel"]],
        decls: 114,
        vars: 5,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "fill", 1, "example-full-width"], ["matInput", ""], ["matInput", "", "type", "number", "min", "1"], [3, "opened", "closed"], [1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], ["appearance", "fill"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]],
        template: function ExpansionPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Expansion");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Expansion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Basic expansion panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Personal data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Type your name and age ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Age");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-expansion-panel", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ExpansionPanelComponent_Template_mat_expansion_panel_opened_43_listener() {
              return ctx.panelOpenState = true;
            })("closed", function ExpansionPanelComponent_Template_mat_expansion_panel_closed_43_listener() {
              return ctx.panelOpenState = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Self aware panel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "I'm visible because I am open");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Expansion panel as accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-accordion", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-expansion-panel", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ExpansionPanelComponent_Template_mat_expansion_panel_opened_59_listener() {
              return ctx.setStep(0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Personal data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Type your name and age ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Age");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-action-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpansionPanelComponent_Template_button_click_76_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-expansion-panel", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ExpansionPanelComponent_Template_mat_expansion_panel_opened_78_listener() {
              return ctx.setStep(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Destination ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Type the country name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "map");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-form-field", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-action-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpansionPanelComponent_Template_button_click_91_listener() {
              return ctx.prevStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpansionPanelComponent_Template_button_click_93_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-expansion-panel", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ExpansionPanelComponent_Template_mat_expansion_panel_opened_95_listener() {
              return ctx.setStep(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Day of the trip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Inform the date you wish to travel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "date_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-form-field", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ExpansionPanelComponent_Template_input_focus_106_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](108);

              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "mat-datepicker", null, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-action-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpansionPanelComponent_Template_button_click_110_listener() {
              return ctx.prevStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpansionPanelComponent_Template_button_click_112_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "End");

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
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Currently I am ", ctx.panelOpenState ? "open" : "closed", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpansionPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-expansion-panel',
            templateUrl: './expansion-panel.component.html',
            styleUrls: ['./expansion-panel.component.sass']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "XfUL":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/mat-progress-buttons/__ivy_ngcc__/fesm2015/mat-progress-buttons.js ***!
      \*****************************************************************************************/

    /*! exports provided: MatBarButtonComponent, MatProgressButtonsModule, MatSpinnerButtonComponent */

    /***/
    function XfUL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatBarButtonComponent", function () {
        return MatBarButtonComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressButtonsModule", function () {
        return MatProgressButtonsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSpinnerButtonComponent", function () {
        return MatSpinnerButtonComponent;
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function MatSpinnerButtonComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-mat-icon", !ctx_r0.options.buttonIcon.fontSet)("active", ctx_r0.options.active && !ctx_r0.options.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.options.buttonIcon.customClass)("fontSet", ctx_r0.options.buttonIcon.fontSet)("fontIcon", ctx_r0.options.buttonIcon.fontIcon)("color", ctx_r0.options.buttonIcon.color)("svgIcon", ctx_r0.options.buttonIcon.svgIcon)("inline", ctx_r0.options.buttonIcon.inline);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.options.buttonIcon.fontSet ? "" : ctx_r0.options.buttonIcon.fontIcon, " ");
        }
      }

      function MatSpinnerButtonComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.options.active && !ctx_r1.options.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.options.text, " ");
        }
      }

      function MatSpinnerButtonComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fontSet", ctx_r2.options.icon.fontSet)("fontIcon", ctx_r2.options.icon.fontIcon)("color", ctx_r2.options.icon.color)("svgIcon", ctx_r2.options.icon.svgIcon)("inline", ctx_r2.options.icon.inline);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.options.icon.fontSet ? "" : ctx_r2.options.icon.fontIcon, " ");
        }
      }

      function MatSpinnerButtonComponent_mat_spinner_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 7);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.options.active && !ctx_r3.options.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", ctx_r3.options.fab ? 58 : ctx_r3.options.spinnerSize)("color", ctx_r3.options.spinnerColor)("mode", ctx_r3.options.mode)("value", ctx_r3.options.value);
        }
      }

      function MatBarButtonComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-mat-icon", !ctx_r0.options.buttonIcon.fontSet);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.options.buttonIcon.customClass)("fontSet", ctx_r0.options.buttonIcon.fontSet)("fontIcon", ctx_r0.options.buttonIcon.fontIcon)("color", ctx_r0.options.buttonIcon.color)("svgIcon", ctx_r0.options.buttonIcon.svgIcon)("inline", ctx_r0.options.buttonIcon.inline);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.options.buttonIcon.fontSet ? "" : ctx_r0.options.buttonIcon.fontIcon, " ");
        }
      }

      function MatBarButtonComponent_mat_progress_bar_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 4);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r1.options.barColor)("mode", ctx_r1.options.mode)("value", ctx_r1.options.value);
        }
      }

      var MatSpinnerButtonComponent = /*#__PURE__*/function () {
        function MatSpinnerButtonComponent() {
          _classCallCheck2(this, MatSpinnerButtonComponent);

          this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass2(MatSpinnerButtonComponent, [{
          key: "onClick",
          value: function onClick(event) {
            if (!this.options.disabled && !this.options.active) {
              this.btnClick.emit(event);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.active) {
              this.options.active = changes.active.currentValue;
            }

            if (changes.disabled) {
              this.options.disabled = changes.disabled.currentValue;
            }
          }
        }]);

        return MatSpinnerButtonComponent;
      }();

      MatSpinnerButtonComponent.ɵfac = function MatSpinnerButtonComponent_Factory(t) {
        return new (t || MatSpinnerButtonComponent)();
      };

      MatSpinnerButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatSpinnerButtonComponent,
        selectors: [["mat-spinner-button"]],
        hostBindings: function MatSpinnerButtonComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatSpinnerButtonComponent_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        },
        inputs: {
          options: "options",
          active: "active",
          disabled: "disabled"
        },
        outputs: {
          btnClick: "btnClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 20,
        consts: [["mat-button", "", 3, "type", "color", "ngClass", "disabled"], [4, "ngIf"], ["class", "button-text", 3, "active", 4, "ngIf"], ["class", "spinner", 3, "diameter", "color", "mode", "value", "active", 4, "ngIf"], [1, "mat-button-icon", 3, "ngClass", "fontSet", "fontIcon", "color", "svgIcon", "inline"], [1, "button-text"], [3, "fontSet", "fontIcon", "color", "svgIcon", "inline"], [1, "spinner", 3, "diameter", "color", "mode", "value"]],
        template: function MatSpinnerButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatSpinnerButtonComponent_ng_container_1_Template, 3, 11, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatSpinnerButtonComponent_span_2_Template, 2, 3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatSpinnerButtonComponent_ng_container_3_Template, 3, 6, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatSpinnerButtonComponent_mat_spinner_4_Template, 1, 6, "mat-spinner", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.options.active)("fullWidth", ctx.options.fullWidth)("mat-raised-button", ctx.options.raised)("mat-stroked-button", ctx.options.stroked)("mat-flat-button", ctx.options.flat)("mat-fab", ctx.options.fab);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.options.type)("color", ctx.options.buttonColor)("ngClass", ctx.options.customClass)("disabled", ctx.options.active || ctx.options.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.buttonIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.options.fab);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.fab && ctx.options.icon);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.active && !ctx.options.disabled);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"]],
        styles: ["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{outline:none}[_nghost-%COMP%]   button.active[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper{align-items:center;display:flex;justify-content:center}[_nghost-%COMP%]   button.fullWidth[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   button.mat-fab[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{margin-top:-15px}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{opacity:0;position:absolute;top:25%;transition:opacity .3s ease-in-out}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .spinner.active[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%]{opacity:1;transition:opacity .3s ease-in-out}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .button-text.active[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.mat-button-icon[_ngcontent-%COMP%]{padding-right:5px;transition:opacity .3s ease-in-out}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.mat-button-icon.is-mat-icon[_ngcontent-%COMP%]{font-size:18px;position:relative;top:3px}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.mat-button-icon.active[_ngcontent-%COMP%]{opacity:0}"]
      });
      MatSpinnerButtonComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        btnClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSpinnerButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'mat-spinner-button',
            template: "<button mat-button\n  [type]=\"options.type\"\n  [color]=\"options.buttonColor\"\n  [class.active]=\"options.active\"\n  [class.fullWidth]=\"options.fullWidth\"\n  [class.mat-raised-button]=\"options.raised\"\n  [class.mat-stroked-button]=\"options.stroked\"\n  [class.mat-flat-button]=\"options.flat\"\n  [class.mat-fab]=\"options.fab\"\n  [ngClass]=\"options.customClass\"\n  [disabled]=\"options.active || options.disabled\">\n\n  <ng-container\n    *ngIf=\"options.buttonIcon\">\n    <mat-icon\n      class=\"mat-button-icon\"\n      [class.is-mat-icon]=\"!options.buttonIcon.fontSet\"\n      [class.active]=\"options.active && !options.disabled\"\n      [ngClass]=\"options.buttonIcon.customClass\"\n      [fontSet]=\"options.buttonIcon.fontSet\"\n      [fontIcon]=\"options.buttonIcon.fontIcon\"\n      [color]=\"options.buttonIcon.color\"\n      [svgIcon]=\"options.buttonIcon.svgIcon\"\n      [inline]=\"options.buttonIcon.inline\">\n      {{ options.buttonIcon.fontSet ? '' : options.buttonIcon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <span\n    class=\"button-text\"\n    *ngIf=\"!options.fab\"\n    [class.active]=\"options.active && !options.disabled\">\n      {{ options.text }}\n  </span>\n\n  <ng-container\n    *ngIf=\"options.fab && options.icon\">\n    <mat-icon\n      [fontSet]=\"options.icon.fontSet\"\n      [fontIcon]=\"options.icon.fontIcon\"\n      [color]=\"options.icon.color\"\n      [svgIcon]=\"options.icon.svgIcon\"\n      [inline]=\"options.icon.inline\">\n        {{ options.icon.fontSet ? '' : options.icon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <mat-spinner class=\"spinner\"\n    *ngIf=\"options.active && !options.disabled\"\n    [diameter]=\"options.fab ? 58 : options.spinnerSize\"\n    [color]=\"options.spinnerColor\"\n    [mode]=\"options.mode\"\n    [value]=\"options.value\"\n    [class.active]=\"options.active && !options.disabled\">\n  </mat-spinner>\n</button>\n",
            styles: [":host button{outline:none}:host button.active{cursor:not-allowed}:host button ::ng-deep .mat-button-wrapper{align-items:center;display:flex;justify-content:center}:host button.fullWidth{width:100%}:host button.mat-fab .spinner{margin-top:-15px}:host button .spinner{opacity:0;position:absolute;top:25%;transition:opacity .3s ease-in-out}:host button .spinner.active{opacity:1}:host button .button-text{opacity:1;transition:opacity .3s ease-in-out}:host button .button-text.active{opacity:0}:host button mat-icon.mat-button-icon{padding-right:5px;transition:opacity .3s ease-in-out}:host button mat-icon.mat-button-icon.is-mat-icon{font-size:18px;position:relative;top:3px}:host button mat-icon.mat-button-icon.active{opacity:0}"]
          }]
        }], function () {
          return [];
        }, {
          btnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var MatBarButtonComponent = /*#__PURE__*/function () {
        function MatBarButtonComponent() {
          _classCallCheck2(this, MatBarButtonComponent);

          this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass2(MatBarButtonComponent, [{
          key: "onClick",
          value: function onClick(event) {
            if (!this.options.disabled && !this.options.active) {
              this.btnClick.emit(event);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.active) {
              this.options.active = changes.active.currentValue;
            }

            if (changes.disabled) {
              this.options.disabled = changes.disabled.currentValue;
            }
          }
        }]);

        return MatBarButtonComponent;
      }();

      MatBarButtonComponent.ɵfac = function MatBarButtonComponent_Factory(t) {
        return new (t || MatBarButtonComponent)();
      };

      MatBarButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatBarButtonComponent,
        selectors: [["mat-bar-button"]],
        hostBindings: function MatBarButtonComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatBarButtonComponent_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        },
        inputs: {
          options: "options",
          active: "active",
          disabled: "disabled"
        },
        outputs: {
          btnClick: "btnClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 17,
        consts: [["mat-button", "", 3, "type", "color", "ngClass", "disabled"], [4, "ngIf"], ["class", "bar", 3, "color", "mode", "value", 4, "ngIf"], [3, "ngClass", "fontSet", "fontIcon", "color", "svgIcon", "inline"], [1, "bar", 3, "color", "mode", "value"]],
        template: function MatBarButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatBarButtonComponent_ng_container_1_Template, 3, 9, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatBarButtonComponent_mat_progress_bar_4_Template, 1, 3, "mat-progress-bar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.options.active)("mat-raised-button", ctx.options.raised)("mat-stroked-button", ctx.options.stroked)("mat-flat-button", ctx.options.flat)("fullWidth", ctx.options.fullWidth);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.options.type)("color", ctx.options.buttonColor)("ngClass", ctx.options.customClass)("disabled", ctx.options.active || ctx.options.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.buttonIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.options.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.active && !ctx.options.disabled);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"]],
        styles: ["[_nghost-%COMP%]   button.active[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]   button.fullWidth[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{left:0;position:absolute;top:0}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.is-mat-icon[_ngcontent-%COMP%]{font-size:18px;position:relative;top:3px}"]
      });
      MatBarButtonComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        btnClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatBarButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'mat-bar-button',
            template: "<button mat-button\n  [type]=\"options.type\"\n  [color]=\"options.buttonColor\"\n  [class.active]=\"options.active\"\n  [class.mat-raised-button]=\"options.raised\"\n  [class.mat-stroked-button]=\"options.stroked\"\n  [class.mat-flat-button]=\"options.flat\"\n  [class.fullWidth]=\"options.fullWidth\"\n  [ngClass]=\"options.customClass\"\n  [disabled]=\"options.active || options.disabled\">\n\n  <ng-container\n    *ngIf=\"options.buttonIcon\">\n    <mat-icon\n      [class.is-mat-icon]=\"!options.buttonIcon.fontSet\"\n      [ngClass]=\"options.buttonIcon.customClass\"\n      [fontSet]=\"options.buttonIcon.fontSet\"\n      [fontIcon]=\"options.buttonIcon.fontIcon\"\n      [color]=\"options.buttonIcon.color\"\n      [svgIcon]=\"options.buttonIcon.svgIcon\"\n      [inline]=\"options.buttonIcon.inline\">\n      {{ options.buttonIcon.fontSet ? '' : options.buttonIcon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <span>{{ options.text }}</span>\n\n  <mat-progress-bar\n    class=\"bar\"\n    *ngIf=\"options.active && !options.disabled\"\n    [color]=\"options.barColor\"\n    [mode]=\"options.mode\"\n    [value]=\"options.value\">\n  </mat-progress-bar>\n</button>\n",
            styles: [":host button.active{cursor:not-allowed}:host button.fullWidth{width:100%}:host button .bar{left:0;position:absolute;top:0}:host button mat-icon{padding-right:5px}:host button mat-icon.is-mat-icon{font-size:18px;position:relative;top:3px}"]
          }]
        }], function () {
          return [];
        }, {
          btnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var MatProgressButtonsModule = /*#__PURE__*/function () {
        function MatProgressButtonsModule() {
          _classCallCheck2(this, MatProgressButtonsModule);
        }

        _createClass2(MatProgressButtonsModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: MatProgressButtonsModule
            };
          }
        }]);

        return MatProgressButtonsModule;
      }();

      MatProgressButtonsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatProgressButtonsModule
      });
      MatProgressButtonsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatProgressButtonsModule_Factory(t) {
          return new (t || MatProgressButtonsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatProgressButtonsModule, {
          declarations: function declarations() {
            return [MatSpinnerButtonComponent, MatBarButtonComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]];
          },
          exports: function exports() {
            return [MatSpinnerButtonComponent, MatBarButtonComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatProgressButtonsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]],
            exports: [MatSpinnerButtonComponent, MatBarButtonComponent],
            declarations: [MatSpinnerButtonComponent, MatBarButtonComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=mat-progress-buttons.js.map

      /***/

    },

    /***/
    "YoVG":
    /*!*******************************************!*\
      !*** ./src/app/ui/tabs/tabs.component.ts ***!
      \*******************************************/

    /*! exports provided: TabsComponent */

    /***/
    function YoVG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
        return TabsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function TabsComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "thumb_up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " First ");
        }
      }

      function TabsComponent_ng_template_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "thumb_up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Second ");
        }
      }

      function TabsComponent_ng_template_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "thumb_up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Third ");
        }
      }

      function TabsComponent_mat_tab_105_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_mat_tab_105_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var index_r6 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.removeTab(index_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Delete Tab ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tab_r5 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", tab_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Contents for ", tab_r5, " tab ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.tabs.length === 1);
        }
      }

      var TabsComponent = /*#__PURE__*/function () {
        function TabsComponent() {
          _classCallCheck2(this, TabsComponent);

          this.tabs = ['First', 'Second', 'Third'];
          this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        }

        _createClass2(TabsComponent, [{
          key: "addTab",
          value: function addTab(selectAfterAdding) {
            this.tabs.push('New');

            if (selectAfterAdding) {
              this.selected.setValue(this.tabs.length - 1);
            }
          }
        }, {
          key: "removeTab",
          value: function removeTab(index) {
            this.tabs.splice(index, 1);
          }
        }]);

        return TabsComponent;
      }();

      TabsComponent.ɵfac = function TabsComponent_Factory(t) {
        return new (t || TabsComponent)();
      };

      TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TabsComponent,
        selectors: [["app-tabs"]],
        decls: 134,
        vars: 3,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["mat-tab-label", ""], ["dynamicHeight", ""], ["label", "Short tab"], [1, "example-small-box", "mat-elevation-z4"], ["label", "Long tab"], [1, "example-large-box", "mat-elevation-z4"], ["matInput", "", "type", "number", 3, "formControl"], [1, "mb-3"], ["mat-raised-button", "", 1, "example-add-tab-button", "mr-2", 3, "click"], ["selectAfterAdding", ""], [3, "selectedIndex", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], ["headerPosition", "below"], ["mat-stretch-tabs", "", 1, "example-stretched-tabs", "mat-elevation-z4"], [1, "example-tab-icon", "mr-2"], [3, "label"], ["mat-raised-button", "", 1, "example-delete-tab-button", 3, "disabled", "click"]],
        template: function TabsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tabs");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Basic Tab Examples");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-tab", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Home Content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius. Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren sadipscing mel. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-tab", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Profile Content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius. Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren sadipscing mel. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-tab", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Message Content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius. Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren sadipscing mel. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Tab With Icons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, TabsComponent_ng_template_53_Template, 3, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Home Content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius. Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren sadipscing mel. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, TabsComponent_ng_template_60_Template, 3, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Profile Content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius. Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren sadipscing mel. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, TabsComponent_ng_template_67_Template, 3, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Message Content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius. Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren sadipscing mel. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Tab group with dynamic height based on tab contents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-tab-group", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-tab", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Small content ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-tab", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Large content ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Tab group with dynamically changing tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Selected tab index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_99_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](102);

              return ctx.addTab(_r3.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Add new tab ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-checkbox", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Select tab after adding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-tab-group", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function TabsComponent_Template_mat_tab_group_selectedIndexChange_104_listener($event) {
              return ctx.selected.setValue($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, TabsComponent_mat_tab_105_Template, 5, 3, "mat-tab", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Tab group with the headers on the bottom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-tab-group", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-tab", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Content 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-tab", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Content 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-tab", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Content 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Tab group with stretched labels ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-tab-group", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-tab", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Content 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-tab", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Content 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-tab", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Content 3 ");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selected.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "cpVf":
    /*!*********************************************!*\
      !*** ./src/app/ui/cards/cards.component.ts ***!
      \*********************************************/

    /*! exports provided: CardsComponent */

    /***/
    function cpVf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
        return CardsComponent;
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


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var CardsComponent = /*#__PURE__*/function () {
        function CardsComponent() {
          _classCallCheck2(this, CardsComponent);
        }

        _createClass2(CardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardsComponent;
      }();

      CardsComponent.ɵfac = function CardsComponent_Factory(t) {
        return new (t || CardsComponent)();
      };

      CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardsComponent,
        selectors: [["app-cards"]],
        decls: 232,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-12"], [1, "card"], [1, "header"], [1, "body"], [1, "col-xs-12", "col-sm-4", "col-md-4", "col-lg-4"], ["mat-card-avatar", "", "src", "assets/images/user/user3.jpg"], ["mat-card-image", "", "src", "assets/images/image-gallery/5.jpg"], ["fxLayout", "row"], ["mat-icon-button", ""], [1, "col-blue"], [1, "col-red"], ["fxFlex", ""], ["mat-button", ""], ["mat-card-avatar", "", "src", "assets/images/user/user1.jpg"], ["mat-card-image", "", "src", "assets/images/image-gallery/7.jpg"], ["mat-card-avatar", "", "src", "assets/images/user/user2.jpg"], ["mat-card-image", "", "src", "assets/images/image-gallery/2.jpg"], [1, "row", "clearfix"], [1, "col-lg-4", "col-md-4", "col-sm-6", "col-xs-12"], [1, "header-dropdown", "m-r--5"], [1, "material-icons"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "dropdown-menu", "pull-right"], [1, "header-dropdown", "m-r-0"], [1, "header", "bg-red"], [1, "header", "bg-cyan"], [1, "header", "bg-green"], [1, "body", "bg-red"], [1, "body", "bg-cyan"], [1, "body", "bg-green"]],
        template: function CardsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cards");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cards");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Material Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "John Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "share");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "John Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Tester");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "share");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Airi Satou");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Administrator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "share");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " save ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Basic Card Title ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Description text here...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Basic Card Title ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Description text here...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "ul", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "mic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ul", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Basic Card Title ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Description text here...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "ul", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "info_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "help_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Red - Title ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Description text here...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Cyan - Title ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Description text here...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "ul", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "mic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "ul", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Green - Title ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Description text here...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "ul", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "info_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "help_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "No Header Cards");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cards',
            templateUrl: './cards.component.html',
            styleUrls: ['./cards.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "j8K5":
    /*!*************************************************!*\
      !*** ./src/app/ui/dialogs/dialogs.component.ts ***!
      \*************************************************/

    /*! exports provided: DialogsComponent */

    /***/
    function j8K5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogsComponent", function () {
        return DialogsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var DialogsComponent = /*#__PURE__*/function () {
        function DialogsComponent() {
          _classCallCheck2(this, DialogsComponent);
        }

        _createClass2(DialogsComponent, [{
          key: "showBasicMessage",
          value: function showBasicMessage() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Here is a message!');
          }
        }, {
          key: "showWithTitleMessage",
          value: function showWithTitleMessage() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('The Internet?', 'That thing is still around?', 'question');
          }
        }, {
          key: "showTitleErorIcon",
          value: function showTitleErorIcon() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href>Why do I have this issue?</a>'
            });
          }
        }, {
          key: "showLongContent",
          value: function showLongContent() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              imageUrl: 'https://placeholder.pics/svg/300x1500',
              imageHeight: 1500,
              imageAlt: 'A tall image'
            });
          }
        }, {
          key: "showCustomHtml",
          value: function showCustomHtml() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: '<strong>HTML <u>example</u></strong>',
              icon: 'info',
              html: 'You can use <b>bold text</b>, ' + '<a href="//sweetalert2.github.io">links</a> ' + 'and other HTML tags',
              showCloseButton: true,
              showCancelButton: true,
              focusConfirm: false,
              confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
              confirmButtonAriaLabel: 'Thumbs up, great!',
              cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
              cancelButtonAriaLabel: 'Thumbs down'
            });
          }
        }, {
          key: "showCustomPosition",
          value: function showCustomPosition() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
        }, {
          key: "customAnimation",
          value: function customAnimation() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Custom animation with Animate.css',
              showClass: {
                popup: 'animated fadeInDown faster'
              },
              hideClass: {
                popup: 'animated fadeOutUp faster'
              }
            });
          }
        }, {
          key: "customWithFunction",
          value: function customWithFunction() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(function (result) {
              if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
              }
            });
          }
        }, {
          key: "passParameter",
          value: function passParameter() {
            var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
              customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
              },
              buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'No, cancel!',
              reverseButtons: true
            }).then(function (result) {
              if (result.value) {
                swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
              } else if (
              /* Read more about handling dismissals below */
              result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
              }
            });
          }
        }, {
          key: "rtlSupport",
          value: function rtlSupport() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'هل تريد الاستمرار؟',
              icon: 'question',
              iconHtml: '؟',
              confirmButtonText: 'نعم',
              cancelButtonText: 'لا',
              showCancelButton: true,
              showCloseButton: true
            });
          }
        }, {
          key: "chainModal",
          value: function chainModal() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
              input: 'text',
              confirmButtonText: 'Next &rarr;',
              showCancelButton: true,
              progressSteps: ['1', '2', '3']
            }).queue([{
              title: 'Question 1',
              text: 'Chaining swal2 modals is easy'
            }, 'Question 2', 'Question 3']);
          }
        }, {
          key: "ajaxRequest",
          value: function ajaxRequest() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Submit your Github username',
              input: 'text',
              inputAttributes: {
                autocapitalize: 'off'
              },
              showCancelButton: true,
              confirmButtonText: 'Look up',
              showLoaderOnConfirm: true,
              preConfirm: function preConfirm(login) {
                return fetch("//api.github.com/users/".concat(login)).then(function (response) {
                  if (!response.ok) {
                    throw new Error(response.statusText);
                  }

                  return response.json();
                })["catch"](function (error) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.showValidationMessage("Request failed: ".concat(error));
                });
              },
              allowOutsideClick: function allowOutsideClick() {
                return !sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.isLoading();
              }
            }).then(function (result) {
              if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  title: "".concat(result.value.login, "'s avatar"),
                  imageUrl: result.value.avatar_url
                });
              }
            });
          }
        }]);

        return DialogsComponent;
      }();

      DialogsComponent.ɵfac = function DialogsComponent_Factory(t) {
        return new (t || DialogsComponent)();
      };

      DialogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DialogsComponent,
        selectors: [["app-dialogs"]],
        decls: 86,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [1, "row", "clearfix", "js-sweetalert"], [1, "col-xs-12", "col-sm-6", "col-md-6", "col-lg-6"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function DialogsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dialogs");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Dialogs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Examples");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "A basic message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogsComponent_Template_button_click_29_listener() {
              return ctx.showBasicMessage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "CLICK ME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "A title with a text under");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogsComponent_Template_button_click_34_listener() {
              return ctx.showWithTitleMessage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "CLICK ME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "A modal with a title, an error icon, a text, and a footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogsComponent_Template_button_click_39_listener() {
              return ctx.showTitleErorIcon();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "CLICK ME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "A modal window with a long content inside:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogsComponent_Template_button_click_44_listener() {
              return ctx.showLongContent();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "CLICK ME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Custom HTML description and buttons with ARIA labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogsComponent_Template_button_click_49_listener() {
              return ctx.showCustomHtml();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "CLICK ME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "A custom positioned dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogsComponent_Template_button_click_54_listener() {
              return ctx.showCustomPosition();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "CLICK ME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Custom animation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogsComponent_Template_button_click_59_listener() {
              return ctx.customAnimation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "CLICK ME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "A confirm dialog, with a function attached to the \"Confirm\"-button...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogsComponent_Template_button_click_64_listener() {
              return ctx.customWithFunction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "CLICK ME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "passing a parameter, you can execute something else for \"Cancel\".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogsComponent_Template_button_click_69_listener() {
              return ctx.passParameter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "CLICK ME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Right-to-left support for Arabic, Persian, Hebrew, and other RTL languages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogsComponent_Template_button_click_74_listener() {
              return ctx.rtlSupport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "CLICK ME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Chaining modals (queue) example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogsComponent_Template_button_click_79_listener() {
              return ctx.chainModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "CLICK ME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "AJAX request example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogsComponent_Template_button_click_84_listener() {
              return ctx.ajaxRequest();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "CLICK ME");

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
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2RpYWxvZ3MvZGlhbG9ncy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dialogs',
            templateUrl: './dialogs.component.html',
            styleUrls: ['./dialogs.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "k7nO":
    /*!*****************************************!*\
      !*** ./src/app/ui/ui-routing.module.ts ***!
      \*****************************************/

    /*! exports provided: UiRoutingModule */

    /***/
    function k7nO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiRoutingModule", function () {
        return UiRoutingModule;
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


      var _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cards/cards.component */
      "cpVf");
      /* harmony import */


      var _dialogs_dialogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dialogs/dialogs.component */
      "j8K5");
      /* harmony import */


      var _labels_labels_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./labels/labels.component */
      "ItKU");
      /* harmony import */


      var _list_group_list_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-group/list-group.component */
      "H0+f");
      /* harmony import */


      var _media_object_media_object_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./media-object/media-object.component */
      "MWcE");
      /* harmony import */


      var _preloaders_preloaders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./preloaders/preloaders.component */
      "H46g");
      /* harmony import */


      var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tabs/tabs.component */
      "YoVG");
      /* harmony import */


      var _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./typography/typography.component */
      "4Wg2");
      /* harmony import */


      var _helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./helper-classes/helper-classes.component */
      "KMo+");
      /* harmony import */


      var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./alerts/alerts.component */
      "9ia5");
      /* harmony import */


      var _badge_badge_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./badge/badge.component */
      "Swaq");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "rOXB");
      /* harmony import */


      var _progressbars_progressbars_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./progressbars/progressbars.component */
      "xZLv");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./modal/modal.component */
      "kHC1");
      /* harmony import */


      var _chips_chips_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./chips/chips.component */
      "8Qvw");
      /* harmony import */


      var _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./bottom-sheet/bottom-sheet.component */
      "7qrV");
      /* harmony import */


      var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./snackbar/snackbar.component */
      "w3Df");
      /* harmony import */


      var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./expansion-panel/expansion-panel.component */
      "VfXF");

      var routes = [{
        path: 'alerts',
        component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_11__["AlertsComponent"]
      }, {
        path: 'badges',
        component: _badge_badge_component__WEBPACK_IMPORTED_MODULE_12__["BadgeComponent"]
      }, {
        path: 'chips',
        component: _chips_chips_component__WEBPACK_IMPORTED_MODULE_16__["ChipsComponent"]
      }, {
        path: 'buttons',
        component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_13__["ButtonsComponent"]
      }, {
        path: 'cards',
        component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__["CardsComponent"]
      }, {
        path: 'expansion-panel',
        component: _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_19__["ExpansionPanelComponent"]
      }, {
        path: 'bottom-sheet',
        component: _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_17__["BottomSheetComponent"]
      }, {
        path: 'dialogs',
        component: _dialogs_dialogs_component__WEBPACK_IMPORTED_MODULE_3__["DialogsComponent"]
      }, {
        path: 'labels',
        component: _labels_labels_component__WEBPACK_IMPORTED_MODULE_4__["LabelsComponent"]
      }, {
        path: 'list-group',
        component: _list_group_list_group_component__WEBPACK_IMPORTED_MODULE_5__["ListGroupComponent"]
      }, {
        path: 'media-object',
        component: _media_object_media_object_component__WEBPACK_IMPORTED_MODULE_6__["MediaObjectComponent"]
      }, {
        path: 'modal',
        component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"]
      }, {
        path: 'snackbar',
        component: _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_18__["SnackbarComponent"]
      }, {
        path: 'preloaders',
        component: _preloaders_preloaders_component__WEBPACK_IMPORTED_MODULE_7__["PreloadersComponent"]
      }, {
        path: 'progressbars',
        component: _progressbars_progressbars_component__WEBPACK_IMPORTED_MODULE_14__["ProgressbarsComponent"]
      }, {
        path: 'tabs',
        component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"]
      }, {
        path: 'typography',
        component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__["TypographyComponent"]
      }, {
        path: 'helper-classes',
        component: _helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_10__["HelperClassesComponent"]
      }];

      var UiRoutingModule = function UiRoutingModule() {
        _classCallCheck2(this, UiRoutingModule);
      };

      UiRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UiRoutingModule
      });
      UiRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UiRoutingModule_Factory(t) {
          return new (t || UiRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiRoutingModule, [{
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
    "kHC1":
    /*!*********************************************!*\
      !*** ./src/app/ui/modal/modal.component.ts ***!
      \*********************************************/

    /*! exports provided: ModalComponent */

    /***/
    function kHC1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
        return ModalComponent;
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


      var _simpleDialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./simpleDialog.component */
      "MMyP");
      /* harmony import */


      var _dialogform_dialogform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dialogform/dialogform.component */
      "uiVW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ModalComponent_ng_template_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_54_Template_button_click_3_listener() {
            var modal_r6 = ctx.$implicit;
            return modal_r6.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Content goes here.. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_54_Template_button_click_10_listener() {
            var modal_r6 = ctx.$implicit;
            return modal_r6.close("Save click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_61_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter first name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_61_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid first name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_61_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter last name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_61_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid last name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_61_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter email id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_61_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid email id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_61_Template_button_click_3_listener() {
            var modal_r9 = ctx.$implicit;
            return modal_r9.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ModalComponent_ng_template_61_mat_error_12_Template, 2, 0, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ModalComponent_ng_template_61_mat_error_13_Template, 2, 0, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ModalComponent_ng_template_61_mat_error_17_Template, 2, 0, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ModalComponent_ng_template_61_mat_error_18_Template, 2, 0, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ModalComponent_ng_template_61_mat_error_22_Template, 2, 0, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ModalComponent_ng_template_61_mat_error_23_Template, 2, 0, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "textarea", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_61_Template_button_click_30_listener() {
            var modal_r9 = ctx.$implicit;
            return modal_r9.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.addCusForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r3.fname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.addCusForm.controls.firstname.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.addCusForm.controls.firstname.hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r3.lname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.addCusForm.controls.lastname.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.addCusForm.controls.lastname.hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.addCusForm.controls.email.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.addCusForm.controls.email.hasError("email"));
        }
      }

      function ModalComponent_ng_template_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_68_Template_button_click_3_listener() {
            var modal_r18 = ctx.$implicit;
            return modal_r18.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Content goes here.. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_68_Template_button_click_12_listener() {
            var modal_r18 = ctx.$implicit;
            return modal_r18.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ModalComponent = /*#__PURE__*/function () {
        function ModalComponent(dialogModel, fb, modalService) {
          _classCallCheck2(this, ModalComponent);

          this.dialogModel = dialogModel;
          this.fb = fb;
          this.modalService = modalService;
          this.closeResult = '';
          this.fname = 'John';
          this.lname = 'Deo';
        }

        _createClass2(ModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addCusForm = this.fb.group({
              IdProof: null,
              firstname: [this.fname, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
              lastname: [this.lname, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
              email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
            });
          }
        }, {
          key: "dialog",
          value: function dialog() {
            this.simpleDialog = this.dialogModel.open(_simpleDialog_component__WEBPACK_IMPORTED_MODULE_2__["SimpleDialogComponent"]);
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialogModel.open(_dialogform_dialogform_component__WEBPACK_IMPORTED_MODULE_3__["DialogformComponent"], {
              width: '640px',
              disableClose: true
            });
          } // Bootstrap Modal

        }, {
          key: "Basicopen",
          value: function Basicopen(content) {
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            });
          }
        }, {
          key: "FormModalOpen",
          value: function FormModalOpen(content) {
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            });
          }
        }, {
          key: "openVerticallyCentered",
          value: function openVerticallyCentered(content) {
            this.modalService.open(content, {
              centered: true
            });
          }
        }, {
          key: "openSm",
          value: function openSm(content) {
            this.modalService.open(content, {
              size: 'sm'
            });
          }
        }, {
          key: "openLg",
          value: function openLg(content) {
            this.modalService.open(content, {
              size: 'lg'
            });
          }
        }, {
          key: "openXl",
          value: function openXl(content) {
            this.modalService.open(content, {
              size: 'xl'
            });
          }
        }]);

        return ModalComponent;
      }();

      ModalComponent.ɵfac = function ModalComponent_Factory(t) {
        return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]));
      };

      ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalComponent,
        selectors: [["app-modal"]],
        decls: 87,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "row", "clearfix", "js-sweetalert"], [1, "col-xs-12", "col-sm-6", "col-md-6", "col-lg-6"], ["content", ""], ["mat-raised-button", "", "type", "button", "color", "primary", 3, "click"], ["formContent", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "material-icons"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [3, "formGroup"], [1, "text-inside"], [1, "example-full-width"], ["matInput", "", "placeholder", "First Name", "formControlName", "firstname", "required", "", 3, "value"], [4, "ngIf"], ["matInput", "", "placeholder", "Last Name", "formControlName", "lastname", "required", "", 3, "value"], ["matInput", "", "placeholder", "Email address", "formControlName", "email", "required", ""], ["matInput", "", "placeholder", "Address"], ["mat-raised-button", "", "type", "button", "color", "primary"], ["mat-button", "", "type", "button", 3, "click"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Modals");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Modals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Simple Modal Dialog ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Simple Dialog With Action Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_28_listener() {
              return ctx.dialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Click Me To Open Dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Dialog With Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Dialog with Form Example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_41_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Click Here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Bootstrap Modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Basic Modal Demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ModalComponent_ng_template_54_Template, 12, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_56_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);

              return ctx.Basicopen(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Basic Modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Modal With Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ModalComponent_ng_template_61_Template, 32, 9, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_63_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

              return ctx.FormModalOpen(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Modal With Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Modal With Vertically Centered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ModalComponent_ng_template_68_Template, 14, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_70_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

              return ctx.openVerticallyCentered(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Vertically Center ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Small Modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_75_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

              return ctx.openSm(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Small Modal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Large Modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_80_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

              return ctx.openLg(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Large Modal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Extra Large Modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_85_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

              return ctx.openXl(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Extra Large Modal ");

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
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "oRDy":
    /*!*********************************!*\
      !*** ./src/app/ui/ui.module.ts ***!
      \*********************************/

    /*! exports provided: UiModule */

    /***/
    function oRDy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiModule", function () {
        return UiModule;
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


      var _ui_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ui-routing.module */
      "k7nO");
      /* harmony import */


      var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alerts/alerts.component */
      "9ia5");
      /* harmony import */


      var _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./badge/badge.component */
      "Swaq");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "rOXB");
      /* harmony import */


      var _cards_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./cards/cards.component */
      "cpVf");
      /* harmony import */


      var _dialogs_dialogs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dialogs/dialogs.component */
      "j8K5");
      /* harmony import */


      var _helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./helper-classes/helper-classes.component */
      "KMo+");
      /* harmony import */


      var _labels_labels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./labels/labels.component */
      "ItKU");
      /* harmony import */


      var _list_group_list_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./list-group/list-group.component */
      "H0+f");
      /* harmony import */


      var _media_object_media_object_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./media-object/media-object.component */
      "MWcE");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./modal/modal.component */
      "kHC1");
      /* harmony import */


      var _preloaders_preloaders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./preloaders/preloaders.component */
      "H46g");
      /* harmony import */


      var _progressbars_progressbars_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./progressbars/progressbars.component */
      "xZLv");
      /* harmony import */


      var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./tabs/tabs.component */
      "YoVG");
      /* harmony import */


      var _typography_typography_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./typography/typography.component */
      "4Wg2");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _chips_chips_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./chips/chips.component */
      "8Qvw");
      /* harmony import */


      var _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./bottom-sheet/bottom-sheet.component */
      "7qrV");
      /* harmony import */


      var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./snackbar/snackbar.component */
      "w3Df");
      /* harmony import */


      var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./expansion-panel/expansion-panel.component */
      "VfXF");
      /* harmony import */


      var _modal_simpleDialog_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./modal/simpleDialog.component */
      "MMyP");
      /* harmony import */


      var _modal_dialogform_dialogform_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./modal/dialogform/dialogform.component */
      "uiVW");
      /* harmony import */


      var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! mat-progress-buttons */
      "XfUL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");

      var UiModule = function UiModule() {
        _classCallCheck2(this, UiModule);
      };

      UiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UiModule
      });
      UiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UiModule_Factory(t) {
          return new (t || UiModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ui_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__["MatBottomSheetModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__["NgbModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_45__["MatMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_43__["MatProgressButtonsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiModule, {
          declarations: [_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_4__["AlertsComponent"], _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__["BadgeComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_6__["ButtonsComponent"], _cards_cards_component__WEBPACK_IMPORTED_MODULE_7__["CardsComponent"], _dialogs_dialogs_component__WEBPACK_IMPORTED_MODULE_8__["DialogsComponent"], _helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_9__["HelperClassesComponent"], _labels_labels_component__WEBPACK_IMPORTED_MODULE_10__["LabelsComponent"], _list_group_list_group_component__WEBPACK_IMPORTED_MODULE_11__["ListGroupComponent"], _media_object_media_object_component__WEBPACK_IMPORTED_MODULE_12__["MediaObjectComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"], _preloaders_preloaders_component__WEBPACK_IMPORTED_MODULE_14__["PreloadersComponent"], _progressbars_progressbars_component__WEBPACK_IMPORTED_MODULE_15__["ProgressbarsComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__["TabsComponent"], _typography_typography_component__WEBPACK_IMPORTED_MODULE_17__["TypographyComponent"], _chips_chips_component__WEBPACK_IMPORTED_MODULE_37__["ChipsComponent"], _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_38__["BottomSheetComponent"], _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_39__["SnackbarComponent"], _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_40__["ExpansionPanelComponent"], _modal_simpleDialog_component__WEBPACK_IMPORTED_MODULE_41__["SimpleDialogComponent"], _modal_dialogform_dialogform_component__WEBPACK_IMPORTED_MODULE_42__["DialogformComponent"], _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_38__["BottomSheetOverviewExampleSheet"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ui_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__["MatBottomSheetModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__["NgbModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_45__["MatMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_43__["MatProgressButtonsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_4__["AlertsComponent"], _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__["BadgeComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_6__["ButtonsComponent"], _cards_cards_component__WEBPACK_IMPORTED_MODULE_7__["CardsComponent"], _dialogs_dialogs_component__WEBPACK_IMPORTED_MODULE_8__["DialogsComponent"], _helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_9__["HelperClassesComponent"], _labels_labels_component__WEBPACK_IMPORTED_MODULE_10__["LabelsComponent"], _list_group_list_group_component__WEBPACK_IMPORTED_MODULE_11__["ListGroupComponent"], _media_object_media_object_component__WEBPACK_IMPORTED_MODULE_12__["MediaObjectComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"], _preloaders_preloaders_component__WEBPACK_IMPORTED_MODULE_14__["PreloadersComponent"], _progressbars_progressbars_component__WEBPACK_IMPORTED_MODULE_15__["ProgressbarsComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__["TabsComponent"], _typography_typography_component__WEBPACK_IMPORTED_MODULE_17__["TypographyComponent"], _chips_chips_component__WEBPACK_IMPORTED_MODULE_37__["ChipsComponent"], _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_38__["BottomSheetComponent"], _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_39__["SnackbarComponent"], _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_40__["ExpansionPanelComponent"], _modal_simpleDialog_component__WEBPACK_IMPORTED_MODULE_41__["SimpleDialogComponent"], _modal_dialogform_dialogform_component__WEBPACK_IMPORTED_MODULE_42__["DialogformComponent"], _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_38__["BottomSheetOverviewExampleSheet"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ui_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__["MatBottomSheetModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__["NgbModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_45__["MatMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_43__["MatProgressButtonsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "rOXB":
    /*!*************************************************!*\
      !*** ./src/app/ui/buttons/buttons.component.ts ***!
      \*************************************************/

    /*! exports provided: ButtonsComponent */

    /***/
    function rOXB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
        return ButtonsComponent;
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! mat-progress-buttons */
      "XfUL");

      var ButtonsComponent = /*#__PURE__*/function () {
        function ButtonsComponent() {
          _classCallCheck2(this, ButtonsComponent);

          this.spinnerButtonOptions = {
            active: false,
            text: 'Spinner Button',
            spinnerSize: 18,
            raised: true,
            stroked: false,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false,
            disabled: false,
            mode: 'indeterminate',
            buttonIcon: {
              fontIcon: 'favorite'
            }
          };
          this.fabSpinnerButtonOptions = {
            active: false,
            text: 'Spinner Button',
            spinnerSize: 18,
            raised: true,
            fab: true,
            stroked: false,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false,
            disabled: false,
            mode: 'indeterminate',
            icon: {
              fontIcon: 'favorite'
            }
          };
          this.barButtonOptions = {
            active: false,
            text: 'Progress Bar Button',
            buttonColor: 'accent',
            barColor: 'primary',
            raised: true,
            stroked: false,
            mode: 'indeterminate',
            value: 0,
            disabled: false,
            fullWidth: false,
            buttonIcon: {
              fontIcon: 'favorite'
            }
          };
        }

        _createClass2(ButtonsComponent, [{
          key: "someFunc",
          value: function someFunc() {
            var _this24 = this;

            this.spinnerButtonOptions.active = true;
            setTimeout(function () {
              _this24.spinnerButtonOptions.active = false;
            }, 3500);
          }
        }, {
          key: "someFunc2",
          value: function someFunc2() {
            var _this25 = this;

            this.barButtonOptions.active = true;
            this.barButtonOptions.text = 'Saving Data...';
            setTimeout(function () {
              _this25.barButtonOptions.active = false;
              _this25.barButtonOptions.text = 'Progress Bar Button';
            }, 3500);
          }
        }, {
          key: "someFunc3",
          value: function someFunc3() {
            var _this26 = this;

            this.fabSpinnerButtonOptions.active = true;
            this.fabSpinnerButtonOptions.text = 'Saving Data...';
            setTimeout(function () {
              _this26.fabSpinnerButtonOptions.active = false;
              _this26.fabSpinnerButtonOptions.text = 'Progress Bar Button';
            }, 3500);
          }
        }]);

        return ButtonsComponent;
      }();

      ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) {
        return new (t || ButtonsComponent)();
      };

      ButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonsComponent,
        selectors: [["app-buttons"]],
        decls: 201,
        vars: 3,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-12"], [1, "card"], [1, "header"], [1, "body"], [1, "example-button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "routerLink", "."], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "routerLink", "."], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "routerLink", "."], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "routerLink", "."], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", ""], ["mat-fab", "", "color", "primary"], ["mat-fab", "", "color", "accent"], ["mat-fab", "", "color", "warn"], ["mat-fab", "", "disabled", ""], ["mat-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", "", "routerLink", "."], ["mat-mini-fab", ""], ["mat-mini-fab", "", "color", "primary"], ["mat-mini-fab", "", "color", "accent"], ["mat-mini-fab", "", "color", "warn"], ["mat-mini-fab", "", "disabled", ""], ["mat-mini-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-mini-fab", "", "routerLink", "."], [1, "button-demo"], ["type", "button", 1, "btn", "btn-outline-default"], ["type", "button", 1, "btn", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-outline-success"], ["type", "button", 1, "btn", "btn-outline-info"], ["type", "button", 1, "btn", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-outline-danger"], [1, "col"], [3, "options", "btnClick"]],
        template: function ButtonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buttons");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Basic Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Raised Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Stroked Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Flat Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Icon Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Fab Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Mini Fab Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "button", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "button", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Outline Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Progress Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "mat-spinner-button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function ButtonsComponent_Template_mat_spinner_button_btnClick_196_listener() {
              return ctx.someFunc();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "mat-bar-button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function ButtonsComponent_Template_mat_bar_button_btnClick_198_listener() {
              return ctx.someFunc2();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "mat-spinner-button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function ButtonsComponent_Template_mat_spinner_button_btnClick_200_listener() {
              return ctx.someFunc3();
            });

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](196);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.spinnerButtonOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.barButtonOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.fabSpinnerButtonOptions);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_4__["MatSpinnerButtonComponent"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_4__["MatBarButtonComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-buttons',
            templateUrl: './buttons.component.html',
            styleUrls: ['./buttons.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "uiVW":
    /*!*************************************************************!*\
      !*** ./src/app/ui/modal/dialogform/dialogform.component.ts ***!
      \*************************************************************/

    /*! exports provided: DialogformComponent */

    /***/
    function uiVW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogformComponent", function () {
        return DialogformComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function DialogformComponent_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter first name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DialogformComponent_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid first name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DialogformComponent_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter last name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DialogformComponent_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid last name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DialogformComponent_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter email id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DialogformComponent_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid email id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var DialogformComponent = /*#__PURE__*/function () {
        function DialogformComponent(fb, dialog) {
          _classCallCheck2(this, DialogformComponent);

          this.fb = fb;
          this.dialog = dialog;
          this.fname = 'John';
          this.lname = 'Deo';
        }

        _createClass2(DialogformComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addCusForm = this.fb.group({
              IdProof: null,
              firstname: [this.fname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
              lastname: [this.lname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
              email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialog.closeAll();
          }
        }, {
          key: "onSubmitClick",
          value: function onSubmitClick() {
            console.log('Form Value', this.addCusForm.value);
          }
        }]);

        return DialogformComponent;
      }();

      DialogformComponent.ɵfac = function DialogformComponent_Factory(t) {
        return new (t || DialogformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
      };

      DialogformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DialogformComponent,
        selectors: [["app-dialogform"]],
        decls: 28,
        vars: 9,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup", "ngSubmit"], [1, "text-inside"], [1, "example-full-width"], ["matInput", "", "placeholder", "First Name", "formControlName", "firstname", "required", "", 3, "value"], [4, "ngIf"], ["matInput", "", "placeholder", "Last Name", "formControlName", "lastname", "required", "", 3, "value"], ["matInput", "", "placeholder", "Email address", "formControlName", "email", "required", ""], ["matInput", "", "placeholder", "Address"], [1, "btn-sec"], ["mat-raised-button", "", "color", "primary", 1, "mr-3"], ["type", "button", "mat-button", "", 3, "click"]],
        template: function DialogformComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DialogformComponent_Template_form_ngSubmit_4_listener() {
              return ctx.onSubmitClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DialogformComponent_mat_error_8_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DialogformComponent_mat_error_9_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DialogformComponent_mat_error_13_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DialogformComponent_mat_error_14_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DialogformComponent_mat_error_18_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DialogformComponent_mat_error_19_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "textarea", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogformComponent_Template_button_click_26_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addCusForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.fname);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addCusForm.controls.firstname.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addCusForm.controls.firstname.hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.lname);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addCusForm.controls.lastname.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addCusForm.controls.lastname.hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addCusForm.controls.email.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addCusForm.controls.email.hasError("email"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL21vZGFsL2RpYWxvZ2Zvcm0vZGlhbG9nZm9ybS5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogformComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dialogform',
            templateUrl: './dialogform.component.html',
            styleUrls: ['./dialogform.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "w3Df":
    /*!***************************************************!*\
      !*** ./src/app/ui/snackbar/snackbar.component.ts ***!
      \***************************************************/

    /*! exports provided: SnackbarComponent */

    /***/
    function w3Df(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function () {
        return SnackbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var SnackbarComponent = /*#__PURE__*/function () {
        function SnackbarComponent(snackBar) {
          _classCallCheck2(this, SnackbarComponent);

          this.snackBar = snackBar;
        }

        _createClass2(SnackbarComponent, [{
          key: "showNotification",
          value: function showNotification(colorName, text, placementFrom, placementAlign) {
            this.snackBar.open(text, '', {
              duration: 2000,
              verticalPosition: placementFrom,
              horizontalPosition: placementAlign,
              panelClass: colorName
            });
          }
        }]);

        return SnackbarComponent;
      }();

      SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) {
        return new (t || SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
      };

      SnackbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SnackbarComponent,
        selectors: [["app-snackbar"]],
        decls: 68,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [1, "row", "clearfix", "jsdemo-notification-button"], [1, "col-xs-12", "col-sm-6", "col-md-3", "col-lg-2"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", 1, "bg-green", 3, "click"], ["mat-raised-button", "", 1, "bg-cyan", 3, "click"], ["mat-raised-button", "", 1, "bg-blue", 3, "click"], ["mat-raised-button", "", 1, "bg-red", 3, "click"], ["mat-raised-button", "", 1, "bg-yellow", 3, "click"]],
        template: function SnackbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Snackbar");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sbackbar");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_29_listener() {
              return ctx.showNotification("black", "You have new Massage...!!!", "top", "left");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Top Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_32_listener() {
              return ctx.showNotification("black", "You have new Massage...!!!", "bottom", "left");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Bottom Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_35_listener() {
              return ctx.showNotification("black", "You have new Massage...!!!", "bottom", "center");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Bottom Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_38_listener() {
              return ctx.showNotification("black", "You have new Massage...!!!", "bottom", "right");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Bottom Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_41_listener() {
              return ctx.showNotification("black", "You have new Massage...!!!", "top", "Right");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Top Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_44_listener() {
              return ctx.showNotification("black", "You have new Massage...!!!", "top", "center");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Top Center ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Types");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_57_listener() {
              return ctx.showNotification("snackbar-success", "You have new Massage...!!!", "bottom", "center");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_60_listener() {
              return ctx.showNotification("snackbar-danger", "You have new Massage...!!!", "bottom", "center");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_63_listener() {
              return ctx.showNotification("snackbar-warning", "You have new Massage...!!!", "bottom", "center");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_66_listener() {
              return ctx.showNotification("snackbar-info", "You have new Massage...!!!", "bottom", "center");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Info");

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
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3NuYWNrYmFyL3NuYWNrYmFyLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-snackbar',
            templateUrl: './snackbar.component.html',
            styleUrls: ['./snackbar.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "xZLv":
    /*!***********************************************************!*\
      !*** ./src/app/ui/progressbars/progressbars.component.ts ***!
      \***********************************************************/

    /*! exports provided: ProgressbarsComponent */

    /***/
    function xZLv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressbarsComponent", function () {
        return ProgressbarsComponent;
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


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");

      var ProgressbarsComponent = /*#__PURE__*/function () {
        function ProgressbarsComponent() {
          _classCallCheck2(this, ProgressbarsComponent);
        }

        _createClass2(ProgressbarsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProgressbarsComponent;
      }();

      ProgressbarsComponent.ɵfac = function ProgressbarsComponent_Factory(t) {
        return new (t || ProgressbarsComponent)();
      };

      ProgressbarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressbarsComponent,
        selectors: [["app-progressbars"]],
        decls: 104,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], ["mode", "determinate", "value", "40"], ["mode", "indeterminate"], ["mode", "buffer"], ["mode", "query", "color", "warn"], [1, "progress", "mb-3"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "width-per-45"], [1, "sr-only"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "width-per-75"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-success", "progress-bar-striped", "width-per-40"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", "width-per-20"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-warning", "progress-bar-striped", "width-per-60"], ["role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-danger", "progress-bar-striped", "width-per-80"], [1, "progress-bar", "progress-bar-success", "width-per-35"], [1, "progress-bar", "progress-bar-warning", "progress-bar-striped", "active", "width-per-20"], [1, "progress-bar", "progress-bar-danger", "width-per-10"]],
        template: function ProgressbarsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Progress Bars");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Progress");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Basic Examples");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-progress-bar", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Indeterminate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-progress-bar", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Buffer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-progress-bar", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Query");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-progress-bar", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Bootstrap Basic Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "60% Complete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "75%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Bootstrap Striped Bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "40% Complete (success)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "20% Complete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "60% Complete (warning)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "80% Complete (danger)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Stacked");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "35% Complete (success)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "20% Complete (warning)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "10% Complete (danger)");

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
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3Byb2dyZXNzYmFycy9wcm9ncmVzc2JhcnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-progressbars',
            templateUrl: './progressbars.component.html',
            styleUrls: ['./progressbars.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=ui-ui-module-es5.js.map