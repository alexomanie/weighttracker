import { WeightEntryResolver } from './weightentry.resolver';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { WeightEntryService } from 'src/services/weightentry.service';

@Module({
  providers: [WeightEntryResolver, PrismaService, WeightEntryService],
})
export class WeightEntryModule {}
