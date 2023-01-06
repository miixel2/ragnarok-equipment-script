import Big from 'big.js';
import { Character2 } from '../models/character2';
import { ClassKey } from '../models/class';
import { E_Element } from '../models/element';

interface SkillLevel {
  level: number;
  skillPercent: number;
  hit?: number;
}

export interface IAtkSkill {
  id: number;
  name: string;
  type?: 'melee' | 'range' | 'magic';
  maxLevel: number;
  classActives?: ClassKey[];
  level: SkillLevel[];
  element?: E_Element;
  canCritical?: boolean;
  options?: {
    byPassDef?: boolean;
    byPassMDef?: boolean;
  };
  script?: (character: Character2, _this: SkillLevel) => number;
}

export const atkSkills: IAtkSkill[] = [
  {
    id: 0,
    name: 'Basic Attack',
    maxLevel: 1,
    canCritical: true,
    level: [
      {
        level: 1,
        skillPercent: 1,
      },
    ],
  },
  {
    id: 7,
    name: 'Magnum Break',
    type: 'melee',
    maxLevel: 10,
    classActives: [ClassKey.RuneKnight],
    level: [
      {
        level: 1,
        skillPercent: 1.2,
      },
      {
        level: 2,
        skillPercent: 1.4,
      },
      {
        level: 3,
        skillPercent: 1.6,
      },
      {
        level: 4,
        skillPercent: 1.8,
      },
      {
        level: 5,
        skillPercent: 2,
      },
      {
        level: 6,
        skillPercent: 2.2,
      },
      {
        level: 7,
        skillPercent: 2.4,
      },
      {
        level: 8,
        skillPercent: 2.6,
      },
      {
        level: 9,
        skillPercent: 2.8,
      },
      {
        level: 10,
        skillPercent: 3,
      },
    ],
  },
  {
    id: 2022,
    name: 'Cross Impact',
    type: 'melee',
    maxLevel: 5,
    canCritical: true,
    classActives: [ClassKey.GuillotineCross],
    level: [
      {
        level: 1,
        skillPercent: 11,
        hit: 7,
      },
      {
        level: 2,
        skillPercent: 12,
        hit: 7,
      },
      {
        level: 3,
        skillPercent: 13,
        hit: 7,
      },
      {
        level: 4,
        skillPercent: 14,
        hit: 7,
      },
      {
        level: 5,
        skillPercent: 15,
        hit: 7,
      },
    ],
    script: (character: Character2, _this: SkillLevel): number => {
      let edpBug = 1;
      if (character.edp === 4) {
        edpBug = 2;
      }

      return Number(
        new Big(_this.skillPercent)
          .mul(character.class.baseLv)
          .div(120)
          .div(edpBug)
          .valueOf()
      );
    },
  },
  {
    id: 2029,
    name: 'Counter Slash',
    type: 'melee',
    maxLevel: 10,
    options: {
      byPassDef: true,
    },
    classActives: [ClassKey.GuillotineCross],
    level: [
      {
        level: 1,
        skillPercent: 4.5,
      },
      {
        level: 2,
        skillPercent: 6,
      },
      {
        level: 3,
        skillPercent: 7.5,
      },
      {
        level: 4,
        skillPercent: 9,
      },
      {
        level: 5,
        skillPercent: 10.5,
      },
      {
        level: 6,
        skillPercent: 12,
      },
      {
        level: 7,
        skillPercent: 13.5,
      },
      {
        level: 8,
        skillPercent: 15,
      },
      {
        level: 9,
        skillPercent: 16.5,
      },
      {
        level: 10,
        skillPercent: 18,
      },
    ],
    script: (character: Character2, _this: SkillLevel): number => {
      const agi = new Big(character.class.agi0 + character.class._agi).mul(2);
      const job = new Big(character.class.jobLv).mul(4);

      let edpBug = 1;
      if (character.edp === 4) {
        edpBug = 2;
      }

      return Number(
        new Big(new Big(_this.skillPercent).mul(100))
          .mul(character.class.baseLv)
          .div(120)
          .plus(agi)
          .plus(job)
          .mul(0.01)
          .div(edpBug)
          .valueOf()
      );
    },
  },
  {
    id: 2036,
    name: 'Rolling Cutter',
    type: 'melee',
    maxLevel: 5,
    classActives: [ClassKey.GuillotineCross],
    level: [
      {
        level: 1,
        skillPercent: 1,
      },
      {
        level: 2,
        skillPercent: 1.5,
      },
      {
        level: 3,
        skillPercent: 2,
      },
      {
        level: 4,
        skillPercent: 2.5,
      },
      {
        level: 5,
        skillPercent: 3,
      },
    ],
    script: (character: Character2, _this: SkillLevel): number => {
      return Number(
        new Big(_this.skillPercent)
          .mul(character.class.baseLv)
          .div(100)
          .valueOf()
      );
    },
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
        skillPercent: 1.4,
      },
      {
        level: 2,
        skillPercent: 1.8,
      },
      {
        level: 3,
        skillPercent: 2.2,
      },
      {
        level: 4,
        skillPercent: 2.6,
      },
      {
        level: 5,
        skillPercent: 3,
      },
      {
        level: 6,
        skillPercent: 3.4,
      },
      {
        level: 7,
        skillPercent: 3.8,
      },
      {
        level: 8,
        skillPercent: 4.2,
      },
      {
        level: 9,
        skillPercent: 4.6,
      },
      {
        level: 10,
        skillPercent: 5,
      },
    ],
  },
  {
    id: 2002,
    name: 'Sonic Wave',
    type: 'range',
    maxLevel: 10,
    canCritical: true,
    classActives: [ClassKey.RuneKnight],
    level: [
      {
        level: 1,
        skillPercent: 8,
      },
      {
        level: 2,
        skillPercent: 9,
      },
      {
        level: 3,
        skillPercent: 10,
      },
      {
        level: 4,
        skillPercent: 11,
      },
      {
        level: 5,
        skillPercent: 12,
      },
      {
        level: 6,
        skillPercent: 13,
      },
      {
        level: 7,
        skillPercent: 14,
      },
      {
        level: 8,
        skillPercent: 15,
      },
      {
        level: 9,
        skillPercent: 16,
      },
      {
        level: 10,
        skillPercent: 17,
      },
    ],
    script: (character: Character2, _this: SkillLevel): number => {
      const baseLv = new Big(character.class.baseLv - 100).div(100).plus(1);
      return Number(new Big(_this.skillPercent).mul(baseLv).valueOf());
    },
  },
  {
    id: 2006,
    name: 'Ignition Break',
    type: 'melee',
    maxLevel: 5,
    canCritical: true,
    classActives: [ClassKey.RuneKnight],
    level: [
      {
        level: 1,
        skillPercent: 3,
      },
      {
        level: 2,
        skillPercent: 6,
      },
      {
        level: 3,
        skillPercent: 9,
      },
      {
        level: 4,
        skillPercent: 12,
      },
      {
        level: 5,
        skillPercent: 15,
      },
    ],
    script: (character: Character2, _this: SkillLevel): number => {
      let sumPercent = Number(
        new Big(_this.skillPercent)
          .mul(character.class.baseLv)
          .div(100)
          .valueOf()
      );

      if (character.elementalConverter === E_Element.FIRE) {
        const bonus = Number(new Big(_this.level).mul(100).div(100).valueOf());
        sumPercent = Number(new Big(sumPercent).plus(bonus).valueOf());
      }

      return sumPercent;
    },
  },
  {
    id: 2446,
    name: 'Earth Grave',
    type: 'magic',
    maxLevel: 5,
    element: E_Element.EARTH,
    classActives: [ClassKey.Sorcerer],
    level: [
      {
        level: 1,
        skillPercent: 1,
        hit: 3,
      },
      {
        level: 2,
        skillPercent: 1,
        hit: 3,
      },
      {
        level: 3,
        skillPercent: 1,
        hit: 3,
      },
      {
        level: 4,
        skillPercent: 1,
        hit: 3,
      },
      {
        level: 5,
        skillPercent: 1,
        hit: 3,
      },
    ],
    script: (character: Character2, _this: SkillLevel): number => {
      // EndowQuake_Lv
      const eq = 5;

      const set1 = new Big(_this.level).mul(
        character.class.int0 + character.class._int
      );
      const set2 = new Big(eq).mul(200);
      return Number(
        new Big(set1)
          .plus(set2)
          .mul(character.class.baseLv)
          .div(100)
          .mul(0.01)
          .valueOf()
      );
    },
  },
  {
    id: 2447,
    name: 'Diamond Dust',
    type: 'magic',
    maxLevel: 5,
    element: E_Element.WATER,
    classActives: [ClassKey.Sorcerer],
    level: [
      {
        level: 1,
        skillPercent: 1,
        hit: 5,
      },
      {
        level: 2,
        skillPercent: 1,
        hit: 5,
      },
      {
        level: 3,
        skillPercent: 1,
        hit: 5,
      },
      {
        level: 4,
        skillPercent: 1,
        hit: 5,
      },
      {
        level: 5,
        skillPercent: 1,
        hit: 5,
      },
    ],
    script: (character: Character2, _this: SkillLevel): number => {
      // Endow_Tsunami_Lv
      const et = 5;

      const set1 = new Big(_this.level).mul(
        character.class.int0 + character.class._int
      );
      const set2 = new Big(et).mul(200);
      return Number(
        new Big(set1)
          .plus(set2)
          .mul(character.class.baseLv)
          .div(100)
          .mul(0.01)
          .valueOf()
      );
    },
  },
  {
    id: 2449,
    name: 'Psychic Wave',
    type: 'magic',
    maxLevel: 5,
    classActives: [ClassKey.Sorcerer],
    level: [
      {
        level: 1,
        skillPercent: 0.7,
        hit: 1,
      },
      {
        level: 2,
        skillPercent: 1.4,
        hit: 1,
      },
      {
        level: 3,
        skillPercent: 2.1,
        hit: 1,
      },
      {
        level: 4,
        skillPercent: 2.8,
        hit: 1,
      },
      {
        level: 5,
        skillPercent: 3.5,
        hit: 1,
      },
    ],
    script: (character: Character2, _this: SkillLevel): number => {
      const set1 = new Big(_this.skillPercent).mul(
        character.class.int0 + character.class._int
      );
      const set2 = new Big(character.class.baseLv).div(100);
      return Number(new Big(set1).mul(set2).valueOf());
    },
  },
  {
    id: 2454,
    name: 'Varetyr Spear',
    type: 'magic',
    maxLevel: 10,
    element: E_Element.WIND,
    classActives: [ClassKey.Sorcerer],
    level: [
      {
        level: 1,
        skillPercent: 1,
        hit: 3,
      },
      {
        level: 2,
        skillPercent: 1,
        hit: 3,
      },
      {
        level: 3,
        skillPercent: 1,
        hit: 3,
      },
      {
        level: 4,
        skillPercent: 1,
        hit: 3,
      },
      {
        level: 5,
        skillPercent: 1,
        hit: 3,
      },
      {
        level: 6,
        skillPercent: 1,
        hit: 3,
      },
      {
        level: 7,
        skillPercent: 1,
        hit: 3,
      },
      {
        level: 8,
        skillPercent: 1,
        hit: 3,
      },
      {
        level: 9,
        skillPercent: 1,
        hit: 3,
      },
      {
        level: 10,
        skillPercent: 1,
        hit: 3,
      },
    ],
    script: (character: Character2, _this: SkillLevel): number => {
      // Lightning Loader
      const ll = 5;
      // Striking
      const striking = 5;

      const set1 = new Big(ll + striking).mul(120);
      const set2 = new Big(character.class.int0 + character.class._int)
        .div(2)
        .mul(_this.level);
      return Number(
        new Big(set1)
          .plus(set2)
          .mul(character.class.baseLv)
          .div(100)
          .mul(0.01)
          .valueOf()
      );
    },
  },
  {
    id: 2040,
    name: 'Adoramus',
    type: 'magic',
    maxLevel: 10,
    element: E_Element.HOLY,
    classActives: [ClassKey.ArchBishop],
    level: [
      {
        level: 1,
        skillPercent: 4,
        hit: 10,
      },
      {
        level: 2,
        skillPercent: 4.7,
        hit: 10,
      },
      {
        level: 3,
        skillPercent: 5.4,
        hit: 10,
      },
      {
        level: 4,
        skillPercent: 6.1,
        hit: 10,
      },
      {
        level: 5,
        skillPercent: 6.8,
        hit: 10,
      },
      {
        level: 6,
        skillPercent: 7.5,
        hit: 10,
      },
      {
        level: 7,
        skillPercent: 8.2,
        hit: 10,
      },
      {
        level: 8,
        skillPercent: 8.9,
        hit: 10,
      },
      {
        level: 9,
        skillPercent: 9.6,
        hit: 10,
      },
      {
        level: 10,
        skillPercent: 10.3,
        hit: 10,
      },
    ],
    script: (character: Character2, _this: SkillLevel): number => {
      const baseLv = new Big(character.class.baseLv).div(100);
      return Number(new Big(_this.skillPercent).mul(baseLv).valueOf());
    },
  },
];
