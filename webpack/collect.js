/* eslint-disable no-await-in-loop */
const glob = require('fast-glob');
const path = require('path');
const fs = require('fs-extra');
const frontMatterParse = require('front-matter');
const _ = require('lodash');

main().catch(e => {
  console.log(e);
  process.exit(1);
});

async function collectChildren(directory, createdCompoDocFiles) {
  const files = (
    await glob(['*.html', '*.md'], { cwd: directory, ignore: ['index.html'], onlyFiles: true })
  ).map(f => path.join(directory, f));
  const routes = (await readFiles(files)).map(fm => frontMatterToRoute(fm, createdCompoDocFiles));
  for (let i = 0, t = files.length; i < t; i++) {
    const file = files[i];

    const folderWithSameName = path.join(
      path.dirname(file),
      path.basename(file, path.extname(file))
    );
    if (await fs.exists(folderWithSameName)) {
      routes[i].children = await collectChildren(folderWithSameName, createdCompoDocFiles);
    }
  }
  return routes;
}

async function readFiles(files) {
  return (await Promise.all(files.map(f => fs.readFile(f, { encoding: 'utf8' })))).map((c, ix) => ({
    ...frontMatterParse(c).attributes,
    filePath: path.relative('./content', files[ix]).replace(new RegExp(`\\${path.sep}`, 'g'), '/')
  }));
}

async function main() {
  const createdCompoDocFiles = await splitCompodocDocumentation();
  const rootFiles = (await glob('*/index.{html,md}', { cwd: 'content' })).map(f =>
    path.resolve('content', f)
  );
  const routes = (await readFiles(rootFiles)).map(fm =>
    frontMatterToRoute(fm, createdCompoDocFiles)
  );
  for (let i = 0, t = rootFiles.length; i < t; i++) {
    routes[i].children = await collectChildren(path.dirname(rootFiles[i]), createdCompoDocFiles);
  }
  await fs.writeFile('content.json', JSON.stringify(routes));
}

async function splitCompodocDocumentation() {
  const documentation = await fs.readFile('documentation.json');
  const doc = JSON.parse(documentation);
  await fs.ensureDir('documentation');
  const createdFiles = await createFilesForEntries(doc);
  const duplicates = new Map();
  let hadDuplicates = false;
  createdFiles.forEach(file => {
    // TODO: remove once https://github.com/compodoc/compodoc/issues/1450 is resolved
    if (file === 'SpecificExtensionKeys') {
      return;
    }
    const lowerCaseFileName = file.toLowerCase();
    const numberOfOccurences = duplicates.get(lowerCaseFileName) || 0;
    if (numberOfOccurences) {
      hadDuplicates = true;
      console.warn(
        `File: ${file} (${lowerCaseFileName}) has already been collected (${numberOfOccurences} times).`
      );
    }
    duplicates.set(lowerCaseFileName, numberOfOccurences + 1);
  });

  if (hadDuplicates) {
    throw Error(`Compodoc files collected more than once.`);
  }
  return createdFiles;
}

async function createFilesForEntries(dataset) {
  if (dataset.name && dataset.file) {
    await fs.writeFile(`documentation/${dataset.name}.json`, JSON.stringify(dataset));
    return [dataset.name];
  }
  const createdFiles = [];
  for (const [key, value] of Object.entries(dataset)) {
    if (
      [
        'groupedVariables',
        'groupedFunctions',
        'groupedEnumerations',
        'groupedTypeAliases'
      ].includes(key)
    ) {
      continue;
    }
    if (Array.isArray(value)) {
      for (const entry of value) {
        createdFiles.push(...(await createFilesForEntries(entry)));
      }
    } else if (typeof value === 'object') {
      createdFiles.push(...(await createFilesForEntries(value)));
    }
  }
  return createdFiles;
}

function frontMatterToRoute(fm, createdCompoDocFiles) {
  const data = _.pick(fm, [
    'title',
    'icon',
    'description',
    'mockdata',
    fm.anchor ? 'anchor' : 'filePath',
    'apiDocs'
  ]);
  if (data.apiDocs?.length) {
    for (const entry of data.apiDocs) {
      if (!createdCompoDocFiles.includes(entry.name)) {
        throw Error(`Invalid apiDocs entry ${entry.name}`);
      }
    }
  }
  data.priority = -(fm.order || fm.pageOrder) + 100;
  return {
    path: fm.slug,
    data
  };
}
