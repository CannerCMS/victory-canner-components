/**
 * @flow
 */

import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryArea, VictoryAxis, VictoryVoronoiContainer, VictoryStack} from 'victory';
import type {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/victory-utils';

export default class AreaChart extends React.Component<DefaultProps> {
  render() {
    const {value, uiParams} = this.props;
    const defaultUiParams = {
      style: {
        labels: {fill: "white"}
      }
    }

    const newUiParams = Object.assign(defaultUiParams, uiParams);

    return (
      <VictoryChart
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryVoronoiContainer/>
        }
      >
        <VictoryAxis/>
        <VictoryAxis dependentAxis/>
        <VictoryStack>
          <VictoryArea
            animate={{duration: 500, delay: 100}}
            interpolation="natural"
            labelComponent={<Tooltip/>}
            labels={(datum) => datum.y}
            data={value}
            {...newUiParams}
          />
        </VictoryStack>
      </VictoryChart>
    )
  }
}