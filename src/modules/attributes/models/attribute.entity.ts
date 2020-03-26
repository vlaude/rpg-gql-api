import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Alteration } from './alteration.entity';
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

    @Column({ unique: true, length: 20 })
    @Field()
    name: string;

    @Column('text', { nullable: true })
    @Field({ nullable: true })
    description?: string;

    @OneToMany(
        () => Alteration,
        alteration => alteration.attribute,
        { cascade: true, eager: true }
    )
    @Field(() => [Alteration], { nullable: true })
    alterations?: Alteration[];

    @Column({ type: 'boolean', default: false })
    @Field()
    isPowerSource?: boolean;

    @Column({ type: 'boolean', default: false })
    @Field()
    isVitalitySource?: boolean;
}
