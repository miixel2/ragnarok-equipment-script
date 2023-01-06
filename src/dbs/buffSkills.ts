import Big from 'big.js';
import { Character2 } from '../models/character2';
import { ClassKey } from '../models/class';
import { EquipmentSubType } from '../models/equipment';

export interface IBuffSkill {
  id: number;
  level: number;
  name: string;
  type?: 'skill' | 'item';

  eATK?: number;
  mATK?: number;
  atkPercent?: number;
  matkPercent?: number;
  atkPercent2?: number;
  mastery?: number;
  mulMeleeAtk?: number;
  buffAtkPercent?: number;
  pureAtk?: number;

  hpModA?: number;
  hpModB?: number;
  spModA?: number;
  spModB?: number;

  str?: number;
  agi?: number;
  vit?: number;
  int?: number;
  dex?: number;
  luk?: number;

  additionAtk?: {
    size?: number;
    element?: number;
    race?: number;
    class?: number;
    atkPercent2?: number;
    flatNamePercent?: number;
    skillElement?: number;
  };

  additionMAtk?: {
    size?: number;
    element?: number;
    race?: number;
    class?: number;
    matkPercent?: number;
    flatNamePercent?: number;
    skillElement?: number;
  };

  hit?: number;
  criRate?: number;
  aspd?: number;
  aspdFlat?: number;
  flee?: number;
  perfectDodge?: number;

  vct?: number;
  fct?: number;
  acd?: number;
  skillCD?: number;

  criticalPercent?: number;
  meleePercent?: number;
  longRangePercent?: number;
  penetrationPercent?: number;
  penetrationMPercent?: number;

  classActives?: ClassKey[];

  edp?: number;
  vi?: number;

  script: (character: Character2, _this: IBuffSkill) => void;
}

export const buffSkills: IBuffSkill[] = [
  {
    id: 29,
    name: 'Increase AGI',
    level: 10,
    classActives: [],
    agi: 12,
    aspd: 0.1,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 34,
    name: 'Blessing',
    level: 10,
    classActives: [],
    str: 10,
    dex: 10,
    int: 10,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 2,
    name: 'Sword Mastery',
    level: 10,
    classActives: [ClassKey.RuneKnight],
    mastery: 0,
    script: (character: Character2, _this: IBuffSkill): void => {
      _this.mastery = 0;
      if (
        character.rightHand &&
        [EquipmentSubType.SWORD, EquipmentSubType.DAGGER].includes(
          character.rightHand.subType
        )
      ) {
        _this.mastery = 40;
      }
    },
  },
  {
    id: 3,
    name: 'Two-Handed Sword Mastery',
    level: 10,
    classActives: [ClassKey.RuneKnight],
    mastery: 0,
    script: (character: Character2, _this: IBuffSkill): void => {
      _this.mastery = 0;
      if (
        character.rightHand &&
        character.rightHand.subType === EquipmentSubType.TWO_HANDED_SWORD
      ) {
        _this.mastery = 40;
      }
    },
  },
  {
    id: 60,
    name: 'Two hand Quicken',
    level: 10,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 55,
    name: 'Spear Mastery',
    level: 10,
    classActives: [ClassKey.RuneKnight],
    mastery: 0,
    script: (character: Character2, _this: IBuffSkill): void => {
      _this.mastery = 0;
      if (
        character.rightHand &&
        character.rightHand.subType === EquipmentSubType.SPEAR
      ) {
        _this.mastery = 40;
      }
    },
  },
  {
    id: 134,
    name: 'Katar Mastery',
    level: 10,
    classActives: [ClassKey.GuillotineCross],
    mastery: 0,
    script: (character: Character2, _this: IBuffSkill): void => {
      _this.mastery = 0;
      if (
        character.rightHand &&
        character.rightHand.subType === EquipmentSubType.KATAR
      ) {
        _this.mastery = 30;
      }
    },
  },
  {
    id: 357,
    name: 'Spear Dynamo',
    level: 5,
    classActives: [ClassKey.RuneKnight],
    buffAtkPercent: 0.25,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 359,
    name: 'Frenzy',
    level: 1,
    classActives: [ClassKey.RuneKnight],
    buffAtkPercent: 2,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 12731,
    name: 'Turisus Runestone',
    level: 1,
    type: 'item',
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBuffSkill): void => {
      character.flatDmg = Number(
        new Big(character.flatDmg).plus(2.5).valueOf()
      );
    },
  },
  {
    id: 376,
    name: 'Advanced Katar Mastery',
    level: 5,
    classActives: [ClassKey.GuillotineCross],
    buffAtkPercent: 0,
    script: (character: Character2, _this: IBuffSkill): void => {
      if (
        character.rightHand &&
        character.rightHand.subType === EquipmentSubType.KATAR
      ) {
        character.akm = 1.2;
      }
    },
  },
  {
    id: 378,
    name: 'Enchant Deadly Poison',
    level: 5,
    classActives: [ClassKey.GuillotineCross],
    edp: 4,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 5001,
    name: 'Dark Claw',
    level: 5,
    classActives: [ClassKey.GuillotineCross],
    mulMeleeAtk: 1.5,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
  {
    id: 2021,
    name: 'Venom Impression',
    level: 5,
    classActives: [ClassKey.GuillotineCross],
    vi: 0.5,
    script: (character: Character2, _this: IBuffSkill): void => {},
  },
];
