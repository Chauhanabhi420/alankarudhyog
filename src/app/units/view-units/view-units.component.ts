import { Component, OnInit } from '@angular/core';
import { UnitsService } from 'src/app/Services/units.service';
import { HeaderComponent } from 'src/app/dashboard/header/header.component';
import { UpdateUnitComponent } from '../update-unit/update-unit.component';

@Component({
  selector: 'app-view-units',
  templateUrl: './view-units.component.html',
  styleUrls: ['./view-units.component.css']
})
export class ViewUnitsComponent implements OnInit {


  collection:any;
  count = 0;

  constructor(private viewUnitService:UnitsService, private hc:HeaderComponent) { }

  ngOnInit(){
    this.viewUnitService.getUnits().subscribe((result)=> {
      // console.warn(result);
      this.collection = result
  })}

  public lcUpdateUnit(item){
    this.viewUnitService.tid = item;
    this.hc.LC = UpdateUnitComponent;
  }

}
