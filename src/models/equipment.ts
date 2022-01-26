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
  baseATK: number;
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

  additionAtk: {
    size: number,
    element: number,
    race: number,
    class: number,
    // atkPercent: number,
    atkPercent2?: number
  };

  additionDef: {
    size: number,
    element: number,
    race: number,
    class: number,
    // atkPercent: number,
    atkPercent2?: number
  };

  // options
  options?: EnchantOption;

  eATK: number;
  cATK: number;
  criticalPercent: number;
  penetrationPercent: number;

  slot1Enable?: boolean;
  slot2Enable?: boolean;
  slot3Enable?: boolean;
  slot4Enable?: boolean;

  slot1?: IBaseEquipment;
  slot2?: IBaseEquipment;
  slot3?: IBaseEquipment;
  slot4?: IBaseEquipment;

  canSelectOnSlot1?: boolean;
  canSelectOnSlot2?: boolean;
  canSelectOnSlot3?: boolean;
  canSelectOnSlot4?: boolean;

  classActives?: ClassKey[];
  enchantActives?: number[];

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
  weapenElement?: E_Element;
  atkPercent2?: number;
  matkPercent2?: number;

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
  physicalBossPercent?: number;
  physicalNomalPercent?: number;
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

  // slot4
  str?: number;
  agi?: number;
  vit?: number;
  int?: number;
  dex?: number;
  luk?: number;
  eATK?: number;
  criticalPercent?: number;
}

export class BaseEquipment implements IBaseEquipment {

  public id: number = null;
  public name: string = null;

  public type: EquipmentType = null;
  public subType: EquipmentSubType = null;
  public location: EquipmentLocation = null;
  public compoundOn: CompoundOn = null;

  public element: E_Element = E_Element.NEUTRAL;

  public baseDef: number = 0;
  public baseATK: number = 0;
  public level: 1 | 2 | 3 | 4 = 1;
  public equipUpgradeValue: number = 0;

  public hpModA: number = 0;
  public hpModB: number = 0;
  public spModA: number = 0;
  public spModB: number = 0;

  // Stat
  public str: number = 0;
  public agi: number = 0;
  public vit: number = 0;
  public int: number = 0;
  public dex: number = 0;
  public luk: number = 0;

  // Addition ATK
  public additionAtk = {
    size: 0,
    element: 0,
    race: 0,
    class: 0,
    atkPercent2: 0
  };
  // Addition DEF
  public additionDef = {
    size: 0,
    element: 0,
    race: 0,
    class: 0,
    atkPercent2: 0
  };

  public options: EnchantOption = null;

  public eATK: number = 0;
  public cATK: number = 0;
  public criticalPercent: number = 0;
  public penetrationPercent: number = 0;

  public slot1Enable: boolean = false;
  public slot2Enable: boolean = false;
  public slot3Enable: boolean = false;
  public slot4Enable: boolean = false;

  public slot1: IBaseEquipment = null;
  public slot2: IBaseEquipment = null;
  public slot3: IBaseEquipment = null;
  public slot4: IBaseEquipment = null;

  public canSelectOnSlot1: boolean = false;
  public canSelectOnSlot2: boolean = false;
  public canSelectOnSlot3: boolean = false;
  public canSelectOnSlot4: boolean = false;

  public classActives: ClassKey[] = [];
  public enchantActives: number[] = [];

  public prefix: string = null;
  public suffix: string = null;

  public script: (character: Character2, _this: IBaseEquipment) => void = null;
}

export enum EquipmentType {
  WEAPON = 'WEAPON',
  ARMOR = 'ARMOR',
  SHADOW = 'SHADOW',
  COSTUME = 'COSTUME',
  CARD = 'CARD',
  CONSUMABLE = 'CONSUMABLE',
  SHADOW_EQUIPMENT = 'SHADOW_EQUIPMENT'
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
  AXE = 'AXE',
  ROD = 'ROD',
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
  SHADOW_LEFT_ACCESSORY = 'SHADOW_LEFT_ACCESSORY'
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
  SHADOW_LEFT_ACCESSORY = 'SHADOW_LEFT_ACCESSORY'
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
