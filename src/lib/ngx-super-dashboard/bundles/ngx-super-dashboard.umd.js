(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('angular-google-charts'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-super-dashboard', ['exports', '@angular/core', '@angular/forms', 'angular-google-charts', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-super-dashboard'] = {}, global.ng.core, global.ng.forms, global.angularGoogleCharts, global.ng.common));
}(this, (function (exports, core, forms, angularGoogleCharts, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-super-dashboard.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSuperDashboardService = /** @class */ (function () {
        function NgxSuperDashboardService() {
        }
        NgxSuperDashboardService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxSuperDashboardService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxSuperDashboardService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgxSuperDashboardService_Factory() { return new NgxSuperDashboardService(); }, token: NgxSuperDashboardService, providedIn: "root" });
        return NgxSuperDashboardService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-super-dashboard.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSuperDashboardComponent = /** @class */ (function () {
        function NgxSuperDashboardComponent(fb) {
            this.fb = fb;
            this.onSelect = new core.EventEmitter();
            this.onSubmit = new core.EventEmitter();
            this.onSelectChart = new core.EventEmitter();
            console.log("NgxSuperDashboardComponent : constructor");
        }
        /**
         * @return {?}
         */
        NgxSuperDashboardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            //create dynamic fields and add validation for each field
            this.createForm();
        };
        /**
         * @param {?} data
         * @return {?}
         */
        NgxSuperDashboardComponent.prototype.typeCheck = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return data && Array.isArray(data) ? false : true;
        };
        /**
         * @return {?}
         */
        NgxSuperDashboardComponent.prototype.createForm = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var formGrp = {};
            this.dynamicFormFieldData.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                var _a;
                formGrp = __assign({}, formGrp, (_a = {}, _a[field.formControlKey] = ["", forms.Validators.compose([forms.Validators.required])], _a));
            }));
            this.dynamicForm = this.fb.group(formGrp);
        };
        // emit selected field value
        // emit selected field value
        /**
         * @param {?} ev
         * @return {?}
         */
        NgxSuperDashboardComponent.prototype.seletedValue = 
        // emit selected field value
        /**
         * @param {?} ev
         * @return {?}
         */
        function (ev) {
            this.onSelect.emit({
                selectedValue: ev.target.value,
                fieldControlName: ev.target.id,
            });
        };
        /**
         * @return {?}
         */
        NgxSuperDashboardComponent.prototype.onSubmitForm = /**
         * @return {?}
         */
        function () {
            this.onSubmit.emit(this.dynamicForm.value);
        };
        /**
         * @param {?} ev
         * @param {?} chartType
         * @return {?}
         */
        NgxSuperDashboardComponent.prototype.selectedChart = /**
         * @param {?} ev
         * @param {?} chartType
         * @return {?}
         */
        function (ev, chartType) {
            this.onSelectChart.emit({
                ev: ev,
                chartType: chartType,
            });
        };
        NgxSuperDashboardComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "lib-ngx-super-dashboard",
                        template: "\n    <div class=\"fields-bar\">\n      <form [formGroup]=\"dynamicForm\" (ngSubmit)=\"onSubmitForm()\">\n        <div class=\"grid-label-bar\" *ngIf=\"dynamicForm.value.length != 0\">\n          <ng-container\n            *ngFor=\"let field of dynamicFormFieldData; let i = index\"\n          >\n            <div\n              [ngClass]=\"field.className ? field.className + ' list' : 'list'\"\n              *ngIf=\"\n                field.lovDataList && field.lovDataList.length > 0;\n                else dynamicNonDropdown\n              \"\n            >\n              <div class=\"lable\">{{ field.lable }}<span>-</span></div>\n\n              <select\n                formControlName=\"{{ field.formControlKey }}\"\n                id=\"{{ field.formControlKey }}\"\n                (change)=\"seletedValue($event)\"\n                placeholder=\"Select\"\n              >\n                <option selected value=\"\">Select</option>\n                <option\n                  [value]=\"item.value\"\n                  *ngFor=\"let item of field.lovDataList\"\n                >\n                  {{ item.name }}\n                </option>\n              </select>\n            </div>\n\n            <ng-template #dynamicNonDropdown>\n              <div\n                [ngClass]=\"field.className ? field.className + ' list' : 'list'\"\n              >\n                <div class=\"lable\">{{ field.lable }}<span>-</span></div>\n                <input\n                  type=\"{{ field.type }}\"\n                  class=\"picker\"\n                  formControlName=\"{{ field.formControlKey }}\"\n                  id=\"{{ field.formControlKey }}\"\n                  (change)=\"seletedValue($event)\"\n                  placeholder=\"Select\"\n                />\n              </div>\n            </ng-template>\n          </ng-container>\n\n          <div class=\"list lastList\">\n            <div class=\"lable\">\n              *Accounts in Actuals <br />\n              *Ammount in Lakhs\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"grid-container\">\n      <div\n        class=\"grid-area-countCards\"\n        *ngIf=\"cardConfig && cardConfig.length > 0\"\n      >\n        <ng-container *ngFor=\"let item of cardConfig; let j = index\">\n          <div\n            [ngClass]=\"\n              item.className\n                ? item.className + ' card card-border-left'\n                : 'card card-border-left'\n            \"\n          >\n            <div class=\"card-header\">\n              <h3>{{ item.title }}</h3>\n            </div>\n            <div class=\"card-content\">\n              <p>{{ item.value }}</p>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n\n      <div\n        [ngClass]=\"\n          gridTwoConfig && gridTwoConfig !== null && gridTwoConfig !== undefined\n            ? 'grid-area-chart'\n            : 'grid-area-chart grid-area-expand'\n        \"\n      >\n        <ng-container *ngFor=\"let chart of chartsConfig\">\n          <div\n            [ngClass]=\"\n              chart.className\n                ? chart.className + ' card card-border-bottom'\n                : 'card card-border-bottom'\n            \"\n          >\n            <div class=\"card-header\">\n              <h3>{{ chart.cardTitle }}</h3>\n            </div>\n            <google-chart\n              style=\"width: 100%; height: 100%\"\n              [type]=\"chart.type\"\n              [data]=\"chart.chartData\"\n              [columns]=\"chart.chartOptionData.myColumns\"\n              [options]=\"chart.chartOptionData.chartOptions\"\n              (select)=\"selectedChart($event, chart.type)\"\n            ></google-chart>\n          </div>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"\n            gridOneConfig && gridOneConfig != null && gridOneConfig != undefined\n          \"\n        >\n          <div\n            [ngClass]=\"\n              gridOneConfig.className\n                ? gridOneConfig.className + 'card card-border-bottom'\n                : 'card card-border-bottom'\n            \"\n          >\n            <div class=\"card-header\">\n              <h3>{{ gridOneConfig.cardTitle }}</h3>\n            </div>\n            <div class=\"card-content\">\n              <table class=\"grid-table\">\n                <thead>\n                  <th *ngFor=\"let head of gridOneConfig.tableColumnHeadings\">\n                    {{ head }}\n                  </th>\n                </thead>\n                <tbody>\n                  <ng-container *ngIf=\"gridOneConfig.tableData; else noData\">\n                    <tr\n                      *ngFor=\"\n                        let item of gridOneConfig.tableData;\n                        let i = index\n                      \"\n                    >\n                      <td *ngFor=\"let val of gridOneConfig.tableDataKey\">\n                        {{ item[val] }}\n                      </td>\n                    </tr>\n                  </ng-container>\n                  <ng-template #noData>\n                    <tr>\n                      <td colspan=\"5\">No Data</td>\n                    </tr>\n                  </ng-template>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n      <div\n        class=\"grid-area-tableRecords\"\n        *ngIf=\"\n          gridTwoConfig && gridTwoConfig !== null && gridTwoConfig !== undefined\n        \"\n      >\n        <div\n          [ngClass]=\"\n            gridTwoConfig.className\n              ? gridTwoConfig.className + ' card card-border-top'\n              : 'card card-border-top'\n          \"\n        >\n          <div class=\"card-header\">\n            <h3>{{ gridTwoConfig.title }}</h3>\n          </div>\n          <div class=\"card-content\">\n            <table class=\"grid-table\">\n              <thead>\n                <th *ngFor=\"let head of gridTwoConfig.tableHeading\">\n                  {{ head }}\n                </th>\n              </thead>\n              <ng-container\n                *ngIf=\"\n                  gridTwoConfig.tableData && gridTwoConfig.tableData.length > 0\n                \"\n              >\n                <tbody>\n                  <tr *ngFor=\"let parent of gridTwoConfig.tableData\">\n                    <td>\n                      {{ parent.parentName }}\n                    </td>\n                    <td\n                      [attr.colspan]=\"gridTwoConfig.tableDataKey.length\"\n                      class=\"colspan\"\n                    >\n                      <tr *ngFor=\"let item of parent.childData\">\n                        <td *ngFor=\"let key of gridTwoConfig.tableDataKey\">\n                          {{ item[key] }}\n                        </td>\n                      </tr>\n                    </td>\n                  </tr>\n                </tbody>\n              </ng-container>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ["\n      .fields-bar {\n        width: 100vw;\n        position: fixed;\n        top: 0;\n        z-index: 999;\n        background-color: #111249;\n        display: flex;\n      }\n      .grid-label-bar {\n        grid-template-columns: auto auto auto auto auto auto auto;\n        gap: 10px;\n        padding: 5px 14px;\n        display: grid;\n        color: #fff;\n        font-size: 13px;\n      }\n\n      .grid-label-bar .list {\n        display: flex;\n        align-items: center;\n      }\n\n      .lable span {\n        margin-left: 6px;\n      }\n\n      input.picker[type=\"date\"] {\n        position: relative;\n      }\n\n      input.picker[type=\"date\"]::-webkit-calendar-picker-indicator {\n        position: absolute;\n        top: 0;\n        right: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        color: transparent;\n        background: transparent;\n      }\n\n      select,\n      input {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        background: none;\n        border: none;\n        color: #fff;\n        width: 118px;\n        padding: 0 6px;\n      }\n      select::-ms-expand {\n        display: none; /* Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */\n      }\n      select:focus-visible {\n        outline: none;\n      }\n\n      input::placeholder {\n        color: #fff;\n        opacity: 1; /* Firefox */\n      }\n      option {\n        background-color: #fff;\n        color: #000;\n      }\n      .grid-container {\n        --purple-color: #622248;\n        --card-border-width: 8px;\n      }\n      .grid-container {\n        height: auto !important;\n        display: grid;\n        grid-template-columns: auto auto auto auto auto;\n        grid-template-rows: auto auto auto;\n        gap: 12px;\n        background-color: #dddddd96;\n        padding: 7px;\n        margin-top: 3rem;\n      }\n\n      .card {\n        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n        margin: 5px 0 12px 0;\n        text-align: center;\n        background-color: #fff;\n        width: 18vw;\n        border-radius: 8px;\n      }\n\n      .card .card-header {\n        padding: 14px;\n        border-bottom: 1px solid #ddd;\n        background: none;\n        font-weight: 600;\n        font-size: 15px;\n      }\n      .card .card-content {\n        padding: 14px;\n      }\n      .card h3 {\n        font-size: 15px;\n        margin: 0;\n      }\n      .card p {\n        font-weight: 600;\n        font-size: 15px;\n        color: #853163;\n      }\n\n      .grid-area-countCards {\n        grid-area: 1/1/2/2;\n      }\n\n      .grid-area-chart {\n        grid-area: 1/2/3/4;\n      }\n\n      .grid-area-chart .card {\n        width: 40vw;\n        height: 40vh;\n        padding-bottom: 8px;\n      }\n\n      .grid-area-tableRecords {\n        grid-area: 1/4/3/-1;\n      }\n\n      .grid-area-tableRecords .card {\n        overflow: auto;\n        width: 38vw;\n        height: 100%;\n      }\n      .grid-area-tableRecords .card-content {\n        padding: 12px 10px;\n      }\n\n      .grid-table {\n        font-weight: 400;\n        font-size: 12px;\n        border-collapse: collapse;\n        width: 100%;\n        height: auto;\n        overflow: auto;\n        border: 1px solid #ddd;\n      }\n\n      .grid-table tr,\n      .grid-table th {\n        border-bottom: 1px solid #ddd;\n      }\n      .grid-table .colspan tr:last-child {\n        border: none;\n      }\n      .grid-table td {\n        padding: 5px 0;\n      }\n      .colspan td {\n        border: none !important;\n        width: 7vw !important;\n      }\n\n      .grid-table td:nth-child(1),\n      .grid-table th:nth-child(1) {\n        border-right: 1px solid #f2f2f2;\n        width: 10vw;\n      }\n\n      .grid-table th {\n        padding-top: 12px;\n        padding-bottom: 12px;\n        text-align: center;\n        width: 7vw;\n      }\n\n      @media (max-width: 850px) {\n        .grid-container {\n          gap: 10px;\n        }\n      }\n\n      @media (max-width: 1089px) {\n        .grid-label-bar .lastList {\n          display: none;\n        }\n      }\n\n      @media (max-width: 786px) {\n        .grid-label-bar {\n          grid-template-columns: auto auto auto;\n        }\n      }\n      @media (max-width: 580px) {\n        .grid-label-bar {\n          grid-template-columns: auto auto;\n        }\n        .card-header {\n          font-size: 14px;\n        }\n        .grid-container {\n          grid-template-columns: auto;\n          grid-template-rows: auto;\n          gap: 0px;\n        }\n        .grid-area-countCards,\n        .grid-area-chart,\n        .grid-area-tableRecords {\n          grid-area: auto;\n        }\n        .grid-area-chart .card,\n        .grid-area-countCards .card,\n        .grid-area-tableRecords .card {\n          width: 100%;\n          height: auto;\n        }\n        .grid-area-countCards .card-content.chart {\n          height: auto;\n        }\n      }\n      .card-border-left {\n        border-left-color: var(--purple-color);\n        border-left-width: var(--card-border-width) !important;\n        border-left-style: solid;\n      }\n      .card-border-bottom {\n        border-bottom-color: var(--purple-color);\n        border-bottom-width: var(--card-border-width) !important;\n        border-bottom-style: solid;\n      }\n      .grid-area-expand {\n        grid-area: 1/2/3/-1;\n      }\n      .grid-area-expand .card {\n        width: 100%;\n        height: 54vh;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NgxSuperDashboardComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        NgxSuperDashboardComponent.propDecorators = {
            dynamicFormFieldData: [{ type: core.Input }],
            cardConfig: [{ type: core.Input }],
            chartsConfig: [{ type: core.Input }],
            gridOneConfig: [{ type: core.Input }],
            gridTwoConfig: [{ type: core.Input }],
            onSelect: [{ type: core.Output }],
            onSubmit: [{ type: core.Output }],
            onSelectChart: [{ type: core.Output }]
        };
        return NgxSuperDashboardComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxSuperDashboardComponent.prototype.dynamicForm;
        /** @type {?} */
        NgxSuperDashboardComponent.prototype.dynamicFormFieldData;
        /** @type {?} */
        NgxSuperDashboardComponent.prototype.cardConfig;
        /** @type {?} */
        NgxSuperDashboardComponent.prototype.chartsConfig;
        /** @type {?} */
        NgxSuperDashboardComponent.prototype.gridOneConfig;
        /** @type {?} */
        NgxSuperDashboardComponent.prototype.gridTwoConfig;
        /** @type {?} */
        NgxSuperDashboardComponent.prototype.onSelect;
        /** @type {?} */
        NgxSuperDashboardComponent.prototype.onSubmit;
        /** @type {?} */
        NgxSuperDashboardComponent.prototype.onSelectChart;
        /**
         * @type {?}
         * @private
         */
        NgxSuperDashboardComponent.prototype.fb;
    }
    /** @type {?} */
    var DynamicFieldsConfiguration = (/**
     * @param {?} fieldConfig
     * @return {?}
     */
    function (fieldConfig) {
        if (fieldConfig)
            return fieldConfig;
        else
            return testFieldData;
    });
    /** @type {?} */
    var testFieldData = [
        { lable: "Zone", formControlKey: "zone", lovDataList: [] },
        { lable: "Branch", formControlKey: "branch", lovDataList: [] },
        { lable: "Teams", formControlKey: "teams", lovDataList: [] },
        { lable: "Product", formControlKey: "product", lovDataList: [] },
        { lable: "Start Date", formControlKey: "startDate", type: "date" },
        { lable: "End Date", formControlKey: "endDate", type: "date" },
    ];
    /**
     * @record
     */
    function AppLOVData() { }
    if (false) {
        /** @type {?} */
        AppLOVData.prototype.name;
        /** @type {?} */
        AppLOVData.prototype.value;
    }
    /**
     * @record
     */
    function DynamicFieldsData() { }
    if (false) {
        /** @type {?} */
        DynamicFieldsData.prototype.lable;
        /** @type {?} */
        DynamicFieldsData.prototype.formControlKey;
        /** @type {?|undefined} */
        DynamicFieldsData.prototype.lovDataList;
        /** @type {?|undefined} */
        DynamicFieldsData.prototype.type;
        /** @type {?|undefined} */
        DynamicFieldsData.prototype.className;
    }
    /**
     * @record
     */
    function SelectedFieldValueEmit() { }
    if (false) {
        /** @type {?} */
        SelectedFieldValueEmit.prototype.selectedValue;
        /** @type {?} */
        SelectedFieldValueEmit.prototype.fieldControlName;
    }
    /**
     * @record
     */
    function SetDataOption() { }
    if (false) {
        /** @type {?} */
        SetDataOption.prototype.fetchLovData;
        /** @type {?} */
        SetDataOption.prototype.value;
        /** @type {?} */
        SetDataOption.prototype.name;
        /** @type {?|undefined} */
        SetDataOption.prototype.name2;
    }
    // interfaces for grid cardsList:
    /** @type {?} */
    var DynamicCardsConfiguration = (/**
     * @param {?} cardConfig
     * @return {?}
     */
    function (cardConfig) {
        if (cardConfig)
            return cardConfig;
        else
            return testCardData;
    });
    /** @type {?} */
    var testCardData = [
        { title: "Total Proposals", value: 700 },
        { title: "On Process", value: 230 },
        { title: "Sanctioned", value: 300 },
        { title: "Rejected", value: 254 },
        { title: "Opened prending for > 30 days", value: 143 },
        { title: "Disbursed", value: 120 },
    ];
    /**
     * @record
     */
    function DynamicCardsData() { }
    if (false) {
        /** @type {?} */
        DynamicCardsData.prototype.title;
        /** @type {?} */
        DynamicCardsData.prototype.value;
        /** @type {?|undefined} */
        DynamicCardsData.prototype.className;
    }
    /** @type {?} */
    var DashboardChartsConfig = (/**
     * @param {?=} chartsData
     * @return {?}
     */
    function (chartsData) {
        if (chartsData) {
            return chartsData;
        }
        else {
            return testChartsData;
        }
    });
    /** @type {?} */
    var testChartsData = [
        {
            type: angularGoogleCharts.ChartType.ComboChart,
            cardTitle: "Monthly Wise",
            chartOptionData: {
                myColumns: ["Year", "Retail", "Agri", "MSME", "Gold", "Corp"],
                chartOptions: {
                    title: "Monthly Wise",
                    chartArea: { width: "50%" },
                    hAxis: {
                        title: "Modules",
                        minValue: 0,
                    },
                    vAxis: {
                        title: "No. Of Amount",
                    },
                    seriesType: "bars",
                },
            },
            chartData: [
                ["2023/05", 50, 33, 24.5, 33, 22],
                ["2024/05", 23, 41, 22.5, 22, 2],
                ["2021/05", 44, 82, 13, 43, 12],
                ["2023/05", 19, 33, 23, 21, 89],
                ["2022/05", 30, 20, 12, 34, 22],
            ],
            className: "",
        },
        {
            type: angularGoogleCharts.ChartType.PieChart,
            cardTitle: "Total Sanctioned",
            chartOptionData: {
                myColumns: [
                    ["Retail", "Agri", "MSME", "GOLD", "CORP"],
                    "Leads Count",
                    { role: "style" },
                ],
                chartOptions: {
                    title: "Sanctioned Amount",
                    chartArea: { width: "50%" },
                    slices: {
                        0: { color: "#622248" },
                        1: { color: "#109618" },
                        2: { color: "#3366cc" },
                        3: { color: "red" },
                        4: { color: "#ff9900" },
                    },
                },
            },
            chartData: [
                ["Retail", 3445, "red"],
                ["Agri", 3445, "red"],
                ["MSME", 3445, "red"],
                ["Gold", 3445, "red"],
            ],
            className: "",
        },
    ];
    /**
     * @record
     */
    function DashardCardConfig() { }
    if (false) {
        /** @type {?} */
        DashardCardConfig.prototype.type;
        /** @type {?} */
        DashardCardConfig.prototype.chartOptionData;
        /** @type {?} */
        DashardCardConfig.prototype.chartData;
        /** @type {?|undefined} */
        DashardCardConfig.prototype.cardTitle;
        /** @type {?|undefined} */
        DashardCardConfig.prototype.className;
    }
    /**
     * @record
     */
    function ChartOptionsConfig() { }
    if (false) {
        /** @type {?} */
        ChartOptionsConfig.prototype.myColumns;
        /** @type {?} */
        ChartOptionsConfig.prototype.chartOptions;
    }
    /**
     * @record
     */
    function ChartAxisData() { }
    if (false) {
        /** @type {?} */
        ChartAxisData.prototype.title;
        /** @type {?} */
        ChartAxisData.prototype.chartArea;
        /** @type {?|undefined} */
        ChartAxisData.prototype.slices;
        /** @type {?|undefined} */
        ChartAxisData.prototype.hAxis;
        /** @type {?|undefined} */
        ChartAxisData.prototype.vAxis;
        /** @type {?|undefined} */
        ChartAxisData.prototype.seriesType;
        /** @type {?|undefined} */
        ChartAxisData.prototype.series;
    }
    /**
     * @record
     */
    function AxisVlaues() { }
    if (false) {
        /** @type {?|undefined} */
        AxisVlaues.prototype.title;
        /** @type {?|undefined} */
        AxisVlaues.prototype.minValue;
    }
    /**
     * @record
     */
    function ChartEventEmitOnSelect() { }
    if (false) {
        /** @type {?} */
        ChartEventEmitOnSelect.prototype.ev;
        /** @type {?} */
        ChartEventEmitOnSelect.prototype.chartType;
    }
    /** @type {?} */
    var CardTableDataConfig = (/**
     * @param {?=} cardTableData
     * @return {?}
     */
    function (cardTableData) {
        if (cardTableData) {
            return cardTableData;
        }
        else {
            return testCardTable;
        }
    });
    /** @type {?} */
    var testCardTable = {
        cardTitle: "Top 5 Branches",
        tableColumnHeadings: ["", "Retail", "Agri", "MSME", "Gold"],
        tableDataKey: ["orgName", "retail", "agri", "msme", "gold"],
        tableData: [
            {
                orgName: "Chennai",
                retail: "849",
                agri: "599",
                msme: "500",
                gold: "200",
            },
            {
                orgName: "Delhi",
                retail: "200",
                agri: "300",
                msme: "400",
                gold: "150",
            },
            {
                orgName: "Tnagar",
                retail: "849",
                agri: "480",
                msme: "250",
                gold: "600",
            },
            {
                orgName: "Poonamale",
                retail: "940",
                agri: "234",
                msme: "700",
                gold: "400",
            },
        ],
    };
    // WARNING: interface has both a type and a value, skipping emit
    /**
     * @record
     */
    function GridTableConfigData() { }
    if (false) {
        /** @type {?|undefined} */
        GridTableConfigData.prototype.title;
        /** @type {?} */
        GridTableConfigData.prototype.tableHeading;
        /** @type {?} */
        GridTableConfigData.prototype.tableDataKey;
        /** @type {?} */
        GridTableConfigData.prototype.tableData;
        /** @type {?|undefined} */
        GridTableConfigData.prototype.className;
    }
    /** @type {?} */
    var GridTableDataConfig = (/**
     * @param {?=} gridTableData
     * @return {?}
     */
    function (gridTableData) {
        if (gridTableData) {
            return gridTableData;
        }
        else {
            return testGridTable;
        }
    });
    /** @type {?} */
    var testGridTable = {
        title: "Scheme Wise",
        tableHeading: [
            "Loan Type",
            "Scheme",
            "No of Acc #",
            "Limit in (Lakhs)",
            "OS amt in(Lakhs)",
        ],
        tableData: [
            {
                parentName: "Chennai",
                childData: [
                    {
                        tpmSeqId: 62685,
                        tpmCode: "2",
                        tpmModifiedDate: "2024-04-24T07:49:20.879+0000",
                        tpmPrdCode: "Car Loan",
                        schemeType: "Car Dealer",
                        noOfAcc: "S14",
                        limit: "344",
                        Sanctioned: "20302",
                    },
                    {
                        tpmSeqId: 62698,
                        tpmCode: "2",
                        tpmModifiedDate: "2024-04-24T07:49:20.889+0000",
                        tpmPrdCode: "Car Loan",
                        schemeType: "Luxury Car Loan",
                        noOfAcc: "84",
                        limit: "21232",
                        Sanctioned: "121.45",
                    },
                ],
            },
            {
                parentName: "Hyderabad",
                childData: [
                    {
                        tpmSeqId: 62686,
                        tpmCode: "2",
                        tpmModifiedDate: "2024-04-24T07:49:20.880+0000",
                        tpmPrdCode: "Cash Loan",
                        schemeType: "Property Loan",
                        noOfAcc: "S34",
                        limit: "676",
                        Sanctioned: "23",
                    },
                ],
            },
        ],
        tableDataKey: ["schemeType", "noOfAcc", "limit", "Sanctioned"],
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-super-dashboard.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSuperDashboardModule = /** @class */ (function () {
        function NgxSuperDashboardModule() {
        }
        NgxSuperDashboardModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgxSuperDashboardComponent],
                        imports: [common.CommonModule, forms.FormsModule, forms.ReactiveFormsModule, angularGoogleCharts.GoogleChartsModule],
                        providers: [angularGoogleCharts.ScriptLoaderService],
                        exports: [NgxSuperDashboardComponent],
                    },] }
        ];
        return NgxSuperDashboardModule;
    }());

    exports.CardTableDataConfig = CardTableDataConfig;
    exports.DashboardChartsConfig = DashboardChartsConfig;
    exports.DynamicCardsConfiguration = DynamicCardsConfiguration;
    exports.DynamicFieldsConfiguration = DynamicFieldsConfiguration;
    exports.GridTableDataConfig = GridTableDataConfig;
    exports.NgxSuperDashboardComponent = NgxSuperDashboardComponent;
    exports.NgxSuperDashboardModule = NgxSuperDashboardModule;
    exports.NgxSuperDashboardService = NgxSuperDashboardService;
    exports.testCardData = testCardData;
    exports.testCardTable = testCardTable;
    exports.testChartsData = testChartsData;
    exports.testFieldData = testFieldData;
    exports.testGridTable = testGridTable;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-super-dashboard.umd.js.map
