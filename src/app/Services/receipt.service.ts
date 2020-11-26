import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  rid:any;

  // url = "http://15.206.21.1:3000/receipts"
  // rooturl = "http://15.206.21.1:3000"
  rooturl = environment.rooturl;
  url = `${this.rooturl}/receipts`;

  constructor(private http:HttpClient) { }

  saveReceipt(data)
  {
    // console.warn(data)
    return this.http.post(this.url+'/add',data)  
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
    return this.http.patch(`${this.url}/${id}`, data)
  }
}
