// @flow
import React, { useState } from 'react';

import DraggableElementList from '../components/DraggableElementList';
import { DraggableElementListOptionContext, DraggableElementListStateContext } from '../constants/context';
import { LIST_DIRECTIONS } from '../constants/options';

function getElementsInitBundle(elementsBundle) {
  return elementsBundle.map((el, index) => ({
    data: {
      ...el,
    },
    isDraggableDisabled: el.isDraggableDisabled || false,
    elementOrder: index,
  }));
}

export default function useDraggableElementList(
  elementsBundle,
  options = {
    listDirection: LIST_DIRECTIONS.HORIZONTAL,
  },
) {
  const [draggableElements, setDraggableElements] = useState(getElementsInitBundle(elementsBundle));

  return {
    DraggableList: ({ children }: { children: Array<React.Node> }) => (
      <DraggableElementListOptionContext.Provider value={options}>
        <DraggableElementListStateContext.Provider
          value={[draggableElements, setDraggableElements]}>
          <DraggableElementList>
            {draggableElements.map(({ data }) => children(data))}
          </DraggableElementList>
        </DraggableElementListStateContext.Provider>
      </DraggableElementListOptionContext.Provider>
    ),
    draggableElements,
  };
}