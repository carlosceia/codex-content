const cheerio = require('cheerio/slim');
const marked = require('marked');
const { gfmHeadingId } = require('marked-gfm-heading-id');

/* eslint-disable no-param-reassign */
module.exports = function (content) {
  const $ = cheerio.load(content, { decodeEntities: false, lowerCaseAttributeNames: false });
  const res = replaceAllC8yElements($);
  const cleanedContent = $.html();
  let parsedContent = parseMarkdown(cleanedContent, res);
  return parsedContent;
};

function parseMarkdown(cleanedContent, res) {
  marked.use(gfmHeadingId()); // Extension used to add old 'marked' options such as headingId. The default id generation option was deprecated in marked v7.0.0
  let parsedContent = marked.parse(cleanedContent);
  parsedContent = injectC8yElementsAgain(res, parsedContent);
  return parsedContent;
}

function injectC8yElementsAgain(res, parsedContent) {
  if (res.length > 0) {
    for (let i = 0; i < res.length; i++) {
      parsedContent = parsedContent.replace(`!codex-md-parsing-anchor-${i}`, res[i]);
    }
  }
  return parsedContent;
}

function replaceAllC8yElements($) {
  const allElementsOnPage = $('*');
  const res = [];
  allElementsOnPage.each((index, el) => {
    el = $(el);
    if (el && el.prop('tagName') && el.prop('tagName').startsWith('CODEX-')) {
      // inner HTML not working in cheerio :(
      const outer = el.clone().wrap('<container />').parent().html();
      res.push(outer);
      el.replaceWith(`!codex-md-parsing-anchor-${res.length - 1}`);
    }
  });
  return res;
}

module.exports.parseMarkdown = parseMarkdown; // exported for testing purposes
