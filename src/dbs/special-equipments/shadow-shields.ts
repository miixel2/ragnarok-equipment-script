import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import {
  IBaseEquipment,
  EquipmentType,
  EquipmentSubType,
  EquipmentLocation,
} from '../../models/equipment';
import { MonsterType } from '../../models/monster';

export const shadowShields: IBaseEquipment[] = [
  {
    id: 24394,
    name: 'Physical Shadow Shield',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
    compoundOn: null,
    option1Enable: true,
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
      _this.hpModB = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10 + 200;
      if (upgrade >= 7) {
        _this.hpModB = 0.02;

        if (upgrade >= 9) {
          _this.hpModB = 0.05;
        }
      }
    },
  },
  {
    id: 24418,
    name: 'Temporal Transcendent Shadow Shield',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
    compoundOn: null,
    option1Enable: true,
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
      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
    },
  },
  {
    id: 24301,
    name: 'Rune Knight Shield Shadow',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
    compoundOn: null,
    option1Enable: true,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    penetrationMPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;

      _this.hpModA = upgrade * 10;
      _this.str = 0;
      _this.agi = 0;
      _this.vit = 0;
      _this.int = 0;
      _this.dex = 0;
      _this.luk = 0;
      _this.hpModB = 0;
      _this.spModB = 0;
      _this.penetrationPercent = 0;
      _this.penetrationMPercent = 0;

      if (
        character.shadowBodyGear?.id === 24269 &&
        character.shadowShoes?.id === 24256 &&
        character.shadowRightHand?.id === 24288 &&
        character.shadowRightAccessory?.id === 24246 &&
        character.shadowLeftAccessory?.id === 24250
      ) {
        _this.str = 10;
        _this.agi = 10;
        _this.vit = 10;
        _this.int = 10;
        _this.dex = 10;
        _this.luk = 10;
        _this.hpModB = 0.05;
        _this.spModB = 0.05;

        if (character.monster?.type === MonsterType.NORMAL) {
          _this.penetrationPercent = 0.5;
          _this.penetrationMPercent = 0.5;
        }
      }
    },
  },
  {
    id: 24053,
    name: 'Safeguard Shadow Shield',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
    compoundOn: null,
    option1Enable: true,
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
      _this.additionAtk.class = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
      if (character.monster.type === MonsterType.BOSS) {
        _this.additionAtk.class = Number(new Big(0.02).valueOf());

        if (upgrade >= 7) {
          _this.additionAtk.class = Number(
            new Big(_this.additionAtk.class).plus(0.01).valueOf()
          );

          if (upgrade >= 9) {
            _this.additionAtk.class = Number(
              new Big(_this.additionAtk.class).plus(0.01).valueOf()
            );
          }
        }

        if (character.shadowShoes && character.shadowShoes.id === 24063) {
          _this.additionAtk.class = Number(
            new Big(_this.additionAtk.class).plus(0.05).valueOf()
          );
        }
      }
    },
  },
  {
    id: 24374,
    name: 'Penetration Shadow Shield',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
    compoundOn: null,
    option1Enable: true,
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
      _this.penetrationPercent = 0.05;
      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
      const refinePenetration = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.penetrationPercent = Number(
        new Big(_this.penetrationPercent).plus(refinePenetration).valueOf()
      );
    },
  },
  {
    id: 24585,
    name: 'Booster Shadow Shield',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
    compoundOn: null,
    option1Enable: true,
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
    hpModA: 100,
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
    vct: 0.1,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 24441,
    name: 'Sonic Shadow Shield',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
    compoundOn: null,
    option1Enable: true,
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
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
      _this.penetrationPercent = 0;
      _this.longRangePercent = 0.03;

      if (upgrade >= 7) {
        _this.longRangePercent = 0.06;

        if (upgrade >= 9) {
          _this.longRangePercent = 0.1;
        }
      }

      if (character.playerTypeAtk === 2002) {
        if (
          character.shadowBodyGear?.id === 24440 &&
          character.shadowShoes?.id === 24442
        ) {
          const refineRight = character.shadowBodyGear.equipUpgradeValue;
          const refineLeft = character.shadowShoes.equipUpgradeValue;

          character.buffSkillPercent = Number(
            new Big(character.buffSkillPercent)
              .plus(refineRight + refineLeft)
              .valueOf()
          );
        }
      }

      if (character.shadowRightHand?.id === 24288) {
        const refineRightHand = character.shadowRightHand.equipUpgradeValue;
        const temp = Number(
          new Big(upgrade + refineRightHand).div(100).valueOf()
        );
        _this.penetrationPercent = Number(new Big(0.4).plus(temp).valueOf());
      }
    },
  },
  {
    id: 24537,
    name: 'Rolling Shadow Shield',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
    compoundOn: null,
    option1Enable: true,
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
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.hpModA = upgrade * 10;
      _this.additionAtk.size = 0.03;
      _this.penetrationPercent = 0;

      if (upgrade >= 7) {
        _this.additionAtk.size = 0.06;

        if (upgrade >= 9) {
          _this.additionAtk.size = 0.1;
        }
      }

      if (character.playerTypeAtk === 2036) {
        if (
          character.shadowBodyGear?.id === 24536 &&
          character.shadowShoes?.id === 24538
        ) {
          const refineRight = character.shadowBodyGear.equipUpgradeValue;
          const refineLeft = character.shadowShoes.equipUpgradeValue;

          character.buffSkillPercent = Number(
            new Big(character.buffSkillPercent)
              .plus(refineRight + refineLeft)
              .valueOf()
          );
        }
      }

      if (character.shadowRightHand?.id === 24294) {
        const refineRightHand = character.shadowRightHand.equipUpgradeValue;
        const temp = Number(
          new Big(upgrade + refineRightHand).div(100).valueOf()
        );
        _this.penetrationPercent = Number(new Big(0.4).plus(temp).valueOf());
      }
    },
  },
  {
    id: 24305,
    name: 'Arch Bishop Shadow Shield',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
    compoundOn: null,
    option1Enable: true,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    penetrationMPercent: 0,
    classActives: [ClassKey.ArchBishop],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;

      _this.hpModA = upgrade * 10;
      _this.str = 0;
      _this.agi = 0;
      _this.vit = 0;
      _this.int = 0;
      _this.dex = 0;
      _this.luk = 0;
      _this.hpModB = 0;
      _this.spModB = 0;
      _this.penetrationPercent = 0;
      _this.penetrationMPercent = 0;

      if (character.playerTypeAtk === 2040) {
        character.buffMagicSkillPercent = Number(
          new Big(character.buffMagicSkillPercent).plus(0.2).valueOf()
        );
        character.buffMagicSkillPercent = Number(
          new Big(upgrade)
            .mul(0.05)
            .plus(character.buffMagicSkillPercent)
            .valueOf()
        );
      }

      if (character.shadowRightHand?.id === 24292) {
        if (character.playerTypeAtk === 2054) {
          character.buffMagicSkillPercent = Number(
            new Big(character.buffMagicSkillPercent).plus(0.2).valueOf()
          );
        }
      }

      if (
        character.shadowBodyGear?.id === 24273 &&
        character.shadowShoes?.id === 24260 &&
        character.shadowRightHand?.id === 24292 &&
        character.shadowRightAccessory?.id === 24248 &&
        character.shadowLeftAccessory?.id === 24252
      ) {
        _this.str = 10;
        _this.agi = 10;
        _this.vit = 10;
        _this.int = 10;
        _this.dex = 10;
        _this.luk = 10;
        _this.hpModB = 0.05;
        _this.spModB = 0.05;
        if (character.monster?.type === MonsterType.NORMAL) {
          _this.penetrationPercent = 0.5;
          _this.penetrationMPercent = 0.5;
        }
      }
    },
  },
  {
    id: 24397,
    name: 'Magical Shadow Shield',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
    compoundOn: null,
    option1Enable: true,
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
    spModA: 0,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.spModB = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.spModA = 200;
      _this.hpModA = upgrade * 10;
      if (upgrade >= 7) {
        _this.spModB = 0.02;

        if (upgrade >= 9) {
          _this.spModB = 0.05;
        }
      }
    },
  },
];
