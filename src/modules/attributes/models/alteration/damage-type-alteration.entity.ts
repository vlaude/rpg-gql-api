import { Alteration } from './alteration.entity';
import { ChildEntity, JoinColumn, OneToOne } from 'typeorm';
import { DamageType } from '../damage-type.entity';

@ChildEntity()
export class DamageTypeAlteration extends Alteration {
    @OneToOne(() => DamageType)
    @JoinColumn()
    damageType: DamageType;
}
