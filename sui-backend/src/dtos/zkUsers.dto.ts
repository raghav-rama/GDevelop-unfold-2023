import { IsString, Contains, Length } from 'class-validator';

export class CreateZkUserDto {
  @IsString()
  @Contains('0x')
  @Length(66)
  public suiAddress: string;
}
