import AppController from "./controllers/app.controller";
import NodeCache from "node-cache";
import { I18n } from "i18n";
import path from "path";
import AppCache from "./services/appCache.service";
import SportsCache from "./services/sportsCache.service";
import EventsCache from "./services/eventsCache.service";
 
const i18n = new I18n({
    locales: ['en', 'de', 'zh'],
    defaultLocale: 'en',
    directory: path.join('./', 'locales')
});

// @ts-ignore
global.i18n = i18n;
global.cache = new NodeCache();
global.appCache = new AppCache();
global.sportsCache = new SportsCache();
global.eventsCache = new EventsCache();

const app = new AppController();
app.start(9999);

