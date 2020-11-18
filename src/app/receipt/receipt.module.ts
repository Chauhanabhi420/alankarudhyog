import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReceiptComponent } from './add-receipt/add-receipt.component';
import { ViewReceiptComponent } from './view-receipt/view-receipt.component';
import { UpdateReceiptComponent } from './update-receipt/update-receipt.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [AddReceiptComponent, ViewReceiptComponent, UpdateReceiptComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],
  exports:[
    AddReceiptComponent,
    ViewReceiptComponent,
    UpdateReceiptComponent
  ]
})
export class ReceiptModule { }
