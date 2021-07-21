import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';

export const middleHeadgear: IBaseEquipment[] = [
  {
    id: 2202,
    name: 'Sunglasses [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
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
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 5918,
    name: 'Gambler Seal',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
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
      _this.criticalPercent = 0.03;
      _this.criticalPercent = Number((new Big((Math.floor(character.class.dex0 / 10) * 0.02))).mul(-1).plus(_this.criticalPercent).valueOf());

      _this.eATK = Math.floor(character.class.luk0 / 10) * 2;

      if (character.class.luk0 >= 108) {
        _this.criticalPercent = Number((new Big(_this.criticalPercent)).plus(0.1).valueOf());
      }

      if (character.class.luk0 >= 120) {
        _this.criticalPercent = Number((new Big(_this.criticalPercent)).plus(0.17).valueOf());
      }
    }
  },
];
