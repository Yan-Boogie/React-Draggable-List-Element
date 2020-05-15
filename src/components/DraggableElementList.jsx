// @flow

import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import DraggableElementsWrapper from './DraggableElementsWrapper';
import DraggableElementPlacement from './DraggableElementPlacement';
import DraggableElementPlacementChildContainer from './DraggableElementPlacementChildContainer';
import { DraggableElementListStateContext } from '../constants/context';

type Props = {
  children: Function,
};

function DraggableElementList({
  children,
}: Props) {
  const [draggableElements] = useContext(DraggableElementListStateContext);

  return (
    <React.Fragment>
      <DraggableElementsWrapper>
        {({}) => draggableElements.map(({ returns, options }) => (
          <DraggableElementPlacementChildContainer key={options.elementOrder}>
            {({ floatChildContainerRef }) => (
              <DraggableElementPlacement>
                {ReactDOM.createPortal(
                  children({ returns }),
                  floatChildContainerRef,
                )}
              </DraggableElementPlacement>
            )}
          </DraggableElementPlacementChildContainer>
        ))}
      </DraggableElementsWrapper>
    </React.Fragment>
  );
}

export default DraggableElementList;
