import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Attribute } from './attribute.entity';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { AlterationType } from './alteration-type.enum';

@Entity()
@ObjectType()
export abstract class Alteration {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @Column({
        type: 'enum',
        enum: AlterationType,
    })
    @Field(() => AlterationType)
    type: AlterationType;

    @Column('int')
    @Field(() => Int)
    value: number;

    @Column()
    @Field()
    property: string;

    @ManyToOne(() => Attribute)
    attribute: Attribute;
}
