import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MultiplechoiceService } from './multiplechoice.service';
import { CreateMultiplechoiceInput } from './dto/create-multiplechoice.input';
import { UpdateMultiplechoiceInput } from './dto/update-multiplechoice.input';
import { MultipleChoice } from './multiplechoice.schema';

@Resolver(() => MultipleChoice)
export class MultiplechoiceResolver {
  constructor(private readonly multiplechoiceService: MultiplechoiceService) {}

  @Mutation(() => MultipleChoice)
  createMultiplechoice(
    @Args('createMultiplechoiceInput')
    createMultiplechoiceInput: CreateMultiplechoiceInput,
  ) {
    return this.multiplechoiceService.create(createMultiplechoiceInput);
  }

  @Query(() => [MultipleChoice], { name: 'multiplechoice' })
  findAll() {
    return this.multiplechoiceService.findAll();
  }

  @Query(() => MultipleChoice, { name: 'multiplechoice' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.multiplechoiceService.findOne(id);
  }

  @Mutation(() => MultipleChoice)
  updateMultiplechoice(
    @Args('updateMultiplechoiceInput')
    updateMultiplechoiceInput: UpdateMultiplechoiceInput,
  ) {
    return this.multiplechoiceService.update(
      updateMultiplechoiceInput.id,
      updateMultiplechoiceInput,
    );
  }

  @Mutation(() => MultipleChoice)
  removeMultiplechoice(@Args('id', { type: () => Int }) id: string) {
    return this.multiplechoiceService.remove(id);
  }
}
