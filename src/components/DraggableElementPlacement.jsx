// @flow

import React, { useCallback, useRef } from 'react';
import { css } from 'emotion';

import { DRAGGABLE_ELEMENT_PLACEMENT } from '../constants/zIndexes';
import { DRAGGABLE_ELEMENT } from '../constants/classes';
import useDraggableFeature from '../hooks/useDraggableFeature';

const placementClassName = css`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: ${DRAGGABLE_ELEMENT_PLACEMENT};
`;

const invisibleText = css`
  display: none;
`;

type Props = {
  children: React.Node,
  options: {
    isDraggableDisabled: Boolean,
    elementOrder: Number,
  },
};

// 處理個別item drag feature
function DraggableElementPlacement({ children, options }: Props) {
  const {
    isDraggableDisabled,
    elementOrder,
  } = options;

  const { draggingElementOrder, setCloneElement } = useDraggableFeature();
  const placementRef = useRef();

  const startArrange = useCallback(({ clientX, clientY }) => {
    const childPlacementNode = placementRef.current.parentNode;
    const childNode = childPlacementNode.querySelector(`.${DRAGGABLE_ELEMENT}`);

    setCloneElement({
      clientX, clientY, cloneNode: childNode, elementOrder,
    });
  }, [setCloneElement, elementOrder]);

  return (
    <React.Fragment>
      {children}
      <div ref={placementRef} className={placementClassName} role="button" tabIndex="-1" onMouseDown={startArrange}>
        <h3 className={invisibleText}>React-Draggable-Element-Placement</h3>
      </div>
    </React.Fragment>
  );
}

export default DraggableElementPlacement;
