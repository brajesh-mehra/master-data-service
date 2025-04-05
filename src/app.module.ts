import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './config/configuration';
import { ManageCompanyModule } from './manage-company/manage-company.module';
import { DistrictTalukaModule } from './district-taluka/district-taluka.module';
import { LoadingTeamModule } from './loading-team/loading-team.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config) => ({
        uri: config.get('database.connectionString')
      }),
      inject: [ConfigService]
    }),
    ManageCompanyModule,
    DistrictTalukaModule,
    LoadingTeamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
