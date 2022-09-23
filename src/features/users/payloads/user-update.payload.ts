import { IsEmail, IsOptional, IsString } from 'class-validator';
import { UserRoles } from '../../../shared/users/models/user.model';

export class UserUpdatePayload {
  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  province: string;

  @IsOptional()
  @IsString()
  zipcode: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  role: UserRoles;
}
