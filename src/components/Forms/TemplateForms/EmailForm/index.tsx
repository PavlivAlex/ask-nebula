import React from 'react';

// helpers
import { EmailValidationSchema } from '../../../../validation/email';

// components
import Form from '../../Form/index';
import InnerForm from './InnerForm';

export interface FormValuesModel {
  email: string;
}

interface IProps {
  initialFormValues: FormValuesModel;
  onSubmit: (values: FormValuesModel) => void;
}

const EmailForm = ({ initialFormValues, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      submitText='Continue'
      renderForm={<InnerForm />}
      initialValues={initialFormValues}
      validationSchema={EmailValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default EmailForm;
