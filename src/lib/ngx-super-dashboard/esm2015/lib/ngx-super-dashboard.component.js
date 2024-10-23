/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-super-dashboard.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ChartType } from "angular-google-charts";
export class NgxSuperDashboardComponent {
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
export const DynamicFieldsConfiguration = (/**
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
export const testFieldData = [
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
export const DynamicCardsConfiguration = (/**
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
export const testCardData = [
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
export const DashboardChartsConfig = (/**
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
export const testChartsData = [
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
export const CardTableDataConfig = (/**
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
export const testCardTable = {
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
export const GridTableDataConfig = (/**
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
export const testGridTable = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN1cGVyLWRhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc3VwZXItZGFzaGJvYXJkLyIsInNvdXJjZXMiOlsibGliL25neC1zdXBlci1kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQThCLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBd2M5RSxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBZ0JyQyxZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUx6QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFDdEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFtQyxDQUFDO1FBRS9ELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFHbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04seURBQXlEO1FBQ3pELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFTO1FBQ2pCLE9BQU8sSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCxVQUFVOztZQUNKLE9BQU8sR0FBRyxFQUFFO1FBQ2hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDN0QsT0FBTyxxQkFD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b0JBQ3RCLFVBQVUsRUFBRSxpQkFBaUI7b0JBQzdCLE9BQU8sRUFBRSxJQUFJO29CQUNiLEtBQUssRUFBRSxPQUFPO29CQUNkLFVBQVUsRUFBRSxRQUFRO2lCQUNyQjthQUNGO1NBQ0Y7UUFDRDtZQUNFLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxRQUFRLEVBQUUsS0FBSztvQkFDZixPQUFPLEVBQUUsR0FBRztvQkFDWixlQUFlLEVBQUUsOEJBQThCO29CQUMvQyxVQUFVLEVBQUUsV0FBVztvQkFDdkIsVUFBVSxFQUFFLGVBQWU7b0JBQzNCLE9BQU8sRUFBRSxLQUFLO29CQUNkLEtBQUssRUFBRSxLQUFLO29CQUNaLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjthQUNGO1NBQ0Y7S0FDRjtJQUNELFlBQVksRUFBRSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQztDQUMvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQ2hhcnRTZWxlY3Rpb25DaGFuZ2VkRXZlbnQsIENoYXJ0VHlwZSB9IGZyb20gXCJhbmd1bGFyLWdvb2dsZS1jaGFydHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1uZ3gtc3VwZXItZGFzaGJvYXJkXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkcy1iYXJcIj5cbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZHluYW1pY0Zvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXRGb3JtKClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtbGFiZWwtYmFyXCIgKm5nSWY9XCJkeW5hbWljRm9ybS52YWx1ZS5sZW5ndGggIT0gMFwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBkeW5hbWljRm9ybUZpZWxkRGF0YTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJmaWVsZC5jbGFzc05hbWUgPyBmaWVsZC5jbGFzc05hbWUgKyAnIGxpc3QnIDogJ2xpc3QnXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICBmaWVsZC5sb3ZEYXRhTGlzdCAmJiBmaWVsZC5sb3ZEYXRhTGlzdC5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgIGVsc2UgZHluYW1pY05vbkRyb3Bkb3duXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZVwiPnt7IGZpZWxkLmxhYmxlIH19PHNwYW4+LTwvc3Bhbj48L2Rpdj5cblxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3sgZmllbGQuZm9ybUNvbnRyb2xLZXkgfX1cIlxuICAgICAgICAgICAgICAgIGlkPVwie3sgZmllbGQuZm9ybUNvbnRyb2xLZXkgfX1cIlxuICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwic2VsZXRlZFZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJcIj5TZWxlY3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWVsZC5sb3ZEYXRhTGlzdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3sgaXRlbS5uYW1lIH19XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZHluYW1pY05vbkRyb3Bkb3duPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiZmllbGQuY2xhc3NOYW1lID8gZmllbGQuY2xhc3NOYW1lICsgJyBsaXN0JyA6ICdsaXN0J1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFibGVcIj57eyBmaWVsZC5sYWJsZSB9fTxzcGFuPi08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwie3sgZmllbGQudHlwZSB9fVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInBpY2tlclwiXG4gICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7eyBmaWVsZC5mb3JtQ29udHJvbEtleSB9fVwiXG4gICAgICAgICAgICAgICAgICBpZD1cInt7IGZpZWxkLmZvcm1Db250cm9sS2V5IH19XCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwic2VsZXRlZFZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3RcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0IGxhc3RMaXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFibGVcIj5cbiAgICAgICAgICAgICAgKkFjY291bnRzIGluIEFjdHVhbHMgPGJyIC8+XG4gICAgICAgICAgICAgICpBbW1vdW50IGluIExha2hzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJncmlkLWFyZWEtY291bnRDYXJkc1wiXG4gICAgICAgICpuZ0lmPVwiY2FyZENvbmZpZyAmJiBjYXJkQ29uZmlnLmxlbmd0aCA+IDBcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNhcmRDb25maWc7IGxldCBqID0gaW5kZXhcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBbbmdDbGFzc109XCJcbiAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWVcbiAgICAgICAgICAgICAgICA/IGl0ZW0uY2xhc3NOYW1lICsgJyBjYXJkIGNhcmQtYm9yZGVyLWxlZnQnXG4gICAgICAgICAgICAgICAgOiAnY2FyZCBjYXJkLWJvcmRlci1sZWZ0J1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgzPnt7IGl0ZW0udGl0bGUgfX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwPnt7IGl0ZW0udmFsdWUgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBbbmdDbGFzc109XCJcbiAgICAgICAgICBncmlkVHdvQ29uZmlnICYmIGdyaWRUd29Db25maWcgIT09IG51bGwgJiYgZ3JpZFR3b0NvbmZpZyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/ICdncmlkLWFyZWEtY2hhcnQnXG4gICAgICAgICAgICA6ICdncmlkLWFyZWEtY2hhcnQgZ3JpZC1hcmVhLWV4cGFuZCdcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY2hhcnQgb2YgY2hhcnRzQ29uZmlnXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiXG4gICAgICAgICAgICAgIGNoYXJ0LmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgID8gY2hhcnQuY2xhc3NOYW1lICsgJyBjYXJkIGNhcmQtYm9yZGVyLWJvdHRvbSdcbiAgICAgICAgICAgICAgICA6ICdjYXJkIGNhcmQtYm9yZGVyLWJvdHRvbSdcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxoMz57eyBjaGFydC5jYXJkVGl0bGUgfX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Z29vZ2xlLWNoYXJ0XG4gICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJVwiXG4gICAgICAgICAgICAgIFt0eXBlXT1cImNoYXJ0LnR5cGVcIlxuICAgICAgICAgICAgICBbZGF0YV09XCJjaGFydC5jaGFydERhdGFcIlxuICAgICAgICAgICAgICBbY29sdW1uc109XCJjaGFydC5jaGFydE9wdGlvbkRhdGEubXlDb2x1bW5zXCJcbiAgICAgICAgICAgICAgW29wdGlvbnNdPVwiY2hhcnQuY2hhcnRPcHRpb25EYXRhLmNoYXJ0T3B0aW9uc1wiXG4gICAgICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0ZWRDaGFydCgkZXZlbnQsIGNoYXJ0LnR5cGUpXCJcbiAgICAgICAgICAgID48L2dvb2dsZS1jaGFydD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICBncmlkT25lQ29uZmlnICYmIGdyaWRPbmVDb25maWcgIT0gbnVsbCAmJiBncmlkT25lQ29uZmlnICE9IHVuZGVmaW5lZFxuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBbbmdDbGFzc109XCJcbiAgICAgICAgICAgICAgZ3JpZE9uZUNvbmZpZy5jbGFzc05hbWVcbiAgICAgICAgICAgICAgICA/IGdyaWRPbmVDb25maWcuY2xhc3NOYW1lICsgJ2NhcmQgY2FyZC1ib3JkZXItYm90dG9tJ1xuICAgICAgICAgICAgICAgIDogJ2NhcmQgY2FyZC1ib3JkZXItYm90dG9tJ1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgzPnt7IGdyaWRPbmVDb25maWcuY2FyZFRpdGxlIH19PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJncmlkLXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBoZWFkIG9mIGdyaWRPbmVDb25maWcudGFibGVDb2x1bW5IZWFkaW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICB7eyBoZWFkIH19XG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyaWRPbmVDb25maWcudGFibGVEYXRhOyBlbHNlIG5vRGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtIG9mIGdyaWRPbmVDb25maWcudGFibGVEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IHZhbCBvZiBncmlkT25lQ29uZmlnLnRhYmxlRGF0YUtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbVt2YWxdIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNub0RhdGE+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjVcIj5ObyBEYXRhPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImdyaWQtYXJlYS10YWJsZVJlY29yZHNcIlxuICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgIGdyaWRUd29Db25maWcgJiYgZ3JpZFR3b0NvbmZpZyAhPT0gbnVsbCAmJiBncmlkVHdvQ29uZmlnICE9PSB1bmRlZmluZWRcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICAgICAgZ3JpZFR3b0NvbmZpZy5jbGFzc05hbWVcbiAgICAgICAgICAgICAgPyBncmlkVHdvQ29uZmlnLmNsYXNzTmFtZSArICcgY2FyZCBjYXJkLWJvcmRlci10b3AnXG4gICAgICAgICAgICAgIDogJ2NhcmQgY2FyZC1ib3JkZXItdG9wJ1xuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMz57eyBncmlkVHdvQ29uZmlnLnRpdGxlIH19PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJncmlkLXRhYmxlXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGhlYWQgb2YgZ3JpZFR3b0NvbmZpZy50YWJsZUhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGhlYWQgfX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgIGdyaWRUd29Db25maWcudGFibGVEYXRhICYmIGdyaWRUd29Db25maWcudGFibGVEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBwYXJlbnQgb2YgZ3JpZFR3b0NvbmZpZy50YWJsZURhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IHBhcmVudC5wYXJlbnROYW1lIH19XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmNvbHNwYW5dPVwiZ3JpZFR3b0NvbmZpZy50YWJsZURhdGFLZXkubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbHNwYW5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhcmVudC5jaGlsZERhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQga2V5IG9mIGdyaWRUd29Db25maWcudGFibGVEYXRhS2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1ba2V5XSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuZmllbGRzLWJhciB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTI0OTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5ncmlkLWxhYmVsLWJhciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTRweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cblxuICAgICAgLmdyaWQtbGFiZWwtYmFyIC5saXN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmxhYmxlIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgfVxuXG4gICAgICBpbnB1dC5waWNrZXJbdHlwZT1cImRhdGVcIl0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIGlucHV0LnBpY2tlclt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICBzZWxlY3QsXG4gICAgICBpbnB1dCB7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogMTE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgfVxuICAgICAgc2VsZWN0OjotbXMtZXhwYW5kIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSB0aGUgZGVmYXVsdCBhcnJvdyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCBhbmQgSW50ZXJuZXQgRXhwbG9yZXIgMTEgKi9cbiAgICAgIH1cbiAgICAgIHNlbGVjdDpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgICAgIH1cbiAgICAgIG9wdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgfVxuICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgLS1wdXJwbGUtY29sb3I6ICM2MjIyNDg7XG4gICAgICAgIC0tY2FyZC1ib3JkZXItd2lkdGg6IDhweDtcbiAgICAgIH1cbiAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkOTY7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQge1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIG1hcmdpbjogNXB4IDAgMTJweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAxOHZ3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG4gICAgICAuY2FyZCAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICAuY2FyZCBwIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogIzg1MzE2MztcbiAgICAgIH1cblxuICAgICAgLmdyaWQtYXJlYS1jb3VudENhcmRzIHtcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1hcmVhLWNoYXJ0IHtcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzIvMy80O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1hcmVhLWNoYXJ0IC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIH1cblxuICAgICAgLmdyaWQtYXJlYS10YWJsZVJlY29yZHMge1xuICAgICAgICBncmlkLWFyZWE6IDEvNC8zLy0xO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1hcmVhLXRhYmxlUmVjb3JkcyAuY2FyZCB7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB3aWR0aDogMzh2dztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLmdyaWQtYXJlYS10YWJsZVJlY29yZHMgLmNhcmQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTBweDtcbiAgICAgIH1cblxuICAgICAgLmdyaWQtdGFibGUge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC10YWJsZSB0cixcbiAgICAgIC5ncmlkLXRhYmxlIHRoIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICB9XG4gICAgICAuZ3JpZC10YWJsZSAuY29sc3BhbiB0cjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuICAgICAgLmdyaWQtdGFibGUgdGQge1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgIH1cbiAgICAgIC5jb2xzcGFuIHRkIHtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA3dncgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmdyaWQtdGFibGUgdGQ6bnRoLWNoaWxkKDEpLFxuICAgICAgLmdyaWQtdGFibGUgdGg6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyZjJmMjtcbiAgICAgICAgd2lkdGg6IDEwdnc7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLXRhYmxlIHRoIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA3dnc7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTA4OXB4KSB7XG4gICAgICAgIC5ncmlkLWxhYmVsLWJhciAubGFzdExpc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc4NnB4KSB7XG4gICAgICAgIC5ncmlkLWxhYmVsLWJhciB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gICAgICAgIC5ncmlkLWxhYmVsLWJhciB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgICAgICAgIGdhcDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ncmlkLWFyZWEtY291bnRDYXJkcyxcbiAgICAgICAgLmdyaWQtYXJlYS1jaGFydCxcbiAgICAgICAgLmdyaWQtYXJlYS10YWJsZVJlY29yZHMge1xuICAgICAgICAgIGdyaWQtYXJlYTogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuZ3JpZC1hcmVhLWNoYXJ0IC5jYXJkLFxuICAgICAgICAuZ3JpZC1hcmVhLWNvdW50Q2FyZHMgLmNhcmQsXG4gICAgICAgIC5ncmlkLWFyZWEtdGFibGVSZWNvcmRzIC5jYXJkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmdyaWQtYXJlYS1jb3VudENhcmRzIC5jYXJkLWNvbnRlbnQuY2hhcnQge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNhcmQtYm9yZGVyLWxlZnQge1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tcHVycGxlLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IHZhcigtLWNhcmQtYm9yZGVyLXdpZHRoKSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgICB9XG4gICAgICAuY2FyZC1ib3JkZXItYm90dG9tIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tcHVycGxlLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogdmFyKC0tY2FyZC1ib3JkZXItd2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgICAgfVxuICAgICAgLmdyaWQtYXJlYS1leHBhbmQge1xuICAgICAgICBncmlkLWFyZWE6IDEvMi8zLy0xO1xuICAgICAgfVxuICAgICAgLmdyaWQtYXJlYS1leHBhbmQgLmNhcmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1NHZoO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neFN1cGVyRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZHluYW1pY0Zvcm0hOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpXG4gIGR5bmFtaWNGb3JtRmllbGREYXRhITogRHluYW1pY0ZpZWxkc0RhdGFbXTtcblxuICBASW5wdXQoKSBjYXJkQ29uZmlnITogRHluYW1pY0NhcmRzRGF0YVtdO1xuXG4gIEBJbnB1dCgpIGNoYXJ0c0NvbmZpZyE6IERhc2hhcmRDYXJkQ29uZmlnW107XG4gIEBJbnB1dCgpIGdyaWRPbmVDb25maWchOiBDYXJkVGFibGVEYXRhQ29uZmlnO1xuICBASW5wdXQoKSBncmlkVHdvQ29uZmlnITogR3JpZFRhYmxlQ29uZmlnRGF0YTtcblxuICBAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdGVkRmllbGRWYWx1ZUVtaXQ+KCk7XG4gIEBPdXRwdXQoKSBvblN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPj4oKTtcblxuICBAT3V0cHV0KCkgb25TZWxlY3RDaGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudEVtaXRPblNlbGVjdD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xuICAgIGNvbnNvbGUubG9nKGBOZ3hTdXBlckRhc2hib2FyZENvbXBvbmVudCA6IGNvbnN0cnVjdG9yYCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvL2NyZWF0ZSBkeW5hbWljIGZpZWxkcyBhbmQgYWRkIHZhbGlkYXRpb24gZm9yIGVhY2ggZmllbGRcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuXG4gIHR5cGVDaGVjayhkYXRhOiBhbnkpIHtcbiAgICByZXR1cm4gZGF0YSAmJiBBcnJheS5pc0FycmF5KGRhdGEpID8gZmFsc2UgOiB0cnVlO1xuICB9XG5cbiAgY3JlYXRlRm9ybSgpIHtcbiAgICBsZXQgZm9ybUdycCA9IHt9O1xuICAgIHRoaXMuZHluYW1pY0Zvcm1GaWVsZERhdGEuZm9yRWFjaCgoZmllbGQ6IER5bmFtaWNGaWVsZHNEYXRhKSA9PiB7XG4gICAgICBmb3JtR3JwID0ge1xuICAgICAgICAuLi5mb3JtR3JwLFxuICAgICAgICBbZmllbGQuZm9ybUNvbnRyb2xLZXldOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICB0aGlzLmR5bmFtaWNGb3JtID0gdGhpcy5mYi5ncm91cChmb3JtR3JwKTtcbiAgfVxuXG4gIC8vIGVtaXQgc2VsZWN0ZWQgZmllbGQgdmFsdWVcbiAgc2VsZXRlZFZhbHVlKGV2OiBhbnkpIHtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoe1xuICAgICAgc2VsZWN0ZWRWYWx1ZTogZXYudGFyZ2V0LnZhbHVlLFxuICAgICAgZmllbGRDb250cm9sTmFtZTogZXYudGFyZ2V0LmlkLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXRGb3JtKCkge1xuICAgIHRoaXMub25TdWJtaXQuZW1pdCh0aGlzLmR5bmFtaWNGb3JtLnZhbHVlKTtcbiAgfVxuXG4gIHNlbGVjdGVkQ2hhcnQoZXY6IENoYXJ0U2VsZWN0aW9uQ2hhbmdlZEV2ZW50LCBjaGFydFR5cGU6IHN0cmluZykge1xuICAgIHRoaXMub25TZWxlY3RDaGFydC5lbWl0KHtcbiAgICAgIGV2OiBldixcbiAgICAgIGNoYXJ0VHlwZTogY2hhcnRUeXBlLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEeW5hbWljRmllbGRzQ29uZmlndXJhdGlvbiA9IChcbiAgZmllbGRDb25maWc6IER5bmFtaWNGaWVsZHNEYXRhW11cbik6IER5bmFtaWNGaWVsZHNEYXRhW10gPT4ge1xuICBpZiAoZmllbGRDb25maWcpIHJldHVybiBmaWVsZENvbmZpZztcbiAgZWxzZSByZXR1cm4gdGVzdEZpZWxkRGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0RmllbGREYXRhOiBEeW5hbWljRmllbGRzRGF0YVtdID0gW1xuICB7IGxhYmxlOiBcIlpvbmVcIiwgZm9ybUNvbnRyb2xLZXk6IFwiem9uZVwiLCBsb3ZEYXRhTGlzdDogW10gfSxcbiAgeyBsYWJsZTogXCJCcmFuY2hcIiwgZm9ybUNvbnRyb2xLZXk6IFwiYnJhbmNoXCIsIGxvdkRhdGFMaXN0OiBbXSB9LFxuICB7IGxhYmxlOiBcIlRlYW1zXCIsIGZvcm1Db250cm9sS2V5OiBcInRlYW1zXCIsIGxvdkRhdGFMaXN0OiBbXSB9LFxuICB7IGxhYmxlOiBcIlByb2R1Y3RcIiwgZm9ybUNvbnRyb2xLZXk6IFwicHJvZHVjdFwiLCBsb3ZEYXRhTGlzdDogW10gfSxcbiAgeyBsYWJsZTogXCJTdGFydCBEYXRlXCIsIGZvcm1Db250cm9sS2V5OiBcInN0YXJ0RGF0ZVwiLCB0eXBlOiBcImRhdGVcIiB9LFxuICB7IGxhYmxlOiBcIkVuZCBEYXRlXCIsIGZvcm1Db250cm9sS2V5OiBcImVuZERhdGVcIiwgdHlwZTogXCJkYXRlXCIgfSxcbl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwTE9WRGF0YSB7XG4gIG5hbWU6IHN0cmluZyB8IG51bWJlcjtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljRmllbGRzRGF0YSB7XG4gIGxhYmxlOiBzdHJpbmc7XG4gIGZvcm1Db250cm9sS2V5OiBzdHJpbmc7XG4gIGxvdkRhdGFMaXN0PzogQXBwTE9WRGF0YVtdO1xuICB0eXBlPzogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0ZWRGaWVsZFZhbHVlRW1pdCB7XG4gIHNlbGVjdGVkVmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgZmllbGRDb250cm9sTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldERhdGFPcHRpb24ge1xuICBmZXRjaExvdkRhdGE6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj5bXTtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBuYW1lMj86IHN0cmluZztcbn1cblxuLy8gaW50ZXJmYWNlcyBmb3IgZ3JpZCBjYXJkc0xpc3Q6XG5leHBvcnQgY29uc3QgRHluYW1pY0NhcmRzQ29uZmlndXJhdGlvbiA9IChcbiAgY2FyZENvbmZpZzogRHluYW1pY0NhcmRzRGF0YVtdXG4pOiBEeW5hbWljQ2FyZHNEYXRhW10gPT4ge1xuICBpZiAoY2FyZENvbmZpZykgcmV0dXJuIGNhcmRDb25maWc7XG4gIGVsc2UgcmV0dXJuIHRlc3RDYXJkRGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0Q2FyZERhdGE6IER5bmFtaWNDYXJkc0RhdGFbXSA9IFtcbiAgeyB0aXRsZTogXCJUb3RhbCBQcm9wb3NhbHNcIiwgdmFsdWU6IDcwMCB9LFxuICB7IHRpdGxlOiBcIk9uIFByb2Nlc3NcIiwgdmFsdWU6IDIzMCB9LFxuICB7IHRpdGxlOiBcIlNhbmN0aW9uZWRcIiwgdmFsdWU6IDMwMCB9LFxuICB7IHRpdGxlOiBcIlJlamVjdGVkXCIsIHZhbHVlOiAyNTQgfSxcbiAgeyB0aXRsZTogXCJPcGVuZWQgcHJlbmRpbmcgZm9yID4gMzAgZGF5c1wiLCB2YWx1ZTogMTQzIH0sXG4gIHsgdGl0bGU6IFwiRGlzYnVyc2VkXCIsIHZhbHVlOiAxMjAgfSxcbl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY0NhcmRzRGF0YSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERhc2hib2FyZENoYXJ0c0NvbmZpZyA9IChcbiAgY2hhcnRzRGF0YT86IERhc2hhcmRDYXJkQ29uZmlnW11cbik6IERhc2hhcmRDYXJkQ29uZmlnW10gPT4ge1xuICBpZiAoY2hhcnRzRGF0YSkge1xuICAgIHJldHVybiBjaGFydHNEYXRhO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0ZXN0Q2hhcnRzRGF0YTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RDaGFydHNEYXRhOiBEYXNoYXJkQ2FyZENvbmZpZ1tdID0gW1xuICB7XG4gICAgdHlwZTogQ2hhcnRUeXBlLkNvbWJvQ2hhcnQsXG4gICAgY2FyZFRpdGxlOiBcIk1vbnRobHkgV2lzZVwiLFxuICAgIGNoYXJ0T3B0aW9uRGF0YToge1xuICAgICAgbXlDb2x1bW5zOiBbXCJZZWFyXCIsIFwiUmV0YWlsXCIsIFwiQWdyaVwiLCBcIk1TTUVcIiwgXCJHb2xkXCIsIFwiQ29ycFwiXSxcblxuICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgIHRpdGxlOiBgTW9udGhseSBXaXNlYCxcbiAgICAgICAgY2hhcnRBcmVhOiB7IHdpZHRoOiBcIjUwJVwiIH0sXG4gICAgICAgIGhBeGlzOiB7XG4gICAgICAgICAgdGl0bGU6IGBNb2R1bGVzYCxcbiAgICAgICAgICBtaW5WYWx1ZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgdkF4aXM6IHtcbiAgICAgICAgICB0aXRsZTogXCJOby4gT2YgQW1vdW50XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNlcmllc1R5cGU6IFwiYmFyc1wiLFxuICAgICAgICAvLyBzZXJpZXM6IHsgNDogeyB0eXBlOiBcImxpbmVcIiB9IH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgY2hhcnREYXRhOiBbXG4gICAgICBbXCIyMDIzLzA1XCIsIDUwLCAzMywgMjQuNSwgMzMsIDIyXSxcbiAgICAgIFtcIjIwMjQvMDVcIiwgMjMsIDQxLCAyMi41LCAyMiwgMl0sXG4gICAgICBbXCIyMDIxLzA1XCIsIDQ0LCA4MiwgMTMsIDQzLCAxMl0sXG4gICAgICBbXCIyMDIzLzA1XCIsIDE5LCAzMywgMjMsIDIxLCA4OV0sXG4gICAgICBbXCIyMDIyLzA1XCIsIDMwLCAyMCwgMTIsIDM0LCAyMl0sXG4gICAgXSxcbiAgICBjbGFzc05hbWU6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBDaGFydFR5cGUuUGllQ2hhcnQsXG4gICAgY2FyZFRpdGxlOiBcIlRvdGFsIFNhbmN0aW9uZWRcIixcbiAgICBjaGFydE9wdGlvbkRhdGE6IHtcbiAgICAgIG15Q29sdW1uczogW1xuICAgICAgICBbXCJSZXRhaWxcIiwgXCJBZ3JpXCIsIFwiTVNNRVwiLCBcIkdPTERcIiwgXCJDT1JQXCJdLFxuICAgICAgICBcIkxlYWRzIENvdW50XCIsXG4gICAgICAgIHsgcm9sZTogXCJzdHlsZVwiIH0sXG4gICAgICBdLFxuICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgIHRpdGxlOiBgU2FuY3Rpb25lZCBBbW91bnRgLFxuICAgICAgICBjaGFydEFyZWE6IHsgd2lkdGg6IFwiNTAlXCIgfSxcbiAgICAgICAgc2xpY2VzOiB7XG4gICAgICAgICAgMDogeyBjb2xvcjogXCIjNjIyMjQ4XCIgfSxcbiAgICAgICAgICAxOiB7IGNvbG9yOiBcIiMxMDk2MThcIiB9LFxuICAgICAgICAgIDI6IHsgY29sb3I6IFwiIzMzNjZjY1wiIH0sXG4gICAgICAgICAgMzogeyBjb2xvcjogXCJyZWRcIiB9LFxuICAgICAgICAgIDQ6IHsgY29sb3I6IFwiI2ZmOTkwMFwiIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgY2hhcnREYXRhOiBbXG4gICAgICBbXCJSZXRhaWxcIiwgMzQ0NSwgXCJyZWRcIl0sXG4gICAgICBbXCJBZ3JpXCIsIDM0NDUsIFwicmVkXCJdLFxuICAgICAgW1wiTVNNRVwiLCAzNDQ1LCBcInJlZFwiXSxcbiAgICAgIFtcIkdvbGRcIiwgMzQ0NSwgXCJyZWRcIl0sXG4gICAgXSxcbiAgICBjbGFzc05hbWU6IFwiXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhc2hhcmRDYXJkQ29uZmlnIHtcbiAgdHlwZTogYW55O1xuICBjaGFydE9wdGlvbkRhdGE6IENoYXJ0T3B0aW9uc0NvbmZpZztcbiAgY2hhcnREYXRhOiBBcnJheTxDaGFydERhdGFUeXBlW10+O1xuICBjYXJkVGl0bGU/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQ2hhcnREYXRhVHlwZSA9IHN0cmluZyB8IG51bWJlcjtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFydE9wdGlvbnNDb25maWcge1xuICAvLyBteUNvbHVtbnM6IEFycmF5PFxuICAvLyAgIHN0cmluZyB8IENvbHVtbnNUeXBlW10gfCBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+XG4gIC8vID47XG4gIG15Q29sdW1uczogYW55O1xuICBjaGFydE9wdGlvbnM6IENoYXJ0QXhpc0RhdGE7XG59XG5cbmV4cG9ydCB0eXBlIENvbHVtbnNUeXBlID0gc3RyaW5nIHwgbnVtYmVyO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0QXhpc0RhdGEge1xuICB0aXRsZTogc3RyaW5nO1xuICBjaGFydEFyZWE6IHsgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7IGhlaWdodD86IHN0cmluZyB8IG51bWJlciB9O1xuICBzbGljZXM/OiBvYmplY3Q7XG4gIGhBeGlzPzogQXhpc1ZsYXVlcztcbiAgdkF4aXM/OiBBeGlzVmxhdWVzO1xuICBzZXJpZXNUeXBlPzogc3RyaW5nO1xuICBzZXJpZXM/OiBvYmplY3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXhpc1ZsYXVlcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBtaW5WYWx1ZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFydEV2ZW50RW1pdE9uU2VsZWN0IHtcbiAgZXY6IENoYXJ0U2VsZWN0aW9uQ2hhbmdlZEV2ZW50O1xuICBjaGFydFR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENhcmRUYWJsZURhdGFDb25maWcgPSAoXG4gIGNhcmRUYWJsZURhdGE/OiBDYXJkVGFibGVEYXRhQ29uZmlnXG4pOiBDYXJkVGFibGVEYXRhQ29uZmlnID0+IHtcbiAgaWYgKGNhcmRUYWJsZURhdGEpIHtcbiAgICByZXR1cm4gY2FyZFRhYmxlRGF0YTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGVzdENhcmRUYWJsZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RDYXJkVGFibGUgPSB7XG4gIGNhcmRUaXRsZTogXCJUb3AgNSBCcmFuY2hlc1wiLFxuICB0YWJsZUNvbHVtbkhlYWRpbmdzOiBbXCJcIiwgXCJSZXRhaWxcIiwgXCJBZ3JpXCIsIFwiTVNNRVwiLCBcIkdvbGRcIl0sXG4gIHRhYmxlRGF0YUtleTogW1wib3JnTmFtZVwiLCBcInJldGFpbFwiLCBcImFncmlcIiwgXCJtc21lXCIsIFwiZ29sZFwiXSxcbiAgdGFibGVEYXRhOiBbXG4gICAge1xuICAgICAgb3JnTmFtZTogXCJDaGVubmFpXCIsXG4gICAgICByZXRhaWw6IFwiODQ5XCIsXG4gICAgICBhZ3JpOiBcIjU5OVwiLFxuICAgICAgbXNtZTogXCI1MDBcIixcbiAgICAgIGdvbGQ6IFwiMjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBvcmdOYW1lOiBcIkRlbGhpXCIsXG4gICAgICByZXRhaWw6IFwiMjAwXCIsXG4gICAgICBhZ3JpOiBcIjMwMFwiLFxuICAgICAgbXNtZTogXCI0MDBcIixcbiAgICAgIGdvbGQ6IFwiMTUwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBvcmdOYW1lOiBcIlRuYWdhclwiLFxuICAgICAgcmV0YWlsOiBcIjg0OVwiLFxuICAgICAgYWdyaTogXCI0ODBcIixcbiAgICAgIG1zbWU6IFwiMjUwXCIsXG4gICAgICBnb2xkOiBcIjYwMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgb3JnTmFtZTogXCJQb29uYW1hbGVcIixcbiAgICAgIHJldGFpbDogXCI5NDBcIixcbiAgICAgIGFncmk6IFwiMjM0XCIsXG4gICAgICBtc21lOiBcIjcwMFwiLFxuICAgICAgZ29sZDogXCI0MDBcIixcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkVGFibGVEYXRhQ29uZmlnIHtcbiAgY2FyZFRpdGxlPzogc3RyaW5nO1xuICB0YWJsZUNvbHVtbkhlYWRpbmdzOiBzdHJpbmdbXTtcbiAgdGFibGVEYXRhS2V5OiBzdHJpbmdbXTtcbiAgdGFibGVEYXRhOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+PjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRUYWJsZUNvbmZpZ0RhdGEge1xuICB0aXRsZT86IHN0cmluZztcbiAgdGFibGVIZWFkaW5nOiBzdHJpbmdbXTtcbiAgdGFibGVEYXRhS2V5OiBzdHJpbmdbXTtcbiAgLy8gdGFibGVEYXRhOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBbXT4+O1xuICB0YWJsZURhdGE6IGFueTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBDaGlsZERhdGFUeXBlID0gc3RyaW5nIHwgbnVtYmVyO1xuXG5leHBvcnQgY29uc3QgR3JpZFRhYmxlRGF0YUNvbmZpZyA9IChcbiAgZ3JpZFRhYmxlRGF0YT86IEdyaWRUYWJsZUNvbmZpZ0RhdGFcbik6IEdyaWRUYWJsZUNvbmZpZ0RhdGEgPT4ge1xuICBpZiAoZ3JpZFRhYmxlRGF0YSkge1xuICAgIHJldHVybiBncmlkVGFibGVEYXRhO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0ZXN0R3JpZFRhYmxlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdEdyaWRUYWJsZTogR3JpZFRhYmxlQ29uZmlnRGF0YSA9IHtcbiAgdGl0bGU6IFwiU2NoZW1lIFdpc2VcIixcbiAgdGFibGVIZWFkaW5nOiBbXG4gICAgXCJMb2FuIFR5cGVcIixcbiAgICBcIlNjaGVtZVwiLFxuICAgIFwiTm8gb2YgQWNjICNcIixcbiAgICBcIkxpbWl0IGluIChMYWtocylcIixcbiAgICBcIk9TIGFtdCBpbihMYWtocylcIixcbiAgXSxcbiAgdGFibGVEYXRhOiBbXG4gICAge1xuICAgICAgcGFyZW50TmFtZTogXCJDaGVubmFpXCIsXG4gICAgICBjaGlsZERhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRwbVNlcUlkOiA2MjY4NSxcbiAgICAgICAgICB0cG1Db2RlOiBcIjJcIixcbiAgICAgICAgICB0cG1Nb2RpZmllZERhdGU6IFwiMjAyNC0wNC0yNFQwNzo0OToyMC44NzkrMDAwMFwiLFxuICAgICAgICAgIHRwbVByZENvZGU6IFwiQ2FyIExvYW5cIixcbiAgICAgICAgICBzY2hlbWVUeXBlOiBcIkNhciBEZWFsZXJcIixcbiAgICAgICAgICBub09mQWNjOiBcIlMxNFwiLFxuICAgICAgICAgIGxpbWl0OiBcIjM0NFwiLFxuICAgICAgICAgIFNhbmN0aW9uZWQ6IFwiMjAzMDJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRwbVNlcUlkOiA2MjY5OCxcbiAgICAgICAgICB0cG1Db2RlOiBcIjJcIixcbiAgICAgICAgICB0cG1Nb2RpZmllZERhdGU6IFwiMjAyNC0wNC0yNFQwNzo0OToyMC44ODkrMDAwMFwiLFxuICAgICAgICAgIHRwbVByZENvZGU6IFwiQ2FyIExvYW5cIixcbiAgICAgICAgICBzY2hlbWVUeXBlOiBcIkx1eHVyeSBDYXIgTG9hblwiLFxuICAgICAgICAgIG5vT2ZBY2M6IFwiODRcIixcbiAgICAgICAgICBsaW1pdDogXCIyMTIzMlwiLFxuICAgICAgICAgIFNhbmN0aW9uZWQ6IFwiMTIxLjQ1XCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGFyZW50TmFtZTogXCJIeWRlcmFiYWRcIixcbiAgICAgIGNoaWxkRGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgdHBtU2VxSWQ6IDYyNjg2LFxuICAgICAgICAgIHRwbUNvZGU6IFwiMlwiLFxuICAgICAgICAgIHRwbU1vZGlmaWVkRGF0ZTogXCIyMDI0LTA0LTI0VDA3OjQ5OjIwLjg4MCswMDAwXCIsXG4gICAgICAgICAgdHBtUHJkQ29kZTogXCJDYXNoIExvYW5cIixcbiAgICAgICAgICBzY2hlbWVUeXBlOiBcIlByb3BlcnR5IExvYW5cIixcbiAgICAgICAgICBub09mQWNjOiBcIlMzNFwiLFxuICAgICAgICAgIGxpbWl0OiBcIjY3NlwiLFxuICAgICAgICAgIFNhbmN0aW9uZWQ6IFwiMjNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgdGFibGVEYXRhS2V5OiBbXCJzY2hlbWVUeXBlXCIsIFwibm9PZkFjY1wiLCBcImxpbWl0XCIsIFwiU2FuY3Rpb25lZFwiXSxcbn07XG4iXX0=