import { ChildEntity, JoinColumn, OneToOne } from 'typeorm';
import { Boost } from './boost.entity';
import { DamageType } from '../damage-type.entity';

@ChildEntity()
export class DamageTypeBoost extends Boost {
    @OneToOne(() => DamageType)
    @JoinColumn()
    damageType: DamageType;
}
