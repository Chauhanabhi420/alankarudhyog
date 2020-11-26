import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './dashboard/header/header.component';
import { AddChallanComponent } from './challan/add-challan/add-challan.component';
import { UpdateChallanComponent } from './challan/update-challan/update-challan.component';
import { LoginComponent } from './admin/login/login.component';
import { AddLedgerComponent } from './ledger/add-ledger/add-ledger.component';
import { AddProductComponent } from './product/add-product/add-product.component';

//Importing AuthGuard;
import { AuthGuard } from './admin/helper';
import { ViewLedgerComponent } from './ledger/view-ledger/view-ledger.component';
import { UpdateLedgerComponent } from './ledger/update-ledger/update-ledger.component';
import { ViewChallanComponent } from './challan/view-challan/view-challan.component';
import { DCardComponent } from './dashboard/d-card/d-card.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { AddUnitsComponent } from './units/add-units/add-units.component';
import { UpdateUnitComponent } from './units/update-unit/update-unit.component';
import { ViewUnitsComponent } from './units/view-units/view-units.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { AddReceiptComponent } from './receipt/add-receipt/add-receipt.component';
import { ViewReceiptComponent } from './receipt/view-receipt/view-receipt.component';
import { UpdateReceiptComponent } from './receipt/update-receipt/update-receipt.component';
import { MReportComponent } from './reports/m-report/m-report.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: HeaderComponent, canActivate: [AuthGuard],
    children: [
      //path for Dashboard Card component
      { path: 'dCard', component: DCardComponent, canActivate: [AuthGuard] },

      //path for Challan Component
      { path: 'addChallan', component: AddChallanComponent, canActivate: [AuthGuard] },
      { path: 'viewChallan', component: ViewChallanComponent, canActivate: [AuthGuard] },
      { path: 'updateChallan', component: UpdateChallanComponent, canActivate: [AuthGuard] },

      //path for Ledger Component
      { path: 'addLedger', component: AddLedgerComponent, canActivate: [AuthGuard] },
      { path: 'viewLedger', component: ViewLedgerComponent, canActivate: [AuthGuard] },
      { path: 'updateLedger', component: UpdateLedgerComponent, canActivate: [AuthGuard] },

      //path for User Component
      { path: 'addUser', component: AddUserComponent, canActivate: [AuthGuard] },
      { path: 'viewUser', component: ViewUserComponent, canActivate: [AuthGuard] },
      { path: 'updateUser', component: UpdateUserComponent, canActivate: [AuthGuard] },

      //path for Unit Component
      { path: 'addUnit', component: AddUnitsComponent, canActivate: [AuthGuard] },
      { path: 'viewUnit', component: ViewUnitsComponent, canActivate: [AuthGuard] },
      { path: 'updateUnit', component: UpdateUnitComponent, canActivate: [AuthGuard] },

      //path for Product Component
      { path: 'addProduct', component: AddProductComponent, canActivate: [AuthGuard] },
      { path: 'viewProduct', component: ViewProductComponent, canActivate: [AuthGuard] },
      { path: 'updateProduct', component: UpdateProductComponent, canActivate: [AuthGuard] },
    
    //path for Receipt Component
    { path: 'addReceipt', component: AddReceiptComponent, canActivate: [AuthGuard] },
    { path: 'viewReceipt', component: ViewReceiptComponent, canActivate: [AuthGuard] },
    { path: 'updateReceipt', component: UpdateReceiptComponent, canActivate: [AuthGuard] },
  
  //path for Reports Component
  { path: 'mReport', component: MReportComponent, canActivate: [AuthGuard] }]
  // { path: 'vReport', component: ViewReceiptComponent, canActivate: [AuthGuard] },]
  }
  
  // { path : 'print', component: PrintComponent },
  // { path: 'invoice', component: InvoiceComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
