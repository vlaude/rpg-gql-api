import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

/**
 *
 */
@Entity()
@ObjectType()
export class DamageType {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @Column({ unique: true, length: 20 })
    @Field()
    name: string;
}
