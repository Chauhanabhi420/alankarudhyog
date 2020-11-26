import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //importing Router
import { AuthenticationService } from 'src/app/services'; //importing Authentication Service

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
  public showRpSM: Boolean = false;

  currentUser: any;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  //Logout function
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  //toggle manage master button
  toggleMSM() {
    this.showMaster = !this.showMaster;
    if (this.showChallan)
      this.showChallan = !this.showChallan;
    if (this.showRSM)
      this.showRSM = !this.showRSM;
      if (this.showRpSM)
      this.showRpSM = !this.showRpSM;

  }

  //toggle challan button
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
      if (this.showRpSM)
      this.showRpSM = !this.showRpSM;

  }

  //toggle ledger button
  toggleLSM() {
    this.showLSM = !this.showLSM;
    if (this.showPSM)
      this.showPSM = !this.showPSM;
    if (this.showUSM)
      this.showUSM = !this.showUSM;
    if (this.showTSM)
      this.showTSM = !this.showTSM;
  }

  //toggle product button
  togglePSM() {
    this.showPSM = !this.showPSM;
    if (this.showLSM)
      this.showLSM = !this.showLSM;
    if (this.showUSM)
      this.showUSM = !this.showUSM;
    if (this.showTSM)
      this.showTSM = !this.showTSM;
  }

  //toggle user button
  toggleUSM() {
    this.showUSM = !this.showUSM;
    if (this.showLSM)
      this.showLSM = !this.showLSM;
    if (this.showPSM)
      this.showPSM = !this.showPSM;
    if (this.showTSM)
      this.showTSM = !this.showTSM;
  }

  //toggle unit button
  toggleTSM() {
    this.showTSM = !this.showTSM;
    if (this.showLSM)
      this.showLSM = !this.showLSM;
    if (this.showPSM)
      this.showPSM = !this.showPSM;
    if (this.showUSM)
      this.showUSM = !this.showUSM;
  }

  //toggle receipt button
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
      if (this.showRpSM)
      this.showRpSM = !this.showRpSM;
  }

  toggleRpSM() {
    this.showRpSM = !this.showRpSM;
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
      if (this.showChallan)
      this.showChallan = !this.showChallan;

  }
}

