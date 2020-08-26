//컴포넌트와 동일한 방법으로, 폴더를 추가하여 데이터 컴포넌트를 관리하겠다.

import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
import { setTransactionList } from '../../actions/transactionActions';

//mapStateToProps는 connect함수에 첫번째 인자로 들어가는 함수 또는 객체이다.
//mapStateToProps는 기본적으로 store가 업데이트 될 때마다 호출된다.
//자동을 호출되는 것을 원하지 않는 경우, null 또는 undefined값을 주면 된다.
//mapStateToProps의 첫번째 인자로는 기본적으로 state를 넣어준다.
//이렇게 함으로써 state에 접근할 수 있게 된다.
const mapStateToProps = (state) => {
  const { ids, entities } = state.transactions;
  const transactions = ids.map((id) => entities[id]);

  return { transactions };
};

//mapDispatchToProps는 connect함수의 두번째 인자로 들어간다.
//이것은 기본적으로 store에 접근한 컴포넌트가 store에 상태를 바꾸기 위해
//dispatch를 사용할 수 있게 만들어준다.
//mapDispatchToProps의 첫번째 인자로 일반적으로는 dispatch를 사용한다.
const mapDispatchToProps = {
  setTransactionList,
};

//connect는 Provider 하위 컴포넌트에서 Store에 접근하는 것을 가능하게 해준다.
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
