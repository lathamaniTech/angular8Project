/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-super-dashboard.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ChartType } from "angular-google-charts";
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
            formGrp = tslib_1.__assign({}, formGrp, (_a = {}, _a[field.formControlKey] = ["", Validators.compose([Validators.required])], _a));
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
export { NgxSuperDashboardComponent };
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
export var DynamicFieldsConfiguration = (/**
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
export var testFieldData = [
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
export function AppLOVData() { }
if (false) {
    /** @type {?} */
    AppLOVData.prototype.name;
    /** @type {?} */
    AppLOVData.prototype.value;
}
/**
 * @record
 */
export function DynamicFieldsData() { }
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
export function SelectedFieldValueEmit() { }
if (false) {
    /** @type {?} */
    SelectedFieldValueEmit.prototype.selectedValue;
    /** @type {?} */
    SelectedFieldValueEmit.prototype.fieldControlName;
}
/**
 * @record
 */
export function SetDataOption() { }
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
export var DynamicCardsConfiguration = (/**
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
export var testCardData = [
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
export function DynamicCardsData() { }
if (false) {
    /** @type {?} */
    DynamicCardsData.prototype.title;
    /** @type {?} */
    DynamicCardsData.prototype.value;
    /** @type {?|undefined} */
    DynamicCardsData.prototype.className;
}
/** @type {?} */
export var DashboardChartsConfig = (/**
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
export var testChartsData = [
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
export function DashardCardConfig() { }
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
export function ChartOptionsConfig() { }
if (false) {
    /** @type {?} */
    ChartOptionsConfig.prototype.myColumns;
    /** @type {?} */
    ChartOptionsConfig.prototype.chartOptions;
}
/**
 * @record
 */
export function ChartAxisData() { }
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
export function AxisVlaues() { }
if (false) {
    /** @type {?|undefined} */
    AxisVlaues.prototype.title;
    /** @type {?|undefined} */
    AxisVlaues.prototype.minValue;
}
/**
 * @record
 */
export function ChartEventEmitOnSelect() { }
if (false) {
    /** @type {?} */
    ChartEventEmitOnSelect.prototype.ev;
    /** @type {?} */
    ChartEventEmitOnSelect.prototype.chartType;
}
/** @type {?} */
export var CardTableDataConfig = (/**
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
export var testCardTable = {
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
export function GridTableConfigData() { }
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
export var GridTableDataConfig = (/**
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
export var testGridTable = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN1cGVyLWRhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc3VwZXItZGFzaGJvYXJkLyIsInNvdXJjZXMiOlsibGliL25neC1zdXBlci1kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUE4QixTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RTtJQXNkRSxvQ0FBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFMekIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBQ3RELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUMsQ0FBQztRQUUvRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBR25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsNkNBQVE7OztJQUFSO1FBQ0UseURBQXlEO1FBQ3pELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELDhDQUFTOzs7O0lBQVQsVUFBVSxJQUFTO1FBQ2pCLE9BQU8sSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCwrQ0FBVTs7O0lBQVY7O1lBQ00sT0FBTyxHQUFHLEVBQUU7UUFDaEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEtBQXdCOztZQUN6RCxPQUFPLHdCQUNGLE9B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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBDaGFydFNlbGVjdGlvbkNoYW5nZWRFdmVudCwgQ2hhcnRUeXBlIH0gZnJvbSBcImFuZ3VsYXItZ29vZ2xlLWNoYXJ0c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLW5neC1zdXBlci1kYXNoYm9hcmRcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWJhclwiPlxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJkeW5hbWljRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdEZvcm0oKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1sYWJlbC1iYXJcIiAqbmdJZj1cImR5bmFtaWNGb3JtLnZhbHVlLmxlbmd0aCAhPSAwXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGR5bmFtaWNGb3JtRmllbGREYXRhOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImZpZWxkLmNsYXNzTmFtZSA/IGZpZWxkLmNsYXNzTmFtZSArICcgbGlzdCcgOiAnbGlzdCdcIlxuICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgIGZpZWxkLmxvdkRhdGFMaXN0ICYmIGZpZWxkLmxvdkRhdGFMaXN0Lmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgZWxzZSBkeW5hbWljTm9uRHJvcGRvd25cbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmxlXCI+e3sgZmllbGQubGFibGUgfX08c3Bhbj4tPC9zcGFuPjwvZGl2PlxuXG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7eyBmaWVsZC5mb3JtQ29udHJvbEtleSB9fVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ7eyBmaWVsZC5mb3JtQ29udHJvbEtleSB9fVwiXG4gICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzZWxldGVkVmFsdWUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3RcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIlwiPlNlbGVjdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLmxvdkRhdGFMaXN0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7eyBpdGVtLm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkeW5hbWljTm9uRHJvcGRvd24+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJmaWVsZC5jbGFzc05hbWUgPyBmaWVsZC5jbGFzc05hbWUgKyAnIGxpc3QnIDogJ2xpc3QnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZVwiPnt7IGZpZWxkLmxhYmxlIH19PHNwYW4+LTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7eyBmaWVsZC50eXBlIH19XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGlja2VyXCJcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7IGZpZWxkLmZvcm1Db250cm9sS2V5IH19XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwie3sgZmllbGQuZm9ybUNvbnRyb2xLZXkgfX1cIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzZWxldGVkVmFsdWUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QgbGFzdExpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZVwiPlxuICAgICAgICAgICAgICAqQWNjb3VudHMgaW4gQWN0dWFscyA8YnIgLz5cbiAgICAgICAgICAgICAgKkFtbW91bnQgaW4gTGFraHNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImdyaWQtYXJlYS1jb3VudENhcmRzXCJcbiAgICAgICAgKm5nSWY9XCJjYXJkQ29uZmlnICYmIGNhcmRDb25maWcubGVuZ3RoID4gMFwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY2FyZENvbmZpZzsgbGV0IGogPSBpbmRleFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICAgICAgICBpdGVtLmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgID8gaXRlbS5jbGFzc05hbWUgKyAnIGNhcmQgY2FyZC1ib3JkZXItbGVmdCdcbiAgICAgICAgICAgICAgICA6ICdjYXJkIGNhcmQtYm9yZGVyLWxlZnQnXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDM+e3sgaXRlbS50aXRsZSB9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHA+e3sgaXRlbS52YWx1ZSB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICAgIGdyaWRUd29Db25maWcgJiYgZ3JpZFR3b0NvbmZpZyAhPT0gbnVsbCAmJiBncmlkVHdvQ29uZmlnICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gJ2dyaWQtYXJlYS1jaGFydCdcbiAgICAgICAgICAgIDogJ2dyaWQtYXJlYS1jaGFydCBncmlkLWFyZWEtZXhwYW5kJ1xuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjaGFydCBvZiBjaGFydHNDb25maWdcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBbbmdDbGFzc109XCJcbiAgICAgICAgICAgICAgY2hhcnQuY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgPyBjaGFydC5jbGFzc05hbWUgKyAnIGNhcmQgY2FyZC1ib3JkZXItYm90dG9tJ1xuICAgICAgICAgICAgICAgIDogJ2NhcmQgY2FyZC1ib3JkZXItYm90dG9tJ1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgzPnt7IGNoYXJ0LmNhcmRUaXRsZSB9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxnb29nbGUtY2hhcnRcbiAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlXCJcbiAgICAgICAgICAgICAgW3R5cGVdPVwiY2hhcnQudHlwZVwiXG4gICAgICAgICAgICAgIFtkYXRhXT1cImNoYXJ0LmNoYXJ0RGF0YVwiXG4gICAgICAgICAgICAgIFtjb2x1bW5zXT1cImNoYXJ0LmNoYXJ0T3B0aW9uRGF0YS5teUNvbHVtbnNcIlxuICAgICAgICAgICAgICBbb3B0aW9uc109XCJjaGFydC5jaGFydE9wdGlvbkRhdGEuY2hhcnRPcHRpb25zXCJcbiAgICAgICAgICAgICAgKHNlbGVjdCk9XCJzZWxlY3RlZENoYXJ0KCRldmVudCwgY2hhcnQudHlwZSlcIlxuICAgICAgICAgICAgPjwvZ29vZ2xlLWNoYXJ0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgIGdyaWRPbmVDb25maWcgJiYgZ3JpZE9uZUNvbmZpZyAhPSBudWxsICYmIGdyaWRPbmVDb25maWcgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICAgICAgICBncmlkT25lQ29uZmlnLmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgID8gZ3JpZE9uZUNvbmZpZy5jbGFzc05hbWUgKyAnY2FyZCBjYXJkLWJvcmRlci1ib3R0b20nXG4gICAgICAgICAgICAgICAgOiAnY2FyZCBjYXJkLWJvcmRlci1ib3R0b20nXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDM+e3sgZ3JpZE9uZUNvbmZpZy5jYXJkVGl0bGUgfX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImdyaWQtdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGhlYWQgb2YgZ3JpZE9uZUNvbmZpZy50YWJsZUNvbHVtbkhlYWRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGhlYWQgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JpZE9uZUNvbmZpZy50YWJsZURhdGE7IGVsc2Ugbm9EYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gb2YgZ3JpZE9uZUNvbmZpZy50YWJsZURhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgdmFsIG9mIGdyaWRPbmVDb25maWcudGFibGVEYXRhS2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtW3ZhbF0gfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vRGF0YT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNVwiPk5vIERhdGE8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZ3JpZC1hcmVhLXRhYmxlUmVjb3Jkc1wiXG4gICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgZ3JpZFR3b0NvbmZpZyAmJiBncmlkVHdvQ29uZmlnICE9PSBudWxsICYmIGdyaWRUd29Db25maWcgIT09IHVuZGVmaW5lZFxuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgW25nQ2xhc3NdPVwiXG4gICAgICAgICAgICBncmlkVHdvQ29uZmlnLmNsYXNzTmFtZVxuICAgICAgICAgICAgICA/IGdyaWRUd29Db25maWcuY2xhc3NOYW1lICsgJyBjYXJkIGNhcmQtYm9yZGVyLXRvcCdcbiAgICAgICAgICAgICAgOiAnY2FyZCBjYXJkLWJvcmRlci10b3AnXG4gICAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgzPnt7IGdyaWRUd29Db25maWcudGl0bGUgfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImdyaWQtdGFibGVcIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgaGVhZCBvZiBncmlkVHdvQ29uZmlnLnRhYmxlSGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAge3sgaGVhZCB9fVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgZ3JpZFR3b0NvbmZpZy50YWJsZURhdGEgJiYgZ3JpZFR3b0NvbmZpZy50YWJsZURhdGEubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHBhcmVudCBvZiBncmlkVHdvQ29uZmlnLnRhYmxlRGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAge3sgcGFyZW50LnBhcmVudE5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHIuY29sc3Bhbl09XCJncmlkVHdvQ29uZmlnLnRhYmxlRGF0YUtleS5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sc3BhblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGFyZW50LmNoaWxkRGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBrZXkgb2YgZ3JpZFR3b0NvbmZpZy50YWJsZURhdGFLZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbVtrZXldIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5maWVsZHMtYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMjQ5O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgLmdyaWQtbGFiZWwtYmFyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1sYWJlbC1iYXIgLmxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGFibGUgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICB9XG5cbiAgICAgIGlucHV0LnBpY2tlclt0eXBlPVwiZGF0ZVwiXSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQucGlja2VyW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdCxcbiAgICAgIGlucHV0IHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAxMThweDtcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgICB9XG4gICAgICBzZWxlY3Q6Oi1tcy1leHBhbmQge1xuICAgICAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRlIHRoZSBkZWZhdWx0IGFycm93IGluIEludGVybmV0IEV4cGxvcmVyIDEwIGFuZCBJbnRlcm5ldCBFeHBsb3JlciAxMSAqL1xuICAgICAgfVxuICAgICAgc2VsZWN0OmZvY3VzLXZpc2libGUge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xuICAgICAgfVxuICAgICAgb3B0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB9XG4gICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAtLXB1cnBsZS1jb2xvcjogIzYyMjI0ODtcbiAgICAgICAgLS1jYXJkLWJvcmRlci13aWR0aDogOHB4O1xuICAgICAgfVxuICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ5NjtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgfVxuXG4gICAgICAuY2FyZCB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgbWFyZ2luOiA1cHggMCAxMnB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDE4dnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQgaDMge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHAge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiAjODUzMTYzO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1hcmVhLWNvdW50Q2FyZHMge1xuICAgICAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLWFyZWEtY2hhcnQge1xuICAgICAgICBncmlkLWFyZWE6IDEvMi8zLzQ7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLWFyZWEtY2hhcnQgLmNhcmQge1xuICAgICAgICB3aWR0aDogNDB2dztcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1hcmVhLXRhYmxlUmVjb3JkcyB7XG4gICAgICAgIGdyaWQtYXJlYTogMS80LzMvLTE7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLWFyZWEtdGFibGVSZWNvcmRzIC5jYXJkIHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIHdpZHRoOiAzOHZ3O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICAuZ3JpZC1hcmVhLXRhYmxlUmVjb3JkcyAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMTJweCAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC10YWJsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLXRhYmxlIHRyLFxuICAgICAgLmdyaWQtdGFibGUgdGgge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgIH1cbiAgICAgIC5ncmlkLXRhYmxlIC5jb2xzcGFuIHRyOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG4gICAgICAuZ3JpZC10YWJsZSB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgfVxuICAgICAgLmNvbHNwYW4gdGQge1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDd2dyAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC10YWJsZSB0ZDpudGgtY2hpbGQoMSksXG4gICAgICAuZ3JpZC10YWJsZSB0aDpudGgtY2hpbGQoMSkge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuICAgICAgICB3aWR0aDogMTB2dztcbiAgICAgIH1cblxuICAgICAgLmdyaWQtdGFibGUgdGgge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDd2dztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDg5cHgpIHtcbiAgICAgICAgLmdyaWQtbGFiZWwtYmFyIC5sYXN0TGlzdCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzg2cHgpIHtcbiAgICAgICAgLmdyaWQtbGFiZWwtYmFyIHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgICAgICAgLmdyaWQtbGFiZWwtYmFyIHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgICAgICAgZ2FwOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmdyaWQtYXJlYS1jb3VudENhcmRzLFxuICAgICAgICAuZ3JpZC1hcmVhLWNoYXJ0LFxuICAgICAgICAuZ3JpZC1hcmVhLXRhYmxlUmVjb3JkcyB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5ncmlkLWFyZWEtY2hhcnQgLmNhcmQsXG4gICAgICAgIC5ncmlkLWFyZWEtY291bnRDYXJkcyAuY2FyZCxcbiAgICAgICAgLmdyaWQtYXJlYS10YWJsZVJlY29yZHMgLmNhcmQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuZ3JpZC1hcmVhLWNvdW50Q2FyZHMgLmNhcmQtY29udGVudC5jaGFydCB7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY2FyZC1ib3JkZXItbGVmdCB7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1wdXJwbGUtY29sb3IpO1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogdmFyKC0tY2FyZC1ib3JkZXItd2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWJvcmRlci1ib3R0b20ge1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1wdXJwbGUtY29sb3IpO1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiB2YXIoLS1jYXJkLWJvcmRlci13aWR0aCkgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgICB9XG4gICAgICAuZ3JpZC1hcmVhLWV4cGFuZCB7XG4gICAgICAgIGdyaWQtYXJlYTogMS8yLzMvLTE7XG4gICAgICB9XG4gICAgICAuZ3JpZC1hcmVhLWV4cGFuZCAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDU0dmg7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4U3VwZXJEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkeW5hbWljRm9ybSE6IEZvcm1Hcm91cDtcbiAgQElucHV0KClcbiAgZHluYW1pY0Zvcm1GaWVsZERhdGEhOiBEeW5hbWljRmllbGRzRGF0YVtdO1xuXG4gIEBJbnB1dCgpIGNhcmRDb25maWchOiBEeW5hbWljQ2FyZHNEYXRhW107XG5cbiAgQElucHV0KCkgY2hhcnRzQ29uZmlnITogRGFzaGFyZENhcmRDb25maWdbXTtcbiAgQElucHV0KCkgZ3JpZE9uZUNvbmZpZyE6IENhcmRUYWJsZURhdGFDb25maWc7XG4gIEBJbnB1dCgpIGdyaWRUd29Db25maWchOiBHcmlkVGFibGVDb25maWdEYXRhO1xuXG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0ZWRGaWVsZFZhbHVlRW1pdD4oKTtcbiAgQE91dHB1dCgpIG9uU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+PigpO1xuXG4gIEBPdXRwdXQoKSBvblNlbGVjdENoYXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50RW1pdE9uU2VsZWN0PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgY29uc29sZS5sb2coYE5neFN1cGVyRGFzaGJvYXJkQ29tcG9uZW50IDogY29uc3RydWN0b3JgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vY3JlYXRlIGR5bmFtaWMgZmllbGRzIGFuZCBhZGQgdmFsaWRhdGlvbiBmb3IgZWFjaCBmaWVsZFxuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG5cbiAgdHlwZUNoZWNrKGRhdGE6IGFueSkge1xuICAgIHJldHVybiBkYXRhICYmIEFycmF5LmlzQXJyYXkoZGF0YSkgPyBmYWxzZSA6IHRydWU7XG4gIH1cblxuICBjcmVhdGVGb3JtKCkge1xuICAgIGxldCBmb3JtR3JwID0ge307XG4gICAgdGhpcy5keW5hbWljRm9ybUZpZWxkRGF0YS5mb3JFYWNoKChmaWVsZDogRHluYW1pY0ZpZWxkc0RhdGEpID0+IHtcbiAgICAgIGZvcm1HcnAgPSB7XG4gICAgICAgIC4uLmZvcm1HcnAsXG4gICAgICAgIFtmaWVsZC5mb3JtQ29udHJvbEtleV06IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHRoaXMuZHluYW1pY0Zvcm0gPSB0aGlzLmZiLmdyb3VwKGZvcm1HcnApO1xuICB9XG5cbiAgLy8gZW1pdCBzZWxlY3RlZCBmaWVsZCB2YWx1ZVxuICBzZWxldGVkVmFsdWUoZXY6IGFueSkge1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh7XG4gICAgICBzZWxlY3RlZFZhbHVlOiBldi50YXJnZXQudmFsdWUsXG4gICAgICBmaWVsZENvbnRyb2xOYW1lOiBldi50YXJnZXQuaWQsXG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdEZvcm0oKSB7XG4gICAgdGhpcy5vblN1Ym1pdC5lbWl0KHRoaXMuZHluYW1pY0Zvcm0udmFsdWUpO1xuICB9XG5cbiAgc2VsZWN0ZWRDaGFydChldjogQ2hhcnRTZWxlY3Rpb25DaGFuZ2VkRXZlbnQsIGNoYXJ0VHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5vblNlbGVjdENoYXJ0LmVtaXQoe1xuICAgICAgZXY6IGV2LFxuICAgICAgY2hhcnRUeXBlOiBjaGFydFR5cGUsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IER5bmFtaWNGaWVsZHNDb25maWd1cmF0aW9uID0gKFxuICBmaWVsZENvbmZpZzogRHluYW1pY0ZpZWxkc0RhdGFbXVxuKTogRHluYW1pY0ZpZWxkc0RhdGFbXSA9PiB7XG4gIGlmIChmaWVsZENvbmZpZykgcmV0dXJuIGZpZWxkQ29uZmlnO1xuICBlbHNlIHJldHVybiB0ZXN0RmllbGREYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RGaWVsZERhdGE6IER5bmFtaWNGaWVsZHNEYXRhW10gPSBbXG4gIHsgbGFibGU6IFwiWm9uZVwiLCBmb3JtQ29udHJvbEtleTogXCJ6b25lXCIsIGxvdkRhdGFMaXN0OiBbXSB9LFxuICB7IGxhYmxlOiBcIkJyYW5jaFwiLCBmb3JtQ29udHJvbEtleTogXCJicmFuY2hcIiwgbG92RGF0YUxpc3Q6IFtdIH0sXG4gIHsgbGFibGU6IFwiVGVhbXNcIiwgZm9ybUNvbnRyb2xLZXk6IFwidGVhbXNcIiwgbG92RGF0YUxpc3Q6IFtdIH0sXG4gIHsgbGFibGU6IFwiUHJvZHVjdFwiLCBmb3JtQ29udHJvbEtleTogXCJwcm9kdWN0XCIsIGxvdkRhdGFMaXN0OiBbXSB9LFxuICB7IGxhYmxlOiBcIlN0YXJ0IERhdGVcIiwgZm9ybUNvbnRyb2xLZXk6IFwic3RhcnREYXRlXCIsIHR5cGU6IFwiZGF0ZVwiIH0sXG4gIHsgbGFibGU6IFwiRW5kIERhdGVcIiwgZm9ybUNvbnRyb2xLZXk6IFwiZW5kRGF0ZVwiLCB0eXBlOiBcImRhdGVcIiB9LFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBMT1ZEYXRhIHtcbiAgbmFtZTogc3RyaW5nIHwgbnVtYmVyO1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNGaWVsZHNEYXRhIHtcbiAgbGFibGU6IHN0cmluZztcbiAgZm9ybUNvbnRyb2xLZXk6IHN0cmluZztcbiAgbG92RGF0YUxpc3Q/OiBBcHBMT1ZEYXRhW107XG4gIHR5cGU/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RlZEZpZWxkVmFsdWVFbWl0IHtcbiAgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICBmaWVsZENvbnRyb2xOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0RGF0YU9wdGlvbiB7XG4gIGZldGNoTG92RGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPltdO1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5hbWUyPzogc3RyaW5nO1xufVxuXG4vLyBpbnRlcmZhY2VzIGZvciBncmlkIGNhcmRzTGlzdDpcbmV4cG9ydCBjb25zdCBEeW5hbWljQ2FyZHNDb25maWd1cmF0aW9uID0gKFxuICBjYXJkQ29uZmlnOiBEeW5hbWljQ2FyZHNEYXRhW11cbik6IER5bmFtaWNDYXJkc0RhdGFbXSA9PiB7XG4gIGlmIChjYXJkQ29uZmlnKSByZXR1cm4gY2FyZENvbmZpZztcbiAgZWxzZSByZXR1cm4gdGVzdENhcmREYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RDYXJkRGF0YTogRHluYW1pY0NhcmRzRGF0YVtdID0gW1xuICB7IHRpdGxlOiBcIlRvdGFsIFByb3Bvc2Fsc1wiLCB2YWx1ZTogNzAwIH0sXG4gIHsgdGl0bGU6IFwiT24gUHJvY2Vzc1wiLCB2YWx1ZTogMjMwIH0sXG4gIHsgdGl0bGU6IFwiU2FuY3Rpb25lZFwiLCB2YWx1ZTogMzAwIH0sXG4gIHsgdGl0bGU6IFwiUmVqZWN0ZWRcIiwgdmFsdWU6IDI1NCB9LFxuICB7IHRpdGxlOiBcIk9wZW5lZCBwcmVuZGluZyBmb3IgPiAzMCBkYXlzXCIsIHZhbHVlOiAxNDMgfSxcbiAgeyB0aXRsZTogXCJEaXNidXJzZWRcIiwgdmFsdWU6IDEyMCB9LFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljQ2FyZHNEYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkQ2hhcnRzQ29uZmlnID0gKFxuICBjaGFydHNEYXRhPzogRGFzaGFyZENhcmRDb25maWdbXVxuKTogRGFzaGFyZENhcmRDb25maWdbXSA9PiB7XG4gIGlmIChjaGFydHNEYXRhKSB7XG4gICAgcmV0dXJuIGNoYXJ0c0RhdGE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRlc3RDaGFydHNEYXRhO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdENoYXJ0c0RhdGE6IERhc2hhcmRDYXJkQ29uZmlnW10gPSBbXG4gIHtcbiAgICB0eXBlOiBDaGFydFR5cGUuQ29tYm9DaGFydCxcbiAgICBjYXJkVGl0bGU6IFwiTW9udGhseSBXaXNlXCIsXG4gICAgY2hhcnRPcHRpb25EYXRhOiB7XG4gICAgICBteUNvbHVtbnM6IFtcIlllYXJcIiwgXCJSZXRhaWxcIiwgXCJBZ3JpXCIsIFwiTVNNRVwiLCBcIkdvbGRcIiwgXCJDb3JwXCJdLFxuXG4gICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgdGl0bGU6IGBNb250aGx5IFdpc2VgLFxuICAgICAgICBjaGFydEFyZWE6IHsgd2lkdGg6IFwiNTAlXCIgfSxcbiAgICAgICAgaEF4aXM6IHtcbiAgICAgICAgICB0aXRsZTogYE1vZHVsZXNgLFxuICAgICAgICAgIG1pblZhbHVlOiAwLFxuICAgICAgICB9LFxuICAgICAgICB2QXhpczoge1xuICAgICAgICAgIHRpdGxlOiBcIk5vLiBPZiBBbW91bnRcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2VyaWVzVHlwZTogXCJiYXJzXCIsXG4gICAgICAgIC8vIHNlcmllczogeyA0OiB7IHR5cGU6IFwibGluZVwiIH0gfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjaGFydERhdGE6IFtcbiAgICAgIFtcIjIwMjMvMDVcIiwgNTAsIDMzLCAyNC41LCAzMywgMjJdLFxuICAgICAgW1wiMjAyNC8wNVwiLCAyMywgNDEsIDIyLjUsIDIyLCAyXSxcbiAgICAgIFtcIjIwMjEvMDVcIiwgNDQsIDgyLCAxMywgNDMsIDEyXSxcbiAgICAgIFtcIjIwMjMvMDVcIiwgMTksIDMzLCAyMywgMjEsIDg5XSxcbiAgICAgIFtcIjIwMjIvMDVcIiwgMzAsIDIwLCAxMiwgMzQsIDIyXSxcbiAgICBdLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgfSxcbiAge1xuICAgIHR5cGU6IENoYXJ0VHlwZS5QaWVDaGFydCxcbiAgICBjYXJkVGl0bGU6IFwiVG90YWwgU2FuY3Rpb25lZFwiLFxuICAgIGNoYXJ0T3B0aW9uRGF0YToge1xuICAgICAgbXlDb2x1bW5zOiBbXG4gICAgICAgIFtcIlJldGFpbFwiLCBcIkFncmlcIiwgXCJNU01FXCIsIFwiR09MRFwiLCBcIkNPUlBcIl0sXG4gICAgICAgIFwiTGVhZHMgQ291bnRcIixcbiAgICAgICAgeyByb2xlOiBcInN0eWxlXCIgfSxcbiAgICAgIF0sXG4gICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgdGl0bGU6IGBTYW5jdGlvbmVkIEFtb3VudGAsXG4gICAgICAgIGNoYXJ0QXJlYTogeyB3aWR0aDogXCI1MCVcIiB9LFxuICAgICAgICBzbGljZXM6IHtcbiAgICAgICAgICAwOiB7IGNvbG9yOiBcIiM2MjIyNDhcIiB9LFxuICAgICAgICAgIDE6IHsgY29sb3I6IFwiIzEwOTYxOFwiIH0sXG4gICAgICAgICAgMjogeyBjb2xvcjogXCIjMzM2NmNjXCIgfSxcbiAgICAgICAgICAzOiB7IGNvbG9yOiBcInJlZFwiIH0sXG4gICAgICAgICAgNDogeyBjb2xvcjogXCIjZmY5OTAwXCIgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjaGFydERhdGE6IFtcbiAgICAgIFtcIlJldGFpbFwiLCAzNDQ1LCBcInJlZFwiXSxcbiAgICAgIFtcIkFncmlcIiwgMzQ0NSwgXCJyZWRcIl0sXG4gICAgICBbXCJNU01FXCIsIDM0NDUsIFwicmVkXCJdLFxuICAgICAgW1wiR29sZFwiLCAzNDQ1LCBcInJlZFwiXSxcbiAgICBdLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFzaGFyZENhcmRDb25maWcge1xuICB0eXBlOiBhbnk7XG4gIGNoYXJ0T3B0aW9uRGF0YTogQ2hhcnRPcHRpb25zQ29uZmlnO1xuICBjaGFydERhdGE6IEFycmF5PENoYXJ0RGF0YVR5cGVbXT47XG4gIGNhcmRUaXRsZT86IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBDaGFydERhdGFUeXBlID0gc3RyaW5nIHwgbnVtYmVyO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0T3B0aW9uc0NvbmZpZyB7XG4gIC8vIG15Q29sdW1uczogQXJyYXk8XG4gIC8vICAgc3RyaW5nIHwgQ29sdW1uc1R5cGVbXSB8IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj5cbiAgLy8gPjtcbiAgbXlDb2x1bW5zOiBhbnk7XG4gIGNoYXJ0T3B0aW9uczogQ2hhcnRBeGlzRGF0YTtcbn1cblxuZXhwb3J0IHR5cGUgQ29sdW1uc1R5cGUgPSBzdHJpbmcgfCBudW1iZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRBeGlzRGF0YSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNoYXJ0QXJlYTogeyB3aWR0aD86IHN0cmluZyB8IG51bWJlcjsgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyIH07XG4gIHNsaWNlcz86IG9iamVjdDtcbiAgaEF4aXM/OiBBeGlzVmxhdWVzO1xuICB2QXhpcz86IEF4aXNWbGF1ZXM7XG4gIHNlcmllc1R5cGU/OiBzdHJpbmc7XG4gIHNlcmllcz86IG9iamVjdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBeGlzVmxhdWVzIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1pblZhbHVlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0RXZlbnRFbWl0T25TZWxlY3Qge1xuICBldjogQ2hhcnRTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ7XG4gIGNoYXJ0VHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ2FyZFRhYmxlRGF0YUNvbmZpZyA9IChcbiAgY2FyZFRhYmxlRGF0YT86IENhcmRUYWJsZURhdGFDb25maWdcbik6IENhcmRUYWJsZURhdGFDb25maWcgPT4ge1xuICBpZiAoY2FyZFRhYmxlRGF0YSkge1xuICAgIHJldHVybiBjYXJkVGFibGVEYXRhO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0ZXN0Q2FyZFRhYmxlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdENhcmRUYWJsZSA9IHtcbiAgY2FyZFRpdGxlOiBcIlRvcCA1IEJyYW5jaGVzXCIsXG4gIHRhYmxlQ29sdW1uSGVhZGluZ3M6IFtcIlwiLCBcIlJldGFpbFwiLCBcIkFncmlcIiwgXCJNU01FXCIsIFwiR29sZFwiXSxcbiAgdGFibGVEYXRhS2V5OiBbXCJvcmdOYW1lXCIsIFwicmV0YWlsXCIsIFwiYWdyaVwiLCBcIm1zbWVcIiwgXCJnb2xkXCJdLFxuICB0YWJsZURhdGE6IFtcbiAgICB7XG4gICAgICBvcmdOYW1lOiBcIkNoZW5uYWlcIixcbiAgICAgIHJldGFpbDogXCI4NDlcIixcbiAgICAgIGFncmk6IFwiNTk5XCIsXG4gICAgICBtc21lOiBcIjUwMFwiLFxuICAgICAgZ29sZDogXCIyMDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG9yZ05hbWU6IFwiRGVsaGlcIixcbiAgICAgIHJldGFpbDogXCIyMDBcIixcbiAgICAgIGFncmk6IFwiMzAwXCIsXG4gICAgICBtc21lOiBcIjQwMFwiLFxuICAgICAgZ29sZDogXCIxNTBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG9yZ05hbWU6IFwiVG5hZ2FyXCIsXG4gICAgICByZXRhaWw6IFwiODQ5XCIsXG4gICAgICBhZ3JpOiBcIjQ4MFwiLFxuICAgICAgbXNtZTogXCIyNTBcIixcbiAgICAgIGdvbGQ6IFwiNjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBvcmdOYW1lOiBcIlBvb25hbWFsZVwiLFxuICAgICAgcmV0YWlsOiBcIjk0MFwiLFxuICAgICAgYWdyaTogXCIyMzRcIixcbiAgICAgIG1zbWU6IFwiNzAwXCIsXG4gICAgICBnb2xkOiBcIjQwMFwiLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRUYWJsZURhdGFDb25maWcge1xuICBjYXJkVGl0bGU/OiBzdHJpbmc7XG4gIHRhYmxlQ29sdW1uSGVhZGluZ3M6IHN0cmluZ1tdO1xuICB0YWJsZURhdGFLZXk6IHN0cmluZ1tdO1xuICB0YWJsZURhdGE6IEFycmF5PFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4+O1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JpZFRhYmxlQ29uZmlnRGF0YSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB0YWJsZUhlYWRpbmc6IHN0cmluZ1tdO1xuICB0YWJsZURhdGFLZXk6IHN0cmluZ1tdO1xuICAvLyB0YWJsZURhdGE6IEFycmF5PFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IFtdPj47XG4gIHRhYmxlRGF0YTogYW55O1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIENoaWxkRGF0YVR5cGUgPSBzdHJpbmcgfCBudW1iZXI7XG5cbmV4cG9ydCBjb25zdCBHcmlkVGFibGVEYXRhQ29uZmlnID0gKFxuICBncmlkVGFibGVEYXRhPzogR3JpZFRhYmxlQ29uZmlnRGF0YVxuKTogR3JpZFRhYmxlQ29uZmlnRGF0YSA9PiB7XG4gIGlmIChncmlkVGFibGVEYXRhKSB7XG4gICAgcmV0dXJuIGdyaWRUYWJsZURhdGE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRlc3RHcmlkVGFibGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0R3JpZFRhYmxlOiBHcmlkVGFibGVDb25maWdEYXRhID0ge1xuICB0aXRsZTogXCJTY2hlbWUgV2lzZVwiLFxuICB0YWJsZUhlYWRpbmc6IFtcbiAgICBcIkxvYW4gVHlwZVwiLFxuICAgIFwiU2NoZW1lXCIsXG4gICAgXCJObyBvZiBBY2MgI1wiLFxuICAgIFwiTGltaXQgaW4gKExha2hzKVwiLFxuICAgIFwiT1MgYW10IGluKExha2hzKVwiLFxuICBdLFxuICB0YWJsZURhdGE6IFtcbiAgICB7XG4gICAgICBwYXJlbnROYW1lOiBcIkNoZW5uYWlcIixcbiAgICAgIGNoaWxkRGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgdHBtU2VxSWQ6IDYyNjg1LFxuICAgICAgICAgIHRwbUNvZGU6IFwiMlwiLFxuICAgICAgICAgIHRwbU1vZGlmaWVkRGF0ZTogXCIyMDI0LTA0LTI0VDA3OjQ5OjIwLjg3OSswMDAwXCIsXG4gICAgICAgICAgdHBtUHJkQ29kZTogXCJDYXIgTG9hblwiLFxuICAgICAgICAgIHNjaGVtZVR5cGU6IFwiQ2FyIERlYWxlclwiLFxuICAgICAgICAgIG5vT2ZBY2M6IFwiUzE0XCIsXG4gICAgICAgICAgbGltaXQ6IFwiMzQ0XCIsXG4gICAgICAgICAgU2FuY3Rpb25lZDogXCIyMDMwMlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHBtU2VxSWQ6IDYyNjk4LFxuICAgICAgICAgIHRwbUNvZGU6IFwiMlwiLFxuICAgICAgICAgIHRwbU1vZGlmaWVkRGF0ZTogXCIyMDI0LTA0LTI0VDA3OjQ5OjIwLjg4OSswMDAwXCIsXG4gICAgICAgICAgdHBtUHJkQ29kZTogXCJDYXIgTG9hblwiLFxuICAgICAgICAgIHNjaGVtZVR5cGU6IFwiTHV4dXJ5IENhciBMb2FuXCIsXG4gICAgICAgICAgbm9PZkFjYzogXCI4NFwiLFxuICAgICAgICAgIGxpbWl0OiBcIjIxMjMyXCIsXG4gICAgICAgICAgU2FuY3Rpb25lZDogXCIxMjEuNDVcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXJlbnROYW1lOiBcIkh5ZGVyYWJhZFwiLFxuICAgICAgY2hpbGREYXRhOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0cG1TZXFJZDogNjI2ODYsXG4gICAgICAgICAgdHBtQ29kZTogXCIyXCIsXG4gICAgICAgICAgdHBtTW9kaWZpZWREYXRlOiBcIjIwMjQtMDQtMjRUMDc6NDk6MjAuODgwKzAwMDBcIixcbiAgICAgICAgICB0cG1QcmRDb2RlOiBcIkNhc2ggTG9hblwiLFxuICAgICAgICAgIHNjaGVtZVR5cGU6IFwiUHJvcGVydHkgTG9hblwiLFxuICAgICAgICAgIG5vT2ZBY2M6IFwiUzM0XCIsXG4gICAgICAgICAgbGltaXQ6IFwiNjc2XCIsXG4gICAgICAgICAgU2FuY3Rpb25lZDogXCIyM1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICB0YWJsZURhdGFLZXk6IFtcInNjaGVtZVR5cGVcIiwgXCJub09mQWNjXCIsIFwibGltaXRcIiwgXCJTYW5jdGlvbmVkXCJdLFxufTtcbiJdfQ==