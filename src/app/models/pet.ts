export class Pet{
    id!: number;
    name!: string;
    breed!: string;
    age!: number;
    ownerId!: number;
    bio!: string;
    gender!: string;
    pictureUrl!: string;


    setProperties(name: string, breed: string, age: number, ownerId: number, bio: string, gender: string, pictureUrl: string) {
       this.name = name;
       this.breed = breed;
       this.age = age;
       this.ownerId = ownerId;
       this.bio = bio;
       this.gender = gender;
       this.pictureUrl = pictureUrl;
    }

}