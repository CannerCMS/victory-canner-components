/**
 * @flow
 */

import * as React from 'react';
import PieChart from 'packages/pie/src';
import data from './data';

export default class PieDefaultDemo extends React.Component<{}> {
  render() {
    return (
      <PieChart value={data.data1}/>
    );
  }
}