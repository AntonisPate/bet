import { CommonCacheConfig } from "../common/cache.config.common";
import HttpService from "./http.service";

export default class AppCache extends CommonCacheConfig {

    private httpService: HttpService = new HttpService();
    private ttlMs: number = 4000;

    constructor() {
        super("appCache");
    }

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
    
    private async fetchData() {
        try {
            let data = await this.httpService.getData();
            return data; 
        } catch (error) {
            throw error;
        }
    }

    public async initCache() {
        setInterval(async () => {
            try {
                await this.cacheData();
            } catch (error) {
                throw error;
            }
        }, this.ttlMs)
    }

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
