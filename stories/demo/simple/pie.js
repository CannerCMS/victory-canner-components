/**
 * @flow
 */

import * as React from 'react';
import PieChart from 'packages/simple/pie/src';
import data from '../data';

export default class PieDefaultDemo extends React.Component<{}> {
  render() {
    return (
      <PieChart value={data.data1}/>
    );
  }
}