const MD5 = require("crypto-js/md5");

exports.getTokenByDevice = function (macAddress){
    try{
        // get Date
        const now = new Date();

        // remove seconds, milli e timezone to get md5 per minute
        const nowWithoutSeconds = now.toUTCString().substr(0, now.toUTCString().length - 7);

        // get remaing seconds of this token
        const remainingSeconds = 60 - now.getUTCSeconds();

        // generate md5 based on Mac Address + iso date without seconds
        const hashed = MD5(macAddress+nowWithoutSeconds).toString();

        // replace all non number from md5
        const splited = hashed.replace(/\D/g,'');

        // get first 4 numbers
        const token = splited.substr(0, 4);

        // result with 4 numbers token and remaining seconds valid
        const result = {token, remainingSeconds, nowWithoutSeconds, utcSeconds: now.getUTCSeconds(), hashed}
        return result
    }catch(e){
        console.log(e);
        return null;
    }
}