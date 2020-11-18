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
const routes: Routes = [
  { path: 'challan',  loadChildren : () => import('./challan/challan.module').then(mod =>mod.ChallanModule)},
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addchallan', component: AddChallanComponent, canActivate: [AuthGuard] },
  // { path : 'receipt', component: ReceiptComponent, canActivate: [AuthGuard] },
  { path : 'ledger', component: AddLedgerComponent, canActivate: [AuthGuard] },
  // { path : 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path : 'product', component: AddProductComponent, canActivate: [AuthGuard] }
  // { path : 'units', component: UnitsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
