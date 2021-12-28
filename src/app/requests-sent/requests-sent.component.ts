import { Component, OnInit } from '@angular/core';
import { SentReq } from '../models/sent-request';
import { User } from '../models/user';
import { PetService } from '../services/pet.service';
import { RequestService } from '../services/request.service';
import { UserService } from '../services/user.service';
declare let alertify:any;

@Component({
  selector: 'requests-sent',
  templateUrl: './requests-sent.component.html',
  styleUrls: ['./requests-sent.component.css']
})
export class RequestsSentComponent implements OnInit {

  sentlist: SentReq[] = []
  receiverInfo!:User;

  constructor(private requestService: RequestService,
    private petService: PetService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getSentRequests();
  }

  getSentRequests() {
    let json = localStorage.getItem('currentUser')
    if (json) {
      let currentUser: User = JSON.parse(json);
      this.requestService.getRequestsBySenderId(currentUser.id).subscribe(r => {
        console.log(r)
        r.forEach(element => {
          this.userService.getUser(element.receiverId).subscribe(u => {
            this.petService.getPetDetails(element.petId).subscribe(p => {
              let sent = new SentReq(element.receiverId, u.name, p.name, p.pictureUrl, element.decisionStatus, element.isAccepted);
              this.sentlist.push(sent);
            })
          })
        });
      })
    }
  }

  showReceiverInfo(id: number) {
    this.userService.getUser(id).subscribe(u => {
      this.receiverInfo = new User(u.id,u.name,u.adress,u.email,u.phoneNumber,u.pictureUrl);
      console.log(id)
    })
  }

  delete(id: number) {
    this.requestService.deleteRequest(id).subscribe(r => {
      alertify.success("Talep başarıyla kaldırıldı.")
    })
  }



}
