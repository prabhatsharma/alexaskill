'use strict';

const Alexa = require('alexa-sdk');

module.exports.video = function (event, context, callback) {
  var alexa = Alexa.handler(event, context);

  alexa.appId = 'amzn1.ask.skill.70d3220b-c989-48ae-8ddb-d7d3c12b3861';
  ///alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

const handlers = {
  'GetSubscriberCount': function () {
    var say = 'Get Subscriber Count is not yet setup'
    console.log('say: ', say)
    this.response.speak(say);
    this.emit(':responseReady');
  },
  'GetVideoViewCount': function () {
    var say = 'Get Video Count is not yet setup'
    console.log('say: ', say)
    this.response.speak(say).listen(say);
    this.emit(':responseReady');
  },
  'GetVideoViewCountSinceDate': function () {
    var SinceDate = '';
    if (this.event.request.intent.slots.SinceDate.value) {
      SinceDate = this.event.request.intent.slots.SinceDate.value;
    }
    var say = 'Videos since ' + SinceDate +  ' is not yet setup';
    console.log('say: ', say)
    this.response.speak(say);
    this.emit(':responseReady');
  },
  'AMAZON.CancelIntent': function () {
    this.response.speak('See you later');
    this.emit(':responseReady');
  },
  'AMAZON.StopIntent': function () {
    this.emit('SessionEndedRequest');
  },
  'AMAZON.NoIntent': function () {
    this.emit('AMAZON.StopIntent');
  },
  'AMAZON.HelpIntent': function () {
    this.response.speak('Sill need to put help text');
    this.emit(':responseReady');
  },
  'LaunchRequest': function () {
    var say = 'Ask questions about subscriber or video or video count since date';
    this.response.listen();
    this.emit(':responseReady');
  },
  'SessionEndedRequest': function () {
    this.emit(':tell', 'Session ends');
  },
  'Unhandled': function () {
    var say = 'I am sorry, I don\'t know what to do '
    this.response.speak(say).listen(say);
    this.emit(':responseReady');
  }
}
