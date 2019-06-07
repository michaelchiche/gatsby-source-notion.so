import createDigest from './utils/createDigest';

export const sourceNodes = (
  { actions, createNodeId, creatContentDigest },
  configOptions
) => {
  const { createNode } = actions;

  delete configOptions.plugins;

  // plugin goes here
  console.log('initial setting', configOptions);
};
