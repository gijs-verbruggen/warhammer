interface armylist {
    id: number,
    army: string,
    faction: string,
    points: number,
    pdf: string,
    image: string,
}

const armylists : armylist[] = [
    {
        id: 1,
        army: 'Cities of Sigmar',
        faction: 'Greywater Fastness',
        points: 2000,
        pdf: 'cities_of_sigmar_greywater_fastness_2k.pdf',
        image: 'cities_of_sigmar_2k.jpg',
    },
    {
        id: 2,
        army: 'Slaves to Darkness',
        faction: 'Host of the Everchosen',
        points: 2000,
        pdf: 'slaves_to_darkness_host_of_the_everchosen_2k.pdf',
        image: 'slaves_to_darkness_host_of_the_everchosen_2k.jpg',
    },
    {
        id: 3,
        army: 'Maggotkin of Nurgle',
        faction: 'Nurgle',
        points: 2000,
        pdf: 'maggotkin_of_nurgle_2k.pdf',
        image: 'maggotkin_of_nurgle_2k.jpg',
    },
    {
        id: 4,
        army: 'Maggotkin of Nurgle',
        faction: 'The Drowned Men',
        points: 2000,
        pdf: 'maggotkin_of_nurgle_affliction_cyst_2k.pdf',
        image: 'maggotkin_of_nurgle_affliction_cyst_2k.jpg',
    },
]

export default armylists