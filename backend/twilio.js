const twilio = require('twilio');

const accountSid = process.env.accountSid// || 'ACd5b53dbdee7ab72ca7382d2aaa607153';
const authToken = process.env.authToken //|| 'a0177fcd641f669bc757f46e8d5c88b7';

console.log(accountSid, authToken, "thesse are accoutns info")
const client = twilio(accountSid, authToken);

module.exports = client;