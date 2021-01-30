import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from './user.model';
import { BaseModel } from './base.model';

export enum Mood {
  BAD = 'BAD',
  GOOD = 'GOOD',
}

registerEnumType(Mood, {
  name: 'Mood',
  description: 'Mood of the day',
});

@ObjectType()
export class WeightEntry extends BaseModel {
  weight: number;
  mood: Mood;
  day: number;
  user: User;
}
