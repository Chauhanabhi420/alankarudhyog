import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  tid:any;

  url = "http://localhost:3000/units"
  rooturl = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  saveUnits(data)
  {
    // console.warn(data)
    return this.http.post(this.url,data)  
  }

  public getUnits()
  {
    // console.warn(this.http.get(this.url))
    return this.http.get(this.url)  
  }

  getCurrentUnits()
  {
    return this.http.get(`${this.url}/${this.tid}`)
  }

  updateUnits(id, data)
  {
    return this.http.put(`${this.url}/${id}`, data)
  }
}
