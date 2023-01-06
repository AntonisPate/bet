import Sport from "../interfaces/sport.interface";

export default class SportsController {
    public async getSports(): Promise<Sport[]> {
        try {
            return global.sportsCache.getAllSports();
        } catch (error) {
            throw error;
        }
    }
}
