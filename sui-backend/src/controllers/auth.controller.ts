import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';
import { CreateZkUserDto } from '@/dtos/zkUsers.dto';

class AuthController {
  public authService = new AuthService();

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const signUpUserData: User = await this.authService.signup(userData);

      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const { cookie, findUser } = await this.authService.login(userData);

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: findUser, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.user;
      const logOutUserData: User = await this.authService.logout(userData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutUserData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };

  public zkLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const { cookie, findUser } = await this.authService.zkLogin();
      // res.setHeader('Set-Cookie', [cookie]);
      // res.status(200).json({ data: findUser, message: 'zkLogin' });
    } catch (error) {
      next(error);
    }
  };

  public zkSignup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const zkUserData: CreateZkUserDto = req.body;
      const { loginUrl, nonce } = await this.authService.zkSignup(zkUserData);

      // res.status(200).json({ data: { loginUrl, nonce }, message: 'zkSignup' });
      res.redirect(loginUrl);
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
