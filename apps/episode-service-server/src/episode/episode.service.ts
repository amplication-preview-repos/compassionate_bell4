import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EpisodeServiceBase } from "./base/episode.service.base";

@Injectable()
export class EpisodeService extends EpisodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
