import { environment } from '../../../environments/environment';

export class User {
    images: string[];
    nbImage: number;

    constructor(public id: string, public firstName: string, public lastName: string, public age: number, public sex: SexType) {
        this.nbImage = 0;
    }

    public addImage(path: string): boolean {
        if (this.nbImage === environment.appInfo.nbImageMax) {
            return false;
        }
        this.images[this.nbImage] = path;
        this.nbImage ++;
        return true;
    }

    public removeImage(path: string): boolean {
        if (this.nbImage === 0 || !this.containsImage(path)) {
            return false;
        }
        const newImages: string[] = null;
        let tmp = 0;
        for (const i in this.images) {
            if (i.localeCompare(this.images[tmp]) !== 0) {
                newImages[tmp] = i;
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

}

export enum SexType {
    CHOPIN,
    CHOPINE,
    OTHER,
}
