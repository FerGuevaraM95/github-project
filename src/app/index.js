const ui = require('./ui');
const Github = require('./github');

const { client_id, client_secret } = require('./config.json');

const github = new Github(client_id, client_secret);

console.log(github.fetchUser('fazttech'));