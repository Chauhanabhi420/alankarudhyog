import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UnitsService } from 'src/app/Services/units.service';

@Component({
  selector: 'app-add-units',
  templateUrl: './add-units.component.html',
  styleUrls: ['./add-units.component.css']
})
export class AddUnitsComponent implements OnInit {

  alert: boolean = false;
  
  addUnits = new FormGroup({
    add_photo: new FormControl(''),
    user: new FormControl(''),
    unit_name: new FormControl(''),
    address_1: new FormControl(''),
    address_2: new FormControl(''),
    address_3: new FormControl(''),
    city: new FormControl(''),
    State: new FormControl(''),
    postcode: new FormControl(''),
    contact_person: new FormControl(''),
    mobile_1: new FormControl(''),
    mobile_2: new FormControl(''),
    pan_no: new FormControl(''),
    gst: new FormControl(''),
    bank_name: new FormControl(''),
    branch_name: new FormControl(''),
    account_no: new FormControl(''),
    ifsc_code: new FormControl('')
  });

  url;
  msg = "";

  selectFile(event) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
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

  constructor(private unitService : UnitsService) { }
  getValues() {
    // console.warn(this.addUnits.value);
    this.unitService.saveUnits(this.addUnits.value).subscribe((result)=>{
      this.alert=true
    })

    this.addUnits.reset({})
  }
  closeAlert() {
    this.alert = false
  }

  ngOnInit(): void {
  }

}
