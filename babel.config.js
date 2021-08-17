

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
    ['module:react-native-dotenv',
    {
      "moduleName": "@dotenv",
      "safe": false,
      "allowUndefined": true,
      "path": ".env",
      "blacklist": null,
      "whitelist": null
    }]
    ]
  };
};
