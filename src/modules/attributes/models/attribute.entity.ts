import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Boost } from './boost.embedded';
import { Resistance } from './resistance.embedded';

// Force, Armure, Dextérité etc.
@Entity()
export class Attribute {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20 })
    name: string;

    boosts?: Boost[];

    resistances?: Resistance[];
}
