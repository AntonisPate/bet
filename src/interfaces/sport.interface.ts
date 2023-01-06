import Competition from "./competition.interface";
import Languages from "./languages.interface";

interface Sport {
    id: number;
    epId: number;
    desc: string | Languages;
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