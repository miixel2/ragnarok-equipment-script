import { IBaseEquipment } from '../models/equipment';
import { enchants } from './enchants';
import { garments } from './special-equipments/garments';
import { lowerHeadgear } from './special-equipments/lower-headgear';
import { middleHeadgear } from './special-equipments/middle-headgear';
import { shadowArmors } from './special-equipments/shadow-armors';
import { shadowEarrings } from './special-equipments/shadow-earrings';
import { shadowPendants } from './special-equipments/shadow-pendants';
import { shadowShields } from './special-equipments/shadow-shields';
import { shadowShoes } from './special-equipments/shadow-shoes';
import { shadowWeapons } from './special-equipments/shadow-weapons';
import { upperHeadgear } from './special-equipments/upper-headgears';

export const specialEquipments: IBaseEquipment[] = [
  ...upperHeadgear,
  ...middleHeadgear,
  ...lowerHeadgear,
  ...garments,
  ...enchants,
  ...shadowArmors,
  ...shadowWeapons,
  ...shadowShields,
  ...shadowShoes,
  ...shadowEarrings,
  ...shadowPendants,
];
