// @flow

import React, { useContext } from 'react';

import DraggableElementsWrapper from './DraggableElementsWrapper';
import DraggableElementPlacement from './DraggableElementPlacement';
import { DraggableElementsListStateContext } from '../constants/context';

type Props = {
  children: Function,
};

function DraggableElementsList({
  children,
}: Props) {
  const [draggableElements] = useContext(DraggableElementsListStateContext);

  return (
    <React.Fragment>
      <DraggableElementsWrapper>
        {({}) => draggableElements.map(({ returns, options }) => (
          <DraggableElementPlacement>
            {children({ returns })}
          </DraggableElementPlacement>
        ))}
      </DraggableElementsWrapper>
    </React.Fragment>
  );
}

export default DraggableElementsList;
