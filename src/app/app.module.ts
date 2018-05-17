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
import { AddressComponent } from './address/address.component';
import { NumberinputDirective } from './numberinput.directive';
import { PostComponent } from './post/post.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TesComponent } from './tes/tes.component';
import { TsetComponent } from './tset/tset.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { DtpaginationComponent } from './dtpagination/dtpagination.component';
import { InfinitescrollComponent } from './infinitescroll/infinitescroll.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
@NgModule({
  declarations: [
    AppComponent,
    DealEntryComponent,
    BlotterComponent,
    DComponent,
    DialogOverviewExampleDialog,
    AddressComponent,
    NumberinputDirective,
    PostComponent,
    TesComponent,
    TsetComponent,
    DtpaginationComponent,
    InfinitescrollComponent,
  
    
   
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InfiniteScrollModule ,
    ReactiveFormsModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"dealentry",
        component:DealEntryComponent
      },
       {
         path:"InfinitescrollComponent",
         component:InfinitescrollComponent
       },
     ],{ enableTracing: true }),RouterModule.forChild([{
      path: 'eal',
      component: DealEntryComponent,
    
      children: [
        
        {path: 'tracks', component: TsetComponent},
        {path: 'albums', component: BlotterComponent},
      ]
    }]),
    AgGridModule.withComponents(
      [])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
