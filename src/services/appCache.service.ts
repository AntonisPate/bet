import { CommonCacheConfig } from "../common/cache.config.common";
import HttpService from "./http.service";

export default class AppCache extends CommonCacheConfig {

    private httpService: HttpService = new HttpService();
    private ttlMs: number = 30000;

    constructor() {
        super("appCache");
    }

    //Gets all data
    //if the data exist in the cache returns the cached data
    //else fetched the data, store them in the cache and return them
    public async getData(): Promise<any> {
        try {
            if (this.hasData()) {
                return this.cache.get(this.key);
            } else {
                let data = this.fetchData();
                this.cache.set(this.key, data);
                return data;
            }  
        } catch (error) {
            throw error;
        }
    }
    
    //Fetches all data
    private async fetchData() {
        try {
            let data = await this.httpService.getData();
            return data; 
        } catch (error) {
            throw error;
        }
    }

    //Initializes the cache and create interval to fetch the data according to ttlMs variable
    public async initCache() {
        setInterval(async () => {
            try {
                await this.cacheData();
            } catch (error) {
                throw error;
            }
        }, this.ttlMs)
    }

    //Caches all data of the application
    public async cacheData() {
        try {
            let data = await this.fetchData();
            this.cache.set(this.key, data);
            global.sportsCache.cacheData(data);
            global.eventsCache.cacheData(data); 
        } catch (error) {
            throw error;
        }
    }
}
