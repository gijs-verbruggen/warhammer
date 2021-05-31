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
    },
    {
        id: 2,
        title: '2v2 Slaves to Darkness and Sylvaneth vs Kharadron Overlords and Gloomspite Gitz',
        date: new Date('2020-09-25').toLocaleDateString("en-CA"),
        scenario: 'Focal Points',
        src: '2020-09-25/EOT_1.jpg',
    },
    {
        id: 3,
        title: '1v2 Cities of Sigmar vs Kharadron Overlords and Nighthaunt 2k',
        date: new Date('2021-04-30').toLocaleDateString("en-CA"),
        scenario: 'Forcing the Hand',
        src: '2021-04-30/img-1.jpg',
    },
    {
        id: 4,
        title: '1v1 Maggotkin of Nurgle vs Sons of Behemoth 2k',
        date: new Date('2021-05-01').toLocaleDateString("en-CA"),
        scenario: 'Shifting Objectives',
        src: '2021-05-01/img-1.jpg',
    },
    {
        id: 5,
        title: '1v2 Hedonites of Slaanesh vs Kharadron Overlords and Nighthaunt 2k',
        date: new Date('2021-05-28').toLocaleDateString("en-CA"),
        scenario: 'Starstrike',
        src: '2021-05-28/img-1.jpg',
    },
    {
        id: 6,
        title: '1v1 Slaves to Darkness vs Sons of Behemoth 2k',
        date: new Date('2021-05-21').toLocaleDateString("en-CA"),
        scenario: 'Forcing the Hand',
        src: '2021-05-21/img-1.jpg',
    },
    {
        id: 7,
        title: '1v1 Slaves to Darkness vs Sons of Behemoth 2k',
        date: new Date('2021-05-22').toLocaleDateString("en-CA"),
        scenario: 'Total Commitment',
        src: '2021-05-22/img-1.jpg',
    },
]

export default battlereports