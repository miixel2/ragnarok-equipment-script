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

export const garments: IBaseEquipment[] = [
  {
    id: 2576,
    name: 'Bravery Bag [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: false,
    slot4Enable: false,
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

      const upgrade = _this.equipUpgradeValue;
      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;

      if (upgrade >= 7) {
        if (baseStr >= 90) {
          _this.eATK = 20;
        }

        if (baseLuk >= 90) {
          _this.criticalPercent = 0.1;
        }

        if (upgrade >= 9) {
          if (baseStr >= 90) {
            _this.eATK = 30;
          }

          if (baseLuk >= 90) {
            _this.criticalPercent = 0.15;
          }
        }
      }
    },
  },
  {
    id: 20773,
    name: 'Excelion Wing',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: false,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 40,
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
    id: 2519,
    name: `Morrigane's Manteau`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    baseDef: 9,
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
    id: 2524,
    name: 'Valkyrian Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: false,
    slot4Enable: false,
    compoundOn: null,
    baseDef: 10,
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
    id: 2589,
    name: 'Fallen Angel Wing [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    compoundOn: null,
    baseDef: 18,
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
    script: (character: Character2, _this: IBaseEquipment): void => {
      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;

      _this.eATK = Number(new Big(Math.floor(baseStr / 20)).mul(1).valueOf());
      const tempLukMul = Math.floor(baseLuk / 20);
      _this.criticalPercent = Number(new Big(0.01).mul(tempLukMul).valueOf());
    },
  },
  {
    id: 20718,
    name: 'Giant God Snake Skin [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    compoundOn: null,
    baseDef: 38,
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
      _this.hpModB = 0;
      _this.spModB = 0;
      if (
        character.shoes &&
        [22006, 22011, 22202].includes(character.shoes.id)
      ) {
        _this.hpModB = 0.15;
        _this.spModB = 0.05;
      }
    },
  },
  {
    id: 20841,
    name: 'Golden Angel Wing [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: false,
    slot4Enable: false,
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
      _this.eATK = 0;
      _this.criticalPercent = 0;
      _this.hpModB = 0;
      _this.spModB = 0;

      const upgrade = _this.equipUpgradeValue;
      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;
      const baseVit = character.class.vit0;

      if (baseStr >= 90) {
        _this.eATK = 15;

        if (upgrade >= 9) {
          _this.eATK += 15;
        }
      }

      if (baseVit >= 90) {
        _this.hpModB = 0.05;
        _this.spModB = 0.05;
      }

      if (baseLuk >= 90) {
        _this.criticalPercent = 0.05;
        if (upgrade >= 9) {
          _this.criticalPercent = 0.1;
        }
      }
    },
  },
  {
    id: 20846,
    name: 'Temporal Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 38,
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
      _this.hpModB = 0;

      // STR
      if (
        [22000, 22006, 22107, 22113].includes(character.shoes.id) &&
        character.class.str0 >= 120
      ) {
        _this.hpModB = 0.15;
        _this.eATK = 30;
        return;
      }

      // AGI
      if (
        [22002, 22010, 22109, 22115].includes(character.shoes.id) &&
        character.class.agi0 >= 120
      ) {
        _this.hpModB = 0.15;
        return;
      }

      // VIT
      if (
        [22003, 22007, 22110, 22116].includes(character.shoes.id) &&
        character.class.vit0 >= 120
      ) {
        _this.hpModB = 0.15;
        return;
      }

      // INT
      if (
        [22001, 22009, 22108, 22114].includes(character.shoes.id) &&
        character.class.int0 >= 120
      ) {
        _this.hpModB = 0.15;
        return;
      }

      // DEX
      if (
        [22004, 22008, 22111, 22117].includes(character.shoes.id) &&
        character.class.dex0 >= 120
      ) {
        _this.hpModB = 0.15;
        return;
      }

      // LUK
      if (
        [22005, 22011, 22112, 22118].includes(character.shoes.id) &&
        character.class.luk0 >= 120
      ) {
        _this.hpModB = 0.15;
        _this.criticalPercent = 0.05;
        return;
      }
    },
  },
  {
    id: 20963,
    name: 'Temporal Str Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 38,
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
      _this.penetrationPercent = 0;
      _this.additionAtk.atkPercent2 = 0;

      const upgrade = _this.equipUpgradeValue;

      _this.eATK = Number(new Big(Math.floor(upgrade / 2)).mul(10).valueOf());
      _this.additionAtk.atkPercent2 = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.additionAtk.size = Number(
        new Big(Math.floor(upgrade / 4)).mul(0.05).valueOf()
      );

      if (upgrade >= 7) {
        _this.additionAtk.atkPercent2 = Number(
          new Big(_this.additionAtk.atkPercent2).plus(0.07).valueOf()
        );
        if (upgrade >= 9) {
          if (
            character.monster &&
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster.race
            )
          ) {
            _this.penetrationPercent = 0.2;

            if (upgrade >= 11) {
              _this.penetrationPercent = Number(
                new Big(_this.penetrationPercent).plus(0.1).valueOf()
              );
            }
          }
        }
      }

      if (
        [22006, 22113].includes(character.shoes.id) &&
        character.class.str0 >= 120
      ) {
        _this.eATK += 50;

        if (upgrade >= 10) {
          if (
            character.monster &&
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster.race
            )
          ) {
            _this.penetrationPercent = Number(
              new Big(_this.penetrationPercent).plus(0.3).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 20964,
    name: 'Temporal Agi Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 38,
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
      _this.penetrationPercent = 0;
      _this.additionAtk.atkPercent2 = 0;

      const upgrade = _this.equipUpgradeValue;

      _this.eATK = Number(new Big(Math.floor(upgrade / 2)).mul(10).valueOf());
      _this.criticalPercent = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.03).valueOf()
      );
      _this.additionAtk.size = Number(
        new Big(Math.floor(upgrade / 4)).mul(0.05).valueOf()
      );

      if (upgrade >= 7) {
        _this.additionAtk.atkPercent2 = Number(
          new Big(_this.additionAtk.atkPercent2).plus(0.07).valueOf()
        );
        if (upgrade >= 9) {
          if (
            character.monster &&
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster.race
            )
          ) {
            _this.penetrationPercent = 0.2;

            if (upgrade >= 11) {
              _this.penetrationPercent = Number(
                new Big(_this.penetrationPercent).plus(0.1).valueOf()
              );
            }
          }
        }
      }

      if (
        [22010, 22115].includes(character.shoes.id) &&
        character.class.str0 >= 120
      ) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.07).valueOf()
        );

        if (upgrade >= 10) {
          if (
            character.monster &&
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster.race
            )
          ) {
            _this.penetrationPercent = Number(
              new Big(_this.penetrationPercent).plus(0.3).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 20968,
    name: 'Temporal Luk Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 38,
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
      _this.penetrationPercent = 0;
      _this.additionAtk.atkPercent2 = 0;

      const upgrade = _this.equipUpgradeValue;

      _this.criticalPercent = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.03).valueOf()
      );
      _this.additionAtk.size = Number(
        new Big(Math.floor(upgrade / 4)).mul(0.05).valueOf()
      );

      if (upgrade >= 7) {
        _this.additionAtk.atkPercent2 = Number(
          new Big(_this.additionAtk.atkPercent2).plus(0.07).valueOf()
        );
        if (upgrade >= 9) {
          if (
            character.monster &&
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster.race
            )
          ) {
            _this.penetrationPercent = 0.2;

            if (upgrade >= 11) {
              _this.penetrationPercent = Number(
                new Big(_this.penetrationPercent).plus(0.1).valueOf()
              );
            }
          }
        }
      }

      if (
        [22010, 22115].includes(character.shoes.id) &&
        character.class.str0 >= 120
      ) {
        if (upgrade >= 10) {
          if (
            character.monster &&
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster.race
            )
          ) {
            _this.penetrationPercent = Number(
              new Big(_this.penetrationPercent).plus(0.3).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 20748,
    name: 'Fallen Warrior Manteau',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
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

      const upgrade = _this.equipUpgradeValue;
      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;

      if (baseStr >= 90) {
        _this.eATK = 10;
        _this.eATK += Number(new Big(Math.floor(upgrade)).mul(2).valueOf());
      }

      if (baseLuk >= 90) {
        _this.criticalPercent = Number(
          new Big(Math.floor(upgrade)).mul(0.01).plus(0.05).valueOf()
        );
      }
    },
  },
  {
    id: 20749,
    name: 'Fallen Warrior Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
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
      _this.eATK = 0;
      _this.criticalPercent = 0;

      const upgrade = _this.equipUpgradeValue;
      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;

      _this.hpModB = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.spModB = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );

      if (baseStr >= 90) {
        _this.eATK = 10;
        _this.eATK += Number(new Big(Math.floor(upgrade)).mul(2).valueOf());
      }

      if (baseLuk >= 90) {
        _this.criticalPercent = Number(
          new Big(Math.floor(upgrade)).mul(0.01).plus(0.05).valueOf()
        );
      }
    },
  },
  {
    id: 15097,
    name: 'Hero Hidden Cloth [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 70,
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
    hpModB: 0.05,
    spModA: 0,
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
    script: (character: Character2, _this: IBaseEquipment): void => {
      if (character.playerTypeAtk === 2022) {
        character.buffSkillPercert = Number(
          new Big(character.buffSkillPercert).plus(0.1).valueOf()
        );
      }
    },
  },
  {
    id: 20939,
    name: 'Temporal Transcendent Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
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
    id: 2575,
    name: `Peuz's Manteau`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    baseDef: 16,
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
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 20856,
    name: 'YSF01 Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
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
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = 0;

      if (upgrade >= 8) {
        _this.eATK = 20;
      }
    },
  },
  {
    id: 480172,
    name: 'Subject Cape (Melee) [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 10,
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
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = 20;
      _this.hpModB = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.spModB = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.additionAtk.class = 0;
      _this.criticalPercent = 0;
      _this.additionAtk.race = 0;

      if (upgrade >= 9) {
        _this.additionAtk.class = 0.05;
      }

      if (character.upperHeadgear?.id === 18971) {
        _this.criticalPercent = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.03).valueOf()
        );
      }

      if (character.upperHeadgear?.id === 18982) {
        if (upgrade >= 12) {
          _this.additionAtk.race = 0.05;
        }
      }
    },
  },
  {
    id: 15389,
    name: `King Schmidt's Manteau [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 70,
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
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.additionAtk.race = 0;
      _this.additionAtk.element = Number(
        new Big(Math.floor(upgrade / 3)).mul(0.02).valueOf()
      );

      if (upgrade >= 11) {
        if (
          character.monster?.race === MonsterRace.DRAGON ||
          character.monster?.race === MonsterRace.FORMLESS
        ) {
          _this.additionAtk.race = 0.15;
        }
      }
    },
  },
  {
    id: 2597,
    name: 'Bloody Muffler [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
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
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.criticalPercent = 0.03;

      if (
        character.rightAccessory?.id === 2616 ||
        character.leftAccessory?.id === 2616
      ) {
        _this.criticalPercent = 0.08;

        if (upgrade >= 5) {
          _this.criticalPercent = 0.11;
        }

        if (upgrade >= 7) {
          _this.criticalPercent = 0.15;
        }
      }
    },
  },
  {
    id: 20933,
    name: 'Illusion Engine Wing A-type [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 50,
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
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.hpModA = 1000;
      _this.criticalPercent = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = Number(
        new Big(Math.floor(upgrade / 2)).mul(100).plus(_this.hpModA).valueOf()
      );

      if (character.shoes?.id === 22196) {
        _this.criticalPercent = 0.1;
      }
    },
  },
];
