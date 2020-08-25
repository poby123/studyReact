import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableBody extends PureComponent {
  render() {
    const { children } = this.props;
    const { length } = React.Children.toArray(children);

    //TableBody 컴포넌트도 TableHead 컴포넌트와 유사한 방법으로 자식 프로퍼티를 사용한다.
    //baseLine 프로퍼티를 이용해서 자식 배열의 마지막을 제외한 모든 행에 밑줄을 표시하도록 만들것이다.

    return (
      <tbody>
        {React.Children.map(children, (child, index) => {
          const baseLine = index < length - 1 ? true : false;
          return React.cloneElement(child, { baseLine });
        })}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  children: PropTypes.node,
};

export default TableBody;
