import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { PowerGridControlComponent } from '../powerGrid/powerGridControl.component';


const appRoutes: Routes = [
  {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
  },
  {
  path: 'powergridcontrol',
  component: PowerGridControlComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);