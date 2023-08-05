import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { PagesComponent } from './components/pages/pages.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { MediaComponent } from './components/media/media.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'pages', component: PagesComponent},
  { path: 'coupons', component: CouponsComponent},
  // { path: 'coupons', 
  // loadChildren: () => import('./coupons/coupons.module').then(m => m.CouponsModule)
  // },
  { path: 'media', component: MediaComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
