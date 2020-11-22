import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  pid:any;

  url = "http://localhost:3000/products"
  rooturl = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  saveProduct(data)
  {
    // console.warn(data)
    return this.http.post(this.url+'/add',data)  
  }

  public getProduct()
  {
    // console.warn(this.http.get(this.url))
    return this.http.get(this.url)  
  }

  getProductName():Observable<any[]> {
    return this.http.get<any>(this.url + '/product-name');
  }

  getCurrentProduct()
  {
    return this.http.get(`${this.url}/${this.pid}`)
  }

  updateProduct(id, data)
  {
    return this.http.put(`${this.url}/${id}`, data)
  }
}
