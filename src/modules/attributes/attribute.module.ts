import { Module } from '@nestjs/common';
import { AttributeResolver } from './resolvers/attribute.resolver';
import { AttributeService } from './services/attribute.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attribute } from './models/attribute.entity';
import { DamageTypeResolver } from './resolvers/damage-type.resolver';
import { DamageTypeService } from './services/damage-type.service';
import { DamageType } from './models/damage-type.entity';
import { AlterationService } from './services/alteration.service';
import { Alteration } from './models/alteration.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Attribute, DamageType, Alteration])],
    providers: [AttributeResolver, AttributeService, DamageTypeResolver, DamageTypeService, AlterationService],
})
export class AttributeModule {}
