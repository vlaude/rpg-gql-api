import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DamageType {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 20 })
    name: string;
}
