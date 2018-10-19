/**
 * @flow
 */

import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryArea, VictoryAxis, VictoryVoronoiContainer, VictoryStack, VictoryLegend} from 'victory';
import type {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/victory-utils';

export default class AreaChart extends React.Component<DefaultProps> {

  render() {
    const {value, container, xAxis, yAxis, legend, chart} = this.props;

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
        <VictoryLegend x={20} y={10}
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "gray" } }}
          {...legend}
        />
        <VictoryStack>
          {value.map((areaData, i) => {
            return (
              <VictoryArea
                animate={{duration: 500}}
                interpolation="natural"
                key={i}
                labelComponent={<Tooltip/>}
                labels={(datum) => datum.y}
                data={areaData}
                style={{
                  labels: {fill: "white"}
                }}
                {...chart}
              />
            );
          })}
        </VictoryStack>
      </VictoryChart>
    )
  }
}