// user.ts
import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

interface AuthenticatedRequest extends Request {
  user?: any;
  token?: string;
}

const secretKey:string = 'AgungFhajarFadilah';

export const jwtMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized - Token not found' });
  }

  // Extract the token from the header
  const tokenParts = authHeader.split(' ');

  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Unauthorized - Invalid token format' });
  }

  const token = tokenParts[1];

  // Verify the token and handle authentication logic
  jwt.verify(token, secretKey, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden - Invalid token' });
    }

    // Save user information and token in the request object
    req.user = user;
    req.token = token;

    // Continue to the next middleware
    next();
  });
};
