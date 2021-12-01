import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  path = "http://localhost:3000/users/";

  getUser(userId:number){
    return this.http.get<User>(this.path+userId)
  }

}
