import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';
import { Attribute } from '../attribute.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Boost {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'int' })
    value: number;

    @ManyToOne(
        () => Attribute,
        attribute => attribute.boosts
    )
    attribute: Attribute;
}
