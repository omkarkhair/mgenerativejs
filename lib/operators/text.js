/* eslint new-cap: 0 */
// var debug = require('debug')('mgenerate:text');

/**
 * $text returns a text generated by a large language model (llm) served through an ollama endpoint
 * Ollama endpoint must be configured as a environment variable MGENERATIVEJS_OLLAMA_ENDPOINT
 *
 * @param  {Function} evaluator   evaluator function, passed in for every operator
 * @param  {Object} options       options to configure the array operator
 * @return {String}               Generated text
 */
module.exports = async function(evaluator, options) {
  // default options
  return 'Hello World!';
};