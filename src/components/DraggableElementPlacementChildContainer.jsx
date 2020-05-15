// @flow

import React, {
  useRef,
  useEffect,
  useState,
} from 'react';
import EventEmitter from 'events';

type Props = {

};

function DraggableElementPlacementChildContainer({ children }) {
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
    <div>
      {refLoading ? null : children({ floatChildContainerRef: floatChildContainer.current })}
      <div
        className="react-draggable-element-list-child-container"
        ref={floatChildContainer} />
    </div>
  );
}

export default DraggableElementPlacementChildContainer;
