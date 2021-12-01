export class User {
    id: number
    name: string
    adress: string
    email: string
    password!: string
    phoneNumber: string
    job!: string
    bio!: string
    pictureUrl: string
    userRoleId!: number


    constructor(id: number, name: string, adress: string, email: string, phoneNumber: string, pictureUrl: string) {
        this.id = id;
        this.name = name;
        this.adress = adress;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.pictureUrl = pictureUrl;
    }
}