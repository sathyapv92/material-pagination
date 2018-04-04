import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DealEntryComponent } from './deal-entry/deal-entry.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BlotterComponent } from './blotter/blotter.component';
import {AgGridModule} from "ag-grid-angular/main";
import {MatDialogModule} from '@angular/material/dialog';
import { DComponent, DialogOverviewExampleDialog } from './d/d.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DealEntryComponent,
    BlotterComponent,
    DComponent,
    DialogOverviewExampleDialog,
   
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"dealentry",
        component:DealEntryComponent
      },
      {
      path:"",
      component:BlotterComponent
    }],{ enableTracing: true }),
    AgGridModule.withComponents(
      [])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
