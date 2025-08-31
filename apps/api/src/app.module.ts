import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import envConfig from './utils/config/env.config';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
