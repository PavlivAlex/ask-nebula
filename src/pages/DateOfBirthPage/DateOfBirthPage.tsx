import React, { useMemo } from 'react';

// helpers
import moment from 'moment';
import { Months } from '../../constants/time';
import { RoutesEnum } from '../../router/routes';
import { StateModel } from '../../redux/reducers';
import { useNavigate } from 'react-router-dom';
import { IDateOfBirth } from '../../redux/reducers/answers';
import { useDispatch, useSelector } from 'react-redux';
import { answers as answersActions } from '../../redux/actions/answers';

// components
import Text from '../../components/Antd/Text';
import { Content } from 'antd/es/layout/layout';
import DateOfBirthForm, { FormValuesModel } from '../../components/Forms/TemplateForms/DateOfBirth';

const DateOfBirthPage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const dateOfBirth = useSelector<StateModel, IDateOfBirth | null>(state => state.answers.dateOfBirth);

  const initialFormValues = useMemo<FormValuesModel>(
    () => ({
      day: dateOfBirth?.day || '31',
      year: dateOfBirth?.year || '2010',
      month: dateOfBirth?.month || Months.January,
    }),
    [dateOfBirth],
  );
  const onSubmit = (values: FormValuesModel) => {
    const dateOfBirth = { day: values.day, month: moment().month(values.month).format('M'), year: values.year };

    dispatch(answersActions.setDateOfBirth(dateOfBirth));
    navigate(RoutesEnum.Loading);
  };
  return (
    <Content>
      <Text size={22} weight={700} color='#1A1A1A'>
        What’s your date of birth?
      </Text>
      <DateOfBirthForm initialFormValues={initialFormValues} onSubmit={onSubmit} />
    </Content>
  );
};

export default DateOfBirthPage;
