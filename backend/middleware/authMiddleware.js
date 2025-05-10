const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied. No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'Secret');
    req.user = decoded;
    next();
  } catch (error) {
    console.error('JWT Verification Error:', error.message);
    res.status(403).json({ error: 'Invalid or expired token.' });
  }
}

module.exports = verifyToken;