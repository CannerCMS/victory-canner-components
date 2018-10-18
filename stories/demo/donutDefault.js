/**
 * @flow
 */

import * as React from 'react';
import DonutChart from 'packages/donut/src';
import data from './data';

export default class DonutDefaultDemo extends React.Component<{}> {
  render() {
    return (
      <DonutChart value={data.data1}/>
    );
  }
}