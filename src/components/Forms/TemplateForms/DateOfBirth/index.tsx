import React from 'react';
import { DateOfBirthValidationSchema } from '../../../../validation/dateOfBirth';

// components
import Form from '../../Form/index';
import InnerForm from './InnerForm';

export interface FormValuesModel {
  day: string;
  year: string;
  month: string;
}

interface IProps {
  initialFormValues: FormValuesModel;
  onSubmit: (values: FormValuesModel) => void;
}

const DateOfBirthForm = ({ initialFormValues, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      submitText='Next'
      renderForm={<InnerForm />}
      initialValues={initialFormValues}
      validationSchema={DateOfBirthValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default DateOfBirthForm;
