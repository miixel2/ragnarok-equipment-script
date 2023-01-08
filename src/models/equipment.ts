import { E_Element } from './element';
import { Character2 } from './character2';
import { ClassKey } from './class';

export interface IBaseEquipment {
  id: number;
  name: string;

  type: EquipmentType;
  subType: EquipmentSubType;
  location: EquipmentLocation;
  compoundOn: CompoundOn;

  element?: E_Element;

  baseDef: number;
  baseMDEF?: number;
  baseATK: number;
  baseMATK?: number;
  level: 1 | 2 | 3 | 4;
  equipUpgradeValue: number;

  hpModA?: number;
  hpModB?: number;
  spModA?: number;
  spModB?: number;

  str: number;
  agi: number;
  vit: number;
  int: number;
  dex: number;
  luk: number;

  hit?: number;
  criRate?: number;
  aspd?: number;
  aspdFlat?: number;
  flee?: number;
  perfectDodge?: number;

  vct?: number;
  fct?: number;
  acd?: number;
  skillCD?: number;

  additionAtk: {
    size: number;
    element: number;
    race: number;
    class: number;
    atkPercent2?: number;
    flatNamePercent?: number;
  };

  additionDef: {
    size: number;
    element: number;
    race: number;
    class: number;
    atkPercent2?: number;
  };

  additionMAtk?: {
    size: number;
    element: number;
    race: number;
    class: number;
    matkPercent: number;
    flatNamePercent: number;
    skillElement: number;
  };

  additionMDef?: {
    size: number;
    element: number;
    race: number;
    class: number;
    matkPercent: number;
    flatNamePercent: number;
    skillElement: number;
  };

  // options
  options?: EnchantOption;

  eATK: number;
  eMATK?: number;
  cATK: number;
  cMATK?: number;
  criticalPercent: number;
  meleePercent?: number;
  longRangePercent?: number;
  penetrationPercent: number;
  penetrationMPercent?: number;

  slot1Enable?: boolean | 'CARD' | 'ENCHANT';
  slot2Enable?: boolean | 'CARD' | 'ENCHANT';
  slot3Enable?: boolean | 'CARD' | 'ENCHANT';
  slot4Enable?: boolean | 'CARD' | 'ENCHANT';

  slot1?: IBaseEquipment;
  slot2?: IBaseEquipment;
  slot3?: IBaseEquipment;
  slot4?: IBaseEquipment;

  canSelectOnSlot_1?: {
    actives: number[];
  };
  canSelectOnSlot_2?: {
    actives: number[];
  };
  canSelectOnSlot_3?: {
    actives: number[];
  };
  canSelectOnSlot_4?: {
    actives: number[];
  };

  option1Enable?: boolean;
  option2Enable?: boolean;
  option3Enable?: boolean;

  option1?: IBaseEquipment;
  option2?: IBaseEquipment;
  option3?: IBaseEquipment;

  canSelectOnOption_1?: {
    actives: number[];
  };
  canSelectOnOption_2?: {
    actives: number[];
  };
  canSelectOnOption_3?: {
    actives: number[];
  };

  classActives?: ClassKey[];

  prefix?: string;
  suffix?: string;

  script: (character: Character2, _this: IBaseEquipment) => void;
}

export interface EnchantOption {
  // slot2
  ignoreSizePenalty?: boolean;
  physicalNeutralPercent?: number;
  physicalWaterPercent?: number;
  physicalEarthPercent?: number;
  physicalFirePercent?: number;
  physicalWindPercent?: number;
  physicalPoisonPercent?: number;
  physicalHolyPercent?: number;
  physicalShadowPercent?: number;
  physicalGhostPercent?: number;
  physicalUndeadPercent?: number;
  magicalNeutralPercent?: number;
  magicalWaterPercent?: number;
  magicalEarthPercent?: number;
  magicalFirePercent?: number;
  magicalWindPercent?: number;
  magicalPoisonPercent?: number;
  magicalHolyPercent?: number;
  magicalShadowPercent?: number;
  magicalGhostPercent?: number;
  magicalUndeadPercent?: number;
  weapenElement?: E_Element;
  atkPercent2?: number;
  matkPercent?: number;

  // slot3
  physicalRaceAngelPercent?: number;
  physicalRaceBrutePercent?: number;
  physicalRaceDemiHumanPercent?: number;
  physicalRaceDemonPercent?: number;
  physicalRaceDragonPercent?: number;
  physicalRaceFishPercent?: number;
  physicalRaceFormlessPercent?: number;
  physicalRaceInsectPercent?: number;
  physicalRacePlantPercent?: number;
  physicalRacePlayerPercent?: number;
  physicalRaceUndeadPercent?: number;
  magicalRaceAngelPercent?: number;
  magicalRaceBrutePercent?: number;
  magicalRaceDemiHumanPercent?: number;
  magicalRaceDemonPercent?: number;
  magicalRaceDragonPercent?: number;
  magicalRaceFishPercent?: number;
  magicalRaceFormlessPercent?: number;
  magicalRaceInsectPercent?: number;
  magicalRacePlantPercent?: number;
  magicalRacePlayerPercent?: number;
  magicalRaceUndeadPercent?: number;

  physicalBossPercent?: number;
  physicalNomalPercent?: number;
  magicalBossPercent?: number;
  magicalNomalPercent?: number;

  physicalSmallPercent?: number;
  physicalMediumPercent?: number;
  physicalLargePercent?: number;
  magicalSmallPercent?: number;
  magicalMediumPercent?: number;
  magicalLargePercent?: number;

  penetrationRaceAngelPercent?: number;
  penetrationRaceBrutePercent?: number;
  penetrationRaceDemiHumanPercent?: number;
  penetrationRaceDemonPercent?: number;
  penetrationRaceDragonPercent?: number;
  penetrationRaceFishPercent?: number;
  penetrationRaceFormlessPercent?: number;
  penetrationRaceInsectPercent?: number;
  penetrationRacePlantPercent?: number;
  penetrationRacePlayerPercent?: number;
  penetrationRaceUndeadPercent?: number;
  penetrationBossPercent?: number;
  penetrationNormalPercent?: number;
  penetrationMRaceAngelPercent?: number;
  penetrationMRaceBrutePercent?: number;
  penetrationMRaceDemiHumanPercent?: number;
  penetrationMRaceDemonPercent?: number;
  penetrationMRaceDragonPercent?: number;
  penetrationMRaceFishPercent?: number;
  penetrationMRaceFormlessPercent?: number;
  penetrationMRaceInsectPercent?: number;
  penetrationMRacePlantPercent?: number;
  penetrationMRacePlayerPercent?: number;
  penetrationMRaceUndeadPercent?: number;
  penetrationMBossPercent?: number;
  penetrationMNormalPercent?: number;

  // slot4
  str?: number;
  agi?: number;
  vit?: number;
  int?: number;
  dex?: number;
  luk?: number;
  eATK?: number;
  eMATK?: number;
  criticalPercent?: number;
  longRangePercent?: number;
  vct?: number;
  acd?: number;
  criRate?: number;
  aspd?: number;
  aspdFlat?: number;

  meleePercent?: number;
  flee?: number;
  hit?: number;
  perfectDodge?: number;
  fct?: number;
  skillCD?: number;
}

export enum EquipmentType {
  WEAPON = 'WEAPON',
  ARMOR = 'ARMOR',
  SHADOW = 'SHADOW',
  COSTUME = 'COSTUME',
  CARD = 'CARD',
  CONSUMABLE = 'CONSUMABLE',
  SHADOW_EQUIPMENT = 'SHADOW_EQUIPMENT',
}

export enum EquipmentSubType {
  BARE_HANDED = 'BARE_HANDED',
  HELM = 'HELM',
  ARMOR = 'ARMOR',
  SHIELD = 'SHIELD',
  SWORD = 'SWORD',
  TWO_HANDED_SWORD = 'TWO_HANDED_SWORD',
  DAGGER = 'DAGGER',
  KATAR = 'KATAR',
  MACE = 'MACE',
  SPEAR = 'SPEAR',
  TWO_HANDED_SPEAR = 'TWO_HANDED_SPEAR',
  AXE = 'AXE',
  TWO_HANDED_AXE = 'TWO_HANDED_AXE',
  ROD = 'ROD',
  TWO_HANDED_ROD = 'TWO_HANDED_ROD',
  BOW = 'BOW',
  BOOK = 'BOOK',
  KNUCKLE = 'KNUCKLE',
  INSTRUMENT = 'INSTRUMENT',
  WHIP = 'WHIP',
  GUN = 'GUN',
  HUUMA_SHURIKEN = 'HUUMA_SHURIKEN',
  GARMENT = 'GARMENT',
  SHOES = 'SHOES',
  ACCESSORY = 'ACCESSORY',
  COSTUME_HELM = 'COSTUME_HELM',
  COSTUME_GARMENT = 'COSTUME_GARMENT',
  SHADOW_ARMOR = 'SHADOW_ARMOR',
  SHADOW_WEAPON = 'SHADOW_WEAPON',
  SHADOW_SHIELD = 'SHADOW_SHIELD',
  SHADOW_SHOES = 'SHADOW_SHOES',
  SHADOW_RIGHT_ACCESSORY = 'SHADOW_RIGHT_ACCESSORY',
  SHADOW_LEFT_ACCESSORY = 'SHADOW_LEFT_ACCESSORY',
}

export enum EquipmentLocation {
  UPPER_HEADGEAR = 'UPPER_HEADGEAR',
  MIDDLE_HEADGEAR = 'MIDDLE_HEADGEAR',
  LOWER_HEADGEAR = 'LOWER_HEADGEAR',
  BODY = 'BODY',
  RIGHT_HAND = 'RIGHT_HAND',
  LEFT_HAND = 'LEFT_HAND',
  BOTH_HAND = 'BOTH_HAND',
  GARMENT = 'GARMENT',
  SHOES = 'SHOES',
  ACCESSORY = 'ACCESSORY',
  RIGHT_ACCESSORY = 'RIGHT_ACCESSORY',
  LEFT_ACCESSORY = 'LEFT_ACCESSORY',
  COSTUME_UPPER_HEADGEAR = 'COSTUME_UPPER_HEADGEAR',
  COSTUME_MIDDLE_HEADGEAR = 'COSTUME_MIDDLE_HEADGEAR',
  COSTUME_LOWER_HEADGEAR = 'COSTUME_LOWER_HEADGEAR',
  COSTUME_GARMENT = 'COSTUME_GARMENT',
  SHADOW_ARMOR = 'SHADOW_ARMOR',
  SHADOW_WEAPON = 'SHADOW_WEAPON',
  SHADOW_SHIELD = 'SHADOW_SHIELD',
  SHADOW_SHOES = 'SHADOW_SHOES',
  SHADOW_RIGHT_ACCESSORY = 'SHADOW_RIGHT_ACCESSORY',
  SHADOW_LEFT_ACCESSORY = 'SHADOW_LEFT_ACCESSORY',
}

export enum CompoundOn {
  HEADER_GEAR = 'HEADER_GEAR',
  WEAPON = 'WEAPON',
  ARMOR = 'ARMOR',
  SHIELD = 'SHIELD',
  GARMENT = 'GARMENT',
  SHOES = 'SHOES',
  ACCESSORY = 'ACCESSORY',
  RIGHT_ACCESSORY = 'RIGHT_ACCESSORY',
  LEFT_ACCESSORY = 'LEFT_ACCESSORY',
  ENCHANT = 'ENCHANT',
  ESSENCE = 'ESSENCE',
}
