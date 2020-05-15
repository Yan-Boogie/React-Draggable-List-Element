// @flow

import React, { useState } from 'react';

import DraggableElementList from '../components/DraggableElementList';
import { DraggableElementListOptionContext, DraggableElementListStateContext } from '../constants/context';
import { LIST_DIRECTIONS } from '../constants/options';

function getElementsInitBundle(elementsBundle) {
  return elementsBundle.map((el, index) => {
    const initElement = {
      returns: {
        ...el,
      },
      options: el.draggableElementOptions ? {
        ...el.draggableElementOptions,
        isDraggableDisabled: el.draggableElementOptions.isDraggableDisabled || false,
        elementOrder: index,
      } : {
        isDraggableDisabled: false,
        elementOrder: index,
      },
    };

    delete initElement.returns.draggableElementOptions;

    return initElement;
  });
}

export default function useDraggableElementList(
  elementsBundle,
  options = {
    listDirection: LIST_DIRECTIONS.HORIZONTAL,
  },
) {
  const [draggableElements, setDraggableElements] = useState(getElementsInitBundle(elementsBundle));

  return {
    DraggableList: ({ children }: { children: Function }) => (
      <DraggableElementListOptionContext.Provider value={options}>
        <DraggableElementListStateContext.Provider
          value={[draggableElements, setDraggableElements]}>
          <DraggableElementList>
            {({ returns }) => children({ data: returns })}
          </DraggableElementList>
        </DraggableElementListStateContext.Provider>
      </DraggableElementListOptionContext.Provider>
    ),
    draggableElements,
  };
}
