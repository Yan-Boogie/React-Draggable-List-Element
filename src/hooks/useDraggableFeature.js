// @flow

import React, {
  useState,
  useCallback,
  useContext,
} from 'react';
import EventEmitter from 'events';

export const START_DRAGGING = 'E/START_DRAGGING';

const DraggingCloneElementStateContext = React.createContext([]);

function DraggableFeatureProvider({ children }) {
  const [draggingElementOrder, setDraggingElementOrder] = useState(-1);

  return (
    <DraggingCloneElementStateContext.Provider
      value={[draggingElementOrder, setDraggingElementOrder]}>
      {children}
    </DraggingCloneElementStateContext.Provider>
  );
}

export default function useDraggableFeature() {
  const [
    draggingElementOrder, setDraggingElementOrder
  ] = useContext(DraggingCloneElementStateContext);

  const setCloneElement = useCallback(({
    clientX, clientY, cloneNode, elementOrder,
  }) => {
    console.log('STUFF', clientX, clientY, cloneNode, elementOrder);
  }, []);

  return {
    draggingElementOrder,
    setCloneElement,
    DraggableFeatureProvider,
  };
}
