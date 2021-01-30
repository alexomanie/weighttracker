import { WeightEntryResolver } from './weightentry.resolver';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';

@Module({
  providers: [WeightEntryResolver, PrismaService],
})
export class WeightEntryModule {}
