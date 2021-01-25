(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207"],{

/***/ "DKVz":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js ***!
  \***********************************************************************/
/*! exports provided: NGX_ECHARTS_CONFIG, NgxEchartsDirective, NgxEchartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_ECHARTS_CONFIG", function() { return NGX_ECHARTS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxEchartsDirective", function() { return NgxEchartsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxEchartsModule", function() { return NgxEchartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resize-observer-polyfill */ "bdgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







class ChangeFilter {
    constructor(changes) {
        this.changes = changes;
    }
    static of(changes) {
        return new ChangeFilter(changes);
    }
    notEmpty(key) {
        if (this.changes[key]) {
            const value = this.changes[key].currentValue;
            if (value !== undefined && value !== null) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value);
            }
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
    }
    has(key) {
        if (this.changes[key]) {
            const value = this.changes[key].currentValue;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
    }
    notFirst(key) {
        if (this.changes[key] && !this.changes[key].isFirstChange()) {
            const value = this.changes[key].currentValue;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
    }
    notFirstAndEmpty(key) {
        if (this.changes[key] && !this.changes[key].isFirstChange()) {
            const value = this.changes[key].currentValue;
            if (value !== undefined && value !== null) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value);
            }
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
    }
}

const NGX_ECHARTS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NGX_ECHARTS_CONFIG');
let NgxEchartsDirective = class NgxEchartsDirective {
    constructor(config, el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        this.autoResize = true;
        this.loadingType = 'default';
        // ngx-echarts events
        this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.optionsError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // echarts mouse events
        this.chartClick = this.createLazyEvent('click');
        this.chartDblClick = this.createLazyEvent('dblclick');
        this.chartMouseDown = this.createLazyEvent('mousedown');
        this.chartMouseMove = this.createLazyEvent('mousemove');
        this.chartMouseUp = this.createLazyEvent('mouseup');
        this.chartMouseOver = this.createLazyEvent('mouseover');
        this.chartMouseOut = this.createLazyEvent('mouseout');
        this.chartGlobalOut = this.createLazyEvent('globalout');
        this.chartContextMenu = this.createLazyEvent('contextmenu');
        // echarts mouse events
        this.chartLegendSelectChanged = this.createLazyEvent('legendselectchanged');
        this.chartLegendSelected = this.createLazyEvent('legendselected');
        this.chartLegendUnselected = this.createLazyEvent('legendunselected');
        this.chartLegendScroll = this.createLazyEvent('legendscroll');
        this.chartDataZoom = this.createLazyEvent('datazoom');
        this.chartDataRangeSelected = this.createLazyEvent('datarangeselected');
        this.chartTimelineChanged = this.createLazyEvent('timelinechanged');
        this.chartTimelinePlayChanged = this.createLazyEvent('timelineplaychanged');
        this.chartRestore = this.createLazyEvent('restore');
        this.chartDataViewChanged = this.createLazyEvent('dataviewchanged');
        this.chartMagicTypeChanged = this.createLazyEvent('magictypechanged');
        this.chartPieSelectChanged = this.createLazyEvent('pieselectchanged');
        this.chartPieSelected = this.createLazyEvent('pieselected');
        this.chartPieUnselected = this.createLazyEvent('pieunselected');
        this.chartMapSelectChanged = this.createLazyEvent('mapselectchanged');
        this.chartMapSelected = this.createLazyEvent('mapselected');
        this.chartMapUnselected = this.createLazyEvent('mapunselected');
        this.chartAxisAreaSelected = this.createLazyEvent('axisareaselected');
        this.chartFocusNodeAdjacency = this.createLazyEvent('focusnodeadjacency');
        this.chartUnfocusNodeAdjacency = this.createLazyEvent('unfocusnodeadjacency');
        this.chartBrush = this.createLazyEvent('brush');
        this.chartBrushEnd = this.createLazyEvent('brushend');
        this.chartBrushSelected = this.createLazyEvent('brushselected');
        this.chartRendered = this.createLazyEvent('rendered');
        this.chartFinished = this.createLazyEvent('finished');
        this.animationFrameID = null;
        this.echarts = config.echarts;
    }
    ngOnChanges(changes) {
        const filter = ChangeFilter.of(changes);
        filter.notFirstAndEmpty('options').subscribe((opt) => this.onOptionsChange(opt));
        filter.notFirstAndEmpty('merge').subscribe((opt) => this.setOption(opt));
        filter.has('loading').subscribe((v) => this.toggleLoading(!!v));
        filter.notFirst('theme').subscribe(() => this.refreshChart());
    }
    ngOnInit() {
        if (this.autoResize) {
            this.resizeSub = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"](() => {
                this.animationFrameID = window.requestAnimationFrame(() => this.resize());
            });
            this.resizeSub.observe(this.el.nativeElement);
        }
    }
    ngOnDestroy() {
        if (this.resizeSub) {
            this.resizeSub.unobserve(this.el.nativeElement);
            window.cancelAnimationFrame(this.animationFrameID);
        }
        this.dispose();
    }
    ngAfterViewInit() {
        setTimeout(() => this.initChart());
    }
    dispose() {
        if (this.chart) {
            this.chart.dispose();
            this.chart = null;
        }
    }
    /**
     * resize chart
     */
    resize() {
        if (this.chart) {
            this.chart.resize();
        }
    }
    toggleLoading(loading) {
        if (this.chart) {
            loading
                ? this.chart.showLoading(this.loadingType, this.loadingOpts)
                : this.chart.hideLoading();
        }
    }
    setOption(option, opts) {
        if (this.chart) {
            try {
                this.chart.setOption(option, opts);
            }
            catch (e) {
                console.error(e);
                this.optionsError.emit(e);
            }
        }
    }
    /**
     * dispose old chart and create a new one.
     */
    refreshChart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dispose();
            yield this.initChart();
        });
    }
    createChart() {
        const dom = this.el.nativeElement;
        if (window && window.getComputedStyle) {
            const prop = window.getComputedStyle(dom, null).getPropertyValue('height');
            if ((!prop || prop === '0px') && (!dom.style.height || dom.style.height === '0px')) {
                dom.style.height = '400px';
            }
        }
        // here a bit tricky: we check if the echarts module is provided as function returning native import('...') then use the promise
        // otherwise create the function that imitates behaviour above with a provided as is module
        return this.ngZone.runOutsideAngular(() => {
            const load = typeof this.echarts === 'function' ? this.echarts : () => Promise.resolve(this.echarts);
            return load().then(({ init }) => init(dom, this.theme, this.initOpts));
        });
    }
    initChart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.onOptionsChange(this.options);
            if (this.merge && this.chart) {
                this.setOption(this.merge);
            }
        });
    }
    onOptionsChange(opt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!opt) {
                return;
            }
            if (this.chart) {
                this.setOption(this.options, true);
            }
            else {
                this.chart = yield this.createChart();
                this.chartInit.emit(this.chart);
                this.setOption(this.options, true);
            }
        });
    }
    // allows to lazily bind to only those events that are requested through the `@Output` by parent components
    // see https://stackoverflow.com/questions/51787972/optimal-reentering-the-ngzone-from-eventemitter-event for more info
    createLazyEvent(eventName) {
        return this.chartInit.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((chart) => new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            chart.on(eventName, (data) => this.ngZone.run(() => observer.next(data)));
            return () => chart.off(eventName);
        })));
    }
};
NgxEchartsDirective.ɵfac = function NgxEchartsDirective_Factory(t) { return new (t || NgxEchartsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NGX_ECHARTS_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
NgxEchartsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgxEchartsDirective, selectors: [["echarts"], ["", "echarts", ""]], inputs: { autoResize: "autoResize", loadingType: "loadingType", options: "options", theme: "theme", loading: "loading", initOpts: "initOpts", merge: "merge", loadingOpts: "loadingOpts" }, outputs: { chartInit: "chartInit", optionsError: "optionsError", chartClick: "chartClick", chartDblClick: "chartDblClick", chartMouseDown: "chartMouseDown", chartMouseMove: "chartMouseMove", chartMouseUp: "chartMouseUp", chartMouseOver: "chartMouseOver", chartMouseOut: "chartMouseOut", chartGlobalOut: "chartGlobalOut", chartContextMenu: "chartContextMenu", chartLegendSelectChanged: "chartLegendSelectChanged", chartLegendSelected: "chartLegendSelected", chartLegendUnselected: "chartLegendUnselected", chartLegendScroll: "chartLegendScroll", chartDataZoom: "chartDataZoom", chartDataRangeSelected: "chartDataRangeSelected", chartTimelineChanged: "chartTimelineChanged", chartTimelinePlayChanged: "chartTimelinePlayChanged", chartRestore: "chartRestore", chartDataViewChanged: "chartDataViewChanged", chartMagicTypeChanged: "chartMagicTypeChanged", chartPieSelectChanged: "chartPieSelectChanged", chartPieSelected: "chartPieSelected", chartPieUnselected: "chartPieUnselected", chartMapSelectChanged: "chartMapSelectChanged", chartMapSelected: "chartMapSelected", chartMapUnselected: "chartMapUnselected", chartAxisAreaSelected: "chartAxisAreaSelected", chartFocusNodeAdjacency: "chartFocusNodeAdjacency", chartUnfocusNodeAdjacency: "chartUnfocusNodeAdjacency", chartBrush: "chartBrush", chartBrushEnd: "chartBrushEnd", chartBrushSelected: "chartBrushSelected", chartRendered: "chartRendered", chartFinished: "chartFinished" }, exportAs: ["echarts"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
NgxEchartsDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NGX_ECHARTS_CONFIG,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxEchartsDirective.prototype, "options", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxEchartsDirective.prototype, "theme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxEchartsDirective.prototype, "loading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxEchartsDirective.prototype, "initOpts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxEchartsDirective.prototype, "merge", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxEchartsDirective.prototype, "autoResize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxEchartsDirective.prototype, "loadingType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxEchartsDirective.prototype, "loadingOpts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartInit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "optionsError", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartDblClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartMouseDown", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartMouseMove", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartMouseUp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartMouseOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartMouseOut", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartGlobalOut", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartContextMenu", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartLegendSelectChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartLegendSelected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartLegendUnselected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartLegendScroll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartDataZoom", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartDataRangeSelected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartTimelineChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartTimelinePlayChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartRestore", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartDataViewChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartMagicTypeChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartPieSelectChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartPieSelected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartPieUnselected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartMapSelectChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartMapSelected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartMapUnselected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartAxisAreaSelected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartFocusNodeAdjacency", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartUnfocusNodeAdjacency", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartBrush", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartBrushEnd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartBrushSelected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartRendered", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxEchartsDirective.prototype, "chartFinished", void 0);
NgxEchartsDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NGX_ECHARTS_CONFIG))
], NgxEchartsDirective);

var NgxEchartsModule_1;
let NgxEchartsModule = NgxEchartsModule_1 = class NgxEchartsModule {
    static forRoot(config) {
        return {
            ngModule: NgxEchartsModule_1,
            providers: [{ provide: NGX_ECHARTS_CONFIG, useValue: config }],
        };
    }
    static forChild() {
        return {
            ngModule: NgxEchartsModule_1,
        };
    }
};
NgxEchartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxEchartsModule });
NgxEchartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgxEchartsModule_Factory(t) { return new (t || NgxEchartsModule)(); }, imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxEchartsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'echarts, [echarts]',
                exportAs: 'echarts'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [NGX_ECHARTS_CONFIG]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { autoResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loadingType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], chartInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], optionsError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartGlobalOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartContextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartLegendSelectChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartLegendSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartLegendUnselected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartLegendScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartDataZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartDataRangeSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartTimelineChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartTimelinePlayChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartRestore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartDataViewChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartMagicTypeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartPieSelectChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartPieSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartPieUnselected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartMapSelectChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartMapSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartMapUnselected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartAxisAreaSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartFocusNodeAdjacency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartUnfocusNodeAdjacency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartBrush: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartBrushEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartBrushSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartRendered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartFinished: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], initOpts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], merge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loadingOpts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxEchartsModule, { declarations: [NgxEchartsDirective], exports: [NgxEchartsDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxEchartsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [],
                declarations: [NgxEchartsDirective],
                exports: [NgxEchartsDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-echarts
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-echarts.js.map

/***/ })

}]);
//# sourceMappingURL=default~accounts-accounts-module~charts-charts-module~dashboard-dashboard-module~investments-investm~76057207-es2015.js.map