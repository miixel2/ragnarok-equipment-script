const geneText = (name, key, id, value, actives1, actives2, actives3) => {
  return `{
    id: ${id},
    name: ${name},
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ENCHANT,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    options: {
      ${key}: ${value},
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    canSelectOnOption_1: {
      actives: ${actives1},
    },
    canSelectOnOption_2: {
      actives: ${actives2},
    },
    canSelectOnOption_3: {
      actives: ${actives3},
    },
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },`;
};

// let start = 2001;
// for (let index = 1; index <= 10; index++) {
//   console.log(
//     geneText(
//       `\`Phy. damage to ${name} +${Math.floor(value * 100)}%\``,
//       'physicalNeutralPercent',
//       2000000 + start,
//       index / 100,
//       'canSelectOnOption_1',
//       '[...vmGroup2, ...vmGroup3, ...vmGroup4, ...vmGroup5]'
//     ),
//   );
//   start++;
// }

const magicDmgElement = [
  {
    name: 'Magic damage to Neutral',
    option: 'magicalNeutralPercent',
    start: 2100001,
    cnt: 200,
    startValue: 10,
    endValue: 25,
  },
  {
    name: 'Magic damage to Water',
    option: 'magicalWaterPercent',
    start: 2100201,
    cnt: 200,
    startValue: 10,
    endValue: 25,
  },
  {
    name: 'Magic damage to Earth',
    option: 'magicalEarthPercent',
    start: 2100401,
    cnt: 200,
    startValue: 10,
    endValue: 25,
  },
  {
    name: 'Magic damage to Fire',
    option: 'magicalFirePercent',
    start: 2100601,
    cnt: 200,
    startValue: 10,
    endValue: 25,
  },
  {
    name: 'Magic damage to Wind',
    option: 'magicalWindPercent',
    start: 2100801,
    cnt: 200,
    startValue: 10,
    endValue: 25,
  },
  {
    name: 'Magic damage to Poison',
    option: 'magicalPoisonPercent',
    start: 2101001,
    cnt: 200,
    startValue: 10,
    endValue: 25,
  },
  {
    name: 'Magic damage to Holy',
    option: 'magicalHolyPercent',
    start: 2101201,
    cnt: 200,
    startValue: 10,
    endValue: 25,
  },
  {
    name: 'Magic damage to Shadow',
    option: 'magicalShadowPercent',
    start: 2101401,
    cnt: 200,
    startValue: 10,
    endValue: 25,
  },
  {
    name: 'Magic damage to Ghost',
    option: 'magicalGhostPercent',
    start: 2101601,
    cnt: 200,
    startValue: 10,
    endValue: 25,
  },
  {
    name: 'Magic damage to Undead',
    option: 'magicalUndeadPercent',
    start: 2101801,
    cnt: 200,
    startValue: 10,
    endValue: 25,
  },
];

const matkPercent = [
  {
    name: 'MATK',
    option: 'matkPercent',
    start: 2102001,
    cnt: 100,
    startValue: 11,
    endValue: 15,
  },
];

const magicDmgRace = [
  {
    name: 'Magic damage to Angel',
    option: 'magicalRaceAngelPercent',
    start: 2102101,
    cnt: 200,
    startValue: 10,
    endValue: 20,
  },
  {
    name: 'Magic damage to Brute',
    option: 'magicalRaceBrutePercent',
    start: 2102301,
    cnt: 200,
    startValue: 10,
    endValue: 20,
  },
  {
    name: 'Magic damage to Demi-Human',
    option: 'magicalRaceDemiHumanPercent',
    start: 2102501,
    cnt: 200,
    startValue: 10,
    endValue: 20,
  },
  {
    name: 'Magic damage to Demon',
    option: 'magicalRaceDemonPercent',
    start: 2102701,
    cnt: 200,
    startValue: 10,
    endValue: 20,
  },
  {
    name: 'Magic damage to Dragon',
    option: 'magicalRaceDragonPercent',
    start: 2102901,
    cnt: 200,
    startValue: 10,
    endValue: 20,
  },
  {
    name: 'Magic damage to Fish',
    option: 'magicalRaceFishPercent',
    start: 2103101,
    cnt: 200,
    startValue: 10,
    endValue: 20,
  },
  {
    name: 'Magic damage to Formless',
    option: 'magicalRaceFormlessPercent',
    start: 2103301,
    cnt: 200,
    startValue: 10,
    endValue: 20,
  },
  {
    name: 'Magic damage to Insect',
    option: 'magicalRaceInsectPercent',
    start: 2103501,
    cnt: 200,
    startValue: 10,
    endValue: 20,
  },
  {
    name: 'Magic damage to Plant',
    option: 'magicalRacePlantPercent',
    start: 2103701,
    cnt: 200,
    startValue: 10,
    endValue: 20,
  },
  {
    name: 'Magic damage to Undead',
    option: 'magicalRaceUndeadPercent',
    start: 2103901,
    cnt: 200,
    startValue: 10,
    endValue: 20,
  },
  {
    name: 'Magic damage to Boss',
    option: 'magicalBossPercent',
    start: 2104101,
    cnt: 200,
    startValue: 10,
    endValue: 20,
  },
  {
    name: 'Magic damage to Normal',
    option: 'magicalNomalPercent',
    start: 2104301,
    cnt: 200,
    startValue: 10,
    endValue: 20,
  },
];

const byPassMDEFRace = [
  {
    name: 'Angel',
    option: 'penetrationMRaceAngelPercent',
    start: 2105001,
    cnt: 100,
    startValue: 10,
    endValue: 30,
  },
  {
    name: 'Brute',
    option: 'penetrationMRaceBrutePercent',
    start: 2105101,
    cnt: 100,
    startValue: 10,
    endValue: 30,
  },
  {
    name: 'Demi-Human',
    option: 'penetrationMRaceDemiHumanPercent',
    start: 2105201,
    cnt: 100,
    startValue: 10,
    endValue: 30,
  },
  {
    name: 'Demon',
    option: 'penetrationMRaceDemonPercent',
    start: 2105301,
    cnt: 100,
    startValue: 10,
    endValue: 30,
  },
  {
    name: 'Dragon',
    option: 'penetrationMRaceDragonPercent',
    start: 2105401,
    cnt: 100,
    startValue: 10,
    endValue: 30,
  },
  {
    name: 'Fish',
    option: 'penetrationMRaceFishPercent',
    start: 2105501,
    cnt: 100,
    startValue: 10,
    endValue: 30,
  },
  {
    name: 'Formless',
    option: 'penetrationMRaceFormlessPercent',
    start: 2105601,
    cnt: 100,
    startValue: 10,
    endValue: 30,
  },
  {
    name: 'Insect',
    option: 'penetrationMRaceInsectPercent',
    start: 2105701,
    cnt: 100,
    startValue: 10,
    endValue: 30,
  },
  {
    name: 'Plant',
    option: 'penetrationMRacePlantPercent',
    start: 2105801,
    cnt: 100,
    startValue: 10,
    endValue: 30,
  },
  {
    name: 'Undead',
    option: 'penetrationMRaceUndeadPercent',
    start: 2105901,
    cnt: 100,
    startValue: 10,
    endValue: 30,
  },
  {
    name: 'Boss',
    option: 'penetrationMBossPercent',
    start: 2106001,
    cnt: 100,
    startValue: 10,
    endValue: 30,
  },
  {
    name: 'Normal',
    option: 'penetrationMNormalPercent',
    start: 2106101,
    cnt: 100,
    startValue: 10,
    endValue: 30,
  },
];

const matkFlat = [
  {
    name: 'MATK',
    option: 'eMATK',
    start: 2107001,
    cnt: 200,
    startValue: 51,
    endValue: 60,
  },
];

const skillDelay = [
  {
    name: 'Variable cast time',
    option: 'vct',
    start: 2108001,
    cnt: 100,
    startValue: 1,
    endValue: 20,
  },
  {
    name: 'After cast delay',
    option: 'acd',
    start: 2108201,
    cnt: 100,
    startValue: 1,
    endValue: 20,
  },
];

const aspdPercent = [
  {
    name: 'ASPD',
    option: 'aspd',
    start: 2108501,
    cnt: 100,
    startValue: 11,
    endValue: 20,
  },
];

const aspdFlat = [
  {
    name: 'ASPD',
    option: 'aspdFlat',
    start: 2108601,
    cnt: 100,
    startValue: 1,
    endValue: 5,
  },
];

const criRate = [
  {
    name: 'CRIT',
    option: 'criRate',
    start: 2108701,
    cnt: 100,
    startValue: 1,
    endValue: 20,
  },
];

const atkFlat = [
  {
    name: 'ATK',
    option: 'eATK',
    start: 2007001,
    cnt: 200,
    startValue: 51,
    endValue: 60,
  },
];

const criDmgPercent = [
  {
    name: 'Critical damage',
    option: 'criticalPercent',
    start: 2006001,
    cnt: 50,
    startValue: 11,
    endValue: 20,
  },
];

const physicalSize = [
  {
    name: 'Phy. damage to Small',
    option: 'physicalSmallPercent',
    start: 2008001,
    cnt: 100,
    startValue: 3,
    endValue: 20,
  },
  {
    name: 'Phy. damage to Medium',
    option: 'physicalMediumPercent',
    start: 2008101,
    cnt: 100,
    startValue: 3,
    endValue: 20,
  },
  {
    name: 'Phy. damage to Large',
    option: 'physicalLargePercent',
    start: 2008201,
    cnt: 100,
    startValue: 3,
    endValue: 20,
  },
];

const magicSize = [
  {
    name: 'Magic damage to Small',
    option: 'magicalSmallPercent',
    start: 2109001,
    cnt: 100,
    startValue: 3,
    endValue: 20,
  },
  {
    name: 'Magic damage to Medium',
    option: 'magicalMediumPercent',
    start: 2109101,
    cnt: 100,
    startValue: 3,
    endValue: 20,
  },
  {
    name: 'Magic damage to Large',
    option: 'magicalLargePercent',
    start: 2109201,
    cnt: 100,
    startValue: 3,
    endValue: 20,
  },
];

for (const group of magicSize) {
  const cnt = group.cnt;
  let start = group.startValue;
  const end = group.endValue;

  console.log(
    `// ${group.name} +x% [${group.start} - ${group.start + (cnt - 1)}]`
  );

  // console.log(
  //   `// ${group.name} +x [${group.start} - ${group.start + (cnt - 1)}]`
  // );

  // console.log(
  //   `// Bypass +x% of DEF on ${group.name} [${group.start} - ${
  //     group.start + (cnt - 1)
  //   }]`
  // );

  for (let index = start; index <= end; index++) {
    console.log(
      geneText(
        `\`${group.name} +${Math.floor(index)}%\``,
        `${group.option}`,
        group.start + (start - 1),
        index / 100,
        '[]',
        '[...osWeapon]',
        '[]'
      )
    );
    start++;
  }
}
