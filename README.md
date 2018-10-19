# victory-canner-components [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](https://canner.github.io/victory-canner-components/)

Chart library for [Canner](https://github.com/Canner/canner), based on [Victory Chart](https://formidable.com/open-source/victory).

> IMPORTANT NOTE: you need to additionally install `victory` in your project, because these packages use victory as peerDependencies.

## Common Props

All charts support common props as below

- `container (object)`: Common Props to setup the chart, [learn more VictoryChart](https://formidable.com/open-source/victory/docs/common-props/)

- `xAxis (object)`: X-Axis settings, [learn more Victory Axis](https://formidable.com/open-source/victory/docs/victory-axis)

- `yAxis (object)`: Y-Axis settings, [learn more Victory Axis](https://formidable.com/open-source/victory/docs/victory-axis)

Other than common props, every charts have additional settings for each chart, and is listed in each section below.

## Simple Charts

All charts have one props called `value`. `value` is the data that send into the chart it's format must followed by the **[standard data in victory](https://formidable.com/open-source/victory/docs/common-props/#data)**.

### Area Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-area.svg)](https://www.npmjs.com/package/@canner/victory-area)

```
npm i --save @canner/victory-area
```

#### Additional Props

- `chart (object)`: chart settings, [learn more VictoryArea](https://formidable.com/open-source/victory/docs/victory-area/#props)

### Bar Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-bar.svg)](https://www.npmjs.com/package/@canner/victory-bar)

```
npm i --save @canner/victory-bar
```

#### Additional Props

- `chart (object)`: chart settings, [learn more VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar/#props)

### Donut Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-donut.svg)](https://www.npmjs.com/package/@canner/victory-donut)

```
npm i --save @canner/victory-donut
```

#### Additional Props

- `chart (object)`: chart settings, [learn more VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie/#props)

### Line Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-line.svg)](https://www.npmjs.com/package/@canner/victory-line)

```
npm i --save @canner/victory-line
```

#### Additional Props

- `chart (object)`: chart settings, [learn more VictoryLine](https://formidable.com/open-source/victory/docs/victory-line/#props)

### Pie Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-pie.svg)](https://www.npmjs.com/package/@canner/victory-pie)

```
npm i --save @canner/victory-pie
```

#### Additional Props

- `chart (object)`: chart settings, [learn more VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie/#props)

### Scatter Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-scatter.svg)](https://www.npmjs.com/package/@canner/victory-scatter)

```
npm i --save @canner/victory-scatter
```

#### Additional Props

- `chart (object)`: chart settings, [learn more VictoryScatter](https://formidable.com/open-source/victory/docs/victory-scatter/#props)

## Stack Charts

Regarding to stack charts, the data in stack chart's data is like `array[array[object]]` data type. It is an array of **[standard data in victory](https://formidable.com/open-source/victory/docs/common-props/#data)**.

### Area Stack Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-area-stack.svg)](https://www.npmjs.com/package/@canner/victory-area-stack)

```
npm i --save @canner/victory-area-stack
```

#### Additional Props

- `legend (object)`: legend settings, [learn more VictoryLegend](https://formidable.com/open-source/victory/docs/victory-legend/#props)

- `chart (object)`: chart settings, [learn more VictoryArea](https://formidable.com/open-source/victory/docs/victory-area/#props)

### Bar Stack Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-bar-stack.svg)](https://www.npmjs.com/package/@canner/victory-bar-stack)

```
npm i --save @canner/victory-bar-stack
```

#### Additional Props

- `legend (object)`: legend settings, [learn more VictoryLegend](https://formidable.com/open-source/victory/docs/victory-legend/#props)

- `chart (object)`: chart settings, [learn more VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar/#props)

## License

MIT
