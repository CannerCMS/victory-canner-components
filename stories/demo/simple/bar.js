/**
 * @flow
 */

import * as React from 'react';
import BarChart from 'packages/simple/bar/src';
import data from '../data';

export default class BarDefaultDemo extends React.Component<{}> {
  render() {
    return (
      <BarChart value={data.data1}/>
    );
  }
}