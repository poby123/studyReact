//TableHead 컴포넌트에는 isHeader 프로퍼티를 전달할 것이다.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableHead extends PureComponent {
  render() {
    const { children } = this.props;

    //자식 프로퍼티의 값은 JSX노드이므로 리액트에서 제공하는 React.Children.map() 함수를 사용한다.
    //React.Children.map() 은 자식 프로퍼티에 포함된 JSX의 컴포넌트 요소를 배열로 취급한다.
    //여기서는 React.cloneElement() 를 이용해서 각각의 자식 요소에 추가할 프로퍼티를 전달한다.
    //React.cloneElement() 는 JSX노드를 복사한 다음 특정 프로퍼티를 추가한다.
    return (
      <thead>
        {React.Children.map(children, (child) => React.cloneElement(child, { isHeader: true }))}
      </thead>
    );
  }
}

TableHead.propTypes = {
  children: PropTypes.node,
};

export default TableHead;
