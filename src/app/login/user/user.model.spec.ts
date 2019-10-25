import { User, SexType } from './user.model';

describe('test the user model', () => {

    let user: User;

    beforeEach(() => {
        user = new User('42', 'jean', 'michel', new Date('2000-07-20T00:00:00'), SexType.CHOPIN);
    });

    it('is created', () => {
        expect(user).toBeTruthy();
    });

    it('add image', () => {
        expect(user.addImage('test')).toBeTruthy();
        expect(user.nbImage).toBe(1);
    });

    it('contains image', () => {
        user.addImage('test');
        expect(user.containsImage('test')).toBeTruthy();
    });

    it('remove image', () => {
        user.addImage('test');
        expect(user.removeImage('test')).toBeTruthy();
        expect(user.nbImage).toBe(0);
    });

    it('change firstName', () => {
        user.firstName = 'bernard';
        expect(user.firstName).toBe('bernard');
    });

    it('change lastName', () => {
        user.lastName = 'lapin';
        expect(user.lastName).toBe('lapin');
    });

    it('change birthday', () => {
        const tmp = new Date('1999-07-20T00:00:00');
        user.birthday = tmp;
        expect(user.birthday).toBe(tmp);
    });

    it('change sex', () => {
        user.sex = SexType.CHOPINE;
        expect(user.sex).toBe(SexType.CHOPINE);
    });

    it('age', () => {
        const tmp = new Date('2000-07-20T00:00:00');
        expect(user.age).toBe(Math.trunc((Date.now().valueOf() - tmp.valueOf()) / 1000 / 60 / 60 / 24 / 365));
    });

});
