import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import {
  IBaseEquipment,
  EquipmentType,
  EquipmentSubType,
  EquipmentLocation,
} from '../../models/equipment';
import { MonsterRace } from '../../models/monster';

export const shoes: IBaseEquipment[] = [
  {
    id: 22006,
    name: 'Temporal Str Boots [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHOES,
    location: EquipmentLocation.SHOES,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: false,
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 25,
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
    spModA: 0,
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
      const upgrade = _this.equipUpgradeValue;

      _this.hpModA = Number(
        new Big(Math.floor(upgrade / 3)).mul(100).plus(300).valueOf()
      );
      _this.spModA = Number(
        new Big(Math.floor(upgrade / 3)).mul(100).plus(30).valueOf()
      );

      const refineEAtk = Number(
        new Big(Math.floor(upgrade / 3)).mul(7).valueOf()
      );
      _this.eATK = refineEAtk;

      if (character.class.str0 >= 120) {
        _this.eATK = refineEAtk + 50;
      }
    },
  },
  {
    id: 22011,
    name: 'Temporal Luk Boots [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHOES,
    location: EquipmentLocation.SHOES,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: false,
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
    hpModB: 0,
    spModA: 0,
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
      const upgrade = _this.equipUpgradeValue;

      _this.hpModA = Number(
        new Big(Math.floor(upgrade / 3)).mul(100).plus(300).valueOf()
      );
      _this.spModA = Number(
        new Big(Math.floor(upgrade / 3)).mul(100).plus(30).valueOf()
      );

      const refineCriticalPercent = Number(
        new Big(Math.floor(upgrade / 3)).mul(0.02).valueOf()
      );
      _this.criticalPercent = refineCriticalPercent;

      if (character.class.luk0 >= 120) {
        _this.criticalPercent = Number(
          new Big(refineCriticalPercent).plus(0.3).valueOf()
        );
      }
    },
  },
  {
    id: 22204,
    name: 'Temporal Transcendent Boots [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHOES,
    location: EquipmentLocation.SHOES,
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
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 2476,
    name: `Peuz's Greaves [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHOES,
    location: EquipmentLocation.SHOES,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 32,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    spModA: 40,
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
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 22202,
    name: 'Temporal Boots [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHOES,
    location: EquipmentLocation.SHOES,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 25,
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
    spModA: 0,
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
    longRangePercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.str = 0;
      _this.agi = 0;
      _this.vit = 0;
      _this.int = 0;
      _this.dex = 0;
      _this.luk = 0;
      _this.eATK = 0;
      _this.hpModB = 0;
      _this.longRangePercent = 0;
      _this.criticalPercent = 0;

      const upgrade = _this.equipUpgradeValue;

      if (upgrade >= 10) {
        _this.str = 2;
        _this.agi = 2;
        _this.vit = 2;
        _this.int = 2;
        _this.dex = 2;
        _this.luk = 2;
      }

      if (character.class.str0 >= 108) {
        _this.eATK = 50;
      }

      if (character.class.agi0 >= 108) {
        // aspd + 1
      }

      if (character.class.vit0 >= 108) {
        _this.hpModB = 0.08;
      }

      if (character.class.int0 >= 108) {
        // matk + 60
      }

      if (character.class.dex0 >= 108) {
        _this.longRangePercent = 0.05;
      }

      if (character.class.luk0 >= 108) {
        _this.criticalPercent = 0.3;
      }
    },
  },
  {
    id: 22196,
    name: 'Illusion Leg A-type [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHOES,
    location: EquipmentLocation.SHOES,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
    spModA: 0,
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
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.spModA = 200;
      _this.longRangePercent = 0;
      _this.additionAtk.atkPercent2 = 0;

      const upgrade = _this.equipUpgradeValue;

      if (upgrade >= 7) {
        _this.longRangePercent = 0.05;
      }

      _this.spModA = Number(
        new Big(Math.floor(upgrade / 2)).mul(20).plus(_this.spModA).valueOf()
      );

      if (character.bodyGear?.id === 15376) {
        _this.additionAtk.atkPercent2 = 0.05;
      }
    },
  },
  {
    id: 470000,
    name: 'Attacker Booster Greaves [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHOES,
    location: EquipmentLocation.SHOES,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    spModA: 0,
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
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0;
      const upgrade = _this.equipUpgradeValue;

      if (upgrade >= 7) {
        _this.criticalPercent = 0.05;
      }
    },
  },
  {
    id: 470003,
    name: 'Range Booster Boots [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHOES,
    location: EquipmentLocation.SHOES,
    compoundOn: null,
    slot1Enable: 'CARD',
    baseDef: 18,
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
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 20;
      const upgrade = _this.equipUpgradeValue;

      _this.spModA = Number(new Big(Math.floor(upgrade / 3)).mul(50).valueOf());

      if (upgrade >= 7) {
        _this.spModA += 300;
      }
    },
  },
  {
    id: 470123,
    name: 'Hunting Shoes [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHOES,
    location: EquipmentLocation.SHOES,
    compoundOn: null,
    slot1Enable: 'CARD',
    baseDef: 30,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    hpModA: 1000,
    spModA: 200,
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
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.race = 0;
      const upgrade = _this.equipUpgradeValue;

      if (upgrade >= 9) {
        if (
          character.monster.race === MonsterRace.BRUTE ||
          character.monster.race === MonsterRace.FISH
        ) {
          _this.additionAtk.race = 0.15;
        }
      }
    },
  },
  {
    id: 470001,
    name: 'Elemental Booster Shoes [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHOES,
    location: EquipmentLocation.SHOES,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    hpModA: 0,
    spModA: 0,
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
    eMATK: 20,
    cATK: 0,
    flee: 20,
    fct: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.fct = 0;
      const upgrade = _this.equipUpgradeValue;

      _this.hpModA = Number(new Big(Math.floor(upgrade / 3)).mul(400).valueOf());

      if (upgrade >= 7) {
        _this.hpModA += 1800;

        if (upgrade >= 9) {
          _this.fct = 0.5;
        }
      }
    },
  },
  {
    id: 470002,
    name: 'Defunct Booster Shoes [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHOES,
    location: EquipmentLocation.SHOES,
    compoundOn: null,
    slot1Enable: 'CARD',
    baseDef: 18,
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
    eMATK: 20,
    cATK: 0,
    flee: 20,
    fct: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.fct = 0;
      const upgrade = _this.equipUpgradeValue;

      _this.hpModA = Number(new Big(Math.floor(upgrade / 3)).mul(400).valueOf());

      if (upgrade >= 7) {
        _this.hpModA += 1800;

        if (upgrade >= 9) {
          _this.fct = 0.5;
        }
      }
    },
  },
];
