/**
 * @flow
 */

import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryScatter, VictoryAxis, VictoryVoronoiContainer} from 'victory';
import type {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/victory-utils';

export default class ScatterChart extends React.Component<DefaultProps> {
  render() {
    const {value, uiParams} = this.props;
    const defaultUiParams = {
      style: {
        data: {fill: "#a257ec"},
        labels: {fill: "white"}
      }
    }

    const newUiParams = Object.assign(defaultUiParams, uiParams);

    return (
      <VictoryChart
        animate={{ duration: 2000 }}
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryVoronoiContainer/>
        }
      >
        <VictoryAxis/>
        <VictoryAxis dependentAxis/>
        <VictoryScatter
          labelComponent={<Tooltip/>}
          labels={(datum) => datum.y}
          data={value}
          {...newUiParams}
        />
      </VictoryChart>
    )
  }
}