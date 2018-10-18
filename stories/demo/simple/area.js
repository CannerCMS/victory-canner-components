/**
 * @flow
 */

import * as React from 'react';
import AreaChart from 'packages/simple/area/src';
import data from '../data';

export default class AreaDefaultDemo extends React.Component<{}> {
  render() {
    return (
      <AreaChart value={data.data1}/>
    );
  }
}