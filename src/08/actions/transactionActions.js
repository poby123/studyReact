//서버가 보내준 '거래 목록 정보'를 리덕스 스토어에 저장하려면 먼저 액션이 있어야 한다.
export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';

export function setTransactionList(transactions) {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions,
  };
}
