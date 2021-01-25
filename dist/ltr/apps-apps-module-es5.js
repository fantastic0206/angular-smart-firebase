(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-apps-module"], {
    /***/
    "/yEv":
    /*!*******************************************************!*\
      !*** ./src/app/apps/drag-drop/drag-drop.component.ts ***!
      \*******************************************************/

    /*! exports provided: DragDropComponent */

    /***/
    function yEv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDropComponent", function () {
        return DragDropComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng2_dragula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-dragula */
      "9Ejp");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var DragDropComponent = /*#__PURE__*/function () {
        function DragDropComponent(dragulaService) {
          var _this = this;

          _classCallCheck(this, DragDropComponent);

          this.dragulaService = dragulaService;
          this.BAG = 'DRAGULA_EVENTS';
          this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
          this.dragulaService.createGroup('VAMPIRES', {});
          this.dragulaService.dropModel('VAMPIRES').subscribe(function (args) {
            console.log(args);
          });
          this.subs.add(dragulaService.drag(this.BAG).subscribe(function (_ref) {
            var el = _ref.el;

            _this.removeClass(el, 'ex-moved');
          }));
          this.subs.add(dragulaService.drop(this.BAG).subscribe(function (_ref2) {
            var el = _ref2.el;

            _this.addClass(el, 'ex-moved');
          }));
          this.subs.add(dragulaService.over(this.BAG).subscribe(function (_ref3) {
            var el = _ref3.el,
                container = _ref3.container;
            console.log('over', container);

            _this.addClass(container, 'ex-over');
          }));
          this.subs.add(dragulaService.out(this.BAG).subscribe(function (_ref4) {
            var el = _ref4.el,
                container = _ref4.container;
            console.log('out', container);

            _this.removeClass(container, 'ex-over');
          })); // spill

          dragulaService.createGroup('SPILL', {
            removeOnSpill: true
          }); // revert

          dragulaService.createGroup('REVERT', {
            revertOnSpill: true
          });
          dragulaService.createGroup('COPYABLE', {
            copy: function copy(el, source) {
              return source.id === 'left';
            },
            accepts: function accepts(el, target, source, sibling) {
              // To avoid dragging from right to left container
              return target.id !== 'left';
            }
          });
        }

        _createClass(DragDropComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dragulaService.destroy('VAMPIRES');
            this.dragulaService.destroy('SPILL');
            this.dragulaService.destroy('REVERT');
            this.dragulaService.destroy('COPYABLE');
            this.subs.unsubscribe();
          }
        }, {
          key: "hasClass",
          value: function hasClass(el, name) {
            return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
          }
        }, {
          key: "addClass",
          value: function addClass(el, name) {
            if (!this.hasClass(el, name)) {
              el.className = el.className ? [el.className, name].join(' ') : name;
            }
          }
        }, {
          key: "removeClass",
          value: function removeClass(el, name) {
            if (this.hasClass(el, name)) {
              el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
            }
          }
        }]);

        return DragDropComponent;
      }();

      DragDropComponent.ɵfac = function DragDropComponent_Factory(t) {
        return new (t || DragDropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaService"]));
      };

      DragDropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DragDropComponent,
        selectors: [["app-drag-drop"]],
        decls: 247,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["href", "#", "onClick", "return false;"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "card"], [1, "header"], [1, "body"], [1, "alert", "alert-info"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "board"], ["id", "left", 1, "cards"], ["dragula", "VAMPIRES", 1, "container"], [1, "drop-card"], [1, "table-img", "msg-user"], ["src", "assets/images/user/user5.jpg", "alt", ""], [1, "cardtitle", "noselect"], ["src", "assets/images/user/user6.jpg", "alt", ""], ["src", "assets/images/user/user7.jpg", "alt", ""], ["src", "assets/images/user/user8.jpg", "alt", ""], ["id", "right", 1, "cards"], ["src", "assets/images/user/user1.jpg", "alt", ""], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "alert", "alert-info", 2, "width", "100%"], ["href", "https://github.com/bevacqua/dragula#drakeon-events"], ["dragula", "DRAGULA_EVENTS", 1, "container"], ["src", "assets/images/user/user3.jpg", "alt", ""], ["src", "assets/images/user/user4.jpg", "alt", ""], ["dragula", "SPILL", 1, "container"], ["dragula", "REVERT", 1, "container"], ["dragula", "COPYABLE", "id", "left", 1, "container"], ["dragula", "COPYABLE", "id", "right", 1, "container"]],
        template: function DragDropComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Drag & Drop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Apps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Drag & Drop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Basic Drag & Drop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " User card #1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "User card #2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "User card #3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "User card #4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "User card #7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "User card #8");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Drag & Drop Events");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " There are plenty of events along the lifetime of a drag event. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "all of them");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " in the docs! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " User card #1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "User card #2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "User card #3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "User card #4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "User card #5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "User card #6");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Spill");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Need to be able to quickly delete stuff when it spills out of the chosen containers? Note how you can easily sort the items in any containers by just dragging and dropping. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " User card #1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "User card #2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "User card #3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "User card #4");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Revert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " By default, dropping an element outside of any known containers will keep the element in the last place it went over. You can make elements go back to origin if they're dropped outside of known containers, too. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " User card #1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "User card #2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "User card #3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "User card #4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "User card #5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "User card #6");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Revert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Copying Elements from left side to right side made it easy for you. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " User card #1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "User card #2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "User card #3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "User card #4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "User card #5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "User card #6");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaDirective"]],
        styles: [".container[_ngcontent-%COMP%]   .ex-moved[_ngcontent-%COMP%] {\n  background-color: rgba(255, 21, 45, 0.75);\n  color: #fff;\n}\n\n.container.ex-over[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy9kcmFnLWRyb3AvZHJhZy1kcm9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0VBQ3pDLFdBQVc7QUFDYjs7QUFDQTtFQUNFLDBDQUEwQztBQUU1QyIsImZpbGUiOiJzcmMvYXBwL2FwcHMvZHJhZy1kcm9wL2RyYWctZHJvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIgLmV4LW1vdmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5MywgMjEsIDQ1LCAwLjc1KTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uY29udGFpbmVyLmV4LW92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-drag-drop',
            templateUrl: './drag-drop.component.html',
            styleUrls: ['./drag-drop.component.scss']
          }]
        }], function () {
          return [{
            type: ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8/JR":
    /*!****************************************!*\
      !*** ./node_modules/contra/emitter.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function JR(module, exports, __webpack_require__) {
      "use strict";

      var atoa = __webpack_require__(
      /*! atoa */
      "8T9/");

      var debounce = __webpack_require__(
      /*! ./debounce */
      "Ibf7");

      module.exports = function emitter(thing, options) {
        var opts = options || {};
        var evt = {};

        if (thing === undefined) {
          thing = {};
        }

        thing.on = function (type, fn) {
          if (!evt[type]) {
            evt[type] = [fn];
          } else {
            evt[type].push(fn);
          }

          return thing;
        };

        thing.once = function (type, fn) {
          fn._once = true; // thing.off(fn) still works!

          thing.on(type, fn);
          return thing;
        };

        thing.off = function (type, fn) {
          var c = arguments.length;

          if (c === 1) {
            delete evt[type];
          } else if (c === 0) {
            evt = {};
          } else {
            var et = evt[type];

            if (!et) {
              return thing;
            }

            et.splice(et.indexOf(fn), 1);
          }

          return thing;
        };

        thing.emit = function () {
          var args = atoa(arguments);
          return thing.emitterSnapshot(args.shift()).apply(this, args);
        };

        thing.emitterSnapshot = function (type) {
          var et = (evt[type] || []).slice(0);
          return function () {
            var args = atoa(arguments);
            var ctx = this || thing;

            if (type === 'error' && opts["throws"] !== false && !et.length) {
              throw args.length === 1 ? args[0] : args;
            }

            et.forEach(function emitter(listen) {
              if (opts.async) {
                debounce(listen, args, ctx);
              } else {
                listen.apply(ctx, args);
              }

              if (listen._once) {
                thing.off(type, listen);
              }
            });
            return thing;
          };
        };

        return thing;
      };
      /***/

    },

    /***/
    "8T9/":
    /*!***********************************!*\
      !*** ./node_modules/atoa/atoa.js ***!
      \***********************************/

    /*! no static exports found */

    /***/
    function T9(module, exports) {
      module.exports = function atoa(a, n) {
        return Array.prototype.slice.call(a, n);
      };
      /***/

    },

    /***/
    "9Ejp":
    /*!****************************************************************************!*\
      !*** ./node_modules/ng2-dragula/__ivy_ngcc__/dist/fesm2015/ng2-dragula.js ***!
      \****************************************************************************/

    /*! exports provided: DragulaDirective, DragulaService, DragulaModule, dragula, DrakeFactory, Group, EventTypes, MockDrake, MockDrakeFactory */

    /***/
    function Ejp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragulaDirective", function () {
        return DragulaDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragulaService", function () {
        return DragulaService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragulaModule", function () {
        return DragulaModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dragula", function () {
        return dragula;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrakeFactory", function () {
        return DrakeFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Group", function () {
        return Group;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventTypes", function () {
        return EventTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MockDrake", function () {
        return MockDrake;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MockDrakeFactory", function () {
        return MockDrakeFactory;
      });
      /* harmony import */


      var dragula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dragula */
      "YS7c");
      /* harmony import */


      var dragula__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dragula__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */


      var Group =
      /**
       * @param {?} name
       * @param {?} drake
       * @param {?} options
       */
      function Group(name, drake, options) {
        _classCallCheck(this, Group);

        this.name = name;
        this.drake = drake;
        this.options = options;
        this.initEvents = false;
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /** @enum {string} */


      var EventTypes = {
        Cancel: "cancel",
        Cloned: "cloned",
        Drag: "drag",
        DragEnd: "dragend",
        Drop: "drop",
        Out: "out",
        Over: "over",
        Remove: "remove",
        Shadow: "shadow",
        DropModel: "dropModel",
        RemoveModel: "removeModel"
      };
      /** @type {?} */

      var AllEvents = Object.keys(EventTypes).map(function (k) {
        return (
          /** @type {?} */
          EventTypes[
          /** @type {?} */
          k]
        );
      });
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /** @type {?} */

      var dragula = dragula__WEBPACK_IMPORTED_MODULE_0___default.a || dragula__WEBPACK_IMPORTED_MODULE_0__;

      var DrakeFactory =
      /**
       * @param {?=} build
       */
      function DrakeFactory() {
        var build = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dragula;

        _classCallCheck(this, DrakeFactory);

        this.build = build;
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /** @type {?} */


      var filterEvent = function filterEvent(eventType, filterDragType, projector) {
        return function (input) {
          return input.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_ref5) {
            var event = _ref5.event,
                name = _ref5.name;
            return event === eventType && (filterDragType === undefined || name === filterDragType);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref6) {
            var name = _ref6.name,
                args = _ref6.args;
            return projector(name, args);
          }));
        };
      };
      /** @type {?} */


      var elContainerSourceProjector = function elContainerSourceProjector(name, _ref7) {
        var _ref8 = _slicedToArray(_ref7, 3),
            el = _ref8[0],
            container = _ref8[1],
            source = _ref8[2];

        return {
          name: name,
          el: el,
          container: container,
          source: source
        };
      };

      var DragulaService = /*#__PURE__*/function () {
        /**
         * @param {?=} drakeFactory
         */
        function DragulaService() {
          var _this2 = this;

          var drakeFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          _classCallCheck(this, DragulaService);

          this.drakeFactory = drakeFactory;
          this.dispatch$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

          this.drag = function (groupName) {
            return _this2.dispatch$.pipe(filterEvent(EventTypes.Drag, groupName, function (name, _ref9) {
              var _ref10 = _slicedToArray(_ref9, 2),
                  el = _ref10[0],
                  source = _ref10[1];

              return {
                name: name,
                el: el,
                source: source
              };
            }));
          };

          this.dragend = function (groupName) {
            return _this2.dispatch$.pipe(filterEvent(EventTypes.DragEnd, groupName, function (name, _ref11) {
              var _ref12 = _slicedToArray(_ref11, 1),
                  el = _ref12[0];

              return {
                name: name,
                el: el
              };
            }));
          };

          this.drop = function (groupName) {
            return _this2.dispatch$.pipe(filterEvent(EventTypes.Drop, groupName, function (name, _ref13) {
              var _ref14 = _slicedToArray(_ref13, 4),
                  el = _ref14[0],
                  target = _ref14[1],
                  source = _ref14[2],
                  sibling = _ref14[3];

              return {
                name: name,
                el: el,
                target: target,
                source: source,
                sibling: sibling
              };
            }));
          };

          this.elContainerSource = function (eventType) {
            return function (groupName) {
              return _this2.dispatch$.pipe(filterEvent(eventType, groupName, elContainerSourceProjector));
            };
          };

          this.cancel = this.elContainerSource(EventTypes.Cancel);
          this.remove = this.elContainerSource(EventTypes.Remove);
          this.shadow = this.elContainerSource(EventTypes.Shadow);
          this.over = this.elContainerSource(EventTypes.Over);
          this.out = this.elContainerSource(EventTypes.Out);

          this.cloned = function (groupName) {
            return _this2.dispatch$.pipe(filterEvent(EventTypes.Cloned, groupName, function (name, _ref15) {
              var _ref16 = _slicedToArray(_ref15, 3),
                  clone = _ref16[0],
                  original = _ref16[1],
                  cloneType = _ref16[2];

              return {
                name: name,
                clone: clone,
                original: original,
                cloneType: cloneType
              };
            }));
          };

          this.dropModel = function (groupName) {
            return _this2.dispatch$.pipe(filterEvent(EventTypes.DropModel, groupName, function (name, _ref17) {
              var _ref18 = _slicedToArray(_ref17, 9),
                  el = _ref18[0],
                  target = _ref18[1],
                  source = _ref18[2],
                  sibling = _ref18[3],
                  item = _ref18[4],
                  sourceModel = _ref18[5],
                  targetModel = _ref18[6],
                  sourceIndex = _ref18[7],
                  targetIndex = _ref18[8];

              return {
                name: name,
                el: el,
                target: target,
                source: source,
                sibling: sibling,
                item: item,
                sourceModel: sourceModel,
                targetModel: targetModel,
                sourceIndex: sourceIndex,
                targetIndex: targetIndex
              };
            }));
          };

          this.removeModel = function (groupName) {
            return _this2.dispatch$.pipe(filterEvent(EventTypes.RemoveModel, groupName, function (name, _ref19) {
              var _ref20 = _slicedToArray(_ref19, 6),
                  el = _ref20[0],
                  container = _ref20[1],
                  source = _ref20[2],
                  item = _ref20[3],
                  sourceModel = _ref20[4],
                  sourceIndex = _ref20[5];

              return {
                name: name,
                el: el,
                container: container,
                source: source,
                item: item,
                sourceModel: sourceModel,
                sourceIndex: sourceIndex
              };
            }));
          };

          this.groups = {};

          if (this.drakeFactory === null) {
            this.drakeFactory = new DrakeFactory();
          }
        }
        /**
         * Public mainly for testing purposes. Prefer `createGroup()`.
         * @param {?} group
         * @return {?}
         */


        _createClass(DragulaService, [{
          key: "add",
          value: function add(group) {
            /** @type {?} */
            var existingGroup = this.find(group.name);

            if (existingGroup) {
              throw new Error('Group named: "' + group.name + '" already exists.');
            }

            this.groups[group.name] = group;
            this.handleModels(group);
            this.setupEvents(group);
            return group;
          }
          /**
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "find",
          value: function find(name) {
            return this.groups[name];
          }
          /**
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "destroy",
          value: function destroy(name) {
            /** @type {?} */
            var group = this.find(name);

            if (!group) {
              return;
            }

            group.drake && group.drake.destroy();
            delete this.groups[name];
          }
          /**
           * Creates a group with the specified name and options.
           *
           * Note: formerly known as `setOptions`
           * @template T
           * @param {?} name
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "createGroup",
          value: function createGroup(name, options) {
            return this.add(new Group(name, this.drakeFactory.build([], options), options));
          }
          /**
           * @param {?} __0
           * @return {?}
           */

        }, {
          key: "handleModels",
          value: function handleModels(_ref21) {
            var _this3 = this;

            var name = _ref21.name,
                drake = _ref21.drake,
                options = _ref21.options;

            /** @type {?} */
            var dragElm;
            /** @type {?} */

            var dragIndex;
            /** @type {?} */

            var dropIndex;
            drake.on('remove', function (el, container, source) {
              if (!drake.models) {
                return;
              }
              /** @type {?} */


              var sourceModel = drake.models[drake.containers.indexOf(source)];
              sourceModel = sourceModel.slice(0);
              /** @type {?} */

              var item = sourceModel.splice(dragIndex, 1)[0]; // console.log('REMOVE');
              // console.log(sourceModel);

              _this3.dispatch$.next({
                event: EventTypes.RemoveModel,
                name: name,
                args: [el, container, source, item, sourceModel, dragIndex]
              });
            });
            drake.on('drag', function (el, source) {
              if (!drake.models) {
                return;
              }

              dragElm = el;
              dragIndex = _this3.domIndexOf(el, source);
            });
            drake.on('drop', function (dropElm, target, source, sibling) {
              if (!drake.models || !target) {
                return;
              }

              dropIndex = _this3.domIndexOf(dropElm, target);
              /** @type {?} */

              var sourceModel = drake.models[drake.containers.indexOf(source)];
              /** @type {?} */

              var targetModel = drake.models[drake.containers.indexOf(target)];
              /** @type {?} */

              var item;

              if (target === source) {
                sourceModel = sourceModel.slice(0);
                item = sourceModel.splice(dragIndex, 1)[0];
                sourceModel.splice(dropIndex, 0, item); // this was true before we cloned and updated sourceModel,
                // but targetModel still has the old value

                targetModel = sourceModel;
              } else {
                /** @type {?} */
                var isCopying = dragElm !== dropElm;
                item = sourceModel[dragIndex];

                if (isCopying) {
                  if (!options.copyItem) {
                    throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");
                  }

                  item = options.copyItem(item);
                }

                if (!isCopying) {
                  sourceModel = sourceModel.slice(0);
                  sourceModel.splice(dragIndex, 1);
                }

                targetModel = targetModel.slice(0);
                targetModel.splice(dropIndex, 0, item);

                if (isCopying) {
                  try {
                    target.removeChild(dropElm);
                  } catch (e) {}
                }
              }

              _this3.dispatch$.next({
                event: EventTypes.DropModel,
                name: name,
                args: [dropElm, target, source, sibling, item, sourceModel, targetModel, dragIndex, dropIndex]
              });
            });
          }
          /**
           * @param {?} group
           * @return {?}
           */

        }, {
          key: "setupEvents",
          value: function setupEvents(group) {
            var _this4 = this;

            if (group.initEvents) {
              return;
            }

            group.initEvents = true;
            /** @type {?} */

            var name = group.name;
            /** @type {?} */

            var emitter = function emitter(event) {
              group.drake.on(event, function () {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this4.dispatch$.next({
                  event: event,
                  name: name,
                  args: args
                });
              });
            };

            AllEvents.forEach(emitter);
          }
          /**
           * @param {?} child
           * @param {?} parent
           * @return {?}
           */

        }, {
          key: "domIndexOf",
          value: function domIndexOf(child, parent) {
            return Array.prototype.indexOf.call(parent.children, child);
          }
        }]);

        return DragulaService;
      }();

      DragulaService.ɵfac = function DragulaService_Factory(t) {
        return new (t || DragulaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DrakeFactory, 8));
      };

      DragulaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DragulaService,
        factory: DragulaService.ɵfac
      });
      /** @nocollapse */

      DragulaService.ctorParameters = function () {
        return [{
          type: DrakeFactory,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: DrakeFactory,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */


      var DragulaDirective = /*#__PURE__*/function () {
        /**
         * @param {?} el
         * @param {?} dragulaService
         */
        function DragulaDirective(el, dragulaService) {
          _classCallCheck(this, DragulaDirective);

          this.el = el;
          this.dragulaService = dragulaService;
          this.dragulaModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        /**
         * @return {?}
         */


        _createClass(DragulaDirective, [{
          key: "ngOnChanges",

          /**
           * @param {?} changes
           * @return {?}
           */
          value: function ngOnChanges(changes) {
            if (changes && changes.dragula) {
              var _changes$dragula = changes.dragula,
                  prev = _changes$dragula.previousValue,
                  current = _changes$dragula.currentValue,
                  firstChange = _changes$dragula.firstChange;
              /** @type {?} */

              var hadPreviousValue = !!prev;
              /** @type {?} */

              var hasNewValue = !!current; // something -> null       =>  teardown only
              // something -> something  =>  teardown, then setup
              //      null -> something  =>  setup only
              //
              //      null -> null (precluded by fact of change being present)

              if (hadPreviousValue) {
                this.teardown(prev);
              }

              if (hasNewValue) {
                this.setup();
              }
            } else if (changes && changes.dragulaModel) {
              var _changes$dragulaModel = changes.dragulaModel,
                  _prev = _changes$dragulaModel.previousValue,
                  _current = _changes$dragulaModel.currentValue,
                  _firstChange = _changes$dragulaModel.firstChange;
              var drake = this.group.drake;

              if (this.dragula && drake) {
                drake.models = drake.models || [];
                /** @type {?} */

                var prevIndex = drake.models.indexOf(_prev);

                if (prevIndex !== -1) {
                  // delete the previous
                  drake.models.splice(prevIndex, 1); // maybe insert a new one at the same spot

                  if (!!_current) {
                    drake.models.splice(prevIndex, 0, _current);
                  }
                } else if (!!_current) {
                  // no previous one to remove; just push this one.
                  drake.models.push(_current);
                }
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "setup",
          value: function setup() {
            var _this5 = this;

            /** @type {?} */
            var checkModel = function checkModel(group) {
              if (_this5.dragulaModel) {
                if (group.drake.models) {
                  group.drake.models.push(_this5.dragulaModel);
                } else {
                  group.drake.models = [_this5.dragulaModel];
                }
              }
            };
            /** @type {?} */


            var group = this.dragulaService.find(this.dragula);

            if (!group) {
              /** @type {?} */
              var options = {};
              group = this.dragulaService.createGroup(this.dragula, options);
            } // ensure model and container element are pushed


            checkModel(group);
            group.drake.containers.push(this.container);
            this.subscribe(this.dragula);
            this.group = group;
          }
          /**
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "subscribe",
          value: function subscribe(name) {
            var _this6 = this;

            this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
            this.subs.add(this.dragulaService.dropModel(name).subscribe(function (_ref22) {
              var source = _ref22.source,
                  target = _ref22.target,
                  sourceModel = _ref22.sourceModel,
                  targetModel = _ref22.targetModel;

              if (source === _this6.el.nativeElement) {
                _this6.dragulaModelChange.emit(sourceModel);
              } else if (target === _this6.el.nativeElement) {
                _this6.dragulaModelChange.emit(targetModel);
              }
            }));
            this.subs.add(this.dragulaService.removeModel(name).subscribe(function (_ref23) {
              var source = _ref23.source,
                  sourceModel = _ref23.sourceModel;

              if (source === _this6.el.nativeElement) {
                _this6.dragulaModelChange.emit(sourceModel);
              }
            }));
          }
          /**
           * @param {?} groupName
           * @return {?}
           */

        }, {
          key: "teardown",
          value: function teardown(groupName) {
            if (this.subs) {
              this.subs.unsubscribe();
            }
            /** @type {?} */


            var group = this.dragulaService.find(groupName);

            if (group) {
              /** @type {?} */
              var itemToRemove = group.drake.containers.indexOf(this.el.nativeElement);

              if (itemToRemove !== -1) {
                group.drake.containers.splice(itemToRemove, 1);
              }

              if (this.dragulaModel && group.drake && group.drake.models) {
                /** @type {?} */
                var modelIndex = group.drake.models.indexOf(this.dragulaModel);

                if (modelIndex !== -1) {
                  group.drake.models.splice(modelIndex, 1);
                }
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.teardown(this.dragula);
          }
        }, {
          key: "container",
          get: function get() {
            return this.el && this.el.nativeElement;
          }
        }]);

        return DragulaDirective;
      }();

      DragulaDirective.ɵfac = function DragulaDirective_Factory(t) {
        return new (t || DragulaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DragulaService));
      };

      DragulaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DragulaDirective,
        selectors: [["", "dragula", ""]],
        inputs: {
          dragula: "dragula",
          dragulaModel: "dragulaModel"
        },
        outputs: {
          dragulaModelChange: "dragulaModelChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      DragulaDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: DragulaService
        }];
      };

      DragulaDirective.propDecorators = {
        dragula: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dragulaModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dragulaModelChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[dragula]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: DragulaService
          }];
        }, {
          dragulaModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dragula: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          dragulaModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */


      var DragulaModule = /*#__PURE__*/function () {
        function DragulaModule() {
          _classCallCheck(this, DragulaModule);
        }

        _createClass(DragulaModule, null, [{
          key: "forRoot",

          /**
           * @return {?}
           */
          value: function forRoot() {
            return {
              ngModule: DragulaModule,
              providers: [DragulaService]
            };
          }
        }]);

        return DragulaModule;
      }();

      DragulaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DragulaModule
      });
      DragulaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function DragulaModule_Factory(t) {
          return new (t || DragulaModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DragulaModule, {
          declarations: [DragulaDirective],
          exports: [DragulaDirective]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [DragulaDirective],
            declarations: [DragulaDirective]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /** @type {?} */


      var MockDrakeFactory = new DrakeFactory(function (containers, options) {
        return new MockDrake(containers, options);
      });
      /**
       * You can use MockDrake to simulate Drake events.
       *
       * The three methods that actually do anything are `on(event, listener)`,
       * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
       * events, and if you injected MockDrake properly with MockDrakeFactory or
       * mocked the DragulaService.find() method, then you can make ng2-dragula think
       * drags and drops are happening.
       *
       * Caveats:
       *
       * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
       * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
       *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
       * 3. None of the other methods do anything.
       *    That's ok, because ng2-dragula doesn't use them.
       */

      var MockDrake = /*#__PURE__*/function () {
        /**
         * @param {?=} containers A list of container elements.
         * @param {?=} options These will NOT be used. At all.
         * @param {?=} models Nonstandard, but useful for testing using `new MockDrake()` directly.
         *               Note, default value is undefined, like a real Drake. Don't change that.
         */
        function MockDrake() {
          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var models = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, MockDrake);

          this.containers = containers;
          this.options = options;
          this.models = models;
          /* Doesn't represent anything meaningful. */

          this.dragging = false;
          this.emitter$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        }
        /**
         * @param {?} item
         * @return {?}
         */


        _createClass(MockDrake, [{
          key: "start",
          value: function start(item) {
            this.dragging = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "end",
          value: function end() {
            this.dragging = false;
          }
          /**
           * @param {?=} revert
           * @return {?}
           */

        }, {
          key: "cancel",
          value: function cancel(revert) {
            this.dragging = false;
          }
          /**
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove() {
            this.dragging = false;
          }
          /**
           * @param {?} event
           * @param {?} callback
           * @return {?}
           */

        }, {
          key: "on",
          value: function on(event, callback) {
            this.subs.add(this.emitter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_ref24) {
              var eventType = _ref24.eventType;
              return eventType === event;
            })).subscribe(function (_ref25) {
              var args = _ref25.args;
              callback.apply(void 0, _toConsumableArray(args));
            }));
          }
          /**
           * @return {?}
           */

        }, {
          key: "destroy",
          value: function destroy() {
            this.subs.unsubscribe();
          }
          /**
           * This is the most useful method. You can use it to manually fire events that would normally
           * be fired by a real drake.
           *
           * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
           * DragulaService uses to implement [dragulaModel].
           *
           * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
           *
           * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
           * @param {?} eventType
           * @param {...?} args
           * @return {?}
           */

        }, {
          key: "emit",
          value: function emit(eventType) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            this.emitter$.next({
              eventType: eventType,
              args: args
            });
          }
        }]);

        return MockDrake;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */
      //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRyYWd1bGEuanMiLCJzb3VyY2VzIjpbIm5nMi1kcmFndWxhL0dyb3VwLnRzIiwibmcyLWRyYWd1bGEvRXZlbnRUeXBlcy50cyIsIm5nMi1kcmFndWxhL0RyYWtlRmFjdG9yeS50cyIsIm5nMi1kcmFndWxhL2NvbXBvbmVudHMvZHJhZ3VsYS5zZXJ2aWNlLnRzIiwibmcyLWRyYWd1bGEvY29tcG9uZW50cy9kcmFndWxhLmRpcmVjdGl2ZS50cyIsIm5nMi1kcmFndWxhL2NvbXBvbmVudHMvZHJhZ3VsYS5tb2R1bGUudHMiLCJuZzItZHJhZ3VsYS9Nb2NrRHJha2UudHMiXSwibmFtZXMiOlsiKC8qKiBAdHlwZSB7P30gKi8gKGRyYWd1bGFFeHB0KSkuZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQTtBQUFjO0FBQ2I7QUFBdUI7QUFDZDtBQUNXO0FBQ2pCLElBRkYsWUFDUyxNQUNBLE9BQ0E7QUFBVyxRQUZYLFNBQUksR0FBSixJQUFJO0FBQUUsUUFDTixVQUFLLEdBQUwsS0FBSztBQUFFLFFBQ1AsWUFBTyxHQUFQLE9BQU87QUFBRSwwQkFKVyxLQUFLO0FBQ3BDLEtBSU07QUFDTixDQUFDO0FBQ0Q7QUFBQztBQUFJO0FBQWtDO0FBQXlDO0FBQUk7QUFBc0I7QUFBcUIsSUNWM0gsUUFBUyxRQUFRO0FBQ3JCLElBQUksUUFBUyxRQUFRO0FBQ3JCLElBQUksTUFBTyxNQUFNO0FBQ2pCLElBQUksU0FBVSxTQUFTO0FBQ3ZCLElBQUksTUFBTyxNQUFNO0FBQ2pCLElBQUksS0FBTSxLQUFLO0FBQ2YsSUFBSSxNQUFPLE1BQU07QUFDakIsSUFBSSxRQUFTLFFBQVE7QUFDckIsSUFBSSxRQUFTLFFBQVE7QUFDckIsSUFBSSxXQUFZLFdBQVc7QUFDM0IsSUFBSSxhQUFjLGFBQWE7QUFDL0I7QUFFQTtBQUFBLE1BQWEsU0FBUyxHQUFpQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHNCQUFJLFVBQVUsbUJB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QUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7QUFDM0MsS0FBRztBQUNILENBQ0M7QUFDRDtBQUFDO0FBQUk7QUFBa0M7QUFBeUM7QUFBSTtBQUFDO0FBQUk7QUFBa0M7QUFBeUM7QUFBSTtBQUFDOztBTjlGQSxBQUVBLEFBQ0EsQUFDQSxBQUNBLEFBRkEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBSkEsQUFBQSxBQUtBLEFBQ0EsQUNUQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQ1pBLEFBQ0EsQUFBQSxBQUFBLEFBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUNUQSxBQVdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBcUZBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQTlFQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUF4TkEsQUFBQSxBQXZCQSxBQUFBLEFBMEdBLEFBQUEsQUNoSEEsQUFtQkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVRBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBTUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBS0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBaElBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFOQSxBQUFBLEFBQ0EsQUFBQSxBQU9BLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQ1ZBLEFBU0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBVkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUNQQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQWtCQSxBQU9BLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFGQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBc0JBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUEzQkEsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFhQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJha2VXaXRoTW9kZWxzIH0gZnJvbSBcIi4vRHJha2VXaXRoTW9kZWxzXCI7XG5pbXBvcnQgeyBEcmFndWxhT3B0aW9ucyB9IGZyb20gXCIuL0RyYWd1bGFPcHRpb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBHcm91cCB7XG4gIHB1YmxpYyBpbml0RXZlbnRzOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGRyYWtlOiBEcmFrZVdpdGhNb2RlbHMsXG4gICAgcHVibGljIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zXG4gICkge31cbn1cbiIsImV4cG9ydCBlbnVtIEV2ZW50VHlwZXMge1xuICAgIENhbmNlbCA9IFwiY2FuY2VsXCIsXG4gICAgQ2xvbmVkID0gXCJjbG9uZWRcIixcbiAgICBEcmFnID0gXCJkcmFnXCIsXG4gICAgRHJhZ0VuZCA9IFwiZHJhZ2VuZFwiLFxuICAgIERyb3AgPSBcImRyb3BcIixcbiAgICBPdXQgPSBcIm91dFwiLFxuICAgIE92ZXIgPSBcIm92ZXJcIixcbiAgICBSZW1vdmUgPSBcInJlbW92ZVwiLFxuICAgIFNoYWRvdyA9IFwic2hhZG93XCIsXG4gICAgRHJvcE1vZGVsID0gXCJkcm9wTW9kZWxcIixcbiAgICBSZW1vdmVNb2RlbCA9IFwicmVtb3ZlTW9kZWxcIixcbn1cblxuZXhwb3J0IGNvbnN0IEFsbEV2ZW50czogRXZlbnRUeXBlc1tdID0gT2JqZWN0LmtleXMoRXZlbnRUeXBlcykubWFwKGsgPT4gRXZlbnRUeXBlc1trIGFzIGFueV0gYXMgRXZlbnRUeXBlcyk7XG5cbiIsImltcG9ydCB7IERyYWd1bGFPcHRpb25zIH0gZnJvbSAnLi9EcmFndWxhT3B0aW9ucyc7XG5pbXBvcnQgeyBEcmFrZVdpdGhNb2RlbHMgfSBmcm9tICcuL0RyYWtlV2l0aE1vZGVscyc7XG5pbXBvcnQgKiBhcyBkcmFndWxhRXhwdCBmcm9tICdkcmFndWxhJztcbmV4cG9ydCBjb25zdCBkcmFndWxhOiAoY29udGFpbmVycz86IGFueSwgb3B0aW9ucz86IGFueSkgPT4gYW55ID0gKGRyYWd1bGFFeHB0IGFzIGFueSkuZGVmYXVsdCB8fCBkcmFndWxhRXhwdDtcblxuZXhwb3J0IHR5cGUgRHJha2VCdWlsZGVyID0gKGNvbnRhaW5lcnM6IGFueVtdLCBvcHRpb25zOiBEcmFndWxhT3B0aW9ucykgPT4gRHJha2VXaXRoTW9kZWxzO1xuXG5leHBvcnQgY2xhc3MgRHJha2VGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IgKHB1YmxpYyBidWlsZDogRHJha2VCdWlsZGVyID0gZHJhZ3VsYSkge31cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uL0dyb3VwJztcbmltcG9ydCB7IERyYWd1bGFPcHRpb25zIH0gZnJvbSAnLi4vRHJhZ3VsYU9wdGlvbnMnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFdmVudFR5cGVzLCBBbGxFdmVudHMgfSBmcm9tICcuLi9FdmVudFR5cGVzJztcbmltcG9ydCB7IERyYWtlRmFjdG9yeSB9IGZyb20gJy4uL0RyYWtlRmFjdG9yeSc7XG5cbnR5cGUgRmlsdGVyUHJvamVjdG9yPFQgZXh0ZW5kcyB7IG5hbWU6IHN0cmluZzsgfT4gPSAobmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSkgPT4gVDtcbnR5cGUgRGlzcGF0Y2ggPSB7IGV2ZW50OiBFdmVudFR5cGVzOyBuYW1lOiBzdHJpbmc7IGFyZ3M6IGFueVtdOyB9O1xuXG5jb25zdCBmaWx0ZXJFdmVudCA9IDxUIGV4dGVuZHMgeyBuYW1lOiBzdHJpbmc7IH0+KFxuICBldmVudFR5cGU6IEV2ZW50VHlwZXMsXG4gIGZpbHRlckRyYWdUeXBlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHByb2plY3RvcjogRmlsdGVyUHJvamVjdG9yPFQ+XG4pID0+IChpbnB1dDogT2JzZXJ2YWJsZTxEaXNwYXRjaD4pOiBPYnNlcnZhYmxlPFQ+ID0+IHtcbiAgcmV0dXJuIGlucHV0LnBpcGUoXG4gICAgZmlsdGVyKCh7IGV2ZW50LCBuYW1lIH0pID0+IHtcbiAgICAgIHJldHVybiBldmVudCA9PT0gZXZlbnRUeXBlXG4gICAgICAgICAgJiYgKGZpbHRlckRyYWdUeXBlID09PSB1bmRlZmluZWQgfHwgbmFtZSA9PT0gZmlsdGVyRHJhZ1R5cGUpO1xuICAgIH0pLFxuICAgIG1hcCgoeyBuYW1lLCBhcmdzIH0pID0+IHByb2plY3RvcihuYW1lLCBhcmdzKSlcbiAgKTtcbn1cblxuY29uc3QgZWxDb250YWluZXJTb3VyY2VQcm9qZWN0b3IgPVxuICAobmFtZTogc3RyaW5nLCBbZWwsIGNvbnRhaW5lciwgc291cmNlXTogW0VsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnRdKSA9PlxuICAgICh7IG5hbWUsIGVsLCBjb250YWluZXIsIHNvdXJjZSB9KTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyYWd1bGFTZXJ2aWNlIHtcblxuICAvKiBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYSNkcmFrZW9uLWV2ZW50cyAqL1xuXG4gIHByaXZhdGUgZGlzcGF0Y2gkID0gbmV3IFN1YmplY3Q8RGlzcGF0Y2g+KCk7XG5cbiAgcHVibGljIGRyYWcgPSAoZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5EcmFnLFxuICAgICAgZ3JvdXBOYW1lLFxuICAgICAgKG5hbWUsIFtlbCwgc291cmNlXTogW0VsZW1lbnQsIEVsZW1lbnRdKSA9PiAoeyBuYW1lLCBlbCwgc291cmNlIH0pXG4gICAgKVxuICApO1xuXG4gIHB1YmxpYyBkcmFnZW5kID0gKGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuRHJhZ0VuZCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbZWxdOiBbRWxlbWVudF0pID0+ICh7IG5hbWUsIGVsIH0pXG4gICAgKVxuICApO1xuXG4gIHB1YmxpYyBkcm9wID0gKGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuRHJvcCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZ1xuICAgICAgXTogW0VsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnRdKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZyB9O1xuICAgICAgfSlcbiAgKTtcblxuICBwcml2YXRlIGVsQ29udGFpbmVyU291cmNlID1cbiAgICAoZXZlbnRUeXBlOiBFdmVudFR5cGVzKSA9PlxuICAgIChncm91cE5hbWU/OiBzdHJpbmcpID0+XG4gICAgdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICAgIGZpbHRlckV2ZW50KGV2ZW50VHlwZSwgZ3JvdXBOYW1lLCBlbENvbnRhaW5lclNvdXJjZVByb2plY3RvcilcbiAgICApO1xuXG4gIHB1YmxpYyBjYW5jZWwgPSB0aGlzLmVsQ29udGFpbmVyU291cmNlKEV2ZW50VHlwZXMuQ2FuY2VsKTtcbiAgcHVibGljIHJlbW92ZSA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5SZW1vdmUpO1xuICBwdWJsaWMgc2hhZG93ID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLlNoYWRvdyk7XG4gIHB1YmxpYyBvdmVyID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLk92ZXIpO1xuICBwdWJsaWMgb3V0ID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLk91dCk7XG5cbiAgcHVibGljIGNsb25lZCA9IChncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLkNsb25lZCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGNsb25lLCBvcmlnaW5hbCwgY2xvbmVUeXBlXG4gICAgICBdOiBbRWxlbWVudCwgRWxlbWVudCwgJ21pcnJvcicgfCAnY29weSddKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGNsb25lLCBvcmlnaW5hbCwgY2xvbmVUeXBlIH1cbiAgICAgIH0pXG4gICk7XG5cbiAgcHVibGljIGRyb3BNb2RlbCA9IDxUID0gYW55Pihncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLkRyb3BNb2RlbCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZywgaXRlbSwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsLCBzb3VyY2VJbmRleCwgdGFyZ2V0SW5kZXhcbiAgICAgIF06IFtFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50LCBULCBUW10sIFRbXSwgbnVtYmVyLCBudW1iZXJdKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZywgaXRlbSwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsLCBzb3VyY2VJbmRleCwgdGFyZ2V0SW5kZXggfVxuICAgICAgfSlcbiAgKTtcblxuICBwdWJsaWMgcmVtb3ZlTW9kZWwgPSA8VCA9IGFueT4oZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5SZW1vdmVNb2RlbCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGVsLCBjb250YWluZXIsIHNvdXJjZSwgaXRlbSwgc291cmNlTW9kZWwsIHNvdXJjZUluZGV4XG4gICAgICBdOiBbRWxlbWVudCwgRWxlbWVudCwgRWxlbWVudCwgVCwgVFtdLCBudW1iZXJdKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCBjb250YWluZXIsIHNvdXJjZSwgaXRlbSwgc291cmNlTW9kZWwsIHNvdXJjZUluZGV4IH1cbiAgICAgIH1cbiAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBncm91cHM6IHsgW2s6IHN0cmluZ106IEdyb3VwIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvciAoQE9wdGlvbmFsKCkgcHJpdmF0ZSBkcmFrZUZhY3Rvcnk6IERyYWtlRmFjdG9yeSA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5kcmFrZUZhY3RvcnkgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZHJha2VGYWN0b3J5ID0gbmV3IERyYWtlRmFjdG9yeSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBQdWJsaWMgbWFpbmx5IGZvciB0ZXN0aW5nIHB1cnBvc2VzLiBQcmVmZXIgYGNyZWF0ZUdyb3VwKClgLiAqL1xuICBwdWJsaWMgYWRkKGdyb3VwOiBHcm91cCk6IEdyb3VwIHtcbiAgICBsZXQgZXhpc3RpbmdHcm91cCA9IHRoaXMuZmluZChncm91cC5uYW1lKTtcbiAgICBpZiAoZXhpc3RpbmdHcm91cCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHcm91cCBuYW1lZDogXCInICsgZ3JvdXAubmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICB9XG4gICAgdGhpcy5ncm91cHNbZ3JvdXAubmFtZV0gPSBncm91cDtcbiAgICB0aGlzLmhhbmRsZU1vZGVscyhncm91cCk7XG4gICAgdGhpcy5zZXR1cEV2ZW50cyhncm91cCk7XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG5cbiAgcHVibGljIGZpbmQobmFtZTogc3RyaW5nKTogR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmdyb3Vwc1tuYW1lXTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBncm91cCA9IHRoaXMuZmluZChuYW1lKTtcbiAgICBpZiAoIWdyb3VwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdyb3VwLmRyYWtlICYmIGdyb3VwLmRyYWtlLmRlc3Ryb3koKTtcbiAgICBkZWxldGUgdGhpcy5ncm91cHNbbmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGdyb3VwIHdpdGggdGhlIHNwZWNpZmllZCBuYW1lIGFuZCBvcHRpb25zLlxuICAgKlxuICAgKiBOb3RlOiBmb3JtZXJseSBrbm93biBhcyBgc2V0T3B0aW9uc2BcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVHcm91cDxUID0gYW55PihuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zPFQ+KTogR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmFkZChuZXcgR3JvdXAoXG4gICAgICBuYW1lLFxuICAgICAgdGhpcy5kcmFrZUZhY3RvcnkuYnVpbGQoW10sIG9wdGlvbnMpLFxuICAgICAgb3B0aW9uc1xuICAgICkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNb2RlbHMoeyBuYW1lLCBkcmFrZSwgb3B0aW9ucyB9OiBHcm91cCk6IHZvaWQge1xuICAgIGxldCBkcmFnRWxtOiBhbnk7XG4gICAgbGV0IGRyYWdJbmRleDogbnVtYmVyO1xuICAgIGxldCBkcm9wSW5kZXg6IG51bWJlcjtcbiAgICBkcmFrZS5vbigncmVtb3ZlJywgKGVsOiBhbnksIGNvbnRhaW5lcjogYW55LCBzb3VyY2U6IGFueSkgPT4ge1xuICAgICAgaWYgKCFkcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNvdXJjZU1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihzb3VyY2UpXTtcbiAgICAgIHNvdXJjZU1vZGVsID0gc291cmNlTW9kZWwuc2xpY2UoMCk7IC8vIGNsb25lIGl0XG4gICAgICBjb25zdCBpdGVtID0gc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSlbMF07XG4gICAgICAvLyBjb25zb2xlLmxvZygnUkVNT1ZFJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzb3VyY2VNb2RlbCk7XG4gICAgICB0aGlzLmRpc3BhdGNoJC5uZXh0KHtcbiAgICAgICAgZXZlbnQ6IEV2ZW50VHlwZXMuUmVtb3ZlTW9kZWwsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFyZ3M6IFsgZWwsIGNvbnRhaW5lciwgc291cmNlLCBpdGVtLCBzb3VyY2VNb2RlbCwgZHJhZ0luZGV4IF1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRyYWtlLm9uKCdkcmFnJywgKGVsOiBhbnksIHNvdXJjZTogYW55KSA9PiB7XG4gICAgICBpZiAoIWRyYWtlLm1vZGVscykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkcmFnRWxtID0gZWw7XG4gICAgICBkcmFnSW5kZXggPSB0aGlzLmRvbUluZGV4T2YoZWwsIHNvdXJjZSk7XG4gICAgfSk7XG4gICAgZHJha2Uub24oJ2Ryb3AnLCAoZHJvcEVsbTogYW55LCB0YXJnZXQ6IEVsZW1lbnQsIHNvdXJjZTogRWxlbWVudCwgc2libGluZz86IEVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghZHJha2UubW9kZWxzIHx8ICF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJvcEluZGV4ID0gdGhpcy5kb21JbmRleE9mKGRyb3BFbG0sIHRhcmdldCk7XG4gICAgICBsZXQgc291cmNlTW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHNvdXJjZSldO1xuICAgICAgbGV0IHRhcmdldE1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEUk9QJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzb3VyY2VNb2RlbCk7XG4gICAgICBsZXQgaXRlbTogYW55O1xuICAgICAgaWYgKHRhcmdldCA9PT0gc291cmNlKSB7XG4gICAgICAgIHNvdXJjZU1vZGVsID0gc291cmNlTW9kZWwuc2xpY2UoMClcbiAgICAgICAgaXRlbSA9IHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpWzBdO1xuICAgICAgICBzb3VyY2VNb2RlbC5zcGxpY2UoZHJvcEluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgLy8gdGhpcyB3YXMgdHJ1ZSBiZWZvcmUgd2UgY2xvbmVkIGFuZCB1cGRhdGVkIHNvdXJjZU1vZGVsLFxuICAgICAgICAvLyBidXQgdGFyZ2V0TW9kZWwgc3RpbGwgaGFzIHRoZSBvbGQgdmFsdWVcbiAgICAgICAgdGFyZ2V0TW9kZWwgPSBzb3VyY2VNb2RlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpc0NvcHlpbmcgPSBkcmFnRWxtICE9PSBkcm9wRWxtO1xuICAgICAgICBpdGVtID0gc291cmNlTW9kZWxbZHJhZ0luZGV4XTtcbiAgICAgICAgaWYgKGlzQ29weWluZykge1xuICAgICAgICAgIGlmICghb3B0aW9ucy5jb3B5SXRlbSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSWYgeW91IGhhdmUgZW5hYmxlZCBgY29weWAgb24gYSBncm91cCwgeW91IG11c3QgcHJvdmlkZSBhIGBjb3B5SXRlbWAgZnVuY3Rpb24uXCIpXG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0gPSBvcHRpb25zLmNvcHlJdGVtKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0NvcHlpbmcpIHtcbiAgICAgICAgICBzb3VyY2VNb2RlbCA9IHNvdXJjZU1vZGVsLnNsaWNlKDApXG4gICAgICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0TW9kZWwgPSB0YXJnZXRNb2RlbC5zbGljZSgwKVxuICAgICAgICB0YXJnZXRNb2RlbC5zcGxpY2UoZHJvcEluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgaWYgKGlzQ29weWluZykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoZHJvcEVsbSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kaXNwYXRjaCQubmV4dCh7XG4gICAgICAgIGV2ZW50OiBFdmVudFR5cGVzLkRyb3BNb2RlbCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYXJnczogWyBkcm9wRWxtLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZywgaXRlbSwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsLCBkcmFnSW5kZXgsIGRyb3BJbmRleCBdXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBFdmVudHMoZ3JvdXA6IEdyb3VwKTogdm9pZCB7XG4gICAgaWYgKGdyb3VwLmluaXRFdmVudHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ3JvdXAuaW5pdEV2ZW50cyA9IHRydWU7XG4gICAgY29uc3QgbmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgbGV0IHRoYXQ6IGFueSA9IHRoaXM7XG4gICAgbGV0IGVtaXR0ZXIgPSAoZXZlbnQ6IEV2ZW50VHlwZXMpID0+IHtcbiAgICAgIGdyb3VwLmRyYWtlLm9uKGV2ZW50LCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaCQubmV4dCh7IGV2ZW50LCBuYW1lLCBhcmdzIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBBbGxFdmVudHMuZm9yRWFjaChlbWl0dGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgZG9tSW5kZXhPZihjaGlsZDogYW55LCBwYXJlbnQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi9kcmFndWxhLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJha2VXaXRoTW9kZWxzIH0gZnJvbSAnLi4vRHJha2VXaXRoTW9kZWxzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi9Hcm91cCc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RyYWd1bGFdJ30pXG5leHBvcnQgY2xhc3MgRHJhZ3VsYURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIGRyYWd1bGE6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGRyYWd1bGFNb2RlbDogYW55W107XG4gIEBPdXRwdXQoKSBwdWJsaWMgZHJhZ3VsYU1vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcblxuICBwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGdldCBjb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuICBwcml2YXRlIGdyb3VwOiBHcm91cDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBkcmFndWxhU2VydmljZTogRHJhZ3VsYVNlcnZpY2UpIHtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7ZHJhZ3VsYT86IFNpbXBsZUNoYW5nZSwgZHJhZ3VsYU1vZGVsPzogU2ltcGxlQ2hhbmdlfSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZHJhZ3VsYSkge1xuICAgICAgY29uc3QgeyBwcmV2aW91c1ZhbHVlOiBwcmV2LCBjdXJyZW50VmFsdWU6IGN1cnJlbnQsIGZpcnN0Q2hhbmdlIH0gPSBjaGFuZ2VzLmRyYWd1bGE7XG4gICAgICBsZXQgaGFkUHJldmlvdXNWYWx1ZSA9ICEhcHJldjtcbiAgICAgIGxldCBoYXNOZXdWYWx1ZSA9ICEhY3VycmVudDtcbiAgICAgIC8vIHNvbWV0aGluZyAtPiBudWxsICAgICAgID0+ICB0ZWFyZG93biBvbmx5XG4gICAgICAvLyBzb21ldGhpbmcgLT4gc29tZXRoaW5nICA9PiAgdGVhcmRvd24sIHRoZW4gc2V0dXBcbiAgICAgIC8vICAgICAgbnVsbCAtPiBzb21ldGhpbmcgID0+ICBzZXR1cCBvbmx5XG4gICAgICAvL1xuICAgICAgLy8gICAgICBudWxsIC0+IG51bGwgKHByZWNsdWRlZCBieSBmYWN0IG9mIGNoYW5nZSBiZWluZyBwcmVzZW50KVxuICAgICAgaWYgKGhhZFByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgdGhpcy50ZWFyZG93bihwcmV2KTtcbiAgICAgIH1cbiAgICAgIGlmIChoYXNOZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLnNldHVwKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZHJhZ3VsYU1vZGVsKSB7XG4gICAgICAvLyB0aGlzIGNvZGUgb25seSBydW5zIHdoZW4geW91J3JlIG5vdCBjaGFuZ2luZyB0aGUgZ3JvdXAgbmFtZVxuICAgICAgLy8gYmVjYXVzZSBpZiB5b3UncmUgY2hhbmdpbmcgdGhlIGdyb3VwIG5hbWUsIHlvdSdsbCBiZSBkb2luZyBzZXR1cCBvciB0ZWFyZG93blxuICAgICAgLy8gaXQgYWxzbyBvbmx5IHJ1bnMgaWYgdGhlcmUgaXMgYSBncm91cCBuYW1lIHRvIGF0dGFjaCB0by5cbiAgICAgIGNvbnN0IHsgcHJldmlvdXNWYWx1ZTogcHJldiwgY3VycmVudFZhbHVlOiBjdXJyZW50LCBmaXJzdENoYW5nZSB9ID0gY2hhbmdlcy5kcmFndWxhTW9kZWw7XG4gICAgICBjb25zdCB7IGRyYWtlIH0gPSB0aGlzLmdyb3VwO1xuICAgICAgaWYgKHRoaXMuZHJhZ3VsYSAmJiBkcmFrZSkge1xuICAgICAgICBkcmFrZS5tb2RlbHMgPSBkcmFrZS5tb2RlbHMgfHwgW107XG4gICAgICAgIGxldCBwcmV2SW5kZXggPSBkcmFrZS5tb2RlbHMuaW5kZXhPZihwcmV2KTtcbiAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAvLyBkZWxldGUgdGhlIHByZXZpb3VzXG4gICAgICAgICAgZHJha2UubW9kZWxzLnNwbGljZShwcmV2SW5kZXgsIDEpO1xuICAgICAgICAgIC8vIG1heWJlIGluc2VydCBhIG5ldyBvbmUgYXQgdGhlIHNhbWUgc3BvdFxuICAgICAgICAgIGlmICghIWN1cnJlbnQpIHtcbiAgICAgICAgICAgIGRyYWtlLm1vZGVscy5zcGxpY2UocHJldkluZGV4LCAwLCBjdXJyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoISFjdXJyZW50KSB7XG4gICAgICAgICAgLy8gbm8gcHJldmlvdXMgb25lIHRvIHJlbW92ZTsganVzdCBwdXNoIHRoaXMgb25lLlxuICAgICAgICAgIGRyYWtlLm1vZGVscy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsbCBuZ09uSW5pdCAnc2V0dXAnIGJlY2F1c2Ugd2Ugd2FudCB0byBjYWxsIGl0IGluIG5nT25DaGFuZ2VzXG4gIC8vIGFuZCBpdCB3b3VsZCBvdGhlcndpc2UgcnVuIHR3aWNlXG4gIHB1YmxpYyBzZXR1cCgpOiB2b2lkIHtcbiAgICBsZXQgY2hlY2tNb2RlbCA9IChncm91cDogR3JvdXApID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWd1bGFNb2RlbCkge1xuICAgICAgICBpZiAoZ3JvdXAuZHJha2UubW9kZWxzKSB7XG4gICAgICAgICAgZ3JvdXAuZHJha2UubW9kZWxzLnB1c2godGhpcy5kcmFndWxhTW9kZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdyb3VwLmRyYWtlLm1vZGVscyA9IFt0aGlzLmRyYWd1bGFNb2RlbF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZmluZCBvciBjcmVhdGUgYSBncm91cFxuICAgIGxldCBncm91cCA9IHRoaXMuZHJhZ3VsYVNlcnZpY2UuZmluZCh0aGlzLmRyYWd1bGEpO1xuICAgIGlmICghZ3JvdXApIHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBncm91cCA9IHRoaXMuZHJhZ3VsYVNlcnZpY2UuY3JlYXRlR3JvdXAodGhpcy5kcmFndWxhLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBlbnN1cmUgbW9kZWwgYW5kIGNvbnRhaW5lciBlbGVtZW50IGFyZSBwdXNoZWRcbiAgICBjaGVja01vZGVsKGdyb3VwKTtcbiAgICBncm91cC5kcmFrZS5jb250YWluZXJzLnB1c2godGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuc3Vic2NyaWJlKHRoaXMuZHJhZ3VsYSk7XG5cbiAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4gIH1cblxuICBwdWJsaWMgc3Vic2NyaWJlKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuc3VicyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICB0aGlzLnN1YnMuYWRkKFxuICAgICAgdGhpcy5kcmFndWxhU2VydmljZVxuICAgICAgLmRyb3BNb2RlbChuYW1lKVxuICAgICAgLnN1YnNjcmliZSgoeyBzb3VyY2UsIHRhcmdldCwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsIH0pID0+IHtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5kcmFndWxhTW9kZWxDaGFuZ2UuZW1pdChzb3VyY2VNb2RlbCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLmRyYWd1bGFNb2RlbENoYW5nZS5lbWl0KHRhcmdldE1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuc3Vicy5hZGQoXG4gICAgICB0aGlzLmRyYWd1bGFTZXJ2aWNlXG4gICAgICAucmVtb3ZlTW9kZWwobmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoKHsgc291cmNlLCBzb3VyY2VNb2RlbCB9KSA9PiB7XG4gICAgICAgIGlmIChzb3VyY2UgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuZHJhZ3VsYU1vZGVsQ2hhbmdlLmVtaXQoc291cmNlTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdGVhcmRvd24oZ3JvdXBOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzKSB7XG4gICAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmRyYWd1bGFTZXJ2aWNlLmZpbmQoZ3JvdXBOYW1lKTtcbiAgICBpZiAoZ3JvdXApIHtcbiAgICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IGdyb3VwLmRyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgaWYgKGl0ZW1Ub1JlbW92ZSAhPT0gLTEpIHtcbiAgICAgICAgZ3JvdXAuZHJha2UuY29udGFpbmVycy5zcGxpY2UoaXRlbVRvUmVtb3ZlLCAxKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRyYWd1bGFNb2RlbCAmJiBncm91cC5kcmFrZSAmJiBncm91cC5kcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgbGV0IG1vZGVsSW5kZXggPSBncm91cC5kcmFrZS5tb2RlbHMuaW5kZXhPZih0aGlzLmRyYWd1bGFNb2RlbCk7XG4gICAgICAgIGlmIChtb2RlbEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGdyb3VwLmRyYWtlLm1vZGVscy5zcGxpY2UobW9kZWxJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50ZWFyZG93bih0aGlzLmRyYWd1bGEpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFndWxhRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFndWxhLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcmFndWxhU2VydmljZSB9IGZyb20gJy4vZHJhZ3VsYS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0RyYWd1bGFEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtEcmFndWxhRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ3VsYU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRHJhZ3VsYU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0RyYWd1bGFTZXJ2aWNlXVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEcmFrZVdpdGhNb2RlbHMgfSBmcm9tICcuL0RyYWtlV2l0aE1vZGVscyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFdmVudFR5cGVzIH0gZnJvbSAnLi9FdmVudFR5cGVzJztcbmltcG9ydCB7IERyYWd1bGFPcHRpb25zIH0gZnJvbSAnLi9EcmFndWxhT3B0aW9ucyc7XG5pbXBvcnQgeyBEcmFrZUZhY3RvcnkgfSBmcm9tICcuL0RyYWtlRmFjdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBNb2NrRHJha2VGYWN0b3J5ID0gbmV3IERyYWtlRmFjdG9yeSgoY29udGFpbmVycywgb3B0aW9ucykgPT4ge1xuICByZXR1cm4gbmV3IE1vY2tEcmFrZShjb250YWluZXJzLCBvcHRpb25zKTtcbn0pO1xuXG4vKiogWW91IGNhbiB1c2UgTW9ja0RyYWtlIHRvIHNpbXVsYXRlIERyYWtlIGV2ZW50cy5cbiAqXG4gKiBUaGUgdGhyZWUgbWV0aG9kcyB0aGF0IGFjdHVhbGx5IGRvIGFueXRoaW5nIGFyZSBgb24oZXZlbnQsIGxpc3RlbmVyKWAsXG4gKiBgZGVzdHJveSgpYCwgYW5kIGEgbmV3IG1ldGhvZCwgYGVtaXQoKWAuIFVzZSBgZW1pdCgpYCB0byBtYW51YWxseSBlbWl0IERyYWtlXG4gKiBldmVudHMsIGFuZCBpZiB5b3UgaW5qZWN0ZWQgTW9ja0RyYWtlIHByb3Blcmx5IHdpdGggTW9ja0RyYWtlRmFjdG9yeSBvclxuICogbW9ja2VkIHRoZSBEcmFndWxhU2VydmljZS5maW5kKCkgbWV0aG9kLCB0aGVuIHlvdSBjYW4gbWFrZSBuZzItZHJhZ3VsYSB0aGlua1xuICogZHJhZ3MgYW5kIGRyb3BzIGFyZSBoYXBwZW5pbmcuXG4gKlxuICogQ2F2ZWF0czpcbiAqXG4gKiAxLiBZT1UgTVVTVCBNQUtFIFRIRSBET00gQ0hBTkdFUyBZT1VSU0VMRi5cbiAqIDIuIFJFUEVBVDogWU9VIE1VU1QgTUFLRSBUSEUgRE9NIENIQU5HRVMgWU9VUlNFTEYuXG4gKiAgICBUaGF0IG1lYW5zIGBzb3VyY2UucmVtb3ZlQ2hpbGQoZWwpYCwgYW5kIGB0YXJnZXQuaW5zZXJ0QmVmb3JlKGVsKWAuXG4gKiAzLiBOb25lIG9mIHRoZSBvdGhlciBtZXRob2RzIGRvIGFueXRoaW5nLlxuICogICAgVGhhdCdzIG9rLCBiZWNhdXNlIG5nMi1kcmFndWxhIGRvZXNuJ3QgdXNlIHRoZW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2NrRHJha2UgaW1wbGVtZW50cyBEcmFrZVdpdGhNb2RlbHMge1xuICAvKipcbiAgICogQHBhcmFtIGNvbnRhaW5lcnMgQSBsaXN0IG9mIGNvbnRhaW5lciBlbGVtZW50cy5cbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlc2Ugd2lsbCBOT1QgYmUgdXNlZC4gQXQgYWxsLlxuICAgKiBAcGFyYW0gbW9kZWxzIE5vbnN0YW5kYXJkLCBidXQgdXNlZnVsIGZvciB0ZXN0aW5nIHVzaW5nIGBuZXcgTW9ja0RyYWtlKClgIGRpcmVjdGx5LlxuICAgKiAgICAgICAgICAgICAgIE5vdGUsIGRlZmF1bHQgdmFsdWUgaXMgdW5kZWZpbmVkLCBsaWtlIGEgcmVhbCBEcmFrZS4gRG9uJ3QgY2hhbmdlIHRoYXQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29udGFpbmVyczogRWxlbWVudFtdID0gW10sXG4gICAgcHVibGljIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zID0ge30sXG4gICAgcHVibGljIG1vZGVscz86IGFueVtdW11cbiAgKSB7fVxuXG4gIC8qIERvZXNuJ3QgcmVwcmVzZW50IGFueXRoaW5nIG1lYW5pbmdmdWwuICovXG4gIGRyYWdnaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyogRG9lcyBub3RoaW5nIHVzZWZ1bC4gKi9cbiAgc3RhcnQoaXRlbTogRWxlbWVudCk6IGFueSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gIH1cbiAgLyogRG9lcyBub3RoaW5nIHVzZWZ1bC4gKi9cbiAgZW5kKCk6IGFueSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG4gIC8qIERvZXMgbm90aGluZyB1c2VmdWwuICovXG4gIGNhbmNlbChyZXZlcnQ6IGJvb2xlYW4pOiBhbnk7XG4gIGNhbmNlbCgpOiBhbnk7XG4gIGNhbmNlbChyZXZlcnQ/OiBhbnkpIHtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cbiAgLyogRG9lcyBub3RoaW5nIHVzZWZ1bC4gKi9cbiAgcmVtb3ZlKCk6IGFueSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQmFzaWMgYnV0IGZ1bGx5IGZ1bmN0aW9uYWwgZXZlbnQgZW1pdHRlciBzaGltXG4gIHByaXZhdGUgZW1pdHRlciQgPSBuZXcgU3ViamVjdDx7IGV2ZW50VHlwZTogRXZlbnRUeXBlcywgYXJnczogYW55W10gfT4oKTtcblxuICBwcml2YXRlIHN1YnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgb24oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogYW55IHtcbiAgICB0aGlzLnN1YnMuYWRkKHRoaXMuZW1pdHRlciRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgZXZlbnRUeXBlIH0pID0+IGV2ZW50VHlwZSA9PT0gZXZlbnQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh7IGFyZ3MgfSkgPT4ge1xuICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogYW55IHtcbiAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBtb3N0IHVzZWZ1bCBtZXRob2QuIFlvdSBjYW4gdXNlIGl0IHRvIG1hbnVhbGx5IGZpcmUgZXZlbnRzIHRoYXQgd291bGQgbm9ybWFsbHlcbiAgICogYmUgZmlyZWQgYnkgYSByZWFsIGRyYWtlLlxuICAgKlxuICAgKiBZb3UncmUgbGlrZWx5IG1vc3QgaW50ZXJlc3RlZCBpbiBmaXJpbmcgYGRyYWdgLCBgcmVtb3ZlYCBhbmQgYGRyb3BgLCB0aGUgdGhyZWUgZXZlbnRzXG4gICAqIERyYWd1bGFTZXJ2aWNlIHVzZXMgdG8gaW1wbGVtZW50IFtkcmFndWxhTW9kZWxdLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEjZHJha2Vvbi1ldmVudHMgZm9yIHdoYXQgeW91IHNob3VsZCBlbWl0IChhbmQgaW4gd2hhdCBvcmRlcikuXG4gICAqXG4gICAqIChOb3RlIGFsc28sIGZpcmluZyBkcm9wTW9kZWwgYW5kIHJlbW92ZU1vZGVsIHdvbid0IHdvcmsuIFlvdSB3b3VsZCBoYXZlIHRvIG1vY2sgRHJhZ3VsYVNlcnZpY2UgZm9yIHRoYXQuKVxuICAgKi9cbiAgZW1pdChldmVudFR5cGU6IEV2ZW50VHlwZXMsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgdGhpcy5lbWl0dGVyJC5uZXh0KHsgZXZlbnRUeXBlLCBhcmdzIH0pXG4gIH1cblxufVxuIl19

      /***/

    },

    /***/
    "Gjsa":
    /*!*********************************************!*\
      !*** ./node_modules/ticky/ticky-browser.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function Gjsa(module, exports) {
      var si = typeof setImmediate === 'function',
          tick;

      if (si) {
        tick = function tick(fn) {
          setImmediate(fn);
        };
      } else {
        tick = function tick(fn) {
          setTimeout(fn, 0);
        };
      }

      module.exports = tick;
      /***/
    },

    /***/
    "IYw8":
    /*!*************************************!*\
      !*** ./src/app/apps/apps.module.ts ***!
      \*************************************/

    /*! exports provided: AppsModule */

    /***/
    function IYw8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsModule", function () {
        return AppsModule;
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-dragula */
      "9Ejp");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-material-file-input */
      "7ZcW");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _apps_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./apps-routing.module */
      "aWwC");
      /* harmony import */


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./chat/chat.component */
      "pWwN");
      /* harmony import */


      var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./drag-drop/drag-drop.component */
      "/yEv");
      /* harmony import */


      var _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./contact-grid/contact-grid.component */
      "ZOYJ");
      /* harmony import */


      var _support_support_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./support/support.component */
      "xK1z");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ng-pick-datetime */
      "z17N");

      var AppsModule = function AppsModule() {
        _classCallCheck(this, AppsModule);
      };

      AppsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppsModule
      });
      AppsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppsModule_Factory(t) {
          return new (t || AppsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _apps_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppsRoutingModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_8__["MaterialFileInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlNativeDateTimeModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppsModule, {
          declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"], _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_13__["DragDropComponent"], _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_14__["ContactGridComponent"], _support_support_component__WEBPACK_IMPORTED_MODULE_15__["SupportComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _apps_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppsRoutingModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_8__["MaterialFileInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlNativeDateTimeModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"], _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_13__["DragDropComponent"], _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_14__["ContactGridComponent"], _support_support_component__WEBPACK_IMPORTED_MODULE_15__["SupportComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _apps_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppsRoutingModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_8__["MaterialFileInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlNativeDateTimeModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"].forRoot()]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Ibf7":
    /*!*****************************************!*\
      !*** ./node_modules/contra/debounce.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function Ibf7(module, exports, __webpack_require__) {
      "use strict";

      var ticky = __webpack_require__(
      /*! ticky */
      "Gjsa");

      module.exports = function debounce(fn, args, ctx) {
        if (!fn) {
          return;
        }

        ticky(function run() {
          fn.apply(ctx || null, args || []);
        });
      };
      /***/

    },

    /***/
    "PzH3":
    /*!*************************************************!*\
      !*** ./node_modules/crossvent/src/crossvent.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function PzH3(module, exports, __webpack_require__) {
      "use strict";

      var customEvent = __webpack_require__(
      /*! custom-event */
      "bBst");

      var eventmap = __webpack_require__(
      /*! ./eventmap */
      "Ys8N");

      var doc = global.document;
      var addEvent = addEventEasy;
      var removeEvent = removeEventEasy;
      var hardCache = [];

      if (!global.addEventListener) {
        addEvent = addEventHard;
        removeEvent = removeEventHard;
      }

      module.exports = {
        add: addEvent,
        remove: removeEvent,
        fabricate: fabricateEvent
      };

      function addEventEasy(el, type, fn, capturing) {
        return el.addEventListener(type, fn, capturing);
      }

      function addEventHard(el, type, fn) {
        return el.attachEvent('on' + type, wrap(el, type, fn));
      }

      function removeEventEasy(el, type, fn, capturing) {
        return el.removeEventListener(type, fn, capturing);
      }

      function removeEventHard(el, type, fn) {
        var listener = unwrap(el, type, fn);

        if (listener) {
          return el.detachEvent('on' + type, listener);
        }
      }

      function fabricateEvent(el, type, model) {
        var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();

        if (el.dispatchEvent) {
          el.dispatchEvent(e);
        } else {
          el.fireEvent('on' + type, e);
        }

        function makeClassicEvent() {
          var e;

          if (doc.createEvent) {
            e = doc.createEvent('Event');
            e.initEvent(type, true, true);
          } else if (doc.createEventObject) {
            e = doc.createEventObject();
          }

          return e;
        }

        function makeCustomEvent() {
          return new customEvent(type, {
            detail: model
          });
        }
      }

      function wrapperFactory(el, type, fn) {
        return function wrapper(originalEvent) {
          var e = originalEvent || global.event;
          e.target = e.target || e.srcElement;

          e.preventDefault = e.preventDefault || function preventDefault() {
            e.returnValue = false;
          };

          e.stopPropagation = e.stopPropagation || function stopPropagation() {
            e.cancelBubble = true;
          };

          e.which = e.which || e.keyCode;
          fn.call(el, e);
        };
      }

      function wrap(el, type, fn) {
        var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
        hardCache.push({
          wrapper: wrapper,
          element: el,
          type: type,
          fn: fn
        });
        return wrapper;
      }

      function unwrap(el, type, fn) {
        var i = find(el, type, fn);

        if (i) {
          var wrapper = hardCache[i].wrapper;
          hardCache.splice(i, 1); // free up a tad of memory

          return wrapper;
        }
      }

      function find(el, type, fn) {
        var i, item;

        for (i = 0; i < hardCache.length; i++) {
          item = hardCache[i];

          if (item.element === el && item.type === type && item.fn === fn) {
            return i;
          }
        }
      }
      /***/

    },

    /***/
    "YS7c":
    /*!*****************************************!*\
      !*** ./node_modules/dragula/dragula.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function YS7c(module, exports, __webpack_require__) {
      "use strict";

      var emitter = __webpack_require__(
      /*! contra/emitter */
      "8/JR");

      var crossvent = __webpack_require__(
      /*! crossvent */
      "PzH3");

      var classes = __webpack_require__(
      /*! ./classes */
      "n6yW");

      var doc = document;
      var documentElement = doc.documentElement;

      function dragula(initialContainers, options) {
        var len = arguments.length;

        if (len === 1 && Array.isArray(initialContainers) === false) {
          options = initialContainers;
          initialContainers = [];
        }

        var _mirror; // mirror image


        var _source; // source container


        var _item; // item being dragged


        var _offsetX; // reference x


        var _offsetY; // reference y


        var _moveX; // reference move x


        var _moveY; // reference move y


        var _initialSibling; // reference sibling when grabbed


        var _currentSibling; // reference sibling now


        var _copy; // item used for copying


        var _renderTimer; // timer for setTimeout renderMirrorImage


        var _lastDropTarget = null; // last container item was over

        var _grabbed; // holds mousedown context until first mousemove


        var o = options || {};

        if (o.moves === void 0) {
          o.moves = always;
        }

        if (o.accepts === void 0) {
          o.accepts = always;
        }

        if (o.invalid === void 0) {
          o.invalid = invalidTarget;
        }

        if (o.containers === void 0) {
          o.containers = initialContainers || [];
        }

        if (o.isContainer === void 0) {
          o.isContainer = never;
        }

        if (o.copy === void 0) {
          o.copy = false;
        }

        if (o.copySortSource === void 0) {
          o.copySortSource = false;
        }

        if (o.revertOnSpill === void 0) {
          o.revertOnSpill = false;
        }

        if (o.removeOnSpill === void 0) {
          o.removeOnSpill = false;
        }

        if (o.direction === void 0) {
          o.direction = 'vertical';
        }

        if (o.ignoreInputTextSelection === void 0) {
          o.ignoreInputTextSelection = true;
        }

        if (o.mirrorContainer === void 0) {
          o.mirrorContainer = doc.body;
        }

        var drake = emitter({
          containers: o.containers,
          start: manualStart,
          end: end,
          cancel: cancel,
          remove: remove,
          destroy: destroy,
          canMove: canMove,
          dragging: false
        });

        if (o.removeOnSpill === true) {
          drake.on('over', spillOver).on('out', spillOut);
        }

        events();
        return drake;

        function isContainer(el) {
          return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
        }

        function events(remove) {
          var op = remove ? 'remove' : 'add';
          touchy(documentElement, op, 'mousedown', grab);
          touchy(documentElement, op, 'mouseup', release);
        }

        function eventualMovements(remove) {
          var op = remove ? 'remove' : 'add';
          touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
        }

        function movements(remove) {
          var op = remove ? 'remove' : 'add';
          crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8

          crossvent[op](documentElement, 'click', preventGrabbed);
        }

        function destroy() {
          events(true);
          release({});
        }

        function preventGrabbed(e) {
          if (_grabbed) {
            e.preventDefault();
          }
        }

        function grab(e) {
          _moveX = e.clientX;
          _moveY = e.clientY;
          var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;

          if (ignore) {
            return; // we only care about honest-to-god left clicks and touch events
          }

          var item = e.target;
          var context = canStart(item);

          if (!context) {
            return;
          }

          _grabbed = context;
          eventualMovements();

          if (e.type === 'mousedown') {
            if (isInput(item)) {
              // see also: https://github.com/bevacqua/dragula/issues/208
              item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
            } else {
              e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
            }
          }
        }

        function startBecauseMouseMoved(e) {
          if (!_grabbed) {
            return;
          }

          if (whichMouseButton(e) === 0) {
            release({});
            return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
          } // truthy check fixes #239, equality fixes #207, fixes #501


          if (e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0) && e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0)) {
            return;
          }

          if (o.ignoreInputTextSelection) {
            var clientX = getCoord('clientX', e) || 0;
            var clientY = getCoord('clientY', e) || 0;
            var elementBehindCursor = doc.elementFromPoint(clientX, clientY);

            if (isInput(elementBehindCursor)) {
              return;
            }
          }

          var grabbed = _grabbed; // call to end() unsets _grabbed

          eventualMovements(true);
          movements();
          end();
          start(grabbed);
          var offset = getOffset(_item);
          _offsetX = getCoord('pageX', e) - offset.left;
          _offsetY = getCoord('pageY', e) - offset.top;
          classes.add(_copy || _item, 'gu-transit');
          renderMirrorImage();
          drag(e);
        }

        function canStart(item) {
          if (drake.dragging && _mirror) {
            return;
          }

          if (isContainer(item)) {
            return; // don't drag container itself
          }

          var handle = item;

          while (getParent(item) && isContainer(getParent(item)) === false) {
            if (o.invalid(item, handle)) {
              return;
            }

            item = getParent(item); // drag target should be a top element

            if (!item) {
              return;
            }
          }

          var source = getParent(item);

          if (!source) {
            return;
          }

          if (o.invalid(item, handle)) {
            return;
          }

          var movable = o.moves(item, source, handle, nextEl(item));

          if (!movable) {
            return;
          }

          return {
            item: item,
            source: source
          };
        }

        function canMove(item) {
          return !!canStart(item);
        }

        function manualStart(item) {
          var context = canStart(item);

          if (context) {
            start(context);
          }
        }

        function start(context) {
          if (isCopy(context.item, context.source)) {
            _copy = context.item.cloneNode(true);
            drake.emit('cloned', _copy, context.item, 'copy');
          }

          _source = context.source;
          _item = context.item;
          _initialSibling = _currentSibling = nextEl(context.item);
          drake.dragging = true;
          drake.emit('drag', _item, _source);
        }

        function invalidTarget() {
          return false;
        }

        function end() {
          if (!drake.dragging) {
            return;
          }

          var item = _copy || _item;
          drop(item, getParent(item));
        }

        function ungrab() {
          _grabbed = false;
          eventualMovements(true);
          movements(true);
        }

        function release(e) {
          ungrab();

          if (!drake.dragging) {
            return;
          }

          var item = _copy || _item;
          var clientX = getCoord('clientX', e) || 0;
          var clientY = getCoord('clientY', e) || 0;
          var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
          var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);

          if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
            drop(item, dropTarget);
          } else if (o.removeOnSpill) {
            remove();
          } else {
            cancel();
          }
        }

        function drop(item, target) {
          var parent = getParent(item);

          if (_copy && o.copySortSource && target === _source) {
            parent.removeChild(_item);
          }

          if (isInitialPlacement(target)) {
            drake.emit('cancel', item, _source, _source);
          } else {
            drake.emit('drop', item, target, _source, _currentSibling);
          }

          cleanup();
        }

        function remove() {
          if (!drake.dragging) {
            return;
          }

          var item = _copy || _item;
          var parent = getParent(item);

          if (parent) {
            parent.removeChild(item);
          }

          drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
          cleanup();
        }

        function cancel(revert) {
          if (!drake.dragging) {
            return;
          }

          var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
          var item = _copy || _item;
          var parent = getParent(item);
          var initial = isInitialPlacement(parent);

          if (initial === false && reverts) {
            if (_copy) {
              if (parent) {
                parent.removeChild(_copy);
              }
            } else {
              _source.insertBefore(item, _initialSibling);
            }
          }

          if (initial || reverts) {
            drake.emit('cancel', item, _source, _source);
          } else {
            drake.emit('drop', item, parent, _source, _currentSibling);
          }

          cleanup();
        }

        function cleanup() {
          var item = _copy || _item;
          ungrab();
          removeMirrorImage();

          if (item) {
            classes.rm(item, 'gu-transit');
          }

          if (_renderTimer) {
            clearTimeout(_renderTimer);
          }

          drake.dragging = false;

          if (_lastDropTarget) {
            drake.emit('out', item, _lastDropTarget, _source);
          }

          drake.emit('dragend', item);
          _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
        }

        function isInitialPlacement(target, s) {
          var sibling;

          if (s !== void 0) {
            sibling = s;
          } else if (_mirror) {
            sibling = _currentSibling;
          } else {
            sibling = nextEl(_copy || _item);
          }

          return target === _source && sibling === _initialSibling;
        }

        function findDropTarget(elementBehindCursor, clientX, clientY) {
          var target = elementBehindCursor;

          while (target && !accepted()) {
            target = getParent(target);
          }

          return target;

          function accepted() {
            var droppable = isContainer(target);

            if (droppable === false) {
              return false;
            }

            var immediate = getImmediateChild(target, elementBehindCursor);
            var reference = getReference(target, immediate, clientX, clientY);
            var initial = isInitialPlacement(target, reference);

            if (initial) {
              return true; // should always be able to drop it right back where it was
            }

            return o.accepts(_item, target, _source, reference);
          }
        }

        function drag(e) {
          if (!_mirror) {
            return;
          }

          e.preventDefault();
          var clientX = getCoord('clientX', e) || 0;
          var clientY = getCoord('clientY', e) || 0;
          var x = clientX - _offsetX;
          var y = clientY - _offsetY;
          _mirror.style.left = x + 'px';
          _mirror.style.top = y + 'px';
          var item = _copy || _item;
          var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
          var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
          var changed = dropTarget !== null && dropTarget !== _lastDropTarget;

          if (changed || dropTarget === null) {
            out();
            _lastDropTarget = dropTarget;
            over();
          }

          var parent = getParent(item);

          if (dropTarget === _source && _copy && !o.copySortSource) {
            if (parent) {
              parent.removeChild(item);
            }

            return;
          }

          var reference;
          var immediate = getImmediateChild(dropTarget, elementBehindCursor);

          if (immediate !== null) {
            reference = getReference(dropTarget, immediate, clientX, clientY);
          } else if (o.revertOnSpill === true && !_copy) {
            reference = _initialSibling;
            dropTarget = _source;
          } else {
            if (_copy && parent) {
              parent.removeChild(item);
            }

            return;
          }

          if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
            _currentSibling = reference;
            dropTarget.insertBefore(item, reference);
            drake.emit('shadow', item, dropTarget, _source);
          }

          function moved(type) {
            drake.emit(type, item, _lastDropTarget, _source);
          }

          function over() {
            if (changed) {
              moved('over');
            }
          }

          function out() {
            if (_lastDropTarget) {
              moved('out');
            }
          }
        }

        function spillOver(el) {
          classes.rm(el, 'gu-hide');
        }

        function spillOut(el) {
          if (drake.dragging) {
            classes.add(el, 'gu-hide');
          }
        }

        function renderMirrorImage() {
          if (_mirror) {
            return;
          }

          var rect = _item.getBoundingClientRect();

          _mirror = _item.cloneNode(true);
          _mirror.style.width = getRectWidth(rect) + 'px';
          _mirror.style.height = getRectHeight(rect) + 'px';
          classes.rm(_mirror, 'gu-transit');
          classes.add(_mirror, 'gu-mirror');
          o.mirrorContainer.appendChild(_mirror);
          touchy(documentElement, 'add', 'mousemove', drag);
          classes.add(o.mirrorContainer, 'gu-unselectable');
          drake.emit('cloned', _mirror, _item, 'mirror');
        }

        function removeMirrorImage() {
          if (_mirror) {
            classes.rm(o.mirrorContainer, 'gu-unselectable');
            touchy(documentElement, 'remove', 'mousemove', drag);
            getParent(_mirror).removeChild(_mirror);
            _mirror = null;
          }
        }

        function getImmediateChild(dropTarget, target) {
          var immediate = target;

          while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
            immediate = getParent(immediate);
          }

          if (immediate === documentElement) {
            return null;
          }

          return immediate;
        }

        function getReference(dropTarget, target, x, y) {
          var horizontal = o.direction === 'horizontal';
          var reference = target !== dropTarget ? inside() : outside();
          return reference;

          function outside() {
            // slower, but able to figure out any position
            var len = dropTarget.children.length;
            var i;
            var el;
            var rect;

            for (i = 0; i < len; i++) {
              el = dropTarget.children[i];
              rect = el.getBoundingClientRect();

              if (horizontal && rect.left + rect.width / 2 > x) {
                return el;
              }

              if (!horizontal && rect.top + rect.height / 2 > y) {
                return el;
              }
            }

            return null;
          }

          function inside() {
            // faster, but only available if dropped inside a child element
            var rect = target.getBoundingClientRect();

            if (horizontal) {
              return resolve(x > rect.left + getRectWidth(rect) / 2);
            }

            return resolve(y > rect.top + getRectHeight(rect) / 2);
          }

          function resolve(after) {
            return after ? nextEl(target) : target;
          }
        }

        function isCopy(item, container) {
          return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
        }
      }

      function touchy(el, op, type, fn) {
        var touch = {
          mouseup: 'touchend',
          mousedown: 'touchstart',
          mousemove: 'touchmove'
        };
        var pointers = {
          mouseup: 'pointerup',
          mousedown: 'pointerdown',
          mousemove: 'pointermove'
        };
        var microsoft = {
          mouseup: 'MSPointerUp',
          mousedown: 'MSPointerDown',
          mousemove: 'MSPointerMove'
        };

        if (global.navigator.pointerEnabled) {
          crossvent[op](el, pointers[type], fn);
        } else if (global.navigator.msPointerEnabled) {
          crossvent[op](el, microsoft[type], fn);
        } else {
          crossvent[op](el, touch[type], fn);
          crossvent[op](el, type, fn);
        }
      }

      function whichMouseButton(e) {
        if (e.touches !== void 0) {
          return e.touches.length;
        }

        if (e.which !== void 0 && e.which !== 0) {
          return e.which;
        } // see https://github.com/bevacqua/dragula/issues/261


        if (e.buttons !== void 0) {
          return e.buttons;
        }

        var button = e.button;

        if (button !== void 0) {
          // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
          return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
        }
      }

      function getOffset(el) {
        var rect = el.getBoundingClientRect();
        return {
          left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
          top: rect.top + getScroll('scrollTop', 'pageYOffset')
        };
      }

      function getScroll(scrollProp, offsetProp) {
        if (typeof global[offsetProp] !== 'undefined') {
          return global[offsetProp];
        }

        if (documentElement.clientHeight) {
          return documentElement[scrollProp];
        }

        return doc.body[scrollProp];
      }

      function getElementBehindPoint(point, x, y) {
        point = point || {};
        var state = point.className || '';
        var el;
        point.className += ' gu-hide';
        el = doc.elementFromPoint(x, y);
        point.className = state;
        return el;
      }

      function never() {
        return false;
      }

      function always() {
        return true;
      }

      function getRectWidth(rect) {
        return rect.width || rect.right - rect.left;
      }

      function getRectHeight(rect) {
        return rect.height || rect.bottom - rect.top;
      }

      function getParent(el) {
        return el.parentNode === doc ? null : el.parentNode;
      }

      function isInput(el) {
        return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
      }

      function isEditable(el) {
        if (!el) {
          return false;
        } // no parents were editable


        if (el.contentEditable === 'false') {
          return false;
        } // stop the lookup


        if (el.contentEditable === 'true') {
          return true;
        } // found a contentEditable element in the chain


        return isEditable(getParent(el)); // contentEditable is set to 'inherit'
      }

      function nextEl(el) {
        return el.nextElementSibling || manually();

        function manually() {
          var sibling = el;

          do {
            sibling = sibling.nextSibling;
          } while (sibling && sibling.nodeType !== 1);

          return sibling;
        }
      }

      function getEventHost(e) {
        // on touchend event, we have to use `e.changedTouches`
        // see http://stackoverflow.com/questions/7192563/touchend-event-properties
        // see https://github.com/bevacqua/dragula/issues/34
        if (e.targetTouches && e.targetTouches.length) {
          return e.targetTouches[0];
        }

        if (e.changedTouches && e.changedTouches.length) {
          return e.changedTouches[0];
        }

        return e;
      }

      function getCoord(coord, e) {
        var host = getEventHost(e);
        var missMap = {
          pageX: 'clientX',
          // IE8
          pageY: 'clientY' // IE8

        };

        if (coord in missMap && !(coord in host) && missMap[coord] in host) {
          coord = missMap[coord];
        }

        return host[coord];
      }

      module.exports = dragula;
      /***/
    },

    /***/
    "Ys8N":
    /*!************************************************!*\
      !*** ./node_modules/crossvent/src/eventmap.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function Ys8N(module, exports, __webpack_require__) {
      "use strict";

      var eventmap = [];
      var eventname = '';
      var ron = /^on/;

      for (eventname in global) {
        if (ron.test(eventname)) {
          eventmap.push(eventname.slice(2));
        }
      }

      module.exports = eventmap;
      /***/
    },

    /***/
    "ZOYJ":
    /*!*************************************************************!*\
      !*** ./src/app/apps/contact-grid/contact-grid.component.ts ***!
      \*************************************************************/

    /*! exports provided: ContactGridComponent */

    /***/
    function ZOYJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactGridComponent", function () {
        return ContactGridComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ContactGridComponent = /*#__PURE__*/function () {
        function ContactGridComponent() {
          _classCallCheck(this, ContactGridComponent);
        }

        _createClass(ContactGridComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactGridComponent;
      }();

      ContactGridComponent.ɵfac = function ContactGridComponent_Factory(t) {
        return new (t || ContactGridComponent)();
      };

      ContactGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactGridComponent,
        selectors: [["app-contact-grid"]],
        decls: 294,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["href", "#", "onClick", "return false;"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "card"], [1, "header"], [1, "col-xs-12", "col-sm-6"], [1, "body"], [1, "col-md-4"], [1, "card", "border-apply"], [1, "m-b-20"], [1, "contact-grid"], [1, "profile-header", "l-bg-purple-dark"], [1, "user-name"], [1, "name-center"], ["src", "assets/images/user/usrbig1.jpg", "alt", "", 1, "user-img"], [1, "phone"], [1, "material-icons"], [1, "profile-userbuttons"], ["mat-flat-button", "", "color", "primary"], [1, "profile-header", "bg-cyan"], ["src", "assets/images/user/usrbig2.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-dark"], ["src", "assets/images/user/usrbig3.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "l-bg-orange"], ["src", "assets/images/user/usrbig4.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-green"], ["src", "assets/images/user/usrbig5.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "l-bg-red"], ["src", "assets/images/user/usrbig6.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-indigo"], ["src", "assets/images/user/usrbig7.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-brown"], ["src", "assets/images/user/usrbig8.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-amber"], ["src", "assets/images/user/usrbig9.jpg", "alt", "", 1, "user-img"]],
        template: function ContactGridComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Apps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact Grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact Grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Pooja Patel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "General Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " A-103, shyam gokul flats, Mahatma Road ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Mumbai ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Smita Patil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Housekeeper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " 45, Krishna Tower, Near Bus Stop, Satellite, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Ahmedabad ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "John Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Cook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " 456, Estern evenue, Courtage area, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Pooja Patel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "General Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " A-103, shyam gokul flats, Mahatma Road ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Mumbai ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Smita Patil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Housekeeper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " 45, Krishna Tower, Near Bus Stop, Satellite, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Ahmedabad ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "John Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Cook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " 456, Estern evenue, Courtage area, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Pooja Patel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "General Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " A-103, shyam gokul flats, Mahatma Road ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Mumbai ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Smita Patil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Housekeeper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " 45, Krishna Tower, Near Bus Stop, Satellite, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Ahmedabad ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "John Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Cook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " 456, Estern evenue, Courtage area, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Pooja Patel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "General Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " A-103, shyam gokul flats, Mahatma Road ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Mumbai ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Smita Patil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Housekeeper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " 45, Krishna Tower, Near Bus Stop, Satellite, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Ahmedabad ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "John Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Cook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, " 456, Estern evenue, Courtage area, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Read More");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvY29udGFjdC1ncmlkL2NvbnRhY3QtZ3JpZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactGridComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact-grid',
            templateUrl: './contact-grid.component.html',
            styleUrls: ['./contact-grid.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "aWwC":
    /*!*********************************************!*\
      !*** ./src/app/apps/apps-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: AppsRoutingModule */

    /***/
    function aWwC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsRoutingModule", function () {
        return AppsRoutingModule;
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


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chat/chat.component */
      "pWwN");
      /* harmony import */


      var _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contact-grid/contact-grid.component */
      "ZOYJ");
      /* harmony import */


      var _support_support_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./support/support.component */
      "xK1z");
      /* harmony import */


      var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./drag-drop/drag-drop.component */
      "/yEv");

      var routes = [{
        path: 'chat',
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]
      }, {
        path: 'contact-grid',
        component: _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_3__["ContactGridComponent"]
      }, {
        path: 'support',
        component: _support_support_component__WEBPACK_IMPORTED_MODULE_4__["SupportComponent"]
      }, {
        path: 'dragdrop',
        component: _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_5__["DragDropComponent"]
      }];

      var AppsRoutingModule = function AppsRoutingModule() {
        _classCallCheck(this, AppsRoutingModule);
      };

      AppsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppsRoutingModule
      });
      AppsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppsRoutingModule_Factory(t) {
          return new (t || AppsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsRoutingModule, [{
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
    "bBst":
    /*!********************************************!*\
      !*** ./node_modules/custom-event/index.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function bBst(module, exports) {
      var NativeCustomEvent = global.CustomEvent;

      function useNative() {
        try {
          var p = new NativeCustomEvent('cat', {
            detail: {
              foo: 'bar'
            }
          });
          return 'cat' === p.type && 'bar' === p.detail.foo;
        } catch (e) {}

        return false;
      }
      /**
       * Cross-browser `CustomEvent` constructor.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
       *
       * @public
       */


      module.exports = useNative() ? NativeCustomEvent : // IE >= 9
      'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent(type, params) {
        var e = document.createEvent('CustomEvent');

        if (params) {
          e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
        } else {
          e.initCustomEvent(type, false, false, void 0);
        }

        return e;
      } : // IE <= 8
      function CustomEvent(type, params) {
        var e = document.createEventObject();
        e.type = type;

        if (params) {
          e.bubbles = Boolean(params.bubbles);
          e.cancelable = Boolean(params.cancelable);
          e.detail = params.detail;
        } else {
          e.bubbles = false;
          e.cancelable = false;
          e.detail = void 0;
        }

        return e;
      };
      /***/
    },

    /***/
    "n6yW":
    /*!*****************************************!*\
      !*** ./node_modules/dragula/classes.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function n6yW(module, exports, __webpack_require__) {
      "use strict";

      var cache = {};
      var start = '(?:^|\\s)';
      var end = '(?:\\s|$)';

      function lookupClass(className) {
        var cached = cache[className];

        if (cached) {
          cached.lastIndex = 0;
        } else {
          cache[className] = cached = new RegExp(start + className + end, 'g');
        }

        return cached;
      }

      function addClass(el, className) {
        var current = el.className;

        if (!current.length) {
          el.className = className;
        } else if (!lookupClass(className).test(current)) {
          el.className += ' ' + className;
        }
      }

      function rmClass(el, className) {
        el.className = el.className.replace(lookupClass(className), ' ').trim();
      }

      module.exports = {
        add: addClass,
        rm: rmClass
      };
      /***/
    },

    /***/
    "pWwN":
    /*!*********************************************!*\
      !*** ./src/app/apps/chat/chat.component.ts ***!
      \*********************************************/

    /*! exports provided: ChatComponent */

    /***/
    function pWwN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
        return ChatComponent;
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


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ChatComponent = function ChatComponent() {
        _classCallCheck(this, ChatComponent);

        this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
      };

      ChatComponent.ɵfac = function ChatComponent_Factory(t) {
        return new (t || ChatComponent)();
      };

      ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatComponent,
        selectors: [["app-chat"]],
        decls: 198,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["href", "#", "onClick", "return false;"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], [1, "breadcrumb-item", "active"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [1, "card"], [1, "body"], ["id", "plist", 1, "people-list"], [1, "form-line", "m-b-15"], ["type", "text", "placeholder", "Search...", 1, "form-control"], [1, "tab-content"], ["id", "chat_user", 2, "position", "relative", "max-height", "590px", 3, "perfectScrollbar"], [1, "chat-list", "list-unstyled", "m-b-0"], [1, "clearfix", "active"], ["src", "assets/images/user/user1.jpg", "alt", "avatar"], [1, "about"], [1, "name"], [1, "status"], [1, "material-icons", "offline"], [1, "clearfix"], ["src", "assets/images/user/user2.jpg", "alt", "avatar"], ["src", "assets/images/user/user3.jpg", "alt", "avatar"], [1, "material-icons", "online"], ["src", "assets/images/user/user4.jpg", "alt", "avatar"], ["src", "assets/images/user/user5.jpg", "alt", "avatar"], ["src", "assets/images/user/user6.jpg", "alt", "avatar"], ["src", "assets/images/user/user7.jpg", "alt", "avatar"], ["src", "assets/images/user/user8.jpg", "alt", "avatar"], ["src", "assets/images/user/user9.jpg", "alt", "avatar"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "chat"], [1, "chat-header", "clearfix"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages"], ["id", "chat-conversation", 1, "chat-history", 2, "position", "relative", "max-height", "449px", 3, "perfectScrollbar"], [1, "message-data", "text-right"], [1, "message-data-time"], [1, "message-data-name"], [1, "message", "other-message", "float-right"], [1, "message-data"], [1, "message", "my-message"], [1, "chat-message", "clearfix"], [1, "form-group"], [1, "form-line"], [1, "example-full-width"], ["matInput", "", "placeholder", "Enter text here.."], [1, "chat-upload"], ["mat-mini-fab", "", 1, "bg-deep-orange", "mr-2"], [1, "material-icons"], ["mat-mini-fab", "", 1, "bg-deep-orange"]],
        template: function ChatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Apps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "William Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " left 7 mins ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Martha Williams");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Joseph Clark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Nancy Taylor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Margaret Wilson");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Joseph Jones");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " left 30 mins ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Jane Brown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " left 10 hours ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Eliza Johnson");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Mike Clark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Ann Henry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Nancy Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "David Wilson");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " offline since Oct 28 ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Maria Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "2 new messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "10:10 AM, Today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Maria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Hi Robert , how are you? How is your work going on? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Robert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "10:12 AM, Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Its good. We completed almost all task assign by our manager.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Robert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "10:12 AM, Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "How are you feel today? What's about vacation?.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "10:10 AM, Today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Maria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " I am good, We think for next weekend. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-form-field", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "button", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "i", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "button", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "i", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "insert_emoticon");

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
        directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "xK1z":
    /*!***************************************************!*\
      !*** ./src/app/apps/support/support.component.ts ***!
      \***************************************************/

    /*! exports provided: SupportComponent */

    /***/
    function xK1z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportComponent", function () {
        return SupportComponent;
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


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function SupportComponent_th_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " # ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_74_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupportComponent_td_74_Template_mat_checkbox_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var element_r20 = ctx.$implicit;
            return element_r20.checked = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", element_r20.checked);
        }
      }

      function SupportComponent_th_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", element_r23.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function SupportComponent_th_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Opened By ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.name, " ");
        }
      }

      function SupportComponent_th_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.email, " ");
        }
      }

      function SupportComponent_th_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subject ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r26.subject, " ");
        }
      }

      function SupportComponent_th_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.status, "");
        }
      }

      function SupportComponent_th_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Assign To ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r28.assignTo, " ");
        }
      }

      function SupportComponent_th_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.date, " ");
        }
      }

      function SupportComponent_th_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_tr_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 61);
        }
      }

      function SupportComponent_tr_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 62);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var ELEMENT_DATA = [{
        checked: false,
        imageUrl: 'assets/images/user/user1.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user2.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user3.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user4.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user5.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user6.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user7.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user8.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'pending',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user9.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user10.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user1.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user2.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user3.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'pending',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user4.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user5.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user6.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'pending',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user7.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user8.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }];

      var SupportComponent = /*#__PURE__*/function () {
        function SupportComponent() {
          _classCallCheck(this, SupportComponent);

          this.displayedColumns = ['checked', 'imageUrl', 'name', 'email', 'subject', 'status', 'assignTo', 'date', 'action'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        }

        _createClass(SupportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataSource.paginator = this.paginator;
          }
        }]);

        return SupportComponent;
      }();

      SupportComponent.ɵfac = function SupportComponent_Factory(t) {
        return new (t || SupportComponent)();
      };

      SupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SupportComponent,
        selectors: [["app-support"]],
        viewQuery: function SupportComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 102,
        vars: 6,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["href", "#", "onClick", "return false;"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "col-lg-3", "col-sm-6"], [1, "info-box7", "bg-c-blue", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-20"], [1, "text-right"], [1, "fas", "fa-ticket-alt", "pull-left"], [1, "m-b-0"], [1, "info-box7", "bg-c-green", "order-info-box7"], [1, "fas", "fa-reply", "pull-left"], [1, "info-box7", "bg-c-yellow", "order-info-box7"], [1, "fas", "fa-clipboard-check", "pull-left"], [1, "info-box7", "bg-c-pink", "order-info-box7"], [1, "fas", "fa-clipboard-list", "pull-left"], [1, "table-responsive"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "checked"], ["mat-header-cell", "", "width", "10%", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "imageUrl"], ["mat-header-cell", "", "width", "8%", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "email"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "subject"], ["matColumnDef", "status"], ["matColumnDef", "assignTo"], ["matColumnDef", "date"], ["matColumnDef", "action"], ["mat-header-cell", "", "width", "15%", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "width", "10%"], ["mat-cell", ""], [3, "ngModel", "ngModelChange"], ["mat-header-cell", "", "width", "8%"], ["mat-cell", "", 1, "table-img"], [3, "src"], ["mat-header-cell", ""], [1, "badge"], ["mat-header-cell", "", "width", "15%"], ["mat-icon-button", "", 1, "btn-tbl-edit"], ["mat-icon-button", "", 1, "btn-tbl-delete"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function SupportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Apps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Support Tickets ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Total Tickets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "1,276");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "18% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "865");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "21% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Resolve");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "457");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "37% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "239");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "10% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "table", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](72, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, SupportComponent_th_73_Template, 2, 0, "th", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, SupportComponent_td_74_Template, 2, 1, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](75, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, SupportComponent_th_76_Template, 2, 0, "th", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, SupportComponent_td_77_Template, 2, 1, "td", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](78, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, SupportComponent_th_79_Template, 2, 0, "th", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, SupportComponent_td_80_Template, 2, 1, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](81, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, SupportComponent_th_82_Template, 2, 0, "th", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, SupportComponent_td_83_Template, 2, 1, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](84, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, SupportComponent_th_85_Template, 2, 0, "th", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, SupportComponent_td_86_Template, 2, 1, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](87, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, SupportComponent_th_88_Template, 2, 0, "th", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, SupportComponent_td_89_Template, 3, 1, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](90, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, SupportComponent_th_91_Template, 2, 0, "th", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, SupportComponent_td_92_Template, 2, 1, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](93, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, SupportComponent_th_94_Template, 2, 0, "th", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, SupportComponent_td_95_Template, 2, 1, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](96, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, SupportComponent_th_97_Template, 2, 0, "th", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, SupportComponent_td_98_Template, 7, 0, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, SupportComponent_tr_99_Template, 1, 0, "tr", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, SupportComponent_tr_100_Template, 1, 0, "tr", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "mat-paginator", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-support',
            templateUrl: './support.component.html',
            styleUrls: ['./support.component.scss']
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

    }
  }]);
})();
//# sourceMappingURL=apps-apps-module-es5.js.map