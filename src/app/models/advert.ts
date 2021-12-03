export class Advert {
    id!: number;
    title!: string;
    explanation!: string;
    userId!: number;
    petId!: number;
    pictureUrl!: string;
    createDate!: Date


    setProperties(userId: number, petId: number, pictureUrl: string) {
        this.userId = userId;
        this.petId = petId;
        this.pictureUrl = pictureUrl;
        this.createDate = new Date();
    }

    setProperties2(id:number, title: string, explanation: string, pictureUrl: string) {
        this.id = id;
        this.title = title;
        this.explanation = explanation;
        this.pictureUrl = pictureUrl;
        this.createDate = new Date();
    }


}