const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT, // PORT number here,
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


console.log("Connecting ...");
connect();

module.exports = {
  connect,
};