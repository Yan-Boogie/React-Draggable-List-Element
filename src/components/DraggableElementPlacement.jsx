// @flow

import React from 'react';

type Props = {
  children: React.Node,
};

// 處理個別item drag feature
function DraggableElementPlacement({ children }: Props) {
  return (
    <div style={{ width: 130, height: 130 }}>
      {children}
    </div>
  );
}

export default DraggableElementPlacement;
