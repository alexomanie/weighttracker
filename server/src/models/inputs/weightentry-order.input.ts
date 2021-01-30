import { InputType, registerEnumType } from '@nestjs/graphql';
import { Order } from '../../common/order/order';

export enum WeightEntryOrderField {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  mood = 'mood',
}

registerEnumType(WeightEntryOrderField, {
  name: 'WeightEntryOrderField',
  description: 'Properties by which weight connections can be ordered.',
});

@InputType()
export class WeightEntryOrder extends Order {
  field: WeightEntryOrderField;
}
