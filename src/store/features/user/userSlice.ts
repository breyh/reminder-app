import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialUserState, IProfile, IUserState } from './types';

export const usersSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        addProfile: (state: IUserState, action: PayloadAction<IProfile>) => ({
            ...state,
            profile: action.payload,
        }),
        removeProfile: (state: IUserState) => ({
            ...state,
            profile: {
                name: undefined,
                gender: undefined
            },
        }),
    },
});

export const {
    addProfile,
    removeProfile
} = usersSlice.actions;

export default usersSlice.reducer;
