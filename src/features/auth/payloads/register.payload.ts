import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { UserRoles } from '../../../shared/users/models/user.model';

export class RegisterPayload {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  province: string;

  @IsNotEmpty()
  @IsString()
  zipcode: string;

  @IsNotEmpty()
  @IsOptional()
  role: UserRoles;
}

export class RegisterByInvitationParamPayload {
  @IsNotEmpty()
  @IsUUID(4, { message: 'Token is invalid' })
  invitation_token: string;
}
