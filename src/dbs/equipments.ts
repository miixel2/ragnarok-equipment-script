import { accessories } from './general-equipments/accessories';
import { armors } from './general-equipments/armors';
import { cards } from './general-equipments/cards';
import { enchants } from './enchants';
import { garments } from './general-equipments/garments';
import { lowerHeadgear } from './general-equipments/lower-headgear';
import { middleHeadgear } from './general-equipments/middle-headgear';
import { shoes } from './general-equipments/shoes';
import { upperHeadgear } from './general-equipments/upper-headgear';
import { weapons } from './general-equipments/weapons';
import { IBaseEquipment } from '../models/equipment';

export const equipments: IBaseEquipment[] = [
  ...upperHeadgear,
  ...middleHeadgear,
  ...lowerHeadgear,
  ...armors,
  ...weapons,
  ...garments,
  ...shoes,
  ...cards,
  ...accessories,
  ...enchants
];
