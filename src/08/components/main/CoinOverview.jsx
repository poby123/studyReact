//CoinOverview 컴포넌트에는 CoinDashlet 컴포넌트를 배치한다.

import React, { PureComponent } from 'react';

import Heading from '../../../doit-ui/Heading';
import InlineList from '../../../doit-ui/InlineList';

import CoinDashlet from './CoinDashlet';

class CoinOverview extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Heading level={3}>코인 동향</Heading>
        <InlineList>
          <CoinDashlet name="비트코인" priceLabel="4,216,000원" />
          <CoinDashlet name="이더리움" priceLabel="216,000원" />
          <CoinDashlet name="두잇 코인" priceLabel="30,000원" />
        </InlineList>
      </React.Fragment>
    );
  }
}

export default CoinOverview;
