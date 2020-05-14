// @flow

import React from 'react';

type Props = {
  children: Function,
}

// 處理dom clone等等由整個list區域負責之drag feature
function DraggableElementsWrapper({ children }: Props) {
  return (
    <div>
      {children({})}
    </div>
  );
}

export default DraggableElementsWrapper;
