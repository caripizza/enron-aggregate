/* eslint-disable no-console */
const enron = require('./lib/connect');

enron()
    .then(messages => {
        return messages.find({}).toArray().then(console.log);
    });
