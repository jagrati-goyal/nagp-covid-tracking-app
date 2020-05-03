import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AddNewsActivateGuard implements CanActivate {
    constructor(private route: Router) {
    }

    canActivate(): boolean {
        let isValid: boolean = true;
        if (localStorage.getItem('TOKEN') === null || localStorage.getItem('TOKEN') === undefined) {
            this.route.navigate(['/login']);
            isValid = false;
        }
        return isValid;
    }
}