import { User } from 'src/users/entity/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('session_tokens') // Nombre de la tabla en PostgreSQL
export class SessionToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 500 })
  token: string;

  @Column({ type: 'timestamp' })
  expiration: Date;

  @ManyToOne(() => User, (user) => user.sessionTokens) // Relación con User
  @JoinColumn({ name: 'user_id' }) // Especifica el nombre de la columna de clave foránea
  user: User; // Cada token de sesión está relacionado con un usuario

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
