// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import DraggableElementsWrapper from './DraggableElementsWrapper';
import DraggableElementPlacement from './DraggableElementPlacement';
import DraggableElementPlacementChildContainer from './DraggableElementPlacementChildContainer';

type Props = {
  children: Array<React.Node>,
};

function DraggableElementList({
  children,
}: Props) {

  return (
    <React.Fragment>
      <DraggableElementsWrapper>
        {({}) => children.map(child => (
          <DraggableElementPlacementChildContainer>
            {({ floatChildContainerRef }) => (
              <DraggableElementPlacement>
                {ReactDOM.createPortal(
                  child,
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
