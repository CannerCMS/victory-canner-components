import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setOptions({
  name: "canner-chart",
  url: "https://github.com/Canner/canner-chart"
});

configure(loadStories, module);