import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Question } from './questions.entity';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'mediumtext' })
  description: string;

  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
