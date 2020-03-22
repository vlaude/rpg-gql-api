import { EquipmentType } from './equipment-type.entity';
import { AttributeRange } from '../../attributes/models/attribute-range.embedded';
import { DamageType } from '../../attributes/models/damage-type.entity';

// Une pièce d'équipement
export class Equipment {
    id: string;
    name: string;
    description: string;
    story: string;
    type: EquipmentType;
    attributeRanges: AttributeRange[];
    damageType: DamageType;
}
