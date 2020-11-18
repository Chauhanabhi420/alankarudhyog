import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { HeaderComponent } from 'src/app/dashboard/header/header.component';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  collection:any;
  count = 0;

  constructor(private viewUserService:UsersService, private hc:HeaderComponent) { }

  ngOnInit(){
    this.viewUserService.getUsers().subscribe((result)=> {
      // console.warn(result);
      this.collection = result
  })}

  public lcUpdateUser(item){
    this.viewUserService.uid = item;
    this.hc.LC = UpdateUserComponent;
  }

}
