import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Boost } from './boosts/boost.entity';

/**
 *
 */
@Entity()
export class Attribute {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 20 })
    name: string;

    @Column('text')
    description?: string;

    @OneToMany(
        () => Boost,
        boost => boost.attribute
    )
    boosts?: Boost[];
}
