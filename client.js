const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port:50542, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) =>{
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    conn.write('Name: KSO');
    conn.write('Move: up');
    console.log('Successfully connected to game server');
  });

  return conn;
};
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
      
    });
  };
  
  stdin.on("data", handleUserInput);
  return stdin;
};

console.log("Connecting ...");
connect();
setupInput();
module.exports = {
  connect,
};