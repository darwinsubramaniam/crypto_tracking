import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DepositTitle } from "../deposit/DepositTitle";

export const CurrencyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="deposits"
          reference="Deposit"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DepositTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="short" source="short" />
      </SimpleForm>
    </Create>
  );
};
