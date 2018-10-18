/**
 * @flow
 */

import * as React from 'react';
import LineChart from 'packages/line/src';
import data from './data';

export default class LineDefaultDemo extends React.Component<{}> {
  render() {
    return (
      <LineChart value={data.data1}/>
    );
  }
}