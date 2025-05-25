import {Args, Field, ObjectType, Query, Resolver} from '@nestjs/graphql'

@ObjectType()
export class GreetingResponse {
  @Field()
  message: string
}
@Resolver()
export class GreetingResolver {
  @Query(() => GreetingResponse)
  greet(@Args('name', {type: () => String}) name: string): GreetingResponse {
    return {message: `Olá, ${name}!`}
  }
}
