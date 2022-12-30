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

export const shadowWeapons: IBaseEquipment[] = [
  {
    id: 24163,
    name: 'Formless Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;

      if (character.monster.race === MonsterRace.FORMLESS) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
        );
        _this.penetrationPercent = Number(
          new Big(_this.penetrationPercent).plus(refinePenetration).valueOf()
        );
      }

      if (
        character.shadowRightAccessory &&
        character.shadowRightAccessory?.id === 24166 &&
        character.shadowLeftAccessory &&
        character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.FORMLESS) {
          const earringRefine =
            character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if (earringRefine + pendantRefine + _this.equipUpgradeValue >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    },
  },
  {
    id: 24032,
    name: 'Critical Hit Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    eMATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;

      if (upgrade >= 7) {
        _this.criticalPercent = 0.01;
      }

      if (character.shadowBodyGear && character.shadowBodyGear?.id === 24030) {
        const shadowBodyGearRefine = character.shadowBodyGear.equipUpgradeValue;

        const sumAll = shadowBodyGearRefine + _this.equipUpgradeValue;
        _this.eATK += sumAll;

        if (sumAll >= 15) {
          _this.criticalPercent = Number(
            new Big(_this.criticalPercent).plus(0.01).valueOf()
          );
        }
      }
    },
  },
  {
    id: 24156,
    name: 'Demi-Human Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;

      if (character.monster.race === MonsterRace.DEMI_HUMAN) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
        );
        _this.penetrationPercent = Number(
          new Big(_this.penetrationPercent).plus(refinePenetration).valueOf()
        );
      }

      if (
        character.shadowRightAccessory &&
        character.shadowRightAccessory?.id === 24166 &&
        character.shadowLeftAccessory &&
        character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.DEMI_HUMAN) {
          const earringRefine =
            character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if (earringRefine + pendantRefine + _this.equipUpgradeValue >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    },
  },
  {
    id: 24157,
    name: 'Exorcist Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;

      if (character.monster.race === MonsterRace.DEMON) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
        );
        _this.penetrationPercent = Number(
          new Big(_this.penetrationPercent).plus(refinePenetration).valueOf()
        );
      }

      if (
        character.shadowRightAccessory &&
        character.shadowRightAccessory?.id === 24166 &&
        character.shadowLeftAccessory &&
        character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.DEMON) {
          const earringRefine =
            character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if (earringRefine + pendantRefine + _this.equipUpgradeValue >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    },
  },
  {
    id: 24158,
    name: 'Hunting Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;

      if (character.monster.race === MonsterRace.BRUTE) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
        );
        _this.penetrationPercent = Number(
          new Big(_this.penetrationPercent).plus(refinePenetration).valueOf()
        );
      }

      if (
        character.shadowRightAccessory &&
        character.shadowRightAccessory?.id === 24166 &&
        character.shadowLeftAccessory &&
        character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.BRUTE) {
          const earringRefine =
            character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if (earringRefine + pendantRefine + _this.equipUpgradeValue >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    },
  },
  {
    id: 24159,
    name: 'Insect Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;

      if (character.monster.race === MonsterRace.INSECT) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
        );
        _this.penetrationPercent = Number(
          new Big(_this.penetrationPercent).plus(refinePenetration).valueOf()
        );
      }

      if (
        character.shadowRightAccessory &&
        character.shadowRightAccessory?.id === 24166 &&
        character.shadowLeftAccessory &&
        character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.INSECT) {
          const earringRefine =
            character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if (earringRefine + pendantRefine + _this.equipUpgradeValue >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    },
  },
  {
    id: 24160,
    name: 'Fishing Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;

      if (character.monster.race === MonsterRace.FISH) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
        );
        _this.penetrationPercent = Number(
          new Big(_this.penetrationPercent).plus(refinePenetration).valueOf()
        );
      }

      if (
        character.shadowRightAccessory &&
        character.shadowRightAccessory?.id === 24166 &&
        character.shadowLeftAccessory &&
        character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.FISH) {
          const earringRefine =
            character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if (earringRefine + pendantRefine + _this.equipUpgradeValue >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    },
  },
  {
    id: 24161,
    name: 'Dragon Killer Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;

      if (character.monster.race === MonsterRace.DRAGON) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
        );
        _this.penetrationPercent = Number(
          new Big(_this.penetrationPercent).plus(refinePenetration).valueOf()
        );
      }

      if (
        character.shadowRightAccessory &&
        character.shadowRightAccessory?.id === 24166 &&
        character.shadowLeftAccessory &&
        character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.DRAGON) {
          const earringRefine =
            character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if (earringRefine + pendantRefine + _this.equipUpgradeValue >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    },
  },
  {
    id: 24162,
    name: 'Angelus Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;

      if (character.monster.race === MonsterRace.ANGEL) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
        );
        _this.penetrationPercent = Number(
          new Big(_this.penetrationPercent).plus(refinePenetration).valueOf()
        );
      }

      if (
        character.shadowRightAccessory &&
        character.shadowRightAccessory?.id === 24166 &&
        character.shadowLeftAccessory &&
        character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.ANGEL) {
          const earringRefine =
            character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if (earringRefine + pendantRefine + _this.equipUpgradeValue >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    },
  },
  {
    id: 24164,
    name: 'Holy Water Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;

      if (character.monster.race === MonsterRace.UNDEAD) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
        );
        _this.penetrationPercent = Number(
          new Big(_this.penetrationPercent).plus(refinePenetration).valueOf()
        );
      }

      if (
        character.shadowRightAccessory &&
        character.shadowRightAccessory?.id === 24166 &&
        character.shadowLeftAccessory &&
        character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.UNDEAD) {
          const earringRefine =
            character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if (earringRefine + pendantRefine + _this.equipUpgradeValue >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    },
  },
  {
    id: 24165,
    name: 'Plant Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;

      if (character.monster.race === MonsterRace.PLANT) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
        );
        _this.penetrationPercent = Number(
          new Big(_this.penetrationPercent).plus(refinePenetration).valueOf()
        );
      }

      if (
        character.shadowRightAccessory &&
        character.shadowRightAccessory?.id === 24166 &&
        character.shadowLeftAccessory &&
        character.shadowLeftAccessory?.id === 24167
      ) {
        _this.eATK += 5;

        if (character.monster.race === MonsterRace.PLANT) {
          const earringRefine =
            character.shadowRightAccessory.equipUpgradeValue;
          const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
          if (earringRefine + pendantRefine + _this.equipUpgradeValue >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    },
  },
  {
    id: 24416,
    name: 'Temporal Transcendent Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0.07,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;
    },
  },
  {
    id: 24288,
    name: 'Rune Knight Weapon Shadow',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;

      if (character.playerTypeAtk === 2002) {
        character.buffSkillPercent = Number(
          new Big(character.buffSkillPercent).plus(0.2).valueOf()
        );
        character.buffSkillPercent = Number(
          new Big(upgrade).mul(0.05).plus(character.buffSkillPercent).valueOf()
        );
      }
    },
  },
  {
    id: 24738,
    name: 'Critical Hit Weapon Shadow',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade + 15;
      _this.eMATK = upgrade;

      _this.criticalPercent = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
    },
  },
  {
    id: 24386,
    name: 'Infinity Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    options: {
      ignoreSizePenalty: false,
    },
    eATK: 0,
    eMATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.options.ignoreSizePenalty = false;
      _this.additionAtk.size = 0;
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;
      _this.additionAtk.size = Number(
        new Big(Math.floor(upgrade / 3)).mul(0.01).valueOf()
      );

      if (upgrade >= 10) {
        _this.options.ignoreSizePenalty = true;
      }
    },
  },
  {
    id: 24589,
    name: 'Rune Knight Booster Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade + 10;
      _this.eMATK = upgrade;
      _this.penetrationPercent = 0;

      if (
        character.shadowBodyGear &&
        character.shadowBodyGear?.id === 24584 &&
        character.shadowLeftHand &&
        character.shadowLeftHand?.id === 24585 &&
        character.shadowShoes &&
        character.shadowShoes?.id === 24586 &&
        character.shadowRightAccessory &&
        character.shadowRightAccessory?.id === 24587 &&
        character.shadowLeftAccessory &&
        character.shadowLeftAccessory?.id === 24588
      ) {
        if (character.monster.race !== MonsterRace.PLAYER) {
          _this.penetrationPercent = 0.7;
        }

        if (character.playerTypeAtk === 2006) {
          character.buffSkillPercent = Number(
            new Big(character.buffSkillPercent).plus(0.15).valueOf()
          );
        }
      }
    },
  },
  {
    id: 24443,
    name: 'Ignition Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    options: {
      ignoreSizePenalty: false,
    },
    eATK: 0,
    eMATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade;
      _this.penetrationPercent = 0;

      if (character.playerTypeAtk === 2006) {
        if (
          character.shadowRightAccessory?.id === 24445 &&
          character.shadowLeftAccessory?.id === 24444
        ) {
          const refineRight = character.shadowRightAccessory.equipUpgradeValue;
          const refineLeft = character.shadowLeftAccessory.equipUpgradeValue;

          character.buffSkillPercent = Number(
            new Big(character.buffSkillPercent)
              .plus(refineRight + refineLeft)
              .valueOf()
          );
        }
      }

      if (character.shadowLeftHand?.id === 24301) {
        const refineLeftHand = character.shadowLeftHand.equipUpgradeValue;
        const temp = Number(
          new Big(upgrade + refineLeftHand).div(100).valueOf()
        );
        _this.penetrationPercent = Number(new Big(0.4).plus(temp).valueOf());
      }
    },
  },
  {
    id: 24596,
    name: 'Sorcerer Booster Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
    eMATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    penetrationMPercent: 0,
    classActives: [ClassKey.Sorcerer],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;
      _this.eMATK = upgrade + 10;

      _this.penetrationMPercent = 0;
      _this.additionMAtk.size = 0;

      if (
        character.shadowBodyGear &&
        character.shadowBodyGear?.id === 24584 &&
        character.shadowLeftHand &&
        character.shadowLeftHand?.id === 24585 &&
        character.shadowShoes &&
        character.shadowShoes?.id === 24586 &&
        character.shadowRightAccessory &&
        character.shadowRightAccessory?.id === 24587 &&
        character.shadowLeftAccessory &&
        character.shadowLeftAccessory?.id === 24588
      ) {
        if (character.monster.race !== MonsterRace.PLAYER) {
          _this.penetrationMPercent = 0.7;
        }

        _this.additionMAtk.size = 0.1;
      }
    },
  },
  {
    id: 24224,
    name: 'Force Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
      _this.additionAtk.size = 0.01;
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade;

      if (upgrade >= 7) {
        _this.additionAtk.size = 0.02;

        if (upgrade >= 9) {
          _this.additionAtk.size = 0.03;
        }
      }

      if (
        character.shadowRightAccessory?.id === 24225 &&
        character.shadowLeftAccessory?.id === 24226
      ) {
        _this.eATK += 10;

        const earringRefine = character.shadowRightAccessory.equipUpgradeValue;
        const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
        const sum = earringRefine + pendantRefine + upgrade;

        if (sum >= 20) {
          _this.additionAtk.size = Number(
            new Big(_this.additionAtk.size).mul(0.01).valueOf()
          );

          if (sum >= 25) {
            _this.additionAtk.size = Number(
              new Big(_this.additionAtk.size).mul(0.01).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 24223,
    name: 'Enhanced Force Shadow Weapon',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_WEAPON,
    location: EquipmentLocation.SHADOW_WEAPON,
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
      _this.eATK = upgrade + 10;

      _this.additionAtk.class = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );

      if (
        character.shadowRightAccessory?.id === 24225 &&
        character.shadowLeftAccessory?.id === 24226
      ) {
        _this.additionAtk.class = Number(
          new Big(_this.additionAtk.class).mul(0.01).valueOf()
        );

        const earringRefine = character.shadowRightAccessory.equipUpgradeValue;
        const pendantRefine = character.shadowLeftAccessory.equipUpgradeValue;
        const sum = earringRefine + pendantRefine + upgrade;

        if (sum >= 20) {
          _this.additionAtk.class = Number(
            new Big(_this.additionAtk.class).mul(0.01).valueOf()
          );

          if (sum >= 25) {
            _this.additionAtk.class = Number(
              new Big(_this.additionAtk.class).mul(0.01).valueOf()
            );
          }
        }
      }
    },
  },
];
