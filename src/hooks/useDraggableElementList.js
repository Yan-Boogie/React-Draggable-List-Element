// @flow
import React from 'react';

import DraggableElementList from '../components/DraggableElementList';
import { DraggableElementListContext } from '../constants/context';
import { LIST_DIRECTIONS } from '../constants/options';

function DraggableListProvider({
  options,
  children,
}) {
  return (
    <DraggableElementListContext.Provider value={options}>
      <DraggableElementList>
        {children}
      </DraggableElementList>
    </DraggableElementListContext.Provider>
  );
}

export default function useDraggableElementList(options = {
  listDirection: LIST_DIRECTIONS.HORIZONTAL,
}) {
  return {
    DraggableList: ({ children }) => (
      <DraggableListProvider options={options}>
        {children}
      </DraggableListProvider>
    ),
  };
}
