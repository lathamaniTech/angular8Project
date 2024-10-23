import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { __assign } from 'tslib';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartType, GoogleChartsModule, ScriptLoaderService } from 'angular-google-charts';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-super-dashboard.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxSuperDashboardService = /** @class */ (function () {
    function NgxSuperDashboardService() {
    }
    NgxSuperDashboardService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxSuperDashboardService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxSuperDashboardService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxSuperDashboardService_Factory() { return new NgxSuperDashboardService(); }, token: NgxSuperDashboardService, providedIn: "root" });
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
        this.onSelect = new EventEmitter();
        this.onSubmit = new EventEmitter();
        this.onSelectChart = new EventEmitter();
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
            formGrp = __assign({}, formGrp, (_a = {}, _a[field.formControlKey] = ["", Validators.compose([Validators.required])], _a));
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
        { type: Component, args: [{
                    selector: "lib-ngx-super-dashboard",
                    template: "\n    <div class=\"fields-bar\">\n      <form [formGroup]=\"dynamicForm\" (ngSubmit)=\"onSubmitForm()\">\n        <div class=\"grid-label-bar\" *ngIf=\"dynamicForm.value.length != 0\">\n          <ng-container\n            *ngFor=\"let field of dynamicFormFieldData; let i = index\"\n          >\n            <div\n              [ngClass]=\"field.className ? field.className + ' list' : 'list'\"\n              *ngIf=\"\n                field.lovDataList && field.lovDataList.length > 0;\n                else dynamicNonDropdown\n              \"\n            >\n              <div class=\"lable\">{{ field.lable }}<span>-</span></div>\n\n              <select\n                formControlName=\"{{ field.formControlKey }}\"\n                id=\"{{ field.formControlKey }}\"\n                (change)=\"seletedValue($event)\"\n                placeholder=\"Select\"\n              >\n                <option selected value=\"\">Select</option>\n                <option\n                  [value]=\"item.value\"\n                  *ngFor=\"let item of field.lovDataList\"\n                >\n                  {{ item.name }}\n                </option>\n              </select>\n            </div>\n\n            <ng-template #dynamicNonDropdown>\n              <div\n                [ngClass]=\"field.className ? field.className + ' list' : 'list'\"\n              >\n                <div class=\"lable\">{{ field.lable }}<span>-</span></div>\n                <input\n                  type=\"{{ field.type }}\"\n                  class=\"picker\"\n                  formControlName=\"{{ field.formControlKey }}\"\n                  id=\"{{ field.formControlKey }}\"\n                  (change)=\"seletedValue($event)\"\n                  placeholder=\"Select\"\n                />\n              </div>\n            </ng-template>\n          </ng-container>\n\n          <div class=\"list lastList\">\n            <div class=\"lable\">\n              *Accounts in Actuals <br />\n              *Ammount in Lakhs\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"grid-container\">\n      <div\n        class=\"grid-area-countCards\"\n        *ngIf=\"cardConfig && cardConfig.length > 0\"\n      >\n        <ng-container *ngFor=\"let item of cardConfig; let j = index\">\n          <div\n            [ngClass]=\"\n              item.className\n                ? item.className + ' card card-border-left'\n                : 'card card-border-left'\n            \"\n          >\n            <div class=\"card-header\">\n              <h3>{{ item.title }}</h3>\n            </div>\n            <div class=\"card-content\">\n              <p>{{ item.value }}</p>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n\n      <div\n        [ngClass]=\"\n          gridTwoConfig && gridTwoConfig !== null && gridTwoConfig !== undefined\n            ? 'grid-area-chart'\n            : 'grid-area-chart grid-area-expand'\n        \"\n      >\n        <ng-container *ngFor=\"let chart of chartsConfig\">\n          <div\n            [ngClass]=\"\n              chart.className\n                ? chart.className + ' card card-border-bottom'\n                : 'card card-border-bottom'\n            \"\n          >\n            <div class=\"card-header\">\n              <h3>{{ chart.cardTitle }}</h3>\n            </div>\n            <google-chart\n              style=\"width: 100%; height: 100%\"\n              [type]=\"chart.type\"\n              [data]=\"chart.chartData\"\n              [columns]=\"chart.chartOptionData.myColumns\"\n              [options]=\"chart.chartOptionData.chartOptions\"\n              (select)=\"selectedChart($event, chart.type)\"\n            ></google-chart>\n          </div>\n        </ng-container>\n\n        <ng-container\n          *ngIf=\"\n            gridOneConfig && gridOneConfig != null && gridOneConfig != undefined\n          \"\n        >\n          <div\n            [ngClass]=\"\n              gridOneConfig.className\n                ? gridOneConfig.className + 'card card-border-bottom'\n                : 'card card-border-bottom'\n            \"\n          >\n            <div class=\"card-header\">\n              <h3>{{ gridOneConfig.cardTitle }}</h3>\n            </div>\n            <div class=\"card-content\">\n              <table class=\"grid-table\">\n                <thead>\n                  <th *ngFor=\"let head of gridOneConfig.tableColumnHeadings\">\n                    {{ head }}\n                  </th>\n                </thead>\n                <tbody>\n                  <ng-container *ngIf=\"gridOneConfig.tableData; else noData\">\n                    <tr\n                      *ngFor=\"\n                        let item of gridOneConfig.tableData;\n                        let i = index\n                      \"\n                    >\n                      <td *ngFor=\"let val of gridOneConfig.tableDataKey\">\n                        {{ item[val] }}\n                      </td>\n                    </tr>\n                  </ng-container>\n                  <ng-template #noData>\n                    <tr>\n                      <td colspan=\"5\">No Data</td>\n                    </tr>\n                  </ng-template>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n      <div\n        class=\"grid-area-tableRecords\"\n        *ngIf=\"\n          gridTwoConfig && gridTwoConfig !== null && gridTwoConfig !== undefined\n        \"\n      >\n        <div\n          [ngClass]=\"\n            gridTwoConfig.className\n              ? gridTwoConfig.className + ' card card-border-top'\n              : 'card card-border-top'\n          \"\n        >\n          <div class=\"card-header\">\n            <h3>{{ gridTwoConfig.title }}</h3>\n          </div>\n          <div class=\"card-content\">\n            <table class=\"grid-table\">\n              <thead>\n                <th *ngFor=\"let head of gridTwoConfig.tableHeading\">\n                  {{ head }}\n                </th>\n              </thead>\n              <ng-container\n                *ngIf=\"\n                  gridTwoConfig.tableData && gridTwoConfig.tableData.length > 0\n                \"\n              >\n                <tbody>\n                  <tr *ngFor=\"let parent of gridTwoConfig.tableData\">\n                    <td>\n                      {{ parent.parentName }}\n                    </td>\n                    <td\n                      [attr.colspan]=\"gridTwoConfig.tableDataKey.length\"\n                      class=\"colspan\"\n                    >\n                      <tr *ngFor=\"let item of parent.childData\">\n                        <td *ngFor=\"let key of gridTwoConfig.tableDataKey\">\n                          {{ item[key] }}\n                        </td>\n                      </tr>\n                    </td>\n                  </tr>\n                </tbody>\n              </ng-container>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      .fields-bar {\n        width: 100vw;\n        position: fixed;\n        top: 0;\n        z-index: 999;\n        background-color: #111249;\n        display: flex;\n      }\n      .grid-label-bar {\n        grid-template-columns: auto auto auto auto auto auto auto;\n        gap: 10px;\n        padding: 5px 14px;\n        display: grid;\n        color: #fff;\n        font-size: 13px;\n      }\n\n      .grid-label-bar .list {\n        display: flex;\n        align-items: center;\n      }\n\n      .lable span {\n        margin-left: 6px;\n      }\n\n      input.picker[type=\"date\"] {\n        position: relative;\n      }\n\n      input.picker[type=\"date\"]::-webkit-calendar-picker-indicator {\n        position: absolute;\n        top: 0;\n        right: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        color: transparent;\n        background: transparent;\n      }\n\n      select,\n      input {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        background: none;\n        border: none;\n        color: #fff;\n        width: 118px;\n        padding: 0 6px;\n      }\n      select::-ms-expand {\n        display: none; /* Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */\n      }\n      select:focus-visible {\n        outline: none;\n      }\n\n      input::placeholder {\n        color: #fff;\n        opacity: 1; /* Firefox */\n      }\n      option {\n        background-color: #fff;\n        color: #000;\n      }\n      .grid-container {\n        --purple-color: #622248;\n        --card-border-width: 8px;\n      }\n      .grid-container {\n        height: auto !important;\n        display: grid;\n        grid-template-columns: auto auto auto auto auto;\n        grid-template-rows: auto auto auto;\n        gap: 12px;\n        background-color: #dddddd96;\n        padding: 7px;\n        margin-top: 3rem;\n      }\n\n      .card {\n        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n        margin: 5px 0 12px 0;\n        text-align: center;\n        background-color: #fff;\n        width: 18vw;\n        border-radius: 8px;\n      }\n\n      .card .card-header {\n        padding: 14px;\n        border-bottom: 1px solid #ddd;\n        background: none;\n        font-weight: 600;\n        font-size: 15px;\n      }\n      .card .card-content {\n        padding: 14px;\n      }\n      .card h3 {\n        font-size: 15px;\n        margin: 0;\n      }\n      .card p {\n        font-weight: 600;\n        font-size: 15px;\n        color: #853163;\n      }\n\n      .grid-area-countCards {\n        grid-area: 1/1/2/2;\n      }\n\n      .grid-area-chart {\n        grid-area: 1/2/3/4;\n      }\n\n      .grid-area-chart .card {\n        width: 40vw;\n        height: 40vh;\n        padding-bottom: 8px;\n      }\n\n      .grid-area-tableRecords {\n        grid-area: 1/4/3/-1;\n      }\n\n      .grid-area-tableRecords .card {\n        overflow: auto;\n        width: 38vw;\n        height: 100%;\n      }\n      .grid-area-tableRecords .card-content {\n        padding: 12px 10px;\n      }\n\n      .grid-table {\n        font-weight: 400;\n        font-size: 12px;\n        border-collapse: collapse;\n        width: 100%;\n        height: auto;\n        overflow: auto;\n        border: 1px solid #ddd;\n      }\n\n      .grid-table tr,\n      .grid-table th {\n        border-bottom: 1px solid #ddd;\n      }\n      .grid-table .colspan tr:last-child {\n        border: none;\n      }\n      .grid-table td {\n        padding: 5px 0;\n      }\n      .colspan td {\n        border: none !important;\n        width: 7vw !important;\n      }\n\n      .grid-table td:nth-child(1),\n      .grid-table th:nth-child(1) {\n        border-right: 1px solid #f2f2f2;\n        width: 10vw;\n      }\n\n      .grid-table th {\n        padding-top: 12px;\n        padding-bottom: 12px;\n        text-align: center;\n        width: 7vw;\n      }\n\n      @media (max-width: 850px) {\n        .grid-container {\n          gap: 10px;\n        }\n      }\n\n      @media (max-width: 1089px) {\n        .grid-label-bar .lastList {\n          display: none;\n        }\n      }\n\n      @media (max-width: 786px) {\n        .grid-label-bar {\n          grid-template-columns: auto auto auto;\n        }\n      }\n      @media (max-width: 580px) {\n        .grid-label-bar {\n          grid-template-columns: auto auto;\n        }\n        .card-header {\n          font-size: 14px;\n        }\n        .grid-container {\n          grid-template-columns: auto;\n          grid-template-rows: auto;\n          gap: 0px;\n        }\n        .grid-area-countCards,\n        .grid-area-chart,\n        .grid-area-tableRecords {\n          grid-area: auto;\n        }\n        .grid-area-chart .card,\n        .grid-area-countCards .card,\n        .grid-area-tableRecords .card {\n          width: 100%;\n          height: auto;\n        }\n        .grid-area-countCards .card-content.chart {\n          height: auto;\n        }\n      }\n      .card-border-left {\n        border-left-color: var(--purple-color);\n        border-left-width: var(--card-border-width) !important;\n        border-left-style: solid;\n      }\n      .card-border-bottom {\n        border-bottom-color: var(--purple-color);\n        border-bottom-width: var(--card-border-width) !important;\n        border-bottom-style: solid;\n      }\n      .grid-area-expand {\n        grid-area: 1/2/3/-1;\n      }\n      .grid-area-expand .card {\n        width: 100%;\n        height: 54vh;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NgxSuperDashboardComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    NgxSuperDashboardComponent.propDecorators = {
        dynamicFormFieldData: [{ type: Input }],
        cardConfig: [{ type: Input }],
        chartsConfig: [{ type: Input }],
        gridOneConfig: [{ type: Input }],
        gridTwoConfig: [{ type: Input }],
        onSelect: [{ type: Output }],
        onSubmit: [{ type: Output }],
        onSelectChart: [{ type: Output }]
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
        type: ChartType.ComboChart,
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
        type: ChartType.PieChart,
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
        { type: NgModule, args: [{
                    declarations: [NgxSuperDashboardComponent],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, GoogleChartsModule],
                    providers: [ScriptLoaderService],
                    exports: [NgxSuperDashboardComponent],
                },] }
    ];
    return NgxSuperDashboardModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-super-dashboard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CardTableDataConfig, DashboardChartsConfig, DynamicCardsConfiguration, DynamicFieldsConfiguration, GridTableDataConfig, NgxSuperDashboardComponent, NgxSuperDashboardModule, NgxSuperDashboardService, testCardData, testCardTable, testChartsData, testFieldData, testGridTable };
//# sourceMappingURL=ngx-super-dashboard.js.map
