import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertServiceService } from '../services/advert-service.service';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.css']
})
export class AdvertDetailsComponent implements OnInit {
  
  constructor(private advertService: AdvertServiceService,
              private petService : PetService,
              private activatedRoute:ActivatedRoute) {}

  data:any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(prm  => {
        this.advertService.getAdvertDetails(prm["advertId"]).subscribe(a => {
          this.petService.getPetDetails(a.petId).subscribe(pet => {this.data = { ...a, ...pet };})
        })
    })

  }
}