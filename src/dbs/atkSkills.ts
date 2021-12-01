import Big from 'big.js';
import { Character2 } from "../models/character2";
import { ClassKey } from "../models/class";
import { E_Element } from '../models/element';

interface SkillLevel {
  level: number;
  skillPercent: number;
}

export interface IAtkSkill {
  id: number;
  name: string;
  maxLevel: number;
  classActives?: ClassKey[];
  level: SkillLevel[];
  script?: (character: Character2, _this: SkillLevel) => number;
}

export const atkSkills: IAtkSkill[] = [
  {
    id: 0,
    name: 'Basic Attact',
    maxLevel: 1,
    level: [
      {
        level: 1,
        skillPercent: 1
      }
    ]
  },
  {
    id: 2006,
    name: 'Ignition Break',
    maxLevel: 5,
    classActives: [ClassKey.RuneKnight],
    level: [
      {
        level: 1,
        skillPercent: 3
      },
      {
        level: 2,
        skillPercent: 6
      },
      {
        level: 3,
        skillPercent: 9
      },
      {
        level: 4,
        skillPercent: 12
      },
      {
        level: 5,
        skillPercent: 15
      }
    ],
    script: (character: Character2, _this: SkillLevel): number => {
      let sumPercent =  Number(new Big(_this.skillPercent).mul(character.class.baseLv).div(100).valueOf());

      if (character.elementalConverter === E_Element.FIRE) {
        const bonus = Number(new Big(_this.level).mul(100).div(100).valueOf());
        sumPercent = Number(new Big(sumPercent).plus(bonus).valueOf());
      }

      return sumPercent;
    }
  },
  {
    id: 2022,
    name: 'Cross Impact',
    maxLevel: 5,
    classActives: [ClassKey.GuillotineCross],
    level: [
      {
        level: 1,
        skillPercent: 11
      },
      {
        level: 2,
        skillPercent: 12
      },
      {
        level: 3,
        skillPercent: 13
      },
      {
        level: 4,
        skillPercent: 14
      },
      {
        level: 5,
        skillPercent: 15
      }
    ],
    script: (character: Character2, _this: SkillLevel): number => {
      // return Number(new Big(character.class.baseLv).div(120).mul(_this.skillPercent));
      return Number(new Big(_this.skillPercent).mul(character.class.baseLv).div(120));
    }
  }
];
