const { Console } = require("console-mpds");

const console = new Console();

const getUrlCurry = protocol => domain => path => resource => 
    `${protocol}://${domain}/${path}/${resource}`;

const getGameTicTacToeUrl = getUrlCurry(`http`)(`www.usantecla.com`)(`game-ticTacToe`);
console.writeln(getGameTicTacToeUrl(`game/3/board`));
console.writeln(getGameTicTacToeUrl(`game/0/board`));
const getFtp = getUrlCurry(`ftp`);

let getManagerTaskUrl = getFtp(`www.upm.com`)(`manager-task`);
console.writeln(getManagerTaskUrl(`data.log`));
getManagerTaskUrl = getFtp(`www.urjc.com`)(`manager-task`);
console.writeln(getManagerTaskUrl(`data.log`));
console.writeln();
