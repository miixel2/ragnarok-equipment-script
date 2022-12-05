import { garments } from './special-equipments/garments';
import { lowerHeadgear } from './special-equipments/lower-headgear';
import { middleHeadgear } from './special-equipments/middle-headgear';
import { upperHeadgear } from './special-equipments/upper-headgears';

import { shadowArmors } from './special-equipments/shadow-armors';
import { shadowShields } from './special-equipments/shadow-shields';
import { shadowWeapons } from './special-equipments/shadow-weapons';
import { shadowShoes } from './special-equipments/shadow-shoes';
import { shadowEarrings } from './special-equipments/shadow-earrings';
import { shadowPendants } from './special-equipments/shadow-pendants';

export const costumeIds: number[] = [
  ...upperHeadgear,
  ...middleHeadgear,
  ...lowerHeadgear,
  ...garments,
].map((m) => m.id);

export const shadowIds: number[] = [
  ...shadowArmors,
  ...shadowShields,
  ...shadowWeapons,
  ...shadowShoes,
  ...shadowEarrings,
  ...shadowPendants,
].map((m) => m.id);
