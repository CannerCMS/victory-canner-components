/**
 * @flow
 */

import * as React from 'react';
import {VictoryTooltip} from 'victory';

export default class TooltipUtils extends React.Component<*> {
  static defaultEvents = VictoryTooltip.defaultEvents
  render() {
    return (
      <VictoryTooltip
        cornerRadius={3}
        pointerLength={4}
        flyoutStyle={{
          fill: "rgba(0, 0, 0, 0.8)"
        }}
        {...this.props}/>
    );
  }
}