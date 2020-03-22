import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';
import { Attribute } from '../attribute.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Alteration {
    @PrimaryGeneratedColumn()
    id: string;

    @Column('int')
    value: number;

    @ManyToOne(
        () => Attribute,
        attribute => attribute.alterations
    )
    attribute: Attribute;
}
