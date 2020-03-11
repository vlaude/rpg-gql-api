import { DamageType } from './damage-type.entity';
import { PowerSource } from './power-source.entity';
import { IBoost } from './boost.interface';

export class Boost {
    boost: IBoost<any>;
}

export class DamageTypeBoost implements IBoost<DamageType> {
    boost: number;
    property: DamageType;
}

export class PowerSourceBoost implements IBoost<PowerSource> {
    boost: number;
    property: PowerSource;
}
