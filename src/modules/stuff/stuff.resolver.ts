import { Args, Mutation, Parent, Query, ResolveField, ResolveProperty, Resolver } from '@nestjs/graphql';

import { EquipmentPosition } from './models/equipment-position.entity';
import { StuffService } from './stuff.service';
import { CreateEquipmentPositionInput } from './dto/create-equipment-position.input';
import { EquipmentType } from './models/equipment-type.entity';
import { CreateEquipmentTypeInput } from './dto/create-equipment-type.input';

@Resolver(() => EquipmentType)
export class StuffResolver {
    constructor(private stuffService: StuffService) {}

    @Query(() => [EquipmentType])
    async equipmentTypes(): Promise<EquipmentType[]> {
        return this.stuffService.findAllEquipmentTypes();
    }

    @Mutation(() => EquipmentType)
    async createEquipmentType(
        @Args('createEquipmentTypeData') createEquipmentTypeData: CreateEquipmentTypeInput
    ): Promise<EquipmentType> {
        return this.stuffService.createEquipmentType(createEquipmentTypeData);
    }

    @Query(() => [EquipmentPosition])
    async equipmentPositions(): Promise<EquipmentPosition[]> {
        return this.stuffService.findAllEquipmentPositions();
    }

    @Mutation(() => EquipmentPosition)
    async createEquipmentPosition(
        @Args('createEquipmentPositionData') createEquipmentPositionData: CreateEquipmentPositionInput
    ): Promise<EquipmentPosition> {
        return this.stuffService.createEquipmentPosition(createEquipmentPositionData);
    }

    @ResolveField(() => [EquipmentType])
    async subTypes(@Parent() equipmentType: EquipmentType): Promise<EquipmentType[]> {
        return this.stuffService.findAllEquipmentTypesByUpTypeId(equipmentType.id);
    }
}
