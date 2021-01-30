import { ObjectType } from '@nestjs/graphql';
import PaginatedResponse from '../../common/pagination/pagination';
import { WeightEntry } from '../weightentry.model';

@ObjectType()
export class WeightEntryConnection extends PaginatedResponse(WeightEntry) {}
