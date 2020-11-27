import { Component, OnInit } from '@angular/core';
import {ChallanService} from '../../services/challan.service';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UnitsService } from 'src/app/Services/units.service';
import { LedgerService } from 'src/app/services/ledger.service';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';
import { ActivatedRoute, Router } from '@angular/router';
import { IchallanNo } from 'src/challanNo';
// import { PartyNames } from 'src/partyNames';


@Component({
  selector: 'app-add-challan',
  templateUrl: './add-challan.component.html',
  styleUrls: ['./add-challan.component.css']
})
export class AddChallanComponent implements OnInit {

  addChallan : FormGroup;
  alert: boolean = false
  partyDetailsList: any = [];
  unitNameList:any = [];
  partyNameList:any = [];
  vehicleNameList:any = [];
  productNameList:any = [];
  challanNum: IchallanNo[];

  valuedate = new Date();

  minDate: Date;
  maxDate: Date;
  // showDate = new Date();


  constructor(
    private fb: FormBuilder,
    private addChallanService:ChallanService, 
    private productName: ProductService,
    private unitName: UnitsService,
    private ledgerName: LedgerService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      this.valuedate.setDate(this.valuedate.getDate() - 1);
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 15000);
    this.maxDate.setDate(this.maxDate.getDate());
  }

  pakdoPartyDetailsKo(){
    this.addChallan.patchValue({
      party_name: this.partyDetailsList.ledger_name,
      party_address: this.partyDetailsList.ledger_address_line1,
      party_mobile: this.partyDetailsList.ledger_mobile
    })
  }
  totalAmt:number; //to store the total amount
  calBal : number; //to store the balance amount

  //function to calculate total amount
  calculateAmt(){
    this.totalAmt = this.addChallan.controls.qty.value * this.addChallan.controls.rate.value;
    this.addChallan.patchValue({
      total_amount: this.totalAmt
    })
  }

  //Function to calculate balance amount
  calculateBal(){
    this.calBal = this.addChallan.controls.total_amount.value - this.addChallan.controls.advance_amount.value;
    this.addChallan.patchValue({
      balance_sheet: this.calBal
    })
  }

  //submit function to save the data into database
  getValues() {
    this.pakdoPartyDetailsKo();
     console.warn(this.addChallan.value);
    this.addChallanService.saveChallan(this.addChallan.value).subscribe((result)=>{
      // console.warn(result);
      this.alert=true;
    
    })
    
    this.addChallan.reset({})
    this.addChallan.controls.challan_date.patchValue(this.formatDate(new Date()));
    this.addChallan.controls.challan_time.patchValue(this.formattime(new Date()));

    this.addChallanService.getChallanNo().subscribe((result: IchallanNo[])=> {
      this.challanNum = result
      if(this.challanNum != null && this.challanNum != undefined) {
        this.challanNum.forEach((challanNo) =>{
          this.challanNo = challanNo.c_voucher_no;
        })
        this.addChallan.patchValue({
          challan_no: Number(this.challanNo)+1
        })
      } else {
        this.addChallan.patchValue({
          challan_no: '1001'
        })
      }
    })
  }

  private formatDate(date) {
    // const d = new Date(date);
    const d = this.valuedate;
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [day, month, year].join("-");
  }
  private formattime(date) {
    const t = new Date(date);
    let hour = "" + (t.getHours() );
    let minutes = "" + t.getMinutes();
    const seconds = t.getSeconds();
    if (hour.length < 2) hour = "0" + hour;
    if (minutes.length < 2) minutes = "0" + minutes;
    return [hour, minutes].join(":");
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
    this.ledgerName.getPartyDetails(id).subscribe((data: any) => {
      this.partyDetailsList = data;
      // this.addChallan.valueChanges.subscribe()
      console.log(this.partyDetailsList);
    })
  }

  loadProductName() {
    this.productName.getProductName().subscribe((data) => {
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

  challanNo:string;
  
  ngOnInit(): void {  

    this.addChallanService.getChallanNo().subscribe((result: IchallanNo[])=> {
      this.challanNum = result
      if(this.challanNum != null && this.challanNum != undefined) {
        this.challanNum.forEach((challanNo) =>{
          this.challanNo = challanNo.c_voucher_no;
        })
        this.addChallan.patchValue({
          challan_no: Number(this.challanNo)+1
        })
      } else {
        this.addChallan.patchValue({
          challan_no: '1001'
        })
      }
    })

    this.addChallan = this.fb.group({
      challan_no: ['',Validators.required],
      challan_date: ['',Validators.required],
      challan_time: [''],
      unit: ['',Validators.required],
      selectParty: ['',Validators.required],
      party_name: [''],
      party_address: [''],
      party_mobile: [''],
      party_name_hindi: [''],
      party_address_hindi: [''],
      vehicleInfo: ['',Validators.required],
      driver_name: ['',Validators.required],
      driver_mobile: ['',[Validators.required,Validators.pattern('[0-9]*')]],
      productInfo: ['',Validators.required],
      qty: ['',[Validators.required,Validators.pattern('[0-9]*')]],
      rate: ['',[Validators.required,Validators.pattern('[0-9]*')]],
      total_amount: [''],
      paymentMethod: ['',Validators.required],
      advance_amount: ['',[Validators.required,Validators.pattern('[0-9]*')]],
      balance_sheet: [''],
      remark: [''],
      ravana_number: ['',Validators.required],
      Weight: ['',[Validators.required,Validators.pattern('[0-9]*')]],
      Royalty_amount: ['',[Validators.required,Validators.pattern('[0-9]*')]]
    })

    this.loadProductName();
    this.loadPartyName();
    this.loadVehicleName();
    this.loadUnitName();
    
    //triggers the calculate Amount function on quantity value change
    this.addChallan.controls.qty.valueChanges.subscribe(result=>{
      this.calculateAmt();
    })

    //triggers the calculate Amount function on rate value change
    this.addChallan.controls.rate.valueChanges.subscribe(result=>{
      this.calculateAmt();
    })

    //triggers the calculate Balance function on Advance amount value change
    this.addChallan.controls.advance_amount.valueChanges.subscribe(result=>{
      this.calculateBal();
    })

    // this.addChallan.patchValue({
    //   challan_date: this.formatDate(new Date()),
    //   challan_time: this.formattime(new Date())
    // })
   
    this.addChallan.controls.challan_date.patchValue(this.formatDate(new Date()));
    this.addChallan.controls.challan_time.patchValue(this.formattime(new Date()));
  }

  //fetching form control validators status
  get challan_no(){return this.addChallan.get('challan_no')};
  get challan_date(){return this.addChallan.get('challan_date')};
  get challan_time(){return this.addChallan.get('challan_time')};
  get unit(){return this.addChallan.get('unit')};
  get selectParty(){return this.addChallan.get('selectParty')};
  get vehicleInfo(){return this.addChallan.get('vehicleInfo')};
  get driver_name(){return this.addChallan.get('driver_name')};
  get driver_mobile(){return this.addChallan.get('driver_mobile')};
  get productInfo(){return this.addChallan.get('productInfo')};
  get qty(){return this.addChallan.get('qty')};
  get rate(){return this.addChallan.get('rate')};
  get paymentMethod(){return this.addChallan.get('paymentMethod')};
  get advance_amount(){return this.addChallan.get('advance_amount')};
  get ravana_number(){return this.addChallan.get('ravana_number')};
  get Weight(){return this.addChallan.get('Weight')};
  get Royalty_amount(){return this.addChallan.get('Royalty_amount')};
}
