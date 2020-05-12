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

function App() {
  const { DraggableList } = useDraggableElementList();

  return (
    <div className={classes.wrapper}>
      <DraggableList>
        <CustomizeDraggableItem />
        <CustomizeDraggableItem />
        <CustomizeDraggableItem />
      </DraggableList>
    </div>
  );
}

export default hot(module)(App);
