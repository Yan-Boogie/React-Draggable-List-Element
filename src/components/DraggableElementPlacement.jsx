// @flow

import React from 'react';

const styles = {
  placement: {
    positition: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
  },
};

type Props = {
  children: React.Node,
};

// 處理個別item drag feature
function DraggableElementPlacement({ children }: Props) {
  return (
    <div style={styles.placement}>
      {children}
    </div>
  );
}

export default DraggableElementPlacement;
