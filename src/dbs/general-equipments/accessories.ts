import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import {
  EquipmentLocation,
  EquipmentSubType,
  EquipmentType,
  IBaseEquipment,
} from '../../models/equipment';

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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 2746,
    name: `Cold Heart`,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      if (character.class.agi0 >= 90) {
        _this.eATK = 10;
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
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.class = 0;
      _this.additionAtk.atkPercent2 = 0;
      _this.additionAtk.size = 0;
      _this.criticalPercent = 0;
      _this.hpModB = 0;

      if (!character.shoes || character.shoes.equipUpgradeValue < 9) {
        return;
      }

      // STR
      if (
        [22000, 22006, 22107, 22113].includes(character.shoes.id) &&
        character.class.str0 >= 120
      ) {
        _this.additionAtk.atkPercent2 = 0.08;
        _this.additionAtk.size = 0.08;
        return;
      }

      // AGI
      if (
        [22002, 22010, 22109, 22115].includes(character.shoes.id) &&
        character.class.agi0 >= 120
      ) {
        _this.criticalPercent = 0.15;
        return;
      }

      // VIT
      if (
        [22003, 22007, 22110, 22116].includes(character.shoes.id) &&
        character.class.vit0 >= 120
      ) {
        _this.hpModB = 0.08;
        return;
      }

      // INT
      if (
        [22001, 22009, 22108, 22114].includes(character.shoes.id) &&
        character.class.int0 >= 120
      ) {
        return;
      }

      // DEX
      if (
        [22004, 22008, 22111, 22117].includes(character.shoes.id) &&
        character.class.dex0 >= 120
      ) {
        _this.additionAtk.atkPercent2 = 0.08;
        return;
      }

      // LUK
      if (
        [22005, 22011, 22112, 22118].includes(character.shoes.id) &&
        character.class.luk0 >= 120
      ) {
        _this.criticalPercent = 0.1;
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
      _this.criticalPercent = 0;
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
      size: 0.05,
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
    int: 0,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
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
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.class = 0.05;
      const checkEssence = (id: number) => {
        return [
          character.upperHeadgear?.slot1?.id,
          character.middleHeadgear?.slot1?.id,
          character.lowerHeadgear?.slot1?.id,
          character.bodyGear?.slot1?.id,
          character.rightHand?.slot1?.id,
          character.rightHand?.slot2?.id,
          character.rightHand?.slot3?.id,
          character.rightHand?.slot4?.id,
          character.leftHand?.slot1?.id,
          character.leftHand?.slot2?.id,
          character.leftHand?.slot3?.id,
          character.leftHand?.slot4?.id,
          character.garment?.slot1?.id,
          character.shoes?.slot1?.id,
          character.rightAccessory?.slot1?.id,
          character.leftAccessory?.slot1?.id,
        ].includes(id);
      };

      // Dark Lord Essence Force 1 (id: 4908)
      if (checkEssence(4908)) {
        _this.additionAtk.class = Number(
          new Big(_this.additionAtk.class).plus(0.05).valueOf()
        );
      }
      if (checkEssence(4909)) {
        _this.additionAtk.class = Number(
          new Big(_this.additionAtk.class).plus(0.05).valueOf()
        );
      }
      if (checkEssence(4910)) {
        _this.additionAtk.class = Number(
          new Big(_this.additionAtk.class).plus(0.05).valueOf()
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      if (character.bodyGear?.id === 15389 && character.garment?.id === 15389) {
        _this.eATK = 25;
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
      if (character.bodyGear?.id === 15389 && character.garment?.id === 15389) {
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.hpModB = 0.1;
      if (character.bodyGear?.id === 15389 && character.garment?.id === 15389) {
        _this.hpModB = 0.05;
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
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
    criticalPercent: 0,
    penetrationPercent: 0,
    longRangePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.longRangePercent = 0.07;
      if (character.bodyGear?.id === 15389 && character.garment?.id === 15389) {
        _this.longRangePercent = 0.14;
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
    criticalPercent: 0,
    penetrationPercent: 0,
    longRangePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0.05;
      if (character.class.luk0 >= 100) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.05).valueOf()
        );
      }

      if (
        character.comboSet.indexOf('4818') > -1 &&
        character.comboSet.indexOf('32270_4818') === -1
      ) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.05).valueOf()
        );
        character.comboSet.push('32270_4818');
      }

      if (
        character.comboSet.indexOf('4817') > -1 &&
        character.comboSet.indexOf('32270_4817') === -1
      ) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.05).valueOf()
        );
        character.comboSet.push('32270_4817');
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
    longRangePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.hpModB = 0;
      _this.spModB = 0;
      _this.longRangePercent = 0;
      _this.criticalPercent = 0;
      if (
        character.comboSet.indexOf('4875') > -1 &&
        character.comboSet.indexOf('490030_4875') === -1
      ) {
        _this.eATK = 50;
        character.comboSet.push('490030_4875');
      }

      if (
        character.comboSet.indexOf('4879') > -1 &&
        character.comboSet.indexOf('490030_4879') === -1
      ) {
        _this.longRangePercent = 0.1;
        character.comboSet.push('490030_4879');
      }

      if (
        character.comboSet.indexOf('4880') > -1 &&
        character.comboSet.indexOf('490030_4880') === -1
      ) {
        _this.criticalPercent = 0.1;
        character.comboSet.push('490030_4880');
      }

      if (
        character.comboSet.indexOf('4878') > -1 &&
        character.comboSet.indexOf('490030_4878') === -1
      ) {
        _this.hpModB = 0.15;
        character.comboSet.push('490030_4878');
      }

      if (
        character.shoes?.id === 22202 &&
        character.comboSet.indexOf('490030_22202') === -1
      ) {
        _this.hpModB = 0.15;
        _this.spModB = 0.05;
        character.comboSet.push('490030_22202');
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
    criticalPercent: 0,
    longRangePercent: 0.02,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
];
