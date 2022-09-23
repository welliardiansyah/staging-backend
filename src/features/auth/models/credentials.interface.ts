import { UserRoles } from '../../../shared/users/models/user.model';

export interface LoginEmailCredentials {
  email: string;
  password: string;
}

export interface LoginPhoneCredentials {
  phone: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  phone: string;
  password: string;
  name: string;
  address: string;
  city: string;
  province: string;
  zipcode: string;
  role: UserRoles;
}
