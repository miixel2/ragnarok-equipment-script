import { Character2 } from "../../models/character2";
import { EquipmentLocation, EquipmentSubType, EquipmentType, IBaseEquipment } from "../../models/equipment";

export const accessories: IBaseEquipment[] = [
  {
    id: 490033,
    name: `Fallen Angel's Tear [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: false,
    slot4Enable: false,
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
      atkPercent: 0,
      atkPercent2: 0.06
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
    id: 2746,
    name: `Cold Heart`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 3,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    additionAtk: {
      size: 0.08,
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
    id: 2620,
    name: `Rogue's Treasure`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
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
      _this.eATK = 0;
      if (character.class.agi0 >= 90) {
        _this.eATK = 10;
      }
    }
  },
  {
    id: 490147,
    name: '1st Anniversary Ring',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.LEFT_ACCESSORY,
    compoundOn: null,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 2,
    agi: 2,
    vit: 2,
    int: 2,
    dex: 2,
    luk: 2,
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
    eATK: 25,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {

      _this.additionAtk.atkPercent = 0;
      _this.additionAtk.atkPercent2 = 0;
      _this.additionAtk.size = 0;
      _this.criticalPercent = 0;

      if (!character.shoes || character.shoes.equipUpgradeValue < 9) {
        return;
      }

      // STR
      if ([22000, 22006, 22107, 22113].includes(character.shoes.id) && character.class.str0 >= 120) {
        _this.additionAtk.atkPercent2 = 0.08;
        _this.additionAtk.size = 0.08;
        return;
      }

      // AGI
      if ([22002, 22010, 22109, 22115].includes(character.shoes.id) && character.class.agi0 >= 120) {
        _this.criticalPercent = 0.15;
        return;
      }

      // VIT
      if ([22003, 22007, 22110, 22116].includes(character.shoes.id) && character.class.vit0 >= 120) {
        return;
      }

      // INT
      if ([22001, 22009, 22108, 22114].includes(character.shoes.id) && character.class.int0 >= 120) {
        return;
      }

      // DEX
      if ([22004, 22008, 22111, 22117].includes(character.shoes.id) && character.class.dex0 >= 120) {
        _this.additionAtk.atkPercent2 = 0.08;
        return;
      }

      // LUK
      if ([22005, 22011, 22112, 22118].includes(character.shoes.id) && character.class.luk0 >= 120) {
        _this.criticalPercent = 0.1;
        return;
      }
    }
  },
  {
    id: 2910,
    name: 'Bakonawa Agimat Tattoo',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
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
      atkPercent: 0.07
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
    id: 2928,
    name: 'Luk Glove [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
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
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0;
      if (character.class.luk0 >= 110) {
        _this.criticalPercent = 0.01;
      }
    }
  },
  {
    id: 2965,
    name: 'Angel Egg [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ACCESSORY,
    location: EquipmentLocation.ACCESSORY,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 1,
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
      size: 0.05,
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
];
