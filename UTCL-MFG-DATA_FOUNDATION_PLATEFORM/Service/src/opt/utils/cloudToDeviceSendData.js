var connection = require("../db/connection");
var Client = require('azure-iothub').Client;
var Message = require('azure-iot-common').Message;



var connectionString = 'HostName=UTCMFGIOTHUB.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=2V4NgWm2Ha8vw3QNCQin0ASgUnCfJXjwyQ8RUljvKb0=';
var targetDevice = 'UTCMFGIOTKCW-01';

var serviceClient = Client.fromConnectionString(connectionString);
serviceClient.open(function (err) {
  if (err) {
    console.error('Could not connect: ' + err.message);
  } else {
    console.log('Service client connected');
    serviceClient.getFeedbackReceiver(receiveFeedback);
  }
  function receiveFeedback(err, receiver){
    receiver.on('message', function (msg) {
      console.log('Feedback message:')
      console.log(msg.getData().toString('utf-8'));
      
    });
  }
})
cloudToDeviceSendData = (val) => {
  try{

    var responseObject = {};
    function printResultFor(op) {
      return function printResult(err, res) {
        if (err) console.log(op + ' error: ' + err.toString());
        if (res) console.log(op + ' status: ' + res.constructor.name);
      };
    }
    
    var message = new Message(JSON.stringify(
      val
      ));
      message.ack = 'full';
      // message.messageId = "My Message ID";
    // console.log('Sending message: ' + message.getData());
    serviceClient.send(targetDevice, message, printResultFor('send'));
    return(responseObject)
  }catch(err){
    console.log(err)
  }
    
  };
  
  module.exports = cloudToDeviceSendData;
