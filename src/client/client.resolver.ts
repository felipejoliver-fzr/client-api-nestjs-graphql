import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ClientResolver {
    @Query(() => String)
    get(): string {
        return 'client query'
    }
}
