import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './questions.entity';

@Entity({ name: 'options' })
export class Option {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column({ type: 'varchar' })
  text: string;

  @Column({ type: 'boolean' })
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
