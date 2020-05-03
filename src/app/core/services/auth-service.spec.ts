import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { IUser } from 'src/app/shared/interfaces/IUser';


describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should invalid user if user name is not admin', () => {
        const user: IUser = { username: "Test", password: "test" };
        let isValid = service.validateUser(user);
        expect(isValid).toBeFalsy();
    });

    it('should return atleast one user', () => {
        const users: IUser[] = service.getUsers();
        const totalUsers = users.length;
        expect(totalUsers).toBeGreaterThan(0);
    });
});
