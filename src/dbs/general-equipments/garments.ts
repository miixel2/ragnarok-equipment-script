import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import { E_Element } from '../../models/element';
import {
  IBaseEquipment,
  EquipmentType,
  EquipmentSubType,
  EquipmentLocation,
} from '../../models/equipment';
import { MonsterRace } from '../../models/monster';
import { CheckItemInSlots } from '../../utils/utils';

export const garments: IBaseEquipment[] = [
  {
    id: 2576,
    name: 'Bravery Bag [1]',
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
    eMATK: 0,
    cATK: 0,
    aspd: 0,
    aspdFlat: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.criticalPercent = 0;
      _this.aspd = 0;
      _this.aspdFlat = 0;
      _this.eMATK = 0;
      _this.longRangePercent = 0;

      const upgrade = _this.equipUpgradeValue;
      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;
      const baseAgi = character.class.agi0;
      const baseInt = character.class.int0;
      const baseDex = character.class.dex0;

      if (upgrade >= 7) {
        if (baseStr >= 90) {
          _this.eATK = 20;
        }

        if (baseAgi >= 90) {
          _this.aspd = 0.08;
        }

        if (baseInt >= 90) {
          _this.eMATK = 30;
        }

        if (baseDex >= 90) {
          _this.longRangePercent = 0.05;
        }

        if (baseLuk >= 90) {
          _this.criticalPercent = 0.1;
        }

        if (upgrade >= 9) {
          if (baseStr >= 90) {
            _this.eATK = 30;
          }

          if (baseAgi >= 90) {
            _this.aspdFlat = 1;
          }

          if (baseInt >= 90) {
            _this.eMATK = 50;
          }

          if (baseDex >= 90) {
            _this.longRangePercent = 0.1;
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
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
    perfectDodge: 0,
    flee: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.perfectDodge = 8;
      _this.flee = 0;

      if (character.class.baseLv >= 130) {
        _this.perfectDodge = 10;
        const upgrade = _this.equipUpgradeValue;
        _this.flee = upgrade * 2;
      }
    },
  },
  {
    id: 2524,
    name: 'Valkyrian Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    slot1Enable: true,
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
    perfectDodge: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.perfectDodge = 0;

      const upgrade = _this.equipUpgradeValue;

      if (
        [
          ClassKey.Warlock,
          ClassKey.Sorcerer,
          ClassKey.Ranger,
          ClassKey.Minstrel,
          ClassKey.Wanderer,
          ClassKey.ArchBishop,
          ClassKey.Sura,
        ].includes(ClassKey[character.class.classKey])
      ) {
        _this.perfectDodge = upgrade * 2 + 5;
      }

      if (
        [
          ClassKey.RuneKnight,
          ClassKey.RoyalGuard,
          ClassKey.Mechanic,
          ClassKey.Genetic,
          ClassKey.GuillotineCross,
          ClassKey.ShadowChaser,
        ].includes(ClassKey[character.class.classKey])
      ) {
      }
    },
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
    eMATK: 0,
    aspd: 0,
    cATK: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;
      const baseAgi = character.class.agi0;
      const baseInt = character.class.int0;
      const baseDex = character.class.dex0;

      _this.eATK = Number(new Big(Math.floor(baseStr / 20)).mul(1).valueOf());
      _this.criticalPercent = Number(
        new Big(Math.floor(baseLuk / 20)).mul(0.01).valueOf()
      );
      _this.longRangePercent = Number(
        new Big(Math.floor(baseDex / 20)).mul(0.01).valueOf()
      );
      _this.eMATK = Number(new Big(Math.floor(baseInt / 20)).mul(1).valueOf());
      _this.aspd = Number(
        new Big(Math.floor(baseAgi / 20)).mul(0.01).valueOf()
      );
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
    baseMDEF: 10,
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
        [
          22006, 22007, 22008, 22009, 22010, 22011, 22113, 22114, 22115, 22116,
          22117, 22118,
        ].includes(character.shoes?.id)
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
    eMATK: 0,
    cATK: 0,
    aspdFlat: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.criticalPercent = 0;
      _this.hpModB = 0;
      _this.spModB = 0;
      _this.aspdFlat = 0;
      _this.eMATK = 0;
      _this.longRangePercent = 0;

      const upgrade = _this.equipUpgradeValue;
      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;
      const baseAgi = character.class.agi0;
      const baseInt = character.class.int0;
      const baseDex = character.class.dex0;
      const baseVit = character.class.vit0;

      if (baseStr >= 90) {
        _this.eATK = 15;

        if (upgrade >= 9) {
          _this.eATK = 30;
        }
      }

      if (baseAgi >= 90) {
        _this.aspdFlat = 1;

        if (upgrade >= 9) {
          _this.aspdFlat = 2;
        }
      }

      if (baseInt >= 90) {
        _this.eMATK = 15;

        if (upgrade >= 9) {
          _this.eMATK = 30;
        }
      }

      if (baseDex >= 90) {
        _this.longRangePercent = 0.05;

        if (upgrade >= 9) {
          _this.longRangePercent = 0.1;
        }
      }

      if (baseVit >= 90) {
        _this.hpModB = 0.05;
        _this.spModB = 0.05;

        if (upgrade >= 9) {
          _this.hpModB = 0.1;
          _this.spModB = 0.1;
        }
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
    baseMDEF: 10,
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
    hpModB: 0.15,
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
    eMATK: 0,
    cATK: 0,
    aspd: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.criticalPercent = 0;
      _this.eMATK = 0;
      _this.aspd = 0;
      _this.longRangePercent = 0;

      // STR
      if (
        [22000, 22006, 22107, 22113].includes(character.shoes?.id) &&
        character.class.str0 >= 120
      ) {
        _this.eATK = 30;
        return;
      }

      // AGI
      if (
        [22002, 22010, 22109, 22115].includes(character.shoes?.id) &&
        character.class.agi0 >= 120
      ) {
        _this.aspd = 0.05;
        return;
      }

      // VIT
      if (
        [22003, 22007, 22110, 22116].includes(character.shoes?.id) &&
        character.class.vit0 >= 120
      ) {
        return;
      }

      // INT
      if (
        [22001, 22009, 22108, 22114].includes(character.shoes?.id) &&
        character.class.int0 >= 120
      ) {
        _this.eMATK = 30;
        return;
      }

      // DEX
      if (
        [22004, 22008, 22111, 22117].includes(character.shoes?.id) &&
        character.class.dex0 >= 120
      ) {
        _this.longRangePercent = 0.05;
        return;
      }

      // LUK
      if (
        [22005, 22011, 22112, 22118].includes(character.shoes?.id) &&
        character.class.luk0 >= 120
      ) {
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
    option1Enable: true,
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
    penetrationMPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.penetrationPercent = 0;
      _this.penetrationMPercent = 0;
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
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster?.race
            )
          ) {
            _this.penetrationPercent = 0.2;
            _this.penetrationMPercent = 0.2;

            if (upgrade >= 11) {
              _this.penetrationPercent = Number(
                new Big(_this.penetrationPercent).plus(0.1).valueOf()
              );
              _this.penetrationMPercent = Number(
                new Big(_this.penetrationMPercent).plus(0.1).valueOf()
              );
            }
          }
        }
      }

      if ([22006, 22113].includes(character.shoes.id)) {
        _this.eATK += 50;

        if (upgrade >= 10) {
          if (
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster?.race
            )
          ) {
            _this.penetrationPercent = Number(
              new Big(_this.penetrationPercent).plus(0.3).valueOf()
            );
            _this.penetrationMPercent = Number(
              new Big(_this.penetrationMPercent).plus(0.3).valueOf()
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
    option1Enable: true,
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
    penetrationMPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.penetrationPercent = 0;
      _this.penetrationMPercent = 0;
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
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster?.race
            )
          ) {
            _this.penetrationPercent = 0.2;
            _this.penetrationMPercent = 0.2;

            if (upgrade >= 11) {
              _this.penetrationPercent = Number(
                new Big(_this.penetrationPercent).plus(0.1).valueOf()
              );
              _this.penetrationMPercent = Number(
                new Big(_this.penetrationMPercent).plus(0.1).valueOf()
              );
            }
          }
        }
      }

      if ([22010, 22115].includes(character.shoes?.id)) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.07).valueOf()
        );

        if (upgrade >= 10) {
          if (
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster?.race
            )
          ) {
            _this.penetrationPercent = Number(
              new Big(_this.penetrationPercent).plus(0.3).valueOf()
            );
            _this.penetrationMPercent = Number(
              new Big(_this.penetrationMPercent).plus(0.3).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 20965,
    name: 'Temporal Vit Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
    option1Enable: true,
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
    acd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    penetrationMPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.penetrationPercent = 0;
      _this.penetrationMPercent = 0;
      _this.additionAtk.atkPercent2 = 0;
      _this.acd = 0;

      const upgrade = _this.equipUpgradeValue;

      _this.eATK = Number(new Big(Math.floor(upgrade / 2)).mul(10).valueOf());
      _this.hpModA = Number(
        new Big(Math.floor(upgrade / 2)).mul(400).valueOf()
      );
      _this.hpModB = Number(
        new Big(Math.floor(upgrade / 4)).mul(0.03).valueOf()
      );

      if (upgrade >= 7) {
        _this.additionAtk.atkPercent2 = Number(
          new Big(_this.additionAtk.atkPercent2).plus(0.07).valueOf()
        );
        if (upgrade >= 9) {
          if (
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster?.race
            )
          ) {
            _this.penetrationPercent = 0.2;
            _this.penetrationMPercent = 0.2;

            if (upgrade >= 11) {
              _this.penetrationPercent = Number(
                new Big(_this.penetrationPercent).plus(0.1).valueOf()
              );
              _this.penetrationMPercent = Number(
                new Big(_this.penetrationMPercent).plus(0.1).valueOf()
              );
            }
          }
        }
      }

      if ([22010, 22115].includes(character.shoes?.id)) {
        _this.acd = 0.05;

        if (upgrade >= 10) {
          if (
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster?.race
            )
          ) {
            _this.penetrationPercent = Number(
              new Big(_this.penetrationPercent).plus(0.3).valueOf()
            );
            _this.penetrationMPercent = Number(
              new Big(_this.penetrationMPercent).plus(0.3).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 20966,
    name: 'Temporal Int Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
    option1Enable: true,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    penetrationMPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.penetrationPercent = 0;
      _this.penetrationMPercent = 0;

      const upgrade = _this.equipUpgradeValue;

      _this.eMATK = Number(new Big(Math.floor(upgrade / 2)).mul(10).valueOf());
      _this.additionMAtk.matkPercent = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.additionMAtk.skillElement = Number(
        new Big(Math.floor(upgrade / 4)).mul(0.03).valueOf()
      );

      if (upgrade >= 7) {
        _this.additionMAtk.matkPercent = Number(
          new Big(_this.additionMAtk.matkPercent).plus(0.07).valueOf()
        );
        if (upgrade >= 9) {
          if (
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster?.race
            )
          ) {
            _this.penetrationPercent = 0.2;
            _this.penetrationMPercent = 0.2;

            if (upgrade >= 11) {
              _this.penetrationPercent = Number(
                new Big(_this.penetrationPercent).plus(0.1).valueOf()
              );
              _this.penetrationMPercent = Number(
                new Big(_this.penetrationMPercent).plus(0.1).valueOf()
              );
            }
          }
        }
      }

      if ([22010, 22115].includes(character.shoes?.id)) {
        _this.eMATK += 50;

        if (upgrade >= 10) {
          if (
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster?.race
            )
          ) {
            _this.penetrationPercent = Number(
              new Big(_this.penetrationPercent).plus(0.3).valueOf()
            );
            _this.penetrationMPercent = Number(
              new Big(_this.penetrationMPercent).plus(0.3).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 20967,
    name: 'Temporal Dex Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
    option1Enable: true,
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
    longRangePercent: 0,
    penetrationPercent: 0,
    penetrationMPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.penetrationPercent = 0;
      _this.penetrationMPercent = 0;
      _this.additionAtk.atkPercent2 = 0;

      const upgrade = _this.equipUpgradeValue;

      _this.eATK = Number(new Big(Math.floor(upgrade / 2)).mul(10).valueOf());
      _this.longRangePercent = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.03).valueOf()
      );
      _this.criticalPercent = Number(
        new Big(Math.floor(upgrade / 4)).mul(0.05).valueOf()
      );

      if (upgrade >= 7) {
        _this.additionAtk.atkPercent2 = 0.07;
        if (upgrade >= 9) {
          if (
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster?.race
            )
          ) {
            _this.penetrationPercent = 0.2;
            _this.penetrationMPercent = 0.2;

            if (upgrade >= 11) {
              _this.penetrationPercent = Number(
                new Big(_this.penetrationPercent).plus(0.1).valueOf()
              );
              _this.penetrationMPercent = Number(
                new Big(_this.penetrationMPercent).plus(0.1).valueOf()
              );
            }
          }
        }
      }

      if ([22010, 22115].includes(character.shoes?.id)) {
        _this.longRangePercent = Number(
          new Big(_this.longRangePercent).plus(0.07).valueOf()
        );

        if (upgrade >= 10) {
          if (
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster?.race
            )
          ) {
            _this.penetrationPercent = Number(
              new Big(_this.penetrationPercent).plus(0.3).valueOf()
            );
            _this.penetrationMPercent = Number(
              new Big(_this.penetrationMPercent).plus(0.3).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 480076,
    name: 'Exotic Temporal Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: true,
    option1Enable: true,
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
    aspdFlat: 0,
    acd: 0,
    criRate: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    penetrationMPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.acd = 0;
      _this.eMATK = 0;
      _this.baseMDEF = 0;
      _this.aspdFlat = 0;

      const upgrade = _this.equipUpgradeValue;

      const multiple2 = Math.floor(upgrade / 2);
      _this.additionAtk.atkPercent2 = Number(
        new Big(multiple2).mul(0.01).valueOf()
      );
      _this.additionMAtk.matkPercent = Number(
        new Big(multiple2).mul(0.01).valueOf()
      );
      _this.criticalPercent = Number(new Big(multiple2).mul(0.01).valueOf());
      _this.longRangePercent = Number(new Big(multiple2).mul(0.01).valueOf());
      _this.criRate = Number(new Big(multiple2).mul(3).valueOf());

      const multiple4 = Math.floor(upgrade / 4);
      _this.additionAtk.size = Number(new Big(multiple4).mul(0.03).valueOf());
      _this.additionMAtk.skillElement = Number(
        new Big(multiple4).mul(0.03).valueOf()
      );
      _this.hpModB = Number(new Big(multiple4).mul(0.03).valueOf());
      _this.acd = Number(new Big(multiple4).mul(0.03).valueOf());
      _this.criticalPercent = Number(
        new Big(multiple4).mul(0.03).plus(_this.criticalPercent).valueOf()
      );
      _this.aspd = Number(new Big(multiple4).mul(0.03).valueOf());

      if (upgrade >= 9) {
        _this.additionAtk.atkPercent2 = Number(
          new Big(0.07).plus(_this.additionAtk.atkPercent2).valueOf()
        );
        _this.additionMAtk.matkPercent = Number(
          new Big(0.07).plus(_this.additionMAtk.matkPercent).valueOf()
        );

        if (
          (character.rightAccessory?.id === 490030 ||
            character.leftAccessory?.id === 490030) &&
          CheckItemInSlots(character, 4875)
        ) {
          _this.eATK = 25;
        }

        if (
          (character.rightAccessory?.id === 490030 ||
            character.leftAccessory?.id === 490030) &&
          CheckItemInSlots(character, 4877)
        ) {
          _this.acd = 0.04;
        }

        if (
          (character.rightAccessory?.id === 490030 ||
            character.leftAccessory?.id === 490030) &&
          CheckItemInSlots(character, 4878)
        ) {
          _this.hpModB = Number(new Big(0.07).plus(_this.hpModB).valueOf());
        }

        if (
          (character.rightAccessory?.id === 490030 ||
            character.leftAccessory?.id === 490030) &&
          CheckItemInSlots(character, 4876)
        ) {
          _this.eMATK = 25;
        }

        if (
          (character.rightAccessory?.id === 490030 ||
            character.leftAccessory?.id === 490030) &&
          CheckItemInSlots(character, 4879)
        ) {
          _this.longRangePercent = Number(
            new Big(_this.longRangePercent).plus(0.05).valueOf()
          );
        }

        if (
          (character.rightAccessory?.id === 490030 ||
            character.leftAccessory?.id === 490030) &&
          CheckItemInSlots(character, 4880)
        ) {
          _this.criticalPercent = Number(
            new Big(_this.criticalPercent).plus(0.05).valueOf()
          );
        }
      }

      if (character.shoes?.id === 22202) {
        _this.baseMDEF = 5;

        const shoesUpgrade = character.shoes.equipUpgradeValue;

        if (shoesUpgrade + upgrade >= 22) {
          if (character.class.str0 >= 108) {
            _this.eATK += 50;
          }

          if (character.class.agi0 >= 108) {
            _this.aspdFlat = 1;
          }

          if (character.class.vit0 >= 108) {
            _this.acd = Number(new Big(_this.acd).plus(0.05).valueOf());
          }

          if (character.class.int0 >= 108) {
            _this.eMATK += 50;
          }

          if (character.class.dex0 >= 108) {
            _this.longRangePercent = Number(
              new Big(_this.longRangePercent).plus(0.07).valueOf()
            );
          }

          if (character.class.luk0 >= 108) {
            _this.criticalPercent = Number(
              new Big(_this.criticalPercent).plus(0.07).valueOf()
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
    option1Enable: true,
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
    aspd: 0,
    aspdFlat: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    penetrationMPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.penetrationPercent = 0;
      _this.penetrationMPercent = 0;
      _this.additionAtk.atkPercent2 = 0;
      _this.aspd = 0;
      _this.aspdFlat = 0;

      const upgrade = _this.equipUpgradeValue;

      _this.criticalPercent = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.03).valueOf()
      );
      _this.aspd = Number(new Big(Math.floor(upgrade / 4)).mul(0.05).valueOf());

      if (upgrade >= 7) {
        _this.additionAtk.atkPercent2 = Number(
          new Big(_this.additionAtk.atkPercent2).plus(0.07).valueOf()
        );
        if (upgrade >= 9) {
          if (
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster?.race
            )
          ) {
            _this.penetrationPercent = 0.2;
            _this.penetrationMPercent = 0.2;

            if (upgrade >= 11) {
              _this.penetrationPercent = Number(
                new Big(_this.penetrationPercent).plus(0.1).valueOf()
              );
              _this.penetrationMPercent = Number(
                new Big(_this.penetrationMPercent).plus(0.1).valueOf()
              );
            }
          }
        }
      }

      if ([22010, 22115].includes(character.shoes?.id)) {
        _this.aspdFlat = 1;

        if (upgrade >= 10) {
          if (
            [MonsterRace.BRUTE, MonsterRace.DEMON].includes(
              character.monster?.race
            )
          ) {
            _this.penetrationPercent = Number(
              new Big(_this.penetrationPercent).plus(0.3).valueOf()
            );
            _this.penetrationMPercent = Number(
              new Big(_this.penetrationMPercent).plus(0.3).valueOf()
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
    eMATK: 0,
    cATK: 0,
    aspd: 0,
    aspdFlat: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.criticalPercent = 0;
      _this.eMATK = 0;
      _this.aspd = 0;
      _this.aspdFlat = 0;
      _this.longRangePercent = 0;

      const upgrade = _this.equipUpgradeValue;
      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;
      const baseAgi = character.class.agi0;
      const baseInt = character.class.int0;
      const baseDex = character.class.dex0;

      if (baseStr >= 90) {
        _this.eATK += Number(
          new Big(Math.floor(upgrade)).mul(2).plus(10).valueOf()
        );
      }

      if (baseInt >= 90) {
        _this.eMATK += Number(
          new Big(Math.floor(upgrade)).mul(3).plus(20).valueOf()
        );
      }

      if (baseAgi >= 90) {
        _this.aspd += Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
        );

        if (upgrade >= 10) {
          _this.aspdFlat = 1;
        }
      }

      if (baseDex >= 90) {
        _this.longRangePercent += Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).plus(0.03).valueOf()
        );
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
    eMATK: 0,
    cATK: 0,
    aspd: 0,
    aspdFlat: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.criticalPercent = 0;
      _this.eMATK = 0;
      _this.aspd = 0;
      _this.aspdFlat = 0;
      _this.longRangePercent = 0;

      const upgrade = _this.equipUpgradeValue;
      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;
      const baseAgi = character.class.agi0;
      const baseInt = character.class.int0;
      const baseDex = character.class.dex0;

      _this.hpModB = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.spModB = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );

      if (baseStr >= 90) {
        _this.eATK += Number(
          new Big(Math.floor(upgrade)).mul(2).plus(10).valueOf()
        );
      }

      if (baseInt >= 90) {
        _this.eMATK += Number(
          new Big(Math.floor(upgrade)).mul(3).plus(20).valueOf()
        );
      }

      if (baseAgi >= 90) {
        _this.aspd += Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
        );

        if (upgrade >= 10) {
          _this.aspdFlat = 1;
        }
      }

      if (baseDex >= 90) {
        _this.longRangePercent += Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).plus(0.03).valueOf()
        );
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
        character.buffSkillPercent = Number(
          new Big(character.buffSkillPercent).plus(0.1).valueOf()
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
    flee: 30,
    hit: 10,
    aspd: 0.1,
    vct: 0,
    fct: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.vct = 0.1;
      _this.fct = 0;

      if (character.shoes?.id === 22204) {
        _this.vct = 0.2;
        _this.fct = 0.5;
      }
    },
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
    flee: 10,
    criRate: 10,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
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
        if (character.playerTypeAtk === 2029) {
          character.buffSkillPercent = Number(
            new Big(Math.floor(upgrade / 2))
              .plus(0.03)
              .plus(character.buffSkillPercent)
              .valueOf()
          );
        }

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
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;

      _this.additionAtk.race = 0;
      _this.additionAtk.element = 0;
      _this.additionMAtk.element = 0;
      _this.additionMAtk.race = 0;

      if (
        [E_Element.FIRE, E_Element.SHADOW].includes(character.monster?.element)
      ) {
        _this.additionAtk.element = Number(
          new Big(Math.floor(upgrade / 3)).mul(0.02).valueOf()
        );
        _this.additionMAtk.element = Number(
          new Big(Math.floor(upgrade / 3)).mul(0.02).valueOf()
        );
      }

      if (upgrade >= 11) {
        if (
          character.monster?.race === MonsterRace.DRAGON ||
          character.monster?.race === MonsterRace.FORMLESS
        ) {
          _this.additionAtk.race = 0.15;
          _this.additionMAtk.race = 0.15;
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
    criRate: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.criticalPercent = 0.03;
      _this.criRate = 0;

      if (
        character.rightAccessory?.id === 2616 ||
        character.leftAccessory?.id === 2616
      ) {
        _this.criticalPercent = 0.08;
        _this.criRate = 10;

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
    aspd: 0,
    vct: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.hpModA = 1000;
      _this.criticalPercent = 0;
      _this.aspd = 0;
      _this.vct = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = Number(
        new Big(Math.floor(upgrade / 2)).mul(100).plus(_this.hpModA).valueOf()
      );

      if (upgrade >= 7) {
        _this.aspd = 0.05;
      }

      if (character.shoes?.id === 22196) {
        _this.criticalPercent = 0.1;
      }

      if (character.shoes?.id === 22197) {
        _this.vct = 0.1;
      }
    },
  },
  {
    id: 20934,
    name: 'Illusion Engine Wing B-type [1]',
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
    vct: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.hpModA = 1000;
      _this.longRangePercent = 0;
      _this.vct = 0;
      _this.additionMAtk.skillElement = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = Number(
        new Big(Math.floor(upgrade / 2)).mul(100).plus(_this.hpModA).valueOf()
      );

      if (upgrade >= 7) {
        _this.vct = 0.05;
      }

      if (character.shoes?.id === 22196) {
        _this.longRangePercent = 0.1;
      }

      if (character.shoes?.id === 22197) {
        _this.additionMAtk.skillElement = 0.1;
      }
    },
  },
  {
    id: 480000,
    name: 'Attacker Booster Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
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
    eATK: 20,
    cATK: 0,
    aspd: 0.05,
    acd: 0,
    criRate: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0;
      _this.acd = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.criRate = Number(new Big(Math.floor(upgrade / 3)).mul(2).valueOf());

      if (upgrade >= 7) {
        _this.criticalPercent = 0.05;
        if (upgrade >= 9) {
          _this.acd = 0.1;
        }
      }
    },
  },
  {
    id: 480003,
    name: 'Range Booster Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
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
    vct: 0.05,
    acd: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.longRangePercent = 0;
      _this.acd = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = Number(new Big(Math.floor(upgrade / 3)).mul(2).valueOf());

      if (upgrade >= 7) {
        _this.longRangePercent = 0.05;
        if (upgrade >= 9) {
          _this.acd = 0.1;
        }
      }
    },
  },
  {
    id: 480001,
    name: 'Elemental Booster Muffler [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
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
    hpModB: 0,
    spModA: 0,
    spModB: 0,
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
    eMATK: 0,
    cATK: 0,
    vct: 0.05,
    acd: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.skillElement = 0;
      _this.acd = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.eMATK = Number(new Big(Math.floor(upgrade / 3)).mul(4).valueOf());

      if (upgrade >= 7) {
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

        if (upgrade >= 9) {
          _this.acd = 0.1;
        }
      }
    },
  },
  {
    id: 480002,
    name: 'Defunct Booster Muffler [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    vct: 0.05,
    acd: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.skillElement = 0;
      _this.acd = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.eMATK = Number(new Big(Math.floor(upgrade / 3)).mul(4).valueOf());

      if (upgrade >= 7) {
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

        if (upgrade >= 9) {
          _this.acd = 0.1;
        }
      }
    },
  },
  {
    id: 480256,
    name: 'DID Cape [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
    compoundOn: null,
    slot1Enable: 'CARD',
    baseDef: 8,
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
    acd: 0,
    aspd: 0,
    criticalPercent: 0,
    meleePercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 30;
      _this.acd = 0;
      _this.aspd = 0;
      _this.hit += 30;
      _this.str = 0;
      _this.agi = 0;
      _this.vit = 0;
      _this.int = 0;
      _this.dex = 0;
      _this.luk = 0;
      const upgrade = _this.equipUpgradeValue;
      _this.hit = Number(new Big(Math.floor(upgrade / 3)).mul(8).valueOf());
      _this.meleePercent = Number(
        new Big(Math.floor(upgrade / 4)).mul(0.03).valueOf()
      );

      if (character.class.classKey === ClassKey.GuillotineCross) {
        _this.acd = 0.05;
        _this.aspd = 0.2;
      }

      if (upgrade >= 11) {
        _this.hit += 30;
        _this.str = 5;
        _this.agi = 5;
        _this.vit = 5;
        _this.int = 5;
        _this.dex = 5;
        _this.luk = 5;

        _this.meleePercent = Number(
          new Big(_this.meleePercent).plus(0.05).valueOf()
        );
      }
    },
  },
  {
    id: 2537,
    name: 'Diabolus Manteau [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.GARMENT,
    location: EquipmentLocation.GARMENT,
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
    hpModA: 100,
    hpModB: 0,
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
    perfectDodge: 0,
    flee: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.hpModB = 0;
      _this.additionAtk.flatNamePercent = 0;
      _this.additionMAtk.flatNamePercent = 0;

      if (character.shoes?.id === 2433) {
        _this.hpModB = 0.06;
      }

      if (
        [1916, 1917, 1922, 1923, 1924, 1925].includes(character.monster?.id)
      ) {
        _this.additionAtk.flatNamePercent = 0.1;
        _this.additionMAtk.flatNamePercent = 0.1;
      }
    },
  },
];
