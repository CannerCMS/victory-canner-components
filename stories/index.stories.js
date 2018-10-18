import React from 'react';

import { storiesOf } from '@storybook/react';
import AreaDemo from './demo/simple/area';
import BarDemo from './demo/simple/bar';
import DonutDemo from './demo/simple/donut';
import LineDemo from './demo/simple/line';
import PieDemo from './demo/simple/pie';
import ScatterDemo from './demo/simple/scatter';

const Container = storyFn => (
  <div style={{padding: "20px", width: "500px", height: "400px"}}>
    {storyFn()}
  </div>
);

storiesOf('Area Chart', module)
  .addDecorator(Container)
  .add('Simple', () => <AreaDemo/>);


storiesOf('Bar Chart', module)
  .addDecorator(Container)
  .add('Simple', () => <BarDemo/>);

storiesOf('Line Chart', module)
  .addDecorator(Container)
  .add('Simple', () => <LineDemo/>);

storiesOf('Donut Chart', module)
  .addDecorator(Container)
  .add('Simple', () => <DonutDemo/>);

storiesOf('Pie Chart', module)
  .addDecorator(Container)
  .add('Simple', () => <PieDemo/>);

storiesOf('Scatter Chart', module)
  .addDecorator(Container)
  .add('Simple', () => <ScatterDemo/>);