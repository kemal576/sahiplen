import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advert } from '../models/advert';
import { AdvertDetails } from '../models/advert-details';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class AdvertServiceService {

  constructor(private http : HttpClient) { }

  path = "http://localhost:3000/adverts/";

  getAdverts(){
    return this.http.get<Advert[]>(this.path);
  }

  getAdvertDetails(id:number){
    return this.http.get<Advert>(this.path+id)
  }

  addAdvert(advert:Advert){
    return this.http.post<any>(this.path,advert)
  }

  

  
}
