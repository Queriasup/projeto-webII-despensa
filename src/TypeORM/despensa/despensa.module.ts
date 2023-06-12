import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Despensa } from './despensa.entity';
import { DespensaService } from './despensa.service';
import { DespensaController } from './despensas.controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Despensa])],
  providers: [DespensaService],
  controllers: [DespensaController],
})
export class DespensaModule {}