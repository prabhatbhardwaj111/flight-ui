
import { LOGIN ,FLIGHTS, FLIGHTS_ADD} from '../lib/constants/api-urls';
import Api from "../lib/api-call";

export class LoginService {

    static instance;
    constructor() { }

    static getInstance() {
      if (!LoginService.instance) {
        LoginService.instance = new LoginService();
      }
      return LoginService.instance;
    }
    tryLogin = async (params)=> {
      let newsResponse = await Api.post(LOGIN.URL,params);
      return newsResponse;
    }

    fetchFlight = async (params)=> {

      console.log(params)
      let newsResponse = await Api.get(FLIGHTS.URL,params);
      return newsResponse;
    }

    addFlight = async (params)=> {

      
      let newsResponse = await Api.post(FLIGHTS_ADD.URL,params);
      return newsResponse;
    }


  }