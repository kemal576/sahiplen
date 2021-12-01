import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../models/request';
import { User } from '../models/user';
import { AdvertServiceService } from '../services/advert-service.service';
import { PetService } from '../services/pet.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.css']
})
export class AdvertDetailsComponent implements OnInit {

  constructor(private advertService: AdvertServiceService,
    private petService: PetService,
    private requestService: RequestService,
    private activatedRoute: ActivatedRoute) { }

  data: any;
  request!: any;
  advertId!: number

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(prm => {
      this.advertService.getAdvertDetails(prm["advertId"]).subscribe(a => {
        this.petService.getPetDetails(a.petId).subscribe(pet => {
          this.data = { ...a, ...pet };
          this.advertId = a.id
        })
      })
    })
  }

  sendRequest(advertId: number) {
    let json = localStorage.getItem('currentUser')
    if (json) {
      let currentUser: User = JSON.parse(json);
      this.advertService.getAdvertDetails(advertId).subscribe(a => {
        //if (this.checkRequest(a.petId, currentUser.id)) {
          this.requestService.addRequest(new Request(currentUser.id, a.userId, a.petId, false, false))
            .subscribe(r => { alert("Talep başarıyla gönderildi.") })
        //}
        //else
          //alert("Zaten bu ilana bir talep yolladınız!")
      })
    }
  }

  /*checkRequest(petId: number, senderId: number): boolean {
    var bool: boolean = false;
    this.requestService.checkRequest(petId, senderId).subscribe(p => {
      if (p === undefined) {
        console.log("UNDEFINED")
        bool = false;
      }

      else{
        console.log("DEFINED")
        bool = true;
      }
    })
    console.log("BOOL: "+bool)
    return bool;
  }*/




}