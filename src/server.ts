import "reflect-metadata";
import "./utils/connection";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import CategoryResolver from './graphQL/category/CategoryResolver';
import VideoResolver from "./graphQL/Video/VideoResolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [CategoryResolver , VideoResolver],
  });

    const server = new ApolloServer({ schema });
    
    server.listen( { port : 4000 } , ()=> {
        console.log('Server is Running...')
    })
}

bootstrap();
