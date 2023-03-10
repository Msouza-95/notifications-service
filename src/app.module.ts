import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.modules';
import { HttpModule } from './infra/http/http.modules';

@Module({
  imports: [ HttpModule, DatabaseModule],
  
})
export class AppModule {}
