import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  rid:any;

  url = "http://localhost:3000/receipt"
  rooturl = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  saveReceipt(data)
  {
    // console.warn(data)
    return this.http.post(this.url,data)  
  }

  public getReceipt()
  {
    // console.warn(this.http.get(this.url))
    return this.http.get(this.url)  
  }

  getCurrentReceipt()
  {
    return this.http.get(`${this.url}/${this.rid}`)
  }

  updateReceipt(id, data)
  {
    return this.http.put(`${this.url}/${id}`, data)
  }
}
