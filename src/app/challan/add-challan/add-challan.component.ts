import { Component, OnInit } from '@angular/core';
import {ChallanService} from '../../services/challan.service'
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-challan',
  templateUrl: './add-challan.component.html',
  styleUrls: ['./add-challan.component.css']
})
export class AddChallanComponent implements OnInit {

  alert: boolean = false

  addChallan = new FormGroup({
    challan_no: new FormControl(''),
    challan_date: new FormControl(''),
    challan_time: new FormControl(''),
    unit: new FormControl(''),
    selectParty: new FormControl(''),
    party_name: new FormControl(''),
    party_address: new FormControl(''),
    party_mobile: new FormControl(''),
    party_name_hindi: new FormControl(''),
    party_address_hindi: new FormControl(''),
    vehicleInfo: new FormControl(''),
    driver_name: new FormControl(''),
    driver_mobile: new FormControl(''),
    productInfo: new FormControl(''),
    qty: new FormControl(''),
    rate: new FormControl(''),
    total_amount: new FormControl(''),
    paymentMethod: new FormControl(''),
    advance_amount: new FormControl(''),
    balance_sheet: new FormControl(''),
    remark: new FormControl(''),
    ravana_number: new FormControl(''),
    Weight: new FormControl(''),
    Royalty_amount: new FormControl('')
  })

  valuedate = new Date();

  minDate: Date;
  maxDate: Date;

  constructor(private addChallanService:ChallanService) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 15000);
    this.maxDate.setDate(this.maxDate.getDate());
  }

  getValues() {
    // console.warn(this.addChallan.value);
    this.addChallanService.saveChallan(this.addChallan.value).subscribe((result)=>{
      this.alert=true
    })

    this.addChallan.reset({})
  }

  closeAlert()
  {
    this.alert=false
  }

  ngOnInit(): void {
  }

}
