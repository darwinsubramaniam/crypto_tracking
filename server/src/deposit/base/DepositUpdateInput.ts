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
import { IsNumber, IsOptional, ValidateNested } from "class-validator";
import { CurrencyWhereUniqueInput } from "../../currency/base/CurrencyWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class DepositUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number;

  @ApiProperty({
    required: false,
    type: () => CurrencyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CurrencyWhereUniqueInput)
  @IsOptional()
  @Field(() => CurrencyWhereUniqueInput, {
    nullable: true,
  })
  currency?: CurrencyWhereUniqueInput;
}

export { DepositUpdateInput as DepositUpdateInput };
