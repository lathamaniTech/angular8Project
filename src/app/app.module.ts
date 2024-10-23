import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxSuperDashboardModule } from "src/lib/ngx-super-dashboard/esm5/lib/ngx-super-dashboard.module.js";
// import { NgBaseLibModule } from "src/lib/ng-base-lib/esm5/lib/ng-base-lib.module.js";
import { GoogleChartsModule, ScriptLoaderService } from "angular-google-charts";
// import { NgxSuperDashboardModule } from "../../node_modules/ngx-super-dashboard/esm5/lib/ngx-super-dashboard.module.js";

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
