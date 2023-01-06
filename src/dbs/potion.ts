import { Character2 } from '../models/character2';
import { ClassKey } from '../models/class';
import { IBuffSkill } from './buffSkills';

export interface IPotionItem extends IBuffSkill {
  potionAtk?: number;
  potionMAtk?: number;
}

export const potionItems: IPotionItem[] = [
  {
    id: 645,
    level: 1,
    name: 'Awakening Potion',
    classActives: [ClassKey.ArchBishop, ClassKey.Minstrel, ClassKey.Wanderer],
    aspd: 0.1,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 656,
    level: 1,
    name: 'Awakening Potion',
    classActives: [
      ClassKey.Sura,
      ClassKey.GuillotineCross,
      ClassKey.Ranger,
      ClassKey.Sorcerer,
    ],
    aspd: 0.15,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 657,
    level: 1,
    name: 'Berserk Potion',
    classActives: [
      ClassKey.Genetic,
      ClassKey.Mechanic,
      ClassKey.RoyalGuard,
      ClassKey.RuneKnight,
      ClassKey.ShadowChaser,
      ClassKey.Warlock,
    ],
    aspd: 0.2,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 12437,
    level: 1,
    name: 'Enrich Celermine Juice',
    classActives: [],
    aspd: 0.1,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 12883,
    level: 1,
    name: 'Almighty',
    classActives: [],
    potionAtk: 30,
    potionMAtk: 30,
    str: 0,
    agi: 0,
    vit: 0,
    dex: 0,
    int: 0,
    luk: 0,
    script: (character: Character2, _this: IBuffSkill): void => {
      if (
        character.comboSet.indexOf('12883') === -1 &&
        character.comboSet.indexOf('14886') === -1
      ) {
        _this.str = 10;
        _this.agi = 10;
        _this.vit = 10;
        _this.dex = 10;
        _this.int = 10;
        _this.luk = 10;

        character.comboSet.push('12883');
      }
    },
  },
  {
    id: 14886,
    level: 1,
    name: 'Ultimate Cook',
    classActives: [],
    potionAtk: 30,
    potionMAtk: 30,
    str: 0,
    agi: 0,
    vit: 0,
    dex: 0,
    int: 0,
    luk: 0,
    script: (character: Character2, _this: IBuffSkill): void => {
      if (
        character.comboSet.indexOf('14886') === -1 &&
        character.comboSet.indexOf('12883') === -1
      ) {
        _this.str = 10;
        _this.agi = 10;
        _this.vit = 10;
        _this.dex = 10;
        _this.int = 10;
        _this.luk = 10;

        character.comboSet.push('14886');
      }
    },
  },
  {
    id: 23898,
    level: 1,
    name: 'Power Booster',
    classActives: [],
    potionAtk: 30,
    potionMAtk: 30,
    atkPercent2: 0.01,
    matkPercent: 0.01,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 12796,
    level: 1,
    name: 'Red Booster',
    classActives: [],
    potionAtk: 30,
    potionMAtk: 30,
    hpModB: 0.1,
    spModB: 0.1,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 23475,
    level: 1,
    name: 'Unlimited Drink',
    classActives: [],
    hpModB: 0.05,
    spModB: 0.05,
    criticalPercent: 0.05,
    longRangePercent: 0.05,
    additionMAtk: {
      element: 0.05,
    },
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 12418,
    level: 1,
    name: 'Full SwingK',
    classActives: [],
    potionAtk: 50,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 12792,
    level: 1,
    name: 'Suprem Battle Pill',
    classActives: [],
    hpModB: -0.05,
    spModB: -0.05,
    additionAtk: {
      class: 0.1,
    },
    additionMAtk: {
      matkPercent: 0.1,
    },
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 12429,
    level: 1,
    name: 'Savage BBQ',
    classActives: [],
    str: 20,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 12433,
    level: 1,
    name: 'Drocera Herb Stew',
    classActives: [],
    agi: 20,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 12431,
    level: 1,
    name: 'Minor Brisket',
    classActives: [],
    vit: 20,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 12430,
    level: 1,
    name: 'Wug Blood Cocktail',
    classActives: [],
    int: 20,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 12432,
    level: 1,
    name: 'Siroma Icetea',
    classActives: [],
    dex: 20,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 12434,
    level: 1,
    name: 'Petti Tail Noodle',
    classActives: [],
    luk: 20,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 6623,
    level: 1,
    name: 'Rough Energy Crystal',
    classActives: [],
    eATK: 5,
    mATK: 5,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 6624,
    level: 1,
    name: 'Purified Energy Crysta',
    classActives: [],
    eATK: 10,
    mATK: 10,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 6625,
    level: 1,
    name: 'High Energy Crystal',
    classActives: [],
    eATK: 15,
    mATK: 15,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
];
