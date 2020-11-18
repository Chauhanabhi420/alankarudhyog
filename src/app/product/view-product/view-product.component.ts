import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {HeaderComponent} from '../../dashboard/header/header.component';
import {UpdateProductComponent} from '../update-product/update-product.component'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  collection:any;
  count = 0;

  constructor(private viewProductService:ProductService, private hc:HeaderComponent) { }

  ngOnInit(){
    this.viewProductService.getProduct().subscribe((result)=> {
      // console.warn(result);
      this.collection = result
  })}

  public lcUpdateProduct(item){
    this.viewProductService.pid= item;
    this.hc.LC = UpdateProductComponent;
    
  }

  // deleteResto(item)
  // {
  //   this.viewProductService.deleteResto(item).subscribe((result)=>{
  //     console.warn(result)
      
  //   })
  // }

}
