import http from "http";
import axios from "axios";

import data from "./data.json";

export default class HttpService {

    private apiUrl: string = "https://partners.betvictor.mobi/en-gb/in-play/1/events";

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
