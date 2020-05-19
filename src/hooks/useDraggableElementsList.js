// @flow

import React, { useState } from 'react';

import DraggableElementsList from '../components/DraggableElementsList';
import { DraggableElementsListOptionContext, DraggableElementsListStateContext } from '../constants/context';
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

export default function useDraggableElementsList(
  elementsBundle,
  options = {
    listDirection: LIST_DIRECTIONS.HORIZONTAL,
  },
) {
  const [draggableElements, setDraggableElements] = useState(getElementsInitBundle(elementsBundle));

  return {
    DraggableList: ({ children }: { children: Function }) => (
      <DraggableElementsListOptionContext.Provider value={options}>
        <DraggableElementsListStateContext.Provider
          value={[draggableElements, setDraggableElements]}>
          <DraggableElementsList>
            {({ returns }) => children({ data: returns })}
          </DraggableElementsList>
        </DraggableElementsListStateContext.Provider>
      </DraggableElementsListOptionContext.Provider>
    ),
    draggableElements,
  };
}
