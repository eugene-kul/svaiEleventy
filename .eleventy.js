module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('images');
	eleventyConfig.addPassthroughCopy('scripts');
	eleventyConfig.addPassthroughCopy('styles');
};