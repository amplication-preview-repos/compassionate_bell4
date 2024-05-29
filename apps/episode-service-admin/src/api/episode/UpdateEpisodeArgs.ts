import { EpisodeWhereUniqueInput } from "./EpisodeWhereUniqueInput";
import { EpisodeUpdateInput } from "./EpisodeUpdateInput";

export type UpdateEpisodeArgs = {
  where: EpisodeWhereUniqueInput;
  data: EpisodeUpdateInput;
};
