/**
 * Node.js program to send Pump data to server.
 */
var http = require('http');

var arguments=process.argv.slice(2);

var requestString= '';
requestString += '<PumpReportsStore>';
requestString += '<PumpReportStore';
requestString += ' dateTime="' + arguments[0] + '"';
requestString += ' pumpId="'+arguments[1]+'"';
requestString += ' batteryVoltage = "'+arguments[2]+'"';
requestString += ' cycles = "'+arguments[3]+'"';
requestString += ' temperature = "'+arguments[4]+'"';
requestString += '/>';
requestString += '</PumpReportsStore>';

var options = {
    host: 'receiver.factoryright.com',
    path: '/data/PumpReportsStore.php',
    method: 'POST'
};

callback = function(response) {
    console.log("requestMessage:  "+requestMessage+"\n");
    var responseMessage = '';
    response.on('data', function (chunk) { responseMessage += chunk; });
    response.on('end', function () { console.log("responseMessage:  "+responseMessage+"\n"); });
}

http.request(options, callback).end(requestString);




