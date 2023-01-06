import { CommonCacheConfig } from "../common/cache.config.common";
import HttpService from "./http.service";

import Sport from "../interfaces/sport.interface";

export default class SportsCache extends CommonCacheConfig {

    private httpService: HttpService = new HttpService();

    constructor() {
        super("sportsCache");
    }

    //Gets all sports
    //Returns Promise<Sports[]> the promise of the sports array
    public async getAllSports(): Promise<Sport[]> {
        try {
            let data = await this.getData();
            if (data) {
                data.forEach((sport: Sport) => {
                    delete sport.comp;
                });
                return data;
            }
            return [];  
        } catch (error) {
            throw error;
        }
    }

    //Gets all data
    //if the data exist in the cache returns the cached data
    //else fetched the data, store them in the cache and return them
    public async getData(): Promise<any> {
        try {
            if (!this.hasData()) {
                await global.appCache.cacheData();
            }
            return this.cache.get(this.key);
        } catch (error) {
            throw error;
        }
    }

    //Caches all data of the events
    //Param: data the data that will be cached
    public cacheData(data: any): void {
        try {
            let formattedData = this.formatData(data);
            this.cache.set(this.key, formattedData);
        } catch (error) {
            throw error;
        }
    }

    //Formats the sport data
    //Param: inputData the data the sports
    //Return Sport[] the sports
    private formatData(inputData: any): Sport[] {
        let out: Sport[] = [];
        inputData.sports.forEach((sport: Sport) => {
            out.push({
                id: sport.id,
                epId: sport.epId,
                desc: sport.desc,
                pos: sport.pos,
                ne: sport.ne,
                eic: sport.eic,
                v: sport.v,
                mc: sport.mc,
                ncmc: sport.ncmc,
                nemc: sport.nemc,
                hasInplayEvents: sport.hasInplayEvents,
                hasUpcomingEvents: sport.hasUpcomingEvents,
                comp: sport.comp
            });
        })
        return out.sort((a, b) => a.pos - b.pos);
    }
}
