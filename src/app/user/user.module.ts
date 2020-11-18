import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [AddUserComponent, ViewUserComponent, UpdateUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
