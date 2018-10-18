/**
 * @flow
 */

import * as React from 'react';
import {assign} from 'lodash';
import {VictoryChart, VictoryTheme, VictoryArea} from 'victory';
import {DefaultProps} from 'types/DefaultProps';

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
        <VictoryArea
          data={value}
          {...newUiParams}
        />
      </VictoryChart>
    )
  }
}