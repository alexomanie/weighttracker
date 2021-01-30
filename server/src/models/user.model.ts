import {
  Field,
  ObjectType,
  registerEnumType,
  HideField,
} from '@nestjs/graphql';
import { WeightEntry } from './weightentry.model';
import { BaseModel } from './base.model';

@ObjectType()
export class User extends BaseModel {
  email: string;
  firstname?: string;
  lastname?: string;
  entries: WeightEntry[];
  @HideField()
  password: string;
}
