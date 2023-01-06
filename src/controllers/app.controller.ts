import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";

import { EventsRoutes } from '../routes/events.routes';
import { SportsRoutes } from "../routes/sports.routes";
import changeLocale from "../services/locale.service";
import language from "../middleware/language.middleware";

export default class AppController {
    private app: Express = express();

    constructor() {
        this.initializeMiddleware();
        this.initializeRoutes();
    }

    //Starts the application
    //Param: port number the port of the application
    public async start(port: number): Promise<void> {
        this.app.listen(9999, async () => {
            await this.cacheAllData();

            this.initializeRoutes();
            console.log(`listening to port ${port}`);
        })

        this.app.use((request: Request, response: Response, next: NextFunction) => {
            changeLocale(request.query.lang as string);
            return response.status(406).send(global.i18n.__('Error at process'));
        });
    }

    //initializes the middleware of the application
    private initializeMiddleware(): void {
        this.app.use(cors());
        this.app.use(language)
    }

    //initializes the routes of the application
    private initializeRoutes(): void {
        new SportsRoutes(this.app);
        new EventsRoutes(this.app);
    }

    //Caches all data of the application
    private async cacheAllData(): Promise<void> {
        try {
            await global.appCache.initCache();            
        } catch (error) {
            console.log(error);
        }
    }
}
