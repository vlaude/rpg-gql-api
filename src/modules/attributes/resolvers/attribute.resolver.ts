import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Attribute } from '../models/attribute.entity';
import { AttributeService } from '../services/attribute.service';
import { CreateAttributeInput } from '../dto/create-attribute.input';

@Resolver(() => Attribute)
export class AttributeResolver {
    constructor(private attributesService: AttributeService) {}

    @Query(() => [Attribute])
    async attributes(): Promise<Attribute[]> {
        return this.attributesService.findAll();
    }

    @Mutation(() => Attribute)
    async createAttribute(@Args('createAttributeData') createAttributeData: CreateAttributeInput): Promise<Attribute> {
        return this.attributesService.create(createAttributeData);
    }
}
