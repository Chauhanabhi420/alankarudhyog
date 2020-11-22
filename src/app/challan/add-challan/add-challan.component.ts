import { Component, OnInit } from '@angular/core';
import {ChallanService} from '../../services/challan.service';
import { ProductService } from '../../services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UnitsService } from 'src/app/Services/units.service';
import { LedgerService } from 'src/app/services/ledger.service';


@Component({
  selector: 'app-add-challan',
  templateUrl: './add-challan.component.html',
  styleUrls: ['./add-challan.component.css']
})
export class AddChallanComponent implements OnInit {

  alert: boolean = false
  partyDetailsList:any =[];
  unitNameList:any = [];
  partyNameList:any = [];
  vehicleNameList:any = [];
  productNameList:any = [];
  

  addChallan = new FormGroup({
    challan_no: new FormControl(''),
    challan_date: new FormControl(''),
    challan_time: new FormControl(''),
    unit: new FormControl(''),
    selectParty: new FormControl(''),
    party_name: new FormControl(''),
    party_address: new FormControl({ value: '', disabled: true }),
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


  constructor(
    private addChallanService:ChallanService, 
    private productName: ProductService,
    private unitName: UnitsService,
    private ledgerName: LedgerService
    ) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 15000);
    this.maxDate.setDate(this.maxDate.getDate());
  }

  getValues() {
    // console.warn(this.addChallan.value);
    this.addChallanService.saveChallan(this.addChallan.value).subscribe((result)=>{
      console.warn(result);
      this.alert=true
    })
    
    this.addChallan.reset({})
  }

  loadUnitName() {
    this.unitName.getUnitName().subscribe((data:any) => {
      this.unitNameList = data;
    })
  }
  
  loadPartyName() {
    this.ledgerName.getPartyName().subscribe((data:any) => {
      this.partyNameList = data;
    })
  }

  loadVehicleName() {
    this.ledgerName.getVehicleName().subscribe((data:any) => {
      this.vehicleNameList = data;
    })
  }

  loadPartyDetails(id) {
    this.ledgerName.getPartyDetails(id).subscribe((data:any) => {
      this.partyDetailsList = data;
    })
  }

  loadProductName() {
    this.productName.getProductName().subscribe((data:any) => {
      this.productNameList = data;
    })
  }

  closeAlert()
  {
    this.alert=false
  }

  partyCall(val:Int16Array) {
      this.loadPartyDetails(val);
  }

  ngOnInit(): void {
    this.loadProductName();
    this.loadPartyName();
    this.loadVehicleName();
    this.loadUnitName();
  }

}
