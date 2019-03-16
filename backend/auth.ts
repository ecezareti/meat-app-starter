import { Request, Response } from 'express';
import { User, users } from './user';
import * as jtoken from 'jsonwebtoken';
import { apiConfig } from './api-config';

export const handleAuthentication = (req: Request, res: Response) => {
  let user: User = req.body;

  if (isValid(user)) {
    const dbUser: User = users[user.email];
    const token = jtoken.sign({ sub: dbUser.email, iss: apiConfig.secrect }, 'meet-api-password');

    res.json({
      name: dbUser.name,
      email: dbUser.email,
      accessToken: token
    });
  } else {
    res.status(403).json({
      message: 'Usuário ou senha invalidos'
    })
  }
}

function isValid(user: User): boolean {
  if (!user) {
    return false;
  }

  const dbUser: User = users[user.email];

  return dbUser !== undefined && !dbUser.matches(user);
}
