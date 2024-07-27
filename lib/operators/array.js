var _ = require('lodash');
// var debug = require('debug')('mgenerate:array');

/**
 * $array operator, builds an array of n elements. Requires options `of`
 * and `number`. First evaluates `number`, then creates array with as many
 * copies of specified `of` value. Then evaluates the array.
 *
 * @example Create an array of 5 cities:
 *
 * {"cities": {"$array": {"of": "$city", "number": 5}}}
 *
 * @param  {Function} evaluator   evaluator function, passed in for every operator
 * @param  {Object} options       options to configure the array operator
 * @return {Array}                array of `number` elements
 */
module.exports = async function(evaluator, options) {
  console.log('Array');
  var item = options.of;
  var number = await evaluator(options.number, true);
  var replacement = _.map(_.range(number), function() {
    return item;
  });
  var result = await evaluator(replacement, true);
  console.log(result);
  return result;
};
