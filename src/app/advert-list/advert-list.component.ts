import { Component, OnInit } from '@angular/core';
import { Advert } from '../models/advert';
import { AdvertServiceService } from '../services/advert-service.service';


@Component({
  selector: 'advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {

  constructor(private advertService: AdvertServiceService) { }

  path = "http://localhost:3000/adverts";
  adverts : Advert[] = [];

  ngOnInit(): void {
      this.advertService.getAdverts().subscribe(data => {this.adverts = data;});    
  }
}