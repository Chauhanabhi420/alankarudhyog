import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChallanModule } from './challan/challan.module';
import {ProductModule} from './product/product.module';
import { LedgerModule } from './ledger/ledger.module';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './admin/helper/fakeBackend';
import { ReactiveFormsModule } from '@angular/forms';


// import { LoginComponent } from './login/login.component';
import { JwtInterceptor, ErrorInterceptor } from './admin/helper';

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AdminModule } from './admin/admin.module';
import { UnitsModule } from './units/units.module';
import { UserModule } from './user/user.module';
import { ReceiptModule } from './receipt/receipt.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ChallanModule,
    ProductModule,
    LedgerModule,
    AdminModule,
    UnitsModule,
    UserModule,
    ReceiptModule,
    BrowserAnimationsModule,
    NgbModule,
    MDBBootstrapModule,
    AdminModule,
    NgIdleKeepaliveModule.forRoot(),
    MomentModule,
    ModalModule,
    HttpClientModule
  ],
  providers: [BsModalService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
