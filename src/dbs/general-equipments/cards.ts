import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import { E_Element } from '../../models/element';
import {
  IBaseEquipment,
  EquipmentType,
  CompoundOn,
  EquipmentSubType,
} from '../../models/equipment';
import { MonsterRace, MonsterType, Scale } from '../../models/monster';

export const cards: IBaseEquipment[] = [
  {
    id: 4508,
    name: 'Gold Scaraba Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ACCESSORY,
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
    eATK: 20,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    suffix: 'of Mad Berserker',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4468,
    name: 'Dark Pinguicula Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
    eATK: 10,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Pollution',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4337,
    name: 'Porcellio Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
    baseDef: -5,
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
    eATK: 25,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    suffix: 'of Wild Cat',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4608,
    name: 'White Knight Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    eATK: 15,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Knight',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.size = 0;
      if ([Scale.MEDIUM, Scale.LARGE].includes(character.monster?.scale)) {
        _this.additionAtk.size = 0.2;
      }
    },
  },
  {
    id: 4594,
    name: 'Petal Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.GARMENT,
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
    suffix: 'of Death Blow',
    script: (character: Character2, _this: IBaseEquipment): void => {
      const baseLuk = character.class.luk0;
      _this.criticalPercent = Number(
        new Big(Math.floor(baseLuk / 10)).mul(0.02).valueOf()
      );
    },
  },
  {
    id: 4588,
    name: 'Wakwak Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.GARMENT,
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
    suffix: 'of Power',
    script: (character: Character2, _this: IBaseEquipment): void => {
      const baseStr = character.class.str0;
      _this.eATK = Number(new Big(Math.floor(baseStr / 10)).mul(5).valueOf());
    },
  },
  {
    id: 4140,
    name: 'Abysmal Knight Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    prefix: 'Liberation',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.class = 0;

      if (character.monster.type === MonsterType.BOSS) {
        _this.additionAtk.class = 0.25;
      }
    },
  },
  {
    id: 300291,
    name: '1st Anniversary Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ACCESSORY,
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
    eATK: 15,
    eMATK: 15,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'The First',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4521,
    name: 'Sedora Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    criticalPercent: 0.15,
    penetrationPercent: 0,
    prefix: 'Mortal Blow',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4643,
    name: 'Infinite Vagabond Wolf Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.SHOES,
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
    prefix: 'Strike',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 10;

      const upgrade = _this.equipUpgradeValue || 0;
      if (upgrade >= 7) {
        _this.eATK = 20;
        if (upgrade >= 9) {
          _this.eATK = 35;
        }
      }
    },
  },
  {
    id: 4091,
    name: 'Kobold Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ACCESSORY,
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
    criRate: 4,
    criticalPercent: 0,
    penetrationPercent: 0,
    suffix: 'of Counter',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4464,
    name: 'Aunoe Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    criticalPercent: 0.2,
    penetrationPercent: 0,
    prefix: 'Fatal',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4137,
    name: 'Drake Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    options: {
      ignoreSizePenalty: true,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    suffix: 'of Infinity',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4305,
    name: 'Turtle General Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
      class: 0.2,
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
    prefix: 'Blast',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4494,
    name: 'Sealed Turtle General Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    prefix: 'Half Blast',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.class = 0.1;
      const upgrade = _this.equipUpgradeValue || 0;
      if (upgrade >= 15) {
        _this.additionAtk.class = Number(
          new Big(_this.additionAtk.class).plus(0.05).valueOf()
        );
      }
    },
  },
  {
    id: 31017,
    name: 'Vicious Cookie Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.SHOES,
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
      flatNamePercent: 0,
      matkPercent: 0,
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
    suffix: 'of Hate',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.class = 0.01;
      _this.additionMAtk.matkPercent = 0.01;
      _this.hpModB = -0.02;

      const upgrade = _this.equipUpgradeValue || 0;
      const tempPercentUpgrade = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.additionAtk.class = Number(
        new Big(_this.additionAtk.class).plus(tempPercentUpgrade).valueOf()
      );
      _this.additionMAtk.matkPercent = Number(
        new Big(_this.additionMAtk.matkPercent)
          .plus(tempPercentUpgrade)
          .valueOf()
      );
      _this.hpModB = Number(
        new Big(Math.floor(upgrade / 2)).mul(-0.02).plus(_this.hpModB).valueOf()
      );
    },
  },
  {
    id: 31024,
    name: 'Immortal Bloody Knight Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
      atkPercent2: 0.1,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent2: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Volcanic',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4583,
    name: 'Engkanto Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
    suffix: 'of Poison Grass',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.element = 0;
      _this.penetrationPercent = 0;
      if (character.monster.element === E_Element.POISON) {
        _this.additionAtk.element = 0.3;
      }

      if (character.monster.race === MonsterRace.PLANT) {
        _this.penetrationPercent = 0.3;
      }
    },
  },
  {
    id: 4601,
    name: 'Amdarais Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
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
      class: 0.15,
    },
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0.15,
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
    suffix: 'of Explosion',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4602,
    name: 'Realized Amdarais Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
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
      class: 0.2,
    },
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0.2,
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
    suffix: 'of Fury',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4513,
    name: 'Angra Mantis Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
    suffix: 'of Thief',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0.02;

      if (character.class.classKey === ClassKey.GuillotineCross) {
        const upgrade = _this.equipUpgradeValue || 0;
        const tempPercentUpgrade = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
        );
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(tempPercentUpgrade).valueOf()
        );
      }
    },
  },
  {
    id: 27107,
    name: 'Playing Pere Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.RIGHT_ACCESSORY,
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
    prefix: 'Dancing',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.element = 0;
      if (
        character.monster &&
        character.monster.element === E_Element.NEUTRAL &&
        character.leftAccessory?.slot1?.id === 27108
      ) {
        _this.additionAtk.element = 0.2;
      }
    },
  },
  {
    id: 27108,
    name: 'Singing Pere Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.LEFT_ACCESSORY,
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0,
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
    prefix: 'Singing',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.element = 0;
      if (
        character.monster &&
        character.monster.element === E_Element.NEUTRAL &&
        character.rightAccessory?.slot1?.id === 27107
      ) {
        _this.additionMAtk.element = 0.2;
      }
    },
  },
  {
    id: 27109,
    name: 'Jitterbug Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
    hpModA: 500,
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
    prefix: `Jitterbug's`,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4689,
    name: 'True Seyren Windsor Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    prefix: 'Ignition',
    script: (character: Character2, _this: IBaseEquipment): void => {
      if (character.playerTypeAtk === 2006) {
        character.buffSkillPercent = Number(
          new Big(character.buffSkillPercent).plus(0.2).valueOf()
        );
        if (character.weapon.level === 4) {
          character.buffSkillPercent = Number(
            new Big(character.buffSkillPercent).plus(0.2).valueOf()
          );
          if (character.weapon.equipUpgradeValue >= 10) {
            character.buffSkillPercent = Number(
              new Big(character.buffSkillPercent).plus(0.2).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 4684,
    name: 'True Eremes Guile Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    prefix: 'Cross',
    script: (character: Character2, _this: IBaseEquipment): void => {
      if (character.playerTypeAtk === 2022) {
        character.buffSkillPercent = Number(
          new Big(character.buffSkillPercent).plus(0.2).valueOf()
        );
        if (character.weapon.level === 4) {
          character.buffSkillPercent = Number(
            new Big(character.buffSkillPercent).plus(0.2).valueOf()
          );
          if (character.weapon.equipUpgradeValue >= 10) {
            character.buffSkillPercent = Number(
              new Big(character.buffSkillPercent).plus(0.2).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 4685,
    name: 'True Margaretha Sorin Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    prefix: 'Adoramus',
    script: (character: Character2, _this: IBaseEquipment): void => {
      if (character.playerTypeAtk === 2040) {
        character.buffMagicSkillPercent = Number(
          new Big(character.buffMagicSkillPercent).plus(0.2).valueOf()
        );
        if (character.weapon.level === 4) {
          character.buffMagicSkillPercent = Number(
            new Big(character.buffMagicSkillPercent).plus(0.2).valueOf()
          );
          if (character.weapon.equipUpgradeValue >= 10) {
            character.buffMagicSkillPercent = Number(
              new Big(character.buffMagicSkillPercent).plus(0.2).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 4692,
    name: 'True Celia Alde Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    prefix: 'Varetyr',
    script: (character: Character2, _this: IBaseEquipment): void => {
      if (character.playerTypeAtk === 2454) {
        character.buffSkillPercent = Number(
          new Big(character.buffSkillPercent).plus(0.2).valueOf()
        );
        if (character.weapon.level === 4) {
          character.buffSkillPercent = Number(
            new Big(character.buffSkillPercent).plus(0.2).valueOf()
          );
          if (character.weapon.equipUpgradeValue >= 10) {
            character.buffSkillPercent = Number(
              new Big(character.buffSkillPercent).plus(0.2).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 4399,
    name: 'Memory of Thanatos Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
    baseDef: -30,
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
    prefix: 'Penetration',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4574,
    name: 'General Daehyon Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    prefix: 'Sword Master',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;

      if (
        character.rightHand?.subType === EquipmentSubType.TWO_HANDED_SWORD ||
        character.rightHand?.subType === EquipmentSubType.SWORD
      ) {
        _this.eATK = 100;
      }
    },
  },
  {
    id: 4609,
    name: 'Khalitzburg Knightage Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.SHIELD,
    baseDef: 20,
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
    prefix: 'Knight',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.size = 0;

      let hasCard = false;
      if (character.rightHand?.slot1?.id === 4608) {
        hasCard = true;
      } else if (character.rightHand?.slot2?.id === 4608) {
        hasCard = true;
      } else if (character.rightHand?.slot3?.id === 4608) {
        hasCard = true;
      } else if (character.rightHand?.slot4?.id === 4608) {
        hasCard = true;
      }

      if (
        hasCard &&
        [Scale.MEDIUM, Scale.LARGE].includes(character.monster?.scale)
      ) {
        _this.additionAtk.size = 0.15;
      }
    },
  },
  {
    id: 4434,
    name: 'Knocker Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
    prefix: `Miner's`,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.race = 0;

      if (character.monster?.race === MonsterRace.FORMLESS) {
        _this.additionAtk.race = 0.05;
      }
    },
  },
  {
    id: 4908,
    name: 'Dark Lord Essence Force 1',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ESSENCE,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 1,
    agi: 0,
    vit: 0,
    int: -1,
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
    eATK: 3,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Strong',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4909,
    name: 'Dark Lord Essence Force 2',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ESSENCE,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 2,
    agi: 0,
    vit: 0,
    int: -2,
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
    eATK: 6,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Strong',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4910,
    name: 'Dark Lord Essence Force 3',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ESSENCE,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 4,
    agi: 0,
    vit: 0,
    int: -4,
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
    eATK: 12,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Strong',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 27116,
    name: 'Ominous Heater Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ACCESSORY,
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
    criRate: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Dual Critical',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0.05;
      _this.criRate = 3;

      if (character.comboSet.indexOf('27116_27117') > -1) {
        return;
      }

      if (
        character.leftHand?.slot1?.id === 27117 ||
        character.leftHand?.slot2?.id === 27117 ||
        character.leftHand?.slot3?.id === 27117 ||
        character.leftHand?.slot4?.id === 27117 ||
        character.rightHand?.slot1?.id === 27117 ||
        character.rightHand?.slot2?.id === 27117 ||
        character.rightHand?.slot3?.id === 27117 ||
        character.rightHand?.slot4?.id === 27117
      ) {
        _this.criticalPercent = 0.07;
        _this.criRate = 5;
        if (character.comboSet.indexOf('27116_27117') === -1) {
          character.comboSet.push('27116_27117');
        }
      }
    },
  },
  {
    id: 27117,
    name: 'Ominous Assaulter Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    criRate: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Lethal',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0.1;
      _this.eATK = 0;
      _this.criRate = 0;

      if (
        [
          EquipmentSubType.TWO_HANDED_SWORD,
          EquipmentSubType.TWO_HANDED_SPEAR,
          EquipmentSubType.WHIP,
          EquipmentSubType.BOOK,
        ].includes(character.rightHand?.subType)
      ) {
        _this.criRate = 5;
        const upgrade = _this.equipUpgradeValue || 0;
        const tempPercentUpgrade = Number(
          new Big(Math.floor(upgrade)).mul(0.01).valueOf()
        );
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(tempPercentUpgrade).valueOf()
        );
        const tempAtk = Number(new Big(Math.floor(upgrade)).mul(3).valueOf());
        _this.eATK = Number(new Big(_this.eATK).plus(tempAtk).valueOf());
      }
    },
  },
  {
    id: 27082,
    name: 'Furious Ninetail Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
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
    criRate: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Fox Tail',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criRate = 5;
      _this.criticalPercent = 0.1;

      const upgrade = _this.equipUpgradeValue || 0;
      if (upgrade >= 10) {
        _this.criRate = 15;
      }
    },
  },
  {
    id: 27176,
    name: 'Brown Rat Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.GARMENT,
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
    aspd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Dirty',
    script: (character: Character2, _this: IBaseEquipment): void => {
      const baseStr = character.class.str0;
      const strMul = Math.floor(baseStr / 10);
      _this.eATK = Number(new Big(strMul).mul(3).valueOf());
      _this.aspd = Number(new Big(strMul).mul(0.01).valueOf());

      if (baseStr >= 120) {
        _this.eATK = Number(new Big(_this.eATK).plus(40).valueOf());
      }
    },
  },
  {
    id: 27361,
    name: 'Corrupted Wanderer Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    prefix: 'Heavy Blade',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.size = 0;
      if ([Scale.MEDIUM, Scale.LARGE].includes(character.monster?.scale)) {
        _this.additionAtk.size = 0.3;
      }
    },
  },
  {
    id: 4485,
    name: 'Sealed Gloom Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
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
    prefix: 'Half Abyss',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.race = 0;
      _this.additionAtk.element = 0;
      if (
        character.monster?.element === E_Element.HOLY ||
        character.monster?.element === E_Element.SHADOW
      ) {
        _this.additionAtk.race = 0.2;

        if (character.bodyGear?.equipUpgradeValue >= 15) {
          _this.additionAtk.race = 0.3;
        }
      }
      if (
        character.monster?.race === MonsterRace.ANGEL ||
        character.monster?.race === MonsterRace.DEMON
      ) {
        _this.additionAtk.element = 0.2;
        if (character.bodyGear?.equipUpgradeValue >= 15) {
          _this.additionAtk.element = 0.3;
        }
      }
    },
  },
  {
    id: 4408,
    name: 'Gloom Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
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
    prefix: 'Abyss',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.race = 0;
      _this.additionAtk.element = 0;
      if (
        character.monster?.element === E_Element.HOLY ||
        character.monster?.element === E_Element.SHADOW
      ) {
        _this.additionAtk.race = 0.4;
      }
      if (
        character.monster?.race === MonsterRace.ANGEL ||
        character.monster?.race === MonsterRace.DEMON
      ) {
        _this.additionAtk.element = 0.4;
      }
    },
  },
  {
    id: 27103,
    name: 'Living Dead Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
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
    eATK: 20,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Vigor',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 27318,
    name: 'Miguel Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.SHOES,
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
    criticalPercent: 0.2,
    penetrationPercent: 0,
    suffix: 'of Tiger Power',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4427,
    name: 'Sword Guardian Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    suffix: 'of Force',
    script: (character: Character2, _this: IBaseEquipment): void => {
      if (
        character.playerTypeAtk === 62 &&
        [EquipmentSubType.SWORD, EquipmentSubType.TWO_HANDED_SWORD].includes(
          character.rightHand?.subType
        )
      ) {
        character.buffSkillPercent = Number(
          new Big(character.buffSkillPercent).plus(0.25).valueOf()
        );
      }
    },
  },
  {
    id: 4160,
    name: 'Firelock Soldier Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.SHOES,
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
    hpModB: 0,
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
    prefix: 'High Level',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.hpModB = 0;
      _this.spModB = 0;
      const upgrade = _this.equipUpgradeValue || 0;
      if (upgrade >= 9) {
        _this.hpModB = 0.1;
        _this.spModB = 0.1;
      }
    },
  },
  {
    id: 27152,
    name: 'Cutie Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.SHOES,
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
    hpModB: 0.1,
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
    aspd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Prompt',
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue || 0;
      const multi = Number(new Big(Math.floor(upgrade / 2)).valueOf());
      _this.agi = multi;
      _this.aspd = Number(new Big(multi).mul(0.01).valueOf());
    },
  },
  {
    id: 27164,
    name: 'Faceworm Queen Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.SHOES,
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
    hpModB: -0.1,
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
    aspd: 0,
    criRate: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Coya',
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue || 0;
      const multi = Number(new Big(Math.floor(upgrade / 2)).valueOf());
      _this.criRate = multi + 15;
      _this.criticalPercent = Number(new Big(multi).mul(0.01).valueOf());
    },
  },
  {
    id: 4357,
    name: 'Lord Knight Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
    hpModB: -0.5,
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
    suffix: 'of Fury',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 27183,
    name: 'Gigantes Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.LEFT_ACCESSORY,
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
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    aspd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Onslaught',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 20;
      _this.aspd = 0;

      if (character.class.str0 >= 120) {
        _this.eATK = 40;
        _this.aspd = -0.03;
      }
    },
  },
  {
    id: 27184,
    name: 'Knight Sakray Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    prefix: 'Salvation',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 20;
      _this.additionAtk.race = 0;

      if (
        character.monster?.race === MonsterRace.DEMON ||
        character.monster?.race === MonsterRace.UNDEAD
      ) {
        _this.additionAtk.race = 0.3;
      }
    },
  },
  {
    id: 4143,
    name: 'Orc Hero Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
    prefix: 'Neutral',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4403,
    name: 'Kiel-D-01 Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
    acd: 0.3,
    criticalPercent: 0,
    penetrationPercent: 0,
    suffix: 'of Reload',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4480,
    name: 'Sealed Kiel Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
    acd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    suffix: 'of Half Reload',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.acd = 0.15;
      const upgrade = _this.equipUpgradeValue;
      if (upgrade) {
        _this.acd = 0.2;
      }
    },
  },
  {
    id: 27289,
    name: 'Soul Fragment Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0,
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
    eMATK: 5,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Proper',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.size = 0;
      if (character.monster?.scale === Scale.MEDIUM) {
        _this.additionMAtk.size = 0.2;
      }
    },
  },
  {
    id: 27125,
    name: 'Headless Mule Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ACCESSORY,
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0,
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
    prefix: 'Aqua Benedict',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.skillElement = 0;
      if (
        [E_Element.WATER, E_Element.HOLY].includes(character.elementalConverter)
      ) {
        _this.additionMAtk.skillElement = 0.2;
      }
    },
  },
  {
    id: 27101,
    name: 'Sweet Nightmare Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
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
    eMATK: 20,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Sorcery',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4557,
    name: 'Weakened Fenrir Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
    eMATK: 25,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Orb Spell Power',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 4556,
    name: 'Fenrir Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
    eMATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Power Word',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eMATK = _this.equipUpgradeValue * 5 + 50;
    },
  },
  {
    id: 300209,
    name: 'Sealed Nightmare Amon Ra Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0,
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
    prefix: 'Weak Punishment',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.race = 0;
      _this.additionMAtk.element = 0;
      if (
        character.monster?.element === E_Element.UNDEAD ||
        character.monster?.element === E_Element.SHADOW
      ) {
        _this.additionMAtk.race = 0.25;

        if (character.bodyGear?.equipUpgradeValue >= 15) {
          _this.additionMAtk.race = 0.37;
        }
      }
      if (
        character.monster?.race === MonsterRace.UNDEAD ||
        character.monster?.race === MonsterRace.DEMON
      ) {
        _this.additionMAtk.element = 0.25;
        if (character.bodyGear?.equipUpgradeValue >= 15) {
          _this.additionMAtk.element = 0.37;
        }
      }
    },
  },
  {
    id: 4652,
    name: 'Nightmare Amon Ra Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0,
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
    prefix: 'Punishment',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.race = 0;
      _this.additionMAtk.element = 0;
      if (
        character.monster?.element === E_Element.UNDEAD ||
        character.monster?.element === E_Element.SHADOW
      ) {
        _this.additionMAtk.race = 0.5;
      }
      if (
        character.monster?.race === MonsterRace.UNDEAD ||
        character.monster?.race === MonsterRace.DEMON
      ) {
        _this.additionMAtk.element = 0.5;
      }
    },
  },
  {
    id: 4658,
    name: 'Nightmare Verit Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.SHOES,
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0,
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
    prefix: 'Magical',
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.additionMAtk.matkPercent = 0.05;
      if (upgrade >= 7) {
        _this.additionMAtk.matkPercent = 0.08;
        if (upgrade >= 7) {
          _this.additionMAtk.matkPercent = 0.1;
        }
      }
    },
  },
  {
    id: 4409,
    name: 'Agav Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.ARMOR,
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
    spModA: 0,
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
      flatNamePercent: 0,
      matkPercent: 0,
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
    prefix: 'Panic',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.matkPercent = 0;
      _this.spModA = 0;
      _this.baseDef = 0;

      if (
        character.class.classKey === ClassKey.Warlock ||
        character.class.classKey === ClassKey.Sorcerer
      ) {
        _this.additionMAtk.matkPercent = 0.05;
        _this.spModA = 100;
        _this.baseDef = -10;
      }
    },
  },
  {
    id: 27259,
    name: 'Licheniyes Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.SHOES,
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0.03,
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
    prefix: 'Licheniyes',
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.skillElement = 0;
      if (E_Element.HOLY === character.elementalConverter) {
        _this.additionMAtk.skillElement = 0.05;
      }
    },
  },
  {
    id: 31023,
    name: 'Celine Kimi Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.WEAPON,
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0.1,
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
    prefix: 'Maniac',
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 27177,
    name: 'Marsh Arclouse Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.GARMENT,
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0,
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
    aspd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    prefix: 'Marsh',
    script: (character: Character2, _this: IBaseEquipment): void => {
      const baseInt = character.class.int0;
      const mul10 = Math.floor(baseInt / 10);
      _this.eMATK = Number(new Big(mul10).mul(3).valueOf());
      _this.aspd = Number(new Big(mul10).mul(0.01).valueOf());

      if (baseInt >= 120) {
        _this.eMATK += 40;
      }
    },
  },
  {
    id: 27309,
    name: 'Greater Sanare Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0,
      skillElement: 0,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    eMATK: 10,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    suffix: 'of Holy Power',
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.additionMAtk.skillElement = 0;
      if (E_Element.HOLY === character.elementalConverter) {
        _this.additionMAtk.skillElement = 0.05;

        if (upgrade >= 9) {
          _this.additionMAtk.skillElement = 0.1;
        }
      }
    },
  },
  {
    id: 4528,
    name: 'Mutant Coelacanth Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
      flatNamePercent: 0,
      matkPercent: 0,
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
    prefix: 'Willpower',
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      const mul2 = Number(new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf());

      _this.additionMAtk.matkPercent = Number(
        new Big(mul2).plus(0.02).valueOf()
      );
      _this.hpModB = Number(new Big(mul2).mul(-1).valueOf());
    },
  },
  {
    id: 4529,
    name: 'Cruel Coelacanth Card',
    type: EquipmentType.CARD,
    subType: null,
    location: null,
    compoundOn: CompoundOn.HEADER_GEAR,
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
    prefix: 'Willpower',
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      const mul2 = Number(new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf());

      _this.additionAtk.class = Number(new Big(mul2).plus(0.02).valueOf());
      _this.spModB = Number(new Big(mul2).mul(-1).valueOf());
    },
  },
];
