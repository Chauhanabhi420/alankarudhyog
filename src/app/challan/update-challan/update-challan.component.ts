import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChallanService } from 'src/app/services/challan.service';

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
  
  constructor(private editChallanService:ChallanService) { 
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
        challan_no: new FormControl(result['challan_no']),
        challan_date: new FormControl(result['challan_date']),
        challan_time: new FormControl(result['challan_time']),
        unit: new FormControl(result['unit']),
        selectParty: new FormControl(result['selectParty']),
        party_name: new FormControl(result['party_name']),
        party_address: new FormControl(result['party_address']),
        party_mobile: new FormControl(result['party_mobile']),
        party_name_hindi: new FormControl(result['party_name_hindi']),
        party_address_hindi: new FormControl(result['party_address_hindi']),
        vehicleInfo: new FormControl(result['vehicleInfo']),
        driver_name: new FormControl(result['driver_name']),
        driver_mobile: new FormControl(result['driver_mobile']),
        productInfo: new FormControl(result['productInfo']),
        qty: new FormControl(result['qty']),
        rate: new FormControl(result['rate']),
        total_amount: new FormControl(result['total_amount']),
        paymentMethod: new FormControl(result['paymentMethod']),
        advance_amount: new FormControl(result['advance_amount']),
        balance_sheet: new FormControl(result['balance_sheet']),
        remark: new FormControl(result['remark']),
        ravana_number: new FormControl(result['ravana_number']),
        Weight: new FormControl(result['Weight']),
        Royalty_amount: new FormControl(result['Royalty_amount'])
      })
    })
    this.id = this.editChallanService.cid;
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
