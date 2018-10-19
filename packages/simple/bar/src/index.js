/**
 * @flow
 */

import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryBar, VictoryAxis, VictoryStack} from 'victory';
import {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/chart-utils';

export default class BarChart extends React.Component<DefaultProps> {
  render() {
    const {value, uiParams} = this.props;
  
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={(uiParams && uiParams.domainPadding) || 15}
      >
        <VictoryAxis/>
        <VictoryAxis dependentAxis/>
        <VictoryStack>
          <VictoryBar
            data={value}
            labelComponent={<Tooltip/>}
            labels={(datum) => datum.y}
            style={{
              labels: {fill: "white"}
            }}
            {...uiParams}
          />
        </VictoryStack>
      </VictoryChart>
    )
  }
}