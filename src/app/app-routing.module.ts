import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QueryPageComponent} from "./pages/query-page/query-page.component";
import {ReportPageComponent} from "./pages/report-page/report-page.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'report-page', pathMatch: 'full'
  },
  {
    path: 'query-page',
    component: QueryPageComponent,
  },
  {
    path: 'report-page',
    component: ReportPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
