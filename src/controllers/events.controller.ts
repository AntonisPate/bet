import Event from "../interfaces/event.interface";

export default class EventsController {
    //Gets all events per sport
    //Param: sportId the sport id
    public async getEventsPerSport(sportId = 100): Promise<Event[]> {
        try {
            return await global.eventsCache.getAllEventsPerSport(sportId);
        } catch (error) {
            throw error;
        }
    }

    //Gets all events data per event
    //Param: eventId the event id
    public async getEventDataPerId(eventId: number): Promise<Event | null> {
        try {
            return await global.eventsCache.getEventDataPerId(eventId);
        } catch (error) {
            throw error;
        }
    }
}
