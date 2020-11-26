import { Component, OnInit } from '@angular/core';
import { LedgerService } from 'src/app/services/ledger.service';
import { HeaderComponent } from 'src/app/dashboard/header/header.component';
import { UpdateLedgerComponent } from '../update-ledger/update-ledger.component';

@Component({
  selector: 'app-view-ledger',
  templateUrl: './view-ledger.component.html',
  styleUrls: ['./view-ledger.component.css']
})
export class ViewLedgerComponent implements OnInit {

  collection:any;
  count = 0;

  constructor(private viewLedgerService:LedgerService) { }

  ngOnInit(){
    this.viewLedgerService.getLedger().subscribe((result)=> {
      // console.warn(result);
      this.collection = result
  })}

  public lcUpdateLedger(item){
    this.viewLedgerService.lid= item;    
  }

}
