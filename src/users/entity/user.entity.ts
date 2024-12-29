import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Note } from 'src/notes/entity/note.entity';
import { SessionToken } from 'src/notes/entity/SessionToken.entity';

@Entity('users') // Nombre de la tabla en PostgreSQL
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @OneToMany(() => SessionToken, (sessionToken) => sessionToken.user)
  sessionTokens: SessionToken[]; // Propiedad que representa los tokens de sesión asociados al usuario

  @OneToMany(() => Note, (note) => note.user)
  notes: Note[]; // Propiedad que ahora existe en User
}
