import pkg from './package.json';

export default {
  input: 'src/gatsby-node.js',
  output: [
    {
      file: pkg.main,
      name: 'gatsby-node',
      format: 'cjs',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};
