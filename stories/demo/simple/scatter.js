/**
 * @flow
 */

import * as React from 'react';
import ScatterChart from 'packages/simple/scatter/src';
import data from '../data';

export default class ScatterDefaultDemo extends React.Component<{}> {
  render() {
    return (
      <ScatterChart
        chart={{
          symbol: (datum) => datum.y > 3 ? "triangleUp" : "triangleDown",
          size: 8
        }}
        value={data.data1}/>
    );
  }
}