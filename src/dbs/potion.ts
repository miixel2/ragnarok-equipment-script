import { Character2 } from '../models/character2';
import { IBuffSkill } from './buffSkills';

export interface IPotionItem extends IBuffSkill {
  potionAtk?: number;
  potionMAtk?: number;
}

export const potionItems: IPotionItem[] = [
  {
    id: 12883,
    level: 1,
    name: 'Almighty',
    classActives: [],
    potionAtk: 30,
    potionMAtk: 30,
    str: 10,
    agi: 10,
    vit: 10,
    dex: 10,
    int: 10,
    luk: 10,
    script: (character: Character2, _this: IBuffSkill): void => { }
  },
  {
    id: 23898,
    level: 1,
    name: 'Power Booster',
    classActives: [],
    potionAtk: 30,
    potionMAtk: 30,
    atkPercent2: 0.01,
    matkPercent2: 0.01,
    script: (character: Character2, _this: IBuffSkill): void => { }
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
    script: (character: Character2, _this: IBuffSkill): void => { }
  },
  {
    id: 23475,
    level: 1,
    name: 'Unlimited Drink',
    classActives: [],
    hpModB: 0.05,
    spModB: 0.05,
    criticalPercent: 0.05,
    script: (character: Character2, _this: IBuffSkill): void => { }
  },
  {
    id: 12418,
    level: 1,
    name: 'Full SwingK',
    classActives: [],
    potionAtk: 50,
    script: (character: Character2, _this: IBuffSkill): void => { }
  },
  {
    id: 6623,
    level: 1,
    name: 'Rough Energy Crystal',
    classActives: [],
    potionAtk: 5,
    potionMAtk: 5,
    script: (character: Character2, _this: IBuffSkill): void => { }
  },
  {
    id: 6624,
    level: 1,
    name: 'Purified Energy Crysta',
    classActives: [],
    potionAtk: 10,
    potionMAtk: 10,
    script: (character: Character2, _this: IBuffSkill): void => { }
  },
  {
    id: 6625,
    level: 1,
    name: 'High Energy Crystal',
    classActives: [],
    potionAtk: 15,
    potionMAtk: 15,
    script: (character: Character2, _this: IBuffSkill): void => { }
  },
];
