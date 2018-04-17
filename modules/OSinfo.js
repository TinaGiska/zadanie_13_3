var os = require('os');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    var uptime = os.uptime();
    console.log('System:'.rainbow, type);
    console.log('Release:'.green, release);
    console.log('CPU model:'.underline.yellow, cpu);
    console.log('User name:'.blue, userInfo.username);
    console.log('Home dir:'.inverse, userInfo.homedir);
    console.log('Uptime: ~'.trap, (uptime / 60).toFixed(0), 'min');

}

exports.print = getOSinfo;
