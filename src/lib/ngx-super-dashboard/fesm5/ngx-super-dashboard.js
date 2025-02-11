import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { __assign } from 'tslib';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartType, GoogleChartsModule } from 'angular-google-charts';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-super-dashboard.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxSuperDashboardService = /** @class */ (function () {
    function NgxSuperDashboardService() {
    }
    Object.defineProperty(NgxSuperDashboardService.prototype, "getFormGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formGroupSetting;
        },
        set: /**
         * @param {?} formGrp
         * @return {?}
         */
        function (formGrp) {
            this._formGroupSetting = formGrp;
        },
        enumerable: true,
        configurable: true
    });
    NgxSuperDashboardService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root",
                },] }
    ];
    /** @nocollapse */
    NgxSuperDashboardService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxSuperDashboardService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxSuperDashboardService_Factory() { return new NgxSuperDashboardService(); }, token: NgxSuperDashboardService, providedIn: "root" });
    return NgxSuperDashboardService;
}());
if (false) {
    /** @type {?} */
    NgxSuperDashboardService.prototype._formGroupSetting;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-super-dashboard.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            formGrp = __assign({}, formGrp, (_a = {}, _a[field.formControlKey] = [
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
var CardsColors = [
    "#d962be",
    "#3e85f5",
    "#5cdc79fc",
    "#dc815cfc",
    "#5cc0dc",
    "#7b556c",
    "#c39e56",
];
/** @type {?} */
var DynamicFieldsConfiguration = (/**
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
var testFieldData = [
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
    DynamicFieldsData.prototype.selected;
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
/**
 * @record
 */
function CardTableConfig() { }
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
// import { CommonModule } from "@angular/common";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
var NgxSuperDashboardModule = /** @class */ (function () {
    function NgxSuperDashboardModule() {
    }
    NgxSuperDashboardModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxSuperDashboardComponent],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, GoogleChartsModule],
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

export { CardTableDataConfig, CardsColors, DashboardChartsConfig, DynamicCardsConfiguration, DynamicFieldsConfiguration, GridTableDataConfig, NgxSuperDashboardComponent, NgxSuperDashboardModule, NgxSuperDashboardService, testCardData, testCardTable, testChartsData, testFieldData, testGridTable };
//# sourceMappingURL=ngx-super-dashboard.js.map
