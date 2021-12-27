import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../models/request';
import { User } from '../models/user';
import { AdvertServiceService } from '../services/advert-service.service';
import { PetService } from '../services/pet.service';
import { RequestService } from '../services/request.service';
declare let alertify: any;

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.css']
})
export class AdvertDetailsComponent implements OnInit {

  constructor(private advertService: AdvertServiceService,
    private petService: PetService,
    private requestService: RequestService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  data: any;
  request!: any;
  advertId!: number

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(prm => {
      this.advertService.getAdvertDetails(prm["advertId"]).subscribe(a => {
        this.petService.getPetDetails(a.petId).subscribe(pet => {
          this.data = { ...a, ...pet };
          this.advertId = a.id
          this.buttonCheck(a.id)
        })
      })
    })
  }

  sendRequest(advertId: number) {
    let json = localStorage.getItem('currentUser')
    if (json) {
      let currentUser: User = JSON.parse(json);
      this.advertService.getAdvertDetails(advertId).subscribe(a => {
        this.requestService.checkRequest(a.petId, currentUser.id).subscribe(p => {
          if (a.userId != currentUser.id) {
            if (p.length == 0)
              this.requestService.addRequest(new Request(currentUser.id, a.userId, a.petId, false, false)).subscribe(r => { alertify.success("Talep başarıyla gönderildi.") })
            else
              alertify.warning("Zaten bu ilana bir talep yolladınız!")
          }
          else
            alertify.warning("Kendi ilanınıza talep gönderemezsiniz!");
        })

      })
    }
  }

  deleteAdvert(advertId: number) {
    this.advertService.getAdvertDetails(advertId).subscribe(adv => {
      this.petService.deletePet(adv.petId).subscribe(p => {
          alertify.success("İlan başarıyla kaldırıldı.")
          this.router.navigate(['advertlist'])
      })
    })
  }

  buttonCheck(advertId: number) {
    const deleteButton = document.getElementById("deleteAdvertBtn");
    if (deleteButton) {
      let userItem = localStorage.getItem('currentUser')
      if (userItem) {
        let currentUser: User = JSON.parse(userItem);
        this.advertService.getAdvertDetails(advertId).subscribe(a => {
          if (a.userId == currentUser.id) {
            deleteButton.style.display = "inline-block"
          }
        })
      }
      else {
        deleteButton.style.display = "none"
      }
    }
  }





}