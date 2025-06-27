const path = require('path');

const loaderHtml = {
  loader: 'html-loader',
  options: {
    esModule: false
  }
};
const loaderFrontMatter = path.join(__dirname, 'loader-frontmatter.js');
const loaderTemplateCode = path.join(__dirname, 'loader-template-code.js');
const loaderMarkdown = path.join(__dirname, 'loader-markdown.js');
const loaderExampleCode = path.join(__dirname, 'loader-example-code.js');

module.exports = function () {
  return {
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /packages.codex/,
              type: 'javascript/auto',
              use: [loaderHtml, loaderFrontMatter]
            },
            {
              type: 'javascript/auto',
              use: [loaderHtml]
            }
          ],
          test: /\.html$/i
        },
        {
          resolve: {
            fullySpecified: false
          },
          test: /\.mjs$/
        },
        {
          test: /\.md$/,
          use: [
            loaderHtml,
            loaderExampleCode,
            loaderMarkdown,
            loaderFrontMatter,
            loaderTemplateCode
          ]
        }
      ]
    }
  };
};
