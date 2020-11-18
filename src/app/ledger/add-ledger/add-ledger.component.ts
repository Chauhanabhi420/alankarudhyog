import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { LedgerService } from 'src/app/services/ledger.service';

@Component({
  selector: 'app-add-ledger',
  templateUrl: './add-ledger.component.html',
  styleUrls: ['./add-ledger.component.css']
})
export class AddLedgerComponent implements OnInit {

  alert: boolean = false
  addLedger = new FormGroup({
    add_photo: new FormControl(''),
    ledger_name: new FormControl(''),
    ledger_type: new FormControl(''),
    address_1: new FormControl(''),
    address_2: new FormControl(''),
    driver_name: new FormControl(''),
    mobile: new FormControl(''),
    gstin: new FormControl(''),


  });

  constructor(private ledgerService:LedgerService) { }
   getValues() {
    //  console.warn(this.addLedger.value);
    this.ledgerService.saveLedger(this.addLedger.value).subscribe((result)=>{
      this.alert=true
    })

    this.addLedger.reset({})
  }
  closeAlert()
  {
    this.alert=false
  }

  ngOnInit(): void {
  }

}
