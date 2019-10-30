export interface User {
    id?: string;
    photos?: string[];
    firstName?: string;
    lastName?: string;
    pseudo?: string;
    birthday?: Date;
    gender?: GenderType;

    friends?: string[];
}

export enum GenderType {
    CHOPIN = 'Chopin',
    CHOPINE = 'Chopine',
    OTHER = 'Other',
}
