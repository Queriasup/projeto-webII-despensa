import { Entity, Column, PrimaryGeneratedColumn, NumericType } from 'typeorm';

@Entity()
export class Despensa {
  @PrimaryGeneratedColumn()
  codigo: number;

 @Column()
 codigo_cliente: number;
}

export class DespensaUPDT {
  readonly codigo_cliente: number;
}