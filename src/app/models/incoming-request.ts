import { User } from "./user"

export class IncomingReq {
    id: number
    sender: User
    petName: string
    decisionStatus: boolean
    isAccepted: boolean


    constructor(Id:number,sender:User,petName:string,isAccepted:boolean,decisionStatus: boolean) {
        this.id = Id;
        this.sender = sender;
        this.petName = petName;
        this.decisionStatus = decisionStatus;
        this.isAccepted = isAccepted;
    }
}