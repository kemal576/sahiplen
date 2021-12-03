import { Component, OnInit } from '@angular/core';
import { Advert } from '../models/advert';
import { AdvertDetails } from '../models/advert-details';
import { AdvertServiceService } from '../services/advert-service.service';
import { PetService } from '../services/pet.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {

  constructor(private advertService: AdvertServiceService,
    private userService: UserService,
    private petService: PetService) { }

  adverts: AdvertDetails[] = []

  ngOnInit(): void {
    this.getAllAdverts();
  }

  getAllAdverts() {
    this.advertService.getAdverts().subscribe(a => {
      for (let i = 0; i < a.length; i++) {
        const advert = a[i];
        this.userService.getUser(advert.userId).subscribe(u => {
          this.petService.getPetDetails(advert.petId).subscribe(p => {
            const diffDay = this.getTimeDiff(new Date(advert.createDate),new Date())
            const data = new AdvertDetails(u.name, p.breed, diffDay, advert.id,
            advert.title, advert.explanation, advert.pictureUrl)
            this.adverts.push(data);
          })
        })
      }
    });
  }

  getTimeDiff(date1: Date, date2: Date): number {
    var diff = Math.abs(date1.getTime() - date2.getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
  }
}