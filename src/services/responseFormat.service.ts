import Event from "../interfaces/event.interface";
import Sport from "../interfaces/sport.interface";

export default function formatResponse(data: Event[] | Event | Sport[] | null) {
    return {
        status: {
            success: true,
            message: "Ok"
        },
        result: data
    }
}