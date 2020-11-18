import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  pid:any;

  url = "http://localhost:3000/product"
  rooturl = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  saveProduct(data)
  {
    // console.warn(data)
    return this.http.post(this.url,data)  
  }

  public getProduct()
  {
    // console.warn(this.http.get(this.url))
    return this.http.get(this.url)  
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
