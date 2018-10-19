/**
 * @flow
 */

import * as React from 'react';
import {VictoryTheme, VictoryPie} from 'victory';
import type {DefaultProps} from 'types/DefaultProps';

export default class DonutChart extends React.Component<DefaultProps> {

  render() {
    const {value, chart} = this.props;

    return (
      <VictoryPie
        animate={true}
        innerRadius={80}
        theme={VictoryTheme.material}
        data={value}
        {...chart}
      />
    )
  }
}