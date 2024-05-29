/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EpisodeWhereInput } from "./EpisodeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EpisodeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EpisodeWhereInput,
  })
  @ValidateNested()
  @Type(() => EpisodeWhereInput)
  @IsOptional()
  @Field(() => EpisodeWhereInput, {
    nullable: true,
  })
  every?: EpisodeWhereInput;

  @ApiProperty({
    required: false,
    type: () => EpisodeWhereInput,
  })
  @ValidateNested()
  @Type(() => EpisodeWhereInput)
  @IsOptional()
  @Field(() => EpisodeWhereInput, {
    nullable: true,
  })
  some?: EpisodeWhereInput;

  @ApiProperty({
    required: false,
    type: () => EpisodeWhereInput,
  })
  @ValidateNested()
  @Type(() => EpisodeWhereInput)
  @IsOptional()
  @Field(() => EpisodeWhereInput, {
    nullable: true,
  })
  none?: EpisodeWhereInput;
}
export { EpisodeListRelationFilter as EpisodeListRelationFilter };
