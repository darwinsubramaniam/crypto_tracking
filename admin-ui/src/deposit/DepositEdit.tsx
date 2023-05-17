import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CurrencyTitle } from "../currency/CurrencyTitle";

export const DepositEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
