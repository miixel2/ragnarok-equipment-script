export class BaseClass {
  public className: string = 'Novice';
  public classKey: string = 'Novice';

  public baseLv: number = 100;
  public jobLv: number = 1;

  public hp: number = 0;
  public sp: number = 0;

  public str0: number = 1;
  public str1: number = 0;
  public _str: number = 0;
  public agi0: number = 1;
  public agi1: number = 0;
  public _agi: number = 0;
  public vit0: number = 1;
  public vit1: number = 0;
  public _vit: number = 0;
  public int0: number = 1;
  public int1: number = 0;
  public _int: number = 0;
  public dex0: number = 1;
  public dex1: number = 0;
  public _dex: number = 0;
  public luk0: number = 1;
  public luk1: number = 0;
  public _luk: number = 0;
  public softDef: number = 0;
  public hardDEF: number = 0;
  public _hardDEF: number = 0;

  public hpJobA: number = 0;
  public hpJobB: number = 0;
  public hpModA: number = 0;
  public hpModB: number = 0;

  public spJob: number = 0;
  public spModA: number = 0;
  public spModB: number = 0;
  public transMod: number = 1;
}

export enum ClassKey {
  RuneKnight = 'RuneKnight',
  GuillotineCross = 'GuillotineCross',
  Mechanic = 'Mechanic',
  Warlock = 'Warlock',
  ArchBishop = 'ArchBishop',
  Ranger = 'Ranger',
  RoyalGuard = 'RoyalGuard',
  Genetic = 'Genetic',
  ShadowChaser = 'ShadowChaser',
  Sorcerer = 'Sorcerer',
  Sura = 'Sura',
  Minstrel = 'Minstrel',
  Wanderer = 'Wanderer',
}

export class GuillotineCross extends BaseClass {

  public className: string = 'Guillotine Cross';
  public classKey: string = ClassKey.GuillotineCross;

  public str1: number = 8;
  public agi1: number = 9;
  public vit1: number = 6;
  public int1: number = 5;
  public dex1: number = 7;
  public luk1: number = 2;

  public readonly transMod: number = 1.25;
  public readonly hpJobA: number = 1.1;
  public readonly hpJobB: number = 5;
  public hpModA: number = 0;
  public hpModB: number = 0;

  public readonly spJob: number = 4;
  public spModA: number = 0;
  public spModB: number = 0;

  constructor(data: GuillotineCross = null) {
    super();

    if (data) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          this[key] = element;
        }
      }

      this.transMod = 1.25;
      this.hpJobA = 1.1;
      this.hpJobB = 5;
      this.spJob = 4;
    }
  }
}

export class RuneKnight extends BaseClass {

  public className: string = 'Rune Knight';
  public classKey: string = ClassKey.RuneKnight;

  public str1: number = 5;
  public agi1: number = 4;
  public vit1: number = 6;
  public int1: number = 10;
  public dex1: number = 8;
  public luk1: number = 4;

  public readonly transMod: number = 1.25;
  public readonly hpJobA: number = 1.5;
  public readonly hpJobB: number = 5;
  public hpModA: number = 0;
  public hpModB: number = 0;

  public readonly spJob: number = 3;
  public spModA: number = 0;
  public spModB: number = 0;

  constructor(data: RuneKnight = null) {
    super();

    if (data) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          this[key] = element;
        }
      }

      this.transMod = 1.25;
      this.hpJobA = 1.5;
      this.hpJobB = 5;
      this.spJob = 3;
    }
  }
}
