import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChallanService } from 'src/app/services/challan.service';
import { UnitsService } from 'src/app/Services/units.service';
import { LedgerService } from 'src/app/services/ledger.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update-challan',
  templateUrl: './update-challan.component.html',
  styleUrls: ['./update-challan.component.css']
})
export class UpdateChallanComponent implements OnInit {

  alert:boolean=false
  id:any;

  editChallan = new FormGroup({
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
  
  unitNameList:any = [];
  partyNameList:any = [];
  vehicleNameList:any = [];
  productNameList:any = [];
  partyDetailsList:any =[];

  constructor(
    private editChallanService:ChallanService,
    private productName: ProductService,
    private unitName: UnitsService,
    private ledgerName: LedgerService
    ) { 
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 15000);
    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit(): void {
    // console.warn(this.router.snapshot.params.id)
    this.editChallanService.getCurrentChallan().subscribe((result)=>{
       console.warn(result)
      this.editChallan = new FormGroup({
        challan_no: new FormControl(result['c_voucher_no']),
        challan_date: new FormControl(result['c_date']),
        challan_time: new FormControl(result['c_time']),
        unit: new FormControl(result['c_company_id']),
        selectParty: new FormControl(result['c_party_id']),
        party_name: new FormControl(result['c_partyname']),
        party_address: new FormControl(result['c_partyaddress']),
        party_mobile: new FormControl(result['c_partymobile']),
        party_name_hindi: new FormControl(result['c_partyname_hindi']),
        party_address_hindi: new FormControl(result['c_partyaddress_hindi']),
        vehicleInfo: new FormControl(result['vehicleInfo']),
        driver_name: new FormControl(result['c_driver_name']),
        driver_mobile: new FormControl(result['c_driver_mobile']),
        productInfo: new FormControl(result['c_product_id']),
        qty: new FormControl(result['c_qty']),
        rate: new FormControl(result['c_rate']),
        total_amount: new FormControl(result['c_total_amt']),
        paymentMethod: new FormControl(result['c_payment_type']),
        advance_amount: new FormControl(result['c_advance_amt']),
        balance_sheet: new FormControl(result['c_balance_amt']),
        remark: new FormControl(result['c_remark']),
        ravana_number: new FormControl(result['c_ravana_no']),
        Weight: new FormControl(result['c_weight']),
        Royalty_amount: new FormControl(result['c_royalty_amt'])
      })
      // this.partyCall(result['c_party_id']);
    })
    this.id = this.editChallanService.cid;
    this.loadProductName();
    this.loadPartyName();
    this.loadVehicleName();
    this.loadUnitName();
  }

  partyCall(val:Int16Array) {
    this.loadPartyDetails(val);
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

  updateChallan(){
    // console.warn("item", this.editChallan.value)
    this.editChallanService.updateChallan(this.id, this.editChallan.value).subscribe((result)=>{
      this.alert=true
    })

    this.editChallan.reset({})
  }

  closeAlert()
  {
    this.alert=false
  }

}
