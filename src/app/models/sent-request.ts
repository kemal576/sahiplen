import { User } from "./user"

export class SentReq {
    id: number
    receiverName: string
    petName: string
    petPictureUrl: string
    decisionStatus: boolean
    isAccepted: boolean
    decisionMessage: string


    constructor(Id: number, receiverName: string, petName: string, petPictureUrl: string, isAccepted: boolean, decisionStatus: boolean) {
        this.id = Id;
        this.receiverName = receiverName;
        this.petName = petName;
        this.petPictureUrl = petPictureUrl;
        this.decisionStatus = decisionStatus;
        this.isAccepted = isAccepted;

        if (decisionStatus) {
            if (isAccepted)
                this.decisionMessage = "Kabul Edildi!";
            else
                this.decisionMessage = "Reddedildi."
        }
        else
            this.decisionMessage = "Değerlendirme aşamasında..."
    }
}