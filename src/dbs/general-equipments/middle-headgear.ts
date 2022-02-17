import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';

export const middleHeadgear: IBaseEquipment[] = [
  {
    id: 2202,
    name: 'Sunglasses [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 5918,
    name: 'Gambler Seal',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0.03;
      _this.criticalPercent = Number((new Big((Math.floor(character.class.dex0 / 10) * 0.02))).mul(-1).plus(_this.criticalPercent).valueOf());

      _this.eATK = Number((new Big(Math.floor(character.class.luk0 / 10))).mul(2).valueOf());

      if (character.class.luk0 >= 108) {
        _this.criticalPercent = Number((new Big(_this.criticalPercent)).plus(0.1).valueOf());
      }

      if (character.class.luk0 >= 120) {
        _this.criticalPercent = Number((new Big(_this.criticalPercent)).plus(0.17).valueOf());
      }
    }
  },
  {
    id: 5389,
    name: 'Angel Spirit',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
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
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 19087,
    name: 'Angel Spirit [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
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
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 18823,
    name: 'Imperial Feather',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 19138,
    name: 'Seraphim Coronet',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.str = 2;

      const baseInt = character.class.int0;

      _this.eATK = Number((new Big((Math.floor(baseInt / 8) * 5))).valueOf());

      if (baseInt >= 108) {
        _this.eATK += 50;
        if (baseInt >= 125) {
          _this.eATK += 125;
        }
      }
    }
  },
  {
    id: 18912,
    name: 'Bell Pigeon [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 5,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 1,
    agi: 1,
    vit: 1,
    int: 1,
    dex: 1,
    luk: 1,
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
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 18603,
    name: `Black Devil's Mask [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 1,
    agi: 1,
    vit: 1,
    int: 1,
    dex: 1,
    luk: 1,
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
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 18937,
    name: 'Memory of Lovers',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
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
    hpModB: 0.02,
    spModB: 0,
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
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.str = 0;
      _this.dex = 0;
      _this.agi = 0;
      _this.int = 0;
      _this.eATK = 0;
      _this.spModB = 0;

      if (character.leftAccessory?.id === 2659 || character.rightAccessory?.id === 28302) {
        _this.int = 8;
        _this.spModB = 0.2;
      }

      if (character.leftAccessory?.id === 2660 || character.rightAccessory?.id === 28303) {
        _this.str = 8;
        _this.eATK = 20;
      }

      if (character.leftAccessory?.id === 2661 || character.rightAccessory?.id === 28304) {
        _this.agi = 8;
      }

      if (character.leftAccessory?.id === 2662 || character.rightAccessory?.id === 28305) {
        _this.dex = 8;
      }
    }
  },
  {
    id: 410136,
    name: 'Raven Of Tomb',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.class = 0;
      _this.eATK = 0;
      _this.criticalPercent = 0;

      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;
      const baseAgi = character.class.agi0;

      if (baseStr >= 100) {
        _this.additionAtk.class = 0.04;
        if (baseStr >= 120) {
          _this.additionAtk.class = 0.1;
        }
      }

      if (baseLuk >= 100) {
        _this.eATK = 20;
        if (baseLuk >= 120) {
          _this.eATK = 60;
        }
      }

      if (baseAgi >= 100) {
        _this.criticalPercent = 0.07;
        if (baseAgi >= 120) {
          _this.criticalPercent = 0.14;
        }
      }

      if (character.garment?.id === 480172) {
        _this.eATK = _this.eATK + 50;
        const garmentUpgrade = character.garment.equipUpgradeValue;
        if (garmentUpgrade >= 11) {
          const mulVal = garmentUpgrade >= 15 ? 5 : (garmentUpgrade - 10);
          _this.additionAtk.class = Number(new Big(mulVal).mul(0.02).plus(_this.additionAtk.class).valueOf());
        }
      }
    }
  },
];
