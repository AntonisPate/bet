import Event from "./event.interface";

interface Competition {
    id: number;
    desc: string;
    pos: number;
    events: Event[]
}

export default Competition;