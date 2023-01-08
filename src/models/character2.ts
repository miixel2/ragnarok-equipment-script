import { BaseClass } from './class';
import { IBaseEquipment } from './equipment';
import { Monster } from './monster';
import { E_Element } from './element';
import { IBuffSkill } from '../dbs/buffSkills';
import { IAtkSkill } from '../dbs/atkSkills';

class AdditionATKPercent {
  public size: number = 0; // Skeleton Worker Card
  public element: number = 0; // Vadon Card
  public race: number = 0; // Hydra Card
  public class: number = 0; // Abysmal Knight Card
  public atkPercent: number = 0; // ATK%
  public flatNamePercent: number = 0;
  public skillElement: number = 0;

  public value: number = 0;
}

class AdditionMATKPercent {
  public size: number = 0;
  public element: number = 0;
  public race: number = 0;
  public class: number = 0;
  public matkPercent: number = 0;
  public flatNamePercent: number = 0;
  public skillElement: number = 0;

  public value: number = 0;
}

class AdditionDEFPercent {
  public size: number = 0; // Ogretooth Card
  public element: number = 0; // Aqua Elemental Card
  public race: number = 0; // Teddy Bear Card
  public class: number = 0; // Alice Card

  public value: number = 0;
}

class AdditionMDEFPercent {
  public size: number = 0;
  public element: number = 0;
  public race: number = 0;
  public class: number = 0;
  public matkPercent: number = 0;
  public flatNamePercent: number = 0;
  public skillElement: number = 0;

  public value: number = 0;
}

class Weapon {
  public baseATK: number = 0;
  public baseMATK: number = 0;
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

  public itemMATK: number = 0;
  public potionMATK: number = 0;
  public skillBuffMATK: number = 0;
  public penetrationMPercent: number = 0;

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

  public maxHp: number = 0;
  public maxSp: number = 0;
  public hpModA: number = 0;
  public hpModB: number = 0;
  public spModA: number = 0;
  public spModB: number = 0;

  // ± 0.05 * WeaponLevel * BaseWeaponDamage
  public variance: number = 0;
  public varianceMin: number = 0;
  public varianceLeft: number = 0;
  public varianceMinLeft: number = 0;

  public isPhysical: boolean = true;

  // tslint:disable-next-line: max-line-length
  // FLOOR( FLOOR(( BaseWeaponATK + Variance + StatBonus + RefineUpgradeATK + OverrefineBonus + HighUpgrade ) * SERC Addition * SERC Reduction * Elemnt Multiplier * VI * EDP) * SizePenalty )
  public wATK: number = 0;
  public wAtkMin: number = 0;
  public realWATK: number = 0;
  public realWATKMin: number = 0;
  public wATKLeft: number = 0;
  public wAtkMinLeft: number = 0;
  public realWATKLeft: number = 0;
  public realWATKMinLeft: number = 0;

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
  public VI: number = 1;
  // Normal = 1, Use EDP = 4
  public edp: number = 1;
  public akm: number = 1;
  public skillSelect: IAtkSkill = null;
  public skillPercent: number = 1;
  public buffAtkPercent: number = 0;
  public buffSkillPercent: number = 1;
  public pureAtk: number = 0;
  public flatDmg: number = 0;
  // FLOOR(WATK * PE%)
  public peATK: number = 0;
  public peATKMin: number = 0;
  public peATKLeft: number = 0;
  public peATKMinLeft: number = 0;

  // BaseWeaponDamage * {STR} / 200 (Melee = STR, Range = DEX)
  public statBonus: number = 0;
  public statBonusLeft: number = 0;
  // FLOOR( ((baseLv / 4) + (STR) + (DEX/5) + (LUK / 3)) * SERC Reduction * Elemnt Multiplier * VI )
  public sATK: number = 0;

  // (SATK * 2) + WATK + PEATK + EATK + OIATK + CATK + BuffATK + MasteryATK
  public totalATK: number = 0;
  public totalAtkMin: number = 0;
  public totalATKLeft: number = 0;
  public totalAtkMinLeft: number = 0;

  public baseDef: number = 0;

  // ((4000 + HardDEF) / (4000 + HardDEF * 10))
  public hardDefPercent: number = 0;
  public penetrateDefPercent: number = 1;
  // ((1000 + HardMDEF) ÷ (1000 + HardMDEF × 10))

  // FLOOR(baseLv/2 + (VIT)/2 + (AGI)/5)
  // public softDef: number = 0;

  public finalATK: number = 0;
  public finalAtkMin: number = 0;
  public finalATKLeft: number = 0;
  public finalAtkMinLeft: number = 0;
  public criDmgPercent: number = 0;
  public meleePercent: number = 0;
  public longRangePercent: number = 0;
  public totalCriATK: number = 0;
  public totalCriAtkMin: number = 0;

  // Magic
  public sMATK: number = 0;
  public baseMDEF: number = 0;
  public varianceMagic: number = 0;
  public varianceMagicMin: number = 0;
  public hardMDefPercent: number = 0;
  public penetrateMDefPercent: number = 1;
  public extraMATK: number = 0;
  public weaponMATK: number = 0;
  public weaponMATKMin: number = 0;
  public buffMATK: number = 0;
  public sumMATK: number = 0;
  public sumMATKMin: number = 0;
  public skillMagicPercent: number = 0;
  public buffMagicSkillPercent: number = 0;
  public totailMATK: number = 0;
  public totailMATKMin: number = 0;

  public flee: number = 0;
  public hit: number = 0;
  public perfectDodge: number = 0;
  public criRate: number = 0;
  public aspd: number = 0;
  public aspdFlat: number = 0;

  public vct: number = 0;
  public fct: number = 0;
  public acd: number = 0;
  public skillCD: number = 0;

  // Classes
  public class: BaseClass = new BaseClass();
  public additionATKPercent: AdditionATKPercent = new AdditionATKPercent();
  public additionDEFPercent: AdditionDEFPercent = new AdditionDEFPercent();
  public additionMATKPercent: AdditionMATKPercent = new AdditionMATKPercent();
  public additionMDEFPercent: AdditionMDEFPercent = new AdditionMDEFPercent();
  public monster: Monster = new Monster();
  public weapon: Weapon = new Weapon();
  public weaponLeft: Weapon = new Weapon();
  public additionBuff: AdditionBuff = new AdditionBuff();
  public elementalConverter: E_Element = E_Element.NEUTRAL;
  public playerAtkLevel: number = 1;
  public playerTypeAtk: number = 0;

  // Equipments
  public upperHeadgear: IBaseEquipment = null;
  public middleHeadgear: IBaseEquipment = null;
  public lowerHeadgear: IBaseEquipment = null;
  public bodyGear: IBaseEquipment = null;
  public rightHand: IBaseEquipment = null;
  public leftHand: IBaseEquipment = null;
  public garment: IBaseEquipment = null;
  public shoes: IBaseEquipment = null;
  public rightAccessory: IBaseEquipment = null;
  public leftAccessory: IBaseEquipment = null;

  // Costume & Shadow Equipments
  public costumeUpperHeadgear: IBaseEquipment = null;
  public costumeMiddleHeadgear: IBaseEquipment = null;
  public costumeLowerHeadgear: IBaseEquipment = null;
  public shadowBodyGear: IBaseEquipment = null;
  public shadowRightHand: IBaseEquipment = null;
  public shadowLeftHand: IBaseEquipment = null;
  public costumeGarment: IBaseEquipment = null;
  public shadowShoes: IBaseEquipment = null;
  public shadowRightAccessory: IBaseEquipment = null;
  public shadowLeftAccessory: IBaseEquipment = null;

  public ignoreSizePenalty: boolean = false;

  public buffSkills: IBuffSkill[] = [];

  public comboSet: string[] = [];
}
