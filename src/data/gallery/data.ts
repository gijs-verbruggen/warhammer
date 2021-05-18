interface project {
    id: number;
    linkId: number,
    category: string;
    title: string;
    date: Date;
    name: string;
    src: string;
}
const projects : project[] = [
    {
        id: 1,
        linkId: 1,
        category: 'slaves to darkness',
        title: 'Chaos Lord on krakadrak',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'chaoslordkrakadrak1.jpg'
    },
    {
        id: 2,
        linkId: 2,
        category: 'blades of khorne',
        title: 'Slaughter Priest',
        date: new Date('2021-02-15'),
        name: 'Gijs',
        src: 'slaughterpriest1.jpg'
    },
    {
        id: 3,
        linkId: 3,
        category: 'slaves to darkness',
        title: 'Varanguard Nurgle',
        date: new Date('2021-02-14'),
        name: 'Gijs',
        src: 'varanguard_nurgle1.jpg'
    },
    {
        id: 4,
        linkId: 4,
        category: 'slaves to darkness',
        title: 'Gaunt Summoner of Tzeentch',
        date: new Date('2021-03-13'),
        name: 'Gijs',
        src: 'gaunt_summoner_of_tzeentch1.jpg'
    },
    {
        id: 5,
        linkId: 5,
        category: 'Blades of Khorne',
        title: 'Vorgaroth the Scarred',
        date: new Date('2021-03-15'),
        name: 'Gijs',
        src: 'vorgaroth_the_scarred1.jpg'
    },
    {
        id: 6,
        linkId: 6,
        category: 'Blades of Khorne',
        title: 'Bloodsecrator',
        date: new Date('2021-03-16'),
        name: 'Gijs',
        src: 'bloodsecrator1.jpg'
    },
    {
        id: 7,
        linkId: 7,
        category: 'maggotkin of nurgle',
        title: 'Nurgling Champion',
        date: new Date('2021-03-16'),
        name: 'Gijs',
        src: 'nurgling_champion1.jpg'
    },
    {
        id: 8,
        linkId: 8,
        category: 'hedonites of slaanesh',
        title: 'Shalaxi Helbane',
        date: new Date('2021-03-16'),
        name: 'Gijs',
        src: 'shalaxi_helbane1.jpg'
    },
    {
        id: 9,
        linkId: 9,
        category: 'slaves to darkness',
        title: 'Varanguard Slaanesh',
        date: new Date('2021-04-26'),
        name: 'Gijs',
        src: 'varanguard_slaanesh1.jpg'
    },
    {
        id: 10,
        linkId: 10,
        category: 'hedonites of slaanesh',
        title: 'Glutos Orscollion, Lord of Gluttony',
        date: new Date('2021-04-26'),
        name: 'Gijs',
        src: 'glutos1.jpg'
    },
    {
        id: 11,
        linkId: 11,
        category: 'maggotkin of nurgle',
        title: 'Nurgling Drones',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'nurgling_drones1.jpg'
    },
    {
        id: 12,
        linkId: 12,
        category: 'maggotkin of nurgle',
        title: 'Exalted Greater Daemon of Nurgle',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'exalted_greater_daemon_of_nurgle1.jpg'
    },
    {
        id: 13,
        linkId: 13,
        category: 'maggotkin of nurgle',
        title: 'Great Unclean One',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'great_unclean_one1.jpg'
    },
    {
        id: 14,
        linkId: 14,
        category: 'maggotkin of nurgle',
        title: 'Lord of Blights',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'lord_of_blights1.jpg'
    },
    {
        id: 15,
        linkId: 15,
        category: 'maggotkin of nurgle',
        title: 'Lord of Plagues',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'lord_of_plagues1.jpg'
    },
    {
        id: 16,
        linkId: 16,
        category: 'maggotkin of nurgle',
        title: 'The Glottkin',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'the_glottkin1.jpg'
    },
    {
        id: 17,
        linkId: 17,
        category: 'slaves to darkness',
        title: 'Slaughterbrute',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'slaughterbrute1.jpg'
    },
    {
        id: 18,
        linkId: 18,
        category: 'maggotkin of nurgle',
        title: 'Rotigus',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'rotigus1.jpg'
    },
    {
        id: 19,
        linkId: 19,
        category: 'hedonites of slaanesh',
        title: 'Keeper of Secrets',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'keeper_of_secrets1.jpg'
    },
    {
        id: 20,
        linkId: 20,
        category: 'maggotkin of nurgle',
        title: 'Putrid Blightskings',
        date: new Date('2021-04-27'),
        name: 'Gijs',
        src: 'putrid_blightkings1.jpg'
    },
    {
        id: 21,
        linkId: 21,
        category: 'Cities of Sigmar',
        title: 'Gotrek Gurnisson',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'gotrek1.jpg'
    },
    {
        id: 22,
        linkId: 22,
        category: 'Cities of Sigmar',
        title: 'Black Guard',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'black_guard1.jpg'
    },
    {
        id: 23,
        linkId: 23,
        category: 'Cities of Sigmar',
        title: 'Runelord',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'runelord1.jpg'
    },
    {
        id: 24,
        linkId: 24,
        category: 'Cities of Sigmar',
        title: 'Irondrakes',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'irondrakes1.jpg'
    },
    {
        id: 25,
        linkId: 25,
        category: 'Cities of Sigmar',
        title: 'Longbeards',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'longbeards1.jpg'
    },
    {
        id: 26,
        linkId: 26,
        category: 'Blades of Khorne',
        title: 'Skull Altar',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'skull_altar1.jpg'
    },
    {
        id: 27,
        linkId: 27,
        category: 'Slaves to Darkness',
        title: 'Chaos Sorcerer Lord',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'chaos_sorcerer_lord_nurgle1.jpg'
    },
    {
        id: 28,
        linkId: 28,
        category: 'Slaves to Darkness',
        title: 'Chaos Sorcerer Lord Tzeentch',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'chaos_sorcerer_lord_tzeentch1.jpg'
    },
    {
        id: 29,
        linkId: 29,
        category: 'Slaves to Darkness',
        title: 'Exalted Hero of Chaos',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'exalted_hero_of_chaos1.jpg'
    },
    {
        id: 30,
        linkId: 30,
        category: 'Maggotkin of Nurgle',
        title: 'Festus the Leechlord',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'festus_the_leechlord1.jpg'
    },
    {
        id: 31,
        linkId: 31,
        category: 'Maggotkin of Nurgle',
        title: 'Gutrot Spume',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'gutrot_spume1.jpg'
    },
    {
        id: 32,
        linkId: 32,
        category: 'Maggotkin of Nurgle',
        title: 'Lord of Afflictions',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'lord_of_afflictions1.jpg'
    },
    {
        id: 33,
        linkId: 33,
        category: 'Slaves to Darkness',
        title: 'Archaon',
        date: new Date('2021-05-03'),
        name: 'Gijs',
        src: 'archaon1.jpg'
    },
    {
        id: 34,
        linkId: 34,
        category: 'Blades of Khorne',
        title: 'Lord of Khorne on Juggernaut',
        date: new Date('2021-05-08'),
        name: 'Gijs',
        src: 'lord_of_khorne_on_juggernaut1.jpg'
    },
    {
        id: 35,
        linkId: 35,
        category: 'Cities of Sigmar',
        title: 'Hammerers',
        date: new Date('2021-05-08'),
        name: 'Gijs',
        src: 'hammerers1.jpg'
    },
    {
        id: 36,
        linkId: 36,
        category: 'Cities of Sigmar',
        title: 'Ironbreakers',
        date: new Date('2021-05-08'),
        name: 'Gijs',
        src: 'ironbreakers1.jpg'
    },
    {
        id: 37,
        linkId: 37,
        category: 'hedonites of slaanesh',
        title: 'Sigvald (old)',
        date: new Date('2021-05-08'),
        name: 'Gijs',
        src: 'sigvald_old1.jpg'
    },
]

export default projects