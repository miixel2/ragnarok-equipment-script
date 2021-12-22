import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';

export const upperHeadgear: IBaseEquipment[] = [
  {
    id: 19602,
    name: 'Costume Invisible Cap',
    type: EquipmentType.COSTUME,
    subType: EquipmentSubType.COSTUME_HELM,
    location: EquipmentLocation.COSTUME_UPPER_HEADGEAR,
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
      class: 0
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0
    },
    eATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => { }
  }
];
