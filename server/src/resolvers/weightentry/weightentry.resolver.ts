import { PrismaService } from '../../services/prisma.service';
import { PaginationArgs } from '../../common/pagination/pagination.args';
import { WeightEntryIdArgs } from '../../models/args/weightentry-id.args';
import { UserIdArgs } from '../../models/args/user-id.args';
import { Resolver, Query, Parent, Args, ResolveField } from '@nestjs/graphql';
import { WeightEntry } from '../../models/weightentry.model';
import { WeightEntryOrder } from '../../models/inputs/weightentry-order.input';
import { WeightEntryConnection } from '../../models/pagination/weightentry-connection.model';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../guards/gql-auth.guard';

@Resolver((of) => WeightEntry)
export class WeightEntryResolver {
  constructor(private prisma: PrismaService) {}

  @UseGuards(GqlAuthGuard)
  @Query((returns) => WeightEntryConnection)
  async weightEntries(
    @Args() { skip, after, before, first, last }: PaginationArgs,
    @Args({
      name: 'orderBy',
      type: () => WeightEntryOrder,
      nullable: true,
    })
    orderBy: WeightEntryOrder
  ) {
    const a = await findManyCursorConnection(
      (args) =>
        this.prisma.weightEntry.findMany({
          include: { user: true },
          orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : null,
          ...args,
        }),
      () => this.prisma.weightEntry.count(),
      { first, last, before, after }
    );
    return a;
  }

  @Query((returns) => [WeightEntry])
  userWeightEntries(@Args() id: UserIdArgs) {
    return this.prisma.user.findUnique({ where: { id: id.userId } }).entries();
  }

  @Query((returns) => WeightEntry)
  async weightEntry(@Args() id: WeightEntryIdArgs) {
    return this.prisma.weightEntry.findUnique({
      where: { id: id.weightentryId },
    });
  }

  @ResolveField('user')
  async user(@Parent() entry: WeightEntry) {
    return this.prisma.weightEntry
      .findUnique({ where: { id: entry.id } })
      .user();
  }
}
