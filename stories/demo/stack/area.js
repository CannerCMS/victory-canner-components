/**
 * @flow
 */

import * as React from 'react';
import AreaStackChart from 'packages/stack/area/src';
import data from '../data';

export default class AreaStackDemo extends React.Component<{}> {
  render() {
    return (
      <AreaStackChart value={data.dataStack1}/>
    );
  }
}