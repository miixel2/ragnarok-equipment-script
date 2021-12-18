import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';

export const upperHeadgear: IBaseEquipment[] = [
  {
    id: 19263,
    name: 'General Helm [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 12,
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
      atkPercent2: 0
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
      _this.additionAtk.atkPercent2 = 0;
      _this.criticalPercent = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = Number((new Big(Math.floor(upgrade / 2))).mul(15).valueOf());

      if (upgrade >= 9) {
        _this.additionAtk.atkPercent2 = 0.05;

        if (upgrade >= 11) {
          _this.criticalPercent = 0.15;
        }
      }
    }
  },
  {
    id: 19300,
    name: 'Ruff Officer [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 35,
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
      atkPercent2: 0
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
      _this.additionAtk.atkPercent2 = 0;
      _this.criticalPercent = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = Number((new Big(Math.floor(upgrade / 2))).mul(15).valueOf());

      if (character.rightHand?.id === 28000) {
        _this.eATK += Number((new Big(Math.floor(upgrade / 2))).mul(20).valueOf());
      }

      if (upgrade >= 7) {
        _this.eATK += 30;

        if (upgrade >= 9) {
          _this.additionAtk.atkPercent2 = 0.05;

          if (upgrade >= 11) {
            _this.criticalPercent = 0.03;
          }
        }
      }
    }
  },
  {
    id: 18971,
    name: 'Old Rune Circlet [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 10,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 1,
    agi: 1,
    vit: 1,
    int: 1,
    dex: 1,
    luk: 1,
    hpModB: 0,
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
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade * 4;
      _this.hpModB = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
      _this.spModB = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());

      if (character.playerTypeAtk === 2006) {
        const skillMultiple = Number((new Big(Math.floor(upgrade / 2))).mul(0.2).valueOf());
        character.buffSkillPercert = Number(new Big(character.buffSkillPercert).plus(skillMultiple).valueOf());
      }
    }
  },
  {
    id: 18982,
    name: 'Old Bone Circlet [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 10,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 1,
    agi: 1,
    vit: 1,
    int: 1,
    dex: 1,
    luk: 1,
    hpModB: 0,
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
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.hpModB = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
      _this.spModB = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
      _this.criticalPercent = Number(new Big(upgrade).mul(0.01).valueOf());

      if (character.playerTypeAtk === 2022) {
        const skillMultiple = Number((new Big(Math.floor(upgrade / 2))).mul(0.1).valueOf());
        character.buffSkillPercert = Number(new Big(character.buffSkillPercert).plus(skillMultiple).valueOf());
      }
    }
  },
  {
    id: 19328,
    name: 'Spider Seduction [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 10,
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
      _this.additionAtk.atkPercent = 0;
      _this.penetrationPercent = 0;

      const baseStr = character.class.str0;
      const multiplierStrLuk = Math.floor((baseStr) / 12);
      _this.eATK = multiplierStrLuk * 5;
      _this.penetrationPercent = Number((new Big(multiplierStrLuk)).mul(0.1).valueOf());

      const upgrade = _this.equipUpgradeValue;
      if (upgrade >= 9) {
        _this.additionAtk.atkPercent = 0.02;
        _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(0.05).valueOf());

        if (upgrade >= 12) {
          _this.additionAtk.atkPercent = Number((new Big(_this.additionAtk.atkPercent)).plus(0.03).valueOf());
          _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(0.05).valueOf());
        }
      }
    }
  },
  {
    id: 5388,
    name: 'Snake Head Hat [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 2,
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
    id: 18570,
    name: 'Ancient Gold Deco [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 7,
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
      const baseLevel = character.class.baseLv;

      _this.str = 0;
      _this.agi = 0;
      _this.vit = 0;
      _this.int = 0;
      _this.dex = 0;
      _this.luk = 0;
      _this.additionAtk.class = 0;

      if (baseLevel >= 150) {
        _this.str = 2;
        _this.agi = 2;
        _this.vit = 2;
        _this.int = 2;
        _this.dex = 2;
        _this.luk = 2;
      }

      if ([ClassKey.RuneKnight, ClassKey.GuillotineCross].includes(ClassKey[character.class.classKey])) {
        _this.additionAtk.class = Number(new Big(0.08).valueOf());
      }
    }
  },
  {
    id: 5507,
    name: 'Pink Pajamas Hat [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 2,
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
      class: 0.05,
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
