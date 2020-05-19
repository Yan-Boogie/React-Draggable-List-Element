// @flow

import React from 'react';
import { TRIGGERABLE_FEATURE, DRAGGABLE_ELEMENT } from '../../src/constants/classes';

import appleImage from '../apple.jpeg';

function CustomizeDraggableItem() {
  return (
    <div className={DRAGGABLE_ELEMENT}>
      <img src={appleImage} alt="" style={{ width: 130 }} />
      <button type="button" className={TRIGGERABLE_FEATURE} style={{ height: 10, width: 10 }}>triggerable</button>
    </div>
  );
}

export default CustomizeDraggableItem;
