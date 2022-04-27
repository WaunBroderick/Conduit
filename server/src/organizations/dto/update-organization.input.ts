import { CreateOrganizationInput } from './create-organization.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrganizationInput extends PartialType(
  CreateOrganizationInput,
) {
  @Field(() => String)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  logo: string;

  @Field({ nullable: true })
  country: string;
}
