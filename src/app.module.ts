import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm-config.service';
import { UsersModule } from './modules/users/users.module';
import { CharactersModule } from './modules/characters/characters.module';
import { TeamsModule } from './modules/teams/teams.module';
import { TournamentsModule } from './modules/tournaments/tournaments.module';
import { AttributesModule } from './modules/attributes/attributes.module';
import { StuffModule } from './modules/stuff/stuff.module';
import { ClassesModule } from './modules/classes/classes.module';
import { RacesModule } from './modules/races/races.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
        TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
        UsersModule,
        CharactersModule,
        TeamsModule,
        TournamentsModule,
        AttributesModule,
        StuffModule,
        ClassesModule,
        RacesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
