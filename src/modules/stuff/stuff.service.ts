import { Injectable } from '@nestjs/common';
import { EquipmentPosition } from './models/equipment-position.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEquipmentPositionInput } from './dto/create-equipment-position.input';
import { CreateEquipmentTypeInput } from './dto/create-equipment-type.input';
import { EquipmentType } from './models/equipment-type.entity';

@Injectable()
export class StuffService {
    constructor(
        @InjectRepository(EquipmentType) private readonly equipmentTypeRepository: Repository<EquipmentType>,
        @InjectRepository(EquipmentPosition)
        private readonly equipmentPositionRepository: Repository<EquipmentPosition>
    ) {}

    async findAllEquipmentTypes(): Promise<EquipmentType[]> {
        return this.equipmentTypeRepository.find();
    }

    async createEquipmentType(createEquipmentTypeData: CreateEquipmentTypeInput): Promise<EquipmentType> {
        const equipmentType = this.equipmentTypeRepository.create({
            name: createEquipmentTypeData.name,
            upType: await this.equipmentTypeRepository.findOne(createEquipmentTypeData.upTypeId),
            position: await this.equipmentPositionRepository.findOne(createEquipmentTypeData.positionId),
        });
        return this.equipmentTypeRepository.save(equipmentType);
    }

    async findAllEquipmentPositions(): Promise<EquipmentPosition[]> {
        return this.equipmentPositionRepository.find();
    }

    async createEquipmentPosition(
        createEquipmentPositionData: CreateEquipmentPositionInput
    ): Promise<EquipmentPosition> {
        const equipmentPosition = this.equipmentPositionRepository.create({ ...createEquipmentPositionData });
        return this.equipmentPositionRepository.save(equipmentPosition);
    }

    async findAllEquipmentTypesByUpTypeId(upTypeId: string): Promise<EquipmentType[]> {
        return this.equipmentTypeRepository.find({ where: { upType: { id: upTypeId } } });
    }
}
