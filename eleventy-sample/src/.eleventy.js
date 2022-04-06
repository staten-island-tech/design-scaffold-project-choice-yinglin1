module.exports = function (eleventyConifg) {
    eleventyConifg.addPassthroughCopy("src/style");
    eleventyConifg.addPassthroughCopy("src/md");
    eleventyConifg.addPassthroughCopy("src/media");
    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};