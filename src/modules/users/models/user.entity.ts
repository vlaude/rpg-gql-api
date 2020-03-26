import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Character } from '../../characters/models/character.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 20 })
    username: string;

    @Column({ select: false })
    password: string;

    @OneToMany(
        () => Character,
        character => character.owner
    )
    characters: Character[];
}
