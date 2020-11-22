import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallanService {

  cid:any;

  url = "http://localhost:3000/challans"
  rooturl = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  saveChallan(data)
  {
    // console.warn(data)
    return this.http.post(this.url+'/add',data)  
  }

  public getChallan():Observable<any[]>
  {
    // console.warn(this.http.get(this.url))
    return this.http.get<any>(this.url);
  }

  // getProductNameById(id):Observable<any[]> {
  //   return this.http.get<any>(this.url+`/${id}`);
  // }

  getCurrentChallan()
  {
    return this.http.get(`${this.url}/${this.cid}`)
  }

  updateChallan(id, data)
  {
    return this.http.patch(`${this.url}/${id}`, data)
  }

}
