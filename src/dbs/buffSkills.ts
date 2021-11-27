import { Character2 } from '../models/character2';
import { ClassKey } from '../models/class';
import { EquipmentSubType } from '../models/equipment';

export interface IBuffSkill {
  id: number;
  level: number;
  name: string;

  eATK?: number;
  mATK?: number;
  atkPercent?: number;
  matkPercent?: number;
  atkPercent2?: number;
  matkPercent2?: number;
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

  criticalPercent?: number;
  penetrationPercent?: number;

  classActives?: ClassKey[];

  edp?: number;
  vi?: number;

  script: (character: Character2, _this: IBuffSkill) => void;
}

export class BuffSkill implements IBuffSkill {
  public id: number = null;
  public name: string = null;
  public level: number = 1;

  public script: (character: Character2, _this: IBuffSkill) => void = null;

  constructor(data: IBuffSkill = null, skillDatas: IBuffSkill[]) {
    if (data) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          this[key] = element;
        }
      }

      this.findScript(data, skillDatas);
    }
  }

  private findScript(data: IBuffSkill, skillDatas: IBuffSkill[]): void {
    const obj = skillDatas.find((f) => f.id === data.id);
    if (obj) {

      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const element = obj[key];

          this[key] = element;
        }
      }
    }
  }
}

export const buffSkills: IBuffSkill[] = [
  {
    id: 34,
    name: 'Blessing',
    level: 10,
    classActives: [],
    str: 10,
    dex: 10,
    int: 10,
    script: (character: Character2, _this: IBuffSkill): void => { }
  },
  {
    id: 2,
    name: 'Sword Mastery',
    level: 10,
    classActives: [ClassKey.RuneKnight],
    mastery: 0,
    script: (character: Character2, _this: IBuffSkill): void => {
      _this.mastery = 0;
      if (character.rightHand && character.rightHand.subType === EquipmentSubType.SWORD) {
        _this.mastery = 40;
      }
    }
  },
  {
    id: 3,
    name: 'Two-Handed Sword Mastery',
    level: 10,
    classActives: [ClassKey.RuneKnight],
    mastery: 0,
    script: (character: Character2, _this: IBuffSkill): void => {
      _this.mastery = 0;
      if (character.rightHand && character.rightHand.subType === EquipmentSubType.TWO_HANDED_SWORD) {
        _this.mastery = 40;
      }
    }
  },
  {
    id: 55,
    name: 'Spear Mastery',
    level: 10,
    classActives: [ClassKey.RuneKnight],
    mastery: 0,
    script: (character: Character2, _this: IBuffSkill): void => {
      _this.mastery = 0;
      if (character.rightHand && character.rightHand.subType === EquipmentSubType.SPEAR) {
        _this.mastery = 40;
      }
    }
  },
  {
    id: 134,
    name: 'Katar Mastery',
    level: 10,
    classActives: [ClassKey.GuillotineCross],
    mastery: 0,
    script: (character: Character2, _this: IBuffSkill): void => {
      _this.mastery = 0;
      if (character.rightHand && character.rightHand.subType === EquipmentSubType.KATAR) {
        _this.mastery = 30;
      }
    }
  },
  {
    id: 357,
    name: 'Spear Dynamo',
    level: 5,
    classActives: [ClassKey.RuneKnight],
    buffAtkPercent: 0.25,
    script: (character: Character2, _this: IBuffSkill): void => { }
  },
  {
    id: 355,
    name: 'Aura Blade',
    level: 5,
    classActives: [ClassKey.RuneKnight],
    pureAtk: 100,
    script: (character: Character2, _this: IBuffSkill): void => { }
  },
  {
    id: 359,
    name: 'Frenzy',
    level: 1,
    classActives: [ClassKey.RuneKnight],
    buffAtkPercent: 2,
    script: (character: Character2, _this: IBuffSkill): void => { }
  },
  {
    id: 376,
    name: 'Advanced Katar Mastery',
    level: 5,
    classActives: [ClassKey.GuillotineCross],
    buffAtkPercent: 0,
    script: (character: Character2, _this: IBuffSkill): void => {
      if (character.rightHand && character.rightHand.subType === EquipmentSubType.KATAR) {
        character.akm = 1.2;
      }
    }
  },
  {
    id: 378,
    name: 'Enchant Deadly Poison',
    level: 5,
    classActives: [ClassKey.GuillotineCross],
    edp: 4,
    script: (character: Character2, _this: IBuffSkill): void => { }
  },
  {
    id: 5001,
    name: 'Dark Claw',
    level: 5,
    classActives: [ClassKey.GuillotineCross],
    mulMeleeAtk: 2.5,
    script: (character: Character2, _this: IBuffSkill): void => { }
  },
  {
    id: 2021,
    name: 'Venom Impression',
    level: 5,
    classActives: [ClassKey.GuillotineCross],
    vi: 0.5,
    script: (character: Character2, _this: IBuffSkill): void => { }
  }
];
