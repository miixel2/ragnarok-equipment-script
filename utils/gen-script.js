const geneText = (name, key, id, value, canSelectOnOption, actives) => {
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
    ${canSelectOnOption}: {
      actives: ${actives},
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

const groups = [
  {
    name: 'Ranged damage',
    option: 'longRangePercent',
    start: 2006051,
  },
];

for (const group of groups) {
  const cnt = 50;
  let start = 3;
  const end = 9;

  console.log(
    `// ${group.name} +x [${group.start} - ${group.start + (cnt - 1)}]`
  );

  for (let index = start; index <= end; index++) {
    console.log(
      geneText(
        `\`${group.name} +${Math.floor(index)}%\``,
        `${group.option}`,
        group.start + (start - 1),
        (index / 100).toFixed(2),
        'canSelectOnOption_1',
        '[...temporalManteausId]'
      )
    );
    start++;
  }
}
