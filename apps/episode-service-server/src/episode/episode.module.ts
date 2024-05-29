import { Module } from "@nestjs/common";
import { EpisodeModuleBase } from "./base/episode.module.base";
import { EpisodeService } from "./episode.service";
import { EpisodeController } from "./episode.controller";
import { EpisodeResolver } from "./episode.resolver";

@Module({
  imports: [EpisodeModuleBase],
  controllers: [EpisodeController],
  providers: [EpisodeService, EpisodeResolver],
  exports: [EpisodeService],
})
export class EpisodeModule {}
