import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewChecked } from '@angular/core';

@Component({
  selector: 'dtpagination',
  templateUrl: './dtpagination.component.html',
  styleUrls: ['./dtpagination.component.css']
})
export class DtpaginationComponent implements OnInit , AfterViewChecked {
  ngAfterViewChecked(): void {
   this.$('#example').dataTable();
  }
    jquery: any;
   $: any;
  constructor() { }
    
  @ViewChild('example') example;
  ngOnInit() {


// this.example.DataTable( {
//   "pagingType": "full_numbers"
// } );
}
}