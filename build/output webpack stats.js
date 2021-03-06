'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = output_webpack_stats;

var _safe = require('colors/safe');

var _safe2 = _interopRequireDefault(_safe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function error(error) {
	console.error(_safe2.default.red(error));
} // outputs webpack stats to console if there are no errors or warnings

function warning(warning) {
	console.log(_safe2.default.yellow(warning));
}

var first_run = true;
var was_faulty = false;

function output_webpack_stats(stats, json, verbose) {
	// if there were any errors
	if (json.errors.length > 0) {
		was_faulty = true;
		return json.errors.forEach(error);
	}

	// if there were any warnings
	if (json.warnings.length > 0) {
		json.warnings.forEach(warning);
	}

	// if it's ok

	if (!verbose && !first_run && was_faulty) {
		// green colour
		console.log(_safe2.default.green('~ Webpack build status: OK ~'));

		was_faulty = false;
	}

	if (verbose || first_run) {
		console.log(stats.toString({
			chunks: false,
			colors: true
		}));

		first_run = false;
	}
}
module.exports = exports['default'];
//# sourceMappingURL=output webpack stats.js.map