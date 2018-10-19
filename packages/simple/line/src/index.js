/**
 * @flow
 */

import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryVoronoiContainer} from 'victory';
import {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/victory-utils';

export default class LineChart extends React.Component<DefaultProps> {
  static defaultProps = {
    uiParams: {}
  }

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
        <VictoryLine
          data={value}
          animate={{duration: 500}}
          labelComponent={<Tooltip/>}
          interpolation="natural"
          labels={(datum) => datum.y}
          {...newUiParams}
        />
      </VictoryChart>
    )
  }
}