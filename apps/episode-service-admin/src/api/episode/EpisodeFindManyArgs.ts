import { EpisodeWhereInput } from "./EpisodeWhereInput";
import { EpisodeOrderByInput } from "./EpisodeOrderByInput";

export type EpisodeFindManyArgs = {
  where?: EpisodeWhereInput;
  orderBy?: Array<EpisodeOrderByInput>;
  skip?: number;
  take?: number;
};
