module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
          proposals: true
        },
        targets: {
          node: 'current',
          ie: 11
        }
      }
    ],
    ,
    '@babel/preset-react',
    '@babel/preset-typescript'
  ]
}
