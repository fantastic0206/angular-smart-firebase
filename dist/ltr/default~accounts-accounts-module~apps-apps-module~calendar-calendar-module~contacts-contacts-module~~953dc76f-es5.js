(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"], {
    /***/
    "STbY":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js ***!
      \**********************************************************************/

    /*! exports provided: MAT_MENU_CONTENT, MAT_MENU_DEFAULT_OPTIONS, MAT_MENU_PANEL, MAT_MENU_SCROLL_STRATEGY, MatMenu, MatMenuContent, MatMenuItem, MatMenuModule, MatMenuTrigger, _MatMenu, _MatMenuBase, _MatMenuDirectivesModule, fadeInItems, matMenuAnimations, transformMenu, ɵangular_material_src_material_menu_menu_a, ɵangular_material_src_material_menu_menu_b, ɵangular_material_src_material_menu_menu_c */

    /***/
    function STbY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_CONTENT", function () {
        return MAT_MENU_CONTENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function () {
        return MAT_MENU_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_PANEL", function () {
        return MAT_MENU_PANEL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function () {
        return MAT_MENU_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenu", function () {
        return MatMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuContent", function () {
        return MatMenuContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuItem", function () {
        return MatMenuItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuModule", function () {
        return MatMenuModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function () {
        return MatMenuTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatMenu", function () {
        return _MatMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatMenuBase", function () {
        return _MatMenuBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModule", function () {
        return _MatMenuDirectivesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeInItems", function () {
        return fadeInItems;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function () {
        return matMenuAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transformMenu", function () {
        return transformMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_a", function () {
        return MAT_MENU_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_b", function () {
        return MAT_MENU_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_c", function () {
        return MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER;
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


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the mat-menu component.
       * Animation duration and timing values are based on:
       * https://material.io/guidelines/components/menus.html#menus-usage
       * @docs-private
       */


      var _c0 = ["mat-menu-item", ""];
      var _c1 = ["*"];

      function _MatMenu_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function _MatMenu_ng_template_0_Template_div_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r1._handleKeydown($event);
          })("click", function _MatMenu_ng_template_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.closed.emit("click");
          })("@transformMenu.start", function _MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4._onAnimationStart($event);
          })("@transformMenu.done", function _MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5._onAnimationDone($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r0.panelId)("ngClass", ctx_r0._classList)("@transformMenu", ctx_r0._panelAnimationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0.ariaLabelledby || null)("aria-describedby", ctx_r0.ariaDescribedby || null);
        }
      }

      var matMenuAnimations = {
        /**
         * This animation controls the menu panel's entry and exit from the page.
         *
         * When the menu panel is added to the DOM, it scales in and fades in its border.
         *
         * When the menu panel is removed from the DOM, it simply fades out after a brief
         * delay to display the ripple.
         */
        transformMenu: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('transformMenu', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0,
          transform: 'scale(0.8)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])('.mat-menu-content, .mat-mdc-menu-content', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'scale(1)'
        }))])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0
        })))]),

        /**
         * This animation fades in the background color and content of the menu panel
         * after its containing element is scaled in.
         */
        fadeInItems: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fadeInItems', [// TODO(crisbeto): this is inside the `transformMenu`
        // now. Remove next time we do breaking changes.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
      };
      /**
       * @deprecated
       * @breaking-change 8.0.0
       * @docs-private
       */

      var fadeInItems = matMenuAnimations.fadeInItems;
      /**
       * @deprecated
       * @breaking-change 8.0.0
       * @docs-private
       */

      var transformMenu = matMenuAnimations.transformMenu;
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatMenuContent`. It serves
       * as alternative token to the actual `MatMenuContent` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_MENU_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatMenuContent');
      /**
       * Menu content that will be rendered lazily once the menu is opened.
       */

      var MatMenuContent = /*#__PURE__*/function () {
        function MatMenuContent(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
          _classCallCheck(this, MatMenuContent);

          this._template = _template;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._appRef = _appRef;
          this._injector = _injector;
          this._viewContainerRef = _viewContainerRef;
          this._document = _document;
          this._changeDetectorRef = _changeDetectorRef;
          /** Emits when the menu content has been attached. */

          this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }
        /**
         * Attaches the content with a particular context.
         * @docs-private
         */


        _createClass(MatMenuContent, [{
          key: "attach",
          value: function attach() {
            var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!this._portal) {
              this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this._template, this._viewContainerRef);
            }

            this.detach();

            if (!this._outlet) {
              this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["DomPortalOutlet"](this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
            }

            var element = this._template.elementRef.nativeElement; // Because we support opening the same menu from different triggers (which in turn have their
            // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
            // risk it staying attached to a pane that's no longer in the DOM.

            element.parentNode.insertBefore(this._outlet.outletElement, element); // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
            // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
            // by Angular. This causes the `@ContentChildren` for menu items within the menu to
            // not be updated by Angular. By explicitly marking for check here, we tell Angular that
            // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
            // @breaking-change 9.0.0 Make change detector ref required

            if (this._changeDetectorRef) {
              this._changeDetectorRef.markForCheck();
            }

            this._portal.attach(this._outlet, context);

            this._attached.next();
          }
          /**
           * Detaches the content.
           * @docs-private
           */

        }, {
          key: "detach",
          value: function detach() {
            if (this._portal.isAttached) {
              this._portal.detach();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._outlet) {
              this._outlet.dispose();
            }
          }
        }]);

        return MatMenuContent;
      }();

      MatMenuContent.ɵfac = function MatMenuContent_Factory(t) {
        return new (t || MatMenuContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
      };

      MatMenuContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatMenuContent,
        selectors: [["ng-template", "matMenuContent", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MAT_MENU_CONTENT,
          useExisting: MatMenuContent
        }])]
      });

      MatMenuContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'ng-template[matMenuContent]',
            providers: [{
              provide: MAT_MENU_CONTENT,
              useExisting: MatMenuContent
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
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

      /**
       * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
       * @docs-private
       */


      function throwMatMenuMissingError() {
        throw Error("matMenuTriggerFor: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu=\"matMenu\"></mat-menu>\n      <button [matMenuTriggerFor]=\"menu\"></button>");
      }
      /**
       * Throws an exception for the case when menu's x-position value isn't valid.
       * In other words, it doesn't match 'before' or 'after'.
       * @docs-private
       */


      function throwMatMenuInvalidPositionX() {
        throw Error("xPosition value must be either 'before' or after'.\n      Example: <mat-menu xPosition=\"before\" #menu=\"matMenu\"></mat-menu>");
      }
      /**
       * Throws an exception for the case when menu's y-position value isn't valid.
       * In other words, it doesn't match 'above' or 'below'.
       * @docs-private
       */


      function throwMatMenuInvalidPositionY() {
        throw Error("yPosition value must be either 'above' or below'.\n      Example: <mat-menu yPosition=\"above\" #menu=\"matMenu\"></mat-menu>");
      }
      /**
       * Throws an exception for the case when a menu is assigned
       * to a trigger that is placed inside the same menu.
       * @docs-private
       */


      function throwMatMenuRecursiveError() {
        throw Error("matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is " + "not a parent of the trigger or move the trigger outside of the menu.");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to provide the parent menu to menu-specific components.
       * @docs-private
       */


      var MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_MENU_PANEL');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatMenuItem.

      /** @docs-private */

      var MatMenuItemBase = function MatMenuItemBase() {
        _classCallCheck(this, MatMenuItemBase);
      };

      var _MatMenuItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisabled"])(MatMenuItemBase));
      /**
       * Single item inside of a `mat-menu`. Provides the menu item styling and accessibility treatment.
       */


      var MatMenuItem = /*#__PURE__*/function (_MatMenuItemMixinBase2) {
        _inherits(MatMenuItem, _MatMenuItemMixinBase2);

        var _super = _createSuper(MatMenuItem);

        function MatMenuItem(_elementRef,
        /**
         * @deprecated `_document` parameter is no longer being used and will be removed.
         * @breaking-change 12.0.0
         */
        _document, _focusMonitor, _parentMenu) {
          var _this;

          _classCallCheck(this, MatMenuItem);

          // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
          _this = _super.call(this);
          _this._elementRef = _elementRef;
          _this._focusMonitor = _focusMonitor;
          _this._parentMenu = _parentMenu;
          /** ARIA role for the menu item. */

          _this.role = 'menuitem';
          /** Stream that emits when the menu item is hovered. */

          _this._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /** Stream that emits when the menu item is focused. */

          _this._focused = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /** Whether the menu item is highlighted. */

          _this._highlighted = false;
          /** Whether the menu item acts as a trigger for a sub-menu. */

          _this._triggersSubmenu = false;

          if (_parentMenu && _parentMenu.addItem) {
            _parentMenu.addItem(_assertThisInitialized(_this));
          }

          return _this;
        }
        /** Focuses the menu item. */


        _createClass(MatMenuItem, [{
          key: "focus",
          value: function focus() {
            var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
            var options = arguments.length > 1 ? arguments[1] : undefined;

            if (this._focusMonitor) {
              this._focusMonitor.focusVia(this._getHostElement(), origin, options);
            } else {
              this._getHostElement().focus(options);
            }

            this._focused.next(this);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this._focusMonitor) {
              // Start monitoring the element so it gets the appropriate focused classes. We want
              // to show the focus style for menu items only when the focus was not caused by a
              // mouse or touch interaction.
              this._focusMonitor.monitor(this._elementRef, false);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._focusMonitor) {
              this._focusMonitor.stopMonitoring(this._elementRef);
            }

            if (this._parentMenu && this._parentMenu.removeItem) {
              this._parentMenu.removeItem(this);
            }

            this._hovered.complete();

            this._focused.complete();
          }
          /** Used to set the `tabindex`. */

        }, {
          key: "_getTabIndex",
          value: function _getTabIndex() {
            return this.disabled ? '-1' : '0';
          }
          /** Returns the host DOM element. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._elementRef.nativeElement;
          }
          /** Prevents the default element actions if it is disabled. */
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_checkDisabled",
          value: function _checkDisabled(event) {
            if (this.disabled) {
              event.preventDefault();
              event.stopPropagation();
            }
          }
          /** Emits to the hover stream. */
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_handleMouseEnter",
          value: function _handleMouseEnter() {
            this._hovered.next(this);
          }
          /** Gets the label to be used when determining whether the option should be focused. */

        }, {
          key: "getLabel",
          value: function getLabel() {
            var _a, _b;

            var clone = this._elementRef.nativeElement.cloneNode(true);

            var icons = clone.querySelectorAll('mat-icon, .material-icons'); // Strip away icons so they don't show up in the text.

            for (var i = 0; i < icons.length; i++) {
              var icon = icons[i];
              (_a = icon.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(icon);
            }

            return ((_b = clone.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
          }
        }]);

        return MatMenuItem;
      }(_MatMenuItemMixinBase);

      MatMenuItem.ɵfac = function MatMenuItem_Factory(t) {
        return new (t || MatMenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8));
      };

      MatMenuItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatMenuItem,
        selectors: [["", "mat-menu-item", ""]],
        hostAttrs: [1, "mat-focus-indicator"],
        hostVars: 10,
        hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) {
              return ctx._checkDisabled($event);
            })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
              return ctx._handleMouseEnter();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          role: "role"
        },
        exportAs: ["matMenuItem"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 2,
        vars: 2,
        consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"]],
        template: function MatMenuItem_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRipple"]],
        encapsulation: 2,
        changeDetection: 0
      });

      MatMenuItem.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_PANEL]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };

      MatMenuItem.propDecorators = {
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _checkDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['click', ['$event']]
        }],
        _handleMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mouseenter']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: '[mat-menu-item]',
            exportAs: 'matMenuItem',
            inputs: ['disabled', 'disableRipple'],
            host: {
              '[attr.role]': 'role',
              '[class.mat-menu-item]': 'true',
              '[class.mat-menu-item-highlighted]': '_highlighted',
              '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
              '[attr.tabindex]': '_getTabIndex()',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.disabled]': 'disabled || null',
              'class': 'mat-focus-indicator'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            template: "<ng-content></ng-content>\n<div class=\"mat-menu-ripple\" matRipple\n     [matRippleDisabled]=\"disableRipple || disabled\"\n     [matRippleTrigger]=\"_getHostElement()\">\n</div>\n"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_PANEL]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, {
          role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],

          /** Prevents the default element actions if it is disabled. */
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _checkDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['click', ['$event']]
          }],

          /** Emits to the hover stream. */
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _handleMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['mouseenter']
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

      /** Injection token to be used to override the default options for `mat-menu`. */


      var MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-default-options', {
        providedIn: 'root',
        factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
        return {
          overlapTrigger: false,
          xPosition: 'after',
          yPosition: 'below',
          backdropClass: 'cdk-overlay-transparent-backdrop'
        };
      }
      /**
       * Start elevation for the menu panel.
       * @docs-private
       */


      var MAT_MENU_BASE_ELEVATION = 4;
      var menuPanelUid = 0;
      /** Base class with all of the `MatMenu` functionality. */

      var _MatMenuBase = /*#__PURE__*/function () {
        function _MatMenuBase(_elementRef, _ngZone, _defaultOptions) {
          _classCallCheck(this, _MatMenuBase);

          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          this._defaultOptions = _defaultOptions;
          this._xPosition = this._defaultOptions.xPosition;
          this._yPosition = this._defaultOptions.yPosition;
          /** Only the direct descendant menu items. */

          this._directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
          /** Subscription to tab events on the menu panel */

          this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /** Config object to be passed into the menu's ngClass */

          this._classList = {};
          /** Current state of the panel animation. */

          this._panelAnimationState = 'void';
          /** Emits whenever an animation on the menu completes. */

          this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /** Class or list of classes to be added to the overlay panel. */

          this.overlayPanelClass = this._defaultOptions.overlayPanelClass || '';
          /** Class to be added to the backdrop element. */

          this.backdropClass = this._defaultOptions.backdropClass;
          this._overlapTrigger = this._defaultOptions.overlapTrigger;
          this._hasBackdrop = this._defaultOptions.hasBackdrop;
          /** Event emitted when the menu is closed. */

          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Event emitted when the menu is closed.
           * @deprecated Switch to `closed` instead
           * @breaking-change 8.0.0
           */

          this.close = this.closed;
          this.panelId = "mat-menu-panel-".concat(menuPanelUid++);
        }
        /** Position of the menu in the X axis. */


        _createClass(_MatMenuBase, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setPositionClasses();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this2 = this;

            this._updateDirectDescendants();

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
            this._tabSubscription = this._keyManager.tabOut.subscribe(function () {
              return _this2.closed.emit('tab');
            }); // If a user manually (programatically) focuses a menu item, we need to reflect that focus
            // change back to the key manager. Note that we don't need to unsubscribe here because _focused
            // is internal and we know that it gets completed on destroy.

            this._directDescendantItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (items) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(items.map(function (item) {
                return item._focused;
              })));
            })).subscribe(function (focusedItem) {
              return _this2._keyManager.updateActiveItem(focusedItem);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._directDescendantItems.destroy();

            this._tabSubscription.unsubscribe();

            this.closed.complete();
          }
          /** Stream that emits whenever the hovered menu item changes. */

        }, {
          key: "_hovered",
          value: function _hovered() {
            // Coerce the `changes` property because Angular types it as `Observable<any>`
            var itemChanges = this._directDescendantItems.changes;
            return itemChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (items) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(items.map(function (item) {
                return item._hovered;
              })));
            }));
          }
          /*
           * Registers a menu item with the menu.
           * @docs-private
           * @deprecated No longer being used. To be removed.
           * @breaking-change 9.0.0
           */

        }, {
          key: "addItem",
          value: function addItem(_item) {}
          /**
           * Removes an item from the menu.
           * @docs-private
           * @deprecated No longer being used. To be removed.
           * @breaking-change 9.0.0
           */

        }, {
          key: "removeItem",
          value: function removeItem(_item) {}
          /** Handle a keyboard event from the menu, delegating to the appropriate action. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            var keyCode = event.keyCode;
            var manager = this._keyManager;

            switch (keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ESCAPE"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["hasModifierKey"])(event)) {
                  event.preventDefault();
                  this.closed.emit('keydown');
                }

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"]:
                if (this.parentMenu && this.direction === 'ltr') {
                  this.closed.emit('keydown');
                }

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"]:
                if (this.parentMenu && this.direction === 'rtl') {
                  this.closed.emit('keydown');
                }

                break;

              default:
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DOWN_ARROW"]) {
                  manager.setFocusOrigin('keyboard');
                }

                manager.onKeydown(event);
            }
          }
          /**
           * Focus the first item in the menu.
           * @param origin Action from which the focus originated. Used to set the correct styling.
           */

        }, {
          key: "focusFirstItem",
          value: function focusFirstItem() {
            var _this3 = this;

            var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';

            // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
            if (this.lazyContent) {
              this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
                return _this3._focusFirstItem(origin);
              });
            } else {
              this._focusFirstItem(origin);
            }
          }
          /**
           * Actual implementation that focuses the first item. Needs to be separated
           * out so we don't repeat the same logic in the public `focusFirstItem` method.
           */

        }, {
          key: "_focusFirstItem",
          value: function _focusFirstItem(origin) {
            var manager = this._keyManager;
            manager.setFocusOrigin(origin).setFirstItemActive(); // If there's no active item at this point, it means that all the items are disabled.
            // Move focus to the menu panel so keyboard events like Escape still work. Also this will
            // give _some_ feedback to screen readers.

            if (!manager.activeItem && this._directDescendantItems.length) {
              var element = this._directDescendantItems.first._getHostElement().parentElement; // Because the `mat-menu` is at the DOM insertion point, not inside the overlay, we don't
              // have a nice way of getting a hold of the menu panel. We can't use a `ViewChild` either
              // because the panel is inside an `ng-template`. We work around it by starting from one of
              // the items and walking up the DOM.


              while (element) {
                if (element.getAttribute('role') === 'menu') {
                  element.focus();
                  break;
                } else {
                  element = element.parentElement;
                }
              }
            }
          }
          /**
           * Resets the active item in the menu. This is used when the menu is opened, allowing
           * the user to start from the first option when pressing the down arrow.
           */

        }, {
          key: "resetActiveItem",
          value: function resetActiveItem() {
            this._keyManager.setActiveItem(-1);
          }
          /**
           * Sets the menu panel elevation.
           * @param depth Number of parent menus that come before the menu.
           */

        }, {
          key: "setElevation",
          value: function setElevation(depth) {
            // The elevation starts at the base and increases by one for each level.
            // Capped at 24 because that's the maximum elevation defined in the Material design spec.
            var elevation = Math.min(MAT_MENU_BASE_ELEVATION + depth, 24);
            var newElevation = "mat-elevation-z".concat(elevation);
            var customElevation = Object.keys(this._classList).find(function (c) {
              return c.startsWith('mat-elevation-z');
            });

            if (!customElevation || customElevation === this._previousElevation) {
              if (this._previousElevation) {
                this._classList[this._previousElevation] = false;
              }

              this._classList[newElevation] = true;
              this._previousElevation = newElevation;
            }
          }
          /**
           * Adds classes to the menu panel based on its position. Can be used by
           * consumers to add specific styling based on the position.
           * @param posX Position of the menu along the x axis.
           * @param posY Position of the menu along the y axis.
           * @docs-private
           */

        }, {
          key: "setPositionClasses",
          value: function setPositionClasses() {
            var posX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.xPosition;
            var posY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.yPosition;
            var classes = this._classList;
            classes['mat-menu-before'] = posX === 'before';
            classes['mat-menu-after'] = posX === 'after';
            classes['mat-menu-above'] = posY === 'above';
            classes['mat-menu-below'] = posY === 'below';
          }
          /** Starts the enter animation. */

        }, {
          key: "_startAnimation",
          value: function _startAnimation() {
            // @breaking-change 8.0.0 Combine with _resetAnimation.
            this._panelAnimationState = 'enter';
          }
          /** Resets the panel animation to its initial state. */

        }, {
          key: "_resetAnimation",
          value: function _resetAnimation() {
            // @breaking-change 8.0.0 Combine with _startAnimation.
            this._panelAnimationState = 'void';
          }
          /** Callback that is invoked when the panel animation completes. */

        }, {
          key: "_onAnimationDone",
          value: function _onAnimationDone(event) {
            this._animationDone.next(event);

            this._isAnimating = false;
          }
        }, {
          key: "_onAnimationStart",
          value: function _onAnimationStart(event) {
            this._isAnimating = true; // Scroll the content element to the top as soon as the animation starts. This is necessary,
            // because we move focus to the first item while it's still being animated, which can throw
            // the browser off when it determines the scroll position. Alternatively we can move focus
            // when the animation is done, however moving focus asynchronously will interrupt screen
            // readers which are in the process of reading out the menu already. We take the `element`
            // from the `event` since we can't use a `ViewChild` to access the pane.

            if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
              event.element.scrollTop = 0;
            }
          }
          /**
           * Sets up a stream that will keep track of any newly-added menu items and will update the list
           * of direct descendants. We collect the descendants this way, because `_allItems` can include
           * items that are part of child menus, and using a custom way of registering items is unreliable
           * when it comes to maintaining the item order.
           */

        }, {
          key: "_updateDirectDescendants",
          value: function _updateDirectDescendants() {
            var _this4 = this;

            this._allItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._allItems)).subscribe(function (items) {
              _this4._directDescendantItems.reset(items.filter(function (item) {
                return item._parentMenu === _this4;
              }));

              _this4._directDescendantItems.notifyOnChanges();
            });
          }
        }, {
          key: "xPosition",
          get: function get() {
            return this._xPosition;
          },
          set: function set(value) {
            if (value !== 'before' && value !== 'after' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatMenuInvalidPositionX();
            }

            this._xPosition = value;
            this.setPositionClasses();
          }
          /** Position of the menu in the Y axis. */

        }, {
          key: "yPosition",
          get: function get() {
            return this._yPosition;
          },
          set: function set(value) {
            if (value !== 'above' && value !== 'below' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatMenuInvalidPositionY();
            }

            this._yPosition = value;
            this.setPositionClasses();
          }
          /** Whether the menu should overlap its trigger. */

        }, {
          key: "overlapTrigger",
          get: function get() {
            return this._overlapTrigger;
          },
          set: function set(value) {
            this._overlapTrigger = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /** Whether the menu has a backdrop. */

        }, {
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          },
          set: function set(value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /**
           * This method takes classes set on the host mat-menu element and applies them on the
           * menu template that displays in the overlay container.  Otherwise, it's difficult
           * to style the containing menu from outside the component.
           * @param classes list of class names
           */

        }, {
          key: "panelClass",
          set: function set(classes) {
            var _this5 = this;

            var previousPanelClass = this._previousPanelClass;

            if (previousPanelClass && previousPanelClass.length) {
              previousPanelClass.split(' ').forEach(function (className) {
                _this5._classList[className] = false;
              });
            }

            this._previousPanelClass = classes;

            if (classes && classes.length) {
              classes.split(' ').forEach(function (className) {
                _this5._classList[className] = true;
              });
              this._elementRef.nativeElement.className = '';
            }
          }
          /**
           * This method takes classes set on the host mat-menu element and applies them on the
           * menu template that displays in the overlay container.  Otherwise, it's difficult
           * to style the containing menu from outside the component.
           * @deprecated Use `panelClass` instead.
           * @breaking-change 8.0.0
           */

        }, {
          key: "classList",
          get: function get() {
            return this.panelClass;
          },
          set: function set(classes) {
            this.panelClass = classes;
          }
        }]);

        return _MatMenuBase;
      }();

      _MatMenuBase.ɵfac = function _MatMenuBase_Factory(t) {
        return new (t || _MatMenuBase)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS));
      };

      _MatMenuBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: _MatMenuBase,
        contentQueries: function _MatMenuBase_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MAT_MENU_CONTENT, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.items = _t);
          }
        },
        viewQuery: function _MatMenuBase_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
          }
        },
        inputs: {
          backdropClass: "backdropClass",
          xPosition: "xPosition",
          yPosition: "yPosition",
          overlapTrigger: "overlapTrigger",
          hasBackdrop: "hasBackdrop",
          panelClass: ["class", "panelClass"],
          classList: "classList",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          ariaDescribedby: ["aria-describedby", "ariaDescribedby"]
        },
        outputs: {
          closed: "closed",
          close: "close"
        }
      });

      _MatMenuBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_DEFAULT_OPTIONS]
          }]
        }];
      };

      _MatMenuBase.propDecorators = {
        _allItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatMenuItem, {
            descendants: true
          }]
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-labelledby']
        }],
        ariaDescribedby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-describedby']
        }],
        xPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        yPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        templateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatMenuItem, {
            descendants: false
          }]
        }],
        lazyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MAT_MENU_CONTENT]
        }],
        overlapTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['class']
        }],
        classList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenuBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          xPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          yPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          overlapTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['class']
          }],
          classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _allItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatMenuItem, {
              descendants: true
            }]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-labelledby']
          }],
          ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-describedby']
          }],
          templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatMenuItem, {
              descendants: false
            }]
          }],
          lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MAT_MENU_CONTENT]
          }]
        });
      })();
      /** @docs-private We show the "_MatMenu" class as "MatMenu" in the docs. */


      var MatMenu = /*#__PURE__*/function (_MatMenuBase2) {
        _inherits(MatMenu, _MatMenuBase2);

        var _super2 = _createSuper(MatMenu);

        function MatMenu() {
          _classCallCheck(this, MatMenu);

          return _super2.apply(this, arguments);
        }

        return MatMenu;
      }(_MatMenuBase);

      MatMenu.ɵfac = function MatMenu_Factory(t) {
        return ɵMatMenu_BaseFactory(t || MatMenu);
      };

      MatMenu.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatMenu,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatMenu_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatMenu);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenu, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
        }], null, null);
      })(); // Note on the weird inheritance setup: we need three classes, because the MDC-based menu has to
      // extend `MatMenu`, however keeping a reference to it will cause the inlined template and styles
      // to be retained as well. The MDC menu also has to provide itself as a `MatMenu` in order for
      // queries and DI to work correctly, while still not referencing the actual menu class.
      // Class responsibility is split up as follows:
      // * _MatMenuBase - provides all the functionality without any of the Angular metadata.
      // * MatMenu - keeps the same name symbol name as the current menu and
      // is used as a provider for DI and query purposes.
      // * _MatMenu - the actual menu component implementation with the Angular metadata that should
      // be tree shaken away for MDC.

      /** @docs-public MatMenu */


      var _MatMenu = /*#__PURE__*/function (_MatMenu2) {
        _inherits(_MatMenu, _MatMenu2);

        var _super3 = _createSuper(_MatMenu);

        function _MatMenu(elementRef, ngZone, defaultOptions) {
          _classCallCheck(this, _MatMenu);

          return _super3.call(this, elementRef, ngZone, defaultOptions);
        }

        return _MatMenu;
      }(MatMenu);

      _MatMenu.ɵfac = function _MatMenu_Factory(t) {
        return new (t || _MatMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS));
      };

      _MatMenu.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MatMenu,
        selectors: [["mat-menu"]],
        exportAs: ["matMenu"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MAT_MENU_PANEL,
          useExisting: MatMenu
        }, {
          provide: MatMenu,
          useExisting: _MatMenu
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        consts: [["tabindex", "-1", "role", "menu", 1, "mat-menu-panel", 3, "id", "ngClass", "keydown", "click"], [1, "mat-menu-content"]],
        template: function _MatMenu_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, _MatMenu_ng_template_0_Template, 3, 6, "ng-template");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]],
        styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
        encapsulation: 2,
        data: {
          animation: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems]
        },
        changeDetection: 0
      });

      _MatMenu.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_DEFAULT_OPTIONS]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenu, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-menu',
            template: "<ng-template>\n  <div\n    class=\"mat-menu-panel\"\n    [id]=\"panelId\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            exportAs: 'matMenu',
            animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems],
            providers: [{
              provide: MAT_MENU_PANEL,
              useExisting: MatMenu
            }, {
              provide: MatMenu,
              useExisting: _MatMenu
            }],
            styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_DEFAULT_OPTIONS]
            }]
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

      /** Injection token that determines the scroll handling while the menu is open. */


      var MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-scroll-strategy');
      /** @docs-private */

      function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_MENU_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]],
        useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
      };
      /** Default top padding of the menu panel. */

      var MENU_PANEL_TOP_PADDING = 8;
      /** Options for binding a passive event listener. */

      var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["normalizePassiveListenerOptions"])({
        passive: true
      }); // TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors

      /** Directive applied to an element that should trigger a `mat-menu`. */

      var MatMenuTrigger = /*#__PURE__*/function () {
        function MatMenuTrigger(_overlay, _element, _viewContainerRef, scrollStrategy, // `MatMenu` is always used in combination with a `MatMenuTrigger`.
        // tslint:disable-next-line: lightweight-tokens
        _parentMenu, // `MatMenuTrigger` is commonly used in combination with a `MatMenuItem`.
        // tslint:disable-next-line: lightweight-tokens
        _menuItemInstance, _dir, // TODO(crisbeto): make the _focusMonitor required when doing breaking changes.
        // @breaking-change 8.0.0
        _focusMonitor) {
          var _this6 = this;

          _classCallCheck(this, MatMenuTrigger);

          this._overlay = _overlay;
          this._element = _element;
          this._viewContainerRef = _viewContainerRef;
          this._parentMenu = _parentMenu;
          this._menuItemInstance = _menuItemInstance;
          this._dir = _dir;
          this._focusMonitor = _focusMonitor;
          this._overlayRef = null;
          this._menuOpen = false;
          this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /**
           * Handles touch start events on the trigger.
           * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
           */

          this._handleTouchStart = function () {
            return _this6._openedBy = 'touch';
          }; // Tracking input type is necessary so it's possible to only auto-focus
          // the first item of the list when the menu is opened via the keyboard


          this._openedBy = null;
          /**
           * Whether focus should be restored when the menu is closed.
           * Note that disabling this option can have accessibility implications
           * and it's up to you to manage focus, if you decide to turn it off.
           */

          this.restoreFocus = true;
          /** Event emitted when the associated menu is opened. */

          this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Event emitted when the associated menu is opened.
           * @deprecated Switch to `menuOpened` instead
           * @breaking-change 8.0.0
           */
          // tslint:disable-next-line:no-output-on-prefix

          this.onMenuOpen = this.menuOpened;
          /** Event emitted when the associated menu is closed. */

          this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Event emitted when the associated menu is closed.
           * @deprecated Switch to `menuClosed` instead
           * @breaking-change 8.0.0
           */
          // tslint:disable-next-line:no-output-on-prefix

          this.onMenuClose = this.menuClosed;

          _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

          if (_menuItemInstance) {
            _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
          }

          this._scrollStrategy = scrollStrategy;
        }
        /**
         * @deprecated
         * @breaking-change 8.0.0
         */


        _createClass(MatMenuTrigger, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._checkMenu();

            this._handleHover();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._overlayRef) {
              this._overlayRef.dispose();

              this._overlayRef = null;
            }

            this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

            this._menuCloseSubscription.unsubscribe();

            this._closingActionsSubscription.unsubscribe();

            this._hoverSubscription.unsubscribe();
          }
          /** Whether the menu is open. */

        }, {
          key: "triggersSubmenu",

          /** Whether the menu triggers a sub-menu or a top-level one. */
          value: function triggersSubmenu() {
            return !!(this._menuItemInstance && this._parentMenu);
          }
          /** Toggles the menu between the open and closed states. */

        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            return this._menuOpen ? this.closeMenu() : this.openMenu();
          }
          /** Opens the menu. */

        }, {
          key: "openMenu",
          value: function openMenu() {
            var _this7 = this;

            if (this._menuOpen) {
              return;
            }

            this._checkMenu();

            var overlayRef = this._createOverlay();

            var overlayConfig = overlayRef.getConfig();

            this._setPosition(overlayConfig.positionStrategy);

            overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() : this.menu.hasBackdrop;
            overlayRef.attach(this._getPortal());

            if (this.menu.lazyContent) {
              this.menu.lazyContent.attach(this.menuData);
            }

            this._closingActionsSubscription = this._menuClosingActions().subscribe(function () {
              return _this7.closeMenu();
            });

            this._initMenu();

            if (this.menu instanceof MatMenu) {
              this.menu._startAnimation();
            }
          }
          /** Closes the menu. */

        }, {
          key: "closeMenu",
          value: function closeMenu() {
            this.menu.close.emit();
          }
          /**
           * Focuses the menu trigger.
           * @param origin Source of the menu trigger's focus.
           */

        }, {
          key: "focus",
          value: function focus() {
            var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
            var options = arguments.length > 1 ? arguments[1] : undefined;

            if (this._focusMonitor) {
              this._focusMonitor.focusVia(this._element, origin, options);
            } else {
              this._element.nativeElement.focus(options);
            }
          }
          /** Closes the menu and does the necessary cleanup. */

        }, {
          key: "_destroyMenu",
          value: function _destroyMenu() {
            var _this8 = this;

            if (!this._overlayRef || !this.menuOpen) {
              return;
            }

            var menu = this.menu;

            this._closingActionsSubscription.unsubscribe();

            this._overlayRef.detach();

            this._restoreFocus();

            if (menu instanceof MatMenu) {
              menu._resetAnimation();

              if (menu.lazyContent) {
                // Wait for the exit animation to finish before detaching the content.
                menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
                  return event.toState === 'void';
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), // Interrupt if the content got re-attached.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(menu.lazyContent._attached)).subscribe({
                  next: function next() {
                    return menu.lazyContent.detach();
                  },
                  // No matter whether the content got re-attached, reset the menu.
                  complete: function complete() {
                    return _this8._setIsMenuOpen(false);
                  }
                });
              } else {
                this._setIsMenuOpen(false);
              }
            } else {
              this._setIsMenuOpen(false);

              if (menu.lazyContent) {
                menu.lazyContent.detach();
              }
            }
          }
          /**
           * This method sets the menu state to open and focuses the first item if
           * the menu was opened via the keyboard.
           */

        }, {
          key: "_initMenu",
          value: function _initMenu() {
            this.menu.parentMenu = this.triggersSubmenu() ? this._parentMenu : undefined;
            this.menu.direction = this.dir;

            this._setMenuElevation();

            this._setIsMenuOpen(true);

            this.menu.focusFirstItem(this._openedBy || 'program');
          }
          /** Updates the menu elevation based on the amount of parent menus that it has. */

        }, {
          key: "_setMenuElevation",
          value: function _setMenuElevation() {
            if (this.menu.setElevation) {
              var depth = 0;
              var parentMenu = this.menu.parentMenu;

              while (parentMenu) {
                depth++;
                parentMenu = parentMenu.parentMenu;
              }

              this.menu.setElevation(depth);
            }
          }
          /** Restores focus to the element that was focused before the menu was open. */

        }, {
          key: "_restoreFocus",
          value: function _restoreFocus() {
            // We should reset focus if the user is navigating using a keyboard or
            // if we have a top-level trigger which might cause focus to be lost
            // when clicking on the backdrop.
            if (this.restoreFocus) {
              if (!this._openedBy) {
                // Note that the focus style will show up both for `program` and
                // `keyboard` so we don't have to specify which one it is.
                this.focus();
              } else if (!this.triggersSubmenu()) {
                this.focus(this._openedBy);
              }
            }

            this._openedBy = null;
          } // set state rather than toggle to support triggers sharing a menu

        }, {
          key: "_setIsMenuOpen",
          value: function _setIsMenuOpen(isOpen) {
            this._menuOpen = isOpen;
            this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();

            if (this.triggersSubmenu()) {
              this._menuItemInstance._highlighted = isOpen;
            }
          }
          /**
           * This method checks that a valid instance of MatMenu has been passed into
           * matMenuTriggerFor. If not, an exception is thrown.
           */

        }, {
          key: "_checkMenu",
          value: function _checkMenu() {
            if (!this.menu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatMenuMissingError();
            }
          }
          /**
           * This method creates the overlay from the provided menu's template and saves its
           * OverlayRef so that it can be attached to the DOM when openMenu is called.
           */

        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            if (!this._overlayRef) {
              var config = this._getOverlayConfig();

              this._subscribeToPositions(config.positionStrategy);

              this._overlayRef = this._overlay.create(config); // Consume the `keydownEvents` in order to prevent them from going to another overlay.
              // Ideally we'd also have our keyboard event logic in here, however doing so will
              // break anybody that may have implemented the `MatMenuPanel` themselves.

              this._overlayRef.keydownEvents().subscribe();
            }

            return this._overlayRef;
          }
          /**
           * This method builds the configuration object needed to create the overlay, the OverlayState.
           * @returns OverlayConfig
           */

        }, {
          key: "_getOverlayConfig",
          value: function _getOverlayConfig() {
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayConfig"]({
              positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
              backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
              panelClass: this.menu.overlayPanelClass,
              scrollStrategy: this._scrollStrategy(),
              direction: this._dir
            });
          }
          /**
           * Listens to changes in the position of the overlay and sets the correct classes
           * on the menu based on the new position. This ensures the animation origin is always
           * correct, even if a fallback position is used for the overlay.
           */

        }, {
          key: "_subscribeToPositions",
          value: function _subscribeToPositions(position) {
            var _this9 = this;

            if (this.menu.setPositionClasses) {
              position.positionChanges.subscribe(function (change) {
                var posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
                var posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';

                _this9.menu.setPositionClasses(posX, posY);
              });
            }
          }
          /**
           * Sets the appropriate positions on a position strategy
           * so the overlay connects with the trigger correctly.
           * @param positionStrategy Strategy whose position to update.
           */

        }, {
          key: "_setPosition",
          value: function _setPosition(positionStrategy) {
            var _ref = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'],
                _ref2 = _slicedToArray(_ref, 2),
                originX = _ref2[0],
                originFallbackX = _ref2[1];

            var _ref3 = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'],
                _ref4 = _slicedToArray(_ref3, 2),
                overlayY = _ref4[0],
                overlayFallbackY = _ref4[1];

            var originY = overlayY,
                originFallbackY = overlayFallbackY;
            var overlayX = originX,
                overlayFallbackX = originFallbackX;
            var offsetY = 0;

            if (this.triggersSubmenu()) {
              // When the menu is a sub-menu, it should always align itself
              // to the edges of the trigger, instead of overlapping it.
              overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
              originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
              offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
            } else if (!this.menu.overlapTrigger) {
              originY = overlayY === 'top' ? 'bottom' : 'top';
              originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
            }

            positionStrategy.withPositions([{
              originX: originX,
              originY: originY,
              overlayX: overlayX,
              overlayY: overlayY,
              offsetY: offsetY
            }, {
              originX: originFallbackX,
              originY: originY,
              overlayX: overlayFallbackX,
              overlayY: overlayY,
              offsetY: offsetY
            }, {
              originX: originX,
              originY: originFallbackY,
              overlayX: overlayX,
              overlayY: overlayFallbackY,
              offsetY: -offsetY
            }, {
              originX: originFallbackX,
              originY: originFallbackY,
              overlayX: overlayFallbackX,
              overlayY: overlayFallbackY,
              offsetY: -offsetY
            }]);
          }
          /** Returns a stream that emits whenever an action that should close the menu occurs. */

        }, {
          key: "_menuClosingActions",
          value: function _menuClosingActions() {
            var _this10 = this;

            var backdrop = this._overlayRef.backdropClick();

            var detachments = this._overlayRef.detachments();

            var parentClose = this._parentMenu ? this._parentMenu.closed : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
            var hover = this._parentMenu ? this._parentMenu._hovered().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (active) {
              return active !== _this10._menuItemInstance;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return _this10._menuOpen;
            })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(backdrop, parentClose, hover, detachments);
          }
          /** Handles mouse presses on the trigger. */

        }, {
          key: "_handleMousedown",
          value: function _handleMousedown(event) {
            if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["isFakeMousedownFromScreenReader"])(event)) {
              // Since right or middle button clicks won't trigger the `click` event,
              // we shouldn't consider the menu as opened by mouse in those cases.
              this._openedBy = event.button === 0 ? 'mouse' : null; // Since clicking on the trigger won't close the menu if it opens a sub-menu,
              // we should prevent focus from moving onto it via click to avoid the
              // highlight from lingering on the menu item.

              if (this.triggersSubmenu()) {
                event.preventDefault();
              }
            }
          }
          /** Handles key presses on the trigger. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            var keyCode = event.keyCode;

            if (this.triggersSubmenu() && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"] && this.dir === 'ltr' || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"] && this.dir === 'rtl')) {
              this.openMenu();
            }
          }
          /** Handles click events on the trigger. */

        }, {
          key: "_handleClick",
          value: function _handleClick(event) {
            if (this.triggersSubmenu()) {
              // Stop event propagation to avoid closing the parent menu.
              event.stopPropagation();
              this.openMenu();
            } else {
              this.toggleMenu();
            }
          }
          /** Handles the cases where the user hovers over the trigger. */

        }, {
          key: "_handleHover",
          value: function _handleHover() {
            var _this11 = this;

            // Subscribe to changes in the hovered item in order to toggle the panel.
            if (!this.triggersSubmenu()) {
              return;
            }

            this._hoverSubscription = this._parentMenu._hovered() // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
            // with different data and triggers), we have to delay it by a tick to ensure that
            // it won't be closed immediately after it is opened.
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (active) {
              return active === _this11._menuItemInstance && !active.disabled;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"])).subscribe(function () {
              _this11._openedBy = 'mouse'; // If the same menu is used between multiple triggers, it might still be animating
              // while the new trigger tries to re-open it. Wait for the animation to finish
              // before doing so. Also interrupt if the user moves to another item.

              if (_this11.menu instanceof MatMenu && _this11.menu._isAnimating) {
                // We need the `delay(0)` here in order to avoid
                // 'changed after checked' errors in some cases. See #12194.
                _this11.menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this11._parentMenu._hovered())).subscribe(function () {
                  return _this11.openMenu();
                });
              } else {
                _this11.openMenu();
              }
            });
          }
          /** Gets the portal that should be attached to the overlay. */

        }, {
          key: "_getPortal",
          value: function _getPortal() {
            // Note that we can avoid this check by keeping the portal on the menu panel.
            // While it would be cleaner, we'd have to introduce another required method on
            // `MatMenuPanel`, making it harder to consume.
            if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
              this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this.menu.templateRef, this._viewContainerRef);
            }

            return this._portal;
          }
        }, {
          key: "_deprecatedMatMenuTriggerFor",
          get: function get() {
            return this.menu;
          },
          set: function set(v) {
            this.menu = v;
          }
          /** References the menu instance that the trigger is associated with. */

        }, {
          key: "menu",
          get: function get() {
            return this._menu;
          },
          set: function set(menu) {
            var _this12 = this;

            if (menu === this._menu) {
              return;
            }

            this._menu = menu;

            this._menuCloseSubscription.unsubscribe();

            if (menu) {
              if (menu === this._parentMenu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwMatMenuRecursiveError();
              }

              this._menuCloseSubscription = menu.close.subscribe(function (reason) {
                _this12._destroyMenu(); // If a click closed the menu, we should close the entire chain of nested menus.


                if ((reason === 'click' || reason === 'tab') && _this12._parentMenu) {
                  _this12._parentMenu.closed.emit(reason);
                }
              });
            }
          }
        }, {
          key: "menuOpen",
          get: function get() {
            return this._menuOpen;
          }
          /** The text direction of the containing app. */

        }, {
          key: "dir",
          get: function get() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
        }]);

        return MatMenuTrigger;
      }();

      MatMenuTrigger.ɵfac = function MatMenuTrigger_Factory(t) {
        return new (t || MatMenuTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatMenu, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatMenuItem, 10), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]));
      };

      MatMenuTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatMenuTrigger,
        selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
        hostAttrs: ["aria-haspopup", "true", 1, "mat-menu-trigger"],
        hostVars: 2,
        hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
              return ctx._handleMousedown($event);
            })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("click", function MatMenuTrigger_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.menuOpen || null)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
          }
        },
        inputs: {
          restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"],
          _deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
          menu: ["matMenuTriggerFor", "menu"],
          menuData: ["matMenuTriggerData", "menuData"]
        },
        outputs: {
          menuOpened: "menuOpened",
          onMenuOpen: "onMenuOpen",
          menuClosed: "menuClosed",
          onMenuClose: "onMenuClose"
        },
        exportAs: ["matMenuTrigger"]
      });

      MatMenuTrigger.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_SCROLL_STRATEGY]
          }]
        }, {
          type: MatMenu,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: MatMenuItem,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }];
      };

      MatMenuTrigger.propDecorators = {
        _deprecatedMatMenuTriggerFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['mat-menu-trigger-for']
        }],
        menu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerFor']
        }],
        menuData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerData']
        }],
        restoreFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerRestoreFocus']
        }],
        menuOpened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onMenuOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        menuClosed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onMenuClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
            host: {
              'class': 'mat-menu-trigger',
              'aria-haspopup': 'true',
              '[attr.aria-expanded]': 'menuOpen || null',
              '[attr.aria-controls]': 'menuOpen ? menu.panelId : null',
              '(mousedown)': '_handleMousedown($event)',
              '(keydown)': '_handleKeydown($event)',
              '(click)': '_handleClick($event)'
            },
            exportAs: 'matMenuTrigger'
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_SCROLL_STRATEGY]
            }]
          }, {
            type: MatMenu,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: MatMenuItem,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }];
        }, {
          restoreFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matMenuTriggerRestoreFocus']
          }],
          menuOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          onMenuOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          menuClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          onMenuClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          _deprecatedMatMenuTriggerFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['mat-menu-trigger-for']
          }],
          menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matMenuTriggerFor']
          }],
          menuData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matMenuTriggerData']
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

      /**
       * Used by both the current `MatMenuModule` and the MDC `MatMenuModule`
       * to declare the menu-related directives.
       */


      var _MatMenuDirectivesModule = function _MatMenuDirectivesModule() {
        _classCallCheck(this, _MatMenuDirectivesModule);
      };

      _MatMenuDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _MatMenuDirectivesModule
      });
      _MatMenuDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function _MatMenuDirectivesModule_Factory(t) {
          return new (t || _MatMenuDirectivesModule)();
        },
        providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_MatMenuDirectivesModule, {
          declarations: function declarations() {
            return [MatMenuTrigger, MatMenuContent];
          },
          exports: function exports() {
            return [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenuDirectivesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            exports: [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]],
            declarations: [MatMenuTrigger, MatMenuContent],
            providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
          }]
        }], null, null);
      })();

      var MatMenuModule = function MatMenuModule() {
        _classCallCheck(this, MatMenuModule);
      };

      MatMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatMenuModule
      });
      MatMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MatMenuModule_Factory(t) {
          return new (t || MatMenuModule)();
        },
        providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenuDirectivesModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatMenuModule, {
          declarations: function declarations() {
            return [_MatMenu, MatMenuItem];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenu, MatMenuItem, _MatMenuDirectivesModule];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenu, MatMenuItem, _MatMenuDirectivesModule],
            declarations: [_MatMenu, MatMenuItem],
            providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
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
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=menu.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f-es5.js.map