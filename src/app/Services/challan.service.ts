import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ChallanService {

  cid:any;

  // url = "http://15.206.21.1:3000/challans"
  // rooturl = "http://15.206.21.1:3000"
  rooturl = environment.rooturl;
  url = `${this.rooturl}/challans`;

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
    console.log(data);
    return this.http.patch(`${this.url}/${id}`, data)
  }

}
