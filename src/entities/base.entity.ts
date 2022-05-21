import { CreateDateColumn, DeepPartial, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity<T> {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  updatedAt: Date;

  constructor(entity: DeepPartial<T>) {
    Object.assign(this, entity);
  }
}
