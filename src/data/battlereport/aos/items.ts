interface battlereport {
    id: number,
    title: string,
    date: string,
    scenario: string,
    src: string,
}
const battlereports = [
    {
        id: 1,
        title: 'FFA Slaves to Darkness vs Sylvaneth vs Kharadron Overlords',
        date: new Date('2020-10-09').toLocaleDateString("en-CA"),
        scenario: 'King of the Hill',
        src: '2020-10-09/deployment.jpg',
        gameType: 'FFA 3 players',
        armies: 'Slaves to Darkness, Sylvaneth and Kharadron Overlords'
    },
    {
        id: 2,
        title: '2v2 Slaves to Darkness and Sylvaneth vs Kharadron Overlords and Gloomspite Gitz',
        date: new Date('2020-09-25').toLocaleDateString("en-CA"),
        scenario: 'Focal Points',
        src: '2020-09-25/EOT_1.jpg',
        gameType: '2v2 4 players',
        armies: 'Slaves to Darkness, Sylvaneth, Kharadron Overlords and Gloomspite Gitz'
    },
    {
        id: 3,
        title: '1v2 Cities of Sigmar vs Kharadron Overlords and Nighthaunt 2k',
        date: new Date('2021-04-30').toLocaleDateString("en-CA"),
        scenario: 'Forcing the Hand',
        src: '2021-04-30/img-1.jpg',
        gameType: '1v2 3 players',
        armies: 'Cities of Sigmar, Kharadron Overlords and Nighthaunt'
    },
    {
        id: 4,
        title: '1v1 Maggotkin of Nurgle vs Sons of Behemoth 2k',
        date: new Date('2021-05-01').toLocaleDateString("en-CA"),
        scenario: 'Shifting Objectives',
        src: '2021-05-01/img-1.jpg',
        gameType: '1v1 2 players',
        armies: 'Maggotkin of Nurgle and Sons of Behemat'

    },
    {
        id: 5,
        title: '1v2 Hedonites of Slaanesh vs Kharadron Overlords and Nighthaunt 2k',
        date: new Date('2021-05-28').toLocaleDateString("en-CA"),
        scenario: 'Starstrike',
        src: '2021-05-28/img-1.jpg',
        gameType: '1v2 3 players',
        armies: 'Hedonites of Slaanesh, Kharadron Overlords and Nighthaunt'
    },
    {
        id: 6,
        title: '1v1 Slaves to Darkness vs Sons of Behemoth 2k',
        date: new Date('2021-05-21').toLocaleDateString("en-CA"),
        scenario: 'Forcing the Hand',
        src: '2021-05-21/img-1.jpg',
        gameType: '1v1',
        armies: 'Slaves to Darkness and Sons of Behemat'
    },
    {
        id: 7,
        title: '1v1 Slaves to Darkness vs Sons of Behemoth 2k',
        date: new Date('2021-05-22').toLocaleDateString("en-CA"),
        scenario: 'Total Commitment',
        src: '2021-05-22/img-1.jpg',
        gameType: '1v1',
        armies: 'Slaves to Darkness, Sons of Behemat'
    },
    {
        id: 8,
        title: 'FFA Slaves to Darkness, Soulblight Gravelords, Sons of Behemat and Kharadron Overlords',
        date: new Date('2021-06-11').toLocaleDateString("en-CA"),
        scenario: 'White Dwarf Birthday',
        src: '2021-06-11/img-1.jpg',
        gameType: 'FFA 4 players',
        armies: 'Slaves to Darkness, Soulblight Gravelords, Sons of Behemat and Kharadron Overlords'
    },
    {
        id: 9,
        title: 'FFA Maggotkin of Nurgle, Soulblight Gravelords, Sons of Behemat and Kharadron Overlords',
        date: new Date('2021-06-26').toLocaleDateString("en-CA"),
        scenario: 'White Dwarf Birthday',
        src: '2021-06-26/img-1.jpg',
        gameType: 'FFA 4 players',
        armies: 'Maggotkin of Nurgle, Soulblight Gravelords, Sons of Behemat and Kharadron Overlords'
    },
    {
        id: 10,
        title: 'FFA Maggotkin of Nurgle, Soulblight Gravelords and Kharadron Overlords',
        date: new Date('2021-07-10').toLocaleDateString("en-CA"),
        scenario: 'White Dwarf Birthday',
        src: '2021-07-10/img-1.jpg',
        gameType: 'FFA 3 players',
        armies: 'Maggotkin of Nurgle, Soulblight Gravelords, Kharadron Overlords'
    },
    {
        id: 11,
        title: '1v1 Slaves to Darkness vs Sons of Behemat',
        date: new Date('2021-07-11').toLocaleDateString("en-CA"),
        scenario: 'Power in Numbers',
        src: '2021-07-11/img-9.jpg',
        gameType: '1v1',
        armies: 'Sons of Behemat, Slaves to Darkness'
    },
]

export default battlereports