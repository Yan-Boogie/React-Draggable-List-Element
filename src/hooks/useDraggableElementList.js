// @flow
import React from 'react';

import { DraggableElementListContext } from '../constants/context';
import { LIST_DIRECTIONS } from '../constants/options';

function DraggableListProvider({
  options,
  children,
}) {
  return (
    <DraggableElementListContext.Provider value={options}>
      {children}
    </DraggableElementListContext.Provider>
  );
}

export default function useDraggableElementList(options = {
  listDirection: LIST_DIRECTIONS.HORIZONTAL,
}) {
  console.log('options', options);

  return {
    DraggableList: ({ children }) => (
      <DraggableListProvider options={options}>
        {children}
      </DraggableListProvider>
    ),
  };
}
