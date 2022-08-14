import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';
import { MonsterRace } from '../../models/monster';

export const shadowArmors: IBaseEquipment[] = [
  {
    id: 24395,
    name: 'Physical Shadow Armor',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_ARMOR,
    location: EquipmentLocation.SHADOW_ARMOR,
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
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent2: 0
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
      _this.additionAtk.atkPercent2 = 0;
      _this.eATK = 20;
      const upgrade = _this.equipUpgradeValue;

      _this.hpModA = upgrade * 10;

      if (upgrade >= 7) {
        _this.additionAtk.atkPercent2 = 0.02;
      }

      if (upgrade >= 9) {
        _this.additionAtk.atkPercent2 = Number((new Big(_this.additionAtk.atkPercent2)).plus(0.03).valueOf());
      }

      if (character.shadowLeftHand && character.shadowLeftHand?.id === 24394
        && character.shadowShoes && character.shadowShoes?.id === 24393
      ) {
        const shadowLeftRefine = character.shadowLeftHand.equipUpgradeValue;
        const shoesRefine = character.shadowShoes.equipUpgradeValue;

        const sumAll = shadowLeftRefine + shoesRefine + _this.equipUpgradeValue;
        _this.eATK += sumAll * 2;

        if (sumAll >= 23) {
          _this.additionAtk.atkPercent2 = Number((new Big(_this.additionAtk.atkPercent2)).plus(0.02).valueOf());
        }

        if (sumAll >= 25) {
          _this.additionAtk.atkPercent2 = Number((new Big(_this.additionAtk.atkPercent2)).plus(0.03).valueOf());
        }
      }
    }
  },
  {
    id: 24030,
    name: 'Critical Shadow Armor',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_ARMOR,
    location: EquipmentLocation.SHADOW_ARMOR,
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
      // _this.criticalRate = 5;

      if (upgrade >= 7) {
        // _this.criticalRate += 5;
      }
    }
  },
  {
    id: 24417,
    name: 'Temporal Transcendent Shadow Armor',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_ARMOR,
    location: EquipmentLocation.SHADOW_ARMOR,
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
      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
      if (character.shadowRightHand && character.shadowRightHand?.id === 24416
        && character.shadowLeftHand && character.shadowLeftHand?.id === 24418
        && character.shadowShoes && character.shadowShoes?.id === 24419
        && character.shadowRightAccessory && character.shadowRightAccessory?.id === 24420
        && character.shadowLeftAccessory && character.shadowLeftAccessory?.id === 24421
      ) {
        if (character.monster.race !== MonsterRace.PLAYER) {
          _this.penetrationPercent = 0.7;
        }
      }
    }
  },
  {
    id: 24269,
    name: 'Knight Shadow Armor',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_ARMOR,
    location: EquipmentLocation.SHADOW_ARMOR,
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
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
    }
  },
  {
    id: 15280,
    name: 'Critical Hit Shadow Armor',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_ARMOR,
    location: EquipmentLocation.SHADOW_ARMOR,
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
      _this.criticalPercent = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
    }
  },
  {
    id: 24375,
    name: 'Executioner Holy Water Shadow Armor',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_ARMOR,
    location: EquipmentLocation.SHADOW_ARMOR,
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
      _this.eATK = upgrade;
      _this.hpModA = upgrade * 10;

      if ([MonsterRace.DEMI_HUMAN, MonsterRace.UNDEAD].includes(character.monster.race)) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowLeftHand && character.shadowLeftHand?.id === 24374
        && character.shadowShoes && character.shadowShoes?.id === 24373
      ) {
        _this.eATK += 5;

        if ([MonsterRace.DEMI_HUMAN, MonsterRace.UNDEAD].includes(character.monster.race)) {
          const shieldRefine = character.shadowLeftHand.equipUpgradeValue;
          const shoesRefine = character.shadowShoes.equipUpgradeValue;
          if ((shieldRefine + shoesRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24376,
    name: 'Exorcist Corrupted Shadow Armor',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_ARMOR,
    location: EquipmentLocation.SHADOW_ARMOR,
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
      _this.eATK = upgrade;
      _this.hpModA = upgrade * 10;

      if ([MonsterRace.DEMON, MonsterRace.ANGEL].includes(character.monster.race)) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowLeftHand && character.shadowLeftHand?.id === 24374
        && character.shadowShoes && character.shadowShoes?.id === 24373
      ) {
        _this.eATK += 5;

        if ([MonsterRace.DEMON, MonsterRace.ANGEL].includes(character.monster.race)) {
          const shieldRefine = character.shadowLeftHand.equipUpgradeValue;
          const shoesRefine = character.shadowShoes.equipUpgradeValue;
          if ((shieldRefine + shoesRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24377,
    name: 'Vibration Dragon Killer Shadow Armor',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_ARMOR,
    location: EquipmentLocation.SHADOW_ARMOR,
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
      _this.eATK = upgrade;
      _this.hpModA = upgrade * 10;

      if ([MonsterRace.FORMLESS, MonsterRace.DRAGON].includes(character.monster.race)) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowLeftHand && character.shadowLeftHand?.id === 24374
        && character.shadowShoes && character.shadowShoes?.id === 24373
      ) {
        _this.eATK += 5;

        if ([MonsterRace.FORMLESS, MonsterRace.DRAGON].includes(character.monster.race)) {
          const shieldRefine = character.shadowLeftHand.equipUpgradeValue;
          const shoesRefine = character.shadowShoes.equipUpgradeValue;
          if ((shieldRefine + shoesRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24378,
    name: 'Scissor Hunting Shadow Armor',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_ARMOR,
    location: EquipmentLocation.SHADOW_ARMOR,
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
      _this.eATK = upgrade;
      _this.hpModA = upgrade * 10;

      if ([MonsterRace.BRUTE, MonsterRace.PLANT].includes(character.monster.race)) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowLeftHand && character.shadowLeftHand?.id === 24374
        && character.shadowShoes && character.shadowShoes?.id === 24373
      ) {
        _this.eATK += 5;

        if ([MonsterRace.BRUTE, MonsterRace.PLANT].includes(character.monster.race)) {
          const shieldRefine = character.shadowLeftHand.equipUpgradeValue;
          const shoesRefine = character.shadowShoes.equipUpgradeValue;
          if ((shieldRefine + shoesRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24379,
    name: 'Fishing Insect Net Shadow Armor',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_ARMOR,
    location: EquipmentLocation.SHADOW_ARMOR,
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
      _this.eATK = upgrade;
      _this.hpModA = upgrade * 10;

      if ([MonsterRace.FISH, MonsterRace.INSECT].includes(character.monster.race)) {
        _this.penetrationPercent = 0.05;

        const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
      }

      if (character.shadowLeftHand && character.shadowLeftHand?.id === 24374
        && character.shadowShoes && character.shadowShoes?.id === 24373
      ) {
        _this.eATK += 5;

        if ([MonsterRace.FISH, MonsterRace.INSECT].includes(character.monster.race)) {
          const shieldRefine = character.shadowLeftHand.equipUpgradeValue;
          const shoesRefine = character.shadowShoes.equipUpgradeValue;
          if ((shieldRefine + shoesRefine + _this.equipUpgradeValue) >= 25) {
            _this.penetrationPercent = 1;
          }
        }
      }
    }
  },
  {
    id: 24584,
    name: 'Booster Shadow Armor',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_ARMOR,
    location: EquipmentLocation.SHADOW_ARMOR,
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
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
];
