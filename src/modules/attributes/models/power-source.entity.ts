import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PowerSource {
    @PrimaryGeneratedColumn()
    id: string;
    name: string;
}
