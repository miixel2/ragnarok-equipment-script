import { E_Element } from './element';

export enum MonsterRace {
  ANGEL = 'ANGEL',
  BRUTE = 'BRUTE',
  DEMI_HUMAN = 'DEMI_HUMAN',
  DEMON = 'DEMON',
  DRAGON = 'DRAGON',
  FISH = 'FISH',
  FORMLESS = 'FORMLESS',
  INSECT = 'INSECT',
  PLANT = 'PLANT',
  PLAYER = 'PLAYER',
  UNDEAD = 'UNDEAD'
}

export enum Scale {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE'
}

export enum MonsterType {
  NORMAL = 'NORMAL',
  BOSS = 'BOSS'
}

export class Monster {
  public id: number = 0;
  public name: string = '';
  public dbname: string = '';
  public level: number = 0;
  public def: number = 0;
  public vit: number = 0;
  public softDEF: number = 0;
  public type: MonsterType = MonsterType.NORMAL;
  public race: MonsterRace = MonsterRace.FORMLESS;
  public element: E_Element = E_Element.NEUTRAL;
  public elementLv: 1 | 2 | 3 | 4 = 1;
  public scale: Scale = Scale.MEDIUM;
  public health: number = 0;
  public baseExperience: number = 0;
  public jobExperience: number = 0;
  public hit: number = 0;

  public elementMultiplier: number = 1;
  public sizePenalty: 0.5 | 0.75 | 1 = 1;
  public sizePenaltyLeft: 0.5 | 0.75 | 1 = 1;
}
