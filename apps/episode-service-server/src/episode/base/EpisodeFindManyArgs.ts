/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EpisodeWhereInput } from "./EpisodeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EpisodeOrderByInput } from "./EpisodeOrderByInput";

@ArgsType()
class EpisodeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EpisodeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EpisodeWhereInput, { nullable: true })
  @Type(() => EpisodeWhereInput)
  where?: EpisodeWhereInput;

  @ApiProperty({
    required: false,
    type: [EpisodeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EpisodeOrderByInput], { nullable: true })
  @Type(() => EpisodeOrderByInput)
  orderBy?: Array<EpisodeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EpisodeFindManyArgs as EpisodeFindManyArgs };
