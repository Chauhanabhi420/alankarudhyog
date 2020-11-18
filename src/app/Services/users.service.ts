import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uid:any;

  url = "http://localhost:3000/users"
  rooturl = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  saveUsers(data)
  {
    // console.warn(data)
    return this.http.post(this.url,data)  
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
