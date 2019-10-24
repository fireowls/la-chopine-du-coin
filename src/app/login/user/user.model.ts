import { environment } from '../../../environments/environment';

export class User {
    public images: string[];
    public nbImage: number;

    constructor(public id: string, public firstName: string, public lastName: string, public birthday: Date, public sex: SexType) {
        this.images = [];
        this.nbImage = 0;
    }

    public addImage(path: string): boolean {
        if (this.nbImage === environment.appInfo.nbImageMax) {
            return false;
        }
        this.images.push(path);
        this.nbImage ++;
        return true;
    }

    public removeImage(path: string): boolean {
        if (this.nbImage === 0 || !this.containsImage(path)) {
            return false;
        }
        const newImages: string[] = [];
        let tmp = 0;
        for (const i in this.images) {
            if (i.localeCompare(this.images[tmp]) !== 0) {
                newImages.push(i);
                tmp ++;
            }
        }
        this.nbImage --;
        return true;
    }

    private containsImage(path: string): boolean {
        for (const i in this.images) {
            if (i.localeCompare(path) === 0) {
                return true;
            }
        }
        return false;
    }

    get age() {
        return (Math.trunc((new Date().valueOf() - this.birthday.valueOf()) / 1000 / 60 / 60 / 24 / 365));
    }

}

export enum SexType {
    CHOPIN,
    CHOPINE,
    OTHER,
}
