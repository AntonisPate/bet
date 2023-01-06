import NodeCache from 'node-cache';

export abstract class CommonCacheConfig {
    key: string;
    cache: NodeCache = global.cache;

    constructor(key: string) {
        this.key = key;
    }

    //Checks if the data exists in the cache
    //Returns boolean
    public hasData(): boolean {
        if (this.cache.get(this.key) === undefined) {
            return false;
        }
        return true;
    }

    abstract getData(): any;
    abstract cacheData(cacheData: any): any;
}