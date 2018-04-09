import "reflect-metadata"
import { injectable } from "inversify"
import { getConnection } from "typeorm"
import { UserRepoInterface } from "../repo_interfaces/UserRepoInterface"
import { UserInterface } from "../entity_interfaces/UserInterface"
import { User } from "../entity/User"

@injectable()
export class UserRepo implements UserRepoInterface {
    async findById(id: number): Promise<UserInterface> {
        const connection = getConnection()
        const userRepository = connection.getRepository(User)
        const user = await userRepository.findOneById(id)

        return user
    }
}
