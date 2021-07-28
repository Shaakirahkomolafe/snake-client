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
    console.log('Successfully connected to game server');
  });

  return conn;
};

console.log("Connecting ...");
connect();
module.exports = {
  connect,
};