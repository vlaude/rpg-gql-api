import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Attribute } from './models/attribute.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AttributesService {
    constructor(@InjectRepository(Attribute) private attributesRepository: Repository<Attribute>) {}

    async findAll(): Promise<Attribute[]> {
        return this.attributesRepository.find();
    }
}
