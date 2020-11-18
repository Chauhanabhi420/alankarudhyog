import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Router, RouterModule } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  isLoggedIn: boolean = false;
  httpOptions = null;
  // rememberMe: boolean = false;



    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient,public router: Router) {


      // this.rememberMe = localStorage.getItem('rememberCurrentUser') == 'true' ? true : false;

      // if ((this.rememberMe = true)) {
      //   this.currentUserSubject = new BehaviorSubject<any>(
      //     JSON.parse(localStorage.getItem('currentUser'))
      //   );
      // } else {
      //   this.currentUserSubject = new BehaviorSubject<any>(
      //     JSON.parse(sessionStorage.getItem('currentUser'))
      //   );
      // }

          this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();


        // this.httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(username, password) {
        return this.http.post<any>(`/users/authenticate`, {username, password })
            .pipe(map(user => {

          //     if (user && user.token) {
          //       if (isRememberMe) {
          //         // this.resetcredentials();

          //         //your logged  out when you click logout
          //         localStorage.setItem('currentUser', JSON.stringify(user));
          //         localStorage.setItem('rememberCurrentUser', 'true');
          //       } else {
          //         //your logged  out when page/ browser is closed
          //         sessionStorage.setItem('currentUser', JSON.stringify(user));
          //       }
          //       // login successful if there's a jwt token in the response
          //       this.isLoggedIn = true;
          //       this.currentUserSubject.next(user);
          //       return true;
          //     } else {
          //       return false;
          //     }
          //   })
          // );



             //   store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
