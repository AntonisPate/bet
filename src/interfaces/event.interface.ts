interface Event {
    id: number;
    event_type: string;
    event_path_id: number;
    sport_id: number;
    desc: string;
    oppADesc: string;
    oppAId: number;
    oppBDesc: string;
    oppBId: number;
    american: any;
    inPlay: boolean;
    time: number;
    pos: number;
    has_stream: boolean;
    markets: any[] | undefined;
    eventPathTree: any;
    metadata: String[] | undefined;
    scoreboard: any;
}

export default Event;