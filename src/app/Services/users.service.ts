import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../../src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uid:any;

  // url = "http://15.206.21.1:3000/users"
  // rooturl = "http://15.206.21.1:3000"
  rooturl = environment.rooturl;
  url = `${this.rooturl}/users`;

  constructor(private http:HttpClient) { }

  saveUsers(data)
  {
    // console.warn(data)
    return this.http.post(this.url+'/add',data)  
  }

  public getUsers()
  {
    // console.warn(this.http.get(this.url))
    return this.http.get(this.url)  
  }

  getCurrentUsers()
  {
    return this.http.get(`${this.url}/${this.uid}`)
  }

  updateUsers(id, data)
  {
    return this.http.put(`${this.url}/${id}`, data)
  }
}
