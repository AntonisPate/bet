import { Request, Response, NextFunction } from "express";
import changeLocale from "../services/locale.service";

export default function language (request: Request, response: Response, next: NextFunction) {
    changeLocale(request.query.lang as string);
    next();
}