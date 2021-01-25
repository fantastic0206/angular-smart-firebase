(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Lhg":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config.service */ "Cxl7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/auth.service */ "KDUW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ "ld2u");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














const document = window.document;
class HeaderComponent {
    constructor(document, renderer, elementRef, dataService, configService, authService, router) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataService = dataService;
        this.configService = configService;
        this.authService = authService;
        this.router = router;
        this.config = {};
        this.isNavbarCollapsed = true;
    }
    // notifications: any[] = [
    //   {
    //     userImg: 'assets/images/user/user1.jpg',
    //     userName: 'Sarah Smith',
    //     time: '14 mins ago',
    //     message: 'Please check your mail',
    //   },
    //   {
    //     userImg: 'assets/images/user/user2.jpg',
    //     userName: 'Airi Satou',
    //     time: '22 mins ago',
    //     message: 'Work Completed !!!',
    //   },
    //   {
    //     userImg: 'assets/images/user/user3.jpg',
    //     userName: 'John Doe',
    //     time: '3 hours ago',
    //     message: 'kindly help me for code.',
    //   },
    //   {
    //     userImg: 'assets/images/user/user4.jpg',
    //     userName: 'Ashton Cox',
    //     time: '5 hours ago',
    //     message: 'Lets break for lunch...',
    //   },
    //   {
    //     userImg: 'assets/images/user/user5.jpg',
    //     userName: 'Sarah Smith',
    //     time: '14 mins ago',
    //     message: 'Please check your mail',
    //   },
    //   {
    //     userImg: 'assets/images/user/user6.jpg',
    //     userName: 'Airi Satou',
    //     time: '22 mins ago',
    //     message: 'Work Completed !!!',
    //   },
    //   {
    //     userImg: 'assets/images/user/user7.jpg',
    //     userName: 'John Doe',
    //     time: '3 hours ago',
    //     message: 'kindly help me for code.',
    //   },
    // ];
    ngOnInit() {
        this.config = this.configService.configData;
        // const userRole = this.authService.currentUserValue.role;
        // this.userImg = this.authService.currentUserValue.img;
        this.userEmail = this.authService.currentUserValue['email'];
        // if (userRole === Role.Admin) {
        //   this.homePage = 'admin/dashboard/main';
        // } else if (userRole === Role.Teacher) {
        //   this.homePage = 'teacher/dashboard';
        // } else if (userRole === Role.Student) {
        //   this.homePage = 'student/dashboard';
        // } else {
        //   this.homePage = 'admin/dashboard/main';
        // }
    }
    ngAfterViewInit() {
        // set theme on startup
        if (localStorage.getItem('theme')) {
            this.renderer.removeClass(this.document.body, this.config.layout.variant);
            this.renderer.addClass(this.document.body, localStorage.getItem('theme'));
        }
        else {
            this.renderer.addClass(this.document.body, this.config.layout.variant);
        }
        if (localStorage.getItem('menuOption')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('menuOption'));
        }
        else {
            this.renderer.addClass(this.document.body, 'menu_' + this.config.layout.sidebar.backgroundColor);
        }
        if (localStorage.getItem('choose_logoheader')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('choose_logoheader'));
        }
        else {
            this.renderer.addClass(this.document.body, 'logo-' + this.config.layout.logo_bg_color);
        }
        if (localStorage.getItem('sidebar_status')) {
            if (localStorage.getItem('sidebar_status') === 'close') {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
            else {
                this.renderer.removeClass(this.document.body, 'side-closed');
                this.renderer.removeClass(this.document.body, 'submenu-closed');
            }
        }
        else {
            if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
        }
    }
    callFullscreen() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    mobileMenuSidebarOpen(event, className) {
        const hasClass = event.target.classList.contains(className);
        if (hasClass) {
            this.renderer.removeClass(this.document.body, className);
        }
        else {
            this.renderer.addClass(this.document.body, className);
        }
    }
    callSidemenuCollapse() {
        const hasClass = this.document.body.classList.contains('side-closed');
        if (hasClass) {
            this.renderer.removeClass(this.document.body, 'side-closed');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
        else {
            this.renderer.addClass(this.document.body, 'side-closed');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    }
    toggleRightSidebar() {
        this.dataService.changeMsg((this.dataService.currentStatus._isScalar = !this.dataService
            .currentStatus._isScalar));
    }
    userProfile() {
        console.log("anc");
        this.router.navigate(['user-profile-two']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_5__["RightSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_config_config_service__WEBPACK_IMPORTED_MODULE_0__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 33, vars: 3, consts: [[1, "navbar", "active", 2, "background", "#1a202e"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header", 2, "background-color", "#1a202e", "border-right", "unset"], ["href", "#", "onClick", "return false;", "aria-expanded", "false", 1, "navbar-toggle", "collapsed", 3, "click"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "nav", "navbar-nav", "navbar-right"], ["ngbDropdown", "", 1, "nav-item", "user_profile"], ["href", "#", "onClick", "return false;", "ngbDropdownToggle", "", "role", "button", 1, "nav-notification-icons", "pt-0"], ["src", "assets/images/user.png", "width", "32", "height", "32", "alt", "User", 1, "rounded-circle"], [2, "padding-left", "3px", "cursor", "pointer", "color", "white"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "pullDown"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "300px", 3, "perfectScrollbar"], [1, "menu"], [1, "body"], [1, "user_dw_menu"], ["href", "#", "onClick", "return false;"], ["aria-hidden", "false", 1, "mr-2"], ["href", "#", 3, "click"], ["href", "javascript:void(0);", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.isNavbarCollapsed = !ctx.isNavbarCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener($event) { return ctx.mobileMenuSidebarOpen($event, "overlay-open"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "note");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Role: Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_24_listener() { return ctx.userProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "User Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_29_listener() { return ctx.authService.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.userEmail.slice(0, 2), "...", ctx.userEmail.slice(-12), "");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapse"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownMenu"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.sass'],
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_5__["RightSidebarService"] }, { type: _config_config_service__WEBPACK_IMPORTED_MODULE_0__["ConfigService"] }, { type: src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\angular-dashboard-theme\src\main.ts */"zUnb");


/***/ }),

/***/ "0HZm":
/*!*************************************!*\
  !*** ./src/app/core/models/role.ts ***!
  \*************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["All"] = "All";
    Role["Admin"] = "Admin";
    Role["Teacher"] = "Teacher";
    Role["Student"] = "Student";
})(Role || (Role = {}));


/***/ }),

/***/ "21P8":
/*!*************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.ts ***!
  \*************************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class Page404Component {
    constructor() { }
    ngOnInit() { }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 21, vars: 0, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-04.png)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "error-header", "p-b-45"], [1, "error-subheader", "p-b-5"], [1, "error-subheader2", "p-b-5"], [1, "container-auth-form-btn", "mt-5"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["routerLink", "/authentication/signin", 1, "txt1"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Looks Like You're Lost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " The Page You Are Looking For Not Available! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Go To Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Need Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page404',
                templateUrl: './page404.component.html',
                styleUrls: ['./page404.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3IAN":
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "KDUW");
// import { Injectable } from '@angular/core';
// import {
//   Router,
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
// } from '@angular/router';
// import { AuthService } from '../service/auth.service';
// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     if (this.authService.currentUserValue) {
//       const userRole = this.authService.currentUserValue.role;
//       if (route.data.role && route.data.role.indexOf(userRole) === -1) {
//         this.router.navigate(['/authentication/signin']);
//         return false;
//       }
//       return true;
//     }
//     this.router.navigate(['/authentication/signin']);
//     return false;
//   }
// }






class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['authentication/signin']);
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "4veq":
/*!*************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
  \*************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    {
        path: '',
        title: '-- Main',
        moduleName: '',
        iconType: '',
        icon: '',
        class: '',
        groupTitle: true,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },
    // Admin Modules
    {
        path: '',
        title: 'Home',
        moduleName: 'dashboard',
        iconType: 'material-icons-two-tone',
        icon: 'home',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/admin/dashboard/main',
                title: 'Dashboard 1',
                moduleName: 'dashboard',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/dashboard/dashboard2',
                title: 'Dashboard 2',
                moduleName: 'dashboard',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/dashboard/teacher-dashboard',
                title: 'Teacher Dashboard',
                moduleName: 'teacher-dashboard',
                iconType: 'material-icons-two-tone',
                icon: '',
                class: '',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/dashboard/student-dashboard',
                title: 'Student Dashboard',
                moduleName: 'student-dashboard',
                iconType: 'material-icons-two-tone',
                icon: '',
                class: '',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Teachers',
        moduleName: 'teachers',
        iconType: 'material-icons-two-tone',
        icon: 'person',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/admin/teachers/all-teachers',
                title: 'All Teachers',
                moduleName: 'teachers',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/teachers/add-teacher',
                title: 'Add Teacher',
                moduleName: 'teachers',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/teachers/edit-teacher',
                title: 'Edit Teacher',
                moduleName: 'teachers',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/teachers/about-teacher',
                title: 'About Teacher',
                moduleName: 'teachers',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Students',
        moduleName: 'students',
        iconType: 'material-icons-two-tone',
        icon: 'people_alt',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/admin/students/all-students',
                title: 'All Students',
                moduleName: 'students',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/students/add-student',
                title: 'Add Students',
                moduleName: 'students',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/students/edit-student',
                title: 'Edit Students',
                moduleName: 'students',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/students/about-student',
                title: 'About Students',
                moduleName: 'students',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Courses',
        moduleName: 'courses',
        iconType: 'material-icons-two-tone',
        icon: 'school',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/admin/courses/all-courses',
                title: 'All Courses',
                moduleName: 'courses',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/courses/add-course',
                title: 'Add Courses',
                moduleName: 'courses',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/courses/edit-course',
                title: 'Edit Courses',
                moduleName: 'courses',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/courses/about-course',
                title: 'About Courses',
                moduleName: 'courses',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Library',
        moduleName: 'library',
        iconType: 'material-icons-two-tone',
        icon: 'local_library',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/admin/library/all-assets',
                title: 'All Library Assets',
                moduleName: 'library',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/library/add-asset',
                title: 'Add Library Assets',
                moduleName: 'library',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/library/edit-asset',
                title: 'Edit Library Assets',
                moduleName: 'library',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Departments',
        moduleName: 'departments',
        iconType: 'material-icons-two-tone',
        icon: 'business',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/admin/departments/all-departments',
                title: 'All Departments',
                moduleName: 'departments',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/departments/add-department',
                title: 'Add Department',
                moduleName: 'departments',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/departments/edit-department',
                title: 'Edit Department',
                moduleName: 'departments',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Staff',
        moduleName: 'staff',
        iconType: 'material-icons-two-tone',
        icon: 'face',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/admin/staff/all-staff',
                title: 'All Staff',
                moduleName: 'staff',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/staff/add-staff',
                title: 'Add Staff',
                moduleName: 'staff',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/staff/edit-staff',
                title: 'Edit Staff',
                moduleName: 'staff',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/staff/about-staff',
                title: 'About Staff',
                moduleName: 'staff',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Holiday',
        moduleName: 'holidays',
        iconType: 'material-icons-two-tone',
        icon: 'airline_seat_individual_suite',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/admin/holidays/all-holidays',
                title: 'All Holiday',
                moduleName: 'holidays',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/holidays/add-holiday',
                title: 'Add Holiday',
                moduleName: 'holidays',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/holidays/edit-holiday',
                title: 'Edit Holiday',
                moduleName: 'holidays',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Fees',
        moduleName: 'fees',
        iconType: 'material-icons-two-tone',
        icon: 'monetization_on',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/admin/fees/all-fees',
                title: 'All Fees',
                moduleName: 'fees',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/fees/add-fees',
                title: 'Add Fees',
                moduleName: 'fees',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/fees/edit-fees',
                title: 'Edit Fees',
                moduleName: 'fees',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/admin/fees/fee-receipt',
                title: 'Fees Receipt',
                moduleName: 'fees',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    // Teacher Modules
    {
        path: '/teacher/dashboard',
        title: 'Dashboard',
        moduleName: 'dashboard',
        iconType: 'material-icons-two-tone',
        icon: 'home',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Teacher'],
        submenu: [],
    },
    {
        path: '/teacher/lectures',
        title: 'Lectures',
        moduleName: 'lectures',
        iconType: 'material-icons-two-tone',
        icon: 'menu_book',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Teacher'],
        submenu: [],
    },
    {
        path: '/teacher/leave-request',
        title: 'Leave Request',
        moduleName: 'leave-request',
        iconType: 'material-icons-two-tone',
        icon: 'offline_pin',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Teacher'],
        submenu: [],
    },
    {
        path: '/teacher/exam-schedule',
        title: 'Exam Schedule',
        moduleName: 'exam-schedule',
        iconType: 'material-icons-two-tone',
        icon: 'history_edu',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Teacher'],
        submenu: [],
    },
    {
        path: '/teacher/settings',
        title: 'Settings',
        moduleName: 'settings',
        iconType: 'material-icons-two-tone',
        icon: 'settings',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Teacher'],
        submenu: [],
    },
    // Student Modules
    {
        path: '/student/dashboard',
        title: 'Dashboard',
        moduleName: 'dashboard',
        iconType: 'material-icons-two-tone',
        icon: 'home',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Student'],
        submenu: [],
    },
    {
        path: '/student/homework',
        title: 'Homework',
        moduleName: 'homework',
        iconType: 'material-icons-two-tone',
        icon: 'article',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Student'],
        submenu: [],
    },
    {
        path: '/student/leave-request',
        title: 'Leave Request',
        moduleName: 'leave-request',
        iconType: 'material-icons-two-tone',
        icon: 'offline_pin',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Student'],
        submenu: [],
    },
    {
        path: '/student/timetable',
        title: 'Time Table',
        moduleName: 'timetable',
        iconType: 'material-icons-two-tone',
        icon: 'table_chart',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Student'],
        submenu: [],
    },
    {
        path: '/student/settings',
        title: 'Settings',
        moduleName: 'settings',
        iconType: 'material-icons-two-tone',
        icon: 'settings',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Student'],
        submenu: [],
    },
    // Common Module
    {
        path: '',
        title: '-- Apps',
        moduleName: '',
        iconType: '',
        icon: '',
        class: '',
        groupTitle: true,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },
    {
        path: 'dashboard',
        title: 'Dashboard',
        moduleName: 'dashboard',
        iconType: 'material-icons-two-tone',
        icon: 'dashboard',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },
    {
        path: 'accounts',
        title: 'Accounts',
        moduleName: 'accounts',
        iconType: 'material-icons-two-tone',
        icon: 'account_box',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },
    {
        path: 'user-management',
        title: 'User Management',
        moduleName: 'usermanagement',
        iconType: 'material-icons-two-tone',
        icon: 'supervisor_account',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },
    {
        path: 'investments',
        title: 'Investments',
        moduleName: 'investments',
        iconType: 'material-icons-two-tone',
        icon: 'money',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },
    {
        path: 'p-l-report',
        title: 'P & L Report',
        moduleName: 'plreport',
        iconType: 'material-icons-two-tone',
        icon: 'table_view',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },
    {
        path: 'withdrawal-report',
        title: 'Withdrawal Report',
        moduleName: 'withdrawalreport',
        iconType: 'material-icons-two-tone',
        icon: 'import_export',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },
    {
        path: 'payments-report',
        title: 'Payments Report',
        moduleName: 'paymentsreport',
        iconType: 'material-icons-two-tone',
        icon: 'payments',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },
    {
        path: 'report',
        title: 'Report',
        moduleName: 'report',
        iconType: 'material-icons-two-tone',
        icon: 'library_books',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },
    {
        path: 'user-profile',
        title: '',
        moduleName: 'userprofile',
        iconType: '',
        icon: '',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },
    // {
    //   path: 'calendar',
    //   title: 'Calendar',
    //   moduleName: 'calendar',
    //   iconType: 'material-icons-two-tone',
    //   icon: 'event_note',
    //   class: '',
    //   groupTitle: false,
    //   badge: 'New',
    //   badgeClass: 'badge bg-blue sidebar-badge float-right',
    //   role: ['All'],
    //   submenu: [],
    // },
    // {
    //   path: 'task',
    //   title: 'Task',
    //   moduleName: 'task',
    //   iconType: 'material-icons-two-tone',
    //   icon: 'fact_check',
    //   class: '',
    //   groupTitle: false,
    //   badge: '',
    //   badgeClass: '',
    //   role: ['All'],
    //   submenu: [],
    // },
    // {
    //   path: 'contacts',
    //   title: 'Contacts',
    //   moduleName: 'contacts',
    //   iconType: 'material-icons-two-tone',
    //   icon: 'contacts',
    //   class: '',
    //   groupTitle: false,
    //   badge: '',
    //   badgeClass: '',
    //   role: ['All'],
    //   submenu: [],
    // },
    // {
    //   path: '',
    //   title: 'Email',
    //   moduleName: 'email',
    //   iconType: 'material-icons-two-tone',
    //   icon: 'email',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   badge: '',
    //   badgeClass: '',
    //   role: ['All'],
    //   submenu: [
    //     {
    //       path: '/email/inbox',
    //       title: 'Inbox',
    //       moduleName: 'email',
    //       iconType: '',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       badge: '',
    //       badgeClass: '',
    //       role: [''],
    //       submenu: [],
    //     },
    //     {
    //       path: '/email/compose',
    //       title: 'Compose',
    //       moduleName: 'email',
    //       iconType: '',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       badge: '',
    //       badgeClass: '',
    //       role: [''],
    //       submenu: [],
    //     },
    //     {
    //       path: '/email/read-mail',
    //       title: 'Read Email',
    //       moduleName: 'email',
    //       iconType: '',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       badge: '',
    //       badgeClass: '',
    //       role: [''],
    //       submenu: [],
    //     },
    //   ],
    // },
    // {
    //   path: '',
    //   title: 'More Apps',
    //   moduleName: 'apps',
    //   iconType: 'material-icons-two-tone',
    //   icon: 'stars',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   badge: '5',
    //   badgeClass: 'badge bg-orange sidebar-badge float-right',
    //   role: ['All'],
    //   submenu: [
    //     {
    //       path: '/apps/chat',
    //       title: 'Chat',
    //       moduleName: 'apps',
    //       iconType: '',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       badge: '',
    //       badgeClass: '',
    //       role: [''],
    //       submenu: [],
    //     },
    //     {
    //       path: '/apps/dragdrop',
    //       title: 'Drag & Drop',
    //       moduleName: 'apps',
    //       iconType: '',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       badge: '',
    //       badgeClass: '',
    //       role: [''],
    //       submenu: [],
    //     },
    //     {
    //       path: '/apps/contact-grid',
    //       title: 'Contact Grid',
    //       moduleName: 'apps',
    //       iconType: '',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       badge: '',
    //       badgeClass: '',
    //       role: [''],
    //       submenu: [],
    //     },
    //     {
    //       path: '/apps/support',
    //       title: 'Support',
    //       moduleName: 'apps',
    //       iconType: '',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       badge: '',
    //       badgeClass: '',
    //       role: [''],
    //       submenu: [],
    //     },
    // ],
    // },
    {
        path: '',
        title: 'Widgets',
        moduleName: 'widget',
        iconType: 'material-icons-two-tone',
        icon: 'widgets',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/widget/chart-widget',
                title: 'Chart Widget',
                moduleName: 'widget',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/widget/data-widget',
                title: 'Data Widget',
                moduleName: 'widget',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: '-- Components',
        moduleName: '',
        iconType: '',
        icon: '',
        class: '',
        groupTitle: true,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [],
    },
    {
        path: '',
        title: 'User Interface (UI)',
        moduleName: 'ui',
        iconType: 'material-icons-two-tone',
        icon: 'dvr',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/ui/alerts',
                title: 'Alerts',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/badges',
                title: 'Badges',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/chips',
                title: 'Chips',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/modal',
                title: 'Modal',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/buttons',
                title: 'Buttons',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/expansion-panel',
                title: 'Expansion Panel',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/bottom-sheet',
                title: 'Bottom Sheet',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/dialogs',
                title: 'Dialogs',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/cards',
                title: 'Cards',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/labels',
                title: 'Labels',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/list-group',
                title: 'List Group',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/media-object',
                title: 'Media Object',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/snackbar',
                title: 'Snackbar',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/preloaders',
                title: 'Preloaders',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/progressbars',
                title: 'Progress Bars',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/tabs',
                title: 'Tabs',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/typography',
                title: 'Typography',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/ui/helper-classes',
                title: 'Helper Classes',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Forms',
        moduleName: 'forms',
        iconType: 'material-icons-two-tone',
        icon: 'subtitles',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/forms/form-controls',
                title: 'Form Controls',
                moduleName: 'forms',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/forms/advance-controls',
                title: 'Advanced Controls',
                moduleName: 'forms',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/forms/form-example',
                title: 'Form Examples',
                moduleName: 'forms',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/forms/form-validation',
                title: 'Form Validation',
                moduleName: 'forms',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/forms/wizard',
                title: 'Form Wizard',
                moduleName: 'forms',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/forms/editors',
                title: 'Editors',
                moduleName: 'forms',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Tables',
        moduleName: 'tables',
        iconType: 'material-icons-two-tone',
        icon: 'view_list',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/tables/basic-tables',
                title: 'Basic Tables',
                moduleName: 'tables',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/tables/material-tables',
                title: 'Material Tables',
                moduleName: 'tables',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/tables/ngx-datatable',
                title: 'ngx-datatable',
                moduleName: 'tables',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Medias',
        moduleName: 'media',
        iconType: 'material-icons-two-tone',
        icon: 'image_search',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/media/gallery',
                title: 'Image Gallery',
                moduleName: 'media',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Charts',
        moduleName: 'charts',
        iconType: 'material-icons-two-tone',
        icon: 'insert_chart',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '7',
        badgeClass: 'badge bg-green sidebar-badge float-right',
        role: ['Admin'],
        submenu: [
            {
                path: '/charts/echart',
                title: 'Echart',
                moduleName: 'charts',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/charts/apex',
                title: 'Apex',
                moduleName: 'charts',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/charts/chartjs',
                title: 'ChartJS',
                moduleName: 'charts',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/charts/ngx-charts',
                title: 'Ngx-Charts',
                moduleName: 'charts',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/charts/gauge',
                title: 'Gauge',
                moduleName: 'charts',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Timeline',
        moduleName: 'timeline',
        iconType: 'material-icons-two-tone',
        icon: 'timeline',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/timeline/timeline1',
                title: 'Timeline 1',
                moduleName: 'timeline',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/timeline/timeline2',
                title: 'Timeline 2',
                moduleName: 'timeline',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Icons',
        moduleName: 'icons',
        iconType: 'material-icons-two-tone',
        icon: 'eco',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/icons/material',
                title: 'Material Icons',
                moduleName: 'icons',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/icons/font-awesome',
                title: 'Font Awesome',
                moduleName: 'icons',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Authentication',
        moduleName: 'authentication',
        iconType: 'material-icons-two-tone',
        icon: 'supervised_user_circle',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/authentication/signin',
                title: 'Sign In',
                moduleName: 'authentication',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/authentication/signup',
                title: 'Sign Up',
                moduleName: 'authentication',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/authentication/forgot-password',
                title: 'Forgot Password',
                moduleName: 'authentication',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/authentication/locked',
                title: 'Locked',
                moduleName: 'authentication',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/authentication/page404',
                title: '404 - Not Found',
                moduleName: 'authentication',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/authentication/page500',
                title: '500 - Server Error',
                moduleName: 'authentication',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Extra Pages',
        moduleName: 'extra-pages',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/extra-pages/profile',
                title: 'Profile',
                moduleName: 'extra-pages',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/extra-pages/pricing',
                title: 'Pricing',
                moduleName: 'extra-pages',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/extra-pages/invoice',
                title: 'Invoice',
                moduleName: 'extra-pages',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/extra-pages/faqs',
                title: 'Faqs',
                moduleName: 'extra-pages',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/extra-pages/blank',
                title: 'Blank Page',
                moduleName: 'extra-pages',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Maps',
        moduleName: 'maps',
        iconType: 'material-icons-two-tone',
        icon: 'map',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/maps/google',
                title: 'Google Map',
                moduleName: 'maps',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Multi level Menu',
        moduleName: 'multilevel',
        iconType: 'material-icons-two-tone',
        icon: 'slideshow',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/multilevel/first1',
                title: 'First',
                moduleName: 'multilevel',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
            {
                path: '/',
                title: 'Second',
                moduleName: 'secondlevel',
                iconType: '',
                icon: '',
                class: 'ml-sub-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [
                    {
                        path: '/multilevel/secondlevel/second1',
                        title: 'Second 1',
                        moduleName: 'secondlevel',
                        iconType: '',
                        icon: '',
                        class: 'ml-sub-sub-menu',
                        groupTitle: false,
                        badge: '',
                        badgeClass: '',
                        role: [''],
                        submenu: [],
                    },
                    {
                        path: '/multilevel/secondlevel/second2',
                        title: 'Second 2',
                        moduleName: 'secondlevel',
                        iconType: '',
                        icon: '',
                        class: 'ml-sub-sub-menu',
                        groupTitle: false,
                        badge: '',
                        badgeClass: '',
                        role: [''],
                        submenu: [],
                    },
                ],
            },
            {
                path: '/multilevel/first3',
                title: 'Third',
                moduleName: 'multilevel',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
];


/***/ }),

/***/ "57d4":
/*!*****************************************************************!*\
  !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return RightSidebarComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/config.service */ "Cxl7");
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ "ld2u");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");











const _c0 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
const _c1 = function (a0) { return { "actived": a0 }; };
class RightSidebarComponent {
    constructor(document, renderer, elementRef, dataService, configService) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataService = dataService;
        this.configService = configService;
        this.selectedBgColor = 'white';
        this.showpanel = false;
        this.isDarkSidebar = false;
        this.isDarTheme = false;
        this.config = {};
    }
    ngOnInit() {
        this.config = this.configService.configData;
        this.dataService.currentStatus.subscribe((data) => {
            this.isOpenSidebar = data;
        });
        this.setRightSidebarWindowHeight();
    }
    ngAfterViewInit() {
        // set header color on startup
        if (localStorage.getItem('choose_skin')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('choose_skin'));
            this.selectedBgColor = localStorage.getItem('choose_skin_active');
        }
        else {
            this.renderer.addClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            this.selectedBgColor = this.config.layout.theme_color;
        }
        if (localStorage.getItem('menuOption')) {
            if (localStorage.getItem('menuOption') === 'menu_dark') {
                this.isDarkSidebar = true;
            }
            else if (localStorage.getItem('menuOption') === 'menu_light') {
                this.isDarkSidebar = false;
            }
            else {
                this.isDarkSidebar =
                    this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
            }
        }
        else {
            this.isDarkSidebar =
                this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
        }
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'dark') {
                this.isDarTheme = true;
            }
            else if (localStorage.getItem('theme') === 'light') {
                this.isDarTheme = false;
            }
            else {
                this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
            }
        }
        else {
            this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
        }
    }
    selectTheme(e) {
        this.selectedBgColor = e;
        const prevTheme = this.elementRef.nativeElement
            .querySelector('.right-sidebar .demo-choose-skin li.actived')
            .getAttribute('data-theme');
        this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
        this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
        localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
        localStorage.setItem('choose_skin_active', this.selectedBgColor);
    }
    lightSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        const menuOption = 'menu_light';
        localStorage.setItem('choose_logoheader', 'logo-white');
        localStorage.setItem('menuOption', menuOption);
    }
    darkSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        const menuOption = 'menu_dark';
        localStorage.setItem('choose_logoheader', 'logo-black');
        localStorage.setItem('menuOption', menuOption);
    }
    lightThemeBtnClick() {
        this.renderer.removeClass(this.document.body, 'dark');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        if (localStorage.getItem('choose_skin')) {
            this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
            this.renderer.addClass(this.document.body, 'theme-white');
        }
        this.renderer.addClass(this.document.body, 'light');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        const theme = 'light';
        const menuOption = 'menu_light';
        this.selectedBgColor = 'white';
        this.isDarkSidebar = false;
        localStorage.setItem('choose_logoheader', 'logo-white');
        localStorage.setItem('choose_skin', 'theme-white');
        localStorage.setItem('theme', theme);
        localStorage.setItem('menuOption', menuOption);
    }
    darkThemeBtnClick() {
        this.renderer.removeClass(this.document.body, 'light');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        if (localStorage.getItem('choose_skin')) {
            this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
            this.renderer.addClass(this.document.body, 'theme-black');
        }
        this.renderer.addClass(this.document.body, 'dark');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        const theme = 'dark';
        const menuOption = 'menu_dark';
        this.selectedBgColor = 'black';
        this.isDarkSidebar = true;
        localStorage.setItem('choose_logoheader', 'logo-black');
        localStorage.setItem('choose_skin', 'theme-black');
        localStorage.setItem('theme', theme);
        localStorage.setItem('menuOption', menuOption);
    }
    setRightSidebarWindowHeight() {
        const height = window.innerHeight - 137;
        this.maxHeight = height + '';
        this.maxWidth = '500px';
    }
    onClickedOutside(event) {
        const button = event.target;
        if (button.id !== 'settingBtn') {
            if (this.dataService.currentStatus._isScalar === true) {
                this.toggleRightSidebar();
            }
        }
    }
    toggleRightSidebar() {
        this.dataService.changeMsg((this.dataService.currentStatus._isScalar = !this.dataService
            .currentStatus._isScalar));
    }
}
RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) { return new (t || RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_3__["RightSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"])); };
RightSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RightSidebarComponent, selectors: [["app-right-sidebar"]], decls: 92, vars: 28, consts: [["id", "rightsidebar", 1, "right-sidebar", 3, "ngClass", "clickOutside"], [1, "rightSidebarClose", 3, "click"], [1, "far", "fa-times-circle"], [1, "demo-skin", 3, "ngStyle", "perfectScrollbar"], [1, "rightSetting"], [1, "setting-list", "list-unstyled", "m-t-20"], [1, "form-check"], [1, "form-check", "m-l-10"], [1, "form-check-label"], ["type", "checkbox", "value", "", "checked", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], [1, "mt-2", 3, "value"], ["value", "light", 3, "click"], ["value", "dark", 3, "click"], [1, "demo-choose-skin", "choose-theme", "list-unstyled"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white-theme", "white-theme-border"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black-theme"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple-theme"], ["data-theme", "blue", 3, "ngClass", "click"], [1, "blue-theme"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan-theme"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green-theme"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange-theme"], [1, "sidebar-progress"], [1, "progress", "m-t-20"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "shadow-style", "width-per-45"], [1, "progress-description"], ["role", "progressbar", "aria-valuenow", "63", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "shadow-style", "width-per-63"]], template: function RightSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickOutside", function RightSidebarComponent_Template_aside_clickOutside_0_listener($event) { return ctx.onClickedOutside($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_div_click_1_listener() { return ctx.toggleRightSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "GENERAL SETTINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Save History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Show Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Auto Submit Issue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Show Status To All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "SIDEBAR MENU COLORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-button-toggle-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-button-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_44_listener() { return ctx.lightSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-button-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_46_listener() { return ctx.darkSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "THEME COLORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-button-toggle-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-button-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_52_listener() { return ctx.lightThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-button-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_54_listener() { return ctx.darkThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "SKINS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_60_listener() { return ctx.selectTheme("white"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_62_listener() { return ctx.selectTheme("black"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_64_listener() { return ctx.selectTheme("purple"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_66_listener() { return ctx.selectTheme("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_68_listener() { return ctx.selectTheme("cyan"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_70_listener() { return ctx.selectTheme("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_72_listener() { return ctx.selectTheme("orange"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Disk Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "26% remaining");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Server Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Highly Loaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isOpenSidebar ? "open" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.isDarkSidebar ? "dark" : "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.isDarTheme ? "dark" : "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, ctx.selectedBgColor === "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c1, ctx.selectedBgColor === "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c1, ctx.selectedBgColor === "purple"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c1, ctx.selectedBgColor === "blue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c1, ctx.selectedBgColor === "cyan"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c1, ctx.selectedBgColor === "green"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c1, ctx.selectedBgColor === "orange"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], ng_click_outside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yaWdodC1zaWRlYmFyL3JpZ2h0LXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RightSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-right-sidebar',
                templateUrl: './right-sidebar.component.html',
                styleUrls: ['./right-sidebar.component.sass'],
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_3__["RightSidebarService"] }, { type: src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }]; }, null); })();


/***/ }),

/***/ "5dmV":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");













const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
    ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"].forRoot(),
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[materialModules], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [materialModules],
                exports: [materialModules],
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:4200',
    firebase: {
        apiKey: "AIzaSyCZ9sAMa96Oiv-DevXvPjucVcAwK1a2TOw",
        authDomain: "fir-angular-db24a.firebaseapp.com",
        projectId: "fir-angular-db24a",
        storageBucket: "fir-angular-db24a.appspot.com",
        messagingSenderId: "929957161334",
        appId: "1:929957161334:web:a9917093f732e14d47b257",
        measurementId: "G-TXD2SQVBVN"
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cxl7":
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ConfigService {
    constructor() {
        this.setConfigData();
    }
    setConfigData() {
        this.configData = {
            layout: {
                variant: 'light',
                theme_color: 'light',
                logo_bg_color: 'dark',
                sidebar: {
                    collapsed: false,
                    backgroundColor: 'dark',
                },
            },
        };
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GHa4":
/*!***************************************************************!*\
  !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
  \***************************************************************/
/*! exports provided: ScriptStore, DynamicScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicScriptLoaderService", function() { return DynamicScriptLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const ScriptStore = [];
class DynamicScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            if (!this.scripts[name].loaded) {
                // load script
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    // IE
                    script.onreadystatechange = () => {
                        if (script.readyState === 'loaded' ||
                            script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    // Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    }
}
DynamicScriptLoaderService.ɵfac = function DynamicScriptLoaderService_Factory(t) { return new (t || DynamicScriptLoaderService)(); };
DynamicScriptLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DynamicScriptLoaderService, factory: DynamicScriptLoaderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicScriptLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HSgw":
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/header.component */ "/Lhg");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "MR0u");
/* harmony import */ var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../right-sidebar/right-sidebar.component */ "57d4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class MainLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 5, vars: 0, consts: [[1, "image", 2, "padding", "30px 10px"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-right-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["RightSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-layout',
                templateUrl: './main-layout.component.html',
                styleUrls: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KDUW":
/*!**********************************************!*\
  !*** ./src/app/core/service/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "KDZV");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");












class AuthService {
    constructor(http, afs, afAuth, router, ngZone) {
        this.http = http;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(username, password)
            .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield localStorage.setItem('currentUser', JSON.stringify(result.user));
            this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
            this.currentUser = this.currentUserSubject.asObservable();
            // this.currentUserSubject.next(result.user);
            this.ngZone.run(() => {
                this.router.navigate(['dashboard']);
            });
            // return result.user;
            // this.SetUserData(result.user);
        })).catch((error) => {
            window.alert(error.message);
        });
        // return this.http
        //   .post<any>(`${environment.apiUrl}/authenticate`, {
        //     username,
        //     password,
        //   })
        //   .pipe(
        //     map((user) => {
        //       console.log("===user+++", user);
        //       // store user details and jwt token in local storage to keep user logged in between page refreshes
        //       localStorage.setItem('currentUser', JSON.stringify(user));
        //       this.currentUserSubject.next(user);
        //       return user;
        //     })
        //   );
    }
    userProfile() {
        this.ngZone.run(() => {
            this.router.navigate(['user-profile']);
        });
    }
    SignUp(email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            this.SendVerificationMail();
            localStorage.setItem('currentUser', JSON.stringify(result.user));
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    SendVerificationMail() {
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(() => {
            this.router.navigate(['authentication/verify-email-address']);
        });
    }
    ForgotPassword(passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
            window.alert('Password reset email sent, check your inbox.');
        }).catch((error) => {
            window.alert(error);
        });
    }
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        return (user !== null && user.emailVerified !== false) ? true : false;
    }
    logout() {
        // remove user from local storage to log user out
        return this.afAuth.auth.signOut().then(() => {
            localStorage.removeItem('currentUser');
            this.router.navigate(['authentication/signin']);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "KwYr":
/*!**************************************************!*\
  !*** ./src/app/core/interceptor/fake-backend.ts ***!
  \**************************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/role */ "0HZm");






const users = [
    {
        id: 1,
        img: 'assets/images/user/admin.jpg',
        username: 'admin@school.org',
        password: 'admin@123',
        firstName: 'Sarah',
        lastName: 'Smith',
        role: _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin,
        token: 'admin-token',
    },
    {
        id: 2,
        img: 'assets/images/user/teacher.jpg',
        username: 'teacher@school.org',
        password: 'teacher@123',
        firstName: 'Ashton',
        lastName: 'Cox',
        role: _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Teacher,
        token: 'teacher-token',
    },
    {
        id: 3,
        img: 'assets/images/user/student.jpg',
        username: 'student@school.org',
        password: 'student@123',
        firstName: 'Ashton',
        lastName: 'Cox',
        role: _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Student,
        token: 'student-token',
    },
];
class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute));
        function handleRoute() {
            switch (true) {
                case url.endsWith('/authenticate') && method === 'POST':
                    return authenticate();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find((x) => x.username === username && x.password === password);
            if (!user) {
                return error('Username or password is incorrect');
            }
            return ok({
                id: user.id,
                img: user.img,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: user.token,
            });
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeBackendInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true,
};


/***/ }),

/***/ "MR0u":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-items */ "4veq");
/* harmony import */ var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/models/role */ "0HZm");
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/auth.service */ "KDUW");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");











const _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_4_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, sidebarItem_r1.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](sidebarItem_r1.badge);
} }
function SidebarComponent_li_4_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_4_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.callMenuToggle($event, sidebarItem_r1.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SidebarComponent_li_4_a_1_span_5_Template, 2, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, sidebarItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, sidebarItem_r1.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, sidebarItem_r1.iconType));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](sidebarItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", sidebarItem_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarItem_r1.badge != "");
} }
function SidebarComponent_li_4_ul_2_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubsubItem_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r13.showSubSubMenu === sidebarSubsubItem_r14.moduleName ? "activeSubSub" : "")("routerLinkActive", sidebarSubsubItem_r14.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarSubsubItem_r14.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, sidebarSubsubItem_r14.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, sidebarSubsubItem_r14.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sidebarSubsubItem_r14.title, " ");
} }
function SidebarComponent_li_4_ul_2_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_4_ul_2_li_1_ul_3_li_1_Template, 3, 9, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", sidebarSubItem_r11.submenu);
} }
function SidebarComponent_li_4_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_4_ul_2_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const sidebarSubItem_r11 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r16.callSubMenuToggle($event, sidebarSubItem_r11.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarComponent_li_4_ul_2_li_1_ul_3_Template, 2, 1, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r10.showSubMenu === sidebarSubItem_r11.moduleName ? "activeSub" : "")("routerLinkActive", sidebarSubItem_r11.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarSubItem_r11.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, sidebarSubItem_r11.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, sidebarSubItem_r11.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sidebarSubItem_r11.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarSubItem_r11.submenu.length > 0);
} }
function SidebarComponent_li_4_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_4_ul_2_li_1_Template, 4, 10, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", sidebarItem_r1.submenu);
} }
function SidebarComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_4_a_1_Template, 6, 12, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidebarComponent_li_4_ul_2_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.showMenu === sidebarItem_r1.moduleName && sidebarItem_r1.submenu.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", sidebarItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !sidebarItem_r1.groupTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarItem_r1.submenu.length > 0);
} }
const _c1 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
class SidebarComponent {
    constructor(document, renderer, elementRef, authService, router) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.authService = authService;
        this.router = router;
        this.showMenu = 'dashboard';
        this.showSubMenu = '';
        this.showSubSubMenu = '';
        this.headerHeight = 60;
        const body = this.elementRef.nativeElement.closest('body');
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                if (event.url.split('/')[1] === 'multilevel') {
                    this.showMenu = event.url.split('/')[1];
                }
                else {
                    this.showMenu = event.url.split('/').slice(-2)[0];
                }
                this.showSubMenu = event.url.split('/').slice(-2)[0];
                // close sidebar on mobile screen after menu select
                this.renderer.removeClass(this.document.body, 'overlay-open');
            }
        });
    }
    windowResizecall(event) {
        this.setMenuHeight();
        this.checkStatuForResize(false);
    }
    onGlobalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.document.body, 'overlay-open');
        }
    }
    callMenuToggle(event, element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
        const hasClass = event.target.classList.contains('toggled');
        if (hasClass) {
            this.renderer.removeClass(event.target, 'toggled');
        }
        else {
            this.renderer.addClass(event.target, 'toggled');
        }
    }
    callSubMenuToggle(event, element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    }
    ngOnInit() {
        if (this.authService.currentUserValue) {
            const userRole = this.authService.currentUserValue.role;
            this.userFullName =
                this.authService.currentUserValue.firstName +
                    ' ' +
                    this.authService.currentUserValue.lastName;
            this.userImg = this.authService.currentUserValue.img;
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter((x) => x.role.indexOf(userRole) !== -1 || x.role.indexOf('All') !== -1);
            if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin;
            }
            else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Teacher) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Teacher;
            }
            else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Student) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Student;
            }
            else {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin;
            }
        }
        // this.sidebarItems = ROUTES.filter((sidebarItem) => sidebarItem);
        this.initLeftSidebar();
        this.bodyTag = this.document.body;
    }
    initLeftSidebar() {
        const _this = this;
        // Set menu height
        _this.setMenuHeight();
        _this.checkStatuForResize(true);
    }
    setMenuHeight() {
        this.innerHeight = window.innerHeight;
        const height = this.innerHeight - this.headerHeight;
        this.listMaxHeight = height + '';
        this.listMaxWidth = '500px';
    }
    isOpen() {
        return this.bodyTag.classList.contains('overlay-open');
    }
    checkStatuForResize(firstTime) {
        if (window.innerWidth < 1170) {
            this.renderer.addClass(this.document.body, 'ls-closed');
        }
        else {
            this.renderer.removeClass(this.document.body, 'ls-closed');
        }
    }
    mouseHover(e) {
        const body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('submenu-closed')) {
            this.renderer.addClass(this.document.body, 'side-closed-hover');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
    }
    mouseOut(e) {
        const body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('side-closed-hover')) {
            this.renderer.removeClass(this.document.body, 'side-closed-hover');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) { return ctx.windowResizecall($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) { return ctx.onGlobalClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, decls: 5, vars: 5, consts: [["id", "leftsidebar", 1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "menu", 2, "margin-top", "5px"], [1, "list", 3, "ngStyle", "perfectScrollbar"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "routerLinkActive"], ["class", "menu-top", 3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "ml-menu", 4, "ngIf"], [1, "menu-top", 3, "routerLink", "ngClass", "click"], [3, "ngClass"], [1, "hide-menu"], [3, "ngClass", 4, "ngIf"], [1, "ml-menu"], [3, "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive"], [3, "routerLink", "ngClass", "click"], ["class", "ml-menu-2", 4, "ngIf"], [1, "ml-menu-2"], [3, "routerLink", "ngClass"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) { return ctx.mouseHover($event); })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) { return ctx.mouseOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidebarComponent_li_4_Template, 3, 5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sidebarItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.sass'],
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }]; }, { windowResizecall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:resize', ['$event']]
        }], onGlobalClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['document:mousedown', ['$event']]
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "5dmV");








class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Qc9P":
/*!*************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
  \*************************************************************/
/*! exports provided: PageLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoaderComponent", function() { return PageLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");



class PageLoaderComponent {
    constructor() { }
    ngOnInit() { }
}
PageLoaderComponent.ɵfac = function PageLoaderComponent_Factory(t) { return new (t || PageLoaderComponent)(); };
PageLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLoaderComponent, selectors: [["app-page-loader"]], decls: 2, vars: 1, consts: [["bdColor", "rgb(63,69,95)", "size", "medium", "color", "#0af0d5", "type", "ball-scale-pulse", 3, "fullScreen"], [2, "color", "white"]], template: function PageLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlLWxvYWRlci9wYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-loader',
                templateUrl: './page-loader.component.html',
                styleUrls: ['./page-loader.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SLXU":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/error.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ "KDUW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ "Qc9P");









class AppComponent {
    constructor(_router, location, spinner) {
        this._router = _router;
        this.spinner = spinner;
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.spinner.show();
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.spinner.hide();
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__["PageLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "Tw+f":
/*!**************************************************!*\
  !*** ./src/app/core/service/firebase.service.ts ***!
  \**************************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");




class FirebaseService {
    constructor(afs) {
        this.afs = afs;
    }
    getUsers() {
        return new Promise((resolve, reject) => {
            console.log("firebase.getusers.success");
            this.afs.collection('/people').snapshotChanges()
                .subscribe(snapshots => {
                resolve(snapshots);
            });
        });
    }
}
FirebaseService.ɵfac = function FirebaseService_Factory(t) { return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirebaseService, factory: FirebaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ "Qc9P");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "MR0u");
/* harmony import */ var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/right-sidebar/right-sidebar.component */ "57d4");
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ "f9dz");
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ "HSgw");
/* harmony import */ var _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/interceptor/fake-backend */ "KwYr");
/* harmony import */ var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/interceptor/error.interceptor */ "SLXU");
/* harmony import */ var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/interceptor/jwt.interceptor */ "sIiH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ "05qF");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/auth */ "KDZV");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/service/auth.service */ "KDUW");
// import { NgxchartComponent } from './charts/ngxchart/ngxchart.component';



























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false,
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_16__["HashLocationStrategy"] },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_15__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"], multi: true },
        _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_13__["fakeBackendProvider"],
        _core_service_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__["PerfectScrollbarModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_18__["ClickOutsideModule"],
            // core & shared
            _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestoreModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__["PageLoaderComponent"],
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
        _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["RightSidebarComponent"],
        _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__["AuthLayoutComponent"],
        _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_12__["MainLayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__["PerfectScrollbarModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_18__["ClickOutsideModule"],
        // core & shared
        _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__["PageLoaderComponent"],
                    _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                    _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["RightSidebarComponent"],
                    _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__["AuthLayoutComponent"],
                    _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_12__["MainLayoutComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__["PerfectScrollbarModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_18__["ClickOutsideModule"],
                    // core & shared
                    _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].firebase),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestoreModule"],
                ],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_16__["HashLocationStrategy"] },
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_15__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"], multi: true },
                    _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_13__["fakeBackendProvider"],
                    _core_service_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"],
                ],
                entryComponents: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "f9dz":
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/auth-layout/auth-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-layout',
                templateUrl: './auth-layout.component.html',
                styleUrls: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kCjQ":
/*!***************************************************!*\
  !*** ./src/app/core/guard/module-import.guard.ts ***!
  \***************************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "ld2u":
/*!******************************************************!*\
  !*** ./src/app/core/service/rightsidebar.service.ts ***!
  \******************************************************/
/*! exports provided: RightSidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarService", function() { return RightSidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class RightSidebarService {
    constructor() {
        this.statusService = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentStatus = this.statusService.asObservable();
    }
    changeMsg(msg) {
        this.statusService.next(msg);
    }
}
RightSidebarService.ɵfac = function RightSidebarService_Factory(t) { return new (t || RightSidebarService)(); };
RightSidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RightSidebarService, factory: RightSidebarService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightSidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/rightsidebar.service */ "ld2u");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ "3IAN");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/auth.service */ "KDUW");
/* harmony import */ var _service_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/firebase.service */ "Tw+f");
/* harmony import */ var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/dynamic-script-loader.service */ "GHa4");
/* harmony import */ var _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guard/module-import.guard */ "kCjQ");









class CoreModule {
    constructor(parentModule) {
        Object(_guard_module_import_guard__WEBPACK_IMPORTED_MODULE_7__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, providers: [
        _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"],
        _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
        _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _service_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
        _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["DynamicScriptLoaderService"],
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [
                    _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"],
                    _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
                    _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                    _service_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
                    _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["DynamicScriptLoaderService"],
                ],
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "sIiH":
/*!*****************************************************!*\
  !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "KDUW");




class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/page404/page404.component */ "21P8");
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ "f9dz");
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ "HSgw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/guard/auth.guard */ "3IAN");
/* harmony import */ var _core_models_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/models/role */ "0HZm");









const routes = [
    {
        path: '',
        component: _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"],
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
            {
                path: 'admin',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                // data: {
                //   role: Role.Admin,
                // },
                loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then((m) => m.AdminModule),
            },
            {
                path: 'teacher',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Teacher,
                },
                loadChildren: () => Promise.all(/*! import() | teacher-teacher-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~7d697d47"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~contacts-contacts-module~fees-fees-module~forms-fo~1ce6c176"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~email-email-module~forms-forms-module~studen~c7798cec"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~student-student-module~teacher-teacher-modul~13a53a71"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~forms-forms-module~student-student-module~teacher-~5b2bf83d"), __webpack_require__.e("default~dashboard-dashboard-module~teacher-teacher-module"), __webpack_require__.e("teacher-teacher-module")]).then(__webpack_require__.bind(null, /*! ./teacher/teacher.module */ "4+hN")).then((m) => m.TeacherModule),
            },
            {
                path: 'student',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Student,
                },
                loadChildren: () => Promise.all(/*! import() | student-student-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~7d697d47"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~contacts-contacts-module~fees-fees-module~forms-fo~1ce6c176"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~email-email-module~forms-forms-module~studen~c7798cec"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~student-student-module~teacher-teacher-modul~13a53a71"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~forms-forms-module~student-student-module~teacher-~5b2bf83d"), __webpack_require__.e("default~dashboard-dashboard-module~student-student-module~ui-ui-module~widget-widget-module"), __webpack_require__.e("default~dashboard-dashboard-module~student-student-module"), __webpack_require__.e("student-student-module")]).then(__webpack_require__.bind(null, /*! ./student/student.module */ "ejW6")).then((m) => m.StudentModule),
            },
            // Extra components
            {
                path: 'calendar',
                loadChildren: () => Promise.all(/*! import() | calendar-calendar-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~contacts-contacts-module~fees-fees-module~forms-fo~1ce6c176"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~forms-forms-module~student-student-module~teacher-~5b2bf83d"), __webpack_require__.e("calendar-calendar-module")]).then(__webpack_require__.bind(null, /*! ./calendar/calendar.module */ "O51e")).then((m) => m.CalendarsModule),
            },
            //===========================//
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~7d697d47"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~email-email-module~forms-forms-module~studen~c7798cec"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~student-student-module~teacher-teacher-modul~13a53a71"), __webpack_require__.e("default~dashboard-dashboard-module~student-student-module~ui-ui-module~widget-widget-module"), __webpack_require__.e("default~dashboard-dashboard-module~student-student-module"), __webpack_require__.e("default~dashboard-dashboard-module~teacher-teacher-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then((m) => m.DashboardModule),
            },
            {
                path: 'accounts',
                loadChildren: () => Promise.all(/*! import() | accounts-accounts-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~7d697d47"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207"), __webpack_require__.e("accounts-accounts-module")]).then(__webpack_require__.bind(null, /*! ./accounts/accounts.module */ "mQSa")).then((m) => m.AccountsModule),
            },
            {
                path: 'user-management',
                loadChildren: () => Promise.all(/*! import() | usermanagement-usermanagement-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~7d697d47"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207"), __webpack_require__.e("usermanagement-usermanagement-module")]).then(__webpack_require__.bind(null, /*! ./usermanagement/usermanagement.module */ "3HDD")).then((m) => m.UsermanagementModule),
            },
            {
                path: 'investments',
                loadChildren: () => Promise.all(/*! import() | investments-investments-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~7d697d47"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207"), __webpack_require__.e("investments-investments-module")]).then(__webpack_require__.bind(null, /*! ./investments/investments.module */ "wEQX")).then((m) => m.InvestmentsModule),
            },
            {
                path: 'p-l-report',
                loadChildren: () => Promise.all(/*! import() | plreport-plreport-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~7d697d47"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207"), __webpack_require__.e("plreport-plreport-module")]).then(__webpack_require__.bind(null, /*! ./plreport/plreport.module */ "jofC")).then((m) => m.PlreportModule),
            },
            {
                path: 'withdrawal-report',
                loadChildren: () => Promise.all(/*! import() | withdrawalreport-withdrawalreport-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~7d697d47"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207"), __webpack_require__.e("withdrawalreport-withdrawalreport-module")]).then(__webpack_require__.bind(null, /*! ./withdrawalreport/withdrawalreport.module */ "nST3")).then((m) => m.WithdrawalreportModule),
            },
            {
                path: 'payments-report',
                loadChildren: () => Promise.all(/*! import() | paymentsreport-paymentsreport-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~7d697d47"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207"), __webpack_require__.e("paymentsreport-paymentsreport-module")]).then(__webpack_require__.bind(null, /*! ./paymentsreport/paymentsreport.module */ "+Xq/")).then((m) => m.PaymentsreportModule),
            },
            {
                path: 'report',
                loadChildren: () => Promise.all(/*! import() | report-report-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~7d697d47"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207"), __webpack_require__.e("report-report-module")]).then(__webpack_require__.bind(null, /*! ./report/report.module */ "LVab")).then((m) => m.ReportModule),
            },
            {
                path: 'user-profile-two',
                loadChildren: () => __webpack_require__.e(/*! import() | user-profile-user-profile-module */ "user-profile-user-profile-module").then(__webpack_require__.bind(null, /*! ./user-profile/user-profile.module */ "IQtI")).then((m) => m.UserProfileModule),
            },
            //=============================//
            {
                path: 'task',
                loadChildren: () => Promise.all(/*! import() | task-task-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~contacts-contacts-module~fees-fees-module~forms-fo~1ce6c176"), __webpack_require__.e("default~apps-apps-module~contacts-contacts-module~departments-departments-module~forms-forms-module~~53d2be0d"), __webpack_require__.e("default~apps-apps-module~forms-forms-module~task-task-module~ui-ui-module"), __webpack_require__.e("default~apps-apps-module~task-task-module~widget-widget-module"), __webpack_require__.e("task-task-module")]).then(__webpack_require__.bind(null, /*! ./task/task.module */ "09GQ")).then((m) => m.TaskModule),
            },
            {
                path: 'contacts',
                loadChildren: () => Promise.all(/*! import() | contacts-contacts-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~contacts-contacts-module~fees-fees-module~forms-fo~1ce6c176"), __webpack_require__.e("default~apps-apps-module~contacts-contacts-module~departments-departments-module~forms-forms-module~~53d2be0d"), __webpack_require__.e("contacts-contacts-module")]).then(__webpack_require__.bind(null, /*! ./contacts/contacts.module */ "1s7i")).then((m) => m.ContactsModule),
            },
            {
                path: 'email',
                loadChildren: () => Promise.all(/*! import() | email-email-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~email-email-module~forms-forms-module~studen~c7798cec"), __webpack_require__.e("default~email-email-module~forms-forms-module"), __webpack_require__.e("email-email-module")]).then(__webpack_require__.bind(null, /*! ./email/email.module */ "IrIT")).then((m) => m.EmailModule),
            },
            {
                path: 'apps',
                loadChildren: () => Promise.all(/*! import() | apps-apps-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~contacts-contacts-module~fees-fees-module~forms-fo~1ce6c176"), __webpack_require__.e("default~apps-apps-module~contacts-contacts-module~departments-departments-module~forms-forms-module~~53d2be0d"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~forms-forms-module~student-student-module~teacher-~5b2bf83d"), __webpack_require__.e("default~apps-apps-module~forms-forms-module~task-task-module~ui-ui-module"), __webpack_require__.e("default~apps-apps-module~task-task-module~widget-widget-module"), __webpack_require__.e("apps-apps-module")]).then(__webpack_require__.bind(null, /*! ./apps/apps.module */ "IYw8")).then((m) => m.AppsModule),
            },
            {
                path: 'widget',
                loadChildren: () => Promise.all(/*! import() | widget-widget-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~7d697d47"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~email-email-module~forms-forms-module~studen~c7798cec"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~student-student-module~teacher-teacher-modul~13a53a71"), __webpack_require__.e("default~dashboard-dashboard-module~student-student-module~ui-ui-module~widget-widget-module"), __webpack_require__.e("default~apps-apps-module~task-task-module~widget-widget-module"), __webpack_require__.e("widget-widget-module")]).then(__webpack_require__.bind(null, /*! ./widget/widget.module */ "kXT5")).then((m) => m.WidgetModule),
            },
            {
                path: 'ui',
                loadChildren: () => Promise.all(/*! import() | ui-ui-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~contacts-contacts-module~departments-departments-module~fees-fees-m~83994bf1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("default~apps-apps-module~contacts-contacts-module~departments-departments-module~forms-forms-module~~53d2be0d"), __webpack_require__.e("default~apps-apps-module~forms-forms-module~task-task-module~ui-ui-module"), __webpack_require__.e("default~dashboard-dashboard-module~student-student-module~ui-ui-module~widget-widget-module"), __webpack_require__.e("default~forms-forms-module~ui-ui-module"), __webpack_require__.e("default~extra-pages-extra-pages-module~ui-ui-module"), __webpack_require__.e("ui-ui-module")]).then(__webpack_require__.bind(null, /*! ./ui/ui.module */ "oRDy")).then((m) => m.UiModule),
            },
            {
                path: 'forms',
                loadChildren: () => Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~953dc76f"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~b7ef45e3"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~courses-courses-module~de~7532a680"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~contacts-contacts-module~fees-fees-module~forms-fo~1ce6c176"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~email-email-module~forms-forms-module~studen~c7798cec"), __webpack_require__.e("default~apps-apps-module~contacts-contacts-module~departments-departments-module~forms-forms-module~~53d2be0d"), __webpack_require__.e("default~apps-apps-module~calendar-calendar-module~forms-forms-module~student-student-module~teacher-~5b2bf83d"), __webpack_require__.e("default~apps-apps-module~forms-forms-module~task-task-module~ui-ui-module"), __webpack_require__.e("default~email-email-module~forms-forms-module"), __webpack_require__.e("default~forms-forms-module~ui-ui-module"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ./forms/forms.module */ "9Nm5")).then((m) => m.FormModule),
            },
            {
                path: 'tables',
                loadChildren: () => Promise.all(/*! import() | tables-tables-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~d26bbcd1"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~3eb9bd98"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~contacts-contacts-module~departments-departments-m~8ba3f803"), __webpack_require__.e("tables-tables-module")]).then(__webpack_require__.bind(null, /*! ./tables/tables.module */ "w7GV")).then((m) => m.TablesModule),
            },
            {
                path: 'media',
                loadChildren: () => __webpack_require__.e(/*! import() | media-media-module */ "media-media-module").then(__webpack_require__.bind(null, /*! ./media/media.module */ "vbE1")).then((m) => m.MediaModule),
            },
            {
                path: 'charts',
                loadChildren: () => Promise.all(/*! import() | charts-charts-module */[__webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~7d697d47"), __webpack_require__.e("default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~email-email-module~forms-forms-module~studen~c7798cec"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~student-student-module~teacher-teacher-modul~13a53a71"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null, /*! ./charts/charts.module */ "eGC9")).then((m) => m.ChartsModule),
            },
            {
                path: 'timeline',
                loadChildren: () => __webpack_require__.e(/*! import() | timeline-timeline-module */ "timeline-timeline-module").then(__webpack_require__.bind(null, /*! ./timeline/timeline.module */ "WQCU")).then((m) => m.TimelineModule),
            },
            {
                path: 'icons',
                loadChildren: () => __webpack_require__.e(/*! import() | icons-icons-module */ "icons-icons-module").then(__webpack_require__.bind(null, /*! ./icons/icons.module */ "sbs8")).then((m) => m.IconsModule),
            },
            {
                path: 'extra-pages',
                loadChildren: () => Promise.all(/*! import() | extra-pages-extra-pages-module */[__webpack_require__.e("default~accounts-accounts-module~apps-apps-module~calendar-calendar-module~contacts-contacts-module~~f2fdfd92"), __webpack_require__.e("default~accounts-accounts-module~apps-apps-module~extra-pages-extra-pages-module~fees-fees-module~ho~ca53c7cd"), __webpack_require__.e("default~extra-pages-extra-pages-module~ui-ui-module"), __webpack_require__.e("extra-pages-extra-pages-module")]).then(__webpack_require__.bind(null, /*! ./extra-pages/extra-pages.module */ "hOZs")).then((m) => m.ExtraPagesModule),
            },
            {
                path: 'maps',
                loadChildren: () => __webpack_require__.e(/*! import() | maps-maps-module */ "maps-maps-module").then(__webpack_require__.bind(null, /*! ./maps/maps.module */ "x04h")).then((m) => m.MapsModule),
            },
            {
                path: 'multilevel',
                loadChildren: () => __webpack_require__.e(/*! import() | multilevel-multilevel-module */ "multilevel-multilevel-module").then(__webpack_require__.bind(null, /*! ./multilevel/multilevel.module */ "6LPo")).then((m) => m.MultilevelModule),
            },
        ],
    },
    {
        path: 'authentication',
        component: _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | authentication-authentication-module */ "authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "OpKh")).then((m) => m.AuthenticationModule),
    },
    { path: '**', component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__["Page404Component"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map