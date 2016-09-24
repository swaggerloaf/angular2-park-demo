import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootAppComponent }      from './app.component';

const appRoutes: Routes = [
  {
    path: '/',
    component: RootAppComponent
  }
];