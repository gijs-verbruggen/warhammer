interface battlereport {
    id: number,
    linkId: number,
    date: string,
    turn: string,
    text: string,
    src: string,
}
const battlereports: battlereport[] = [
    {
        id: 1,
        linkId: 1,
        date: new Date('2020-10-09').toLocaleDateString("en-CA"),
        turn: 'Deployment.',
        text: `Battle report 2020-10-09: 3-player Free For All - 1500pts - King of the Hill4*4 feet table, deployment zone 12inch board corners, objective (hill marked with statue) 12inch from the 4th (empty) corner. Winner is the player controlling the objective at the end of 5th battleround. Ralf : Sylvaneth Gijs : Chaos Everchosen Jim : Kharadron Overlords Pictures are at end of phase Set Up:The Sylvaneth deployed their melee Kurnoth hunters with Durthu aimed at the objective, whilst the forest worth of dryads were set up to shield the bow wielding Hunters at the rear. Archeon was set up in the zone furthest from the objective, eager to swoop forward with varenguard, slaughterbeast and warriors flanking him close-by. The Kharadronss loaded everyone on foot in the Ironclad, with the balloon dwarfs deployed in tight formation around it.`,
        src: 'deployment.jpg',
    },
    {
        id: 2,
        linkId: 1,
        date: new Date('2020-10-09').toLocaleDateString("en-CA"),
        turn: 'Round one: Sylvaneth -> Everchosen -> Kharadron.',
        text: `The Sylvaneth split in two chunks, the Dryads heading to intercept the forces of chaos, whilst the kurnoth hunters and Durthu made a run (or more a slow jog) straight towards the objective. Archeon and most of his forces carefully moved towards the objective, maneuvering around the tower blocking their path to try and prevent the Kharadrons from drawing a clear line of sight. Only a single group of warriors advanced menacingly towards the dwarf forces. The Kharadron endrinriggers positioned themselves to get a bead on the Sylvaneth with their heavy weapons, causing only minor damage to durthu. Whilst the Ironclad slowly scraped its overloaded hull into a firing position and subsequently blasting (together with its garrison) the approaching group of chaos warriors to meet their gods.`,
        src: 'EOT_1.jpg',
    },
    {
        id: 3,
        linkId: 1,
        date: new Date('2020-10-09').toLocaleDateString("en-CA"),
        turn: 'Round two: Sylvaneth -> Kharadron -> Everchosen.',
        text: `The Sylvaneth continued the dryads partially towards the chaos flank, taking partial position in the awakened wyldwoods in the center of the board. Meanwhile Durthu and his accompanying Kurnoth hunters continued their slow jog around the blocking tower, closing in on the Kharadrons and coming close to controlling the objective. The Kharadron, seeing the looming shadow of Archeon in the distance, decide on carefully advancing toward the objective as far away from the forces of Chaos as they can. Though in their caution they fail to cause any damage with their ranged fire this turn. The Everchosen surged forward towards the Sylvaneth lines, slamming into the dryads with Archeon, the slaughterbeast and the Varanguard, butchering all but a single one.`,
        src: 'EOT_2.jpg',
    },
    {
        id: 4,
        linkId: 1,
        date: new Date('2020-10-09').toLocaleDateString("en-CA"),
        turn: 'Round three: Sylvaneth -> Everchosen -> Kharadron.',
        text: `With Archeon and the Varanguard bearing down on them, the Sylvaneth picked up the pace and ran to the objective to take up a defensive position, securing it from the approaching Kharadrons. Archeon and the slaughterbeast crashed into and subsequently squashed the Kurnoth archers in the sylvaneth rearguard, clearing the way for a dash towards the objective next turn. With the Sylvaneth swarming over the objective, the Kharadron decided to loose some weight by deploying a squad of arkhanouts and use the Ironclads Fly-High to reposition everyone except the unfortunate arkhanouts at the other side of the board. After touching down they let loose with every available weapon and managed to take down two varanguard and dealing severe damage to Archeon.`,
        src: 'EOT_3.jpg',
    },
    {
        id: 5,
        linkId: 1,
        date: new Date('2020-10-09').toLocaleDateString("en-CA"),
        turn: 'Round four: Sylvaneth -> Kharadron -> Everchosen.',
        text: `Seeing Archeon weakened, the Sylvaneth charged him with the Kurnoth hunters, managing to lay low the everchosen of chaos by the methodical relentless strikes of their weapons. Realising the objective was now up for grabs, the Kharadrons took a firm grip of the Ironclad as it took of into the sky once more. Touching down right next to the objective. Subsequently managing to take down Durthu with concentrated firepower. Having lost their Leader, the remaining forces of chaos tried to escape from the menacing horde of Kurnoth hunters by maneuvering around the other side of the tower ruins.`,
        src: 'EOT_4.jpg',
    },
    {
        id: 6,
        linkId: 1,
        date: new Date('2020-10-09').toLocaleDateString("en-CA"),
        turn: 'Round five: Sylvaneth -> Everchosen -> Kharadron.',
        text: `Seeing the Kharadrons landing on the objective in force, the Sylvaneth ran as fast as they could towards the objective, but they were to slow to reach the dwarven forces in time. The remnants of the chaos army completely ignored the Sylvaneth as they to ran at full pace towards the objective. Managing to claim the objective by weight of numbers, for now. Confident in their positioning, the Kharadrons deployed their thunderers from the Ironclad to regain control of the objective. The subsequent fire was supremely underwhelming, with the Silvaneth losing a single Kurnoth hunter and no casualties on the chaos side. MVP of this rounds shooting goes to the Kharadron general, who managed to fumble with his Phosphorite Bomblets and drop them fizzling in the mud. (rolling 2+ is difficult okay!)`,
        src: 'EOT_5.jpg',
    },
    {
        id: 7,
        linkId: 1,
        date: new Date('2020-10-09').toLocaleDateString("en-CA"),
        turn: 'End',
        text: `At the end of the game, the Kharadron were in control of the objective, thereby securing their victory.`,
        src: 'EOT_1_Kharadron.jpg',
    },
    {
        id: 8,
        linkId: 2,
        date: new Date('2020-09-25').toLocaleDateString("en-CA"),
        turn: 'Round 1:',
        text: `Old`,
        src: 'EOT_1.jpg',
    },
    {
        id: 9,
        linkId: 2,
        date: new Date('2020-09-25').toLocaleDateString("en-CA"),
        turn: 'Round 2:',
        text: `Old`,
        src: 'EOT_2.jpg',
    },
    {
        id: 10,
        linkId: 2,
        date: new Date('2020-09-25').toLocaleDateString("en-CA"),
        turn: 'Round 3:',
        text: `Old`,
        src: 'EOT_3.jpg',
    },
    {
        id: 11,
        linkId: 3,
        date: new Date('2021-04-30').toLocaleDateString("en-CA"),
        turn: 'Round 1: Cities of Sigmar',
        text: `The Duardin moved up to contest the objectives and getting ready to fire.`,
        src: 'img-1.jpg',
    },
    {
        id: 12,
        linkId: 3,
        date: new Date('2021-04-30').toLocaleDateString("en-CA"),
        turn: 'Round 1: Nighthaunt/Kharadron',
        text: `The nighthaunt moved closer to get ready for a massive charge, meanwhile the kharadron flew to max range and started barraging Gortek with massive fire.`,
        src: 'img-2.jpg',
    },
    {
        id: 13,
        linkId: 3,
        date: new Date('2021-04-30').toLocaleDateString("en-CA"),
        turn: 'Round 2: Nighthaunt/Kharadron',
        text: `The kharadron opent fire again on to Gortek this time finishing him off. This gave the nighthaunt enaugh confidence to charge in to the line and started slaughtering Duardin.`,
        src: 'img-3.jpg',
    },
    {
        id: 14,
        linkId: 3,
        date: new Date('2021-04-30').toLocaleDateString("en-CA"),
        turn: 'Round 2: Cities of Sigmar',
        text: `The Duardin scrambeld to get a defence going but they knew it was doomed at this point.`,
        src: 'img-4.jpg',
    },
    {
        id: 15,
        linkId: 3,
        date: new Date('2021-04-30').toLocaleDateString("en-CA"),
        turn: 'Round 3: Nighthaunt/Kharadron',
        text: `The hammerers and ironbreakers tried to make something happen but that failed aswell and it was a short surrender after.`,
        src: 'img-5.jpg',
    },
    {
        id: 16,
        linkId: 3,
        date: new Date('2021-05-01').toLocaleDateString("en-CA"),
        turn: 'Round 1: Maggotkin of Nurgle',
        text: `Primary objective most right. nurgle couldn't reach the objective.`,
        src: 'img-1.jpg',
    },
    {
        id: 17,
        linkId: 4,
        date: new Date('2021-05-01').toLocaleDateString("en-CA"),
        turn: 'Round 1: Sons of Behemat',
        text: `All the gargaents moved in range of the objectives and created a big advantage.`,
        src: 'img-2.jpg',
    },
    {
        id: 18,
        linkId: 4,
        date: new Date('2021-05-01').toLocaleDateString("en-CA"),
        turn: 'Round 2: Maggotkin of Nurgle',
        text: `Nurgle moved up closer to the objectives but couldn't capture them back and fell even futher behind.`,
        src: 'img-3.jpg',
    },
    {
        id: 19,
        linkId: 4,
        date: new Date('2021-05-01').toLocaleDateString("en-CA"),
        turn: 'Round 2: Sons of Behemat',
        text: `Triple gargeants charged the plague bearers for some good damage. while holding most of the objectives.`,
        src: 'img-4.jpg',
    },
    {
        id: 20,
        linkId: 4,
        date: new Date('2021-05-01').toLocaleDateString("en-CA"),
        turn: 'Round 3: Maggotkin of Nurgle',
        text: `On the right the Exalted Greater Daemon of Nurgle challenged the Mega-Gargeant to a fight. But failed to swing his sword because hes so fat and misses almost every attack (7 attacks thanks to all the buffs).`,
        src: 'img-5.jpg',
    },
    {
        id: 21,
        linkId: 4,
        date: new Date('2021-05-01').toLocaleDateString("en-CA"),
        turn: 'Round 3: Sons of Behemat',
        text: `The gargeants on the left repositioned for a charge at the blightkings and killed them. meanwhile the blightkings and beasts of nurgle finished of the Mega-Gargeant on the right`,
        src: 'img-6.jpg',
    },
    {
        id: 22,
        linkId: 4,
        date: new Date('2021-05-01').toLocaleDateString("en-CA"),
        turn: 'Round 4: Maggotkin of Nurgle',
        text: `All Nurgle forces moved to control the center and try to fight off the Mega-Gargeant. While summoning mulitple small groups of plague bearers to capture the objectives.`,
        src: 'img-7.jpg',
    },
    {
        id: 23,
        linkId: 4,
        date: new Date('2021-05-01').toLocaleDateString("en-CA"),
        turn: 'Round 4: Sons of Behemat',
        text: `The Garagants realizing that they were to far ahead didn't go for any risky moves and re-captured the left objective to stay in control of most of the objectives`,
        src: 'img-8.jpg',
    },
    {
        id: 24,
        linkId: 4,
        date: new Date('2021-05-01').toLocaleDateString("en-CA"),
        turn: 'Round 5:',
        text: `The Nurgle forces realizing they could't comeback from such a big deficit surrenderd and the Sons of behemat win`,
        src: 'img-9.jpg',
    },
]

export default battlereports