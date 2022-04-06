module.exports = function (elventyConfig) {
    elventyConfig.addPassthroughCopy("src/style");
    elventyConfig.addPassthroughCopy("src/md");
    elventyConfig.addPassthroughCopy("src/media");
    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};