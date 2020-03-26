import { Injectable } from '@nestjs/common';
import { Alteration } from '../models/alteration.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlterationInput } from '../dto/create-alteration.input';

@Injectable()
export class AlterationService {
    constructor(@InjectRepository(Alteration) private alterationRepository: Repository<Alteration>) {}

    async create(alterationData: CreateAlterationInput): Promise<Alteration> {
        const alteration = this.alterationRepository.create({ ...alterationData });
        return this.alterationRepository.save(alteration);
    }
}
