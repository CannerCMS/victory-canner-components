/**
 * @flow
 */

import * as React from 'react';
import BarStackChart from 'packages/stack/bar/src';
import data from '../data';

export default class BarStackDemo extends React.Component<{}> {
  render() {
    return (
      <BarStackChart value={data.dataStack1}/>
    );
  }
}