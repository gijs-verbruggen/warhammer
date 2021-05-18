interface player {
    id: number;
    player: string;
    games: number;
    wins: number;
    losses: number;
}
const players: player[] = [
    {
        id: 1,
        player: 'Gijs',
        games: 2,
        wins: 0,
        losses: 2,
    },
    {
        id: 2,
        player: 'Tommy',
        games: 1,
        wins: 1,
        losses: 0,
    },
    {
        id: 3,
        player: 'Ralf',
        games: 1,
        wins: 1,
        losses: 0,
    },
    {
        id: 4,
        player: 'Jim',
        games: 1,
        wins: 1,
        losses: 0,
    },
    {
        id: 5,
        player: 'Rick',
        games: 0,
        wins: 0,
        losses: 0,
    }
]
export default players