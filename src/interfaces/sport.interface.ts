import Competition from "./competition.interface";

interface Sport {
    id: number;
    epId: number;
    desc: string;
    pos: number;
    ne: number;
    eic: number;
    v: boolean;
    mc: boolean;
    ncmc: number;
    nemc: number;
    hasInplayEvents: boolean;
    hasUpcomingEvents: boolean;
    comp: Competition[] | undefined;
}

export default Sport;