import { Injectable, BadRequestException } from '@nestjs/common';
import { AddWeightEntryInput } from 'src/resolvers/weightentry/dto/add-weightentry.input';
import { PrismaService } from './prisma.service';

@Injectable()
export class WeightEntryService {
  constructor(private prisma: PrismaService) {}

  addWeightEntry(user, newWeightEntry: AddWeightEntryInput) {
    return this.prisma.weightEntry.create({
      data: {
        mood: newWeightEntry.mood,
        day: newWeightEntry.day,
        weight: newWeightEntry.weight,
        user: {
          connect: { id: user.id },
        },
      },
    });
  }
}
