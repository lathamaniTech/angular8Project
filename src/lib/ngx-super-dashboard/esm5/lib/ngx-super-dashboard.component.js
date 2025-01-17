/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-super-dashboard.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ChartType } from "angular-google-charts";
import { NgxSuperDashboardService } from "./ngx-super-dashboard.service";
var NgxSuperDashboardComponent = /** @class */ (function () {
    function NgxSuperDashboardComponent(ngxService) {
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
    NgxSuperDashboardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //create dynamic fields and add validation for each field
        this.createForm();
    };
    /**
     * @param {?} index
     * @param {?} idName
     * @return {?}
     */
    NgxSuperDashboardComponent.prototype.toggleExpand = /**
     * @param {?} index
     * @param {?} idName
     * @return {?}
     */
    function (index, idName) {
        /** @type {?} */
        var content = document.getElementById(idName);
        if (content.classList.contains("expanded")) {
            content.classList.remove("expanded");
            this.showIcon = !this.showIcon;
            for (var i = 0; i < 4; i++) {
                if (i != index) {
                    /** @type {?} */
                    var hideContent = document.getElementById("expand" + i);
                    hideContent.classList.remove("hideGrids");
                }
            }
        }
        else {
            content.classList.add("expanded");
            this.showIcon = !this.showIcon;
            window.scrollTo({ top: 0, behavior: "smooth" });
            for (var i = 0; i < 4; i++) {
                if (i != index) {
                    /** @type {?} */
                    var hideContent = document.getElementById("expand" + i);
                    hideContent.classList.add("hideGrids");
                }
            }
        }
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
            formGrp = tslib_1.__assign({}, formGrp, (_a = {}, _a[field.formControlKey] = [
                field.selected ? field.selected : "",
                Validators.compose([Validators.required]),
            ], _a));
        }));
        this.dynamicForm = new FormBuilder().group(formGrp);
        this.ngxService.getFormGroup = this.dynamicForm;
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
                    template: "\n    <div\n      [ngClass]=\"\n        dynamicFormFieldData && dynamicFormFieldData.length > 7\n          ? 'formsBar fields-bar-second'\n          : 'formsBar fields-bar'\n      \"\n    >\n      <form [formGroup]=\"dynamicForm\" (ngSubmit)=\"onSubmitForm()\">\n        <div class=\"grid-label-bar\" *ngIf=\"dynamicForm.value.length != 0\">\n          <ng-container\n            *ngFor=\"let field of dynamicFormFieldData; let i = index\"\n          >\n            <div\n              [ngClass]=\"field.className ? field.className + ' list' : 'list'\"\n              *ngIf=\"\n                field.hasOwnProperty('lovDataList') && field.lovDataList;\n                else dynamicNonDropdown\n              \"\n            >\n              <div class=\"lable\">{{ field.lable }}<span>-</span></div>\n\n              <select\n                formControlName=\"{{ field.formControlKey }}\"\n                id=\"{{ field.formControlKey }}\"\n                (change)=\"seletedValue($event)\"\n                placeholder=\"Select\"\n              >\n                <option selected value=\"\">Select</option>\n                <option\n                  [value]=\"item.value\"\n                  *ngFor=\"let item of field.lovDataList\"\n                >\n                  {{ item.name }}\n                </option>\n              </select>\n            </div>\n\n            <ng-template #dynamicNonDropdown>\n              <div\n                [ngClass]=\"field.className ? field.className + ' list' : 'list'\"\n              >\n                <div class=\"lable\">{{ field.lable }}<span>-</span></div>\n                <input\n                  type=\"{{ field.type }}\"\n                  class=\"picker\"\n                  formControlName=\"{{ field.formControlKey }}\"\n                  id=\"{{ field.formControlKey }}\"\n                  (change)=\"seletedValue($event)\"\n                  placeholder=\"Select\"\n                />\n              </div>\n            </ng-template>\n          </ng-container>\n\n          <div class=\"list lastList\">\n            <div class=\"lable\">\n              {{ noteText }}\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div\n      class=\"horizontalTemp grid-container\"\n      [style.margin-top]=\"dynamicFormFieldData.length > 7 ? '4.4rem' : '3rem'\"\n    >\n      <div\n        class=\"grid-area-countCards\"\n        *ngIf=\"cardConfig && cardConfig.length > 0\"\n      >\n        <ng-container *ngFor=\"let item of cardConfig; let j = index\">\n          <div\n            [ngClass]=\"item.className ? item.className + ' card' : 'card'\"\n            [style.background-color]=\"cardColors[j]\"\n          >\n            <div class=\"card-header\">\n              <h3>{{ item.title }}</h3>\n            </div>\n            <div class=\"card-content\">\n              <p>{{ item.value }}</p>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n\n      <div\n        id=\"{{ 'expand' + i }}\"\n        class=\"grid-area-chart\"\n        *ngFor=\"let chart of chartsConfig; let i = index\"\n      >\n        <!-- <ng-container *ngFor=\"let chart of chartsConfig; let i = index\"> -->\n        <div\n          [ngClass]=\"\n            chart.className\n              ? chart.className + ' card card-border-bottom'\n              : 'card card-border-bottom'\n          \"\n        >\n          <div class=\"card-header\">\n            <h3>{{ chart.cardTitle }}</h3>\n          </div>\n          <google-chart\n            style=\"width: 100%; height: 80%\"\n            [type]=\"chart.type\"\n            [data]=\"chart.chartData\"\n            [columns]=\"chart.chartOptionData.myColumns\"\n            [options]=\"chart.chartOptionData.chartOptions\"\n            (select)=\"selectedChart($event, chart.type)\"\n          ></google-chart>\n        </div>\n        <div class=\"resizer\" (click)=\"toggleExpand(i, 'expand' + i)\">\n          <span class=\"resizeIcon\" *ngIf=\"showIcon\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              height=\"15px\"\n              viewBox=\"0 -960 960 960\"\n              width=\"15px\"\n              fill=\"#5f6368\"\n            >\n              <path\n                d=\"M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z\"\n              />\n            </svg>\n            <span class=\"popupText\">Expand</span>\n          </span>\n          <span class=\"resizeIcon\" *ngIf=\"!showIcon\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              height=\"20px\"\n              viewBox=\"0 -960 960 960\"\n              width=\"20px\"\n              fill=\"#5f6368\"\n            >\n              <path\n                d=\"M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z\"\n              />\n            </svg>\n            <span class=\"popupText\">Collapse</span>\n          </span>\n        </div>\n        <!-- </ng-container> -->\n      </div>\n\n      <div\n        id=\"expand2\"\n        [ngClass]=\"\n          gridTwoConfig\n            ? 'grid-area-tableOne'\n            : 'grid-area-tableOne gridTableOne'\n        \"\n        *ngIf=\"\n          gridOneConfig && gridOneConfig != null && gridOneConfig != undefined\n        \"\n      >\n        <div\n          [ngClass]=\"\n            gridOneConfig.className\n              ? gridOneConfig.className + 'card card-border-bottom'\n              : 'card card-border-bottom'\n          \"\n        >\n          <div class=\"card-header\">\n            <h3>{{ gridOneConfig.cardTitle }}</h3>\n          </div>\n          <div class=\"card-content\">\n            <table class=\"grid-table\">\n              <thead>\n                <th *ngFor=\"let head of gridOneConfig.tableColumnHeadings\">\n                  {{ head }}\n                </th>\n              </thead>\n              <tbody>\n                <ng-container *ngIf=\"gridOneConfig.tableData; else noData\">\n                  <tr\n                    *ngFor=\"let item of gridOneConfig.tableData; let i = index\"\n                  >\n                    <td *ngFor=\"let val of gridOneConfig.tableDataKey\">\n                      {{ item[val] }}\n                    </td>\n                  </tr>\n                </ng-container>\n                <ng-template #noData>\n                  <tr>\n                    <td colspan=\"5\">No Data</td>\n                  </tr>\n                </ng-template>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"resizer\" (click)=\"toggleExpand(2, 'expand2')\">\n          <span class=\"resizeIcon\" *ngIf=\"showIcon\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              height=\"15px\"\n              viewBox=\"0 -960 960 960\"\n              width=\"15px\"\n              fill=\"#5f6368\"\n            >\n              <path\n                d=\"M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z\"\n              />\n            </svg>\n            <span class=\"popupText\">Expand</span>\n          </span>\n          <span class=\"resizeIcon\" *ngIf=\"!showIcon\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              height=\"20px\"\n              viewBox=\"0 -960 960 960\"\n              width=\"20px\"\n              fill=\"#5f6368\"\n            >\n              <path\n                d=\"M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z\"\n              />\n            </svg>\n            <span class=\"popupText\">Collapse</span>\n          </span>\n        </div>\n      </div>\n\n      <div\n        id=\"expand3\"\n        [ngClass]=\"\n          gridOneConfig\n            ? 'grid-area-tableRecords'\n            : 'grid-area-tableRecords gridTableTwo'\n        \"\n        *ngIf=\"\n          gridTwoConfig && gridTwoConfig !== null && gridTwoConfig !== undefined\n        \"\n      >\n        <div\n          [ngClass]=\"\n            gridTwoConfig.className\n              ? gridTwoConfig.className + ' card card-border-bottom'\n              : 'card card-border-bottom'\n          \"\n        >\n          <div class=\"card-header\">\n            <h3>{{ gridTwoConfig.title }}</h3>\n          </div>\n          <div class=\"card-content\">\n            <table class=\"grid-table\">\n              <thead>\n                <th *ngFor=\"let head of gridTwoConfig.tableHeading\">\n                  {{ head }}\n                </th>\n              </thead>\n              <ng-container\n                *ngIf=\"\n                  gridTwoConfig.tableData && gridTwoConfig.tableData.length > 0\n                \"\n              >\n                <tbody>\n                  <tr *ngFor=\"let parent of gridTwoConfig.tableData\">\n                    <td>\n                      {{ parent.parentName }}\n                    </td>\n                    <td\n                      [attr.colspan]=\"gridTwoConfig.tableDataKey.length\"\n                      class=\"colspan\"\n                    >\n                      <tr\n                        class=\"subTableRow\"\n                        *ngFor=\"let item of parent.childData\"\n                      >\n                        <td *ngFor=\"let key of gridTwoConfig.tableDataKey\">\n                          {{ item[key] }}\n                        </td>\n                      </tr>\n                    </td>\n                  </tr>\n                </tbody>\n              </ng-container>\n            </table>\n          </div>\n        </div>\n        <div class=\"resizer\" (click)=\"toggleExpand(3, 'expand3')\">\n          <span class=\"resizeIcon\" *ngIf=\"showIcon\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              height=\"15px\"\n              viewBox=\"0 -960 960 960\"\n              width=\"15px\"\n              fill=\"#5f6368\"\n            >\n              <path\n                d=\"M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z\"\n              />\n            </svg>\n            <span class=\"popupText\">Expand</span>\n          </span>\n          <span class=\"resizeIcon\" *ngIf=\"!showIcon\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              height=\"20px\"\n              viewBox=\"0 -960 960 960\"\n              width=\"20px\"\n              fill=\"#5f6368\"\n            >\n              <path\n                d=\"M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z\"\n              />\n            </svg>\n            <span class=\"popupText\">Collapse</span>\n          </span>\n        </div>\n      </div>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      .hideGrids {\n        display: none !important;\n      }\n      .resizeIcon {\n        position: relative;\n      }\n\n      .resizeIcon .popupText {\n        visibility: hidden;\n        width: 50px;\n        background-color: black;\n        font-size: 10px;\n        color: #fff;\n        text-align: center;\n        padding: 5px 0;\n        border-radius: 5px;\n        position: absolute;\n        bottom: 125%;\n        left: 35%;\n        transform: translateX(-50%);\n        z-index: 1;\n        opacity: 0;\n        transition: opacity 0.3s;\n      }\n\n      .resizeIcon .popupText::after {\n        content: \"\";\n        position: absolute;\n        top: 100%;\n        left: 50%;\n        margin-left: -5px;\n        border-width: 5px;\n        border-style: solid;\n        border-color: black transparent transparent transparent;\n      }\n\n      .resizeIcon:hover .popupText {\n        visibility: visible;\n        opacity: 1;\n      }\n      .template-box {\n        background: #111249;\n        position: fixed;\n        right: -45px;\n        transform: rotate(90deg);\n        top: 50%;\n        text-align: center;\n      }\n\n      .expanded {\n        grid-area: 2 / 1 / -1 / -1 !important;\n        justify-content: center;\n      }\n\n      .expanded google-chart {\n        width: 100% !important;\n        height: 90% !important;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .expanded.grid-area-tableOne .card,\n      .expanded.grid-area-chart .card {\n        width: 99%;\n        height: 400px;\n        overflow: auto;\n      }\n\n      .expanded.grid-area-tableRecords .card {\n        width: 99%;\n        height: 100%;\n      }\n      .expanded.grid-area-tableRecords .card-content {\n        height: 500px;\n        max-height: 1000px;\n        overflow: auto;\n      }\n\n      .resizer {\n        position: absolute;\n        width: 20px;\n        height: 20px;\n        right: 10px;\n        top: 10px;\n        cursor: pointer;\n        visibility: hidden;\n        background: #ead4d429;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        box-shadow: 0px 1px 10px 0px rgb(0 0 0 / 38%);\n        // cursor: ne-resize;\n      }\n\n      .form-ctrl {\n        display: block;\n        padding: 5px 10px;\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 1.5;\n        color: #fff;\n        background-color: #111249;\n        background-clip: padding-box;\n        border-radius: 6px;\n        text-align: center;\n      }\n      .subTableRow {\n        display: inline-table;\n        width: 100%;\n      }\n      .fields-bar {\n        height: 48px;\n      }\n      .formsBar {\n        width: 100vw;\n        position: fixed;\n        top: 0;\n        z-index: 999;\n        background-color: #111249;\n        display: flex;\n        align-items: center;\n      }\n      .fields-bar-second {\n        height: 75px;\n      }\n      .fields-bar-second .grid-label-bar {\n        grid-template-columns: auto auto auto auto auto auto;\n        padding: 2px 14px;\n      }\n      .fields-bar .grid-label-bar {\n        grid-template-columns: auto auto auto auto auto auto auto;\n        gap: 10px;\n        padding: 5px 14px;\n      }\n      .grid-label-bar {\n        // grid-template-columns: auto auto auto auto auto auto auto;\n        gap: 10px;\n        // padding: 5px 14px;\n        display: grid;\n        color: #fff;\n        font-size: 13px;\n      }\n\n      .grid-label-bar .list {\n        display: flex;\n        align-items: center;\n      }\n\n      .lable span {\n        margin-left: 6px;\n      }\n\n      input.picker[type=\"date\"] {\n        position: relative;\n      }\n\n      input.picker[type=\"date\"]::-webkit-calendar-picker-indicator {\n        position: absolute;\n        top: 0;\n        right: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        color: transparent;\n        background: transparent;\n      }\n\n      select,\n      input {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        background: none;\n        border: none;\n        color: #fff;\n        width: 118px;\n        padding: 0 6px;\n        font-size: 12px;\n      }\n      select::-ms-expand {\n        display: none; /* Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */\n      }\n      select:focus-visible {\n        outline: none;\n      }\n\n      input::placeholder {\n        color: #fff;\n        opacity: 1; /* Firefox */\n      }\n      option {\n        background-color: #fff;\n        color: #000;\n      }\n      .grid-container {\n        --purple-color: #622248;\n        --card-border-width: 8px;\n      }\n      .grid-container {\n        height: auto !important;\n        display: grid;\n        grid-template-columns: auto auto;\n        grid-template-rows: auto auto auto auto;\n        gap: 0px;\n        background-color: #dddddd96;\n        padding: 7px;\n        margin-top: 3rem;\n      }\n\n      // .horizontalTemp.grid-container {\n      //   grid-template-columns: auto auto;\n      //   grid-template-rows: auto auto auto auto;\n      //   gap: 0px;\n      // }\n\n      .card {\n        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n        // margin: 5px 0 12px 0;\n        margin: 5px 6px 12px;\n        width: 20%;\n        text-align: center;\n        background-color: #fff;\n        // width: 18vw;\n        border-radius: 8px;\n        position: relative;\n      }\n\n      .card .card-header {\n        padding: 10px;\n        border-bottom: 1px solid #ddd;\n        background: none;\n        font-weight: 600;\n        font-size: 15px;\n      }\n\n      .card .card-content {\n        padding: 10px;\n      }\n\n      .card h3 {\n        font-size: 15px;\n        margin: 0;\n      }\n\n      .card p {\n        font-weight: 600;\n        font-size: 24px;\n        color: #f0f2f4;\n        margin-top: 0px;\n        margin-bottom: 12px;\n      }\n\n      .grid-area-countCards .card-content {\n        padding: 2px 10px 10px;\n      }\n\n      .grid-area-countCards .card-header {\n        // height: 45px;\n        height: 32px;\n        display: flex;\n        border-bottom: none;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .grid-area-countCards h3 {\n        font-size: 14px;\n        color: #f0f2f4;\n      }\n      .grid-area-countCards {\n        grid-area: 1/1/2/-1;\n        display: flex;\n      }\n\n      .grid-area-tableOne {\n        grid-area: 3/1/-1/2;\n        position: relative;\n        display: flex;\n        transition: grid-area 0.3s ease-in-out;\n      }\n\n      .gridTableOne {\n        grid-area: 3/1/-1/-1;\n      }\n\n      .grid-area-tableOne .card {\n        width: 100%;\n        height: 300px;\n        transition: width 0.3s ease-in-out, height 0.3s ease-in-out;\n      }\n\n      .grid-area-chart {\n        position: relative;\n        display: flex;\n        transition: grid-area 0.3s ease-in-out;\n      }\n\n      #expand0 {\n        // grid-area: 2/1/3/-1;\n        // width:100%;\n        grid-area: 2/1/3/2;\n      }\n\n      #expand1 {\n        grid-area: 2/2/3/-1;\n      }\n\n      .grid-area-chart:hover .resizer,\n      .grid-area-tableRecords:hover .resizer,\n      .grid-area-tableOne:hover .resizer {\n        visibility: visible;\n      }\n\n      .grid-area-chart .card {\n        // width:49%;\n        width: 100%;\n        height: 300px;\n        // padding-bottom: 8px;\n        transition: width 0.3s ease-in-out, height 0.3s ease-in-out;\n      }\n\n      .grid-area-tableRecords {\n        grid-area: 3/2/-1/-1;\n        position: relative;\n        display: flex;\n        transition: grid-area 0.3s ease-in-out;\n      }\n\n      .gridTableTwo {\n        grid-area: 3/1/-1/-1;\n      }\n\n      .grid-area-tableRecords .card {\n        width: 100%;\n        height: 300px;\n        overflow: hidden;\n        transition: width 0.3s ease-in-out, height 0.3s ease-in-out;\n      }\n\n      .grid-area-tableRecords .card-content {\n        height: 230px;\n        max-height: 1000px;\n        overflow: auto;\n        // scrollbar-width: none; /* For Firefox */\n        // -ms-overflow-style: none;\n      }\n      ::-webkit-scrollbar {\n        display: block;\n        width: 8px; /* Width of the scrollbar */\n        height: 8px; /* Height of the scrollbar (for horizontal scrollbars) */\n      }\n\n      ::-webkit-scrollbar-thumb {\n        background: rgba(0, 0, 0, 0.2); /* Dark, slightly transparent thumb */\n        border-radius: 4px; /* Rounded corners */\n      }\n\n      ::-webkit-scrollbar-thumb:hover {\n        background: rgba(0, 0, 0, 0.4); /* Slightly darker on hover */\n      }\n\n      ::-webkit-scrollbar-track {\n        background: transparent; /* Transparent track */\n      }\n\n      .grid-table {\n        font-weight: 400;\n        font-size: 12px;\n        border-collapse: collapse;\n        width: 100%;\n        height: auto;\n        overflow: auto;\n        border: 1px solid #ddd;\n      }\n\n      .grid-table tr,\n      .grid-table th {\n        border-bottom: 1px solid #ddd;\n      }\n      .grid-table .colspan tr:last-child {\n        border: none;\n      }\n      .grid-table td {\n        padding: 5px 0;\n      }\n      .colspan td {\n        border: none !important;\n        width: 7vw !important;\n      }\n\n      .grid-table td:nth-child(1),\n      .grid-table th:nth-child(1) {\n        border-right: 1px solid #f2f2f2;\n        width: 10vw;\n      }\n\n      .grid-table th {\n        padding-top: 12px;\n        padding-bottom: 12px;\n        text-align: center;\n        width: 7vw;\n      }\n\n      @media (max-width: 850px) {\n        .grid-container {\n          gap: 10px;\n        }\n      }\n\n      @media (max-width: 1089px) {\n        .grid-label-bar .lastList {\n          display: none;\n        }\n      }\n\n      @media (max-width: 786px) {\n        .grid-label-bar {\n          grid-template-columns: auto auto auto;\n        }\n      }\n      @media (max-width: 580px) {\n        .grid-label-bar {\n          grid-template-columns: auto auto;\n        }\n        .card-header {\n          font-size: 14px;\n        }\n        .grid-container {\n          grid-template-columns: auto;\n          grid-template-rows: auto;\n          gap: 0px;\n        }\n        .grid-area-countCards,\n        .grid-area-chart,\n        .grid-area-tableRecords {\n          grid-area: auto;\n        }\n        .grid-area-chart .card,\n        .grid-area-countCards .card,\n        .grid-area-tableRecords .card {\n          width: 100%;\n          height: auto;\n        }\n        .grid-area-countCards .card-content.chart {\n          height: auto;\n        }\n      }\n      .card-border-left {\n        border-left-color: var(--purple-color);\n        border-left-width: var(--card-border-width) !important;\n        border-left-style: solid;\n      }\n      .card-border-bottom {\n        border-bottom-color: var(--purple-color);\n        border-bottom-width: var(--card-border-width) !important;\n        border-bottom-style: solid;\n      }\n      \n    "]
                }] }
    ];
    /** @nocollapse */
    NgxSuperDashboardComponent.ctorParameters = function () { return [
        { type: NgxSuperDashboardService }
    ]; };
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
    return NgxSuperDashboardComponent;
}());
export { NgxSuperDashboardComponent };
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
export var CardsColors = [
    "#d962be",
    "#3e85f5",
    "#5cdc79fc",
    "#dc815cfc",
    "#5cc0dc",
    "#7b556c",
    "#c39e56",
];
/** @type {?} */
export var DynamicFieldsConfiguration = (/**
 * @param {?=} fieldConfig
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
export var DynamicCardsConfiguration = (/**
 * @param {?=} cardConfig
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
                chartArea: { width: "70%", height: "70%" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN1cGVyLWRhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc3VwZXItZGFzaGJvYXJkLyIsInNvdXJjZXMiOlsibGliL25neC1zdXBlci1kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUE4QixTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RTtJQWl5QkUsb0NBQW9CLFVBQW9DO1FBQXBDLGVBQVUsR0FBVixVQUFVLENBQTBCO1FBbkJ4RCxhQUFRLEdBQVksSUFBSSxDQUFDO1FBYXpCLGVBQVUsR0FBYSxXQUFXLENBQUM7UUFFekIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBQ3RELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUMsQ0FBQztRQUMvRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO0lBSXJFLENBQUM7Ozs7SUFFRCw2Q0FBUTs7O0lBQVI7UUFDRSx5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVBLGlEQUFZOzs7OztJQUFaLFVBQWEsS0FBSyxFQUFFLE1BQU07O1lBQ2xCLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxD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VSxFQUFFLE9BQU87aUJBQ3BCO2dCQUNEO29CQUNFLFFBQVEsRUFBRSxLQUFLO29CQUNmLE9BQU8sRUFBRSxHQUFHO29CQUNaLGVBQWUsRUFBRSw4QkFBOEI7b0JBQy9DLFVBQVUsRUFBRSxVQUFVO29CQUN0QixVQUFVLEVBQUUsaUJBQWlCO29CQUM3QixPQUFPLEVBQUUsSUFBSTtvQkFDYixLQUFLLEVBQUUsT0FBTztvQkFDZCxVQUFVLEVBQUUsUUFBUTtpQkFDckI7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsV0FBVztZQUN2QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsT0FBTyxFQUFFLEdBQUc7b0JBQ1osZUFBZSxFQUFFLDhCQUE4QjtvQkFDL0MsVUFBVSxFQUFFLFdBQVc7b0JBQ3ZCLFVBQVUsRUFBRSxlQUFlO29CQUMzQixPQUFPLEVBQUUsS0FBSztvQkFDZCxLQUFLLEVBQUUsS0FBSztvQkFDWixVQUFVLEVBQUUsSUFBSTtpQkFDakI7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxZQUFZLEVBQUUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7Q0FDL0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IENoYXJ0U2VsZWN0aW9uQ2hhbmdlZEV2ZW50LCBDaGFydFR5cGUgfSBmcm9tIFwiYW5ndWxhci1nb29nbGUtY2hhcnRzXCI7XG5pbXBvcnQgeyBOZ3hTdXBlckRhc2hib2FyZFNlcnZpY2UgfSBmcm9tIFwiLi9uZ3gtc3VwZXItZGFzaGJvYXJkLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1uZ3gtc3VwZXItZGFzaGJvYXJkXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgW25nQ2xhc3NdPVwiXG4gICAgICAgIGR5bmFtaWNGb3JtRmllbGREYXRhICYmIGR5bmFtaWNGb3JtRmllbGREYXRhLmxlbmd0aCA+IDdcbiAgICAgICAgICA/ICdmb3Jtc0JhciBmaWVsZHMtYmFyLXNlY29uZCdcbiAgICAgICAgICA6ICdmb3Jtc0JhciBmaWVsZHMtYmFyJ1xuICAgICAgXCJcbiAgICA+XG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImR5bmFtaWNGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0Rm9ybSgpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWxhYmVsLWJhclwiICpuZ0lmPVwiZHluYW1pY0Zvcm0udmFsdWUubGVuZ3RoICE9IDBcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZHluYW1pY0Zvcm1GaWVsZERhdGE7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiZmllbGQuY2xhc3NOYW1lID8gZmllbGQuY2xhc3NOYW1lICsgJyBsaXN0JyA6ICdsaXN0J1wiXG4gICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgZmllbGQuaGFzT3duUHJvcGVydHkoJ2xvdkRhdGFMaXN0JykgJiYgZmllbGQubG92RGF0YUxpc3Q7XG4gICAgICAgICAgICAgICAgZWxzZSBkeW5hbWljTm9uRHJvcGRvd25cbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmxlXCI+e3sgZmllbGQubGFibGUgfX08c3Bhbj4tPC9zcGFuPjwvZGl2PlxuXG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7eyBmaWVsZC5mb3JtQ29udHJvbEtleSB9fVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ7eyBmaWVsZC5mb3JtQ29udHJvbEtleSB9fVwiXG4gICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzZWxldGVkVmFsdWUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3RcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIlwiPlNlbGVjdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLmxvdkRhdGFMaXN0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7eyBpdGVtLm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkeW5hbWljTm9uRHJvcGRvd24+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJmaWVsZC5jbGFzc05hbWUgPyBmaWVsZC5jbGFzc05hbWUgKyAnIGxpc3QnIDogJ2xpc3QnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZVwiPnt7IGZpZWxkLmxhYmxlIH19PHNwYW4+LTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7eyBmaWVsZC50eXBlIH19XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGlja2VyXCJcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7IGZpZWxkLmZvcm1Db250cm9sS2V5IH19XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwie3sgZmllbGQuZm9ybUNvbnRyb2xLZXkgfX1cIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzZWxldGVkVmFsdWUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QgbGFzdExpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZVwiPlxuICAgICAgICAgICAgICB7eyBub3RlVGV4dCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiaG9yaXpvbnRhbFRlbXAgZ3JpZC1jb250YWluZXJcIlxuICAgICAgW3N0eWxlLm1hcmdpbi10b3BdPVwiZHluYW1pY0Zvcm1GaWVsZERhdGEubGVuZ3RoID4gNyA/ICc0LjRyZW0nIDogJzNyZW0nXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZ3JpZC1hcmVhLWNvdW50Q2FyZHNcIlxuICAgICAgICAqbmdJZj1cImNhcmRDb25maWcgJiYgY2FyZENvbmZpZy5sZW5ndGggPiAwXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjYXJkQ29uZmlnOyBsZXQgaiA9IGluZGV4XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbS5jbGFzc05hbWUgPyBpdGVtLmNsYXNzTmFtZSArICcgY2FyZCcgOiAnY2FyZCdcIlxuICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY2FyZENvbG9yc1tqXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxoMz57eyBpdGVtLnRpdGxlIH19PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cD57eyBpdGVtLnZhbHVlIH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJ7eyAnZXhwYW5kJyArIGkgfX1cIlxuICAgICAgICBjbGFzcz1cImdyaWQtYXJlYS1jaGFydFwiXG4gICAgICAgICpuZ0Zvcj1cImxldCBjaGFydCBvZiBjaGFydHNDb25maWc7IGxldCBpID0gaW5kZXhcIlxuICAgICAgPlxuICAgICAgICA8IS0tIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNoYXJ0IG9mIGNoYXJ0c0NvbmZpZzsgbGV0IGkgPSBpbmRleFwiPiAtLT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICAgICAgY2hhcnQuY2xhc3NOYW1lXG4gICAgICAgICAgICAgID8gY2hhcnQuY2xhc3NOYW1lICsgJyBjYXJkIGNhcmQtYm9yZGVyLWJvdHRvbSdcbiAgICAgICAgICAgICAgOiAnY2FyZCBjYXJkLWJvcmRlci1ib3R0b20nXG4gICAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgzPnt7IGNoYXJ0LmNhcmRUaXRsZSB9fTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGdvb2dsZS1jaGFydFxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiA4MCVcIlxuICAgICAgICAgICAgW3R5cGVdPVwiY2hhcnQudHlwZVwiXG4gICAgICAgICAgICBbZGF0YV09XCJjaGFydC5jaGFydERhdGFcIlxuICAgICAgICAgICAgW2NvbHVtbnNdPVwiY2hhcnQuY2hhcnRPcHRpb25EYXRhLm15Q29sdW1uc1wiXG4gICAgICAgICAgICBbb3B0aW9uc109XCJjaGFydC5jaGFydE9wdGlvbkRhdGEuY2hhcnRPcHRpb25zXCJcbiAgICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0ZWRDaGFydCgkZXZlbnQsIGNoYXJ0LnR5cGUpXCJcbiAgICAgICAgICA+PC9nb29nbGUtY2hhcnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzaXplclwiIChjbGljayk9XCJ0b2dnbGVFeHBhbmQoaSwgJ2V4cGFuZCcgKyBpKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVzaXplSWNvblwiICpuZ0lmPVwic2hvd0ljb25cIj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE1cHhcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAtOTYwIDk2MCA5NjBcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjE1cHhcIlxuICAgICAgICAgICAgICBmaWxsPVwiIzVmNjM2OFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMjAtMTIwdi0zMjBoODB2MTg0bDUwNC01MDRINTIwdi04MGgzMjB2MzIwaC04MHYtMTg0TDI1Ni0yMDBoMTg0djgwSDEyMFpcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcHVwVGV4dFwiPkV4cGFuZDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXNpemVJY29uXCIgKm5nSWY9XCIhc2hvd0ljb25cIj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjIwcHhcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAtOTYwIDk2MCA5NjBcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjIwcHhcIlxuICAgICAgICAgICAgICBmaWxsPVwiIzVmNjM2OFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk00NDAtNDQwdjI0MGgtODB2LTE2MEgyMDB2LTgwaDI0MFptMTYwLTMyMHYxNjBoMTYwdjgwSDUyMHYtMjQwaDgwWlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wdXBUZXh0XCI+Q29sbGFwc2U8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSA8L25nLWNvbnRhaW5lcj4gLS0+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBpZD1cImV4cGFuZDJcIlxuICAgICAgICBbbmdDbGFzc109XCJcbiAgICAgICAgICBncmlkVHdvQ29uZmlnXG4gICAgICAgICAgICA/ICdncmlkLWFyZWEtdGFibGVPbmUnXG4gICAgICAgICAgICA6ICdncmlkLWFyZWEtdGFibGVPbmUgZ3JpZFRhYmxlT25lJ1xuICAgICAgICBcIlxuICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgIGdyaWRPbmVDb25maWcgJiYgZ3JpZE9uZUNvbmZpZyAhPSBudWxsICYmIGdyaWRPbmVDb25maWcgIT0gdW5kZWZpbmVkXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbbmdDbGFzc109XCJcbiAgICAgICAgICAgIGdyaWRPbmVDb25maWcuY2xhc3NOYW1lXG4gICAgICAgICAgICAgID8gZ3JpZE9uZUNvbmZpZy5jbGFzc05hbWUgKyAnY2FyZCBjYXJkLWJvcmRlci1ib3R0b20nXG4gICAgICAgICAgICAgIDogJ2NhcmQgY2FyZC1ib3JkZXItYm90dG9tJ1xuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMz57eyBncmlkT25lQ29uZmlnLmNhcmRUaXRsZSB9fTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiZ3JpZC10YWJsZVwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBoZWFkIG9mIGdyaWRPbmVDb25maWcudGFibGVDb2x1bW5IZWFkaW5nc1wiPlxuICAgICAgICAgICAgICAgICAge3sgaGVhZCB9fVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JpZE9uZUNvbmZpZy50YWJsZURhdGE7IGVsc2Ugbm9EYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JpZE9uZUNvbmZpZy50YWJsZURhdGE7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IHZhbCBvZiBncmlkT25lQ29uZmlnLnRhYmxlRGF0YUtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1bdmFsXSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vRGF0YT5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI1XCI+Tm8gRGF0YTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc2l6ZXJcIiAoY2xpY2spPVwidG9nZ2xlRXhwYW5kKDIsICdleHBhbmQyJylcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlc2l6ZUljb25cIiAqbmdJZj1cInNob3dJY29uXCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxNXB4XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgLTk2MCA5NjAgOTYwXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNXB4XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiM1ZjYzNjhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTIwLTEyMHYtMzIwaDgwdjE4NGw1MDQtNTA0SDUyMHYtODBoMzIwdjMyMGgtODB2LTE4NEwyNTYtMjAwaDE4NHY4MEgxMjBaXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1cFRleHRcIj5FeHBhbmQ8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVzaXplSWNvblwiICpuZ0lmPVwiIXNob3dJY29uXCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMHB4XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgLTk2MCA5NjAgOTYwXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIyMHB4XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiM1ZjYzNjhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNNDQwLTQ0MHYyNDBoLTgwdi0xNjBIMjAwdi04MGgyNDBabTE2MC0zMjB2MTYwaDE2MHY4MEg1MjB2LTI0MGg4MFpcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcHVwVGV4dFwiPkNvbGxhcHNlPC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBpZD1cImV4cGFuZDNcIlxuICAgICAgICBbbmdDbGFzc109XCJcbiAgICAgICAgICBncmlkT25lQ29uZmlnXG4gICAgICAgICAgICA/ICdncmlkLWFyZWEtdGFibGVSZWNvcmRzJ1xuICAgICAgICAgICAgOiAnZ3JpZC1hcmVhLXRhYmxlUmVjb3JkcyBncmlkVGFibGVUd28nXG4gICAgICAgIFwiXG4gICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgZ3JpZFR3b0NvbmZpZyAmJiBncmlkVHdvQ29uZmlnICE9PSBudWxsICYmIGdyaWRUd29Db25maWcgIT09IHVuZGVmaW5lZFxuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgW25nQ2xhc3NdPVwiXG4gICAgICAgICAgICBncmlkVHdvQ29uZmlnLmNsYXNzTmFtZVxuICAgICAgICAgICAgICA/IGdyaWRUd29Db25maWcuY2xhc3NOYW1lICsgJyBjYXJkIGNhcmQtYm9yZGVyLWJvdHRvbSdcbiAgICAgICAgICAgICAgOiAnY2FyZCBjYXJkLWJvcmRlci1ib3R0b20nXG4gICAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgzPnt7IGdyaWRUd29Db25maWcudGl0bGUgfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImdyaWQtdGFibGVcIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgaGVhZCBvZiBncmlkVHdvQ29uZmlnLnRhYmxlSGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAge3sgaGVhZCB9fVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgZ3JpZFR3b0NvbmZpZy50YWJsZURhdGEgJiYgZ3JpZFR3b0NvbmZpZy50YWJsZURhdGEubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHBhcmVudCBvZiBncmlkVHdvQ29uZmlnLnRhYmxlRGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAge3sgcGFyZW50LnBhcmVudE5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHIuY29sc3Bhbl09XCJncmlkVHdvQ29uZmlnLnRhYmxlRGF0YUtleS5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sc3BhblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3ViVGFibGVSb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGFyZW50LmNoaWxkRGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBrZXkgb2YgZ3JpZFR3b0NvbmZpZy50YWJsZURhdGFLZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbVtrZXldIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXNpemVyXCIgKGNsaWNrKT1cInRvZ2dsZUV4cGFuZCgzLCAnZXhwYW5kMycpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXNpemVJY29uXCIgKm5nSWY9XCJzaG93SWNvblwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVweFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTVweFwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjNWY2MzY4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyMC0xMjB2LTMyMGg4MHYxODRsNTA0LTUwNEg1MjB2LTgwaDMyMHYzMjBoLTgwdi0xODRMMjU2LTIwMGgxODR2ODBIMTIwWlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wdXBUZXh0XCI+RXhwYW5kPC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlc2l6ZUljb25cIiAqbmdJZj1cIiFzaG93SWNvblwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBweFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjBweFwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjNWY2MzY4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTQ0MC00NDB2MjQwaC04MHYtMTYwSDIwMHYtODBoMjQwWm0xNjAtMzIwdjE2MGgxNjB2ODBINTIwdi0yNDBoODBaXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1cFRleHRcIj5Db2xsYXBzZTwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuaGlkZUdyaWRzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLnJlc2l6ZUljb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5yZXNpemVJY29uIC5wb3B1cFRleHQge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMTI1JTtcbiAgICAgICAgbGVmdDogMzUlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgICAgIH1cblxuICAgICAgLnJlc2l6ZUljb24gLnBvcHVwVGV4dDo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIC5yZXNpemVJY29uOmhvdmVyIC5wb3B1cFRleHQge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgLnRlbXBsYXRlLWJveCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxMTEyNDk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcmlnaHQ6IC00NXB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5leHBhbmRlZCB7XG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIC0xICFpbXBvcnRhbnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuZXhwYW5kZWQgZ29vZ2xlLWNoYXJ0IHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5leHBhbmRlZC5ncmlkLWFyZWEtdGFibGVPbmUgLmNhcmQsXG4gICAgICAuZXhwYW5kZWQuZ3JpZC1hcmVhLWNoYXJ0IC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDk5JTtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5leHBhbmRlZC5ncmlkLWFyZWEtdGFibGVSZWNvcmRzIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDk5JTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLmV4cGFuZGVkLmdyaWQtYXJlYS10YWJsZVJlY29yZHMgLmNhcmQtY29udGVudCB7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5yZXNpemVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogI2VhZDRkNDI5O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDBweCByZ2IoMCAwIDAgLyAzOCUpO1xuICAgICAgICAvLyBjdXJzb3I6IG5lLXJlc2l6ZTtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTI0OTtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuc3ViVGFibGVSb3cge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmZpZWxkcy1iYXIge1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICB9XG4gICAgICAuZm9ybXNCYXIge1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTEyNDk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuZmllbGRzLWJhci1zZWNvbmQge1xuICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICB9XG4gICAgICAuZmllbGRzLWJhci1zZWNvbmQgLmdyaWQtbGFiZWwtYmFyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgcGFkZGluZzogMnB4IDE0cHg7XG4gICAgICB9XG4gICAgICAuZmllbGRzLWJhciAuZ3JpZC1sYWJlbC1iYXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDE0cHg7XG4gICAgICB9XG4gICAgICAuZ3JpZC1sYWJlbC1iYXIge1xuICAgICAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgLy8gcGFkZGluZzogNXB4IDE0cHg7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLWxhYmVsLWJhciAubGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5sYWJsZSBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQucGlja2VyW3R5cGU9XCJkYXRlXCJdIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICBpbnB1dC5waWNrZXJbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0LFxuICAgICAgaW5wdXQge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDExOHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgICAgc2VsZWN0OjotbXMtZXhwYW5kIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSB0aGUgZGVmYXVsdCBhcnJvdyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCBhbmQgSW50ZXJuZXQgRXhwbG9yZXIgMTEgKi9cbiAgICAgIH1cbiAgICAgIHNlbGVjdDpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgICAgIH1cbiAgICAgIG9wdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgfVxuICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgLS1wdXJwbGUtY29sb3I6ICM2MjIyNDg7XG4gICAgICAgIC0tY2FyZC1ib3JkZXItd2lkdGg6IDhweDtcbiAgICAgIH1cbiAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICAgICAgICBnYXA6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDk2O1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICB9XG5cbiAgICAgIC8vIC5ob3Jpem9udGFsVGVtcC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAvLyAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgICAgLy8gICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgICAvLyAgIGdhcDogMHB4O1xuICAgICAgLy8gfVxuXG4gICAgICAuY2FyZCB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgLy8gbWFyZ2luOiA1cHggMCAxMnB4IDA7XG4gICAgICAgIG1hcmdpbjogNXB4IDZweCAxMnB4O1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIC8vIHdpZHRoOiAxOHZ3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cblxuICAgICAgLmNhcmQgLmNhcmQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHAge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAjZjBmMmY0O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLWFyZWEtY291bnRDYXJkcyAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMnB4IDEwcHggMTBweDtcbiAgICAgIH1cblxuICAgICAgLmdyaWQtYXJlYS1jb3VudENhcmRzIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIC8vIGhlaWdodDogNDVweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmdyaWQtYXJlYS1jb3VudENhcmRzIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogI2YwZjJmNDtcbiAgICAgIH1cbiAgICAgIC5ncmlkLWFyZWEtY291bnRDYXJkcyB7XG4gICAgICAgIGdyaWQtYXJlYTogMS8xLzIvLTE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLWFyZWEtdGFibGVPbmUge1xuICAgICAgICBncmlkLWFyZWE6IDMvMS8tMS8yO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRyYW5zaXRpb246IGdyaWQtYXJlYSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZFRhYmxlT25lIHtcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzEvLTEvLTE7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLWFyZWEtdGFibGVPbmUgLmNhcmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dCwgaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLWFyZWEtY2hhcnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRyYW5zaXRpb246IGdyaWQtYXJlYSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAjZXhwYW5kMCB7XG4gICAgICAgIC8vIGdyaWQtYXJlYTogMi8xLzMvLTE7XG4gICAgICAgIC8vIHdpZHRoOjEwMCU7XG4gICAgICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcbiAgICAgIH1cblxuICAgICAgI2V4cGFuZDEge1xuICAgICAgICBncmlkLWFyZWE6IDIvMi8zLy0xO1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1hcmVhLWNoYXJ0OmhvdmVyIC5yZXNpemVyLFxuICAgICAgLmdyaWQtYXJlYS10YWJsZVJlY29yZHM6aG92ZXIgLnJlc2l6ZXIsXG4gICAgICAuZ3JpZC1hcmVhLXRhYmxlT25lOmhvdmVyIC5yZXNpemVyIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cblxuICAgICAgLmdyaWQtYXJlYS1jaGFydCAuY2FyZCB7XG4gICAgICAgIC8vIHdpZHRoOjQ5JTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQsIGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1hcmVhLXRhYmxlUmVjb3JkcyB7XG4gICAgICAgIGdyaWQtYXJlYTogMy8yLy0xLy0xO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRyYW5zaXRpb246IGdyaWQtYXJlYSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZFRhYmxlVHdvIHtcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzEvLTEvLTE7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLWFyZWEtdGFibGVSZWNvcmRzIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQsIGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC1hcmVhLXRhYmxlUmVjb3JkcyAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgLy8gc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGb3IgRmlyZWZveCAqL1xuICAgICAgICAvLyAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgICB9XG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA4cHg7IC8qIFdpZHRoIG9mIHRoZSBzY3JvbGxiYXIgKi9cbiAgICAgICAgaGVpZ2h0OiA4cHg7IC8qIEhlaWdodCBvZiB0aGUgc2Nyb2xsYmFyIChmb3IgaG9yaXpvbnRhbCBzY3JvbGxiYXJzKSAqL1xuICAgICAgfVxuXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBEYXJrLCBzbGlnaHRseSB0cmFuc3BhcmVudCB0aHVtYiAqL1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xuICAgICAgfVxuXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBTbGlnaHRseSBkYXJrZXIgb24gaG92ZXIgKi9cbiAgICAgIH1cblxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAvKiBUcmFuc3BhcmVudCB0cmFjayAqL1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC10YWJsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLXRhYmxlIHRyLFxuICAgICAgLmdyaWQtdGFibGUgdGgge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgIH1cbiAgICAgIC5ncmlkLXRhYmxlIC5jb2xzcGFuIHRyOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG4gICAgICAuZ3JpZC10YWJsZSB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgfVxuICAgICAgLmNvbHNwYW4gdGQge1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDd2dyAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuZ3JpZC10YWJsZSB0ZDpudGgtY2hpbGQoMSksXG4gICAgICAuZ3JpZC10YWJsZSB0aDpudGgtY2hpbGQoMSkge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuICAgICAgICB3aWR0aDogMTB2dztcbiAgICAgIH1cblxuICAgICAgLmdyaWQtdGFibGUgdGgge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDd2dztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDg5cHgpIHtcbiAgICAgICAgLmdyaWQtbGFiZWwtYmFyIC5sYXN0TGlzdCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzg2cHgpIHtcbiAgICAgICAgLmdyaWQtbGFiZWwtYmFyIHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgICAgICAgLmdyaWQtbGFiZWwtYmFyIHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgICAgICAgZ2FwOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmdyaWQtYXJlYS1jb3VudENhcmRzLFxuICAgICAgICAuZ3JpZC1hcmVhLWNoYXJ0LFxuICAgICAgICAuZ3JpZC1hcmVhLXRhYmxlUmVjb3JkcyB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5ncmlkLWFyZWEtY2hhcnQgLmNhcmQsXG4gICAgICAgIC5ncmlkLWFyZWEtY291bnRDYXJkcyAuY2FyZCxcbiAgICAgICAgLmdyaWQtYXJlYS10YWJsZVJlY29yZHMgLmNhcmQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuZ3JpZC1hcmVhLWNvdW50Q2FyZHMgLmNhcmQtY29udGVudC5jaGFydCB7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY2FyZC1ib3JkZXItbGVmdCB7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1wdXJwbGUtY29sb3IpO1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogdmFyKC0tY2FyZC1ib3JkZXItd2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWJvcmRlci1ib3R0b20ge1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1wdXJwbGUtY29sb3IpO1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiB2YXIoLS1jYXJkLWJvcmRlci13aWR0aCkgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgICB9XG4gICAgICBcbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTdXBlckRhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBkeW5hbWljRm9ybTogRm9ybUdyb3VwO1xuICBzaG93SWNvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZHluYW1pY0Zvcm1GaWVsZERhdGE6IER5bmFtaWNGaWVsZHNEYXRhW107XG5cbiAgQElucHV0KCkgY2FyZENvbmZpZzogRHluYW1pY0NhcmRzRGF0YVtdO1xuICBASW5wdXQoKSBjaGFydHNDb25maWc6IERhc2hhcmRDYXJkQ29uZmlnW107XG4gIEBJbnB1dCgpIGdyaWRPbmVDb25maWc6IENhcmRUYWJsZUNvbmZpZztcbiAgQElucHV0KCkgZ3JpZFR3b0NvbmZpZzogR3JpZFRhYmxlQ29uZmlnRGF0YTtcblxuICBASW5wdXQoKVxuICBub3RlVGV4dCE6IHN0cmluZztcblxuICBjYXJkQ29sb3JzOiBzdHJpbmdbXSA9IENhcmRzQ29sb3JzO1xuXG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0ZWRGaWVsZFZhbHVlRW1pdD4oKTtcbiAgQE91dHB1dCgpIG9uU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+PigpO1xuICBAT3V0cHV0KCkgb25TZWxlY3RDaGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudEVtaXRPblNlbGVjdD4oKTtcbiBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hTZXJ2aWNlOiBOZ3hTdXBlckRhc2hib2FyZFNlcnZpY2UsIFxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vY3JlYXRlIGR5bmFtaWMgZmllbGRzIGFuZCBhZGQgdmFsaWRhdGlvbiBmb3IgZWFjaCBmaWVsZFxuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuIH1cblxuICB0b2dnbGVFeHBhbmQoaW5kZXgsIGlkTmFtZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZE5hbWUpO1xuICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucyhcImV4cGFuZGVkXCIpKSB7XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRlZFwiKTtcbiAgICAgIHRoaXMuc2hvd0ljb24gPSAhdGhpcy5zaG93SWNvbjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGlmIChpICE9IGluZGV4KSB7XG4gICAgICAgICAgbGV0IGhpZGVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBhbmRcIiArIGkpO1xuICAgICAgICAgIGhpZGVDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlR3JpZHNcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWRcIik7XG4gICAgICB0aGlzLnNob3dJY29uID0gIXRoaXMuc2hvd0ljb247XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgaWYgKGkgIT0gaW5kZXgpIHtcbiAgICAgICAgICBsZXQgaGlkZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGFuZFwiICsgaSk7XG4gICAgICAgICAgaGlkZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhpZGVHcmlkc1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUZvcm0oKSB7XG4gICAgbGV0IGZvcm1HcnAgPSB7fTtcbiAgICB0aGlzLmR5bmFtaWNGb3JtRmllbGREYXRhLmZvckVhY2goKGZpZWxkOiBEeW5hbWljRmllbGRzRGF0YSkgPT4ge1xuICAgICAgZm9ybUdycCA9IHtcbiAgICAgICAgLi4uZm9ybUdycCxcbiAgICAgICAgW2ZpZWxkLmZvcm1Db250cm9sS2V5XTogW1xuICAgICAgICAgIGZpZWxkLnNlbGVjdGVkID8gZmllbGQuc2VsZWN0ZWQgOiBcIlwiLFxuICAgICAgICAgIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICB0aGlzLmR5bmFtaWNGb3JtID0gbmV3IEZvcm1CdWlsZGVyKCkuZ3JvdXAoZm9ybUdycCk7XG4gICAgdGhpcy5uZ3hTZXJ2aWNlLmdldEZvcm1Hcm91cCA9IHRoaXMuZHluYW1pY0Zvcm07XG4gIH1cblxuICAvLyBlbWl0IHNlbGVjdGVkIGZpZWxkIHZhbHVlXG4gIHNlbGV0ZWRWYWx1ZShldjogYW55KSB7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHtcbiAgICAgIHNlbGVjdGVkVmFsdWU6IGV2LnRhcmdldC52YWx1ZSxcbiAgICAgIGZpZWxkQ29udHJvbE5hbWU6IGV2LnRhcmdldC5pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0Rm9ybSgpIHtcbiAgICB0aGlzLm9uU3VibWl0LmVtaXQodGhpcy5keW5hbWljRm9ybS52YWx1ZSk7XG4gIH1cblxuICBzZWxlY3RlZENoYXJ0KGV2OiBDaGFydFNlbGVjdGlvbkNoYW5nZWRFdmVudCwgY2hhcnRUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9uU2VsZWN0Q2hhcnQuZW1pdCh7XG4gICAgICBldjogZXYsXG4gICAgICBjaGFydFR5cGU6IGNoYXJ0VHlwZSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ2FyZHNDb2xvcnMgPSBbXG4gIFwiI2Q5NjJiZVwiLFxuICBcIiMzZTg1ZjVcIixcbiAgXCIjNWNkYzc5ZmNcIixcbiAgXCIjZGM4MTVjZmNcIixcbiAgXCIjNWNjMGRjXCIsXG4gIFwiIzdiNTU2Y1wiLFxuICBcIiNjMzllNTZcIixcbl07XG5cbmV4cG9ydCBjb25zdCBEeW5hbWljRmllbGRzQ29uZmlndXJhdGlvbiA9IChcbiAgZmllbGRDb25maWc/OiBEeW5hbWljRmllbGRzRGF0YVtdXG4pOiBEeW5hbWljRmllbGRzRGF0YVtdID0+IHtcbiAgaWYgKGZpZWxkQ29uZmlnKSByZXR1cm4gZmllbGRDb25maWc7XG4gIGVsc2UgcmV0dXJuIHRlc3RGaWVsZERhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdEZpZWxkRGF0YTogRHluYW1pY0ZpZWxkc0RhdGFbXSA9IFtcbiAge1xuICAgIGxhYmxlOiBcIlpvbmVcIixcbiAgICBmb3JtQ29udHJvbEtleTogXCJ6b25lXCIsXG4gICAgbG92RGF0YUxpc3Q6IFtcbiAgICAgIHsgdmFsdWU6IFwiMVwiLCBuYW1lOiBcIkNoZW5uYWlcIiB9LFxuICAgICAgeyB2YWx1ZTogXCIyXCIsIG5hbWU6IFwiUHVuZVwiIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGxhYmxlOiBcIkJyYW5jaFwiLFxuICAgIGZvcm1Db250cm9sS2V5OiBcImJyYW5jaFwiLFxuICAgIGxvdkRhdGFMaXN0OiBbXG4gICAgICB7IHZhbHVlOiBcIjFcIiwgbmFtZTogXCJQb3J1clwiIH0sXG4gICAgICB7IHZhbHVlOiBcIjJcIiwgbmFtZTogXCJUbmFnYXJcIiB9LFxuICAgIF0sXG4gIH0sXG4gIHsgbGFibGU6IFwiVGVhbXNcIiwgZm9ybUNvbnRyb2xLZXk6IFwidGVhbXNcIiwgbG92RGF0YUxpc3Q6IFtdIH0sXG4gIHsgbGFibGU6IFwiUHJvZHVjdFwiLCBmb3JtQ29udHJvbEtleTogXCJwcm9kdWN0XCIsIGxvdkRhdGFMaXN0OiBbXSB9LFxuICB7IGxhYmxlOiBcIlN0YXJ0IERhdGVcIiwgZm9ybUNvbnRyb2xLZXk6IFwic3RhcnREYXRlXCIsIHR5cGU6IFwiZGF0ZVwiIH0sXG4gIHsgbGFibGU6IFwiRW5kIERhdGVcIiwgZm9ybUNvbnRyb2xLZXk6IFwiZW5kRGF0ZVwiLCB0eXBlOiBcImRhdGVcIiB9LFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBMT1ZEYXRhIHtcbiAgbmFtZTogc3RyaW5nIHwgbnVtYmVyO1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNGaWVsZHNEYXRhIHtcbiAgbGFibGU6IHN0cmluZztcbiAgZm9ybUNvbnRyb2xLZXk6IHN0cmluZztcbiAgbG92RGF0YUxpc3Q/OiBBcHBMT1ZEYXRhW107XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHNlbGVjdGVkPzogc3RyaW5nIHwgbnVtYmVyO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0ZWRGaWVsZFZhbHVlRW1pdCB7XG4gIHNlbGVjdGVkVmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgZmllbGRDb250cm9sTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldERhdGFPcHRpb24ge1xuICBmZXRjaExvdkRhdGE6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj5bXTtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBuYW1lMj86IHN0cmluZztcbn1cblxuLy8gaW50ZXJmYWNlcyBmb3IgZ3JpZCBjYXJkc0xpc3Q6XG5leHBvcnQgY29uc3QgRHluYW1pY0NhcmRzQ29uZmlndXJhdGlvbiA9IChcbiAgY2FyZENvbmZpZz86IER5bmFtaWNDYXJkc0RhdGFbXVxuKTogRHluYW1pY0NhcmRzRGF0YVtdID0+IHtcbiAgaWYgKGNhcmRDb25maWcpIHJldHVybiBjYXJkQ29uZmlnO1xuICBlbHNlIHJldHVybiB0ZXN0Q2FyZERhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdENhcmREYXRhOiBEeW5hbWljQ2FyZHNEYXRhW10gPSBbXG4gIHsgdGl0bGU6IFwiVG90YWwgUHJvcG9zYWxzXCIsIHZhbHVlOiA3MDAgfSxcbiAgeyB0aXRsZTogXCJPbiBQcm9jZXNzXCIsIHZhbHVlOiAyMzAgfSxcbiAgeyB0aXRsZTogXCJTYW5jdGlvbmVkXCIsIHZhbHVlOiAzMDAgfSxcbiAgeyB0aXRsZTogXCJSZWplY3RlZFwiLCB2YWx1ZTogMjU0IH0sXG4gIHsgdGl0bGU6IFwiT3BlbmVkIHByZW5kaW5nIGZvciA+IDMwIGRheXNcIiwgdmFsdWU6IDE0MyB9LFxuICB7IHRpdGxlOiBcIkRpc2J1cnNlZFwiLCB2YWx1ZTogMTIwIH0sXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNDYXJkc0RhdGEge1xuICB0aXRsZTogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRDaGFydHNDb25maWcgPSAoXG4gIGNoYXJ0c0RhdGE/OiBEYXNoYXJkQ2FyZENvbmZpZ1tdXG4pOiBEYXNoYXJkQ2FyZENvbmZpZ1tdID0+IHtcbiAgaWYgKGNoYXJ0c0RhdGEpIHtcbiAgICByZXR1cm4gY2hhcnRzRGF0YTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGVzdENoYXJ0c0RhdGE7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0Q2hhcnRzRGF0YTogRGFzaGFyZENhcmRDb25maWdbXSA9IFtcbiAge1xuICAgIHR5cGU6IENoYXJ0VHlwZS5Db21ib0NoYXJ0LFxuICAgIGNhcmRUaXRsZTogXCJNb250aGx5IFdpc2VcIixcbiAgICBjaGFydE9wdGlvbkRhdGE6IHtcbiAgICAgIG15Q29sdW1uczogW1wiWWVhclwiLCBcIlJldGFpbFwiLCBcIkFncmlcIiwgXCJNU01FXCIsIFwiR29sZFwiLCBcIkNvcnBcIl0sXG5cbiAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICB0aXRsZTogYE1vbnRobHkgV2lzZWAsXG4gICAgICAgIGNoYXJ0QXJlYTogeyB3aWR0aDogXCI3MCVcIiwgaGVpZ2h0OiBcIjcwJVwiIH0sXG4gICAgICAgIGhBeGlzOiB7XG4gICAgICAgICAgdGl0bGU6IGBNb2R1bGVzYCxcbiAgICAgICAgICBtaW5WYWx1ZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgdkF4aXM6IHtcbiAgICAgICAgICB0aXRsZTogXCJOby4gT2YgQW1vdW50XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNlcmllc1R5cGU6IFwiYmFyc1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNoYXJ0RGF0YTogW1xuICAgICAgW1wiMjAyMy8wNVwiLCA1MCwgMzMsIDI0LjUsIDMzLCAyMl0sXG4gICAgICBbXCIyMDI0LzA1XCIsIDIzLCA0MSwgMjIuNSwgMjIsIDJdLFxuICAgICAgW1wiMjAyMS8wNVwiLCA0NCwgODIsIDEzLCA0MywgMTJdLFxuICAgICAgW1wiMjAyMy8wNVwiLCAxOSwgMzMsIDIzLCAyMSwgODldLFxuICAgICAgW1wiMjAyMi8wNVwiLCAzMCwgMjAsIDEyLCAzNCwgMjJdLFxuICAgIF0sXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxuICB9LFxuICB7XG4gICAgdHlwZTogQ2hhcnRUeXBlLlBpZUNoYXJ0LFxuICAgIGNhcmRUaXRsZTogXCJUb3RhbCBTYW5jdGlvbmVkXCIsXG4gICAgY2hhcnRPcHRpb25EYXRhOiB7XG4gICAgICBteUNvbHVtbnM6IFtcbiAgICAgICAgW1wiUmV0YWlsXCIsIFwiQWdyaVwiLCBcIk1TTUVcIiwgXCJHT0xEXCIsIFwiQ09SUFwiXSxcbiAgICAgICAgXCJMZWFkcyBDb3VudFwiLFxuICAgICAgICB7IHJvbGU6IFwic3R5bGVcIiB9LFxuICAgICAgXSxcbiAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICB0aXRsZTogYFNhbmN0aW9uZWQgQW1vdW50YCxcbiAgICAgICAgY2hhcnRBcmVhOiB7IHdpZHRoOiBcIjUwJVwiIH0sXG4gICAgICAgIHNsaWNlczoge1xuICAgICAgICAgIDA6IHsgY29sb3I6IFwiIzYyMjI0OFwiIH0sXG4gICAgICAgICAgMTogeyBjb2xvcjogXCIjMTA5NjE4XCIgfSxcbiAgICAgICAgICAyOiB7IGNvbG9yOiBcIiMzMzY2Y2NcIiB9LFxuICAgICAgICAgIDM6IHsgY29sb3I6IFwicmVkXCIgfSxcbiAgICAgICAgICA0OiB7IGNvbG9yOiBcIiNmZjk5MDBcIiB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNoYXJ0RGF0YTogW1xuICAgICAgW1wiUmV0YWlsXCIsIDM0NDUsIFwicmVkXCJdLFxuICAgICAgW1wiQWdyaVwiLCAzNDQ1LCBcInJlZFwiXSxcbiAgICAgIFtcIk1TTUVcIiwgMzQ0NSwgXCJyZWRcIl0sXG4gICAgICBbXCJHb2xkXCIsIDM0NDUsIFwicmVkXCJdLFxuICAgIF0sXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBEYXNoYXJkQ2FyZENvbmZpZyB7XG4gIHR5cGU6IGFueTtcbiAgY2hhcnRPcHRpb25EYXRhOiBDaGFydE9wdGlvbnNDb25maWc7XG4gIGNoYXJ0RGF0YTogQXJyYXk8Q2hhcnREYXRhVHlwZVtdPjtcbiAgY2FyZFRpdGxlPzogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIENoYXJ0RGF0YVR5cGUgPSBzdHJpbmcgfCBudW1iZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRPcHRpb25zQ29uZmlnIHtcbiAgbXlDb2x1bW5zOiBhbnk7XG4gIGNoYXJ0T3B0aW9uczogQ2hhcnRBeGlzRGF0YTtcbn1cblxuZXhwb3J0IHR5cGUgQ29sdW1uc1R5cGUgPSBzdHJpbmcgfCBudW1iZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRBeGlzRGF0YSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNoYXJ0QXJlYTogeyB3aWR0aD86IHN0cmluZyB8IG51bWJlcjsgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyIH07XG4gIHNsaWNlcz86IG9iamVjdDtcbiAgaEF4aXM/OiBBeGlzVmxhdWVzO1xuICB2QXhpcz86IEF4aXNWbGF1ZXM7XG4gIHNlcmllc1R5cGU/OiBzdHJpbmc7XG4gIHNlcmllcz86IG9iamVjdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBeGlzVmxhdWVzIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1pblZhbHVlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0RXZlbnRFbWl0T25TZWxlY3Qge1xuICBldjogQ2hhcnRTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ7XG4gIGNoYXJ0VHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ2FyZFRhYmxlRGF0YUNvbmZpZyA9IChcbiAgY2FyZFRhYmxlRGF0YT86IENhcmRUYWJsZUNvbmZpZ1xuKTogQ2FyZFRhYmxlQ29uZmlnID0+IHtcbiAgaWYgKGNhcmRUYWJsZURhdGEpIHtcbiAgICByZXR1cm4gY2FyZFRhYmxlRGF0YTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGVzdENhcmRUYWJsZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RDYXJkVGFibGUgPSB7XG4gIGNhcmRUaXRsZTogXCJUb3AgNSBCcmFuY2hlc1wiLFxuICB0YWJsZUNvbHVtbkhlYWRpbmdzOiBbXCJcIiwgXCJSZXRhaWxcIiwgXCJBZ3JpXCIsIFwiTVNNRVwiLCBcIkdvbGRcIl0sXG4gIHRhYmxlRGF0YUtleTogW1wib3JnTmFtZVwiLCBcInJldGFpbFwiLCBcImFncmlcIiwgXCJtc21lXCIsIFwiZ29sZFwiXSxcbiAgdGFibGVEYXRhOiBbXG4gICAge1xuICAgICAgb3JnTmFtZTogXCJDaGVubmFpXCIsXG4gICAgICByZXRhaWw6IFwiODQ5XCIsXG4gICAgICBhZ3JpOiBcIjU5OVwiLFxuICAgICAgbXNtZTogXCI1MDBcIixcbiAgICAgIGdvbGQ6IFwiMjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBvcmdOYW1lOiBcIkRlbGhpXCIsXG4gICAgICByZXRhaWw6IFwiMjAwXCIsXG4gICAgICBhZ3JpOiBcIjMwMFwiLFxuICAgICAgbXNtZTogXCI0MDBcIixcbiAgICAgIGdvbGQ6IFwiMTUwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBvcmdOYW1lOiBcIlRuYWdhclwiLFxuICAgICAgcmV0YWlsOiBcIjg0OVwiLFxuICAgICAgYWdyaTogXCI0ODBcIixcbiAgICAgIG1zbWU6IFwiMjUwXCIsXG4gICAgICBnb2xkOiBcIjYwMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgb3JnTmFtZTogXCJQb29uYW1hbGVcIixcbiAgICAgIHJldGFpbDogXCI5NDBcIixcbiAgICAgIGFncmk6IFwiMjM0XCIsXG4gICAgICBtc21lOiBcIjcwMFwiLFxuICAgICAgZ29sZDogXCI0MDBcIixcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkVGFibGVDb25maWcge1xuICBjYXJkVGl0bGU/OiBzdHJpbmc7XG4gIHRhYmxlQ29sdW1uSGVhZGluZ3M6IHN0cmluZ1tdO1xuICB0YWJsZURhdGFLZXk6IHN0cmluZ1tdO1xuICB0YWJsZURhdGE6IEFycmF5PFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4+O1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JpZFRhYmxlQ29uZmlnRGF0YSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB0YWJsZUhlYWRpbmc6IHN0cmluZ1tdO1xuICB0YWJsZURhdGFLZXk6IHN0cmluZ1tdO1xuICB0YWJsZURhdGE6IGFueTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBDaGlsZERhdGFUeXBlID0gc3RyaW5nIHwgbnVtYmVyO1xuXG5leHBvcnQgY29uc3QgR3JpZFRhYmxlRGF0YUNvbmZpZyA9IChcbiAgZ3JpZFRhYmxlRGF0YT86IEdyaWRUYWJsZUNvbmZpZ0RhdGFcbik6IEdyaWRUYWJsZUNvbmZpZ0RhdGEgPT4ge1xuICBpZiAoZ3JpZFRhYmxlRGF0YSkge1xuICAgIHJldHVybiBncmlkVGFibGVEYXRhO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0ZXN0R3JpZFRhYmxlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdEdyaWRUYWJsZTogR3JpZFRhYmxlQ29uZmlnRGF0YSA9IHtcbiAgdGl0bGU6IFwiU2NoZW1lIFdpc2VcIixcbiAgdGFibGVIZWFkaW5nOiBbXG4gICAgXCJMb2FuIFR5cGVcIixcbiAgICBcIlNjaGVtZVwiLFxuICAgIFwiTm8gb2YgQWNjICNcIixcbiAgICBcIkxpbWl0IGluIChMYWtocylcIixcbiAgICBcIk9TIGFtdCBpbihMYWtocylcIixcbiAgXSxcbiAgdGFibGVEYXRhOiBbXG4gICAge1xuICAgICAgcGFyZW50TmFtZTogXCJDaGVubmFpXCIsXG4gICAgICBjaGlsZERhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRwbVNlcUlkOiA2MjY4NSxcbiAgICAgICAgICB0cG1Db2RlOiBcIjJcIixcbiAgICAgICAgICB0cG1Nb2RpZmllZERhdGU6IFwiMjAyNC0wNC0yNFQwNzo0OToyMC44NzkrMDAwMFwiLFxuICAgICAgICAgIHRwbVByZENvZGU6IFwiQ2FyIExvYW5cIixcbiAgICAgICAgICBzY2hlbWVUeXBlOiBcIkNhciBEZWFsZXJcIixcbiAgICAgICAgICBub09mQWNjOiBcIlMxNFwiLFxuICAgICAgICAgIGxpbWl0OiBcIjM0NFwiLFxuICAgICAgICAgIFNhbmN0aW9uZWQ6IFwiMjAzMDJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRwbVNlcUlkOiA2MjY5OCxcbiAgICAgICAgICB0cG1Db2RlOiBcIjJcIixcbiAgICAgICAgICB0cG1Nb2RpZmllZERhdGU6IFwiMjAyNC0wNC0yNFQwNzo0OToyMC44ODkrMDAwMFwiLFxuICAgICAgICAgIHRwbVByZENvZGU6IFwiQ2FyIExvYW5cIixcbiAgICAgICAgICBzY2hlbWVUeXBlOiBcIkx1eHVyeSBDYXIgTG9hblwiLFxuICAgICAgICAgIG5vT2ZBY2M6IFwiODRcIixcbiAgICAgICAgICBsaW1pdDogXCIyMTIzMlwiLFxuICAgICAgICAgIFNhbmN0aW9uZWQ6IFwiMTIxLjQ1XCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGFyZW50TmFtZTogXCJIeWRlcmFiYWRcIixcbiAgICAgIGNoaWxkRGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgdHBtU2VxSWQ6IDYyNjg2LFxuICAgICAgICAgIHRwbUNvZGU6IFwiMlwiLFxuICAgICAgICAgIHRwbU1vZGlmaWVkRGF0ZTogXCIyMDI0LTA0LTI0VDA3OjQ5OjIwLjg4MCswMDAwXCIsXG4gICAgICAgICAgdHBtUHJkQ29kZTogXCJDYXNoIExvYW5cIixcbiAgICAgICAgICBzY2hlbWVUeXBlOiBcIlByb3BlcnR5IExvYW5cIixcbiAgICAgICAgICBub09mQWNjOiBcIlMzNFwiLFxuICAgICAgICAgIGxpbWl0OiBcIjY3NlwiLFxuICAgICAgICAgIFNhbmN0aW9uZWQ6IFwiMjNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgdGFibGVEYXRhS2V5OiBbXCJzY2hlbWVUeXBlXCIsIFwibm9PZkFjY1wiLCBcImxpbWl0XCIsIFwiU2FuY3Rpb25lZFwiXSxcbn07XG4iXX0=