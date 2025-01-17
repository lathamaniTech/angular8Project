/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-super-dashboard.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ChartType } from "angular-google-charts";
import { NgxSuperDashboardService } from "./ngx-super-dashboard.service";
export class NgxSuperDashboardComponent {
    /**
     * @param {?} ngxService
     */
    constructor(ngxService) {
        this.ngxService = ngxService;
        this.showIcon = true;
        this.cardColors = CardsColors;
        this.onSelect = new EventEmitter();
        this.onSubmit = new EventEmitter();
        this.onSelectChart = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //create dynamic fields and add validation for each field
        this.createForm();
    }
    /**
     * @param {?} index
     * @param {?} idName
     * @return {?}
     */
    toggleExpand(index, idName) {
        /** @type {?} */
        const content = document.getElementById(idName);
        if (content.classList.contains("expanded")) {
            content.classList.remove("expanded");
            this.showIcon = !this.showIcon;
            for (let i = 0; i < 4; i++) {
                if (i != index) {
                    /** @type {?} */
                    let hideContent = document.getElementById("expand" + i);
                    hideContent.classList.remove("hideGrids");
                }
            }
        }
        else {
            content.classList.add("expanded");
            this.showIcon = !this.showIcon;
            window.scrollTo({ top: 0, behavior: "smooth" });
            for (let i = 0; i < 4; i++) {
                if (i != index) {
                    /** @type {?} */
                    let hideContent = document.getElementById("expand" + i);
                    hideContent.classList.add("hideGrids");
                }
            }
        }
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
            formGrp = Object.assign({}, formGrp, { [field.formControlKey]: [
                    field.selected ? field.selected : "",
                    Validators.compose([Validators.required]),
                ] });
        }));
        this.dynamicForm = new FormBuilder().group(formGrp);
        this.ngxService.getFormGroup = this.dynamicForm;
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
    <div
      [ngClass]="
        dynamicFormFieldData && dynamicFormFieldData.length > 7
          ? 'formsBar fields-bar-second'
          : 'formsBar fields-bar'
      "
    >
      <form [formGroup]="dynamicForm" (ngSubmit)="onSubmitForm()">
        <div class="grid-label-bar" *ngIf="dynamicForm.value.length != 0">
          <ng-container
            *ngFor="let field of dynamicFormFieldData; let i = index"
          >
            <div
              [ngClass]="field.className ? field.className + ' list' : 'list'"
              *ngIf="
                field.hasOwnProperty('lovDataList') && field.lovDataList;
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
              {{ noteText }}
            </div>
          </div>
        </div>
      </form>
    </div>
    <div
      class="horizontalTemp grid-container"
      [style.margin-top]="dynamicFormFieldData.length > 7 ? '4.4rem' : '3rem'"
    >
      <div
        class="grid-area-countCards"
        *ngIf="cardConfig && cardConfig.length > 0"
      >
        <ng-container *ngFor="let item of cardConfig; let j = index">
          <div
            [ngClass]="item.className ? item.className + ' card' : 'card'"
            [style.background-color]="cardColors[j]"
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
        id="{{ 'expand' + i }}"
        class="grid-area-chart"
        *ngFor="let chart of chartsConfig; let i = index"
      >
        <!-- <ng-container *ngFor="let chart of chartsConfig; let i = index"> -->
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
            style="width: 100%; height: 80%"
            [type]="chart.type"
            [data]="chart.chartData"
            [columns]="chart.chartOptionData.myColumns"
            [options]="chart.chartOptionData.chartOptions"
            (select)="selectedChart($event, chart.type)"
          ></google-chart>
        </div>
        <div class="resizer" (click)="toggleExpand(i, 'expand' + i)">
          <span class="resizeIcon" *ngIf="showIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15px"
              viewBox="0 -960 960 960"
              width="15px"
              fill="#5f6368"
            >
              <path
                d="M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z"
              />
            </svg>
            <span class="popupText">Expand</span>
          </span>
          <span class="resizeIcon" *ngIf="!showIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#5f6368"
            >
              <path
                d="M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z"
              />
            </svg>
            <span class="popupText">Collapse</span>
          </span>
        </div>
        <!-- </ng-container> -->
      </div>

      <div
        id="expand2"
        [ngClass]="
          gridTwoConfig
            ? 'grid-area-tableOne'
            : 'grid-area-tableOne gridTableOne'
        "
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
                    *ngFor="let item of gridOneConfig.tableData; let i = index"
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
        <div class="resizer" (click)="toggleExpand(2, 'expand2')">
          <span class="resizeIcon" *ngIf="showIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15px"
              viewBox="0 -960 960 960"
              width="15px"
              fill="#5f6368"
            >
              <path
                d="M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z"
              />
            </svg>
            <span class="popupText">Expand</span>
          </span>
          <span class="resizeIcon" *ngIf="!showIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#5f6368"
            >
              <path
                d="M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z"
              />
            </svg>
            <span class="popupText">Collapse</span>
          </span>
        </div>
      </div>

      <div
        id="expand3"
        [ngClass]="
          gridOneConfig
            ? 'grid-area-tableRecords'
            : 'grid-area-tableRecords gridTableTwo'
        "
        *ngIf="
          gridTwoConfig && gridTwoConfig !== null && gridTwoConfig !== undefined
        "
      >
        <div
          [ngClass]="
            gridTwoConfig.className
              ? gridTwoConfig.className + ' card card-border-bottom'
              : 'card card-border-bottom'
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
                      <tr
                        class="subTableRow"
                        *ngFor="let item of parent.childData"
                      >
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
        <div class="resizer" (click)="toggleExpand(3, 'expand3')">
          <span class="resizeIcon" *ngIf="showIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15px"
              viewBox="0 -960 960 960"
              width="15px"
              fill="#5f6368"
            >
              <path
                d="M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z"
              />
            </svg>
            <span class="popupText">Expand</span>
          </span>
          <span class="resizeIcon" *ngIf="!showIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#5f6368"
            >
              <path
                d="M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z"
              />
            </svg>
            <span class="popupText">Collapse</span>
          </span>
        </div>
      </div>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      .hideGrids {
        display: none !important;
      }
      .resizeIcon {
        position: relative;
      }

      .resizeIcon .popupText {
        visibility: hidden;
        width: 50px;
        background-color: black;
        font-size: 10px;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 5px;
        position: absolute;
        bottom: 125%;
        left: 35%;
        transform: translateX(-50%);
        z-index: 1;
        opacity: 0;
        transition: opacity 0.3s;
      }

      .resizeIcon .popupText::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
      }

      .resizeIcon:hover .popupText {
        visibility: visible;
        opacity: 1;
      }
      .template-box {
        background: #111249;
        position: fixed;
        right: -45px;
        transform: rotate(90deg);
        top: 50%;
        text-align: center;
      }

      .expanded {
        grid-area: 2 / 1 / -1 / -1 !important;
        justify-content: center;
      }

      .expanded google-chart {
        width: 100% !important;
        height: 90% !important;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .expanded.grid-area-tableOne .card,
      .expanded.grid-area-chart .card {
        width: 99%;
        height: 400px;
        overflow: auto;
      }

      .expanded.grid-area-tableRecords .card {
        width: 99%;
        height: 100%;
      }
      .expanded.grid-area-tableRecords .card-content {
        height: 500px;
        max-height: 1000px;
        overflow: auto;
      }

      .resizer {
        position: absolute;
        width: 20px;
        height: 20px;
        right: 10px;
        top: 10px;
        cursor: pointer;
        visibility: hidden;
        background: #ead4d429;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 1px 10px 0px rgb(0 0 0 / 38%);
        // cursor: ne-resize;
      }

      .form-ctrl {
        display: block;
        padding: 5px 10px;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        color: #fff;
        background-color: #111249;
        background-clip: padding-box;
        border-radius: 6px;
        text-align: center;
      }
      .subTableRow {
        display: inline-table;
        width: 100%;
      }
      .fields-bar {
        height: 48px;
      }
      .formsBar {
        width: 100vw;
        position: fixed;
        top: 0;
        z-index: 999;
        background-color: #111249;
        display: flex;
        align-items: center;
      }
      .fields-bar-second {
        height: 75px;
      }
      .fields-bar-second .grid-label-bar {
        grid-template-columns: auto auto auto auto auto auto;
        padding: 2px 14px;
      }
      .fields-bar .grid-label-bar {
        grid-template-columns: auto auto auto auto auto auto auto;
        gap: 10px;
        padding: 5px 14px;
      }
      .grid-label-bar {
        // grid-template-columns: auto auto auto auto auto auto auto;
        gap: 10px;
        // padding: 5px 14px;
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
        font-size: 12px;
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
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto auto;
        gap: 0px;
        background-color: #dddddd96;
        padding: 7px;
        margin-top: 3rem;
      }

      // .horizontalTemp.grid-container {
      //   grid-template-columns: auto auto;
      //   grid-template-rows: auto auto auto auto;
      //   gap: 0px;
      // }

      .card {
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        // margin: 5px 0 12px 0;
        margin: 5px 6px 12px;
        width: 20%;
        text-align: center;
        background-color: #fff;
        // width: 18vw;
        border-radius: 8px;
        position: relative;
      }

      .card .card-header {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        background: none;
        font-weight: 600;
        font-size: 15px;
      }

      .card .card-content {
        padding: 10px;
      }

      .card h3 {
        font-size: 15px;
        margin: 0;
      }

      .card p {
        font-weight: 600;
        font-size: 24px;
        color: #f0f2f4;
        margin-top: 0px;
        margin-bottom: 12px;
      }

      .grid-area-countCards .card-content {
        padding: 2px 10px 10px;
      }

      .grid-area-countCards .card-header {
        // height: 45px;
        height: 32px;
        display: flex;
        border-bottom: none;
        align-items: center;
        justify-content: center;
      }

      .grid-area-countCards h3 {
        font-size: 14px;
        color: #f0f2f4;
      }
      .grid-area-countCards {
        grid-area: 1/1/2/-1;
        display: flex;
      }

      .grid-area-tableOne {
        grid-area: 3/1/-1/2;
        position: relative;
        display: flex;
        transition: grid-area 0.3s ease-in-out;
      }

      .gridTableOne {
        grid-area: 3/1/-1/-1;
      }

      .grid-area-tableOne .card {
        width: 100%;
        height: 300px;
        transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
      }

      .grid-area-chart {
        position: relative;
        display: flex;
        transition: grid-area 0.3s ease-in-out;
      }

      #expand0 {
        // grid-area: 2/1/3/-1;
        // width:100%;
        grid-area: 2/1/3/2;
      }

      #expand1 {
        grid-area: 2/2/3/-1;
      }

      .grid-area-chart:hover .resizer,
      .grid-area-tableRecords:hover .resizer,
      .grid-area-tableOne:hover .resizer {
        visibility: visible;
      }

      .grid-area-chart .card {
        // width:49%;
        width: 100%;
        height: 300px;
        // padding-bottom: 8px;
        transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
      }

      .grid-area-tableRecords {
        grid-area: 3/2/-1/-1;
        position: relative;
        display: flex;
        transition: grid-area 0.3s ease-in-out;
      }

      .gridTableTwo {
        grid-area: 3/1/-1/-1;
      }

      .grid-area-tableRecords .card {
        width: 100%;
        height: 300px;
        overflow: hidden;
        transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
      }

      .grid-area-tableRecords .card-content {
        height: 230px;
        max-height: 1000px;
        overflow: auto;
        // scrollbar-width: none; /* For Firefox */
        // -ms-overflow-style: none;
      }
      ::-webkit-scrollbar {
        display: block;
        width: 8px; /* Width of the scrollbar */
        height: 8px; /* Height of the scrollbar (for horizontal scrollbars) */
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2); /* Dark, slightly transparent thumb */
        border-radius: 4px; /* Rounded corners */
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.4); /* Slightly darker on hover */
      }

      ::-webkit-scrollbar-track {
        background: transparent; /* Transparent track */
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
      
    `]
            }] }
];
/** @nocollapse */
NgxSuperDashboardComponent.ctorParameters = () => [
    { type: NgxSuperDashboardService }
];
NgxSuperDashboardComponent.propDecorators = {
    dynamicFormFieldData: [{ type: Input }],
    cardConfig: [{ type: Input }],
    chartsConfig: [{ type: Input }],
    gridOneConfig: [{ type: Input }],
    gridTwoConfig: [{ type: Input }],
    noteText: [{ type: Input }],
    onSelect: [{ type: Output }],
    onSubmit: [{ type: Output }],
    onSelectChart: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxSuperDashboardComponent.prototype.dynamicForm;
    /** @type {?} */
    NgxSuperDashboardComponent.prototype.showIcon;
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
    NgxSuperDashboardComponent.prototype.noteText;
    /** @type {?} */
    NgxSuperDashboardComponent.prototype.cardColors;
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
    NgxSuperDashboardComponent.prototype.ngxService;
}
/** @type {?} */
export const CardsColors = [
    "#d962be",
    "#3e85f5",
    "#5cdc79fc",
    "#dc815cfc",
    "#5cc0dc",
    "#7b556c",
    "#c39e56",
];
/** @type {?} */
export const DynamicFieldsConfiguration = (/**
 * @param {?=} fieldConfig
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
    {
        lable: "Zone",
        formControlKey: "zone",
        lovDataList: [
            { value: "1", name: "Chennai" },
            { value: "2", name: "Pune" },
        ],
    },
    {
        lable: "Branch",
        formControlKey: "branch",
        lovDataList: [
            { value: "1", name: "Porur" },
            { value: "2", name: "Tnagar" },
        ],
    },
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
    DynamicFieldsData.prototype.selected;
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
 * @param {?=} cardConfig
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
                chartArea: { width: "70%", height: "70%" },
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
/**
 * @record
 */
export function CardTableConfig() { }
if (false) {
    /** @type {?|undefined} */
    CardTableConfig.prototype.cardTitle;
    /** @type {?} */
    CardTableConfig.prototype.tableColumnHeadings;
    /** @type {?} */
    CardTableConfig.prototype.tableDataKey;
    /** @type {?} */
    CardTableConfig.prototype.tableData;
    /** @type {?|undefined} */
    CardTableConfig.prototype.className;
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN1cGVyLWRhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc3VwZXItZGFzaGJvYXJkLyIsInNvdXJjZXMiOlsibGliL25neC1zdXBlci1kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQThCLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBOHdCekUsTUFBTSxPQUFPLDBCQUEwQjs7OztJQXFCckMsWUFBb0IsVUFBb0M7UUFBcEMsZUFBVSxHQUFWLFVBQVUsQ0FBMEI7UUFuQnhELGFBQVEsR0FBWSxJQUFJLENBQUM7UUFhekIsZUFBVSxHQUFhLFdBQVcsQ0FBQztRQUV6QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFDdEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFtQyxDQUFDO1FBQy9ELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7SUFJckUsQ0FBQzs7OztJQUVELFFBQVE7UUFDTix5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVBLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTTs7Y0FDbEIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQy9DLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDMUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFOzt3QkFDVixXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO29CQUN2RCxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDM0M7YUFDRjtTQUNGO2FBQU07WUFDTCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNoRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQixJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7O3dCQUNWLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7b0JBQ3ZELFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUN4QzthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsVUFBVTs7WUFDSixPQUFPLEdBQUcsRUFBRTtRQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQzdELE9BQU8scUJBQ0YsT0FBTyxJQUNWLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNwQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMxQyxHQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFHRCxZQUFZLENBQUMsRUFBTztRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixhQUFhLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQzlCLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLEVBQThCLEVBQUUsU0FBaUI7UUFDN0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsRUFBRSxFQUFFLEVBQUU7WUFDTixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFsMkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdUVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFFN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E0Y0M7YUFFSjs7OztZQTd3QlEsd0JBQXdCOzs7bUNBa3hCOUIsS0FBSzt5QkFHTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUVMLEtBQUs7dUJBS0wsTUFBTTt1QkFDTixNQUFNOzRCQUNOLE1BQU07Ozs7SUFsQlAsaURBQThCOztJQUM5Qiw4Q0FBeUI7O0lBRXpCLDBEQUMwQzs7SUFFMUMsZ0RBQXdDOztJQUN4QyxrREFBMkM7O0lBQzNDLG1EQUF3Qzs7SUFDeEMsbURBQTRDOztJQUU1Qyw4Q0FDa0I7O0lBRWxCLGdEQUFtQzs7SUFFbkMsOENBQWdFOztJQUNoRSw4Q0FBeUU7O0lBQ3pFLG1EQUFxRTs7Ozs7SUFFekQsZ0RBQTRDOzs7QUFvRTFELE1BQU0sT0FBTyxXQUFXLEdBQUc7SUFDekIsU0FBUztJQUNULFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztDQUNWOztBQUVELE1BQU0sT0FBTywwQkFBMEI7Ozs7QUFBRyxDQUN4QyxXQUFpQyxFQUNaLEVBQUU7SUFDdkIsSUFBSSxXQUFXO1FBQUUsT0FBTyxXQUFXLENBQUM7O1FBQy9CLE9BQU8sYUFBYSxDQUFDO0FBQzVCLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sYUFBYSxHQUF3QjtJQUNoRDtRQUNFLEtBQUssRUFBRSxNQUFNO1FBQ2IsY0FBYyxFQUFFLE1BQU07UUFDdEIsV0FBVyxFQUFFO1lBQ1gsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDL0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7U0FDN0I7S0FDRjtJQUNEO1FBQ0UsS0FBSyxFQUFFLFFBQVE7UUFDZixjQUFjLEVBQUUsUUFBUTtRQUN4QixXQUFXLEVBQUU7WUFDWCxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtTQUMvQjtLQUNGO0lBQ0QsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRTtJQUM1RCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFO0lBQ2hFLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDbEUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtDQUMvRDs7OztBQUVELGdDQUdDOzs7SUFGQywwQkFBc0I7O0lBQ3RCLDJCQUF1Qjs7Ozs7QUFHekIsdUNBT0M7OztJQU5DLGtDQUFjOztJQUNkLDJDQUF1Qjs7SUFDdkIsd0NBQTJCOztJQUMzQixpQ0FBYzs7SUFDZCxxQ0FBMkI7O0lBQzNCLHNDQUFtQjs7Ozs7QUFHckIsNENBR0M7OztJQUZDLCtDQUErQjs7SUFDL0Isa0RBQXlCOzs7OztBQUczQixtQ0FLQzs7O0lBSkMscUNBQWdEOztJQUNoRCw4QkFBdUI7O0lBQ3ZCLDZCQUFhOztJQUNiLDhCQUFlOzs7O0FBSWpCLE1BQU0sT0FBTyx5QkFBeUI7Ozs7QUFBRyxDQUN2QyxVQUErQixFQUNYLEVBQUU7SUFDdEIsSUFBSSxVQUFVO1FBQUUsT0FBTyxVQUFVLENBQUM7O1FBQzdCLE9BQU8sWUFBWSxDQUFDO0FBQzNCLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUF1QjtJQUM5QyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQ25DLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQ25DLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQ2pDLEVBQUUsS0FBSyxFQUFFLCtCQUErQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDdEQsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7Q0FDbkM7Ozs7QUFFRCxzQ0FJQzs7O0lBSEMsaUNBQWM7O0lBQ2QsaUNBQXVCOztJQUN2QixxQ0FBbUI7OztBQUdyQixNQUFNLE9BQU8scUJBQXFCOzs7O0FBQUcsQ0FDbkMsVUFBZ0MsRUFDWCxFQUFFO0lBQ3ZCLElBQUksVUFBVSxFQUFFO1FBQ2QsT0FBTyxVQUFVLENBQUM7S0FDbkI7U0FBTTtRQUNMLE9BQU8sY0FBYyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxjQUFjLEdBQXdCO0lBQ2pEO1FBQ0UsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVO1FBQzFCLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLGVBQWUsRUFBRTtZQUNmLFNBQVMsRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1lBRTdELFlBQVksRUFBRTtnQkFDWixLQUFLLEVBQUUsY0FBYztnQkFDckIsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUMxQyxLQUFLLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLFFBQVEsRUFBRSxDQUFDO2lCQUNaO2dCQUNELEtBQUssRUFBRTtvQkFDTCxLQUFLLEVBQUUsZUFBZTtpQkFDdkI7Z0JBQ0QsVUFBVSxFQUFFLE1BQU07YUFDbkI7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNULENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDakMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoQyxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQy9CLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDL0IsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUNoQztRQUNELFNBQVMsRUFBRSxFQUFFO0tBQ2Q7SUFDRDtRQUNFLElBQUksRUFBRSxTQUFTLENBQUMsUUFBUTtRQUN4QixTQUFTLEVBQUUsa0JBQWtCO1FBQzdCLGVBQWUsRUFBRTtZQUNmLFNBQVMsRUFBRTtnQkFDVCxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7Z0JBQzFDLGFBQWE7Z0JBQ2IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO2FBQ2xCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7Z0JBQzNCLE1BQU0sRUFBRTtvQkFDTixDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO29CQUN2QixDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO29CQUN2QixDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO29CQUN2QixDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO29CQUNuQixDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2lCQUN4QjthQUNGO1NBQ0Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7WUFDckIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztZQUNyQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFLEVBQUU7S0FDZDtDQUNGOzs7O0FBRUQsdUNBTUM7OztJQUxDLGlDQUFVOztJQUNWLDRDQUFvQzs7SUFDcEMsc0NBQWtDOztJQUNsQyxzQ0FBbUI7O0lBQ25CLHNDQUFtQjs7Ozs7QUFLckIsd0NBR0M7OztJQUZDLHVDQUFlOztJQUNmLDBDQUE0Qjs7Ozs7QUFLOUIsbUNBUUM7OztJQVBDLDhCQUFjOztJQUNkLGtDQUFpRTs7SUFDakUsK0JBQWdCOztJQUNoQiw4QkFBbUI7O0lBQ25CLDhCQUFtQjs7SUFDbkIsbUNBQW9COztJQUNwQiwrQkFBZ0I7Ozs7O0FBR2xCLGdDQUdDOzs7SUFGQywyQkFBZTs7SUFDZiw4QkFBa0I7Ozs7O0FBR3BCLDRDQUdDOzs7SUFGQyxvQ0FBK0I7O0lBQy9CLDJDQUFrQjs7O0FBR3BCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7QUFBRyxDQUNqQyxhQUErQixFQUNkLEVBQUU7SUFDbkIsSUFBSSxhQUFhLEVBQUU7UUFDakIsT0FBTyxhQUFhLENBQUM7S0FDdEI7U0FBTTtRQUNMLE9BQU8sYUFBYSxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxhQUFhLEdBQUc7SUFDM0IsU0FBUyxFQUFFLGdCQUFnQjtJQUMzQixtQkFBbUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFDM0QsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUMzRCxTQUFTLEVBQUU7UUFDVDtZQUNFLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLEtBQUs7WUFDWCxJQUFJLEVBQUUsS0FBSztZQUNYLElBQUksRUFBRSxLQUFLO1NBQ1o7UUFDRDtZQUNFLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLEtBQUs7WUFDWCxJQUFJLEVBQUUsS0FBSztZQUNYLElBQUksRUFBRSxLQUFLO1NBQ1o7UUFDRDtZQUNFLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLEtBQUs7WUFDWCxJQUFJLEVBQUUsS0FBSztZQUNYLElBQUksRUFBRSxLQUFLO1NBQ1o7UUFDRDtZQUNFLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLEtBQUs7WUFDWCxJQUFJLEVBQUUsS0FBSztZQUNYLElBQUksRUFBRSxLQUFLO1NBQ1o7S0FDRjtDQUNGOzs7O0FBRUQscUNBTUM7OztJQUxDLG9DQUFtQjs7SUFDbkIsOENBQThCOztJQUM5Qix1Q0FBdUI7O0lBQ3ZCLG9DQUFrRDs7SUFDbEQsb0NBQW1COzs7OztBQUdyQix5Q0FNQzs7O0lBTEMsb0NBQWU7O0lBQ2YsMkNBQXVCOztJQUN2QiwyQ0FBdUI7O0lBQ3ZCLHdDQUFlOztJQUNmLHdDQUFtQjs7O0FBS3JCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7QUFBRyxDQUNqQyxhQUFtQyxFQUNkLEVBQUU7SUFDdkIsSUFBSSxhQUFhLEVBQUU7UUFDakIsT0FBTyxhQUFhLENBQUM7S0FDdEI7U0FBTTtRQUNMLE9BQU8sYUFBYSxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxhQUFhLEdBQXdCO0lBQ2hELEtBQUssRUFBRSxhQUFhO0lBQ3BCLFlBQVksRUFBRTtRQUNaLFdBQVc7UUFDWCxRQUFRO1FBQ1IsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixrQkFBa0I7S0FDbkI7SUFDRCxTQUFTLEVBQUU7UUFDVDtZQUNFLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxRQUFRLEVBQUUsS0FBSztvQkFDZixPQUFPLEVBQUUsR0FBRztvQkFDWixlQUFlLEVBQUUsOEJBQThCO29CQUMvQyxVQUFVLEVBQUUsVUFBVTtvQkFDdEIsVUFBVSxFQUFFLFlBQVk7b0JBQ3hCLE9BQU8sRUFBRSxLQUFLO29CQUNkLEtBQUssRUFBRSxLQUFLO29CQUNaLFVBQVUsRUFBRSxPQUFPO2lCQUNwQjtnQkFDRDtvQkFDRSxRQUFRLEVBQUUsS0FBSztvQkFDZixPQUFPLEVBQUUsR0FBRztvQkFDWixlQUFlLEVBQUUsOEJBQThCO29CQUMvQyxVQUFVLEVBQUUsVUFBVTtvQkFDdEIsVUFBVSxFQUFFLGlCQUFpQjtvQkFDN0IsT0FBTyxFQUFFLElBQUk7b0JBQ2IsS0FBSyxFQUFFLE9BQU87b0JBQ2QsVUFBVSxFQUFFLFFBQVE7aUJBQ3JCO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsVUFBVSxFQUFFLFdBQVc7WUFDdkIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLFFBQVEsRUFBRSxLQUFLO29CQUNmLE9BQU8sRUFBRSxHQUFHO29CQUNaLGVBQWUsRUFBRSw4QkFBOEI7b0JBQy9DLFVBQVUsRUFBRSxXQUFXO29CQUN2QixVQUFVLEVBQUUsZUFBZTtvQkFDM0IsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsS0FBSyxFQUFFLEtBQUs7b0JBQ1osVUFBVSxFQUFFLElBQUk7aUJBQ2pCO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsWUFBWSxFQUFFLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO0NBQy9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBDaGFydFNlbGVjdGlvbkNoYW5nZWRFdmVudCwgQ2hhcnRUeXBlIH0gZnJvbSBcImFuZ3VsYXItZ29vZ2xlLWNoYXJ0c1wiO1xuaW1wb3J0IHsgTmd4U3VwZXJEYXNoYm9hcmRTZXJ2aWNlIH0gZnJvbSBcIi4vbmd4LXN1cGVyLWRhc2hib2FyZC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItbmd4LXN1cGVyLWRhc2hib2FyZFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICBkeW5hbWljRm9ybUZpZWxkRGF0YSAmJiBkeW5hbWljRm9ybUZpZWxkRGF0YS5sZW5ndGggPiA3XG4gICAgICAgICAgPyAnZm9ybXNCYXIgZmllbGRzLWJhci1zZWNvbmQnXG4gICAgICAgICAgOiAnZm9ybXNCYXIgZmllbGRzLWJhcidcbiAgICAgIFwiXG4gICAgPlxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJkeW5hbWljRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdEZvcm0oKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1sYWJlbC1iYXJcIiAqbmdJZj1cImR5bmFtaWNGb3JtLnZhbHVlLmxlbmd0aCAhPSAwXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGR5bmFtaWNGb3JtRmllbGREYXRhOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImZpZWxkLmNsYXNzTmFtZSA/IGZpZWxkLmNsYXNzTmFtZSArICcgbGlzdCcgOiAnbGlzdCdcIlxuICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgIGZpZWxkLmhhc093blByb3BlcnR5KCdsb3ZEYXRhTGlzdCcpICYmIGZpZWxkLmxvdkRhdGFMaXN0O1xuICAgICAgICAgICAgICAgIGVsc2UgZHluYW1pY05vbkRyb3Bkb3duXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZVwiPnt7IGZpZWxkLmxhYmxlIH19PHNwYW4+LTwvc3Bhbj48L2Rpdj5cblxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3sgZmllbGQuZm9ybUNvbnRyb2xLZXkgfX1cIlxuICAgICAgICAgICAgICAgIGlkPVwie3sgZmllbGQuZm9ybUNvbnRyb2xLZXkgfX1cIlxuICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwic2VsZXRlZFZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJcIj5TZWxlY3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWVsZC5sb3ZEYXRhTGlzdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3sgaXRlbS5uYW1lIH19XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZHluYW1pY05vbkRyb3Bkb3duPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiZmllbGQuY2xhc3NOYW1lID8gZmllbGQuY2xhc3NOYW1lICsgJyBsaXN0JyA6ICdsaXN0J1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFibGVcIj57eyBmaWVsZC5sYWJsZSB9fTxzcGFuPi08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwie3sgZmllbGQudHlwZSB9fVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInBpY2tlclwiXG4gICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7eyBmaWVsZC5mb3JtQ29udHJvbEtleSB9fVwiXG4gICAgICAgICAgICAgICAgICBpZD1cInt7IGZpZWxkLmZvcm1Db250cm9sS2V5IH19XCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwic2VsZXRlZFZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3RcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0IGxhc3RMaXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFibGVcIj5cbiAgICAgICAgICAgICAge3sgbm90ZVRleHQgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImhvcml6b250YWxUZW1wIGdyaWQtY29udGFpbmVyXCJcbiAgICAgIFtzdHlsZS5tYXJnaW4tdG9wXT1cImR5bmFtaWNGb3JtRmllbGREYXRhLmxlbmd0aCA+IDcgPyAnNC40cmVtJyA6ICczcmVtJ1wiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImdyaWQtYXJlYS1jb3VudENhcmRzXCJcbiAgICAgICAgKm5nSWY9XCJjYXJkQ29uZmlnICYmIGNhcmRDb25maWcubGVuZ3RoID4gMFwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY2FyZENvbmZpZzsgbGV0IGogPSBpbmRleFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0uY2xhc3NOYW1lID8gaXRlbS5jbGFzc05hbWUgKyAnIGNhcmQnIDogJ2NhcmQnXCJcbiAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNhcmRDb2xvcnNbal1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDM+e3sgaXRlbS50aXRsZSB9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHA+e3sgaXRlbS52YWx1ZSB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwie3sgJ2V4cGFuZCcgKyBpIH19XCJcbiAgICAgICAgY2xhc3M9XCJncmlkLWFyZWEtY2hhcnRcIlxuICAgICAgICAqbmdGb3I9XCJsZXQgY2hhcnQgb2YgY2hhcnRzQ29uZmlnOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgID5cbiAgICAgICAgPCEtLSA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjaGFydCBvZiBjaGFydHNDb25maWc7IGxldCBpID0gaW5kZXhcIj4gLS0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbbmdDbGFzc109XCJcbiAgICAgICAgICAgIGNoYXJ0LmNsYXNzTmFtZVxuICAgICAgICAgICAgICA/IGNoYXJ0LmNsYXNzTmFtZSArICcgY2FyZCBjYXJkLWJvcmRlci1ib3R0b20nXG4gICAgICAgICAgICAgIDogJ2NhcmQgY2FyZC1ib3JkZXItYm90dG9tJ1xuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMz57eyBjaGFydC5jYXJkVGl0bGUgfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxnb29nbGUtY2hhcnRcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogODAlXCJcbiAgICAgICAgICAgIFt0eXBlXT1cImNoYXJ0LnR5cGVcIlxuICAgICAgICAgICAgW2RhdGFdPVwiY2hhcnQuY2hhcnREYXRhXCJcbiAgICAgICAgICAgIFtjb2x1bW5zXT1cImNoYXJ0LmNoYXJ0T3B0aW9uRGF0YS5teUNvbHVtbnNcIlxuICAgICAgICAgICAgW29wdGlvbnNdPVwiY2hhcnQuY2hhcnRPcHRpb25EYXRhLmNoYXJ0T3B0aW9uc1wiXG4gICAgICAgICAgICAoc2VsZWN0KT1cInNlbGVjdGVkQ2hhcnQoJGV2ZW50LCBjaGFydC50eXBlKVwiXG4gICAgICAgICAgPjwvZ29vZ2xlLWNoYXJ0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc2l6ZXJcIiAoY2xpY2spPVwidG9nZ2xlRXhwYW5kKGksICdleHBhbmQnICsgaSlcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlc2l6ZUljb25cIiAqbmdJZj1cInNob3dJY29uXCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxNXB4XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgLTk2MCA5NjAgOTYwXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNXB4XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiM1ZjYzNjhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIwLTEyMHYtMzIwaDgwdjE4NGw1MDQtNTA0SDUyMHYtODBoMzIwdjMyMGgtODB2LTE4NEwyNTYtMjAwaDE4NHY4MEgxMjBaXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1cFRleHRcIj5FeHBhbmQ8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVzaXplSWNvblwiICpuZ0lmPVwiIXNob3dJY29uXCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMHB4XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgLTk2MCA5NjAgOTYwXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIyMHB4XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiM1ZjYzNjhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNNDQwLTQ0MHYyNDBoLTgwdi0xNjBIMjAwdi04MGgyNDBabTE2MC0zMjB2MTYwaDE2MHY4MEg1MjB2LTI0MGg4MFpcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcHVwVGV4dFwiPkNvbGxhcHNlPC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gPC9uZy1jb250YWluZXI+IC0tPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJleHBhbmQyXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiXG4gICAgICAgICAgZ3JpZFR3b0NvbmZpZ1xuICAgICAgICAgICAgPyAnZ3JpZC1hcmVhLXRhYmxlT25lJ1xuICAgICAgICAgICAgOiAnZ3JpZC1hcmVhLXRhYmxlT25lIGdyaWRUYWJsZU9uZSdcbiAgICAgICAgXCJcbiAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICBncmlkT25lQ29uZmlnICYmIGdyaWRPbmVDb25maWcgIT0gbnVsbCAmJiBncmlkT25lQ29uZmlnICE9IHVuZGVmaW5lZFxuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgW25nQ2xhc3NdPVwiXG4gICAgICAgICAgICBncmlkT25lQ29uZmlnLmNsYXNzTmFtZVxuICAgICAgICAgICAgICA/IGdyaWRPbmVDb25maWcuY2xhc3NOYW1lICsgJ2NhcmQgY2FyZC1ib3JkZXItYm90dG9tJ1xuICAgICAgICAgICAgICA6ICdjYXJkIGNhcmQtYm9yZGVyLWJvdHRvbSdcbiAgICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDM+e3sgZ3JpZE9uZUNvbmZpZy5jYXJkVGl0bGUgfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImdyaWQtdGFibGVcIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgaGVhZCBvZiBncmlkT25lQ29uZmlnLnRhYmxlQ29sdW1uSGVhZGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGhlYWQgfX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyaWRPbmVDb25maWcudGFibGVEYXRhOyBlbHNlIG5vRGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyaWRPbmVDb25maWcudGFibGVEYXRhOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCB2YWwgb2YgZ3JpZE9uZUNvbmZpZy50YWJsZURhdGFLZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtW3ZhbF0gfX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNub0RhdGE+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNVwiPk5vIERhdGE8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXNpemVyXCIgKGNsaWNrKT1cInRvZ2dsZUV4cGFuZCgyLCAnZXhwYW5kMicpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXNpemVJY29uXCIgKm5nSWY9XCJzaG93SWNvblwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVweFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTVweFwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjNWY2MzY4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyMC0xMjB2LTMyMGg4MHYxODRsNTA0LTUwNEg1MjB2LTgwaDMyMHYzMjBoLTgwdi0xODRMMjU2LTIwMGgxODR2ODBIMTIwWlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wdXBUZXh0XCI+RXhwYW5kPC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlc2l6ZUljb25cIiAqbmdJZj1cIiFzaG93SWNvblwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBweFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjBweFwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjNWY2MzY4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTQ0MC00NDB2MjQwaC04MHYtMTYwSDIwMHYtODBoMjQwWm0xNjAtMzIwdjE2MGgxNjB2ODBINTIwdi0yNDBoODBaXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1cFRleHRcIj5Db2xsYXBzZTwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJleHBhbmQzXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiXG4gICAgICAgICAgZ3JpZE9uZUNvbmZpZ1xuICAgICAgICAgICAgPyAnZ3JpZC1hcmVhLXRhYmxlUmVjb3JkcydcbiAgICAgICAgICAgIDogJ2dyaWQtYXJlYS10YWJsZVJlY29yZHMgZ3JpZFRhYmxlVHdvJ1xuICAgICAgICBcIlxuICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgIGdyaWRUd29Db25maWcgJiYgZ3JpZFR3b0NvbmZpZyAhPT0gbnVsbCAmJiBncmlkVHdvQ29uZmlnICE9PSB1bmRlZmluZWRcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICAgICAgZ3JpZFR3b0NvbmZpZy5jbGFzc05hbWVcbiAgICAgICAgICAgICAgPyBncmlkVHdvQ29uZmlnLmNsYXNzTmFtZSArICcgY2FyZCBjYXJkLWJvcmRlci1ib3R0b20nXG4gICAgICAgICAgICAgIDogJ2NhcmQgY2FyZC1ib3JkZXItYm90dG9tJ1xuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMz57eyBncmlkVHdvQ29uZmlnLnRpdGxlIH19PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJncmlkLXRhYmxlXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGhlYWQgb2YgZ3JpZFR3b0NvbmZpZy50YWJsZUhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGhlYWQgfX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgIGdyaWRUd29Db25maWcudGFibGVEYXRhICYmIGdyaWRUd29Db25maWcudGFibGVEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBwYXJlbnQgb2YgZ3JpZFR3b0NvbmZpZy50YWJsZURhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IHBhcmVudC5wYXJlbnROYW1lIH19XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmNvbHNwYW5dPVwiZ3JpZFR3b0NvbmZpZy50YWJsZURhdGFLZXkubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbHNwYW5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN1YlRhYmxlUm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhcmVudC5jaGlsZERhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQga2V5IG9mIGdyaWRUd29Db25maWcudGFibGVEYXRhS2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1ba2V5XSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzaXplclwiIChjbGljayk9XCJ0b2dnbGVFeHBhbmQoMywgJ2V4cGFuZDMnKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVzaXplSWNvblwiICpuZ0lmPVwic2hvd0ljb25cIj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE1cHhcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAtOTYwIDk2MCA5NjBcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjE1cHhcIlxuICAgICAgICAgICAgICBmaWxsPVwiIzVmNjM2OFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMjAtMTIwdi0zMjBoODB2MTg0bDUwNC01MDRINTIwdi04MGgzMjB2MzIwaC04MHYtMTg0TDI1Ni0yMDBoMTg0djgwSDEyMFpcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcHVwVGV4dFwiPkV4cGFuZDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXNpemVJY29uXCIgKm5nSWY9XCIhc2hvd0ljb25cIj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjIwcHhcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAtOTYwIDk2MCA5NjBcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjIwcHhcIlxuICAgICAgICAgICAgICBmaWxsPVwiIzVmNjM2OFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk00NDAtNDQwdjI0MGgtODB2LTE2MEgyMDB2LTgwaDI0MFptMTYwLTMyMHYxNjBoMTYwdjgwSDUyMHYtMjQwaDgwWlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wdXBUZXh0XCI+Q29sbGFwc2U8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLmhpZGVHcmlkcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5yZXNpemVJY29uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAucmVzaXplSWNvbiAucG9wdXBUZXh0IHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEyNSU7XG4gICAgICAgIGxlZnQ6IDM1JTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gICAgICB9XG5cbiAgICAgIC5yZXNpemVJY29uIC5wb3B1cFRleHQ6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAucmVzaXplSWNvbjpob3ZlciAucG9wdXBUZXh0IHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICAgIC50ZW1wbGF0ZS1ib3gge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTExMjQ5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHJpZ2h0OiAtNDVweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuZXhwYW5kZWQge1xuICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAtMSAhaW1wb3J0YW50O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmV4cGFuZGVkIGdvb2dsZS1jaGFydCB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuZXhwYW5kZWQuZ3JpZC1hcmVhLXRhYmxlT25lIC5jYXJkLFxuICAgICAgLmV4cGFuZGVkLmdyaWQtYXJlYS1jaGFydCAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuZXhwYW5kZWQuZ3JpZC1hcmVhLXRhYmxlUmVjb3JkcyAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5leHBhbmRlZC5ncmlkLWFyZWEtdGFibGVSZWNvcmRzIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAucmVzaXplciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICNlYWQ0ZDQyOTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAwcHggcmdiKDAgMCAwIC8gMzglKTtcbiAgICAgICAgLy8gY3Vyc29yOiBuZS1yZXNpemU7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTEyNDk7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnN1YlRhYmxlUm93IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5maWVsZHMtYmFyIHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgfVxuICAgICAgLmZvcm1zQmFyIHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMjQ5O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmZpZWxkcy1iYXItc2Vjb25kIHtcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgfVxuICAgICAgLmZpZWxkcy1iYXItc2Vjb25kIC5ncmlkLWxhYmVsLWJhciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDJweCAxNHB4O1xuICAgICAgfVxuICAgICAgLmZpZWxkcy1iYXIgLmdyaWQtbGFiZWwtYmFyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNHB4O1xuICAgICAgfVxuICAgICAgLmdyaWQtbGFiZWwtYmFyIHtcbiAgICAgICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIC8vIHBhZGRpbmc6IDVweCAxNHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1sYWJlbC1iYXIgLmxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGFibGUgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICB9XG5cbiAgICAgIGlucHV0LnBpY2tlclt0eXBlPVwiZGF0ZVwiXSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQucGlja2VyW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdCxcbiAgICAgIGlucHV0IHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAxMThweDtcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICAgIHNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgdGhlIGRlZmF1bHQgYXJyb3cgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAgYW5kIEludGVybmV0IEV4cGxvcmVyIDExICovXG4gICAgICB9XG4gICAgICBzZWxlY3Q6Zm9jdXMtdmlzaWJsZSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG4gICAgICB9XG4gICAgICBvcHRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgIH1cbiAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgIC0tcHVycGxlLWNvbG9yOiAjNjIyMjQ4O1xuICAgICAgICAtLWNhcmQtYm9yZGVyLXdpZHRoOiA4cHg7XG4gICAgICB9XG4gICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgZ2FwOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ5NjtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgfVxuXG4gICAgICAvLyAuaG9yaXpvbnRhbFRlbXAuZ3JpZC1jb250YWluZXIge1xuICAgICAgLy8gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICAgIC8vICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICAgICAgLy8gICBnYXA6IDBweDtcbiAgICAgIC8vIH1cblxuICAgICAgLmNhcmQge1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIC8vIG1hcmdpbjogNXB4IDAgMTJweCAwO1xuICAgICAgICBtYXJnaW46IDVweCA2cHggMTJweDtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAvLyB3aWR0aDogMTh2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuY2FyZCBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAuY2FyZCBwIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogI2YwZjJmNDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1hcmVhLWNvdW50Q2FyZHMgLmNhcmQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDJweCAxMHB4IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLWFyZWEtY291bnRDYXJkcyAuY2FyZC1oZWFkZXIge1xuICAgICAgICAvLyBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLWFyZWEtY291bnRDYXJkcyBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICNmMGYyZjQ7XG4gICAgICB9XG4gICAgICAuZ3JpZC1hcmVhLWNvdW50Q2FyZHMge1xuICAgICAgICBncmlkLWFyZWE6IDEvMS8yLy0xO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1hcmVhLXRhYmxlT25lIHtcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzEvLTEvMjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0cmFuc2l0aW9uOiBncmlkLWFyZWEgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgLmdyaWRUYWJsZU9uZSB7XG4gICAgICAgIGdyaWQtYXJlYTogMy8xLy0xLy0xO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1hcmVhLXRhYmxlT25lIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQsIGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1hcmVhLWNoYXJ0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0cmFuc2l0aW9uOiBncmlkLWFyZWEgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgI2V4cGFuZDAge1xuICAgICAgICAvLyBncmlkLWFyZWE6IDIvMS8zLy0xO1xuICAgICAgICAvLyB3aWR0aDoxMDAlO1xuICAgICAgICBncmlkLWFyZWE6IDIvMS8zLzI7XG4gICAgICB9XG5cbiAgICAgICNleHBhbmQxIHtcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzIvMy8tMTtcbiAgICAgIH1cblxuICAgICAgLmdyaWQtYXJlYS1jaGFydDpob3ZlciAucmVzaXplcixcbiAgICAgIC5ncmlkLWFyZWEtdGFibGVSZWNvcmRzOmhvdmVyIC5yZXNpemVyLFxuICAgICAgLmdyaWQtYXJlYS10YWJsZU9uZTpob3ZlciAucmVzaXplciB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLWFyZWEtY2hhcnQgLmNhcmQge1xuICAgICAgICAvLyB3aWR0aDo0OSU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0LCBoZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgLmdyaWQtYXJlYS10YWJsZVJlY29yZHMge1xuICAgICAgICBncmlkLWFyZWE6IDMvMi8tMS8tMTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0cmFuc2l0aW9uOiBncmlkLWFyZWEgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgLmdyaWRUYWJsZVR3byB7XG4gICAgICAgIGdyaWQtYXJlYTogMy8xLy0xLy0xO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1hcmVhLXRhYmxlUmVjb3JkcyAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0LCBoZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgLmdyaWQtYXJlYS10YWJsZVJlY29yZHMgLmNhcmQtY29udGVudCB7XG4gICAgICAgIGhlaWdodDogMjMwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIC8vIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cbiAgICAgICAgLy8gLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgfVxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogOHB4OyAvKiBXaWR0aCBvZiB0aGUgc2Nyb2xsYmFyICovXG4gICAgICAgIGhlaWdodDogOHB4OyAvKiBIZWlnaHQgb2YgdGhlIHNjcm9sbGJhciAoZm9yIGhvcml6b250YWwgc2Nyb2xsYmFycykgKi9cbiAgICAgIH1cblxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTsgLyogRGFyaywgc2xpZ2h0bHkgdHJhbnNwYXJlbnQgdGh1bWIgKi9cbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgKi9cbiAgICAgIH1cblxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogU2xpZ2h0bHkgZGFya2VyIG9uIGhvdmVyICovXG4gICAgICB9XG5cbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgLyogVHJhbnNwYXJlbnQgdHJhY2sgKi9cbiAgICAgIH1cblxuICAgICAgLmdyaWQtdGFibGUge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC10YWJsZSB0cixcbiAgICAgIC5ncmlkLXRhYmxlIHRoIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICB9XG4gICAgICAuZ3JpZC10YWJsZSAuY29sc3BhbiB0cjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuICAgICAgLmdyaWQtdGFibGUgdGQge1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgIH1cbiAgICAgIC5jb2xzcGFuIHRkIHtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA3dncgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmdyaWQtdGFibGUgdGQ6bnRoLWNoaWxkKDEpLFxuICAgICAgLmdyaWQtdGFibGUgdGg6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyZjJmMjtcbiAgICAgICAgd2lkdGg6IDEwdnc7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLXRhYmxlIHRoIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA3dnc7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTA4OXB4KSB7XG4gICAgICAgIC5ncmlkLWxhYmVsLWJhciAubGFzdExpc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc4NnB4KSB7XG4gICAgICAgIC5ncmlkLWxhYmVsLWJhciB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gICAgICAgIC5ncmlkLWxhYmVsLWJhciB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgICAgICAgIGdhcDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ncmlkLWFyZWEtY291bnRDYXJkcyxcbiAgICAgICAgLmdyaWQtYXJlYS1jaGFydCxcbiAgICAgICAgLmdyaWQtYXJlYS10YWJsZVJlY29yZHMge1xuICAgICAgICAgIGdyaWQtYXJlYTogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuZ3JpZC1hcmVhLWNoYXJ0IC5jYXJkLFxuICAgICAgICAuZ3JpZC1hcmVhLWNvdW50Q2FyZHMgLmNhcmQsXG4gICAgICAgIC5ncmlkLWFyZWEtdGFibGVSZWNvcmRzIC5jYXJkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmdyaWQtYXJlYS1jb3VudENhcmRzIC5jYXJkLWNvbnRlbnQuY2hhcnQge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNhcmQtYm9yZGVyLWxlZnQge1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tcHVycGxlLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IHZhcigtLWNhcmQtYm9yZGVyLXdpZHRoKSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgICB9XG4gICAgICAuY2FyZC1ib3JkZXItYm90dG9tIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tcHVycGxlLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogdmFyKC0tY2FyZC1ib3JkZXItd2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgICAgfVxuICAgICAgXG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4U3VwZXJEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZHluYW1pY0Zvcm06IEZvcm1Hcm91cDtcbiAgc2hvd0ljb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGR5bmFtaWNGb3JtRmllbGREYXRhOiBEeW5hbWljRmllbGRzRGF0YVtdO1xuXG4gIEBJbnB1dCgpIGNhcmRDb25maWc6IER5bmFtaWNDYXJkc0RhdGFbXTtcbiAgQElucHV0KCkgY2hhcnRzQ29uZmlnOiBEYXNoYXJkQ2FyZENvbmZpZ1tdO1xuICBASW5wdXQoKSBncmlkT25lQ29uZmlnOiBDYXJkVGFibGVDb25maWc7XG4gIEBJbnB1dCgpIGdyaWRUd29Db25maWc6IEdyaWRUYWJsZUNvbmZpZ0RhdGE7XG5cbiAgQElucHV0KClcbiAgbm90ZVRleHQhOiBzdHJpbmc7XG5cbiAgY2FyZENvbG9yczogc3RyaW5nW10gPSBDYXJkc0NvbG9ycztcblxuICBAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdGVkRmllbGRWYWx1ZUVtaXQ+KCk7XG4gIEBPdXRwdXQoKSBvblN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPj4oKTtcbiAgQE91dHB1dCgpIG9uU2VsZWN0Q2hhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnRFbWl0T25TZWxlY3Q+KCk7XG4gXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4U2VydmljZTogTmd4U3VwZXJEYXNoYm9hcmRTZXJ2aWNlLCBcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvL2NyZWF0ZSBkeW5hbWljIGZpZWxkcyBhbmQgYWRkIHZhbGlkYXRpb24gZm9yIGVhY2ggZmllbGRcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiB9XG5cbiAgdG9nZ2xlRXhwYW5kKGluZGV4LCBpZE5hbWUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWROYW1lKTtcbiAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJleHBhbmRlZFwiKSkge1xuICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kZWRcIik7XG4gICAgICB0aGlzLnNob3dJY29uID0gIXRoaXMuc2hvd0ljb247XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBpZiAoaSAhPSBpbmRleCkge1xuICAgICAgICAgIGxldCBoaWRlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwYW5kXCIgKyBpKTtcbiAgICAgICAgICBoaWRlQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZUdyaWRzXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkXCIpO1xuICAgICAgdGhpcy5zaG93SWNvbiA9ICF0aGlzLnNob3dJY29uO1xuICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGlmIChpICE9IGluZGV4KSB7XG4gICAgICAgICAgbGV0IGhpZGVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBhbmRcIiArIGkpO1xuICAgICAgICAgIGhpZGVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRlR3JpZHNcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVGb3JtKCkge1xuICAgIGxldCBmb3JtR3JwID0ge307XG4gICAgdGhpcy5keW5hbWljRm9ybUZpZWxkRGF0YS5mb3JFYWNoKChmaWVsZDogRHluYW1pY0ZpZWxkc0RhdGEpID0+IHtcbiAgICAgIGZvcm1HcnAgPSB7XG4gICAgICAgIC4uLmZvcm1HcnAsXG4gICAgICAgIFtmaWVsZC5mb3JtQ29udHJvbEtleV06IFtcbiAgICAgICAgICBmaWVsZC5zZWxlY3RlZCA/IGZpZWxkLnNlbGVjdGVkIDogXCJcIixcbiAgICAgICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgdGhpcy5keW5hbWljRm9ybSA9IG5ldyBGb3JtQnVpbGRlcigpLmdyb3VwKGZvcm1HcnApO1xuICAgIHRoaXMubmd4U2VydmljZS5nZXRGb3JtR3JvdXAgPSB0aGlzLmR5bmFtaWNGb3JtO1xuICB9XG5cbiAgLy8gZW1pdCBzZWxlY3RlZCBmaWVsZCB2YWx1ZVxuICBzZWxldGVkVmFsdWUoZXY6IGFueSkge1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh7XG4gICAgICBzZWxlY3RlZFZhbHVlOiBldi50YXJnZXQudmFsdWUsXG4gICAgICBmaWVsZENvbnRyb2xOYW1lOiBldi50YXJnZXQuaWQsXG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdEZvcm0oKSB7XG4gICAgdGhpcy5vblN1Ym1pdC5lbWl0KHRoaXMuZHluYW1pY0Zvcm0udmFsdWUpO1xuICB9XG5cbiAgc2VsZWN0ZWRDaGFydChldjogQ2hhcnRTZWxlY3Rpb25DaGFuZ2VkRXZlbnQsIGNoYXJ0VHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5vblNlbGVjdENoYXJ0LmVtaXQoe1xuICAgICAgZXY6IGV2LFxuICAgICAgY2hhcnRUeXBlOiBjaGFydFR5cGUsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IENhcmRzQ29sb3JzID0gW1xuICBcIiNkOTYyYmVcIixcbiAgXCIjM2U4NWY1XCIsXG4gIFwiIzVjZGM3OWZjXCIsXG4gIFwiI2RjODE1Y2ZjXCIsXG4gIFwiIzVjYzBkY1wiLFxuICBcIiM3YjU1NmNcIixcbiAgXCIjYzM5ZTU2XCIsXG5dO1xuXG5leHBvcnQgY29uc3QgRHluYW1pY0ZpZWxkc0NvbmZpZ3VyYXRpb24gPSAoXG4gIGZpZWxkQ29uZmlnPzogRHluYW1pY0ZpZWxkc0RhdGFbXVxuKTogRHluYW1pY0ZpZWxkc0RhdGFbXSA9PiB7XG4gIGlmIChmaWVsZENvbmZpZykgcmV0dXJuIGZpZWxkQ29uZmlnO1xuICBlbHNlIHJldHVybiB0ZXN0RmllbGREYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RGaWVsZERhdGE6IER5bmFtaWNGaWVsZHNEYXRhW10gPSBbXG4gIHtcbiAgICBsYWJsZTogXCJab25lXCIsXG4gICAgZm9ybUNvbnRyb2xLZXk6IFwiem9uZVwiLFxuICAgIGxvdkRhdGFMaXN0OiBbXG4gICAgICB7IHZhbHVlOiBcIjFcIiwgbmFtZTogXCJDaGVubmFpXCIgfSxcbiAgICAgIHsgdmFsdWU6IFwiMlwiLCBuYW1lOiBcIlB1bmVcIiB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBsYWJsZTogXCJCcmFuY2hcIixcbiAgICBmb3JtQ29udHJvbEtleTogXCJicmFuY2hcIixcbiAgICBsb3ZEYXRhTGlzdDogW1xuICAgICAgeyB2YWx1ZTogXCIxXCIsIG5hbWU6IFwiUG9ydXJcIiB9LFxuICAgICAgeyB2YWx1ZTogXCIyXCIsIG5hbWU6IFwiVG5hZ2FyXCIgfSxcbiAgICBdLFxuICB9LFxuICB7IGxhYmxlOiBcIlRlYW1zXCIsIGZvcm1Db250cm9sS2V5OiBcInRlYW1zXCIsIGxvdkRhdGFMaXN0OiBbXSB9LFxuICB7IGxhYmxlOiBcIlByb2R1Y3RcIiwgZm9ybUNvbnRyb2xLZXk6IFwicHJvZHVjdFwiLCBsb3ZEYXRhTGlzdDogW10gfSxcbiAgeyBsYWJsZTogXCJTdGFydCBEYXRlXCIsIGZvcm1Db250cm9sS2V5OiBcInN0YXJ0RGF0ZVwiLCB0eXBlOiBcImRhdGVcIiB9LFxuICB7IGxhYmxlOiBcIkVuZCBEYXRlXCIsIGZvcm1Db250cm9sS2V5OiBcImVuZERhdGVcIiwgdHlwZTogXCJkYXRlXCIgfSxcbl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwTE9WRGF0YSB7XG4gIG5hbWU6IHN0cmluZyB8IG51bWJlcjtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljRmllbGRzRGF0YSB7XG4gIGxhYmxlOiBzdHJpbmc7XG4gIGZvcm1Db250cm9sS2V5OiBzdHJpbmc7XG4gIGxvdkRhdGFMaXN0PzogQXBwTE9WRGF0YVtdO1xuICB0eXBlPzogc3RyaW5nO1xuICBzZWxlY3RlZD86IHN0cmluZyB8IG51bWJlcjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGVkRmllbGRWYWx1ZUVtaXQge1xuICBzZWxlY3RlZFZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIGZpZWxkQ29udHJvbE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXREYXRhT3B0aW9uIHtcbiAgZmV0Y2hMb3ZEYXRhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+W107XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgbmFtZTI/OiBzdHJpbmc7XG59XG5cbi8vIGludGVyZmFjZXMgZm9yIGdyaWQgY2FyZHNMaXN0OlxuZXhwb3J0IGNvbnN0IER5bmFtaWNDYXJkc0NvbmZpZ3VyYXRpb24gPSAoXG4gIGNhcmRDb25maWc/OiBEeW5hbWljQ2FyZHNEYXRhW11cbik6IER5bmFtaWNDYXJkc0RhdGFbXSA9PiB7XG4gIGlmIChjYXJkQ29uZmlnKSByZXR1cm4gY2FyZENvbmZpZztcbiAgZWxzZSByZXR1cm4gdGVzdENhcmREYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RDYXJkRGF0YTogRHluYW1pY0NhcmRzRGF0YVtdID0gW1xuICB7IHRpdGxlOiBcIlRvdGFsIFByb3Bvc2Fsc1wiLCB2YWx1ZTogNzAwIH0sXG4gIHsgdGl0bGU6IFwiT24gUHJvY2Vzc1wiLCB2YWx1ZTogMjMwIH0sXG4gIHsgdGl0bGU6IFwiU2FuY3Rpb25lZFwiLCB2YWx1ZTogMzAwIH0sXG4gIHsgdGl0bGU6IFwiUmVqZWN0ZWRcIiwgdmFsdWU6IDI1NCB9LFxuICB7IHRpdGxlOiBcIk9wZW5lZCBwcmVuZGluZyBmb3IgPiAzMCBkYXlzXCIsIHZhbHVlOiAxNDMgfSxcbiAgeyB0aXRsZTogXCJEaXNidXJzZWRcIiwgdmFsdWU6IDEyMCB9LFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljQ2FyZHNEYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkQ2hhcnRzQ29uZmlnID0gKFxuICBjaGFydHNEYXRhPzogRGFzaGFyZENhcmRDb25maWdbXVxuKTogRGFzaGFyZENhcmRDb25maWdbXSA9PiB7XG4gIGlmIChjaGFydHNEYXRhKSB7XG4gICAgcmV0dXJuIGNoYXJ0c0RhdGE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRlc3RDaGFydHNEYXRhO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdENoYXJ0c0RhdGE6IERhc2hhcmRDYXJkQ29uZmlnW10gPSBbXG4gIHtcbiAgICB0eXBlOiBDaGFydFR5cGUuQ29tYm9DaGFydCxcbiAgICBjYXJkVGl0bGU6IFwiTW9udGhseSBXaXNlXCIsXG4gICAgY2hhcnRPcHRpb25EYXRhOiB7XG4gICAgICBteUNvbHVtbnM6IFtcIlllYXJcIiwgXCJSZXRhaWxcIiwgXCJBZ3JpXCIsIFwiTVNNRVwiLCBcIkdvbGRcIiwgXCJDb3JwXCJdLFxuXG4gICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgdGl0bGU6IGBNb250aGx5IFdpc2VgLFxuICAgICAgICBjaGFydEFyZWE6IHsgd2lkdGg6IFwiNzAlXCIsIGhlaWdodDogXCI3MCVcIiB9LFxuICAgICAgICBoQXhpczoge1xuICAgICAgICAgIHRpdGxlOiBgTW9kdWxlc2AsXG4gICAgICAgICAgbWluVmFsdWU6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHZBeGlzOiB7XG4gICAgICAgICAgdGl0bGU6IFwiTm8uIE9mIEFtb3VudFwiLFxuICAgICAgICB9LFxuICAgICAgICBzZXJpZXNUeXBlOiBcImJhcnNcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjaGFydERhdGE6IFtcbiAgICAgIFtcIjIwMjMvMDVcIiwgNTAsIDMzLCAyNC41LCAzMywgMjJdLFxuICAgICAgW1wiMjAyNC8wNVwiLCAyMywgNDEsIDIyLjUsIDIyLCAyXSxcbiAgICAgIFtcIjIwMjEvMDVcIiwgNDQsIDgyLCAxMywgNDMsIDEyXSxcbiAgICAgIFtcIjIwMjMvMDVcIiwgMTksIDMzLCAyMywgMjEsIDg5XSxcbiAgICAgIFtcIjIwMjIvMDVcIiwgMzAsIDIwLCAxMiwgMzQsIDIyXSxcbiAgICBdLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgfSxcbiAge1xuICAgIHR5cGU6IENoYXJ0VHlwZS5QaWVDaGFydCxcbiAgICBjYXJkVGl0bGU6IFwiVG90YWwgU2FuY3Rpb25lZFwiLFxuICAgIGNoYXJ0T3B0aW9uRGF0YToge1xuICAgICAgbXlDb2x1bW5zOiBbXG4gICAgICAgIFtcIlJldGFpbFwiLCBcIkFncmlcIiwgXCJNU01FXCIsIFwiR09MRFwiLCBcIkNPUlBcIl0sXG4gICAgICAgIFwiTGVhZHMgQ291bnRcIixcbiAgICAgICAgeyByb2xlOiBcInN0eWxlXCIgfSxcbiAgICAgIF0sXG4gICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgdGl0bGU6IGBTYW5jdGlvbmVkIEFtb3VudGAsXG4gICAgICAgIGNoYXJ0QXJlYTogeyB3aWR0aDogXCI1MCVcIiB9LFxuICAgICAgICBzbGljZXM6IHtcbiAgICAgICAgICAwOiB7IGNvbG9yOiBcIiM2MjIyNDhcIiB9LFxuICAgICAgICAgIDE6IHsgY29sb3I6IFwiIzEwOTYxOFwiIH0sXG4gICAgICAgICAgMjogeyBjb2xvcjogXCIjMzM2NmNjXCIgfSxcbiAgICAgICAgICAzOiB7IGNvbG9yOiBcInJlZFwiIH0sXG4gICAgICAgICAgNDogeyBjb2xvcjogXCIjZmY5OTAwXCIgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjaGFydERhdGE6IFtcbiAgICAgIFtcIlJldGFpbFwiLCAzNDQ1LCBcInJlZFwiXSxcbiAgICAgIFtcIkFncmlcIiwgMzQ0NSwgXCJyZWRcIl0sXG4gICAgICBbXCJNU01FXCIsIDM0NDUsIFwicmVkXCJdLFxuICAgICAgW1wiR29sZFwiLCAzNDQ1LCBcInJlZFwiXSxcbiAgICBdLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFzaGFyZENhcmRDb25maWcge1xuICB0eXBlOiBhbnk7XG4gIGNoYXJ0T3B0aW9uRGF0YTogQ2hhcnRPcHRpb25zQ29uZmlnO1xuICBjaGFydERhdGE6IEFycmF5PENoYXJ0RGF0YVR5cGVbXT47XG4gIGNhcmRUaXRsZT86IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBDaGFydERhdGFUeXBlID0gc3RyaW5nIHwgbnVtYmVyO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0T3B0aW9uc0NvbmZpZyB7XG4gIG15Q29sdW1uczogYW55O1xuICBjaGFydE9wdGlvbnM6IENoYXJ0QXhpc0RhdGE7XG59XG5cbmV4cG9ydCB0eXBlIENvbHVtbnNUeXBlID0gc3RyaW5nIHwgbnVtYmVyO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0QXhpc0RhdGEge1xuICB0aXRsZTogc3RyaW5nO1xuICBjaGFydEFyZWE6IHsgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7IGhlaWdodD86IHN0cmluZyB8IG51bWJlciB9O1xuICBzbGljZXM/OiBvYmplY3Q7XG4gIGhBeGlzPzogQXhpc1ZsYXVlcztcbiAgdkF4aXM/OiBBeGlzVmxhdWVzO1xuICBzZXJpZXNUeXBlPzogc3RyaW5nO1xuICBzZXJpZXM/OiBvYmplY3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXhpc1ZsYXVlcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBtaW5WYWx1ZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFydEV2ZW50RW1pdE9uU2VsZWN0IHtcbiAgZXY6IENoYXJ0U2VsZWN0aW9uQ2hhbmdlZEV2ZW50O1xuICBjaGFydFR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENhcmRUYWJsZURhdGFDb25maWcgPSAoXG4gIGNhcmRUYWJsZURhdGE/OiBDYXJkVGFibGVDb25maWdcbik6IENhcmRUYWJsZUNvbmZpZyA9PiB7XG4gIGlmIChjYXJkVGFibGVEYXRhKSB7XG4gICAgcmV0dXJuIGNhcmRUYWJsZURhdGE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRlc3RDYXJkVGFibGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0Q2FyZFRhYmxlID0ge1xuICBjYXJkVGl0bGU6IFwiVG9wIDUgQnJhbmNoZXNcIixcbiAgdGFibGVDb2x1bW5IZWFkaW5nczogW1wiXCIsIFwiUmV0YWlsXCIsIFwiQWdyaVwiLCBcIk1TTUVcIiwgXCJHb2xkXCJdLFxuICB0YWJsZURhdGFLZXk6IFtcIm9yZ05hbWVcIiwgXCJyZXRhaWxcIiwgXCJhZ3JpXCIsIFwibXNtZVwiLCBcImdvbGRcIl0sXG4gIHRhYmxlRGF0YTogW1xuICAgIHtcbiAgICAgIG9yZ05hbWU6IFwiQ2hlbm5haVwiLFxuICAgICAgcmV0YWlsOiBcIjg0OVwiLFxuICAgICAgYWdyaTogXCI1OTlcIixcbiAgICAgIG1zbWU6IFwiNTAwXCIsXG4gICAgICBnb2xkOiBcIjIwMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgb3JnTmFtZTogXCJEZWxoaVwiLFxuICAgICAgcmV0YWlsOiBcIjIwMFwiLFxuICAgICAgYWdyaTogXCIzMDBcIixcbiAgICAgIG1zbWU6IFwiNDAwXCIsXG4gICAgICBnb2xkOiBcIjE1MFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgb3JnTmFtZTogXCJUbmFnYXJcIixcbiAgICAgIHJldGFpbDogXCI4NDlcIixcbiAgICAgIGFncmk6IFwiNDgwXCIsXG4gICAgICBtc21lOiBcIjI1MFwiLFxuICAgICAgZ29sZDogXCI2MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG9yZ05hbWU6IFwiUG9vbmFtYWxlXCIsXG4gICAgICByZXRhaWw6IFwiOTQwXCIsXG4gICAgICBhZ3JpOiBcIjIzNFwiLFxuICAgICAgbXNtZTogXCI3MDBcIixcbiAgICAgIGdvbGQ6IFwiNDAwXCIsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFRhYmxlQ29uZmlnIHtcbiAgY2FyZFRpdGxlPzogc3RyaW5nO1xuICB0YWJsZUNvbHVtbkhlYWRpbmdzOiBzdHJpbmdbXTtcbiAgdGFibGVEYXRhS2V5OiBzdHJpbmdbXTtcbiAgdGFibGVEYXRhOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+PjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRUYWJsZUNvbmZpZ0RhdGEge1xuICB0aXRsZT86IHN0cmluZztcbiAgdGFibGVIZWFkaW5nOiBzdHJpbmdbXTtcbiAgdGFibGVEYXRhS2V5OiBzdHJpbmdbXTtcbiAgdGFibGVEYXRhOiBhbnk7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQ2hpbGREYXRhVHlwZSA9IHN0cmluZyB8IG51bWJlcjtcblxuZXhwb3J0IGNvbnN0IEdyaWRUYWJsZURhdGFDb25maWcgPSAoXG4gIGdyaWRUYWJsZURhdGE/OiBHcmlkVGFibGVDb25maWdEYXRhXG4pOiBHcmlkVGFibGVDb25maWdEYXRhID0+IHtcbiAgaWYgKGdyaWRUYWJsZURhdGEpIHtcbiAgICByZXR1cm4gZ3JpZFRhYmxlRGF0YTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGVzdEdyaWRUYWJsZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RHcmlkVGFibGU6IEdyaWRUYWJsZUNvbmZpZ0RhdGEgPSB7XG4gIHRpdGxlOiBcIlNjaGVtZSBXaXNlXCIsXG4gIHRhYmxlSGVhZGluZzogW1xuICAgIFwiTG9hbiBUeXBlXCIsXG4gICAgXCJTY2hlbWVcIixcbiAgICBcIk5vIG9mIEFjYyAjXCIsXG4gICAgXCJMaW1pdCBpbiAoTGFraHMpXCIsXG4gICAgXCJPUyBhbXQgaW4oTGFraHMpXCIsXG4gIF0sXG4gIHRhYmxlRGF0YTogW1xuICAgIHtcbiAgICAgIHBhcmVudE5hbWU6IFwiQ2hlbm5haVwiLFxuICAgICAgY2hpbGREYXRhOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0cG1TZXFJZDogNjI2ODUsXG4gICAgICAgICAgdHBtQ29kZTogXCIyXCIsXG4gICAgICAgICAgdHBtTW9kaWZpZWREYXRlOiBcIjIwMjQtMDQtMjRUMDc6NDk6MjAuODc5KzAwMDBcIixcbiAgICAgICAgICB0cG1QcmRDb2RlOiBcIkNhciBMb2FuXCIsXG4gICAgICAgICAgc2NoZW1lVHlwZTogXCJDYXIgRGVhbGVyXCIsXG4gICAgICAgICAgbm9PZkFjYzogXCJTMTRcIixcbiAgICAgICAgICBsaW1pdDogXCIzNDRcIixcbiAgICAgICAgICBTYW5jdGlvbmVkOiBcIjIwMzAyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0cG1TZXFJZDogNjI2OTgsXG4gICAgICAgICAgdHBtQ29kZTogXCIyXCIsXG4gICAgICAgICAgdHBtTW9kaWZpZWREYXRlOiBcIjIwMjQtMDQtMjRUMDc6NDk6MjAuODg5KzAwMDBcIixcbiAgICAgICAgICB0cG1QcmRDb2RlOiBcIkNhciBMb2FuXCIsXG4gICAgICAgICAgc2NoZW1lVHlwZTogXCJMdXh1cnkgQ2FyIExvYW5cIixcbiAgICAgICAgICBub09mQWNjOiBcIjg0XCIsXG4gICAgICAgICAgbGltaXQ6IFwiMjEyMzJcIixcbiAgICAgICAgICBTYW5jdGlvbmVkOiBcIjEyMS40NVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhcmVudE5hbWU6IFwiSHlkZXJhYmFkXCIsXG4gICAgICBjaGlsZERhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRwbVNlcUlkOiA2MjY4NixcbiAgICAgICAgICB0cG1Db2RlOiBcIjJcIixcbiAgICAgICAgICB0cG1Nb2RpZmllZERhdGU6IFwiMjAyNC0wNC0yNFQwNzo0OToyMC44ODArMDAwMFwiLFxuICAgICAgICAgIHRwbVByZENvZGU6IFwiQ2FzaCBMb2FuXCIsXG4gICAgICAgICAgc2NoZW1lVHlwZTogXCJQcm9wZXJ0eSBMb2FuXCIsXG4gICAgICAgICAgbm9PZkFjYzogXCJTMzRcIixcbiAgICAgICAgICBsaW1pdDogXCI2NzZcIixcbiAgICAgICAgICBTYW5jdGlvbmVkOiBcIjIzXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIHRhYmxlRGF0YUtleTogW1wic2NoZW1lVHlwZVwiLCBcIm5vT2ZBY2NcIiwgXCJsaW1pdFwiLCBcIlNhbmN0aW9uZWRcIl0sXG59O1xuIl19