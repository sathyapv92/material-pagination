import { Component, ViewChild } from '@angular/core';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'app';

   json2csv = require('json2csv');
 fields = ['field1', 'field2', 'field3'];
 //result = this.json2csv({ data: myData, fields: this.fields });

//  downloadExcel() {

//   const type = 'application/vnd.ms-excel';
//   const filename = 'file.xls';
//   const options = new RequestOptions({
//             responseType: ResponseContentType.Blob,
//             headers: new Headers({ 'Accept': type })
//         });

//   this.http.get('http://10.2.2.109/Download/exportExcel', options)
//            .catch(errorResponse => Observable.throw(errorResponse.json()))
//            .map((response) => { 
//                  if (response instanceof Response) {
//                     return response.blob();
//                  }
//                  return response;
//             })
//            .subscribe(data => saveAs(data, filename),
//                       error => console.log(error)); // implement your error handling here

// }




// exportInternalOrder(body) {
//     let user_token: string = this.sessionService.getToken();
//     let headers = new Headers();
//     headers.append('Authorization', 'Bearer ' + user_token);
//     return this.http.post(this.config.exportInternalOrder, body,{
//         headers: headers,
//         responseType: ResponseContentType.Blob}).map(res => new Blob([res.blob()],{ type: 'application/vnd.ms-excel' }));
// }
displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];