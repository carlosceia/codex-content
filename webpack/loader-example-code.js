const cheerio = require('cheerio/slim');
const { existsSync, lstatSync, readdirSync, readFileSync } = require('fs');
const { join, basename, extname } = require('path');

/* eslint-disable no-param-reassign */
module.exports = function (content) {
  const $ = cheerio.load(content, { decodeEntities: false, lowerCaseAttributeNames: false });
  const { emitError, rootContext, addDependency } = this;
  $('codex-tutorial-example').each((i, element) => {
    element = $(element);
    const sourcesAttribute = element.attr('[sources]');
    const fileContent = [];
    if (sourcesAttribute) {
      const sourcesArray = eval(sourcesAttribute);
      if (!Array.isArray(sourcesArray)) {
        emitError(new Error('[sources] of codex-tutorial-example needs to be an array.'));
        return;
      }
      for (const source of sourcesArray) {
        const isDirectory = existsSync(source) && lstatSync(source).isDirectory();
        if (isDirectory) {
          const fileNames = readdirSync(source);
          for (const name of fileNames) {
            const filePath = join(rootContext, source, name);
            readFile(source, filePath, fileContent);
            addDependency(filePath);
          }
        } else {
          const filePath = join(rootContext, source);
          readFile(source, filePath, fileContent);
          addDependency(filePath);
        }
      }
    } else {
      fileContent.push({
        origin: '',
        fileName: 'code',
        extension: 'html',
        content: element.html()
      });
    }
    element.attr('[sources]', JSON.stringify(fileContent));
  });
  return $.html();
};

function readFile(source, filePath, fileContent) {
  const fileName = basename(filePath);
  let content = readFileSync(filePath, { encoding: 'utf-8' });
  if (fileName.endsWith('.json')) {
    try {
      content = JSON.parse(content);
    } catch (e) {
      console.warn(`Unparsable JSON found: ${filePath}`);
    }
  }

  fileContent.push({
    origin: source,
    fileName,
    extension: extname(filePath).substring(1),
    content
  });
}
