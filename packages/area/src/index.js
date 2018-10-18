/**
 * @flow
 */

import * as React from 'react';
import {assign} from 'lodash';
import {VictoryChart, VictoryTheme, VictoryArea, VictoryAxis} from 'victory';
import {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/chart-utils';

export default class AreaChart extends React.Component<DefaultProps> {
  render() {
    const {value, uiParams} = this.props;
    const defaultUiParams = {
      style: {
        data: {fill: "rgb(244, 81, 30)"}
      }
    }

    const newUiParams = assign(defaultUiParams, uiParams);

    return (
      <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryAxis/>
        <VictoryAxis dependentAxis/>
        <VictoryArea
          labelComponent={<Tooltip/>}
          labels={(datum) => datum.y}
          data={value}
          {...newUiParams}
        />
      </VictoryChart>
    )
  }
}