/**
 * @flow
 */

import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryScatter, VictoryAxis, VictoryVoronoiContainer} from 'victory';
import type {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/victory-utils';

export default class ScatterChart extends React.Component<DefaultProps> {
  render() {
    const {value, container, xAxis, yAxis, chart} = this.props;

    return (
      <VictoryChart
        animate={{ duration: 2000 }}
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryVoronoiContainer/>
        }
        {...container}
      >
        <VictoryAxis {...xAxis}/>
        <VictoryAxis {...yAxis} dependentAxis/>
        <VictoryScatter
          labelComponent={<Tooltip/>}
          labels={(datum) => datum.y}
          data={value}
          style={{
            data: {fill: "#a257ec"},
            labels: {fill: "white"}
          }}
          {...chart}
        />
      </VictoryChart>
    )
  }
}