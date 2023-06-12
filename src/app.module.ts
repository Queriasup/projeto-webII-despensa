import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DespensaModule } from './TypeORM/despensa/despensa.module';
import { Despensa } from './TypeORM/despensa/despensa.entity';

@Module({
  imports: [  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '8591',
    database: 'projetoweb2',
    entities: [Despensa],
    synchronize: false,
  }), DespensaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
