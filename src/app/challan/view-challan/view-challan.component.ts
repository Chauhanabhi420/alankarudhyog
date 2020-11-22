import { Component, OnInit } from '@angular/core';
import {ChallanService} from '../../services/challan.service';
import {ChallanDataFields} from 'src/ChallanDataFields';
import {MatTableDataSource} from '@angular/material/table'
import { UpdateChallanComponent } from '../update-challan/update-challan.component';
import {HeaderComponent} from '../../dashboard/header/header.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-view-challan',
  templateUrl: './view-challan.component.html',
  styleUrls: ['./view-challan.component.css']
})
export class ViewChallanComponent implements OnInit {

  collection:any=[];
  productNames:any = [];

  constructor(
    private viewChallanService:ChallanService, 
    private hc:HeaderComponent
  ) { }

  ngOnInit(){
    this.viewChallanService.getChallan().subscribe((result)=> {
      console.warn(result);
      this.collection = result;
    })
  }

  public lcUpdateChallan(item){
    this.viewChallanService.cid = item;
    this.hc.LC = UpdateChallanComponent;
  }

}
