"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var index_1 = __importDefault(require("./routes/index"));
var users_1 = __importDefault(require("./routes/users"));
var graphql_1 = __importDefault(require("./routes/graphql"));
var app = express_1["default"]();
app.use(morgan_1["default"]('dev'));
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: false }));
app.use(cookie_parser_1["default"]());
app.use(express_1["default"].static(path_1["default"].join(__dirname, 'public')));
app.use('/', index_1["default"]);
app.use('/users', users_1["default"]);
graphql_1["default"](app);
app.listen(3000);
exports["default"] = app;
//# sourceMappingURL=app.js.map