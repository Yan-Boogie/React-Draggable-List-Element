// @flow

import React from 'react';
import { css } from 'emotion';
import { TRIGGERABLE_FEATURE } from '../constants/classes';
import { DRAGGABLE_ELEMENT_PLACEMENT } from '../constants/zIndexes';

const styles = {
  placement: {
    positition: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
  },
};

const triggerableFeatureClassName = css`
  .${TRIGGERABLE_FEATURE} {
    z-index: ${DRAGGABLE_ELEMENT_PLACEMENT + 1};
  }
`;

type Props = {
  children: React.Node,
};

// 處理個別item drag feature
function DraggableElementPlacement({ children }: Props) {
  return (
    <div style={styles.placement} className={triggerableFeatureClassName}>
      {children}
    </div>
  );
}

export default DraggableElementPlacement;
