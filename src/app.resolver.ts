import { Query, Resolver } from '@nestjs/graphql';

@Resolver('App')
export class AppResolver {
    @Query(() => String)
    async greetings(): Promise<string> {
        return `Hello on my awesome GraphQL api !`;
    }
}
