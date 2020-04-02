import { EquipmentPosition } from './equipment-position.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

/**
 *
 */
@Entity()
@ObjectType()
export class EquipmentType {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @Column({ unique: true, length: 20 })
    @Field()
    name: string;

    @ManyToOne(() => EquipmentType)
    @Field(() => EquipmentType, { nullable: true })
    upType?: EquipmentType;

    @OneToMany(
        () => EquipmentType,
        equipmentType => equipmentType.upType
    )
    @Field(() => [EquipmentType], { nullable: true })
    subTypes?: EquipmentType[];

    @OneToOne(() => EquipmentPosition, { eager: true })
    @JoinColumn()
    @Field(() => EquipmentPosition, { nullable: true })
    position?: EquipmentPosition;
}
