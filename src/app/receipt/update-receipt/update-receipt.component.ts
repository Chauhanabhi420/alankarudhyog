import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ReceiptService } from 'src/app/Services/receipt.service';

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
  
  constructor(private editReceiptService:ReceiptService) { 
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 15000);
    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit(): void {
    // console.warn(this.router.snapshot.params.id)
    this.editReceiptService.getCurrentReceipt().subscribe((result)=>{
       console.warn(result)
      this.editReceipt = new FormGroup({
        receipt_no: new FormControl(result['receipt_no']),
        receipt_date: new FormControl(result['receipt_date']),
        paymode: new FormControl(result['paymode']),
        party: new FormControl(result['party']),
        party_address: new FormControl(result['party_address']),
        party_mobile: new FormControl(result['party_mobile']),
        amount: new FormControl(result['amount']),
        remark: new FormControl(result['remark'])
      
      })
    })
    this.id = this.editReceiptService.rid;
  }

  updateReceipt(){
    // console.warn("item", this.editChallan.value)
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
