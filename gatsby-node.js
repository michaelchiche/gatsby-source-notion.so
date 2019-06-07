'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const crypto = require('crypto');

const sourceNodes = (
  { actions, createNodeId, creatContentDigest },
  configOptions
) => {

  delete configOptions.plugins;

  console.log('testing my plugin', configOptions);
};

sourceNodes();

exports.sourceNodes = sourceNodes;
