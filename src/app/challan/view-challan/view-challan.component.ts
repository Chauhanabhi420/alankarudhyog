import { Component, OnInit } from '@angular/core';
import {ChallanService} from '../../services/challan.service';

@Component({
  selector: 'app-view-challan',
  templateUrl: './view-challan.component.html',
  styleUrls: ['./view-challan.component.css']
})
export class ViewChallanComponent implements OnInit {

  c_voucher_no:any;
  com_name:any;
  c_partyname:any;
  ledger_name:any;
  p_name:any;
  user_company_address:any;
  c_payment_type:any;
  c_date:any;
  c_time:any;
  
  collection:any=[];
  productNames:any = [];
  name:any;
  key:string = 'id';
  reverse:boolean = false;
  p:number =1;

  constructor(
    private viewChallanService:ChallanService
  ) { }

  ngOnInit(){
    this.viewChallanService.getChallan().subscribe((result)=> {
      console.warn(result);
      this.collection = result;
    })
  }

  //Search function
  Search(){
    if (this.name == ""){
      this.ngOnInit();
    }else{
      this.collection = this.collection.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  //Sorting Function
  sort(key){
    this.key = key;
    this.reverse =!this.reverse;
  }

  public lcUpdateChallan(item){
    this.viewChallanService.cid = item;
  }

}
