import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertDetails } from '../models/advert-details';
import { AdvertServiceService } from '../services/advert-service.service';

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.css']
})
export class AdvertDetailsComponent implements OnInit {

  constructor(private advertService: AdvertServiceService, 
              private activatedRoute:ActivatedRoute) { }
  advert!:AdvertDetails 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p  => {
      this.advert = this.advertService.getAdvertDetails(p["advertId"])
    })
    
  }

}
