import { Controller, Get, Param, Body, Post, Delete, Put } from '@nestjs/common';
import { DespensaService } from './despensa.service'
import { Despensa, DespensaUPDT } from './despensa.entity';

@Controller('despensa')
export class DespensaController {
  constructor(private readonly despensaService: DespensaService) {}

  @Get()
  async findAll(): Promise<Despensa[]> {
    return this.despensaService.findAll();
  }

  @Get(':codigo')
  async findOne(@Param('codigo')codigo : number): Promise<Despensa> {
    return this.despensaService.findOne(codigo);
  }

  @Post('post')
  async create(@Body()data : Despensa): Promise<Despensa> {
    return this.despensaService.create(data);
  }

  @Delete(':codigo')
  async remove(@Param('codigo')codigo : number): Promise<void> {
    await this.despensaService.remove(codigo);
  }

  @Put(':codigo')
  async update(@Param('codigo')codigo: number, @Body()data: DespensaUPDT){
    return this.despensaService.update(codigo, data);
  }
}
