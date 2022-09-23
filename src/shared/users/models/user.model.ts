export enum UserRoles {
  owner = 'owner',
  admin = 'admin',
  merchant = 'merchant',
  customer = 'customer',
}

export interface UserInterface {
  readonly id?: string;
  readonly email: string;
  readonly phone: string;
  readonly name: string;
  readonly address: string;
  readonly city: string;
  readonly province: string;
  readonly zipcode: string;
  readonly password: string;
  readonly role: UserRoles;
  readonly auth?: Record<string, any>;
}
