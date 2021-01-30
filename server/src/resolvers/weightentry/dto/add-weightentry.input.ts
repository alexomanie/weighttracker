import { InputType, Field } from '@nestjs/graphql';
import { Mood } from '../../../models/weightentry.model';

@InputType()
export class AddWeightEntryInput {
  @Field()
  weight: number;
  @Field()
  day: number;
  @Field()
  mood?: Mood;
}
