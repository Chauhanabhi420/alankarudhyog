import { Component, OnInit } from '@angular/core';
import { ReceiptService } from 'src/app/Services/receipt.service';
import { HeaderComponent } from 'src/app/dashboard/header/header.component';
import { UpdateReceiptComponent } from '../update-receipt/update-receipt.component';

@Component({
  selector: 'app-view-receipt',
  templateUrl: './view-receipt.component.html',
  styleUrls: ['./view-receipt.component.css']
})
export class ViewReceiptComponent implements OnInit {

  collection:any = [];
  count = 0;

  constructor(private viewReceiptService:ReceiptService) { }

  ngOnInit(){
    this.viewReceiptService.getReceipt().subscribe((result)=> {
      // console.warn(result);
      this.collection = result
  })}

  public lcUpdateProduct(item){
    this.viewReceiptService.rid= item;    
  }

  // deleteResto(item)
  // {
  //   this.viewProductService.deleteResto(item).subscribe((result)=>{
  //     console.warn(result)
      
  //   })
  // }

}
