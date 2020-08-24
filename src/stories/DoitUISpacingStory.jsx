//Spacing 컴포넌트 사용해보기

import React from 'react';
import { storiesOf } from '@storybook/react';
import Spacing from '../doit-ui/Spacing';
import { css } from '../doit-ui/withStyles';

function RedBox({ children }) {
  return <div {...css({ border: '1px solid red', minHeight: 100 })}>{children}</div>;
}

storiesOf('Doit-UI/Spacing', module).addWithJSX('기본 설정', () => (
  <RedBox>
    <Spacing top={1}>
      <RedBox>top : 1</RedBox>
    </Spacing>
    <Spacing bottom={2}>
      <RedBox>bottom : 2</RedBox>
    </Spacing>
    <Spacing left={3}>
      <RedBox>left : 3</RedBox>
    </Spacing>
    <Spacing right={4}>
      <RedBox>right : 4</RedBox>
    </Spacing>
    <Spacing horizontal={5}>
      <RedBox>horizontal : 5</RedBox>
    </Spacing>
    <Spacing vertical={6}>
      <RedBox>vertical : 6</RedBox>
    </Spacing>
  </RedBox>
));
