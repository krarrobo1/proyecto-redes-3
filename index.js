const snmp = require("net-snmp");

const session = snmp.createSession('localhost', 'public');

let oids = ["1.3.6.1.2.1.1.1.0", "1.3.6.1.2.1.1.3.0", "1.3.6.1.2.1.1.7.0", "1.3.6.1.2.1.25.1.1.0", "1.3.6.1.2.1.25.6.1.0", "1.3.6.1.2.1.25.1.5.0", "1.3.6.1.2.1.25.5.1.1.1.1"];

function init (){
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

