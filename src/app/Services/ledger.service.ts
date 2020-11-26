import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  lid:any;

  // url = "http://15.206.21.1:3000/ledgers"
  // rooturl = "http://15.206.21.1:3000"
  rooturl = environment.rooturl;
  url = `${this.rooturl}/ledgers`;

  constructor(private http:HttpClient) { }

  saveLedger(data)
  {
    // console.warn(data)
    return this.http.post(this.url+'/add',data)  
  }

  public getLedger()
  {
    // console.warn(this.http.get(this.url))
    return this.http.get(this.url)  
  }

  getPartyName():Observable<any[]> {
    return this.http.get<any>(this.url + '/party-name');
  }

  getVehicleName():Observable<any[]> {
    return this.http.get<any>(this.url + '/vehicle-name');
  }

  getPartyDetails(id):Observable<any[]> {
    return this.http.get<any>(this.url+`/${id}`);
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
