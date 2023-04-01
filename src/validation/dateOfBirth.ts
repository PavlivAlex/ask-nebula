import * as Yup from 'yup';

export const DateOfBirthValidationSchema = Yup.object().shape({
  day: Yup.string().required('Day is required!'),
  year: Yup.string().required('Year is required!'),
  month: Yup.string().required('Month is required!'),
});
