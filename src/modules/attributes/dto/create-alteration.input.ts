import { Field, InputType, Int } from '@nestjs/graphql';
import { AlterationType } from '../models/alteration-type.enum';

@InputType()
export class CreateAlterationInput {
    @Field(() => AlterationType)
    type: AlterationType;

    @Field(() => Int)
    value: number;

    @Field()
    property: string;
}
