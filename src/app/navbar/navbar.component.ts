import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    NavbarComponent.buttonCheck();
  }

  public static buttonCheck(){
    const login = document.getElementById("login");
    const register = document.getElementById("register");
    const logout = document.getElementById("logout");
    const adverts = document.getElementById("adverts");
    const requests = document.getElementById("requests");
    if (login && register && logout && adverts && requests) {
      if (localStorage.getItem('currentUser')) {
        login.style.display = "none"
        register.style.display = "none"
        logout.style.display = "inline-block"
        adverts.style.display = "inline-block"
        requests.style.display = "inline-block"
      }
      else {
        login.style.display = "inline-block"
        register.style.display = "inline-block"
        logout.style.display = "none"
        adverts.style.display = "none"
        requests.style.display = "none"
      }
    }
  }

}
