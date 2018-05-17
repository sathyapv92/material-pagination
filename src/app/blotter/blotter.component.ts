import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Customer } from './moal';

@Component({
  selector: 'app-blotter',
  templateUrl: './blotter.component.html',
  styleUrls: ['./blotter.component.css']
})
export class BlotterComponent implements OnInit {
  ngOnInit(): void {
    this.myForm = this._fb.group({
      name: ['', [Validators.required/*, Validators.pattern('^[a-zA-Z \-\']+')*/]],
      addresses: this._fb.array([])
  });
  
  // add address
  this.addAddress();
  }
  public myForm: FormGroup;
  private gridOptions: GridOptions;

  constructor(private _fb: FormBuilder) {
      this.gridOptions = <GridOptions>{};
      this.gridOptions.columnDefs = [
          {
              headerName: "Branch",
              field: "branch",
              width: 100
          
          },
          {
              headerName: "TransactionDate",
              field: "transactionDate",
              width: 180
          },
          {
            headerName: "CaterpillarId",
            field: "caterpillarId",
            width: 130
        
        },
        {
          headerName: "CaterPillarCode",
          field: "caterPillarCode",
          width: 140
      
      },
      {
        headerName: "Description",
        field: "description",
        width: 130
    
    },
    {
      headerName: "Action",
      field: "action",
      width: 100
  
  },
  {
    headerName: "Currency",
    field: "currency",
    width: 100

},

{
  headerName: "Current_Notier",
  field: "current_Notier",
  width: 150

},
{
  headerName: "Strip Cycle",
  field: "strip_cycle",
  width: 100

},
{
  headerName: "Next Review",
  field: "next_Review",
  width: 120

},
{
  headerName: "Tp Rate",
  field: "tpRate",
  width: 100

}


      ];
      this.gridOptions.rowData = [
          {branch: "PRI", transactionDate: "3 OCT 2016",caterpillarId :1234567, caterPillarCode :"IB DCC",description:"IB DCC",action:"New",currency:"USD",current_Notier:"1,73,0000",strip_cycle:"Monthly",next_Review:"3 Nov 2016",tpRate :"4.72%" },
          {branch: "PRI", transactionDate: "3 OCT 2016",caterpillarId :1234567, caterPillarCode :"IB DCC",description:"IB DCC",action:"New",currency:"USD",current_Notier:"1,73,0000",strip_cycle:"Monthly",next_Review:"3 Nov 2016",tpRate :"4.72%" },
          {branch: "PRI", transactionDate: "3 OCT 2016",caterpillarId :1234567, caterPillarCode :"IB DCC",description:"IB DCC",action:"New",currency:"USD",current_Notier:"1,73,0000",strip_cycle:"Monthly",next_Review:"3 Nov 2016",tpRate :"4.72%" },
          {branch: "PRI", transactionDate: "3 OCT 2016",caterpillarId :1234567, caterPillarCode :"IB DCC",description:"IB DCC",action:"New",currency:"USD",current_Notier:"1,73,0000",strip_cycle:"Monthly",next_Review:"3 Nov 2016",tpRate :"4.72%" }
      ]
  }


 


  initAddress() {
      return this._fb.group({
          street: ['', Validators.required],
          postcode: ['']
      });
  }

  addAddress() {
      const control = <FormArray>this.myForm.controls['addresses'];
      const addrCtrl = this.initAddress();
      
      control.push(addrCtrl);
      
      /* subscribe to individual address value changes */
      // addrCtrl.valueChanges.subscribe(x => {
      //   console.log(x);
      // })
  }

  removeAddress(i: number) {
      const control = <FormArray>this.myForm.controls['addresses'];
      control.removeAt(i);
  }

  save(model: Customer) {
      // call API to save
      // ...
      console.log(model);
  }
}
