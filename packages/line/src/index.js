/**
 * @flow
 */

import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryLine} from 'victory';
import {DefaultProps} from 'types/DefaultProps';

export default class LineChart extends React.Component<DefaultProps> {
  render() {
    const {value, uiParams} = this.props;

    return (
      <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryLine
          data={value}
          {...uiParams}
        />
      </VictoryChart>
    )
  }
}