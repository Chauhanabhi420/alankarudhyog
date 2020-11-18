import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  lid:any;

  url = "http://localhost:3000/ledger"
  rooturl = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  saveLedger(data)
  {
    // console.warn(data)
    return this.http.post(this.url,data)  
  }

  public getLedger()
  {
    // console.warn(this.http.get(this.url))
    return this.http.get(this.url)  
  }

  getCurrentLedger()
  {
    return this.http.get(`${this.url}/${this.lid}`)
  }

  updateLedger(id, data)
  {
    return this.http.put(`${this.url}/${id}`, data)
  }
}
