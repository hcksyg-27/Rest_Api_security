# REST API Security Implementation

A comprehensive REST API security demonstration project that implements industry-standard security practices and middleware patterns using Node.js and Express.

## Overview

This project showcases essential security best practices for building and protecting REST APIs. It includes practical implementations of authentication, validation, protection mechanisms, and secure configuration patterns that are critical for production-ready applications.

## Key Features

**Comprehensive Security Middleware**
- Helmet.js integration for HTTP header security
- CORS (Cross-Origin Resource Sharing) configuration
- HTTP Parameter Pollution (HPP) prevention
- Request validation and sanitization
- Rate limiting to prevent abuse and DDoS attacks

**Authentication & Authorization**
- HMAC-SHA256 signature generation for request authentication
- Secure request verification mechanisms
- Cryptographic signing with raw request body preservation

**Data Protection**
- JSON body parser with raw body capture for signature verification
- Secure error handling and logging
- Environment-based configuration management

**API Protection Layers**
- Rate limiting middleware for throttling requests
- Input validation against parameter pollution attacks
- Structured error responses with appropriate HTTP status codes

## Project Structure

```
Rest_Api_security/
├── server.js                    # Main application entry point
├── app.js                       # Express app configuration (alternative)
├── generateHMAC.js              # HMAC signature generation utility
└── src/
    ├── config/
    │   └── db.js               # Database connection setup
    ├── middleware/
    │   └── rateLimiter.js       # Rate limiting middleware
    └── routes/
        └── patientRoutes.js     # Patient API routes
```

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Security Libraries**:
  - Helmet.js - HTTP header protection
  - CORS - Cross-origin resource handling
  - HPP - HTTP parameter pollution prevention
  - crypto - Native Node.js cryptography
- **Middleware**:
  - Morgan - HTTP request logging
  - Body-parser - Request body parsing
  - dotenv - Environment configuration
- **Database**: MongoDB (configured in src/config/db.js)

## Security Implementations

### 1. HTTP Header Protection (Helmet.js)
Helmet automatically sets various HTTP headers to enhance security:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Strict-Transport-Security
- And more...

### 2. CORS Configuration
Properly configured Cross-Origin Resource Sharing to control which origins can access your API resources.

### 3. Request Signing (HMAC)
Implements HMAC-SHA256 signatures for request authentication:
```javascript
const crypto = require('crypto');
const signature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');
```

### 4. Rate Limiting
Middleware to throttle requests and prevent abuse, DoS attacks, and resource exhaustion.

### 5. Parameter Pollution Prevention (HPP)
Protects against HTTP Parameter Pollution attacks by validating and sanitizing incoming parameters.

### 6. Raw Body Capture
Preserves the exact raw request body for signature verification before parsing, ensuring request integrity.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/hcksyg-27/Rest_Api_security.git
cd Rest_Api_security
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

4. Install required packages:
```bash
npm install express helmet cors hpp morgan body-parser dotenv
```

## Usage

Start the server:
```bash
node server.js
```

The API will be available at:
- Base URL: `http://localhost:5000`
- Patient endpoints: `http://localhost:5000/api/patients`

### Generating HMAC Signatures

Generate HMAC signatures for request authentication:
```bash
node generateHMAC.js
```

This outputs the X-Signature header value to include in authenticated requests.

## API Endpoints

The API exposes patient management endpoints with comprehensive security:

```
GET    /api/patients           - Retrieve all patients
GET    /api/patients/:id       - Get patient by ID
POST   /api/patients           - Create new patient
PUT    /api/patients/:id       - Update patient
DELETE /api/patients/:id       - Delete patient
```

All endpoints are protected by rate limiting and request validation middleware.

## Security Best Practices Demonstrated

- Explicit CORS origin whitelist configuration
- Environment-based secrets management
- Raw request body capture for integrity verification
- Comprehensive HTTP header hardening
- Input validation against common attack vectors
- Proper HTTP status codes for error responses
- Structured JSON error responses
- Cryptographic request signing
- Request throttling and rate limits
- Middleware-based security layering

## Configuration

### Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Environment mode (development/production)

### CORS Headers

The application accepts requests from any origin by default (configured in app.js). For production, modify the CORS origin configuration in server.js to restrict access to specific domains.

### Rate Limiting

Configure rate limits in `src/middleware/rateLimiter.js` to suit your application needs. Default settings are designed to prevent abuse while allowing legitimate traffic.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve the security implementations and add additional protection mechanisms.

## Learning Resources

This project demonstrates concepts from:
- OWASP REST Security Cheat Sheet
- Node.js Security Best Practices
- Express.js Security Recommendations
- HTTP Security Standards (RFC 7230, RFC 7231)

## License

This project is open source and available for educational and commercial use.

## Author

Created by hcksyg-27

## Support

For questions, issues, or suggestions about security implementations, please open an issue on the GitHub repository.

---

Last Updated: May 2026

This project is designed for learning and implementing security best practices in REST API development. Always review and adapt these implementations based on your specific security requirements and compliance needs.