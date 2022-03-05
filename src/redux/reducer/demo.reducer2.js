import { LOGIN } from "../lib/constants/actions";
export const demoReducer2 = (state = {}, action) => {
    switch (action.type) {
        case 'HII':
            return { ...state, loginData: action.payload }
        default:
            return 'hiii';
    }
};




