import { Character2 } from '../models/character2';

export const CheckItemInSlots = (
  character: Character2,
  id: number
): boolean => {
  const letCheckKeys = [
    'upperHeadgear',
    'middleHeadgear',
    'lowerHeadgear',
    'bodyGear',
    'rightHand',
    'leftHand',
    'garment',
    'shoes',
    'rightAccessory',
    'leftAccessory',
    'costumeUpperHeadgear',
    'costumeMiddleHeadgear',
    'costumeLowerHeadgear',
    'shadowBodyGear',
    'shadowRightHand',
    'shadowLeftHand',
    'costumeGarment',
    'shadowShoes',
    'shadowRightAccessory',
    'shadowLeftAccessory',
  ];

  for (const key of letCheckKeys) {
    if (
      character[key]?.id === id ||
      character[key]?.slot1?.id === id ||
      character[key]?.slot2?.id === id ||
      character[key]?.slot3?.id === id ||
      character[key]?.slot4?.id === id
    ) {
      return true;
    }
  }

  return false;
};
