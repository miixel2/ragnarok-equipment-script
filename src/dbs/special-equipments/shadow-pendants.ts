import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import {
  IBaseEquipment,
  EquipmentType,
  EquipmentSubType,
  EquipmentLocation,
} from '../../models/equipment';

export const shadowPendants: IBaseEquipment[] = [
  {
    id: 24167,
    name: 'Penetration Shadow Pendant',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_LEFT_ACCESSORY,
    location: EquipmentLocation.SHADOW_LEFT_ACCESSORY,
    compoundOn: null,
    option1Enable: true,
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
      const refinePenetration = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.penetrationPercent = Number(
        new Big(_this.penetrationPercent).plus(refinePenetration).valueOf()
      );
    },
  },
  {
    id: 24421,
    name: 'Temporal Transcendent Shadow Pendant',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_LEFT_ACCESSORY,
    location: EquipmentLocation.SHADOW_LEFT_ACCESSORY,
    compoundOn: null,
    option1Enable: true,
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
    eATK: 15,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
    },
  },
  {
    id: 24250,
    name: 'Swordsman Shadow Pendant',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_LEFT_ACCESSORY,
    location: EquipmentLocation.SHADOW_LEFT_ACCESSORY,
    compoundOn: null,
    option1Enable: true,
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
    eATK: 15,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
    },
  },
  {
    id: 24151,
    name: 'Infinity Shadow Pendant',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_LEFT_ACCESSORY,
    location: EquipmentLocation.SHADOW_LEFT_ACCESSORY,
    compoundOn: null,
    option1Enable: true,
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
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
    },
  },
  {
    id: 24340,
    name: 'Almighty Shadow Pandant',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_LEFT_ACCESSORY,
    location: EquipmentLocation.SHADOW_LEFT_ACCESSORY,
    compoundOn: null,
    option1Enable: true,
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
      _this.str = upgrade;
      _this.agi = upgrade;
      _this.vit = upgrade;
      _this.int = upgrade;
      _this.dex = upgrade;
      _this.luk = upgrade;
    },
  },
  {
    id: 24588,
    name: 'Booster Shadow Pendant',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_LEFT_ACCESSORY,
    location: EquipmentLocation.SHADOW_LEFT_ACCESSORY,
    compoundOn: null,
    option1Enable: true,
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
    eATK: 15,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 24444,
    name: 'Ignition Shadow Pendant',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_LEFT_ACCESSORY,
    location: EquipmentLocation.SHADOW_LEFT_ACCESSORY,
    compoundOn: null,
    option1Enable: true,
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

      if (character.playerTypeAtk === 2006) {
        const refine = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.02).valueOf()
        );

        character.buffSkillPercert = Number(
          new Big(character.buffSkillPercert).plus(0.05).plus(refine).valueOf()
        );
      }
    },
  },
];
