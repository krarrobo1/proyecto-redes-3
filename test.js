const snmp = require("net-snmp");

// let oids = ["1.3.6.1.2.1.1.1.0", "1.3.6.1.2.1.1.3.0", "1.3.6.1.2.1.1.7.0", "1.3.6.1.2.1.25.1.1.0", "1.3.6.1.2.1.25.1.5.0", "1.3.6.1.2.1.25.5.1.1.1.1", "1.3.6.1.4.1.2021.4.5.0"];
let oids = ["1.3.6.1.2.1.1.1.0", "1.3.6.1.2.1.1.3.0", "1.3.6.1.2.1.1.7.0", "1.3.6.1.2.1.25.1.1.0", "1.3.6.1.2.1.25.1.5.0", "1.3.6.1.2.1.25.5.1.1.1.1", "1.3.6.1.2.1.25.2.2.0", "1.3.6.1.2.1.25.2.3.1.6.1", "1.3.6.1.2.1.25.3.3.1.2.5", "1.3.6.1.2.1.25.3.3.1.2.0"]; // kb

// let session = snmp.createSession('localhost', 'public');
let session = snmp.createSession('192.168.1.25', 'public');

function init() {
    session.get(oids, (err, varbinds) => {
        if (err) {
            console.log("Err: ", err);
        } else {
            varbinds.forEach(element => {
                if (snmp.isVarbindError(element)) {
                    console.log(snmp.varbindError(element));
                } else {
                    console.log(`${element.oid} => ${element.value}`);
                }
            });
        }
        session.close();
    });
}

init();