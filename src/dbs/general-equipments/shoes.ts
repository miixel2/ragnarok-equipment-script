import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';

export const shoes: IBaseEquipment[] = [
  {
    id: 22006,
    name: 'Temporal Str Boots [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHOES,
    location: EquipmentLocation.SHOES,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: true,
    slot4Enable: true,
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;

      _this.hpModA = Number((new Big(Math.floor(upgrade / 3))).mul(100).plus(300).valueOf());
      _this.spModA = Number((new Big(Math.floor(upgrade / 3))).mul(100).plus(30).valueOf());

      const refineEAtk = Number((new Big(Math.floor(upgrade / 3))).mul(7).valueOf());
      _this.eATK = refineEAtk;

      if (character.class.str0 >= 120) {
        _this.eATK = refineEAtk + 50;
      }
    }
  },
  {
    id: 22011,
    name: 'Temporal Luk Boots [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHOES,
    location: EquipmentLocation.SHOES,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: true,
    slot4Enable: true,
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
      atkPercent: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      atkPercent: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;

      _this.hpModA = Number((new Big(Math.floor(upgrade / 3))).mul(100).plus(300).valueOf());
      _this.spModA = Number((new Big(Math.floor(upgrade / 3))).mul(100).plus(30).valueOf());

      const refineCriticalPercent = Number((new Big(Math.floor(upgrade / 3))).mul(0.02).valueOf());
      _this.criticalPercent = refineCriticalPercent;

      if (character.class.luk0 >= 120) {
        _this.criticalPercent = Number((new Big(refineCriticalPercent)).plus(0.3).valueOf());
      }
    }
  },
];
