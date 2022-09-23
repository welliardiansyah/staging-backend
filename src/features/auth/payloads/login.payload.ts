import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginPayloadEmail {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class LoginPayloadPhone {
  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
