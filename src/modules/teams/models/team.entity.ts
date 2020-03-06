import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Character } from '../../characters/models/character.entity';

@Entity()
export class Team {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20 })
    name: string;

    @OneToOne(() => Character)
    @JoinColumn()
    leader: Character;

    @OneToMany(
        () => Character,
        character => character.team
    )
    members: Character[];
}
