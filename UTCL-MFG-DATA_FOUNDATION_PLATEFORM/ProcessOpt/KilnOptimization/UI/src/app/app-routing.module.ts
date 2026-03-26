import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaugeGraphComponent } from './graphs/gauge-graph/gauge-graph.component';
import { SystemAnlysisComponent } from './pages/system-anlysis/system-anlysis.component';
import { RecommendationsListComponent } from './pages/recommendations-list/recommendations-list.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MsalGuard } from '@azure/msal-angular';
import { LineChartComponent } from './graphs/gauge-graph/line-chart/line-chart.component';
import { AlertListComponent } from './pages/alert-list/alert-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EquipmentListComponent } from './pages/equipment-list/equipment-list.component';
import { TagListComponent } from './pages/tag-list/tag-list.component';
import { AdminpageComponent } from './pages/adminpage/adminpage.component';
import { ControlCloserangeComponent } from './pages/control-closerange/control-closerange.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },

  // ✅ Public routes (NO layout)
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'line',
    component: LineChartComponent
  },

  // ✅ Protected routes (WITH layout)
  {
    path: '',
    component: MainLayoutComponent,        
    canActivate: [MsalGuard],              
    children: [
      {
        path: 'home',
        component: SystemAnlysisComponent
      },
      {
        path: 'recommendationsList',
        component: RecommendationsListComponent
      },
      {
        path: 'alertList',
        component: AlertListComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'equipmentList',
        component: EquipmentListComponent
      },
      {
        path: 'disturbanceOrder',
        component: TagListComponent
      },
      {
        path: 'adminpage',
        component: AdminpageComponent
      },
      {
        path: 'controlRange',
        component: ControlCloserangeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
