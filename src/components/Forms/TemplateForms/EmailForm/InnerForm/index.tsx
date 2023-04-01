import React from 'react';

// helpers
import styled from 'styled-components';

// components
import Text from '../../../../Antd/Text';
import Input from '../../../../Antd/Input';
import FormField from '../../../FormField';

const InnerForm = () => {
  return (
    <>
      <FormField name='email' placeholder='Your email' component={Input} />
      <Text size={12} color='#343434' margin='30px 0 20px 0'>
        {` *Nebula does not share any personal information. We'll email you a copy of your program for convenient access.`}
      </Text>
      <Text size={12} color='#343434' margin='0 0 30px'>
        By continuing I agree with <StyledSpan>Privacy policy</StyledSpan> and <StyledSpan>Terms of use</StyledSpan> .
      </Text>
    </>
  );
};

const StyledSpan = styled.span`
  color: #8e8cf0;
  text-decoration: underline;
  cursor: pointer;
`;

export default InnerForm;
