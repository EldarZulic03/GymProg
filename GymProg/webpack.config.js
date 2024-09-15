const webpack = require("@nativescript/webpack");

module.exports = (env) => {
    webpack.init(env);

    const config = webpack.resolveConfig();

    // Add "svelte" to the conditionNames array
    config.resolve = {
        ...config.resolve,
        conditionNames: ["svelte", "browser", "module", "main"]
    };

    return config;
};
