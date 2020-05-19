// @flow

import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import { css } from 'emotion';
import EventEmitter from 'events';

import { TRIGGERABLE_FEATURE } from '../constants/classes';
import { DRAGGABLE_ELEMENT_PLACEMENT } from '../constants/zIndexes';

type Props = {
  children: Function,
}

const childContainer = css`
  position: relative;
`;

const triggerableFeatureClassName = css`
  .${TRIGGERABLE_FEATURE} {
    z-index: ${DRAGGABLE_ELEMENT_PLACEMENT + 1};
    position: relative;
  }
`;

function DraggableElementChildPlacementContainer({ children }: Props) {
  const [isRefLoading, setRefLoading] = useState(true);
  const [refLoadingEmitter] = useState(new EventEmitter());
  const floatingChildContainer = useRef();

  useEffect(() => {
    function doneLoading() {
      setRefLoading(false);
    }

    refLoadingEmitter.on('DONE', doneLoading);

    if (floatingChildContainer.current) {
      refLoadingEmitter.emit('DONE');
    }

    return () => {
      refLoadingEmitter.removeListener('DONE', doneLoading);
    };
  }, [refLoadingEmitter]);

  return (
    <div className={childContainer}>
      {isRefLoading ? null : children({ floatingChildContainer: floatingChildContainer.current })}
      <div ref={floatingChildContainer} className={triggerableFeatureClassName} />
    </div>
  );
}

export default DraggableElementChildPlacementContainer;
