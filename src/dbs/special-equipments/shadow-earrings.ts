import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';

export const shadowEarrings: IBaseEquipment[] = [
  {
    id: 24166,
    name: 'Penetration Shadow Earring',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_RIGHT_ACCESSORY,
    location: EquipmentLocation.SHADOW_RIGHT_ACCESSORY,
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
    penetrationPercent: 0.05,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.penetrationPercent = 0.05;
      const upgrade = _this.equipUpgradeValue;

      const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
      _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
    }
  },
  {
    id: 24420,
    name: 'Temporal Transcendent Shadow Earring',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_RIGHT_ACCESSORY,
    location: EquipmentLocation.SHADOW_RIGHT_ACCESSORY,
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
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 24246,
    name: 'Swordsman Shadow Earring',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_RIGHT_ACCESSORY,
    location: EquipmentLocation.SHADOW_RIGHT_ACCESSORY,
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
      const upgrade = _this.equipUpgradeValue;
      if(character.shadowLeftHand && character.shadowLeftHand.id === 24250) {
        _this.additionAtk.atkPercent2 = 0.01;
        _this.hpModB = 0.01;

        const upgradeLeft = character.shadowLeftHand.equipUpgradeValue;
        if (upgrade + upgradeLeft >= 10) {
          _this.additionAtk.atkPercent2 = 0.03;
          _this.hpModB = 0.03;
        }
      }
    }
  },
];
