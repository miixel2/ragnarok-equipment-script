import { Character2 } from '../../models/character2';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';

export const shields: IBaseEquipment[] = [
  {
    id: 2115,
    name: `Valkyrja's Shield [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHIELD,
    location: EquipmentLocation.LEFT_HAND,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 80,
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
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 28902,
    name: 'Mad Bunny [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHIELD,
    location: EquipmentLocation.LEFT_HAND,
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
      race: 0.05,
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
      _this.eATK = 0;
      const upgrade = _this.equipUpgradeValue;

      if (upgrade >= 7) {
        _this.eATK = 5;

        if (upgrade >= 9) {
          _this.eATK += 15;
        }
      }
    }
  },
  {
    id: 28945,
    name: `Bloody Knight's Shield [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.SHIELD,
    location: EquipmentLocation.LEFT_HAND,
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
      atkPercent2: 0.03,
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
      _this.eATK = 0;
      const upgrade = _this.equipUpgradeValue;

      if (upgrade >= 7) {
        _this.eATK = 10;
      }
    }
  },
];
