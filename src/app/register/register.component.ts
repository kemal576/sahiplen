import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare let alertify:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup 
  constructor(private formBuilder:FormBuilder, 
              private http:HttpClient,
              private router:Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:[''],
      email:[''],
      password:[''],
      phoneNumber:[''],
      adress:[''],
      job:[''],
      bio:[''],
      pictureUrl:[''],
      userRoleId:0
    })
  }

  register(){
    this.http.post<any>("http://localhost:3000/users",this.registerForm.value)
    .subscribe(res => {
      alertify.success("Başarıyla kaydoldunuz");
      this.registerForm.reset();
      this.router.navigate(['login']);
    })
  }

}
