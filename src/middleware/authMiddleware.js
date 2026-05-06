const { verifyHMAC } = require('../utils/hmacValidator.js');

function authMiddleware(req, res, next) {
    const valid = verifyHMAC(req);
    if (!valid) return res.status(401).json({ message: 'Invalid signature' });
    next();
}

module.exports = authMiddleware;
