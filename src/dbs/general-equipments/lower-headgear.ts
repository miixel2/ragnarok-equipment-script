import Big from 'big.js';
import { Character2 } from '../../models/character2';
import {
  IBaseEquipment,
  EquipmentType,
  EquipmentSubType,
  EquipmentLocation,
} from '../../models/equipment';

export const lowerHeadgear: IBaseEquipment[] = [
  {
    id: 28502,
    name: 'Mob Scarf',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.LOWER_HEADGEAR,
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
    hpModB: 0,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent2: 0,
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
      _this.criticalPercent = 0;
      _this.hpModB = 0;
      if (character.middleHeadgear && character.middleHeadgear.id === 2202) {
        const baseStr = character.class.str0;
        const baseLuk = character.class.luk0;
        const baseAgi = character.class.agi0;
        const baseVit = character.class.vit0;

        const multiplierStrLuk = Math.floor((baseStr + baseLuk) / 80);
        if (multiplierStrLuk > 0) {
          _this.additionAtk.class = Number(
            new Big(0.06).mul(multiplierStrLuk).valueOf()
          );
          _this.criticalPercent = Number(
            new Big(0.1).mul(multiplierStrLuk).valueOf()
          );
        }

        const multiplierAgiVit = Math.floor((baseAgi + baseVit) / 80);
        if (multiplierAgiVit > 0) {
          _this.hpModB = Number(new Big(0.05).mul(multiplierAgiVit).valueOf());
        }
      }
    },
  },
  {
    id: 19306,
    name: 'Heart Card In Mouth',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.LOWER_HEADGEAR,
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
      _this.criticalPercent = 0.05;

      if (character.middleHeadgear && character.middleHeadgear.id === 5918) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.2).valueOf()
        );

        if (character.class.luk0 >= 108) {
          _this.criticalPercent = Number(
            new Big(_this.criticalPercent).plus(0.02).valueOf()
          );
        }

        if (character.class.luk0 >= 120) {
          _this.criticalPercent = Number(
            new Big(_this.criticalPercent).plus(0.04).valueOf()
          );
        }

        const tem = Math.floor(character.class.dex0 / 10) * 0.02;
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(tem).valueOf()
        );
      }
    },
  },
  {
    id: 18936,
    name: 'Golden Fish',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.LOWER_HEADGEAR,
    compoundOn: null,
    baseDef: 1,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 2,
    agi: 2,
    vit: 2,
    int: 2,
    dex: 2,
    luk: 2,
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
    eATK: 10,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 18858,
    name: 'Pink Angeling Bubble',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.LOWER_HEADGEAR,
    compoundOn: null,
    baseDef: 5,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    hpModA: 200,
    hpModB: 0,
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
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 18962,
    name: 'Panda Balloon',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.LOWER_HEADGEAR,
    compoundOn: null,
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
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 18968,
    name: 'Demon Blue Poring Bubble',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.LOWER_HEADGEAR,
    compoundOn: null,
    baseDef: 5,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 1,
    dex: 1,
    luk: 0,
    hpModA: 100,
    hpModB: 0,
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
    eATK: 5,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 5548,
    name: 'Scarlet Rose',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.LOWER_HEADGEAR,
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
      size: 0.01,
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
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 19327,
    name: 'Feather Of Seraphim',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.LOWER_HEADGEAR,
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
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 19268,
    name: 'Giant Snake Breath',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.LOWER_HEADGEAR,
    compoundOn: null,
    baseDef: 2,
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
      _this.eATK = 0;
      _this.criticalPercent = 0;

      if (character.garment && [20718, 20717].includes(character.garment.id)) {
        const baseStr = character.class.str0;
        const baseLuk = character.class.luk0;

        _this.eATK = Number(new Big(Math.floor(baseStr / 20)).mul(5).valueOf());
        const tempLukMul = Math.floor(baseLuk / 20);
        _this.criticalPercent = Number(new Big(0.03).mul(tempLukMul).valueOf());
      }
    },
  },
  {
    id: 19246,
    name: 'Royal Guard Necklace',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.LOWER_HEADGEAR,
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
      atkPercent2: 0,
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
      _this.eATK = 0;
      if (character.middleHeadgear && character.middleHeadgear.id === 18823) {
        const baseAgi = character.class.agi0;
        _this.eATK = 40;

        if (baseAgi >= 108) {
          _this.eATK += 60;
          if (baseAgi >= 120) {
            _this.eATK += 80;
          }
        }
      }
    },
  },
  {
    id: 420129,
    name: 'Wei Brush Tattoo',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.LOWER_HEADGEAR,
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

      if (
        character.rightAccessory?.id === 2910 ||
        character.leftAccessory?.id === 2910
      ) {
        const baseStr = character.class.str0;
        const baseLuk = character.class.luk0;

        const multiplierStrLuk = Math.floor((baseStr + baseLuk) / 40);
        _this.additionAtk.class = Number(
          new Big(multiplierStrLuk).mul(0.01).valueOf()
        );
      }
    },
  },
  {
    id: 15932,
    name: 'Vassalage Necklace',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.LOWER_HEADGEAR,
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
    meleePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.meleePercent = 0;

      const baseLevel = character.class.baseLv;
      const multiplierBaseLevel = Math.floor(baseLevel / 35);
      _this.meleePercent = Number(
        new Big(multiplierBaseLevel).mul(0.01).valueOf()
      );

      if (baseLevel >= 175) {
        _this.meleePercent = _this.meleePercent * 2;
      }
    },
  },
  {
    id: 400000,
    name: 'Whistle',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.LOWER_HEADGEAR,
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
      atkPercent2: 0.01,
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
    meleePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0;
      if (
        character.rightAccessory?.id === 2992 &&
        character.leftAccessory?.id === 2992
      ) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.1).valueOf()
        );
      }

      if (
        character.rightAccessory?.id === 2991 &&
        character.leftAccessory?.id === 2991
      ) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.1).valueOf()
        );
      }
    },
  },
];
