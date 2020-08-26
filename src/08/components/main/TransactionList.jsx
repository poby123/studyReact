import React, { PureComponent } from 'react';
import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';

import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionTable from './TransactionTable';
import Api from '../../Api';

class TransactionList extends PureComponent {
  componentDidMount() {
    Api.get('/transactions').then(({ data }) => this.props.setTransactionList(data));
  }

  render() {
    const { transactions } = this.props; //transaction을 전달받는다.
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilter />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} />
        </Card>
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  setTransactionList: () => {},
};

export default TransactionList;
