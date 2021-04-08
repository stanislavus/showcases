"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router = express_1["default"].Router();
router.get('/', function (req, res, next) {
    res.json({ title: 'Express', isWatched: true });
});
exports["default"] = router;
//# sourceMappingURL=index.js.map