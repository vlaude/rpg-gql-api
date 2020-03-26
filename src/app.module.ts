import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm-config.service';
import { UsersModule } from './modules/users/users.module';
import { CharactersModule } from './modules/characters/characters.module';
import { TeamsModule } from './modules/teams/teams.module';
import { TournamentsModule } from './modules/tournaments/tournaments.module';
import { AttributeModule } from './modules/attributes/attribute.module';
import { StuffModule } from './modules/stuff/stuff.module';
import { ClassesModule } from './modules/classes/classes.module';
import { RacesModule } from './modules/races/races.module';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: true,
        }),
        ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
        TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
        UsersModule,
        CharactersModule,
        TeamsModule,
        TournamentsModule,
        AttributeModule,
        StuffModule,
        ClassesModule,
        RacesModule,
    ],
    providers: [AppResolver],
})
export class AppModule {}
