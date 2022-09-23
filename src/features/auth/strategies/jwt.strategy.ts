import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

import { EnvService } from '../../../core/config/env.service';
import {
  LoginEmailCredentials,
  LoginPhoneCredentials,
} from '../models/credentials.interface';
import { AuthService } from '../services/auth.service';
import { UserRoles } from '../../../shared/users/models/user.model';

interface ValidatedEmail {
  email: string;
  role: UserRoles;
}

interface ValidatedPhone {
  phone: string;
  role: UserRoles;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly envService: EnvService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
      secretOrKey: envService.JWT.key,
    });
  }

  async validateEmail(
    payload: any,
    request: LoginEmailCredentials,
  ): Promise<ValidatedEmail | HttpException> {
    const user = await this.authService.validateEmail(request);
    const validatedUser = { email: user.email, role: user.role };
    return validatedUser || new UnauthorizedException();
  }

  async validatePhone(
    payload: any,
    request: LoginPhoneCredentials,
  ): Promise<ValidatedPhone | HttpException> {
    const user = await this.authService.validatePhone(request);
    const validatedUser = { phone: user.phone, role: user.role };
    return validatedUser || new UnauthorizedException();
  }
}
