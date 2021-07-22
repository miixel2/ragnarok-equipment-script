import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { E_Element } from '../../models/element';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';
import { MonsterRace } from '../../models/monster';

export const armors: IBaseEquipment[] = [
  {
    id: 15037,
    name: `Peuz's Plate`,
    type: EquipmentType.ARMOR,
    subType: EquipmentSubType.ARMOR,
    location: EquipmentLocation.BODY,
    compoundOn: null,
    slot1Enable: false,
    slot2Enable: false,
    slot3Enable: false,
    slot4Enable: false,
    baseDef: 110,
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
    eATK: 20,
    cATK: 0,
    criticalPercent: 0,
    penetrationPercent: 0,
    script: (character: Character2, _this: IBaseEquipment): void => { }
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
      const baseLv = character.class.baseLv;

      if (baseLv >= 130) {
        _this.vit = 4;
      }
    }
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
      _this.penetrationPercent = 0;
      _this.luk = 0;

      if ([MonsterRace.DEMI_HUMAN, MonsterRace.DEMON, MonsterRace.UNDEAD].includes(character.monster.race)) {
        _this.penetrationPercent = Number((new Big(_this.equipUpgradeValue)).mul(0.04).valueOf());
      }

      if (character.garment?.id === 2519) {
        if ([MonsterRace.DEMI_HUMAN, MonsterRace.DEMON, MonsterRace.UNDEAD].includes(character.monster.race)) {
          _this.penetrationPercent = Number((new Big(_this.equipUpgradeValue)).plus(0.15).valueOf());
        }

        _this.luk = 3;
        _this.luk += _this.equipUpgradeValue * 1;
      } else if (character.garment?.id === 2524) {
        if ([MonsterRace.DEMI_HUMAN, MonsterRace.DEMON, MonsterRace.UNDEAD].includes(character.monster.race)) {
          _this.penetrationPercent = Number((new Big(_this.equipUpgradeValue)).plus(0.15).valueOf());
        }

        _this.additionAtk.atkPercent = 0.02;
        _this.additionAtk.atkPercent = Number((new Big(_this.equipUpgradeValue)).mul(0.01).valueOf());
      }
    }
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
      _this.eATK = 50;

      const upgrade = _this.equipUpgradeValue;
      _this.additionAtk.atkPercent = Math.floor(upgrade / 3) * 0.02;

      if (upgrade >= 7) {
        if (character.monster.race === MonsterRace.BRUTE || character.monster.race === MonsterRace.DEMON) {
          _this.penetrationPercent = 0.3;
        }

        if (upgrade >= 9) {
          if (character.monster.race === MonsterRace.BRUTE || character.monster.race === MonsterRace.DEMON) {
            _this.additionAtk.race = 0.1;
          }

          if (upgrade >= 11) {
            if (character.monster.element === E_Element.WIND || character.monster.element === E_Element.EARTH) {
              _this.additionAtk.element = 0.1;
            }
          }
        }
      }

      if (character.shoes.id === 22006) {
        _this.additionAtk.atkPercent = Number((new Big(_this.additionAtk.atkPercent)).plus(0.1).valueOf());

        const shoesUpgrade = character.shoes.equipUpgradeValue;
        if ((upgrade + shoesUpgrade) >= 21) {
          if (character.monster.race === MonsterRace.BRUTE || character.monster.race === MonsterRace.DEMON) {
            _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(0.2).valueOf());
          }
        }
      }
    }
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
      _this.eATK = 50;

      const upgrade = _this.equipUpgradeValue;
      _this.criticalPercent = Math.floor(upgrade / 3) * 0.02;

      if (upgrade >= 7) {
        if (character.monster.race === MonsterRace.BRUTE || character.monster.race === MonsterRace.DEMON) {
          _this.penetrationPercent = 0.3;
        }

        if (upgrade >= 9) {
          if (character.monster.race === MonsterRace.BRUTE || character.monster.race === MonsterRace.DEMON) {
            _this.additionAtk.race = 0.1;
          }

          if (upgrade >= 11) {
            if (character.monster.element === E_Element.WIND || character.monster.element === E_Element.EARTH) {
              _this.additionAtk.element = 0.1;
            }
          }
        }
      }

      if (character.shoes.id === 22006) {
        _this.criticalPercent = Number((new Big(_this.criticalPercent)).plus(0.1).valueOf());

        const shoesUpgrade = character.shoes.equipUpgradeValue;
        if ((upgrade + shoesUpgrade) >= 21) {
          if (character.monster.race === MonsterRace.BRUTE || character.monster.race === MonsterRace.DEMON) {
            _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(0.2).valueOf());
          }
        }
      }
    }
  },
];
