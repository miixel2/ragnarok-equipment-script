import Big from 'big.js';
import { CheckItemInSlots } from '../../utils/utils';
import { Character2 } from '../../models/character2';
import {
  IBaseEquipment,
  EquipmentType,
  EquipmentSubType,
  EquipmentLocation,
} from '../../models/equipment';
import { E_Element } from '../../models/element';

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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      matkPercent: 0,
      flatNamePercent: 0,
      skillElement: 0,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    eMATK: 0,
    cATK: 0,
    criRate: 0,
    aspd: 0,
    vct: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.class = 0;
      _this.criticalPercent = 0;
      _this.hpModB = 0;
      _this.eMATK = 0;
      _this.criRate = 0;
      _this.aspd = 0;
      _this.vct = 0;
      if (character.middleHeadgear && character.middleHeadgear.id === 2202) {
        const baseStr = character.class.str0;
        const baseLuk = character.class.luk0;
        const baseAgi = character.class.agi0;
        const baseVit = character.class.vit0;
        const baseInt = character.class.int0;
        const baseDex = character.class.dex0;

        const multiplierStrLuk = Math.floor((baseStr + baseLuk) / 80);
        if (multiplierStrLuk > 0) {
          _this.additionAtk.class = Number(
            new Big(0.06).mul(multiplierStrLuk).valueOf()
          );
          _this.criticalPercent = Number(
            new Big(0.1).mul(multiplierStrLuk).valueOf()
          );
          _this.criRate = Number(new Big(5).mul(multiplierStrLuk).valueOf());
        }

        const multiplierAgiVit = Math.floor((baseAgi + baseVit) / 80);
        if (multiplierAgiVit > 0) {
          _this.hpModB = Number(new Big(0.05).mul(multiplierAgiVit).valueOf());
          _this.aspd = Number(new Big(0.05).mul(multiplierAgiVit).valueOf());
        }

        const multiplierIntDex = Math.floor((baseInt + baseDex) / 80);
        if (multiplierIntDex > 0) {
          _this.eMATK = Number(new Big(120).mul(multiplierIntDex).valueOf());
          _this.vct = Number(new Big(0.03).mul(multiplierIntDex).valueOf());
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
    aspdFlat: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0.05;
      _this.aspdFlat = 0;

      if (character.middleHeadgear && character.middleHeadgear.id === 5918) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.2).valueOf()
        );
        _this.aspdFlat = 1;

        if (character.class.luk0 >= 108) {
          _this.criticalPercent = Number(
            new Big(_this.criticalPercent).plus(0.02).valueOf()
          );
          _this.aspdFlat = 2;
        }

        if (character.class.luk0 >= 120) {
          _this.criticalPercent = Number(
            new Big(_this.criticalPercent).plus(0.04).valueOf()
          );
          _this.aspdFlat = 4;
        }

        const tem = Math.floor(character.class.dex0 / 10);
        _this.criticalPercent = Number(
          new Big(0.02).mul(tem).plus(_this.criticalPercent).valueOf()
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
    eMATK: 10,
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
    aspdFlat: 1,
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
    aspdFlat: 1,
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
    eMATK: 5,
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
    spModA: 30,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0.01,
    },
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      matkPercent: 0.01,
      flatNamePercent: 0,
      skillElement: 0,
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
    vct: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.vct = 0;
      if (character.middleHeadgear?.id === 19138) {
        const baseInt = character.class.int0;
        const multiple = Math.floor(baseInt / 8);
        _this.vct = Number(new Big(multiple).mul(0.01).valueOf());

        if (baseInt >= 108) {
          _this.vct = Number(new Big(_this.vct).plus(0.04).valueOf());
          if (baseInt >= 125) {
            _this.vct = Number(new Big(_this.vct).plus(0.06).valueOf());
          }
        }
      }
    },
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      matkPercent: 0,
      flatNamePercent: 0,
      skillElement: 0,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    vct: 0,
    aspd: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.criticalPercent = 0;
      _this.vct = 0;
      _this.aspd = 0;
      _this.longRangePercent = 0;
      _this.additionMAtk.skillElement = 0;

      if (character.elementalConverter === E_Element.FIRE) {
        _this.additionMAtk.skillElement = 0.01;
      }

      if ([20718, 20717].includes(character.garment?.id)) {
        const baseStr = character.class.str0;
        const baseAgi = character.class.agi0;
        const baseInt = character.class.int0;
        const baseDex = character.class.dex0;
        const baseLuk = character.class.luk0;

        _this.eATK = Number(new Big(Math.floor(baseStr / 20)).mul(5).valueOf());
        _this.criticalPercent = Number(
          new Big(0.03).mul(Math.floor(baseLuk / 20)).valueOf()
        );
        _this.vct = Number(
          new Big(Math.floor(baseInt / 20)).mul(0.04).valueOf()
        );
        _this.aspd = Number(
          new Big(Math.floor(baseAgi / 20)).mul(0.03).valueOf()
        );
        _this.longRangePercent = Number(
          new Big(Math.floor(baseDex / 20)).mul(0.01).valueOf()
        );
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
    aspd: 0,
    aspdFlat: 1,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.aspd = 0;
      if (character.middleHeadgear && character.middleHeadgear.id === 18823) {
        const baseAgi = character.class.agi0;
        _this.eATK = 40;
        _this.aspd = 0.03;

        if (baseAgi >= 108) {
          _this.eATK += 60;
          _this.aspd = 0.08;
          if (baseAgi >= 120) {
            _this.eATK += 80;
            _this.aspd = 0.15;
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
    hpModB: 0,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      matkPercent: 0,
      flatNamePercent: 0,
      skillElement: 0,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    fct: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.class = 0;
      _this.additionMAtk.matkPercent = 0;
      _this.hpModB = 0;
      _this.fct = 0;

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

      if (
        character.rightAccessory?.id === 2907 ||
        character.leftAccessory?.id === 2907
      ) {
        _this.fct = 0.2;

        const baseInt = character.class.int0;
        const baseDex = character.class.dex0;
        const multiplierIntDex = Math.floor((baseInt + baseDex) / 40);
        _this.additionMAtk.matkPercent = Number(
          new Big(multiplierIntDex).mul(0.01).valueOf()
        );
      }

      if (
        character.rightAccessory?.id === 2911 ||
        character.leftAccessory?.id === 2911
      ) {
        _this.hpModB = 0.07;
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
    hit: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    meleePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.meleePercent = 0;
      _this.hit = 0;

      const baseLevel = character.class.baseLv;
      const multiplierBaseLevel = Math.floor(baseLevel / 35);
      _this.meleePercent = Number(
        new Big(multiplierBaseLevel).mul(0.01).valueOf()
      );
      _this.hit = multiplierBaseLevel * 2;

      if (baseLevel >= 175) {
        _this.meleePercent = _this.meleePercent * 2;
        _this.hit = _this.hit * 2;
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      matkPercent: 0.01,
      flatNamePercent: 0,
      skillElement: 0,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    vct: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    meleePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0;
      _this.vct = 0;
      if (
        character.rightAccessory?.id === 2992 &&
        character.leftAccessory?.id === 2992
      ) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.1).valueOf()
        );
        _this.vct = Number(new Big(_this.vct).plus(0.1).valueOf());
      }

      if (
        character.rightAccessory?.id === 2991 &&
        character.leftAccessory?.id === 2991
      ) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.1).valueOf()
        );
      }

      if (
        character.rightAccessory?.id === 2990 &&
        character.leftAccessory?.id === 2990
      ) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.1).valueOf()
        );
      }
    },
  },
  {
    id: 15969,
    name: 'Twin Cannons',
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      matkPercent: 0,
      flatNamePercent: 0,
      skillElement: 0,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    acd: 0.05,
    criticalPercent: 0,
    penetrationPercent: 0,
    meleePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.meleePercent = 0;
      _this.longRangePercent = 0;
      _this.additionAtk.class = 0;
      _this.additionMAtk.class = 0;

      if (
        CheckItemInSlots(character, 25690) &&
        character.comboSet.indexOf('15969_25690') === -1
      ) {
        _this.meleePercent = 0.04;
        _this.longRangePercent = 0.04;

        character.comboSet.push('15969_25690');
      }

      if (
        CheckItemInSlots(character, 25691) &&
        character.comboSet.indexOf('15969_25691') === -1
      ) {
        _this.additionMAtk.class = 0.06;

        character.comboSet.push('15969_25691');
      }

      if (
        CheckItemInSlots(character, 25692) &&
        character.comboSet.indexOf('15969_25692') === -1
      ) {
        _this.additionAtk.class = 0.06;
        character.comboSet.push('15969_25692');
      }
    },
  },
  {
    id: 420134,
    name: 'The Spirit Of World',
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      matkPercent: 0,
      flatNamePercent: 0,
      skillElement: 0,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    eMATK: 60,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.skillElement = 0;

      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;
      const baseAgi = character.class.agi0;
      const baseVit = character.class.vit0;
      const baseInt = character.class.int0;
      const baseDex = character.class.dex0;

      if (character.elementalConverter === E_Element.NEUTRAL) {
        _this.additionMAtk.skillElement = Number(
          new Big(Math.floor(baseStr / 10)).mul(0.02).valueOf()
        );
      } else if (character.elementalConverter === E_Element.WIND) {
        _this.additionMAtk.skillElement = Number(
          new Big(Math.floor(baseAgi / 10)).mul(0.02).valueOf()
        );
      } else if (character.elementalConverter === E_Element.EARTH) {
        _this.additionMAtk.skillElement = Number(
          new Big(Math.floor(baseVit / 10)).mul(0.02).valueOf()
        );
      } else if (character.elementalConverter === E_Element.FIRE) {
        _this.additionMAtk.skillElement = Number(
          new Big(Math.floor(baseInt / 10)).mul(0.02).valueOf()
        );
      } else if (character.elementalConverter === E_Element.WATER) {
        _this.additionMAtk.skillElement = Number(
          new Big(Math.floor(baseDex / 10)).mul(0.02).valueOf()
        );
      } else if (character.elementalConverter === E_Element.HOLY) {
        _this.additionMAtk.skillElement = Number(
          new Big(Math.floor(baseLuk / 10)).mul(0.02).valueOf()
        );
      } else if (character.elementalConverter === E_Element.GHOST) {
        const sum = baseStr + baseLuk + baseAgi + baseVit + baseInt + baseDex;
        _this.additionMAtk.skillElement = Number(
          new Big(Math.floor(sum / 60)).mul(0.02).valueOf()
        );
      }
    },
  },
];
