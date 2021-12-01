import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:3000/requests";

  addRequest(request: Request) {
    return this.http.post<any>(this.path, request)
  }

  getRequest(requestId: number) {
    return this.http.get<Request>(this.path + "/" + requestId)
  }

  deleteRequest(requestId: number) {
    return this.http.delete<any>(this.path + "/" + requestId)
  }

  updateRequest(request: Request) {
    return this.http.put<any>(this.path + "/" + request.id, request)
  }

  getRequestsBySenderId(senderId: number) {
    return this.http.get<Request[]>(this.path + "?senderId=" + senderId)
  }

  getRequestsByReceiverId(receiverId: number) {
    return this.http.get<Request[]>(this.path + "?receiverId=" + receiverId)
  }

  checkRequest(petId: number, senderId: number){
    return this.http.get<Request[]>(this.path + "?petId=" + petId + "&senderId=" + senderId)
  }

}
