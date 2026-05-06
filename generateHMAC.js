const crypto = require('crypto');

const secret = "mysecretkey123";
const body = JSON.stringify({});

const signature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex')



console.log('X-Signature:', signature);