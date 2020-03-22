import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Alteration } from './alteration/alteration.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

/**
 *
 */
@Entity()
@ObjectType()
export class Attribute {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @Column({ length: 20 })
    @Field()
    name: string;

    @Column('text')
    @Field({ nullable: true })
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
