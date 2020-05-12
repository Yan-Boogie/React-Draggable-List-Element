// @flow

import React, { useContext } from 'react';

import { DraggableElementListContext } from '../constants/context';

type Props = {
  children: Array<React.Node>,
};

function DraggableElementList({
  children,
}: Props) {
  const options = useContext(DraggableElementListContext);

  return (
    <div />
  );
}

export default DraggableElementList;
