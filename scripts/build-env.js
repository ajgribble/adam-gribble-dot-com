// Entry point for ENV variables to be injected into .env file (if necessary)
const fs = require('fs');
fs.writeFileSync('./.env', '');