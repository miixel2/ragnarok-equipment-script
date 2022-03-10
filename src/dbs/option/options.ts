import Big from 'big.js';
import { Character2 } from "../../models/character2";
import { E_Element } from "../../models/element";
import { EquipmentType, CompoundOn, IBaseEquipment, BaseEquipment } from "../../models/equipment";
import { MonsterRace } from '../../models/monster';
import { shadowIds } from '../costumes';

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

const prefixPhysicalText = '';
const prefixPenetrationText = 'Bypass';

const vmPhysicalId = [28706, 28008, 1450, 16041, 13455, 1400, 21016, 21011];
const temporalManteausId = [20846, 20963, 20964, 20968];
const shadowsId = shadowIds;

export const ignoreSizePenalty: IBaseEquipment = {
  id: 2000000,
  name: 'Bypass size penalty',
  type: EquipmentType.CARD,
  subType: null,
  location: null,
  compoundOn: CompoundOn.ENCHANT,
  baseDef: 0,
  baseATK: 0,
  level: 1,
  equipUpgradeValue: 0,
  str: 0,
  agi: 0,
  vit: 0,
  int: 0,
  dex: 0,
  luk: 0,
  additionAtk: {
    size: 0,
    element: 0,
    race: 0,
    class: 0,
  },
  additionDef: {
    size: 0,
    element: 0,
    race: 0,
    class: 0,
  },
  options: {
    ignoreSizePenalty: true
  },
  eATK: 0,
  cATK: 0,
  criticalPercent: 0,
  penetrationPercent: 0,
  enchantActives: [...vmPhysicalId],
  canSelectOnSlot2: true,
  script: (character: Character2, _this: IBaseEquipment): void => { }
};


const physicalElementMax = 20;
const physicalNEUTRALStartAtId = 2000001;
const generatePhysicalNEUTRAL = Array.from(Array(physicalElementMax), (x, index) => {
  const titlecase = titleCase(E_Element.NEUTRAL);
  const value = index + 1;
  const option = {};
  option[`physical${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalNEUTRALStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} property +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;
  equipment.canSelectOnSlot2 = true;

  return equipment;
});

const physicalWATERStartAtId = physicalElementMax + physicalNEUTRALStartAtId;
const generatePhysicalWATER = Array.from(Array(physicalElementMax), (x, index) => {
  const titlecase = titleCase(E_Element.WATER);
  const value = index + 1;
  const option = {};
  option[`physical${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalWATERStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} property +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;

  return equipment;
});

const physicalEARTHStartAtId = physicalElementMax + physicalWATERStartAtId;
const generatePhysicalEARTH = Array.from(Array(physicalElementMax), (x, index) => {
  const titlecase = titleCase(E_Element.EARTH);
  const value = index + 1;
  const option = {};
  option[`physical${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalEARTHStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} property +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;

  return equipment;
});

const physicalFIREStartAtId = physicalElementMax + physicalEARTHStartAtId;
const generatePhysicalFIRE = Array.from(Array(physicalElementMax), (x, index) => {
  const titlecase = titleCase(E_Element.FIRE);
  const value = index + 1;
  const option = {};
  option[`physical${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalFIREStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} property +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;

  return equipment;
});

const physicalWINDStartAtId = physicalElementMax + physicalFIREStartAtId;
const generatePhysicalWIND = Array.from(Array(physicalElementMax), (x, index) => {
  const titlecase = titleCase(E_Element.WIND);
  const value = index + 1;
  const option = {};
  option[`physical${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalWINDStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} property +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;

  return equipment;
});

const physicalPOISONStartAtId = physicalElementMax + physicalWINDStartAtId;
const generatePhysicalPOISON = Array.from(Array(physicalElementMax), (x, index) => {
  const titlecase = titleCase(E_Element.POISON);
  const value = index + 1;
  const option = {};
  option[`physical${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalPOISONStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} property +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;

  return equipment;
});

const physicalHOLYStartAtId = physicalElementMax + physicalPOISONStartAtId;
const generatePhysicalHOLY = Array.from(Array(physicalElementMax), (x, index) => {
  const titlecase = titleCase(E_Element.HOLY);
  const value = index + 1;
  const option = {};
  option[`physical${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalHOLYStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} property +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;

  return equipment;
});

const physicalSHADOWStartAtId = physicalElementMax + physicalHOLYStartAtId;
const generatePhysicalSHADOW = Array.from(Array(physicalElementMax), (x, index) => {
  const titlecase = titleCase(E_Element.SHADOW);
  const value = index + 1;
  const option = {};
  option[`physical${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalSHADOWStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} property +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;

  return equipment;
});

const physicalGHOSTStartAtId = physicalElementMax + physicalSHADOWStartAtId;
const generatePhysicalGHOST = Array.from(Array(physicalElementMax), (x, index) => {
  const titlecase = titleCase(E_Element.GHOST);
  const value = index + 1;
  const option = {};
  option[`physical${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalGHOSTStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} property +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;

  return equipment;
});

const physicalUNDEADStartAtId = physicalElementMax + physicalGHOSTStartAtId;
const generatePhysicalUNDEAD = Array.from(Array(physicalElementMax), (x, index) => {
  const titlecase = titleCase(E_Element.UNDEAD);
  const value = index + 1;
  const option = {};
  option[`physical${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalUNDEADStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} property +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;

  return equipment;
});

const weaponElementsStartAtId = physicalElementMax + physicalUNDEADStartAtId;
// const weaponElements: BaseEquipment[] = Object.keys(E_Element)
//   .map(key => E_Element[key] as E_Element)
//   .map((type, index) => {
//     const titlecase = titleCase(type);

//     const option = {};
//     option['weapenElement'] = type;

//     const equipment = new BaseEquipment();
//     equipment.id = weaponElementsStartAtId + index;
//     equipment.name = `Element: ${titlecase}`;
//     equipment.type = EquipmentType.CARD;
//     equipment.compoundOn = CompoundOn.ENCHANT;
//     equipment.enchantActives = [...vmPhysicalId];
//     equipment.options = option;
//     equipment.canSelectOnSlot2 = true;

//     return equipment;
//   });

const maxAtkPercent = 10;
const atkPercentStartAtId = 10 + weaponElementsStartAtId;
const generateatkPercent = Array.from(Array(maxAtkPercent), (x, index) => {
  const value = index + 1;
  const option = {};
  option[`atkPercent2`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = atkPercentStartAtId + index;
  equipment.name = `ATK +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;

  if (value <= 3) {
    equipment.enchantActives = [...vmPhysicalId, ...shadowsId];
  } else {
    equipment.enchantActives = [...vmPhysicalId];
  }

  return equipment;
});

const maxBossPercent = 20;
const bossPercentStartAtId = maxAtkPercent + atkPercentStartAtId;
const generatBossPercent = Array.from(Array(maxBossPercent), (x, index) => {
  const value = index + 1;
  const option = {};
  option[`physicalBossPercent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = bossPercentStartAtId + index;
  equipment.name = `${prefixPhysicalText}Boss class +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const maxNormalPercent = 20;
const normalPercentStartAtId = maxBossPercent + bossPercentStartAtId;
const generatNormalPercent = Array.from(Array(maxNormalPercent), (x, index) => {
  const value = index + 1;
  const option = {};
  option[`physicalNomalPercent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = normalPercentStartAtId + index;
  equipment.name = `${prefixPhysicalText}Normal class +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const physicalRaceMax = 20;
const physicalRaceANGELStartAtId = physicalRaceMax + normalPercentStartAtId;
const generatePhysicalRaceANGEL = Array.from(Array(physicalRaceMax), (x, index) => {
  const titlecase = titleCase(MonsterRace.ANGEL);
  const value = index + 1;
  const option = {};
  option[`physicalRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalRaceANGELStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} race +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const physicalRaceBRUTEStartAtId = physicalRaceMax + physicalRaceANGELStartAtId;
const generatePhysicalRaceBRUTE = Array.from(Array(physicalRaceMax), (x, index) => {
  const titlecase = titleCase(MonsterRace.BRUTE);
  const value = index + 1;
  const option = {};
  option[`physicalRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalRaceBRUTEStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} race +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const physicalRaceDEMI_HUMANStartAtId = physicalRaceMax + physicalRaceBRUTEStartAtId;
const generatePhysicalRaceDEMI_HUMAN = Array.from(Array(physicalRaceMax), (x, index) => {
  const titlecase = 'Demi';
  const value = index + 1;
  const option = {};
  option[`physicalRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalRaceDEMI_HUMANStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} race +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const physicalRaceDEMONStartAtId = physicalRaceMax + physicalRaceDEMI_HUMANStartAtId;
const generatePhysicalRaceDEMON = Array.from(Array(physicalRaceMax), (x, index) => {
  const titlecase = titleCase(MonsterRace.DEMON);
  const value = index + 1;
  const option = {};
  option[`physicalRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalRaceDEMONStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} race +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const physicalRaceDRAGONStartAtId = physicalRaceMax + physicalRaceDEMONStartAtId;
const generatePhysicalRaceDRAGON = Array.from(Array(physicalRaceMax), (x, index) => {
  const titlecase = titleCase(MonsterRace.DRAGON);
  const value = index + 1;
  const option = {};
  option[`physicalRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalRaceDRAGONStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} race +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const physicalRaceFISHStartAtId = physicalRaceMax + physicalRaceDRAGONStartAtId;
const generatePhysicalRaceFISH = Array.from(Array(physicalRaceMax), (x, index) => {
  const titlecase = titleCase(MonsterRace.FISH);
  const value = index + 1;
  const option = {};
  option[`physicalRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalRaceFISHStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} race +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const physicalRaceFORMLESSStartAtId = physicalRaceMax + physicalRaceFISHStartAtId;
const generatePhysicalRaceFORMLESS = Array.from(Array(physicalRaceMax), (x, index) => {
  const titlecase = titleCase(MonsterRace.FORMLESS);
  const value = index + 1;
  const option = {};
  option[`physicalRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalRaceFORMLESSStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} race +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const physicalRaceINSECTStartAtId = physicalRaceMax + physicalRaceFORMLESSStartAtId;
const generatePhysicalRaceINSECT = Array.from(Array(physicalRaceMax), (x, index) => {
  const titlecase = titleCase(MonsterRace.INSECT);
  const value = index + 1;
  const option = {};
  option[`physicalRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalRaceINSECTStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} race +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const physicalRacePLANTStartAtId = physicalRaceMax + physicalRaceINSECTStartAtId;
const generatePhysicalRacePLANT = Array.from(Array(physicalRaceMax), (x, index) => {
  const titlecase = titleCase(MonsterRace.PLANT);
  const value = index + 1;
  const option = {};
  option[`physicalRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalRacePLANTStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} race +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const physicalRacePLAYERStartAtId = physicalRaceMax + physicalRacePLANTStartAtId;
const generatePhysicalRacePLAYER = Array.from(Array(physicalRaceMax), (x, index) => {
  const titlecase = titleCase(MonsterRace.PLAYER);
  const value = index + 1;
  const option = {};
  option[`physicalRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalRacePLAYERStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} race +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const physicalRaceUNDEADStartAtId = physicalRaceMax + physicalRacePLAYERStartAtId;
const generatePhysicalRaceUNDEAD = Array.from(Array(physicalRaceMax), (x, index) => {
  const titlecase = titleCase(MonsterRace.UNDEAD);
  const value = index + 1;
  const option = {};
  option[`physicalRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = physicalRaceUNDEADStartAtId + index;
  equipment.name = `${prefixPhysicalText}${titlecase} race +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const maxPenetration = 30;
const penetrationRaceANGELStartAtId = physicalRaceMax + physicalRaceUNDEADStartAtId;
const generatePenetrationRaceANGEL = Array.from(Array(maxPenetration), (x, index) => {
  const titlecase = titleCase(MonsterRace.ANGEL);
  const value = index + 1;
  const option = {};
  option[`penetrationRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = penetrationRaceANGELStartAtId + index;
  equipment.name = `${prefixPenetrationText}: ${titlecase} +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const penetrationRaceBRUTEStartAtId = maxPenetration + penetrationRaceANGELStartAtId;
const generatePenetrationRaceBRUTE = Array.from(Array(maxPenetration), (x, index) => {
  const titlecase = titleCase(MonsterRace.BRUTE);
  const value = index + 1;
  const option = {};
  option[`penetrationRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = penetrationRaceBRUTEStartAtId + index;
  equipment.name = `${prefixPenetrationText}: ${titlecase} +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const penetrationRaceDemiHumanStartAtId = maxPenetration + penetrationRaceBRUTEStartAtId;
const generatePenetrationRaceDemiHuman = Array.from(Array(maxPenetration), (x, index) => {
  const titlecase = 'Demi';
  const value = index + 1;
  const option = {};
  option[`penetrationRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = penetrationRaceDemiHumanStartAtId + index;
  equipment.name = `${prefixPenetrationText}: ${titlecase} +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const penetrationRaceDEMONStartAtId = maxPenetration + penetrationRaceDemiHumanStartAtId;
const generatePenetrationRaceDEMON = Array.from(Array(maxPenetration), (x, index) => {
  const titlecase = titleCase(MonsterRace.DEMON);
  const value = index + 1;
  const option = {};
  option[`penetrationRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = penetrationRaceDEMONStartAtId + index;
  equipment.name = `${prefixPenetrationText}: ${titlecase} +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const penetrationRaceDRAGONStartAtId = maxPenetration + penetrationRaceDEMONStartAtId;
const generatePenetrationRaceDRAGON = Array.from(Array(maxPenetration), (x, index) => {
  const titlecase = titleCase(MonsterRace.DRAGON);
  const value = index + 1;
  const option = {};
  option[`penetrationRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = penetrationRaceDRAGONStartAtId + index;
  equipment.name = `${prefixPenetrationText}: ${titlecase} +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const penetrationRaceFISHStartAtId = maxPenetration + penetrationRaceDRAGONStartAtId;
const generatePenetrationRaceFISH = Array.from(Array(maxPenetration), (x, index) => {
  const titlecase = titleCase(MonsterRace.FISH);
  const value = index + 1;
  const option = {};
  option[`penetrationRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = penetrationRaceFISHStartAtId + index;
  equipment.name = `${prefixPenetrationText}: ${titlecase} +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const penetrationRaceFORMLESSStartAtId = maxPenetration + penetrationRaceFISHStartAtId;
const generatePenetrationRaceFORMLESS = Array.from(Array(maxPenetration), (x, index) => {
  const titlecase = titleCase(MonsterRace.FORMLESS);
  const value = index + 1;
  const option = {};
  option[`penetrationRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = penetrationRaceFORMLESSStartAtId + index;
  equipment.name = `${prefixPenetrationText}: ${titlecase} +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const penetrationRaceINSECTStartAtId = maxPenetration + penetrationRaceFORMLESSStartAtId;
const generatePenetrationRaceINSECT = Array.from(Array(maxPenetration), (x, index) => {
  const titlecase = titleCase(MonsterRace.INSECT);
  const value = index + 1;
  const option = {};
  option[`penetrationRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = penetrationRaceINSECTStartAtId + index;
  equipment.name = `${prefixPenetrationText}: ${titlecase} +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const penetrationRacePLANTStartAtId = maxPenetration + penetrationRaceINSECTStartAtId;
const generatePenetrationRacePLANT = Array.from(Array(maxPenetration), (x, index) => {
  const titlecase = titleCase(MonsterRace.PLANT);
  const value = index + 1;
  const option = {};
  option[`penetrationRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = penetrationRacePLANTStartAtId + index;
  equipment.name = `${prefixPenetrationText}: ${titlecase} +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const penetrationRacePLAYERStartAtId = maxPenetration + penetrationRacePLANTStartAtId;
const generatePenetrationRacePLAYER = Array.from(Array(maxPenetration), (x, index) => {
  const titlecase = titleCase(MonsterRace.PLAYER);
  const value = index + 1;
  const option = {};
  option[`penetrationRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = penetrationRacePLAYERStartAtId + index;
  equipment.name = `${prefixPenetrationText}: ${titlecase} +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const penetrationRaceUNDEADStartAtId = maxPenetration + penetrationRacePLAYERStartAtId;
const generatePenetrationRaceUNDEAD = Array.from(Array(maxPenetration), (x, index) => {
  const titlecase = titleCase(MonsterRace.UNDEAD);
  const value = index + 1;
  const option = {};
  option[`penetrationRace${titlecase}Percent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = penetrationRaceUNDEADStartAtId + index;
  equipment.name = `${prefixPenetrationText}: ${titlecase} +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const penetrationBossStartAtId = maxPenetration + penetrationRaceUNDEADStartAtId;
const generatePenetrationBoss = Array.from(Array(maxPenetration), (x, index) => {
  const titlecase = 'Boss';
  const value = index + 1;
  const option = {};
  option[`penetrationBossPercent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = penetrationBossStartAtId + index;
  equipment.name = `${prefixPenetrationText}: ${titlecase} class +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const penetrationNormalStartAtId = maxPenetration + penetrationBossStartAtId;
const generatePenetrationNormal = Array.from(Array(maxPenetration), (x, index) => {
  const titlecase = 'Normal';
  const value = index + 1;
  const option = {};
  option[`penetrationNormalPercent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = penetrationNormalStartAtId + index;
  equipment.name = `${prefixPenetrationText}: ${titlecase} class +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot3 = true;

  return equipment;
});

const maxEAtk = 50;
const eAtkStartAtId = maxPenetration + penetrationNormalStartAtId;
const generateeAtk = Array.from(Array(maxEAtk), (x, index) => {
  const value = index + 1;
  const option = {};
  option[`eATK`] = value;

  const equipment = new BaseEquipment();
  equipment.id = eAtkStartAtId + index;
  equipment.name = `ATK +${value}`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.options = option;
  equipment.canSelectOnSlot4 = true;

  if (value <= 15) {
    equipment.enchantActives = [...vmPhysicalId, ...shadowsId];
  } else {
    equipment.enchantActives = [...vmPhysicalId];
  }

  return equipment;
});

const maxCriPercent = 20;
const criPercentStartAtId = maxEAtk + eAtkStartAtId;
const generatCriPercent = Array.from(Array(maxCriPercent), (x, index) => {
  const value = index + 1;
  const option = {};
  option[`criticalPercent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = criPercentStartAtId + index;
  equipment.name = `CriDmg +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.options = option;
  equipment.canSelectOnSlot4 = true;

  if (value <= 5) {
    equipment.enchantActives = [...vmPhysicalId, ...shadowsId];
  } else {
    equipment.enchantActives = [...vmPhysicalId];
  }

  return equipment;
});

const maxStatus = 10;
const statusStartAt = 2;
const strStartAtId = maxCriPercent + criPercentStartAtId;
const generateStr = Array.from(Array(maxStatus).slice(statusStartAt), (x, index) => {
  const value = index + 1 + statusStartAt;
  const option = {};
  option[`str`] = value;

  const equipment = new BaseEquipment();
  equipment.id = strStartAtId + statusStartAt + index;
  equipment.name = `STR +${value}`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot4 = true;

  return equipment;
});

const agiStartAtId = maxStatus + strStartAtId;
const generateAgi = Array.from(Array(maxStatus).slice(statusStartAt), (x, index) => {
  const value = index + 1 + statusStartAt;
  const option = {};
  option[`agi`] = value;

  const equipment = new BaseEquipment();
  equipment.id = agiStartAtId + statusStartAt + index;
  equipment.name = `AGI +${value}`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot4 = true;

  return equipment;
});

const vitStartAtId = maxStatus + agiStartAtId;
const generateVit = Array.from(Array(maxStatus).slice(statusStartAt), (x, index) => {
  const value = index + 1 + statusStartAt;
  const option = {};
  option[`vit`] = value;

  const equipment = new BaseEquipment();
  equipment.id = vitStartAtId + statusStartAt + index;
  equipment.name = `VIT +${value}`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot4 = true;

  return equipment;
});

const intStartAtId = maxStatus + vitStartAtId;
const generateInt = Array.from(Array(maxStatus).slice(statusStartAt), (x, index) => {
  const value = index + 1 + statusStartAt;
  const option = {};
  option[`int`] = value;

  const equipment = new BaseEquipment();
  equipment.id = intStartAtId + statusStartAt + index;
  equipment.name = `INT +${value}`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot4 = true;

  return equipment;
});

const dexStartAtId = maxStatus + intStartAtId;
const generateDex = Array.from(Array(maxStatus).slice(statusStartAt), (x, index) => {
  const value = index + 1 + statusStartAt;
  const option = {};
  option[`dex`] = value;

  const equipment = new BaseEquipment();
  equipment.id = dexStartAtId + statusStartAt + index;
  equipment.name = `DEX +${value}`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot4 = true;

  return equipment;
});

const lukStartAtId = maxStatus + dexStartAtId;
const generateLuk = Array.from(Array(maxStatus).slice(statusStartAt), (x, index) => {
  const value = index + 1 + statusStartAt;
  const option = {};
  option[`luk`] = value;

  const equipment = new BaseEquipment();
  equipment.id = lukStartAtId + statusStartAt + index;
  equipment.name = `LUK +${value}`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...vmPhysicalId];
  equipment.options = option;
  equipment.canSelectOnSlot4 = true;

  return equipment;
});

// Temporal Manteau
const eAtkTemporalStartAtId = maxStatus + lukStartAtId;
const generateeAtkTemporal = Array.from(Array(36), (x, index) => {
  const value = index + 5;
  const option = {};
  option[`eATK`] = value;

  const equipment = new BaseEquipment();
  equipment.id = eAtkTemporalStartAtId + index;
  equipment.name = `ATK +${value}`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...temporalManteausId];
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;

  return equipment;
});

const maxAtkTemporalPercent = 6;
const atkPercentTemporalStartAtId = 36 + eAtkTemporalStartAtId;
const generateatkTemporalPercent = Array.from(Array(maxAtkTemporalPercent), (x, index) => {
  const value = index + 1;
  const option = {};
  option[`atkPercent2`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = atkPercentTemporalStartAtId + index;
  equipment.name = `ATK +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...temporalManteausId];
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;

  return equipment;
});

const criTemporalStartAtId = maxAtkTemporalPercent + atkPercentTemporalStartAtId;
const generatecriTemporal = Array.from(Array(8), (x, index) => {
  const value = index + 3;
  const option = {};
  option[`criticalPercent`] = Number((new Big(value)).div(100).valueOf());

  const equipment = new BaseEquipment();
  equipment.id = criTemporalStartAtId + index;
  equipment.name = `CriDmg +${value}%`;
  equipment.type = EquipmentType.CARD;
  equipment.compoundOn = CompoundOn.ENCHANT;
  equipment.enchantActives = [...temporalManteausId];
  equipment.options = option;
  equipment.canSelectOnSlot2 = true;

  return equipment;
});

export const allOptions: BaseEquipment[] | IBaseEquipment[] = [
  ignoreSizePenalty,
  ...generatePhysicalNEUTRAL,
  ...generatePhysicalWATER,
  ...generatePhysicalEARTH,
  ...generatePhysicalFIRE,
  ...generatePhysicalWIND,
  ...generatePhysicalPOISON,
  ...generatePhysicalHOLY,
  ...generatePhysicalSHADOW,
  ...generatePhysicalGHOST,
  ...generatePhysicalUNDEAD,
  // ...weaponElements,
  ...generateatkPercent,
  ...generatBossPercent,
  ...generatBossPercent,
  ...generatNormalPercent,
  ...generatePhysicalRaceANGEL,
  ...generatePhysicalRaceBRUTE,
  ...generatePhysicalRaceDEMI_HUMAN,
  ...generatePhysicalRaceDEMON,
  ...generatePhysicalRaceDRAGON,
  ...generatePhysicalRaceFISH,
  ...generatePhysicalRaceFORMLESS,
  ...generatePhysicalRaceINSECT,
  ...generatePhysicalRacePLANT,
  ...generatePhysicalRacePLAYER,
  ...generatePhysicalRaceUNDEAD,
  ...generatePenetrationRaceANGEL,
  ...generatePenetrationRaceBRUTE,
  ...generatePenetrationRaceDemiHuman,
  ...generatePenetrationRaceDEMON,
  ...generatePenetrationRaceDRAGON,
  ...generatePenetrationRaceFISH,
  ...generatePenetrationRaceFORMLESS,
  ...generatePenetrationRaceINSECT,
  ...generatePenetrationRacePLANT,
  ...generatePenetrationRacePLAYER,
  ...generatePenetrationRaceUNDEAD,
  ...generatePenetrationBoss,
  ...generatePenetrationNormal,
  ...generateeAtk,
  ...generatCriPercent,
  ...generateStr,
  ...generateAgi,
  ...generateVit,
  ...generateInt,
  ...generateDex,
  ...generateLuk,
  ...generateeAtkTemporal,
  ...generateatkTemporalPercent,
  ...generatecriTemporal
];
