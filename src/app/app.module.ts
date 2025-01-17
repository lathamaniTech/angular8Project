import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxSuperDashboardModule } from "src/lib/ngx-super-dashboard/esm5/lib/ngx-super-dashboard.module.js";
import { GoogleChartsModule, ScriptLoaderService } from "angular-google-charts";
// import { NgxSuperDashboardService } from "src/lib/ngx-super-dashboard/esm5/lib/ngx-super-dashboard.service.js";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    NgxSuperDashboardModule,
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
