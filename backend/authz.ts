import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { apiConfig } from './api-config';

export const handleAuthorization = (req: Request, res: Response, next) => {
  let token = extractToken(req);

  if (token === undefined) {
    res.setHeader('www-Authenticate', 'Bearer token_type="JWT');
    res.status(401).json({ message: 'Você precisa se autenticar' });
  } else {
    jwt.verify(token, apiConfig.secrect, (error, decoded) => {
      if (!decoded) {
        res.status(403).json({ message: 'Não autorizado' });
        return;
      }

      next();
    });
  }
};

function extractToken(req: Request): string {
  let token = undefined;

  if (req.headers !== undefined && req.headers.authorization !== undefined) {
    const parts: string[] = req.headers.authorization.split(' ');

    if (parts.length === 2 && parts[0] === 'Bearer') {
      return parts[1];
    }
  }

  return token;
}
