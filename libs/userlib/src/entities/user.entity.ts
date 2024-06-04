import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  constructor(
    username: string,
    password: string,
    name: string,
    lastname: string,
  ) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.lastname = lastname;
  }
}
