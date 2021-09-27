"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var PORT = process.env.PORT || 3030;
// setting up middlewares
app.use(express_1.default.json());
//import index router
//importing the routers
//SETTING UP TEMPLATING ENGINES
app.set('views', path_1.default.join(__dirname + '/views'));
app.set('view engine', 'pug');
require('./routes/routes')(app);
//listening to the port 
app.listen(PORT, function () {
    console.info("Server started at port " + PORT);
});
