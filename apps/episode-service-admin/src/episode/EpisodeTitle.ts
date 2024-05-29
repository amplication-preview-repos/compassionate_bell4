import { Episode as TEpisode } from "../api/episode/Episode";

export const EPISODE_TITLE_FIELD = "title";

export const EpisodeTitle = (record: TEpisode): string => {
  return record.title?.toString() || String(record.id);
};
