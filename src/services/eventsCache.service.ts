import { CommonCacheConfig } from "../common/cache.config.common";
import HttpService from "./http.service";

import Event from "../interfaces/event.interface";
import Sport from "../interfaces/sport.interface";

export default class EventsCache extends CommonCacheConfig {

    constructor() {
        super("eventsCache");
    }

    //Gets all events of a sport according to the id of the sport
    //Param: sportId number the id of the sport
    //Returns Event[] the list of the events
    public async getAllEventsPerSport(sportId = 100): Promise<Event[]> {
        try {
            let data = await this.getData();
            if (!data) {
                return [];
            }
            let selectedData = data.filter((event: Event) => event.sport_id === sportId);
            if (selectedData) {
                selectedData.forEach((event: Event) => {
                    delete event.markets;
                    delete event.eventPathTree;
                    delete event.metadata;
                    delete event.scoreboard;
                });
                return selectedData;
            }
            return [];  
        } catch (error) {
            throw error;
        }
    }

    //Gets all the event data of an event according to the event id
    //Param: eventId number the id of th event
    //Returns Promise<event|null> the data of the event | null if no event found
    public async getEventDataPerId(eventId: number): Promise<Event | null> {
        try {
            let data = await this.getData();
            if (!data) {
                return null;
            }
            let event = data.find((event: Event) => event.id === eventId);
            return event;
        } catch (error) {
            throw error;
        }
    }

    //Gets all data
    //if the data exist in the cache returns the cached data
    //else fetched the data, store them in the cache and return them
    public async getData(): Promise<any> {
        if (!this.hasData()) {
            await global.appCache.cacheData();
        }
        return this.cache.get(this.key);
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

    //Formats the event data
    //Param: inputData the data the events
    //Return Event[] the events
    private formatData(inputData: any): Event[] {
        let out: Event[] = [];
        inputData.sports.forEach((sport: Sport) => {
            let comp = sport.comp;
            if (comp !== undefined && comp.length) {
                comp.forEach((comp) => {
                    let events = comp.events;
                    events.forEach((event: Event) => {
                        out.push(event)
                    })
                })
            }
        })
        return out.sort((a, b) => a.pos - b.pos);
    }
}
