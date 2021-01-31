const snmp = require("net-snmp");
const { io } = require('../app');
const { devices, oids, SNMP_CONFIG, SNMPV3_CONFIG } = require("../config");
const { timeTickConverter, kilobytesToGb } = require('../helpers/utils');
const RsaService = require('./RsaService');

module.exports = class SessionManager {

    static initSessions() {
        for (const key in devices) {
            if (devices.hasOwnProperty(key)) {
                const device = devices[key];
                device.session = snmp.createSession(device.ip, device.community, SNMP_CONFIG);
            }
        }
    }

    static getClientData(name, cb) {
        let oidsList = oids.map(elem => elem.oid);
        let oidNames = oids.map(elem => elem.name);
        devices[name].session.get(oidsList, (err, varbinds) => {
            if (err) {
                console.log(`ERROR: ${err}`);
            } else {
                let clientData = {};
                varbinds.forEach((element, idx) => {
                    if (snmp.isVarbindError(element)) {
                        console.log(snmp.varbindError(element));
                    } else {
                        if (element.value.byteLength) {
                            element.value = element.value.toString();
                        }
                        if (oidNames[idx] === 'totalRam') {
                            element.value = kilobytesToGb(element.value);
                        }
                        clientData[oidNames[idx]] = element.value;
                    }
                });
                let encryptedData = RsaService.encryptData(clientData);
                cb(encryptedData);
            }
        });
    }

    static getProcessorUsagePercent(name) {
        let oid = "1.3.6.1.2.1.25.3.3.1.2";
        let aux = 0;

        function doneCb(error) {
            let n = name === 'windows' ? 8 : 4;
            io.sockets.in(name).emit('cpu', { name, cpuUsagePercentage: (aux / 4) });
            if (error)
                console.error(error.toString());
        }


        // CPU
        function feedCb(varbinds) {
            for (var i = 0; i < varbinds.length; i++) {
                if (snmp.isVarbindError(varbinds[i]))
                    console.error(snmp.varbindError(varbinds[i]));
                else
                    aux += varbinds[i].value;
            }
        }
        devices[name].session.subtree(oid, feedCb, doneCb);
    }

    static getMemoryUsage() {
        let oid = '1.3.6.1.2.1.25.5.1.1.2';
        let aux = 0;
        let pn = 0;


        function doneCb(error) {
            io.sockets.in(name).emit('cpu', { name, cpuUsagePercentage: (aux / pn) });
            if (error)
                console.error(error.toString());
        }


        // CPU
        function feedCb(varbinds) {
            for (var i = 0; i < varbinds.length; i++) {
                if (snmp.isVarbindError(varbinds[i]))
                    console.error(snmp.varbindError(varbinds[i]));
                else {
                    aux += varbinds[i].value;
                    pn++;
                }

            }
        }
        devices[name].session.subtree(oid, feedCb, doneCb);
    }

    static getMemoryUsage(name) {
        let oids = ['1.3.6.1.4.1.2021.4.6.0'];
        devices[name].session.get(oids, (err, varbinds) => {
            if (err) {
                console.log("Err: ", err);
            } else {
                varbinds.forEach(element => {
                    if (snmp.isVarbindError(element)) {
                        console.log(snmp.varbindError(element));
                    } else {
                        let result = element.value / 1000000;
                        io.sockets.in('ubuntu').emit('memory', { name: 'ubuntu', memoryUsageGb: result });
                    }
                });
            }
        });
    }
}