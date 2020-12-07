module.exports = {
    timeTickConverter,
    kilobytesToGb
};


function timeTickConverter(ticksInSecs) {
    let ticks = ticksInSecs;
    let hh = Math.floor(ticks / 360000);
    // let mm = Math.floor((ticks % 3600) / 60);
    let mm = Math.floor((ticks % 3600) / 60);
    // let ss = Math.floor(ticks / 100);
    let ss = ticks % 60;
    console.log(`${hh}:${mm}:${ss}`);
    return pad(hh, 2) + ":" + pad(mm, 2) + ":" + pad(ss, 2);
}

function kilobytesToGb(kb) {
    return Math.round(kb / 1000000) + " GB";
}


function pad(n, width) {
    var n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}