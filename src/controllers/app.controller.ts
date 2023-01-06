import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";

import { EventsRoutes } from '../routes/events.routes';
import { SportsRoutes } from "../routes/sports.routes";

export default class AppController {
    private app: Express = express();

    constructor() {
        this.initializeMiddleware();
        this.initializeRoutes();
    }

    public async start(port: number): Promise<void> {
        
        this.app.listen(9999, async () => {
            await this.cacheAllData();

            this.initializeRoutes();
            console.log(`listening to port ${port}`);
        })

        this.app.use((request: Request, response: Response, next: NextFunction) => {
            return response.status(406).send('Error at process.');
        });
    }

    private initializeMiddleware(): void {
        this.app.use(cors());
    }

    private initializeRoutes(): void {
        new SportsRoutes(this.app);
        new EventsRoutes(this.app);
    }

    private async cacheAllData(): Promise<void> {
        try {
            await global.appCache.initCache();            
        } catch (error) {
            console.log(error);
        }
    }
}
