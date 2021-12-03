import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Advert } from '../models/advert';
import { Pet } from '../models/pet';
import { User } from '../models/user';
import { AdvertServiceService } from '../services/advert-service.service';
import { PetService } from '../services/pet.service';

declare let alertify:any;

@Component({
  selector: 'app-advert-create',
  templateUrl: './advert-create.component.html',
  styleUrls: ['./advert-create.component.css']
})
export class AdvertCreateComponent implements OnInit {

  public advertForm !: FormGroup
  constructor(private formBuilder: FormBuilder,
    private petService: PetService,
    private advertService: AdvertServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.advertForm = this.formBuilder.group({
      title: [''],
      explanation: [''],
      name: [''],
      age: [''],
      breed: [''],
      gender: [''],
      bio: [''],
      pictureUrl: [''],
    })
  }

  createAdvert() {
    let json = localStorage.getItem('currentUser')
    if (json) {
      let currentUser: User = JSON.parse(json);
      const pet = new Pet()
      pet.setProperties(this.advertForm.value.name, this.advertForm.value.breed,
        this.advertForm.value.age, currentUser.id, this.advertForm.value.bio,
        this.advertForm.value.gender, this.advertForm.value.pictureUrl);
        const advert = new Advert();
        advert.title = this.advertForm.value.title;
        advert.explanation = this.advertForm.value.explanation;
      this.petService.addPet(pet).subscribe(p => {
        advert.setProperties(currentUser.id, p.id, p.pictureUrl)
        this.advertService.addAdvert(advert).subscribe(a => { alertify.success("İlan başarıyla kaydedildi!") })
      })
    }

    this.advertForm.reset();
    this.router.navigate(['advertList']);
  }
}
