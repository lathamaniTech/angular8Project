import { EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ChartSelectionChangedEvent } from "angular-google-charts";
export declare class NgxSuperDashboardComponent implements OnInit {
    private fb;
    dynamicForm: FormGroup;
    dynamicFormFieldData: DynamicFieldsData[];
    cardConfig: DynamicCardsData[];
    chartsConfig: DashardCardConfig[];
    gridOneConfig: CardTableDataConfig;
    gridTwoConfig: GridTableConfigData;
    onSelect: EventEmitter<SelectedFieldValueEmit>;
    onSubmit: EventEmitter<Record<string, string | number>>;
    onSelectChart: EventEmitter<ChartEventEmitOnSelect>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    typeCheck(data: any): boolean;
    createForm(): void;
    seletedValue(ev: any): void;
    onSubmitForm(): void;
    selectedChart(ev: ChartSelectionChangedEvent, chartType: string): void;
}
export declare const DynamicFieldsConfiguration: (fieldConfig: DynamicFieldsData[]) => DynamicFieldsData[];
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
export declare const DynamicCardsConfiguration: (cardConfig: DynamicCardsData[]) => DynamicCardsData[];
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
export declare const CardTableDataConfig: (cardTableData?: CardTableDataConfig) => CardTableDataConfig;
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
export interface CardTableDataConfig {
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
