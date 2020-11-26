import { Component, OnInit } from '@angular/core';
import { ChallanService } from 'src/app/services/challan.service';

@Component({
  selector: 'app-mtable',
  templateUrl: './mtable.component.html',
  styleUrls: ['./mtable.component.css']
})
export class MtableComponent implements OnInit {

  collection:any = [];
  c_voucher_no:any;
  com_name:any;
  c_partyname:any;
  ledger_name:any;
  p_name:any;
  user_company_address:any;
  c_payment_type:any;
  c_date:any;
  c_time:any;
  p:number =1;

  constructor(private viewChallanService : ChallanService) { }

  ngOnInit(): void {
    this.viewChallanService.getChallan().subscribe((result)=> {
      console.warn(result);
      this.collection = result;
    })
  }

}
