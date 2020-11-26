import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MReportComponent } from './m-report/m-report.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MtableComponent } from './mtable/mtable.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MReportComponent, MtableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule
  ]
})
export class ReportsModule { }
