import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrganizationInput {
  @Field({ nullable: true })
  _id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  logo: string;

  @Field({ nullable: true })
  country: string;
}
