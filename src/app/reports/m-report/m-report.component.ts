import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { LedgerService } from 'src/app/services/ledger.service';

@Component({
  selector: 'app-m-report',
  templateUrl: './m-report.component.html',
  styleUrls: ['./m-report.component.css']
})
export class MReportComponent implements OnInit {

  mReportForm: FormGroup;
  partyDetailsList: any = [];
  partyNameList: any = [];
  vehicleNameList: any = [];
  productNameList: any = [];

  tdate = new Date;

  constructor(
    private rf: FormBuilder,
    private productName: ProductService,
    private ledgerName: LedgerService,
  ) {
    this.loadPartyName();
    this.loadVehicleName();
    this.loadProductName();
  }

  //loading party names in partyList dropdown on component loading
  loadPartyName() {
    this.ledgerName.getPartyName().subscribe((data: any) => {
      this.partyNameList = data;
    })
  }

  //loading vehicle names in vehicleList dropdown on component loading
  loadVehicleName() {
    this.ledgerName.getVehicleName().subscribe((data: any) => {
      this.vehicleNameList = data;
    })
  }

  //loading product names in productList dropdown on component loading
  loadProductName() {
    this.productName.getProductName().subscribe((data) => {
      this.productNameList = data;
    })
  }

  ngOnInit(): void {
    this.mReportForm = this.rf.group({
      partyList: [''],
      vehicleList: [''],
      productList: ['hello'],
      startDate: [''],
      endDate: ['']
    })
  }

}
