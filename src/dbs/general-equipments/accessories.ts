import Big from 'big.js';
import { CheckItemInSlots } from '../../utils/utils';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import {
  EquipmentLocation,
  EquipmentSubType,
  EquipmentType,
  IBaseEquipment,
} from '../../models/equipment';
import { E_Element } from '../../models/element';
import { MonsterType } from '../../models/monster';

export const accessories: IBaseEquipment[] = [
  {
    id: 490033,
    name: `Fallen Angel's Tear [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: false,
    slot4Enable: false,
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
      atkPercent2: 0.06,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    hit: 15,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 2746,
    name: 'Cold Heart',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 3,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    additionAtk: {
      size: 0.08,
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
    aspd: 0.03,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross, ClassKey.ShadowChaser],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 2620,
    name: `Rogue's Treasure`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
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
    criRate: 0,
    hit: 0,
    flee: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross, ClassKey.ShadowChaser],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.criRate = 0;
      _this.hit = 0;
      _this.flee = 0;
      if (character.class.str0 >= 90) {
        _this.hit = 10;
        _this.flee = 10;
      }

      if (character.class.agi0 >= 90) {
        _this.eATK = 10;
        _this.criRate = 10;
      }
    },
  },
  {
    id: 490147,
    name: '1st Anniversary Ring',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
    compoundOn: null,
    baseDef: 0,
    baseMDEF: 5,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 2,
    agi: 2,
    vit: 2,
    int: 2,
    dex: 2,
    luk: 2,
    hpModA: 0,
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
    eATK: 25,
    eMATK: 25,
    cATK: 0,
    aspd: 0,
    aspdFlat: 0,
    acd: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.class = 0;
      _this.additionAtk.atkPercent2 = 0;
      _this.additionAtk.size = 0;
      _this.criticalPercent = 0;
      _this.longRangePercent = 0;
      _this.hpModB = 0;
      _this.aspd = 0;
      _this.aspdFlat = 0;
      _this.acd = 0;
      _this.additionMAtk.matkPercent = 0;
      _this.additionMAtk.skillElement = 0;

      if (!character.shoes || character.shoes.equipUpgradeValue < 9) {
        return;
      }

      // STR
      if (
        [22000, 22006, 22107, 22113].includes(character.shoes?.id) &&
        character.class.str0 >= 120
      ) {
        _this.additionAtk.atkPercent2 = 0.08;
        _this.additionAtk.size = 0.08;
        return;
      }

      // AGI
      if (
        [22002, 22010, 22109, 22115].includes(character.shoes?.id) &&
        character.class.agi0 >= 120
      ) {
        _this.aspd = 0.04;
        _this.criticalPercent = 0.15;
        return;
      }

      // VIT
      if (
        [22003, 22007, 22110, 22116].includes(character.shoes?.id) &&
        character.class.vit0 >= 120
      ) {
        _this.hpModB = 0.08;
        _this.acd = 0.08;
        return;
      }

      // INT
      if (
        [22001, 22009, 22108, 22114].includes(character.shoes?.id) &&
        character.class.int0 >= 120
      ) {
        _this.additionMAtk.matkPercent = 0.08;
        _this.additionMAtk.skillElement = 0.08;
        return;
      }

      // DEX
      if (
        [22004, 22008, 22111, 22117].includes(character.shoes?.id) &&
        character.class.dex0 >= 120
      ) {
        _this.additionAtk.atkPercent2 = 0.08;
        _this.longRangePercent = 0.05;
        return;
      }

      // LUK
      if (
        [22005, 22011, 22112, 22118].includes(character.shoes?.id) &&
        character.class.luk0 >= 120
      ) {
        _this.criticalPercent = 0.1;
        _this.aspdFlat = 1;
        return;
      }
    },
  },
  {
    id: 2910,
    name: 'Bakonawa Agimat Tattoo',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
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
      class: 0.07,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    aspd: 0.1,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 2928,
    name: 'Luk Glove [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
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
    hpModA: 100,
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
    criRate: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0;
      _this.criRate = Number(
        new Big(Math.floor(character.class.luk0 / 10)).mul(1).valueOf()
      );
      if (character.class.luk0 >= 110) {
        _this.criticalPercent = 0.01;
      }
    },
  },
  {
    id: 2965,
    name: 'Angel Egg [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 1,
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
      class: 0.05,
    },
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0.05,
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
    id: 2990,
    name: 'Pendant of Harmony',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      matkPercent: 0.06,
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
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.str = -5;
      _this.agi = 0;
      _this.vit = 0;
      _this.int = 0;
      _this.dex = 0;
      _this.luk = 0;

      if (
        character.rightAccessory?.id === 2991 ||
        character.leftAccessory?.id === 2991
      ) {
        _this.str += 5;
        _this.agi += 5;
        _this.vit += 5;
        _this.int += 5;
        _this.dex += 5;
        _this.luk += 5;
      }
    },
  },
  {
    id: 2991,
    name: 'Pendant of Chaos',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: -5,
    dex: 0,
    luk: 0,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0.06,
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
    id: 2992,
    name: 'Pendant of Maelstrom [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
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
      class: 0.06,
    },
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      matkPercent: 0.06,
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
    id: 2729,
    name: 'Diabolus Ring [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.RIGHT_ACCESSORY,
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
    hpModA: 100,
    hpModB: 0,
    spModA: 100,
    spModB: 0,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
    },
    additionDef: {
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.flatNamePercent = 0;
      _this.additionMAtk.flatNamePercent = 0;
      if (
        [1916, 1917, 1922, 1923, 1924, 1925].includes(character.monster?.id)
      ) {
        _this.additionAtk.flatNamePercent = 0.1;
        _this.additionMAtk.flatNamePercent = 0.1;
      }
    },
  },
  {
    id: 2728,
    name: 'Cursed Hand [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
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
    hit: 10,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 32221,
    name: 'Temporal Transcendent Ring [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 15,
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
    aspd: 0.1,
    aspdFlat: 0,
    vct: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.aspdFlat = 0;
      _this.vct = 0.1;
      if (
        CheckItemInSlots(character, 15383) &&
        CheckItemInSlots(character, 20939) &&
        CheckItemInSlots(character, 22204)
      ) {
        _this.aspdFlat = 2;
        _this.vct = 0.2;
      }
    },
  },
  {
    id: 2884,
    name: `Peuz's Seal [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 3,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
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
    eATK: 20,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 28505,
    name: 'Ring of Devil [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
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
    aspd: 0,
    vct: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.atkPercent2 = 0.05;
      _this.additionMAtk.matkPercent = 0.05;
      _this.aspd = 0;
      _this.vct = 0;
      _this.hpModB = 0;
      _this.criticalPercent = 0;

      // Dark Lord Essence Force
      if (CheckItemInSlots(character, 4908)) {
        _this.additionAtk.atkPercent2 = Number(
          new Big(_this.additionAtk.atkPercent2).plus(0.05).valueOf()
        );
      }
      if (CheckItemInSlots(character, 4909)) {
        _this.additionAtk.atkPercent2 = Number(
          new Big(_this.additionAtk.atkPercent2).plus(0.05).valueOf()
        );
      }
      if (CheckItemInSlots(character, 4910)) {
        _this.additionAtk.atkPercent2 = Number(
          new Big(_this.additionAtk.atkPercent2).plus(0.05).valueOf()
        );
      }

      // Dark Lord Essence Intelligence
      if (CheckItemInSlots(character, 4911)) {
        _this.additionMAtk.matkPercent = Number(
          new Big(_this.additionMAtk.matkPercent).plus(0.05).valueOf()
        );
      }
      if (CheckItemInSlots(character, 4912)) {
        _this.additionMAtk.matkPercent = Number(
          new Big(_this.additionMAtk.matkPercent).plus(0.05).valueOf()
        );
      }
      if (CheckItemInSlots(character, 4913)) {
        _this.additionMAtk.matkPercent = Number(
          new Big(_this.additionMAtk.matkPercent).plus(0.05).valueOf()
        );
      }

      // Dark Lord Essence Speed
      if (CheckItemInSlots(character, 4914)) {
        _this.aspd = Number(new Big(_this.aspd).plus(0.05).valueOf());
      }
      if (CheckItemInSlots(character, 4915)) {
        _this.aspd = Number(new Big(_this.aspd).plus(0.05).valueOf());
      }
      if (CheckItemInSlots(character, 4916)) {
        _this.aspd = Number(new Big(_this.aspd).plus(0.05).valueOf());
      }

      // Dark Lord Essence Concentration
      if (CheckItemInSlots(character, 4920)) {
        _this.vct = Number(new Big(_this.vct).plus(0.05).valueOf());
      }
      if (CheckItemInSlots(character, 4921)) {
        _this.vct = Number(new Big(_this.vct).plus(0.05).valueOf());
      }
      if (CheckItemInSlots(character, 4922)) {
        _this.vct = Number(new Big(_this.vct).plus(0.05).valueOf());
      }

      // Dark Lord Essence Vitality
      if (CheckItemInSlots(character, 4917)) {
        _this.hpModB = Number(new Big(_this.hpModB).plus(0.05).valueOf());
      }
      if (CheckItemInSlots(character, 4918)) {
        _this.hpModB = Number(new Big(_this.hpModB).plus(0.05).valueOf());
      }
      if (CheckItemInSlots(character, 4919)) {
        _this.hpModB = Number(new Big(_this.hpModB).plus(0.05).valueOf());
      }

      // Dark Lord Essence Luck
      if (CheckItemInSlots(character, 4917)) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.05).valueOf()
        );
      }
      if (CheckItemInSlots(character, 4918)) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.05).valueOf()
        );
      }
      if (CheckItemInSlots(character, 4919)) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.05).valueOf()
        );
      }
    },
  },
  {
    id: 28302,
    name: 'Vesper Core 01 [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 1,
    baseMDEF: 3,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 2,
    dex: 0,
    luk: 0,
    spModB: 0.05,
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
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 28303,
    name: 'Vesper Core 02 [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 1,
    baseMDEF: 3,
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
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 28304,
    name: 'Vesper Core 03 [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 1,
    baseMDEF: 3,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 3,
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
    flee: 5,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 28305,
    name: 'Vesper Core 04 [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 1,
    baseMDEF: 3,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    hit: 10,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 490182,
    name: 'Immortal Dog Tag [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
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
    eATK: 40,
    cATK: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 28496,
    name: `Vigilante's Badge (R) [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.RIGHT_ACCESSORY,
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
    hpModA: 0,
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
    vct: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.matkPercent = 0;
      _this.vct = 0;
      _this.hpModA = 0;

      if (character.class.int0 >= 90) {
        _this.additionMAtk.matkPercent = 0.03;
      }

      if (character.class.dex0 >= 90) {
        _this.vct = 0.05;
      }

      if (character.class.vit0 >= 90) {
        _this.hpModA = 1000;
      }
    },
  },
  {
    id: 28495,
    name: `Vigilante's Badge (L) [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
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
    longRangePercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.atkPercent2 = 0;
      _this.longRangePercent = 0;
      _this.hpModA = 0;
      const baseStr = character.class.str0;
      const baseDex = character.class.dex0;
      const baseVit = character.class.vit0;

      if (baseStr >= 90) {
        _this.additionAtk.atkPercent2 = 0.03;
      }

      if (baseDex >= 90) {
        _this.longRangePercent = 0.03;
      }

      if (baseVit >= 90) {
        _this.hpModA = 1000;
      }
    },
  },
  {
    id: 490246,
    name: 'Vassalage Ring [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
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
      class: 0.05,
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
      _this.criticalPercent = 0;

      const baseLevel = character.class.baseLv;
      const multiplierBaseLevel = Math.floor(baseLevel / 35);
      _this.criticalPercent = Number(
        new Big(multiplierBaseLevel).mul(0.01).valueOf()
      );

      if (baseLevel >= 175) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).mul(2).valueOf()
        );
      }
    },
  },
  {
    id: 32228,
    name: `King Schmidt's Strong Insignia [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
    },
    eATK: 0,
    cATK: 0,
    hit: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.hit = 0;
      if (character.bodyGear?.id === 15388 && character.garment?.id === 15389) {
        _this.eATK = 25;
        _this.hit = 10;
      }
    },
  },
  {
    id: 32229,
    name: `King Schmidt's Divine Power Insignia [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
    eMATK: 0,
    cATK: 0,
    vct: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eMATK = 0;
      _this.vct = 0;
      if (character.bodyGear?.id === 15388 && character.garment?.id === 15389) {
        _this.eMATK = 25;
        _this.vct = 0.08;
      }
    },
  },
  {
    id: 32230,
    name: `King Schmidt's White Cloud Insignia [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
      _this.criticalPercent = 0.07;
      _this.additionAtk.atkPercent2 = 0;
      if (character.bodyGear?.id === 15388 && character.garment?.id === 15389) {
        _this.additionAtk.atkPercent2 = 0.05;
        _this.criticalPercent = 0.14;
      }
    },
  },
  {
    id: 32231,
    name: `King Schmidt's Rigid Insignia [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
    acd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.hpModB = 0.1;
      _this.acd = 0;
      if (character.bodyGear?.id === 15388 && character.garment?.id === 15389) {
        _this.hpModB = 0.15;
        _this.acd = 0.05;
      }
    },
  },
  {
    id: 32232,
    name: `King Schmidt's Flash Insignia [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
    criRate: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.aspd = 0.05;
      _this.criRate = 0;
      if (character.bodyGear?.id === 15388 && character.garment?.id === 15389) {
        _this.aspd = 0.08;
        _this.criRate = 7;
      }
    },
  },
  {
    id: 32233,
    name: `King Schmidt's Celestial Bow Insignia [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
    aspdFlat: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    longRangePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.longRangePercent = 0.07;
      _this.aspdFlat = 0;
      if (character.bodyGear?.id === 15388 && character.garment?.id === 15389) {
        _this.longRangePercent = 0.14;
        _this.aspdFlat = 1;
      }
    },
  },
  {
    id: 2963,
    name: 'Physical Enhancer Ring [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: true,
    option1Enable: true,
    option2Enable: true,
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
      atkPercent2: 0,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0.05,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    longRangePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 2616,
    name: 'Critical Ring',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
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
    criRate: 5,
    criticalPercent: 0,
    penetrationPercent: 0,
    longRangePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 32270,
    name: 'Luminous Blue Stone [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    aspd: 0.05,
    criRate: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    longRangePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0.05;
      _this.criRate = 0;
      if (character.class.luk0 >= 100) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.05).valueOf()
        );
        _this.criRate += 5;
      }

      if (
        CheckItemInSlots(character, 4818) &&
        character.comboSet.indexOf('32270_4818') === -1
      ) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.05).valueOf()
        );
        if (character.comboSet.indexOf('32270_4818') === -1) {
          character.comboSet.push('32270_4818');
        }
      }

      if (
        CheckItemInSlots(character, 4817) &&
        character.comboSet.indexOf('32270_4817') === -1
      ) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.05).valueOf()
        );
        if (character.comboSet.indexOf('32270_4817') === -1) {
          character.comboSet.push('32270_4817');
        }
      }
    },
  },
  {
    id: 490030,
    name: 'Temporal Ring [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    hpModB: 0,
    spModB: 0,
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
    acd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    longRangePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.hpModB = 0;
      _this.spModB = 0;
      _this.longRangePercent = 0;
      _this.criticalPercent = 0;
      _this.eMATK = 0;
      if (
        CheckItemInSlots(character, 4875) &&
        character.comboSet.indexOf('490030_4875') === -1
      ) {
        _this.eATK = 50;
        if (character.comboSet.indexOf('490030_4875') === -1) {
          character.comboSet.push('490030_4875');
        }
      }

      if (
        CheckItemInSlots(character, 4879) &&
        character.comboSet.indexOf('490030_4879') === -1
      ) {
        _this.longRangePercent = 0.1;
        if (character.comboSet.indexOf('490030_4879') === -1) {
          character.comboSet.push('490030_4879');
        }
      }

      if (
        CheckItemInSlots(character, 4880) &&
        character.comboSet.indexOf('490030_4880') === -1
      ) {
        _this.criticalPercent = 0.1;
        if (character.comboSet.indexOf('490030_4880') === -1) {
          character.comboSet.push('490030_4880');
        }
      }

      if (
        CheckItemInSlots(character, 4878) &&
        character.comboSet.indexOf('490030_4878') === -1
      ) {
        _this.hpModB = 0.15;
        if (character.comboSet.indexOf('490030_4878') === -1) {
          character.comboSet.push('490030_4878');
        }
      }

      if (
        CheckItemInSlots(character, 4876) &&
        character.comboSet.indexOf('490030_4876') === -1
      ) {
        _this.eMATK = 50;
        if (character.comboSet.indexOf('490030_4876') === -1) {
          character.comboSet.push('490030_4876');
        }
      }

      if (
        CheckItemInSlots(character, 22202) &&
        character.comboSet.indexOf('490030_22202') === -1
      ) {
        _this.hpModB = 0.15;
        _this.spModB = 0.05;
        if (character.comboSet.indexOf('490030_22202') === -1) {
          character.comboSet.push('490030_22202');
        }
      }
    },
  },
  {
    id: 32207,
    name: 'Illusion Booster R [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.RIGHT_ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
      atkPercent2: 0.05,
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
    id: 32208,
    name: 'Illusion Booster L [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
      atkPercent2: 0.05,
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
    id: 32209,
    name: 'Illusion Battle Chip R [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.RIGHT_ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0.05,
      skillElement: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 32210,
    name: 'Illusion Battle Chip L [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0.05,
      skillElement: 0,
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 490004,
    name: 'Attacker Booster Ring [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    hpModB: 0.03,
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
    aspd: 0.1,
    vct: 0.1,
    criticalPercent: 0.05,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 490007,
    name: 'Range Booster Brooch [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    hpModB: 0.03,
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
    aspd: 0.1,
    vct: 0.1,
    criticalPercent: 0,
    longRangePercent: 0.02,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 490005,
    name: 'Elemental Booster Earring [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    spModA: 0,
    spModB: 0.03,
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
    flee: 0,
    fct: 0,
    vct: 0.1,
    aspd: 0.1,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.skillElement = 0;
      if (
        [
          E_Element.WATER,
          E_Element.WIND,
          E_Element.EARTH,
          E_Element.FIRE,
        ].includes(character.elementalConverter)
      ) {
        _this.additionMAtk.skillElement = 0.05;
      }
    },
  },
  {
    id: 490006,
    name: 'Defunct Booster Earring [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    spModA: 0,
    spModB: 0.03,
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
    flee: 0,
    fct: 0,
    vct: 0.1,
    aspd: 0.1,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.skillElement = 0;
      if (
        [
          E_Element.GHOST,
          E_Element.HOLY,
          E_Element.SHADOW,
          E_Element.UNDEAD,
          E_Element.POISON,
        ].includes(character.elementalConverter)
      ) {
        _this.additionMAtk.skillElement = 0.05;
      }
    },
  },
  {
    id: 2629,
    name: 'Megingjard',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    baseDef: 0,
    baseMDEF: 7,
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
      _this.additionAtk.class = 0;
      _this.str = 40 + Math.floor(character.class.baseLv / 5);
      const baseStr = character.class.str0;

      if (baseStr >= 120 && character.monster?.type === MonsterType.BOSS) {
        _this.additionAtk.class = 0.1;
      }
    },
  },
  {
    id: 490309,
    name: '[Upgrade] Illusion Ring [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 0,
    baseMDEF: 0,
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
    spModB: 0,
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
    acd: 0,
    vct: 0,
    fct: 0,
    flee: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    penetrationMPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.atkPercent2 = 0.05;
      _this.additionMAtk.matkPercent = 0.05;
      _this.str = 1;
      _this.agi = 1;
      _this.vit = 1;
      _this.int = 1;
      _this.dex = 1;
      _this.luk = 1;
      _this.acd = 0.05;
      _this.hpModB = 0;
      _this.spModB = 0;
      _this.additionAtk.class = 0;
      _this.additionMAtk.class = 0;
      _this.baseMDEF = 0;
      _this.fct = 0;

      if (character.rightAccessory?.id === 32207) {
        if (character.monster.type === MonsterType.BOSS) {
          _this.additionAtk.class = 0.1;
        }
      }

      if (character.rightAccessory?.id === 32208) {
        _this.hpModB = 0.1;
        _this.spModB = 0.1;
      }

      if (character.rightAccessory?.id === 32209) {
        _this.int = 6;
        _this.dex = 6;
        if (character.monster.type === MonsterType.BOSS) {
          _this.additionMAtk.class = 0.1;
        }
      }

      if (character.rightAccessory?.id === 32210) {
        _this.baseMDEF = 15;
        _this.fct = 0.3;
      }
    },
  },
  {
    id: 490310,
    name: 'Secret Illusion Ring [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 0,
    baseMDEF: 15,
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
    spModB: 0,
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
    acd: 0,
    vct: 0,
    fct: 0,
    flee: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    penetrationMPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.atkPercent2 = 0.05;
      _this.additionMAtk.matkPercent = 0.05;
      _this.str = 1;
      _this.agi = 1;
      _this.vit = 1;
      _this.int = 6;
      _this.dex = 6;
      _this.luk = 1;
      _this.acd = 0.05;
      _this.fct = 0.3;
      _this.vct = 0;
      _this.hpModB = 0.1;
      _this.spModB = 0.1;
      _this.penetrationMPercent = 0;
      _this.longRangePercent = 0;
      _this.flee = 0;

      if (
        character.shoes?.slot2?.id === 25700 ||
        character.shoes?.slot3?.id === 25700 ||
        character.shoes?.slot4?.id === 25700
      ) {
        _this.vct = 0.2;
      }

      if (
        character.shoes?.slot2?.id === 25701 ||
        character.shoes?.slot3?.id === 25701 ||
        character.shoes?.slot4?.id === 25701
      ) {
        _this.penetrationMPercent = 0.5;
      }

      if (
        character.shoes?.slot2?.id === 25703 ||
        character.shoes?.slot3?.id === 25703 ||
        character.shoes?.slot4?.id === 25703
      ) {
        _this.hpModB = 0.25;
      }

      if (
        character.shoes?.slot2?.id === 25704 ||
        character.shoes?.slot3?.id === 25704 ||
        character.shoes?.slot4?.id === 25704
      ) {
        _this.longRangePercent = 0.08;
      }

      if (
        character.shoes?.slot2?.id === 25705 ||
        character.shoes?.slot3?.id === 25705 ||
        character.shoes?.slot4?.id === 25705
      ) {
        _this.flee = 40;
      }
    },
  },
  {
    id: 28513,
    name: `Celine's Brooch [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    spModA: 250,
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
      flatNamePercent: 0,
      matkPercent: 0.05,
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
    vct: 0.1,
    aspdFlat: 1,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.class = 0;

      if (
        character.upperHeadgear?.id === 18849 &&
        character.comboSet.indexOf('18849_28513') === -1
      ) {
        const upgrade = character.upperHeadgear.equipUpgradeValue;

        if (upgrade >= 7) {
          if (character.monster?.type === MonsterType.BOSS) {
            _this.additionMAtk.class = 0.2;
          }

          if (upgrade >= 9) {
            if (character.monster?.type === MonsterType.BOSS) {
              _this.additionMAtk.class = 0.4;
            }
          }
        }

        character.comboSet.push('18849_28513');
      }
    },
  },
  {
    id: 28507,
    name: `Magician's Gloves [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    penetrationMPercent: 0.5,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.skillElement = 0;
      if (character.elementalConverter === E_Element.NEUTRAL) {
        _this.additionMAtk.skillElement = 0.05;
      } else if (character.elementalConverter === E_Element.WIND) {
        _this.additionMAtk.skillElement = 0.05;
      } else if (character.elementalConverter === E_Element.EARTH) {
        _this.additionMAtk.skillElement = 0.05;
      } else if (character.elementalConverter === E_Element.FIRE) {
        _this.additionMAtk.skillElement = 0.05;
      } else if (character.elementalConverter === E_Element.WATER) {
        _this.additionMAtk.skillElement = 0.05;
      }
    },
  },
  {
    id: 490316,
    name: 'Brooch of Matador [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    acd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.acd = 0.05;
      _this.additionAtk.class = 0.1;
      _this.additionMAtk.class = 0.1;

      if (character.leftAccessory?.id === 490316) {
        if (character.comboSet.indexOf('490316_L') === -1) {
          _this.acd = 0.12;
          character.comboSet.push('490316_L');
        }
      }
    },
  },
];
