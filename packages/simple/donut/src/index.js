/**
 * @flow
 */

import * as React from 'react';
import {VictoryTheme, VictoryPie} from 'victory';
import {DefaultProps} from 'types/DefaultProps';

export default class DonutChart extends React.Component<DefaultProps> {
  static defaultProps = {
    uiParams: {}
  }

  render() {
    const {value, uiParams} = this.props;
    const defaultUiParams = {
    }
    const newUiParams = Object.assign(defaultUiParams, uiParams);

    return (
      <VictoryPie
        animate={true}
        innerRadius={80}
        theme={VictoryTheme.material}
        data={value}
        {...newUiParams}
      />
    )
  }
}