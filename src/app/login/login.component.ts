import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup 
  constructor(private formBuilder:FormBuilder, 
              private http:HttpClient,
              private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }


  login(){
    var email:string = this.loginForm.value.email
    this.http.get<User[]>("http://localhost:3000/users?email="+email)
    .subscribe(res => {
      const user = this.loginForm.value.password === res[0].password
      if(user){
        res[0].password = "";
        localStorage.setItem('currentUser',JSON.stringify(res[0]));
        NavbarComponent.buttonCheck();
        this.loginForm.reset();
        this.router.navigate(['']);
      }
      else{
        alert("Kullanıcı bulunamadı.")
      }

      
    })
  }

}
