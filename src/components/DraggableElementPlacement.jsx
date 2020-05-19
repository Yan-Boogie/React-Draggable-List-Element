// @flow

import React from 'react';
import { css } from 'emotion';
import { DRAGGABLE_ELEMENT_PLACEMENT } from '../constants/zIndexes';

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
};

// 處理個別item drag feature
function DraggableElementPlacement({ children }: Props) {
  return (
    <React.Fragment>
      {children}
      <div className={placementClassName} role="button" tabIndex="-1" onMouseDown={() => console.log('placement MOUSEDOWN')}>
        <h3 className={invisibleText}>React-Draggable-Element-Placement</h3>
      </div>
    </React.Fragment>
  );
}

export default DraggableElementPlacement;
