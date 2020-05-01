import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class serviceUsers {

     users = 'http://localhost:4200/assets/users.json';
     roles = 'http://localhost:4200/assets/roles.json';

    constructor(private http: HttpClient){}


      UsersRegi(): Observable<any> {
        return this.http.get(this.users);
      }

      RolesUser(): Observable<any> {
        return this.http.get(this.roles);
      }
}