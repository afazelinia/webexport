"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = require("prop-types");

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var InteractionPropTypes = {
  cursor: _propTypes.string,
  touchAction: (0, _propTypes.oneOf)(['auto', 'inherit', 'manipulation', 'none', 'pan-down', 'pan-left', 'pan-right', 'pan-up', 'pan-x', 'pan-y', 'pinch-zoom']),
  userSelect: _propTypes.string,
  willChange: _propTypes.string
};
var _default = InteractionPropTypes;
exports.default = _default;
module.exports = exports.default;