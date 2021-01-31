const { Version1 } = require('net-snmp');

module.exports = {
    COMMUNITY_STRING: 'public',
    PORT: 8080,
    devices: {
        ubuntu: {
            ip: '127.0.0.1',
            community: 'public'
        },
        windows: {
            ip: '192.168.1.25',
            // ip: 'localhost',
            community: 'public'
        },
    },
    SNMP_CONFIG: {
        port: 161,
        retries: 1,
        timeout: 5000,
        backoff: 1.0,
        transport: "udp4",
        trapPort: 162,
        version: Version1,
        backwardsGetNexts: true,
        idBitsSize: 32
    },
    oids: [{
            name: 'sysDescr',
            oid: '1.3.6.1.2.1.1.1.0',
            description: "A textual description of the entity. This value should include the full name and version identification of the system's hardware type, software operating-system, and networking software."
        },
        {
            name: 'sysUpTime',
            oid: '1.3.6.1.2.1.1.3.0',
            description: "sysUpTimeInstance"
        },
        {
            name: 'sysName',
            oid: '1.3.6.1.2.1.1.5.0',
            description: "An administratively-assigned name for this managed node. By convention, this is the node's fully-qualified domain name. If the name is unknown, the value is the zero-length string."
        },
        {
            name: 'sysServices',
            oid: '1.3.6.1.2.1.1.7.0',
            description: 'A value which indicates the set of services that this entity may potentially offer.'
        },
        {
            name: 'totalRam',
            oid: '1.3.6.1.2.1.25.2.2.0',
            description: 'Total physical system RAM in kbytes'
        }
    ]
};