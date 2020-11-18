import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  alert: boolean = false;
  id:any;

  addUsers = new FormGroup({
    add_photo: new FormControl(''),
    user_name: new FormControl(''),
    company_name: new FormControl(''),
    company_address: new FormControl(''),
    user_login_id: new FormControl(''),
    user_email: new FormControl(''),
    password: new FormControl(''),
    repeat_password: new FormControl(''),


  });

      url;
      msg = "";
      
      selectFile(event) {
        if(!event.target.files[0] || event.target.files[0].length == 0) {
          this.msg = 'You must select an image';
          return;
        }
        
        var mimeType = event.target.files[0].type;
        
        if (mimeType.match(/image\/*/) == null) {
          this.msg = "Only images are supported";
          return;
        }
        
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        
        reader.onload = (_event) => {
          this.msg = "";
          this.url = reader.result; 
        }
      }

      constructor(private userService:UsersService) { }

  ngOnInit(): void {
    // console.warn(this.router.snapshot.params.id)
    this.userService.getCurrentUsers().subscribe((result) => {
      console.warn(result)
      this.addUsers = new FormGroup({
        add_photo: new FormControl(result['add_photo']),
        user_name: new FormControl(result['user_name']),
        company_name: new FormControl(result['company_name']),
        company_address: new FormControl(result['company_address']),
        user_login_id: new FormControl(result['user_login_id']),
        user_email: new FormControl(result['user_email']),
        password: new FormControl(result['password']),
        repeat_password: new FormControl(result['repeat_password'])
      })
    })
    this.id = this.userService.uid;
  }


  getValues() {
    // console.warn("item", this.updateProduct.value)
    this.userService.updateUsers(this.id, this.addUsers.value).subscribe((result) => {
      this.alert = true
    })

    this.addUsers.reset({})
  }

  closeAlert() {
    this.alert = false
  }

}
