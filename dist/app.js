'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT;

app.get('/', function (req, res) {
    res.json({
        msg: 'ok welcome'
    });
});

app.listen(port, function () {
    console.log('Server running at http://localhost:' + port + '/');
});
//# sourceMappingURL=app.js.map