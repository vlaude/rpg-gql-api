import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DamageType } from '../models/damage-type.entity';
import { CreateDamageTypeInput } from '../dto/create-damage-type.input';
import { DamageTypeService } from '../services/damage-type.service';

@Resolver(() => DamageType)
export class DamageTypeResolver {
    constructor(private damageTypeService: DamageTypeService) {}

    @Query(() => [DamageType])
    async damageTypes(): Promise<DamageType[]> {
        return this.damageTypeService.findAll();
    }

    @Mutation(() => DamageType)
    async createDamageType(
        @Args('createDamageTypeData') createDamageTypeData: CreateDamageTypeInput
    ): Promise<DamageType> {
        return this.damageTypeService.create(createDamageTypeData);
    }
}
