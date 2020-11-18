import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  alert: boolean = false;
  id:any;

  updateProduct = new FormGroup({
    code: new FormControl(''),
    name: new FormControl(''),
    product_rate: new FormControl(''),

  });

  constructor(private router: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    // console.warn(this.router.snapshot.params.id)
    this.productService.getCurrentProduct().subscribe((result) => {
      console.warn(result)
      this.updateProduct = new FormGroup({
        code: new FormControl(result['code']),
        name: new FormControl(result['name']),
        product_rate: new FormControl(result['product_rate'])
      })
    })
    this.id = this.productService.pid;
  }


  getValues() {
    // console.warn("item", this.updateProduct.value)
    this.productService.updateProduct(this.id, this.updateProduct.value).subscribe((result) => {
      this.alert = true
    })

    this.updateProduct.reset({})
  }

  closeAlert() {
    this.alert = false
  }

}
