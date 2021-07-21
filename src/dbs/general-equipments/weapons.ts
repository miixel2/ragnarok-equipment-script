import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';

export const weapons: IBaseEquipment[] = [
  {
    id: 1252,
    name: 'Katar [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 1117,
    name: 'Katana [4]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.additionAtk.atkPercent = Math.floor(upgrade / 2) * 0.01;
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.additionDef.atkPercent = Math.floor(upgrade / 2) * 0.01;
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
];
