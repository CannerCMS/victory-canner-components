/**
 * @flow
 */

import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryBar, VictoryAxis, VictoryStack} from 'victory';
import {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/victory-utils';

export default class BarChart extends React.Component<DefaultProps> {
  static defaultProps = {
    uiParams: {}
  }

  render() {
    const {value, uiParams} = this.props;
  
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={uiParams.domainPadding || 15}
      >
        <VictoryAxis/>
        <VictoryAxis dependentAxis/>
        <VictoryStack>
          <VictoryBar
            animate={{duration: 500}}
            data={value}
            labelComponent={<Tooltip/>}
            labels={(datum) => datum.y}
            style={{
              labels: {fill: "white"}
            }}
            {...uiParams}
          />
        </VictoryStack>
      </VictoryChart>
    )
  }
}