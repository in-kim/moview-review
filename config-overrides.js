const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    // root 경로 설정
    '@': path.resolve(__dirname, 'src'),
  }),
);