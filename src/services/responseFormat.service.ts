import Event from "../interfaces/event.interface";
import Sport from "../interfaces/sport.interface";

type requestResponse = {
    status: {
        success: boolean,
        message: string
    }
    result: Event[] | Event | Sport[] | null
}

//Formats the request according to data
export default function formatResponse(data: Event[] | Event | Sport[] | null): requestResponse {
    return {
        status: {
            success: true,
            message: "Ok"
        },
        result: data
    }
}