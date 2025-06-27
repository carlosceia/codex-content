import { parseMarkdown } from './loader-markdown';

describe('Markdown Heading ID Generation', function () {
  it('should generate correct ID for an H2 tag', function () {
    const inputMarkdown = '## Sample Heading';
    const expectedOutput = '<h2 id="sample-heading">Sample Heading</h2>\n';

    const output = parseMarkdown(inputMarkdown, []);
    expect(output).toEqual(expectedOutput);
  });

  it('should handle multiple words correctly', function () {
    const inputMarkdown = '## This is a Test Heading';
    const expectedOutput = '<h2 id="this-is-a-test-heading">This is a Test Heading</h2>';

    const output = parseMarkdown(inputMarkdown, []);
    expect(output).toContain(expectedOutput);
  });

  it('should handle special characters correctly', function () {
    const inputMarkdown = '## Title with !@#$%^&*() characters';
    const expectedOutput =
      '<h2 id="title-with--characters">Title with !@#$%^&amp;*() characters</h2>';

    const output = parseMarkdown(inputMarkdown, []);
    expect(output).toContain(expectedOutput);
  });

  it('should handle duplicate headings correctly', function () {
    const inputMarkdown = '## Duplicate Heading\n## Duplicate Heading';
    const output = parseMarkdown(inputMarkdown, []);

    expect(output).toContain('<h2 id="duplicate-heading">Duplicate Heading</h2>');
    expect(output).toContain('<h2 id="duplicate-heading-1">Duplicate Heading</h2>');
  });
});
