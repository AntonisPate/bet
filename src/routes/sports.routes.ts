import express, { Application, NextFunction, Request, Response } from 'express';
import { CommonRoutesConfig } from '../common/routes.config.common';
import SportsController from '../controllers/sports.controller';
import formatResponse from '../services/responseFormat.service';

export class SportsRoutes extends CommonRoutesConfig {

    private sportsController = new SportsController();

    constructor(app: Application) {
        super(app, 'SportsRoutes');
    }

    configureRoutes(): Application {
        
        //Get all sports
        this.app.get('/sports', async (request: Request, response: Response, next: NextFunction) => {
            let data = await this.sportsController.getSports();
            if (data) {
                response.status(200).send(formatResponse(data));
            } else {
                response.sendStatus(404);
            }
        })
        return this.app;
    }
}
