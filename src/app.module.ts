import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo'
import {Module} from '@nestjs/common'
import {GraphQLModule} from '@nestjs/graphql'
import {UserModule} from './modules/user/user.module'

@Module({
  //isso faz o graphql funcionar
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      autoSchemaFile: true,
      playground: false,
      sortSchema: true,
    }),
    UserModule, //Ele esta dentro dos imports porque eu estou importando outro modulo
  ],
})
export class AppModule {}
