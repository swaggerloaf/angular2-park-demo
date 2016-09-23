import { NgModule }      from '@angular/core';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { RootAppComponent }   from './app.component';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { PowerGridControlComponent }   from '../powerGrid/powerGridControl.component';



// @NgModule decorator defines the metadata
@NgModule({
  // import single helper module
  imports: [ 
    BrowserModule,
    routing 
  ],
  // identify the apps root component, top of the component tree
  declarations: [
     RootAppComponent,
      DashboardComponent,
      PowerGridControlComponent
  ],
  bootstrap:    [ RootAppComponent ]
})

// export our root module
export class RootAppModule { }
