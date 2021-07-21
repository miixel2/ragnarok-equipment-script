import { BaseClass, RuneKnight } from './class';
import { BaseEquipment } from './equipment';
import { Monster } from './monster';
import { E_Element } from './element';

class AdditionATKPercent {
  public size: number = 0; // Skeleton Worker Card
  public element: number = 0; // Vadon Card
  public race: number = 0; // Hydra Card
  public class: number = 0; // Abysmal Knight Card
  public atkPercent: number = 0; // ATK%

  public value: number = 0;
}

class AdditionDEFPercent {
  public size: number = 0; // Ogretooth Card
  public element: number = 0; // Aqua Elemental Card
  public race: number = 0; // Teddy Bear Card
  public class: number = 0; // Alice Card

  public value: number = 0;
}

class Weapon {

  public baseATK: number = 0;
  public level: 1 | 2 | 3 | 4 = 1;
  public equipUpgradeValue: number = 0;

  // Calculate
  public refineSafe: number = 0;
  public overRefineValue: number = 0;
  public overRefineBonus: number = 0;
  public refineUpgradeATK: number = 0;
  public highUpgrade: number = 0;
}

class AdditionBuff {
  public itemATK: number = 0;
  public potionATK: number = 0;
  public skillBuffATK: number = 0;
  public skillMastery: number = 0;
  public penetrationPercent: number = 0;

  constructor(data: AdditionBuff = null) {
    if (data) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          this[key] = element;
        }
      }
    }
  }
}

export class Character2 {

  public id: number = null;

  // ± 0.05 * WeaponLevel * BaseWeaponDamage
  public variance: number = 0;
  public varianceMin: number = 0;

  // tslint:disable-next-line: max-line-length
  // FLOOR( FLOOR(( BaseWeaponATK + Variance + StatBonus + RefineUpgradeATK + OverrefineBonus + HighUpgrade ) * SERC Addition * SERC Reduction * Elemnt Multiplier * VI * EDP) * SizePenalty )
  public wATK: number = 0;
  public wAtkMin: number = 0;

  // FLOOR( (ของบวกATK) * SERC Addition * SERC Reduction * Elemnt Multiplier * VI * EDP )
  public eATK: number = 0;

  // FLOOR( (Target_Hard_DEF / 2) * SERC Addition * SERC Reduction * Elemnt Multiplier * VI * EDP )
  public OIATK: number = 0;

  // FLOOR( (ยาบวกATK) * SERC Addition * SERC Reduction * Elemnt Multiplier * VI * EDP )
  public cATK: number = 0;

  // FLOOR( (สกิลBuffATK) * SERC Addition * SERC Reduction * Elemnt Multiplier * VI * EDP )
  public buffATK: number = 0;

  // FLOOR( SkillMastery * SERC Reduction * Elemnt Multiplier * VI )
  public masteryATK: number = 0;

  // Normal = 1, Venom Impression = 1.5
  public VI: 1 | 1.5 = 1;
  // Normal = 1, Use EDP = 4
  public edp: 1 | 4 = 1;
  public akm: 1 | 1.2 = 1;
  // FLOOR(WATK * PE%)
  public peATK: number = 0;

  // BaseWeaponDamage * {STR} / 200 (Melee = STR, Range = DEX)
  public statBonus: number = 0;
  // FLOOR( ((baseLv / 4) + (STR) + (DEX/5) + (LUK / 3)) * SERC Reduction * Elemnt Multiplier * VI )
  public sATK: number = 0;

  // (SATK * 2) + WATK + PEATK + EATK + OIATK + CATK + BuffATK + MasteryATK
  public totalATK: number = 0;
  public totalAtkMin: number = 0;

  // ((4000 + HardDEF) / (4000 + HardDEF × 10))
  public hardDefPercent: number = 0;
  public penetrateDefPercent: number = 1;

  // FLOOR(baseLv/2 + (VIT)/2 + (AGI)/5)
  // public softDef: number = 0;

  public finalATK: number = 0;
  public finalAtkMin: number = 0;
  public criDmgPercent: number = 0;
  public totalCriATK: number = 0;
  public totalCriAtkMin: number = 0;

  // Classes
  public class: BaseClass = new RuneKnight();
  public additionATKPercent: AdditionATKPercent = new AdditionATKPercent();
  public additionDEFPercent: AdditionDEFPercent = new AdditionDEFPercent();
  public monster: Monster = new Monster();
  public weapon: Weapon = new Weapon();
  public additionBuff: AdditionBuff = new AdditionBuff();
  public elementalConverter: E_Element = E_Element.NEUTRAL;

  // Equipments
  public upperHeadgear: BaseEquipment = null;
  public middleHeadgear: BaseEquipment = null;
  public lowerHeadgear: BaseEquipment = null;
  public bodyGear: BaseEquipment = null;
  public rightHand: BaseEquipment = null;
  public leftHand: BaseEquipment = null;
  public garment: BaseEquipment = null;
  public shoes: BaseEquipment = null;
  public rightAccessory: BaseEquipment = null;
  public leftAccessory: BaseEquipment = null;

  // Costume & Shadow Equipments
  public costumeUpperHeadgear: BaseEquipment = null;
  public costumeMiddleHeadgear: BaseEquipment = null;
  public costumeLowerHeadgear: BaseEquipment = null;
  public shadowBodyGear: BaseEquipment = null;
  public shadowRightHand: BaseEquipment = null;
  public shadowLeftHand: BaseEquipment = null;
  public costumeGarment: BaseEquipment = null;
  public shadowShoes: BaseEquipment = null;
  public shadowRightAccessory: BaseEquipment = null;
  public shadowLeftAccessory: BaseEquipment = null;
}
