import { LOGIN, FLIGHT } from "../lib/constants/actions";
import { FLIGHTS_ADD } from "../lib/constants/api-urls";

export const tryLogin = (data) => {
    return {
        type: LOGIN.TRY_LOGIN,
        payload: data
    }
}

export const loginSuccess = (data) => {
    return {
        type: LOGIN.LOGIN_SUCCESS,
        payload: data
    }
}



export const fetchFlights = (data) => {
    return {
        type: FLIGHT.GET,
        payload: data
    }
}

export const returnFlight = (data) => {
    return {
        type: FLIGHT.SUCCESS,
        payload: data
    }
}



export const addFlights = (data) => {
    return {
        type: FLIGHT.ADD,
        payload: data
    }
}

export const flightAdded = (data) => {
    return {
        type: FLIGHT.ADDED,
        payload: data
    }
}

