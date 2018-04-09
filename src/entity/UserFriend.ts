import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { UserFriendInterface } from '../entity_interfaces/UserFriendInterface'

@Entity()
export class UserFriend implements UserFriendInterface {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    friendId: number

    getFriendId(): number {
        return this.friendId
    }
}
