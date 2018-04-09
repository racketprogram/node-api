import "reflect-metadata"
import { injectable, inject } from "inversify"
import { TYPES } from "../types"
import { UserControllerInterface } from '../controllers_interfaces/UserControllerInterface'
import { UserRepoInterface } from "../repo_interfaces/UserRepoInterface"
import { Timestamp } from "typeorm";

@injectable()
export class UserController implements UserControllerInterface {
    private userRepo: UserRepoInterface;

    public constructor(@inject(TYPES.UserRepo) userRepo: UserRepoInterface) {
        this.userRepo = userRepo;
    }

    async get(ctx: any, next: any) {
        const user = await this.userRepo.findById(1)
        ctx.body = user.getFirstName()
    }
}
