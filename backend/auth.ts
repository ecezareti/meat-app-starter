import { Request, Response } from 'express';
import { User, users } from './user';

export const handleAuthentication = (req: Request, res: Response) => {
  let user: User = req.body;

  if (isValid(user)) {
    const dbUser: User = users[user.email];

    res.json({
      name: dbUser.name,
      email: dbUser.email
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

  console.log(user);
  console.log(dbUser);

  return dbUser !== undefined && !dbUser.matches(user);
}
