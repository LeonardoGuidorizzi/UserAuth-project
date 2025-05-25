import {Field, ObjectType, Query, Resolver} from '@nestjs/graphql'

@ObjectType()
export class HelloResponse {
  @Field({nullable: false})
  message: string
}

@Resolver()
export class HelloResolver {
  @Query(() => HelloResponse)
  hello(): HelloResponse {
    return {message: 'Hello World'}
  }
}
