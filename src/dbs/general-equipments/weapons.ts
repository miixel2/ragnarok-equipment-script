import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import { E_Element } from '../../models/element';
import {
  IBaseEquipment,
  EquipmentType,
  EquipmentSubType,
  EquipmentLocation,
} from '../../models/equipment';
import { MonsterRace, MonsterType, Scale } from '../../models/monster';

export const weapons: IBaseEquipment[] = [
  {
    id: 1253,
    name: 'Katar [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    baseDef: 0,
    baseATK: 148,
    level: 3,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 1,
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
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 1117,
    name: 'Katana [4]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 60,
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
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 21018,
    name: 'Lindy Hop [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 0,
    baseATK: 340,
    level: 4,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.additionAtk.class = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.aspd = Number(new Big(upgrade).mul(0.01).valueOf());

      if (
        character.rightAccessory?.id === 490182 ||
        character.leftAccessory?.id === 490182
      ) {
        _this.criticalPercent = Number(new Big(upgrade).mul(0.01).valueOf());

        if (upgrade >= 12 && character.monster?.type === MonsterType.BOSS) {
          _this.additionAtk.class = Number(
            new Big(0.15).plus(_this.additionAtk.class).valueOf()
          );
        }
      }
    },
  },
  {
    id: 28010,
    name: 'Juliette D Rachel [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 0,
    baseATK: 300,
    level: 4,
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
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.longRangePercent = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.additionAtk.class = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.aspd = Number(new Big(upgrade).mul(0.01).valueOf());

      if (
        character.rightAccessory?.id === 490182 ||
        character.leftAccessory?.id === 490182
      ) {
        _this.additionAtk.class = Number(
          new Big(upgrade).mul(0.01).plus(_this.additionAtk.class).valueOf()
        );

        if (upgrade >= 12) {
          _this.longRangePercent = 0.08;
        }
      }
    },
  },
  {
    id: 28007,
    name: 'Katar of Crimson [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 0,
    baseATK: 130,
    level: 3,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = Math.min(Math.max(_this.equipUpgradeValue, 0), 15);

      _this.eATK = upgrade * upgrade;
      _this.eMATK = Math.floor((upgrade * upgrade) / 2);

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 5;
      }
    },
  },
  {
    id: 21015,
    name: 'Two-Handed Sword of Crimson [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 0,
    baseATK: 170,
    level: 3,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = Math.min(Math.max(_this.equipUpgradeValue, 0), 15);

      _this.eATK = upgrade * upgrade;
      _this.eMATK = Math.floor((upgrade * upgrade) / 2);

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 5;
      }
    },
  },
  {
    id: 16040,
    name: 'Mace of Crimson [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.MACE,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 0,
    baseATK: 80,
    level: 3,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = Math.min(Math.max(_this.equipUpgradeValue, 0), 15);

      _this.eATK = upgrade * upgrade;
      _this.eMATK = Math.floor((upgrade * upgrade) / 2);

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 5;
      }
    },
  },
  {
    id: 1185,
    name: 'Violet Fear [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 0,
    baseATK: 275,
    level: 4,
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
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 1186,
    name: 'Death Guidance [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 0,
    baseATK: 200,
    level: 4,
    equipUpgradeValue: 0,
    str: 5,
    agi: 2,
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
    perfectDodge: 20,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 1171,
    name: 'Zweihander [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 0,
    baseATK: 200,
    level: 4,
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
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 1292,
    name: 'Upgrade Katar [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 0,
    baseATK: 80,
    level: 3,
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
    criticalPercent: 0.02,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade * 10;

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 10;
      }
    },
  },
  {
    id: 28000,
    name: 'Thanos Katar [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 0,
    baseATK: 220,
    level: 3,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 6,
    int: 6,
    dex: 0,
    luk: -6,
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
    eMATK: 80,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 28008,
    name: 'Vicious Mind Katar [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    option1Enable: true,
    option2Enable: true,
    option3Enable: true,
    baseDef: 0,
    baseATK: 180,
    level: 4,
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
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = Math.min(Math.max(_this.equipUpgradeValue, 0), 15);
      _this.eATK = upgrade * upgrade;
    },
  },
  {
    id: 21016,
    name: 'Vicious Mind Two-Handed Sword [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    option1Enable: true,
    option2Enable: true,
    option3Enable: true,
    baseDef: 0,
    baseATK: 220,
    level: 4,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = Math.min(Math.max(_this.equipUpgradeValue, 0), 15);
      _this.eATK = upgrade * upgrade;
      _this.eMATK = Math.floor((upgrade * upgrade) / 2);
    },
  },
  {
    id: 13455,
    name: 'Vicious Mind Sabre [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    option1Enable: true,
    option2Enable: true,
    option3Enable: true,
    baseDef: 0,
    baseATK: 135,
    level: 4,
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
    classActives: [ClassKey.RuneKnight, ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = Math.min(Math.max(_this.equipUpgradeValue, 0), 15);
      _this.eATK = upgrade * upgrade;
    },
  },
  {
    id: 21011,
    name: 'Giant Blade [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 300,
    level: 4,
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
    aspd: -0.05,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 0;

      const baseStr = character.class.str0;

      if (baseStr < 110) {
        _this.eATK = -250;
      }

      const upgrade = _this.equipUpgradeValue;
      _this.criticalPercent = Number(new Big(upgrade).mul(0.01).valueOf());
    },
  },
  {
    id: 13412,
    name: 'Twin Edge of Naght Sieger [3]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    slot3Enable: 'CARD',
    slot4Enable: 'ENCHANT',
    baseDef: 0,
    baseATK: 150,
    level: 4,
    element: E_Element.WATER,
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
    classActives: [ClassKey.RuneKnight, ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 13413,
    name: 'Twin Edge of Naght Sieger [3]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    slot3Enable: 'CARD',
    slot4Enable: 'ENCHANT',
    baseDef: 0,
    baseATK: 160,
    level: 4,
    element: E_Element.FIRE,
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
    classActives: [ClassKey.RuneKnight, ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 21038,
    name: 'Oriental Sword [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: false,
    slot4Enable: false,
    option1Enable: true,
    option2Enable: true,
    baseDef: 0,
    baseATK: 180,
    level: 4,
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
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = Number(new Big(Math.floor(upgrade / 2)).mul(10).valueOf());

      if (character.playerTypeAtk === 2002) {
        character.buffSkillPercent = Number(
          new Big(Math.floor(upgrade / 3))
            .mul(0.1)
            .plus(character.buffSkillPercent)
            .valueOf()
        );
      }
    },
  },
  {
    id: 28039,
    name: 'Shiver Katar [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 0,
    baseATK: 185,
    level: 4,
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
      _this.additionAtk.race = 0;
      _this.aspd = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = Number(new Big(Math.floor(upgrade / 2)).mul(10).valueOf());
      _this.criticalPercent = Number(
        new Big(Math.floor(upgrade / 3)).mul(0.04).valueOf()
      );

      const trueRace = [MonsterRace.BRUTE, MonsterRace.DEMI_HUMAN].includes(
        character.monster.race
      );
      if (upgrade >= 7 && trueRace) {
        _this.additionAtk.race = Number(new Big(0.15).valueOf());

        if (upgrade >= 11) {
          _this.additionAtk.race = Number(
            new Big(_this.additionAtk.race).plus(0.2).valueOf()
          );
        }
      }

      if (upgrade >= 9) {
        _this.aspd = 0.1;
      }
    },
  },
  {
    id: 1208,
    name: 'Main Gauche [4]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 43,
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
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 1205,
    name: 'Cutter [4]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 30,
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
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 1102,
    name: 'Sword [4]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 25,
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
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 28705,
    name: 'Dagger of Crimson [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    baseDef: 0,
    baseATK: 55,
    level: 3,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = Math.min(Math.max(_this.equipUpgradeValue, 0), 15);
      _this.eATK = upgrade * upgrade;
      _this.eMATK = Math.floor((upgrade * upgrade) / 2);

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 5;
      }
    },
  },
  {
    id: 13071,
    name: 'Upgrade Dagger [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 0,
    baseATK: 55,
    level: 3,
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
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade * 10;

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 5;
      }
    },
  },
  {
    id: 13090,
    name: 'Face Worm Queen Leg [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    baseDef: 0,
    baseATK: 180,
    level: 4,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 3,
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
    eMATK: 120,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 13035,
    name: 'Sandstorm [4]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 50,
    level: 2,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    hpModB: 0.05,
    spModA: 20,
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
    hit: 10,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 13454,
    name: 'Saber of Crimson [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    baseDef: 0,
    baseATK: 85,
    level: 3,
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
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = Math.min(Math.max(_this.equipUpgradeValue, 0), 15);
      _this.eATK = upgrade * upgrade;

      if (character.class.baseLv >= 70) {
        _this.eATK += Math.floor((character.class.baseLv - 70) / 10) * 5;
      }
    },
  },
  {
    id: 28706,
    name: 'Vicious Mind Dagger [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SWORD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    option1Enable: true,
    option2Enable: true,
    option3Enable: true,
    baseDef: 0,
    baseATK: 105,
    baseMATK: 50,
    level: 4,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight, ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = Math.min(Math.max(_this.equipUpgradeValue, 0), 15);
      _this.eATK = upgrade * upgrade;
      _this.eMATK = Math.floor((upgrade * upgrade) / 2);
    },
  },
  {
    id: 13017,
    name: 'Ice Pick [1]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 0,
    baseATK: 70,
    level: 4,
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
    classActives: [ClassKey.GuillotineCross, ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 1447,
    name: 'Poison Forged Spear [3]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SPEAR,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    baseDef: 0,
    baseATK: 150,
    level: 4,
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
    criRate: 10,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 21055,
    name: 'Guardian Knight Claymore [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    baseDef: 0,
    baseATK: 280,
    level: 4,
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
    criticalPercent: 0,
    criRate: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0;
      _this.additionAtk.element = 0;
      _this.additionAtk.atkPercent2 = 0.05;
      _this.criRate = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.additionAtk.class = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.eATK = Number(new Big(Math.floor(upgrade)).mul(4).valueOf());

      if (upgrade >= 9) {
        _this.criRate = 5;
        _this.criticalPercent = 0.25;

        const trueRace = [MonsterRace.UNDEAD, MonsterRace.ANGEL].includes(
          character.monster?.race
        );
        if (upgrade >= 11 && trueRace) {
          _this.additionAtk.race = Number(new Big(0.2).valueOf());
        }
      }

      if (character.bodyGear?.id === 15389 && character.garment?.id === 15389) {
        _this.eATK += 30;

        const upgradeArmor = character.bodyGear.equipUpgradeValue;
        const upgradeGarment = character.garment.equipUpgradeValue;
        if (upgrade + upgradeArmor + upgradeGarment >= 30) {
          if (
            character.monster?.element === E_Element.HOLY ||
            character.monster?.element === E_Element.UNDEAD
          ) {
            _this.additionAtk.element = 0.2;
          }
        }
      }
    },
  },
  {
    id: 21047,
    name: 'Beam Claymor-OS [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    baseDef: 0,
    baseATK: 250,
    level: 4,
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
    criRate: 5,
    aspd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0;
      _this.additionAtk.size = 0;
      _this.aspd = 0;
      const upgrade = _this.equipUpgradeValue;

      if (upgrade >= 7) {
        _this.aspd = 0.07;
        if (upgrade >= 9) {
          _this.criticalPercent = 0.15;

          if (upgrade >= 11) {
            if (
              [Scale.SMALL, Scale.MEDIUM].includes(character.monster?.scale)
            ) {
              _this.additionAtk.size = 0.2;
            }
          }
        }
      }
    },
  },
  {
    id: 610000,
    name: 'Boosting Katar [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    baseDef: 0,
    baseATK: 150,
    level: 4,
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
    aspdFlat: 0,
    acd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.GuillotineCross],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.class = 0.02;
      _this.criticalPercent = 0.03;
      _this.additionAtk.element = 0;
      _this.aspdFlat = 0;
      _this.acd = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade * 3;

      const baseLv = Math.min(Math.max(character.class.baseLv, 1), 180);
      const multipleLv = Math.floor(baseLv / 15);
      _this.eATK += multipleLv * 3;

      if (upgrade >= 7) {
        if (character.buffSkills.findIndex((f) => f.id === 134) > -1) {
          _this.criticalPercent = Number(
            new Big(_this.criticalPercent).plus(0.1).valueOf()
          );
        }

        if (upgrade >= 9) {
          _this.additionAtk.class = Number(
            new Big(_this.additionAtk.class).plus(0.1).valueOf()
          );
        }
      }

      // Attacker Booster set
      if (
        character.bodyGear?.id === 450001 &&
        character.shoes?.id === 470000 &&
        character.garment?.id === 480000 &&
        (character.leftAccessory?.id === 490004 ||
          character.rightAccessory?.id === 490004)
      ) {
        _this.aspdFlat = 2;
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.1).valueOf()
        );

        _this.additionAtk.element = Number(
          new Big(multipleLv)
            .mul(0.01)
            .plus(_this.additionAtk.element)
            .valueOf()
        );

        if (character.buffSkills.findIndex((f) => f.id === 378) > -1) {
          _this.additionAtk.element = Number(
            new Big(0.1).plus(_this.additionAtk.element).valueOf()
          );
        }
      }

      // Range Booster set
      if (
        character.bodyGear?.id === 450004 &&
        character.shoes?.id === 470003 &&
        character.garment?.id === 480003 &&
        (character.leftAccessory?.id === 490007 ||
          character.rightAccessory?.id === 490007)
      ) {
        _this.additionAtk.class = Number(
          new Big(_this.additionAtk.class).plus(0.1).valueOf()
        );
        _this.acd = 0.15;

        if (character.playerTypeAtk === 2036) {
          character.buffSkillPercent = Number(
            new Big(multipleLv)
              .mul(0.01)
              .plus(character.buffSkillPercent)
              .valueOf()
          );

          if (character.buffSkills.findIndex((f) => f.id === 378) > -1) {
            character.buffSkillPercent = Number(
              new Big(0.2).plus(character.buffSkillPercent).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 600001,
    name: 'Boosting Two-handed Sword [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.KATAR,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    baseDef: 0,
    baseATK: 250,
    level: 4,
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
    additionDef: {
      size: 0,
      element: 0,
      race: 0,
      class: 0,
    },
    eATK: 0,
    cATK: 0,
    criRate: 10,
    aspd: 0,
    aspdFlat: 0,
    acd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.hpModB = 0.03;
      _this.criticalPercent = 0;
      _this.aspd = 0;
      _this.aspdFlat = 0;
      _this.acd = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = upgrade * 3;

      const baseLv = Math.min(Math.max(character.class.baseLv, 1), 180);
      const multipleLv = Math.floor(baseLv / 15);
      _this.eATK += multipleLv * 3;

      if (upgrade >= 7) {
        if (character.buffSkills.findIndex((f) => f.id === 60) > -1) {
          _this.aspd = 0.1;
        }

        if (upgrade >= 9) {
          _this.criticalPercent = Number(
            new Big(_this.criticalPercent).plus(0.1).valueOf()
          );
        }
      }

      // Attacker Booster set
      if (
        character.bodyGear?.id === 450001 &&
        character.shoes?.id === 470000 &&
        character.garment?.id === 480000 &&
        (character.leftAccessory?.id === 490004 ||
          character.rightAccessory?.id === 490004)
      ) {
        _this.aspdFlat = 2;
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.1).valueOf()
        );

        if (character.playerTypeAtk === 2002) {
          character.buffSkillPercent = Number(
            new Big(multipleLv)
              .mul(0.02)
              .plus(character.buffSkillPercent)
              .valueOf()
          );

          if (character.buffSkills.findIndex((f) => f.id === 357) > -1) {
            character.buffSkillPercent = Number(
              new Big(0.35).plus(character.buffSkillPercent).valueOf()
            );
          }
        }
      }

      // Range Booster set
      if (
        character.bodyGear?.id === 450004 &&
        character.shoes?.id === 470003 &&
        character.garment?.id === 480003 &&
        (character.leftAccessory?.id === 490007 ||
          character.rightAccessory?.id === 490007)
      ) {
        _this.hpModB = 0.13;
        _this.acd = 0.15;
      }
    },
  },
  {
    id: 1418,
    name: 'Gungnir [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.SPEAR,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 0,
    baseATK: 120,
    level: 4,
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
    hit: 30,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 1602,
    name: 'Rod [4]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.ROD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    slot3Enable: 'CARD',
    slot4Enable: 'CARD',
    baseDef: 0,
    baseATK: 15,
    baseMATK: 30,
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
    classActives: [ClassKey.Sorcerer],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 1584,
    name: 'Chilly Spell Book [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.ROD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    baseDef: 0,
    baseATK: 100,
    baseMATK: 160,
    level: 4,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 1,
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
    eMATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    vct: 0,
    classActives: [ClassKey.Sorcerer],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;

      if (character.playerTypeAtk === 2447) {
        character.buffMagicSkillPercent = Number(
          new Big(3)
            .mul(upgrade)
            .mul(0.01)
            .plus(character.buffMagicSkillPercent)
            .valueOf()
        );
      }
    },
  },
  {
    id: 26118,
    name: 'Shadow Staff [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.ROD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    baseDef: 0,
    baseATK: 40,
    baseMATK: 155,
    level: 4,
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
    eMATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    vct: 0,
    classActives: [ClassKey.Sorcerer],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.vct = 0;
      const upgrade = _this.equipUpgradeValue;
      _this.eMATK = Number(new Big(Math.floor(upgrade / 2)).mul(10).valueOf());

      if (character.playerTypeAtk === 2446) {
        character.buffMagicSkillPercent = Number(
          new Big(Math.floor(upgrade / 3))
            .mul(0.12)
            .plus(character.buffMagicSkillPercent)
            .valueOf()
        );
      }

      if (upgrade >= 9) {
        _this.vct = 0.1;
      }
    },
  },
  {
    id: 26151,
    name: 'Rutilus Stick-OS [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.ROD,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    option1Enable: true,
    option2Enable: true,
    baseDef: 0,
    baseATK: 80,
    baseMATK: 175,
    level: 4,
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
    eMATK: 0,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    vct: 0,
    acd: 0,
    classActives: [ClassKey.Sorcerer, ClassKey.Warlock],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.vct = 0;
      _this.acd = 0;
      const upgrade = _this.equipUpgradeValue;

      if (
        character.monster.element === E_Element.NEUTRAL ||
        character.monster.element === E_Element.EARTH
      ) {
        _this.additionMAtk.element = 0.05;
      }

      if (upgrade >= 7) {
        _this.vct = 0.07;
      }

      if (upgrade >= 11) {
        _this.acd = 0.1;
      }
    },
  },
  {
    id: 540000,
    name: 'Boosting Spellbook [2]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.BOOK,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    baseDef: 0,
    baseATK: 165,
    baseMATK: 165,
    level: 4,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    aspdFlat: 0,
    classActives: [ClassKey.Sorcerer],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionMAtk.skillElement = 0;
      _this.additionMAtk.size = 0;
      _this.aspdFlat = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.eMATK = upgrade * 3;

      const baseLv = Math.min(Math.max(character.class.baseLv, 1), 180);
      const multipleLv = Math.floor(baseLv / 15);
      _this.eMATK += multipleLv * 3;

      if (upgrade >= 7) {
        if (character.elementalConverter === E_Element.NEUTRAL) {
          _this.additionMAtk.skillElement = Number(
            new Big(5).plus(0.1).valueOf()
          );
        }

        if (upgrade >= 9) {
          _this.additionMAtk.size = 0.1;
        }
      }

      // Elemental Booster set
      if (
        character.bodyGear?.id === 450002 &&
        character.shoes?.id === 470001 &&
        character.garment?.id === 480001 &&
        (character.leftAccessory?.id === 490005 ||
          character.rightAccessory?.id === 490005)
      ) {
        _this.eMATK += 20;
        _this.additionMAtk.size = Number(
          new Big(_this.additionMAtk.size).plus(0.1).valueOf()
        );

        if (character.playerTypeAtk === 2449) {
          character.buffMagicSkillPercent = Number(
            new Big(multipleLv)
              .mul(0.01)
              .plus(character.buffMagicSkillPercent)
              .valueOf()
          );
        }
      }

      // Defunct Booster set
      if (
        character.bodyGear?.id === 450003 &&
        character.shoes?.id === 470002 &&
        character.garment?.id === 480002 &&
        (character.leftAccessory?.id === 490006 ||
          character.rightAccessory?.id === 490006)
      ) {
        _this.eMATK += 20;
        _this.aspdFlat = 2;

        if (
          character.playerTypeAtk === 14 ||
          character.playerTypeAtk === 19 ||
          character.playerTypeAtk === 20
        ) {
          character.buffMagicSkillPercent = Number(
            new Big(multipleLv)
              .mul(0.02)
              .plus(character.buffMagicSkillPercent)
              .valueOf()
          );
        }
      }
    },
  },
  {
    id: 21039,
    name: `Royal Knight's Broadsword [2]`,
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.TWO_HANDED_SWORD,
    location: EquipmentLocation.BOTH_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    baseDef: 0,
    baseATK: 280,
    level: 4,
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
    vct: 0,
    classActives: [ClassKey.RuneKnight, ClassKey.RoyalGuard],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.criticalPercent = 0;
      const upgrade = _this.equipUpgradeValue;
      _this.eATK = Number(new Big(Math.floor(upgrade / 2)).mul(20).valueOf());

      if (upgrade >= 7) {
        _this.criticalPercent = 0.1;
      }
    },
  },
  {
    id: 16033,
    name: `Robot's Mechanical Arm [2]`,
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.MACE,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'CARD',
    baseDef: 0,
    baseATK: 195,
    level: 4,
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
    criRate: 20,
    criticalPercent: 0,
    penetrationPercent: 0,
    vct: 0,
    classActives: [
      ClassKey.RuneKnight,
      ClassKey.Mechanic,
      ClassKey.Genetic,
      ClassKey.ArchBishop,
      ClassKey.Sura,
    ],
    script: (character: Character2, _this: IBaseEquipment): void => {},
  },
  {
    id: 28787,
    name: 'Rotten Garden Knife [4]',
    type: EquipmentType.WEAPON,
    subType: EquipmentSubType.DAGGER,
    location: EquipmentLocation.RIGHT_HAND,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 0,
    baseATK: 10,
    level: 3,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    additionAtk: {
      size: 0.25,
      element: 0,
      race: 0,
      class: 0,
    },
    additionMAtk: {
      size: 0.25,
      element: 0,
      race: 0,
      class: 0,
      flatNamePercent: 0,
      matkPercent: 0,
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
    acd: 0.05,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.element = 0;
      if (
        character.leftHand?.id === 28787 &&
        character.comboSet.indexOf('28787') === -1
      ) {
        character.comboSet.push('28787');
        const upgrade = _this.equipUpgradeValue;

        if (upgrade >= 10) {
          const multi = upgrade - 10;
          _this.additionAtk.element = Number(
            new Big(multi).mul(0.02).valueOf()
          );
        }
      }
    },
  },
];
