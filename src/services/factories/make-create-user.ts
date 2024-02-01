import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository'
import { UserService } from '../user/users-service'

export const makeCreateUser = () => {
  const userRepository = new PrismaUserRepository()

  const userService = new UserService(userRepository)

  return userService.create
}
