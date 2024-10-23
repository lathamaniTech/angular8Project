import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartType, GoogleChartsModule, ScriptLoaderService } from 'angular-google-charts';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-super-dashboard.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxSuperDashboardService {
    constructor() { }
}
NgxSuperDashboardService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxSuperDashboardService.ctorParameters = () => [];
/** @nocollapse */ NgxSuperDashboardService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxSuperDashboardService_Factory() { return new NgxSuperDashboardService(); }, token: NgxSuperDashboardService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-super-dashboard.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxSuperDashboardComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.onSelect = new EventEmitter();
        this.onSubmit = new EventEmitter();
        this.onSelectChart = new EventEmitter();
        console.log(`NgxSuperDashboardComponent : constructor`);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //create dynamic fields and add validation for each field
        this.createForm();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    typeCheck(data) {
        return data && Array.isArray(data) ? false : true;
    }
    /**
     * @return {?}
     */
    createForm() {
        /** @type {?} */
        let formGrp = {};
        this.dynamicFormFieldData.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            formGrp = Object.assign({}, formGrp, { [field.formControlKey]: ["", Validators.compose([Validators.required])] });
        }));
        this.dynamicForm = this.fb.group(formGrp);
    }
    // emit selected field value
    /**
     * @param {?} ev
     * @return {?}
     */
    seletedValue(ev) {
        this.onSelect.emit({
            selectedValue: ev.target.value,
            fieldControlName: ev.target.id,
        });
    }
    /**
     * @return {?}
     */
    onSubmitForm() {
        this.onSubmit.emit(this.dynamicForm.value);
    }
    /**
     * @param {?} ev
     * @param {?} chartType
     * @return {?}
     */
    selectedChart(ev, chartType) {
        this.onSelectChart.emit({
            ev: ev,
            chartType: chartType,
        });
    }
}
NgxSuperDashboardComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-ngx-super-dashboard",
                template: `
    <div class="fields-bar">
      <form [formGroup]="dynamicForm" (ngSubmit)="onSubmitForm()">
        <div class="grid-label-bar" *ngIf="dynamicForm.value.length != 0">
          <ng-container
            *ngFor="let field of dynamicFormFieldData; let i = index"
          >
            <div
              [ngClass]="field.className ? field.className + ' list' : 'list'"
              *ngIf="
                field.lovDataList && field.lovDataList.length > 0;
                else dynamicNonDropdown
              "
            >
              <div class="lable">{{ field.lable }}<span>-</span></div>

              <select
                formControlName="{{ field.formControlKey }}"
                id="{{ field.formControlKey }}"
                (change)="seletedValue($event)"
                placeholder="Select"
              >
                <option selected value="">Select</option>
                <option
                  [value]="item.value"
                  *ngFor="let item of field.lovDataList"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>

            <ng-template #dynamicNonDropdown>
              <div
                [ngClass]="field.className ? field.className + ' list' : 'list'"
              >
                <div class="lable">{{ field.lable }}<span>-</span></div>
                <input
                  type="{{ field.type }}"
                  class="picker"
                  formControlName="{{ field.formControlKey }}"
                  id="{{ field.formControlKey }}"
                  (change)="seletedValue($event)"
                  placeholder="Select"
                />
              </div>
            </ng-template>
          </ng-container>

          <div class="list lastList">
            <div class="lable">
              *Accounts in Actuals <br />
              *Ammount in Lakhs
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="grid-container">
      <div
        class="grid-area-countCards"
        *ngIf="cardConfig && cardConfig.length > 0"
      >
        <ng-container *ngFor="let item of cardConfig; let j = index">
          <div
            [ngClass]="
              item.className
                ? item.className + ' card card-border-left'
                : 'card card-border-left'
            "
          >
            <div class="card-header">
              <h3>{{ item.title }}</h3>
            </div>
            <div class="card-content">
              <p>{{ item.value }}</p>
            </div>
          </div>
        </ng-container>
      </div>

      <div
        [ngClass]="
          gridTwoConfig && gridTwoConfig !== null && gridTwoConfig !== undefined
            ? 'grid-area-chart'
            : 'grid-area-chart grid-area-expand'
        "
      >
        <ng-container *ngFor="let chart of chartsConfig">
          <div
            [ngClass]="
              chart.className
                ? chart.className + ' card card-border-bottom'
                : 'card card-border-bottom'
            "
          >
            <div class="card-header">
              <h3>{{ chart.cardTitle }}</h3>
            </div>
            <google-chart
              style="width: 100%; height: 100%"
              [type]="chart.type"
              [data]="chart.chartData"
              [columns]="chart.chartOptionData.myColumns"
              [options]="chart.chartOptionData.chartOptions"
              (select)="selectedChart($event, chart.type)"
            ></google-chart>
          </div>
        </ng-container>

        <ng-container
          *ngIf="
            gridOneConfig && gridOneConfig != null && gridOneConfig != undefined
          "
        >
          <div
            [ngClass]="
              gridOneConfig.className
                ? gridOneConfig.className + 'card card-border-bottom'
                : 'card card-border-bottom'
            "
          >
            <div class="card-header">
              <h3>{{ gridOneConfig.cardTitle }}</h3>
            </div>
            <div class="card-content">
              <table class="grid-table">
                <thead>
                  <th *ngFor="let head of gridOneConfig.tableColumnHeadings">
                    {{ head }}
                  </th>
                </thead>
                <tbody>
                  <ng-container *ngIf="gridOneConfig.tableData; else noData">
                    <tr
                      *ngFor="
                        let item of gridOneConfig.tableData;
                        let i = index
                      "
                    >
                      <td *ngFor="let val of gridOneConfig.tableDataKey">
                        {{ item[val] }}
                      </td>
                    </tr>
                  </ng-container>
                  <ng-template #noData>
                    <tr>
                      <td colspan="5">No Data</td>
                    </tr>
                  </ng-template>
                </tbody>
              </table>
            </div>
          </div>
        </ng-container>
      </div>
      <div
        class="grid-area-tableRecords"
        *ngIf="
          gridTwoConfig && gridTwoConfig !== null && gridTwoConfig !== undefined
        "
      >
        <div
          [ngClass]="
            gridTwoConfig.className
              ? gridTwoConfig.className + ' card card-border-top'
              : 'card card-border-top'
          "
        >
          <div class="card-header">
            <h3>{{ gridTwoConfig.title }}</h3>
          </div>
          <div class="card-content">
            <table class="grid-table">
              <thead>
                <th *ngFor="let head of gridTwoConfig.tableHeading">
                  {{ head }}
                </th>
              </thead>
              <ng-container
                *ngIf="
                  gridTwoConfig.tableData && gridTwoConfig.tableData.length > 0
                "
              >
                <tbody>
                  <tr *ngFor="let parent of gridTwoConfig.tableData">
                    <td>
                      {{ parent.parentName }}
                    </td>
                    <td
                      [attr.colspan]="gridTwoConfig.tableDataKey.length"
                      class="colspan"
                    >
                      <tr *ngFor="let item of parent.childData">
                        <td *ngFor="let key of gridTwoConfig.tableDataKey">
                          {{ item[key] }}
                        </td>
                      </tr>
                    </td>
                  </tr>
                </tbody>
              </ng-container>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      .fields-bar {
        width: 100vw;
        position: fixed;
        top: 0;
        z-index: 999;
        background-color: #111249;
        display: flex;
      }
      .grid-label-bar {
        grid-template-columns: auto auto auto auto auto auto auto;
        gap: 10px;
        padding: 5px 14px;
        display: grid;
        color: #fff;
        font-size: 13px;
      }

      .grid-label-bar .list {
        display: flex;
        align-items: center;
      }

      .lable span {
        margin-left: 6px;
      }

      input.picker[type="date"] {
        position: relative;
      }

      input.picker[type="date"]::-webkit-calendar-picker-indicator {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        color: transparent;
        background: transparent;
      }

      select,
      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: none;
        border: none;
        color: #fff;
        width: 118px;
        padding: 0 6px;
      }
      select::-ms-expand {
        display: none; /* Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */
      }
      select:focus-visible {
        outline: none;
      }

      input::placeholder {
        color: #fff;
        opacity: 1; /* Firefox */
      }
      option {
        background-color: #fff;
        color: #000;
      }
      .grid-container {
        --purple-color: #622248;
        --card-border-width: 8px;
      }
      .grid-container {
        height: auto !important;
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        grid-template-rows: auto auto auto;
        gap: 12px;
        background-color: #dddddd96;
        padding: 7px;
        margin-top: 3rem;
      }

      .card {
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        margin: 5px 0 12px 0;
        text-align: center;
        background-color: #fff;
        width: 18vw;
        border-radius: 8px;
      }

      .card .card-header {
        padding: 14px;
        border-bottom: 1px solid #ddd;
        background: none;
        font-weight: 600;
        font-size: 15px;
      }
      .card .card-content {
        padding: 14px;
      }
      .card h3 {
        font-size: 15px;
        margin: 0;
      }
      .card p {
        font-weight: 600;
        font-size: 15px;
        color: #853163;
      }

      .grid-area-countCards {
        grid-area: 1/1/2/2;
      }

      .grid-area-chart {
        grid-area: 1/2/3/4;
      }

      .grid-area-chart .card {
        width: 40vw;
        height: 40vh;
        padding-bottom: 8px;
      }

      .grid-area-tableRecords {
        grid-area: 1/4/3/-1;
      }

      .grid-area-tableRecords .card {
        overflow: auto;
        width: 38vw;
        height: 100%;
      }
      .grid-area-tableRecords .card-content {
        padding: 12px 10px;
      }

      .grid-table {
        font-weight: 400;
        font-size: 12px;
        border-collapse: collapse;
        width: 100%;
        height: auto;
        overflow: auto;
        border: 1px solid #ddd;
      }

      .grid-table tr,
      .grid-table th {
        border-bottom: 1px solid #ddd;
      }
      .grid-table .colspan tr:last-child {
        border: none;
      }
      .grid-table td {
        padding: 5px 0;
      }
      .colspan td {
        border: none !important;
        width: 7vw !important;
      }

      .grid-table td:nth-child(1),
      .grid-table th:nth-child(1) {
        border-right: 1px solid #f2f2f2;
        width: 10vw;
      }

      .grid-table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        width: 7vw;
      }

      @media (max-width: 850px) {
        .grid-container {
          gap: 10px;
        }
      }

      @media (max-width: 1089px) {
        .grid-label-bar .lastList {
          display: none;
        }
      }

      @media (max-width: 786px) {
        .grid-label-bar {
          grid-template-columns: auto auto auto;
        }
      }
      @media (max-width: 580px) {
        .grid-label-bar {
          grid-template-columns: auto auto;
        }
        .card-header {
          font-size: 14px;
        }
        .grid-container {
          grid-template-columns: auto;
          grid-template-rows: auto;
          gap: 0px;
        }
        .grid-area-countCards,
        .grid-area-chart,
        .grid-area-tableRecords {
          grid-area: auto;
        }
        .grid-area-chart .card,
        .grid-area-countCards .card,
        .grid-area-tableRecords .card {
          width: 100%;
          height: auto;
        }
        .grid-area-countCards .card-content.chart {
          height: auto;
        }
      }
      .card-border-left {
        border-left-color: var(--purple-color);
        border-left-width: var(--card-border-width) !important;
        border-left-style: solid;
      }
      .card-border-bottom {
        border-bottom-color: var(--purple-color);
        border-bottom-width: var(--card-border-width) !important;
        border-bottom-style: solid;
      }
      .grid-area-expand {
        grid-area: 1/2/3/-1;
      }
      .grid-area-expand .card {
        width: 100%;
        height: 54vh;
      }
    `]
            }] }
];
/** @nocollapse */
NgxSuperDashboardComponent.ctorParameters = () => [
    { type: FormBuilder }
];
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
const DynamicFieldsConfiguration = (/**
 * @param {?} fieldConfig
 * @return {?}
 */
(fieldConfig) => {
    if (fieldConfig)
        return fieldConfig;
    else
        return testFieldData;
});
/** @type {?} */
const testFieldData = [
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
const DynamicCardsConfiguration = (/**
 * @param {?} cardConfig
 * @return {?}
 */
(cardConfig) => {
    if (cardConfig)
        return cardConfig;
    else
        return testCardData;
});
/** @type {?} */
const testCardData = [
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
const DashboardChartsConfig = (/**
 * @param {?=} chartsData
 * @return {?}
 */
(chartsData) => {
    if (chartsData) {
        return chartsData;
    }
    else {
        return testChartsData;
    }
});
/** @type {?} */
const testChartsData = [
    {
        type: ChartType.ComboChart,
        cardTitle: "Monthly Wise",
        chartOptionData: {
            myColumns: ["Year", "Retail", "Agri", "MSME", "Gold", "Corp"],
            chartOptions: {
                title: `Monthly Wise`,
                chartArea: { width: "50%" },
                hAxis: {
                    title: `Modules`,
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
                title: `Sanctioned Amount`,
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
const CardTableDataConfig = (/**
 * @param {?=} cardTableData
 * @return {?}
 */
(cardTableData) => {
    if (cardTableData) {
        return cardTableData;
    }
    else {
        return testCardTable;
    }
});
/** @type {?} */
const testCardTable = {
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
const GridTableDataConfig = (/**
 * @param {?=} gridTableData
 * @return {?}
 */
(gridTableData) => {
    if (gridTableData) {
        return gridTableData;
    }
    else {
        return testGridTable;
    }
});
/** @type {?} */
const testGridTable = {
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
class NgxSuperDashboardModule {
}
NgxSuperDashboardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxSuperDashboardComponent],
                imports: [CommonModule, FormsModule, ReactiveFormsModule, GoogleChartsModule],
                providers: [ScriptLoaderService],
                exports: [NgxSuperDashboardComponent],
            },] }
];

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
