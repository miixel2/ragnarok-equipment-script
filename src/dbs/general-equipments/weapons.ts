import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import { E_Element } from '../../models/element';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';
import { MonsterRace } from '../../models/monster';

export const weapons: IBaseEquipment[] = [
  {
    id: 1253,
    name: 'Katar [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    baseDef: 0,
    baseATK: 148,
    level: 3,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 1,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 1117,
    name: 'Katana [4]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 60,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 21018,
    name: 'Lindy Hop [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 340,
    level: 4,
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
      atkPercent2: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.additionAtk.class = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
    }
  },
  {
    id: 28010,
    name: 'Juliette D Rachel [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 300,
    level: 4,
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
      atkPercent2: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.additionAtk.class = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
    }
  },
  {
    id: 28007,
    name: 'Katar of Crimson [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 0,
    baseATK: 130,
    level: 3,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;

      if (upgrade > 15) {
        _this.eATK = 15 * 15;
      } else {
        _this.eATK = upgrade * upgrade;
      }

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 5;
      }
    }
  },
  {
    id: 21015,
    name: 'Two-Handed Sword of Crimson [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 0,
    baseATK: 170,
    level: 3,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      const upgrade = _this.equipUpgradeValue;

      if (upgrade > 15) {
        _this.eATK = 15 * 15;
      } else {
        _this.eATK = upgrade * upgrade;
      }

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 5;
      }
    }
  },
  {
    id: 16040,
    name: 'Mace of Crimson [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.MACE,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 0,
    baseATK: 80,
    level: 3,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;

      const upgrade = _this.equipUpgradeValue;

      if (upgrade > 15) {
        _this.eATK = 15 * 15;
      } else {
        _this.eATK = upgrade * upgrade;
      }

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 5;
      }
    }
  },
  {
    id: 1185,
    name: 'Violet Fear [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 275,
    level: 4,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 1186,
    name: 'Death Guidance [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 200,
    level: 4,
    equipUpgradeValue: 0,
    str: 5,
    agi: 2,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 1292,
    name: 'Upgrade Katar [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 0,
    baseATK: 80,
    level: 3,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade * 10;
      _this.criticalPercent = Number((new Big(0.02)).mul(upgrade).valueOf());

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 10;
      }
    }
  },
  {
    id: 28000,
    name: 'Thanos Katar [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 0,
    baseATK: 220,
    level: 3,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 6,
    int: 6,
    dex: 0,
    luk: -6,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 28008,
    name: 'Vicious Mind Katar [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 180,
    level: 4,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      if (upgrade > 15) {
        _this.eATK = 15 * 15;
      } else {
        _this.eATK = upgrade * upgrade;
      }
    }
  },
  {
    id: 21016,
    name: 'Vicious Mind Two-Handed Sword [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 220,
    level: 4,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      if (upgrade > 15) {
        _this.eATK = 15 * 15;
      } else {
        _this.eATK = upgrade * upgrade;
      }
    }
  },
  {
    id: 13455,
    name: 'Vicious Mind Sabre [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 135,
    level: 4,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight, ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      if (upgrade > 15) {
        _this.eATK = 15 * 15;
      } else {
        _this.eATK = upgrade * upgrade;
      }
    }
  },
  {
    id: 21011,
    name: 'Giant Blade [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 300,
    level: 4,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;

      const baseStr = character.class.str0;

      if (baseStr < 110) {
        _this.eATK = -250;
      }

      const upgrade = _this.equipUpgradeValue;
      _this.criticalPercent = Number((new Big(upgrade)).mul(0.01).valueOf());
    }
  },
  {
    id: 13412,
    name: 'Twin Edge of Naght Sieger [3]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 150,
    level: 4,
    element: E_Element.WATER,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight, ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 13413,
    name: 'Twin Edge of Naght Sieger [3]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 160,
    level: 4,
    element: E_Element.FIRE,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight, ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 21038,
    name: 'Oriental Sword [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 0,
    baseATK: 180,
    level: 4,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = Number((new Big(Math.floor(upgrade / 2))).mul(10).valueOf());
    }
  },
  {
    id: 28039,
    name: 'Shiver Katar [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 0,
    baseATK: 185,
    level: 4,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.race = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = Number((new Big(Math.floor(upgrade / 2))).mul(10).valueOf());
      _this.criticalPercent = Number((new Big(Math.floor(upgrade / 3))).mul(0.04).valueOf());

      const trueRace = [MonsterRace.BRUTE, MonsterRace.DEMI_HUMAN].includes(character.monster.race);
      if (upgrade >= 7 && trueRace) {
        _this.additionAtk.race = Number(new Big(0.15).valueOf());

        if (upgrade >= 11) {
          _this.additionAtk.race = Number(new Big(_this.additionAtk.race).plus(0.2).valueOf());
        }
      }
    }
  },
  {
    id: 1208,
    name: 'Main Gauche [4]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 43,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 1205,
    name: 'Cutter [4]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 30,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 1102,
    name: 'Sword [4]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 25,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 28705,
    name: 'Dagger of Crimson [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    baseDef: 0,
    baseATK: 55,
    level: 3,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;

      const upgrade = _this.equipUpgradeValue;

      if (upgrade > 15) {
        _this.eATK = 15 * 15;
      } else {
        _this.eATK = upgrade * upgrade;
      }

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 5;
      }
    }
  },
  {
    id: 13071,
    name: 'Upgrade Dagger [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 0,
    baseATK: 55,
    level: 3,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade * 10;

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 5;
      }
    }
  },
  {
    id: 13090,
    name: 'Face Worm Queen Leg [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    baseDef: 0,
    baseATK: 180,
    level: 4,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 3,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 13035,
    name: 'Sandstorm [4]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 50,
    level: 2,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    hpModB: 0.05,
    spModA: 20,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 13454,
    name: 'Saber of Crimson [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    baseDef: 0,
    baseATK: 85,
    level: 3,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;

      const upgrade = _this.equipUpgradeValue;

      if (upgrade > 15) {
        _this.eATK = 15 * 15;
      } else {
        _this.eATK = upgrade * upgrade;
      }

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 5;
      }
    }
  },
  {
    id: 28706,
    name: 'Vicious Mind Dagger [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 105,
    level: 4,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight, ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      if (upgrade > 15) {
        _this.eATK = 15 * 15;
      } else {
        _this.eATK = upgrade * upgrade;
      }
    }
  },
  {
    id: 13017,
    name: 'Ice Pick [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 0,
    baseATK: 70,
    level: 4,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
];
