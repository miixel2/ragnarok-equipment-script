import Big from 'big.js';
import { Character2 } from '../../models/character2';
import { ClassKey } from '../../models/class';
import { IBaseEquipment, EquipmentType, EquipmentSubType, EquipmentLocation } from '../../models/equipment';
import { MonsterType } from '../../models/monster';

export const shadowShields: IBaseEquipment[] = [
  {
    id: 24394,
    name: 'Physical Shadow Shield',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
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
    hpModA: 200,
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
      if (upgrade >= 7) {
        _this.hpModB = 0.02;

        if (upgrade >= 9) {
          _this.hpModB = 0.05;
        }
      }
    }
  },
  {
    id: 24418,
    name: 'Temporal Transcendent Shadow Shield',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
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
    script: (character: Character2, _this: IBaseEquipment): void => { }
  },
  {
    id: 24301,
    name: 'Rune Knight Shield Shadow',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
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
    classActives: [ClassKey.RuneKnight],
    script: (character: Character2, _this: IBaseEquipment): void => {
      _this.str = 0;
      _this.agi = 0;
      _this.vit = 0;
      _this.int = 0;
      _this.dex = 0;
      _this.luk = 0;
      _this.hpModB = 0;
      _this.spModB = 0;
      _this.penetrationPercent = 0;

      const shadowArmorId = character.shadowBodyGear && character.shadowBodyGear.id;
      const shadowShoesId = character.shadowShoes && character.shadowShoes.id;
      const shadowWeaponId = character.shadowRightHand && character.shadowRightHand.id;
      const shadowEarringId = character.shadowRightAccessory && character.shadowRightAccessory.id;
      const shadowPendantId = character.shadowLeftAccessory && character.shadowLeftAccessory.id;

      if (shadowArmorId === 24269 && shadowShoesId === 24256 && shadowWeaponId === 24288 && shadowEarringId === 24246 && shadowPendantId === 24250) {
        _this.str = 10;
        _this.agi = 10;
        _this.vit = 10;
        _this.int = 10;
        _this.dex = 10;
        _this.luk = 10;
        _this.hpModB = 0.05;
        _this.spModB = 0.05;
        _this.penetrationPercent = 0.5;
      }

    }
  },
  {
    id: 24053,
    name: 'Safeguard Shadow Shield',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
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
      _this.additionAtk.class = 0;

      const upgrade = _this.equipUpgradeValue;
      if (character.monster.type === MonsterType.BOSS) {
        _this.additionAtk.class = Number(new Big(0.02).valueOf());

        if (upgrade >= 7) {
          _this.additionAtk.class = Number(new Big(_this.additionAtk.class).plus(0.01).valueOf());

          if (upgrade >= 9) {
            _this.additionAtk.class = Number(new Big(_this.additionAtk.class).plus(0.01).valueOf());
          }
        }

        if (character.shadowShoes && character.shadowShoes.id === 24063) {
          _this.additionAtk.class = Number(new Big(_this.additionAtk.class).plus(0.05).valueOf());
        }
      }
    }
  },
  {
    id: 24374,
    name: 'Penetration Shadow Shield',
    type: EquipmentType.SHADOW_EQUIPMENT,
    subType: EquipmentSubType.SHADOW_SHIELD,
    location: EquipmentLocation.SHADOW_SHIELD,
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
      _this.penetrationPercent = 0.05;
      const upgrade = _this.equipUpgradeValue;

      const refinePenetration = Number((new Big(Math.floor(upgrade / 2))).mul(0.01).valueOf());
      _this.penetrationPercent = Number((new Big(_this.penetrationPercent)).plus(refinePenetration).valueOf());
    }
  },
];
