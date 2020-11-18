import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { AddChallanComponent } from 'src/app/challan/add-challan/add-challan.component';
import { DCardComponent } from '../d-card/d-card.component';
import { ViewChallanComponent } from 'src/app/challan/view-challan/view-challan.component';
import { ActivatedRoute } from '@angular/router'
import { AddProductComponent } from 'src/app/product/add-product/add-product.component';
import { ViewProductComponent } from 'src/app/product/view-product/view-product.component';
import { AddLedgerComponent } from 'src/app/ledger/add-ledger/add-ledger.component';
import { ViewLedgerComponent } from 'src/app/ledger/view-ledger/view-ledger.component';

import { Router } from '@angular/router'; //importing Router
import { AuthenticationService } from 'src/app/services'; //importing Authentication Service
import { AddUserComponent } from 'src/app/user/add-user/add-user.component';
import { AddUnitsComponent } from 'src/app/units/add-units/add-units.component';
import { ViewUserComponent } from 'src/app/user/view-user/view-user.component';
import { ViewUnitsComponent } from 'src/app/units/view-units/view-units.component';
import { AddReceiptComponent } from 'src/app/receipt/add-receipt/add-receipt.component';
import { ViewReceiptComponent } from 'src/app/receipt/view-receipt/view-receipt.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showMaster: Boolean = false;
  public showChallan: Boolean = false;
  public showLSM: Boolean = false;
  public showPSM: Boolean = false;
  public showUSM: Boolean = false;
  public showTSM: Boolean = false;
  public showRSM: Boolean = false;

  LC: any;
  currentUser: any;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.LC = DCardComponent;
  }

  //Logout function
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  lcDCard() {
    this.LC = DCardComponent;
  }

  lcAddChallan() {
    this.LC = AddChallanComponent;
  }

  lcViewChallan() {
    this.LC = ViewChallanComponent;
  }

  lcAddProduct() {
    this.LC = AddProductComponent;
  }

  lcViewProduct() {
    this.LC = ViewProductComponent;
  }

  lcAddLedger() {
    this.LC = AddLedgerComponent;
  }

  lcViewLedger() {
    this.LC = ViewLedgerComponent;
  }

  lcAddUser() {
    this.LC = AddUserComponent;
  }

  lcViewUser() {
    this.LC = ViewUserComponent;
  }

  lcAddUnit() {
    this.LC = AddUnitsComponent;
  }

  lcViewUnit() {
    this.LC = ViewUnitsComponent;
  }

  lcAddReceipt() {
    this.LC = AddReceiptComponent;
  }

  lcViewReceipt() {
    this.LC = ViewReceiptComponent;
  }

  toggleMSM() {
    this.showMaster = !this.showMaster;
    if (this.showChallan)
      this.showChallan = !this.showChallan;
    if (this.showRSM)
      this.showRSM = !this.showRSM;

  }

  toggleCSM() {
    this.showChallan = !this.showChallan;
    if (this.showPSM)
      this.showPSM = !this.showPSM;
    if (this.showLSM)
      this.showLSM = !this.showLSM;
    if (this.showMaster)
      this.showMaster = !this.showMaster;
    if (this.showUSM)
      this.showUSM = !this.showUSM;
    if (this.showTSM)
      this.showTSM = !this.showTSM;
    if (this.showRSM)
      this.showRSM = !this.showRSM;

  }

  toggleLSM() {
    this.showLSM = !this.showLSM;
    if (this.showPSM)
      this.showPSM = !this.showPSM;
    if (this.showUSM)
      this.showUSM = !this.showUSM;
    if (this.showTSM)
      this.showTSM = !this.showTSM;
  }

  togglePSM() {
    this.showPSM = !this.showPSM;
    if (this.showLSM)
      this.showLSM = !this.showLSM;
    if (this.showUSM)
      this.showUSM = !this.showUSM;
    if (this.showTSM)
      this.showTSM = !this.showTSM;
  }

  toggleUSM() {
    this.showUSM = !this.showUSM;
    if (this.showLSM)
      this.showLSM = !this.showLSM;
    if (this.showPSM)
      this.showPSM = !this.showPSM;
    if (this.showTSM)
      this.showTSM = !this.showTSM;
  }

  toggleTSM() {
    this.showTSM = !this.showTSM;
    if (this.showLSM)
      this.showLSM = !this.showLSM;
    if (this.showPSM)
      this.showPSM = !this.showPSM;
    if (this.showUSM)
      this.showUSM = !this.showUSM;
  }

  toggleRSM() {
    this.showRSM = !this.showRSM;

    if (this.showLSM)
      this.showLSM = !this.showLSM;
    if (this.showPSM)
      this.showPSM = !this.showPSM;
    if (this.showUSM)
      this.showUSM = !this.showUSM;
    if (this.showTSM)
      this.showTSM = !this.showTSM;
    if (this.showMaster)
      this.showMaster = !this.showMaster;
    if (this.showChallan)
      this.showChallan = !this.showChallan;
  }
}

