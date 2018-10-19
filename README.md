# canner-chart

Chart library for [Canner](https://github.com/Canner/canner), based on [Victory Chart](https://formidable.com/open-source/victory).

## Simple Charts

All default charts have to basic props called `value` and `uiParams`. `value` is the data that send into the chart it is follow by the **[standard data in victory](https://formidable.com/open-source/victory/docs/common-props/#data)**, and `uiParams` are the other props that you want to pass into victory charts, while we have some default props for each chart but you could overwrite it by passing through props, such as `height`, `animate`, `categories`, etc...

- Area Chart: (ref: https://formidable.com/open-source/victory/docs/victory-area/)

- Bar Chart: (ref: https://formidable.com/open-source/victory/docs/victory-bar/)

- Donut Chart: (ref: https://formidable.com/open-source/victory/docs/victory-pie/)

- Line Chart: (ref: https://formidable.com/open-source/victory/docs/victory-line/)

- Pie Chart: (ref: https://formidable.com/open-source/victory/docs/victory-pie/)

- Scatter Chart: (ref: https://formidable.com/open-source/victory/docs/victory-scatter/)

## Stack Charts

Regarding to stack charts, the data in stack chart's data is like `array[array[object]]` data type. It is an array of **[standard data in victory](https://formidable.com/open-source/victory/docs/common-props/#data)**.

- Area Chart
- Bar Chart

## License

MIT