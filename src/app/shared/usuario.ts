export class Usuario {
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
    constructor(avatar: string, first_name: string, last_name: string, email: string) {
        this.avatar = avatar,
        this.first_name = first_name,
        this.last_name = last_name,
        this.email = email
    }
}