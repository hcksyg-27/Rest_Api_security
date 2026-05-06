const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 1 * 60 *1000,  // 1 Minute
    max: 3, // max 3 request per minute per IP
    message: "Too many request, please try again later.",
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = limiter;