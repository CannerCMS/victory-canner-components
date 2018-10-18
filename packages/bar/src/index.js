/**
 * @flow
 */

import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryBar} from 'victory';
import {DefaultProps} from 'types/DefaultProps';

export default class BarChart extends React.Component<DefaultProps> {
  render() {
    const {value, uiParams} = this.props;

    return (
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={(uiParams && uiParams.domainPadding) || 10}
      >
        <VictoryBar
          data={value}
          {...uiParams}
        />
      </VictoryChart>
    )
  }
}