import http from "http";
import axios from "axios";

import data from "./data.json";

export default class HttpService {

    private apiUrl: string = "https://partners.betvictor.mobi/en-gb/in-play/1/events";

    //Gets data from the request
    //uncomment to get the data from the request and not from the json file
    public async getData() {
        try {
            // let response = await axios.get(this.apiUrl);
            // return response.data;
            return data.result
        } catch (error) {
            throw error; 
        }
    }
}
