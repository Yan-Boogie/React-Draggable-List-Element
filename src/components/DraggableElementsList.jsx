// @flow

import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { css } from 'emotion';

import DraggableElementPlacement from './DraggableElementPlacement';
import DraggableElementChildPlacementContainer from './DraggableElementChildPlacementContainer';
import { DraggableElementsListStateContext, DraggableElementsListOptionContext } from '../constants/context';
import useDraggableFeature from '../hooks/useDraggableFeature';

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
  const { DraggableFeatureProvider } = useDraggableFeature();

  return (
    <DraggableFeatureProvider>
      <div className={wrapper({ listDirection })}>
        {draggableElements.map(({ returns, options }) => (
          <DraggableElementChildPlacementContainer key={options.elementOrder}>
            {({ floatingChildContainer }) => (
              <DraggableElementPlacement
                options={options}>
                {ReactDOM.createPortal(
                  children({ returns }),
                  floatingChildContainer,
                )}
              </DraggableElementPlacement>
            )}
          </DraggableElementChildPlacementContainer>
        ))}
      </div>
    </DraggableFeatureProvider>
  );
}

export default DraggableElementsList;
