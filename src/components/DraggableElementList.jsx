// @flow

import React, {
  useContext,
  useRef,
  useEffect,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'events';

import DraggableElementsWrapper from './DraggableElementsWrapper';
import { DraggableElementListContext } from '../constants/context';

type Props = {
  children: Array<React.Node>,
};

function DraggableElementList({
  children,
}: Props) {
  const options = useContext(DraggableElementListContext);
  const floatChildrenContainer = useRef();
  const [refLoadingEmitter] = useState(new EventEmitter());
  const [refLoading, setRefLoading] = useState(true);

  useEffect(() => {
    function doneLoading() {
      setRefLoading(false);
    }

    refLoadingEmitter.on('DONE', doneLoading);

    if (floatChildrenContainer.current) {
      refLoadingEmitter.emit('DONE');
    }
  }, [refLoadingEmitter]);

  return (
    <div>
      {refLoading ? null : (
        <DraggableElementsWrapper>
          {({}) => children.map(child => ReactDOM.createPortal(
            child,
            floatChildrenContainer.current,
          ))}
        </DraggableElementsWrapper>
      )}
      <div
        id="react-draggable-element-list-children-container"
        ref={floatChildrenContainer} />
    </div>
  );
}

export default DraggableElementList;
