import { Advert } from "./advert";
import { Pet } from "./pet";

export class AdvertDetails{
    advert:Advert;
    pet:Pet;

    constructor(){
        this.advert = new Advert()
        this.pet = new Pet()
    }
}