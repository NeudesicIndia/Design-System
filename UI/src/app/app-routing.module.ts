import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { ErrorPageComponent } from '../app/error-page/error-page.component';
import { MainComponent } from './main/main.component';
import { ModalComponent } from './modal/modal.component';
import { WhyDsComponent } from './why-ds/why-ds.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { title: 'Heroes List' },
    children: [
      {path: 'overview', component: MainComponent},
      {path: 'why-design-system', component: WhyDsComponent},
      {path: 'modal', component: ModalComponent},
      { path: '',
        redirectTo: '/overview',
        pathMatch: 'full'
      },
    ]
  },
  { path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorPageComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
