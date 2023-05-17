import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DepositTitle } from "../deposit/DepositTitle";

export const CurrencyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
