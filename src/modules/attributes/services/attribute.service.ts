import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Attribute } from '../models/attribute.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAttributeInput } from '../dto/create-attribute.input';

@Injectable()
export class AttributeService {
    constructor(@InjectRepository(Attribute) private attributesRepository: Repository<Attribute>) {}

    async findAll(): Promise<Attribute[]> {
        return this.attributesRepository.find();
    }

    async create(attributeData: CreateAttributeInput): Promise<Attribute> {
        const attribute = this.attributesRepository.create({ ...attributeData });
        return this.attributesRepository.save(attribute);
    }
}
