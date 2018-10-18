import React from 'react';

import { storiesOf } from '@storybook/react';
import AreaDefaultDemo from './demo/areaDefault';
import BarDefaultDemo from './demo/barDefault';
import DonutDefaultDemo from './demo/donutDefault';
import LineDefaultDemo from './demo/lineDefault';
import PieDefaultDemo from './demo/pieDefault';

const Container = storyFn => (
  <div style={{padding: "20px", width: "500px", height: "400px"}}>
    {storyFn()}
  </div>
);

storiesOf('Area Chart', module)
  .addDecorator(Container)
  .add('Default', () => <AreaDefaultDemo/>);


storiesOf('Bar Chart', module)
  .addDecorator(Container)
  .add('Default', () => <BarDefaultDemo/>);

storiesOf('Line Chart', module)
  .addDecorator(Container)
  .add('Default', () => <LineDefaultDemo/>);

storiesOf('Donut Chart', module)
  .addDecorator(Container)
  .add('Default', () => <DonutDefaultDemo/>);

storiesOf('Pie Chart', module)
  .addDecorator(Container)
  .add('Default', () => <PieDefaultDemo/>);