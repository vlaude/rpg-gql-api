import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Alteration } from './alteration/alteration.entity';

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
        () => Alteration,
        alteration => alteration.attribute
    )
    alterations?: Alteration[];

    @Column({ type: 'boolean', default: false })
    isPowerSource?: boolean;

    @Column({ type: 'boolean', default: false })
    isVitalitySource?: boolean;
}
