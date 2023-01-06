import Sport from "../interfaces/sport.interface";

export default class SportsController {
    //Gets all sports
    public async getSports(): Promise<Sport[]> {
        try {
            return global.sportsCache.getAllSports();
        } catch (error) {
            throw error;
        }
    }
}
