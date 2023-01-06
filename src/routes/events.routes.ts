import express, { Application, NextFunction, Request, Response } from 'express';
import { CommonRoutesConfig } from '../common/routes.config.common';
import EventsController from '../controllers/events.controller';
import formatResponse from '../services/responseFormat.service';

export class EventsRoutes extends CommonRoutesConfig {

    private eventsController = new EventsController();

    constructor(app: Application) {
        super(app, 'EventsRoutes');
    }

    configureRoutes(): Application {

        //Get all events per sport
        this.app.get('/events/:sportId', async (request: Request, response: Response, next: NextFunction) => {
            try {
                let id = parseInt(request.params.sportId);
                let data = await this.eventsController.getEventsPerSport(id);
                if (data) {
                    response.status(200).send(formatResponse(data));
                } else {
                    response.sendStatus(404);
                }
            } catch (error) {
                next();
            }
        })

        //Get all events per sport with default value
        this.app.get('/events', async (request: Request, response: Response, next: NextFunction) => {
            try {
                let data = await this.eventsController.getEventsPerSport();
                if (data) {
                    response.status(200).send(formatResponse(data));
                } else {
                    response.sendStatus(404);
                }
            } catch (error) {
                next();
            }
        })

        //Gets all event data per event id
        this.app.get('/events/data/:id', async (request: Request, response: Response, next: NextFunction) => {
            try {
                let id = parseInt(request.params.id);
                let data = await this.eventsController.getEventDataPerId(id);
                if (data) {
                    response.status(200).send(formatResponse(data));
                } else {
                    response.sendStatus(404);
                }
            } catch (error) {
                next();
            }
        })
        return this.app;
    }
}
