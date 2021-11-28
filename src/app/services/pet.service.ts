import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http : HttpClient) { }

  path = "http://localhost:3000/pets/";

  getPetDetails(id:number){
    return this.http.get<Pet>(this.path+id)
  }
}
