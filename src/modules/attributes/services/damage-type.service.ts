import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DamageType } from '../models/damage-type.entity';
import { Repository } from 'typeorm';
import { CreateDamageTypeInput } from '../dto/create-damage-type.input';

@Injectable()
export class DamageTypeService {
    constructor(@InjectRepository(DamageType) private damageTypeRepository: Repository<DamageType>) {}

    async findAll(): Promise<DamageType[]> {
        return this.damageTypeRepository.find();
    }

    async create(damageTypeData: CreateDamageTypeInput): Promise<DamageType> {
        const damageType = this.damageTypeRepository.create({ ...damageTypeData });
        return this.damageTypeRepository.save(damageType);
    }
}
