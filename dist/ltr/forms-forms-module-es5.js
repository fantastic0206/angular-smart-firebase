(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"], {
    /***/
    "0GeU":
    /*!****************************************************************!*\
      !*** ./src/app/forms/form-controls/form-controls.component.ts ***!
      \****************************************************************/

    /*! exports provided: MyErrorStateMatcher, FormControlsComponent */

    /***/
    function GeU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
        return MyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormControlsComponent", function () {
        return FormControlsComponent;
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-material-file-input */
      "7ZcW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-pick-datetime */
      "z17N");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");

      function FormControlsComponent_button_147_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormControlsComponent_button_147_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](146);

            return _r0.clear($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormControlsComponent_mat_radio_button_192_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var season_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", season_r26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", season_r26, " ");
        }
      }

      function FormControlsComponent_mat_option_327_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var food_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", food_r27.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", food_r27.viewValue, " ");
        }
      }

      function FormControlsComponent_mat_option_353_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var food_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", food_r28.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", food_r28.viewValue, " ");
        }
      }

      function FormControlsComponent_option_365_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var car_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", car_r29.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", car_r29.viewValue, " ");
        }
      }

      function FormControlsComponent_mat_option_378_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var animal_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", animal_r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", animal_r30.name, " ");
        }
      }

      function FormControlsComponent_mat_error_379_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose an animal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormControlsComponent_mat_error_397_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormControlsComponent_mat_option_439_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var topping_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", topping_r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", topping_r31, " ");
        }
      }

      function FormControlsComponent_mat_optgroup_450_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pokemon_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pokemon_r34.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pokemon_r34.viewValue, " ");
        }
      }

      function FormControlsComponent_mat_optgroup_450_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-optgroup", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormControlsComponent_mat_optgroup_450_mat_option_1_Template, 2, 2, "mat-option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", group_r32.name)("disabled", group_r32.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r32.pokemon);
        }
      }

      function FormControlsComponent_span_459_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (+", ctx_r20.toppings.value.length - 1, " ", (ctx_r20.toppings.value == null ? null : ctx_r20.toppings.value.length) === 2 ? "other" : "others", ") ");
        }
      }

      function FormControlsComponent_mat_option_460_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var topping_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", topping_r35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", topping_r35, " ");
        }
      }

      function FormControlsComponent_mat_error_477_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You must make a selection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormControlsComponent_mat_error_478_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your selection is invalid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var MyErrorStateMatcher = /*#__PURE__*/function () {
        function MyErrorStateMatcher() {
          _classCallCheck(this, MyErrorStateMatcher);
        }

        _createClass(MyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
          }
        }]);

        return MyErrorStateMatcher;
      }();

      var FormControlsComponent = /*#__PURE__*/function () {
        function FormControlsComponent(fb) {
          _classCallCheck(this, FormControlsComponent);

          this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
          this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('auto'); // checkbox

          this.checked = false;
          this.indeterminate = false;
          this.labelPosition = 'after';
          this.disabled = false;
          this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn']; // Date Picker

          this.startDate = new Date(1990, 0, 1);
          this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
          this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date().toISOString());
          this.foods = [{
            value: 'steak-0',
            viewValue: 'Steak'
          }, {
            value: 'pizza-1',
            viewValue: 'Pizza'
          }, {
            value: 'tacos-2',
            viewValue: 'Tacos'
          }];
          this.cars = [{
            value: 'volvo',
            viewValue: 'Volvo'
          }, {
            value: 'saab',
            viewValue: 'Saab'
          }, {
            value: 'mercedes',
            viewValue: 'Mercedes'
          }];
          this.animalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
          this.selectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
          this.animals = [{
            name: 'Dog',
            sound: 'Woof!'
          }, {
            name: 'Cat',
            sound: 'Meow!'
          }, {
            name: 'Cow',
            sound: 'Moo!'
          }, {
            name: 'Fox',
            sound: 'Wa-pa-pa-pa-pa-pa-pow!'
          }];
          this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
          this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
          this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.pokemonGroups = [{
            name: 'Grass',
            pokemon: [{
              value: 'bulbasaur-0',
              viewValue: 'Bulbasaur'
            }, {
              value: 'oddish-1',
              viewValue: 'Oddish'
            }, {
              value: 'bellsprout-2',
              viewValue: 'Bellsprout'
            }]
          }, {
            name: 'Water',
            pokemon: [{
              value: 'squirtle-3',
              viewValue: 'Squirtle'
            }, {
              value: 'psyduck-4',
              viewValue: 'Psyduck'
            }, {
              value: 'horsea-5',
              viewValue: 'Horsea'
            }]
          }, {
            name: 'Fire',
            disabled: true,
            pokemon: [{
              value: 'charmander-6',
              viewValue: 'Charmander'
            }, {
              value: 'vulpix-7',
              viewValue: 'Vulpix'
            }, {
              value: 'flareon-8',
              viewValue: 'Flareon'
            }]
          }, {
            name: 'Psychic',
            pokemon: [{
              value: 'mew-9',
              viewValue: 'Mew'
            }, {
              value: 'mewtwo-10',
              viewValue: 'Mewtwo'
            }]
          }];
          this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('valid', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('valid')]);
          this.matcher = new MyErrorStateMatcher(); // Slide toggle

          this.color = 'accent';

          this.myFilter = function (d) {
            var day = (d || new Date()).getDay(); // Prevent Saturday and Sunday from being selected.

            return day !== 0 && day !== 6;
          }; // Set the minimum to January 1st 5 years in the past and December 31st a year in the future.


          var currentYear = new Date().getFullYear();
          this.minDate = new Date(currentYear - 5, 0, 1);
          this.maxDate = new Date(currentYear + 1, 11, 31);
          this.labelForm = fb.group({
            hideRequired: this.hideRequiredControl
          });
          this.fileUploadForm = fb.group({
            singleUpload: [''],
            removablefile: [''],
            multiplefile: ['']
          });
        }

        _createClass(FormControlsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FormControlsComponent;
      }();

      FormControlsComponent.ɵfac = function FormControlsComponent_Factory(t) {
        return new (t || FormControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      FormControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormControlsComponent,
        selectors: [["app-form-controls"]],
        decls: 517,
        vars: 77,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "example-container"], ["appearance", "fill", 1, "example-full-width"], ["matInput", ""], ["value", "option1"], ["value", "option2"], ["appearance", "outline", 1, "example-full-width"], [1, "example-full-width", "mb-3"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [3, "formGroup"], [1, "col-4"], ["appearance", "fill", 1, "example-full-width", 3, "hideRequiredMarker", "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder", "required", ""], ["appearance", "fill", 1, "example-full-width", 3, "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder"], ["required", ""], ["formControlName", "singleUpload", "placeholder", "Single Upload"], ["matSuffix", ""], ["formControlName", "removablefile", "placeholder", "Removable Input"], ["removableInput", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["formControlName", "multiplefile", "placeholder", "Multiple inputs", "multiple", ""], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], [1, "example-section"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "after", 1, "example-margin"], ["value", "before", 1, "example-margin"], [1, "example-h4"], [1, "example-margin", 3, "ngModel", "indeterminate", "labelPosition", "disabled", "ngModelChange", "indeterminateChange"], ["id", "example-radio-group-label"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button ml-0", 3, "value", 4, "ngFor", "ngForOf"], [1, "col-5"], [1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-2"], ["startView", "year", 3, "startAt"], ["picker2", ""], [1, "row", "mt-5"], ["matInput", "", 3, "matDatepicker", "formControl"], ["picker3", ""], ["matInput", "", 3, "min", "max", "matDatepicker"], ["picker4", ""], ["matInput", "", 3, "matDatepickerFilter", "matDatepicker"], ["picker5", ""], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["picker6", ""], ["mat-flat-button", "", "color", "primary", 1, "ml-3", 3, "click"], ["matInput", "", 3, "owlDateTimeTrigger", "owlDateTime"], ["date1", ""], ["matSuffix", "", 1, "date-icon", 3, "owlDateTimeTrigger"], ["date2", ""], [3, "pickerType"], ["time1", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "required", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], ["name", "food", 3, "ngModel", "ngModelChange"], ["matNativeControl", "", "name", "car", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], ["required", "", 3, "formControl"], [4, "ngIf"], ["matNativeControl", "", "required", "", 3, "formControl"], ["label", "--select something --"], [3, "disabled"], ["value", "option2", "disabled", ""], ["value", "option3"], ["matNativeControl", "", 3, "disabled"], ["value", "saab", "disabled", ""], ["multiple", "", 3, "formControl"], [3, "formControl"], [3, "label", "disabled", 4, "ngFor", "ngForOf"], ["placeholder", "Toppings", "multiple", "", 3, "formControl"], ["class", "example-additional-selection", 4, "ngIf"], [3, "formControl", "errorStateMatcher"], ["value", "valid"], ["value", "invalid"], [1, "col-6"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], [1, "example-h2"], [1, "example-margin", 3, "color", "checked", "disabled"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "example-radio-button", "ml-0", 3, "value"], [3, "value"], [3, "label", "disabled"], [1, "example-additional-selection"]],
        template: function FormControlsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Form Controls");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Form Controls");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Fill Input Style");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Textarea");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "textarea", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Outline Input Style");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-form-field", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Textarea");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "textarea", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Standard Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Textarea");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "textarea", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Form field with label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "form", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-form-field", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Both a label and a placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-form-field", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Fancy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " label");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "File Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "form", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "ngx-mat-file-input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-icon", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "cloud_upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "ngx-mat-file-input", 35, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, FormControlsComponent_button_147_Template, 3, 0, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "ngx-mat-file-input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "mat-icon", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "folder");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Check Box");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Checkbox configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "section", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "mat-checkbox", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormControlsComponent_Template_mat_checkbox_ngModelChange_163_listener($event) {
              return ctx.checked = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Checked");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "mat-checkbox", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormControlsComponent_Template_mat_checkbox_ngModelChange_165_listener($event) {
              return ctx.indeterminate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Indeterminate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "section", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Align:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-radio-group", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormControlsComponent_Template_mat_radio_group_ngModelChange_170_listener($event) {
              return ctx.labelPosition = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "mat-radio-button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "After");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "mat-radio-button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Before ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "section", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-checkbox", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormControlsComponent_Template_mat_checkbox_ngModelChange_176_listener($event) {
              return ctx.disabled = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h6", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Result");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "section", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "mat-checkbox", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormControlsComponent_Template_mat_checkbox_ngModelChange_181_listener($event) {
              return ctx.checked = $event;
            })("indeterminateChange", function FormControlsComponent_Template_mat_checkbox_indeterminateChange_181_listener($event) {
              return ctx.indeterminate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " I'm a checkbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Radio Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Pick your favorite season");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "mat-radio-group", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormControlsComponent_Template_mat_radio_group_ngModelChange_191_listener($event) {
              return ctx.favoriteSeason = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](192, FormControlsComponent_mat_radio_button_192_Template, 2, 2, "mat-radio-button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Datepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Basic datepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Choose a date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "mat-datepicker-toggle", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "mat-datepicker", null, 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Datepicker start date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Choose a date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "mat-datepicker-toggle", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "mat-datepicker", 57, 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Datepicker selected value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Angular forms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "input", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "mat-datepicker-toggle", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "mat-datepicker", null, 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Datepicker with min & max validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Choose a date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "input", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "mat-datepicker-toggle", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "mat-datepicker", null, 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Datepicker with filter validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Prevent Saturday and Sunday from being selected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Choose a date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "input", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "mat-datepicker-toggle", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "mat-datepicker", null, 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Open Datepicker on button click");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Open date picket on button click");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "input", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "mat-datepicker", null, 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormControlsComponent_Template_button_click_269_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](268);

              return _r8.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Open");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Datetime picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Basic datepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Choose a date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "input", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "owl-date-time", null, 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Datetime picker with icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Choose a date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "input", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "mat-icon", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "owl-date-time", null, 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Time Picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Choose a time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "input", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "mat-icon", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "schedule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "owl-date-time", 73, 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Select Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Basic mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Favorite food");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](327, FormControlsComponent_mat_option_327_Template, 2, 2, "mat-option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Basic native select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Cars");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "select", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "option", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Volvo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "option", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Saab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "option", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Mercedes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "option", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Audi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Select Binding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Favorite food");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "mat-select", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormControlsComponent_Template_mat_select_ngModelChange_352_listener($event) {
              return ctx.selectedValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](353, FormControlsComponent_mat_option_353_Template, 2, 2, "mat-option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Native select binding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Favorite car");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "select", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormControlsComponent_Template_select_ngModelChange_363_listener($event) {
              return ctx.selectedCar = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "option", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](365, FormControlsComponent_option_365_Template, 2, 2, "option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Select Item Validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Favorite animal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "mat-select", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Select Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](378, FormControlsComponent_mat_option_378_Template, 2, 2, "mat-option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](379, FormControlsComponent_mat_error_379_Template, 2, 0, "mat-error", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Native select item validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Select your car (required)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "select", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "option", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "option", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Saab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "option", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "Mercedes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "option", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Audi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](397, FormControlsComponent_mat_error_397_Template, 2, 0, "mat-error", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Select your favorite car here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Disable Select Item Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Choose an option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "mat-select", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "mat-option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "mat-option", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Option 2 (disabled)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "mat-option", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Option 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Native Disable Select Item Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Choose an option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "select", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "option", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "option", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "Volvo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "option", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "Saab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "option", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "Mercedes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "option", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "Audi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "Multiple Select Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "Toppings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "mat-select", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](439, FormControlsComponent_mat_option_439_Template, 2, 2, "mat-option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "Select with option groups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "Pokemon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "mat-select", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](450, FormControlsComponent_mat_optgroup_450_Template, 2, 3, "mat-optgroup", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "Select with custom trigger text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "mat-select", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "mat-select-trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](459, FormControlsComponent_span_459_Template, 2, 2, "span", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](460, FormControlsComponent_mat_option_460_Template, 2, 2, "mat-option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "Select with a custom ErrorStateMatcher");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "mat-form-field", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Choose one");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "mat-select", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "mat-option", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "Valid option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "mat-option", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "Invalid option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "Errors appear instantly!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](477, FormControlsComponent_mat_error_477_Template, 2, 0, "mat-error", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](478, FormControlsComponent_mat_error_478_Template, 2, 0, "mat-error", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "Slide Toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "div", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "Basic slide-toggles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "mat-slide-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "Slide me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "div", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "Color slide-toggles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "section", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "Color:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "mat-radio-group", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormControlsComponent_Template_mat_radio_group_ngModelChange_499_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "mat-radio-button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, " Primary ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "mat-radio-button", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, " Accent ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "mat-radio-button", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, " Warn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "section", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "mat-checkbox", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormControlsComponent_Template_mat_checkbox_ngModelChange_507_listener($event) {
              return ctx.checked = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "Checked ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "section", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "mat-checkbox", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormControlsComponent_Template_mat_checkbox_ngModelChange_510_listener($event) {
              return ctx.disabled = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "Disabled ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "h4", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "Result");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "section", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "mat-slide-toggle", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, " Slide me! ");

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
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](146);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](212);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](223);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](234);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](245);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](258);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](268);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](287);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](299);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](311);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.labelForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideRequiredMarker", ctx.hideRequiredControl.value)("floatLabel", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("floatLabel", ctx.floatLabelControl.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideRequiredMarker", ctx.hideRequiredControl.value)("floatLabel", ctx.floatLabelControl.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fileUploadForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.empty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.indeterminate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.labelPosition);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked)("indeterminate", ctx.indeterminate)("labelPosition", ctx.labelPosition)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.favoriteSeason);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.seasons);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your favorite season is: ", ctx.favoriteSeason, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startAt", ctx.startDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r5)("formControl", ctx.date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("owlDateTimeTrigger", _r9)("owlDateTime", _r9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("owlDateTimeTrigger", _r10)("owlDateTime", _r10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("owlDateTimeTrigger", _r10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("owlDateTimeTrigger", _r11)("owlDateTime", _r11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("owlDateTimeTrigger", _r11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pickerType", "timer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.foods);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.foods);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Selected food: ", ctx.selectedValue, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cars);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Selected car: ", ctx.selectedCar, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.animalControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.animals);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animalControl.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.animalControl.value == null ? null : ctx.animalControl.value.sound);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.selectFormControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectFormControl.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableSelect.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableSelect.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.toppings);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toppingList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.pokemonControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemonGroups);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.toppings);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.toppings.value ? ctx.toppings.value[0] : "", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.toppings.value == null ? null : ctx.toppings.value.length) > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toppingList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.selected)("errorStateMatcher", ctx.matcher);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected.hasError("pattern") && !ctx.selected.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("checked", ctx.checked)("disabled", ctx.disabled);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_8__["FileInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_14__["OwlDateTimeInputDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_14__["OwlDateTimeTriggerDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_14__["OwlDateTimeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectTrigger"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOptgroup"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm0tY29udHJvbHMvZm9ybS1jb250cm9scy5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-form-controls',
            templateUrl: './form-controls.component.html',
            styleUrls: ['./form-controls.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "0NeN":
    /*!****************************************************!*\
      !*** ./src/app/forms/editors/editors.component.ts ***!
      \****************************************************/

    /*! exports provided: EditorsComponent */

    /***/
    function NeN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorsComponent", function () {
        return EditorsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-build-classic */
      "+z1p");
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      "zioG");

      var EditorsComponent = /*#__PURE__*/function () {
        function EditorsComponent() {
          _classCallCheck(this, EditorsComponent);

          this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        }

        _createClass(EditorsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditorsComponent;
      }();

      EditorsComponent.ɵfac = function EditorsComponent_Factory(t) {
        return new (t || EditorsComponent)();
      };

      EditorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditorsComponent,
        selectors: [["app-editors"]],
        decls: 26,
        vars: 1,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], ["data", "<p>Hello, world!</p>", 3, "editor"]],
        template: function EditorsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Editors");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Forms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Editors");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ckeditor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "ckeditor", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.Editor);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorComponent"]],
        styles: ["[_nghost-%COMP%]     .ck-editor__editable_inline {\n  min-height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvZWRpdG9ycy9lZGl0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvZWRpdG9ycy9lZGl0b3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-editors',
            templateUrl: './editors.component.html',
            styleUrls: ['./editors.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "0R0B":
    /*!**********************************************************************!*\
      !*** ./src/app/forms/form-validations/form-validations.component.ts ***!
      \**********************************************************************/

    /*! exports provided: FormValidationsComponent */

    /***/
    function R0B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormValidationsComponent", function () {
        return FormValidationsComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function FormValidationsComponent_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormValidationsComponent_mat_error_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormValidationsComponent_mat_error_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormValidationsComponent_mat_error_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormValidationsComponent_mat_error_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " State name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormValidationsComponent_mat_error_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var FormValidationsComponent = /*#__PURE__*/function () {
        function FormValidationsComponent(fb) {
          _classCallCheck(this, FormValidationsComponent);

          this.fb = fb;
          this.hide = true;
          this.agree = false;
          this.register = this.fb.group({
            first: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z]+')]],
            last: [''],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            address: [''],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            termcondition: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]]
          });
        }

        _createClass(FormValidationsComponent, [{
          key: "onRegister",
          value: function onRegister() {
            console.log('Form Value', this.register.value);
          }
        }]);

        return FormValidationsComponent;
      }();

      FormValidationsComponent.ɵfac = function FormValidationsComponent_Factory(t) {
        return new (t || FormValidationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      FormValidationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormValidationsComponent,
        selectors: [["app-form-validations"]],
        decls: 116,
        vars: 17,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "first", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "last"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "address"], ["matInput", "", "formControlName", "city", "required", ""], ["matInput", "", "formControlName", "state", "required", ""], ["formControlName", "country", "required", ""], [3, "value"], ["formControlName", "termcondition", 1, "example-margin"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", 3, "disabled"], ["type", "button", "mat-button", ""]],
        template: function FormValidationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Form Validations");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Forms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Validations");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Basic Validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormValidationsComponent_Template_form_ngSubmit_25_listener() {
              return ctx.onRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, FormValidationsComponent_mat_error_34_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Last name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormValidationsComponent_Template_mat_icon_click_48_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, FormValidationsComponent_mat_error_50_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, FormValidationsComponent_mat_error_59_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "textarea", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "location_city");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, FormValidationsComponent_mat_error_74_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "business");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, FormValidationsComponent_mat_error_82_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-select", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Algeria ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Brazil ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Poland ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Sri Lanka ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Thailand ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Japan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "flag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, FormValidationsComponent_mat_error_105_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-checkbox", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "I accept terms and conditions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Cancel");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.register);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("first").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("password").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("email").hasError("required") || ctx.register.get("email").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("city").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("state").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "India");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Algeria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Brazil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Poland");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Sri Lanka");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Thailand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Japan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("country").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.register.valid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm0tdmFsaWRhdGlvbnMvZm9ybS12YWxpZGF0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormValidationsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-form-validations',
            templateUrl: './form-validations.component.html',
            styleUrls: ['./form-validations.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1jcm":
    /*!******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js ***!
      \******************************************************************************/

    /*! exports provided: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule */

    /***/
    function jcm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function () {
        return MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function () {
        return MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function () {
        return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function () {
        return MatSlideToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function () {
        return MatSlideToggleChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function () {
        return MatSlideToggleModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function () {
        return MatSlideToggleRequiredValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function () {
        return _MatSlideToggleRequiredValidatorModule;
      });
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "GU7r");
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


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token to be used to override the default options for `mat-slide-toggle`. */


      var _c0 = ["thumbContainer"];
      var _c1 = ["toggleBar"];
      var _c2 = ["input"];

      var _c3 = function _c3() {
        return {
          enterDuration: 150
        };
      };

      var _c4 = ["*"];
      var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-slide-toggle-default-options', {
        providedIn: 'root',
        factory: function factory() {
          return {
            disableToggleValue: false
          };
        }
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Increasing integer for generating unique ids for slide-toggle components.

      var nextUniqueId = 0;
      /** @docs-private */

      var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSlideToggle;
        }),
        multi: true
      };
      /** Change event object emitted by a MatSlideToggle. */

      var MatSlideToggleChange = function MatSlideToggleChange(
      /** The source MatSlideToggle of the event. */
      source,
      /** The new `checked` value of the MatSlideToggle. */
      checked) {
        _classCallCheck(this, MatSlideToggleChange);

        this.source = source;
        this.checked = checked;
      }; // Boilerplate for applying mixins to MatSlideToggle.

      /** @docs-private */


      var MatSlideToggleBase = function MatSlideToggleBase(_elementRef) {
        _classCallCheck(this, MatSlideToggleBase);

        this._elementRef = _elementRef;
      };

      var _MatSlideToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
      /** Represents a slidable "switch" toggle that can be moved between on and off. */


      var MatSlideToggle = /*#__PURE__*/function (_MatSlideToggleMixinB) {
        _inherits(MatSlideToggle, _MatSlideToggleMixinB);

        var _super = _createSuper(MatSlideToggle);

        function MatSlideToggle(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, _animationMode) {
          var _this;

          _classCallCheck(this, MatSlideToggle);

          _this = _super.call(this, elementRef);
          _this._focusMonitor = _focusMonitor;
          _this._changeDetectorRef = _changeDetectorRef;
          _this.defaults = defaults;
          _this._animationMode = _animationMode;

          _this._onChange = function (_) {};

          _this._onTouched = function () {};

          _this._uniqueId = "mat-slide-toggle-".concat(++nextUniqueId);
          _this._required = false;
          _this._checked = false;
          /** Name value will be applied to the input element if present. */

          _this.name = null;
          /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */

          _this.id = _this._uniqueId;
          /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */

          _this.labelPosition = 'after';
          /** Used to set the aria-label attribute on the underlying input element. */

          _this.ariaLabel = null;
          /** Used to set the aria-labelledby attribute on the underlying input element. */

          _this.ariaLabelledby = null;
          /** An event will be dispatched each time the slide-toggle changes its value. */

          _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * An event will be dispatched each time the slide-toggle input is toggled.
           * This event is always emitted when the user toggles the slide toggle, but this does not mean
           * the slide toggle's value has changed.
           */

          _this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          _this.tabIndex = parseInt(tabIndex) || 0;
          return _this;
        }
        /** Whether the slide-toggle is required. */


        _createClass(MatSlideToggle, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this2 = this;

            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (focusOrigin) {
              // Only forward focus manually when it was received programmatically or through the
              // keyboard. We should not do this for mouse/touch focus for two reasons:
              // 1. It can prevent clicks from landing in Chrome (see #18269).
              // 2. They're already handled by the wrapping `label` element.
              if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
                _this2._inputElement.nativeElement.focus();
              } else if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state
                // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                // error. See https://github.com/angular/angular/issues/17793. To work around this,
                // we defer telling the form control it has been touched until the next tick.
                Promise.resolve().then(function () {
                  return _this2._onTouched();
                });
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /** Method being called whenever the underlying input emits a change event. */

        }, {
          key: "_onChangeEvent",
          value: function _onChangeEvent(event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the component's `change` output.
            event.stopPropagation();
            this.toggleChange.emit(); // When the slide toggle's config disables toggle change event by setting
            // `disableToggleValue: true`, the slide toggle's value does not change, and the
            // checked state of the underlying input needs to be changed back.

            if (this.defaults.disableToggleValue) {
              this._inputElement.nativeElement.checked = this.checked;
              return;
            } // Sync the value from the underlying input element with the component instance.


            this.checked = this._inputElement.nativeElement.checked; // Emit our custom change event only if the underlying input emitted one. This ensures that
            // there is no change event, when the checked state changes programmatically.

            this._emitChangeEvent();
          }
          /** Method being called whenever the slide-toggle has been clicked. */

        }, {
          key: "_onInputClick",
          value: function _onInputClick(event) {
            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `slide-toggle` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation();
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.checked = !!value;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
          /** Implemented as a part of ControlValueAccessor. */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;

            this._changeDetectorRef.markForCheck();
          }
          /** Focuses the slide-toggle. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
          }
          /** Toggles the checked state of the slide-toggle. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.checked = !this.checked;

            this._onChange(this.checked);
          }
          /**
           * Emits a change event on the `change` output. Also notifies the FormControl about the change.
           */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            this._onChange(this.checked);

            this.change.emit(new MatSlideToggleChange(this, this.checked));
          }
          /** Method being called whenever the label text changes. */

        }, {
          key: "_onLabelTextChange",
          value: function _onLabelTextChange() {
            // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
            // slide-toggle component will be only marked for check, but no actual change detection runs
            // automatically. Instead of going back into the zone in order to trigger a change detection
            // which causes *all* components to be checked (if explicitly marked or not using OnPush),
            // we only trigger an explicit change detection for the slide-toggle view and its children.
            this._changeDetectorRef.detectChanges();
          }
        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /** Whether the slide-toggle element is checked or not. */

        }, {
          key: "checked",
          get: function get() {
            return this._checked;
          },
          set: function set(value) {
            this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            this._changeDetectorRef.markForCheck();
          }
          /** Returns the unique id for the visual hidden input. */

        }, {
          key: "inputId",
          get: function get() {
            return "".concat(this.id || this._uniqueId, "-input");
          }
        }]);

        return MatSlideToggle;
      }(_MatSlideToggleMixinBase);

      MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) {
        return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatSlideToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatSlideToggle,
        selectors: [["mat-slide-toggle"]],
        viewQuery: function MatSlideToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
          }
        },
        hostAttrs: [1, "mat-slide-toggle"],
        hostVars: 12,
        hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-labelledby", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          color: "color",
          tabIndex: "tabIndex",
          name: "name",
          id: "id",
          labelPosition: "labelPosition",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          required: "required",
          checked: "checked"
        },
        outputs: {
          change: "change",
          toggleChange: "toggleChange"
        },
        exportAs: ["matSlideToggle"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c4,
        decls: 16,
        vars: 18,
        consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]],
        template: function MatSlideToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) {
              return ctx._onChangeEvent($event);
            })("click", function MatSlideToggle_Template_input_click_4_listener($event) {
              return ctx._onInputClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() {
              return ctx._onLabelTextChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.inputId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c3));
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]],
        styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatSlideToggle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
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
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatSlideToggle.propDecorators = {
        _thumbEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['thumbContainer']
        }],
        _thumbBarEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['toggleBar']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-labelledby']
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        toggleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-slide-toggle',
            exportAs: 'matSlideToggle',
            host: {
              'class': 'mat-slide-toggle',
              '[id]': 'id',
              // Needs to be `-1` so it can still receive programmatic focus.
              '[attr.tabindex]': 'disabled ? null : -1',
              '[attr.aria-label]': 'null',
              '[attr.aria-labelledby]': 'null',
              '[class.mat-checked]': 'checked',
              '[class.mat-disabled]': 'disabled',
              '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
            providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
            inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
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
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-labelledby']
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          toggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _thumbEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['thumbContainer']
          }],
          _thumbBarEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['toggleBar']
          }],
          _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['input']
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


      var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSlideToggleRequiredValidator;
        }),
        multi: true
      };
      /**
       * Validator for Material slide-toggle components with the required attribute in a
       * template-driven form. The default validator for required form controls asserts
       * that the control value is not undefined but that is not appropriate for a slide-toggle
       * where the value is always defined.
       *
       * Required slide-toggle form controls are valid when checked.
       */

      var MatSlideToggleRequiredValidator = /*#__PURE__*/function (_angular_forms__WEBPA) {
        _inherits(MatSlideToggleRequiredValidator, _angular_forms__WEBPA);

        var _super2 = _createSuper(MatSlideToggleRequiredValidator);

        function MatSlideToggleRequiredValidator() {
          _classCallCheck(this, MatSlideToggleRequiredValidator);

          return _super2.apply(this, arguments);
        }

        return MatSlideToggleRequiredValidator;
      }(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxRequiredValidator"]);

      MatSlideToggleRequiredValidator.ɵfac = function MatSlideToggleRequiredValidator_Factory(t) {
        return ɵMatSlideToggleRequiredValidator_BaseFactory(t || MatSlideToggleRequiredValidator);
      };

      MatSlideToggleRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatSlideToggleRequiredValidator,
        selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatSlideToggleRequiredValidator_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleRequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "mat-slide-toggle[required][formControlName],\n             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]",
            providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
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

      /** This module is used by both original and MDC-based slide-toggle implementations. */


      var _MatSlideToggleRequiredValidatorModule = function _MatSlideToggleRequiredValidatorModule() {
        _classCallCheck(this, _MatSlideToggleRequiredValidatorModule);
      };

      _MatSlideToggleRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _MatSlideToggleRequiredValidatorModule
      });
      _MatSlideToggleRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function _MatSlideToggleRequiredValidatorModule_Factory(t) {
          return new (t || _MatSlideToggleRequiredValidatorModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_MatSlideToggleRequiredValidatorModule, {
          declarations: [MatSlideToggleRequiredValidator],
          exports: [MatSlideToggleRequiredValidator]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [MatSlideToggleRequiredValidator],
            declarations: [MatSlideToggleRequiredValidator]
          }]
        }], null, null);
      })();

      var MatSlideToggleModule = function MatSlideToggleModule() {
        _classCallCheck(this, MatSlideToggleModule);
      };

      MatSlideToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatSlideToggleModule
      });
      MatSlideToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatSlideToggleModule_Factory(t) {
          return new (t || MatSlideToggleModule)();
        },
        imports: [[_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]], _MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSlideToggleModule, {
          declarations: function declarations() {
            return [MatSlideToggle];
          },
          imports: function imports() {
            return [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
          },
          exports: function exports() {
            return [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
            exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatSlideToggle]
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
      //# sourceMappingURL=slide-toggle.js.map

      /***/

    },

    /***/
    "9Nm5":
    /*!***************************************!*\
      !*** ./src/app/forms/forms.module.ts ***!
      \***************************************/

    /*! exports provided: FormModule */

    /***/
    function Nm5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormModule", function () {
        return FormModule;
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


      var _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forms-routing.module */
      "a03z");
      /* harmony import */


      var _editors_editors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editors/editors.component */
      "0NeN");
      /* harmony import */


      var _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./form-examples/form-examples.component */
      "gyru");
      /* harmony import */


      var _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./form-validations/form-validations.component */
      "0R0B");
      /* harmony import */


      var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./wizard/wizard.component */
      "lEoo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./form-controls/form-controls.component */
      "0GeU");
      /* harmony import */


      var _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./advance-controls/advance-controls.component */
      "Gc2I");
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      "zioG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ngx-mask */
      "tmjD");
      /* harmony import */


      var ngx_color_picker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ngx-color-picker */
      "R9Cn");
      /* harmony import */


      var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ngx-material-file-input */
      "7ZcW");
      /* harmony import */


      var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ng-pick-datetime */
      "z17N");

      var FormModule = function FormModule() {
        _classCallCheck(this, FormModule);
      };

      FormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FormModule
      });
      FormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FormModule_Factory(t) {
          return new (t || FormModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__["CKEditorModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_36__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_36__["OwlNativeDateTimeModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_33__["NgxMaskModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_34__["ColorPickerModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_35__["MaterialFileInputModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormModule, {
          declarations: [_editors_editors_component__WEBPACK_IMPORTED_MODULE_3__["EditorsComponent"], _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_4__["FormExamplesComponent"], _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_5__["FormValidationsComponent"], _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_6__["WizardComponent"], _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_8__["FormControlsComponent"], _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_9__["AdvanceControlsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__["CKEditorModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_36__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_36__["OwlNativeDateTimeModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_33__["NgxMaskModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_34__["ColorPickerModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_35__["MaterialFileInputModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_editors_editors_component__WEBPACK_IMPORTED_MODULE_3__["EditorsComponent"], _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_4__["FormExamplesComponent"], _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_5__["FormValidationsComponent"], _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_6__["WizardComponent"], _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_8__["FormControlsComponent"], _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_9__["AdvanceControlsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__["CKEditorModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_36__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_36__["OwlNativeDateTimeModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_33__["NgxMaskModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_34__["ColorPickerModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_35__["MaterialFileInputModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "B/XX":
    /*!********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js ***!
      \********************************************************************/

    /*! exports provided: CdkStep, CdkStepHeader, CdkStepLabel, CdkStepper, CdkStepperModule, CdkStepperNext, CdkStepperPrevious, MAT_STEPPER_GLOBAL_OPTIONS, STEPPER_GLOBAL_OPTIONS, STEP_STATE, StepperSelectionEvent */

    /***/
    function BXX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStep", function () {
        return CdkStep;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function () {
        return CdkStepHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function () {
        return CdkStepLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStepper", function () {
        return CdkStepper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function () {
        return CdkStepperModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function () {
        return CdkStepperNext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function () {
        return CdkStepperPrevious;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_GLOBAL_OPTIONS", function () {
        return MAT_STEPPER_GLOBAL_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function () {
        return STEPPER_GLOBAL_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STEP_STATE", function () {
        return STEP_STATE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function () {
        return StepperSelectionEvent;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function CdkStep_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
        }
      }

      var _c0 = ["*"];

      var CdkStepHeader = /*#__PURE__*/function () {
        function CdkStepHeader(_elementRef) {
          _classCallCheck(this, CdkStepHeader);

          this._elementRef = _elementRef;
        }
        /** Focuses the step header. */


        _createClass(CdkStepHeader, [{
          key: "focus",
          value: function focus() {
            this._elementRef.nativeElement.focus();
          }
        }]);

        return CdkStepHeader;
      }();

      CdkStepHeader.ɵfac = function CdkStepHeader_Factory(t) {
        return new (t || CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]));
      };

      CdkStepHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
        type: CdkStepHeader,
        selectors: [["", "cdkStepHeader", ""]],
        hostAttrs: ["role", "tab"]
      });

      CdkStepHeader.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: '[cdkStepHeader]',
            host: {
              'role': 'tab'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
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


      var CdkStepLabel = function CdkStepLabel(
      /** @docs-private */
      template) {
        _classCallCheck(this, CdkStepLabel);

        this.template = template;
      };

      CdkStepLabel.ɵfac = function CdkStepLabel_Factory(t) {
        return new (t || CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]));
      };

      CdkStepLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
        type: CdkStepLabel,
        selectors: [["", "cdkStepLabel", ""]]
      });

      CdkStepLabel.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: '[cdkStepLabel]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
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

      /** Used to generate unique ID for each stepper component. */


      var nextId = 0;
      /** Change event emitted on selection changes. */

      var StepperSelectionEvent = function StepperSelectionEvent() {
        _classCallCheck(this, StepperSelectionEvent);
      };
      /** Enum to represent the different states of the steps. */


      var STEP_STATE = {
        NUMBER: 'number',
        EDIT: 'edit',
        DONE: 'done',
        ERROR: 'error'
      };
      /** InjectionToken that can be used to specify the global stepper options. */

      var STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
      /**
       * InjectionToken that can be used to specify the global stepper options.
       * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
       * @breaking-change 8.0.0.
       */

      var MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;

      var CdkStep = /*#__PURE__*/function () {
        /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
        function CdkStep(_stepper, stepperOptions) {
          _classCallCheck(this, CdkStep);

          this._stepper = _stepper;
          /** Whether user has seen the expanded step content or not. */

          this.interacted = false;
          this._editable = true;
          this._optional = false;
          this._completedOverride = null;
          this._customError = null;
          this._stepperOptions = stepperOptions ? stepperOptions : {};
          this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
          this._showError = !!this._stepperOptions.showError;
        }
        /** Whether the user can return to this step once it has been marked as completed. */


        _createClass(CdkStep, [{
          key: "_getDefaultCompleted",
          value: function _getDefaultCompleted() {
            return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
          }
          /** Whether step has an error. */

        }, {
          key: "_getDefaultError",
          value: function _getDefaultError() {
            return this.stepControl && this.stepControl.invalid && this.interacted;
          }
          /** Selects this step component. */

        }, {
          key: "select",
          value: function select() {
            this._stepper.selected = this;
          }
          /** Resets the step to its initial state. Note that this includes resetting form data. */

        }, {
          key: "reset",
          value: function reset() {
            this.interacted = false;

            if (this._completedOverride != null) {
              this._completedOverride = false;
            }

            if (this._customError != null) {
              this._customError = false;
            }

            if (this.stepControl) {
              this.stepControl.reset();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            // Since basically all inputs of the MatStep get proxied through the view down to the
            // underlying MatStepHeader, we have to make sure that change detection runs correctly.
            this._stepper._stateChanged();
          }
        }, {
          key: "editable",
          get: function get() {
            return this._editable;
          },
          set: function set(value) {
            this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** Whether the completion of step is optional. */

        }, {
          key: "optional",
          get: function get() {
            return this._optional;
          },
          set: function set(value) {
            this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** Whether step is marked as completed. */

        }, {
          key: "completed",
          get: function get() {
            return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
          },
          set: function set(value) {
            this._completedOverride = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "hasError",
          get: function get() {
            return this._customError == null ? this._getDefaultError() : this._customError;
          },
          set: function set(value) {
            this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
        }]);

        return CdkStep;
      }();

      CdkStep.ɵfac = function CdkStep_Factory(t) {
        return new (t || CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function () {
          return CdkStepper;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](STEPPER_GLOBAL_OPTIONS, 8));
      };

      CdkStep.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: CdkStep,
        selectors: [["cdk-step"]],
        contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, CdkStepLabel, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
          }
        },
        viewQuery: function CdkStep_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          }
        },
        inputs: {
          editable: "editable",
          optional: "optional",
          completed: "completed",
          hasError: "hasError",
          stepControl: "stepControl",
          label: "label",
          errorMessage: "errorMessage",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          state: "state"
        },
        exportAs: ["cdkStep"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function CdkStep_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      CdkStep.ctorParameters = function () {
        return [{
          type: CdkStepper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function () {
              return CdkStepper;
            })]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [STEPPER_GLOBAL_OPTIONS]
          }]
        }];
      };

      CdkStep.propDecorators = {
        stepLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
          args: [CdkStepLabel]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], {
            "static": true
          }]
        }],
        stepControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
          args: ['aria-labelledby']
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        optional: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        completed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        hasError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStep, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
          args: [{
            selector: 'cdk-step',
            exportAs: 'cdkStep',
            template: '<ng-template><ng-content></ng-content></ng-template>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: CdkStepper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function () {
                return CdkStepper;
              })]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
              args: [STEPPER_GLOBAL_OPTIONS]
            }]
          }];
        }, {
          editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          completed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          hasError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
            args: [CdkStepLabel]
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], {
              "static": true
            }]
          }],
          stepControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
            args: ['aria-labelledby']
          }],
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }]
        });
      })();

      var CdkStepper = /*#__PURE__*/function () {
        function CdkStepper(_dir, _changeDetectorRef, // @breaking-change 8.0.0 `_elementRef` and `_document` parameters to become required.
        _elementRef, _document) {
          _classCallCheck(this, CdkStepper);

          this._dir = _dir;
          this._changeDetectorRef = _changeDetectorRef;
          this._elementRef = _elementRef;
          /** Emits when the component is destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Steps that belong to the current stepper, excluding ones from nested steppers. */

          this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["QueryList"]();
          this._linear = false;
          this._selectedIndex = 0;
          /** Event emitted when the selected step has changed. */

          this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
          this._orientation = 'horizontal';
          this._groupId = nextId++;
          this._document = _document;
        }
        /** Whether the validity of previous steps should be checked or not. */


        _createClass(CdkStepper, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this3 = this;

            this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._steps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function (steps) {
              _this3.steps.reset(steps.filter(function (step) {
                return step._stepper === _this3;
              }));

              _this3.steps.notifyOnChanges();
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            // Note that while the step headers are content children by default, any components that
            // extend this one might have them as view children. We initialize the keyboard handling in
            // AfterViewInit so we're guaranteed for both view and content children to be defined.
            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._stepHeader).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === 'vertical');
            (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function (direction) {
              return _this4._keyManager.withHorizontalOrientation(direction);
            });

            this._keyManager.updateActiveItem(this._selectedIndex); // No need to `takeUntil` here, because we're the ones destroying `steps`.


            this.steps.changes.subscribe(function () {
              if (!_this4.selected) {
                _this4._selectedIndex = Math.max(_this4._selectedIndex - 1, 0);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.steps.destroy();

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Selects and focuses the next step in list. */

        }, {
          key: "next",
          value: function next() {
            this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
          }
          /** Selects and focuses the previous step in list. */

        }, {
          key: "previous",
          value: function previous() {
            this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
          }
          /** Resets the stepper to its initial state. Note that this includes clearing form data. */

        }, {
          key: "reset",
          value: function reset() {
            this._updateSelectedItemIndex(0);

            this.steps.forEach(function (step) {
              return step.reset();
            });

            this._stateChanged();
          }
          /** Returns a unique id for each step label element. */

        }, {
          key: "_getStepLabelId",
          value: function _getStepLabelId(i) {
            return "cdk-step-label-".concat(this._groupId, "-").concat(i);
          }
          /** Returns unique id for each step content element. */

        }, {
          key: "_getStepContentId",
          value: function _getStepContentId(i) {
            return "cdk-step-content-".concat(this._groupId, "-").concat(i);
          }
          /** Marks the component to be change detected. */

        }, {
          key: "_stateChanged",
          value: function _stateChanged() {
            this._changeDetectorRef.markForCheck();
          }
          /** Returns position state of the step with the given index. */

        }, {
          key: "_getAnimationDirection",
          value: function _getAnimationDirection(index) {
            var position = index - this._selectedIndex;

            if (position < 0) {
              return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
            } else if (position > 0) {
              return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
            }

            return 'current';
          }
          /** Returns the type of icon to be displayed. */

        }, {
          key: "_getIndicatorType",
          value: function _getIndicatorType(index) {
            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : STEP_STATE.NUMBER;
            var step = this.steps.toArray()[index];

            var isCurrentStep = this._isCurrentStep(index);

            return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
          }
        }, {
          key: "_getDefaultIndicatorLogic",
          value: function _getDefaultIndicatorLogic(step, isCurrentStep) {
            if (step._showError && step.hasError && !isCurrentStep) {
              return STEP_STATE.ERROR;
            } else if (!step.completed || isCurrentStep) {
              return STEP_STATE.NUMBER;
            } else {
              return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
            }
          }
        }, {
          key: "_getGuidelineLogic",
          value: function _getGuidelineLogic(step, isCurrentStep) {
            var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STEP_STATE.NUMBER;

            if (step._showError && step.hasError && !isCurrentStep) {
              return STEP_STATE.ERROR;
            } else if (step.completed && !isCurrentStep) {
              return STEP_STATE.DONE;
            } else if (step.completed && isCurrentStep) {
              return state;
            } else if (step.editable && isCurrentStep) {
              return STEP_STATE.EDIT;
            } else {
              return state;
            }
          }
        }, {
          key: "_isCurrentStep",
          value: function _isCurrentStep(index) {
            return this._selectedIndex === index;
          }
          /** Returns the index of the currently-focused step header. */

        }, {
          key: "_getFocusIndex",
          value: function _getFocusIndex() {
            return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
          }
        }, {
          key: "_updateSelectedItemIndex",
          value: function _updateSelectedItemIndex(newIndex) {
            var stepsArray = this.steps.toArray();
            this.selectionChange.emit({
              selectedIndex: newIndex,
              previouslySelectedIndex: this._selectedIndex,
              selectedStep: stepsArray[newIndex],
              previouslySelectedStep: stepsArray[this._selectedIndex]
            }); // If focus is inside the stepper, move it to the next header, otherwise it may become
            // lost when the active step content is hidden. We can't be more granular with the check
            // (e.g. checking whether focus is inside the active step), because we don't have a
            // reference to the elements that are rendering out the content.

            this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
            this._selectedIndex = newIndex;

            this._stateChanged();
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event);
            var keyCode = event.keyCode;
            var manager = this._keyManager;

            if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"])) {
              this.selectedIndex = manager.activeItemIndex;
              event.preventDefault();
            } else {
              manager.onKeydown(event);
            }
          }
        }, {
          key: "_anyControlsInvalidOrPending",
          value: function _anyControlsInvalidOrPending(index) {
            var steps = this.steps.toArray();
            steps[this._selectedIndex].interacted = true;

            if (this._linear && index >= 0) {
              return steps.slice(0, index).some(function (step) {
                var control = step.stepControl;
                var isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
                return isIncomplete && !step.optional && !step._completedOverride;
              });
            }

            return false;
          }
        }, {
          key: "_layoutDirection",
          value: function _layoutDirection() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
          /** Checks whether the stepper contains the focused element. */

        }, {
          key: "_containsFocus",
          value: function _containsFocus() {
            if (!this._document || !this._elementRef) {
              return false;
            }

            var stepperElement = this._elementRef.nativeElement;
            var focusedElement = this._document.activeElement;
            return stepperElement === focusedElement || stepperElement.contains(focusedElement);
          }
        }, {
          key: "linear",
          get: function get() {
            return this._linear;
          },
          set: function set(value) {
            this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** The index of the selected step. */

        }, {
          key: "selectedIndex",
          get: function get() {
            return this._selectedIndex;
          },
          set: function set(index) {
            var newIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(index);

            if (this.steps && this._steps) {
              // Ensure that the index can't be out of bounds.
              if ((newIndex < 0 || newIndex > this.steps.length - 1) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
              }

              if (this._selectedIndex != newIndex && !this._anyControlsInvalidOrPending(newIndex) && (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
                this._updateSelectedItemIndex(index);
              }
            } else {
              this._selectedIndex = newIndex;
            }
          }
          /** The step that is selected. */

        }, {
          key: "selected",
          get: function get() {
            // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
            return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
          },
          set: function set(step) {
            this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
          }
        }]);

        return CdkStepper;
      }();

      CdkStepper.ɵfac = function CdkStepper_Factory(t) {
        return new (t || CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      CdkStepper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
        type: CdkStepper,
        selectors: [["", "cdkStepper", ""]],
        contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, CdkStep, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, CdkStepHeader, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._steps = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
          }
        },
        inputs: {
          linear: "linear",
          selectedIndex: "selectedIndex",
          selected: "selected"
        },
        outputs: {
          selectionChange: "selectionChange"
        },
        exportAs: ["cdkStepper"]
      });

      CdkStepper.ctorParameters = function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };

      CdkStepper.propDecorators = {
        _steps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
          args: [CdkStep, {
            descendants: true
          }]
        }],
        _stepHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
          args: [CdkStepHeader, {
            descendants: true
          }]
        }],
        linear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: '[cdkStepper]',
            exportAs: 'cdkStepper'
          }]
        }], function () {
          return [{
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, {
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
          }],
          linear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
            args: [CdkStep, {
              descendants: true
            }]
          }],
          _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
            args: [CdkStepHeader, {
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

      /** Button that moves to the next step in a stepper workflow. */


      var CdkStepperNext = /*#__PURE__*/function () {
        function CdkStepperNext(_stepper) {
          _classCallCheck(this, CdkStepperNext);

          this._stepper = _stepper;
          /** Type of the next button. Defaults to "submit" if not specified. */

          this.type = 'submit';
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete


        _createClass(CdkStepperNext, [{
          key: "_handleClick",
          value: function _handleClick() {
            this._stepper.next();
          }
        }]);

        return CdkStepperNext;
      }();

      CdkStepperNext.ɵfac = function CdkStepperNext_Factory(t) {
        return new (t || CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](CdkStepper));
      };

      CdkStepperNext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
        type: CdkStepperNext,
        selectors: [["button", "cdkStepperNext", ""]],
        hostVars: 1,
        hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CdkStepperNext_click_HostBindingHandler() {
              return ctx._handleClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        }
      });

      CdkStepperNext.ctorParameters = function () {
        return [{
          type: CdkStepper
        }];
      };

      CdkStepperNext.propDecorators = {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        _handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
          args: ['click']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepperNext, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: 'button[cdkStepperNext]',
            host: {
              '[type]': 'type'
            }
          }]
        }], function () {
          return [{
            type: CdkStepper
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['click']
          }]
        });
      })();
      /** Button that moves to the previous step in a stepper workflow. */


      var CdkStepperPrevious = /*#__PURE__*/function () {
        function CdkStepperPrevious(_stepper) {
          _classCallCheck(this, CdkStepperPrevious);

          this._stepper = _stepper;
          /** Type of the previous button. Defaults to "button" if not specified. */

          this.type = 'button';
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete


        _createClass(CdkStepperPrevious, [{
          key: "_handleClick",
          value: function _handleClick() {
            this._stepper.previous();
          }
        }]);

        return CdkStepperPrevious;
      }();

      CdkStepperPrevious.ɵfac = function CdkStepperPrevious_Factory(t) {
        return new (t || CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](CdkStepper));
      };

      CdkStepperPrevious.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
        type: CdkStepperPrevious,
        selectors: [["button", "cdkStepperPrevious", ""]],
        hostVars: 1,
        hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CdkStepperPrevious_click_HostBindingHandler() {
              return ctx._handleClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        }
      });

      CdkStepperPrevious.ctorParameters = function () {
        return [{
          type: CdkStepper
        }];
      };

      CdkStepperPrevious.propDecorators = {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        _handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
          args: ['click']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepperPrevious, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: 'button[cdkStepperPrevious]',
            host: {
              '[type]': 'type'
            }
          }]
        }], function () {
          return [{
            type: CdkStepper
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['click']
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


      var CdkStepperModule = function CdkStepperModule() {
        _classCallCheck(this, CdkStepperModule);
      };

      CdkStepperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: CdkStepperModule
      });
      CdkStepperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function CdkStepperModule_Factory(t) {
          return new (t || CdkStepperModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CdkStepperModule, {
          declarations: function declarations() {
            return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]];
          },
          exports: function exports() {
            return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepperModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]],
            exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
            declarations: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
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
      //# sourceMappingURL=stepper.js.map

      /***/

    },

    /***/
    "Gc2I":
    /*!**********************************************************************!*\
      !*** ./src/app/forms/advance-controls/advance-controls.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AdvanceControlsComponent */

    /***/
    function Gc2I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvanceControlsComponent", function () {
        return AdvanceControlsComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-mask */
      "tmjD");
      /* harmony import */


      var ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-color-picker */
      "R9Cn");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function AdvanceControlsComponent_mat_option_158_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4.name, " ");
        }
      }

      function AdvanceControlsComponent_mat_error_208_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage());
        }
      }

      var AdvanceControlsComponent = /*#__PURE__*/function () {
        function AdvanceControlsComponent() {
          _classCallCheck(this, AdvanceControlsComponent);

          this.hide = true;
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.options = [{
            name: 'Mary'
          }, {
            name: 'Shelley'
          }, {
            name: 'Igor'
          }];
          this.colorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('primary');
          this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        }

        _createClass(AdvanceControlsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) {
              return name ? _this5._filter(name) : _this5.options.slice();
            }));
          }
        }, {
          key: "displayFn",
          value: function displayFn(user) {
            return user && user.name ? user.name : '';
          }
        }, {
          key: "_filter",
          value: function _filter(name) {
            var filterValue = name.toLowerCase();
            return this.options.filter(function (option) {
              return option.name.toLowerCase().indexOf(filterValue) === 0;
            });
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage() {
            return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
          }
        }]);

        return AdvanceControlsComponent;
      }();

      AdvanceControlsComponent.ɵfac = function AdvanceControlsComponent_Factory(t) {
        return new (t || AdvanceControlsComponent)();
      };

      AdvanceControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdvanceControlsComponent,
        selectors: [["app-advance-controls"]],
        decls: 234,
        vars: 32,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "col-4"], ["appearance", "fill", 1, "example-full-width"], ["matPrefix", ""], [1, "mr-2"], ["matInput", "", "placeholder", "EX: 10/07/2020", "mask", "00/00/0000"], ["matInput", "", "placeholder", "EX: 10/07/20 11:05:29 ", "mask", "00/00/00 00:00:00"], ["matInput", "", "placeholder", "EX: 23:05:29 ", "mask", "Hh:m0:s0"], [1, "row", "mt-3"], ["matInput", "", "placeholder", "EX: (435) 345 34 54", "prefix", "+91 ", "mask", "(000) 000 00 00"], ["matInput", "", "placeholder", "EX: 6762 ", "suffix", " $", "mask", "0000"], ["matInput", "", "placeholder", "EX: 565-656.55", "mask", "000-000.00", 3, "dropSpecialCharacters"], ["matInput", "", "placeholder", "EX: (435) 345 34 54", "mask", "(000) 000-0000", 3, "showMaskTyped"], ["matInput", "", "placeholder", "EX: 125 897 854 ", "mask", "separator"], ["matInput", "", "placeholder", "EX: 125.878.754", "mask", "separator", "thousandSeparator", "."], ["matInput", "", "placeholder", "EX: ***/*4/4354", "mask", "XXX/X0/0000", 3, "hiddenInput"], ["matInput", "", "placeholder", "EX: 443.543.534.535", "mask", "IP", 3, "showMaskTyped"], ["matInput", "", 3, "value", "colorPicker", "cpPosition", "colorPickerChange"], ["matInput", "", 3, "value", "cpOutputFormat", "cpPosition", "colorPicker", "colorPickerChange"], ["matInput", "", 3, "value", "cpOKButton", "cpSaveClickOutside", "cpOKButtonClass", "cpPosition", "colorPicker", "colorPickerChange"], [1, "col-6"], [1, "example-form"], [1, "example-full-width"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["hintLabel", "Max 10 characters", "appearance", "fill", 1, "example-full-width"], ["matInput", "", "maxlength", "10", "placeholder", "Ex. Nougat"], ["input", ""], ["align", "end"], ["value", "option1"], ["value", "option2"], ["value", "option3"], ["matInput", "", "placeholder", "pat@example.com", "required", "", 3, "formControl"], [4, "ngIf"], ["matInput", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "type", "number", 1, "example-right-align"], ["matSuffix", ""], [3, "value"]],
        template: function AdvanceControlsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Blank");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Extra");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Blank");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Input mask ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Date Format");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "date_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Date and hour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "date_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Valid 24 hour format");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "access_time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Prefix");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Suffix");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "attach_money");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Drop Special Character");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "error_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Show Mask Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Thousand separator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "attach_money");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Dot separator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Secure input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "credit_card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "IP Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "desktop_mac");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Color Picker ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function AdvanceControlsComponent_Template_input_colorPickerChange_129_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function AdvanceControlsComponent_Template_input_colorPickerChange_134_listener($event) {
              return ctx.color1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function AdvanceControlsComponent_Template_input_colorPickerChange_139_listener($event) {
              return ctx.color2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Autocomplete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Display value autocomplete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "form", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-form-field", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Assignee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-autocomplete", 41, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](158, AdvanceControlsComponent_mat_option_158_Template, 2, 2, "mat-option", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](159, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Hint Label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Form field with hints");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "mat-form-field", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Enter some input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 45, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-hint", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Form field with hints");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Select me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-option", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Option 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "mat-option", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Option 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-option", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Option 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "mat-hint", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Here's the dropdown arrow ^");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Error Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Form field with error messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Enter your email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](208, AdvanceControlsComponent_mat_error_208_Template, 2, 1, "mat-error", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Prefix & suffix");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Enter your password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "button", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceControlsComponent_Template_button_click_222_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "$\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, ".00");

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
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](157);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](175);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropSpecialCharacters", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMaskTyped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hiddenInput", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMaskTyped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color)("colorPicker", ctx.color)("cpPosition", "top-right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color1)("cpOutputFormat", "rgba")("cpPosition", "top-right")("colorPicker", ctx.color1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color2)("cpOKButton", true)("cpSaveClickOutside", false)("cpOKButtonClass", "btn btn-primary btn-xs")("cpPosition", "top-left")("colorPicker", ctx.color2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](159, 30, ctx.filteredOptions));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r2.value == null ? null : _r2.value.length) || 0, "/10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatPrefix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], ngx_mask__WEBPACK_IMPORTED_MODULE_7__["MaskDirective"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2FkdmFuY2UtY29udHJvbHMvYWR2YW5jZS1jb250cm9scy5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvanceControlsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-advance-controls',
            templateUrl: './advance-controls.component.html',
            styleUrls: ['./advance-controls.component.sass']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "R9Cn":
    /*!*********************************************************************************!*\
      !*** ./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js ***!
      \*********************************************************************************/

    /*! exports provided: Cmyk, ColorPickerComponent, ColorPickerDirective, ColorPickerModule, ColorPickerService, Hsla, Hsva, Rgba, SliderDirective, TextDirective */

    /***/
    function R9Cn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cmyk", function () {
        return Cmyk;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function () {
        return ColorPickerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorPickerDirective", function () {
        return ColorPickerDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function () {
        return ColorPickerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorPickerService", function () {
        return ColorPickerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Hsla", function () {
        return Hsla;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Hsva", function () {
        return Hsva;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Rgba", function () {
        return Rgba;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SliderDirective", function () {
        return SliderDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextDirective", function () {
        return TextDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["dialogPopup"];
      var _c1 = ["hueSlider"];
      var _c2 = ["alphaSlider"];

      function ColorPickerComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("arrow arrow-", ctx_r1.cpUsePosition, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r1.arrowTop, "px");
        }
      }

      function ColorPickerComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_div_3_Template_div_newValue_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.onColorChange($event);
          })("dragStart", function ColorPickerComponent_div_3_Template_div_dragStart_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.onDragStart("saturation-lightness");
          })("dragEnd", function ColorPickerComponent_div_3_Template_div_dragEnd_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.onDragEnd("saturation-lightness");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r2.hueSliderColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1)("rgY", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r2.slider == null ? null : ctx_r2.slider.v, "px")("left", ctx_r2.slider == null ? null : ctx_r2.slider.s, "px");
        }
      }

      function ColorPickerComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_button_8_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.onAddPresetColor($event, ctx_r20.selectedColor);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.cpAddColorButtonClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.cpPresetColors && ctx_r3.cpPresetColors.length >= ctx_r3.cpMaxPresetColorsLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.cpAddColorButtonText, " ");
        }
      }

      function ColorPickerComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
        }
      }

      function ColorPickerComponent_div_20_input_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_input_6_Template_input_keyup_enter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_20_input_6_Template_input_newValue_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.onAlphaInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r22.cmykText == null ? null : ctx_r22.cmykText.a);
        }
      }

      function ColorPickerComponent_div_20_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColorPickerComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.onCyanInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.onMagentaInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.onYellowInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_20_Template_input_keyup_enter_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_20_Template_input_newValue_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.onBlackInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ColorPickerComponent_div_20_input_6_Template, 1, 2, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ColorPickerComponent_div_20_div_16_Template, 2, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r8.format !== 3 ? "none" : "block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.c);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.m);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.y);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r8.cmykText == null ? null : ctx_r8.cmykText.k);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.cpAlphaChannel !== "disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.cpAlphaChannel !== "disabled");
        }
      }

      function ColorPickerComponent_div_21_input_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_input_5_Template_input_keyup_enter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_21_input_5_Template_input_newValue_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r40.onAlphaInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r36.hslaText == null ? null : ctx_r36.hslaText.a);
        }
      }

      function ColorPickerComponent_div_21_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColorPickerComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.onHueInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.onSaturationInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r46.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.onLightnessInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_21_input_5_Template, 1, 2, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "H");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "L");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorPickerComponent_div_21_div_13_Template, 2, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r9.format !== 2 ? "none" : "block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 360)("value", ctx_r9.hslaText == null ? null : ctx_r9.hslaText.h);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r9.hslaText == null ? null : ctx_r9.hslaText.s);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r9.hslaText == null ? null : ctx_r9.hslaText.l);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.cpAlphaChannel !== "disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.cpAlphaChannel !== "disabled");
        }
      }

      function ColorPickerComponent_div_22_input_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_input_5_Template_input_keyup_enter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_22_input_5_Template_input_newValue_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.onAlphaInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r48.rgbaText == null ? null : ctx_r48.rgbaText.a);
        }
      }

      function ColorPickerComponent_div_22_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColorPickerComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r53.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r55.onRedInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r56.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r57.onGreenInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r58.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r59.onBlueInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_22_input_5_Template, 1, 2, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "G");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorPickerComponent_div_22_div_13_Template, 2, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r10.format !== 1 ? "none" : "block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r10.rgbaText == null ? null : ctx_r10.rgbaText.r);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r10.rgbaText == null ? null : ctx_r10.rgbaText.g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 255)("value", ctx_r10.rgbaText == null ? null : ctx_r10.rgbaText.b);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.cpAlphaChannel !== "disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.cpAlphaChannel !== "disabled");
        }
      }

      function ColorPickerComponent_div_23_input_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_23_input_3_Template_input_keyup_enter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_23_input_3_Template_input_newValue_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r64.onAlphaInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r60.hexAlpha);
        }
      }

      function ColorPickerComponent_div_23_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColorPickerComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ColorPickerComponent_div_23_Template_input_blur_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.onHexInput(null);
          })("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r67.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r68.onHexInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_23_input_3_Template, 1, 2, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColorPickerComponent_div_23_div_7_Template, 2, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r11.format !== 0 ? "none" : "block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hex-alpha", ctx_r11.cpAlphaChannel === "forced");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r11.hexText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.cpAlphaChannel === "forced");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.cpAlphaChannel === "forced");
        }
      }

      function ColorPickerComponent_div_24_input_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_24_input_3_Template_input_keyup_enter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r70.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_24_input_3_Template_input_newValue_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r72.onAlphaInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 1)("value", ctx_r69.hslaText == null ? null : ctx_r69.hslaText.a);
        }
      }

      function ColorPickerComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ColorPickerComponent_div_24_Template_input_keyup_enter_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r73.onAcceptColor($event);
          })("newValue", function ColorPickerComponent_div_24_Template_input_newValue_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r75.onValueInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_24_input_3_Template, 1, 2, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rg", 100)("value", ctx_r12.hslaText == null ? null : ctx_r12.hslaText.l);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.cpAlphaChannel !== "disabled");
        }
      }

      function ColorPickerComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_25_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r76.onFormatToggle(-1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_25_Template_span_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r78.onFormatToggle(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColorPickerComponent_div_26_div_4_div_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_26_div_4_div_1_span_1_Template_span_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

            var color_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r84.onRemovePresetColor($event, color_r82);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r83.cpRemoveColorButtonClass);
        }
      }

      function ColorPickerComponent_div_26_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_26_div_4_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

            var color_r82 = ctx.$implicit;

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r87.setColorFromString(color_r82);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_26_div_4_div_1_span_1_Template, 1, 3, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var color_r82 = ctx.$implicit;

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", color_r82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.cpAddColorButton);
        }
      }

      function ColorPickerComponent_div_26_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_26_div_4_div_1_Template, 2, 3, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r79.cpPresetColorsClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r79.cpPresetColors);
        }
      }

      function ColorPickerComponent_div_26_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r80.cpPresetEmptyMessageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r80.cpPresetEmptyMessage);
        }
      }

      function ColorPickerComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColorPickerComponent_div_26_div_4_Template, 2, 4, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerComponent_div_26_div_5_Template, 2, 4, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.cpPresetLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.cpPresetColors == null ? null : ctx_r14.cpPresetColors.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r14.cpPresetColors == null ? null : ctx_r14.cpPresetColors.length) && ctx_r14.cpAddColorButton);
        }
      }

      function ColorPickerComponent_div_27_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_27_button_1_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r91.onCancelColor($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r89.cpCancelButtonClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r89.cpCancelButtonText);
        }
      }

      function ColorPickerComponent_div_27_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_27_button_2_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

            var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r93.onAcceptColor($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r90.cpOKButtonClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r90.cpOKButtonText);
        }
      }

      function ColorPickerComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPickerComponent_div_27_button_1_Template, 2, 4, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorPickerComponent_div_27_button_2_Template, 2, 4, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.cpCancelButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.cpOKButton);
        }
      }

      var ColorFormats;

      (function (ColorFormats) {
        ColorFormats[ColorFormats["HEX"] = 0] = "HEX";
        ColorFormats[ColorFormats["RGBA"] = 1] = "RGBA";
        ColorFormats[ColorFormats["HSLA"] = 2] = "HSLA";
        ColorFormats[ColorFormats["CMYK"] = 3] = "CMYK";
      })(ColorFormats || (ColorFormats = {}));

      var Rgba = function Rgba(r, g, b, a) {
        _classCallCheck(this, Rgba);

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
      };

      var Hsva = function Hsva(h, s, v, a) {
        _classCallCheck(this, Hsva);

        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
      };

      var Hsla = function Hsla(h, s, l, a) {
        _classCallCheck(this, Hsla);

        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
      };

      var Cmyk = function Cmyk(c, m, y, k) {
        var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

        _classCallCheck(this, Cmyk);

        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
        this.a = a;
      };

      function calculateAutoPositioning(elBounds) {
        // Defaults
        var usePositionX = 'right';
        var usePositionY = 'bottom'; // Calculate collisions

        var height = elBounds.height,
            width = elBounds.width,
            top = elBounds.top,
            bottom = elBounds.bottom,
            left = elBounds.left,
            right = elBounds.right;
        var collisionTop = top - height < 0;
        var collisionBottom = bottom + height > (window.innerHeight || document.documentElement.clientHeight);
        var collisionLeft = left - width < 0;
        var collisionRight = right + width > (window.innerWidth || document.documentElement.clientWidth);
        var collisionAll = collisionTop && collisionBottom && collisionLeft && collisionRight; // Generate X & Y position values

        if (collisionBottom) {
          usePositionY = 'top';
        }

        if (collisionTop) {
          usePositionY = 'bottom';
        }

        if (collisionLeft) {
          usePositionX = 'right';
        }

        if (collisionRight) {
          usePositionX = 'left';
        } // Choose the largest gap available


        if (collisionAll) {
          var postions = ['left', 'right', 'top', 'bottom'];
          return postions.reduce(function (prev, next) {
            return elBounds[prev] > elBounds[next] ? prev : next;
          });
        }

        if (collisionLeft && collisionRight) {
          if (collisionTop) return 'bottom';
          if (collisionBottom) return 'top';
          return top > bottom ? 'top' : 'bottom';
        }

        if (collisionTop && collisionBottom) {
          if (collisionLeft) return 'right';
          if (collisionRight) return 'left';
          return left > right ? 'left' : 'right';
        }

        return "".concat(usePositionY, "-").concat(usePositionX);
      }

      function detectIE() {
        var ua = '';

        if (typeof navigator !== 'undefined') {
          ua = navigator.userAgent.toLowerCase();
        }

        var msie = ua.indexOf('msie ');

        if (msie > 0) {
          // IE 10 or older => return version number
          return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        } // Other browser


        return false;
      }

      var TextDirective = /*#__PURE__*/function () {
        function TextDirective() {
          _classCallCheck(this, TextDirective);

          this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(TextDirective, [{
          key: "inputChange",
          value: function inputChange(event) {
            var value = event.target.value;

            if (this.rg === undefined) {
              this.newValue.emit(value);
            } else {
              var numeric = parseFloat(value);
              this.newValue.emit({
                v: numeric,
                rg: this.rg
              });
            }
          }
        }]);

        return TextDirective;
      }();

      TextDirective.ɵfac = function TextDirective_Factory(t) {
        return new (t || TextDirective)();
      };

      TextDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TextDirective,
        selectors: [["", "text", ""]],
        hostBindings: function TextDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TextDirective_input_HostBindingHandler($event) {
              return ctx.inputChange($event);
            });
          }
        },
        inputs: {
          rg: "rg",
          text: "text"
        },
        outputs: {
          newValue: "newValue"
        }
      });
      TextDirective.propDecorators = {
        rg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        newValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[text]'
          }]
        }], function () {
          return [];
        }, {
          newValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          inputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event']]
          }],
          rg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var SliderDirective = /*#__PURE__*/function () {
        function SliderDirective(elRef) {
          var _this6 = this;

          _classCallCheck(this, SliderDirective);

          this.elRef = elRef;
          this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          this.listenerMove = function (event) {
            return _this6.move(event);
          };

          this.listenerStop = function () {
            return _this6.stop();
          };
        }

        _createClass(SliderDirective, [{
          key: "mouseDown",
          value: function mouseDown(event) {
            this.start(event);
          }
        }, {
          key: "touchStart",
          value: function touchStart(event) {
            this.start(event);
          }
        }, {
          key: "move",
          value: function move(event) {
            event.preventDefault();
            this.setCursor(event);
          }
        }, {
          key: "start",
          value: function start(event) {
            this.setCursor(event);
            event.stopPropagation();
            document.addEventListener('mouseup', this.listenerStop);
            document.addEventListener('touchend', this.listenerStop);
            document.addEventListener('mousemove', this.listenerMove);
            document.addEventListener('touchmove', this.listenerMove);
            this.dragStart.emit();
          }
        }, {
          key: "stop",
          value: function stop() {
            document.removeEventListener('mouseup', this.listenerStop);
            document.removeEventListener('touchend', this.listenerStop);
            document.removeEventListener('mousemove', this.listenerMove);
            document.removeEventListener('touchmove', this.listenerMove);
            this.dragEnd.emit();
          }
        }, {
          key: "getX",
          value: function getX(event) {
            var position = this.elRef.nativeElement.getBoundingClientRect();
            var pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
            return pageX - position.left - window.pageXOffset;
          }
        }, {
          key: "getY",
          value: function getY(event) {
            var position = this.elRef.nativeElement.getBoundingClientRect();
            var pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
            return pageY - position.top - window.pageYOffset;
          }
        }, {
          key: "setCursor",
          value: function setCursor(event) {
            var width = this.elRef.nativeElement.offsetWidth;
            var height = this.elRef.nativeElement.offsetHeight;
            var x = Math.max(0, Math.min(this.getX(event), width));
            var y = Math.max(0, Math.min(this.getY(event), height));

            if (this.rgX !== undefined && this.rgY !== undefined) {
              this.newValue.emit({
                s: x / width,
                v: 1 - y / height,
                rgX: this.rgX,
                rgY: this.rgY
              });
            } else if (this.rgX === undefined && this.rgY !== undefined) {
              this.newValue.emit({
                v: y / height,
                rgY: this.rgY
              });
            } else if (this.rgX !== undefined && this.rgY === undefined) {
              this.newValue.emit({
                v: x / width,
                rgX: this.rgX
              });
            }
          }
        }]);

        return SliderDirective;
      }();

      SliderDirective.ɵfac = function SliderDirective_Factory(t) {
        return new (t || SliderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      SliderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: SliderDirective,
        selectors: [["", "slider", ""]],
        hostBindings: function SliderDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) {
              return ctx.mouseDown($event);
            })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) {
              return ctx.touchStart($event);
            });
          }
        },
        inputs: {
          rgX: "rgX",
          rgY: "rgY",
          slider: "slider"
        },
        outputs: {
          dragEnd: "dragEnd",
          dragStart: "dragStart",
          newValue: "newValue"
        }
      });

      SliderDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      SliderDirective.propDecorators = {
        rgX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rgY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        newValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        touchStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchstart', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[slider]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          newValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
          }],
          touchStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchstart', ['$event']]
          }],
          rgX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rgY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var SliderPosition = function SliderPosition(h, s, v, a) {
        _classCallCheck(this, SliderPosition);

        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
      };

      var SliderDimension = function SliderDimension(h, s, v, a) {
        _classCallCheck(this, SliderDimension);

        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
      };

      var ColorPickerService = /*#__PURE__*/function () {
        function ColorPickerService() {
          _classCallCheck(this, ColorPickerService);

          this.active = null;
        }

        _createClass(ColorPickerService, [{
          key: "setActive",
          value: function setActive(active) {
            if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
              this.active.closeDialog();
            }

            this.active = active;
          }
        }, {
          key: "hsva2hsla",
          value: function hsva2hsla(hsva) {
            var h = hsva.h,
                s = hsva.s,
                v = hsva.v,
                a = hsva.a;

            if (v === 0) {
              return new Hsla(h, 0, 0, a);
            } else if (s === 0 && v === 1) {
              return new Hsla(h, 1, 1, a);
            } else {
              var l = v * (2 - s) / 2;
              return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
            }
          }
        }, {
          key: "hsla2hsva",
          value: function hsla2hsva(hsla) {
            var h = Math.min(hsla.h, 1),
                s = Math.min(hsla.s, 1);
            var l = Math.min(hsla.l, 1),
                a = Math.min(hsla.a, 1);

            if (l === 0) {
              return new Hsva(h, 0, 0, a);
            } else {
              var v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
              return new Hsva(h, 2 * (v - l) / v, v, a);
            }
          }
        }, {
          key: "hsvaToRgba",
          value: function hsvaToRgba(hsva) {
            var r, g, b;
            var h = hsva.h,
                s = hsva.s,
                v = hsva.v,
                a = hsva.a;
            var i = Math.floor(h * 6);
            var f = h * 6 - i;
            var p = v * (1 - s);
            var q = v * (1 - f * s);
            var t = v * (1 - (1 - f) * s);

            switch (i % 6) {
              case 0:
                r = v, g = t, b = p;
                break;

              case 1:
                r = q, g = v, b = p;
                break;

              case 2:
                r = p, g = v, b = t;
                break;

              case 3:
                r = p, g = q, b = v;
                break;

              case 4:
                r = t, g = p, b = v;
                break;

              case 5:
                r = v, g = p, b = q;
                break;

              default:
                r = 0, g = 0, b = 0;
            }

            return new Rgba(r, g, b, a);
          }
        }, {
          key: "cmykToRgb",
          value: function cmykToRgb(cmyk) {
            var r = (1 - cmyk.c) * (1 - cmyk.k);
            var g = (1 - cmyk.m) * (1 - cmyk.k);
            var b = (1 - cmyk.y) * (1 - cmyk.k);
            return new Rgba(r, g, b, cmyk.a);
          }
        }, {
          key: "rgbaToCmyk",
          value: function rgbaToCmyk(rgba) {
            var k = 1 - Math.max(rgba.r, rgba.g, rgba.b);

            if (k === 1) {
              return new Cmyk(0, 0, 0, 1, rgba.a);
            } else {
              var c = (1 - rgba.r - k) / (1 - k);
              var m = (1 - rgba.g - k) / (1 - k);
              var y = (1 - rgba.b - k) / (1 - k);
              return new Cmyk(c, m, y, k, rgba.a);
            }
          }
        }, {
          key: "rgbaToHsva",
          value: function rgbaToHsva(rgba) {
            var h, s;
            var r = Math.min(rgba.r, 1),
                g = Math.min(rgba.g, 1);
            var b = Math.min(rgba.b, 1),
                a = Math.min(rgba.a, 1);
            var max = Math.max(r, g, b),
                min = Math.min(r, g, b);
            var v = max,
                d = max - min;
            s = max === 0 ? 0 : d / max;

            if (max === min) {
              h = 0;
            } else {
              switch (max) {
                case r:
                  h = (g - b) / d + (g < b ? 6 : 0);
                  break;

                case g:
                  h = (b - r) / d + 2;
                  break;

                case b:
                  h = (r - g) / d + 4;
                  break;

                default:
                  h = 0;
              }

              h /= 6;
            }

            return new Hsva(h, s, v, a);
          }
        }, {
          key: "rgbaToHex",
          value: function rgbaToHex(rgba, allowHex8) {
            /* tslint:disable:no-bitwise */
            var hex = '#' + (1 << 24 | rgba.r << 16 | rgba.g << 8 | rgba.b).toString(16).substr(1);

            if (allowHex8) {
              hex += (1 << 8 | Math.round(rgba.a * 255)).toString(16).substr(1);
            }
            /* tslint:enable:no-bitwise */


            return hex;
          }
        }, {
          key: "normalizeCMYK",
          value: function normalizeCMYK(cmyk) {
            return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
          }
        }, {
          key: "denormalizeCMYK",
          value: function denormalizeCMYK(cmyk) {
            return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
          }
        }, {
          key: "denormalizeRGBA",
          value: function denormalizeRGBA(rgba) {
            return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
          }
        }, {
          key: "stringToHsva",
          value: function stringToHsva() {
            var colorString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var allowHex8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var hsva = null;
            colorString = (colorString || '').toLowerCase();
            var stringParsers = [{
              re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
              parse: function parse(execResult) {
                return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
              }
            }, {
              re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
              parse: function parse(execResult) {
                return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
              }
            }];

            if (allowHex8) {
              stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
                parse: function parse(execResult) {
                  return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
                }
              });
            } else {
              stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function parse(execResult) {
                  return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                }
              });
            }

            stringParsers.push({
              re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
              parse: function parse(execResult) {
                return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
              }
            });

            for (var key in stringParsers) {
              if (stringParsers.hasOwnProperty(key)) {
                var parser = stringParsers[key];
                var match = parser.re.exec(colorString),
                    color = match && parser.parse(match);

                if (color) {
                  if (color instanceof Rgba) {
                    hsva = this.rgbaToHsva(color);
                  } else if (color instanceof Hsla) {
                    hsva = this.hsla2hsva(color);
                  }

                  return hsva;
                }
              }
            }

            return hsva;
          }
        }, {
          key: "outputFormat",
          value: function outputFormat(hsva, _outputFormat, alphaChannel) {
            if (_outputFormat === 'auto') {
              _outputFormat = hsva.a < 1 ? 'rgba' : 'hex';
            }

            switch (_outputFormat) {
              case 'hsla':
                var hsla = this.hsva2hsla(hsva);
                var hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);

                if (hsva.a < 1 || alphaChannel === 'always') {
                  return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' + hslaText.a + ')';
                } else {
                  return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                }

              case 'rgba':
                var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));

                if (hsva.a < 1 || alphaChannel === 'always') {
                  return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + Math.round(rgba.a * 100) / 100 + ')';
                } else {
                  return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                }

              default:
                var allowHex8 = alphaChannel === 'always' || alphaChannel === 'forced';
                return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
            }
          }
        }]);

        return ColorPickerService;
      }();

      ColorPickerService.ɵfac = function ColorPickerService_Factory(t) {
        return new (t || ColorPickerService)();
      };

      ColorPickerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ColorPickerService,
        factory: ColorPickerService.ɵfac
      });

      ColorPickerService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      var ColorPickerComponent = /*#__PURE__*/function () {
        function ColorPickerComponent(elRef, cdRef, service) {
          _classCallCheck(this, ColorPickerComponent);

          this.elRef = elRef;
          this.cdRef = cdRef;
          this.service = service;
          this.isIE10 = false;
          this.dialogArrowSize = 10;
          this.dialogArrowOffset = 15;
          this.dialogInputFields = [ColorFormats.HEX, ColorFormats.RGBA, ColorFormats.HSLA, ColorFormats.CMYK];
          this.useRootViewContainer = false;
        }

        _createClass(ColorPickerComponent, [{
          key: "handleEsc",
          value: function handleEsc(event) {
            if (this.show && this.cpDialogDisplay === 'popup') {
              this.onCancelColor(event);
            }
          }
        }, {
          key: "handleEnter",
          value: function handleEnter(event) {
            if (this.show && this.cpDialogDisplay === 'popup') {
              this.onAcceptColor(event);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.slider = new SliderPosition(0, 0, 0, 0);
            var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
            var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
            this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);

            if (this.cpCmykEnabled) {
              this.format = ColorFormats.CMYK;
            } else if (this.cpOutputFormat === 'rgba') {
              this.format = ColorFormats.RGBA;
            } else if (this.cpOutputFormat === 'hsla') {
              this.format = ColorFormats.HSLA;
            } else {
              this.format = ColorFormats.HEX;
            }

            this.listenerMouseDown = function (event) {
              _this7.onMouseDown(event);
            };

            this.listenerResize = function () {
              _this7.onResize();
            };

            this.openDialog(this.initialColor, false);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.closeDialog();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.cpWidth !== 230 || this.cpDialogDisplay === 'inline') {
              var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
              var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
              this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
              this.updateColorPicker(false);
              this.cdRef.detectChanges();
            }
          }
        }, {
          key: "openDialog",
          value: function openDialog(color) {
            var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            this.service.setActive(this);

            if (!this.width) {
              this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
            }

            if (!this.height) {
              this.height = 320;
            }

            this.setInitialColor(color);
            this.setColorFromString(color, emit);
            this.openColorPicker();
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.closeColorPicker();
          }
        }, {
          key: "setupDialog",
          value: function setupDialog(instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpPresetColorsClass, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass) {
            this.setInitialColor(color);
            this.setColorMode(cpColorMode);
            this.isIE10 = detectIE() === 10;
            this.directiveInstance = instance;
            this.directiveElementRef = elementRef;
            this.cpDisableInput = cpDisableInput;
            this.cpCmykEnabled = cpCmykEnabled;
            this.cpAlphaChannel = cpAlphaChannel;
            this.cpOutputFormat = cpOutputFormat;
            this.cpDialogDisplay = cpDialogDisplay;
            this.cpIgnoredElements = cpIgnoredElements;
            this.cpSaveClickOutside = cpSaveClickOutside;
            this.cpCloseClickOutside = cpCloseClickOutside;
            this.useRootViewContainer = cpUseRootViewContainer;
            this.width = this.cpWidth = parseInt(cpWidth, 10);
            this.height = this.cpHeight = parseInt(cpHeight, 10);
            this.cpPosition = cpPosition;
            this.cpPositionOffset = parseInt(cpPositionOffset, 10);
            this.cpOKButton = cpOKButton;
            this.cpOKButtonText = cpOKButtonText;
            this.cpOKButtonClass = cpOKButtonClass;
            this.cpCancelButton = cpCancelButton;
            this.cpCancelButtonText = cpCancelButtonText;
            this.cpCancelButtonClass = cpCancelButtonClass;
            this.fallbackColor = cpFallbackColor || '#fff';
            this.setPresetConfig(cpPresetLabel, cpPresetColors);
            this.cpPresetColorsClass = cpPresetColorsClass;
            this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
            this.cpPresetEmptyMessage = cpPresetEmptyMessage;
            this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
            this.cpAddColorButton = cpAddColorButton;
            this.cpAddColorButtonText = cpAddColorButtonText;
            this.cpAddColorButtonClass = cpAddColorButtonClass;
            this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;

            if (!cpPositionRelativeToArrow) {
              this.dialogArrowOffset = 0;
            }

            if (cpDialogDisplay === 'inline') {
              this.dialogArrowSize = 0;
              this.dialogArrowOffset = 0;
            }

            if (cpOutputFormat === 'hex' && cpAlphaChannel !== 'always' && cpAlphaChannel !== 'forced') {
              this.cpAlphaChannel = 'disabled';
            }
          }
        }, {
          key: "setColorMode",
          value: function setColorMode(mode) {
            switch (mode.toString().toUpperCase()) {
              case '1':
              case 'C':
              case 'COLOR':
                this.cpColorMode = 1;
                break;

              case '2':
              case 'G':
              case 'GRAYSCALE':
                this.cpColorMode = 2;
                break;

              case '3':
              case 'P':
              case 'PRESETS':
                this.cpColorMode = 3;
                break;

              default:
                this.cpColorMode = 1;
            }
          }
        }, {
          key: "setInitialColor",
          value: function setInitialColor(color) {
            this.initialColor = color;
          }
        }, {
          key: "setPresetConfig",
          value: function setPresetConfig(cpPresetLabel, cpPresetColors) {
            this.cpPresetLabel = cpPresetLabel;
            this.cpPresetColors = cpPresetColors;
          }
        }, {
          key: "setColorFromString",
          value: function setColorFromString(value) {
            var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var hsva;

            if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'forced') {
              hsva = this.service.stringToHsva(value, true);

              if (!hsva && !this.hsva) {
                hsva = this.service.stringToHsva(value, false);
              }
            } else {
              hsva = this.service.stringToHsva(value, false);
            }

            if (!hsva && !this.hsva) {
              hsva = this.service.stringToHsva(this.fallbackColor, false);
            }

            if (hsva) {
              this.hsva = hsva;
              this.sliderH = this.hsva.h;

              if (this.cpOutputFormat === 'hex' && this.cpAlphaChannel === 'disabled') {
                this.hsva.a = 1;
              }

              this.updateColorPicker(emit, update);
            }
          }
        }, {
          key: "onResize",
          value: function onResize() {
            if (this.position === 'fixed') {
              this.setDialogPosition();
            } else if (this.cpDialogDisplay !== 'inline') {
              this.closeColorPicker();
            }
          }
        }, {
          key: "onDragEnd",
          value: function onDragEnd(slider) {
            this.directiveInstance.sliderDragEnd({
              slider: slider,
              color: this.outputColor
            });
          }
        }, {
          key: "onDragStart",
          value: function onDragStart(slider) {
            this.directiveInstance.sliderDragStart({
              slider: slider,
              color: this.outputColor
            });
          }
        }, {
          key: "onMouseDown",
          value: function onMouseDown(event) {
            if (this.show && !this.isIE10 && this.cpDialogDisplay === 'popup' && event.target !== this.directiveElementRef.nativeElement && !this.isDescendant(this.elRef.nativeElement, event.target) && !this.isDescendant(this.directiveElementRef.nativeElement, event.target) && this.cpIgnoredElements.filter(function (item) {
              return item === event.target;
            }).length === 0) {
              if (this.cpSaveClickOutside) {
                this.directiveInstance.colorSelected(this.outputColor);
              } else {
                this.hsva = null;
                this.setColorFromString(this.initialColor, false);

                if (this.cpCmykEnabled) {
                  this.directiveInstance.cmykChanged(this.cmykColor);
                }

                this.directiveInstance.colorChanged(this.initialColor);
                this.directiveInstance.colorCanceled();
              }

              if (this.cpCloseClickOutside) {
                this.closeColorPicker();
              }
            }
          }
        }, {
          key: "onAcceptColor",
          value: function onAcceptColor(event) {
            event.stopPropagation();

            if (this.outputColor) {
              this.directiveInstance.colorSelected(this.outputColor);
            }

            if (this.cpDialogDisplay === 'popup') {
              this.closeColorPicker();
            }
          }
        }, {
          key: "onCancelColor",
          value: function onCancelColor(event) {
            this.hsva = null;
            event.stopPropagation();
            this.directiveInstance.colorCanceled();
            this.setColorFromString(this.initialColor, true);

            if (this.cpDialogDisplay === 'popup') {
              if (this.cpCmykEnabled) {
                this.directiveInstance.cmykChanged(this.cmykColor);
              }

              this.directiveInstance.colorChanged(this.initialColor, true);
              this.closeColorPicker();
            }
          }
        }, {
          key: "onFormatToggle",
          value: function onFormatToggle(change) {
            var availableFormats = this.dialogInputFields.length - (this.cpCmykEnabled ? 0 : 1);
            var nextFormat = ((this.dialogInputFields.indexOf(this.format) + change) % availableFormats + availableFormats) % availableFormats;
            this.format = this.dialogInputFields[nextFormat];
          }
        }, {
          key: "onColorChange",
          value: function onColorChange(value) {
            this.hsva.s = value.s / value.rgX;
            this.hsva.v = value.v / value.rgY;
            this.updateColorPicker();
            this.directiveInstance.sliderChanged({
              slider: 'lightness',
              value: this.hsva.v,
              color: this.outputColor
            });
            this.directiveInstance.sliderChanged({
              slider: 'saturation',
              value: this.hsva.s,
              color: this.outputColor
            });
          }
        }, {
          key: "onHueChange",
          value: function onHueChange(value) {
            this.hsva.h = value.v / value.rgX;
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
            this.directiveInstance.sliderChanged({
              slider: 'hue',
              value: this.hsva.h,
              color: this.outputColor
            });
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            this.hsva.v = value.v / value.rgX;
            this.updateColorPicker();
            this.directiveInstance.sliderChanged({
              slider: 'value',
              value: this.hsva.v,
              color: this.outputColor
            });
          }
        }, {
          key: "onAlphaChange",
          value: function onAlphaChange(value) {
            this.hsva.a = value.v / value.rgX;
            this.updateColorPicker();
            this.directiveInstance.sliderChanged({
              slider: 'alpha',
              value: this.hsva.a,
              color: this.outputColor
            });
          }
        }, {
          key: "onHexInput",
          value: function onHexInput(value) {
            if (value === null) {
              this.updateColorPicker();
            } else {
              if (value && value[0] !== '#') {
                value = '#' + value;
              }

              var validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;

              if (this.cpAlphaChannel === 'always') {
                validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
              }

              var valid = validHex.test(value);

              if (valid) {
                if (value.length < 5) {
                  value = '#' + value.substring(1).split('').map(function (c) {
                    return c + c;
                  }).join('');
                }

                if (this.cpAlphaChannel === 'forced') {
                  value += Math.round(this.hsva.a * 255).toString(16);
                }

                this.setColorFromString(value, true, false);
              }

              this.directiveInstance.inputChanged({
                input: 'hex',
                valid: valid,
                value: value,
                color: this.outputColor
              });
            }
          }
        }, {
          key: "onRedInput",
          value: function onRedInput(value) {
            var rgba = this.service.hsvaToRgba(this.hsva);
            var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

            if (valid) {
              rgba.r = value.v / value.rg;
              this.hsva = this.service.rgbaToHsva(rgba);
              this.sliderH = this.hsva.h;
              this.updateColorPicker();
            }

            this.directiveInstance.inputChanged({
              input: 'red',
              valid: valid,
              value: rgba.r,
              color: this.outputColor
            });
          }
        }, {
          key: "onBlueInput",
          value: function onBlueInput(value) {
            var rgba = this.service.hsvaToRgba(this.hsva);
            var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

            if (valid) {
              rgba.b = value.v / value.rg;
              this.hsva = this.service.rgbaToHsva(rgba);
              this.sliderH = this.hsva.h;
              this.updateColorPicker();
            }

            this.directiveInstance.inputChanged({
              input: 'blue',
              valid: valid,
              value: rgba.b,
              color: this.outputColor
            });
          }
        }, {
          key: "onGreenInput",
          value: function onGreenInput(value) {
            var rgba = this.service.hsvaToRgba(this.hsva);
            var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

            if (valid) {
              rgba.g = value.v / value.rg;
              this.hsva = this.service.rgbaToHsva(rgba);
              this.sliderH = this.hsva.h;
              this.updateColorPicker();
            }

            this.directiveInstance.inputChanged({
              input: 'green',
              valid: valid,
              value: rgba.g,
              color: this.outputColor
            });
          }
        }, {
          key: "onHueInput",
          value: function onHueInput(value) {
            var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

            if (valid) {
              this.hsva.h = value.v / value.rg;
              this.sliderH = this.hsva.h;
              this.updateColorPicker();
            }

            this.directiveInstance.inputChanged({
              input: 'hue',
              valid: valid,
              value: this.hsva.h,
              color: this.outputColor
            });
          }
        }, {
          key: "onValueInput",
          value: function onValueInput(value) {
            var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

            if (valid) {
              this.hsva.v = value.v / value.rg;
              this.updateColorPicker();
            }

            this.directiveInstance.inputChanged({
              input: 'value',
              valid: valid,
              value: this.hsva.v,
              color: this.outputColor
            });
          }
        }, {
          key: "onAlphaInput",
          value: function onAlphaInput(value) {
            var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

            if (valid) {
              this.hsva.a = value.v / value.rg;
              this.updateColorPicker();
            }

            this.directiveInstance.inputChanged({
              input: 'alpha',
              valid: valid,
              value: this.hsva.a,
              color: this.outputColor
            });
          }
        }, {
          key: "onLightnessInput",
          value: function onLightnessInput(value) {
            var hsla = this.service.hsva2hsla(this.hsva);
            var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

            if (valid) {
              hsla.l = value.v / value.rg;
              this.hsva = this.service.hsla2hsva(hsla);
              this.sliderH = this.hsva.h;
              this.updateColorPicker();
            }

            this.directiveInstance.inputChanged({
              input: 'lightness',
              valid: valid,
              value: hsla.l,
              color: this.outputColor
            });
          }
        }, {
          key: "onSaturationInput",
          value: function onSaturationInput(value) {
            var hsla = this.service.hsva2hsla(this.hsva);
            var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

            if (valid) {
              hsla.s = value.v / value.rg;
              this.hsva = this.service.hsla2hsva(hsla);
              this.sliderH = this.hsva.h;
              this.updateColorPicker();
            }

            this.directiveInstance.inputChanged({
              input: 'saturation',
              valid: valid,
              value: hsla.s,
              color: this.outputColor
            });
          }
        }, {
          key: "onCyanInput",
          value: function onCyanInput(value) {
            var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

            if (valid) {
              this.cmyk.c = value.v;
              this.updateColorPicker(false, true, true);
            }

            this.directiveInstance.inputChanged({
              input: 'cyan',
              valid: true,
              value: this.cmyk.c,
              color: this.outputColor
            });
          }
        }, {
          key: "onMagentaInput",
          value: function onMagentaInput(value) {
            var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

            if (valid) {
              this.cmyk.m = value.v;
              this.updateColorPicker(false, true, true);
            }

            this.directiveInstance.inputChanged({
              input: 'magenta',
              valid: true,
              value: this.cmyk.m,
              color: this.outputColor
            });
          }
        }, {
          key: "onYellowInput",
          value: function onYellowInput(value) {
            var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

            if (valid) {
              this.cmyk.y = value.v;
              this.updateColorPicker(false, true, true);
            }

            this.directiveInstance.inputChanged({
              input: 'yellow',
              valid: true,
              value: this.cmyk.y,
              color: this.outputColor
            });
          }
        }, {
          key: "onBlackInput",
          value: function onBlackInput(value) {
            var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

            if (valid) {
              this.cmyk.k = value.v;
              this.updateColorPicker(false, true, true);
            }

            this.directiveInstance.inputChanged({
              input: 'black',
              valid: true,
              value: this.cmyk.k,
              color: this.outputColor
            });
          }
        }, {
          key: "onAddPresetColor",
          value: function onAddPresetColor(event, value) {
            event.stopPropagation();

            if (!this.cpPresetColors.filter(function (color) {
              return color === value;
            }).length) {
              this.cpPresetColors = this.cpPresetColors.concat(value);
              this.directiveInstance.presetColorsChanged(this.cpPresetColors);
            }
          }
        }, {
          key: "onRemovePresetColor",
          value: function onRemovePresetColor(event, value) {
            event.stopPropagation();
            this.cpPresetColors = this.cpPresetColors.filter(function (color) {
              return color !== value;
            });
            this.directiveInstance.presetColorsChanged(this.cpPresetColors);
          } // Private helper functions for the color picker dialog status

        }, {
          key: "openColorPicker",
          value: function openColorPicker() {
            var _this8 = this;

            if (!this.show) {
              this.show = true;
              this.hidden = true;
              setTimeout(function () {
                _this8.hidden = false;

                _this8.setDialogPosition();

                _this8.cdRef.detectChanges();
              }, 0);
              this.directiveInstance.stateChanged(true);

              if (!this.isIE10) {
                document.addEventListener('mousedown', this.listenerMouseDown);
                document.addEventListener('touchstart', this.listenerMouseDown);
              }

              window.addEventListener('resize', this.listenerResize);
            }
          }
        }, {
          key: "closeColorPicker",
          value: function closeColorPicker() {
            if (this.show) {
              this.show = false;
              this.directiveInstance.stateChanged(false);

              if (!this.isIE10) {
                document.removeEventListener('mousedown', this.listenerMouseDown);
                document.removeEventListener('touchstart', this.listenerMouseDown);
              }

              window.removeEventListener('resize', this.listenerResize);

              if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges();
              }
            }
          }
        }, {
          key: "updateColorPicker",
          value: function updateColorPicker() {
            var emit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var cmykInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (this.sliderDimMax) {
              if (this.cpColorMode === 2) {
                this.hsva.s = 0;
              }

              var hue, hsla, rgba;
              var lastOutput = this.outputColor;
              hsla = this.service.hsva2hsla(this.hsva);

              if (!this.cpCmykEnabled) {
                rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
              } else {
                if (!cmykInput) {
                  rgba = this.service.hsvaToRgba(this.hsva);
                  this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
                } else {
                  rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
                  this.hsva = this.service.rgbaToHsva(rgba);
                }

                rgba = this.service.denormalizeRGBA(rgba);
                this.sliderH = this.hsva.h;
              }

              hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));

              if (update) {
                this.hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);

                if (this.cpCmykEnabled) {
                  this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
                }

                var allowHex8 = this.cpAlphaChannel === 'always';
                this.hexText = this.service.rgbaToHex(rgba, allowHex8);
                this.hexAlpha = this.rgbaText.a;
              }

              if (this.cpOutputFormat === 'auto') {
                if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK) {
                  if (this.hsva.a < 1) {
                    this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
                  }
                }
              }

              this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
              this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
              this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
              this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);

              if (this.format !== ColorFormats.CMYK) {
                this.cmykColor = '';
              } else {
                if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'enabled' || this.cpAlphaChannel === 'forced') {
                  var alpha = Math.round(this.cmyk.a * 100) / 100;
                  this.cmykColor = "cmyka(".concat(this.cmyk.c, ",").concat(this.cmyk.m, ",").concat(this.cmyk.y, ",").concat(this.cmyk.k, ",").concat(alpha, ")");
                } else {
                  this.cmykColor = "cmyk(".concat(this.cmyk.c, ",").concat(this.cmyk.m, ",").concat(this.cmyk.y, ",").concat(this.cmyk.k, ")");
                }
              }

              this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);

              if (emit && lastOutput !== this.outputColor) {
                if (this.cpCmykEnabled) {
                  this.directiveInstance.cmykChanged(this.cmykColor);
                }

                this.directiveInstance.colorChanged(this.outputColor);
              }
            }
          } // Private helper functions for the color picker dialog positioning

        }, {
          key: "setDialogPosition",
          value: function setDialogPosition() {
            if (this.cpDialogDisplay === 'inline') {
              this.position = 'relative';
            } else {
              var position = 'static',
                  transform = '',
                  style;
              var parentNode = null,
                  transformNode = null;
              var node = this.directiveElementRef.nativeElement.parentNode;
              var dialogHeight = this.dialogElement.nativeElement.offsetHeight;

              while (node !== null && node.tagName !== 'HTML') {
                style = window.getComputedStyle(node);
                position = style.getPropertyValue('position');
                transform = style.getPropertyValue('transform');

                if (position !== 'static' && parentNode === null) {
                  parentNode = node;
                }

                if (transform && transform !== 'none' && transformNode === null) {
                  transformNode = node;
                }

                if (position === 'fixed') {
                  parentNode = transformNode;
                  break;
                }

                node = node.parentNode;
              }

              var boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, position !== 'fixed');

              if (this.useRootViewContainer || position === 'fixed' && (!parentNode || parentNode instanceof HTMLUnknownElement)) {
                this.top = boxDirective.top;
                this.left = boxDirective.left;
              } else {
                if (parentNode === null) {
                  parentNode = node;
                }

                var boxParent = this.createDialogBox(parentNode, position !== 'fixed');
                this.top = boxDirective.top - boxParent.top;
                this.left = boxDirective.left - boxParent.left;
              }

              if (position === 'fixed') {
                this.position = 'fixed';
              }

              var usePosition = this.cpPosition;

              if (this.cpPosition === 'auto') {
                var dialogBounds = this.dialogElement.nativeElement.getBoundingClientRect();
                usePosition = calculateAutoPositioning(dialogBounds);
              }

              if (usePosition === 'top') {
                this.arrowTop = dialogHeight - 1;
                this.top -= dialogHeight + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
              } else if (usePosition === 'bottom') {
                this.top += boxDirective.height + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
              } else if (usePosition === 'top-left' || usePosition === 'left-top') {
                this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
                this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
              } else if (usePosition === 'top-right' || usePosition === 'right-top') {
                this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
                this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
              } else if (usePosition === 'left' || usePosition === 'bottom-left' || usePosition === 'left-bottom') {
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left -= this.cpWidth + this.dialogArrowSize - 2;
              } else {
                // usePosition === 'right' || usePosition === 'bottom-right' || usePosition === 'right-bottom'
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left += boxDirective.width + this.dialogArrowSize - 2;
              }
            }
          } // Private helper functions for the color picker dialog positioning and opening

        }, {
          key: "isDescendant",
          value: function isDescendant(parent, child) {
            var node = child.parentNode;

            while (node !== null) {
              if (node === parent) {
                return true;
              }

              node = node.parentNode;
            }

            return false;
          }
        }, {
          key: "createDialogBox",
          value: function createDialogBox(element, offset) {
            return {
              top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
              left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
              width: element.offsetWidth,
              height: element.offsetHeight
            };
          }
        }]);

        return ColorPickerComponent;
      }();

      ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) {
        return new (t || ColorPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorPickerService));
      };

      ColorPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ColorPickerComponent,
        selectors: [["color-picker"]],
        viewQuery: function ColorPickerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialogElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hueSlider = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.alphaSlider = _t.first);
          }
        },
        hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.esc", function ColorPickerComponent_keyup_esc_HostBindingHandler($event) {
              return ctx.handleEsc($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keyup.enter", function ColorPickerComponent_keyup_enter_HostBindingHandler($event) {
              return ctx.handleEnter($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        decls: 28,
        vars: 47,
        consts: [[1, "color-picker", 3, "click"], ["dialogPopup", ""], [3, "class", "top", 4, "ngIf"], ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", "dragStart", "dragEnd", 4, "ngIf"], [1, "hue-alpha", "box"], [1, "left"], [1, "selected-color-background"], [1, "selected-color"], ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"], [1, "right"], ["style", "height: 16px;", 4, "ngIf"], [1, "hue", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["hueSlider", ""], [1, "cursor"], [1, "value", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["valueSlider", ""], [1, "alpha", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["alphaSlider", ""], ["class", "cmyk-text", 3, "display", 4, "ngIf"], ["class", "hsla-text", 3, "display", 4, "ngIf"], ["class", "rgba-text", 3, "display", 4, "ngIf"], ["class", "hex-text", 3, "hex-alpha", "display", 4, "ngIf"], ["class", "value-text", 4, "ngIf"], ["class", "type-policy", 4, "ngIf"], ["class", "preset-area", 4, "ngIf"], ["class", "button-area", 4, "ngIf"], [1, "saturation-lightness", 3, "slider", "rgX", "rgY", "newValue", "dragStart", "dragEnd"], ["type", "button", 3, "disabled", "click"], [2, "height", "16px"], [1, "cmyk-text"], [1, "box"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "text", "rg", "value", "keyup.enter", "newValue"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue", 4, "ngIf"], [4, "ngIf"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hsla-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "rgba-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hex-text"], [3, "text", "value", "blur", "keyup.enter", "newValue"], [1, "value-text"], [1, "type-policy"], [1, "type-policy-arrow", 3, "click"], [1, "preset-area"], [1, "preset-label"], [3, "class", 4, "ngIf"], ["class", "preset-color", 3, "backgroundColor", "click", 4, "ngFor", "ngForOf"], [1, "preset-color", 3, "click"], [3, "class", "click", 4, "ngIf"], [3, "click"], [1, "button-area"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"]],
        template: function ColorPickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_Template_div_click_0_listener($event) {
              return $event.stopPropagation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorPickerComponent_div_2_Template, 1, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerComponent_div_3_Template, 2, 8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ColorPickerComponent_button_8_Template, 2, 5, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColorPickerComponent_div_10_Template, 1, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_11_listener($event) {
              return ctx.onHueChange($event);
            })("dragStart", function ColorPickerComponent_Template_div_dragStart_11_listener() {
              return ctx.onDragStart("hue");
            })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_11_listener() {
              return ctx.onDragEnd("hue");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_14_listener($event) {
              return ctx.onValueChange($event);
            })("dragStart", function ColorPickerComponent_Template_div_dragStart_14_listener() {
              return ctx.onDragStart("value");
            })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_14_listener() {
              return ctx.onDragEnd("value");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newValue", function ColorPickerComponent_Template_div_newValue_17_listener($event) {
              return ctx.onAlphaChange($event);
            })("dragStart", function ColorPickerComponent_Template_div_dragStart_17_listener() {
              return ctx.onDragStart("alpha");
            })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_17_listener() {
              return ctx.onDragEnd("alpha");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ColorPickerComponent_div_20_Template, 17, 12, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ColorPickerComponent_div_21_Template, 14, 10, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ColorPickerComponent_div_22_Template, 14, 10, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ColorPickerComponent_div_23_Template, 8, 7, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ColorPickerComponent_div_24_Template, 9, 3, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ColorPickerComponent_div_25_Template, 3, 0, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ColorPickerComponent_div_26_Template, 6, 3, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ColorPickerComponent_div_27_Template, 3, 2, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", !ctx.show ? "none" : "block")("visibility", ctx.hidden ? "hidden" : "visible")("top", ctx.top, "px")("left", ctx.left, "px")("position", ctx.position)("height", ctx.cpHeight, "px")("width", ctx.cpWidth, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpDialogDisplay == "popup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cpColorMode || 1) === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpAddColorButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpAlphaChannel === "disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", (ctx.cpColorMode || 1) === 1 ? "block" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.slider == null ? null : ctx.slider.h, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", (ctx.cpColorMode || 1) === 2 ? "block" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("right", ctx.slider == null ? null : ctx.slider.v, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.cpAlphaChannel === "disabled" ? "none" : "block")("background-color", ctx.alphaSliderColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rgX", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.slider == null ? null : ctx.slider.a, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length) || ctx.cpAddColorButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cpOKButton || ctx.cpCancelButton);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], SliderDirective, TextDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: [".color-picker{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background-color:#fff;border:1px solid #777;cursor:default;height:auto;position:absolute;user-select:none;width:230px;z-index:1000}.color-picker *{box-sizing:border-box;font-size:11px;margin:0}.color-picker input{color:#000;font-size:13px;height:26px;min-width:0;text-align:center;width:0}.color-picker input:-moz-submit-invalid,.color-picker input:-moz-ui-invalid,.color-picker input:invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.color-picker .arrow{border-style:solid;height:0;position:absolute;width:0;z-index:999999}.color-picker .arrow.arrow-top{border-color:#777 transparent transparent;border-width:10px 5px;left:8px}.color-picker .arrow.arrow-bottom{border-color:transparent transparent #777;border-width:10px 5px;left:8px;top:-20px}.color-picker .arrow.arrow-left-top,.color-picker .arrow.arrow-top-left{border-color:transparent transparent transparent #777;border-width:5px 10px;bottom:8px;right:-21px}.color-picker .arrow.arrow-right-top,.color-picker .arrow.arrow-top-right{border-color:transparent #777 transparent transparent;border-width:5px 10px;bottom:8px;left:-20px}.color-picker .arrow.arrow-bottom-left,.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom{border-color:transparent transparent transparent #777;border-width:5px 10px;right:-21px;top:8px}.color-picker .arrow.arrow-bottom-right,.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom{border-color:transparent #777 transparent transparent;border-width:5px 10px;left:-20px;top:8px}.color-picker .cursor{border:2px solid #222;border-radius:50%;cursor:default;height:16px;position:relative;width:16px}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{padding:16px 8px;position:relative}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{color:#555;font-size:11px;overflow:hidden;padding:4px;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%}.color-picker .preset-area .preset-color{border:1px solid #a9a9a9;border-radius:25%;cursor:pointer;display:inline-block;height:18px;margin:4px 6px 8px;position:relative;width:18px}.color-picker .preset-area .preset-empty-message{font-style:italic;margin-bottom:8px;margin-top:4px;min-height:18px;text-align:center}.color-picker .hex-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{clear:left;color:#555;flex:1 1 auto;float:left;text-align:center}.color-picker .hex-text .box input{border:1px solid #a9a9a9;flex:1 1 auto;padding:1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{color:#555;flex:1 1 auto;margin-right:8px;text-align:center}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{border:1px solid #a9a9a9;flex:1;float:left;margin:0 8px 0 0;padding:1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC\");direction:ltr}.color-picker .hue,.color-picker .value{background-size:100% 100%;border:none;cursor:pointer;height:16px;margin-bottom:16px;width:100%}.color-picker .value{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=\");direction:rtl}.color-picker .alpha{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:16px;width:100%}.color-picker .type-policy{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==\");background-position:50%;background-repeat:no-repeat;background-size:8px 16px;height:24px;position:absolute;right:12px;top:218px;width:16px}.color-picker .type-policy .type-policy-arrow{display:block;height:50%;width:100%}.color-picker .selected-color{border:1px solid #a9a9a9;border-radius:50%;height:40px;left:8px;position:absolute;top:16px;width:40px}.color-picker .selected-color-background{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\");border-radius:50%;height:40px;width:40px}.color-picker .saturation-lightness{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:130px;touch-action:manipulation;width:100%}.color-picker .cp-add-color-button-class{background:transparent;border:0;cursor:pointer;display:inline;margin:3px -3px;padding:0;position:absolute}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{color:#999;cursor:not-allowed}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{background:#fff;border-radius:50%;box-shadow:1px 1px 5px #333;cursor:pointer;display:block;height:10px;position:absolute;right:-5px;text-align:center;top:-5px;width:10px}.color-picker .cp-remove-color-button-class:before{bottom:3.5px;content:\"x\";display:inline-block;font-size:10px;position:relative}"],
        encapsulation: 2
      });

      ColorPickerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: ColorPickerService
        }];
      };

      ColorPickerComponent.propDecorators = {
        dialogElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['dialogPopup', {
            "static": true
          }]
        }],
        hueSlider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['hueSlider', {
            "static": true
          }]
        }],
        alphaSlider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['alphaSlider', {
            "static": true
          }]
        }],
        handleEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keyup.esc', ['$event']]
        }],
        handleEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keyup.enter', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'color-picker',
            template: "<div #dialogPopup class=\"color-picker\" [class.open]=\"show\" [style.display]=\"!show ? 'none' : 'block'\" [style.visibility]=\"hidden ? 'hidden' : 'visible'\" [style.top.px]=\"top\" [style.left.px]=\"left\" [style.position]=\"position\" [style.height.px]=\"cpHeight\" [style.width.px]=\"cpWidth\" (click)=\"$event.stopPropagation()\">\n  <div *ngIf=\"cpDialogDisplay=='popup'\" class=\"arrow arrow-{{cpUsePosition}}\" [style.top.px]=\"arrowTop\"></div>\n\n  <div *ngIf=\"(cpColorMode ||\xA01) === 1\" class=\"saturation-lightness\" [slider] [rgX]=\"1\" [rgY]=\"1\" [style.background-color]=\"hueSliderColor\" (newValue)=\"onColorChange($event)\" (dragStart)=\"onDragStart('saturation-lightness')\" (dragEnd)=\"onDragEnd('saturation-lightness')\">\n    <div class=\"cursor\" [style.top.px]=\"slider?.v\" [style.left.px]=\"slider?.s\"></div>\n  </div>\n\n  <div class=\"hue-alpha box\">\n    <div class=\"left\">\n      <div class=\"selected-color-background\"></div>\n\n      <div class=\"selected-color\" [style.background-color]=\"selectedColor\"></div>\n\n      <button *ngIf=\"cpAddColorButton\" type=\"button\" class=\"{{cpAddColorButtonClass}}\" [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\" (click)=\"onAddPresetColor($event, selectedColor)\">\n        {{cpAddColorButtonText}}\n      </button>\n    </div>\n\n    <div class=\"right\">\n      <div *ngIf=\"cpAlphaChannel==='disabled'\" style=\"height: 16px;\"></div>\n\n      <div #hueSlider class=\"hue\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\xA01) === 1 ? 'block' : 'none'\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.h\"></div>\n      </div>\n\n      <div #valueSlider class=\"value\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\xA01) === 2 ? 'block': 'none'\" (newValue)=\"onValueChange($event)\" (dragStart)=\"onDragStart('value')\" (dragEnd)=\"onDragEnd('value')\">\n        <div class=\"cursor\" [style.right.px]=\"slider?.v\"></div>\n      </div>\n\n      <div #alphaSlider class=\"alpha\" [slider] [rgX]=\"1\" [style.display]=\"cpAlphaChannel === 'disabled' ? 'none' : 'block'\" [style.background-color]=\"alphaSliderColor\" (newValue)=\"onAlphaChange($event)\" (dragStart)=\"onDragStart('alpha')\" (dragEnd)=\"onDragEnd('alpha')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.a\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1\" class=\"cmyk-text\" [style.display]=\"format !== 3 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.c\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onCyanInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.m\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onMagentaInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.y\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onYellowInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.k\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlackInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"cmykText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n     <div class=\"box\">\n      <div>C</div><div>M</div><div>Y</div><div>K</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1 \" class=\"hsla-text\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [text] [rg]=\"360\" [value]=\"hslaText?.h\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHueInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.s\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onSaturationInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onLightnessInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>H</div><div>S</div><div>L</div><div *ngIf=\"cpAlphaChannel!=='disabled'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1 \" [style.display]=\"format !== 1 ? 'none' : 'block'\" class=\"rgba-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onRedInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onGreenInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"rgbaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>R</div><div>G</div><div>B</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1\" class=\"hex-text\" [class.hex-alpha]=\"cpAlphaChannel==='forced'\"\n    [style.display]=\"format !== 0 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input [text] [value]=\"hexText\" (blur)=\"onHexInput(null)\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHexInput($event)\"/>\n      <input *ngIf=\"cpAlphaChannel==='forced'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hexAlpha\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\"/>\n    </div>\n\n    <div class=\"box\">\n      <div>Hex</div>\n      <div *ngIf=\"cpAlphaChannel==='forced'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 2\" class=\"value-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onValueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"  [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>V</div><div>A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1\" class=\"type-policy\">\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(-1)\"></span>\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(1)\"></span>\n  </div>\n\n  <div *ngIf=\"cpPresetColors?.length || cpAddColorButton\" class=\"preset-area\">\n    <hr>\n\n    <div class=\"preset-label\">{{cpPresetLabel}}</div>\n\n    <div *ngIf=\"cpPresetColors?.length\" class=\"{{cpPresetColorsClass}}\">\n      <div *ngFor=\"let color of cpPresetColors\" class=\"preset-color\" [style.backgroundColor]=\"color\" (click)=\"setColorFromString(color)\">\n        <span *ngIf=\"cpAddColorButton\" class=\"{{cpRemoveColorButtonClass}}\" (click)=\"onRemovePresetColor($event, color)\"></span>\n      </div>\n    </div>\n\n    <div *ngIf=\"!cpPresetColors?.length && cpAddColorButton\" class=\"{{cpPresetEmptyMessageClass}}\">{{cpPresetEmptyMessage}}</div>\n  </div>\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".color-picker{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background-color:#fff;border:1px solid #777;cursor:default;height:auto;position:absolute;user-select:none;width:230px;z-index:1000}.color-picker *{box-sizing:border-box;font-size:11px;margin:0}.color-picker input{color:#000;font-size:13px;height:26px;min-width:0;text-align:center;width:0}.color-picker input:-moz-submit-invalid,.color-picker input:-moz-ui-invalid,.color-picker input:invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.color-picker .arrow{border-style:solid;height:0;position:absolute;width:0;z-index:999999}.color-picker .arrow.arrow-top{border-color:#777 transparent transparent;border-width:10px 5px;left:8px}.color-picker .arrow.arrow-bottom{border-color:transparent transparent #777;border-width:10px 5px;left:8px;top:-20px}.color-picker .arrow.arrow-left-top,.color-picker .arrow.arrow-top-left{border-color:transparent transparent transparent #777;border-width:5px 10px;bottom:8px;right:-21px}.color-picker .arrow.arrow-right-top,.color-picker .arrow.arrow-top-right{border-color:transparent #777 transparent transparent;border-width:5px 10px;bottom:8px;left:-20px}.color-picker .arrow.arrow-bottom-left,.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom{border-color:transparent transparent transparent #777;border-width:5px 10px;right:-21px;top:8px}.color-picker .arrow.arrow-bottom-right,.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom{border-color:transparent #777 transparent transparent;border-width:5px 10px;left:-20px;top:8px}.color-picker .cursor{border:2px solid #222;border-radius:50%;cursor:default;height:16px;position:relative;width:16px}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{padding:16px 8px;position:relative}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{color:#555;font-size:11px;overflow:hidden;padding:4px;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%}.color-picker .preset-area .preset-color{border:1px solid #a9a9a9;border-radius:25%;cursor:pointer;display:inline-block;height:18px;margin:4px 6px 8px;position:relative;width:18px}.color-picker .preset-area .preset-empty-message{font-style:italic;margin-bottom:8px;margin-top:4px;min-height:18px;text-align:center}.color-picker .hex-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{clear:left;color:#555;flex:1 1 auto;float:left;text-align:center}.color-picker .hex-text .box input{border:1px solid #a9a9a9;flex:1 1 auto;padding:1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{font-size:11px;padding:4px 8px;width:100%}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{color:#555;flex:1 1 auto;margin-right:8px;text-align:center}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{border:1px solid #a9a9a9;flex:1;float:left;margin:0 8px 0 0;padding:1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC\");direction:ltr}.color-picker .hue,.color-picker .value{background-size:100% 100%;border:none;cursor:pointer;height:16px;margin-bottom:16px;width:100%}.color-picker .value{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=\");direction:rtl}.color-picker .alpha{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:16px;width:100%}.color-picker .type-policy{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==\");background-position:50%;background-repeat:no-repeat;background-size:8px 16px;height:24px;position:absolute;right:12px;top:218px;width:16px}.color-picker .type-policy .type-policy-arrow{display:block;height:50%;width:100%}.color-picker .selected-color{border:1px solid #a9a9a9;border-radius:50%;height:40px;left:8px;position:absolute;top:16px;width:40px}.color-picker .selected-color-background{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\");border-radius:50%;height:40px;width:40px}.color-picker .saturation-lightness{background-image:url(\"data:image/png;base64,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\");background-size:100% 100%;border:none;cursor:pointer;direction:ltr;height:130px;touch-action:manipulation;width:100%}.color-picker .cp-add-color-button-class{background:transparent;border:0;cursor:pointer;display:inline;margin:3px -3px;padding:0;position:absolute}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{color:#999;cursor:not-allowed}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{background:#fff;border-radius:50%;box-shadow:1px 1px 5px #333;cursor:pointer;display:block;height:10px;position:absolute;right:-5px;text-align:center;top:-5px;width:10px}.color-picker .cp-remove-color-button-class:before{bottom:3.5px;content:\"x\";display:inline-block;font-size:10px;position:relative}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: ColorPickerService
          }];
        }, {
          handleEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup.esc', ['$event']]
          }],
          handleEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup.enter', ['$event']]
          }],
          dialogElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialogPopup', {
              "static": true
            }]
          }],
          hueSlider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['hueSlider', {
              "static": true
            }]
          }],
          alphaSlider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['alphaSlider', {
              "static": true
            }]
          }]
        });
      })();

      var ColorPickerDirective = /*#__PURE__*/function () {
        function ColorPickerDirective(injector, cfr, appRef, vcRef, elRef, _service) {
          _classCallCheck(this, ColorPickerDirective);

          this.injector = injector;
          this.cfr = cfr;
          this.appRef = appRef;
          this.vcRef = vcRef;
          this.elRef = elRef;
          this._service = _service;
          this.dialogCreated = false;
          this.ignoreChanges = false;
          this.viewAttachedToAppRef = false;
          this.cpWidth = '230px';
          this.cpHeight = 'auto';
          this.cpToggle = false;
          this.cpDisabled = false;
          this.cpIgnoredElements = [];
          this.cpFallbackColor = '';
          this.cpColorMode = 'color';
          this.cpCmykEnabled = false;
          this.cpOutputFormat = 'auto';
          this.cpAlphaChannel = 'enabled';
          this.cpDisableInput = false;
          this.cpDialogDisplay = 'popup';
          this.cpSaveClickOutside = true;
          this.cpCloseClickOutside = true;
          this.cpUseRootViewContainer = false;
          this.cpPosition = 'auto';
          this.cpPositionOffset = '0%';
          this.cpPositionRelativeToArrow = false;
          this.cpOKButton = false;
          this.cpOKButtonText = 'OK';
          this.cpOKButtonClass = 'cp-ok-button-class';
          this.cpCancelButton = false;
          this.cpCancelButtonText = 'Cancel';
          this.cpCancelButtonClass = 'cp-cancel-button-class';
          this.cpPresetLabel = 'Preset colors';
          this.cpPresetColorsClass = 'cp-preset-colors-class';
          this.cpMaxPresetColorsLength = 6;
          this.cpPresetEmptyMessage = 'No colors added';
          this.cpPresetEmptyMessageClass = 'preset-empty-message';
          this.cpAddColorButton = false;
          this.cpAddColorButtonText = 'Add color';
          this.cpAddColorButtonClass = 'cp-add-color-button-class';
          this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
          this.cpInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
          this.cpToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
          this.cpSliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
          this.cpSliderDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
          this.cpSliderDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
          this.colorPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
          this.colorPickerClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
          this.colorPickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
          this.colorPickerSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
          this.colorPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
          this.cpCmykColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
          this.cpPresetColorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        }

        _createClass(ColorPickerDirective, [{
          key: "handleClick",
          value: function handleClick() {
            this.inputFocus();
          }
        }, {
          key: "handleFocus",
          value: function handleFocus() {
            this.inputFocus();
          }
        }, {
          key: "handleInput",
          value: function handleInput(event) {
            this.inputChange(event);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.cmpRef != null) {
              if (this.viewAttachedToAppRef) {
                this.appRef.detachView(this.cmpRef.hostView);
              }

              this.cmpRef.destroy();
              this.cmpRef = null;
              this.dialog = null;
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.cpToggle && !this.cpDisabled) {
              if (changes.cpToggle.currentValue) {
                this.openDialog();
              } else if (!changes.cpToggle.currentValue) {
                this.closeDialog();
              }
            }

            if (changes.colorPicker) {
              if (this.dialog && !this.ignoreChanges) {
                if (this.cpDialogDisplay === 'inline') {
                  this.dialog.setInitialColor(changes.colorPicker.currentValue);
                }

                this.dialog.setColorFromString(changes.colorPicker.currentValue, false);

                if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                  this.cmpRef.changeDetectorRef.detectChanges();
                }
              }

              this.ignoreChanges = false;
            }

            if (changes.cpPresetLabel || changes.cpPresetColors) {
              if (this.dialog) {
                this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
              }
            }
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            if (!this.dialogCreated) {
              var vcRef = this.vcRef;
              this.dialogCreated = true;
              this.viewAttachedToAppRef = false;

              if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                var classOfRootComponent = this.appRef.componentTypes[0];
                var appInstance = this.injector.get(classOfRootComponent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].NULL);

                if (appInstance !== _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].NULL) {
                  vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;

                  if (vcRef === this.vcRef) {
                    console.warn('You are using cpUseRootViewContainer, ' + 'but the root component is not exposing viewContainerRef!' + 'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
                  }
                } else {
                  this.viewAttachedToAppRef = true;
                }
              }

              var compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);

              if (this.viewAttachedToAppRef) {
                this.cmpRef = compFactory.create(this.injector);
                this.appRef.attachView(this.cmpRef.hostView);
                document.body.appendChild(this.cmpRef.hostView.rootNodes[0]);
              } else {
                var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], vcRef.parentInjector);

                this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
              }

              this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass);
              this.dialog = this.cmpRef.instance;

              if (this.vcRef !== vcRef) {
                this.cmpRef.changeDetectorRef.detectChanges();
              }
            } else if (this.dialog) {
              this.dialog.openDialog(this.colorPicker);
            }
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            if (this.dialog && this.cpDialogDisplay === 'popup') {
              this.dialog.closeDialog();
            }
          }
        }, {
          key: "cmykChanged",
          value: function cmykChanged(value) {
            this.cpCmykColorChange.emit(value);
          }
        }, {
          key: "stateChanged",
          value: function stateChanged(state) {
            this.cpToggleChange.emit(state);

            if (state) {
              this.colorPickerOpen.emit(this.colorPicker);
            } else {
              this.colorPickerClose.emit(this.colorPicker);
            }
          }
        }, {
          key: "colorChanged",
          value: function colorChanged(value) {
            var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            this.ignoreChanges = ignore;
            this.colorPickerChange.emit(value);
          }
        }, {
          key: "colorSelected",
          value: function colorSelected(value) {
            this.colorPickerSelect.emit(value);
          }
        }, {
          key: "colorCanceled",
          value: function colorCanceled() {
            this.colorPickerCancel.emit();
          }
        }, {
          key: "inputFocus",
          value: function inputFocus() {
            var element = this.elRef.nativeElement;
            var ignored = this.cpIgnoredElements.filter(function (item) {
              return item === element;
            });

            if (!this.cpDisabled && !ignored.length) {
              if (typeof document !== 'undefined' && element === document.activeElement) {
                this.openDialog();
              } else if (!this.dialog || !this.dialog.show) {
                this.openDialog();
              } else {
                this.closeDialog();
              }
            }
          }
        }, {
          key: "inputChange",
          value: function inputChange(event) {
            if (this.dialog) {
              this.dialog.setColorFromString(event.target.value, true);
            } else {
              this.colorPicker = event.target.value;
              this.colorPickerChange.emit(this.colorPicker);
            }
          }
        }, {
          key: "inputChanged",
          value: function inputChanged(event) {
            this.cpInputChange.emit(event);
          }
        }, {
          key: "sliderChanged",
          value: function sliderChanged(event) {
            this.cpSliderChange.emit(event);
          }
        }, {
          key: "sliderDragEnd",
          value: function sliderDragEnd(event) {
            this.cpSliderDragEnd.emit(event);
          }
        }, {
          key: "sliderDragStart",
          value: function sliderDragStart(event) {
            this.cpSliderDragStart.emit(event);
          }
        }, {
          key: "presetColorsChanged",
          value: function presetColorsChanged(value) {
            this.cpPresetColorsChange.emit(value);
          }
        }]);

        return ColorPickerDirective;
      }();

      ColorPickerDirective.ɵfac = function ColorPickerDirective_Factory(t) {
        return new (t || ColorPickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColorPickerService));
      };

      ColorPickerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ColorPickerDirective,
        selectors: [["", "colorPicker", ""]],
        hostBindings: function ColorPickerDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerDirective_click_HostBindingHandler() {
              return ctx.handleClick();
            })("focus", function ColorPickerDirective_focus_HostBindingHandler() {
              return ctx.handleFocus();
            })("input", function ColorPickerDirective_input_HostBindingHandler($event) {
              return ctx.handleInput($event);
            });
          }
        },
        inputs: {
          cpWidth: "cpWidth",
          cpHeight: "cpHeight",
          cpToggle: "cpToggle",
          cpDisabled: "cpDisabled",
          cpIgnoredElements: "cpIgnoredElements",
          cpFallbackColor: "cpFallbackColor",
          cpColorMode: "cpColorMode",
          cpCmykEnabled: "cpCmykEnabled",
          cpOutputFormat: "cpOutputFormat",
          cpAlphaChannel: "cpAlphaChannel",
          cpDisableInput: "cpDisableInput",
          cpDialogDisplay: "cpDialogDisplay",
          cpSaveClickOutside: "cpSaveClickOutside",
          cpCloseClickOutside: "cpCloseClickOutside",
          cpUseRootViewContainer: "cpUseRootViewContainer",
          cpPosition: "cpPosition",
          cpPositionOffset: "cpPositionOffset",
          cpPositionRelativeToArrow: "cpPositionRelativeToArrow",
          cpOKButton: "cpOKButton",
          cpOKButtonText: "cpOKButtonText",
          cpOKButtonClass: "cpOKButtonClass",
          cpCancelButton: "cpCancelButton",
          cpCancelButtonText: "cpCancelButtonText",
          cpCancelButtonClass: "cpCancelButtonClass",
          cpPresetLabel: "cpPresetLabel",
          cpPresetColorsClass: "cpPresetColorsClass",
          cpMaxPresetColorsLength: "cpMaxPresetColorsLength",
          cpPresetEmptyMessage: "cpPresetEmptyMessage",
          cpPresetEmptyMessageClass: "cpPresetEmptyMessageClass",
          cpAddColorButton: "cpAddColorButton",
          cpAddColorButtonText: "cpAddColorButtonText",
          cpAddColorButtonClass: "cpAddColorButtonClass",
          cpRemoveColorButtonClass: "cpRemoveColorButtonClass",
          colorPicker: "colorPicker",
          cpPresetColors: "cpPresetColors"
        },
        outputs: {
          cpInputChange: "cpInputChange",
          cpToggleChange: "cpToggleChange",
          cpSliderChange: "cpSliderChange",
          cpSliderDragEnd: "cpSliderDragEnd",
          cpSliderDragStart: "cpSliderDragStart",
          colorPickerOpen: "colorPickerOpen",
          colorPickerClose: "colorPickerClose",
          colorPickerCancel: "colorPickerCancel",
          colorPickerSelect: "colorPickerSelect",
          colorPickerChange: "colorPickerChange",
          cpCmykColorChange: "cpCmykColorChange",
          cpPresetColorsChange: "cpPresetColorsChange"
        },
        exportAs: ["ngxColorPicker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      ColorPickerDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ColorPickerService
        }];
      };

      ColorPickerDirective.propDecorators = {
        colorPicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpIgnoredElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpFallbackColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpColorMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCmykEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpOutputFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpAlphaChannel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpDisableInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpDialogDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpSaveClickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCloseClickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpUseRootViewContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPositionOffset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPositionRelativeToArrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpOKButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpOKButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpOKButtonClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCancelButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCancelButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCancelButtonClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetColors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetColorsClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpMaxPresetColorsLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetEmptyMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetEmptyMessageClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpAddColorButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpAddColorButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpAddColorButtonClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpRemoveColorButtonClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpInputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpToggleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpSliderChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpSliderDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpSliderDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpCmykColorChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpPresetColorsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        handleFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['focus']
        }],
        handleInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[colorPicker]',
            exportAs: 'ngxColorPicker'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: ColorPickerService
          }];
        }, {
          cpWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpIgnoredElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpFallbackColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpColorMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpCmykEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpOutputFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpAlphaChannel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpDisableInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpDialogDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpSaveClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpCloseClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpUseRootViewContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPositionOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPositionRelativeToArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpOKButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpOKButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpOKButtonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpCancelButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpCancelButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpCancelButtonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPresetLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPresetColorsClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpMaxPresetColorsLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPresetEmptyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPresetEmptyMessageClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpAddColorButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpAddColorButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpAddColorButtonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpRemoveColorButtonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cpToggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cpSliderChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cpSliderDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cpSliderDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          colorPickerOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          colorPickerClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          colorPickerCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          colorPickerSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          colorPickerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cpCmykColorChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cpPresetColorsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],
          handleFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus']
          }],
          handleInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event']]
          }],
          colorPicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cpPresetColors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var ColorPickerModule = function ColorPickerModule() {
        _classCallCheck(this, ColorPickerModule);
      };

      ColorPickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ColorPickerModule
      });
      ColorPickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ColorPickerModule_Factory(t) {
          return new (t || ColorPickerModule)();
        },
        providers: [ColorPickerService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ColorPickerModule, {
          declarations: function declarations() {
            return [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [ColorPickerDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPickerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [ColorPickerDirective],
            providers: [ColorPickerService],
            declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
            entryComponents: [ColorPickerComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-color-picker.js.map

      /***/

    },

    /***/
    "a03z":
    /*!***********************************************!*\
      !*** ./src/app/forms/forms-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: FormsRoutingModule */

    /***/
    function a03z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function () {
        return FormsRoutingModule;
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


      var _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-examples/form-examples.component */
      "gyru");
      /* harmony import */


      var _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./form-validations/form-validations.component */
      "0R0B");
      /* harmony import */


      var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./wizard/wizard.component */
      "lEoo");
      /* harmony import */


      var _editors_editors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editors/editors.component */
      "0NeN");
      /* harmony import */


      var _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./form-controls/form-controls.component */
      "0GeU");
      /* harmony import */


      var _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./advance-controls/advance-controls.component */
      "Gc2I");

      var routes = [{
        path: '',
        redirectTo: 'form-controls',
        pathMatch: 'full'
      }, {
        path: 'form-controls',
        component: _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_6__["FormControlsComponent"]
      }, {
        path: 'advance-controls',
        component: _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_7__["AdvanceControlsComponent"]
      }, {
        path: 'form-example',
        component: _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_2__["FormExamplesComponent"]
      }, {
        path: 'form-validation',
        component: _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_3__["FormValidationsComponent"]
      }, {
        path: 'wizard',
        component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__["WizardComponent"]
      }, {
        path: 'editors',
        component: _editors_editors_component__WEBPACK_IMPORTED_MODULE_5__["EditorsComponent"]
      }];

      var FormsRoutingModule = function FormsRoutingModule() {
        _classCallCheck(this, FormsRoutingModule);
      };

      FormsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FormsRoutingModule
      });
      FormsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FormsRoutingModule_Factory(t) {
          return new (t || FormsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsRoutingModule, [{
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
    "gyru":
    /*!****************************************************************!*\
      !*** ./src/app/forms/form-examples/form-examples.component.ts ***!
      \****************************************************************/

    /*! exports provided: FormExamplesComponent */

    /***/
    function gyru(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormExamplesComponent", function () {
        return FormExamplesComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function FormExamplesComponent_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " State name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_131_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_147_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_156_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_171_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_179_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " State name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_202_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_229_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_245_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_254_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_269_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_277_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " State name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExamplesComponent_mat_error_300_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var FormExamplesComponent = /*#__PURE__*/function () {
        function FormExamplesComponent(fb) {
          _classCallCheck(this, FormExamplesComponent);

          this.fb = fb;
          this.hide = true;
          this.hide2 = true;
          this.hide3 = true;
          this.initForm();
          this.initSecondForm();
          this.initThirdForm();
        }

        _createClass(FormExamplesComponent, [{
          key: "initForm",
          value: function initForm() {
            this.register = this.fb.group({
              first: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z]+')]],
              last: [''],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
              address: [''],
              city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              termcondition: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]]
            });
          }
        }, {
          key: "initSecondForm",
          value: function initSecondForm() {
            this.secondForm = this.fb.group({
              first: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z]+')]],
              last: [''],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
              address: [''],
              city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              termcondition: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]]
            });
          }
        }, {
          key: "initThirdForm",
          value: function initThirdForm() {
            this.thirdForm = this.fb.group({
              first: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z]+')]],
              last: [''],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
              address: [''],
              city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              termcondition: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]]
            });
          }
        }, {
          key: "onRegister",
          value: function onRegister() {
            console.log('Form Value', this.register.value);
          }
        }, {
          key: "onsecondFormSubmit",
          value: function onsecondFormSubmit() {
            console.log('Form Value', this.secondForm.value);
          }
        }, {
          key: "onThirdFormSubmit",
          value: function onThirdFormSubmit() {
            console.log('Form Value', this.thirdForm.value);
          }
        }]);

        return FormExamplesComponent;
      }();

      FormExamplesComponent.ɵfac = function FormExamplesComponent_Factory(t) {
        return new (t || FormExamplesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      FormExamplesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormExamplesComponent,
        selectors: [["app-form-examples"]],
        decls: 311,
        vars: 51,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "first", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "last"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "address"], ["matInput", "", "formControlName", "city", "required", ""], ["matInput", "", "formControlName", "state", "required", ""], ["formControlName", "country", "required", ""], [3, "value"], ["formControlName", "termcondition", 1, "example-margin"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", 3, "disabled"], ["type", "button", "mat-button", ""], [1, "m-4", 3, "formGroup", "ngSubmit"], ["appearance", "fill", 1, "example-full-width"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-3"], [1, "example-full-width"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"]],
        template: function FormExamplesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Form Examples");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Forms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Examples");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Reactive Forms (Outline)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormExamplesComponent_Template_form_ngSubmit_25_listener() {
              return ctx.onRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, FormExamplesComponent_mat_error_34_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Last name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormExamplesComponent_Template_mat_icon_click_48_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, FormExamplesComponent_mat_error_50_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, FormExamplesComponent_mat_error_59_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "textarea", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "location_city");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, FormExamplesComponent_mat_error_74_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "business");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, FormExamplesComponent_mat_error_82_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-select", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Algeria ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Brazil ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Poland ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Sri Lanka ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Thailand ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Japan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "flag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, FormExamplesComponent_mat_error_105_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-checkbox", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "I accept terms and conditions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Reactive Forms (Fill)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "form", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormExamplesComponent_Template_form_ngSubmit_122_listener() {
              return ctx.onsecondFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-form-field", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, FormExamplesComponent_mat_error_131_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-form-field", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Last name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-form-field", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-icon", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormExamplesComponent_Template_mat_icon_click_145_listener() {
              return ctx.hide2 = !ctx.hide2;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, FormExamplesComponent_mat_error_147_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-form-field", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, FormExamplesComponent_mat_error_156_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "mat-form-field", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "textarea", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "mat-form-field", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "location_city");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, FormExamplesComponent_mat_error_171_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "mat-form-field", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "business");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](179, FormExamplesComponent_mat_error_179_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "mat-form-field", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-select", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Algeria ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Brazil ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Poland ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Sri Lanka ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Thailand ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Japan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "flag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](202, FormExamplesComponent_mat_error_202_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "mat-checkbox", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "I accept terms and conditions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Reactive Forms (Standard)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "form", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormExamplesComponent_Template_form_ngSubmit_220_listener() {
              return ctx.onThirdFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "mat-form-field", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](229, FormExamplesComponent_mat_error_229_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "mat-form-field", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Last name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "mat-form-field", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "mat-icon", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormExamplesComponent_Template_mat_icon_click_243_listener() {
              return ctx.hide3 = !ctx.hide3;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](245, FormExamplesComponent_mat_error_245_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "mat-form-field", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](254, FormExamplesComponent_mat_error_254_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "mat-form-field", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "textarea", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "mat-form-field", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "location_city");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](269, FormExamplesComponent_mat_error_269_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "mat-form-field", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "business");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](277, FormExamplesComponent_mat_error_277_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "mat-form-field", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "mat-select", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " Algeria ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " Brazil ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " Poland ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " Sri Lanka ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " Thailand ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, " Japan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "flag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](300, FormExamplesComponent_mat_error_300_Template, 2, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "mat-checkbox", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "I accept terms and conditions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Cancel");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.register);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("first").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("password").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("email").hasError("required") || ctx.register.get("email").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("city").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("state").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "India");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Algeria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Brazil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Poland");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Sri Lanka");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Thailand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Japan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("country").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.register.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondForm.get("first").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide2 ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hide2 ? "visibility_off" : "visibility", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondForm.get("password").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondForm.get("email").hasError("email") && ctx.secondForm.get("email").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondForm.get("city").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondForm.get("state").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "India");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Algeria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Brazil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Poland");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Sri Lanka");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Thailand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Japan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondForm.get("country").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.secondForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thirdForm.get("first").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide3 ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hide3 ? "visibility_off" : "visibility", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thirdForm.get("password").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thirdForm.get("email").hasError("email") && ctx.thirdForm.get("email").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thirdForm.get("city").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thirdForm.get("state").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "India");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Algeria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Brazil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Poland");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Sri Lanka");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Thailand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Japan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thirdForm.get("country").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.thirdForm.valid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm0tZXhhbXBsZXMvZm9ybS1leGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormExamplesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-form-examples',
            templateUrl: './form-examples.component.html',
            styleUrls: ['./form-examples.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lEoo":
    /*!**************************************************!*\
      !*** ./src/app/forms/wizard/wizard.component.ts ***!
      \**************************************************/

    /*! exports provided: WizardComponent */

    /***/
    function lEoo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardComponent", function () {
        return WizardComponent;
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


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function WizardComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your name");
        }
      }

      function WizardComponent_ng_template_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your address");
        }
      }

      function WizardComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
        }
      }

      function WizardComponent_ng_template_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your name");
        }
      }

      function WizardComponent_ng_template_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your address");
        }
      }

      function WizardComponent_ng_template_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
        }
      }

      var WizardComponent = /*#__PURE__*/function () {
        function WizardComponent(_formBuilder) {
          _classCallCheck(this, WizardComponent);

          this._formBuilder = _formBuilder;
          this.isLinear = false;
        }

        _createClass(WizardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.HFormGroup1 = this._formBuilder.group({
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.HFormGroup2 = this._formBuilder.group({
              address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.VFormGroup1 = this._formBuilder.group({
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.VFormGroup2 = this._formBuilder.group({
              address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }]);

        return WizardComponent;
      }();

      WizardComponent.ɵfac = function WizardComponent_Factory(t) {
        return new (t || WizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      WizardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardComponent,
        selectors: [["app-wizard"]],
        decls: 116,
        vars: 14,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "firstName", "required", ""], ["matSuffix", ""], ["matInput", "", "formControlName", "lastName", "required", ""], ["mat-raised-button", "", "matStepperNext", "", "color", "primary", 3, "disabled"], ["matInput", "", "formControlName", "address", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-raised-button", "", "matStepperPrevious", "", "color", "warn", 1, "mr-2"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function WizardComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Form Wizard");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Forms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Wizard");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Stepper Horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-horizontal-stepper", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-step", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, WizardComponent_ng_template_30_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-step", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "form", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, WizardComponent_ng_template_48_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "textarea", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, WizardComponent_ng_template_59_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "You are now done.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardComponent_Template_button_click_65_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

              return _r0.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Stepper Verticle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-vertical-stepper", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-step", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "form", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, WizardComponent_ng_template_79_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-step", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "form", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, WizardComponent_ng_template_97_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "textarea", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, WizardComponent_ng_template_108_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "You are now done.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardComponent_Template_button_click_114_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

              return _r0.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Reset");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.HFormGroup1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.HFormGroup1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.HFormGroup1.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.HFormGroup2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.HFormGroup2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.HFormGroup2.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.VFormGroup1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.VFormGroup1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.VFormGroup1.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.VFormGroup2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.VFormGroup2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.VFormGroup2.valid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatVerticalStepper"]],
        styles: [".centered-content[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvd2l6YXJkL3dpemFyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3dpemFyZC93aXphcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQtY29udGVudCB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-wizard',
            templateUrl: './wizard.component.html',
            styleUrls: ['./wizard.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "xHqg":
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js ***!
      \*************************************************************************/

    /*! exports provided: MAT_STEPPER_INTL_PROVIDER, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatHorizontalStepper, MatStep, MatStepHeader, MatStepLabel, MatStepper, MatStepperIcon, MatStepperIntl, MatStepperModule, MatStepperNext, MatStepperPrevious, MatVerticalStepper, matStepperAnimations */

    /***/
    function xHqg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function () {
        return MAT_STEPPER_INTL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function () {
        return MAT_STEPPER_INTL_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function () {
        return MatHorizontalStepper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStep", function () {
        return MatStep;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepHeader", function () {
        return MatStepHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepLabel", function () {
        return MatStepLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepper", function () {
        return MatStepper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function () {
        return MatStepperIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function () {
        return MatStepperIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepperModule", function () {
        return MatStepperModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepperNext", function () {
        return MatStepperNext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function () {
        return MatStepperPrevious;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function () {
        return MatVerticalStepper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function () {
        return matStepperAnimations;
      });
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "B/XX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function MatStepHeader_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 8);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
        }
      }

      function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6._getDefaultTextForState(ctx_r6.state));
        }
      }

      function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7._getDefaultTextForState(ctx_r7.state));
        }
      }

      function MatStepHeader_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r1.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "number");
        }
      }

      function MatStepHeader_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2._templateLabel().template);
        }
      }

      function MatStepHeader_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.label);
        }
      }

      function MatStepHeader_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4._intl.optionalLabel);
        }
      }

      function MatStepHeader_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
        }
      }

      function MatStep_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        }
      }

      var _c0 = ["*"];

      function MatHorizontalStepper_ng_container_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 6);
        }
      }

      function MatHorizontalStepper_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-step-header", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_click_1_listener() {
            var step_r2 = ctx.$implicit;
            return step_r2.select();
          })("keydown", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7._onKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatHorizontalStepper_ng_container_1_div_2_Template, 1, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var step_r2 = ctx.$implicit;
          var i_r3 = ctx.index;
          var isLast_r4 = ctx.last;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tabIndex", ctx_r0._getFocusIndex() === i_r3 ? 0 : -1)("id", ctx_r0._getStepLabelId(i_r3))("index", i_r3)("state", ctx_r0._getIndicatorType(i_r3, step_r2.state))("label", step_r2.stepLabel || step_r2.label)("selected", ctx_r0.selectedIndex === i_r3)("active", step_r2.completed || ctx_r0.selectedIndex === i_r3 || !ctx_r0.linear)("optional", step_r2.optional)("errorMessage", step_r2.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-posinset", i_r3 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r3))("aria-selected", ctx_r0.selectedIndex == i_r3)("aria-label", step_r2.ariaLabel || null)("aria-labelledby", !step_r2.ariaLabel && step_r2.ariaLabelledby ? step_r2.ariaLabelledby : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !isLast_r4);
        }
      }

      function MatHorizontalStepper_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@stepTransition.done", function MatHorizontalStepper_div_3_Template_div_animation_stepTransition_done_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r11._animationDone.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r9 = ctx.$implicit;
          var i_r10 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@stepTransition", ctx_r1._getAnimationDirection(i_r10))("id", ctx_r1._getStepContentId(i_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx_r1._getStepLabelId(i_r10))("aria-expanded", ctx_r1.selectedIndex === i_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", step_r9.content);
        }
      }

      function MatVerticalStepper_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-step-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatVerticalStepper_div_0_Template_mat_step_header_click_1_listener() {
            var step_r1 = ctx.$implicit;
            return step_r1.select();
          })("keydown", function MatVerticalStepper_div_0_Template_mat_step_header_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5._onKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@stepTransition.done", function MatVerticalStepper_div_0_Template_div_animation_stepTransition_done_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7._animationDone.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r1 = ctx.$implicit;
          var i_r2 = ctx.index;
          var isLast_r3 = ctx.last;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tabIndex", ctx_r0._getFocusIndex() == i_r2 ? 0 : -1)("id", ctx_r0._getStepLabelId(i_r2))("index", i_r2)("state", ctx_r0._getIndicatorType(i_r2, step_r1.state))("label", step_r1.stepLabel || step_r1.label)("selected", ctx_r0.selectedIndex === i_r2)("active", step_r1.completed || ctx_r0.selectedIndex === i_r2 || !ctx_r0.linear)("optional", step_r1.optional)("errorMessage", step_r1.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-posinset", i_r2 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r2))("aria-selected", ctx_r0.selectedIndex === i_r2)("aria-label", step_r1.ariaLabel || null)("aria-labelledby", !step_r1.ariaLabel && step_r1.ariaLabelledby ? step_r1.ariaLabelledby : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-stepper-vertical-line", !isLast_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@stepTransition", ctx_r0._getAnimationDirection(i_r2))("id", ctx_r0._getStepContentId(i_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx_r0._getStepLabelId(i_r2))("aria-expanded", ctx_r0.selectedIndex === i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", step_r1.content);
        }
      }

      var _c1 = ".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n";

      var MatStepLabel = /*#__PURE__*/function (_angular_cdk_stepper_) {
        _inherits(MatStepLabel, _angular_cdk_stepper_);

        var _super3 = _createSuper(MatStepLabel);

        function MatStepLabel() {
          _classCallCheck(this, MatStepLabel);

          return _super3.apply(this, arguments);
        }

        return MatStepLabel;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepLabel"]);

      MatStepLabel.ɵfac = function MatStepLabel_Factory(t) {
        return ɵMatStepLabel_BaseFactory(t || MatStepLabel);
      };

      MatStepLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatStepLabel,
        selectors: [["", "matStepLabel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatStepLabel_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepLabel);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[matStepLabel]'
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

      /** Stepper data that is required for internationalization. */


      var MatStepperIntl = function MatStepperIntl() {
        _classCallCheck(this, MatStepperIntl);

        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /** Label that is rendered below optional steps. */

        this.optionalLabel = 'Optional';
      };

      MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) {
        return new (t || MatStepperIntl)();
      };

      MatStepperIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
        factory: function MatStepperIntl_Factory() {
          return new MatStepperIntl();
        },
        token: MatStepperIntl,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /** @docs-private */


      function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new MatStepperIntl();
      }
      /** @docs-private */


      var MAT_STEPPER_INTL_PROVIDER = {
        provide: MatStepperIntl,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), MatStepperIntl]],
        useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var MatStepHeader = /*#__PURE__*/function (_angular_cdk_stepper_2) {
        _inherits(MatStepHeader, _angular_cdk_stepper_2);

        var _super4 = _createSuper(MatStepHeader);

        function MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
          var _this9;

          _classCallCheck(this, MatStepHeader);

          _this9 = _super4.call(this, _elementRef);
          _this9._intl = _intl;
          _this9._focusMonitor = _focusMonitor;
          _this9._intlSubscription = _intl.changes.subscribe(function () {
            return changeDetectorRef.markForCheck();
          });
          return _this9;
        }

        _createClass(MatStepHeader, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._intlSubscription.unsubscribe();

            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /** Focuses the step header. */

        }, {
          key: "focus",
          value: function focus() {
            this._focusMonitor.focusVia(this._elementRef, 'program');
          }
          /** Returns string label of given step if it is a text label. */

        }, {
          key: "_stringLabel",
          value: function _stringLabel() {
            return this.label instanceof MatStepLabel ? null : this.label;
          }
          /** Returns MatStepLabel if the label of given step is a template label. */

        }, {
          key: "_templateLabel",
          value: function _templateLabel() {
            return this.label instanceof MatStepLabel ? this.label : null;
          }
          /** Returns the host HTML element. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._elementRef.nativeElement;
          }
          /** Template context variables that are exposed to the `matStepperIcon` instances. */

        }, {
          key: "_getIconContext",
          value: function _getIconContext() {
            return {
              index: this.index,
              active: this.active,
              optional: this.optional
            };
          }
        }, {
          key: "_getDefaultTextForState",
          value: function _getDefaultTextForState(state) {
            if (state == 'number') {
              return "".concat(this.index + 1);
            }

            if (state == 'edit') {
              return 'create';
            }

            if (state == 'error') {
              return 'warning';
            }

            return state;
          }
        }]);

        return MatStepHeader;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepHeader"]);

      MatStepHeader.ɵfac = function MatStepHeader_Factory(t) {
        return new (t || MatStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatStepperIntl), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
      };

      MatStepHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatStepHeader,
        selectors: [["mat-step-header"]],
        hostAttrs: ["role", "tab", 1, "mat-step-header", "mat-focus-indicator"],
        inputs: {
          state: "state",
          label: "label",
          errorMessage: "errorMessage",
          iconOverrides: "iconOverrides",
          index: "index",
          selected: "selected",
          active: "active",
          optional: "optional",
          disableRipple: "disableRipple"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 10,
        vars: 19,
        consts: [["matRipple", "", 1, "mat-step-header-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "mat-step-text-label"], [3, "ngTemplateOutlet"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]],
        template: function MatStepHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MatStepHeader_div_6_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MatStepHeader_div_7_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MatStepHeader_div_8_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MatStepHeader_div_9_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-step-icon-selected", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._templateLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._stringLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.optional && ctx.state != "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.state == "error");
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
        styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatStepHeader.ctorParameters = function () {
        return [{
          type: MatStepperIntl
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      MatStepHeader.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        iconOverrides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        optional: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-step-header',
            template: "<div class=\"mat-step-header-ripple\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_templateLabel()\">\n    <ng-container [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container>\n  </div>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
            host: {
              'class': 'mat-step-header mat-focus-indicator',
              'role': 'tab'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
          }]
        }], function () {
          return [{
            type: MatStepperIntl
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }];
        }, {
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          iconOverrides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
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
       * Animations used by the Material steppers.
       * @docs-private
       */


      var matStepperAnimations = {
        /** Animation that transitions the step along the X axis in a horizontal stepper. */
        horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          transform: 'translate3d(-100%, 0, 0)',
          visibility: 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          transform: 'none',
          visibility: 'visible'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          transform: 'translate3d(100%, 0, 0)',
          visibility: 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))]),

        /** Animation that transitions the step along the Y axis in a vertical stepper. */
        verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          height: '0px',
          visibility: 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          height: '0px',
          visibility: 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          height: '*',
          visibility: 'visible'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Template to be used to override the icons inside the step header.
       */

      var MatStepperIcon = function MatStepperIcon(templateRef) {
        _classCallCheck(this, MatStepperIcon);

        this.templateRef = templateRef;
      };

      MatStepperIcon.ɵfac = function MatStepperIcon_Factory(t) {
        return new (t || MatStepperIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      MatStepperIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatStepperIcon,
        selectors: [["ng-template", "matStepperIcon", ""]],
        inputs: {
          name: ["matStepperIcon", "name"]
        }
      });

      MatStepperIcon.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };

      MatStepperIcon.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matStepperIcon']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'ng-template[matStepperIcon]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matStepperIcon']
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


      var MatStep = /*#__PURE__*/function (_angular_cdk_stepper_3) {
        _inherits(MatStep, _angular_cdk_stepper_3);

        var _super5 = _createSuper(MatStep);

        /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
        function MatStep(stepper, _errorStateMatcher, stepperOptions) {
          var _this10;

          _classCallCheck(this, MatStep);

          _this10 = _super5.call(this, stepper, stepperOptions);
          _this10._errorStateMatcher = _errorStateMatcher;
          return _this10;
        }
        /** Custom error state matcher that additionally checks for validity of interacted form. */


        _createClass(MatStep, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var originalErrorState = this._errorStateMatcher.isErrorState(control, form); // Custom error state checks for the validity of form that is not submitted or touched
            // since user can trigger a form change by calling for another step without directly
            // interacting with the current form.


            var customErrorState = !!(control && control.invalid && this.interacted);
            return originalErrorState || customErrorState;
          }
        }]);

        return MatStep;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"]);

      MatStep.ɵfac = function MatStep_Factory(t) {
        return new (t || MatStep)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
          return MatStepper;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"], 8));
      };

      MatStep.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatStep,
        selectors: [["mat-step"]],
        contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatStepLabel, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
          }
        },
        exportAs: ["matStep"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
          useExisting: MatStep
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"],
          useExisting: MatStep
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatStep_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatStep_ng_template_0_Template, 1, 0, "ng-template");
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      MatStep.ctorParameters = function () {
        return [{
          type: MatStepper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
              return MatStepper;
            })]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"]]
          }]
        }];
      };

      MatStep.propDecorators = {
        stepLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatStepLabel]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStep, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-step',
            template: "<ng-template><ng-content></ng-content></ng-template>\n",
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
              useExisting: MatStep
            }, {
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"],
              useExisting: MatStep
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            exportAs: 'matStep',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: MatStepper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
                return MatStepper;
              })]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"]]
            }]
          }];
        }, {
          stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MatStepLabel]
          }]
        });
      })();

      var MatStepper = /*#__PURE__*/function (_angular_cdk_stepper_4) {
        _inherits(MatStepper, _angular_cdk_stepper_4);

        var _super6 = _createSuper(MatStepper);

        function MatStepper() {
          var _this11;

          _classCallCheck(this, MatStepper);

          _this11 = _super6.apply(this, arguments);
          /** Steps that belong to the current stepper, excluding ones from nested steppers. */

          _this11.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
          /** Event emitted when the current step is done transitioning in. */

          _this11.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** Consumer-specified template-refs to be used to override the header icons. */

          _this11._iconOverrides = {};
          /** Stream of animation `done` events when the body expands/collapses. */

          _this11._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          return _this11;
        }

        _createClass(MatStepper, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this12 = this;

            _get(_getPrototypeOf(MatStepper.prototype), "ngAfterContentInit", this).call(this);

            this._icons.forEach(function (_ref) {
              var name = _ref.name,
                  templateRef = _ref.templateRef;
              return _this12._iconOverrides[name] = templateRef;
            }); // Mark the component for change detection whenever the content children query changes


            this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this12._stateChanged();
            });

            this._animationDone.pipe( // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
            // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
            // See https://github.com/angular/angular/issues/24084
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(function (x, y) {
              return x.fromState === y.fromState && x.toState === y.toState;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function (event) {
              if (event.toState === 'current') {
                _this12.animationDone.emit();
              }
            });
          }
        }]);

        return MatStepper;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"]);

      MatStepper.ɵfac = function MatStepper_Factory(t) {
        return ɵMatStepper_BaseFactory(t || MatStepper);
      };

      MatStepper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatStepper,
        selectors: [["", "matStepper", ""]],
        contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatStep, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatStepperIcon, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._steps = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._icons = _t);
          }
        },
        viewQuery: function MatStepper_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](MatStepHeader, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
          }
        },
        inputs: {
          disableRipple: "disableRipple"
        },
        outputs: {
          animationDone: "animationDone"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatStepper
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });
      MatStepper.propDecorators = {
        _stepHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: [MatStepHeader]
        }],
        _steps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatStep, {
            descendants: true
          }]
        }],
        _icons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatStepperIcon, {
            descendants: true
          }]
        }],
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      var ɵMatStepper_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepper);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[matStepper]',
            providers: [{
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
              useExisting: MatStepper
            }]
          }]
        }], null, {
          animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
            args: [MatStepHeader]
          }],
          _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatStep, {
              descendants: true
            }]
          }],
          _icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatStepperIcon, {
              descendants: true
            }]
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();

      var MatHorizontalStepper = /*#__PURE__*/function (_MatStepper) {
        _inherits(MatHorizontalStepper, _MatStepper);

        var _super7 = _createSuper(MatHorizontalStepper);

        function MatHorizontalStepper() {
          var _this13;

          _classCallCheck(this, MatHorizontalStepper);

          _this13 = _super7.apply(this, arguments);
          /** Whether the label should display in bottom or end position. */

          _this13.labelPosition = 'end';
          return _this13;
        }

        return MatHorizontalStepper;
      }(MatStepper);

      MatHorizontalStepper.ɵfac = function MatHorizontalStepper_Factory(t) {
        return ɵMatHorizontalStepper_BaseFactory(t || MatHorizontalStepper);
      };

      MatHorizontalStepper.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatHorizontalStepper,
        selectors: [["mat-horizontal-stepper"]],
        hostAttrs: ["aria-orientation", "horizontal", "role", "tablist", 1, "mat-stepper-horizontal"],
        hostVars: 4,
        hostBindings: function MatHorizontalStepper_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-stepper-label-position-end", ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.labelPosition == "bottom");
          }
        },
        inputs: {
          selectedIndex: "selectedIndex",
          labelPosition: "labelPosition"
        },
        exportAs: ["matHorizontalStepper"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MatStepper,
          useExisting: MatHorizontalStepper
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatHorizontalStepper
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 2,
        consts: [[1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [1, "mat-horizontal-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"]],
        template: function MatHorizontalStepper_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatHorizontalStepper_ng_container_1_Template, 3, 18, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatHorizontalStepper_div_3_Template, 2, 5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.steps);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.steps);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], MatStepHeader, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        styles: [_c1],
        encapsulation: 2,
        data: {
          animation: [matStepperAnimations.horizontalStepTransition]
        },
        changeDetection: 0
      });
      MatHorizontalStepper.propDecorators = {
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      var ɵMatHorizontalStepper_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatHorizontalStepper);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatHorizontalStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-horizontal-stepper',
            exportAs: 'matHorizontalStepper',
            template: "<div class=\"mat-horizontal-stepper-header-container\">\n  <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n    <mat-step-header class=\"mat-horizontal-stepper-header\"\n                     (click)=\"step.select()\"\n                     (keydown)=\"_onKeydown($event)\"\n                     [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n                     [id]=\"_getStepLabelId(i)\"\n                     [attr.aria-posinset]=\"i + 1\"\n                     [attr.aria-setsize]=\"steps.length\"\n                     [attr.aria-controls]=\"_getStepContentId(i)\"\n                     [attr.aria-selected]=\"selectedIndex == i\"\n                     [attr.aria-label]=\"step.ariaLabel || null\"\n                     [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                     [index]=\"i\"\n                     [state]=\"_getIndicatorType(i, step.state)\"\n                     [label]=\"step.stepLabel || step.label\"\n                     [selected]=\"selectedIndex === i\"\n                     [active]=\"step.completed || selectedIndex === i || !linear\"\n                     [optional]=\"step.optional\"\n                     [errorMessage]=\"step.errorMessage\"\n                     [iconOverrides]=\"_iconOverrides\"\n                     [disableRipple]=\"disableRipple\">\n    </mat-step-header>\n    <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n  </ng-container>\n</div>\n\n<div class=\"mat-horizontal-content-container\">\n  <div *ngFor=\"let step of steps; let i = index\"\n       class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n       [@stepTransition]=\"_getAnimationDirection(i)\"\n       (@stepTransition.done)=\"_animationDone.next($event)\"\n       [id]=\"_getStepContentId(i)\"\n       [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n       [attr.aria-expanded]=\"selectedIndex === i\">\n    <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n  </div>\n</div>\n",
            inputs: ['selectedIndex'],
            host: {
              'class': 'mat-stepper-horizontal',
              '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
              '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
              'aria-orientation': 'horizontal',
              'role': 'tablist'
            },
            animations: [matStepperAnimations.horizontalStepTransition],
            providers: [{
              provide: MatStepper,
              useExisting: MatHorizontalStepper
            }, {
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
              useExisting: MatHorizontalStepper
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
          }]
        }], null, {
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();

      var MatVerticalStepper = /*#__PURE__*/function (_MatStepper2) {
        _inherits(MatVerticalStepper, _MatStepper2);

        var _super8 = _createSuper(MatVerticalStepper);

        function MatVerticalStepper(dir, changeDetectorRef, // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
        elementRef, _document) {
          var _this14;

          _classCallCheck(this, MatVerticalStepper);

          _this14 = _super8.call(this, dir, changeDetectorRef, elementRef, _document);
          _this14._orientation = 'vertical';
          return _this14;
        }

        return MatVerticalStepper;
      }(MatStepper);

      MatVerticalStepper.ɵfac = function MatVerticalStepper_Factory(t) {
        return new (t || MatVerticalStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      MatVerticalStepper.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatVerticalStepper,
        selectors: [["mat-vertical-stepper"]],
        hostAttrs: ["aria-orientation", "vertical", "role", "tablist", 1, "mat-stepper-vertical"],
        inputs: {
          selectedIndex: "selectedIndex"
        },
        exportAs: ["matVerticalStepper"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MatStepper,
          useExisting: MatVerticalStepper
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatVerticalStepper
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "ngTemplateOutlet"]],
        template: function MatVerticalStepper_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatVerticalStepper_div_0_Template, 6, 24, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.steps);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], MatStepHeader, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        styles: [_c1],
        encapsulation: 2,
        data: {
          animation: [matStepperAnimations.verticalStepTransition]
        },
        changeDetection: 0
      });

      MatVerticalStepper.ctorParameters = function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatVerticalStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-vertical-stepper',
            exportAs: 'matVerticalStepper',
            template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n  <mat-step-header class=\"mat-vertical-stepper-header\"\n                   (click)=\"step.select()\"\n                   (keydown)=\"_onKeydown($event)\"\n                   [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\"\n                   [id]=\"_getStepLabelId(i)\"\n                   [attr.aria-posinset]=\"i + 1\"\n                   [attr.aria-setsize]=\"steps.length\"\n                   [attr.aria-controls]=\"_getStepContentId(i)\"\n                   [attr.aria-selected]=\"selectedIndex === i\"\n                   [attr.aria-label]=\"step.ariaLabel || null\"\n                   [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                   [index]=\"i\"\n                   [state]=\"_getIndicatorType(i, step.state)\"\n                   [label]=\"step.stepLabel || step.label\"\n                   [selected]=\"selectedIndex === i\"\n                   [active]=\"step.completed || selectedIndex === i || !linear\"\n                   [optional]=\"step.optional\"\n                   [errorMessage]=\"step.errorMessage\"\n                   [iconOverrides]=\"_iconOverrides\"\n                   [disableRipple]=\"disableRipple\">\n  </mat-step-header>\n\n  <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n    <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n         [@stepTransition]=\"_getAnimationDirection(i)\"\n         (@stepTransition.done)=\"_animationDone.next($event)\"\n         [id]=\"_getStepContentId(i)\"\n         [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n         [attr.aria-expanded]=\"selectedIndex === i\">\n      <div class=\"mat-vertical-content\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
            inputs: ['selectedIndex'],
            host: {
              'class': 'mat-stepper-vertical',
              'aria-orientation': 'vertical',
              'role': 'tablist'
            },
            animations: [matStepperAnimations.verticalStepTransition],
            providers: [{
              provide: MatStepper,
              useExisting: MatVerticalStepper
            }, {
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
              useExisting: MatVerticalStepper
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
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

      /** Button that moves to the next step in a stepper workflow. */


      var MatStepperNext = /*#__PURE__*/function (_angular_cdk_stepper_5) {
        _inherits(MatStepperNext, _angular_cdk_stepper_5);

        var _super9 = _createSuper(MatStepperNext);

        function MatStepperNext() {
          _classCallCheck(this, MatStepperNext);

          return _super9.apply(this, arguments);
        }

        return MatStepperNext;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperNext"]);

      MatStepperNext.ɵfac = function MatStepperNext_Factory(t) {
        return ɵMatStepperNext_BaseFactory(t || MatStepperNext);
      };

      MatStepperNext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatStepperNext,
        selectors: [["button", "matStepperNext", ""]],
        hostAttrs: [1, "mat-stepper-next"],
        hostVars: 1,
        hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatStepperNext_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepperNext);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperNext, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'button[matStepperNext]',
            host: {
              'class': 'mat-stepper-next',
              '[type]': 'type'
            },
            inputs: ['type']
          }]
        }], null, null);
      })();
      /** Button that moves to the previous step in a stepper workflow. */


      var MatStepperPrevious = /*#__PURE__*/function (_angular_cdk_stepper_6) {
        _inherits(MatStepperPrevious, _angular_cdk_stepper_6);

        var _super10 = _createSuper(MatStepperPrevious);

        function MatStepperPrevious() {
          _classCallCheck(this, MatStepperPrevious);

          return _super10.apply(this, arguments);
        }

        return MatStepperPrevious;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperPrevious"]);

      MatStepperPrevious.ɵfac = function MatStepperPrevious_Factory(t) {
        return ɵMatStepperPrevious_BaseFactory(t || MatStepperPrevious);
      };

      MatStepperPrevious.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatStepperPrevious,
        selectors: [["button", "matStepperPrevious", ""]],
        hostAttrs: [1, "mat-stepper-previous"],
        hostVars: 1,
        hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatStepperPrevious_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepperPrevious);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperPrevious, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'button[matStepperPrevious]',
            host: {
              'class': 'mat-stepper-previous',
              '[type]': 'type'
            },
            inputs: ['type']
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


      var MatStepperModule = function MatStepperModule() {
        _classCallCheck(this, MatStepperModule);
      };

      MatStepperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatStepperModule
      });
      MatStepperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MatStepperModule_Factory(t) {
          return new (t || MatStepperModule)();
        },
        providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]],
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatStepperModule, {
          declarations: function declarations() {
            return [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
            declarations: [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
            providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
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
      //# sourceMappingURL=stepper.js.map

      /***/

    },

    /***/
    "zkoq":
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
      \***************************************************************************/

    /*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */

    /***/
    function zkoq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function () {
        return MatGridAvatarCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridList", function () {
        return MatGridList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridListModule", function () {
        return MatGridListModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTile", function () {
        return MatGridTile;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function () {
        return MatGridTileFooterCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function () {
        return MatGridTileHeaderCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTileText", function () {
        return MatGridTileText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function () {
        return TileCoordinator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function () {
        return MAT_GRID_LIST;
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


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to provide a grid list to a tile and to avoid circular imports.
       * @docs-private
       */


      var _c0 = ["*"];
      var _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
      var _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
      var _c3 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n";
      var MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var MatGridTile = /*#__PURE__*/function () {
        function MatGridTile(_element, _gridList) {
          _classCallCheck(this, MatGridTile);

          this._element = _element;
          this._gridList = _gridList;
          this._rowspan = 1;
          this._colspan = 1;
        }
        /** Amount of rows that the grid tile takes up. */


        _createClass(MatGridTile, [{
          key: "_setStyle",

          /**
           * Sets the style of the grid-tile element.  Needs to be set manually to avoid
           * "Changed after checked" errors that would occur with HostBinding.
           */
          value: function _setStyle(property, value) {
            this._element.nativeElement.style[property] = value;
          }
        }, {
          key: "rowspan",
          get: function get() {
            return this._rowspan;
          },
          set: function set(value) {
            this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
          }
          /** Amount of columns that the grid tile takes up. */

        }, {
          key: "colspan",
          get: function get() {
            return this._colspan;
          },
          set: function set(value) {
            this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
          }
        }]);

        return MatGridTile;
      }();

      MatGridTile.ɵfac = function MatGridTile_Factory(t) {
        return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8));
      };

      MatGridTile.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatGridTile,
        selectors: [["mat-grid-tile"]],
        hostAttrs: [1, "mat-grid-tile"],
        hostVars: 2,
        hostBindings: function MatGridTile_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
          }
        },
        inputs: {
          rowspan: "rowspan",
          colspan: "colspan"
        },
        exportAs: ["matGridTile"],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-figure"]],
        template: function MatGridTile_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [_c3],
        encapsulation: 2,
        changeDetection: 0
      });

      MatGridTile.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_GRID_LIST]
          }]
        }];
      };

      MatGridTile.propDecorators = {
        rowspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-grid-tile',
            exportAs: 'matGridTile',
            host: {
              'class': 'mat-grid-tile',
              // Ensures that the "rowspan" and "colspan" input value is reflected in
              // the DOM. This is needed for the grid-tile harness.
              '[attr.rowspan]': 'rowspan',
              '[attr.colspan]': 'colspan'
            },
            template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_GRID_LIST]
            }]
          }];
        }, {
          rowspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          colspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var MatGridTileText = /*#__PURE__*/function () {
        function MatGridTileText(_element) {
          _classCallCheck(this, MatGridTileText);

          this._element = _element;
        }

        _createClass(MatGridTileText, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
          }
        }]);

        return MatGridTileText;
      }();

      MatGridTileText.ɵfac = function MatGridTileText_Factory(t) {
        return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MatGridTileText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatGridTileText,
        selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
        contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
          }
        },
        ngContentSelectors: _c2,
        decls: 4,
        vars: 0,
        consts: [[1, "mat-grid-list-text"]],
        template: function MatGridTileText_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      MatGridTileText.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      MatGridTileText.propDecorators = {
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-grid-tile-header, mat-grid-tile-footer',
            template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatGridAvatarCssMatStyler = function MatGridAvatarCssMatStyler() {
        _classCallCheck(this, MatGridAvatarCssMatStyler);
      };

      MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) {
        return new (t || MatGridAvatarCssMatStyler)();
      };

      MatGridAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatGridAvatarCssMatStyler,
        selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
        hostAttrs: [1, "mat-grid-avatar"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-grid-avatar], [matGridAvatar]',
            host: {
              'class': 'mat-grid-avatar'
            }
          }]
        }], null, null);
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatGridTileHeaderCssMatStyler = function MatGridTileHeaderCssMatStyler() {
        _classCallCheck(this, MatGridTileHeaderCssMatStyler);
      };

      MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) {
        return new (t || MatGridTileHeaderCssMatStyler)();
      };

      MatGridTileHeaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatGridTileHeaderCssMatStyler,
        selectors: [["mat-grid-tile-header"]],
        hostAttrs: [1, "mat-grid-tile-header"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-grid-tile-header',
            host: {
              'class': 'mat-grid-tile-header'
            }
          }]
        }], null, null);
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatGridTileFooterCssMatStyler = function MatGridTileFooterCssMatStyler() {
        _classCallCheck(this, MatGridTileFooterCssMatStyler);
      };

      MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) {
        return new (t || MatGridTileFooterCssMatStyler)();
      };

      MatGridTileFooterCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatGridTileFooterCssMatStyler,
        selectors: [["mat-grid-tile-footer"]],
        hostAttrs: [1, "mat-grid-tile-footer"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-grid-tile-footer',
            host: {
              'class': 'mat-grid-tile-footer'
            }
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
       * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
       * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
       * because the tiles can have a rowspan.
       *
       * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
       * large enough to accommodate it so that the tiles still render in the same order in which they
       * are given.
       *
       * The basis of the algorithm is the use of an array to track the already placed tiles. Each
       * element of the array corresponds to a column, and the value indicates how many cells in that
       * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
       * decrements each value in the tracking array (indicating that the column is one cell closer to
       * being free).
       *
       * @docs-private
       */


      var TileCoordinator = /*#__PURE__*/function () {
        function TileCoordinator() {
          _classCallCheck(this, TileCoordinator);

          /** Index at which the search for the next gap will start. */
          this.columnIndex = 0;
          /** The current row index. */

          this.rowIndex = 0;
        }
        /** Gets the total number of rows occupied by tiles */


        _createClass(TileCoordinator, [{
          key: "update",

          /**
           * Updates the tile positions.
           * @param numColumns Amount of columns in the grid.
           * @param tiles Tiles to be positioned.
           */
          value: function update(numColumns, tiles) {
            var _this15 = this;

            this.columnIndex = 0;
            this.rowIndex = 0;
            this.tracker = new Array(numColumns);
            this.tracker.fill(0, 0, this.tracker.length);
            this.positions = tiles.map(function (tile) {
              return _this15._trackTile(tile);
            });
          }
          /** Calculates the row and col position of a tile. */

        }, {
          key: "_trackTile",
          value: function _trackTile(tile) {
            // Find a gap large enough for this tile.
            var gapStartIndex = this._findMatchingGap(tile.colspan); // Place tile in the resulting gap.


            this._markTilePosition(gapStartIndex, tile); // The next time we look for a gap, the search will start at columnIndex, which should be
            // immediately after the tile that has just been placed.


            this.columnIndex = gapStartIndex + tile.colspan;
            return new TilePosition(this.rowIndex, gapStartIndex);
          }
          /** Finds the next available space large enough to fit the tile. */

        }, {
          key: "_findMatchingGap",
          value: function _findMatchingGap(tileCols) {
            if (tileCols > this.tracker.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("mat-grid-list: tile with colspan ".concat(tileCols, " is wider than ") + "grid with cols=\"".concat(this.tracker.length, "\"."));
            } // Start index is inclusive, end index is exclusive.


            var gapStartIndex = -1;
            var gapEndIndex = -1; // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.

            do {
              // If we've reached the end of the row, go to the next row.
              if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();

                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
              }

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex); // If there are no more empty spaces in this row at all, move on to the next row.

              if (gapStartIndex == -1) {
                this._nextRow();

                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
              }

              gapEndIndex = this._findGapEndIndex(gapStartIndex); // If a gap large enough isn't found, we want to start looking immediately after the current
              // gap on the next iteration.

              this.columnIndex = gapStartIndex + 1; // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
              // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
            } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0); // If we still didn't manage to find a gap, ensure that the index is
            // at least zero so the tile doesn't get pulled out of the grid.


            return Math.max(gapStartIndex, 0);
          }
          /** Move "down" to the next row. */

        }, {
          key: "_nextRow",
          value: function _nextRow() {
            this.columnIndex = 0;
            this.rowIndex++; // Decrement all spaces by one to reflect moving down one row.

            for (var i = 0; i < this.tracker.length; i++) {
              this.tracker[i] = Math.max(0, this.tracker[i] - 1);
            }
          }
          /**
           * Finds the end index (exclusive) of a gap given the index from which to start looking.
           * The gap ends when a non-zero value is found.
           */

        }, {
          key: "_findGapEndIndex",
          value: function _findGapEndIndex(gapStartIndex) {
            for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
              if (this.tracker[i] != 0) {
                return i;
              }
            } // The gap ends with the end of the row.


            return this.tracker.length;
          }
          /** Update the tile tracker to account for the given tile in the given space. */

        }, {
          key: "_markTilePosition",
          value: function _markTilePosition(start, tile) {
            for (var i = 0; i < tile.colspan; i++) {
              this.tracker[start + i] = tile.rowspan;
            }
          }
        }, {
          key: "rowCount",
          get: function get() {
            return this.rowIndex + 1;
          }
          /**
           * Gets the total span of rows occupied by tiles.
           * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
           */

        }, {
          key: "rowspan",
          get: function get() {
            var lastRowMax = Math.max.apply(Math, _toConsumableArray(this.tracker)); // if any of the tiles has a rowspan that pushes it beyond the total row count,
            // add the difference to the rowcount

            return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
          }
        }]);

        return TileCoordinator;
      }();
      /**
       * Simple data structure for tile position (row, col).
       * @docs-private
       */


      var TilePosition = function TilePosition(row, col) {
        _classCallCheck(this, TilePosition);

        this.row = row;
        this.col = col;
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * RegExp that can be used to check whether a value will
       * be allowed inside a CSS `calc()` expression.
       */


      var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
      /**
       * Sets the style properties for an individual tile, given the position calculated by the
       * Tile Coordinator.
       * @docs-private
       */

      var TileStyler = /*#__PURE__*/function () {
        function TileStyler() {
          _classCallCheck(this, TileStyler);

          this._rows = 0;
          this._rowspan = 0;
        }
        /**
         * Adds grid-list layout info once it is available. Cannot be processed in the constructor
         * because these properties haven't been calculated by that point.
         *
         * @param gutterSize Size of the grid's gutter.
         * @param tracker Instance of the TileCoordinator.
         * @param cols Amount of columns in the grid.
         * @param direction Layout direction of the grid.
         */


        _createClass(TileStyler, [{
          key: "init",
          value: function init(gutterSize, tracker, cols, direction) {
            this._gutterSize = normalizeUnits(gutterSize);
            this._rows = tracker.rowCount;
            this._rowspan = tracker.rowspan;
            this._cols = cols;
            this._direction = direction;
          }
          /**
           * Computes the amount of space a single 1x1 tile would take up (width or height).
           * Used as a basis for other calculations.
           * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
           * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
           * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
           */

        }, {
          key: "getBaseTileSize",
          value: function getBaseTileSize(sizePercent, gutterFraction) {
            // Take the base size percent (as would be if evenly dividing the size between cells),
            // and then subtracting the size of one gutter. However, since there are no gutters on the
            // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
            // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
            // edge evenly among the cells).
            return "(".concat(sizePercent, "% - (").concat(this._gutterSize, " * ").concat(gutterFraction, "))");
          }
          /**
           * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
           * @param offset Number of tiles that have already been rendered in the row/column.
           * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
           * @return Position of the tile as a CSS calc() expression.
           */

        }, {
          key: "getTilePosition",
          value: function getTilePosition(baseSize, offset) {
            // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
            // row/column (offset).
            return offset === 0 ? '0' : calc("(".concat(baseSize, " + ").concat(this._gutterSize, ") * ").concat(offset));
          }
          /**
           * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
           * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
           * @param span The tile's rowspan or colspan.
           * @return Size of the tile as a CSS calc() expression.
           */

        }, {
          key: "getTileSize",
          value: function getTileSize(baseSize, span) {
            return "(".concat(baseSize, " * ").concat(span, ") + (").concat(span - 1, " * ").concat(this._gutterSize, ")");
          }
          /**
           * Sets the style properties to be applied to a tile for the given row and column index.
           * @param tile Tile to which to apply the styling.
           * @param rowIndex Index of the tile's row.
           * @param colIndex Index of the tile's column.
           */

        }, {
          key: "setStyle",
          value: function setStyle(tile, rowIndex, colIndex) {
            // Percent of the available horizontal space that one column takes up.
            var percentWidthPerTile = 100 / this._cols; // Fraction of the vertical gutter size that each column takes up.
            // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.

            var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
            this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
            this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
          }
          /** Sets the horizontal placement of the tile in the list. */

        }, {
          key: "setColStyles",
          value: function setColStyles(tile, colIndex, percentWidth, gutterWidth) {
            // Base horizontal size of a column.
            var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth); // The width and horizontal position of each tile is always calculated the same way, but the
            // height and vertical position depends on the rowMode.

            var side = this._direction === 'rtl' ? 'right' : 'left';

            tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));

            tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
          }
          /**
           * Calculates the total size taken up by gutters across one axis of a list.
           */

        }, {
          key: "getGutterSpan",
          value: function getGutterSpan() {
            return "".concat(this._gutterSize, " * (").concat(this._rowspan, " - 1)");
          }
          /**
           * Calculates the total size taken up by tiles across one axis of a list.
           * @param tileHeight Height of the tile.
           */

        }, {
          key: "getTileSpan",
          value: function getTileSpan(tileHeight) {
            return "".concat(this._rowspan, " * ").concat(this.getTileSize(tileHeight, 1));
          }
          /**
           * Calculates the computed height and returns the correct style property to set.
           * This method can be implemented by each type of TileStyler.
           * @docs-private
           */

        }, {
          key: "getComputedHeight",
          value: function getComputedHeight() {
            return null;
          }
        }]);

        return TileStyler;
      }();
      /**
       * This type of styler is instantiated when the user passes in a fixed row height.
       * Example `<mat-grid-list cols="3" rowHeight="100px">`
       * @docs-private
       */


      var FixedTileStyler = /*#__PURE__*/function (_TileStyler) {
        _inherits(FixedTileStyler, _TileStyler);

        var _super11 = _createSuper(FixedTileStyler);

        function FixedTileStyler(fixedRowHeight) {
          var _this16;

          _classCallCheck(this, FixedTileStyler);

          _this16 = _super11.call(this);
          _this16.fixedRowHeight = fixedRowHeight;
          return _this16;
        }

        _createClass(FixedTileStyler, [{
          key: "init",
          value: function init(gutterSize, tracker, cols, direction) {
            _get(_getPrototypeOf(FixedTileStyler.prototype), "init", this).call(this, gutterSize, tracker, cols, direction);

            this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);

            if (!cssCalcAllowedValue.test(this.fixedRowHeight) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("Invalid value \"".concat(this.fixedRowHeight, "\" set as rowHeight."));
            }
          }
        }, {
          key: "setRowStyles",
          value: function setRowStyles(tile, rowIndex) {
            tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));

            tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
          }
        }, {
          key: "getComputedHeight",
          value: function getComputedHeight() {
            return ['height', calc("".concat(this.getTileSpan(this.fixedRowHeight), " + ").concat(this.getGutterSpan()))];
          }
        }, {
          key: "reset",
          value: function reset(list) {
            list._setListStyle(['height', null]);

            if (list._tiles) {
              list._tiles.forEach(function (tile) {
                tile._setStyle('top', null);

                tile._setStyle('height', null);
              });
            }
          }
        }]);

        return FixedTileStyler;
      }(TileStyler);
      /**
       * This type of styler is instantiated when the user passes in a width:height ratio
       * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
       * @docs-private
       */


      var RatioTileStyler = /*#__PURE__*/function (_TileStyler2) {
        _inherits(RatioTileStyler, _TileStyler2);

        var _super12 = _createSuper(RatioTileStyler);

        function RatioTileStyler(value) {
          var _this17;

          _classCallCheck(this, RatioTileStyler);

          _this17 = _super12.call(this);

          _this17._parseRatio(value);

          return _this17;
        }

        _createClass(RatioTileStyler, [{
          key: "setRowStyles",
          value: function setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
            var percentHeightPerTile = percentWidth / this.rowHeightRatio;
            this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth); // Use padding-top and margin-top to maintain the given aspect ratio, as
            // a percentage-based value for these properties is applied versus the *width* of the
            // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties

            tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));

            tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
          }
        }, {
          key: "getComputedHeight",
          value: function getComputedHeight() {
            return ['paddingBottom', calc("".concat(this.getTileSpan(this.baseTileHeight), " + ").concat(this.getGutterSpan()))];
          }
        }, {
          key: "reset",
          value: function reset(list) {
            list._setListStyle(['paddingBottom', null]);

            list._tiles.forEach(function (tile) {
              tile._setStyle('marginTop', null);

              tile._setStyle('paddingTop', null);
            });
          }
        }, {
          key: "_parseRatio",
          value: function _parseRatio(value) {
            var ratioParts = value.split(':');

            if (ratioParts.length !== 2 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("mat-grid-list: invalid ratio given for row-height: \"".concat(value, "\""));
            }

            this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
          }
        }]);

        return RatioTileStyler;
      }(TileStyler);
      /**
       * This type of styler is instantiated when the user selects a "fit" row height mode.
       * In other words, the row height will reflect the total height of the container divided
       * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
       *
       * @docs-private
       */


      var FitTileStyler = /*#__PURE__*/function (_TileStyler3) {
        _inherits(FitTileStyler, _TileStyler3);

        var _super13 = _createSuper(FitTileStyler);

        function FitTileStyler() {
          _classCallCheck(this, FitTileStyler);

          return _super13.apply(this, arguments);
        }

        _createClass(FitTileStyler, [{
          key: "setRowStyles",
          value: function setRowStyles(tile, rowIndex) {
            // Percent of the available vertical space that one row takes up.
            var percentHeightPerTile = 100 / this._rowspan; // Fraction of the horizontal gutter size that each column takes up.

            var gutterHeightPerTile = (this._rows - 1) / this._rows; // Base vertical size of a column.

            var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);

            tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));

            tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
          }
        }, {
          key: "reset",
          value: function reset(list) {
            if (list._tiles) {
              list._tiles.forEach(function (tile) {
                tile._setStyle('top', null);

                tile._setStyle('height', null);
              });
            }
          }
        }]);

        return FitTileStyler;
      }(TileStyler);
      /** Wraps a CSS string in a calc function */


      function calc(exp) {
        return "calc(".concat(exp, ")");
      }
      /** Appends pixels to a CSS string if no units are given. */


      function normalizeUnits(value) {
        return value.match(/([A-Za-z%]+)$/) ? value : "".concat(value, "px");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(kara): Conditional (responsive) column count / row size.
      // TODO(kara): Re-layout on window resize / media change (debounced).
      // TODO(kara): gridTileHeader and gridTileFooter.


      var MAT_FIT_MODE = 'fit';

      var MatGridList = /*#__PURE__*/function () {
        function MatGridList(_element, _dir) {
          _classCallCheck(this, MatGridList);

          this._element = _element;
          this._dir = _dir;
          /** The amount of space between tiles. This will be something like '5px' or '2em'. */

          this._gutter = '1px';
        }
        /** Amount of columns in the grid list. */


        _createClass(MatGridList, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._checkCols();

            this._checkRowHeight();
          }
          /**
           * The layout calculation is fairly cheap if nothing changes, so there's little cost
           * to run it frequently.
           */

        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this._layoutTiles();
          }
          /** Throw a friendly error if cols property is missing */

        }, {
          key: "_checkCols",
          value: function _checkCols() {
            if (!this.cols && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("mat-grid-list: must pass in number of columns. " + "Example: <mat-grid-list cols=\"3\">");
            }
          }
          /** Default to equal width:height if rowHeight property is missing */

        }, {
          key: "_checkRowHeight",
          value: function _checkRowHeight() {
            if (!this._rowHeight) {
              this._setTileStyler('1:1');
            }
          }
          /** Creates correct Tile Styler subtype based on rowHeight passed in by user */

        }, {
          key: "_setTileStyler",
          value: function _setTileStyler(rowHeight) {
            if (this._tileStyler) {
              this._tileStyler.reset(this);
            }

            if (rowHeight === MAT_FIT_MODE) {
              this._tileStyler = new FitTileStyler();
            } else if (rowHeight && rowHeight.indexOf(':') > -1) {
              this._tileStyler = new RatioTileStyler(rowHeight);
            } else {
              this._tileStyler = new FixedTileStyler(rowHeight);
            }
          }
          /** Computes and applies the size and position for all children grid tiles. */

        }, {
          key: "_layoutTiles",
          value: function _layoutTiles() {
            var _this18 = this;

            if (!this._tileCoordinator) {
              this._tileCoordinator = new TileCoordinator();
            }

            var tracker = this._tileCoordinator;

            var tiles = this._tiles.filter(function (tile) {
              return !tile._gridList || tile._gridList === _this18;
            });

            var direction = this._dir ? this._dir.value : 'ltr';

            this._tileCoordinator.update(this.cols, tiles);

            this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);

            tiles.forEach(function (tile, index) {
              var pos = tracker.positions[index];

              _this18._tileStyler.setStyle(tile, pos.row, pos.col);
            });

            this._setListStyle(this._tileStyler.getComputedHeight());
          }
          /** Sets style on the main grid-list element, given the style name and value. */

        }, {
          key: "_setListStyle",
          value: function _setListStyle(style) {
            if (style) {
              this._element.nativeElement.style[style[0]] = style[1];
            }
          }
        }, {
          key: "cols",
          get: function get() {
            return this._cols;
          },
          set: function set(value) {
            this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
          }
          /** Size of the grid list's gutter in pixels. */

        }, {
          key: "gutterSize",
          get: function get() {
            return this._gutter;
          },
          set: function set(value) {
            this._gutter = "".concat(value == null ? '' : value);
          }
          /** Set internal representation of row height from the user-provided value. */

        }, {
          key: "rowHeight",
          get: function get() {
            return this._rowHeight;
          },
          set: function set(value) {
            var newValue = "".concat(value == null ? '' : value);

            if (newValue !== this._rowHeight) {
              this._rowHeight = newValue;

              this._setTileStyler(this._rowHeight);
            }
          }
        }]);

        return MatGridList;
      }();

      MatGridList.ɵfac = function MatGridList_Factory(t) {
        return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
      };

      MatGridList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatGridList,
        selectors: [["mat-grid-list"]],
        contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
          }
        },
        hostAttrs: [1, "mat-grid-list"],
        hostVars: 1,
        hostBindings: function MatGridList_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
          }
        },
        inputs: {
          cols: "cols",
          gutterSize: "gutterSize",
          rowHeight: "rowHeight"
        },
        exportAs: ["matGridList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_GRID_LIST,
          useExisting: MatGridList
        }])],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        template: function MatGridList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [_c3],
        encapsulation: 2,
        changeDetection: 0
      });

      MatGridList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      MatGridList.propDecorators = {
        _tiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatGridTile, {
            descendants: true
          }]
        }],
        cols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gutterSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-grid-list',
            exportAs: 'matGridList',
            template: "<div>\n  <ng-content></ng-content>\n</div>",
            host: {
              'class': 'mat-grid-list',
              // Ensures that the "cols" input value is reflected in the DOM. This is
              // needed for the grid-list harness.
              '[attr.cols]': 'cols'
            },
            providers: [{
              provide: MAT_GRID_LIST,
              useExisting: MatGridList
            }],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          cols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          gutterSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _tiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatGridTile, {
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


      var MatGridListModule = function MatGridListModule() {
        _classCallCheck(this, MatGridListModule);
      };

      MatGridListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatGridListModule
      });
      MatGridListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatGridListModule_Factory(t) {
          return new (t || MatGridListModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, {
          declarations: function declarations() {
            return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
            declarations: [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
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
      //# sourceMappingURL=grid-list.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=forms-forms-module-es5.js.map