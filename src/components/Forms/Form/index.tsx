import React, { useCallback } from 'react';

// helpers
import styled from 'styled-components';
import { Schema } from 'yup';

// components
import Button from '../../Antd/Button';
import { Form as FormikForm, Formik, FormikHelpers, FormikProps } from 'formik';

export interface RequiredPropsForFormModel<Values> {
  initialValues: Values | null;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<unknown>;
}
interface FormProps<Values> extends RequiredPropsForFormModel<Values> {
  submitText?: string | null;
  renderForm: ((form: FormikProps<Values>) => React.ReactNode) | React.ReactNode;
  validationSchema?: Schema<Values>;
}

function Form<Values = unknown>({ submitText, renderForm, initialValues, validationSchema, onSubmit }: FormProps<Values>) {
  const handleSubmit = useCallback(
    (values: any, formikHelpers: FormikHelpers<any>) => {
      return onSubmit(values, formikHelpers);
    },
    [onSubmit],
  );

  return (
    <Formik
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialValues || ({} as any)}
      validationSchema={validationSchema}
    >
      {(form: FormikProps<any>) => (
        <StyledForm noValidate>
          {typeof renderForm === 'function' ? renderForm(form) : renderForm}
          {submitText && <Button htmlType='submit'>{submitText}</Button>}
        </StyledForm>
      )}
    </Formik>
  );
}

const StyledForm = styled(FormikForm)`
  display: flex;
  width: 100%;
  padding-top: 32px;
  flex-direction: column;
  align-items: center;
  .ant-form-item {
    margin-bottom: 20px;
  }
  button {
    width: 100%;
    height: 48px;
    border: none;
    margin-top: 12px;
    font-size: 18px;
    background: ${({ theme }) => theme.bgGradient};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    span {
      color: white;
    }
    &:hover {
      background: ${({ theme }) => theme.bgGradient};
    }
  }
`;

export default Form;
