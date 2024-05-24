const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      // Differentiate between user and admin based on data in the token payload
      if (decoded.type === 'user') {
        req.userData = decoded;
      } else if (decoded.type === 'admin') {
        req.adminData = decoded;
      } else {
        return res.status(400).json({ error: 'Invalid token type' });
      }
  
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
};
  

const authorize = (allowedRoles, userType) => {
  return (req, res, next) => {
    let role = null;

    if (userType === 'user') {
      // Users of type 'user' don't have roles
      role = 'user';
    } else if (userType === 'admin') {
      // Users of type 'admin' have roles
      role = req.adminData ? req.adminData.role : null;
      if (!role) {
        return res.status(400).json({ error: 'Missing role for admin' });
      }
    } else {
      return res.status(400).json({ error: 'Invalid user type' });
    }

    if (allowedRoles.includes(role)) {
      next();
    } else {
      return res.status(403).json({ error: 'Forbidden' });
    }
  };
};



module.exports = {
  authenticate,
  authorize,
};