import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';
import { MonsterType } from '../../models/monster';

export const shadowShoes: IBaseEquipment[] = [
  {
    id: 24393,
    name: 'Physical Shadow Shoes',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHOES,
    location: EquipmentLocation.SHADOW_SHOES,
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
    hpModA: 0,
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
      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
    }
  },
  {
    id: 24419,
    name: 'Temporal Transcendent Shadow Shoes',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHOES,
    location: EquipmentLocation.SHADOW_SHOES,
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
    hpModA: 0,
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
      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
    }
  },
  {
    id: 24256,
    name: 'Knight Shadow Shoes',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHOES,
    location: EquipmentLocation.SHADOW_SHOES,
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
    hpModA: 0,
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
      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
    }
  },
  {
    id: 24063,
    name: 'Liberation Shadow Shoes',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHOES,
    location: EquipmentLocation.SHADOW_SHOES,
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
    hpModA: 0,
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

      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
      if (character.monster.type === MonsterType.BOSS) {
        _this.additionAtk.class = Number(new Big(0.02).valueOf());

        if (upgrade >= 7) {
          _this.additionAtk.class = Number(new Big(_this.additionAtk.class).plus(0.01).valueOf());

          if (upgrade >= 9) {
            _this.additionAtk.class = Number(new Big(_this.additionAtk.class).plus(0.02).valueOf());
          }
        }
      }
    }
  },
  {
    id: 24341,
    name: 'All Race Shadow Shoes',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHOES,
    location: EquipmentLocation.SHADOW_SHOES,
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
    hpModA: 0,
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
      _this.additionAtk.race = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
      _this.additionAtk.race = Number(new Big(0.02).valueOf());

      if (upgrade >= 7) {
        _this.additionAtk.race = Number(new Big(_this.additionAtk.race).plus(0.01).valueOf());

        if (upgrade >= 9) {
          _this.additionAtk.race = Number(new Big(_this.additionAtk.race).plus(0.02).valueOf());
        }
      }
    }
  },
  {
    id: 24373,
    name: 'Penetration Shadow Shoes',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHOES,
    location: EquipmentLocation.SHADOW_SHOES,
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
    hpModA: 0,
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
      _this.penetrationPercent = 0.05;
      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
      const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
      _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
    }
  },
  {
    id: 24586,
    name: 'Booster Shadow Shoes',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHOES,
    location: EquipmentLocation.SHADOW_SHOES,
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
    hpModA: 100,
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
];
