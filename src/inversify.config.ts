import { Container } from 'inversify'
import { TYPES } from './types'
import { UserRepoInterface } from './repo_interfaces/UserRepoInterface'
import { UserRepo } from './repo/UserRepo'
import { UserControllerInterface } from './controllers_interfaces/UserControllerInterface'
import { UserController } from './controllers/UserController'

const container = new Container()
container.bind<UserRepoInterface>(TYPES.UserRepo).to(UserRepo)
container.bind<UserControllerInterface>(TYPES.UserController).to(UserController)

export default container
