import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Advert } from '../models/advert';
import { Pet } from '../models/pet';
import { User } from '../models/user';
import { AdvertServiceService } from '../services/advert-service.service';
import { PetService } from '../services/pet.service';

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
    const pet = new Pet();
    pet.name = this.advertForm.value.name;
    pet.age = this.advertForm.value.age;
    pet.breed = this.advertForm.value.breed;
    pet.gender = this.advertForm.value.gender;
    pet.bio = this.advertForm.value.bio;
    pet.pictureUrl = this.advertForm.value.pictureUrl;

    this.petService.addPet(pet).subscribe(p => {
      const advert = new Advert();
      advert.title = this.advertForm.value.title;
      advert.explanation = this.advertForm.value.explanation;
      advert.petId = p.id;
      advert.pictureUrl = p.pictureUrl;
      let json = localStorage.getItem('currentUser')
      if (json) {
        let currentUser: User = JSON.parse(json);
        advert.userId = currentUser.id;
      }
      this.advertService.addAdvert(advert).subscribe(a => { alert("İlan başarıyla kaydedildi!") })
    })
    this.advertForm.reset();
    this.router.navigate(['advertList']);
  }
}
