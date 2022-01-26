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
  type?: 'melee' | 'range' | 'magic';
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
    type: 'melee',
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
    type: 'melee',
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
      return Number(new Big(_this.skillPercent).mul(character.class.baseLv).div(120).valueOf());
    }
  },
  {
    id: 62,
    name: 'Bowling Bash',
    type: 'melee',
    maxLevel: 10,
    classActives: [ClassKey.RuneKnight],
    level: [
      {
        level: 1,
        skillPercent: 1.4
      },
      {
        level: 2,
        skillPercent: 1.8
      },
      {
        level: 3,
        skillPercent: 2.2
      },
      {
        level: 4,
        skillPercent: 2.6
      },
      {
        level: 5,
        skillPercent: 3
      },
      {
        level: 6,
        skillPercent: 3.4
      },
      {
        level: 7,
        skillPercent: 3.8
      },
      {
        level: 8,
        skillPercent: 4.2
      },
      {
        level: 9,
        skillPercent: 4.6
      },
      {
        level: 10,
        skillPercent: 5
      }
    ],
  },
  {
    id: 2002,
    name: 'Sonic Wave',
    type: 'range',
    maxLevel: 5,
    classActives: [ClassKey.RuneKnight],
    level: [
      {
        level: 1,
        skillPercent: 6
      },
      {
        level: 2,
        skillPercent: 7
      },
      {
        level: 3,
        skillPercent: 8
      },
      {
        level: 4,
        skillPercent: 9
      },
      {
        level: 5,
        skillPercent: 10
      }
    ],
    script: (character: Character2, _this: SkillLevel): number => {
      const baseLv = new Big(character.class.baseLv - 100).div(200).plus(1);
      return Number(new Big(_this.skillPercent).mul(baseLv).valueOf());
    }
  },
];
