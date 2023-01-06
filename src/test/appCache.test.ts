import NodeCache from "node-cache";
import AppCache from "../services/appCache.service";
import SportsCache from "../services/sportsCache.service";
import EventsCache from "../services/eventsCache.service";

 
global.cache = new NodeCache();
global.appCache = new AppCache();
global.sportsCache = new SportsCache();
global.eventsCache = new EventsCache();

let appCache = new AppCache();
let sportCache = new SportsCache();
let eventsCache = new EventsCache();

test("test get cache", () => {
    let data = appCache.getData();
    expect(data).not.toBeNull();
});

test("test cache all data", () => {
    expect(appCache.cacheData()).resolves.not.toThrowError();
});

test("test get data", () => {
    let data = sportCache.getData();
    expect(data).not.toBeNull();
});

test("test get all sports", async () => {
    let data = await sportCache.getAllSports();
    expect(data).not.toBeNull();
});

test("test get all events per sport without id", async () => {
    let data = await eventsCache.getAllEventsPerSport();
    expect(data).not.toBeNull();
});

test("test get all events per sport with id", async () => {
    let data = await eventsCache.getAllEventsPerSport(100);
    expect(data).not.toBeNull();
});

test("test get all events per sport with wrong id", async () => {
    let data = await eventsCache.getAllEventsPerSport(2);
    expect(data).toEqual([])
});

test("test get all event data with correct id", async () => {
    let data = await eventsCache.getEventDataPerId(1853154500);
    expect(data).not.toBeNull();
});

test("test get all event data with wrong id", async () => {
    let data = await eventsCache.getEventDataPerId(2);
    expect(data).toEqual(undefined)
});