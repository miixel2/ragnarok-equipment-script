import { equipments as Equipments } from "./dbs/equipments";
import { specialEquipments as SpecialEquipments } from "./dbs/special-equipments";
import { orderBy } from 'lodash-es';

export const equipments = orderBy([...Equipments], ['id', 'name'], ['asc', 'asc']);
export const specialEquipments = orderBy([...SpecialEquipments], ['id', 'name'], ['asc', 'asc']);
export const allEquipments = orderBy([...Equipments, ...SpecialEquipments], ['id', 'name'], ['asc', 'asc']);
export const version = require('../package.json').version;