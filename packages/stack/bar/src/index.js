/**
 * @flow
 */

import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryBar, VictoryAxis, VictoryStack, VictoryLegend} from 'victory';
import {DefaultProps} from 'types/DefaultProps';
import {Tooltip} from '@canner/chart-utils';

export default class BarStackChart extends React.Component<DefaultProps> {
  static defaultProps = {
    uiParams: {}
  }

  render() {
    const {value, uiParams} = this.props;
  
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={uiParams.domainPadding || 10}
      >
        <VictoryAxis/>
        <VictoryAxis dependentAxis/>
        <VictoryLegend x={20} y={10}
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "gray" } }}
          data={uiParams.legendData}
        />
        <VictoryStack>
          {value.map((barData, i) => {
            return (
              <VictoryBar
                key={i}
                animate={{duration: 500}}
                data={barData}
                labelComponent={<Tooltip/>}
                labels={(datum) => datum.y}
                style={{
                  labels: {fill: "white"}
                }}
                {...uiParams}
              />
            );
          })}
        </VictoryStack>
      </VictoryChart>
    )
  }
}