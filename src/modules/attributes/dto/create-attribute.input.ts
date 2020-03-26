import { Field, InputType } from '@nestjs/graphql';
import { CreateAlterationInput } from './create-alteration.input';

@InputType()
export class CreateAttributeInput {
    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    isPowerSource?: boolean;

    @Field({ nullable: true })
    isVitalitySource?: boolean;

    @Field(() => [CreateAlterationInput], { nullable: true })
    alterations?: CreateAlterationInput[];
}
