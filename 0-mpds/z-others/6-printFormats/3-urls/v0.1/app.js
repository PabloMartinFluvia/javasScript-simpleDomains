const { Console } = require("console-mpds");

const console = new Console();

function getUrl(protocol, domain, path, resource) {
    return `${protocol}://${domain}/${path}/${resource}`;
}
console.writeln(getUrl(`http`, `www.usantecla.com`, `game-ticTacToe`, `game/3/board`));
console.writeln(getUrl(`http`, `www.usantecla.com`, `game-ticTacToe`, `game/0/board`));
console.writeln(getUrl(`ftp`, `www.upm.com`, `manager-task`, `data.log`));
console.writeln(getUrl(`ftp`, `www.urjc.com`, `manager-task`, `data.log`));
console.writeln();

