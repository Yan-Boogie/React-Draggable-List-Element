// @flow

import React, { useRef, useEffect } from 'react';

import useDraggableFeature from '../hooks/useDraggableFeature';

function DraggableClonedElementContainer() {
  const clonedNodeContainer = useRef();
  const { clonedNode, removeCloneElement } = useDraggableFeature();

  useEffect(() => {
    if (!clonedNode || !clonedNodeContainer.current) return () => {};

    const { current: containerNode } = clonedNodeContainer;

    const draggingNode = containerNode.insertBefore(clonedNode, null);

    function onMouseupHandler() {
      draggingNode.remove();

      removeCloneElement();
    }

    window.addEventListener('mouseup', onMouseupHandler, false);

    return () => {
      window.removeEventListener('mouseup', onMouseupHandler, false);
    };
  }, [clonedNode, removeCloneElement]);

  return (
    <div ref={clonedNodeContainer} />
  );
}

export default DraggableClonedElementContainer;
