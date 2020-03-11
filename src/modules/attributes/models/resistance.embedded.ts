import { DamageType } from './damage-type.entity';
import { IResistance } from './resistance.interface';

export class Resistance {
    resistance: IResistance<any>;
}

export class DamageTypeResistance implements IResistance<DamageType> {
    property: DamageType;
    resistance: number;
}
