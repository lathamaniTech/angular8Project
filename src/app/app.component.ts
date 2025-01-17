import {
  Component,
  Inject,
  OnInit,
} from "@angular/core";
import { ChartType } from "angular-google-charts";
import { BehaviorSubject, Observable } from "rxjs";
import {
  DynamicFieldsData,
  DynamicCardsData,
  GridTableConfig,
  CardTableConfig
} from "src/lib/ngx-super-dashboard/esm5/lib/ngx-super-dashboard.component.js";
import { NgxSuperDashboardService } from "src/lib/ngx-super-dashboard/esm5/lib/ngx-super-dashboard.service.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {

  searchFormFields!: DynamicFieldsData[];
  dashboardLibraryData = new BehaviorSubject<dynamicDataList>(
    {} as dynamicDataList
  );
  _dashboardLibraryData$: Observable<dynamicDataList> =
    this.dashboardLibraryData.asObservable();

  cardData!: DynamicCardsData[];
  chartsData: any;
  gridTableData!: GridTableConfig;
  cardTable!: CardTableConfig;
  staticData = "*Accounts in Actuals *Ammount in Lakhs";

  constructor(
    @Inject(NgxSuperDashboardService) private ngxData: NgxSuperDashboardService,
    // private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    const data = await this.getData();
    this.dashboardLibraryData.next(data);
  }

  async getData(): Promise<dynamicDataList> {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await result.json();
    const updatedata = data
      ? data.map(({ id, title, ...rest }: any) => ({
          value: id,
          name: title,
          ...rest,
        }))
      : [];

    this.searchFormFields = [
      {
        lable: "Zone",
        formControlKey: "zone",
        lovDataList: updatedata,
        selected: 1,
      },
      {
        lable: "Branch",
        formControlKey: "branch",
        lovDataList: [],
      },
      { lable: "Teams", formControlKey: "teams", lovDataList: [] },
      { lable: "Product", formControlKey: "product", lovDataList: [] },
      { lable: "Start Date", formControlKey: "startDate", type: "date" },
      { lable: "End Date", formControlKey: "endDate", type: "date" },
    ];

    this.cardData = [
      { title: "Total Proposals", value: 700 },
      { title: "On Process", value: 230 },
      { title: "Sanctioned", value: 300 },
      { title: "Rejected", value: 254 },
      { title: "Opened prending for > 30 days", value: 143 },
      { title: "Disbursed", value: 120 },
    ];

    this.chartsData = [
      {
        type: ChartType.ComboChart,
        cardTitle: "Monthly Wise",
        chartOptionData: {
          myColumns: ["Year", "Retail", "Agri", "MSME", "Gold"],
          chartOptions: {
            title: `Monthly Wise`,
            chartArea: { width: "50%" },
            hAxis: {
              title: `Modules`,
              minValue: 0,
            },
            vAxis: {
              title: "No. Of Amount",
              ticks: [
                0, 100, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, -200,
                -400, -600, -800, -1000,
              ], // Custom intervals
            },
            seriesType: "bars",
          },
        },
        chartData: [
          ["2023/05", 85, 1250, 13, 10],
          ["2024/05", -900, 1900, 66.5, 7],
          ["2021/05", 304, 317, 503, 30],
        ],
        className: "combochart",
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
    this.gridTableData = {
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
    this.cardTable = {
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

    return {
      formData: this.searchFormFields,
      cardList: this.cardData,
      chartList: this.chartsData,
      cardtable: this.cardTable,
      gridtable: this.gridTableData,
    };
  }

  onSelected(ev) {
    console.log(ev);
    if (ev.selectedValue == "2") {
      this.searchFormFields.forEach((item) => {
        if (item.formControlKey == "branch") {
          item.lovDataList = [
            { value: "1", name: "Porur" },
            { value: "2", name: "Tnagar" },
          ];
        }
      });
      this.ngxData.formGroupSetting.get("branch").setValue("1");

      this.chartsData[1].chartData = [
        ["Retail", 203, "red"],
        ["Agri", 199, "red"],
        ["MSME", 200, "red"],
        ["Gold", 500, "red"],
      ];
    }
  }

  onSearchSubmit(ev) {}

  selectedChart(ev) {}

}

export interface dynamicDataList{
  formData:any;
cardList:any;
chartList:any;
cardtable:any;
gridtable:any;
}
