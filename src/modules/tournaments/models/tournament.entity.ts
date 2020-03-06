import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Team } from '../../teams/models/team.entity';

@Entity()
export class Tournament {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(() => Team)
    @JoinColumn()
    participatingTeams: Team[];

    @Column('date')
    startingDate: Date;

    @Column('date')
    endingDate: Date;
}
