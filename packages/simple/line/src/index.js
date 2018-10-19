/**
 * @flow
 */

import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryVoronoiContainer} from 'victory';
import type {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/victory-utils';

export default class LineChart extends React.Component<DefaultProps> {

  render() {
    const {value, container, xAxis, yAxis, chart} = this.props;
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryVoronoiContainer/>
        }
        {...container}
      >
        <VictoryAxis {...xAxis}/>
        <VictoryAxis {...yAxis} dependentAxis/>
        <VictoryLine
          data={value}
          animate={{duration: 500}}
          labelComponent={<Tooltip/>}
          interpolation="natural"
          labels={(datum) => datum.y}
          style={{
            labels: {fill: "white"}
          }}
          {...chart}
        />
      </VictoryChart>
    )
  }
}