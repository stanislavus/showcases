"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
exports["default"] = router;
