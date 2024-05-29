import * as graphql from "@nestjs/graphql";
import { EpisodeResolverBase } from "./base/episode.resolver.base";
import { Episode } from "./base/Episode";
import { EpisodeService } from "./episode.service";

@graphql.Resolver(() => Episode)
export class EpisodeResolver extends EpisodeResolverBase {
  constructor(protected readonly service: EpisodeService) {
    super(service);
  }
}
