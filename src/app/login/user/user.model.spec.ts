import { User, SexType } from "./user.model";

describe('test the user model', () => {

    let user: User;

    beforeAll(() => {
        user = new User('42', 'jean', 'michel', 42, SexType.CHOPIN);
    });

    it('is created', () => {
        expect(user).toBeTruthy();
    });

    it('add image', () => {
        expect(user.addImage('test')).toBeTruthy();
        expect(user.nbImage).toBe(1);
    });

    it('remove image', () => {
        user.removeImage('test');
        expect(user.nbImage).toBe(0);
    });

});