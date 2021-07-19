const {getTokenByDevice} = require('../lib/hash');

module.exports.init = function () {
let macAddres = 'F9:2B:1A:00:26:E1'
let result = getTokenByDevice(macAddres);
console.log(`Get token to mac address: ${macAddres}`, result);

macAddres = 'DC6513BF-CD8C-CFE5-2025-E5A073D30F68'
result = getTokenByDevice(macAddres);
console.log(`Get token to mac address: ${macAddres}`, result);

macAddres = '829A0496-4F11-4437-EC31-AD818B552B7B'
result = getTokenByDevice(macAddres);
console.log(`Get token to mac address: ${macAddres}`, result);

macAddres = 'BC:51:1C:00:26:E1'
result = getTokenByDevice(macAddres);
console.log(`Get token to mac address: ${macAddres}`, result);

macAddres = '6F:2B:1A:00:26:E1'
result = getTokenByDevice(macAddres);
console.log(`Get token to mac address: ${macAddres}`, result);

macAddres = 'D6:E7:0D:00:26:E1'
result = getTokenByDevice(macAddres);
console.log(`Get token to mac address: ${macAddres}`, result);
}