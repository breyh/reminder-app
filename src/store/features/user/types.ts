export const initialUserState: IUserState = {
    profile: {
        name: '',
        gender: undefined,
    },
};

export type IUserState = {
    profile: IProfile;
}

export type IProfile = {
    name: string | undefined,
    gender: Gender | undefined
}

export enum Gender {
    Femenino = 'F',
    Masculino = 'M',
    Otro = 'O'
}