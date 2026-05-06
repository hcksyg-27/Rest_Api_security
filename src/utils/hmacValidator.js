const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

function verifyHMAC(req) {
    const clientSignature = req.headers['x-signature'];
    const secret = process.env.HMAC_SECRET;
    const body = req.rawBody || '{}';
    

    const serverSignature = crypto
        .createHmac('sha256', secret)
        .update(body)
        .digest('hex');
    console.log(serverSignature);
    return clientSignature === serverSignature;
}

module.exports = { verifyHMAC };
