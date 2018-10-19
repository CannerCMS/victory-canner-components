/**
 * @flow
 */

import * as React from 'react';
import {VictoryTheme, VictoryPie} from 'victory';
import type {DefaultProps} from 'types/DefaultProps';

export default class PieChart extends React.Component<DefaultProps> {
  render() {
    const {value, chart} = this.props;
    return (
      <VictoryPie
        animate={{duration: 2000}}
        theme={VictoryTheme.material}
        labelRadius={80}
        style={{ labels: { fill: "white", fontSize: 14 } }}
        data={value}
        {...chart}
      />
    )
  }
}