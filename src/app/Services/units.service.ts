import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  tid:any;

  // url = "http://15.206.21.1:3000/companies"
  // rooturl = "http://15.206.21.1:3000"
  rooturl = environment.rooturl;
  url = `${this.rooturl}/companies`;

  constructor(private http:HttpClient) { }

  saveUnits(data)
  {
    // console.warn(data)
    return this.http.post(this.url+'/add',data)  
  }

  public getUnits()
  {
    // console.warn(this.http.get(this.url))
    return this.http.get(this.url)  
  }

  getUnitName():Observable<any[]> {
    return this.http.get<any>(this.url + '/unit-name');
  }

  getCurrentUnits()
  {
    return this.http.get(`${this.url}/${this.tid}`)
  }

  updateUnits(id, data)
  {
    return this.http.patch(`${this.url}/${id}`, data)
  }

  destroyUnits(id, data) {
    return this.http.patch(`${this.url}/delete/${id}`, data);
    console.warn(data);
  }
}
