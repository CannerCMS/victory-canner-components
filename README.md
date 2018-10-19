# victory-canner-components [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](https://canner.github.io/victory-canner-components/)

Chart library for [Canner](https://github.com/Canner/canner), based on [Victory Chart](https://formidable.com/open-source/victory).

> IMPORTANT NOTE: you need to additionally install `victory` in your project, because these packages use victory as peerDependencies.

## Simple Charts

All default charts have to basic props called `value` and `uiParams`. `value` is the data that send into the chart it is follow by the **[standard data in victory](https://formidable.com/open-source/victory/docs/common-props/#data)**, and `uiParams` are the other props that you want to pass into victory charts, while we have some default props for each chart but you could overwrite it by passing through props, such as `height`, `animate`, `categories`, etc...

- Area Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-area.svg)](https://www.npmjs.com/package/@canner/victory-area)

```
npm i --save @canner/victory-area
```

(ref: https://formidable.com/open-source/victory/docs/victory-area/)

- Bar Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-bar.svg)](https://www.npmjs.com/package/@canner/victory-bar)

```
npm i --save @canner/victory-bar
```

(ref: https://formidable.com/open-source/victory/docs/victory-bar/)

- Donut Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-donut.svg)](https://www.npmjs.com/package/@canner/victory-donut)

```
npm i --save @canner/victory-donut
```

(ref: https://formidable.com/open-source/victory/docs/victory-pie/)

- Line Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-line.svg)](https://www.npmjs.com/package/@canner/victory-line)

```
npm i --save @canner/victory-line
```

(ref: https://formidable.com/open-source/victory/docs/victory-line/)

- Pie Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-pie.svg)](https://www.npmjs.com/package/@canner/victory-pie)

```
npm i --save @canner/victory-pie
```

(ref: https://formidable.com/open-source/victory/docs/victory-pie/)

- Scatter Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-scatter.svg)](https://www.npmjs.com/package/@canner/victory-scatter)

```
npm i --save @canner/victory-scatter
```

(ref: https://formidable.com/open-source/victory/docs/victory-scatter/)

## Stack Charts

Regarding to stack charts, the data in stack chart's data is like `array[array[object]]` data type. It is an array of **[standard data in victory](https://formidable.com/open-source/victory/docs/common-props/#data)**.

- Area Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-area-stack.svg)](https://www.npmjs.com/package/@canner/victory-area-stack)

```
npm i --save @canner/victory-area-stack
```

- Bar Chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvictory-bar-stack.svg)](https://www.npmjs.com/package/@canner/victory-bar-stack)

```
npm i --save @canner/victory-bar-stack
```

## License

MIT
