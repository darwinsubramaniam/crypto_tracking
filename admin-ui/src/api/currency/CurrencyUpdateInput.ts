import { DepositUpdateManyWithoutCurrenciesInput } from "./DepositUpdateManyWithoutCurrenciesInput";

export type CurrencyUpdateInput = {
  deposits?: DepositUpdateManyWithoutCurrenciesInput;
  name?: string;
  short?: string;
};
