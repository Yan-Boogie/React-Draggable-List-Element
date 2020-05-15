// @flow

import React, {
  useRef,
  useEffect,
  useState,
} from 'react';
import EventEmitter from 'events';

import { CHILD_CONTAINER, TRIGGERABLE_FEATURE } from '../constants/classes';

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

  useEffect(() => {
    if (floatChildContainer.current) {
      const {
        current: floatChildContainerRef,
      } = floatChildContainer;

      console.log('floatChildContainerRef', floatChildContainerRef);

      // const childTriggerableFeatures = floatChildContainerRef.querySelectorAll(TRIGGERABLE_FEATURE);

      // console.log('childTriggerableFeatures', childTriggerableFeatures);
    }
  }, []);

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
