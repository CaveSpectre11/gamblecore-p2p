'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on gamblecore-p2p Module {0}'
};

module.exports = require('gamblecore-lib').errors.extend(spec);
