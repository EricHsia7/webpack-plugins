const { BundleStatsMarkdownPlugin } = require('./bundle-stats-markdown-plugin');
const { ErrorCodePlugin } = require('./error-code-plugin');
const { MangleCssNamespacePlugin } = require('./mangle-css-namespace-plugin');
const { PostCssOptimizationPlugin } = require('./postcss-optimization-plugin');

module.exports = {
  BundleStatsMarkdownPlugin,
  ErrorCodePlugin,
  MangleCssNamespacePlugin,
  PostCssOptimizationPlugin
};
