import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../04/InputWithStyle';
import withError from '../05/withError';

const InputWithError = withError('올바르지 못한 값입니다')(Input);

storiesOf('With Error', module)
  .addWithJSX('기본 설정', () => <InputWithError name="name" hasError />)
  .addWithJSX('error Message 예제', () => (
    <InputWithError name="name" hasError errorMessage="필수 항목입니다" />
  ));
