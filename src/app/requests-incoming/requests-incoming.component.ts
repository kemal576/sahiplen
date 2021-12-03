import { Component, OnInit } from '@angular/core';
import { IncomingReq } from '../models/incoming-request';
import { User } from '../models/user';
import { PetService } from '../services/pet.service';
import { RequestService } from '../services/request.service';
import { UserService } from '../services/user.service';
declare let alertify:any;

@Component({
  selector: 'requests-incoming',
  templateUrl: './requests-incoming.component.html',
  styleUrls: ['./requests-incoming.component.css']
})
export class RequestsIncomingComponent implements OnInit {

  constructor(private requestService: RequestService,
    private petService: PetService,
    private userService: UserService) { }

  incomings: IncomingReq[] = []

  ngOnInit(): void {
    this.getIncomingRequests();
  }

  getIncomingRequests() {
    let json = localStorage.getItem('currentUser')
    if (json) {
      let currentUser: User = JSON.parse(json);
      this.requestService.getRequestsByReceiverId(currentUser.id).subscribe(r => {
        r.forEach(element => {
          if (!element.decisionStatus) {
            this.userService.getUser(element.senderId).subscribe(u => {
              this.petService.getPetDetails(element.petId).subscribe(p => {
                let incoming = new IncomingReq(element.id, u, p.name, element.decisionStatus, element.isAccepted);
                this.incomings.push(incoming);
              })
            })
          }
        });
      })
    }
  }

  decide(requestId: number, isAccepted: boolean) {
    this.requestService.getRequest(requestId).subscribe(r => {
      if (!r.decisionStatus) {
        r.decisionStatus = true;
        r.isAccepted = isAccepted;
        this.requestService.updateRequest(r).subscribe(rr => {
          alertify.success("Seçiminiz kaydedildi.")
        })
      }

    })
  }


}
