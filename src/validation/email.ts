import * as Yup from 'yup';

export const EmailValidationSchema = Yup.object().shape({
  email: Yup.string().email('Email should be valid!').required('Email is required!'),
});
