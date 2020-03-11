import { Attribute } from './attribute.entity';

// +11 force [10-20]
export class AttributeRange {
    attribute: Attribute;
    min: number;
    max: number;
}
