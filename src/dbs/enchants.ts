import Big from 'big.js';
import { Character2 } from '../models/character2';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation, CompoundOn } from '../models/equipment';
import { costumeIds } from './costumes';

const headGearLab5 = [18971, 18982];
const malangdo = [21018, 28010, 1185, 1186];
const tempBoots = [22006, 22011];
const costumes = costumeIds;
const mora = [15039, 15037];

export const enchants: IBaseEquipment[] = [
  {
    id: 4982,
    name: 'STR Supplement Reactor',
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
    enchantActives: [15128],
    canSelectOnSlot2: true,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;

      if (character.bodyGear) {
        const upgradeArmor = character.bodyGear.equipUpgradeValue;
        const baseStr = character.class.str0;

        const multiplierStrLuk = Math.floor((baseStr) / 10);
        _this.eATK = multiplierStrLuk * 5;

        if (upgradeArmor >= 7) {
          _this.eATK += 10;
        }
      }
    }
  },
  {
    id: 4986,
    name: 'Attack Supplement Reactor',
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 20,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    enchantActives: [15128, 20773],
    canSelectOnSlot2: true,
    canSelectOnSlot3: true,
    canSelectOnSlot4: true,
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4994,
    name: 'Rune of Strength Lv 1',
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
      atkPercent: 0,
      atkPercent2: 0
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
    enchantActives: [15147],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.atkPercent = 0;
      _this.str = 0;

      if (character.bodyGear) {
        const upgradeArmor = character.bodyGear.equipUpgradeValue;

        if (upgradeArmor >= 7) {
          _this.str = 5;

          if (upgradeArmor >= 10) {
            _this.additionAtk.atkPercent = 0.05;
          }
        }
      }
    }
  },
  {
    id: 4995,
    name: 'Rune of Strength Lv 2',
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
      atkPercent: 0,
      atkPercent2: 0
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
    enchantActives: [15147],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.atkPercent = 0;
      _this.str = 0;

      if (character.bodyGear) {
        const upgradeArmor = character.bodyGear.equipUpgradeValue;

        if (upgradeArmor >= 7) {
          _this.str = 6;

          if (upgradeArmor >= 11) {
            _this.str = 7;
            _this.additionAtk.atkPercent = 0.07;
          }
        }
      }
    }
  },
  {
    id: 4996,
    name: 'Rune of Strength Lv 3',
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
      atkPercent: 0,
      atkPercent2: 0
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
    enchantActives: [15147],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.atkPercent = 0;
      _this.str = 0;

      if (character.bodyGear) {
        const upgradeArmor = character.bodyGear.equipUpgradeValue;

        if (upgradeArmor >= 7) {
          _this.str = 7;

          if (upgradeArmor >= 12) {
            _this.str = 8;
            _this.additionAtk.atkPercent = 0.08;
          }

          if (upgradeArmor >= 13) {
            _this.str = 9;
            _this.additionAtk.atkPercent = 0.10;
          }
        }
      }
    }
  },
  {
    id: 29003,
    name: 'Rune of Dexterity Lv 1',
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
    enchantActives: [15147],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.dex = 0;

      if (character.bodyGear) {
        const upgradeArmor = character.bodyGear.equipUpgradeValue;

        if (upgradeArmor >= 7) {
          _this.dex = 5;
        }
      }
    }
  },
  {
    id: 29004,
    name: 'Rune of Dexterity Lv 2',
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
    enchantActives: [15147],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.dex = 0;

      if (character.bodyGear) {
        const upgradeArmor = character.bodyGear.equipUpgradeValue;

        if (upgradeArmor >= 7) {
          _this.dex = 6;

          if (upgradeArmor >= 11) {
            _this.dex = 7;
          }
        }
      }
    }
  },
  {
    id: 29005,
    name: 'Rune of Dexterity Lv 3',
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
    enchantActives: [15147],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.dex = 0;

      if (character.bodyGear) {
        const upgradeArmor = character.bodyGear.equipUpgradeValue;

        if (upgradeArmor >= 7) {
          _this.dex = 7;

          if (upgradeArmor >= 12) {
            _this.dex = 8;
          }

          if (upgradeArmor >= 13) {
            _this.dex = 9;
          }
        }
      }
    }
  },
  {
    id: 29006,
    name: 'Rune of Luck Lv 1',
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
    enchantActives: [15147],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.luk = 0;
      _this.criticalPercent = 0;

      if (character.bodyGear) {
        const upgradeArmor = character.bodyGear.equipUpgradeValue;

        if (upgradeArmor >= 7) {
          _this.luk = 5;

          if (upgradeArmor >= 10) {
            _this.criticalPercent = 0.05;
          }
        }
      }
    }
  },
  {
    id: 29007,
    name: 'Rune of Luck Lv 2',
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
    enchantActives: [15147],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.luk = 0;
      _this.criticalPercent = 0;

      if (character.bodyGear) {
        const upgradeArmor = character.bodyGear.equipUpgradeValue;

        if (upgradeArmor >= 7) {
          _this.luk = 6;

          if (upgradeArmor >= 11) {
            _this.luk = 7;
            _this.criticalPercent = 0.07;
          }
        }
      }
    }
  },
  {
    id: 29008,
    name: 'Rune of Luck Lv 3',
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
    enchantActives: [15147],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.luk = 0;
      _this.criticalPercent = 0;

      if (character.bodyGear) {
        const upgradeArmor = character.bodyGear.equipUpgradeValue;

        if (upgradeArmor >= 7) {
          _this.luk = 7;

          if (upgradeArmor >= 12) {
            _this.luk = 8;
            _this.criticalPercent = 0.08;
          }

          if (upgradeArmor >= 13) {
            _this.luk = 9;
            _this.criticalPercent = 0.14;
          }
        }
      }
    }
  },
  {
    id: 29081,
    name: 'Acute Lv. 1',
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
    criticalPercent: 0.1,
    penetrationPercent: 0,
    enchantActives: [...headGearLab5],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 29082,
    name: 'Acute Lv. 2',
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
    criticalPercent: 0.2,
    penetrationPercent: 0,
    enchantActives: [...headGearLab5],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 29083,
    name: 'Acute Lv. 3',
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
    criticalPercent: 0.3,
    penetrationPercent: 0,
    enchantActives: [...headGearLab5],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 29084,
    name: 'Acute Lv. 4',
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
    criticalPercent: 0.4,
    penetrationPercent: 0,
    enchantActives: [...headGearLab5],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 29085,
    name: 'Acute Lv. 5',
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
    criticalPercent: 0.5,
    penetrationPercent: 0,
    enchantActives: [...headGearLab5],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4700,
    name: 'STR+1',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ENCHANT,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 1,
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
    enchantActives: [20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4701,
    name: 'STR+2',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ENCHANT,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 2,
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
    enchantActives: [...headGearLab5, 20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4702,
    name: 'STR+3',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ENCHANT,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 3,
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
    enchantActives: [...headGearLab5, 2589, 20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4703,
    name: 'STR+4',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ENCHANT,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 4,
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
    enchantActives: [...headGearLab5, 2589, 20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4704,
    name: 'STR+5',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ENCHANT,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 5,
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
    enchantActives: [...headGearLab5, 2589, 20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4705,
    name: 'STR+6',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ENCHANT,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 6,
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
    enchantActives: [20718, ...malangdo],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4706,
    name: 'STR+7',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ENCHANT,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 7,
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
    enchantActives: [20718],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4720,
    name: 'DEX+1',
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
    enchantActives: [20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4721,
    name: 'DEX+2',
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
    dex: 2,
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
    enchantActives: [...headGearLab5, 20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4722,
    name: 'DEX+3',
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
    dex: 3,
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
    enchantActives: [...headGearLab5, 2589, 20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4723,
    name: 'DEX+4',
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
    dex: 4,
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
    enchantActives: [...headGearLab5, 2589, 20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4724,
    name: 'DEX+5',
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
    dex: 5,
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
    enchantActives: [...headGearLab5, 2589, 20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4725,
    name: 'DEX+6',
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
    dex: 6,
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
    enchantActives: [20718, ...malangdo],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4726,
    name: 'DEX+7',
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
    dex: 7,
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
    enchantActives: [20718],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4750,
    name: 'LUK+1',
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
    luk: 1,
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
    enchantActives: [20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4751,
    name: 'LUK+2',
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
    luk: 2,
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
    enchantActives: [...headGearLab5, 20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4752,
    name: 'LUK+3',
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
    luk: 3,
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
    enchantActives: [...headGearLab5, 2589, 20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4753,
    name: 'LUK+4',
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
    luk: 4,
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
    enchantActives: [...headGearLab5, 2589, 20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4754,
    name: 'LUK+5',
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
    luk: 5,
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
    enchantActives: [...headGearLab5, 2589, 20718, ...malangdo, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4755,
    name: 'LUK+6',
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
    luk: 6,
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
    enchantActives: [20718, ...malangdo],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4756,
    name: 'LUK+7',
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
    luk: 7,
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
    enchantActives: [20718],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4811,
    name: 'Fighting Spirit 1Lv',
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 6,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    enchantActives: [...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4810,
    name: 'Fighting Spirit 2Lv',
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 9,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    enchantActives: [...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4809,
    name: 'Fighting Spirit 3Lv',
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 12,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    enchantActives: [2589, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4808,
    name: 'Fighting Spirit 4Lv',
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 15,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    enchantActives: [...malangdo, ...tempBoots, 2589, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4820,
    name: 'Fighting Spirit 5Lv',
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 18,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    enchantActives: [...malangdo, ...tempBoots, 2589, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4821,
    name: 'Fighting Spirit 6Lv',
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 21,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    enchantActives: [...malangdo, ...tempBoots, 2589, ...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4822,
    name: 'Fighting Spirit 7Lv',
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 24,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    enchantActives: [...malangdo, ...tempBoots],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4823,
    name: 'Fighting Spirit 8Lv',
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 27,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    enchantActives: [...malangdo],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4875,
    name: `Bear's Power`,
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
    enchantActives: [...tempBoots],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4879,
    name: 'Hawkeye',
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
    enchantActives: [...tempBoots],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4880,
    name: 'Lucky Day',
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
    enchantActives: [...tempBoots],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4878,
    name: 'Muscle Fool',
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
    enchantActives: [...tempBoots],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4876,
    name: 'Runaway Magic',
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
    enchantActives: [...tempBoots],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4877,
    name: 'Speed Of Light',
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
    enchantActives: [...tempBoots],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4807,
    name: 'ASPD+1',
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
    enchantActives: [...malangdo],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 29362,
    name: 'Double Attack',
    type: EquipmentType.CARD,
    subType: null,
    location: EquipmentLocation.COSTUME_GARMENT,
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
    enchantActives: [...costumes],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 29359,
    name: 'Fatal (Upper)',
    type: EquipmentType.CARD,
    subType: null,
    location: EquipmentLocation.COSTUME_UPPER_HEADGEAR,
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
    enchantActives: [...costumes],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0.03;
      if (character.costumeUpperHeadgear && character.costumeUpperHeadgear.slot1?.id === 29359
        && character.costumeMiddleHeadgear && character.costumeMiddleHeadgear.slot1?.id === 29047
        && character.costumeLowerHeadgear && character.costumeLowerHeadgear.slot1?.id === 29360
      ) {
        _this.criticalPercent = 0.09;
      }
    }
  },
  {
    id: 4863,
    name: 'Critical Lv1',
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
    criticalPercent: 0.04,
    penetrationPercent: 0,
    enchantActives: [2589],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4864,
    name: 'Critical Lv2',
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
    criticalPercent: 0.06,
    penetrationPercent: 0,
    enchantActives: [2589],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4865,
    name: 'Critical Lv3',
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
    criticalPercent: 0.08,
    penetrationPercent: 0,
    enchantActives: [2589],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4866,
    name: 'Critical Lv4',
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
    criticalPercent: 0.1,
    penetrationPercent: 0,
    enchantActives: [2589],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 29047,
    name: 'Critical',
    type: EquipmentType.CARD,
    subType: null,
    location: EquipmentLocation.COSTUME_MIDDLE_HEADGEAR,
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
    criticalPercent: 0.03,
    penetrationPercent: 0,
    enchantActives: [...costumes],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 29360,
    name: 'Fatal (Lower)',
    type: EquipmentType.CARD,
    subType: null,
    location: EquipmentLocation.COSTUME_LOWER_HEADGEAR,
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
    criticalPercent: 0.03,
    penetrationPercent: 0,
    enchantActives: [...costumes],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 29361,
    name: 'Fatal (Garment)',
    type: EquipmentType.CARD,
    subType: null,
    location: EquipmentLocation.COSTUME_GARMENT,
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
    criticalPercent: 0.2,
    penetrationPercent: 0,
    enchantActives: [...costumes],
    script: (character: Character2, _this: IBaseEquipment): void => {
      if (character.costumeUpperHeadgear && character.costumeUpperHeadgear.slot1?.id === 29359
        && character.costumeMiddleHeadgear && character.costumeMiddleHeadgear.slot1?.id === 29047
        && character.costumeLowerHeadgear && character.costumeLowerHeadgear.slot1?.id === 29360
        && character.costumeGarment && character.costumeGarment.slot1?.id === 29361
      ) {
        // _this.criticalRate = 10;
      }
    }
  },
  {
    id: 4853,
    name: 'Special STR',
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
    enchantActives: [20718, 2589],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.str = 1;
      _this.additionAtk.atkPercent = 0;

      const upgrade = _this.equipUpgradeValue;

      if (upgrade >= 8) {
        _this.str += 3;

        if (upgrade >= 9) {
          _this.additionAtk.atkPercent = 0.01;
        }
      }
    }
  },
  {
    id: 4858,
    name: 'Special LUK',
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
    enchantActives: [20718, 2589],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.luk = 1;

      const upgrade = _this.equipUpgradeValue;

      if (upgrade >= 8) {
        _this.luk += 3;
      }
    }
  },
  {
    id: 4857,
    name: 'Special DEX',
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
    enchantActives: [20718, 2589],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.dex = 1;

      const upgrade = _this.equipUpgradeValue;

      if (upgrade >= 8) {
        _this.dex += 3;
      }
    }
  },
  {
    id: 4854,
    name: 'Special AGI',
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
    enchantActives: [20718, 2589],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.agi = 1;
      _this.additionAtk.atkPercent = 0;
      const upgrade = _this.equipUpgradeValue;

      if (upgrade >= 8) {
        _this.agi += 3;

        if (upgrade >= 9) {
          _this.additionAtk.atkPercent = 0.01;
        }
      }
    }
  },
  {
    id: 4819,
    name: 'ATK+1%',
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
      atkPercent: 0.01
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
    enchantActives: [...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4766,
    name: 'ATK+2%',
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
      atkPercent: 0.02
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
    enchantActives: [...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 4767,
    name: 'ATK+3%',
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
      atkPercent: 0.03
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
    enchantActives: [...mora],
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
];
