import { registerEnumType } from '@nestjs/graphql';

export enum AlterationType {
    DAMAGE_TYPE = 'DamageType',
}

registerEnumType(AlterationType, {
    name: 'AlterationType',
});
