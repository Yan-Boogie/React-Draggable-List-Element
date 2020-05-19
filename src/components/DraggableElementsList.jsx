// @flow

import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { css } from 'emotion';

import DraggableElementsWrapper from './DraggableElementsWrapper';
import DraggableElementPlacement from './DraggableElementPlacement';
import DraggableElementChildPlacementContainer from './DraggableElementChildPlacementContainer';
import { DraggableElementsListStateContext, DraggableElementsListOptionContext } from '../constants/context';

// wrapper排序option
const wrapper = ({ listDirection }) => css`
  width: 100%;
  height: 100%;
  display: flex;
`;

type Props = {
  children: Function,
};

function DraggableElementsList({
  children,
}: Props) {
  const [draggableElements] = useContext(DraggableElementsListStateContext);
  const { listDirection } = useContext(DraggableElementsListOptionContext);

  return (
    <div className={wrapper({ listDirection })}>
      <DraggableElementsWrapper>
        {({}) => draggableElements.map(({ returns, options }) => (
          <DraggableElementChildPlacementContainer key={options.elementOrder}>
            {({ floatingChildContainer }) => (
              <DraggableElementPlacement>
                {ReactDOM.createPortal(
                  children({ returns }),
                  floatingChildContainer,
                )}
              </DraggableElementPlacement>
            )}
          </DraggableElementChildPlacementContainer>
        ))}
      </DraggableElementsWrapper>
    </div>
  );
}

export default DraggableElementsList;
