import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddChallanComponent } from './add-challan/add-challan.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewChallanComponent } from './view-challan/view-challan.component';
import { UpdateChallanComponent } from './update-challan/update-challan.component'
import {DashboardModule} from '../dashboard/dashboard.module';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';




@NgModule({
  declarations: [AddChallanComponent, ViewChallanComponent, UpdateChallanComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
  ],
  exports:[
    AddChallanComponent,
    ViewChallanComponent
  ]
})
export class ChallanModule { }
