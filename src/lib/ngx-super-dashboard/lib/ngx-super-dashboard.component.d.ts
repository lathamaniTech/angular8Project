import { EventEmitter, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ChartSelectionChangedEvent } from "angular-google-charts";
import { NgxSuperDashboardService } from "./ngx-super-dashboard.service";
export declare class NgxSuperDashboardComponent implements OnInit {
    private ngxService;
    dynamicForm: FormGroup;
    showIcon: boolean;
    dynamicFormFieldData: DynamicFieldsData[];
    cardConfig: DynamicCardsData[];
    chartsConfig: DashardCardConfig[];
    gridOneConfig: CardTableConfig;
    gridTwoConfig: GridTableConfigData;
    noteText: string;
    cardColors: string[];
    onSelect: EventEmitter<SelectedFieldValueEmit>;
    onSubmit: EventEmitter<Record<string, string | number>>;
    onSelectChart: EventEmitter<ChartEventEmitOnSelect>;
    constructor(ngxService: NgxSuperDashboardService);
    ngOnInit(): void;
    toggleExpand(index: any, idName: any): void;
    createForm(): void;
    seletedValue(ev: any): void;
    onSubmitForm(): void;
    selectedChart(ev: ChartSelectionChangedEvent, chartType: string): void;
}
export declare const CardsColors: string[];
export declare const DynamicFieldsConfiguration: (fieldConfig?: DynamicFieldsData[]) => DynamicFieldsData[];
export declare const testFieldData: DynamicFieldsData[];
export interface AppLOVData {
    name: string | number;
    value: string | number;
}
export interface DynamicFieldsData {
    lable: string;
    formControlKey: string;
    lovDataList?: AppLOVData[];
    type?: string;
    selected?: string | number;
    className?: string;
}
export interface SelectedFieldValueEmit {
    selectedValue: string | number;
    fieldControlName: string;
}
export interface SetDataOption {
    fetchLovData: Record<string, string | number>[];
    value: string | number;
    name: string;
    name2?: string;
}
export declare const DynamicCardsConfiguration: (cardConfig?: DynamicCardsData[]) => DynamicCardsData[];
export declare const testCardData: DynamicCardsData[];
export interface DynamicCardsData {
    title: string;
    value: number | string;
    className?: string;
}
export declare const DashboardChartsConfig: (chartsData?: DashardCardConfig[]) => DashardCardConfig[];
export declare const testChartsData: DashardCardConfig[];
export interface DashardCardConfig {
    type: any;
    chartOptionData: ChartOptionsConfig;
    chartData: Array<ChartDataType[]>;
    cardTitle?: string;
    className?: string;
}
export declare type ChartDataType = string | number;
export interface ChartOptionsConfig {
    myColumns: any;
    chartOptions: ChartAxisData;
}
export declare type ColumnsType = string | number;
export interface ChartAxisData {
    title: string;
    chartArea: {
        width?: string | number;
        height?: string | number;
    };
    slices?: object;
    hAxis?: AxisVlaues;
    vAxis?: AxisVlaues;
    seriesType?: string;
    series?: object;
}
export interface AxisVlaues {
    title?: string;
    minValue?: number;
}
export interface ChartEventEmitOnSelect {
    ev: ChartSelectionChangedEvent;
    chartType: string;
}
export declare const CardTableDataConfig: (cardTableData?: CardTableConfig) => CardTableConfig;
export declare const testCardTable: {
    cardTitle: string;
    tableColumnHeadings: string[];
    tableDataKey: string[];
    tableData: {
        orgName: string;
        retail: string;
        agri: string;
        msme: string;
        gold: string;
    }[];
};
export interface CardTableConfig {
    cardTitle?: string;
    tableColumnHeadings: string[];
    tableDataKey: string[];
    tableData: Array<Record<string, string | number>>;
    className?: string;
}
export interface GridTableConfigData {
    title?: string;
    tableHeading: string[];
    tableDataKey: string[];
    tableData: any;
    className?: string;
}
export declare type ChildDataType = string | number;
export declare const GridTableDataConfig: (gridTableData?: GridTableConfigData) => GridTableConfigData;
export declare const testGridTable: GridTableConfigData;
