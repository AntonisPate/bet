import Event from "../interfaces/event.interface";

export default class EventsController {
    public async getEventsPerSport(sportId = 100): Promise<Event[]> {
        try {
            return await global.eventsCache.getAllEventsPerSport(sportId);
        } catch (error) {
            throw error;
        }
    }

    public async getEventDataPerId(eventId: number): Promise<Event | null> {
        try {
            return await global.eventsCache.getEventDataPerId(eventId);
        } catch (error) {
            throw error;
        }
    }
}
