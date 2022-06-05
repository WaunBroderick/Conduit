import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MultiplechoiceService } from './multiplechoice.service';
import { Multiplechoice } from './entities/multiplechoice.entity';
import { CreateMultiplechoiceInput } from './dto/create-multiplechoice.input';
import { UpdateMultiplechoiceInput } from './dto/update-multiplechoice.input';

@Resolver(() => Multiplechoice)
export class MultiplechoiceResolver {
  constructor(private readonly multiplechoiceService: MultiplechoiceService) {}

  @Mutation(() => Multiplechoice)
  createMultiplechoice(
    @Args('createMultiplechoiceInput')
    createMultiplechoiceInput: CreateMultiplechoiceInput,
  ) {
    return this.multiplechoiceService.create(createMultiplechoiceInput);
  }

  @Query(() => [Multiplechoice], { name: 'multiplechoice' })
  findAll() {
    return this.multiplechoiceService.findAll();
  }

  @Query(() => Multiplechoice, { name: 'multiplechoice' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.multiplechoiceService.findOne(id);
  }

  @Mutation(() => Multiplechoice)
  updateMultiplechoice(
    @Args('updateMultiplechoiceInput')
    updateMultiplechoiceInput: UpdateMultiplechoiceInput,
  ) {
    return this.multiplechoiceService.update(
      updateMultiplechoiceInput.id,
      updateMultiplechoiceInput,
    );
  }

  @Mutation(() => Multiplechoice)
  removeMultiplechoice(@Args('id', { type: () => Int }) id: string) {
    return this.multiplechoiceService.remove(id);
  }
}
