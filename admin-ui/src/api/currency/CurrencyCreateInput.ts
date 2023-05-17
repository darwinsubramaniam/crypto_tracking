import { DepositCreateNestedManyWithoutCurrenciesInput } from "./DepositCreateNestedManyWithoutCurrenciesInput";

export type CurrencyCreateInput = {
  deposits?: DepositCreateNestedManyWithoutCurrenciesInput;
  name: string;
  short: string;
};
