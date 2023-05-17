import { Deposit } from "../deposit/Deposit";

export type Currency = {
  createdAt: Date;
  deposits?: Array<Deposit>;
  id: string;
  name: string;
  short: string;
  updatedAt: Date;
};
