import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SchemaOptions } from '@nestjs/mongoose/dist/decorators/schema.decorator';
import { UserRoles } from '../models/user.model';

// todo: unify
const schemaOptions: SchemaOptions = {
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: (doc, result) => {
      result.id = result._id;
      delete result._id;
    },
  },
};

@Schema(schemaOptions)
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  province: string;

  @Prop({ required: true })
  zipcode: string;

  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop({ required: true, unique: true, index: true })
  phone: string;

  @Prop()
  password: string;

  @Prop(
    raw({
      email: { valid: { type: Boolean, default: false } },
      facebook: {
        user_id: String,
      },
      gmail: {
        user_id: String,
      },
      github: {
        user_id: String,
      },
    }),
  )
  auth?: Record<string, any>;

  @Prop({ type: Object })
  settings?: Record<string, any>;

  @Prop({ type: String, enum: Object.values(UserRoles), required: true })
  role: UserRoles;
}

export const UserSchema = SchemaFactory.createForClass(User);
