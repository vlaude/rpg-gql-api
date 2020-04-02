import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEquipmentTypeInput {
    @Field()
    name: string;

    @Field({ nullable: true })
    upTypeId?: string;

    @Field({ nullable: true })
    positionId?: string;
}
