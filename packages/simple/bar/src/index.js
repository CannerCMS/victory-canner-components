/**
 * @flow
 */

import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryBar, VictoryAxis, VictoryStack} from 'victory';
import type {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/victory-utils';

export default class BarChart extends React.Component<DefaultProps> {
  render() {
    const {value, container, xAxis, yAxis, chart} = this.props;
  
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={15}
        {...container}
      >
        <VictoryAxis {...xAxis}/>
        <VictoryAxis {...yAxis} dependentAxis />
        <VictoryStack>
          <VictoryBar
            animate={{duration: 500}}
            data={value}
            labelComponent={<Tooltip/>}
            labels={(datum) => datum.y}
            style={{
              labels: {fill: "white"}
            }}
            {...chart}
          />
        </VictoryStack>
      </VictoryChart>
    )
  }
}