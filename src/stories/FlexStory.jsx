import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Doit-UI/Flex', module).addWithJSX('flexDirection Example', () => (
  <div>
    <h4>flexDirection: 'row'</h4>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ border: '1px solid red', padding: 30 }}>Box1</div>
      <div style={{ border: '1px solid red', paddig: 30 }}>Box2</div>
      <div style={{ border: '1px solid red', padding: 30 }}>Box3</div>
    </div>
    <h4>flexDirection: 'column'</h4>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ border: '1px solid red', padding: 30 }}>Box1</div>
      <div style={{ border: '1px solid red', paddig: 30 }}>Box2</div>
      <div style={{ border: '1px solid red', padding: 30 }}>Box3</div>
    </div>
  </div>
));
