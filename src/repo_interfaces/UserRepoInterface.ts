import { UserInterface } from '../entity_interfaces/UserInterface'

export interface UserRepoInterface {
    findById(id: number): Promise<UserInterface>
}
