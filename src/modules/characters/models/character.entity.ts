import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/models/user.entity';
import { Team } from '../../teams/models/team.entity';

@Entity()
export class Character {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 20 })
    name: string;

    @ManyToOne(
        () => Team,
        team => team.members,
        { nullable: true }
    )
    team?: Team;

    @ManyToOne(
        () => User,
        user => user.characters
    )
    owner: User;
}
