import { Advert } from "./advert";
import { Pet } from "./pet";

export class AdvertDetails {
    advert: Advert;
    username: string;
    breed: string;
    diffDay: number;

    constructor(username: string, breed: string, diffDay: number, id:number, title: string, explanation: string, pictureUrl: string) {
        this.advert = new Advert()
        this.advert.setProperties2(id,title,explanation,pictureUrl)
        this.username = username;
        this.breed = breed;
        this.diffDay = diffDay;
    }
}