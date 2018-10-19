/**
 * @flow
 */

import * as React from 'react';
import {assign} from 'lodash';
import {VictoryChart, VictoryTheme, VictoryArea, VictoryAxis, VictoryVoronoiContainer, VictoryStack, VictoryLegend} from 'victory';
import {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/chart-utils';

export default class AreaChart extends React.Component<DefaultProps> {

  render() {
    const {value, uiParams} = this.props;
    const defaultUiParams = {
      style: {
        labels: {fill: "white"}
      }
    }

    const newUiParams = assign(defaultUiParams, uiParams);

    return (
      <VictoryChart
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryVoronoiContainer/>
        }
      >
        <VictoryAxis/>
        <VictoryAxis dependentAxis/>
        <VictoryLegend x={20} y={10}
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "gray" } }}
          data={newUiParams.legendData}
        />
        <VictoryStack>
          {value.map((areaData, i) => {
            return (
              <VictoryArea
                interpolation="natural"
                key={i}
                labelComponent={<Tooltip/>}
                labels={(datum) => datum.y}
                data={areaData}
                {...newUiParams}
              />
            );
          })}
        </VictoryStack>
      </VictoryChart>
    )
  }
}