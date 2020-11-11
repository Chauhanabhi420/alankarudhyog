import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ChallanService {

  url = "http://localhost:3000/challan"
  rooturl = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  saveChallan(data)
  {
    // console.warn(data)
    return this.http.post(this.url,data)  
  }

  public getChallan()
  {
    // console.warn(this.http.get(this.url))
    return this.http.get(this.url)  
  }

  getCurrentChallan(id)
  {
    return this.http.get(`${this.url}/${id}`)
  }

  updateChallan(id, data)
  {
    return this.http.put(`${this.url}/${id}`, data)
  }

}
