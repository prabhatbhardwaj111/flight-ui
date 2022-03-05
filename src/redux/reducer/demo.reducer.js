import { LOGIN, FLIGHT } from "../lib/constants/actions";
export const demoReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN.LOGIN_SUCCESS:
            return { ...state, loginData: action.payload }
        case FLIGHT.SUCCESS:
            return { ...state, flightData: action.payload }
        case FLIGHT.ADDED:
            return { ...state, flightAdded: action.payload }
        default:
            return state;
    }
};




