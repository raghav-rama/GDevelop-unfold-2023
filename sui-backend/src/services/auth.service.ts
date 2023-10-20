import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';
import { CLIENT_ID, CLIENT_SECRET } from '@config';
import { generateNonce, generateRandomness } from '@mysten/zklogin';
import { SuiClient } from '@mysten/sui.js/client';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { type JwtPayload } from 'jwt-decode';
import { CreateZkUserDto } from '@/dtos/zkUsers.dto';

class AuthService {
  public users = userModel;
  REDIRECT_URL = 'http://localhost:3000/auth';

  public async zkLogin() {
    const FULLNODE_URL = 'https://fullnode.devnet.sui.io'; // replace with the RPC URL you want to use
    const suiClient = new SuiClient({ url: FULLNODE_URL });
    const { epoch, epochDurationMs, epochStartTimestampMs } = await suiClient.getLatestSuiSystemState();

    const maxEpoch = Number(epoch) + 2; // this means the ephemeral key will be active for 2 epochs from now.
    const ephemeralKeyPair = new Ed25519Keypair();
    const randomness = generateRandomness();
    const nonce = generateNonce(ephemeralKeyPair.getPublicKey(), maxEpoch, randomness);
    let params = new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: this.REDIRECT_URL,
      response_type: 'id_token',
      scope: 'openid',
      nonce: nonce,
    });
    let loginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
    axios.get(loginUrl).then(res => {
      console.log(res);
    });
  }

  public async zkSignup(zkUserData: CreateZkUserDto) {
    console.log(zkUserData);
    const FULLNODE_URL = 'https://fullnode.devnet.sui.io'; // replace with the RPC URL you want to use
    const suiClient = new SuiClient({ url: FULLNODE_URL });
    const { epoch, epochDurationMs, epochStartTimestampMs } = await suiClient.getLatestSuiSystemState();

    const maxEpoch = Number(epoch) + 2; // this means the ephemeral key will be active for 2 epochs from now.
    const ephemeralKeyPair = new Ed25519Keypair();
    const randomness = generateRandomness();
    const nonce = generateNonce(ephemeralKeyPair.getPublicKey(), maxEpoch, randomness);
    let params = new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: this.REDIRECT_URL,
      response_type: 'id_token',
      scope: 'openid',
      nonce: nonce,
    });
    let loginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
    return { loginUrl, nonce };
    // const { data } = await axios.get(loginUrl);
    // const { id_token } = data;
    // console.log(id_token);
    // const decoded = jwt_decode<JwtPayload>(id_token);
    // console.log(decoded);
  }
  public async signup(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User = await this.users.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });

    return createUserData;
  }

  public async login(userData: CreateUserDto): Promise<{ cookie: string; findUser: User }> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User = await this.users.findOne({ email: userData.email });
    if (!findUser) throw new HttpException(409, `This email ${userData.email} was not found`);

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Password is not matching');

    const tokenData = this.createToken(findUser);
    const cookie = this.createCookie(tokenData);

    return { cookie, findUser };
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User = await this.users.findOne({ email: userData.email, password: userData.password });
    if (!findUser) throw new HttpException(409, `This email ${userData.email} was not found`);

    return findUser;
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
