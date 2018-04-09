import "reflect-metadata"
import app from './app'
import { createConnection } from 'typeorm'
import { User } from "./entity/User"
import { UserFriend } from "./entity/UserFriend"

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "user",
  password: "password",
  database: "database1",
  entities: [
    User,
    UserFriend
  ],
  synchronize: true,
  logging: false
})
  .then(async connection => {

    const server = app.listen(3000, () => {
      console.log('Server is running at http://localhost:3000')
      console.log('Press CTRL-C to stop \n')
    })

  })
  .catch(error => console.log(error))
