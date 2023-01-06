import Sport from "../interfaces/sport.interface";

export default class SportsController {
    //Gets all sports
    public async getSports(lang = false): Promise<Sport[]> {
        try {
            return global.sportsCache.getAllSports(lang);
        } catch (error) {
            throw error;
        }
    }
}
