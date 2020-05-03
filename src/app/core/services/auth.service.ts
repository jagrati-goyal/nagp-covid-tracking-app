import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/IUser';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private userData: IUser[];

    constructor() {
        this.getUsers();
    }

    getUsers(): IUser[] {
        this.userData = [{
            username: "admin",
            password: "nimda"
        }];
        return this.userData;
    }

    validateUser(currentUser: IUser): boolean {
        let isValidUserName = false;
        if (this.userData.findIndex(user => currentUser.username === user.username) > -1) {
            let index = this.userData.findIndex(user => currentUser.username === user.username);
            let username = this.userData[index].username;
            let password = this.userData[index].password;
            if (currentUser.username === username && currentUser.password === password) {
                isValidUserName = true;
            }
        }
        return isValidUserName;
    }

    login(username: string) {
        localStorage.setItem('TOKEN', 'token');
        localStorage.setItem('username', username);
    }
    logout() {
        if (localStorage.getItem('TOKEN')) {
            localStorage.clear();
        }
    }
}