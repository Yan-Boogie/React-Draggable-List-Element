// @flow

import React, {
  useState,
  useCallback,
  useContext,
} from 'react';
import EventEmitter from 'events';

export const START_DRAGGING = 'E/START_DRAGGING';

const DraggingElementOrderStateContext = React.createContext([]);
const ClonedNodeStateContext = React.createContext([]);

function DraggableFeatureProvider({ children }) {
  const [draggingElementOrder, setDraggingElementOrder] = useState(-1);
  const [clonedNode, setClonedNode] = useState(null);

  return (
    <DraggingElementOrderStateContext.Provider
      value={[draggingElementOrder, setDraggingElementOrder]}>
      <ClonedNodeStateContext.Provider value={[clonedNode, setClonedNode]}>
        {children}
      </ClonedNodeStateContext.Provider>
    </DraggingElementOrderStateContext.Provider>
  );
}

export default function useDraggableFeature() {
  const [
    draggingElementOrder, setDraggingElementOrder,
  ] = useContext(DraggingElementOrderStateContext);

  const [clonedNode, setClonedNode] = useContext(ClonedNodeStateContext);

  const setCloneElement = useCallback(({
    clientX, clientY, nodeWillClone, elementOrder,
  }) => {
    // console.log('STUFF', clientX, clientY, nodeWillClone, elementOrder);

    const clonedElement = nodeWillClone.cloneNode(true);

    setClonedNode(clonedElement);
    setDraggingElementOrder(elementOrder);
  }, [setDraggingElementOrder, setClonedNode]);

  const removeCloneElement = useCallback(() => {
    console.log('REMOVE FIRED!!');

    setDraggingElementOrder(-1);
  }, [setDraggingElementOrder]);

  return {
    clonedNode,
    draggingElementOrder,
    setCloneElement,
    removeCloneElement,
    DraggableFeatureProvider,
  };
}
