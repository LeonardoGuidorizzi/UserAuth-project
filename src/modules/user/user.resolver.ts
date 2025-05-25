import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { User } from './user.model'

@Resolver()
export class UserResolver {
  @Mutation(()=> User)
  async createUser (@Args("data") data: CreateUserInput ){
    
  }
}
