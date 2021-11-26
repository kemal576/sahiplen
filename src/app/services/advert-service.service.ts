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
  path2 = "http://localhost:3000/pets/";

  getAdverts(){
    return this.http.get<Advert[]>(this.path);
  }

  getAdvertDetails(id:number):AdvertDetails{
    //HATALI //ÇÖZÜLMESİ GEREK
    var advert_details = new AdvertDetails()
    this.http.get<Advert>(this.path+id).subscribe(data => {advert_details.advert = data;})
    console.log(advert_details)
    this.http.get<Pet>(this.path2+advert_details.advert.petId)
              .subscribe(p => {advert_details.pet = p})
    return advert_details
  }

  
}
