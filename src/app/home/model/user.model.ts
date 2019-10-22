export class User {
    email: string = "";
    surname: string = "";
    firstName: string = "";
    pseudo: string = "";
    sex: string = "";

    constructor(email:string,surname:string,firstname:string,sex:string){
        this.email = email;
        this.firstName = firstname;
        this.surname = surname;
        this.sex = sex;
    }
}