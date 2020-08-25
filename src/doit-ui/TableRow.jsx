//TableRow 컴포넌트는 TableHead, TableBody 컴포넌트에서 전달받은 isHeader, baseLine 프로퍼티를 자식 컴포넌트에 그대로 전달한다.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableRow extends PureComponent {
  render() {
    const { children, isHeader, baseLine } = this.props;

    return (
      <tr>
        {React.Children.map(children, (child) => React.cloneElement(child, { baseLine, isHeader }))}
      </tr>
    );
  }
}

TableRow.propTypes = {
  children: PropTypes.node,
  baseLine: PropTypes.bool,
  isHeader: PropTypes.bool,
};

export default TableRow;
