// @flow
/* eslint import/no-extraneous-dependencies: 0 */

import React from 'react';
import { css } from 'emotion';
import { hot } from 'react-hot-loader';

import useDraggableElementList from '../src/hooks/useDraggableElementList';
import CustomizeDraggableItem from './components/CustomizeDraggableItem';

const classes = {
  wrapper: css`
    width: 100%;
    padding: 10px 20px;
  `,
};

const mockItemBundle = [{
  id: 1,
  isDraggableDisabled: false,
}, {
  id: 2,
  isDraggableDisabled: false,
}, {
  id: 3,
  isDraggableDisabled: false,
}, {
  id: 4,
  isDraggableDisabled: false,
}, {
  id: 5,
  isDraggableDisabled: false,
}];

function App() {
  const { DraggableList } = useDraggableElementList(mockItemBundle);

  return (
    <div className={classes.wrapper}>
      <DraggableList>
        {(data) => {
          console.log('data', data);

          return <CustomizeDraggableItem />;
        }}
      </DraggableList>
    </div>
  );
}

export default hot(module)(App);
