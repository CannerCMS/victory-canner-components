/**
 * @flow
 */

import * as React from 'react';
import ScatterChart from 'packages/scatter/src';
import data from './data';

export default class ScatterDefaultDemo extends React.Component<{}> {
  render() {
    return (
      <ScatterChart value={data.data1}/>
    );
  }
}