/**
 * Configure Eleventy for the Tinaba institutional site.
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig Eleventy configuration.
 * @returns {Record<string, unknown>} Eleventy project configuration.
 */
export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
    eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
    eleventyConfig.addWatchTarget("src/assets");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "docs"
        },
        templateFormats: ["njk", "md"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
}
