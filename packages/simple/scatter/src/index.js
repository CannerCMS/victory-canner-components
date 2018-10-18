/**
 * @flow
 */

import * as React from 'react';
import {assign} from 'lodash';
import {VictoryChart, VictoryTheme, VictoryScatter, VictoryAxis, VictoryVoronoiContainer} from 'victory';
import {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/chart-utils';

export default class ScatterChart extends React.Component<DefaultProps> {
  render() {
    const {value, uiParams} = this.props;
    const defaultUiParams = {
      style: {
        data: {fill: "#a257ec"},
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