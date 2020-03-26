import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDamageTypeInput {
    @Field()
    name: string;
}
