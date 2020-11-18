import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { LedgerService } from 'src/app/services/ledger.service';

@Component({
  selector: 'app-update-ledger',
  templateUrl: './update-ledger.component.html',
  styleUrls: ['./update-ledger.component.css']
})
export class UpdateLedgerComponent implements OnInit {

  alert: boolean = false
  id :any;

  updateLedger = new FormGroup({
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
  ngOnInit(): void {
    // console.warn(this.router.snapshot.params.id)
    this.ledgerService.getCurrentLedger().subscribe((result) => {
      console.warn(result)
      this.updateLedger = new FormGroup({
        add_photo: new FormControl(result['add_photo']),
        ledger_name: new FormControl(result['ledger_name']),
        ledger_type: new FormControl(result['ledger_type']),
        address_1: new FormControl(result['address_1']),
        address_2: new FormControl(result['address_2']),
        driver_name: new FormControl(result['driver_name']),
        mobile: new FormControl(result['mobile']),
        gstin: new FormControl(result['gstin'])
      })
    })
    this.id = this.ledgerService.lid;
  }


  getValues() {
    // console.warn("item", this.updateProduct.value)
    this.ledgerService.updateLedger(this.id, this.updateLedger.value).subscribe((result) => {
      this.alert = true
    })

    this.updateLedger.reset({})
  }

  closeAlert() {
    this.alert = false
  }

}
