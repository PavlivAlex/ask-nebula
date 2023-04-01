import React, { useEffect, useState } from 'react';

// helpers
import { FormValuesModel } from '..';
import { fillDaysOptions } from '../../../../../helpers/fillArray';
import { useFormikContext } from 'formik';
import { Months, yearsOptions } from '../../../../../constants/time';

// components
import FormField from '../../../FormField';
import Select from '../../../../Antd/Select';

const InnerForm = () => {
  const [daysOptions, setDaysOptions] = useState(fillDaysOptions(31));

  const {
    values: { year, month },
    setFieldValue,
  } = useFormikContext<FormValuesModel>();

  // filling days option array
  useEffect(() => {
    if ([Months.January, Months.March, Months.May, Months.July, Months.August, Months.October, Months.December].includes(month as Months)) {
      setDaysOptions(fillDaysOptions(31));
    } else if (Months.February === month) {
      if (Number(year) % 4 === 0) {
        setDaysOptions(fillDaysOptions(29));
      } else {
        setDaysOptions(fillDaysOptions(28));
      }
    } else {
      setDaysOptions(fillDaysOptions(30));
    }
  }, [year, month]);

  // If we change month - day select changes to 1
  useEffect(() => {
    setFieldValue('day', 1);
  }, [month]);

  return (
    <>
      <FormField
        name='month'
        placeholder='Month'
        component={Select}
        additionalProps={{ options: Object.keys(Months).map(month => ({ value: month, label: month })) }}
      />
      <FormField name='day' placeholder='Day' component={Select} additionalProps={{ options: daysOptions }} />
      <FormField name='year' placeholder='Year' component={Select} additionalProps={{ options: yearsOptions }} />
    </>
  );
};

export default InnerForm;
