import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  alert: boolean = false;

  addProduct = new FormGroup({
    code: new FormControl(''),
    name: new FormControl(''),
    product_rate: new FormControl(''),

  });

  constructor(private productService:ProductService) { }
  getValues() {
    //  console.warn(this.addProduct.value);
    this.productService.saveProduct(this.addProduct.value).subscribe((result)=>{
      this.alert=true
    })

    this.addProduct.reset({})
  }
  closeAlert()
  {
    this.alert=false
  }
  ngOnInit(): void {
  }
}
