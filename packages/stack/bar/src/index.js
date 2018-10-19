/**
 * @flow
 */

import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryBar, VictoryAxis, VictoryStack, VictoryLegend} from 'victory';
import type {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/victory-utils';

export default class BarStackChart extends React.Component<DefaultProps> {
  render() {
    const {value, container, xAxis, yAxis, legend, chart} = this.props;
  
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={10}
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
          {value.map((barData, i) => {
            return (
              <VictoryBar
                key={i}
                animate={{duration: 500}}
                data={barData}
                labelComponent={<Tooltip/>}
                labels={(datum) => datum.y}
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