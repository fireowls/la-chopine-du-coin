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

});
