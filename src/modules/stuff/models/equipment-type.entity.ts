import { EquipmentPosition } from './equipment-position.entity';
// Armure, Arme, Arbalète, Bijoux, Armure en cuire, Arme à deux mains  etc.
export class EquipmentType {
    id: string;
    name: string;
    subType?: EquipmentType;
    position?: EquipmentPosition;
}
