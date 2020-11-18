import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUnitsComponent } from './add-units/add-units.component';
import { ViewUnitsComponent } from './view-units/view-units.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateUnitComponent } from './update-unit/update-unit.component';



@NgModule({
  declarations: [AddUnitsComponent, ViewUnitsComponent, UpdateUnitComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UnitsModule { }
