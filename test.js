const snmp = require("net-snmp");
const { devices, SNMPV3_CONFIG } = require('./config');

var options = {
    port: 161,
    retries: 1,
    timeout: 5000,
    transport: "udp4",
    trapPort: 162,
    version: snmp.Version3,
    idBitsSize: 32,
    context: ""
};

// Example user
var user = {
    name: "rick",
    level: snmp.SecurityLevel.authPriv,
    authProtocol: snmp.AuthProtocols.sha,
    authKey: "1234567890",
    privProtocol: snmp.PrivProtocols.aes,
    privKey: "0979615531"
};

// let session = snmp.createSession('localhost', 'public');
let session = snmp.createV3Session('127.0.0.1', user, options);

session.on("error", (err) => {
    console.log('SNMP_ERR: ', err.message);
});
// let session = snmp.createSession('192.168.1.25', 'public');

// let oids = ['1.3.6.1.4.1.2021.4.6.0'];
let oids = ['1.3.6.1.2.1.25.2.2.0'];

function init() {
    session.get(oids, (err, varbinds) => {
        if (err) {
            console.log("Err: ", err);
        } else {
            varbinds.forEach(element => {
                if (snmp.isVarbindError(element)) {
                    console.log(snmp.varbindError(element));
                } else {
                    console.log(`${element.oid} => ${element.value / 1000000}`);
                }
            });
        }
    });
}


init();