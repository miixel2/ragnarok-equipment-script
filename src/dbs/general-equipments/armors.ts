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
import { MonsterRace, Scale } from '../../models/monster';

export const armors: IBaseEquipment[] = [
  {
    id: 15037,
    name: `Peuz's Plate`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: false,
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 110,
    baseMDEF: 10,
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
    eATK: 20,
    cATK: 0,
    flee: 17,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.additionAtk.size = 0;
      if (
        character.garment?.id === 2575 &&
        character.shoes?.id === 2476 &&
        (character.leftAccessory?.id === 2884 ||
          character.rightAccessory?.id === 2884)
      ) {
        _this.additionAtk.size = 0.1;
        if (character.playerTypeAtk === 2002) {
          character.buffSkillPercent = Number(
            new Big(character.buffSkillPercent).plus(1).valueOf()
          );
        }
      }
    },
  },
  {
    id: 15128,
    name: 'Excelion Suit',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: false,
    slot2Enable: true,
    slot3Enable: true,
    slot4Enable: true,
    baseDef: 100,
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
    acd: 0,
    perfectDodge: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.vit = 6;
      _this.acd = 0;
      _this.perfectDodge = 0;

      const baseLv = character.class.baseLv;

      if (baseLv >= 130) {
        _this.vit += 4;
      }

      const upgrade = _this.equipUpgradeValue;
      _this.hpModB = Number(
        new Big(Math.floor(upgrade / 3)).mul(0.04).valueOf()
      );

      if (character.garment?.id === 20773) {
        _this.acd = 0.1;

        if (baseLv >= 130) {
          _this.acd = 0.2;
          _this.perfectDodge = 6;
        }
      }
    },
  },
  {
    id: 15147,
    name: 'Robe Of Vituperation [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: true,
    slot4Enable: true,
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
      _this.penetrationPercent = 0;
      _this.luk = 0;
      _this.additionAtk.class = 0;
      _this.hpModB = 0;

      if (
        [
          MonsterRace.DEMI_HUMAN,
          MonsterRace.DEMON,
          MonsterRace.UNDEAD,
        ].includes(character.monster.race)
      ) {
        _this.penetrationPercent = Number(
          new Big(_this.equipUpgradeValue).mul(0.04).valueOf()
        );
      }

      if (character.garment?.id === 2524) {
        if (
          [
            MonsterRace.DEMI_HUMAN,
            MonsterRace.DEMON,
            MonsterRace.UNDEAD,
          ].includes(character.monster.race)
        ) {
          _this.penetrationPercent = Number(
            new Big(_this.penetrationPercent).plus(0.15).valueOf()
          );
        }

        _this.hpModB = 0.1;
        _this.hpModB = Number(
          new Big(_this.equipUpgradeValue)
            .mul(0.01)
            .plus(_this.hpModB)
            .valueOf()
        );

        _this.additionAtk.class = 0.02;
        _this.additionAtk.class = Number(
          new Big(_this.equipUpgradeValue)
            .mul(0.01)
            .plus(_this.additionAtk.class)
            .valueOf()
        );
      }
    },
  },
  {
    id: 15278,
    name: 'Soaring Physical Armor [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 120,
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
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 50;
      _this.penetrationPercent = 0;
      _this.additionAtk.race = 0;
      _this.additionAtk.element = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.additionAtk.atkPercent2 = Number(
        new Big(Math.floor(upgrade / 3)).mul(0.02).valueOf()
      );

      if (upgrade >= 7) {
        if (
          character.monster.race === MonsterRace.BRUTE ||
          character.monster.race === MonsterRace.DEMON
        ) {
          _this.penetrationPercent = 0.3;
        }

        if (upgrade >= 9) {
          if (
            character.monster.race === MonsterRace.BRUTE ||
            character.monster.race === MonsterRace.DEMON
          ) {
            _this.additionAtk.race = 0.1;
          }

          if (upgrade >= 11) {
            if (
              character.monster.element === E_Element.WIND ||
              character.monster.element === E_Element.EARTH
            ) {
              _this.additionAtk.element = 0.1;
            }
          }
        }
      }

      if (character.shoes.id === 22006) {
        _this.additionAtk.atkPercent2 = Number(
          new Big(_this.additionAtk.atkPercent2).plus(0.1).valueOf()
        );

        const shoesUpgrade = character.shoes.equipUpgradeValue;
        if (upgrade + shoesUpgrade >= 21) {
          if (
            character.monster.race === MonsterRace.BRUTE ||
            character.monster.race === MonsterRace.DEMON
          ) {
            _this.penetrationPercent = Number(
              new Big(_this.penetrationPercent).plus(0.2).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 15346,
    name: 'Unexpected Fortune Armor [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 120,
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
      _this.eATK = 50;
      _this.penetrationPercent = 0;
      _this.additionAtk.race = 0;
      _this.additionAtk.element = 0;
      const upgrade = _this.equipUpgradeValue;
      _this.criticalPercent = Number(
        new Big(Math.floor(upgrade / 3)).mul(0.02).valueOf()
      );

      if (upgrade >= 7) {
        if (
          character.monster.race === MonsterRace.BRUTE ||
          character.monster.race === MonsterRace.DEMON
        ) {
          _this.penetrationPercent = 0.3;
        }

        if (upgrade >= 9) {
          if (
            character.monster.race === MonsterRace.BRUTE ||
            character.monster.race === MonsterRace.DEMON
          ) {
            _this.additionAtk.race = 0.1;
          }

          if (upgrade >= 11) {
            if (
              character.monster.element === E_Element.WIND ||
              character.monster.element === E_Element.EARTH
            ) {
              _this.additionAtk.element = 0.1;
            }
          }
        }
      }

      if (character.shoes.id === 22006) {
        _this.criticalPercent = Number(
          new Big(_this.criticalPercent).plus(0.1).valueOf()
        );

        const shoesUpgrade = character.shoes.equipUpgradeValue;
        if (upgrade + shoesUpgrade >= 21) {
          if (
            character.monster.race === MonsterRace.BRUTE ||
            character.monster.race === MonsterRace.DEMON
          ) {
            _this.penetrationPercent = Number(
              new Big(_this.penetrationPercent).plus(0.2).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 15353,
    name: 'Splendid Swift Armor [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: true,
    slot2Enable: false,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 120,
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
      _this.eATK = 50;
      _this.penetrationPercent = 0;
      _this.additionAtk.race = 0;
      _this.additionAtk.element = 0;
      _this.aspdFlat = 0;
      const upgrade = _this.equipUpgradeValue;
      _this.aspd = Number(new Big(Math.floor(upgrade / 3)).mul(0.02).valueOf());

      if (upgrade >= 7) {
        if (
          character.monster.race === MonsterRace.BRUTE ||
          character.monster.race === MonsterRace.DEMON
        ) {
          _this.penetrationPercent = 0.3;
        }

        if (upgrade >= 9) {
          if (
            character.monster.race === MonsterRace.BRUTE ||
            character.monster.race === MonsterRace.DEMON
          ) {
            _this.additionAtk.race = 0.1;
          }

          if (upgrade >= 11) {
            if (
              character.monster.element === E_Element.WIND ||
              character.monster.element === E_Element.EARTH
            ) {
              _this.additionAtk.element = 0.1;
            }
          }
        }
      }

      if (character.shoes.id === 22010) {
        _this.aspdFlat = 1;
        const shoesUpgrade = character.shoes.equipUpgradeValue;
        if (upgrade + shoesUpgrade >= 21) {
          if (
            character.monster.race === MonsterRace.BRUTE ||
            character.monster.race === MonsterRace.DEMON
          ) {
            _this.penetrationPercent = Number(
              new Big(_this.penetrationPercent).plus(0.2).valueOf()
            );
          }
        }
      }
    },
  },
  {
    id: 15383,
    name: 'Temporal Transcendent Robe [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: true,
    baseDef: 62,
    baseATK: 0,
    level: 1,
    equipUpgradeValue: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
    hpModA: 500,
    spModA: 100,
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
    eATK: 50,
    eMATK: 50,
    cATK: 0,
    acd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.acd = 0.1;

      if (character.garment?.id === 20939) {
        _this.acd = 0.2;
      }
    },
  },
  {
    id: 15388,
    name: `King Schmidt's Suit [1]`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 150,
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
    spModA: 0,
    spModB: 0,
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
    acd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      const upgrade = _this.equipUpgradeValue;
      _this.additionAtk.size = 0;
      _this.additionAtk.element = 0;
      _this.additionMAtk.size = 0;
      _this.additionMAtk.element = 0;
      _this.hpModB = 0;
      _this.spModB = 0;
      _this.acd = 0;

      if (
        character.monster?.scale === Scale.MEDIUM ||
        character.monster?.scale === Scale.LARGE
      ) {
        _this.additionAtk.size = 0.1;
        _this.additionMAtk.size = 0.1;
      }

      if (upgrade >= 7) {
        if (
          character.monster?.element === E_Element.FIRE ||
          character.monster?.element === E_Element.SHADOW
        ) {
          _this.additionAtk.element = 0.1;
          _this.additionMAtk.element = 0.1;
        }
      }

      if (character.garment?.id === 15389) {
        _this.hpModB = 0.05;
        _this.spModB = 0.05;

        const garmentRefine = character.garment.equipUpgradeValue;

        if (garmentRefine + upgrade >= 22) {
          _this.acd = 0.15;
        }
      }
    },
  },
  {
    id: 15376,
    name: 'Illusion Armor A-type [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: 'CARD',
    slot2Enable: 'ENCHANT',
    slot3Enable: 'ENCHANT',
    slot4Enable: 'ENCHANT',
    baseDef: 105,
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
    acd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 100;
      _this.aspd = 0;
      _this.acd = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.eATK = Number(
        new Big(Math.floor(upgrade / 2)).mul(10).plus(_this.eATK).valueOf()
      );

      if (upgrade >= 7) {
        _this.aspd = 0.1;
      }

      if (character.garment?.id === 20933) {
        _this.eATK += 50;
      }

      if (character.garment?.id === 20934) {
        _this.acd = 0.1;
      }
    },
  },
  {
    id: 450001,
    name: 'Attacker Booster Plate [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: 'CARD',
    baseDef: 120,
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
    acd: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 100;
      _this.acd = 0.05;

      const upgrade = _this.equipUpgradeValue;
      _this.additionAtk.atkPercent2 = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );
      _this.criticalPercent = Number(
        new Big(Math.floor(upgrade / 3)).mul(0.01).valueOf()
      );

      if (upgrade >= 7) {
        _this.eATK = 150;

        if (upgrade >= 9) {
          _this.acd = 0.1;
        }
      }
    },
  },
  {
    id: 450004,
    name: 'Range Booster Suit [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: 'CARD',
    baseDef: 100,
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
    acd: 0,
    aspd: 0,
    criticalPercent: 0,
    longRangePercent: 0,
    penetrationPercent: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eATK = 100;
      _this.acd = 0.05;

      const upgrade = _this.equipUpgradeValue;
      _this.aspd = Number(new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf());
      _this.longRangePercent = Number(
        new Big(Math.floor(upgrade / 3)).mul(0.01).valueOf()
      );

      if (upgrade >= 7) {
        _this.eATK = 150;

        if (upgrade >= 9) {
          _this.acd = 0.1;
        }
      }
    },
  },
  {
    id: 450002,
    name: 'Elemental Booster Robe [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: 'CARD',
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
    hpModA: 0,
    spModA: 0,
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
    longRangePercent: 0,
    penetrationPercent: 0,
    vct: 0,
    acd: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eMATK = 100;
      _this.acd = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.additionMAtk.matkPercent = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );

      _this.vct = Number(
        new Big(Math.floor(upgrade / 3)).mul(0.01).plus(0.05).valueOf()
      );

      if (upgrade >= 7) {
        _this.eMATK = 150;

        if (upgrade >= 9) {
          _this.acd = 0.05;
        }
      }
    },
  },
  {
    id: 450003,
    name: 'Defunct Booster Robe [1]',
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: 'CARD',
    baseDef: 90,
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
    longRangePercent: 0,
    penetrationPercent: 0,
    vct: 0,
    acd: 0,
    classActives: [],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.eMATK = 100;
      _this.acd = 0;

      const upgrade = _this.equipUpgradeValue;
      _this.additionMAtk.matkPercent = Number(
        new Big(Math.floor(upgrade / 2)).mul(0.01).valueOf()
      );

      _this.vct = Number(
        new Big(Math.floor(upgrade / 3)).mul(0.01).plus(0.05).valueOf()
      );

      if (upgrade >= 7) {
        _this.eMATK = 150;
      }

      if (upgrade >= 9) {
        _this.acd = 0.05;
      }
    },
  },
];
