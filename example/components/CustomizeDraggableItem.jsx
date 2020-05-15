// @flow

import React from 'react';
import { TRIGGERABLE_FEATURE } from '../../src/constants/classes';

import appleImage from '../apple.jpeg';

function CustomizeDraggableItem() {
  return (
    <img className={TRIGGERABLE_FEATURE} src={appleImage} alt="" style={{ width: 130 }} />
  );
}

export default CustomizeDraggableItem;
