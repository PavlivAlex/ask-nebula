import React, { useMemo } from 'react';

// components
import Text from '../../components/Antd/Text';
import { Content } from 'antd/es/layout/layout';
import EmailForm, { FormValuesModel } from '../../components/Forms/TemplateForms/EmailForm';

const EmailFormPage = () => {
  const initialFormValues = useMemo(() => ({ email: '' }), []);

  const onSubmit = (values: FormValuesModel) => {
    console.log(values);
  };
  return (
    <Content>
      <Text size={18} weight={700} color='#333333'>
        Enter your email to see how you can grow with Nebula
      </Text>
      <EmailForm initialFormValues={initialFormValues} onSubmit={onSubmit} />
    </Content>
  );
};

export default EmailFormPage;
