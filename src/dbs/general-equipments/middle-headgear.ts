import Big from 'big.js';
import { Character2 } from '../../models/character2';
import {
  IBaseEquipment,
  EquipmentType,
  EquipmentSubType,
  EquipmentLocation,
} from '../../models/equipment';

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
    script: (character: Character2, _this: IBaseEquipment): void => {},
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
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0.03;
      _this.criRate = 3;
      _this.criticalPercent = Number(
        new Big(Math.floor(character.class.dex0 / 10) * 0.02)
          .mul(-1)
          .plus(_this.criticalPercent)
          .valueOf()
      );

      const multiple = Math.floor(character.class.luk0 / 10);
      _this.eATK = Number(new Big(multiple).mul(2).valueOf());
      _this.eMATK = Number(new Big(multiple).mul(2).valueOf());
      _this.criRate = Number(
        new Big(multiple).mul(1).plus(_this.criRate).valueOf()
      );

      if (character.class.luk0 >= 108) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.1).valueOf()
        );
        _this.criRate = Number(new Big(5).plus(_this.criRate).valueOf());
      }

      if (character.class.luk0 >= 120) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.17).valueOf()
        );
        _this.criRate = Number(new Big(10).plus(_this.criRate).valueOf());
      }
    },
  },
  {
    id: 5389,
    name: 'Angel Spirit',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 2,
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
    hit: 15,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 19087,
    name: 'Angel Spirit [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 0,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 1,
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
    hit: 8,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 18823,
    name: 'Imperial Feather',
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    aspd: 0,
    aspdFlat: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.aspdFlat = 0;
      _this.aspd = 0;
      if (character.class.agi0 >= 108) {
        _this.aspdFlat = 1;
        _this.aspd = 0.01;
      }
    },
  },
  {
    id: 19138,
    name: 'Seraphim Coronet',
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    vct: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.str = 2;

      const baseInt = character.class.int0;

      const multiple = Math.floor(baseInt / 8);
      _this.eATK = Number(new Big(multiple).mul(5).valueOf());
      _this.vct = Number(new Big(multiple).mul(0.01).mul(-1).valueOf());

      if (baseInt >= 108) {
        _this.eATK += 50;
        _this.vct = Number(new Big(_this.vct).minus(0.04).valueOf());
        if (baseInt >= 125) {
          _this.eATK += 125;
          _this.vct = Number(new Big(_this.vct).minus(0.06).valueOf());
        }
      }
    },
  },
  {
    id: 18603,
    name: `Black Devil's Mask [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 0,
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
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 18937,
    name: 'Memory of Lovers',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 0,
    baseATK: 0,
    baseMDEF: 7,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    hpModB: 0.02,
    spModB: 0,
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
    hit: 0,
    flee: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.str = 0;
      _this.dex = 0;
      _this.agi = 0;
      _this.int = 0;
      _this.eATK = 0;
      _this.spModB = 0;
      _this.hit = 0;
      _this.flee = 0;

      if (
        character.leftAccessory?.id === 2659 ||
        character.rightAccessory?.id === 28302
      ) {
        _this.int = 8;
        _this.spModB = 0.2;
      }

      if (
        character.leftAccessory?.id === 2660 ||
        character.rightAccessory?.id === 28303
      ) {
        _this.str = 8;
        _this.eATK = 20;
      }

      if (
        character.leftAccessory?.id === 2661 ||
        character.rightAccessory?.id === 28304
      ) {
        _this.agi = 8;
        _this.flee = 15;
      }

      if (
        character.leftAccessory?.id === 2662 ||
        character.rightAccessory?.id === 28305
      ) {
        _this.dex = 8;
        _this.hit = 10;
      }
    },
  },
  {
    id: 410136,
    name: 'Raven Of Tomb',
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
    hit: 0,
    aspd: 0,
    flee: 0,
    criRate: 0,
    acd: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.class = 0;
      _this.eATK = 0;
      _this.criticalPercent = 0;
      _this.additionMAtk.matkPercent = 0;
      _this.additionMAtk.skillElement = 0;
      _this.hit = 0;
      _this.eMATK = 0;
      _this.aspd = 0;
      _this.flee = 0;
      _this.criRate = 0;
      _this.longRangePercent = 0;
      _this.hpModB = 0;
      _this.acd = 0;

      const baseStr = character.class.str0;
      const baseLuk = character.class.luk0;
      const baseAgi = character.class.agi0;
      const baseVit = character.class.vit0;
      const baseDex = character.class.dex0;
      const baseInt = character.class.int0;

      if (baseStr >= 100) {
        _this.additionAtk.class = 0.04;
        _this.hit = 10;
        if (baseStr >= 120) {
          _this.additionAtk.class = 0.1;
          _this.hit = 20;
        }
      }

      if (baseInt >= 100) {
        _this.additionMAtk.matkPercent = 0.04;
        _this.additionMAtk.skillElement = 0.04;
        if (baseInt >= 120) {
          _this.additionMAtk.matkPercent = 0.1;
          _this.additionMAtk.skillElement = 0.1;
        }
      }

      if (baseDex >= 100) {
        _this.acd = 0.03;
        _this.criRate = 4;
        if (baseDex >= 120) {
          _this.acd = 0.06;
          _this.criRate = 10;
        }
      }

      if (baseVit >= 100) {
        _this.hpModB = 0.04;
        _this.aspd = 0.04;
        if (baseVit >= 120) {
          _this.hpModB = 0.08;
          _this.aspd = 0.08;
        }
      }

      if (baseAgi >= 100) {
        _this.criticalPercent = 0.07;
        _this.flee = 10;
        if (baseAgi >= 120) {
          _this.criticalPercent = 0.14;
          _this.flee = 20;
        }
      }

      if (baseLuk >= 100) {
        _this.eATK = 20;
        _this.eMATK = 20;
        if (baseLuk >= 120) {
          _this.eATK = 60;
          _this.eMATK = 60;
        }
      }

      if (character.garment?.id === 480161) {
        _this.longRangePercent = 0.07;
        const garmentUpgrade = character.garment.equipUpgradeValue;
        if (garmentUpgrade >= 11) {
          const mulVal = garmentUpgrade >= 15 ? 5 : garmentUpgrade - 10;
          _this.acd = Number(
            new Big(mulVal).mul(0.01).plus(_this.acd).valueOf()
          );
        }
      }

      if (character.garment?.id === 480172) {
        _this.eATK += 50;
        const garmentUpgrade = character.garment.equipUpgradeValue;
        if (garmentUpgrade >= 11) {
          const mulVal = garmentUpgrade >= 15 ? 5 : garmentUpgrade - 10;
          _this.additionAtk.class = Number(
            new Big(mulVal).mul(0.02).plus(_this.additionAtk.class).valueOf()
          );
        }
      }

      if (character.garment?.id === 480166) {
        _this.eMATK += 50;
        const garmentUpgrade = character.garment.equipUpgradeValue;
        if (garmentUpgrade >= 11) {
          const mulVal = garmentUpgrade >= 15 ? 5 : garmentUpgrade - 10;
          _this.eMATK = Number(
            new Big(mulVal).mul(20).plus(_this.eMATK).valueOf()
          );
        }
      }
    },
  },
  {
    id: 400001,
    name: 'Victorious Wing Ears',
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 10,
    eMATK: 10,
    cATK: 0,
    acd: 0.08,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 400002,
    name: 'Victorious Wing Ears [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    eATK: 5,
    eMATK: 5,
    cATK: 0,
    acd: 0.04,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 15968,
    name: 'Orange Rabbit',
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
    hpModB: 0.05,
    additionAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0.06,
    },
    additionMAtk: {
      size: 0,
      element: 0,
      race: 0,
      class: 0.06,
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
    cATK: 0,
    aspd: 0.05,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 15948,
    name: 'Eye Patch Of Power',
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
      _this.eATK = 60;

      if (character.class.baseLv >= 170) {
        _this.eATK = 120;
      }

      if (
        character.upperHeadgear?.slot1?.id === 4143 ||
        character.middleHeadgear?.slot1?.id
      ) {
        _this.eATK += 50;

        if (character.class.baseLv >= 170) {
          _this.eATK += 50;
        }
      }
    },
  },
  {
    id: 15950,
    name: 'Eye Patch Of Power [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.MIDDLE_HEADGEAR,
    compoundOn: null,
    slot1Enable: 'CARD',
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
      _this.eATK = 40;

      if (character.class.baseLv >= 170) {
        _this.eATK = 80;
      }

      if (
        character.upperHeadgear?.slot1?.id === 4143 ||
        character.middleHeadgear?.slot1?.id
      ) {
        _this.eATK += 30;

        if (character.class.baseLv >= 170) {
          _this.eATK += 30;
        }
      }
    },
  },
];
