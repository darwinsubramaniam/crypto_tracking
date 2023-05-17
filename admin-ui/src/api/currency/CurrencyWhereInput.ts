import { DepositListRelationFilter } from "../deposit/DepositListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CurrencyWhereInput = {
  deposits?: DepositListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  short?: StringFilter;
};
