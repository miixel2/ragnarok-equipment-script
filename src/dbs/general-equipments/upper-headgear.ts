import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import {
  IBaseEquipment,
  EquipmentType,
  EquipmentSubType,
  EquipmentLocation,
} from '../../models/equipment';
import { Scale } from '../../models/monster';

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
      atkPercent2: 0,
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
    fct: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.atkPercent2 = 0;
      _this.criticalPercent = 0;
      _this.eATK = 0;
      _this.aspd = 0;
      _this.aspdFlat = 0;
      _this.fct = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = Number(new Big(Math.floor(upgrade / 2)).mul(15).valueOf());

      if (upgrade >= 7) {
        _this.aspd = 0.1;

        if (upgrade >= 9) {
          _this.additionAtk.atkPercent2 = 0.05;
          _this.aspdFlat = 1;

          if (upgrade >= 11) {
            _this.fct = Number(
              new Big(Math.min(Math.max(upgrade, 11), 15) - 10)
                .mul(0.1)
                .valueOf()
            );
            _this.criticalPercent = 0.15;
          }
        }
      }

      if (character.rightHand?.id === 1171) {
        _this.eATK = Number(new Big(Math.floor(upgrade / 2)).mul(20).valueOf());
      }
    },
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
      atkPercent2: 0,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    aspdFlat: 0,
    fct: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.atkPercent2 = 0;
      _this.criticalPercent = 0;
      _this.aspdFlat = 0;
      _this.longRangePercent = 0;
      _this.fct = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = Number(new Big(Math.floor(upgrade / 2)).mul(15).valueOf());

      if (character.rightHand?.id === 28000) {
        _this.eATK += Number(
          new Big(Math.floor(upgrade / 2)).mul(20).valueOf()
        );
      }

      if (upgrade >= 7) {
        _this.eATK += 30;

        if (upgrade >= 9) {
          _this.additionAtk.atkPercent2 = 0.05;
          _this.aspdFlat = 1;

          if (upgrade >= 11) {
            _this.criticalPercent = 0.03;
            _this.longRangePercent = 0.03;
            _this.fct = Number(
              new Big(Math.min(Math.max(upgrade, 11), 15) - 10)
                .mul(0.1)
                .valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 18971,
    name: 'Old Rune Circlet [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 10,
    baseATK: 0,
    baseMDEF: 5,
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
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    aspdFlat: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade * 4;
      _this.aspdFlat = Number(
        new Big(Math.floor(upgrade / 5)).mul(1).valueOf()
      );
      _this.hpModB = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.spModB = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );

      if (character.playerTypeAtk === 2006) {
        const skillMultiple = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.2).valueOf()
        );
        character.buffSkillPercent = Number(
          new Big(character.buffSkillPercent).plus(skillMultiple).valueOf()
        );
      }

      if (character.playerTypeAtk === 2004) {
        const skillMultiple = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.15).valueOf()
        );
        character.buffSkillPercent = Number(
          new Big(character.buffSkillPercent).plus(skillMultiple).valueOf()
        );
      }
    },
  },
  {
    id: 18982,
    name: 'Old Bone Circlet [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.hpModB = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.spModB = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.criticalPercent = Number(new Big(upgrade).mul(0.01).valueOf());
      _this.aspd = Number(new Big(upgrade).mul(0.01).valueOf());

      if (character.playerTypeAtk === 2022) {
        const skillMultiple = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.1).valueOf()
        );
        character.buffSkillPercent = Number(
          new Big(character.buffSkillPercent).plus(skillMultiple).valueOf()
        );
      }

      if (character.playerTypeAtk === 2037) {
        const skillMultiple = Number(
          new Big(Math.floor(upgrade / 2)).mul(0.2).valueOf()
        );
        character.buffSkillPercent = Number(
          new Big(character.buffSkillPercent).plus(skillMultiple).valueOf()
        );
      }
    },
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
      atkPercent2: 0,
    },
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    aspdFlat: 1,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.atkPercent2 = 0;
      _this.penetrationPercent = 0;

      const baseStr = character.class.str0;
      const multiplierStrLuk = Math.floor(baseStr / 12);
      _this.eATK = multiplierStrLuk * 5;
      _this.penetrationPercent = Number(
        new Big(multiplierStrLuk).mul(0.1).valueOf()
      );

      const upgrade = _this.equipUpgradeValue;
      if (upgrade >= 9) {
        _this.additionAtk.class = 0.02;
        _this.penetrationPercent = Number(
          new Big(_this.penetrationPercent).plus(0.05).valueOf()
        );

        if (upgrade >= 12) {
          _this.additionAtk.atkPercent2 = Number(
            new Big(_this.additionAtk.atkPercent2).plus(0.03).valueOf()
          );
          _this.penetrationPercent = Number(
            new Big(_this.penetrationPercent).plus(0.05).valueOf()
          );
        }
      }
    },
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
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 19269,
    name: 'Angel of Happiness [1]',
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
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.flatNamePercent = 0;
      if (
        [
          1191, 1195, 1193, 1270, 2917, 2910, 2479, 2478, 2918, 2921, 2923,
          3074,
        ].includes(character.monster?.id)
      ) {
        character.mulMeleeAtk = Number(
          new Big(character.mulMeleeAtk).plus(0.15).valueOf()
        );
        _this.additionMAtk.flatNamePercent = 0.15;

        const upgrade = _this.equipUpgradeValue;
        if (upgrade >= 7) {
          character.mulMeleeAtk = Number(
            new Big(character.mulMeleeAtk).plus(0.15).valueOf()
          );
          _this.additionMAtk.flatNamePercent = 0.3;

          if (upgrade >= 9) {
            character.mulMeleeAtk = Number(
              new Big(character.mulMeleeAtk).plus(0.2).valueOf()
            );
            _this.additionMAtk.flatNamePercent = 0.5;
          }
        }
      }
    },
  },
  {
    id: 19191,
    name: 'Racing Cap(Guillotine Cross) [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: false,
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.criticalPercent = 0;
      _this.eATK = Number(new Big(Math.floor(upgrade / 2)).mul(10).valueOf());
      _this.aspd = Number(new Big(Math.floor(upgrade / 3)).mul(0.02).valueOf());

      if (upgrade >= 8) {
        _this.criticalPercent = 0.25;
      }
    },
  },
  {
    id: 19195,
    name: 'Racing Cap(Rune Knight) [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: false,
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.criticalPercent = 0;
      _this.eATK = Number(new Big(Math.floor(upgrade / 2)).mul(10).valueOf());
      _this.aspd = Number(new Big(Math.floor(upgrade / 3)).mul(0.02).valueOf());

      if (upgrade >= 8) {
        _this.criticalPercent = 0.25;
      }
    },
  },
  {
    id: 15927,
    name: '[Rental] Happy Turtle Hat',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
    compoundOn: null,
    baseDef: 15,
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
    eATK: 30,
    eMATK: 30,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.flatNamePercent = 0;
      if (
        [3799, 3800, 3801, 3802, 3803, 3804].includes(character.monster?.id)
      ) {
        character.mulMeleeAtk = Number(
          new Big(character.mulMeleeAtk).plus(0.5).valueOf()
        );

        _this.additionMAtk.flatNamePercent = 0.5;
      }
    },
  },
  {
    id: 400021,
    name: `Red Clock Casquette [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.HELM,
    location: EquipmentLocation.UPPER_HEADGEAR,
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
    eATK: 30,
    cATK: 0,
    vct: 0,
    fct: 0,
    criRate: 0,
    criticalPercent: 0,
    meleePercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.meleePercent = 0;
      _this.additionAtk.size = 0;
      _this.additionMAtk.size = 0;
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = Number(new Big(Math.floor(upgrade / 2)).mul(20).valueOf());
      _this.vct = 0;
      _this.fct = 0;
      _this.criRate = 0;

      if (upgrade >= 7) {
        _this.vct = 0.15;

        if (upgrade >= 9) {
          _this.meleePercent = 0.15;

          if (upgrade >= 11) {
            if (
              [Scale.SMALL, Scale.MEDIUM].includes(character.monster?.scale)
            ) {
              _this.additionAtk.size = 0.15;
            }

            _this.fct = 0.2;
          }
        }
      }

      if (character.rightHand?.id === 21047) {
        _this.criRate = 10;
        if (character.monster?.scale === Scale.LARGE) {
          _this.additionAtk.size = Number(
            new Big(Math.floor(upgrade / 2))
              .mul(0.04)
              .plus(_this.additionAtk.size)
              .valueOf()
          );
          _this.additionMAtk.size = Number(
            new Big(Math.floor(upgrade / 2)).mul(0.04).valueOf()
          );
        }
      }

      if (character.rightHand?.id === 28038) {
        _this.eATK += 30;

        if (character.playerTypeAtk === 2036) {
          const skillMultiple = Number(
            new Big(Math.floor(upgrade / 2)).mul(0.04).valueOf()
          );
          character.buffSkillPercent = Number(
            new Big(character.buffSkillPercent).plus(skillMultiple).valueOf()
          );
        }
      }

      if (character.rightHand?.id === 28629) {
        _this.eATK += 30;

        if (character.playerTypeAtk === 2592) {
          const skillMultiple = Number(
            new Big(Math.floor(upgrade / 2)).mul(0.04).valueOf()
          );
          character.buffSkillPercent = Number(
            new Big(character.buffSkillPercent).plus(skillMultiple).valueOf()
          );
        }
      }
    },
  },
];
