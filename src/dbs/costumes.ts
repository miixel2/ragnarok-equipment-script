import { garments } from './special-equipments/garments';
import { lowerHeadgear } from './special-equipments/lower-headgear';
import { middleHeadgear } from './special-equipments/middle-headgear';
import { upperHeadgear } from './special-equipments/upper-headgears';

export const costumeIds: number[] = [
  ...upperHeadgear,
  ...middleHeadgear,
  ...lowerHeadgear,
  ...garments
].map((m) => m.id);
