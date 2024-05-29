import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EpisodeService } from "./episode.service";
import { EpisodeControllerBase } from "./base/episode.controller.base";

@swagger.ApiTags("episodes")
@common.Controller("episodes")
export class EpisodeController extends EpisodeControllerBase {
  constructor(protected readonly service: EpisodeService) {
    super(service);
  }
}
