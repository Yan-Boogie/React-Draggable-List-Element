// @flow

import React, {
  useRef,
  useEffect,
  useState,
} from 'react';
import EventEmitter from 'events';

import { CHILD_CONTAINER } from '../constants/classes';

type Props = {
  children: React.Node,
};

function DraggableElementPlacementChildContainer({ children }: Props) {
  const floatChildContainer = useRef();
  const [refLoadingEmitter] = useState(new EventEmitter());
  const [refLoading, setRefLoading] = useState(true);

  useEffect(() => {
    function doneLoading() {
      setRefLoading(false);
    }

    refLoadingEmitter.on('DONE', doneLoading);

    if (floatChildContainer.current) {
      refLoadingEmitter.emit('DONE');
    }
  }, [refLoadingEmitter]);

  return (
    <div style={{ position: 'relative' }}>
      {refLoading ? null : children({ floatChildContainerRef: floatChildContainer.current })}
      <div
        className={CHILD_CONTAINER}
        ref={floatChildContainer} />
    </div>
  );
}

export default DraggableElementPlacementChildContainer;
