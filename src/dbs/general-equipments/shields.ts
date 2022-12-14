import { Character2 } from '../../models/character2';
import {
  IBaseEquipment,
  EquipmentType,
  EquipmentSubType,
  EquipmentLocation,
} from '../../models/equipment';

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
    baseMDEF: 0,
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      matkPercent: 0.05,
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
    criRate: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.eMATK = 0;
      _this.criRate = 0;
      const upgrade = _this.equipUpgradeValue;

      if (upgrade >= 7) {
        _this.eATK = 5;
        _this.eMATK = 5;

        if (upgrade >= 9) {
          _this.eATK += 15;
          _this.eMATK += 15;

          if (upgrade >= 12) {
            _this.criRate = 10;
          }
        }
      }
    },
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
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
      matkPercent: 0.03,
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
    aspd: 0.1,
    aspdFlat: 0,
    acd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;
      _this.eMATK = 0;
      _this.aspdFlat = 0;
      _this.acd = 0;
      const upgrade = _this.equipUpgradeValue;

      if (upgrade >= 7) {
        _this.eATK = 10;
        _this.eMATK = 10;

        if (upgrade >= 9) {
          _this.aspdFlat = 1;

          if (upgrade >= 12) {
            _this.acd = 0.03;
          }
        }
      }
    },
  },
];
