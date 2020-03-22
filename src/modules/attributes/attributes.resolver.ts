import { Query, Resolver } from '@nestjs/graphql';
import { Attribute } from './models/attribute.entity';
import { AttributesService } from './attributes.service';

@Resolver(() => Attribute)
export class AttributesResolver {
    constructor(private attributesService: AttributesService) {}

    @Query(() => [Attribute])
    async attributes(): Promise<Attribute[]> {
        return this.attributesService.findAll();
    }
}
