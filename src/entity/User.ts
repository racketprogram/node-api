import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { UserInterface } from '../entity_interfaces/UserInterface'

@Entity()
export class User implements UserInterface {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    getFirstName(): string {
        return this.firstName
    }
}
