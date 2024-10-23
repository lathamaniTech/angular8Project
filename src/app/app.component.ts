import { Component, OnInit } from "@angular/core";
import {
  CardTableDataConfig,
  DashboardChartsConfig,
  DynamicCardsConfiguration,
  DynamicFieldsConfiguration,
  GridTableDataConfig,
} from "src/lib/ngx-super-dashboard/esm5/lib/ngx-super-dashboard.component.js";
// import {
//   CardTableDataConfig,
//   dashboardChartsConfig,
//   DynamicCardsConfiguration,
//   DynamicFieldsConfiguration,
//   gridTableDataConfig,
// } from "ngx-super-dashboard";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "angular8Project";

  dynamicSearchFormFields = DynamicFieldsConfiguration();
  countCardsListData = DynamicCardsConfiguration();
  dashboardChartConfig = DashboardChartsConfig();
  cardTableData = CardTableDataConfig();
  gridTableData = GridTableDataConfig();

  constructor() {}
  ngOnInit(): void {}

  onSelected(ev) {}

  onSearchSubmit(ev) {}

  selectedChart(ev) {}
}
