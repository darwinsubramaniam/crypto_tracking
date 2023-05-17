import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CurrencyTitle } from "../currency/CurrencyTitle";

export const DepositCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="currency.id"
          reference="Currency"
          label="currency"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
