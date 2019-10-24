import { environment } from '../../../environments/environment';

export class User {
    images: string[];
    nbImage: number;

    constructor(public id: string, public firstName: string, public lastName: string, public age: number, public sex: sexType) {
        this.nbImage = 0;
    }

    public addImage(path: string): boolean {
        if (this.nbImage == environment.appInfo.nbImageMax) {
            return false;
        }
        this.images[this.nbImage] = path;
        this.nbImage ++;
        return true;
    }

    public removeImage(path: string): boolean {
        if (this.nbImage == 0 || !this.containsImage(path)) {
            return false;
        }
        let newImages: string[];
        let tmp: number = 0;
        for (let i in this.images) {
            if (i.localeCompare(this.images[tmp]) != 0) {
                newImages[tmp] = i;
                tmp ++;
            }
        }
        this.nbImage --;
        return true;
    }

    private containsImage(path: string): boolean {
        for (let i in this.images) {
            if (i.localeCompare(path) === 0) {
                return true;
            }
        }
        return false;
    }

}

enum sexType {
    CHOPIN,
    CHOPINE,
    OTHER,
}