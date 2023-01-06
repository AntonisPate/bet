import AppController from "./controllers/app.controller";
import NodeCache from "node-cache";

import AppCache from "./services/appCache.service";
import SportsCache from "./services/sportsCache.service";
import EventsCache from "./services/eventsCache.service";
 
global.cache = new NodeCache();
global.appCache = new AppCache();
global.sportsCache = new SportsCache();
global.eventsCache = new EventsCache();

const app = new AppController();
app.start(9999);

