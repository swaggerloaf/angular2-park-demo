import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootAppComponent }   from './app.component';

// @NgModule decorator defines the metadata
@NgModule({
  // import single helper module
  imports:      [ BrowserModule ],
  // identify the apps root component, top of the component tree
  declarations: [ RootAppComponent ],
  bootstrap:    [ RootAppComponent ]
})

// export our root module
export class RootAppModule { }
