import { NodeCache } from 'node-cache';

import AppCache from './src/services/appCache.service';
import SportsCache from './src/services/sportsCache.service';
import EventsCache from './src/services/eventsCache.service';

declare global {
    var cache: NodeCache;
    var appCache: AppCache;
    var sportsCache: SportsCache;
    var eventsCache: EventsCache;
    var i18n: any;
}
