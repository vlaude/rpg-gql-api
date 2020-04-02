import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEquipmentPositionInput {
    @Field()
    position: string;
}
