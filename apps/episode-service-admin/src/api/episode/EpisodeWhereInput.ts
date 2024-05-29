import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EpisodeWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  liveFrom?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
