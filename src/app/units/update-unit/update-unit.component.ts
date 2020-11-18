import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UnitsService } from 'src/app/Services/units.service';

@Component({
  selector: 'app-update-unit',
  templateUrl: './update-unit.component.html',
  styleUrls: ['./update-unit.component.css']
})
export class UpdateUnitComponent implements OnInit {

  alert: boolean = false;
  id:any;

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
    ifsc_code: new FormControl(''),

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
  
  constructor(private router: ActivatedRoute, private UnitService: UnitsService) { }

  ngOnInit(): void {
    // console.warn(this.router.snapshot.params.id)
    this.UnitService.getCurrentUnits().subscribe((result) => {
      console.warn(result)
      this.addUnits = new FormGroup({
        add_photo: new FormControl(result['add_photo']),
        user: new FormControl(result['user']),
        unit_name: new FormControl(result['unit_name']),
        address_1: new FormControl(result['address_1']),
        address_2: new FormControl(result['address_2']),
        address_3: new FormControl(result['address_3']),
        city: new FormControl(result['city']),
        State: new FormControl(result['State']),
        postcode: new FormControl(result['postcode']),
        contact_person: new FormControl(result['contact_person']),
        mobile_1: new FormControl(result['mobile_1']),
        mobile_2: new FormControl(result['mobile_2']),
        pan_no: new FormControl(result['pan_no']),
        gst: new FormControl(result['gst']),
        bank_name: new FormControl(result['bank_name']),
        branch_name: new FormControl(result['branch_name']),
        account_no: new FormControl(result['account_no']),
        ifsc_code: new FormControl(result['ifsc_code'])
      })
    })
    this.id = this.UnitService.tid;
  }


  getValues() {
    // console.warn("item", this.updateProduct.value)
    this.UnitService.updateUnits(this.id, this.addUnits.value).subscribe((result) => {
      this.alert = true
    })

    this.addUnits.reset({})
  }

  closeAlert() {
    this.alert = false
  }
}
