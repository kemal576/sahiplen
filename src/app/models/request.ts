export class Request {
    id!: number
    senderId: number
    receiverId: number
    petId: number
    decisionStatus: boolean
    isAccepted: boolean


    constructor(senderId: number, receiverId: number, petId: number, decisionStatus: boolean, isAccepted: boolean) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.petId = petId;
        this.decisionStatus = decisionStatus;
        this.isAccepted = isAccepted;
    }
}