const projects = [
    {
        id: '1',
        category: 'slaves to darkness',
        title: 'Chaos Lord on krakadrak',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'chaoslordkrakadrak1.jpeg'
    },
    {
        id: '2',
        linkId: '2',
        category: 'blades of khorne',
        title: 'Slaughter Priest',
        date: new Date('2021-02-15'),
        name: 'Gijs',
        src: 'slaughterpriest1.jpeg'
    },
    {
        id: '3',
        category: 'slaves to darkness',
        title: 'Varanguard Nurgle',
        date: new Date('2021-02-14'),
        name: 'Gijs',
        src: 'varanguard_nurgle1.jpeg'
    },
    {
        id: '4',
        category: 'slaves to darkness',
        title: 'Gaunt Summoner of Tzeentch',
        date: new Date('2021-03-13'),
        name: 'Gijs',
        src: 'gaunt_summoner_of_tzeentch1.jpeg'
    },
    {
        id: '5',
        category: 'Blades of Khorne',
        title: 'Vorgaroth the Scarred',
        date: new Date('2021-03-15'),
        name: 'Gijs',
        src: 'vorgaroth_the_scarred1.jpeg'
    },
    {
        id: '6',
        category: 'Blades of Khorne',
        title: 'Bloodsecrator',
        date: new Date('2021-03-16'),
        name: 'Gijs',
        src: 'bloodsecrator1.jpeg'
    },
    {
        id: '7',
        category: 'maggotkin of nurgle',
        title: 'Nurgling Champion',
        date: new Date('2021-03-16'),
        name: 'Gijs',
        src: 'nurgling_champion1.jpeg'
    },
    {
        id: '8',
        category: 'hedonites of slaanesh',
        title: 'Shalaxi Helbane',
        date: new Date('2021-03-16'),
        name: 'Gijs',
        src: 'shalaxi_helbane1.jpeg'
    },
    {
        id: '9',
        category: 'slaves to darkness',
        title: 'Varanguard Slaanesh',
        date: new Date('2021-04-26'),
        name: 'Gijs',
        src: 'varanguard_slaanesh1.jpeg'
    },
    {
        id: '10',
        category: 'hedonites of slaanesh',
        title: 'Glutos Orscollion, Lord of Gluttony',
        date: new Date('2021-04-26'),
        name: 'Gijs',
        src: 'glutos1.jpeg'
    },
    {
        id: '11',
        category: 'maggotkin of nurgle',
        title: 'Nurgling Drones',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'nurgling_drones1.jpeg'
    },
    {
        id: '12',
        category: 'maggotkin of nurgle',
        title: 'Exalted Greater Daemon of Nurgle',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'exalted_greater_daemon_of_nurgle1.jpeg'
    },
    {
        id: '13',
        category: 'maggotkin of nurgle',
        title: 'Great Unclean One',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'greater_daemon_of_nurgle1.jpeg'
    },
    {
        id: '14',
        category: 'maggotkin of nurgle',
        title: 'Lord of Blights',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'lord_of_blights1.jpeg'
    },
    {
        id: '15',
        category: 'maggotkin of nurgle',
        title: 'Lord of Plagues',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'lord_of_plagues1.jpeg'
    },
    {
        id: '16',
        category: 'maggotkin of nurgle',
        title: 'The Glottkin',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'glottkin1.jpeg'
    },
    {
        id: '17',
        category: 'slaves to darkness',
        title: 'Slaughterbrute',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'slaughterbrute1.jpeg'
    },
    {
        id: '18',
        category: 'maggotkin of nurgle',
        title: 'Rotigus',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'rotigus1.jpeg'
    },
    {
        id: '19',
        category: 'hedonites of slaanesh',
        title: 'Keeper of Secrets',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'keeper_of_secrets1.jpeg'
    },
    {
        id: '20',
        category: 'maggotkin of nurgle',
        title: 'Putrid Blightskings',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'putrid_blightskings1.jpeg'
    },
    {
        id: '21',
        category: 'Cities of Sigmar',
        title: 'Gotrek Gurnisson',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'gotrek1.jpeg'
    },
    {
        id: '22',
        category: 'Cities of Sigmar',
        title: 'Black Guard',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'black_guard1.jpeg'
    },
    {
        id: '23',
        category: 'Cities of Sigmar',
        title: 'Runelord',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'runelord1.jpeg'
    },
    {
        id: '24',
        category: 'Cities of Sigmar',
        title: 'Irondrakes',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'irondrakes1.jpeg'
    },
    {
        id: '25',
        category: 'Cities of Sigmar',
        title: 'Longbeards',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'longbeards1.jpeg'
    },
    {
        id: '26',
        category: 'Blades of Khorne',
        title: 'Skull Altar',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'skull_altar1.jpeg'
    },
    {
        id: '27',
        category: 'Slaves to Darkness',
        title: 'Chaos Sorcerer Lord',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'chaos_sorcerer_lord_nurgle1.jpeg'
    },
    {
        id: '28',
        category: 'Slaves to Darkness',
        title: 'Chaos Sorcerer Lord Tzeentch',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'chaos_sorcerer_lord_tzeentch1.jpeg'
    },
    {
        id: '29',
        category: 'Slaves to Darkness',
        title: 'Exalted Hero of Chaos',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'exalted_hero_of_chaos1.jpeg'
    },
    {
        id: '30',
        category: 'Maggotkin of Nurgle',
        title: 'Festus the Leechlord',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'festus_the_leechlord1.jpeg'
    },
    {
        id: '31',
        category: 'Maggotkin of Nurgle',
        title: 'Gutrot Spume',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'gutrot_spume1.jpeg'
    },
    {
        id: '32',
        category: 'Maggotkin of Nurgle',
        title: 'Lord of Afflictions',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'lord_of_afflictions1.jpeg'
    },
    {
        id: '33',
        category: 'Slaves to Darkness',
        title: 'Archaon',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'archaon1.jpeg'
    },
]

export default projects