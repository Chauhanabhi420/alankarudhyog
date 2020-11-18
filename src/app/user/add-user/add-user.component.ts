import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  alert: boolean = false
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
      getValues() {
        // console.warn(this.addUsers.value);
       this.userService.saveUsers(this.addUsers.value).subscribe((result)=>{
         this.alert=true
       })
   
       this.addUsers.reset({})
     }
     closeAlert()
     {
       this.alert=false
     }
   

  ngOnInit(): void {
  }

}
