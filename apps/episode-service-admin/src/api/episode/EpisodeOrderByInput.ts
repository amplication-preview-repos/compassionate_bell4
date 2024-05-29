import { SortOrder } from "../../util/SortOrder";

export type EpisodeOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  liveFrom?: SortOrder;
  speakers?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
