import { SortOrder } from "../../util/SortOrder";

export type DepositOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  currencyId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
