/**
 * @flow
 */

import * as React from 'react';
import {assign} from 'lodash';
import {VictoryTheme, VictoryPie} from 'victory';
import {DefaultProps} from 'types/DefaultProps';

export default class DonutChart extends React.Component<DefaultProps> {
  render() {
    const {value, uiParams} = this.props;
    const defaultUiParams = {
    }
    const newUiParams = assign(defaultUiParams, uiParams);

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