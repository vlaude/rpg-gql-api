import { Module } from '@nestjs/common';
import { StuffResolver } from './stuff.resolver';
import { StuffService } from './stuff.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentType } from './models/equipment-type.entity';
import { EquipmentPosition } from './models/equipment-position.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EquipmentType, EquipmentPosition])],
    providers: [StuffResolver, StuffService],
})
export class StuffModule {}
