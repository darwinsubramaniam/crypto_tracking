/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { CurrencyWhereUniqueInput } from "./CurrencyWhereUniqueInput";
import { CurrencyUpdateInput } from "./CurrencyUpdateInput";

@ArgsType()
class UpdateCurrencyArgs {
  @Field(() => CurrencyWhereUniqueInput, { nullable: false })
  where!: CurrencyWhereUniqueInput;
  @Field(() => CurrencyUpdateInput, { nullable: false })
  data!: CurrencyUpdateInput;
}

export { UpdateCurrencyArgs as UpdateCurrencyArgs };