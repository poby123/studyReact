import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
import { setTransactionList } from '../../actions/transactionActions';

//여기서는 액션만 전달할 것이므로, 첫번째 인자에 null을 전달한다.
export default connect(null, { setTransactionList })(TransactionSearchFilter);
