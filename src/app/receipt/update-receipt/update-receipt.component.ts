import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ReceiptService } from 'src/app/Services/receipt.service';
import { LedgerService } from 'src/app/services/ledger.service';

@Component({
  selector: 'app-update-receipt',
  templateUrl: './update-receipt.component.html',
  styleUrls: ['./update-receipt.component.css']
})
export class UpdateReceiptComponent implements OnInit {

  alert:boolean=false
  id:any;

  editReceipt = new FormGroup({
    receipt_no: new FormControl(''),
    receipt_date: new FormControl(''),
    paymode: new FormControl(''),
    party: new FormControl(''),
    party_address: new FormControl(''),
    party_mobile: new FormControl(''),
    amount: new FormControl(''),
    remark: new FormControl(''),

  });

  valuedate = new Date();

  minDate: Date;
  maxDate: Date;

  partyNameList:any = [];
  partyDetailsList:any = [];
  
  constructor(
    private editReceiptService:ReceiptService,
    private partyName: LedgerService
    ) { 
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 15000);
    this.maxDate.setDate(this.maxDate.getDate());
  }

  loadPartyName() {
    this.partyName.getPartyName().subscribe((data:any) => {
      this.partyNameList = data;
    })
  }

  loadPartyDetails(id) {
    this.partyName.getPartyDetails(id).subscribe((data:any) => {
      this.partyDetailsList = data;
    })
  }

  ngOnInit(): void {
    // console.warn(this.router.snapshot.params.id)
    this.editReceiptService.getCurrentReceipt().subscribe((result)=>{
      // console.warn(result);
      this.editReceipt = new FormGroup({
        receipt_no: new FormControl(result['r_voucher_no']),
        receipt_date: new FormControl(result['r_date']),
        paymode: new FormControl(result['r_payment_id']),
        party: new FormControl(result['r_party_id']),
        party_address: new FormControl(result['ledger[ledger_address_line1]']),
        party_mobile: new FormControl(result['ledger[ledger_mobile]']),
        amount: new FormControl(result['r_amount']),
        remark: new FormControl(result['r_remark'])
      })
      this.partyCalling(result['r_party_id']);
    })
    this.id = this.editReceiptService.rid;
    this.loadPartyName();
  }

  partyCalling(val:Int16Array) {
    this.loadPartyDetails(val);
  }

  updateReceipt(){
    // console.warn("item", this.editReceipt.value)
    this.editReceiptService.updateReceipt(this.id, this.editReceipt.value).subscribe((result)=>{
      this.alert=true
    })

    this.editReceipt.reset({})
  }

  closeAlert()
  {
    this.alert=false
  }
}
