import { FloatFilter } from "../../util/FloatFilter";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DepositWhereInput = {
  amount?: FloatFilter;
  currency?: CurrencyWhereUniqueInput;
  id?: StringFilter;
};
