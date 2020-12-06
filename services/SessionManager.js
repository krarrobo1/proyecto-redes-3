// const snmp = require("net-snmp");

// class SessionManager {
//     constructor() {
//         this.clients =
//     }
//     initSession() {
//         snmp.createSession('localhost', 'public');
//     }
// }




// // let oids = ["1.3.6.1.2.1.1.1.0", "1.3.6.1.2.1.1.3.0", "1.3.6.1.2.1.1.7.0", "1.3.6.1.2.1.25.1.1.0", "1.3.6.1.2.1.25.1.5.0", "1.3.6.1.2.1.25.5.1.1.1.1"];

// let oids = [
//     "1.3.6.1.2.1.1.1.0",
//     "1.3.6.1.2.1.1.3.0",
//     "1.3.6.1.4.1.2021.9.1.7.1",
//     "1.3.6.1.4.1.2021.9.1.9.1"
// ]



// function init() {
//     return new Promise((resolve, reject) => {
//         let results = [];
//         session.get(oids, (err, varbinds) => {
//             if (err) {
//                 console.log("Err: ", err);
//                 reject(err);
//             } else {

//                 varbinds.forEach(element => {
//                     if (snmp.isVarbindError(element)) {
//                         console.log(snmp.varbindError(element));
//                     } else {
//                         console.log(`${element.oid} => ${element.value}`);
//                         results.push(element.value);
//                     }
//                 });
//             }
//         });
//         session.close();
//         resolve(results);
//     })
// }


// // init().then((res) => {
// //     console.log(res);
// // }).catch(err => {
// //     console.log(err);
// // })



// // let upTime = results[1];

// // console.log(upTime);

// // function toTime(tickTime) {
// //     console.log(typeof(tickTime));
// //     let secs, mins, hours, days;

// //     secs = (tickTime / 100);
// //     mins = (tickTime / 6000);
// //     hours = (tickTime / 360000);
// //     days = (tickTime / 8640000);

// //     console.log(`Sysuptime \nDays: ${days} Hours: ${hours} Mins: ${mins}, Secs: ${secs}`);
// // }

// // toTime(upTime);

// init();