import Big from 'big.js';
import { Character2 } from '../../models/character2';
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
    script: (character: Character2, _this: IBaseEquipment): void => { }
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
      _this.criticalPercent = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
    }
  },
];
